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
    period: 'May 2024 – Aug 2024',
    type: 'Internship',
    description:
      'Built automated ETL workflows using Python and SQL, cutting manual reporting time by 60%. Developed Tableau dashboards for enterprise clients and contributed to business intelligence solutions across cross-functional teams.',
    highlights: [
      'Automated ETL pipelines in Python + SQL — 60% faster reporting cycles',
      'Developed Tableau dashboards adopted by 3+ business units',
      'Collaborated with engineering teams on BI solution architecture',
      'Performed exploratory data analysis on large operational datasets',
    ],
    tech: ['Python', 'SQL', 'Tableau', 'Power BI', 'Excel'],
    accent: '#00f5ff',
  },
  {
    role: 'Freelance Data Analyst',
    company: 'Self-employed',
    period: '2023 – Present',
    type: 'Freelance',
    description:
      'Delivered data analysis and visualisation services for small businesses — custom dashboards, automated reporting scripts, and exploratory data analysis for strategic decision-making.',
    highlights: [
      'Delivered 5+ end-to-end data analytics projects',
      'Built automated Python reporting pipelines for recurring insights',
      'Designed client-facing interactive dashboards (Plotly / Streamlit)',
    ],
    tech: ['Python', 'Pandas', 'Matplotlib', 'Plotly', 'Streamlit', 'Excel'],
    accent: '#bf00ff',
  },
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
