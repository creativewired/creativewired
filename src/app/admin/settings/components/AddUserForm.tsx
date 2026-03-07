'use client'

import { useState } from 'react'

const PERMISSIONS = [
  { key: 'create_post',  label: 'Create Posts'  },
  { key: 'edit_post',    label: 'Edit Posts'    },
  { key: 'delete_post',  label: 'Delete Posts'  },
  { key: 'manage_users', label: 'Manage Users'  },
  { key: 'settings',     label: 'Settings'      },
]

const ROLE_PRESETS: Record<string, string[]> = {
  admin:  ['create_post', 'edit_post', 'delete_post', 'manage_users', 'settings'],
  editor: ['create_post', 'edit_post'],
  viewer: [],
}

export default function AddUserForm() {
  const [form, setForm] = useState({
    name:        '',
    username:    '',
    password:    '',
    role:        'editor',
    permissions: ROLE_PRESETS['editor'],
  })
  const [status,  setStatus]  = useState<'idle' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleRoleChange = (role: string) => {
    setForm(prev => ({ ...prev, role, permissions: ROLE_PRESETS[role] || [] }))
  }

  const togglePermission = (key: string) => {
    setForm(prev => ({
      ...prev,
      permissions: prev.permissions.includes(key)
        ? prev.permissions.filter(p => p !== key)
        : [...prev.permissions, key],
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const res = await fetch('/api/admin/add-user', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify(form),
    })

    if (res.ok) {
      setStatus('success')
      setMessage(`User "${form.name}" added successfully.`)
      setForm({ name: '', username: '', password: '', role: 'editor', permissions: ROLE_PRESETS['editor'] })
    } else {
      const data = await res.json()
      setStatus('error')
      setMessage(data.error || 'Something went wrong.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">

      {/* Name + Username */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-neutral-500 mb-1.5">Full Name</label>
          <input
            type="text"
            value={form.name}
            onChange={e => setForm(prev => ({ ...prev, name: e.target.value }))}
            placeholder="e.g. John Doe"
            required
            className="w-full px-4 py-2.5 text-sm bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-neutral-500 mb-1.5">Username</label>
          <input
            type="text"
            value={form.username}
            onChange={e => setForm(prev => ({ ...prev, username: e.target.value }))}
            placeholder="e.g. johndoe"
            required
            className="w-full px-4 py-2.5 text-sm bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition"
          />
        </div>
      </div>

      {/* Password */}
      <div>
        <label className="block text-xs font-medium text-neutral-500 mb-1.5">Password</label>
        <input
          type="password"
          value={form.password}
          onChange={e => setForm(prev => ({ ...prev, password: e.target.value }))}
          placeholder="Strong password"
          required
          className="w-full px-4 py-2.5 text-sm bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition"
        />
      </div>

      {/* Role */}
      <div>
        <label className="block text-xs font-medium text-neutral-500 mb-2">Role</label>
        <div className="flex gap-2">
          {Object.keys(ROLE_PRESETS).map(role => (
            <button
              key={role}
              type="button"
              onClick={() => handleRoleChange(role)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium capitalize transition-colors ${
                form.role === role
                  ? 'bg-neutral-900 text-white'
                  : 'bg-neutral-100 text-neutral-500 hover:bg-neutral-200'
              }`}
            >
              {role}
            </button>
          ))}
        </div>
      </div>

      {/* Permissions */}
      <div>
        <label className="block text-xs font-medium text-neutral-500 mb-2">Permissions</label>
        <div className="grid grid-cols-2 gap-2">
          {PERMISSIONS.map(({ key, label }) => (
            <label
              key={key}
              className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl border cursor-pointer transition-colors ${
                form.permissions.includes(key)
                  ? 'border-neutral-900 bg-neutral-50'
                  : 'border-neutral-200 bg-white hover:bg-neutral-50'
              }`}
            >
              <input
                type="checkbox"
                checked={form.permissions.includes(key)}
                onChange={() => togglePermission(key)}
                className="accent-neutral-900 w-3.5 h-3.5"
              />
              <span className="text-xs font-medium text-neutral-700">{label}</span>
            </label>
          ))}
        </div>
      </div>

      {message && (
        <p className={`text-xs font-medium ${status === 'success' ? 'text-green-600' : 'text-red-500'}`}>
          {message}
        </p>
      )}

      <button
        type="submit"
        className="bg-neutral-900 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-neutral-700 transition-colors"
      >
        Add User
      </button>
    </form>
  )
}
