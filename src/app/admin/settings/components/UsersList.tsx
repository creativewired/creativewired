import { readFileSync, existsSync } from 'fs'
import { join } from 'path'
import { AdminUser } from '@/app/api/admin/add-user/route'
import DeleteUserButton from './DeleteUserButton'

const usersFile = join(process.cwd(), 'data/admin-users.json')

export default function UsersList() {
  const users: AdminUser[] = existsSync(usersFile)
    ? JSON.parse(readFileSync(usersFile, 'utf-8'))
    : []

  if (users.length === 0) {
    return <p className="text-sm text-neutral-400 py-2">No users added yet.</p>
  }

  return (
    <div className="divide-y divide-neutral-100">
      {users.map(user => (
        <div key={user.id} className="py-4 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <p className="text-sm font-semibold text-neutral-900">{user.name}</p>
              <span className={`text-[9px] px-2 py-0.5 rounded-full uppercase tracking-wider font-medium ${
                user.role === 'admin'  ? 'bg-neutral-900 text-white' :
                user.role === 'editor' ? 'bg-neutral-100 text-neutral-600' :
                                         'bg-neutral-50 text-neutral-400'
              }`}>
                {user.role}
              </span>
            </div>
            <p className="text-xs text-neutral-400 mt-0.5">@{user.username}</p>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {user.permissions.map(p => (
                <span key={p} className="text-[10px] bg-neutral-100 text-neutral-500 px-2 py-0.5 rounded-full">
                  {p.replace('_', ' ')}
                </span>
              ))}
            </div>
          </div>
          <DeleteUserButton id={user.id} name={user.name} />
        </div>
      ))}
    </div>
  )
}
