'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Plus, Edit, Trash2, Eye, Calendar, Loader2, FileText } from 'lucide-react'

type Post = {
  slug:        string
  title:       string
  category:    string
  date:        string
  featured:    boolean
  readingTime: string
}

export default function PostsPage() {
  const [posts,    setPosts]    = useState<Post[]>([])
  const [loading,  setLoading]  = useState(true)
  const [filter,   setFilter]   = useState<'all' | 'featured' | 'general'>('all')
  const [deleting, setDeleting] = useState<string | null>(null)

  async function fetchPosts() {
    setLoading(true)
    const res  = await fetch('/api/cms/posts')
    const data = await res.json()
    setPosts(data.posts ?? [])
    setLoading(false)
  }

  useEffect(() => { fetchPosts() }, [])

  async function handleDelete(slug: string, title: string) {
    if (!confirm(`Delete "${title}"? This cannot be undone.`)) return
    setDeleting(slug)
    const res = await fetch('/api/cms/delete', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({ filename: slug }),
    })
    if (res.ok) setPosts(p => p.filter(post => post.slug !== slug))
    else alert('Delete failed.')
    setDeleting(null)
  }

  const filteredPosts = posts.filter(p => {
    if (filter === 'featured') return p.featured
    if (filter === 'general')  return !p.featured
    return true
  })

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f5f5f7] flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-6 h-6 animate-spin text-neutral-400 mx-auto mb-3" />
          <p className="text-sm text-neutral-400">Loading posts…</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#f5f5f7]">

      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-neutral-200/60 px-5 md:px-8 py-4 sticky top-0 z-40 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FileText className="w-4 h-4 text-neutral-400" />
          <span className="text-sm font-semibold text-neutral-900">Blog Posts</span>
        </div>
        <Link
          href="/admin/new"
          className="inline-flex items-center gap-1.5 bg-neutral-900 text-white text-xs font-medium px-4 py-2 rounded-full hover:bg-neutral-700 transition-colors"
        >
          <Plus className="w-3.5 h-3.5" />
          New Post
        </Link>
      </header>

      <main className="max-w-5xl mx-auto px-5 md:px-8 py-8 space-y-5">

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: 'Total Posts', value: posts.length },
            { label: 'Featured',    value: posts.filter(p => p.featured).length },
            { label: 'Categories',  value: new Set(posts.map(p => p.category)).size },
          ].map((s, i) => (
            <div key={i} className="bg-white rounded-2xl border border-neutral-200/60 shadow-sm p-4">
              <div className="text-2xl font-bold text-neutral-900">{s.value}</div>
              <div className="text-[11px] text-neutral-400 mt-0.5 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Posts list */}
        <div className="bg-white rounded-2xl border border-neutral-200/60 shadow-sm overflow-hidden">

          {/* Filter tabs */}
          <div className="px-6 py-3 border-b border-neutral-100 flex items-center gap-1">
            {(['all', 'featured', 'general'] as const).map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium capitalize transition-colors ${
                  filter === f
                    ? 'bg-neutral-900 text-white'
                    : 'text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900'
                }`}
              >
                {f === 'all'
                  ? `All (${posts.length})`
                  : f === 'featured'
                  ? `Featured (${posts.filter(p => p.featured).length})`
                  : `General (${posts.filter(p => !p.featured).length})`}
              </button>
            ))}
          </div>

          {filteredPosts.length === 0 ? (
            <div className="px-6 py-14 text-center">
              <p className="text-sm text-neutral-400 mb-3">
                {filter === 'all' ? 'No posts yet.' : `No ${filter} posts.`}
              </p>
              <Link
                href="/admin/new"
                className="inline-flex items-center gap-2 text-sm text-neutral-900 font-medium hover:gap-3 transition-all"
              >
                <Plus className="w-4 h-4" /> Create your first post
              </Link>
            </div>
          ) : (
            <div className="divide-y divide-neutral-100">
              {filteredPosts.map(post => (
                <div key={post.slug} className="px-6 py-4 flex items-center justify-between gap-4 hover:bg-neutral-50 transition-colors">

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-sm font-semibold text-neutral-900 truncate">{post.title}</span>
                      {post.featured && (
                        <span className="text-[9px] bg-neutral-100 text-neutral-500 px-1.5 py-0.5 rounded-full uppercase tracking-wider flex-shrink-0">
                          Featured
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-3 text-[11px] text-neutral-400">
                      <span>{post.category || 'Uncategorized'}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </span>
                      <span>·</span>
                      <span>{post.readingTime}</span>
                      <span>·</span>
                      <span className="font-mono">/blog/{post.slug}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    <Link
                      href={`/blog/${post.slug}`}
                      target="_blank"
                      className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 hover:border-neutral-900 hover:text-neutral-900 transition-all"
                      title="View Post"
                    >
                      <Eye className="w-3.5 h-3.5" />
                    </Link>
                    <Link
                      href={`/admin/edit/${post.slug}`}
                      className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 hover:border-neutral-900 hover:text-neutral-900 transition-all"
                      title="Edit Post"
                    >
                      <Edit className="w-3.5 h-3.5" />
                    </Link>
                    <button
                      onClick={() => handleDelete(post.slug, post.title)}
                      disabled={deleting === post.slug}
                      className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 hover:border-red-300 hover:text-red-500 transition-all disabled:opacity-40"
                      title="Delete Post"
                    >
                      {deleting === post.slug
                        ? <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        : <Trash2 className="w-3.5 h-3.5" />
                      }
                    </button>
                  </div>

                </div>
              ))}
            </div>
          )}
        </div>

      </main>
    </div>
  )
}
