'use client'

import { useState } from 'react'

export default function ChangePasswordForm() {
  const [form, setForm]       = useState({ current: '', newPass: '', confirm: '' })
  const [status, setStatus]   = useState<'idle' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (form.newPass !== form.confirm) {
      setStatus('error')
      setMessage('New passwords do not match.')
      return
    }

    const res = await fetch('/api/admin/change-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ current: form.current, newPass: form.newPass }),
    })

    if (res.ok) {
      setStatus('success')
      setMessage('Password updated successfully.')
      setForm({ current: '', newPass: '', confirm: '' })
    } else {
      const data = await res.json()
      setStatus('error')
      setMessage(data.error || 'Something went wrong.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {['current', 'newPass', 'confirm'].map((field, i) => (
        <div key={field}>
          <label className="block text-xs font-medium text-neutral-500 mb-1.5">
            {['Current Password', 'New Password', 'Confirm New Password'][i]}
          </label>
          <input
            type="password"
            value={form[field as keyof typeof form]}
            onChange={e => setForm(prev => ({ ...prev, [field]: e.target.value }))}
            required
            className="w-full px-4 py-2.5 text-sm bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition"
          />
        </div>
      ))}

      {message && (
        <p className={`text-xs font-medium ${status === 'success' ? 'text-green-600' : 'text-red-500'}`}>
          {message}
        </p>
      )}

      <button
        type="submit"
        className="bg-neutral-900 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-neutral-700 transition-colors"
      >
        Update Password
      </button>
    </form>
  )
}
