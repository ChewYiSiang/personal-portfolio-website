'use client'

import { useState, type ReactNode } from 'react'

/**
 * Real, recognizable brand logos for the tech stack.
 *  - `simple`  → Simple Icons CDN (brand colour by default; optional override)
 *  - `devicon` → Devicon CDN (for logos Simple Icons doesn't carry)
 *  - `node`    → hand-drawn inline glyph (for tools neither CDN provides)
 *
 * Everything sits on a uniform white tile, so brand colours read correctly
 * in both the cream and dark themes. A failed image falls back to a monogram,
 * so the grid never shows a broken icon.
 */
type IconDef =
  | { kind: 'simple'; slug: string; color?: string }
  | { kind: 'devicon'; path: string }
  | { kind: 'node'; node: ReactNode }

const ICONS: Record<string, IconDef> = {
  python:        { kind: 'simple', slug: 'python' },
  tensorflow:    { kind: 'simple', slug: 'tensorflow' },
  pytorch:       { kind: 'simple', slug: 'pytorch' },
  scikitlearn:   { kind: 'simple', slug: 'scikitlearn' },
  langchain:     { kind: 'simple', slug: 'langchain', color: '1C3C3C' },
  keras:         { kind: 'simple', slug: 'keras' },
  opencv:        { kind: 'simple', slug: 'opencv' },
  huggingface:   { kind: 'simple', slug: 'huggingface', color: 'D97706' },
  pandas:        { kind: 'simple', slug: 'pandas' },
  numpy:         { kind: 'simple', slug: 'numpy' },
  plotly:        { kind: 'simple', slug: 'plotly' },
  postgresql:    { kind: 'simple', slug: 'postgresql' },
  git:           { kind: 'simple', slug: 'git' },
  docker:        { kind: 'simple', slug: 'docker' },
  githubactions: { kind: 'simple', slug: 'githubactions' },
  kubernetes:    { kind: 'simple', slug: 'kubernetes' },
  jupyter:       { kind: 'simple', slug: 'jupyter' },
  claudecode:    { kind: 'simple', slug: 'claude' },

  vscode:        { kind: 'devicon', path: 'vscode/vscode-original' },
  matplotlib:    { kind: 'devicon', path: 'matplotlib/matplotlib-original' },

  sql: {
    kind: 'node',
    node: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="7" ry="3" />
        <path d="M5 5v6c0 1.66 3.13 3 7 3s7-1.34 7-3V5" />
        <path d="M5 11v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6" />
      </svg>
    ),
  },
  seaborn: {
    kind: 'node',
    node: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#4C72B0" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 18c3 0 3.4-10 6.4-10S12 18 12 18" />
        <path d="M10 18c3 0 3.4-7 6.4-7S22 18 22 18" />
        <line x1="2" y1="18.5" x2="22" y2="18.5" />
      </svg>
    ),
  },
  tableau: {
    kind: 'node',
    node: (
      <svg viewBox="0 0 24 24" fill="#2A6FB0">
        <rect x="3" y="10" width="3" height="9" rx="0.6" />
        <rect x="8" y="6" width="3" height="13" rx="0.6" />
        <rect x="13" y="13" width="3" height="6" rx="0.6" />
        <rect x="18" y="8" width="3" height="11" rx="0.6" />
      </svg>
    ),
  },
  powerbi: {
    kind: 'node',
    node: (
      <svg viewBox="0 0 24 24" fill="#C68A00">
        <rect x="4" y="13" width="3.6" height="7" rx="1" />
        <rect x="10.2" y="9" width="3.6" height="11" rx="1" />
        <rect x="16.4" y="4" width="3.6" height="16" rx="1" />
      </svg>
    ),
  },
  dbt: {
    kind: 'node',
    node: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#FF694B" strokeWidth="2" strokeLinecap="round">
        <line x1="9" y1="4" x2="7" y2="20" />
        <line x1="17" y1="4" x2="15" y2="20" />
        <line x1="4" y1="9.5" x2="20" y2="9.5" />
        <line x1="3.5" y1="15" x2="19.5" y2="15" />
      </svg>
    ),
  },
}

interface TechIconProps {
  icon: string
  name: string
  className?: string
}

export default function TechIcon({ icon, name, className = '' }: TechIconProps) {
  const [failed, setFailed] = useState(false)
  const def = ICONS[icon]
  const initials = name.replace(/[^A-Za-z0-9 ]/g, '').slice(0, 2).toUpperCase()

  let inner: ReactNode

  if (!def || failed) {
    inner = <span className="text-[10px] font-bold text-indigo-600">{initials}</span>
  } else if (def.kind === 'node') {
    inner = <span className="w-[19px] h-[19px] [&>svg]:w-full [&>svg]:h-full">{def.node}</span>
  } else {
    const src =
      def.kind === 'simple'
        ? `https://cdn.simpleicons.org/${def.slug}${def.color ? `/${def.color}` : ''}`
        : `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${def.path}.svg`
    inner = (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={`${name} logo`}
        width={19}
        height={19}
        loading="lazy"
        className="w-[19px] h-[19px] object-contain"
        onError={() => setFailed(true)}
      />
    )
  }

  return <span className={`tech-tile w-9 h-9 ${className}`}>{inner}</span>
}
