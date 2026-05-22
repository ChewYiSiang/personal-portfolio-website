'use client'

import { useState } from 'react'
import RevealWrapper from '@/components/ui/RevealWrapper'
import SectionHeading from '@/components/ui/SectionHeading'
import { skills } from '@/data/skills'

const ACCENTS = [
  '#818CF8', // Languages               — indigo
  '#34D399', // AI / ML                 — emerald
  '#F472B6', // Data Analysis & Viz     — rose
  '#FBBF24', // Data Engineering        — amber
  '#60A5FA', // Cloud, DevOps & MLOps   — blue
  '#A78BFA', // Developer Tools         — violet
]

export default function Skills() {
  const [activeIndex, setActiveIndex] = useState(1)

  return (
    <section id="skills" className="py-24 px-6 cyber-grid">
      <div className="max-w-6xl mx-auto">
        <RevealWrapper>
          <SectionHeading
            label="Capabilities"
            title="Tech Stack"
            description="Languages, frameworks, and tools I reach for when building data & AI systems."
          />
        </RevealWrapper>

        <RevealWrapper delay={100}>
          {/* Accordion — horizontally scrollable on small screens */}
          <div className="overflow-x-auto pb-2 -mx-1 px-1">
            <div className="flex flex-row gap-2.5 h-[360px] min-w-max">
              {skills.map((category, i) => {
                const accent = ACCENTS[i] ?? '#818CF8'
                const isActive = i === activeIndex

                return (
                  <div
                    key={category.label}
                    onMouseEnter={() => setActiveIndex(i)}
                    className="relative flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer border border-white/[0.07] transition-all duration-700"
                    style={{
                      width: isActive ? 460 : 52,
                      background: isActive
                        ? `linear-gradient(160deg, ${accent}14 0%, ${accent}06 100%)`
                        : 'rgba(255,255,255,0.03)',
                      transitionTimingFunction: 'cubic-bezier(0.25,1,0.5,1)',
                      borderColor: isActive ? `${accent}28` : 'rgba(255,255,255,0.07)',
                    }}
                  >
                    {/* Accent top line */}
                    <div
                      className="absolute top-0 left-0 right-0 h-[2px] transition-opacity duration-700"
                      style={{ background: accent, opacity: isActive ? 1 : 0.3 }}
                    />

                    {/* Collapsed — vertical label */}
                    <div
                      className="absolute inset-0 flex items-center justify-center transition-opacity duration-200"
                      style={{
                        opacity: isActive ? 0 : 1,
                        pointerEvents: isActive ? 'none' : 'auto',
                      }}
                    >
                      <span
                        className="text-[9.5px] font-medium tracking-[3px] uppercase whitespace-nowrap -rotate-90"
                        style={{ color: accent }}
                      >
                        {category.label}
                      </span>
                    </div>

                    {/* Expanded — label + chips */}
                    <div
                      className="absolute inset-0 p-5 flex flex-col transition-opacity duration-300"
                      style={{
                        opacity: isActive ? 1 : 0,
                        transitionDelay: isActive ? '160ms' : '0ms',
                        pointerEvents: isActive ? 'auto' : 'none',
                      }}
                    >
                      <p
                        className="text-[9.5px] font-medium tracking-[3px] uppercase mb-4 flex-shrink-0"
                        style={{ color: accent }}
                      >
                        {category.label}
                      </p>

                      <div className="flex flex-wrap gap-2 content-start">
                        {category.chips.map((chip) => (
                          <span
                            key={chip.name}
                            className="text-[11px] px-2.5 py-1 rounded-lg border text-gray-200 flex-shrink-0"
                            style={{
                              background: `${accent}0d`,
                              borderColor: `${accent}28`,
                            }}
                          >
                            {chip.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
