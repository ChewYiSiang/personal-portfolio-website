'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface RevealWrapperProps {
  children: React.ReactNode
  className?: string
  delay?: number
  from?: 'bottom' | 'left' | 'right'
}

const ease = [0.16, 1, 0.3, 1] as const

const variants = {
  bottom: { hidden: { opacity: 0, y: 28 },        show: { opacity: 1, y: 0 } },
  left:   { hidden: { opacity: 0, x: -28, y: 0 }, show: { opacity: 1, x: 0, y: 0 } },
  right:  { hidden: { opacity: 0, x: 28, y: 0 },  show: { opacity: 1, x: 0, y: 0 } },
}

export default function RevealWrapper({
  children,
  className,
  delay = 0,
  from = 'bottom',
}: RevealWrapperProps) {
  return (
    <motion.div
      initial={variants[from].hidden}
      whileInView={variants[from].show}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, ease, delay: delay / 1000 }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
