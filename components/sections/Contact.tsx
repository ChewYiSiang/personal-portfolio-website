'use client'

import { useState } from 'react'
import RevealWrapper from '@/components/ui/RevealWrapper'
import SectionHeading from '@/components/ui/SectionHeading'
import { personal } from '@/data/personal'

const CONTACT_LINKS = [
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/yourprofile',
    href: personal.social.linkedin,
    iconBg: 'rgba(59,130,246,0.1)',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="#60a5fa">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'github.com/yourusername',
    href: personal.social.github,
    iconBg: 'rgba(255,255,255,0.05)',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="#aaa">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    value: '+65 1234 5678',
    href: personal.social.whatsapp,
    iconBg: 'rgba(74,222,128,0.1)',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="#4ade80">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
    iconBg: 'rgba(191,0,255,0.1)',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#bf00ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError(true)
      setTimeout(() => setError(false), 2500)
      return
    }
    /* Replace with your preferred submission logic (e.g. Formspree, Resend, etc.) */
    setSent(true)
    setTimeout(() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }) }, 3500)
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <RevealWrapper>
          <SectionHeading
            label="// 07. Get in Touch"
            title="Contact Me"
            description="Open to internships, collaborations, and interesting projects. Let's build something meaningful."
          />
        </RevealWrapper>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* ── Form ── */}
          <RevealWrapper delay={100}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
              <div className="grid sm:grid-cols-2 gap-4">
                <label className="flex flex-col gap-1.5">
                  <span className="font-mono text-[9.5px] tracking-[2px] uppercase text-gray-600">Name</span>
                  <input name="name" value={form.name} onChange={handleChange} placeholder="Jane Doe" className="form-input" />
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="font-mono text-[9.5px] tracking-[2px] uppercase text-gray-600">Email</span>
                  <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="hello@example.com" className="form-input" />
                </label>
              </div>

              <label className="flex flex-col gap-1.5">
                <span className="font-mono text-[9.5px] tracking-[2px] uppercase text-gray-600">Subject</span>
                <input name="subject" value={form.subject} onChange={handleChange} placeholder="Internship / Collaboration / Just saying hi" className="form-input" />
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="font-mono text-[9.5px] tracking-[2px] uppercase text-gray-600">Message</span>
                <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell me about what you're working on..." className="form-input form-textarea" />
              </label>

              <button
                type="submit"
                className={`self-start px-6 py-2.5 rounded-lg border font-mono text-xs transition-all duration-300 ${
                  sent
                    ? 'border-green-400/35 text-green-400 bg-green-400/5'
                    : error
                    ? 'border-red-400/35 text-red-400 bg-red-400/5'
                    : 'btn-cyber'
                }`}
              >
                {sent ? '✓ Message Sent!' : error ? '⚠ Please fill all fields' : 'Send Message →'}
              </button>
            </form>
          </RevealWrapper>

          {/* ── Contact links ── */}
          <RevealWrapper delay={200} from="right">
            <div className="flex flex-col gap-3">
              {CONTACT_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="glass flex items-center gap-3.5 px-5 py-4 rounded-xl border border-white/[0.06] hover:border-cyber-cyan/18 hover:translate-x-1 transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: link.iconBg }}>
                    {link.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-mono text-[9px] tracking-[2px] uppercase text-gray-700 mb-0.5">{link.label}</div>
                    <div className="text-xs text-gray-400 truncate">{link.value}</div>
                  </div>
                  <span className="text-gray-700 text-sm group-hover:text-cyber-cyan">→</span>
                </a>
              ))}

              {/* Note */}
              <div className="glass rounded-xl px-5 py-4 border border-cyber-cyan/[0.07] bg-cyber-cyan/[0.02] mt-1">
                <p className="font-mono text-[10.5px] text-gray-600 leading-relaxed">{personal.contactNote}</p>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}
