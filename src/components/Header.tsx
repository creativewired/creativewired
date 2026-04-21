import Link from 'next/link'
import Image from 'next/image'
import Navigation from './Navigation'

interface HeaderProps {
  currentPage?: string
}

export default function Header({ currentPage }: HeaderProps) {
  return (
    <header className="fixed top-0 w-full z-50">

      {/* Backdrop */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-md border-b border-neutral-100" />

      <div className="relative max-w-6xl mx-auto px-5 md:px-12 lg:px-20">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group"
          >
            <Image
              src="/logo.png"
              alt="Creative Wired"
              width={28}
              height={28}
              className="h-7 w-auto"
              priority
            />
            <span className="text-sm font-bold text-neutral-900 tracking-tight group-hover:text-neutral-600 transition-colors">
              Creative Wired
            </span>
          </Link>

          {/* Navigation */}
          <Navigation currentPage={currentPage} />

        </div>
      </div>
    </header>
  )
}
