'use client'

import { useState } from 'react'
import Link from 'next/link'

const timelineEvents = [
  {
    year: '2025',
    events: [
      { text: 'Kantar BrandZ 1st in Automobile Category 3 Consecutive Years', img: '/assets/about/slider-img.jpg' },
      { text: 'Chery Group enters Fortune Global 500, Ranking No. 233', img: '/assets/about/slider-img-2.jpg' },
    ],
  },
  {
    year: '2024',
    events: [
      { text: 'TIGGO 8 receives Five-Star ANCAP Safety Rating', img: '/assets/about/2024_02.jpg' },
      { text: 'Chery International Business Conference — Co-creating a New Blueprint for the Automotive Industry', img: '/assets/about/2024_03.jpg' },
      { text: 'Chery sets Guinness World Record in Saudi Arabia with 250-owner Tiggo 7 Pro Max parade', img: '/assets/about/2024_04.jpg' },
      { text: 'Chery receives third consecutive Gold Award in NADA Dealer Satisfaction Index (South Africa)', img: '/assets/about/2024_05.jpg' },
      { text: 'Chery wins "Best Sellable Brand" & "Most Interactive Booth" at Malaysia Auto Show', img: '/assets/about/2024_06.jpg' },
      { text: 'Tiggo 8 Pro wins "Best Medium SUV" at Indonesia International Motor Show (IIMS)', img: '/assets/about/2024_07.jpg' },
      { text: 'Chery earns "Best-Selling Car Brand in Egypt 2023"', img: '/assets/about/2024_08.jpg' },
      { text: 'Tiggo 7 wins "2024 Best Value Mid-Size SUV" by Auto Esporte (Brazil)', img: '/assets/about/2024_09.jpg' },
      { text: 'Chery Group enters Fortune Global 500, Ranking No. 385', img: '/assets/about/2024_10.jpg' },
      { text: 'Millionth Export of Chery TIGGO 7 — milestone in global expansion', img: '/assets/about/2024_11.jpg' },
    ],
  },
  {
    year: '2023',
    events: [
      { text: 'Ranked Best in Automotive Category — Kantar BrandZ Chinese Global Brand Builders Top 50', img: '/assets/about/2023_01.jpg' },
      { text: 'Chery led aid efforts for Earthquake Relief in Türkiye', img: '/assets/about/2023_02.jpg' },
      { text: 'Chery officially launched the Green Public Welfare Fund Program', img: '/assets/about/2023_03.jpg' },
      { text: 'Third-generation PHEV Technology showcased at the Shanghai Auto Show', img: '/assets/about/2023_04.jpg' },
      { text: 'Dealers worldwide participated in test drives of Tiggo PHEV products', img: '/assets/about/2023_05.jpg' },
      { text: '"Tech Chery" garnered praise from global media', img: '/assets/about/2023_06.jpg' },
      { text: 'Chery hosted its Global Dealer Conference', img: '/assets/about/2023_07.jpg' },
      { text: 'Chery became Presidential Vehicle Partner to the BRICS Summit', img: '/assets/about/2023_08.jpg' },
      { text: 'Ranked First among Chinese domestic brands in J.D. Power 2023 China IQS', img: '/assets/about/2023_09.jpg' },
      { text: 'Tiggo 4 ranked first in compact SUVs in market segments', img: '/assets/about/2023_10.jpg' },
      { text: 'First Chery International User Summit held', img: '/assets/about/2023_11.jpg' },
      { text: 'Chery unveiled Qpower Brand at Geneva International Motor Show', img: '/assets/about/2023_12.jpg' },
      { text: 'Chery partnered with UNICEF and IUCN for charitable cycling event', img: '/assets/about/2023_13.jpg' },
      { text: 'Chery Tech Day successfully held', img: '/assets/about/2023_14.jpg' },
      { text: 'Tiggo 8 series — Champion of CACSI 2023', img: '/assets/about/2023_15.jpg' },
      { text: 'Tiggo 7 Pro earned Five-Star Safety Rating in 2023 ANCAP', img: '/assets/about/2023_16.jpg' },
      { text: 'Tiggo 7 Series and Tiggo 8 Series swept the APEAL Awards', img: '/assets/about/2023_17.jpg' },
    ],
  },
  {
    year: '2022',
    events: [
      { text: 'Chery launched TIGGO 8 PRO, TIGGO 7 PRO and OMODA 5 in Israel', img: '/assets/about/2022_01.jpg' },
      { text: 'Chery held media appreciation meeting in Uzbekistan', img: '/assets/about/2022_02.jpg' },
      { text: 'Chery officially listed in Uzbekistan and began sales', img: '/assets/about/2022_03.jpg' },
      { text: 'Launch Conference of TIGGO 8 PRO in Almaty, Kazakhstan', img: '/assets/about/2022_04.jpg' },
      { text: 'CAOA Chery wins best after-sales service award by UOL — 130,000+ consumers voting', img: '/assets/about/2022_05.jpg' },
      { text: 'TIGGO 8 PHEV wins "Best Engine under 2.0L" — Auto Esporte', img: '/assets/about/2022_06.jpg' },
      { text: 'Chery donated a TIGGO 8 PRO to ERZI association for the disabled in Kazakhstan', img: '/assets/about/2022_07.jpg' },
      { text: 'Chery signed contract with Grupo-Q covering 5 countries in Central America', img: '/assets/about/2022_08.jpg' },
    ],
  },
  {
    year: '2021',
    events: [
      { text: 'Chery 2.0T GDI engine wins title of "China Heart of 2021"', img: '/assets/about/2021_01.jpg' },
    ],
  },
  {
    year: '2020',
    events: [
      { text: 'Tiggo 8 wins three Best SUV of the Year awards in Brazil', img: '/assets/about/2020_01.jpg' },
      { text: 'Chery wins Golden Prize at ICQCC for 5 consecutive years', img: '/assets/about/2020_02.jpg' },
    ],
  },
  {
    year: '2017',
    events: [
      { text: 'Chery design wins international award in Tokyo', img: '/assets/about/2017.jpg' },
    ],
  },
  {
    year: '2015',
    events: [
      { text: "Chery's 5,000,000th unit rolls off the line in Wuhu", img: '/assets/about/2015_01.jpg' },
      { text: 'Chery Automobile wins Golden Prize at 2015 Effie Awards', img: '/assets/about/2015_02.jpg' },
    ],
  },
  {
    year: '2014',
    events: [
      { text: 'Chery factory inaugurated in Jacareí, São Paulo, Brazil', img: '/assets/about/2014.jpg' },
    ],
  },
  {
    year: '2007',
    events: [
      { text: '1,000,000th Chery car rolls off the production line', img: '/assets/about/2007_01.jpg' },
    ],
  },
  {
    year: '2001',
    events: [
      { text: 'First batch of 10 Chery cars exported through Tianjin Port', img: '/assets/about/2001.jpg' },
    ],
  },
  {
    year: '1997',
    events: [
      { text: 'Chery Automobile Company established in March 1997', img: '/assets/about/1997.jpg' },
    ],
  },
]

