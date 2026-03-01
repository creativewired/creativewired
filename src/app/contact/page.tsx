import type { Metadata } from 'next'
import ContactPageClient from './ContactPageClient'

export const metadata: Metadata = {
  title: 'Contact Creative Wired | Digital Marketing Agency Dubai & Kochi',
  description: 'Contact Creative Wired — top-rated digital marketing, SEO and web development agency in Dubai, Abu Dhabi, Kochi and Kerala. Free consultation. Response within 2 hours.',
  keywords: 'contact digital marketing agency Dubai, SEO agency contact Kochi, web development agency UAE, Creative Wired contact',
}

export default function ContactPage() {
  return <ContactPageClient />
}
