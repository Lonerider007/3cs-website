'use server'

import nodemailer from 'nodemailer'
import { z } from 'zod'
import { type ContactFormData } from '@/types'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().min(1, 'Company name is required'),
  service: z.string().min(1, 'Please select a service'),
  brief: z.string().min(20, 'Please provide at least 20 characters describing your project'),
})

const TO_EMAIL = 'samsungsumitv461@gmail.com'

export async function sendContactEmail(
  data: ContactFormData,
): Promise<{ success: boolean; error?: string }> {
  const parsed = contactSchema.safeParse(data)
  if (!parsed.success) {
    return { success: false, error: parsed.error.issues[0]?.message ?? 'Validation failed' }
  }

  const { name, email, company, service, brief } = parsed.data

  const gmailUser = process.env.GMAIL_USER
  const gmailPass = process.env.GMAIL_APP_PASSWORD

  if (!gmailUser || !gmailPass) {
    return { success: false, error: 'Email service is not configured. Please contact us directly.' }
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: { user: gmailUser, pass: gmailPass },
  })

  try {
    await transporter.sendMail({
      from: gmailUser,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New enquiry from ${name} — ${service}`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; color: #1D1D1F;">
          <h2 style="margin: 0 0 24px; font-size: 20px; font-weight: 700;">New Contact Enquiry — 3Cs AI Innovations</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #6E6E73; width: 120px;">Name</td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${name}</td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #6E6E73;">Email</td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;"><a href="mailto:${email}" style="color: #0071E3;">${email}</a></td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #6E6E73;">Company</td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${company}</td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #6E6E73;">Service</td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${service}</td></tr>
          </table>
          <h3 style="margin: 24px 0 8px; font-size: 15px; color: #6E6E73; font-weight: 600;">Project Brief</h3>
          <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${brief}</p>
          <hr style="margin: 32px 0; border: none; border-top: 1px solid #f0f0f0;" />
          <p style="margin: 0; font-size: 12px; color: #86868B;">Sent from 3Cs AI Innovations website · ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</p>
        </div>
      `,
    })
    return { success: true }
  } catch (err) {
    console.error('Contact form send error:', err)
    return { success: false, error: 'Failed to send message. Please try again or email us directly.' }
  }
}
