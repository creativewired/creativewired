import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, company, message } = body

    console.log('📧 Contact form submission received:', { name, email })

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    const supabase = await createClient()

    // 1) Save to database
    console.log('💾 Saving to database...')
    const { data: submission, error: dbError } = await supabase
      .from('contact_submissions')
      .insert([
        {
          name,
          email,
          phone: phone || null,
          company: company || null,
          message,
        },
      ])
      .select()
      .single()

    if (dbError) {
      console.error('❌ Database error:', dbError)
      throw dbError
    }
    console.log('✅ Saved to database:', submission.id)

    // Check if resend is configured
    if (!resend) {
      console.warn('⚠️ Resend not configured, skipping emails')
      return NextResponse.json(
        { 
          message: "Thank you! We'll get back to you soon.",
          data: submission 
        },
        { status: 200 }
      )
    }

    // 2) Send email notification to admin
    console.log('📨 Sending admin notification...')
    try {
      const adminEmail = await resend.emails.send({
        from: 'Creative Wired <connect@creativewired.com>',
        to: [process.env.NEXT_PUBLIC_ADMIN_EMAIL || 'admin@creativewired.agency'],
        subject: `New Contact: ${name} from ${company || 'Website'}`,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(to right, #facc15, #eab308); padding: 20px; border-radius: 8px 8px 0 0; }
                .header h1 { color: #000; margin: 0; font-size: 24px; }
                .content { background: #f9fafb; padding: 20px; border-radius: 0 0 8px 8px; }
                .field { margin-bottom: 15px; }
                .label { font-weight: bold; color: #111827; }
                .value { color: #4b5563; margin-top: 5px; }
                .message-box { background: white; padding: 15px; border-radius: 6px; border-left: 4px solid #facc15; margin-top: 10px; }
                .button { display: inline-block; padding: 12px 24px; background: linear-gradient(to right, #facc15, #eab308); color: #000; text-decoration: none; border-radius: 6px; font-weight: bold; margin-top: 15px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1>📧 New Contact Form Submission</h1>
                </div>
                <div class="content">
                  <div class="field">
                    <div class="label">Name:</div>
                    <div class="value">${name}</div>
                  </div>
                  
                  <div class="field">
                    <div class="label">Email:</div>
                    <div class="value"><a href="mailto:${email}" style="color: #2563eb;">${email}</a></div>
                  </div>
                  
                  ${phone ? `
                  <div class="field">
                    <div class="label">Phone:</div>
                    <div class="value"><a href="tel:${phone}" style="color: #2563eb;">${phone}</a></div>
                  </div>
                  ` : ''}
                  
                  ${company ? `
                  <div class="field">
                    <div class="label">Company:</div>
                    <div class="value">${company}</div>
                  </div>
                  ` : ''}
                  
                  <div class="field">
                    <div class="label">Message:</div>
                    <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
                  </div>
                  
                  <a href="mailto:${email}?subject=Re: Your inquiry to Creative Wired" class="button">Reply to ${name}</a>
                </div>
              </div>
            </body>
          </html>
        `,
      })

      console.log('✅ Admin email sent:', adminEmail.data?.id)
    } catch (emailError: any) {
      console.error('❌ Admin email error:', emailError)
      console.error('Error details:', JSON.stringify(emailError, null, 2))
      // Continue even if email fails
    }

    // 3) Send auto-reply to customer
    console.log('📨 Sending customer auto-reply...')
    try {
      const customerEmail = await resend.emails.send({
        from: 'Creative Wired <connect@creativewired.com>',
        to: [email],
        subject: 'Thank you for contacting Creative Wired',
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(to right, #facc15, #eab308); padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
                .header h1 { color: #000; margin: 0; font-size: 28px; }
                .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
                .button { display: inline-block; padding: 14px 28px; background: linear-gradient(to right, #facc15, #eab308); color: #000; text-decoration: none; border-radius: 6px; font-weight: bold; margin-top: 20px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1>🎉 Thank You, ${name}!</h1>
                </div>
                <div class="content">
                  <p>Hi ${name},</p>
                  
                  <p>Thank you for reaching out to <strong>Creative Wired</strong>! We've received your message and our team will get back to you within 24 hours.</p>
                  
                  <p><strong>Your message:</strong></p>
                  <p style="background: white; padding: 15px; border-radius: 6px; border-left: 4px solid #facc15;">${message.replace(/\n/g, '<br>')}</p>
                  
                  <p>In the meantime, feel free to explore our services.</p>
                  
                  <div style="text-align: center;">
                    <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'https://creativewired.agency'}/services" class="button">View Our Services</a>
                  </div>
                  
                  <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                    <p style="margin: 0;"><strong>Creative Wired</strong></p>
                    <p style="color: #6b7280; font-size: 14px;">Transforming your digital presence</p>
                  </div>
                </div>
              </div>
            </body>
          </html>
        `,
      })

      console.log('✅ Customer email sent:', customerEmail.data?.id)
    } catch (emailError: any) {
      console.error('❌ Customer email error:', emailError)
      console.error('Error details:', JSON.stringify(emailError, null, 2))
    }

    return NextResponse.json(
      { 
        message: "Thank you! We'll get back to you soon.",
        data: submission 
      },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('❌ Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to submit form. Please try again.' },
      { status: 500 }
    )
  }
}
