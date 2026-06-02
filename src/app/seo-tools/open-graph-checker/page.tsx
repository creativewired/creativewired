import type { Metadata } from 'next'
import SeoToolPageFrame from '../SeoToolPageFrame'
import { seoToolPages } from '../tool-content'

const config = seoToolPages['open-graph-checker']

export const metadata: Metadata = {
  title: config.metadata.title,
  description: config.metadata.description,
}

export default function OpenGraphCheckerPage() {
  return <SeoToolPageFrame config={config} />
}
