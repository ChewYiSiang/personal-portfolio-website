'use client'

import { useEffect, useRef } from 'react'
import Terminal from '@/components/ui/Terminal'
import { personal } from '@/data/personal'

const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    href: personal.social.linkedin,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: personal.social.github,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: personal.social.whatsapp,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    ),
  },
]

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    requestAnimationFrame(() => {
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    })
  }, [])

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-16">
      {/* Radial glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyber-cyan/[0.04] rounded-full blur-[120px]" />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-cyber-purple/[0.03] rounded-full blur-[100px]" />
      </div>

      <div
        ref={containerRef}
        className="relative z-10 max-w-6xl mx-auto w-full"
        style={{ opacity: 0, transform: 'translateY(28px)', transition: 'all 1s ease' }}
      >
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">

          {/* Left — headline + socials */}
          <div className="flex-1 text-center lg:text-left">
            {/* Availability badge */}
            {personal.available && (
              <div className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full mb-6 font-mono text-[11px] text-gray-500">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                {personal.availabilityNote}
              </div>
            )}

            {/* Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] leading-[1.08] mb-4 tracking-tight">
              <span className="text-gray-100">Building the</span>
              <br />
              <span className="gradient-text">Future of Data</span>
              <br />
              <span className="text-gray-100">&amp; Intelligence.</span>
            </h1>

            {/* Roles */}
            <p className="font-mono text-xs sm:text-sm text-gray-600 mt-4 mb-8 leading-relaxed">
              <span className="text-cyber-cyan">{personal.roles[0]}</span>
              <span className="mx-2 text-gray-800">|</span>
              <span className="text-gray-300">{personal.roles[1]}</span>
              <span className="mx-2 text-gray-800">|</span>
              <span className="text-cyber-purple">{personal.roles[2]}</span>
            </p>

            {/* Social buttons */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass flex items-center gap-2 px-4 py-2.5 rounded-lg font-mono text-[11px] text-gray-500 border border-white/5 hover:text-cyber-cyan hover:border-cyber-cyan/30 hover:shadow-[0_0_14px_rgba(0,245,255,0.1)] transition-all duration-300"
                >
                  {link.icon}
                  {link.label}
                </a>
              ))}

              <button
                onClick={() => scrollTo('#projects')}
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg font-mono text-[11px] bg-gradient-to-r from-cyber-cyan/10 to-cyber-purple/10 border border-cyber-cyan/22 text-cyber-cyan hover:border-cyber-cyan/50 hover:shadow-[0_0_18px_rgba(0,245,255,0.18)] transition-all duration-300"
              >
                View Projects
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right — terminal + stats */}
          <div className="flex flex-col items-center gap-4">
            <Terminal />

            <div className="grid grid-cols-3 gap-3 w-full max-w-[290px]">
              {personal.stats.map((s) => (
                <div key={s.label} className="glass rounded-lg p-3 text-center">
                  <div className="font-display font-extrabold text-xl gradient-text">{s.value}</div>
                  <div className="font-mono text-[9px] text-gray-600 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="flex justify-center mt-16 lg:mt-20">
          <button
            onClick={() => scrollTo('#skills')}
            className="flex flex-col items-center gap-1.5 font-mono text-[10px] text-gray-700 animate-bounce hover:text-cyber-cyan transition-colors"
          >
            <span>scroll</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
