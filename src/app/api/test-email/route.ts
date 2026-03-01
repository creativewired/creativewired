import { Resend } from 'resend'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    
    console.log('API Key exists:', !!process.env.RESEND_API_KEY)
    console.log('API Key preview:', process.env.RESEND_API_KEY?.substring(0, 10) + '...')
    
    const result = await resend.emails.send({
      from: 'Creative Wired <onboarding@resend.dev>', // Use this for testing
      to: [process.env.NEXT_PUBLIC_ADMIN_EMAIL || 'your-test-email@gmail.com'],
      subject: 'Test Email from Creative Wired',
      html: '<h1>Test Email</h1><p>If you receive this, Resend is working!</p>',
    })

    return NextResponse.json({ 
      success: true, 
      result,
      message: 'Email sent! Check your inbox.' 
    })
  } catch (error: any) {
    console.error('Test email error:', error)
    return NextResponse.json({ 
      success: false, 
      error: error.message,
      details: error
    }, { status: 500 })
  }
}
