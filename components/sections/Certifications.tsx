import type { ElementType } from 'react'
import RevealWrapper from '@/components/ui/RevealWrapper'
import SectionHeading from '@/components/ui/SectionHeading'
import { certifications } from '@/data/certifications'

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <RevealWrapper>
          <SectionHeading
            label="Credentials"
            title="Certifications"
            description="Courses and credentials that back up the toolkit above."
          />
        </RevealWrapper>

        {/* One certification per cell, two columns */}
        <div className="grid sm:grid-cols-2 gap-4">
          {certifications.map((cert, i) => {
            const Wrapper: ElementType = cert.credentialUrl ? 'a' : 'div'
            const linkProps = cert.credentialUrl
              ? { href: cert.credentialUrl, target: '_blank', rel: 'noopener noreferrer' }
              : {}

            return (
              <RevealWrapper key={`${cert.title}-${i}`} delay={i * 80}>
                <Wrapper
                  {...linkProps}
                  className="group block h-full glass rounded-2xl p-6 border border-line hover:-translate-y-1 transition-all duration-300"
                  style={{ borderTopColor: `${cert.accent}55`, borderTopWidth: 2 }}
                >
                  {/* Top row — seal icon + date */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${cert.accent}1a`, color: cert.accent }}
                    >
                      <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="8" r="6" />
                        <path d="M8.5 13.5L7 22l5-3 5 3-1.5-8.5" />
                      </svg>
                    </div>
                    <span className="font-mono text-[10px] text-faint mt-1 flex-shrink-0">{cert.date}</span>
                  </div>

                  {/* Title + issuer */}
                  <h3 className="font-display font-bold text-base text-content leading-snug mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-[13px] font-medium mb-3" style={{ color: cert.accent }}>
                    {cert.issuer}
                  </p>

                  <p className="text-muted text-xs leading-relaxed mb-4">{cert.description}</p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((s) => (
                      <span
                        key={s}
                        className="font-mono text-[10px] text-muted bg-tint px-2 py-0.5 rounded border border-line"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  {cert.credentialUrl && (
                    <span className="inline-flex items-center gap-1 text-[11px] text-cyber-cyan mt-4">
                      Verify credential
                      <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  )}
                </Wrapper>
              </RevealWrapper>
            )
          })}
        </div>
      </div>
    </section>
  )
}
