import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT || 465),
  secure: Number(process.env.EMAIL_PORT || 465) === 465,

  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

transporter.verify()
  .then(() => {
    console.log('SMTP connection verified successfully')
  })
  .catch((error) => {
    console.error('SMTP verification failed:', {
      message: error.message,
      code: error.code,
      command: error.command,
    })
  })

export default transporter