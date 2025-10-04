'use client'

import { useState, useRef } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Upload, X, Loader2, Image as ImageIcon } from 'lucide-react'
import imageCompression from 'browser-image-compression'

interface ImageUploadProps {
  onImageUploaded: (url: string) => void
  currentImage?: string
}

export default function ImageUpload({ onImageUploaded, currentImage }: ImageUploadProps) {
  const [uploading, setUploading] = useState(false)
  const [preview, setPreview] = useState<string>(currentImage || '')
  const [dragActive, setDragActive] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const supabase = createClient()

  // Convert image to WebP and compress
  const processImage = async (file: File): Promise<Blob> => {
    try {
      // Compression options
      const options = {
        maxSizeMB: 1, // Max file size 1MB
        maxWidthOrHeight: 1920, // Max dimension
        useWebWorker: true,
        fileType: 'image/webp', // Convert to WebP
      }

      const compressedFile = await imageCompression(file, options)
      return compressedFile
    } catch (error) {
      console.error('Error processing image:', error)
      throw error
    }
  }

  const uploadImage = async (file: File) => {
    try {
      setUploading(true)

      // Process and convert to WebP
      const processedImage = await processImage(file)
      
      // Generate unique filename with .webp extension
      const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.webp`
      const filePath = fileName

      // Upload to Supabase Storage
      const { error: uploadError } = await supabase.storage
        .from('blog-images')
        .upload(filePath, processedImage, {
          contentType: 'image/webp',
          cacheControl: '3600',
          upsert: false
        })

      if (uploadError) {
        throw uploadError
      }

      // Get public URL
      const { data } = supabase.storage
        .from('blog-images')
        .getPublicUrl(filePath)

      const publicUrl = data.publicUrl

      // Set preview
      setPreview(publicUrl)
      
      // Call parent callback
      onImageUploaded(publicUrl)

      alert('Image uploaded successfully!')
    } catch (error: any) {
      console.error('Error uploading image:', error)
      alert(error.message || 'Error uploading image')
    } finally {
      setUploading(false)
    }
  }

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      return
    }
    await uploadImage(e.target.files[0])
  }

  // Drag and drop handlers
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      await uploadImage(e.dataTransfer.files[0])
    }
  }

  const removeImage = async () => {
    // Optional: Delete from Supabase Storage
    if (preview) {
      try {
        const filename = preview.split('/').pop()
        if (filename) {
          await supabase.storage
            .from('blog-images')
            .remove([filename])
        }
      } catch (error) {
        console.error('Error deleting image:', error)
      }
    }
    
    setPreview('')
    onImageUploaded('')
  }

  return (
    <div className="space-y-4">
      {!preview ? (
        <div
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          className={`border-2 border-dashed rounded-lg p-8 text-center transition-all duration-200 ${
            dragActive
              ? 'border-yellow-500 bg-yellow-50'
              : 'border-gray-300 hover:border-yellow-400'
          }`}
        >
          <input
            ref={inputRef}
            type="file"
            id="image-upload"
            accept="image/*"
            onChange={handleFileChange}
            disabled={uploading}
            className="hidden"
          />
          <label
            htmlFor="image-upload"
            className="cursor-pointer flex flex-col items-center space-y-3"
          >
            {uploading ? (
              <>
                <Loader2 className="w-12 h-12 text-yellow-500 animate-spin" />
                <p className="text-gray-600 font-medium">Processing & Uploading...</p>
                <p className="text-sm text-gray-500">Converting to WebP format</p>
              </>
            ) : (
              <>
                <div className="p-4 bg-yellow-100 rounded-full">
                  <Upload className="w-8 h-8 text-yellow-600" />
                </div>
                <div>
                  <p className="text-gray-700 font-medium mb-1">
                    <span className="text-yellow-600 font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-sm text-gray-500">
                    PNG, JPG, GIF, WebP up to 10MB
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    ⚡ Auto-converted to WebP for optimal performance
                  </p>
                </div>
              </>
            )}
          </label>
        </div>
      ) : (
        <div className="relative group">
          <img
            src={preview}
            alt="Preview"
            className="max-w-full h-auto rounded-lg border border-gray-200"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-200 rounded-lg flex items-center justify-center">
            <button
              type="button"
              onClick={removeImage}
              className="opacity-0 group-hover:opacity-100 transition-opacity p-3 bg-red-500 text-white rounded-full hover:bg-red-600 transform hover:scale-110"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
            WebP Format
          </div>
        </div>
      )}
    </div>
  )
}
