import Link from 'next/link'
import { getSession } from '@/lib/cms-auth'
import { getAllPosts } from '@/lib/blog'
import { redirect } from 'next/navigation'
import { PenLine, Trash2, LogOut, Plus, FileText } from 'lucide-react'
import AdminLogout from './components/AdminLogout'
import AdminDelete from './components/AdminDelete'

export default async function AdminDashboard() {
  const session = await getSession()
  if (!session) redirect('/admin/login')

  const posts = getAllPosts()

  return (
    <div className="min-h-screen bg-neutral-50">

      {/* Top bar */}
      <header className="bg-white border-b border-neutral-100 px-5 md:px-8 py-4 flex items-center justify-between sticky top-0 z-40">
        <div>
          <span className="text-sm font-bold text-neutral-900">CMS</span>
          <span className="text-xs text-neutral-400 ml-2">Creative Wired</span>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/admin/new"
            className="inline-flex items-center gap-1.5 bg-neutral-900 text-white text-xs font-medium px-4 py-2 rounded-full hover:bg-neutral-700 transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            New Post
          </Link>
          <AdminLogout />
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-5 md:px-8 py-10">

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
          {[
            { label: 'Total Posts',   value: posts.length           },
            { label: 'Featured',      value: posts.filter(p => p.featured).length },
            { label: 'Categories',    value: new Set(posts.map(p => p.category)).size },
          ].map((s, i) => (
            <div key={i} className="bg-white rounded-2xl border border-neutral-100 p-5">
              <div className="text-2xl font-bold text-neutral-900">{s.value}</div>
              <div className="text-[11px] text-neutral-400 mt-0.5 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Posts list */}
        <div className="bg-white rounded-2xl border border-neutral-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-neutral-100 flex items-center gap-2">
            <FileText className="w-4 h-4 text-neutral-400" />
            <span className="text-sm font-semibold text-neutral-900">All Posts</span>
          </div>

          {posts.length === 0 ? (
            <div className="px-6 py-14 text-center">
              <p className="text-sm text-neutral-400 mb-3">No posts yet.</p>
              <Link
                href="/admin/new"
                className="inline-flex items-center gap-2 text-sm text-neutral-900 font-medium hover:gap-3 transition-all"
              >
                <Plus className="w-4 h-4" /> Create your first post
              </Link>
            </div>
          ) : (
            <div className="divide-y divide-neutral-50">
              {posts.map((post) => (
                <div key={post.slug} className="px-6 py-4 flex items-center justify-between gap-4 hover:bg-neutral-50 transition-colors">
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
                      <span>{post.category}</span>
                      <span>·</span>
                      <span>{new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                      <span>·</span>
                      <span>{post.readingTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <Link
                      href={`/admin/edit/${post.slug}`}
                      className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center hover:border-neutral-900 hover:text-neutral-900 text-neutral-400 transition-all"
                    >
                      <PenLine className="w-3.5 h-3.5" />
                    </Link>
                    <AdminDelete slug={post.slug} title={post.title} />
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
