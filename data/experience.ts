import type { ExperienceEntry } from '@/types'

/**
 * WORK EXPERIENCE
 * ───────────────
 * List entries in reverse-chronological order (newest first).
 * Each entry renders as a card on the timeline.
 *
 * Fields:
 *   role        — Job title
 *   company     — Company / organisation name
 *   period      — Display string e.g. "May 2024 – Aug 2024"
 *   type        — 'Internship' | 'Full-time' | 'Part-time' | 'Freelance' | 'Contract'
 *   description — 1–2 sentence summary
 *   highlights  — Bullet points (shown as ▸ list)
 *   tech        — Tech tags shown at the bottom of the card
 *   accent      — CSS colour used for the left border and timeline dot
 */

export const experience: ExperienceEntry[] = [
  {
    role: 'Data Analytics Intern',
    company: 'NCS Group',
    period: 'Sep 2022 – Feb 2023',
    type: 'Internship',
    description:
      'Assisted in developing end-to-end data pipelines for data extraction, preprocessing, and analytics support. Collaborated with cross-functional teams to design data workflows and define analytics requirements and specifications.',
    highlights: [
      'Created On-boarding documentation and user guides for data pipelines, enabling seamless knowledge transfer and ensuring smooth handover to the team.'
    ],
    tech: ['Python', 'SQL', 'Tableau', 'Excel', 'Powerpoint'],
    accent: '#00f5ff',
  }
  // ─── Add more roles below ─────────────────────────────────────────────────
  // {
  //   role: 'Software Engineering Intern',
  //   company: 'Acme Corp',
  //   period: 'Jan 2023 – Apr 2023',
  //   type: 'Internship',
  //   description: '...',
  //   highlights: ['...'],
  //   tech: ['TypeScript', 'React', 'Node.js'],
  //   accent: '#00f5ff',
  // },
]
