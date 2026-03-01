'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Plus, Edit, Trash2, Eye, Calendar, Loader2 } from 'lucide-react'

type Post = {
  slug:        string
  title:       string
  category:    string
  date:        string
  featured:    boolean
  readingTime: string
}

export default function PostsPage() {
  const [posts,   setPosts]   = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [filter,  setFilter]  = useState<'all' | 'featured' | 'general'>('all')
  const [deleting, setDeleting] = useState<string | null>(null)

  async function fetchPosts() {
    setLoading(true)
    // Read posts from GitHub via API
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
    if (res.ok) {
      setPosts(p => p.filter(post => post.slug !== slug))
    } else {
      alert('Delete failed.')
    }
    setDeleting(null)
  }

  const filteredPosts = posts.filter(p => {
    if (filter === 'featured') return p.featured
    if (filter === 'general')  return !p.featured
    return true
  })

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500 mx-auto mb-4" />
          <p className="text-gray-600">Loading posts...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-black">All Posts</h1>
          <p className="text-gray-600">Manage your blog posts</p>
        </div>
        <Link
          href="/admin/posts/new"
          className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-3 rounded-lg hover:scale-105 transition-transform flex items-center space-x-2"
        >
          <Plus className="w-5 h-5" />
          <span>New Post</span>
        </Link>
      </div>

      {/* Filter Tabs */}
      <div className="flex space-x-4 border-b border-gray-200">
        {(['all', 'featured', 'general'] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 border-b-2 font-medium transition-colors capitalize ${
              filter === f
                ? 'border-yellow-500 text-yellow-600'
                : 'border-transparent text-gray-600 hover:text-black'
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

      {/* Posts Table */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        {filteredPosts.length > 0 ? (
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                {['Title', 'Category', 'Featured', 'Date', 'Read Time', 'Actions'].map(h => (
                  <th key={h} className={`px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider ${h === 'Actions' ? 'text-right' : 'text-left'}`}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredPosts.map((post) => (
                <tr key={post.slug} className="hover:bg-gray-50">

                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-black">{post.title}</div>
                    <div className="text-xs text-gray-400 font-mono mt-0.5">/blog/{post.slug}</div>
                  </td>

                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                      {post.category || 'Uncategorized'}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    {post.featured ? (
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full">Featured</span>
                    ) : (
                      <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-full">No</span>
                    )}
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>
                        {new Date(post.date).toLocaleDateString('en-GB', {
                          day: 'numeric', month: 'short', year: 'numeric',
                        })}
                      </span>
                    </div>
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-500">
                    {post.readingTime}
                  </td>

                  <td className="px-6 py-4 text-right space-x-1">
                    <Link
                      href={`/blog/${post.slug}`}
                      target="_blank"
                      className="inline-flex items-center px-3 py-1.5 text-sm text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
                      title="View Post"
                    >
                      <Eye className="w-4 h-4" />
                    </Link>
                    <Link
                      href={`/admin/posts/${post.slug}`}
                      className="inline-flex items-center px-3 py-1.5 text-sm text-yellow-600 hover:text-yellow-700 hover:bg-yellow-50 rounded-lg transition-colors"
                      title="Edit Post"
                    >
                      <Edit className="w-4 h-4" />
                    </Link>
                    <button
                      onClick={() => handleDelete(post.slug, post.title)}
                      disabled={deleting === post.slug}
                      className="inline-flex items-center px-3 py-1.5 text-sm text-red-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-40"
                      title="Delete Post"
                    >
                      {deleting === post.slug
                        ? <Loader2 className="w-4 h-4 animate-spin" />
                        : <Trash2 className="w-4 h-4" />
                      }
                    </button>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 mb-4">
              {filter === 'all' ? 'No posts yet' : `No ${filter} posts`}
            </p>
            <Link href="/admin/posts/new" className="text-yellow-600 hover:text-yellow-700 font-medium">
              Create your first post →
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
