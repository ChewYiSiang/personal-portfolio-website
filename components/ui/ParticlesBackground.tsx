'use client'

import { useCallback, useEffect, useState } from 'react'
import Particles from '@tsparticles/react'
import { initParticlesEngine } from '@tsparticles/react'
import type { Engine, ISourceOptions } from '@tsparticles/engine'
import { loadSlim } from '@tsparticles/slim'

export default function ParticlesBackground() {
  const [init, setInit] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mobile = window.innerWidth < 768
    setIsMobile(mobile)
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine)
    }).then(() => setInit(true))
  }, [])

  const options: ISourceOptions = {
    fpsLimit: isMobile ? 30 : 60,
    interactivity: {
      events: {
        onHover: { enable: !isMobile, mode: 'grab' },
        onClick: { enable: true, mode: 'push' },
        resize: { enable: true },
      },
      modes: {
        grab: { distance: 160, links: { opacity: 0.4, color: '#00f5ff' } },
        push: { quantity: 2 },
      },
    },
    particles: {
      color: { value: ['#00f5ff', '#bf00ff', '#00d4e8'] },
      links: {
        color: '#00f5ff',
        distance: isMobile ? 100 : 140,
        enable: true,
        opacity: 0.07,
        width: 0.7,
      },
      move: {
        enable: true,
        speed: isMobile ? 0.4 : 0.65,
        random: true,
        outModes: { default: 'bounce' },
      },
      number: {
        density: { enable: true, area: isMobile ? 1200 : 900 },
        value: isMobile ? 38 : 80,
      },
      opacity: {
        value: { min: 0.15, max: 0.65 },
        animation: { enable: true, speed: 1.2, sync: false, startValue: 'random' },
      },
      shape: { type: 'circle' },
      size: { value: { min: 0.8, max: 2.2 } },
      twinkle: {
        particles: {
          enable: true,
          frequency: 0.05,
          opacity: 1,
          color: { value: ['#00f5ff', '#bf00ff'] },
        },
      },
    },
    detectRetina: true,
    background: { color: 'transparent' },
  }

  if (!init) return null

  return (
    <Particles
      id="tsparticles"
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
