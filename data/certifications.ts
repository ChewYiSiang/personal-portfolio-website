import type { Certification } from '@/types'

/**
 * CERTIFICATIONS
 * ──────────────
 * ✏️  EDIT THIS FILE — the first entry is seeded from a course referenced in
 * your projects; the rest are placeholders. Replace the title / issuer / date /
 * description / skills / credentialUrl with your real certifications.
 * Each entry renders as one card in a 2-column grid (any number of rows).
 */
export const certifications: Certification[] = [
  {
    title: '5-Day Gen AI Intensive — AI Agents',
    issuer: 'Google',
    date: '2026',
    description:
      'Hands-on intensive on building multi-agent systems with the Agent Development Kit — LLM agents, workflow orchestration, tools, and memory.',
    skills: ['LLM Agents', 'Multi-Agent Systems', 'Gemini', 'Agent Dev Kit'],
    credentialUrl: '',
    accent: '#4285F4',
  },
  {
    title: 'Add your certification',
    issuer: 'Issuing organization',
    date: '20XX',
    description:
      'Short summary of what this credential covers. Edit me in data/certifications.ts.',
    skills: ['Skill', 'Skill', 'Skill'],
    credentialUrl: '',
    accent: '#10B981',
  },
  {
    title: 'Add your certification',
    issuer: 'Issuing organization',
    date: '20XX',
    description:
      'Short summary of what this credential covers. Edit me in data/certifications.ts.',
    skills: ['Skill', 'Skill'],
    credentialUrl: '',
    accent: '#F59E0B',
  },
  {
    title: 'Add your certification',
    issuer: 'Issuing organization',
    date: '20XX',
    description:
      'Short summary of what this credential covers. Edit me in data/certifications.ts.',
    skills: ['Skill', 'Skill', 'Skill'],
    credentialUrl: '',
    accent: '#8B5CF6',
  },
]
