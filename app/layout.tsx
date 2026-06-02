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

/**
 * Sets the theme class before first paint so there's no light→dark flash.
 * Default is the cream (light) theme; we only opt into dark if the visitor
 * previously chose it.
 */
const themeScript = `(function(){try{if(localStorage.getItem('theme')==='dark'){document.documentElement.classList.add('dark')}}catch(e){}})()`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {/* KaTeX for LaTeX rendering in MDX project pages */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css"
          integrity="sha384-GvrOXuhMATgEsSwCs4smul74iXGOixntILdUW9XmUC6+HX0sLNAK3q71HotJqlAn"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-bg text-content antialiased overflow-x-hidden">
        <ParticlesBackground />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
