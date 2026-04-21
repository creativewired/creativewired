'use client'

import { useState, useEffect } from 'react'

interface FloatingElement {
  id: number
  x: number
  y: number
  size: number
  speed: number
  direction: number
  type: 'circle' | 'square' | 'triangle' | 'star' | 'diamond'
  color: string
  rotation: number
  rotationSpeed: number
}

interface ParticleProps {
  left: string
  top: string
  delay: string
  duration: string
}

export default function AnimatedBackground() {
  const [elements, setElements] = useState<FloatingElement[]>([])
  const [particles, setParticles] = useState<ParticleProps[]>([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [mounted, setMounted] = useState(false)

  // Ensure client-side only rendering
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    // Create initial floating elements
    const createElements = () => {
      const newElements: FloatingElement[] = []
      const colors = [
        'rgba(255, 215, 0, 0.1)', // Gold
        'rgba(255, 165, 0, 0.08)', // Orange
        'rgba(255, 215, 0, 0.05)', // Light Gold
        'rgba(255, 193, 7, 0.06)', // Amber
        'rgba(255, 235, 59, 0.04)', // Yellow
      ]
      
      const types: ('circle' | 'square' | 'triangle' | 'star' | 'diamond')[] = [
        'circle', 'square', 'triangle', 'star', 'diamond'
      ]

      for (let i = 0; i < 15; i++) {
        newElements.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 60 + 20,
          speed: Math.random() * 2 + 0.5,
          direction: Math.random() * 360,
          type: types[Math.floor(Math.random() * types.length)],
          color: colors[Math.floor(Math.random() * colors.length)],
          rotation: 0,
          rotationSpeed: Math.random() * 4 - 2,
        })
      }
      setElements(newElements)
    }

    // Create particles with fixed positions
    const createParticles = () => {
      const newParticles: ParticleProps[] = []
      for (let i = 0; i < 8; i++) {
        newParticles.push({
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          delay: `${Math.random() * 3}s`,
          duration: `${2 + Math.random() * 2}s`,
        })
      }
      setParticles(newParticles)
    }

    createElements()
    createParticles()

    // Mouse move handler for interactive effects
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', () => {
      createElements()
      createParticles()
    })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', () => {
        createElements()
        createParticles()
      })
    }
  }, [mounted])

  useEffect(() => {
    if (!mounted || elements.length === 0) return

    const animateElements = () => {
      setElements(prev => prev.map(element => {
        let newX = element.x + Math.cos(element.direction * Math.PI / 180) * element.speed
        let newY = element.y + Math.sin(element.direction * Math.PI / 180) * element.speed

        // Bounce off walls
        if (newX <= 0 || newX >= window.innerWidth - element.size) {
          element.direction = 180 - element.direction
          newX = Math.max(0, Math.min(window.innerWidth - element.size, newX))
        }
        
        if (newY <= 0 || newY >= window.innerHeight - element.size) {
          element.direction = -element.direction
          newY = Math.max(0, Math.min(window.innerHeight - element.size, newY))
        }

        // Mouse interaction - elements move away from cursor
        const distanceToMouse = Math.sqrt(
          Math.pow(newX - mousePosition.x, 2) + Math.pow(newY - mousePosition.y, 2)
        )
        
        if (distanceToMouse < 150) {
          const pushForce = (150 - distanceToMouse) / 150
          const angleFromMouse = Math.atan2(newY - mousePosition.y, newX - mousePosition.x)
          newX += Math.cos(angleFromMouse) * pushForce * 3
          newY += Math.sin(angleFromMouse) * pushForce * 3
        }

        return {
          ...element,
          x: newX,
          y: newY,
          rotation: element.rotation + element.rotationSpeed,
        }
      }))
    }

    const interval = setInterval(animateElements, 16) // 60fps
    return () => clearInterval(interval)
  }, [mousePosition, mounted, elements.length])

  const renderElement = (element: FloatingElement) => {
    const baseStyle = {
      position: 'absolute' as const,
      left: element.x,
      top: element.y,
      width: element.size,
      height: element.size,
      background: element.color,
      transform: `rotate(${element.rotation}deg)`,
      transition: 'all 0.1s ease-out',
      pointerEvents: 'none' as const,
    }

    switch (element.type) {
      case 'circle':
        return (
          <div
            key={element.id}
            style={{
              ...baseStyle,
              borderRadius: '50%',
              border: '1px solid rgba(255, 215, 0, 0.2)',
            }}
          />
        )
      
      case 'square':
        return (
          <div
            key={element.id}
            style={{
              ...baseStyle,
              borderRadius: '8px',
              border: '1px solid rgba(255, 215, 0, 0.2)',
            }}
          />
        )
      
      case 'triangle':
        return (
          <div
            key={element.id}
            style={{
              ...baseStyle,
              width: 0,
              height: 0,
              background: 'transparent',
              borderLeft: `${element.size / 2}px solid transparent`,
              borderRight: `${element.size / 2}px solid transparent`,
              borderBottom: `${element.size}px solid ${element.color}`,
            }}
          />
        )
      
      case 'star':
        return (
          <div
            key={element.id}
            style={{
              ...baseStyle,
              clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
              border: '1px solid rgba(255, 215, 0, 0.3)',
            }}
          />
        )
      
      case 'diamond':
        return (
          <div
            key={element.id}
            style={{
              ...baseStyle,
              clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
              border: '1px solid rgba(255, 215, 0, 0.2)',
            }}
          />
        )
      
      default:
        return null
    }
  }

  // Don't render anything until mounted (client-side)
  if (!mounted) {
    return null
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating Elements */}
      {elements.map(renderElement)}
      
      {/* Static Gradient Orbs */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-yellow-400/10 to-orange-400/5 rounded-full blur-xl animate-pulse" />
      <div className="absolute top-20 right-20 w-24 h-24 bg-gradient-to-r from-orange-400/8 to-yellow-400/4 rounded-full blur-lg animate-bounce" style={{ animationDuration: '3s' }} />
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-r from-yellow-400/6 to-orange-400/3 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-32 right-32 w-28 h-28 bg-gradient-to-r from-orange-400/7 to-yellow-400/5 rounded-full blur-xl animate-bounce" style={{ animationDuration: '2.5s' }} />
      
      {/* Animated Lines */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255, 215, 0, 0.1)" />
            <stop offset="50%" stopColor="rgba(255, 165, 0, 0.05)" />
            <stop offset="100%" stopColor="rgba(255, 215, 0, 0.02)" />
          </linearGradient>
        </defs>
        
        <path
          d="M0,100 Q200,50 400,100 T800,100"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          className="animate-pulse"
        />
        
        <path
          d="M0,200 Q300,150 600,200 T1200,200"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          fill="none"
          className="animate-pulse"
          style={{ animationDelay: '1s' }}
        />
        
        <circle
          cx="150"
          cy="150"
          r="2"
          fill="rgba(255, 215, 0, 0.3)"
          className="animate-ping"
        />
        
        <circle
          cx="80%"
          cy="30%"
          r="1.5"
          fill="rgba(255, 165, 0, 0.4)"
          className="animate-ping"
          style={{ animationDelay: '2s' }}
        />
      </svg>
      
      {/* Fixed Particle System */}
      <div className="absolute inset-0">
        {particles.map((particle, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-yellow-400/20 rounded-full animate-bounce"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>
    </div>
  )
}
