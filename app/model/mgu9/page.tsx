import type { Metadata } from 'next'
import Link from 'next/link'
import SectionTracker from '@/components/ui/SectionTracker'
import ScrollReveal from '@/components/ui/ScrollReveal'
import {
  mgu9Sections, mgu9HeroStats, mgu9CapabilityFeatures,
  mgu9HatchStats, mgu9SafetyFeatures, mgu9ComfortFeatures, mgu9Specs,
} from '@/data/mgu9'

export const metadata: Metadata = {
  title: 'MG U9 – True Luxury Off-Roader | MG Motors Pakistan',
  description: '2.5L Turbo Diesel, Intelligent 4×4, Smart Hatch. MG U9 — starting from PKR 22,749,000.',
}

export default function MGU9Page() {
  return (
    <div className="bg-white">
      <SectionTracker sections={mgu9Sections} />

      {/* HERO */}
      <section id="hero" className="relative bg-black overflow-hidden" style={{minHeight:'92vh'}}>
        <img src="/assets/Find-your-dealer-Banner2.webp" alt="MG U9"
          className="w-full h-full object-cover absolute inset-0 opacity-80" style={{objectPosition:'50% 40%'}} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="relative z-10 flex gap-3 px-8 md:pl-20 md:pr-16 pt-6">
          <a href="/assets/mg-u9/u9-flyer.pdf" target="_blank" rel="noopener noreferrer">
            <button className="h-10 px-5 border border-white/60 rounded-full text-white text-sm hover:bg-white/10 transition">Owner&apos;s Manual</button>
          </a>
          <Link href="/book-my-mg"><button className="h-10 px-5 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-100 transition">Book Now</button></Link>
        </div>
        <div className="relative z-10 flex flex-col justify-end h-full pb-20 px-8 md:pl-20 md:pr-16" style={{minHeight:'85vh'}}>
          <p className="text-white/60 text-sm tracking-widest uppercase mb-2">True Luxury Off-Roader</p>
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6 leading-tight"><strong className="font-bold">MG</strong> U9</h1>
          <div className="flex gap-8 md:gap-16 mb-10">
            {mgu9HeroStats.map((s,i)=>(
              <div key={i} className={i>0?'border-l border-white/20 pl-8 md:pl-16':''}>
                <p className="text-white text-xl md:text-2xl font-light">{s.value}</p>
                <p className="text-white/50 text-xs mt-1 tracking-wider uppercase">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-3 w-fit">
            <Link href="/book-my-mg"><button className="w-44 h-12 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-100 transition">Book Now</button></Link>
            <Link href="/test-drive"><button className="w-44 h-12 border border-white text-white rounded-full text-sm hover:bg-white/10 transition">Test Drive</button></Link>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <svg width="20" height="20" fill="none" stroke="white" strokeWidth="1.5" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
      </section>

      {/* CAPABILITY */}
      <section id="capability" className="py-20 px-8 md:pl-20 md:pr-16 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal animation="fade-up">
            <span className="text-xs tracking-[0.2em] text-[#ADADAD] font-medium uppercase">Capability</span>
            <h2 className="text-4xl md:text-6xl font-light mt-3 mb-6"><strong className="font-bold">Made</strong> for Every Journey</h2>
            <p className="text-base md:text-lg font-light text-gray-600 max-w-2xl text-justify leading-relaxed mb-12">Whether you&apos;re hauling, exploring or commuting, the MG U9&apos;s 2.5-litre turbo-diesel engine and Intelligent 4×4 System ensures steady power and confidence on all kinds of Pakistani terrain.</p>
          </ScrollReveal>
          <ScrollReveal animation="scale-up" delay={100}>
            <img src="/assets/Find-your-dealer-Banner2.webp" alt="MG U9 Capability" className="w-full rounded-2xl object-cover h-[320px] md:h-[520px] mb-12" />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mgu9CapabilityFeatures.map((item,i)=>(
              <ScrollReveal key={item.title} animation="fade-up" delay={i*100}>
                <div className="bg-[#F7F7F7] rounded-2xl overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-44 object-cover" />
                  <div className="p-5">
                    <h3 className="text-base font-medium mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-500 font-light">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SMART HATCH */}
      <section id="smart-hatch" className="py-20 px-8 md:pl-20 md:pr-16 bg-[#181818]">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal animation="fade-up">
            <span className="text-xs tracking-[0.2em] text-[#ADADAD] font-medium uppercase">Smart Hatch</span>
            <h2 className="text-4xl md:text-6xl font-light mt-3 mb-6 text-white">Unlock <strong className="font-bold">1,600L</strong> of Space</h2>
            <p className="text-base md:text-lg font-light text-white/70 max-w-2xl text-justify leading-relaxed mb-12">Unlock up to 1,600L of space and carry cargo up to 2.4m long with the Smart Hatch Midgate — seamlessly connecting the cabin to the tub to create one continuous space for oversized gear.</p>
          </ScrollReveal>
          <ScrollReveal animation="scale-up" delay={100}>
            <img src="/assets/mg-u9/smart-hatch/inpage-hatch.jpg" alt="Smart Hatch"
              className="w-full rounded-2xl object-cover h-[280px] md:h-[480px]"
              />
          </ScrollReveal>
          <div className="grid grid-cols-3 gap-6 mt-10 text-center">
            {mgu9HatchStats.map((s,i)=>(
              <ScrollReveal key={s.label} animation="fade-up" delay={i*100}>
                <div className="border border-white/10 rounded-xl py-6">
                  <p className="text-2xl md:text-3xl font-light text-white">{s.value}</p>
                  <p className="text-xs text-white/40 mt-2 tracking-widest uppercase">{s.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SAFETY */}
      <section id="safety" className="py-20 px-8 md:pl-20 md:pr-16 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal animation="fade-up">
            <span className="text-xs tracking-[0.2em] text-[#ADADAD] font-medium uppercase">Safety</span>
            <h2 className="text-4xl md:text-5xl font-light mt-3 mb-6">Built Around Protection</h2>
            <p className="text-base md:text-lg font-light text-gray-600 max-w-2xl text-justify leading-relaxed mb-10">The MG U9 features advanced MG Pilot safety systems, multiple airbags, and a robust body structure engineered to protect in every scenario.</p>
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {mgu9SafetyFeatures.map((f,i)=>(
              <ScrollReveal key={f.code} animation="fade-up" delay={i*80}>
                <div className="bg-[#F7F7F7] rounded-2xl p-4 text-center hover:shadow-md transition-shadow">
                  <img src={f.img} alt={f.name} className="w-full h-20 object-contain mb-3" />
                  <p className="text-xs font-bold tracking-widest">{f.code}</p>
                  <p className="text-[11px] text-gray-500 mt-1 leading-tight">{f.name}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* COMFORT */}
      <section id="comfort" className="py-20 px-8 md:pl-20 md:pr-16 bg-[#F7F7F7]">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal animation="fade-right">
            <span className="text-xs tracking-[0.2em] text-[#ADADAD] font-medium uppercase">Comfort</span>
            <h2 className="text-4xl md:text-5xl font-light mt-3 mb-6">Comfort Meets Connectivity</h2>
            <p className="text-base md:text-lg font-light text-gray-600 text-justify leading-relaxed mb-8">Crafted for a connected driving experience, the MG U9 cabin combines comfort with advanced technology at every touchpoint.</p>
            <ul className="space-y-3">
              {mgu9ComfortFeatures.map(f=>(
                <li key={f} className="flex items-center gap-3 text-sm text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-black flex-shrink-0" />{f}
                </li>
              ))}
            </ul>
          </ScrollReveal>
          <ScrollReveal animation="fade-left" delay={150}>
            <div className="grid grid-cols-2 gap-3">
              <img src="/assets/Interior1.png" alt="Interior" className="rounded-2xl object-cover h-44 w-full col-span-2" />
              <img src="/assets/Interior2.png" alt="Interior 2" className="rounded-2xl object-cover h-36 w-full" />
              <img src="/assets/Interior3.png" alt="Interior 3" className="rounded-2xl object-cover h-36 w-full" />
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
              {mgu9Specs.map(([k,v])=>(
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
          <h2 className="text-white text-3xl md:text-5xl font-light mb-3">Built for Pakistan. Ready for Anything.</h2>
          <div className="flex justify-center gap-4 mt-8">
            <Link href="/book-my-mg"><button className="h-12 px-8 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-100 transition">Book Now</button></Link>
            <Link href="/test-drive"><button className="h-12 px-8 border border-white text-white rounded-full text-sm hover:bg-white/10 transition">Test Drive</button></Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}
