
import 'dotenv/config'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT || 465),
  secure: Number(process.env.EMAIL_PORT || 465) === 465,

  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },

  connectionTimeout: 10000,
  greetingTimeout: 10000,
  socketTimeout: 20000,
})

async function testEmail() {
  try {
    console.log('Checking SMTP connection...')

    await transporter.verify()

    console.log('SMTP connection verified!')

    const info = await transporter.sendMail({
      from: `"ZestBotz Test" <${process.env.EMAIL_FROM}>`,
      to: process.env.CONTACT_EMAIL,
      subject: 'ZestBotz SMTP Test',
      text: 'Congratulations! Your local Zoho SMTP configuration is working.',
    })

    console.log('Email sent successfully!')
    console.log('Message ID:', info.messageId)
  } catch (error) {
    console.error('SMTP TEST FAILED:', {
      message: error.message,
      code: error.code,
      command: error.command,
      responseCode: error.responseCode,
    })
  } finally {
    transporter.close()
  }
}

testEmail()
