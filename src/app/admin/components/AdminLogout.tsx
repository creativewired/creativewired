'use client'

import { useRouter } from 'next/navigation'
import { LogOut } from 'lucide-react'

export default function AdminLogout() {
  const router = useRouter()

  async function handleLogout() {
    await fetch('/api/cms/logout', { method: 'POST' })
    router.push('/admin/login')
  }

  return (
    <button
      onClick={handleLogout}
      className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center hover:border-neutral-400 text-neutral-400 hover:text-neutral-900 transition-all"
    >
      <LogOut className="w-3.5 h-3.5" />
    </button>
  )
}
