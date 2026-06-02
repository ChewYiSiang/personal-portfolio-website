'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import RevealWrapper from '@/components/ui/RevealWrapper'
import SectionHeading from '@/components/ui/SectionHeading'
import ProjectModal from '@/components/ui/ProjectModal'
import { projects } from '@/data/projects'
import { statusColour } from '@/lib/utils'
import type { Project } from '@/types'

// Preferred display order for category filters; anything new in the data
// that isn't listed here gets appended automatically.
const CATEGORY_ORDER = ['AI/ML', 'Computer Vision', 'NLP', 'Data Analytics', 'MLOps', 'Agentic AI']

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null)
  const [filter, setFilter] = useState('Featured')

  // Build the filter list: Featured, All, then categories present in the data.
  const filters = useMemo(() => {
    const present = new Set<string>()
    projects.forEach((p) => p.categories.forEach((c) => present.add(c)))
    const ordered = [
      ...CATEGORY_ORDER.filter((c) => present.has(c)),
      ...Array.from(present).filter((c) => !CATEGORY_ORDER.includes(c)).sort(),
    ]
    const base = ['Featured', 'All', ...ordered]
    return base.map((key) => ({
      key,
      count:
        key === 'Featured'
          ? projects.filter((p) => p.featured).length
          : key === 'All'
          ? projects.length
          : projects.filter((p) => p.categories.includes(key)).length,
    }))
  }, [])

  const visible = useMemo(() => {
    if (filter === 'Featured') return projects.filter((p) => p.featured)
    if (filter === 'All') return projects
    return projects.filter((p) => p.categories.includes(filter))
  }, [filter])

  return (
    <>
      <section id="projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <RevealWrapper>
            <SectionHeading
              label="Selected Work"
              title="Projects"
              description="Filter by focus area, then click any card for the full write-up."
            />
          </RevealWrapper>

          {/* Filter cards */}
          <RevealWrapper delay={80}>
            <div className="flex gap-2.5 overflow-x-auto no-scrollbar pb-2 -mx-1 px-1 mb-8">
              {filters.map(({ key, count }) => {
                const isActive = key === filter
                return (
                  <button
                    key={key}
                    onClick={() => setFilter(key)}
                    className={`group flex items-center gap-2 flex-shrink-0 rounded-xl border px-4 py-2 text-[12.5px] font-medium transition-all duration-300 ${
                      isActive
                        ? 'border-cyber-cyan/45 bg-cyber-cyan/10 text-cyber-cyan shadow-[0_4px_18px_rgb(var(--accent-ch)_/_0.14)]'
                        : 'border-line text-muted hover:text-content hover:border-cyber-cyan/30'
                    }`}
                  >
                    {key}
                    <span
                      className={`text-[10px] font-mono px-1.5 py-px rounded-md ${
                        isActive ? 'bg-cyber-cyan/15 text-cyber-cyan' : 'bg-tint text-faint'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                )
              })}
            </div>
          </RevealWrapper>

          {/* Project cards */}
          <motion.div layout className="space-y-5">
            <AnimatePresence mode="popLayout">
              {visible.map((project, i) => (
                <motion.button
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 }}
                  onClick={() => setActive(project)}
                  className="w-full text-left glass rounded-2xl overflow-hidden border border-line hover:border-cyber-cyan/25 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-[transform,box-shadow,border-color] duration-300 flex flex-col sm:flex-row"
                  style={{ background: `linear-gradient(135deg, ${project.gradientFrom}, ${project.gradientTo})` }}
                >
                  {/* Numbered panel */}
                  <div
                    className="sm:w-[180px] flex-shrink-0 flex items-center justify-center h-24 sm:h-auto"
                    style={{ background: `linear-gradient(135deg, ${project.gradientFrom}, ${project.gradientTo})` }}
                  >
                    <span className="font-display font-black text-5xl gradient-text opacity-[0.18] select-none">
                      {project.number}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-5 sm:p-6 flex-1">
                    <div className="flex flex-wrap gap-2 mb-2 items-center">
                      <span className={`font-mono text-[10px] px-2 py-0.5 rounded border ${statusColour(project.status)}`}>
                        {project.status}
                      </span>
                      <span className="font-mono text-[10px] text-muted">{project.subtitle}</span>
                    </div>

                    <h3 className="font-display font-bold text-lg text-content mb-1.5">{project.title}</h3>
                    <p className="text-muted text-xs leading-relaxed mb-3 line-clamp-2">{project.description}</p>

                    <ul className="space-y-1 mb-4">
                      {project.highlights.slice(0, 3).map((h) => (
                        <li key={h} className="flex items-start gap-2 text-[12px] text-muted leading-relaxed">
                          <span className="text-faint mt-0.5 flex-shrink-0">–</span>
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="font-mono text-[10px] text-muted bg-tint px-2 py-0.5 rounded border border-line">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-1 text-[11px] text-cyber-cyan">
                      View full details
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Full archive link */}
          <RevealWrapper delay={120}>
            <Link
              href="/projects"
              className="flex items-center justify-center gap-2 w-full mt-6 py-3.5 rounded-xl border border-cyber-cyan/25 bg-cyber-cyan/[0.04] text-xs text-cyber-cyan hover:border-cyber-cyan/45 hover:bg-cyber-cyan/[0.08] transition-all duration-300"
            >
              Open detailed archive →
            </Link>
          </RevealWrapper>
        </div>
      </section>

      {/* Modal */}
      <ProjectModal project={active} onClose={() => setActive(null)} />
    </>
  )
}
