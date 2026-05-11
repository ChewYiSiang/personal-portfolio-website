import type { EducationEntry } from '@/types'

/**
 * EDUCATION
 * ─────────
 * List entries in reverse-chronological order (newest first).
 *
 * Fields:
 *   logoText    — Short text shown inside the logo box (e.g. 'S', 'NYP')
 *   institution — Full institution name
 *   shortName   — Abbreviated name shown as heading
 *   degree      — Full qualification title
 *   period      — Display string e.g. "2021 – 2024"
 *   status      — 'Current' | 'Graduated'
 *   achievements — Bullet list (use placeholders until you fill them in)
 *   courses     — Relevant modules / subjects shown as chips
 *   accent      — CSS colour used for border, logo, and status badge
 */

export const education: EducationEntry[] = [
  {
    logoText: 'S',
    institution: 'Singapore University of Technology and Design',
    shortName: 'SUTD',
    degree: 'Bachelor of Engineering (Computer Science)',
    period: '2025 – Present',
    status: 'Current',
    achievements: [
      ''
    ],
    courses: ['Machine Learning', 'Data Structures', 'Distributed Systems', 'Algorithm Design'],
    accent: '#00f5ff',
  },
  {
    logoText: 'N',
    institution: 'Nanyang Polytechnic',
    shortName: 'NYP',
    degree: 'Diploma in Business Intelligence & Analytics',
    period: '2020 – 2023',
    status: 'Graduated',
    achievements: [
      'Best Capstone Project Award (placeholder)',
    ],
    courses: ["Big Data Analytics Project", "Predictive Modeling", "Big Data Management", "Business Analytics Project", "Data Science Project", "Text & Rich Media Analytics", "AI Technologies", "Data Structures & Algorithm", "Analytics & Financial Service"],
    accent: '#bf00ff',
  },
  {
    logoText: 'S',
    institution: 'Serangoon Secondary School',
    shortName: 'SSS',
    degree: 'GCE O-Level Certificate',
    period: '2016 – 2020',
    status: 'Graduated',
    achievements: [
      "Edusave Award for achievement, good leadership and service (EAGLES) 2019",
      "National Youth Achievement Silver Award (NYAA) 2019",
      "Edusave Award for achievement, good leadership and service (EAGLES) 2018",
      "National Youth Achievement Bronze Award (NYAA) 2017",
      "UNSW Global Merit in ICAS Mathematics 2017",
      "STEM inc Young Engineer Bronze Award 2016"

    ],
    courses: ['Additional Mathematics', 'Physics', 'Chemistry'],
    accent: '#555555',
  },
]
