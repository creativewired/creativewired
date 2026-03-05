import { NextRequest, NextResponse } from 'next/server'
import { unlink } from 'fs/promises'
import { join } from 'path'
import { existsSync } from 'fs'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    console.log('🗑️ DELETE route hit')
    console.log('📦 Request body:', JSON.stringify(body, null, 2))

    const { filename, type, slug, id } = body
    const identifier = filename || slug || id

    if (!identifier) {
      console.log('❌ No identifier found in body:', body)
      return NextResponse.json(
        { error: 'Missing filename, slug or id', received: body },
        { status: 400 }
      )
    }

    // If no type provided, search all folders for the file
    const folderMap: Record<string, string> = {
      blog:           'src/content/blog',
      'case-study':   'src/content/case-studies',
      'case-studies': 'src/content/case-studies',
      project:        'src/content/projects',
      projects:       'src/content/projects',
    }

    // If type is provided, only check that folder
    // Otherwise scan all folders for the filename
    let filePath: string | null = null

    if (type && folderMap[type]) {
      const candidate = join(process.cwd(), folderMap[type], `${identifier}.mdx`)
      if (existsSync(candidate)) filePath = candidate
    } else {
      for (const folder of Object.values(folderMap)) {
        const candidate = join(process.cwd(), folder, `${identifier}.mdx`)
        console.log('🔍 Checking:', candidate, '| exists:', existsSync(candidate))
        if (existsSync(candidate)) {
          filePath = candidate
          break
        }
      }
    }

    if (!filePath) {
      console.log('❌ File not found for identifier:', identifier)
      return NextResponse.json(
        { error: 'File not found', identifier },
        { status: 404 }
      )
    }

    await unlink(filePath)
    console.log('✅ Deleted:', filePath)

    return NextResponse.json({ success: true, deleted: filePath })
  } catch (err) {
    console.error('💥 DELETE route error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
