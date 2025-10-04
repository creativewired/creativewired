export const dynamic = 'force-dynamic'
import { createClient } from '@/lib/supabase/server'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StructuredData from '@/components/StructuredData'
import BlogTOC from '@/components/BlogTOC'
import { format } from 'date-fns'
import { Calendar, Clock, User, Tag, ArrowLeft } from 'lucide-react'

import { generateHTML } from '@tiptap/html'
import StarterKit from '@tiptap/starter-kit'
import LinkExt from '@tiptap/extension-link'
import Image from '@tiptap/extension-image'

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const supabase = await createClient()
  const { data: post } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', params.slug)
    .eq('status', 'published')
    .single()

  if (!post) return { title: 'Post Not Found' }

  return {
    title: post.meta_title || post.title,
    description: post.meta_description || post.excerpt,
    openGraph: {
      title: post.meta_title || post.title,
      description: post.meta_description || post.excerpt,
      images: post.featured_image ? [post.featured_image] : [],
    },
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const supabase = await createClient()
  const { data: post, error } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', params.slug)
    .eq('status', 'published')
    .single()

  if (error || !post) notFound()

  // Ensure we have HTML; if only JSON exists, convert it
  let html = post.content as string
  if ((!html || !html.includes('<')) && post.content_json) {
    try {
      html = generateHTML(post.content_json, [
        StarterKit.configure({ heading: { levels: [1,2,3,4,5,6] } }),
        LinkExt.configure({ openOnClick: false }),
        Image,
      ])
    } catch {
      html = `<p>${post.excerpt || ''}</p>`
    }
  }

  const { data: relatedPosts } = await supabase
    .from('posts')
    .select('*')
    .eq('category', post.category)
    .eq('status', 'published')
    .neq('id', post.id)
    .limit(3)

  return (
    <>
      <StructuredData post={post} />
      <div className="min-h-screen bg-white">
        <Header currentPage="blog" />

        <section className="pt-24 pb-12 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/blog" className="inline-flex items-center space-x-2 text-gray-600 hover:text-yellow-600 transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Blog</span>
            </Link>

            {post.category && (
              <div className="mb-4">
                <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium">{post.category}</span>
              </div>
            )}

            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">{post.title}</h1>

            {post.excerpt && (
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">{post.excerpt}</p>
            )}

            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
              {post.author_name && (
                <div className="flex items-center space-x-2">
                  <User className="w-5 h-5" />
                  <span className="font-medium">{post.author_name}</span>
                </div>
              )}
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>{format(new Date(post.published_at || post.created_at), 'MMMM d, yyyy')}</span>
              </div>
              {post.reading_time && (
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>{post.reading_time} min read</span>
                </div>
              )}
            </div>

            {post.featured_image && (
              <div className="rounded-2xl overflow-hidden mb-12">
                <img src={post.featured_image} alt={post.title} className="w-full h-auto" />
              </div>
            )}
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <aside className="hidden lg:block lg:col-span-3">
                {post.auto_generate_toc && <BlogTOC />}
              </aside>

              <div className="lg:col-span-6">
                <article
                  id="blog-article"
                  className="
                    prose prose-lg max-w-none
                    prose-headings:font-bold prose-headings:text-black
                    prose-p:text-gray-800 prose-p:leading-relaxed
                    prose-a:text-yellow-600 prose-a:no-underline hover:prose-a:underline
                    prose-strong:text-black
                    prose-blockquote:border-l-yellow-300 prose-blockquote:text-gray-700
                    prose-li:marker:text-yellow-500
                    prose-img:rounded-xl prose-img:shadow-sm
                    prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
                    prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:rounded-lg prose-pre:p-4
                  "
                  dangerouslySetInnerHTML={{ __html: html }}
                />

                {post.tags && post.tags.length > 0 && (
                  <div className="mt-12 pt-8 border-top border-gray-200">
                    <div className="flex items-center space-x-2 mb-4">
                      <Tag className="w-5 h-5 text-gray-600" />
                      <span className="font-semibold text-gray-900">Tags:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag: string, index: number) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">{tag}</span>
                      ))}
                    </div>
                  </div>
                )}

                {post.faq_items && post.faq_items.length > 0 && (
                  <div className="mt-12 pt-8 border-t border-gray-200">
                    <h2 className="text-3xl font-bold text-black mb-8">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                      {post.faq_items.map((faq: any, index: number) => (
                        <div key={index} className="bg-gray-50 rounded-xl p-6">
                          <h3 className="text-lg font-bold text-black mb-3">{faq.question}</h3>
                          <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <aside className="lg:col-span-3">
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl p-6 text-black sticky top-24">
                  <h3 className="text-xl font-bold mb-3">Stay Updated</h3>
                  <p className="mb-4 text-sm">Get the latest insights delivered to your inbox.</p>
                  <div className="space-y-3">
                    <input type="email" placeholder="Your email" className="w-full px-3 py-2 rounded-lg text-gray-700 text-sm" />
                    <button className="w-full bg-black text-white font-semibold py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm">
                      Subscribe
                    </button>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {relatedPosts && relatedPosts.length > 0 && (
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-black mb-12">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost: any) => (
                  <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-yellow-300 hover:shadow-xl transition-all group">
                    {relatedPost.featured_image && (
                      <div className="h-48 overflow-hidden">
                        <img src={relatedPost.featured_image} alt={relatedPost.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-black mb-2 group-hover:text-yellow-600 transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      {relatedPost.excerpt && <p className="text-gray-600 text-sm line-clamp-3">{relatedPost.excerpt}</p>}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <Footer />
      </div>
    </>
  )
}
