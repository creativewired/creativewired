import { NextResponse } from 'next/server'
import { getSession } from '@/lib/cms-auth'
import { readFileSync, writeFileSync, existsSync } from 'fs'
import { join } from 'path'
import bcrypt from 'bcryptjs'

const usersFile = join(process.cwd(), 'data/admin-users.json')

export type AdminUser = {
  id:          string
  name:        string
  username:    string
  password:    string
  role:        'admin' | 'editor' | 'viewer'
  permissions: string[]
  createdAt:   string
}

export async function POST(req: Request) {
  const session = await getSession()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { name, username, password, role, permissions } = await req.json()

  if (!name || !username || !password || !role) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 })
  }

  const users: AdminUser[] = existsSync(usersFile)
    ? JSON.parse(readFileSync(usersFile, 'utf-8'))
    : []

  if (users.find(u => u.username === username)) {
    return NextResponse.json({ error: 'Username already exists.' }, { status: 400 })
  }

  const newUser: AdminUser = {
    id:          crypto.randomUUID(),
    name,
    username,
    password:    await bcrypt.hash(password, 10),
    role,
    permissions: permissions || [],
    createdAt:   new Date().toISOString(),
  }

  users.push(newUser)
  writeFileSync(usersFile, JSON.stringify(users, null, 2))

  return NextResponse.json({ success: true })
}
