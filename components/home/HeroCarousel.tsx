'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

const INTERVAL = 6000

const slides = [
  {
    src: '/assets/tiggo9/tiggo9banner.jpg',
    href: '/model/tiggo9',
    label: 'Chery Tiggo 9 PHEV',
    title: 'Chery Tiggo 9 PHEV',
    subtitle: 'E-Segment Premium Luxury SUV',
    textDark: false,
    // bright lifestyle image — light gradient from left only
    overlay: 'bg-gradient-to-r from-black/50 via-black/20 to-transparent',
    overlayBottom: 'bg-gradient-to-t from-black/40 via-transparent to-transparent',
    objectPos: '60% 50%',
    stats: [
      { value: '1.5T',    label: 'TGDI Engine' },
      { value: '1,400 km', label: 'Combined Range' },
      { value: '7 Seats', label: 'Premium Cabin' },
    ],
    cta: { primary: 'Inquire Now', secondary: 'Learn More', primaryHref: '/book-my-chery', secondaryHref: '/model/tiggo9' },
  },
  {
    src: '/assets/tiggo8/Asset-2.webp',
    href: '/model/tiggo8',
    label: 'Chery Tiggo 8 PHEV',
    title: 'Chery Tiggo 8 PHEV',
    subtitle: 'D-Segment Premium Luxury SUV',
    textDark: false,
    overlay: 'bg-gradient-to-r from-black/55 via-black/20 to-transparent',
    overlayBottom: 'bg-gradient-to-t from-black/40 via-transparent to-transparent',
    objectPos: '50% 50%',
    stats: [
      { value: '1.5T',    label: 'TGDI Engine' },
      { value: '1,200 km', label: 'Combined Range' },
      { value: '7 Seats', label: 'Premium Cabin' },
    ],
    cta: { primary: 'Inquire Now', secondary: 'Learn More', primaryHref: '/book-my-chery', secondaryHref: '/model/tiggo8' },
  },
  {
    src: '/assets/tiggo7/one.webp',
    href: '/model/tiggo7',
    label: 'Chery Tiggo 7 PHEV',
    title: 'Chery Tiggo 7 PHEV',
    subtitle: 'C-Segment Smart Hybrid SUV',
    textDark: false,
    overlay: 'bg-gradient-to-r from-black/60 via-black/25 to-transparent',
    overlayBottom: 'bg-gradient-to-t from-black/30 via-transparent to-transparent',
    objectPos: '50% 50%',
    stats: [
      { value: '1.5T',    label: 'TGDI Engine' },
      { value: '1,200 km', label: 'Combined Range' },
      { value: '5 Seats', label: 'Premium Cabin' },
    ],
    cta: { primary: 'Inquire Now', secondary: 'Learn More', primaryHref: '/book-my-chery', secondaryHref: '/model/tiggo7' },
  },
]

