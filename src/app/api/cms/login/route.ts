import { NextRequest, NextResponse } from 'next/server'
import { signToken } from '@/lib/cms-auth'

export async function POST(req: NextRequest) {
  const { username, password } = await req.json()

  if (
    username !== process.env.CMS_USERNAME ||
    password !== process.env.CMS_PASSWORD
  ) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
  }

  const token = await signToken({ username })
  const response = NextResponse.json({ success: true })

  response.cookies.set('cms_token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',  // ✅ HTTPS only in prod
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: '/',
  })

  return response
}
