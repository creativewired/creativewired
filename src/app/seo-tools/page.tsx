import type { Metadata } from 'next'
import SeoToolPageFrame from './SeoToolPageFrame'
import { seoToolPages } from './tool-content'

export const metadata: Metadata = {
  title: seoToolPages.audit.metadata.title,
  description: seoToolPages.audit.metadata.description,
}

export default function SeoToolPage() {
  return <SeoToolPageFrame config={seoToolPages.audit} />
}
