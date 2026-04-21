'use client'

import { useState, useCallback, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Loader2, Save, Eye, ArrowLeft, Plus, Trash2, Wand2, Image as ImageIcon, Link2, AlignLeft, AlignCenter, AlignRight } from 'lucide-react'
import Link from 'next/link'
import slugify from 'slugify'
import { marked } from 'marked'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import TextAlign from '@tiptap/extension-text-align'
import Underline from '@tiptap/extension-underline'
import TiptapImage from '@tiptap/extension-image'
import TiptapLink from '@tiptap/extension-link'
import Placeholder from '@tiptap/extension-placeholder'

type FAQ = { question: string; answer: string }

type PostEditorProps = {
  mode: 'new' | 'edit'
  initialSlug?: string
  initial?: {
    title:            string
    description:      string
    date:             string
    author:           string
    category:         string
    tags:             string
    image:            string
    featured:         boolean
    content:          string
    metaTitle?:       string
    metaDescription?: string
    schemaType?:      string
    autoToc?:         boolean
    faqs?:            FAQ[]
  }
}

const CATEGORIES = ['SEO', 'Paid Advertising', 'Web Development', 'Social Media', 'Software Development', 'General']

function mdToHtml(md: string): string {
  if (!md) return ''
  if (md.trimStart().startsWith('<')) return md
  return marked.parse(md) as string
}

function ToolbarBtn({ onClick, active, title, children }: {
  onClick:  () => void
  active?:  boolean
  title:    string
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={title}
      className={`px-2 py-1.5 rounded-lg text-xs font-medium transition-all ${
        active
          ? 'bg-neutral-900 text-white'
          : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'
      }`}
    >
      {children}
    </button>
  )
}

async function compressToWebP(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    const url = URL.createObjectURL(file)
    img.onload = () => {
      let { width, height } = img
      const MAX = 1200
      if (width > MAX) { height = Math.round((height * MAX) / width); width = MAX }
      const canvas = document.createElement('canvas')
      canvas.width  = width
      canvas.height = height
      const ctx = canvas.getContext('2d')!
      ctx.drawImage(img, 0, 0, width, height)
      const tryQuality = (q: number) => {
        const dataUrl = canvas.toDataURL('image/webp', q)
        const bytes   = Math.round((dataUrl.length * 3) / 4)
        if (bytes < 100_000 || q <= 0.4) { URL.revokeObjectURL(url); resolve(dataUrl) }
        else tryQuality(Math.round((q - 0.15) * 100) / 100)
      }
      tryQuality(0.85)
    }
    img.onerror = reject
    img.src = url
  })
}

