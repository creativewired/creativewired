'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import Link from 'next/link'
import { Plus, Edit, Trash2, Eye, Calendar } from 'lucide-react'
import { format } from 'date-fns'

export default function PostsPage() {
  const router = useRouter()
  const supabase = createClient()
  const [posts, setPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<'all' | 'published' | 'draft'>('all')

  useEffect(() => {
    fetchPosts()
  }, [])

  async function fetchPosts() {
    try {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      setPosts(data || [])
    } catch (error) {
      console.error('Error fetching posts:', error)
    } finally {
      setLoading(false)
    }
  }

  async function handleDelete(postId: string) {
    if (!confirm('Are you sure you want to delete this post? This action cannot be undone.')) {
      return
    }

    try {
      const { error } = await supabase
        .from('posts')
        .delete()
        .eq('id', postId)

      if (error) throw error

      alert('Post deleted successfully!')
      fetchPosts() // Refresh the list
    } catch (error) {
      console.error('Error deleting post:', error)
      alert('Error deleting post. Please try again.')
    }
  }

  const filteredPosts = posts.filter(post => {
    if (filter === 'all') return true
    return post.status === filter
  })

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500 mx-auto mb-4"></div>
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
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 border-b-2 ${
            filter === 'all'
              ? 'border-yellow-500 text-yellow-600'
              : 'border-transparent text-gray-600 hover:text-black'
          } font-medium transition-colors`}
        >
          All ({posts.length})
        </button>
        <button
          onClick={() => setFilter('published')}
          className={`px-4 py-2 border-b-2 ${
            filter === 'published'
              ? 'border-yellow-500 text-yellow-600'
              : 'border-transparent text-gray-600 hover:text-black'
          } font-medium transition-colors`}
        >
          Published ({posts.filter(p => p.status === 'published').length})
        </button>
        <button
          onClick={() => setFilter('draft')}
          className={`px-4 py-2 border-b-2 ${
            filter === 'draft'
              ? 'border-yellow-500 text-yellow-600'
              : 'border-transparent text-gray-600 hover:text-black'
          } font-medium transition-colors`}
        >
          Drafts ({posts.filter(p => p.status === 'draft').length})
        </button>
      </div>

      {/* Posts List */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        {filteredPosts.length > 0 ? (
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredPosts.map((post) => (
                <tr key={post.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      {post.featured_image && (
                        <img
                          src={post.featured_image}
                          alt={post.title}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                      )}
                      <div>
                        <div className="text-sm font-medium text-black">{post.title}</div>
                        <div className="text-sm text-gray-500">/blog/{post.slug}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                      {post.category || 'Uncategorized'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        post.status === 'published'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {post.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{format(new Date(post.created_at), 'MMM d, yyyy')}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right space-x-2">
                    {post.status === 'published' && (
                      <Link
                        href={`/blog/${post.slug}`}
                        target="_blank"
                        className="inline-flex items-center px-3 py-1 text-sm text-blue-600 hover:text-blue-700"
                        title="View Post"
                      >
                        <Eye className="w-4 h-4" />
                      </Link>
                    )}
                    <Link
                      href={`/admin/posts/${post.id}`}
                      className="inline-flex items-center px-3 py-1 text-sm text-yellow-600 hover:text-yellow-700"
                      title="Edit Post"
                    >
                      <Edit className="w-4 h-4" />
                    </Link>
                    <button
                      onClick={() => handleDelete(post.id)}
                      className="inline-flex items-center px-3 py-1 text-sm text-red-600 hover:text-red-700"
                      title="Delete Post"
                    >
                      <Trash2 className="w-4 h-4" />
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
            <Link
              href="/admin/posts/new"
              className="text-yellow-600 hover:text-yellow-700 font-medium"
            >
              Create your first post →
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
