// ─── Project ─────────────────────────────────────────────────────────────────

export interface Project {
  /** Matches the .mdx filename in /content/projects/ */
  slug: string
  number: string
  title: string
  subtitle: string
  description: string
  /** Extended write-up shown inside the modal */
  longDescription: string
  highlights: string[]
  tags: string[]
  status: 'Active' | 'Completed' | 'In Progress' | 'Archived'
  github?: string
  demo?: string
  /** Relative path under /public/images/ or full URL  */
  image?: string
  /** Accent gradient start colour (CSS colour string) */
  gradientFrom: string
  /** Accent gradient end colour (CSS colour string) */
  gradientTo: string
  featured: boolean
}

// ─── MDX frontmatter (used by the [slug] page) ────────────────────────────────

export interface ProjectFrontmatter {
  title: string
  description: string
  date: string
  tags: string[]
  status: string
  github?: string
  demo?: string
  image?: string
  math?: boolean
}

export interface ParsedProject {
  slug: string
  frontmatter: ProjectFrontmatter
  content: string
}

// ─── Experience ───────────────────────────────────────────────────────────────

export interface ExperienceEntry {
  role: string
  company: string
  /** e.g. "May 2024 – Aug 2024" */
  period: string
  type: 'Internship' | 'Full-time' | 'Part-time' | 'Freelance' | 'Contract'
  description: string
  highlights: string[]
  tech: string[]
  /** CSS colour string for the left border + dot */
  accent: string
}

// ─── Education ────────────────────────────────────────────────────────────────

export interface EducationEntry {
  /** Short label shown in the logo box */
  logoText: string
  institution: string
  shortName: string
  degree: string
  /** e.g. "2021 – 2024" */
  period: string
  status: 'Current' | 'Graduated'
  achievements: string[]
  courses: string[]
  /** CSS colour for accent (border, logo, badge) */
  accent: string
}

// ─── Lab events ───────────────────────────────────────────────────────────────

export type LabEventType = 'Hackathon' | 'Seminar' | 'Workshop' | 'Competition' | 'Conference'

export interface LabEvent {
  icon: string
  type: LabEventType
  title: string
  /** e.g. "NTU · March 2024" */
  meta: string
  badge: string
  description: string
  /** CSS colour string for the badge and card border */
  accent: string
}

// ─── Skills / Tech stack ──────────────────────────────────────────────────────

export interface TechChip {
  icon: string
  name: string
}

export interface SkillCategory {
  label: string
  chips: TechChip[]
}
