
import { Router } from 'express'
import { getZohoAuthUrl } from '../config/zohoCalendar.js'

const router = Router()

router.get('/auth', (_req, res) => {
  if (
    !process.env.ZOHO_CLIENT_ID ||
    !process.env.ZOHO_CLIENT_SECRET ||
    !process.env.ZOHO_REDIRECT_URI
  ) {
    return res.status(500).send(
      'Zoho OAuth environment variables are missing.'
    )
  }

  return res.redirect(getZohoAuthUrl())
})

router.get('/callback', async (req, res) => {
  try {
    const { code, error } = req.query

    if (error || typeof code !== 'string') {
      return res.status(400).send(
        'Zoho authorization was cancelled or failed.'
      )
    }

    const response = await fetch(
      'https://accounts.zoho.in/oauth/v2/token',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          grant_type: 'authorization_code',
          client_id: process.env.ZOHO_CLIENT_ID,
          client_secret: process.env.ZOHO_CLIENT_SECRET,
          redirect_uri: process.env.ZOHO_REDIRECT_URI,
          code,
        }),
      }
    )

    const tokens = await response.json()

    if (!response.ok || tokens.error) {
      console.error(
        'Zoho token exchange failed:',
        tokens.error || response.status
      )

      return res.status(400).send(
        'Zoho token exchange failed. Check your OAuth configuration and backend terminal.'
      )
    }

    if (!tokens.refresh_token) {
      return res.status(400).send(
        'No refresh token returned. Check OAuth scopes and authorization settings.'
      )
    }

    // Local setup only. Never commit or share this token.
    console.log('\nZOHO_REFRESH_TOKEN=' + tokens.refresh_token + '\n')

    return res.send(
      'Zoho authorization succeeded. Copy the refresh token from your backend terminal into Backend/.env. Do not share it.'
    )
  } catch (err) {
    console.error('Zoho OAuth error:', err.message)

    return res.status(500).send(
      'Zoho authorization failed.'
    )
  }
})

export default router
