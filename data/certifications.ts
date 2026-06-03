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
    credentialUrl: 'https://www.kaggle.com/certification/badges/yisiangchew/105',
    accent: '#4285F4',
  },
  {
    title: 'AI4I® – Foundations in AI',
    issuer: 'AI Singapore',
    date: '2026',
    description:
      'Comprehensive 140 hour course covering AI fundamentals, including machine learning, deep learning, and data science.',
    skills: ['Machine Learning', 'Deep Learning', 'Data Science'],
    credentialUrl: 'https://learn.aisingapore.org/certificate-verification/839BCB1C17-735B73A745-733763C6B8/',
    accent: '#10B981',
  },
  {
    title: 'Docker Foundations Professional Certificate',
    issuer: 'Docker, Inc',
    date: '2026',
    description:
      'This credential provides the essential skills to build, run, and manage both single and multi-container applications using Docker, Dockerfile, and Docker Compose.',
    skills: ['Docker', 'Containerization', 'DevOps'],
    credentialUrl: 'https://www.linkedin.com/learning/certificates/9ccfe25e7dd815a7c55470729941012ba3d7744531c987eba977223c0936b99c?u=2062740',
    accent: '#8B5CF6',
  },
  {
    title: 'AI4I® – Literacy in AI',
    issuer: 'AI Singapore',
    date: '2025',
    description:
      'It teaches non-technical professionals how to become savvy consumers of AI products and identify real-world business use cases',
    skills: ['AI Literacy', 'Ethics in AI'],
    credentialUrl: 'https://learn.aisingapore.org/certificate-verification/839B9D548C-81358317D9-733763C6B8/',
    accent: '#F59E0B',
  },
]
