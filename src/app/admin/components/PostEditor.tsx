'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Loader2, Save, Eye, ArrowLeft, Plus, Trash2 } from 'lucide-react'
import Link from 'next/link'
import slugify from 'slugify'

type FAQ = { question: string; answer: string }

type PostEditorProps = {
  mode:         'new' | 'edit'
  initialSlug?: string
  initial?: {
    title:           string
    description:     string
    date:            string
    author:          string
    category:        string
    tags:            string
    image:           string
    featured:        boolean
    content:         string
    metaTitle?:      string
    metaDescription?: string
    schemaType?:     string
    autoToc?:        boolean
    faqs?:           FAQ[]
  }
}

const CATEGORIES = [
  'SEO',
  'Paid Advertising',
  'Web Development',
  'Social Media',
  'Software Development',
  'General',
]

export default function PostEditor({ mode, initialSlug, initial }: PostEditorProps) {
  const router = useRouter()

  const [saving,  setSaving]  = useState(false)
  const [preview, setPreview] = useState(false)
  const [saved,   setSaved]   = useState(false)

  // Core fields
  const [title,       setTitle]       = useState(initial?.title       ?? '')
  const [description, setDescription] = useState(initial?.description ?? '')
  const [date,        setDate]        = useState(initial?.date        ?? new Date().toISOString().split('T')[0])
  const [author,      setAuthor]      = useState(initial?.author      ?? 'Creative Wired')
  const [category,    setCategory]    = useState(initial?.category    ?? 'General')
  const [tags,        setTags]        = useState(initial?.tags        ?? '')
  const [image,       setImage]       = useState(initial?.image       ?? '')
  const [featured,    setFeatured]    = useState(initial?.featured    ?? false)
  const [content,     setContent]     = useState(initial?.content     ?? '')

  // SEO / advanced fields
  const [metaTitle,       setMetaTitle]       = useState(initial?.metaTitle       ?? '')
  const [metaDescription, setMetaDescription] = useState(initial?.metaDescription ?? '')
  const [schemaType,      setSchemaType]      = useState(initial?.schemaType      ?? 'Article')
  const [autoToc,         setAutoToc]         = useState(initial?.autoToc         ?? true)
  const [faqs,            setFaqs]            = useState<FAQ[]>(initial?.faqs     ?? [])

  const slug =
    mode === 'edit' && initialSlug
      ? initialSlug
      : slugify(title, { lower: true, strict: true })

  // ── FAQ helpers ────────────────────────────────────────────────
  function addFaq()                                   { setFaqs(f => [...f, { question: '', answer: '' }]) }
  function removeFaq(i: number)                       { setFaqs(f => f.filter((_, idx) => idx !== i)) }
  function updateFaq(i: number, k: keyof FAQ, v: string) {
    setFaqs(f => f.map((faq, idx) => idx === i ? { ...faq, [k]: v } : faq))
  }

  // ── Build MDX string ───────────────────────────────────────────
  function buildMDX() {
    const tagArray  = tags.split(',').map(t => t.trim()).filter(Boolean)
    const faqBlock  = faqs.filter(f => f.question && f.answer).length > 0
      ? '\n\n## Frequently Asked Questions\n\n' +
        faqs
          .filter(f => f.question && f.answer)
          .map(f => `**${f.question}**\n\n${f.answer}`)
          .join('\n\n')
      : ''

    return [
      '---',
      `title: '${title.replace(/'/g, "\\'")}'`,
      `description: '${description.replace(/'/g, "\\'")}'`,
      `date: '${date}'`,
      `author: '${author}'`,
      `category: '${category}'`,
      `tags: [${tagArray.map(t => `'${t}'`).join(', ')}]`,
      `image: '${image}'`,
      `featured: ${featured}`,
      `metaTitle: '${metaTitle.replace(/'/g, "\\'")}'`,
      `metaDescription: '${metaDescription.replace(/'/g, "\\'")}'`,
      `schemaType: '${schemaType}'`,
      `autoToc: ${autoToc}`,
      '---',
      '',
      content + faqBlock,
    ].join('\n')
  }

  // ── Save handler ───────────────────────────────────────────────
  async function handleSave() {
    if (!title.trim())   return alert('Title is required.')
    if (!content.trim()) return alert('Content is required.')
    setSaving(true)

    const res = await fetch('/api/cms/publish', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({ filename: slug, content: buildMDX() }),
    })

    if (res.ok) {
      setSaved(true)
      setTimeout(() => setSaved(false), 3000)
      if (mode === 'new') router.push('/admin/posts')
    } else {
      const err = await res.json()
      alert(`Error: ${err.error}`)
    }
    setSaving(false)
  }

  // ──────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-neutral-50">

      {/* ── Top bar ──────────────────────────────────────────── */}
      <header className="bg-white border-b border-neutral-100 px-5 md:px-8 py-3.5 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <Link
            href="/admin/posts"
            className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 hover:text-neutral-900 hover:border-neutral-900 transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
          </Link>
          <div>
            <span className="text-sm font-semibold text-neutral-900">
              {mode === 'new' ? 'New Post' : 'Edit Post'}
            </span>
            {slug && (
              <span className="text-[11px] text-neutral-400 ml-2 font-mono">
                /blog/{slug}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setPreview(v => !v)}
            className="inline-flex items-center gap-1.5 text-xs text-neutral-600 border border-neutral-200 px-3 py-1.5 rounded-full hover:border-neutral-400 transition-all"
          >
            <Eye className="w-3.5 h-3.5" />
            {preview ? 'Edit' : 'Preview'}
          </button>
          <button
            onClick={handleSave}
            disabled={saving}
            className="inline-flex items-center gap-1.5 bg-neutral-900 text-white text-xs font-medium px-4 py-2 rounded-full hover:bg-neutral-700 transition-colors disabled:opacity-50"
          >
            {saving ? (
              <><Loader2 className="w-3.5 h-3.5 animate-spin" /> Saving…</>
            ) : saved ? (
              '✓ Saved!'
            ) : (
              <><Save className="w-3.5 h-3.5" /> Publish</>
            )}
          </button>
        </div>
      </header>

      {/* ── Main ─────────────────────────────────────────────── */}
      <main className="max-w-5xl mx-auto px-5 md:px-8 py-8">
        <div className="grid md:grid-cols-3 gap-5">

          {/* ── Left — content ─────────────────────────────── */}
          <div className="md:col-span-2 space-y-4">

            {/* Title */}
            <div className="bg-white rounded-2xl border border-neutral-100 p-5">
              <label className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 block mb-2">
                Title *
              </label>
              <input
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Your post title..."
                className="w-full text-xl font-bold text-neutral-900 focus:outline-none placeholder:text-neutral-300"
              />
              {slug && (
                <p className="text-[11px] text-neutral-300 mt-2 font-mono">slug: {slug}</p>
              )}
            </div>

            {/* Description */}
            <div className="bg-white rounded-2xl border border-neutral-100 p-5">
              <label className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 block mb-2">
                Description / Excerpt *
              </label>
              <textarea
                value={description}
                onChange={e => setDescription(e.target.value)}
                rows={2}
                placeholder="Brief description for SEO and post cards..."
                className="w-full text-sm text-neutral-700 font-light focus:outline-none resize-none placeholder:text-neutral-300"
              />
            </div>

            {/* MDX Content */}
            <div className="bg-white rounded-2xl border border-neutral-100 overflow-hidden">
              <div className="flex items-center justify-between px-5 py-3 border-b border-neutral-100">
                <label className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                  Content (MDX) *
                </label>
                <div className="hidden md:flex gap-3 text-[10px] text-neutral-300 font-mono">
                  {['## H2', '**bold**', '_italic_', '- list', '> quote', '`code`'].map((h, i) => (
                    <span key={i}>{h}</span>
                  ))}
                </div>
              </div>

              {preview ? (
                <div className="p-6 min-h-[400px]">
                  <pre className="whitespace-pre-wrap text-xs text-neutral-500 font-mono bg-neutral-50 p-4 rounded-xl leading-relaxed">
                    {content || '— empty —'}
                  </pre>
                </div>
              ) : (
                <textarea
                  value={content}
                  onChange={e => setContent(e.target.value)}
                  rows={24}
                  placeholder={`## Introduction\n\nWrite your post content here in MDX/Markdown...\n\n## Section Two\n\nMore content...`}
                  className="w-full p-5 text-sm text-neutral-700 font-mono focus:outline-none resize-none leading-relaxed placeholder:text-neutral-200"
                />
              )}
            </div>

            {/* ── FAQ Section ──────────────────────────────── */}
            <div className="bg-white rounded-2xl border border-neutral-100 p-5">
              <div className="flex items-center justify-between mb-4">
                <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                  FAQ Items
                </p>
                <button
                  type="button"
                  onClick={addFaq}
                  className="inline-flex items-center gap-1 text-[11px] text-neutral-500 border border-neutral-200 px-2.5 py-1 rounded-full hover:border-neutral-900 hover:text-neutral-900 transition-all"
                >
                  <Plus className="w-3 h-3" /> Add FAQ
                </button>
              </div>

              {faqs.length === 0 ? (
                <p className="text-xs text-neutral-300 font-light">
                  No FAQs yet. FAQs are appended to the post and generate FAQ schema for SEO.
                </p>
              ) : (
                <div className="space-y-3">
                  {faqs.map((faq, i) => (
                    <div key={i} className="border border-neutral-100 rounded-xl p-4 space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] uppercase tracking-wider text-neutral-400">
                          FAQ {i + 1}
                        </span>
                        <button
                          type="button"
                          onClick={() => removeFaq(i)}
                          className="text-neutral-300 hover:text-red-400 transition-colors"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <input
                        type="text"
                        value={faq.question}
                        onChange={e => updateFaq(i, 'question', e.target.value)}
                        placeholder="Question"
                        className="w-full border border-neutral-200 rounded-lg px-3 py-2 text-xs text-neutral-700 focus:outline-none focus:border-neutral-900 transition-colors"
                      />
                      <textarea
                        value={faq.answer}
                        onChange={e => updateFaq(i, 'answer', e.target.value)}
                        rows={2}
                        placeholder="Answer"
                        className="w-full border border-neutral-200 rounded-lg px-3 py-2 text-xs text-neutral-700 focus:outline-none focus:border-neutral-900 transition-colors resize-none"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>

          {/* ── Right — sidebar ────────────────────────────── */}
          <div className="space-y-4">

            {/* Post Settings */}
            <div className="bg-white rounded-2xl border border-neutral-100 p-5 space-y-4">
              <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">Post Settings</p>

              <div>
                <label className="text-[11px] text-neutral-500 block mb-1.5">Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={e => setDate(e.target.value)}
                  className="w-full border border-neutral-200 rounded-xl px-3 py-2 text-xs text-neutral-700 focus:outline-none focus:border-neutral-900 transition-colors"
                />
              </div>

              <div>
                <label className="text-[11px] text-neutral-500 block mb-1.5">Author</label>
                <input
                  type="text"
                  value={author}
                  onChange={e => setAuthor(e.target.value)}
                  className="w-full border border-neutral-200 rounded-xl px-3 py-2 text-xs text-neutral-700 focus:outline-none focus:border-neutral-900 transition-colors"
                />
              </div>

              <div>
                <label className="text-[11px] text-neutral-500 block mb-1.5">Category</label>
                <select
                  value={category}
                  onChange={e => setCategory(e.target.value)}
                  className="w-full border border-neutral-200 rounded-xl px-3 py-2 text-xs text-neutral-700 focus:outline-none focus:border-neutral-900 transition-colors"
                >
                  {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>

              <div>
                <label className="text-[11px] text-neutral-500 block mb-1.5">
                  Tags{' '}
                  <span className="text-neutral-300">(comma separated)</span>
                </label>
                <input
                  type="text"
                  value={tags}
                  onChange={e => setTags(e.target.value)}
                  placeholder="SEO, Dubai, Google"
                  className="w-full border border-neutral-200 rounded-xl px-3 py-2 text-xs text-neutral-700 focus:outline-none focus:border-neutral-900 transition-colors"
                />
              </div>

              <div>
                <label className="text-[11px] text-neutral-500 block mb-1.5">
                  Featured Image URL
                </label>
                <input
                  type="text"
                  value={image}
                  onChange={e => setImage(e.target.value)}
                  placeholder="/blog/my-image.jpg"
                  className="w-full border border-neutral-200 rounded-xl px-3 py-2 text-xs text-neutral-700 focus:outline-none focus:border-neutral-900 transition-colors"
                />
                {image && (
                  <img
                    src={image}
                    alt="preview"
                    className="mt-2 w-full aspect-video object-cover rounded-xl border border-neutral-100"
                    onError={e => (e.currentTarget.style.display = 'none')}
                  />
                )}
              </div>

              <div className="flex items-center gap-3 pt-1">
                <input
                  type="checkbox"
                  id="featured"
                  checked={featured}
                  onChange={e => setFeatured(e.target.checked)}
                  className="w-4 h-4 rounded border-neutral-300 accent-neutral-900"
                />
                <label htmlFor="featured" className="text-[11px] text-neutral-600 cursor-pointer">
                  Mark as featured post
                </label>
              </div>
            </div>

            {/* Advanced SEO */}
            <div className="bg-white rounded-2xl border border-neutral-100 p-5 space-y-4">
              <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">Advanced SEO</p>

              <div>
                <label className="text-[11px] text-neutral-500 block mb-1.5">
                  Meta Title
                  <span className={`ml-1.5 ${metaTitle.length > 55 ? 'text-orange-400' : 'text-neutral-300'}`}>
                    {metaTitle.length}/60
                  </span>
                </label>
                <input
                  type="text"
                  value={metaTitle}
                  onChange={e => setMetaTitle(e.target.value)}
                  maxLength={60}
                  placeholder={title || 'SEO title…'}
                  className="w-full border border-neutral-200 rounded-xl px-3 py-2 text-xs text-neutral-700 focus:outline-none focus:border-neutral-900 transition-colors"
                />
              </div>

              <div>
                <label className="text-[11px] text-neutral-500 block mb-1.5">
                  Meta Description
                  <span className={`ml-1.5 ${metaDescription.length > 145 ? 'text-orange-400' : 'text-neutral-300'}`}>
                    {metaDescription.length}/160
                  </span>
                </label>
                <textarea
                  value={metaDescription}
                  onChange={e => setMetaDescription(e.target.value)}
                  maxLength={160}
                  rows={3}
                  placeholder={description || 'SEO description…'}
                  className="w-full border border-neutral-200 rounded-xl px-3 py-2 text-xs text-neutral-700 focus:outline-none focus:border-neutral-900 transition-colors resize-none"
                />
              </div>

              <div>
                <label className="text-[11px] text-neutral-500 block mb-1.5">Schema Type</label>
                <select
                  value={schemaType}
                  onChange={e => setSchemaType(e.target.value)}
                  className="w-full border border-neutral-200 rounded-xl px-3 py-2 text-xs text-neutral-700 focus:outline-none focus:border-neutral-900 transition-colors"
                >
                  <option value="Article">Article (Default)</option>
                  <option value="BlogPosting">Blog Posting</option>
                  <option value="NewsArticle">News Article</option>
                </select>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="auto-toc"
                  checked={autoToc}
                  onChange={e => setAutoToc(e.target.checked)}
                  className="w-4 h-4 rounded border-neutral-300 accent-neutral-900"
                />
                <label htmlFor="auto-toc" className="text-[11px] text-neutral-600 cursor-pointer">
                  Auto-generate Table of Contents
                </label>
              </div>

              {/* Google preview */}
              <div className="border border-neutral-100 rounded-xl p-3 bg-neutral-50">
                <p className="text-[9px] uppercase tracking-wider text-neutral-400 mb-2">Google Preview</p>
                <p className="text-[13px] text-blue-600 font-medium leading-tight truncate">
                  {metaTitle || title || 'Post Title'}
                </p>
                <p className="text-[11px] text-green-700 truncate mt-0.5">
                  creativewired.agency/blog/{slug || 'post-slug'}
                </p>
                <p className="text-[11px] text-neutral-500 mt-1 line-clamp-2 leading-relaxed">
                  {metaDescription || description || 'Post description will appear here…'}
                </p>
              </div>
            </div>

            {/* MDX cheatsheet */}
            <div className="bg-white rounded-2xl border border-neutral-100 p-5">
              <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-3">MDX Cheatsheet</p>
              <div className="space-y-1.5 font-mono">
                {[
                  ['## Heading 2',      'Section heading'  ],
                  ['### Heading 3',     'Sub heading'      ],
                  ['**bold**',          'Bold text'        ],
                  ['_italic_',          'Italic text'      ],
                  ['- item',            'Bullet list'      ],
                  ['1. item',           'Numbered list'    ],
                  ['> quote',           'Blockquote'       ],
                  ['`code`',            'Inline code'      ],
                  ['```\\ncode\\n```',  'Code block'       ],
                  ['[text](url)',       'Link'             ],
                  ['![alt](url)',       'Image'            ],
                  ['---',               'Divider'          ],
                ].map(([syntax, desc], i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-[10px] text-neutral-900 w-28 flex-shrink-0">{syntax}</span>
                    <span className="text-[10px] text-neutral-400">{desc}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  )
}
