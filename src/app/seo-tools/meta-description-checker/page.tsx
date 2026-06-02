import type { Metadata } from 'next'
import SeoToolPageFrame from '../SeoToolPageFrame'
import { seoToolPages } from '../tool-content'

const config = seoToolPages['meta-description-checker']

export const metadata: Metadata = {
  title: config.metadata.title,
  description: config.metadata.description,
}

export default function MetaDescriptionCheckerPage() {
  return <SeoToolPageFrame config={config} />
}
