'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import TipTapEditor from '@/components/TipTapEditor'
import slugify from 'slugify'
import { ArrowLeft, Save, Eye } from 'lucide-react'
import Link from 'next/link'
import ImageUpload from '@/components/ImageUpload'
import FAQManager from '@/components/FAQManager'
import { calculateReadingTime } from '@/lib/utils/toc'

export const dynamic = 'force-dynamic'

export default function NewPostPage() {

  const router = useRouter()
  const supabase = createClient()
  
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    featured_image: '',
    author_name: '',
    author_email: '',
    category: '',
    tags: [] as string[],
    status: 'draft',
    meta_title: '',
    meta_description: '',
    faq_items: [] as Array<{ question: string; answer: string }>,
    auto_generate_toc: true,
    schema_type: 'Article' as 'Article' | 'BlogPosting' | 'NewsArticle',
  })

  const handleTitleChange = (title: string) => {
    const slug = slugify(title, { lower: true, strict: true })
    setFormData({ ...formData, title, slug })
  }

  const handleSubmit = async (status: 'draft' | 'published') => {
    setLoading(true)

    try {
      // Ensure content is a string
      let contentString = formData.content
      if (typeof contentString !== 'string') {
        contentString = String(contentString || '')
      }

      // Calculate reading time
      const readingTime = calculateReadingTime(contentString)

      const postData = {
        ...formData,
        content: contentString,
        status,
        reading_time: readingTime,
        published_at: status === 'published' ? new Date().toISOString() : null,
      }

      const { data, error } = await supabase
        .from('posts')
        .insert([postData])
        .select()
        .single()

      if (error) throw error

      alert(`Post ${status === 'published' ? 'published' : 'saved as draft'} successfully!`)
      router.push('/admin/posts')
    } catch (error) {
      console.error('Error saving post:', error)
      alert('Error saving post. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link
            href="/admin/posts"
            className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-black">Create New Post</h1>
            <p className="text-gray-600">Write and publish your blog post</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={() => handleSubmit('draft')}
            disabled={loading || !formData.title || !formData.content}
            className="px-6 py-3 bg-gray-200 text-black rounded-lg hover:bg-gray-300 transition-colors disabled:opacity-50 flex items-center space-x-2"
          >
            <Save className="w-4 h-4" />
            <span>Save Draft</span>
          </button>

          <button
            onClick={() => handleSubmit('published')}
            disabled={loading || !formData.title || !formData.content}
            className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black rounded-lg hover:scale-105 transition-transform disabled:opacity-50 flex items-center space-x-2"
          >
            <Eye className="w-4 h-4" />
            <span>Publish</span>
          </button>
        </div>
      </div>

      {/* Main Form */}
      <div className="bg-white border border-gray-200 rounded-xl p-8 space-y-6">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Post Title *
          </label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => handleTitleChange(e.target.value)}
            placeholder="Enter your post title..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
        </div>

        {/* Slug */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            URL Slug
          </label>
          <input
            type="text"
            value={formData.slug}
            onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
            placeholder="post-url-slug"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <p className="text-sm text-gray-500 mt-1">
            URL: /blog/{formData.slug || 'post-url-slug'}
          </p>
        </div>

        {/* Excerpt */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Excerpt
          </label>
          <textarea
            value={formData.excerpt}
            onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
            placeholder="Brief description of your post..."
            rows={3}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
          />
        </div>

        {/* Content Editor */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Content *
          </label>
          <TipTapEditor
            content={formData.content}
            onChange={(content) => setFormData({ ...formData, content })}
            placeholder="Start writing your post..."
          />
        </div>

        {/* Featured Image Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Featured Image
          </label>
          <ImageUpload
            onImageUploaded={(url) => setFormData({ ...formData, featured_image: url })}
            currentImage={formData.featured_image}
          />
        </div>

        {/* Author Info */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Author Name
            </label>
            <input
              type="text"
              value={formData.author_name}
              onChange={(e) => setFormData({ ...formData, author_name: e.target.value })}
              placeholder="John Doe"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Author Email
            </label>
            <input
              type="email"
              value={formData.author_email}
              onChange={(e) => setFormData({ ...formData, author_email: e.target.value })}
              placeholder="john@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Category
          </label>
          <select
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            <option value="">Select a category</option>
            <option value="SEO">SEO</option>
            <option value="Web Development">Web Development</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="Social Media">Social Media</option>
            <option value="Content Marketing">Content Marketing</option>
            <option value="PPC Advertising">PPC Advertising</option>
          </select>
        </div>

        {/* Tags */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tags (comma separated)
          </label>
          <input
            type="text"
            placeholder="seo, marketing, tips"
            onChange={(e) => {
              const tags = e.target.value.split(',').map(tag => tag.trim()).filter(tag => tag)
              setFormData({ ...formData, tags })
            }}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        {/* Advanced SEO */}
        <div className="border-t pt-6 space-y-6">
          <h3 className="text-lg font-semibold text-black">Advanced SEO</h3>

          {/* Schema Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Schema Type
            </label>
            <select
              value={formData.schema_type}
              onChange={(e) => setFormData({ ...formData, schema_type: e.target.value as any })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              <option value="Article">Article (Default)</option>
              <option value="BlogPosting">Blog Posting</option>
              <option value="NewsArticle">News Article</option>
            </select>
            <p className="text-sm text-gray-500 mt-1">
              Structured data type for search engines.
            </p>
          </div>

          {/* TOC Toggle */}
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              id="auto-toc"
              checked={formData.auto_generate_toc}
              onChange={(e) => setFormData({ ...formData, auto_generate_toc: e.target.checked })}
              className="w-4 h-4 text-yellow-600 rounded focus:ring-yellow-500"
            />
            <label htmlFor="auto-toc" className="text-sm font-medium text-gray-700">
              Auto-generate Table of Contents from headings (H2-H3)
            </label>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="border-t pt-6">
          <FAQManager
            faqs={formData.faq_items}
            onChange={(faqs) => setFormData({ ...formData, faq_items: faqs })}
          />
        </div>

        <div className="border-t pt-6 space-y-6">
          <h3 className="text-lg font-semibold text-black">SEO Settings</h3>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Meta Title
            </label>
            <input
              type="text"
              value={formData.meta_title}
              onChange={(e) => setFormData({ ...formData, meta_title: e.target.value })}
              placeholder="SEO optimized title (60 characters)"
              maxLength={60}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <p className="text-sm text-gray-500 mt-1">
              {formData.meta_title.length}/60 characters
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Meta Description
            </label>
            <textarea
              value={formData.meta_description}
              onChange={(e) => setFormData({ ...formData, meta_description: e.target.value })}
              placeholder="Brief description for search engines (160 characters)"
              maxLength={160}
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
            />
            <p className="text-sm text-gray-500 mt-1">
              {formData.meta_description.length}/160 characters
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
