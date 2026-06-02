'use client'

import { useState, useCallback, useRef, useEffect } from 'react'
import { cn } from '@/lib/utils'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*'

interface TextScrambleProps {
  text: string
  /** Applied to the outer wrapper div */
  className?: string
  /** Overrides the inner text span's font/size/tracking classes */
  textClassName?: string
  showUnderline?: boolean
}

export function TextScramble({
  text,
  className = '',
  textClassName,
  showUnderline = true,
}: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(text)
  const [isHovering, setIsHovering] = useState(false)
  const [isScrambling, setIsScrambling] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const frameRef = useRef(0)

  const scramble = useCallback(() => {
    setIsScrambling(true)
    frameRef.current = 0
    const duration = text.length * 3

    if (intervalRef.current) clearInterval(intervalRef.current)

    intervalRef.current = setInterval(() => {
      frameRef.current++
      const progress = frameRef.current / duration
      const revealedLength = Math.floor(progress * text.length)

      const next = text
        .split('')
        .map((char, i) => {
          if (char === ' ') return ' '
          if (i < revealedLength) return text[i]
          return CHARS[Math.floor(Math.random() * CHARS.length)]
        })
        .join('')

      setDisplayText(next)

      if (frameRef.current >= duration) {
        if (intervalRef.current) clearInterval(intervalRef.current)
        setDisplayText(text)
        setIsScrambling(false)
      }
    }, 30)
  }, [text])

  const handleMouseEnter = () => { setIsHovering(true); scramble() }
  const handleMouseLeave = () => { setIsHovering(false) }

  useEffect(() => () => { if (intervalRef.current) clearInterval(intervalRef.current) }, [])

  const innerClass = textClassName ?? 'font-mono text-lg tracking-widest uppercase'

  return (
    <div
      className={cn('group relative inline-flex flex-col cursor-pointer select-none', className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className={cn('relative', innerClass)}>
        {displayText.split('').map((char, i) => (
          <span
            key={i}
            className={cn(
              'inline-block transition-all duration-150',
              isScrambling && char !== text[i] ? 'opacity-40 scale-105' : ''
            )}
            style={{ transitionDelay: `${i * 8}ms` }}
          >
            {char}
          </span>
        ))}
      </span>

      {showUnderline && (
        <span className="relative h-px w-full mt-1.5 overflow-hidden">
          <span
            className={cn(
              'absolute inset-0 bg-cyber-cyan transition-transform duration-500 ease-out origin-left',
              isHovering ? 'scale-x-100' : 'scale-x-0'
            )}
          />
          <span className="absolute inset-0 bg-white/10" />
        </span>
      )}
    </div>
  )
}
