'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import RevealWrapper from '@/components/ui/RevealWrapper'
import SectionHeading from '@/components/ui/SectionHeading'
import ProjectModal from '@/components/ui/ProjectModal'
import { projects } from '@/data/projects'
import { statusColour } from '@/lib/utils'
import type { Project } from '@/types'

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null)
  const featured = projects.filter((p) => p.featured)

  return (
    <>
      <section id="projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <RevealWrapper>
            <SectionHeading
              label="// 03. Work"
              title="Featured Projects"
              description="Click any card to explore full project details."
            />
          </RevealWrapper>

          {/* Project cards */}
          <div className="space-y-5">
            {featured.map((project, i) => (
              <RevealWrapper key={project.slug} delay={i * 100}>
                <button
                  onClick={() => setActive(project)}
                  className="w-full text-left glass rounded-2xl overflow-hidden border border-white/[0.06] hover:border-cyber-cyan/18 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)] transition-all duration-300 flex flex-col sm:flex-row"
                  style={{ background: `linear-gradient(135deg, ${project.gradientFrom}, ${project.gradientTo})` }}
                >
                  {/* Numbered image placeholder */}
                  <div
                    className="sm:w-[180px] flex-shrink-0 flex items-center justify-center h-24 sm:h-auto"
                    style={{ background: `linear-gradient(135deg, ${project.gradientFrom}, ${project.gradientTo})` }}
                  >
                    <span className="font-display font-black text-5xl gradient-text opacity-[0.12] select-none">
                      {project.number}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-5 sm:p-6 flex-1">
                    <div className="flex flex-wrap gap-2 mb-2 items-center">
                      <span className={`font-mono text-[10px] px-2 py-0.5 rounded border ${statusColour(project.status)}`}>
                        {project.status}
                      </span>
                      <span className="font-mono text-[10px] text-gray-600">{project.subtitle}</span>
                    </div>

                    <h3 className="font-display font-bold text-lg text-gray-100 mb-1.5">{project.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed mb-3 line-clamp-2">{project.description}</p>

                    <ul className="space-y-1 mb-4">
                      {project.highlights.slice(0, 3).map((h) => (
                        <li key={h} className="flex items-start gap-2 font-mono text-[11px] text-gray-600">
                          <span className="text-cyber-cyan mt-0.5 flex-shrink-0">▸</span>
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="font-mono text-[10px] text-gray-600 glass px-2 py-0.5 rounded border border-white/[0.06]">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-1 font-mono text-[11px] text-cyber-cyan">
                      View full details
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </button>
              </RevealWrapper>
            ))}
          </div>

          {/* Show all */}
          <RevealWrapper delay={300}>
            <Link
              href="/projects"
              className="flex items-center justify-center gap-2 w-full mt-6 py-3.5 rounded-xl border border-cyber-cyan/18 bg-gradient-to-r from-cyber-cyan/[0.03] to-cyber-purple/[0.03] font-mono text-xs text-cyber-cyan hover:border-cyber-cyan/45 hover:shadow-[0_0_22px_rgba(0,245,255,0.1)] transition-all duration-300"
            >
              ⌗ View All Projects — Project Archive →
            </Link>
          </RevealWrapper>
        </div>
      </section>

      {/* Modal */}
      <ProjectModal project={active} onClose={() => setActive(null)} />
    </>
  )
}
