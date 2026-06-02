'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Trash2, Loader2 } from 'lucide-react'

export default function AdminDelete({ slug, title }: { slug: string; title: string }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  async function handleDelete() {
    if (!confirm(`Delete "${title}"? This cannot be undone.`)) return
    setLoading(true)
    const res = await fetch('/api/cms/delete', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({ filename: slug }),
    })
    if (res.ok) {
      router.refresh()
    } else {
      alert('Delete failed.')
    }
    setLoading(false)
  }

  return (
    <button
      onClick={handleDelete}
      disabled={loading}
      className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center hover:border-red-300 hover:text-red-500 text-neutral-400 transition-all disabled:opacity-50"
    >
      {loading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Trash2 className="w-3.5 h-3.5" />}
    </button>
  )
}
