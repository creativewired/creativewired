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

  const res = NextResponse.json({ success: true })
  res.cookies.set('cms_token', token, {
    httpOnly: true,
    secure:   process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge:   60 * 60 * 24 * 7, // 7 days
    path:     '/',
  })
  return res
}
