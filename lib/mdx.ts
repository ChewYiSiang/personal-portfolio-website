import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { ParsedProject, ProjectFrontmatter } from '@/types'

const PROJECTS_DIR = path.join(process.cwd(), 'content/projects')

/** Return all slugs derived from .mdx file names. */
export function getAllProjectSlugs(): string[] {
  if (!fs.existsSync(PROJECTS_DIR)) return []
  return fs
    .readdirSync(PROJECTS_DIR)
    .filter((f) => f.endsWith('.mdx') || f.endsWith('.md'))
    .map((f) => f.replace(/\.(mdx|md)$/, ''))
}

/** Parse a single project file by slug. Returns null if not found. */
export function getProjectBySlug(slug: string): ParsedProject | null {
  const candidates = [
    path.join(PROJECTS_DIR, `${slug}.mdx`),
    path.join(PROJECTS_DIR, `${slug}.md`),
  ]
  const filePath = candidates.find((p) => fs.existsSync(p))
  if (!filePath) return null

  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)

  return {
    slug,
    frontmatter: data as ProjectFrontmatter,
    content,
  }
}

/** Return all parsed projects (used for static generation). */
export function getAllParsedProjects(): ParsedProject[] {
  return getAllProjectSlugs()
    .map(getProjectBySlug)
    .filter((p): p is ParsedProject => p !== null)
}
