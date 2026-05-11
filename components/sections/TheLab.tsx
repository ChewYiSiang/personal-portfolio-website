'use client'

import { useEffect, useRef, useState } from 'react'
import RevealWrapper from '@/components/ui/RevealWrapper'
import SectionHeading from '@/components/ui/SectionHeading'
import { labEvents } from '@/data/lab'

const CARD_WIDTH = 291 // px including gap

export default function TheLab() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)

  /* Drag-to-scroll */
  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    let isDown = false, startX = 0, scrollLeft = 0

    const onDown  = (e: MouseEvent) => { isDown = true; startX = e.pageX - track.offsetLeft; scrollLeft = track.scrollLeft }
    const onLeave = () => { isDown = false }
    const onUp    = () => { isDown = false }
    const onMove  = (e: MouseEvent) => {
      if (!isDown) return
      e.preventDefault()
      track.scrollLeft = scrollLeft - (e.pageX - track.offsetLeft - startX) * 1.2
    }

    track.addEventListener('mousedown', onDown)
    track.addEventListener('mouseleave', onLeave)
    track.addEventListener('mouseup', onUp)
    track.addEventListener('mousemove', onMove)
    return () => {
      track.removeEventListener('mousedown', onDown)
      track.removeEventListener('mouseleave', onLeave)
      track.removeEventListener('mouseup', onUp)
      track.removeEventListener('mousemove', onMove)
    }
  }, [])

  const scroll = (dir: 1 | -1) => {
    const track = trackRef.current
    if (!track) return
    track.scrollBy({ left: dir * CARD_WIDTH, behavior: 'smooth' })
  }

  /* Sync counter */
  const handleScroll = () => {
    if (!trackRef.current) return
    setIndex(Math.round(trackRef.current.scrollLeft / CARD_WIDTH))
  }

  return (
    <section id="lab" className="py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <RevealWrapper>
          <SectionHeading
            label="// 05. Beyond Code"
            title="The Lab"
            description="Hackathons, workshops & seminars — drag or use arrows to scroll. More events added over time."
          />
        </RevealWrapper>

        <RevealWrapper delay={100}>
          {/* Scrollable track */}
          <div
            ref={trackRef}
            onScroll={handleScroll}
            className="lab-scroll-track"
          >
            {labEvents.map((event, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[275px] glass rounded-2xl p-5 border border-white/[0.06] hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(0,0,0,0.45)] transition-all duration-300"
                style={{ borderColor: `${event.accent}20`, background: `${event.accent}08` }}
              >
                <div className="text-2xl mb-3">{event.icon}</div>
                <div className="font-mono text-[9px] tracking-[2.5px] uppercase text-gray-600 mb-1.5">
                  {event.type}
                </div>
                <span
                  className="inline-block font-mono text-[9px] px-2 py-0.5 rounded border mb-2.5"
                  style={{ color: event.accent, borderColor: `${event.accent}40`, background: `${event.accent}10` }}
                >
                  {event.badge}
                </span>
                <h4 className="font-display font-semibold text-[13.5px] text-gray-100 mb-1">{event.title}</h4>
                <p className="font-mono text-[10px] text-gray-600 mb-2.5">{event.meta}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{event.description}</p>
              </div>
            ))}
          </div>

          {/* Counter + nav */}
          <div className="flex items-center justify-end gap-2 mt-3">
            <span className="font-mono text-[10px] text-gray-700 mr-auto">
              {index + 1} / {labEvents.length}
            </span>
            {(['←', '→'] as const).map((arrow, i) => (
              <button
                key={arrow}
                onClick={() => scroll(i === 0 ? -1 : 1)}
                aria-label={i === 0 ? 'Previous' : 'Next'}
                className="w-8 h-8 rounded-full glass border border-white/[0.06] text-gray-600 hover:text-cyber-cyan hover:border-cyber-cyan/35 flex items-center justify-center text-base transition-all"
              >
                {arrow}
              </button>
            ))}
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
