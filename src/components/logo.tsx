import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
  variant?: 'light' | 'dark'
  size?: 'sm' | 'md' | 'lg'
  withText?: boolean
  className?: string
}

export default function Logo({ 
  variant = 'light', 
  size = 'md', 
  withText = false,
  className = '' 
}: LogoProps) {
  const sizeClasses = {
    sm: 'h-6',
    md: 'h-8',
    lg: 'h-10'
  }

  const logoSrc = variant === 'light' ? '/logo.png' : '/logo-white.png'

  return (
    <Link href="/" className={`flex items-center space-x-2 ${className}`}>
      <Image
        src={logoSrc}
        alt="DigiFlow Logo"
        width={120}
        height={40}
        className={`w-auto ${sizeClasses[size]}`}
        priority
      />
      {withText && (
        <span className={`font-bold ${variant === 'light' ? 'text-black' : 'text-white'} ${
          size === 'lg' ? 'text-xl' : size === 'md' ? 'text-lg' : 'text-base'
        }`}>
          DigiFlow
        </span>
      )}
    </Link>
  )
}