export default function HeroCarousel() {
  const [active, setActive] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setActive(a => (a + 1) % slides.length)
    }, INTERVAL)
  }

  useEffect(() => {
    startTimer()
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleNav = (idx: number) => {
    if (idx === active) return
    setActive(idx)
    startTimer()
  }

  const slide = slides[active]
  // financing slide gets special treatment: split layout
  const isFinancing = slide.label === 'Financing'

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: 'calc(100vh - 72px)', minHeight: 500, maxHeight: 900, background: isFinancing ? '#f0f4f8' : '#000' }}
    >

      {/* Slide images */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{ opacity: i === active ? 1 : 0, zIndex: i === active ? 2 : 1 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={s.src}
            alt={s.title}
            className="w-full h-full object-cover"
            style={{ objectPosition: s.objectPos }}
          />
          {/* Directional overlay — light enough to keep image bright */}
          {s.overlay && <div className={`absolute inset-0 ${s.overlay}`} />}
          {s.overlayBottom && <div className={`absolute inset-0 ${s.overlayBottom}`} />}
          {/* Financing: left solid panel so text is readable over white bg */}
          {s.label === 'Financing' && (
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/90 via-[#0a1628]/60 to-transparent" />
          )}
        </div>
      ))}

      {/* Left side tracker */}
      <div className="absolute left-5 top-1/2 -translate-y-1/2 z-20 flex-col gap-3 hidden md:flex">
        {slides.map((s, i) => (
          <button key={i} onClick={() => handleNav(i)} className="group flex items-center gap-2">
            <div className={`transition-all duration-300 rounded-full ${
              i === active ? 'w-[3px] h-8 bg-white' : 'w-[2px] h-4 bg-white/40 group-hover:bg-white/70'
            }`} />
            <span className={`text-xs font-light transition-all duration-300 whitespace-nowrap drop-shadow ${
              i === active ? 'text-white opacity-100 translate-x-0' : 'text-white/50 opacity-0 -translate-x-2 group-hover:opacity-70 group-hover:translate-x-0'
            }`}>{s.label}</span>
          </button>
        ))}
      </div>

      {/* Main text content */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end pb-20 md:pb-24 px-5 md:px-20">
        <div key={`content-${active}`}>
          <p
            className="text-white/80 text-sm font-light tracking-[0.2em] uppercase mb-3 drop-shadow"
            style={{ animation: 'slideUp 0.45s ease both' }}
          >
            {slide.subtitle}
          </p>
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-light text-white leading-tight drop-shadow-lg"
            style={{ animation: 'slideUp 0.45s ease 0.08s both' }}
          >
            {slide.title.split(' ').map((word, i) => (
              i === 0
                ? <strong key={i} className="font-bold">{word} </strong>
                : <span key={i}>{word} </span>
            ))}
          </h1>
        </div>

        {/* Stats */}
        <div
          key={`stats-${active}`}
          className="flex gap-8 md:gap-14 mt-6 mb-8"
          style={{ animation: 'slideUp 0.45s ease 0.16s both' }}
        >
          {slide.stats.map((stat, i) => (
            <div key={i} className={i > 0 ? 'border-l border-white/30 pl-8 md:pl-14' : ''}>
              <p className="text-white text-xl md:text-2xl font-light drop-shadow">{stat.value}</p>
              <p className="text-white/60 text-xs mt-1 tracking-wider uppercase">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          key={`cta-${active}`}
          className="flex gap-3"
          style={{ animation: 'slideUp 0.45s ease 0.24s both' }}
        >
          <Link href={slide.cta.primaryHref}>
            <button className="h-12 px-7 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-100 transition-colors shadow-lg">
              {slide.cta.primary}
            </button>
          </Link>
          <Link href={slide.cta.secondaryHref}>
            <button className="h-12 px-7 border border-white text-white rounded-full text-sm font-light hover:bg-white/15 transition-colors">
              {slide.cta.secondary}
            </button>
          </Link>
        </div>
      </div>

      {/* Progress bar + thumbnail strip */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <ProgressBar key={active} duration={INTERVAL} />
        <div className="bg-black/50 backdrop-blur-sm px-5 md:px-20 py-2 hidden md:flex items-center gap-1">
          {slides.map((s, i) => (
            <button
              key={i}
              onClick={() => handleNav(i)}
              className={`relative flex-1 overflow-hidden rounded transition-all duration-300 ${
                i === active ? 'opacity-100' : 'opacity-45 hover:opacity-70'
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.src} alt={s.label} className="w-full h-[52px] object-cover" style={{ objectPosition: s.objectPos }} />
              <div className={`absolute inset-0 transition-colors duration-200 ${i === active ? 'ring-2 ring-white ring-inset' : ''}`} />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-2 py-1">
                <p className="text-white text-[10px] font-light truncate">{s.label}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Arrow buttons */}
      <button
        onClick={() => handleNav((active - 1 + slides.length) % slides.length)}
        className="absolute left-12 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-white/40 bg-black/20 backdrop-blur-sm text-white items-center justify-center hover:bg-white/20 transition hidden md:flex"
        aria-label="Previous"
      >
        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="10 15 5 9 10 3"/></svg>
      </button>
      <button
        onClick={() => handleNav((active + 1) % slides.length)}
        className="absolute right-12 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-white/40 bg-black/20 backdrop-blur-sm text-white items-center justify-center hover:bg-white/20 transition hidden md:flex"
        aria-label="Next"
      >
        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 3 11 9 6 15"/></svg>
      </button>

      {/* Mobile dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2 md:hidden">
        {slides.map((_, i) => (
          <button key={i} onClick={() => handleNav(i)}
            className={`rounded-full transition-all duration-300 ${i === active ? 'w-6 h-2 bg-white' : 'w-2 h-2 bg-white/40'}`}
          />
        ))}
      </div>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}

function ProgressBar({ duration }: { duration: number }) {
  const [width, setWidth] = useState(0)
  useEffect(() => {
    const start = performance.now()
    let frame: number
    const tick = (now: number) => {
      const pct = Math.min(((now - start) / duration) * 100, 100)
      setWidth(pct)
      if (pct < 100) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [duration])
  return (
    <div className="h-[2px] bg-white/15">
      <div className="h-full bg-white transition-none" style={{ width: `${width}%` }} />
    </div>
  )
}
