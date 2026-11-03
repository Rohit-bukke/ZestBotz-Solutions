import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'

import contactRoutes from './routes/contactRoutes.js'
import careerRoutes from './routes/careerRoutes.js'
import bookingRoutes from './routes/bookingRoutes.js'
import zohoAuthRoutes from './routes/zohoAuthRoutes.js'

const app = express()
const PORT = Number(process.env.PORT) || 5000
const isProd = process.env.NODE_ENV === 'production'

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        imgSrc: ["'self'", 'data:', 'https:'],
        connectSrc: ["'self'"],
        fontSrc: ["'self'", 'data:'],
        objectSrc: ["'none'"],
        frameAncestors: ["'none'"],
        baseUri: ["'self'"],
        formAction: ["'self'"],
      },
    },
    hsts: {
      maxAge: 31536000,
      includeSubDomains: true,
      preload: false,
    },
    referrerPolicy: {
      policy: 'strict-origin-when-cross-origin',
    },
  })
)

// Permissions-Policy header for least-privilege defense
app.use((_req, res, next) => {
  res.setHeader(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), browsing-topics=(), payment=(), usb=(), vr=(), interest-cohort=()'
  )
  next()
})

const allowedOrigins = process.env.CLIENT_URL
  ? process.env.CLIENT_URL.split(',').map((origin) => origin.trim())
  : [
      'https://zestbotz.com',
      'https://www.zestbotz.com',
      ...(!isProd ? ['http://localhost:5173', 'http://localhost:3000'] : []),
    ]

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (such as mobile apps, curl, or same-origin server requests)
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true)
      }
      return callback(new Error('Blocked by CORS policy.'))
    },
  })
)

app.use(express.json({ limit: '20kb' }))

const formLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many submissions. Please try again later.',
  },
})

const availabilityLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 60,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many availability requests. Please try again later.',
  },
})

const bookingLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many bookings attempted. Please try again later.',
  },
})

const healthHandler = (_req, res) => {
  res.json({
    success: true,
    message: 'ZestBotz backend is running.',
    timestamp: new Date().toISOString(),
  })
}

app.get('/api/health', healthHandler)
app.get('/health', healthHandler)

app.use('/api/contact', formLimiter, contactRoutes)
app.use('/api/careers', formLimiter, careerRoutes)

app.use('/api/bookings', (req, res, next) => {
  if (req.method === 'GET' && (req.path === '/availability' || req.path === '/available-slots')) {
    return availabilityLimiter(req, res, next)
  }

  if (req.method === 'POST' && req.path === '/') {
    return bookingLimiter(req, res, next)
  }

  return next()
}, bookingRoutes)

app.use('/api/zoho', zohoAuthRoutes)

app.use((err, _req, res, _next) => {
  console.error('Server error:', err)

  res.status(500).json({
    success: false,
    message: 'An unexpected server error occurred.',
  })
})

app.listen(PORT, () => {
  console.log(`Backend service listening on port ${PORT}`)
})
