import { ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function GlassCard({ children, className = '', hover = false }: GlassCardProps) {
  return (
    <div className={`
      glass-card p-6 
      ${hover ? 'hover:scale-105 transition-transform duration-300' : ''}
      ${className}
    `}>
      {children}
    </div>
  )
}
