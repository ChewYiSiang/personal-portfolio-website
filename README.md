# Chew Yi Siang — Portfolio

> Cyber-minimalist data & intelligence portfolio built with Next.js 14.

**Live demo**: [your-domain.vercel.app](https://your-domain.vercel.app)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS (dark-mode default) |
| Animations | Framer Motion |
| Background | tsParticles (neural-network effect) |
| Content | MDX (projects) — gray-matter + next-mdx-remote |
| Math | KaTeX via remark-math + rehype-katex |
| Code | rehype-highlight (Python, C++, SQL …) |
| Language | TypeScript (strict) |

---

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx                  # Root layout (fonts, metadata, navbar)
│   ├── page.tsx                    # Home page — assembles all sections
│   ├── not-found.tsx               # 404 page
│   └── projects/
│       ├── page.tsx                # /projects — all-projects archive grid
│       └── [slug]/
│           └── page.tsx            # /projects/<slug> — MDX detail page
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/                   # One file per homepage section
│   │   ├── Hero.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── TheLab.tsx
│   │   ├── Education.tsx
│   │   └── Contact.tsx
│   └── ui/                         # Reusable primitives
│       ├── ParticlesBackground.tsx
│       ├── Terminal.tsx
│       ├── ProjectModal.tsx
│       ├── SectionHeading.tsx
│       └── RevealWrapper.tsx
│
├── content/
│   └── projects/                   # ← Drop .mdx files here
│       ├── sustainfit.mdx
│       ├── smart-garden.mdx
│       └── financial-analytics.mdx
│
├── data/                           # ← Edit these to update content
│   ├── personal.ts                 # Name, email, social links, stats
│   ├── projects.ts                 # Featured project metadata
│   ├── experience.ts               # Work history
│   ├── education.ts                # Academic background
│   ├── lab.ts                      # Hackathons, seminars, workshops
│   └── skills.ts                   # Tech stack categories & chips
│
├── lib/
│   ├── mdx.ts                      # MDX parsing utilities
│   └── utils.ts                    # cn(), statusColour(), accentStyle()
│
└── types/
    └── index.ts                    # All shared TypeScript interfaces
```

---

## Getting Started

```bash
# 1. Clone
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
# → http://localhost:3000
```

---

## How to Update Content

All content lives in the `data/` folder. No touching components required.

### ✏️ Personal info / social links
Edit **`data/personal.ts`** — name, email, LinkedIn, GitHub, WhatsApp, availability note.

### 💼 Add a work experience entry
Open **`data/experience.ts`** and append to the array:

```ts
{
  role: 'Software Engineer Intern',
  company: 'Acme Corp',
  period: 'Jan 2025 – May 2025',
  type: 'Internship',
  description: 'One or two sentences summarising the role.',
  highlights: [
    'What you built / achieved',
    'Quantified impact if possible',
  ],
  tech: ['TypeScript', 'React', 'PostgreSQL'],
  accent: '#00f5ff',   // CSS colour for the card border and dot
},
```

### 🎓 Update education
Edit **`data/education.ts`** — fill in real GPA, dates, achievements.

### 🧪 Add a Lab event (hackathon / seminar / workshop)
Open **`data/lab.ts`** and append:

```ts
{
  icon: '🚀',
  type: 'Conference',           // Hackathon | Seminar | Workshop | Competition | Conference
  title: 'NeurIPS 2025',
  meta: 'Vancouver · Dec 2025',
  badge: 'Attendee',
  description: 'Attended talks on scaling laws and agent frameworks.',
  accent: 'rgb(167,139,250)',   // CSS colour for badge and border tint
},
```

### 🛠 Add / edit a featured project

**Step 1** — Add metadata to **`data/projects.ts`**:

```ts
{
  slug: 'my-new-project',        // must match the .mdx filename exactly
  number: '04',
  title: 'My New Project',
  subtitle: 'Category Label',
  description: 'One sentence shown on the card.',
  longDescription: 'Longer write-up shown inside the modal popup.',
  highlights: ['Key feature 1', 'Key feature 2'],
  tags: ['Python', 'FastAPI'],
  status: 'Active',              // Active | Completed | In Progress | Archived
  github: 'https://github.com/yourusername/my-new-project',
  demo: 'https://my-project.vercel.app',
  gradientFrom: 'rgba(0,245,255,0.04)',
  gradientTo: 'rgba(191,0,255,0.04)',
  featured: true,                // true = show on homepage, false = archive only
},
```

**Step 2** — Drop **`content/projects/my-new-project.mdx`** (slug must match):

```mdx
---
title: "My New Project"
description: "Short description."
date: "2025"
tags: ["Python", "FastAPI"]
status: "Active"
github: "https://github.com/..."
demo: ""
math: false          # set true to enable LaTeX rendering
---

## Overview
Your content here. Supports:
- **LaTeX**: $E = mc^2$ (inline) or block math
- **Code blocks** with syntax highlighting
- Tables, blockquotes, links
```

The page is automatically available at `/projects/my-new-project`.

---

## Deploy to Vercel

```bash
# Push to GitHub, then import the repo in vercel.com
# Or use the CLI:
npx vercel
```

No environment variables are required for the static build.

---

## Customisation

| What | Where |
|---|---|
| Accent colours (cyan / purple) | `app/globals.css` `:root` |
| Particle density / behaviour | `components/ui/ParticlesBackground.tsx` |
| Typewriter skill list | `components/ui/Terminal.tsx` |
| Nav links | `components/layout/Navbar.tsx` |
| Contact form submission | `components/sections/Contact.tsx` `handleSubmit` |

---

## License

MIT — feel free to fork and adapt for your own portfolio.
