import type { Metadata } from 'next'
import Link from 'next/link'
import SectionTracker from '@/components/ui/SectionTracker'
import ScrollReveal from '@/components/ui/ScrollReveal'
import {
  tiggo8Sections, tiggo8HeroStats, tiggo8RangeStats,
  tiggo8BatterySpecs, tiggo8ExteriorFeatures, tiggo8InteriorImages,
  tiggo8InteriorFeatures, tiggo8Specs,
} from '@/data/tiggo8'

export const metadata: Metadata = {
  title: 'Chery Tiggo 8 – 7-Seater PHEV D-SUV | Chery KP',
  description: '7 seats, 1200 km combined range, 15.6" screen, L2 Driver Assist. The Chery Tiggo 8 — inquire now.',
}

export default function Tiggo8Page() {
  return (
    <div className="bg-white">
      <SectionTracker sections={tiggo8Sections} />

      {/* HERO */}
      <section id="hero" className="relative bg-black overflow-hidden" style={{minHeight:'92vh'}}>
        <img src="/assets/tiggo8/newtigo8.webp" alt="Chery Tiggo 8"
          className="w-full h-full object-cover absolute inset-0" style={{objectPosition:'60% 50%'}} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
        <div className="relative z-10 flex gap-3 px-8 md:pl-20 md:pr-16 pt-6">
          <Link href="/test-drive"><button className="h-10 px-5 border border-white/60 rounded-full text-white text-sm hover:bg-white/10 transition">Test Drive</button></Link>
          <Link href="/book-my-chery"><button className="h-10 px-5 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-100 transition">Book Now</button></Link>
        </div>
        <div className="relative z-10 flex flex-col justify-end h-full pb-20 px-8 md:pl-20 md:pr-16" style={{minHeight:'85vh'}}>
          <p className="text-white/60 text-sm tracking-widest uppercase mb-2">7-Seater PHEV D-SUV</p>
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6 leading-tight"><strong className="font-bold">Chery</strong> Tiggo 8</h1>
          <div className="flex gap-8 md:gap-16 mb-10">
            {tiggo8HeroStats.map((s,i)=>(
              <div key={i} className={i>0?'border-l border-white/20 pl-8 md:pl-16':''}>
                <p className="text-white text-xl md:text-2xl font-light">{s.value}</p>
                <p className="text-white/50 text-xs mt-1 tracking-wider uppercase">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-3 w-fit">
            <Link href="/book-my-chery"><button className="w-44 h-12 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-100 transition">Book Now</button></Link>
            <Link href="/test-drive"><button className="w-44 h-12 border border-white text-white rounded-full text-sm hover:bg-white/10 transition">Test Drive</button></Link>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <svg width="20" height="20" fill="none" stroke="white" strokeWidth="1.5" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
      </section>

      {/* RANGE */}
      <section id="range" className="py-20 px-8 md:pl-20 md:pr-16 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal animation="fade-up">
            <span className="text-xs tracking-[0.2em] text-[#ADADAD] font-medium uppercase">Range</span>
            <h2 className="text-4xl md:text-6xl font-light mt-3 mb-6">Take Charge with<br />the <strong className="font-bold">Chery Tiggo 8</strong></h2>
            <p className="text-base md:text-lg font-light text-gray-600 max-w-2xl text-justify leading-relaxed mb-12">Pakistan&apos;s most capable 7-seater PHEV. Combining a spacious family SUV with next-generation plug-in hybrid technology for unstoppable range and performance.</p>
          </ScrollReveal>
          <div className="grid grid-cols-3 gap-6 text-center mb-12">
            {tiggo8RangeStats.map((s,i)=>(
              <ScrollReveal key={s.label} animation="fade-up" delay={i*80}>
                <div className="border border-gray-100 rounded-2xl py-8">
                  <p className="text-xl md:text-2xl font-light mb-2">{s.value}</p>
                  <p className="text-xs text-gray-500 tracking-widest uppercase">{s.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal animation="scale-up" delay={100}>
            <img src="/assets/tiggo8/finalscarsall-1536x563.webp" alt="Chery Tiggo 8 Range" className="w-full rounded-2xl object-cover h-[200px] md:h-[380px]" />
          </ScrollReveal>
        </div>
      </section>

      {/* SEATING */}
      <section id="battery" className="py-20 px-8 md:pl-20 md:pr-16 bg-[#181818]">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal animation="fade-right">
            <span className="text-xs tracking-[0.2em] text-[#ADADAD] font-medium uppercase">Seating</span>
            <h2 className="text-4xl md:text-5xl font-light mt-3 mb-6 text-white">7-Seat<br />Premium Layout</h2>
            <p className="text-base md:text-lg font-light text-white/70 text-justify leading-relaxed mb-8">Every journey becomes a shared experience. The Tiggo 8 offers a premium 7-seat configuration with flexible layouts, generous legroom across all three rows, and PHEV technology built for the long haul.</p>
            <div className="space-y-3">
              {tiggo8BatterySpecs.map(({key,value})=>(
                <div key={key} className="flex justify-between border-b border-white/10 pb-3">
                  <span className="text-sm text-white/50">{key}</span>
                  <span className="text-sm font-medium text-white">{value}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal animation="fade-left" delay={150}>
            <img src="/assets/tiggo8/7seater.webp" alt="Tiggo 8 7 Seater" className="rounded-2xl object-cover w-full h-[340px]" />
          </ScrollReveal>
        </div>
      </section>

      {/* EXTERIOR */}
      <section id="exterior" className="py-20 px-8 md:pl-20 md:pr-16 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal animation="fade-up">
            <span className="text-xs tracking-[0.2em] text-[#ADADAD] font-medium uppercase">Exterior</span>
            <h2 className="text-4xl md:text-5xl font-light mt-3 mb-10">Designed to Stand Out</h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {tiggo8ExteriorFeatures.map((f,i)=>(
              <ScrollReveal key={f.label} animation="fade-up" delay={i*50}>
                <div className="text-center group">
                  <div className="overflow-hidden rounded-2xl mb-3">
                    <img src={f.img} alt={f.label} className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <p className="text-sm font-medium text-gray-800">{f.label}</p>
                  <p className="text-xs text-gray-500 mt-1 font-light">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal animation="scale-up" delay={100}>
            <img src="/assets/tiggo8/Asset-2.webp" alt="Chery Tiggo 8 Exterior" className="w-full rounded-2xl object-cover h-[280px] md:h-[460px] mt-10" />
          </ScrollReveal>
        </div>
      </section>

      {/* INTERIOR */}
      <section id="interior" className="py-20 px-8 md:pl-20 md:pr-16 bg-[#F7F7F7]">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal animation="fade-right">
            <span className="text-xs tracking-[0.2em] text-[#ADADAD] font-medium uppercase">Interior</span>
            <h2 className="text-4xl md:text-5xl font-light mt-3 mb-6">Stylish and Modern</h2>
            <p className="text-base md:text-lg font-light text-gray-600 text-justify leading-relaxed mb-8">The Chery Tiggo 8 cabin is designed with modern sensibilities — a 15.6&quot; 2.5K screen, ambient lighting, and smart technology make every journey a pleasure.</p>
            <ul className="space-y-3">
              {tiggo8InteriorFeatures.map(f=>(
                <li key={f} className="flex items-center gap-3 text-sm text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-black flex-shrink-0" />{f}
                </li>
              ))}
            </ul>
          </ScrollReveal>
          <ScrollReveal animation="fade-left" delay={150}>
            <div className="grid grid-cols-2 gap-3">
              <img src={tiggo8InteriorImages[0].src} alt={tiggo8InteriorImages[0].alt} className="rounded-2xl object-cover h-44 w-full col-span-2" />
              <img src={tiggo8InteriorImages[1].src} alt={tiggo8InteriorImages[1].alt} className="rounded-2xl object-cover h-36 w-full" />
              <img src={tiggo8InteriorImages[2].src} alt={tiggo8InteriorImages[2].alt} className="rounded-2xl object-cover h-36 w-full" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SPECS */}
      <section id="specs" className="py-20 px-8 md:pl-20 md:pr-16 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal animation="fade-up">
            <span className="text-xs tracking-[0.2em] text-[#ADADAD] font-medium uppercase">Specifications</span>
            <h2 className="text-4xl font-light mt-3 mb-10">Technical Specs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-100 rounded-2xl overflow-hidden">
              {tiggo8Specs.map(([k,v])=>(
                <div key={k} className="bg-white flex justify-between items-center px-6 py-4">
                  <span className="text-sm text-gray-500">{k}</span>
                  <span className="text-sm font-medium text-right max-w-[55%]">{v}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-black py-16 text-center px-5">
        <ScrollReveal animation="fade-up">
          <h2 className="text-white text-3xl md:text-5xl font-light mb-3">Your City. Your Tiggo 8.</h2>
          <div className="flex justify-center gap-4 mt-8">
            <Link href="/book-my-chery"><button className="h-12 px-8 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-100 transition">Book Now</button></Link>
            <Link href="/test-drive"><button className="h-12 px-8 border border-white text-white rounded-full text-sm hover:bg-white/10 transition">Test Drive</button></Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}
