import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import { getAllProjectSlugs, getProjectBySlug } from '@/lib/mdx'
import { statusColour } from '@/lib/utils'

/* ── Static params ── */
export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }))
}

/* ── Metadata ── */
export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const project = getProjectBySlug(params.slug)
  if (!project) return { title: 'Project Not Found' }
  return {
    title: `${project.frontmatter.title} | Portfolio`,
    description: project.frontmatter.description,
  }
}

/* ── MDX component overrides ── */
const components = {
  h1: (p: React.HTMLProps<HTMLHeadingElement>) => <h1 className="font-display font-bold text-3xl text-gray-100 mt-10 mb-4" {...p} />,
  h2: (p: React.HTMLProps<HTMLHeadingElement>) => <h2 className="font-display font-bold text-2xl text-gray-100 mt-8 mb-3 section-heading" {...p} />,
  h3: (p: React.HTMLProps<HTMLHeadingElement>) => <h3 className="font-display font-semibold text-xl text-gray-200 mt-6 mb-2" {...p} />,
  p:  (p: React.HTMLProps<HTMLParagraphElement>) => <p className="text-gray-500 leading-relaxed mb-4 text-sm" {...p} />,
  ul: (p: React.HTMLProps<HTMLUListElement>) => <ul className="space-y-2 mb-4" {...p} />,
  li: (p: React.HTMLProps<HTMLLIElement>) => (
    <li className="flex items-start gap-2 text-gray-500 text-sm">
      <span className="text-cyber-cyan mt-0.5 flex-shrink-0">▸</span>
      <span {...p} />
    </li>
  ),
  a:  (p: React.HTMLProps<HTMLAnchorElement>) => <a className="text-cyber-cyan hover:underline" target="_blank" rel="noopener noreferrer" {...p} />,
  hr: () => <hr className="border-white/10 my-8" />,
  blockquote: (p: React.HTMLProps<HTMLQuoteElement>) => (
    <blockquote className="border-l-2 border-cyber-purple pl-4 py-1 my-4 text-gray-500 italic text-sm" {...p} />
  ),
  table: (p: React.HTMLProps<HTMLTableElement>) => (
    <div className="overflow-x-auto my-5">
      <table className="w-full text-sm glass rounded-xl overflow-hidden border-collapse" {...p} />
    </div>
  ),
  th: (p: React.HTMLProps<HTMLTableCellElement>) => (
    <th className="px-4 py-2 text-left font-mono text-[11px] text-cyber-cyan border-b border-white/10" {...p} />
  ),
  td: (p: React.HTMLProps<HTMLTableCellElement>) => (
    <td className="px-4 py-2 text-gray-500 text-sm border-b border-white/[0.04]" {...p} />
  ),
}

/* ── Page ── */
export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)
  if (!project) notFound()

  const { frontmatter: fm, content } = project

  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      {/* Glows */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-cyber-cyan/[0.03] rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-cyber-purple/[0.03] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Back */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 font-mono text-xs text-gray-600 hover:text-cyber-cyan transition-colors mb-8 group"
        >
          <svg className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Projects
        </Link>

        {/* Header card */}
        <div className="glass rounded-2xl p-7 mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {fm.tags?.map((tag: string) => (
              <span key={tag} className="font-mono text-[10px] text-gray-600 glass px-2 py-0.5 rounded border border-white/[0.06]">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-gray-100 mb-2">
            {fm.title}
          </h1>
          <p className="text-gray-500 text-sm mb-5 leading-relaxed">{fm.description}</p>

          <div className="flex flex-wrap items-center gap-3">
            <span className={`font-mono text-[10px] px-2 py-0.5 rounded border ${statusColour(fm.status)}`}>
              {fm.status}
            </span>

            {fm.github && (
              <a href={fm.github} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-[11px] text-gray-500 hover:text-gray-200 glass px-3 py-1.5 rounded-lg border border-white/[0.06] hover:border-white/10 transition-all">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub Source
              </a>
            )}

            {fm.demo && (
              <a href={fm.demo} target="_blank" rel="noopener noreferrer"
                className="font-mono text-[11px] text-cyber-cyan border border-cyber-cyan/28 bg-cyber-cyan/5 px-3 py-1.5 rounded-lg hover:shadow-[0_0_14px_rgba(0,245,255,0.2)] transition-all">
                → Live Demo
              </a>
            )}

            <span className="font-mono text-[10px] text-gray-700 ml-auto">{fm.date}</span>
          </div>
        </div>

        {/* MDX content */}
        <article className="mdx-prose">
          <MDXRemote
            source={content}
            components={components}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkMath],
                rehypePlugins: [rehypeKatex, rehypeHighlight, rehypeSlug],
              },
            }}
          />
        </article>
      </div>
    </div>
  )
}
