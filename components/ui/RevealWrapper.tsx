'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface RevealWrapperProps {
  children: React.ReactNode
  className?: string
  delay?: number
  /** Direction to slide in from */
  from?: 'bottom' | 'left' | 'right'
}

export default function RevealWrapper({
  children,
  className,
  delay = 0,
  from = 'bottom',
}: RevealWrapperProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const hidden = {
    bottom: 'opacity-0 translate-y-7',
    left:   'opacity-0 -translate-x-7',
    right:  'opacity-0 translate-x-7',
  }[from]

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700',
        visible ? 'opacity-100 translate-x-0 translate-y-0' : hidden,
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
