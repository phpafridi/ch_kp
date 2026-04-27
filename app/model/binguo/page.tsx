import type { Metadata } from 'next'
import Link from 'next/link'
import SectionTracker from '@/components/ui/SectionTracker'
import ScrollReveal from '@/components/ui/ScrollReveal'
import {
  binguoSections, binguoHeroStats, binguoRangeStats,
  binguoBatterySpecs, binguoExteriorFeatures, binguoInteriorFeatures, binguoSpecs,
} from '@/data/binguo'

export const metadata: Metadata = {
  title: 'Binguo EV – Up to 333km Range | MG Motors Pakistan',
  description: 'MAGIC Battery Technology, 31.9kWh, up to 333km CLTC range.',
}

export default function BinguoPage() {
  return (
    <div className="bg-white">
      <SectionTracker sections={binguoSections} />

      {/* HERO */}
      <section id="hero" className="relative bg-black overflow-hidden" style={{minHeight:'92vh'}}>
        <img src="/assets/mg-binguo/banner/CtymTX.webp" alt="Binguo EV"
          className="w-full h-full object-cover absolute inset-0 opacity-85" style={{objectPosition:'50% 50%'}} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="relative z-10 flex gap-3 px-8 md:pl-20 md:pr-16 pt-6">
          <Link href="/test-drive"><button className="h-10 px-5 border border-white/60 rounded-full text-white text-sm hover:bg-white/10 transition">Test Drive</button></Link>
          <Link href="/book-my-mg"><button className="h-10 px-5 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-100 transition">Book Now</button></Link>
        </div>
        <div className="relative z-10 flex flex-col justify-end h-full pb-20 px-8 md:pl-20 md:pr-16" style={{minHeight:'85vh'}}>
          <p className="text-white/60 text-sm tracking-widest uppercase mb-2">Designed to Stand Out</p>
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6 leading-tight"><strong className="font-bold">Binguo</strong> EV</h1>
          <div className="flex gap-8 md:gap-16 mb-10">
            {binguoHeroStats.map((s,i)=>(
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

      {/* RANGE */}
      <section id="range" className="py-20 px-8 md:pl-20 md:pr-16 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal animation="fade-up">
            <span className="text-xs tracking-[0.2em] text-[#ADADAD] font-medium uppercase">Range</span>
            <h2 className="text-4xl md:text-6xl font-light mt-3 mb-6">Take Charge with<br />the <strong className="font-bold">Binguo EV</strong></h2>
            <p className="text-base md:text-lg font-light text-gray-600 max-w-2xl text-justify leading-relaxed mb-12">Binguo EV is made for easy city driving. Its compact size, quiet electric motor and comfortable interior make every trip simple and enjoyable.</p>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-12">
            {binguoRangeStats.map((s,i)=>(
              <ScrollReveal key={s.label} animation="fade-up" delay={i*80}>
                <div className="border border-gray-100 rounded-2xl py-8">
                  <p className="text-xl md:text-2xl font-light mb-2">{s.value}</p>
                  <p className="text-xs text-gray-500 tracking-widest uppercase">{s.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal animation="scale-up" delay={100}>
            <img src="/assets/mg-binguo/banner/CtymTX.webp" alt="Binguo EV" className="w-full rounded-2xl object-cover h-[260px] md:h-[460px]" />
          </ScrollReveal>
        </div>
      </section>

      {/* BATTERY */}
      <section id="battery" className="py-20 px-8 md:pl-20 md:pr-16 bg-[#181818]">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal animation="fade-right">
            <span className="text-xs tracking-[0.2em] text-[#ADADAD] font-medium uppercase">Battery</span>
            <h2 className="text-4xl md:text-5xl font-light mt-3 mb-6 text-white">MAGIC Battery<br />Technology</h2>
            <p className="text-base md:text-lg font-light text-white/70 text-justify leading-relaxed mb-8">Binguo EV is powered by MAGIC Battery technology with a 31.9-kilowatt hour capacity that supports reliable daily use.</p>
            <div className="space-y-3">
              {binguoBatterySpecs.map(({key,value})=>(
                <div key={key} className="flex justify-between border-b border-white/10 pb-3">
                  <span className="text-sm text-white/50">{key}</span>
                  <span className="text-sm font-medium text-white">{value}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal animation="fade-left" delay={150}>
            <div className="flex flex-col items-center justify-center bg-white/5 rounded-3xl p-10 text-center border border-white/10">
              <div className="text-[96px] font-light text-white leading-none">31.9</div>
              <p className="text-xl font-light text-white/70 mt-2">kWh MAGIC Battery</p>
              <p className="text-sm text-white/30 mt-2">Up to 333 km CLTC</p>
              <div className="mt-8 w-full bg-white/10 rounded-full h-3">
                <div className="bg-[#29C5E8] h-3 rounded-full" style={{width:'76%'}} />
              </div>
            </div>
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
            {binguoExteriorFeatures.map((f,i)=>(
              <ScrollReveal key={f.label} animation="fade-up" delay={i*50}>
                <div className="text-center group">
                  <div className="overflow-hidden rounded-2xl mb-3">
                    <img src={f.img} alt={f.label} className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <p className="text-sm font-light text-gray-700">{f.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* INTERIOR */}
      <section id="interior" className="py-20 px-8 md:pl-20 md:pr-16 bg-[#F7F7F7]">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal animation="fade-right">
            <span className="text-xs tracking-[0.2em] text-[#ADADAD] font-medium uppercase">Interior</span>
            <h2 className="text-4xl md:text-5xl font-light mt-3 mb-6">Stylish and Modern</h2>
            <p className="text-base md:text-lg font-light text-gray-600 text-justify leading-relaxed mb-8">The Binguo EV cabin is designed with modern sensibilities — fresh colours, clean lines, and smart technology make every journey a pleasure.</p>
            <ul className="space-y-3">
              {binguoInteriorFeatures.map(f=>(
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
              {binguoSpecs.map(([k,v])=>(
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
          <h2 className="text-white text-3xl md:text-5xl font-light mb-3">Your City. Your Electric.</h2>
          <div className="flex justify-center gap-4 mt-8">
            <Link href="/book-my-mg"><button className="h-12 px-8 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-100 transition">Book Now</button></Link>
            <Link href="/test-drive"><button className="h-12 px-8 border border-white text-white rounded-full text-sm hover:bg-white/10 transition">Test Drive</button></Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}
