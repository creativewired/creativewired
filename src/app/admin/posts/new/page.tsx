import { getSession } from '@/lib/cms-auth'
import { redirect } from 'next/navigation'
import PostEditor from '../../components/PostEditor'

export default async function NewPostPage() {
  const session = await getSession()
  if (!session) redirect('/admin/login')
  return <PostEditor mode="new" />
}
