import RevealWrapper from '@/components/ui/RevealWrapper'
import SectionHeading from '@/components/ui/SectionHeading'
import TechIcon from '@/components/ui/TechIcon'
import { skills } from '@/data/skills'

const ACCENTS = [
  '#6366F1', // Languages
  '#10B981', // AI / ML
  '#EC4899', // Data Analysis & Viz
  '#F59E0B', // Data Engineering
  '#3B82F6', // Cloud, DevOps & MLOps
  '#8B5CF6', // Developer Tools
]

export default function Skills() {
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

        {/* 2 × 3 grid — every tool visible at a glance */}
        <div className="grid sm:grid-cols-2 gap-4">
          {skills.map((category, i) => {
            const accent = ACCENTS[i] ?? '#6366F1'
            return (
              <RevealWrapper key={category.label} delay={i * 80}>
                <div className="relative h-full glass rounded-2xl p-6 border border-line overflow-hidden">
                  {/* Accent top line */}
                  <span
                    className="absolute top-0 left-0 right-0 h-[2px]"
                    style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }}
                  />

                  <div className="flex items-center gap-2.5 mb-5">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: accent }} />
                    <h3
                      className="text-[10.5px] font-semibold tracking-[2.5px] uppercase"
                      style={{ color: accent }}
                    >
                      {category.label}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-x-5 gap-y-3.5">
                    {category.chips.map((chip) => (
                      <div key={chip.name} className="flex items-center gap-2.5">
                        <TechIcon icon={chip.icon} name={chip.name} />
                        <span className="text-[13px] font-medium text-content whitespace-nowrap">
                          {chip.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </RevealWrapper>
            )
          })}
        </div>
      </div>
    </section>
  )
}
