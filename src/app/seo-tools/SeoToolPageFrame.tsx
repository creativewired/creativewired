import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SeoToolClient from './SeoToolClient'
import type { SeoToolPageConfig } from './tool-content'

export default function SeoToolPageFrame({ config }: { config: SeoToolPageConfig }) {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header currentPage="seo-tool" />
      <SeoToolClient config={config} />
      <Footer />
    </div>
  )
}
