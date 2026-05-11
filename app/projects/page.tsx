'use client'

import { useState } from 'react'
import Link from 'next/link'
import ProjectModal from '@/components/ui/ProjectModal'
import { projects } from '@/data/projects'
import { statusColour } from '@/lib/utils'
import type { Project } from '@/types'

export default function ProjectsPage() {
  const [active, setActive] = useState<Project | null>(null)

  return (
    <>
      <div className="min-h-screen pt-28 pb-20 px-6">
        {/* Ambient glows */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-cyber-cyan/[0.03] rounded-full blur-[140px]" />
          <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-cyber-purple/[0.03] rounded-full blur-[120px]" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-xs text-gray-600 hover:text-cyber-cyan transition-colors mb-10 group"
          >
            <svg
              className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform"
              fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Portfolio
          </Link>

          {/* Heading */}
          <p className="font-mono text-[10px] tracking-[4px] uppercase text-cyber-cyan mb-2">// All Work</p>
          <h1 className="font-display font-extrabold text-4xl text-gray-100 section-heading mb-3">
            Project Archive
          </h1>
          <p className="text-gray-600 text-sm mb-10">Every project, experiment, and build — click any card to explore.</p>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project) => (
              <button
                key={project.slug}
                onClick={() => setActive(project)}
                className="glass text-left rounded-2xl p-5 border border-white/[0.06] hover:border-cyber-cyan/20 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(0,0,0,0.45)] transition-all duration-300"
              >
                {/* Number */}
                <div className="font-display font-black text-4xl gradient-text opacity-[0.12] leading-none mb-3 select-none">
                  {project.number}
                </div>

                {/* Status */}
                <div className="flex gap-2 mb-3 flex-wrap">
                  <span className={`font-mono text-[9.5px] px-2 py-0.5 rounded border ${statusColour(project.status)}`}>
                    {project.status}
                  </span>
                </div>

                {/* Title & subtitle */}
                <h2 className="font-display font-bold text-gray-100 text-base mb-1">{project.title}</h2>
                <p className="font-mono text-[10px] text-gray-600 mb-2">{project.subtitle}</p>

                {/* Description */}
                <p className="text-gray-500 text-xs leading-relaxed mb-3 line-clamp-3">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span key={tag} className="font-mono text-[9.5px] text-gray-600 glass px-2 py-0.5 rounded border border-white/[0.06]">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="font-mono text-[9.5px] text-gray-700">+{project.tags.length - 4}</span>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* MDX note */}
          <div className="mt-12 glass rounded-xl p-5 border border-cyber-cyan/[0.07] bg-cyber-cyan/[0.02]">
            <p className="font-mono text-xs text-gray-600 leading-relaxed">
              <span className="text-cyber-cyan">💡 Tip:</span> Drop a{' '}
              <span className="text-cyber-purple">.mdx</span> file in{' '}
              <span className="text-cyber-cyan">content/projects/</span> and add an entry to{' '}
              <span className="text-cyber-cyan">data/projects.ts</span> — it automatically appears here.
            </p>
          </div>
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </>
  )
}
