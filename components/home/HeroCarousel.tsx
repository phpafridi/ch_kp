'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

const INTERVAL = 6000

const slides = [
  {
    src: '/assets/phev/phev-updated.webp',
    href: '/model/phev',
    label: 'MG HS PHEV',
    title: 'MG HS PHEV',
    subtitle: 'True Hybrid Electric',
    stats: [
      { value: '7.1 seconds', label: '0-100 KM/H' },
      { value: 'MG Pilot', label: 'Driver Assistance' },
      { value: '+50 KM', label: 'True Electric Range' },
    ],
  },
  {
    src: '/assets/MG_cyberster_Desk_HeroHeader.webp',
    href: '/model/cyberster',
    label: 'MG Cyberster',
    title: 'MG Cyberster',
    subtitle: '100% Electric Roadster',
    stats: [
      { value: '375 kW', label: 'Max Power' },
      { value: '3.2 Sec', label: '0-100 km/h' },
      { value: '507 KM', label: 'Electric Range' },
    ],
  },
  {
    src: '/assets/Find-your-dealer-Banner2.webp',
    href: '/model/mgu9',
    label: 'MG U9',
    title: 'MG U9',
    subtitle: 'True Luxury Off-Roader',
    stats: [
      { value: '2.5L', label: 'Turbo Diesel' },
      { value: '4×4', label: 'Intelligent System' },
      { value: '1,600L', label: 'Smart Hatch Space' },
    ],
  },
  {
    src: '/assets/mg-binguo/banner/CtymTX.webp',
    href: '/model/binguo',
    label: 'Binguo EV',
    title: 'Binguo EV',
    subtitle: 'Designed to Stand Out',
    stats: [
      { value: '333 KM', label: 'CLTC Range' },
      { value: '31.9 kWh', label: 'MAGIC Battery' },
      { value: 'CCS2', label: 'Fast Charging' },
    ],
  },
  {
    src: '/assets/MG_LP_Desk_HeroHeader_768_br.webp',
    href: '/mg-partnerships',
    label: 'Financing',
    title: 'Flexible Financing',
    subtitle: 'Bank Partnerships',
    stats: [
      { value: '9', label: 'Partner Banks' },
      { value: 'Islamic', label: '& Conventional' },
      { value: '7 Year', label: 'Max Tenure' },
    ],
  },
  {
    src: '/assets/Find-your-dealer-Banner2.webp',
    href: '/mg-exchange',
    label: 'MG Exchange',
    title: 'MG Exchange',
    subtitle: 'Trade In. Upgrade.',
    stats: [
      { value: 'Fair', label: 'Market Value' },
      { value: 'Zero', label: 'Hassle Process' },
      { value: '6-Month', label: 'Used Car Warranty' },
    ],
  },
]

