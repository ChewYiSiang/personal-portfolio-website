/**
 * PERSONAL INFO
 * ─────────────
 * Single source of truth for your name, tagline, and social links.
 * Update this file and changes propagate across the whole site.
 */

export const personal = {
  name: 'Chew Yi Siang',
  tagline: 'Building the Future of Data & Intelligence.',
  roles: ['Computer Science Student', 'Curious Learner', 'ML Enthusiast'],
  location: 'Singapore · SUTD',
  email: 'chewyisiang123@gmail.com',
  available: true,
  availabilityNote: 'Available for internships & projects',

  social: {
    linkedin: 'https://www.linkedin.com/in/yi-siang-chew-617576212/',
    github: 'https://github.com/ChewYiSiang',
    whatsapp: 'https://wa.me/6591885071',
  },

  stats: [
    { value: '3+', label: 'Projects' },
    { value: '1', label: 'Internships' },
    { value: '∞',  label: 'Learning' },
  ],

  contactNote: 'Based in Singapore · Open to remote & on-site roles. Usually replies within 24–48 hours.',
} as const
