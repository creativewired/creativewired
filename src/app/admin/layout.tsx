'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, FileText, Mail, Settings, LogOut } from 'lucide-react'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path || pathname.startsWith(path + '/')

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-black text-white fixed h-full">
        <div className="p-6">
          <h1 className="text-2xl font-bold">Creative Wired</h1>
          <p className="text-gray-400 text-sm">Admin Panel</p>
        </div>

        <nav className="px-4 space-y-2">
          <Link
            href="/admin"
            className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
              pathname === '/admin' 
                ? 'bg-yellow-400 text-black' 
                : 'hover:bg-gray-800'
            }`}
          >
            <LayoutDashboard className="w-5 h-5" />
            <span>Dashboard</span>
          </Link>

          <Link
            href="/admin/posts"
            className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
              isActive('/admin/posts')
                ? 'bg-yellow-400 text-black'
                : 'hover:bg-gray-800'
            }`}
          >
            <FileText className="w-5 h-5" />
            <span>Blog Posts</span>
          </Link>

          <Link
            href="/admin/contacts"
            className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
              pathname === '/admin/contacts'
                ? 'bg-yellow-400 text-black'
                : 'hover:bg-gray-800'
            }`}
          >
            <Mail className="w-5 h-5" />
            <span>Contact Submissions</span>
          </Link>

          <Link
            href="/admin/settings"
            className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
              pathname === '/admin/settings'
                ? 'bg-yellow-400 text-black'
                : 'hover:bg-gray-800'
            }`}
          >
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </Link>

          <button
            onClick={() => {
              // Add logout logic here
              window.location.href = '/admin/login'
            }}
            className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors w-full text-left mt-4 border-t border-gray-800 pt-6"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="ml-64 flex-1 p-8">
        {children}
      </main>
    </div>
  )
}
