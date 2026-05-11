'use client'

import { useRef } from 'react'
import RevealWrapper from '@/components/ui/RevealWrapper'
import SectionHeading from '@/components/ui/SectionHeading'
import { skills } from '@/data/skills'

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 cyber-grid">
      <div className="max-w-6xl mx-auto">
        <RevealWrapper>
          <SectionHeading
            label="// 02. Capabilities"
            title="Tech Stack"
            description="Languages, frameworks, and tools I reach for when building data & AI systems."
          />
        </RevealWrapper>

        <div className="space-y-10">
          {skills.map((category, ci) => (
            <RevealWrapper key={category.label} delay={ci * 80}>
              <ChipRow category={category.label} chips={category.chips} />
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Chip row with scroll buttons ── */
function ChipRow({ category, chips }: { category: string; chips: { icon: string; name: string }[] }) {
  const trackRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({ left: dir * 260, behavior: 'smooth' })
  }

  return (
    <div>
      {/* Category label + nav buttons */}
      <div className="flex items-center gap-4 mb-3">
        <span className="font-mono text-[10px] tracking-[3px] uppercase text-gray-600 flex-shrink-0">
          {category}
        </span>
        <div className="flex-1 h-px bg-white/[0.04]" />
        <div className="flex gap-2">
          {(['←', '→'] as const).map((arrow, i) => (
            <button
              key={arrow}
              onClick={() => scroll(i === 0 ? -1 : 1)}
              className="w-7 h-7 rounded-full glass border border-white/[0.06] text-gray-600 hover:text-cyber-cyan hover:border-cyber-cyan/30 flex items-center justify-center text-xs transition-all"
              aria-label={i === 0 ? 'Scroll left' : 'Scroll right'}
            >
              {arrow}
            </button>
          ))}
        </div>
      </div>

      {/* Scrollable chip row */}
      <div ref={trackRef} className="chip-scroll-track">
        {chips.map((chip) => (
          <div key={chip.name} className="tech-chip">
            <span className="text-[26px] leading-none relative z-10">{chip.icon}</span>
            <span className="font-mono text-[9.5px] text-gray-600 text-center leading-tight relative z-10">
              {chip.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
