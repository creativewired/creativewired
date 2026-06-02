import type { Metadata } from 'next'
import SeoToolPageFrame from '../SeoToolPageFrame'
import { seoToolPages } from '../tool-content'

const config = seoToolPages['title-tag-checker']

export const metadata: Metadata = {
  title: config.metadata.title,
  description: config.metadata.description,
}

export default function TitleTagCheckerPage() {
  return <SeoToolPageFrame config={config} />
}
