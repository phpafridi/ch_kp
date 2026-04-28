'use client'

import { useState } from 'react'
import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'

const tabs = [
  {
    label: 'Innovation',
    img: '/assets/tiggo8phev/tiggo8-index.png',
    text: 'Chery leads with fifth-generation hybrid technology — the Dedicated Hybrid Engine (DHE), Dedicated Hybrid Transmission (DHT), and Dedicated Hybrid Battery (DHB). Every Chery vehicle is engineered for smarter, more efficient performance.',
  },
  {
    label: 'Attainability',
    img: '/assets/tiggo8phev/hero.jpg',
    text: 'Chery makes premium ownership accessible. With competitive pricing, flexible bank financing, and a nationwide dealer network across Pakistan, your Chery is closer than you think.',
  },
  {
    label: 'Performance',
    img: '/assets/tiggo8phev/tiggo8-oil.png',
    text: 'From plug-in hybrid to full PHEV, Chery powertrains are engineered to do more with less. Intelligent energy management means lower running costs, longer range, and a drive that adapts to your life. Combined range of 1200 km.',
  },
  {
    label: 'Family',
    img: '/assets/tiggo9/tiggo9-index.png',
    text: 'At Chery, we believe a car should be more than a machine — it should be a space of connection. From the 7-seater Tiggo 8 to the spacious Tiggo 9, every Chery is crafted for family journeys.',
  },
]

export default function AboutSection() {
  const [active, setActive] = useState(0)
  const [displayed, setDisplayed] = useState(0)
  const [fading, setFading] = useState(false)

  const handleTab = (i: number) => {
    if (i === active || fading) return
    setFading(true)
    setTimeout(() => {
      setDisplayed(i)
      setActive(i)
      setFading(false)
    }, 320)
  }

  return (
    <div className="bg-[#F7F7F7]">
      <section className="mx-auto max-w-[1360px] py-8 md:py-16">
        <div className="px-4 md:px-8 lg:px-10">

          {/* Label + tab headers */}
          <ScrollReveal animation="fade-up" delay={0}>
          <span className="text-xs md:text-sm font-medium text-[#ADADAD] tracking-widest">ABOUT CHERY</span>

          {/* Tab buttons — 2×2 grid on mobile, single row on md+ */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-3 md:flex md:gap-14 mt-3 md:mt-4 mb-5 md:mb-8">
            {tabs.map((tab, i) => (
              <button
                key={tab.label}
                onClick={() => handleTab(i)}
                className={`tracking-tight font-light text-[1rem] md:text-[2rem] lg:text-[2.5rem] transition-colors duration-300 pb-1 text-left leading-tight ${
                  i === active
                    ? 'text-black border-b-2 border-black'
                    : 'text-[#ADADAD] hover:text-gray-500 border-b-2 border-transparent'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          </ScrollReveal>

          {/* Crossfade image */}
          <ScrollReveal animation="fade-up" delay={100}>
          <div
            className="relative overflow-hidden rounded-lg md:rounded-[10px] w-full"
            style={{ height: 'clamp(180px, 42vw, 560px)' }}
          >
            {tabs.map((tab, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={tab.label}
                src={tab.img}
                alt={tab.label}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out"
                style={{
                  opacity: i === displayed && !fading ? 1 : 0,
                  zIndex: i === displayed ? 2 : 1,
                }}
              />
            ))}
          </div>
          </ScrollReveal>

          {/* Text + CTA */}
          <ScrollReveal animation="fade-up" delay={0}>
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 md:gap-6 mt-5 md:mt-8">
            <div className="max-w-2xl" style={{ minHeight: 60 }}>
              <p
                key={displayed}
                className="text-sm md:text-xl font-light text-gray-700 text-justify leading-relaxed"
                style={{ animation: 'fadeUp 0.4s ease forwards' }}
              >
                {tabs[displayed].text}
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link href="/about">
                <button className="relative overflow-hidden h-10 md:h-12 px-6 md:px-8 border border-black rounded-[58px] bg-white text-black hover:text-white cursor-pointer group whitespace-nowrap">
                  <span className="text-sm md:text-base font-light relative z-10">Discover More</span>
                  <span className="absolute inset-0 bg-black rounded-[58px] scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100" />
                </button>
              </Link>
            </div>
          </div>
          </ScrollReveal>

          {/* 5-year warranty banner */}
          <ScrollReveal animation="fade-up" delay={100}>
          <div className="mt-6 md:mt-8 rounded-xl md:rounded-2xl overflow-hidden relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/five-year-celeb-page/5-yr-blue-bg.webp"
              alt="5 Year Warranty"
              className="w-full h-[80px] md:h-[130px] object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <div className="text-center text-white">
                <p className="text-xl md:text-4xl font-light">Established 1997</p>
                <p className="text-xs md:text-base text-white/80 mt-0.5 md:mt-1">
                  China's No.1 Automobile Exporter — Global Reach
                </p>
              </div>
            </div>
          </div>
          </ScrollReveal>

        </div>
      </section>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}
