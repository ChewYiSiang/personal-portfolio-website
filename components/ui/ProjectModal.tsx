'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Project } from '@/types'
import { statusColour } from '@/lib/utils'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = project ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [project])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="modal-overlay"
          onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
        >
          <motion.div
            key="modal-box"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="modal-box"
          >
            {/* ── Header ── */}
            <div className="sticky top-0 z-10 bg-[#080808] px-6 pt-5 pb-4 border-b border-white/5 flex items-start justify-between gap-3">
              <div>
                <p className="font-mono text-[9px] tracking-[3px] uppercase text-gray-600 mb-1">
                  {project.subtitle} · {project.status}
                </p>
                <h2 className="font-display font-extrabold text-xl text-gray-100">{project.title}</h2>
              </div>
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="flex-shrink-0 w-8 h-8 rounded-full bg-white/5 border border-white/8 text-gray-500 hover:bg-red-500/10 hover:border-red-500/30 hover:text-red-400 transition-all flex items-center justify-center text-sm"
              >
                ✕
              </button>
            </div>

            {/* ── Body ── */}
            <div className="p-6 space-y-6">
              {/* Image placeholder */}
              <div
                className="w-full h-40 rounded-xl border border-white/5 flex items-center justify-center relative overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${project.gradientFrom}, ${project.gradientTo})` }}
              >
                <span className="font-display font-black text-7xl opacity-[0.09] gradient-text select-none">
                  {project.number}
                </span>
                <span className="absolute bottom-2.5 font-mono text-[9px] text-gray-700">
                  [ project image placeholder ]
                </span>
              </div>

              {/* Status badge */}
              <div className="flex flex-wrap gap-2">
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${statusColour(project.status)}`}>
                  {project.status}
                </span>
              </div>

              {/* Overview */}
              <section>
                <p className="font-mono text-[9px] tracking-[3px] uppercase text-gray-600 mb-2">Overview</p>
                <p className="text-sm text-gray-400 leading-relaxed">{project.longDescription}</p>
              </section>

              {/* Highlights */}
              <section>
                <p className="font-mono text-[9px] tracking-[3px] uppercase text-gray-600 mb-3">Key Highlights</p>
                <ul className="space-y-2">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 font-mono text-xs text-gray-400">
                      <span className="text-cyber-cyan mt-0.5 flex-shrink-0">▸</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </section>

              {/* Tech stack */}
              <section>
                <p className="font-mono text-[9px] tracking-[3px] uppercase text-gray-600 mb-3">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] px-2.5 py-1 rounded-md border border-cyber-cyan/15 text-cyber-cyan bg-cyber-cyan/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </section>

              {/* Links */}
              {(project.github || project.demo) && (
                <div className="flex gap-3 pt-4 border-t border-white/5">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs px-4 py-2 rounded-lg border border-white/10 text-gray-400 hover:text-white hover:border-white/25 transition-all"
                    >
                      ⌥ GitHub Source
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs px-4 py-2 rounded-lg border border-cyber-cyan/28 bg-cyber-cyan/5 text-cyber-cyan hover:shadow-[0_0_14px_rgba(0,245,255,0.2)] transition-all"
                    >
                      → Live Demo
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
