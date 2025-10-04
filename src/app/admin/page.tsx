export const dynamic = 'force-dynamic'
import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import { FileText, Eye, Calendar, TrendingUp } from 'lucide-react'

export default async function AdminDashboard() {
  const supabase = await createClient() // Added await

  // Fetch statistics
  const { count: totalPosts } = await supabase
    .from('posts')
    .select('*', { count: 'exact', head: true })

  const { count: publishedPosts } = await supabase
    .from('posts')
    .select('*', { count: 'exact', head: true })
    .eq('status', 'published')

  const { count: draftPosts } = await supabase
    .from('posts')
    .select('*', { count: 'exact', head: true })
    .eq('status', 'draft')

  // Fetch recent posts
  const { data: recentPosts } = await supabase
    .from('posts')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(5)

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-black mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome to your blog CMS</p>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <FileText className="w-8 h-8 text-blue-500" />
            <span className="text-sm text-gray-500">Total</span>
          </div>
          <div className="text-3xl font-bold text-black">{totalPosts || 0}</div>
          <div className="text-sm text-gray-600 mt-1">Total Posts</div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <Eye className="w-8 h-8 text-green-500" />
            <span className="text-sm text-gray-500">Live</span>
          </div>
          <div className="text-3xl font-bold text-black">{publishedPosts || 0}</div>
          <div className="text-sm text-gray-600 mt-1">Published</div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <Calendar className="w-8 h-8 text-yellow-500" />
            <span className="text-sm text-gray-500">Drafts</span>
          </div>
          <div className="text-3xl font-bold text-black">{draftPosts || 0}</div>
          <div className="text-sm text-gray-600 mt-1">In Draft</div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <TrendingUp className="w-8 h-8 text-purple-500" />
            <span className="text-sm text-gray-500">This Month</span>
          </div>
          <div className="text-3xl font-bold text-black">0</div>
          <div className="text-sm text-gray-600 mt-1">Views</div>
        </div>
      </div>

      {/* Recent Posts */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-black">Recent Posts</h2>
          <Link
            href="/admin/posts"
            className="text-yellow-600 hover:text-yellow-700 font-medium"
          >
            View All →
          </Link>
        </div>

        <div className="space-y-4">
          {recentPosts && recentPosts.length > 0 ? (
            recentPosts.map((post) => (
              <div
                key={post.id}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-yellow-300 transition-colors"
              >
                <div className="flex-1">
                  <h3 className="font-semibold text-black mb-1">{post.title}</h3>
                  <p className="text-sm text-gray-500">
                    {new Date(post.created_at).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      post.status === 'published'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {post.status}
                  </span>
                  <Link
                    href={`/admin/posts/${post.id}`}
                    className="text-yellow-600 hover:text-yellow-700"
                  >
                    Edit →
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center py-8">
              No posts yet. Create your first post!
            </p>
          )}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 gap-6">
        <Link
          href="/admin/posts/new"
          className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black p-8 rounded-xl hover:scale-105 transition-transform text-center"
        >
          <div className="text-4xl mb-4">✍️</div>
          <h3 className="text-xl font-bold mb-2">Create New Post</h3>
          <p className="text-black/80">Start writing your next blog article</p>
        </Link>

        <Link
          href="/admin/categories"
          className="bg-white border-2 border-yellow-400 text-black p-8 rounded-xl hover:scale-105 transition-transform text-center"
        >
          <div className="text-4xl mb-4">🏷️</div>
          <h3 className="text-xl font-bold mb-2">Manage Categories</h3>
          <p className="text-gray-600">Organize your blog content</p>
        </Link>
      </div>
    </div>
  )
}
