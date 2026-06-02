import type { Metadata } from 'next'
import SeoToolPageFrame from '../SeoToolPageFrame'
import { seoToolPages } from '../tool-content'

const config = seoToolPages['twitter-card-checker']

export const metadata: Metadata = {
  title: config.metadata.title,
  description: config.metadata.description,
}

export default function TwitterCardCheckerPage() {
  return <SeoToolPageFrame config={config} />
}
