import RevealWrapper from '@/components/ui/RevealWrapper'
import SectionHeading from '@/components/ui/SectionHeading'
import { experience } from '@/data/experience'

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 cyber-grid">
      <div className="max-w-6xl mx-auto">
        <RevealWrapper>
          <SectionHeading label="// 04. Experience" title="Work Experience" />
        </RevealWrapper>

        {/* Timeline */}
        <div className="relative pl-12 sm:pl-16">
          {/* Vertical connector */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px timeline-line opacity-20" />

          <div className="space-y-7">
            {experience.map((entry, i) => (
              <RevealWrapper key={i} delay={i * 120} from="left">
                <div className="relative">
                  {/* Timeline dot */}
                  <div
                    className="absolute -left-[31px] sm:-left-[43px] top-6 w-3.5 h-3.5 rounded-full ring-[3px] ring-[#050505]"
                    style={{
                      background: entry.accent,
                      boxShadow: `0 0 10px ${entry.accent}aa`,
                    }}
                  />

                  {/* Card */}
                  <div
                    className="glass rounded-xl p-5 sm:p-6 border border-white/[0.06]"
                    style={{ borderLeftColor: entry.accent, borderLeftWidth: 2 }}
                  >
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="font-display font-bold text-base text-gray-100">{entry.role}</h3>
                        <p className="text-gray-500 text-sm mt-0.5">{entry.company}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                        <span
                          className="font-mono text-[9.5px] px-2 py-0.5 rounded border"
                          style={{
                            color: entry.accent,
                            background: `${entry.accent}12`,
                            borderColor: `${entry.accent}30`,
                          }}
                        >
                          {entry.type}
                        </span>
                        <span className="font-mono text-[10px] text-gray-600">{entry.period}</span>
                      </div>
                    </div>

                    <p className="text-gray-500 text-xs leading-relaxed mb-3">{entry.description}</p>

                    {/* Highlights */}
                    <ul className="space-y-1.5 mb-4">
                      {entry.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 font-mono text-[11px] text-gray-500">
                          <span className="text-cyber-cyan flex-shrink-0 mt-0.5">▸</span>
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {entry.tech.map((t) => (
                        <span key={t} className="font-mono text-[10px] text-gray-600 glass px-2 py-0.5 rounded border border-white/[0.06]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
