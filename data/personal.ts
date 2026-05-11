/**
 * PERSONAL INFO
 * ─────────────
 * Single source of truth for your name, tagline, and social links.
 * Update this file and changes propagate across the whole site.
 */

export const personal = {
  name: 'Chew Yi Siang',
  tagline: 'Building the Future of Data & Intelligence.',
  roles: ['Computer Science Student', 'Data Engineer', 'ML Enthusiast'],
  location: 'Singapore · SUTD',
  email: 'yisiang@example.com',
  available: true,
  availabilityNote: 'Available for internships & projects',

  social: {
    linkedin: 'https://linkedin.com/in/yourprofile',
    github: 'https://github.com/yourusername',
    whatsapp: 'https://wa.me/6512345678',
  },

  stats: [
    { value: '3+', label: 'Projects' },
    { value: '2+', label: 'Internships' },
    { value: '∞',  label: 'Learning' },
  ],

  contactNote: 'Based in Singapore · Open to remote & on-site roles. Usually replies within 24–48 hours.',
} as const
