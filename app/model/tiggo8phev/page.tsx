import type { Metadata } from 'next'
import Link from 'next/link'
import SectionTracker from '@/components/ui/SectionTracker'
import ScrollReveal from '@/components/ui/ScrollReveal'
import {
  tiggo8phevSections, tiggo8phevHeroStats, tiggo8phevSafetyStats,
  tiggo8phevBatterySpecs, tiggo8phevPilotFeatures, tiggo8phevDesignFeatures,
  tiggo8phevComfortFeatures, tiggo8phevSpecs,
} from '@/data/tiggo8phev'

export const metadata: Metadata = {
  title: 'Chery Tiggo 8 PHEV – True Hybrid Electric | Chery KP',
  description: "Pakistan's first and best PHEV. 7.1s 0-100, +50km electric range, 16.6kWh battery.",
}

export default function PHEVPage() {
  return (
    <div className="bg-white">
      <SectionTracker sections={tiggo8phevSections} />

      {/* HERO */}
      <section id="hero" className="relative bg-black overflow-hidden" style={{minHeight:'92vh'}}>
        <img src="/assets/tiggo8phev/tiggo8-index.png" alt="Chery Tiggo 8 PHEV"
          className="w-full h-full object-cover absolute inset-0 opacity-80" style={{objectPosition:'50% 60%'}} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="relative z-10 flex gap-3 px-8 md:pl-20 md:pr-16 pt-6">
          <Link href="/test-drive"><button className="h-10 px-5 border border-white/60 rounded-full text-white text-sm hover:bg-white/10 transition">Test Drive</button></Link>
          <Link href="/book-my-chery"><button className="h-10 px-5 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-100 transition">Book Now</button></Link>
        </div>
        <div className="relative z-10 flex flex-col justify-end h-full pb-20 px-8 md:pl-20 md:pr-16" style={{minHeight:'85vh'}}>
          <p className="text-white/60 text-sm tracking-widest uppercase mb-2">True Hybrid Electric</p>
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6 leading-tight"><strong className="font-bold">Chery</strong> HS PHEV</h1>
          <div className="flex gap-8 md:gap-16 mb-10">
            {tiggo8phevHeroStats.map((s,i)=>(
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

      {/* SAFETY */}
      <section id="safety" className="py-20 px-8 md:pl-20 md:pr-16 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal animation="fade-up">
            <span className="text-xs tracking-[0.2em] text-[#ADADAD] font-medium uppercase">Safety</span>
            <h2 className="text-4xl md:text-6xl font-light mt-3 mb-6"><strong className="font-bold">Safe</strong> Travels</h2>
            <p className="text-base md:text-lg font-light text-gray-600 max-w-2xl text-justify leading-relaxed mb-12">Everyone says safety comes first, we say safety comes foremost. All our innovations lead to the safety and comfort of our drivers and passengers. The Chery Tiggo 8 PHEV inherits the resilient structure of HS, with Chery Driver Assist, 6 airbags and enhanced safety features, ensuring protection and peace of mind wherever you go.</p>
          </ScrollReveal>
          <ScrollReveal animation="scale-up" delay={100}>
            <img src="/assets/tiggo8phev/tiggo8-index.png" alt="Safety" className="w-full rounded-2xl object-cover h-[300px] md:h-[500px]" />
          </ScrollReveal>
          <div className="grid grid-cols-3 gap-6 mt-10 text-center">
            {tiggo8phevSafetyStats.map((s,i)=>(
              <ScrollReveal key={s.label} animation="fade-up" delay={i*100}>
                <div className="border border-gray-100 rounded-xl py-6">
                  <p className="text-2xl md:text-3xl font-light">{s.value}</p>
                  <p className="text-xs text-gray-500 mt-2 tracking-widest uppercase">{s.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PERFORMANCE */}
      <section id="performance" className="py-20 px-8 md:pl-20 md:pr-16 bg-[#181818]">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal animation="fade-up">
            <span className="text-xs tracking-[0.2em] text-[#ADADAD] font-medium uppercase">Performance</span>
            <h2 className="text-4xl md:text-6xl font-light mt-3 mb-6 text-white"><strong className="font-bold">Powerful</strong> Driving Pleasure</h2>
            <p className="text-base md:text-lg font-light text-white/70 max-w-2xl text-justify leading-relaxed mb-12">Imagine the highest performance blend of the electric motor, turbo engine and precise chassis calibration that makes you smile in the joy of controlling such smooth sheer power.</p>
          </ScrollReveal>
          <ScrollReveal animation="scale-up" delay={150}>
            <img src="/assets/tiggo8phev/tiggo8-index.png" alt="Performance" className="w-full rounded-2xl object-cover h-[300px] md:h-[520px]" style={{objectPosition:'50% 60%'}} />
          </ScrollReveal>
        </div>
      </section>

      {/* PLUG-IN HYBRID */}
      <section id="hybrid" className="py-20 px-8 md:pl-20 md:pr-16 bg-white">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal animation="fade-right">
            <span className="text-xs tracking-[0.2em] text-[#ADADAD] font-medium uppercase">Plug-in Hybrid</span>
            <h2 className="text-4xl md:text-5xl font-light mt-3 mb-6">Pure Electric.<br />Pure Freedom.</h2>
            <p className="text-base md:text-lg font-light text-gray-600 text-justify leading-relaxed mb-8">With a 16.6kWh Ternary Lithium Battery, the Chery Tiggo 8 PHEV gives you the freedom to drive on pure electricity for over 50km.</p>
            <div className="flex flex-col gap-3">
              {tiggo8phevBatterySpecs.map(({key,value})=>(
                <div key={key} className="flex items-center justify-between border-b border-gray-100 pb-3">
                  <span className="text-gray-500 text-sm">{key}</span>
                  <span className="font-medium">{value}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal animation="fade-left" delay={150}>
            <div className="bg-[#F7F7F7] rounded-3xl p-8 text-center">
              <div className="text-8xl font-light text-gray-200 mb-2">+50</div>
              <p className="text-2xl font-light text-gray-800">km Pure Electric</p>
              <p className="text-sm text-gray-500 mt-2">On a full charge</p>
              <div className="mt-8 w-full bg-gray-200 rounded-full h-3">
                <div className="bg-[#15DB41] h-3 rounded-full" style={{width:'65%'}} />
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-1"><span>0 km</span><span>Electric</span><span>Hybrid →</span></div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Chery PILOT */}
      <section id="driver-assist" className="py-20 px-8 md:pl-20 md:pr-16 bg-[#F7F7F7]">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal animation="fade-up">
            <span className="text-xs tracking-[0.2em] text-[#ADADAD] font-medium uppercase">Technology</span>
            <h2 className="text-4xl md:text-5xl font-light mt-3 mb-6">Chery Driver Assist</h2>
            <p className="text-base md:text-lg font-light text-gray-600 max-w-2xl text-justify leading-relaxed mb-10">Chery sets the standard for safety with the Chery Driver Assist Safety Suite by ensuring a safe, relaxing, and comfortable driving experience across 11 intelligent systems.</p>
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {tiggo8phevPilotFeatures.map((f,i)=>(
              <ScrollReveal key={f.code} animation="fade-up" delay={i*60}>
                <div className="bg-white rounded-2xl p-4 text-center hover:shadow-md transition-shadow">
                  <img src={f.img} alt={f.name} className="w-full h-20 object-contain mb-3" />
                  <p className="text-xs font-bold tracking-widest text-gray-800">{f.code}</p>
                  <p className="text-[11px] text-gray-500 mt-1 leading-tight">{f.name}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* DESIGN */}
      <section id="design" className="py-20 px-8 md:pl-20 md:pr-16 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal animation="fade-up">
            <span className="text-xs tracking-[0.2em] text-[#ADADAD] font-medium uppercase">Design</span>
            <h2 className="text-4xl md:text-5xl font-light mt-3 mb-6">Bold. Distinctive.<br />Unmistakable.</h2>
            <p className="text-base md:text-lg font-light text-gray-600 max-w-2xl text-justify leading-relaxed mb-12">The Chery Tiggo 8 PHEV commands attention with its sharp front fascia, sculpted bodywork, and signature Chery Star Matrix grille.</p>
          </ScrollReveal>
          <ScrollReveal animation="scale-up" delay={100}>
            <div className="grid grid-cols-3 gap-4">
              <img src="/assets/tiggo8phev/tiggo8-index.png" alt="Front" className="w-full rounded-2xl object-cover h-48 col-span-2" />
              <img src="/assets/tiggo8phev/tiggo8-index.png" alt="Side" className="w-full rounded-2xl object-cover h-48" />
              <img src="/assets/tiggo8phev/tiggo8-index.png" alt="Rear" className="w-full rounded-2xl object-cover h-48" />
              <img src="/assets/Interior1.png" alt="Interior" className="w-full rounded-2xl object-cover h-48 col-span-2" />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-3 gap-8 mt-12">
            {tiggo8phevDesignFeatures.map((f,i)=>(
              <ScrollReveal key={f.title} animation="fade-up" delay={i*100}>
                <h3 className="text-base font-semibold mb-1">{f.title}</h3>
                <p className="text-sm text-gray-500 font-light">{f.subtitle}</p>
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
            <h2 className="text-4xl md:text-5xl font-light mt-3 mb-6">Premium Inside</h2>
            <p className="text-base md:text-lg font-light text-gray-600 text-justify leading-relaxed mb-8">Step inside and you are greeted by a premium, tech-forward cabin built around your every comfort.</p>
            <ul className="space-y-3">
              {tiggo8phevComfortFeatures.map(f=>(
                <li key={f} className="flex items-center gap-3 text-sm text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-black flex-shrink-0" />{f}
                </li>
              ))}
            </ul>
          </ScrollReveal>
          <ScrollReveal animation="fade-left" delay={150}>
            <div className="grid grid-cols-2 gap-3">
              <img src="/assets/Interior1.png" alt="Interior 1" className="rounded-2xl object-cover h-48 w-full col-span-2" />
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
              {tiggo8phevSpecs.map(([k,v])=>(
                <div key={k} className="bg-white flex justify-between items-center px-6 py-4">
                  <span className="text-sm text-gray-500">{k}</span>
                  <span className="text-sm font-medium text-gray-900 text-right max-w-[55%]">{v}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black py-16 text-center px-5">
        <ScrollReveal animation="fade-up">
          <h2 className="text-white text-3xl md:text-5xl font-light mb-3">Ready to drive the future?</h2>
          <p className="text-white/60 mb-8 font-light">Experience Pakistan&apos;s best plug-in hybrid electric vehicle.</p>
          <div className="flex justify-center gap-4">
            <Link href="/book-my-chery"><button className="h-12 px-8 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-100 transition">Book Now</button></Link>
            <Link href="/test-drive"><button className="h-12 px-8 border border-white text-white rounded-full text-sm hover:bg-white/10 transition">Test Drive</button></Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}