export default function HeroCarousel() {
  const [active, setActive] = useState(0)
  const [prev, setPrev] = useState<number | null>(null)
  const [direction, setDirection] = useState<'next' | 'prev'>('next')
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const goTo = (idx: number, dir: 'next' | 'prev' = 'next') => {
    if (idx === active) return
    setPrev(active)
    setDirection(dir)
    setActive(idx)
  }

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setActive(a => {
        setPrev(a)
        setDirection('next')
        return (a + 1) % slides.length
      })
    }, INTERVAL)
  }

  useEffect(() => {
    startTimer()
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleNav = (idx: number, dir: 'next' | 'prev') => {
    goTo(idx, dir)
    startTimer()
  }

  const slide = slides[active]

  return (
    <section className="relative w-full overflow-hidden bg-black" style={{ height: 'calc(100vh - 72px)', minHeight: 500, maxHeight: 900 }}>

      {/* Slide images with crossfade */}
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
            style={{ objectPosition: '50% 50%' }}
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
      ))}

      {/* Left section tracker - matches original exactly */}
      <div className="absolute left-5 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3 hidden md:flex">
        {slides.map((s, i) => (
          <button
            key={i}
            onClick={() => handleNav(i, i > active ? 'next' : 'prev')}
            className="group flex items-center gap-2"
          >
            <div
              className={`transition-all duration-300 rounded-full ${
                i === active
                  ? 'w-[3px] h-8 bg-white'
                  : 'w-[2px] h-4 bg-white/30 group-hover:bg-white/60'
              }`}
            />
            <span className={`text-xs font-light transition-all duration-300 whitespace-nowrap ${
              i === active ? 'text-white opacity-100 translate-x-0' : 'text-white/40 opacity-0 -translate-x-2 group-hover:opacity-60 group-hover:translate-x-0'
            }`}>
              {s.label}
            </span>
          </button>
        ))}
      </div>

      {/* Main content - left aligned like original */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end pb-16 md:pb-20 px-5 md:px-20">

        {/* Title block with slide animation */}
        <div className="mb-6" key={active}>
          <p
            className="text-white/60 text-sm font-light tracking-[0.2em] uppercase mb-3"
            style={{ animation: 'slideUp 0.5s ease forwards' }}
          >
            {slide.subtitle}
          </p>
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-light text-white leading-tight"
            style={{ animation: 'slideUp 0.5s ease 0.1s both' }}
          >
            {slide.title.split(' ').map((word, i) => (
              <span key={i}>
                {i === 0 ? <strong className="font-bold">{word}</strong> : ` ${word}`}
              </span>
            ))}
          </h1>
        </div>

        {/* Stats row - matches original */}
        <div
          className="flex gap-8 md:gap-12 mb-8"
          key={`stats-${active}`}
          style={{ animation: 'slideUp 0.5s ease 0.2s both' }}
        >
          {slide.stats.map((stat, i) => (
            <div key={i} className={i > 0 ? 'border-l border-white/20 pl-8 md:pl-12' : ''}>
              <p className="text-white text-lg md:text-2xl font-light">{stat.value}</p>
              <p className="text-white/50 text-xs mt-1 tracking-wider uppercase">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* CTA buttons - matches original layout */}
        <div
          className="flex flex-col gap-3 w-fit"
          key={`cta-${active}`}
          style={{ animation: 'slideUp 0.5s ease 0.3s both' }}
        >
          <Link href="/book-my-mg">
            <button className="w-48 h-12 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
              Book Now
            </button>
          </Link>
          <Link href="/test-drive">
            <button className="w-48 h-12 border border-white text-white rounded-full text-sm font-light hover:bg-white/10 transition-colors">
              Test Drive
            </button>
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 opacity-60">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>

      {/* Bottom thumbnail strip - like original */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        {/* Progress bar for active slide */}
        <ProgressBar key={active} duration={INTERVAL} />

        <div className="bg-black/40 backdrop-blur-sm px-5 md:px-20 py-3 hidden md:flex items-center gap-1">
          {slides.map((s, i) => (
            <button
              key={i}
              onClick={() => handleNav(i, i > active ? 'next' : 'prev')}
              className={`relative flex-1 overflow-hidden rounded transition-all duration-300 ${
                i === active ? 'opacity-100' : 'opacity-40 hover:opacity-65'
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.src} alt={s.label} className="w-full h-[52px] object-cover" />
              <div className={`absolute inset-0 transition-colors duration-200 ${i === active ? 'ring-2 ring-white ring-inset' : ''}`} />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-2 py-1">
                <p className="text-white text-[10px] font-light truncate">{s.label}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Arrow buttons */}
      <button
        onClick={() => handleNav((active - 1 + slides.length) % slides.length, 'prev')}
        className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-white/30 bg-black/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/20 transition hidden md:flex"
        aria-label="Previous"
      >
        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="10 15 5 9 10 3"/></svg>
      </button>
      <button
        onClick={() => handleNav((active + 1) % slides.length, 'next')}
        className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-white/30 bg-black/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/20 transition hidden md:flex"
        aria-label="Next"
      >
        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 3 11 9 6 15"/></svg>
      </button>

      {/* Mobile dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2 md:hidden">
        {slides.map((_, i) => (
          <button key={i} onClick={() => handleNav(i, i > active ? 'next' : 'prev')}
            className={`rounded-full transition-all duration-300 ${i === active ? 'w-6 h-2 bg-white' : 'w-2 h-2 bg-white/40'}`}
          />
        ))}
      </div>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
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
    <div className="h-[2px] bg-white/10">
      <div className="h-full bg-white transition-none" style={{ width: `${width}%` }} />
    </div>
  )
}