export default function PostEditor({ mode, initialSlug, initial }: PostEditorProps) {
  const router = useRouter()

  const [saving,       setSaving]       = useState(false)
  const [saved,        setSaved]        = useState(false)
  const [preview,      setPreview]      = useState(false)
  const [uploadingImg, setUploadingImg] = useState(false)
  const [,             forceUpdate]     = useState(0)

  const [title,       setTitle]       = useState(initial?.title       ?? '')
  const [description, setDescription] = useState(initial?.description ?? '')
  const [date,        setDate]        = useState(initial?.date        ?? new Date().toISOString().split('T')[0])
  const [author,      setAuthor]      = useState(initial?.author      ?? 'Creative Wired')
  const [category,    setCategory]    = useState(initial?.category    ?? 'General')
  const [tags,        setTags]        = useState(initial?.tags        ?? '')
  const [image,       setImage]       = useState(initial?.image       ?? '')
  const [featured,    setFeatured]    = useState(initial?.featured    ?? false)

  const [metaTitle,       setMetaTitle]       = useState(initial?.metaTitle       ?? '')
  const [metaDescription, setMetaDescription] = useState(initial?.metaDescription ?? '')
  const [schemaType,      setSchemaType]      = useState(initial?.schemaType      ?? 'Article')
  const [autoToc,         setAutoToc]         = useState(initial?.autoToc         ?? true)
  const [faqs,            setFaqs]            = useState<FAQ[]>(initial?.faqs     ?? [])

  const slug = mode === 'edit' && initialSlug
    ? initialSlug
    : slugify(title, { lower: true, strict: true })

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit,
      Underline,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      TiptapImage.configure({ inline: false, allowBase64: true }),
      TiptapLink.configure({ openOnClick: false }),
      Placeholder.configure({ placeholder: 'Start writing your post…' }),
    ],
    content: mdToHtml(initial?.content ?? ''),
    editorProps: {
      attributes: {
        class: 'prose prose-neutral max-w-none focus:outline-none min-h-[400px] px-5 py-5 text-sm leading-relaxed',
      },
    },
  })

  useEffect(() => {
    if (!editor) return
    const update = () => forceUpdate(n => n + 1)
    editor.on('selectionUpdate', update)
    editor.on('transaction',     update)
    return () => {
      editor.off('selectionUpdate', update)
      editor.off('transaction',     update)
    }
  }, [editor])

  function autoGenerateSEO() {
    if (title       && !metaTitle)       setMetaTitle(title.slice(0, 60))
    if (description && !metaDescription) setMetaDescription(description.slice(0, 160))
  }

  function insertLink() {
    const url = window.prompt('Enter URL (use /blog/slug for internal links):')
    if (!url || !editor) return
    if (editor.state.selection.empty) {
      const text = window.prompt('Link text:') ?? url
      editor.chain().focus().insertContent(`<a href="${url}">${text}</a>`).run()
    } else {
      editor.chain().focus().setLink({ href: url }).run()
    }
  }

  const handleInlineImage = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file || !editor) return
    setUploadingImg(true)
    try {
      const dataUrl = await compressToWebP(file)
      editor.chain().focus().setImage({ src: dataUrl }).run()
    } catch { alert('Image compression failed.') }
    setUploadingImg(false)
    e.target.value = ''
  }, [editor])

  async function handleFeaturedImage(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    setUploadingImg(true)
    try {
      const dataUrl = await compressToWebP(file)
      setImage(dataUrl)
    } catch { alert('Image compression failed.') }
    setUploadingImg(false)
    e.target.value = ''
  }

  function addFaq() { setFaqs(f => [...f, { question: '', answer: '' }]) }
  function removeFaq(i: number) { setFaqs(f => f.filter((_, idx) => idx !== i)) }
  function updateFaq(i: number, k: keyof FAQ, v: string) {
    setFaqs(f => f.map((faq, idx) => idx === i ? { ...faq, [k]: v } : faq))
  }

  const isHeadingActive = (level: 1|2|3|4|5) => editor?.isActive('heading', { level }) ?? false
  const isParaActive = editor
    ? !isHeadingActive(1) && !isHeadingActive(2) && !isHeadingActive(3) &&
      !isHeadingActive(4) && !isHeadingActive(5) &&
      !editor.isActive('bulletList') && !editor.isActive('orderedList') &&
      !editor.isActive('blockquote') && !editor.isActive('codeBlock')
    : false

  function buildMDX() {
    const tagArray    = tags.split(',').map(t => t.trim()).filter(Boolean)
    const htmlContent = editor?.getHTML() ?? ''
    const content = htmlContent
      .replace(/<h1[^>]*>(.*?)<\/h1>/gi,              '# $1')
      .replace(/<h2[^>]*>(.*?)<\/h2>/gi,              '## $1')
      .replace(/<h3[^>]*>(.*?)<\/h3>/gi,              '### $1')
      .replace(/<h4[^>]*>(.*?)<\/h4>/gi,              '#### $1')
      .replace(/<h5[^>]*>(.*?)<\/h5>/gi,              '##### $1')
      .replace(/<strong>(.*?)<\/strong>/gi,            '**$1**')
      .replace(/<em>(.*?)<\/em>/gi,                   '_$1_')
      .replace(/<u>(.*?)<\/u>/gi,                     '$1')
      .replace(/<a href="([^"]*)"[^>]*>(.*?)<\/a>/gi, '[$2]($1)')
      .replace(/<img[^>]*src="([^"]*)"[^>]*\/?>/gi,   '![]($1)')
      .replace(/<blockquote>(.*?)<\/blockquote>/gis,  '> $1')
      .replace(/<li>(.*?)<\/li>/gi,                   '- $1')
      .replace(/<ul>|<\/ul>|<ol>|<\/ol>/gi,           '')
      .replace(/<p[^>]*>(.*?)<\/p>/gi,                '$1\n\n')
      .replace(/<hr\/?>/gi,                           '---')
      .replace(/<br\/?>/gi,                           '\n')
      .replace(/<[^>]+>/g,                            '')
      .replace(/&amp;/g,  '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;/g, ' ')
      .trim()

    const faqBlock = faqs.filter(f => f.question && f.answer).length > 0
      ? '\n\n## Frequently Asked Questions\n\n' +
        faqs.filter(f => f.question && f.answer).map(f => `**${f.question}**\n\n${f.answer}`).join('\n\n')
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
      '---', '',
      content + faqBlock,
    ].join('\n')
  }

  async function handleSave() {
    if (!title.trim())             return alert('Title is required.')
    if (!editor?.getText().trim()) return alert('Content is required.')
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

  // ── Shared toolbar renderer ───────────────────────────────────
  const renderToolbar = () => editor && (
    <div className="space-y-3">
      <div>
        <p className="text-[10px] text-neutral-400 mb-1.5">Headings</p>
        <div className="flex flex-wrap gap-1">
          {([1,2,3,4,5] as const).map(level => (
            <ToolbarBtn key={level} title={`Heading ${level}`} active={isHeadingActive(level)} onClick={() => editor.chain().focus().toggleHeading({ level }).run()}>
              H{level}
            </ToolbarBtn>
          ))}
          <ToolbarBtn title="Paragraph" active={isParaActive} onClick={() => editor.chain().focus().setParagraph().run()}>¶</ToolbarBtn>
        </div>
      </div>
      <div>
        <p className="text-[10px] text-neutral-400 mb-1.5">Format</p>
        <div className="flex flex-wrap gap-1">
          <ToolbarBtn title="Bold"          active={editor.isActive('bold')}      onClick={() => editor.chain().focus().toggleBold().run()}><strong>B</strong></ToolbarBtn>
          <ToolbarBtn title="Italic"        active={editor.isActive('italic')}    onClick={() => editor.chain().focus().toggleItalic().run()}><em>I</em></ToolbarBtn>
          <ToolbarBtn title="Underline"     active={editor.isActive('underline')} onClick={() => editor.chain().focus().toggleUnderline().run()}><span className="underline">U</span></ToolbarBtn>
          <ToolbarBtn title="Strikethrough" active={editor.isActive('strike')}    onClick={() => editor.chain().focus().toggleStrike().run()}><span className="line-through">S</span></ToolbarBtn>
          <ToolbarBtn title="Code"          active={editor.isActive('code')}      onClick={() => editor.chain().focus().toggleCode().run()}>{'<>'}</ToolbarBtn>
        </div>
      </div>
      <div>
        <p className="text-[10px] text-neutral-400 mb-1.5">Align</p>
        <div className="flex gap-1">
          <ToolbarBtn title="Align Left"   active={editor.isActive({ textAlign: 'left' })}   onClick={() => editor.chain().focus().setTextAlign('left').run()}><AlignLeft className="w-3.5 h-3.5" /></ToolbarBtn>
          <ToolbarBtn title="Align Center" active={editor.isActive({ textAlign: 'center' })} onClick={() => editor.chain().focus().setTextAlign('center').run()}><AlignCenter className="w-3.5 h-3.5" /></ToolbarBtn>
          <ToolbarBtn title="Align Right"  active={editor.isActive({ textAlign: 'right' })}  onClick={() => editor.chain().focus().setTextAlign('right').run()}><AlignRight className="w-3.5 h-3.5" /></ToolbarBtn>
        </div>
      </div>
      <div>
        <p className="text-[10px] text-neutral-400 mb-1.5">Lists & Blocks</p>
        <div className="flex flex-wrap gap-1">
          <ToolbarBtn title="Bullet List"   active={editor.isActive('bulletList')}  onClick={() => editor.chain().focus().toggleBulletList().run()}>• List</ToolbarBtn>
          <ToolbarBtn title="Numbered List" active={editor.isActive('orderedList')} onClick={() => editor.chain().focus().toggleOrderedList().run()}>1. List</ToolbarBtn>
          <ToolbarBtn title="Blockquote"    active={editor.isActive('blockquote')}  onClick={() => editor.chain().focus().toggleBlockquote().run()}>"</ToolbarBtn>
          <ToolbarBtn title="Code Block"    active={editor.isActive('codeBlock')}   onClick={() => editor.chain().focus().toggleCodeBlock().run()}>{'{ }'}</ToolbarBtn>
          <ToolbarBtn title="Divider"       onClick={() => editor.chain().focus().setHorizontalRule().run()}>—</ToolbarBtn>
        </div>
      </div>
      <div>
        <p className="text-[10px] text-neutral-400 mb-1.5">Insert</p>
        <div className="flex gap-1">
          <ToolbarBtn title="Insert Link" active={editor.isActive('link')} onClick={insertLink}>
            <Link2 className="w-3.5 h-3.5" />
          </ToolbarBtn>
          <label title="Insert Image" className="px-2 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 flex items-center gap-1">
            {uploadingImg ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <ImageIcon className="w-3.5 h-3.5" />}
            <input type="file" accept="image/*" className="hidden" onChange={handleInlineImage} />
          </label>
        </div>
      </div>
      <div className="flex gap-1 pt-2 border-t border-neutral-100">
        <ToolbarBtn title="Undo" onClick={() => editor.chain().focus().undo().run()}>↩ Undo</ToolbarBtn>
        <ToolbarBtn title="Redo" onClick={() => editor.chain().focus().redo().run()}>↪ Redo</ToolbarBtn>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-[#f5f5f7]">

      {/* Top bar */}
      <header className="bg-white/80 backdrop-blur-md border-b border-neutral-200/60 px-5 md:px-8 py-3.5 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <Link href="/admin/posts" className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 hover:text-neutral-900 hover:border-neutral-900 transition-all">
            <ArrowLeft className="w-3.5 h-3.5" />
          </Link>
          <div>
            <span className="text-sm font-semibold text-neutral-900">{mode === 'new' ? 'New Post' : 'Edit Post'}</span>
            {slug && <span className="text-[11px] text-neutral-400 ml-2 font-mono">/blog/{slug}</span>}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setPreview(v => !v)} className="inline-flex items-center gap-1.5 text-xs text-neutral-600 border border-neutral-200 px-3 py-1.5 rounded-full hover:border-neutral-400 transition-all">
            <Eye className="w-3.5 h-3.5" /> {preview ? 'Edit' : 'Preview'}
          </button>
          <button onClick={handleSave} disabled={saving} className="inline-flex items-center gap-1.5 bg-neutral-900 text-white text-xs font-medium px-4 py-2 rounded-full hover:bg-neutral-700 transition-colors disabled:opacity-50">
            {saving ? <><Loader2 className="w-3.5 h-3.5 animate-spin" /> Saving…</> : saved ? '✓ Saved!' : <><Save className="w-3.5 h-3.5" /> Publish</>}
          </button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-5 md:px-8 py-8">
        <div className="grid md:grid-cols-3 gap-5 items-start">

          {/* ── Left column ── */}
          <div className="md:col-span-2 space-y-4">

            {/* Title */}
            <div className="bg-white rounded-2xl border border-neutral-200/60 shadow-sm p-5">
              <label className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 block mb-2">Title *</label>
              <input
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Your post title..."
                className="w-full text-xl font-bold text-neutral-900 focus:outline-none placeholder:text-neutral-300"
              />
              {slug && <p className="text-[11px] text-neutral-300 mt-2 font-mono">slug: {slug}</p>}
            </div>

            {/* Description */}
            <div className="bg-white rounded-2xl border border-neutral-200/60 shadow-sm p-5">
              <label className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 block mb-2">Description / Excerpt *</label>
              <textarea
                value={description}
                onChange={e => setDescription(e.target.value)}
                rows={2}
                placeholder="Brief description for SEO and post cards..."
                className="w-full text-sm text-neutral-700 font-light focus:outline-none resize-none placeholder:text-neutral-300"
              />
            </div>

            {/* Rich Editor */}
            <div className="bg-white rounded-2xl border border-neutral-200/60 shadow-sm overflow-hidden">

              {/* Top Toolbar (horizontal, no sticky) */}
              {!preview && editor && (
                <div className="border-b border-neutral-100 px-3 py-2 flex flex-wrap gap-0.5 items-center">
                  <div className="flex items-center gap-0.5 pr-2 mr-1 border-r border-neutral-100">
                    {([1,2,3,4,5] as const).map(level => (
                      <ToolbarBtn key={level} title={`Heading ${level}`} active={isHeadingActive(level)} onClick={() => editor.chain().focus().toggleHeading({ level }).run()}>
                        H{level}
                      </ToolbarBtn>
                    ))}
                    <ToolbarBtn title="Paragraph" active={isParaActive} onClick={() => editor.chain().focus().setParagraph().run()}>¶</ToolbarBtn>
                  </div>
                  <div className="flex items-center gap-0.5 pr-2 mr-1 border-r border-neutral-100">
                    <ToolbarBtn title="Bold"          active={editor.isActive('bold')}      onClick={() => editor.chain().focus().toggleBold().run()}><strong>B</strong></ToolbarBtn>
                    <ToolbarBtn title="Italic"        active={editor.isActive('italic')}    onClick={() => editor.chain().focus().toggleItalic().run()}><em>I</em></ToolbarBtn>
                    <ToolbarBtn title="Underline"     active={editor.isActive('underline')} onClick={() => editor.chain().focus().toggleUnderline().run()}><span className="underline">U</span></ToolbarBtn>
                    <ToolbarBtn title="Strikethrough" active={editor.isActive('strike')}    onClick={() => editor.chain().focus().toggleStrike().run()}><span className="line-through">S</span></ToolbarBtn>
                    <ToolbarBtn title="Code"          active={editor.isActive('code')}      onClick={() => editor.chain().focus().toggleCode().run()}>{'<>'}</ToolbarBtn>
                  </div>
                  <div className="flex items-center gap-0.5 pr-2 mr-1 border-r border-neutral-100">
                    <ToolbarBtn title="Align Left"   active={editor.isActive({ textAlign: 'left' })}   onClick={() => editor.chain().focus().setTextAlign('left').run()}><AlignLeft className="w-3.5 h-3.5" /></ToolbarBtn>
                    <ToolbarBtn title="Align Center" active={editor.isActive({ textAlign: 'center' })} onClick={() => editor.chain().focus().setTextAlign('center').run()}><AlignCenter className="w-3.5 h-3.5" /></ToolbarBtn>
                    <ToolbarBtn title="Align Right"  active={editor.isActive({ textAlign: 'right' })}  onClick={() => editor.chain().focus().setTextAlign('right').run()}><AlignRight className="w-3.5 h-3.5" /></ToolbarBtn>
                  </div>
                  <div className="flex items-center gap-0.5 pr-2 mr-1 border-r border-neutral-100">
                    <ToolbarBtn title="Bullet List"   active={editor.isActive('bulletList')}  onClick={() => editor.chain().focus().toggleBulletList().run()}>• List</ToolbarBtn>
                    <ToolbarBtn title="Numbered List" active={editor.isActive('orderedList')} onClick={() => editor.chain().focus().toggleOrderedList().run()}>1. List</ToolbarBtn>
                    <ToolbarBtn title="Blockquote"    active={editor.isActive('blockquote')}  onClick={() => editor.chain().focus().toggleBlockquote().run()}>"</ToolbarBtn>
                    <ToolbarBtn title="Code Block"    active={editor.isActive('codeBlock')}   onClick={() => editor.chain().focus().toggleCodeBlock().run()}>{'{ }'}</ToolbarBtn>
                    <ToolbarBtn title="Divider"       onClick={() => editor.chain().focus().setHorizontalRule().run()}>—</ToolbarBtn>
                  </div>
                  <div className="flex items-center gap-0.5">
                    <ToolbarBtn title="Insert Link" active={editor.isActive('link')} onClick={insertLink}><Link2 className="w-3.5 h-3.5" /></ToolbarBtn>
                    <label title="Insert Image" className="px-2 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 flex items-center gap-1">
                      {uploadingImg ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <ImageIcon className="w-3.5 h-3.5" />}
                      <input type="file" accept="image/*" className="hidden" onChange={handleInlineImage} />
                    </label>
                  </div>
                  <div className="flex items-center gap-0.5 ml-auto">
                    <ToolbarBtn title="Undo" onClick={() => editor.chain().focus().undo().run()}>↩</ToolbarBtn>
                    <ToolbarBtn title="Redo" onClick={() => editor.chain().focus().redo().run()}>↪</ToolbarBtn>
                  </div>
                </div>
              )}

              {preview ? (
                <div className="p-6 min-h-[400px]">
                  <div className="prose prose-neutral max-w-none text-sm" dangerouslySetInnerHTML={{ __html: editor?.getHTML() ?? '' }} />
                </div>
              ) : (
                <EditorContent editor={editor} />
              )}
            </div>

            {/* FAQ */}
            <div className="bg-white rounded-2xl border border-neutral-200/60 shadow-sm p-5">
              <div className="flex items-center justify-between mb-4">
                <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">FAQ Items</p>
                <button type="button" onClick={addFaq} className="inline-flex items-center gap-1 text-[11px] text-neutral-500 border border-neutral-200 px-2.5 py-1 rounded-full hover:border-neutral-900 hover:text-neutral-900 transition-all">
                  <Plus className="w-3 h-3" /> Add FAQ
                </button>
              </div>
              {faqs.length === 0 ? (
                <p className="text-xs text-neutral-300 font-light">No FAQs yet. FAQs generate FAQ schema for SEO.</p>
              ) : (
                <div className="space-y-3">
                  {faqs.map((faq, i) => (
                    <div key={i} className="border border-neutral-100 rounded-xl p-4 space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] uppercase tracking-wider text-neutral-400">FAQ {i + 1}</span>
                        <button type="button" onClick={() => removeFaq(i)} className="text-neutral-300 hover:text-red-400 transition-colors">
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <input type="text" value={faq.question} onChange={e => updateFaq(i, 'question', e.target.value)} placeholder="Question" className="w-full border border-neutral-200 rounded-lg px-3 py-2 text-xs text-neutral-700 focus:outline-none focus:border-neutral-900 transition-colors" />
                      <textarea value={faq.answer} onChange={e => updateFaq(i, 'answer', e.target.value)} rows={2} placeholder="Answer" className="w-full border border-neutral-200 rounded-lg px-3 py-2 text-xs text-neutral-700 focus:outline-none focus:border-neutral-900 transition-colors resize-none" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* ── Right column — sticky as a whole ── */}
          <div className="space-y-4 self-start sticky top-[65px]">

            {/* Post Settings */}
            <div className="bg-white rounded-2xl border border-neutral-200/60 shadow-sm p-5 space-y-4">
              <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">Post Settings</p>
              <div>
                <label className="text-[11px] text-neutral-500 block mb-1.5">Date</label>
                <input type="date" value={date} onChange={e => setDate(e.target.value)} className="w-full border border-neutral-200 rounded-xl px-3 py-2 text-xs text-neutral-700 focus:outline-none focus:border-neutral-900 transition-colors" />
              </div>
              <div>
                <label className="text-[11px] text-neutral-500 block mb-1.5">Author</label>
                <input type="text" value={author} onChange={e => setAuthor(e.target.value)} className="w-full border border-neutral-200 rounded-xl px-3 py-2 text-xs text-neutral-700 focus:outline-none focus:border-neutral-900 transition-colors" />
              </div>
              <div>
                <label className="text-[11px] text-neutral-500 block mb-1.5">Category</label>
                <select value={category} onChange={e => setCategory(e.target.value)} className="w-full border border-neutral-200 rounded-xl px-3 py-2 text-xs text-neutral-700 focus:outline-none focus:border-neutral-900 transition-colors">
                  {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="text-[11px] text-neutral-500 block mb-1.5">Tags <span className="text-neutral-300">(comma separated)</span></label>
                <input type="text" value={tags} onChange={e => setTags(e.target.value)} placeholder="SEO, Dubai, Google" className="w-full border border-neutral-200 rounded-xl px-3 py-2 text-xs text-neutral-700 focus:outline-none focus:border-neutral-900 transition-colors" />
              </div>
              <div>
                <label className="text-[11px] text-neutral-500 block mb-1.5">Featured Image</label>
                <label className="flex items-center gap-2 cursor-pointer w-full border border-dashed border-neutral-200 rounded-xl px-3 py-3 hover:border-neutral-400 transition-colors">
                  {uploadingImg ? <Loader2 className="w-4 h-4 animate-spin text-neutral-400" /> : <ImageIcon className="w-4 h-4 text-neutral-400" />}
                  <span className="text-xs text-neutral-400">{image ? 'Change image' : 'Upload image'} — auto-compressed to WebP</span>
                  <input type="file" accept="image/*" className="hidden" onChange={handleFeaturedImage} />
                </label>
                {image && (
                  <div className="mt-2 relative group">
                    <img src={image} alt="featured" className="w-full aspect-video object-cover rounded-xl border border-neutral-100" />
                    <button onClick={() => setImage('')} className="absolute top-2 right-2 bg-white rounded-full p-1 shadow opacity-0 group-hover:opacity-100 transition-opacity">
                      <Trash2 className="w-3 h-3 text-red-400" />
                    </button>
                  </div>
                )}
              </div>
              <div className="flex items-center gap-3 pt-1">
                <input type="checkbox" id="featured" checked={featured} onChange={e => setFeatured(e.target.checked)} className="w-4 h-4 rounded border-neutral-300 accent-neutral-900" />
                <label htmlFor="featured" className="text-[11px] text-neutral-600 cursor-pointer">Mark as featured post</label>
              </div>
            </div>

            {/* Format Toolbar */}
            {editor && (
              <div className="bg-white rounded-2xl border border-neutral-200/60 shadow-sm p-4">
                <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-3">Format</p>
                {renderToolbar()}
              </div>
            )}

            {/* Advanced SEO */}
            <div className="bg-white rounded-2xl border border-neutral-200/60 shadow-sm p-5 space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">Advanced SEO</p>
                <button type="button" onClick={autoGenerateSEO} className="inline-flex items-center gap-1 text-[11px] text-neutral-500 border border-neutral-200 px-2.5 py-1 rounded-full hover:border-neutral-900 hover:text-neutral-900 transition-all">
                  <Wand2 className="w-3 h-3" /> Auto-fill
                </button>
              </div>
              <div>
                <label className="text-[11px] text-neutral-500 block mb-1.5">
                  Meta Title
                  <span className={`ml-1.5 ${metaTitle.length > 55 ? 'text-orange-400' : 'text-neutral-300'}`}>{metaTitle.length}/60</span>
                </label>
                <input type="text" value={metaTitle} onChange={e => setMetaTitle(e.target.value)} maxLength={60} placeholder={title || 'SEO title…'} className="w-full border border-neutral-200 rounded-xl px-3 py-2 text-xs text-neutral-700 focus:outline-none focus:border-neutral-900 transition-colors" />
              </div>
              <div>
                <label className="text-[11px] text-neutral-500 block mb-1.5">
                  Meta Description
                  <span className={`ml-1.5 ${metaDescription.length > 145 ? 'text-orange-400' : 'text-neutral-300'}`}>{metaDescription.length}/160</span>
                </label>
                <textarea value={metaDescription} onChange={e => setMetaDescription(e.target.value)} maxLength={160} rows={3} placeholder={description || 'SEO description…'} className="w-full border border-neutral-200 rounded-xl px-3 py-2 text-xs text-neutral-700 focus:outline-none focus:border-neutral-900 transition-colors resize-none" />
              </div>
              <div>
                <label className="text-[11px] text-neutral-500 block mb-1.5">Schema Type</label>
                <select value={schemaType} onChange={e => setSchemaType(e.target.value)} className="w-full border border-neutral-200 rounded-xl px-3 py-2 text-xs text-neutral-700 focus:outline-none focus:border-neutral-900 transition-colors">
                  <option value="Article">Article (Default)</option>
                  <option value="BlogPosting">Blog Posting</option>
                  <option value="NewsArticle">News Article</option>
                </select>
              </div>
              <div className="flex items-center gap-3">
                <input type="checkbox" id="auto-toc" checked={autoToc} onChange={e => setAutoToc(e.target.checked)} className="w-4 h-4 rounded border-neutral-300 accent-neutral-900" />
                <label htmlFor="auto-toc" className="text-[11px] text-neutral-600 cursor-pointer">Auto-generate Table of Contents</label>
              </div>
              <div className="border border-neutral-100 rounded-xl p-3 bg-neutral-50">
                <p className="text-[9px] uppercase tracking-wider text-neutral-400 mb-2">Google Preview</p>
                <p className="text-[13px] text-blue-600 font-medium leading-tight truncate">{metaTitle || title || 'Post Title'}</p>
                <p className="text-[11px] text-green-700 truncate mt-0.5">creativewired.com/blog/{slug || 'post-slug'}</p>
                <p className="text-[11px] text-neutral-500 mt-1 line-clamp-2 leading-relaxed">{metaDescription || description || 'Post description will appear here…'}</p>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  )
}
