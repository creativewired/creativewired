import Link from 'next/link'
import Image from 'next/image'
import Navigation from './Navigation'

interface HeaderProps {
  currentPage?: string
}

export default function Header({ currentPage }: HeaderProps) {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="Creative Wired Logo"
              width={32}
              height={32}
              className="h-8 w-auto"
              priority
            />
            <span className="text-xl font-bold text-black">Creative Wired</span>
          </Link>
          
          <Navigation currentPage={currentPage} />
        </div>
      </div>
    </header>
  )
}
