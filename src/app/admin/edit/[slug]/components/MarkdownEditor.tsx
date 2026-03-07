'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import '@uiw/react-md-editor/markdown-editor.css'
import '@uiw/react-markdown-preview/markdown.css'

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false })

interface Props {
  initialContent: string
  slug:           string
  onSave?:        () => void
}

export default function MarkdownEditor({ initialContent, slug, onSave }: Props) {
  const [content, setContent] = useState(initialContent)
  const [status,  setStatus]  = useState<'idle' | 'saving' | 'success' | 'error'>('idle')

  const handleSave = async () => {
    setStatus('saving')

    const res = await fetch(`/api/admin/posts/${slug}/content`, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({ content }),
    })

    if (res.ok) {
      setStatus('success')
      onSave?.()
      setTimeout(() => setStatus('idle'), 2000)
    } else {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 2000)
    }
  }

  return (
    <div className="space-y-4">
      <div data-color-mode="light">
        <MDEditor
          value={content}
          onChange={val => setContent(val ?? '')}
          height={600}
          preview="live"
          style={{
            borderRadius: '16px',
            overflow:     'hidden',
            border:       '1px solid #e5e5e5',
            fontSize:     '14px',
          }}
        />
      </div>

      <div className="flex items-center justify-end gap-3">
        {status === 'success' && (
          <p className="text-xs font-medium text-green-600">Saved successfully.</p>
        )}
        {status === 'error' && (
          <p className="text-xs font-medium text-red-500">Failed to save.</p>
        )}
        <button
          onClick={handleSave}
          disabled={status === 'saving'}
          className="bg-neutral-900 text-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-neutral-700 disabled:opacity-50 transition-colors"
        >
          {status === 'saving' ? 'Saving...' : 'Save Changes'}
        </button>
      </div>
    </div>
  )
}
