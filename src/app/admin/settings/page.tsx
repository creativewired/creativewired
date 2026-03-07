import { getSession } from '@/lib/cms-auth'
import { redirect } from 'next/navigation'
import { Settings } from 'lucide-react'
import ChangePasswordForm from './components/ChangePasswordForm'
import AddUserForm from './components/AddUserForm'
import UsersList from './components/UsersList'

export default async function SettingsPage() {
  const session = await getSession()
  if (!session) redirect('/admin/login')

  return (
    <div className="min-h-screen bg-[#f5f5f7]">

      <header className="bg-white/80 backdrop-blur-md border-b border-neutral-200/60 px-5 md:px-8 py-4 sticky top-0 z-40 flex items-center gap-2">
        <Settings className="w-4 h-4 text-neutral-400" />
        <span className="text-sm font-semibold text-neutral-900">Settings</span>
      </header>

      <main className="max-w-2xl mx-auto px-5 md:px-8 py-10 space-y-6">

        {/* Account Info */}
        <div className="bg-white rounded-2xl border border-neutral-200/60 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-neutral-100">
            <p className="text-sm font-semibold text-neutral-900">Account</p>
          </div>
          <div className="px-6 py-5 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-neutral-900">Admin</p>
              <p className="text-xs text-neutral-400 mt-0.5">creativewired.com</p>
            </div>
            <span className="text-[10px] bg-neutral-100 text-neutral-500 px-2.5 py-1 rounded-full uppercase tracking-wider font-medium">
              Owner
            </span>
          </div>
        </div>

        {/* Change Password */}
        <div className="bg-white rounded-2xl border border-neutral-200/60 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-neutral-100">
            <p className="text-sm font-semibold text-neutral-900">Change Password</p>
            <p className="text-xs text-neutral-400 mt-0.5">Update your admin panel password</p>
          </div>
          <div className="px-6 py-5">
            <ChangePasswordForm />
          </div>
        </div>

        {/* Add New User */}
        <div className="bg-white rounded-2xl border border-neutral-200/60 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-neutral-100">
            <p className="text-sm font-semibold text-neutral-900">Add New User</p>
            <p className="text-xs text-neutral-400 mt-0.5">Grant admin access to a new team member</p>
          </div>
          <div className="px-6 py-5">
            <AddUserForm />
          </div>
        </div>

        {/* Team Members */}
        <div className="bg-white rounded-2xl border border-neutral-200/60 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-neutral-100">
            <p className="text-sm font-semibold text-neutral-900">Team Members</p>
            <p className="text-xs text-neutral-400 mt-0.5">All users with admin access</p>
          </div>
          <div className="px-6 py-2">
            <UsersList />
          </div>
        </div>

      </main>
    </div>
  )
}
