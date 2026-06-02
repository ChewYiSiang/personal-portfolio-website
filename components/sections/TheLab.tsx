'use client'

import { useRef, useEffect } from 'react'
import RevealWrapper from '@/components/ui/RevealWrapper'
import SectionHeading from '@/components/ui/SectionHeading'
import { labEvents } from '@/data/lab'

// Triple the events so the middle copy has content on both sides for drag + loop
const tripled = [...labEvents, ...labEvents, ...labEvents]

const SPEED = 0.65 // px per frame

export default function TheLab() {
  const trackRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>()
  const isDragging = useRef(false)
  const dragStartX = useRef(0)
  const dragScrollLeft = useRef(0)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    // Start at the middle copy so dragging backward also loops seamlessly
    const singleWidth = () => track.scrollWidth / 3
    track.scrollLeft = singleWidth()

    const loop = () => {
      if (!isDragging.current) {
        track.scrollLeft += SPEED
      }
      // Keep scroll position in the middle-copy range to create seamless loops
      const sw = singleWidth()
      if (track.scrollLeft >= sw * 2) track.scrollLeft -= sw
      if (track.scrollLeft < sw)       track.scrollLeft += sw

      rafRef.current = requestAnimationFrame(loop)
    }
    rafRef.current = requestAnimationFrame(loop)

    const onDown = (e: MouseEvent) => {
      isDragging.current = true
      dragStartX.current = e.pageX - track.offsetLeft
      dragScrollLeft.current = track.scrollLeft
      track.style.cursor = 'grabbing'
    }
    const onUp = () => {
      isDragging.current = false
      track.style.cursor = 'grab'
    }
    const onMove = (e: MouseEvent) => {
      if (!isDragging.current) return
      e.preventDefault()
      const x = e.pageX - track.offsetLeft
      track.scrollLeft = dragScrollLeft.current - (x - dragStartX.current) * 1.4
    }

    track.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    track.addEventListener('mousemove', onMove)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      track.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      track.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <section id="lab" className="py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <RevealWrapper>
          <SectionHeading
            label="Beyond Code"
            title="The Lab"
            description="Hackathons, workshops & seminars — drag to explore."
          />
        </RevealWrapper>
      </div>

      <RevealWrapper delay={80}>
        <div className="relative w-full mt-2">
          {/* Edge fade masks */}
          <div
            className="absolute left-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(90deg, var(--bg) 0%, transparent 100%)' }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(270deg, var(--bg) 0%, transparent 100%)' }}
          />

          {/* Scrollable track */}
          <div
            ref={trackRef}
            className="overflow-x-scroll no-scrollbar py-3 px-2 select-none"
            style={{ cursor: 'grab' }}
          >
            <div className="flex gap-5 w-max">
              {tripled.map((event, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-[272px] rounded-2xl p-5 border transition-transform duration-300 hover:scale-[1.025]"
                  style={{
                    background: `${event.accent}0f`,
                    borderColor: `${event.accent}33`,
                  }}
                >
                  <p className="text-[9px] tracking-[2.5px] uppercase text-faint mb-1.5">
                    {event.type}
                  </p>

                  <span
                    className="inline-block text-[9px] px-2 py-0.5 rounded border mb-3"
                    style={{
                      color: event.accent,
                      borderColor: `${event.accent}40`,
                      background: `${event.accent}12`,
                    }}
                  >
                    {event.badge}
                  </span>

                  <h4 className="font-display font-semibold text-[13px] text-content mb-1 leading-snug">
                    {event.title}
                  </h4>

                  <p className="text-[10px] text-faint mb-2.5 tracking-wide">{event.meta}</p>

                  <p className="text-[11.5px] text-muted leading-relaxed line-clamp-3">
                    {event.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </RevealWrapper>
    </section>
  )
}
