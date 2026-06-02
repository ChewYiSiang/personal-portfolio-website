'use client'

import { useEffect, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import type { Engine, ISourceOptions } from '@tsparticles/engine'
import { loadSlim } from '@tsparticles/slim'

export default function ParticlesBackground() {
  const [init, setInit] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)

    // Keep the particle palette in sync with the active theme.
    const root = document.documentElement
    const sync = () => setIsDark(root.classList.contains('dark'))
    sync()
    const obs = new MutationObserver(sync)
    obs.observe(root, { attributes: true, attributeFilter: ['class'] })

    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine)
    }).then(() => setInit(true))

    return () => obs.disconnect()
  }, [])

  if (!init) return null

  // Cream theme keeps the field present but noticeably more subtle.
  const linkColor = isDark ? '#818cf8' : '#6366f1'
  const dotColors = isDark ? ['#818cf8', '#a78bfa', '#c4b5fd'] : ['#6366f1', '#7c3aed', '#9333ea']
  const linkOpacity = isDark ? 0.07 : 0.05
  const dotMax = isDark ? 0.65 : 0.32
  const dotMin = isDark ? 0.15 : 0.08

  const options: ISourceOptions = {
    fpsLimit: isMobile ? 30 : 60,
    interactivity: {
      events: {
        onHover: { enable: !isMobile, mode: 'grab' },
        onClick: { enable: true, mode: 'push' },
        resize: { enable: true },
      },
      modes: {
        grab: { distance: 160, links: { opacity: isDark ? 0.4 : 0.25, color: linkColor } },
        push: { quantity: 2 },
      },
    },
    particles: {
      color: { value: dotColors },
      links: {
        color: linkColor,
        distance: isMobile ? 100 : 140,
        enable: true,
        opacity: linkOpacity,
        width: 0.7,
      },
      move: {
        enable: true,
        speed: isMobile ? 0.4 : 0.65,
        random: true,
        outModes: { default: 'bounce' },
      },
      number: {
        density: { enable: false },
        value: isMobile ? 38 : 80,
      },
      opacity: {
        value: { min: dotMin, max: dotMax },
        animation: { enable: true, speed: 1.2, sync: false, startValue: 'random' },
      },
      shape: { type: 'circle' },
      size: { value: { min: 0.8, max: 2.2 } },
      twinkle: {
        particles: {
          enable: true,
          frequency: 0.05,
          opacity: 1,
          color: { value: dotColors },
        },
      },
    },
    detectRetina: true,
    background: { color: 'transparent' },
  }

  return (
    <Particles
      id="tsparticles"
      key={isDark ? 'dark' : 'light'}
      options={options}
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100%', height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  )
}
