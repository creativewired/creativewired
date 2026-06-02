import { NextResponse } from 'next/server'
import { getSession } from '@/lib/cms-auth'

export async function POST(req: Request) {
  const session = await getSession()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { current, newPass } = await req.json()

  // Replace this check with however you verify the current password in cms-auth
  if (current !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Current password is incorrect.' }, { status: 400 })
  }

  // Passwords are stored in env — prompt user to update .env manually
  // Or integrate with your cms-auth update logic here
  return NextResponse.json({ success: true })
}
