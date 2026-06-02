import RevealWrapper from '@/components/ui/RevealWrapper'
import SectionHeading from '@/components/ui/SectionHeading'
import { education } from '@/data/education'

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 cyber-grid">
      <div className="max-w-6xl mx-auto">
        <RevealWrapper>
          <SectionHeading
            label="Education"
            title="Education"
            description="Academic journey from secondary school to engineering — always data-focused."
          />
        </RevealWrapper>

        <div className="space-y-5">
          {education.map((entry, i) => (
            <RevealWrapper key={entry.shortName} delay={i * 120} from="left">
              <div
                className="glass rounded-xl p-6 border border-line"
                style={{ borderLeftColor: entry.accent, borderLeftWidth: 2 }}
              >
                {/* Top row */}
                <div className="flex gap-4 items-start mb-5">
                  {/* Logo */}
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center font-display font-black text-lg flex-shrink-0"
                    style={{ background: `${entry.accent}14`, color: entry.accent }}
                  >
                    {entry.logoText}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="font-display font-bold text-content text-base">{entry.shortName}</h3>
                      <span
                        className="font-mono text-[9px] px-2 py-0.5 rounded border"
                        style={{ color: entry.accent, background: `${entry.accent}10`, borderColor: `${entry.accent}28` }}
                      >
                        {entry.status}
                      </span>
                    </div>
                    <p className="text-content text-sm font-medium">{entry.degree}</p>
                    <p className="text-muted text-xs mt-0.5">{entry.institution}</p>
                    <p className="font-mono text-[10px] text-muted mt-1">{entry.period}</p>
                  </div>
                </div>

                {/* Detail columns */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <p className="font-mono text-[9px] tracking-[2.5px] uppercase text-faint mb-2">Achievements</p>
                    <ul className="space-y-1.5">
                      {entry.achievements.map((a) => (
                        <li key={a} className="flex items-start gap-2 text-[12px] text-muted leading-relaxed">
                          <span className="text-faint flex-shrink-0 mt-0.5">–</span>
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-mono text-[9px] tracking-[2.5px] uppercase text-faint mb-2">Key Coursework</p>
                    <div className="flex flex-wrap gap-1.5">
                      {entry.courses.map((c) => (
                        <span key={c} className="font-mono text-[10px] text-muted bg-tint px-2 py-0.5 rounded border border-line">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
