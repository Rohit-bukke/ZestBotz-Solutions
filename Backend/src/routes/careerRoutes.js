import { Router } from 'express'
import transporter from '../config/mailer.js'

const router = Router()

const allowedRoles = [
  'AI Automation Intern',
  'Web Development Intern',
  'Data Analytics Intern',
  'General application',
]

const allowedExperience = [
  'Student / Fresher',
  'Less than 1 year',
  '1–3 years',
  '3+ years',
]

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function isValidHttpUrl(value) {
  try {
    const url = new URL(value)

    return url.protocol === 'https:' || url.protocol === 'http:'
  } catch {
    return false
  }
}

router.post('/apply', async (req, res) => {
  try {
    const {
      name,
      email,
      phone = '',
      role,
      experience,
      resumeLink,
      portfolio = '',
      message = '',
    } = req.body ?? {}

    if (
      ![name, email, role, experience, resumeLink].every(
        (value) => typeof value === 'string'
      ) ||
      !name.trim() ||
      !email.trim() ||
      !role.trim() ||
      !experience.trim() ||
      !resumeLink.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: 'Please complete all required fields.',
      })
    }

    if (
      typeof phone !== 'string' ||
      typeof portfolio !== 'string' ||
      typeof message !== 'string'
    ) {
      return res.status(400).json({
        success: false,
        message: 'Invalid form data.',
      })
    }

    if (
      name.length > 120 ||
      email.length > 254 ||
      phone.length > 30 ||
      resumeLink.length > 1000 ||
      portfolio.length > 1000 ||
      message.length > 3000
    ) {
      return res.status(400).json({
        success: false,
        message: 'One or more fields are too long.',
      })
    }

    if (!emailPattern.test(email.trim())) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a valid email address.',
      })
    }

    if (!allowedRoles.includes(role)) {
      return res.status(400).json({
        success: false,
        message: 'Please select a valid role.',
      })
    }

    if (!allowedExperience.includes(experience)) {
      return res.status(400).json({
        success: false,
        message: 'Please select a valid experience level.',
      })
    }

    if (!isValidHttpUrl(resumeLink.trim())) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid resume link.',
      })
    }

    if (portfolio.trim() && !isValidHttpUrl(portfolio.trim())) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid portfolio link.',
      })
    }

    await transporter.sendMail({
      from: `"ZestBotz Careers" <${process.env.EMAIL_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email.trim(),
      subject: `Career application: ${role}`,
      text: `
New career application from the ZestBotz website

Name: ${name.trim()}
Email: ${email.trim()}
Phone: ${phone.trim() || 'Not provided'}
Position: ${role}
Experience: ${experience}

Resume link: ${resumeLink.trim()}
Portfolio / GitHub / LinkedIn: ${portfolio.trim() || 'Not provided'}

Additional information:
${message.trim() || 'Not provided'}
      `,
    })

    return res.status(200).json({
      success: true,
      message: 'Application submitted successfully. Thank you for your interest!',
    })
  } catch (error) {
    console.error('Career application email failed:', error.message)

    return res.status(500).json({
      success: false,
      message: 'Unable to submit your application. Please try again later.',
    })
  }
})

export default router