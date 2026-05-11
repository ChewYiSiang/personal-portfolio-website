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
    icon: '🤖',
    type: 'Hackathon',
    title: 'Build for Impact 2026',
    meta: 'Lovable · Feb 2026',
    badge: 'Participant',
    description:
      'Applied Google\'s Antigravity and collaborated with 2 teammates to build an AI-powered sustainability-focused app designed to help users reduce overconsumption and move away from fast fashion in 48 hours. Excited to learn more AI concepts in the new year!',
    accent: 'rgb(251,146,60)',
  },
  {
    icon: '🎤',
    type: 'Seminar',
    title: 'GDG Monthly: Google DeepMind & Antigravity Updates',
    meta: 'Google · Jan 2026',
    badge: 'Attendee',
    description:
      'Attended the latest updates on Google DeepMind’s research and Antigravity agentic AI framework. Gained insights into the future of AI development and applications.',
    accent: 'rgb(96,165,250)',
  },
  {
    icon: '⚙️',
    type: 'Workshop',
    title: 'Docker Foundations Professional Certificate',
    meta: 'Linkedin Learning · Jan 2026',
    badge: 'Completed',
    description:
      'Comprehensive training on Docker fundamentals, containerization, and orchestration. Earned the LinkedIn Learning certificate after completing all coursework and assessments.',
    accent: 'rgb(248,113,113)',
  },
  {
    icon: '⚙️',
    type: 'Workshop',
    title: '5-Day AI Agents Intensive Course with Google',
    meta: 'Kaggle x Google · Jan 2026',
    badge: 'Completed',
    description:
      'In-depth training on building AI agents using Google’s latest frameworks and tools. Learnt about Antigravity, agentic AI and received certification.',
    accent: 'rgb(52,211,153)',
  },
  {
    icon: '🌐',
    type: 'Conference',
    title: 'Singapore FinTech Festival 2025',
    meta: 'Fintech Community · Nov 2025',
    badge: 'Attendee',
    description:
      'Attended talks on AI in finance, blockchain scalability, and digital banking trends at the world’s largest FinTech event.',
    accent: 'rgb(167,139,250)',
  },
  {
    icon: '🤖',
    type: 'Hackathon',
    title: 'WhatTheHack 2025',
    meta: 'SUTD · Sep 2025',
    badge: 'Participant',
    description:
      'First hackathon experience! Collaborated with 4 teammates to build an AI wellness chatbot prototype in 48 hours. First dive into vibecoding',
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
