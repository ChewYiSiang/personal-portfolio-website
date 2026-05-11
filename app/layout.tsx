import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ParticlesBackground from '@/components/ui/ParticlesBackground'
import { personal } from '@/data/personal'

export const metadata: Metadata = {
  title: `${personal.name} | Data Engineer & ML Enthusiast`,
  description: `${personal.name} — ${personal.roles.join(' · ')}. Based in ${personal.location}.`,
  keywords: ['data engineering', 'machine learning', 'data science', 'computer science', 'SUTD', 'Singapore'],
  authors: [{ name: personal.name }],
  openGraph: {
    title: `${personal.name} | Data Engineer & ML Enthusiast`,
    description: personal.tagline,
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* KaTeX for LaTeX rendering in MDX project pages */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css"
          integrity="sha384-GvrOXuhMATgEsSwCs4smul74iXGOixntILdUW9XmUC6+HX0sLNAK3q71HotJqlAn"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-[#050505] text-gray-100 antialiased overflow-x-hidden">
        <ParticlesBackground />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
