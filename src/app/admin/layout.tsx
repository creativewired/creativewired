'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { LayoutDashboard, FileText, Settings, LogOut } from 'lucide-react'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()

  const isActive = (path: string) => pathname === path || pathname.startsWith(path + '/')

  const navItems = [
    { href: '/admin',          label: 'Dashboard',  icon: LayoutDashboard, exact: true },
    { href: '/admin/posts',    label: 'Blog Posts', icon: FileText,        exact: false },
    { href: '/admin/settings', label: 'Settings',   icon: Settings,        exact: true },
  ]

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' })
    router.push('/admin/login')
  }

  return (
    <div className="min-h-screen bg-[#f5f5f7] flex">

      {/* Sidebar */}
      <aside className="w-60 bg-white border-r border-neutral-200/60 fixed h-full flex flex-col shadow-sm">
        <div className="px-6 py-5 border-b border-neutral-100">
          <p className="text-sm font-bold text-neutral-900">Creative Wired</p>
          <p className="text-xs text-neutral-400 mt-0.5">Admin Panel</p>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1">
          {navItems.map(({ href, label, icon: Icon, exact }) => {
            const active = exact ? pathname === href : isActive(href)
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  active
                    ? 'bg-neutral-900 text-white'
                    : 'text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900'
                }`}
              >
                <Icon className="w-4 h-4 flex-shrink-0" />
                {label}
              </Link>
            )
          })}
        </nav>

        <div className="px-3 py-4 border-t border-neutral-100">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900 transition-colors w-full"
          >
            <LogOut className="w-4 h-4 flex-shrink-0" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-60 flex-1 min-h-screen">
        {children}
      </main>
    </div>
  )
}
