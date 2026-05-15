'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { personal } from '@/data/personal'

const NAV_LINKS = [
  { label: 'Stack',      href: '#skills'     },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Experience', href: '#experience' },
  { label: 'Lab',        href: '#lab'        },
  { label: 'Education',  href: '#education'  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMenuOpen(false)
    if (pathname !== '/') {
      window.location.href = `/${href}`
      return
    }
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'nav-blur py-3' : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo — clicking returns to hero */}
        <a
          href="#hero"
          onClick={(e) => scrollTo(e, '#hero')}
          className="font-display font-bold text-[15px] text-gray-100 hover:text-cyber-cyan transition-colors flex items-center gap-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-cyber-cyan to-cyber-purple" />
          {personal.name}
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              className="text-gray-500 hover:text-cyber-cyan text-[11px] font-mono tracking-wide transition-colors relative group"
            >
              <span className="text-cyber-cyan/30 mr-1">#</span>
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-cyber-cyan to-cyber-purple group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => scrollTo(e, '#contact')}
            className="btn-cyber px-4 py-1.5 rounded-md text-[11px] font-mono tracking-widest uppercase"
          >
            Contact
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`block w-5 h-px bg-cyber-cyan transition-all duration-300 ${
                menuOpen && i === 0 ? 'rotate-45 translate-y-2' :
                menuOpen && i === 1 ? 'opacity-0' :
                menuOpen && i === 2 ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden nav-blur border-t border-white/5 overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              className="text-gray-500 hover:text-cyber-cyan font-mono text-sm transition-colors"
            >
              <span className="text-cyber-cyan/35 mr-2">{'>'}</span>
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => scrollTo(e, '#contact')}
            className="text-cyber-cyan font-mono text-sm"
          >
            <span className="text-cyber-cyan/35 mr-2">{'>'}</span>
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}