const stats = [
  { value: '120+', label: 'Countries' },
  { value: '17M+', label: 'Car Owners Worldwide' },
  { value: '22', label: 'Years as China\'s No.1 Exporter' },
  { value: '5★', label: 'ANCAP Safety Rating' },
]

export default function AboutPage() {
  const [activeYear, setActiveYear] = useState('2025')
  const [activeEvent, setActiveEvent] = useState(0)

  const activeTimeline = timelineEvents.find(e => e.year === activeYear)!

  const handleYearChange = (year: string) => {
    setActiveYear(year)
    setActiveEvent(0)
  }

  return (
    <div className="bg-white">

      {/* ── HERO ── */}
      <section className="relative h-[420px] md:h-[580px] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/about/About-Us-Banner-1.jpg" alt="About Chery KP" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent flex items-end pb-16 px-6 md:px-16">
          <div>
            <span className="text-xs tracking-[0.25em] font-semibold text-gray-300 uppercase mb-3 block">Our Story</span>
            <h1 className="text-5xl md:text-7xl font-light text-white leading-tight">About<br/>Chery KP</h1>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-[#111] text-white">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map(s => (
            <div key={s.label}>
              <p className="text-4xl md:text-5xl font-light mb-1">{s.value}</p>
              <p className="text-xs tracking-widest text-gray-400 uppercase">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT CHERY ── */}
      <section className="py-20 px-5 md:px-10">
        <div className="max-w-[1360px] mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs tracking-[0.2em] font-semibold text-gray-400 uppercase mb-4 block">About Chery</span>
            <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight">China's No.1 Passenger<br/>Vehicle Exporter</h2>
            <div className="space-y-5 text-gray-600 font-light leading-relaxed text-[15px]">
              <p>With a presence in over 120 countries and the trust of more than 17 million car owners worldwide, Chery stands as China's No.1 passenger vehicle exporter for 22 consecutive years. Recognized as one of the fastest-growing automakers globally, Chery continues to set new benchmarks in innovation, quality, and safety, with its vehicles achieving the prestigious ANCAP 5-Star Rating.</p>
              <p>In 2025, Chery secured the top position in the J.D. Power China Initial Quality Study, leading in both sedan and SUV categories. The brand also climbed 152 places on the 2025 Fortune Global 500, reaching No. 233, further solidifying its global leadership.</p>
              <p>From the success of the Tiggo series to its strong foothold in key markets like the UAE, Saudi Arabia, Australia, and Malaysia, Chery's global legacy reflects a commitment to excellence and driving trust across generations.</p>
            </div>
          </div>
          <div className="relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/about/slider-img-2.jpg" alt="Chery Global" className="w-full rounded-2xl object-cover h-[420px]" />
            <div className="absolute -bottom-5 -left-5 bg-black text-white rounded-xl px-6 py-4 shadow-xl hidden md:block">
              <p className="text-3xl font-light">22</p>
              <p className="text-xs tracking-widest text-gray-400 uppercase">Consecutive Years #1</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT MAE ── */}
      <section className="bg-[#F7F7F7] py-20 px-5 md:px-10">
        <div className="max-w-[1360px] mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/about/slider-img.jpg" alt="MAE Distribution Agreement Signing" className="w-full rounded-2xl object-cover h-[420px]" />
            <div className="absolute -bottom-5 -right-5 bg-white rounded-xl px-6 py-4 shadow-xl border border-gray-100 hidden md:block">
              <p className="text-3xl font-light">60+</p>
              <p className="text-xs tracking-widest text-gray-500 uppercase">Years of Excellence</p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <span className="text-xs tracking-[0.2em] font-semibold text-gray-400 uppercase mb-4 block">About MAE</span>
            <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight">Master Automotive<br/>Engineering</h2>
            <div className="space-y-5 text-gray-600 font-light leading-relaxed text-[15px]">
              <p>Master Automotive Engineering (MAE) is part of Master Group of Industries, one of Pakistan's largest and most trusted conglomerates with over 60 years of excellence across diverse sectors. With a 40-year legacy in the automotive industry, Master Group has consistently driven progress through precision, quality, and innovation.</p>
              <p>Built on this foundation of experience and trust, MAE stands at the forefront of Pakistan's automotive evolution, introducing Chery — one of the world's fastest-growing automakers — to redefine mobility for a new generation.</p>
              <p>With a clear mission to bring New Energy Vehicles (NEVs) and sustainable technology to Pakistan, MAE is committed to advancing the nation's automotive landscape by blending global innovation with local expertise.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAE LOGOS ── */}
      <section className="py-16 px-5 md:px-10 border-b border-gray-100">
        <div className="max-w-[1360px] mx-auto text-center">
          <span className="text-xs tracking-[0.2em] font-semibold text-gray-400 uppercase mb-8 block">Master Group Legacy</span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/about/MAE-all-logos.png" alt="Master Group Companies" className="mx-auto max-w-full" />
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section className="py-20 px-5 md:px-10">
        <div className="max-w-[1360px] mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-[#111] text-white rounded-2xl p-10 md:p-14 flex flex-col justify-between min-h-[280px]">
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-8">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
              </svg>
            </div>
            <div>
              <p className="text-xs tracking-[0.2em] font-semibold text-gray-400 uppercase mb-3">Mission</p>
              <p className="text-2xl md:text-3xl font-light leading-relaxed">To bring the world's latest automotive technology to Pakistani consumers while prioritizing safety, quality, and customer experience.</p>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-10 md:p-14 flex flex-col justify-between min-h-[280px]">
            <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center mb-8">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
              </svg>
            </div>
            <div>
              <p className="text-xs tracking-[0.2em] font-semibold text-gray-400 uppercase mb-3">Vision</p>
              <p className="text-2xl md:text-3xl font-light leading-relaxed text-gray-800">To be Pakistan's No.1 SUV brand and amongst the Top 3 OEMs in the next 3 years.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="bg-[#111] text-white py-20 px-5 md:px-10">
        <div className="max-w-[1360px] mx-auto">
          <span className="text-xs tracking-[0.2em] font-semibold text-gray-400 uppercase mb-4 block">Milestones</span>
          <h2 className="text-4xl md:text-5xl font-light mb-12">Chery Global Timeline</h2>

          {/* Year tabs */}
          <div className="flex gap-0 overflow-x-auto pb-2 mb-10 border-b border-white/10 scrollbar-none">
            {timelineEvents.map(e => (
              <button
                key={e.year}
                onClick={() => handleYearChange(e.year)}
                className={`flex-shrink-0 px-4 py-3 text-sm font-medium transition-all duration-200 border-b-2 -mb-[2px] ${
                  activeYear === e.year ? 'border-white text-white' : 'border-transparent text-gray-500 hover:text-gray-300'
                }`}
              >
                {e.year}
              </button>
            ))}
          </div>

          {/* Split layout: image left, events list right */}
          <div className="grid md:grid-cols-2 gap-8 items-start">

            {/* Active event image */}
            <div className="relative rounded-2xl overflow-hidden h-[300px] md:h-[420px] bg-gray-800 flex-shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                key={`${activeYear}-${activeEvent}`}
                src={activeTimeline.events[activeEvent]?.img}
                alt={activeTimeline.events[activeEvent]?.text}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-4xl font-light text-white/30 mb-1">{activeYear}</p>
                <p className="text-white text-sm font-light leading-snug">{activeTimeline.events[activeEvent]?.text}</p>
              </div>
            </div>

            {/* Events list */}
            <div className="flex flex-col gap-2 max-h-[420px] overflow-y-auto pr-1 scrollbar-none">
              {activeTimeline.events.map((ev, i) => (
                <button
                  key={i}
                  onClick={() => setActiveEvent(i)}
                  className={`flex gap-4 items-start text-left px-5 py-4 rounded-xl border transition-all duration-200 ${
                    activeEvent === i
                      ? 'bg-white/10 border-white/20 text-white'
                      : 'border-white/5 text-gray-400 hover:text-gray-200 hover:bg-white/5'
                  }`}
                >
                  <span className="text-xl font-light text-gray-600 flex-shrink-0 mt-0.5">{String(i + 1).padStart(2, '0')}</span>
                  <p className="text-sm font-light leading-relaxed">{ev.text}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-5 md:px-10 text-center">
        <span className="text-xs tracking-[0.2em] font-semibold text-gray-400 uppercase mb-4 block">Drive the Future</span>
        <h2 className="text-4xl md:text-5xl font-light mb-8">Experience Chery for Yourself</h2>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/test-drive">
            <button className="h-12 px-8 bg-black text-white rounded-[58px] hover:bg-gray-800 transition text-sm font-medium">
              Book a Test Drive
            </button>
          </Link>
          <Link href="/contact">
            <button className="h-12 px-8 border border-gray-300 text-gray-800 rounded-[58px] hover:border-black transition text-sm font-medium">
              Contact Us
            </button>
          </Link>
        </div>
      </section>

    </div>
  )
}
