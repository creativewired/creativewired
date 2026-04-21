import { getSession } from '@/lib/cms-auth'
import { getPostBySlug } from '@/lib/blog'
import { redirect, notFound } from 'next/navigation'
import PostEditor from '../../components/PostEditor'

export default async function EditPostPage({ params }: { params: { slug: string } }) {
  const session = await getSession()
  if (!session) redirect('/admin/login')

  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  return (
    <PostEditor
      mode="edit"
      initialSlug={post.slug}
      initial={{
        title:       post.title,
        description: post.description,
        date:        post.date,
        author:      post.author,
        category:    post.category,
        tags:        post.tags.join(', '),
        image:       post.image,
        featured:    post.featured,
        content:     post.content,
      }}
    />
  )
}
