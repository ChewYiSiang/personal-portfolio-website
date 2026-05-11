'use client'

import { useEffect, useState } from 'react'

const SKILLS = [
  'Machine Learning',
  'Data Visualisation',
  'Deep Learning',
  'Data Engineering',
  'Neural Networks',
  'ETL Pipelines',
]

export default function Terminal() {
  const [displayText, setDisplayText] = useState('')
  const [skillIndex, setSkillIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = SKILLS[skillIndex]
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          if (charIndex < current.length) {
            setDisplayText(current.slice(0, charIndex + 1))
            setCharIndex((c) => c + 1)
          } else {
            setTimeout(() => setDeleting(true), 1900)
          }
        } else {
          if (charIndex > 0) {
            setDisplayText(current.slice(0, charIndex - 1))
            setCharIndex((c) => c - 1)
          } else {
            setDeleting(false)
            setSkillIndex((i) => (i + 1) % SKILLS.length)
          }
        }
      },
      deleting ? 46 : 82
    )
    return () => clearTimeout(timeout)
  }, [charIndex, deleting, skillIndex])

  return (
    <div className="glass rounded-xl p-5 font-mono text-xs w-full max-w-[290px]">
      {/* Title bar */}
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/5">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        <span className="ml-2 text-gray-600 text-[10px]">skills.py</span>
      </div>

      {/* Code lines */}
      <div className="space-y-1.5 text-[11.5px] leading-relaxed">
        <div>
          <span className="text-cyber-purple">import</span>
          <span className="text-gray-500"> skills </span>
          <span className="text-cyber-purple">from</span>
          <span className="text-green-400"> &quot;data_lab&quot;</span>
        </div>
        <div className="mt-2 text-gray-600">
          {'>>> '}
          <span className="text-cyber-cyan">skills</span>
          <span className="text-gray-500">.current()</span>
        </div>
        <div className="flex items-center gap-0.5 text-gray-600">
          <span>{'>>> '}</span>
          <span className="text-green-400">&quot;</span>
          <span className="text-gray-200">{displayText}</span>
          <span className="text-cyber-cyan animate-blink ml-0.5">▋</span>
          <span className="text-green-400">&quot;</span>
        </div>
      </div>
    </div>
  )
}
