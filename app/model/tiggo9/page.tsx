import type { Metadata } from 'next'
import Link from 'next/link'
import SectionTracker from '@/components/ui/SectionTracker'
import ScrollReveal from '@/components/ui/ScrollReveal'
import {
  tiggo9Sections, tiggo9HeroStats, tiggo9DesignImages,
  tiggo9DesignQuote, tiggo9PerfStats, tiggo9InteriorFeatures,
  tiggo9ElectricSpecs, tiggo9Specs,
} from '@/data/tiggo9'

export const metadata: Metadata = {
  title: 'Chery Tiggo 9 PHEV – 100% Electric Roadster | Chery KP',
  description: '375kW, 0-100 in 3.2 seconds, 507km range. The Chery Tiggo 9 PHEV — an all-electric British roadster.',
}

export default function CybersterPage() {
  return (
    <div className="bg-black">
      <SectionTracker sections={tiggo9Sections} />

      {/* HERO */}
      <section id="hero" className="relative overflow-hidden" style={{minHeight:'92vh'}}>
        <img src="/assets/MG_tiggo9_Desk_HeroHeader.webp" alt="Chery Tiggo 9 PHEV"
          className="w-full h-full object-cover absolute inset-0 opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        <div className="relative z-10 flex gap-3 px-8 md:pl-20 md:pr-16 pt-6">
          <Link href="/pre-qualify"><button className="h-10 px-5 border border-white/60 rounded-full text-white text-sm hover:bg-white/10 transition">Pre-Qualify</button></Link>
          <Link href="/book-my-chery"><button className="h-10 px-5 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-100 transition">Book Now</button></Link>
        </div>
        <div className="relative z-10 flex flex-col justify-end h-full pb-20 px-8 md:pl-20 md:pr-16" style={{minHeight:'85vh'}}>
          <p className="text-white/60 text-sm tracking-widest uppercase mb-2">100% Electric Roadster</p>
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6 leading-tight"><strong className="font-bold">Chery</strong> Cyberster</h1>
          <div className="flex gap-8 md:gap-16 mb-10">
            {tiggo9HeroStats.map((s,i)=>(
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

      {/* DESIGN */}
      <section id="design" className="py-20 px-8 md:pl-20 md:pr-16 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal animation="fade-up">
            <span className="text-xs tracking-[0.2em] text-[#ADADAD] font-medium uppercase">Design</span>
            <h2 className="text-4xl md:text-6xl font-light mt-3 mb-6">Unmistakable Style<br />and Presence</h2>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={100}>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <p className="text-base md:text-lg font-light text-gray-600 text-justify leading-relaxed">
                Blending Chery's fifth-generation PHEV technology with premium E-Segment design. The Tiggo 9 isn't just any SUV — it's a statement of sophisticated power and innovation.
              </p>
              <blockquote className="border-l-4 border-black pl-6">
                <p className="text-lg md:text-xl font-light text-gray-700 italic leading-relaxed">&ldquo;{tiggo9DesignQuote.text}&rdquo;</p>
                <cite className="text-sm text-gray-400 mt-3 block not-italic">{tiggo9DesignQuote.author}</cite>
              </blockquote>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="scale-up" delay={150}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <img src={tiggo9DesignImages[0].src} alt={tiggo9DesignImages[0].alt} className="w-full rounded-2xl object-cover h-48 col-span-2 md:col-span-1 md:row-span-2 md:h-full" />
              <img src={tiggo9DesignImages[1].src} alt={tiggo9DesignImages[1].alt} className="w-full rounded-2xl object-cover h-48" />
              <img src={tiggo9DesignImages[2].src} alt={tiggo9DesignImages[2].alt} className="w-full rounded-2xl object-cover h-48" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* PERFORMANCE */}
      <section id="performance" className="py-20 px-8 md:pl-20 md:pr-16 bg-[#181818]">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal animation="fade-up">
            <span className="text-xs tracking-[0.2em] text-[#ADADAD] font-medium uppercase">Performance</span>
            <h2 className="text-4xl md:text-6xl font-light mt-3 mb-6 text-white">Thrill of the<br /><strong className="font-bold">Open Road</strong></h2>
            <p className="text-base md:text-lg font-light text-white/70 max-w-2xl text-justify leading-relaxed mb-16">Uncompromising Power and Performance, the Cyberster defines what it means to drive an Electric Roadster. With dual-motor all-wheel drive and lightning-fast response, every journey is electrifying.</p>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {tiggo9PerfStats.map((s,i)=>(
              <ScrollReveal key={s.label} animation="fade-up" delay={i*80}>
                <div className="border border-white/10 rounded-2xl p-6 text-center">
                  <p className="text-3xl md:text-4xl font-light text-white mb-2">{s.value}</p>
                  <p className="text-xs text-white/40 tracking-wider uppercase leading-tight">{s.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal animation="scale-up" delay={100}>
            <img src="/assets/MG_tiggo9_Desk_HeroHeader.webp" alt="Cyberster Performance"
              className="w-full rounded-2xl object-cover h-[280px] md:h-[480px]" />
          </ScrollReveal>
        </div>
      </section>

      {/* INTERIOR */}
      <section id="interior" className="py-20 px-8 md:pl-20 md:pr-16 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal animation="fade-up">
            <span className="text-xs tracking-[0.2em] text-[#ADADAD] font-medium uppercase">Interior</span>
            <h2 className="text-4xl md:text-5xl font-light mt-3 mb-6">Stunning Inside and Out</h2>
            <p className="text-base md:text-lg font-light text-gray-600 max-w-2xl text-justify leading-relaxed mb-10">Redefine Your Standard with Interiors that Blend Pulse-Racing Design with the Smartest Tech. Ordinary? Never Heard of it.</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {tiggo9InteriorFeatures.map((f,i)=>(
              <ScrollReveal key={f.title} animation="fade-up" delay={i*100}>
                <div className="bg-[#F7F7F7] rounded-2xl p-7">
                  <h3 className="text-lg font-medium mb-2">{f.title}</h3>
                  <p className="text-sm text-gray-500 font-light leading-relaxed">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal animation="scale-up" delay={100}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {tiggo9DesignImages.map((img,i)=>(
                <img key={i} src={img.src} alt={img.alt}
                  className={`w-full rounded-2xl object-cover h-48 md:h-64 ${i===2?'hidden md:block':''}`} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ELECTRIC */}
      <section id="electric" className="py-20 px-8 md:pl-20 md:pr-16 bg-[#F7F7F7]">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal animation="fade-right">
            <span className="text-xs tracking-[0.2em] text-[#ADADAD] font-medium uppercase">Electric</span>
            <h2 className="text-4xl md:text-5xl font-light mt-3 mb-6">Charge Forward</h2>
            <p className="text-base md:text-lg font-light text-gray-600 text-justify leading-relaxed mb-8">The Cyberster&apos;s advanced battery technology delivers exceptional range with fast charging capability. From 10% to 80% in just 38 minutes with a 150kW DC fast charger.</p>
            <div className="space-y-4">
              {tiggo9ElectricSpecs.map(({key,value})=>(
                <div key={key} className="flex justify-between border-b border-gray-200 pb-3">
                  <span className="text-sm text-gray-500">{key}</span>
                  <span className="text-sm font-medium">{value}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal animation="fade-left" delay={150}>
            <div className="bg-[#181818] rounded-3xl p-10 text-center">
              <p className="text-[80px] font-light text-white leading-none">507</p>
              <p className="text-2xl font-light text-white/80 mt-1">km Range</p>
              <p className="text-sm text-white/40 mt-2">Dual Motor — WLTP</p>
              <div className="mt-8 w-full bg-white/10 rounded-full h-2">
                <div className="bg-[#29C5E8] h-2 rounded-full" style={{width:'88%'}} />
              </div>
              <p className="text-xs text-white/30 mt-2">vs 576 km max possible</p>
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
              {tiggo9Specs.map(([k,v])=>(
                <div key={k} className="bg-white flex justify-between items-center px-6 py-4">
                  <span className="text-sm text-gray-500">{k}</span>
                  <span className="text-sm font-medium text-right max-w-[55%]">{v}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={100}>
            <div className="mt-8">
              <a href="/assets/brochure/Chery-Tiggo9-Brochure.pdf" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-black text-black text-sm font-medium px-6 py-3 rounded-full hover:bg-black hover:text-white transition">
                Download Brochure
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-black py-16 text-center px-5">
        <ScrollReveal animation="fade-up">
          <h2 className="text-white text-3xl md:text-5xl font-light mb-3">Drive the Future Today.</h2>
          <div className="flex justify-center gap-4 mt-8">
            <Link href="/book-my-chery"><button className="h-12 px-8 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-100 transition">Book Now</button></Link>
            <Link href="/pre-qualify"><button className="h-12 px-8 border border-white text-white rounded-full text-sm hover:bg-white/10 transition">Pre-Qualify</button></Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}
