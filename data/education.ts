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
    period: '2024 – Present',
    status: 'Current',
    achievements: [
      'Specialisation in AI & Data Systems',
      'SUTD Merit Scholarship (placeholder)',
      "Dean's List (placeholder)",
    ],
    courses: ['Machine Learning', 'Data Structures', 'Distributed Systems', 'Algorithm Design'],
    accent: '#00f5ff',
  },
  {
    logoText: 'N',
    institution: 'Nanyang Polytechnic',
    shortName: 'NYP',
    degree: 'Diploma in Business Intelligence & Analytics',
    period: '2021 – 2024',
    status: 'Graduated',
    achievements: [
      'GPA: [Your GPA] / 4.0',
      "Director's List (placeholder)",
      'Best Capstone Project Award (placeholder)',
    ],
    courses: ['Business Analytics', 'Data Mining', 'SQL & Databases', 'Tableau / Power BI'],
    accent: '#bf00ff',
  },
  {
    logoText: 'S',
    institution: 'Serangoon Secondary School',
    shortName: 'SSS',
    degree: 'GCE O-Level Certificate',
    period: '2017 – 2020',
    status: 'Graduated',
    achievements: [
      'L1R5: [Your Score]',
      'Mathematics Excellence Award (placeholder)',
      'IT Club Chairperson',
    ],
    courses: ['Additional Mathematics', 'Physics', 'Chemistry', 'Computer Applications'],
    accent: '#555555',
  },
]
