'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Link from '@tiptap/extension-link'
import Image from '@tiptap/extension-image'
import Placeholder from '@tiptap/extension-placeholder'
import { createClient } from '@/lib/supabase/client'
import imageCompression from 'browser-image-compression'

import { 
  Bold, 
  Italic, 
  List, 
  ListOrdered, 
  Quote, 
  Undo, 
  Redo, 
  Link as LinkIcon,
  Image as ImageIcon,
} from 'lucide-react'

interface TipTapEditorProps {
  content: string | any // HTML or JSON
  onChange: (payload: { html: string; json: any }) => void
  placeholder?: string
}

export default function TipTapEditor({ content, onChange, placeholder = 'Start writing...' }: TipTapEditorProps) {
  const supabase = createClient()

  // TipTap accepts HTML string or JSON as initial content
  const initialContent = content || '<p></p>'

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3, 4, 5, 6],
        },
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-blue-600 underline hover:text-blue-700',
        },
      }),
      Image.configure({
        HTMLAttributes: {
          class: 'max-w-full h-auto rounded-lg',
        },
      }),
      Placeholder.configure({
        placeholder,
      }),
    ],
    content: initialContent as any,
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto focus:outline-none min-h-[300px] p-4',
      },
      handlePaste: (view, event, slice) => {
        const items = Array.from(event.clipboardData?.items || [])
        for (const item of items) {
          if (item.type.startsWith('image/')) {
            event.preventDefault()
            const file = item.getAsFile()
            if (!file) continue
            ;(async () => {
              try {
                const options = {
                  maxSizeMB: 1,
                  maxWidthOrHeight: 1920,
                  useWebWorker: true,
                  fileType: 'image/webp' as const,
                }
                const compressedFile = await imageCompression(file, options)
                const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.webp`
                const { error: uploadError } = await supabase.storage
                  .from('blog-images')
                  .upload(fileName, compressedFile, {
                    contentType: 'image/webp',
                    cacheControl: '3600',
                  })
                if (uploadError) throw uploadError
                const { data } = supabase.storage.from('blog-images').getPublicUrl(fileName)
                if (editor) editor.chain().focus().setImage({ src: data.publicUrl }).run()
              } catch (err) {
                console.error('Pasted image upload error:', err)
                alert('Error uploading pasted image')
              }
            })()
            return true
          }
        }
        return false
      },
      handleDrop: async (view, event, slice, moved) => {
        if (!moved && event.dataTransfer?.files && event.dataTransfer.files[0]) {
          const file = event.dataTransfer.files[0]
          if (file.type.startsWith('image/')) {
            event.preventDefault()
            try {
              const options = {
                maxSizeMB: 1,
                maxWidthOrHeight: 1920,
                useWebWorker: true,
                fileType: 'image/webp' as const,
              }
              const compressedFile = await imageCompression(file, options)
              const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.webp`
              const { error: uploadError } = await supabase.storage
                .from('blog-images')
                .upload(fileName, compressedFile, {
                  contentType: 'image/webp',
                  cacheControl: '3600',
                })
              if (uploadError) throw uploadError
              const { data } = supabase.storage.from('blog-images').getPublicUrl(fileName)
              const coordinates = view.posAtCoords({ left: event.clientX, top: event.clientY })
              if (coordinates && editor) {
                editor.chain().focus().insertContentAt(coordinates.pos, {
                  type: 'image',
                  attrs: { src: data.publicUrl },
                }).run()
              }
              return true
            } catch (err) {
              console.error('Dropped image upload error:', err)
              alert('Error uploading image')
              return false
            }
          }
        }
        return false
      },
    },
    onUpdate: ({ editor }) => {
      const html = editor.getHTML()
      const json = editor.getJSON()
      onChange({ html, json })
    },
  })

  if (!editor) return null

  const addLink = () => {
    const url = window.prompt('Enter URL:')
    if (url) editor.chain().focus().setLink({ href: url }).run()
  }

  const addImage = async () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = 'image/*'
    input.onchange = async (e: any) => {
      const file = e.target.files?.[0]
      if (!file) return
      try {
        editor.chain().focus().insertContent('<p class="text-gray-500">Uploading image...</p>').run()
        const options = {
          maxSizeMB: 1,
          maxWidthOrHeight: 1920,
          useWebWorker: true,
          fileType: 'image/webp' as const,
        }
        const compressedFile = await imageCompression(file, options)
        const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.webp`
        const { error: uploadError } = await supabase.storage
          .from('blog-images')
          .upload(fileName, compressedFile, {
            contentType: 'image/webp',
            cacheControl: '3600',
          })
        if (uploadError) throw uploadError
        const { data } = supabase.storage.from('blog-images').getPublicUrl(fileName)
        // remove the temporary uploading text (last paragraph)
        const doc = editor.state.doc
        const lastPos = doc.content.size - 1
        editor.chain().focus().deleteRange({ from: lastPos - 30, to: lastPos }).run()
        editor.chain().focus().setImage({ src: data.publicUrl }).run()
      } catch (err) {
        console.error('Button image upload error:', err)
        alert('Error uploading image')
      }
    }
    input.click()
  }

  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden">
      <div className="bg-gray-50 border-b border-gray-300 p-2 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`p-2 rounded hover:bg-gray-200 ${editor.isActive('bold') ? 'bg-gray-300' : ''}`}
          title="Bold"
        >
          <Bold className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`p-2 rounded hover:bg-gray-200 ${editor.isActive('italic') ? 'bg-gray-300' : ''}`}
          title="Italic"
        >
          <Italic className="w-4 h-4" />
        </button>

        <div className="w-px bg-gray-300 mx-1" />

        {([1,2,3,4,5,6] as const).map((lvl) => (
          <button
            key={lvl}
            type="button"
            onClick={() => editor.chain().focus().toggleHeading({ level: lvl }).run()}
            className={`px-2 py-1 rounded hover:bg-gray-200 text-xs font-semibold ${editor.isActive('heading', { level: lvl }) ? 'bg-gray-300' : ''}`}
            title={`Heading ${lvl}`}
          >
            H{lvl}
          </button>
        ))}

        <div className="w-px bg-gray-300 mx-1" />

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`p-2 rounded hover:bg-gray-200 ${editor.isActive('bulletList') ? 'bg-gray-300' : ''}`}
          title="Bullet List"
        >
          <List className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`p-2 rounded hover:bg-gray-200 ${editor.isActive('orderedList') ? 'bg-gray-300' : ''}`}
          title="Numbered List"
        >
          <ListOrdered className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`p-2 rounded hover:bg-gray-200 ${editor.isActive('blockquote') ? 'bg-gray-300' : ''}`}
          title="Quote"
        >
          <Quote className="w-4 h-4" />
        </button>

        <div className="w-px bg-gray-300 mx-1" />

        <button
          type="button"
          onClick={addLink}
          className={`p-2 rounded hover:bg-gray-200 ${editor.isActive('link') ? 'bg-gray-300' : ''}`}
          title="Add Link"
        >
          <LinkIcon className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={addImage}
          className="p-2 rounded hover:bg-yellow-200 bg-yellow-100"
          title="Upload Image"
        >
          <ImageIcon className="w-4 h-4" />
        </button>

        <div className="w-px bg-gray-300 mx-1" />

        <button
          type="button"
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
          className="p-2 rounded hover:bg-gray-200 disabled:opacity-50"
          title="Undo"
        >
          <Undo className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
          className="p-2 rounded hover:bg-gray-200 disabled:opacity-50"
          title="Redo"
        >
          <Redo className="w-4 h-4" />
        </button>
      </div>

      <EditorContent editor={editor} />

      <div className="bg-gray-50 border-t border-gray-300 px-4 py-2 text-xs text-gray-500">
        Paste images directly • Drag & drop images • All images auto-convert to WebP
      </div>
    </div>
  )
}
