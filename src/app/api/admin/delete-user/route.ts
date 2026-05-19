import { NextResponse } from 'next/server'
import { getSession } from '@/lib/cms-auth'
import { readFileSync, writeFileSync, existsSync } from 'fs'
import { join } from 'path'
import { AdminUser } from '@/app/api/admin/add-user/route'

const usersFile = join(process.cwd(), 'data/admin-users.json')

export async function POST(req: Request) {
  const session = await getSession()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { id } = await req.json()

  const users: AdminUser[] = existsSync(usersFile)
    ? JSON.parse(readFileSync(usersFile, 'utf-8'))
    : []

  const filtered = users.filter(u => u.id !== id)
  writeFileSync(usersFile, JSON.stringify(filtered, null, 2))

  return NextResponse.json({ success: true })
}
