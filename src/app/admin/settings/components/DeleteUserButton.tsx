'use client'

import { Trash2 } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function DeleteUserButton({ id, name }: { id: string; name: string }) {
  const router = useRouter()

  const handleDelete = async () => {
    if (!confirm(`Remove "${name}" from admin access?`)) return

    await fetch('/api/admin/delete-user', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({ id }),
    })

    router.refresh()
  }

  return (
    <button
      onClick={handleDelete}
      className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 hover:border-red-300 hover:text-red-500 transition-all flex-shrink-0"
    >
      <Trash2 className="w-3.5 h-3.5" />
    </button>
  )
}
