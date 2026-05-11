import type { LabEvent } from '@/types'

/**
 * THE LAB — Events & Activities
 * ──────────────────────────────
 * Add any hackathon, seminar, workshop, or competition here.
 * Cards render in a horizontally scrollable carousel — newest first.
 *
 * Fields:
 *   icon        — Emoji used as the card icon
 *   type        — 'Hackathon' | 'Seminar' | 'Workshop' | 'Competition' | 'Conference'
 *   title       — Event name
 *   meta        — "Organiser · Month Year"
 *   badge       — Short label e.g. 'Top Finalist', 'Attendee', 'Completed'
 *   description — 1–2 sentence summary of what you did / learned
 *   accent      — CSS colour for the badge and card border tint
 */

export const labEvents: LabEvent[] = [
  {
    icon: '🏆',
    type: 'Hackathon',
    title: 'SustainHack 2024',
    meta: 'NTU · March 2024',
    badge: 'Top Finalist',
    description:
      'Built SustainFit — an AI-powered clothing sustainability platform. Placed as Top Finalist among 40+ teams in a 24-hour sprint.',
    accent: 'rgb(251,191,36)',
  },
  {
    icon: '🎤',
    type: 'Seminar',
    title: 'AI & The Future of Work',
    meta: 'SUTD × Microsoft · Jan 2024',
    badge: 'Attendee',
    description:
      'Deep-dive on enterprise generative AI adoption featuring speakers from Microsoft Research and Singapore-based AI startups.',
    accent: 'rgb(96,165,250)',
  },
  {
    icon: '⚙️',
    type: 'Workshop',
    title: 'MLOps & Model Deployment',
    meta: 'AWS Singapore · Nov 2023',
    badge: 'Certified',
    description:
      'Hands-on SageMaker, Docker containerisation, and CI/CD pipelines for ML models. Completed all modules and labs.',
    accent: 'rgb(251,146,60)',
  },
  {
    icon: '🇸🇬',
    type: 'Hackathon',
    title: 'GovTech Hackathon 2023',
    meta: 'GovTech Singapore · Sep 2023',
    badge: 'Participant',
    description:
      'Developed a citizen-facing public service data transparency dashboard under 24-hour hackathon constraints.',
    accent: 'rgb(248,113,113)',
  },
  {
    icon: '📡',
    type: 'Workshop',
    title: 'IoT & Edge Computing',
    meta: 'NUS Engineering · Aug 2023',
    badge: 'Completed',
    description:
      'Practical ESP32 programming, MQTT protocol, edge inference, and real-world sensor integration.',
    accent: 'rgb(52,211,153)',
  },
  {
    icon: '📊',
    type: 'Seminar',
    title: 'Data Storytelling Masterclass',
    meta: 'Data Science SG · Jun 2023',
    badge: 'Attendee',
    description:
      'Techniques for communicating data insights to non-technical stakeholders through effective visual narratives.',
    accent: 'rgb(167,139,250)',
  },
  {
    icon: '🤖',
    type: 'Competition',
    title: 'ML Olympics 2023',
    meta: 'Kaggle × NTU · Apr 2023',
    badge: 'Top 15%',
    description:
      'Multi-stage ML challenge covering tabular data, feature engineering, and ensemble methods. Finished in the top 15%.',
    accent: '#00f5ff',
  },
  // ─── Add more events below ────────────────────────────────────────────────
  // {
  //   icon: '🚀',
  //   type: 'Conference',
  //   title: 'NeurIPS 2024',
  //   meta: 'Venue · Month Year',
  //   badge: 'Attendee',
  //   description: 'Attended talks on ...',
  //   accent: 'rgb(251,191,36)',
  // },
]
