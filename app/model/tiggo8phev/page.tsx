import type { Metadata } from 'next'
import Link from 'next/link'
import SectionTracker from '@/components/ui/SectionTracker'
import ScrollReveal from '@/components/ui/ScrollReveal'
import {
  tiggo8phevSections, tiggo8phevHeroStats, tiggo8phevSafetyStats,
  tiggo8phevBatterySpecs, tiggo8phevPilotFeatures, tiggo8phevDesignFeatures,
  tiggo8phevComfortFeatures, tiggo8phevInteriorImages, tiggo8phevExteriorImages,
  tiggo8phevSpecs,
} from '@/data/tiggo8phev'

export const metadata: Metadata = {
  title: 'Chery Tiggo 8 PHEV – Pakistan\'s Only 7-Seater PHEV D-SUV | Chery KP',
  description: "Pakistan's first and best PHEV. 6.8s 0-100, 90km electric range, 1200km combined range.",
}

export default function PHEVPage() {
  return (
    <div className="bg-white">
      <SectionTracker sections={tiggo8phevSections} />

      {/* HERO */}
      <section id="hero" className="relative bg-[#0a1628] overflow-hidden" style={{minHeight:'92vh'}}>
        <img src="/assets/tiggo8/newtigo8.webp" alt="Chery Tiggo 8 PHEV"
          className="w-full h-full object-cover absolute inset-0" style={{objectPosition:'60% 50%'}} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <div className="relative z-10 flex gap-3 px-8 md:pl-20 md:pr-16 pt-6">
          <Link href="/test-drive"><button className="h-10 px-5 border border-white/60 rounded-full text-white text-sm hover:bg-white/10 transition">Test Drive</button></Link>
          <Link href="/book-my-chery"><button className="h-10 px-5 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-100 transition">Book Now</button></Link>
        </div>
        <div className="relative z-10 flex flex-col justify-end h-full pb-20 px-8 md:pl-20 md:pr-16" style={{minHeight:'85vh'}}>
          <p className="text-white/60 text-sm tracking-widest uppercase mb-2">Pakistan's Only 7-Seater PHEV D-SUV</p>
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6 leading-tight"><strong className="font-bold">Chery</strong> Tiggo 8 PHEV</h1>
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
            <p className="text-base md:text-lg font-light text-gray-600 max-w-2xl text-justify leading-relaxed mb-12">Everyone says safety comes first, we say safety comes foremost. The Chery Tiggo 8 PHEV is built with Chery Driver Assist, 10 airbags and enhanced safety features, ensuring protection and peace of mind wherever you go.</p>
          </ScrollReveal>
          <ScrollReveal animation="scale-up" delay={100}>
            <img src="/assets/tiggo8/airbag.webp" alt="Tiggo 8 Safety" className="w-full rounded-2xl object-cover h-[300px] md:h-[500px]" />
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
            <p className="text-base md:text-lg font-light text-white/70 max-w-2xl text-justify leading-relaxed mb-12">496 hp of combined power, 0-100 in 6.8 seconds. The Tiggo 8 PHEV blends electric motor precision with turbo engine muscle for sheer driving confidence.</p>
          </ScrollReveal>
          <ScrollReveal animation="scale-up" delay={150}>
            <img src="/assets/tiggo8/zero.webp" alt="Tiggo 8 Performance" className="w-full rounded-2xl object-cover h-[300px] md:h-[520px]" style={{objectPosition:'50% 60%'}} />
          </ScrollReveal>
        </div>
      </section>

      {/* PLUG-IN HYBRID */}
      <section id="hybrid" className="py-20 px-8 md:pl-20 md:pr-16 bg-white">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal animation="fade-right">
            <span className="text-xs tracking-[0.2em] text-[#ADADAD] font-medium uppercase">Plug-in Hybrid</span>
            <h2 className="text-4xl md:text-5xl font-light mt-3 mb-6">Pure Electric.<br />Pure Freedom.</h2>
            <p className="text-base md:text-lg font-light text-gray-600 text-justify leading-relaxed mb-8">With LFP Battery technology, the Chery Tiggo 8 PHEV gives you 90km of pure electric range and 1,200km combined — so you never have to worry about range again.</p>
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
              <div className="text-8xl font-light text-gray-200 mb-2">90</div>
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

      {/* CHERY DRIVER ASSIST */}
      <section id="driver-assist" className="py-20 px-8 md:pl-20 md:pr-16 bg-[#181818]">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal animation="fade-up">
            <span className="text-xs tracking-[0.2em] text-[#ADADAD] font-medium uppercase">Technology</span>
            <h2 className="text-4xl md:text-5xl font-light mt-3 mb-3 text-white">Chery Driver Assist</h2>
            <p className="text-base md:text-lg font-light text-white/70 max-w-2xl text-justify leading-relaxed mb-10">An advanced L2 driver-assistance suite covering 11 intelligent safety scenarios — so you can focus on the joy of driving.</p>
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            {tiggo8phevPilotFeatures.map((f,i)=>(
              <ScrollReveal key={f.code} animation="fade-up" delay={i*60}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-3">
                    <span className="text-white text-xs font-bold tracking-wider">{f.code}</span>
                  </div>
                  <p className="text-white/90 text-[11px] font-light leading-tight">{f.name}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal animation="fade-up" delay={100}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {['Intelligent Speed Limit Assist','Lane Change Assist','Door Opening Warning','Lane Departure Warning'].map(f=>(
                <div key={f} className="flex items-center gap-2 text-white/50 text-xs">
                  <span className="w-1 h-1 rounded-full bg-white/30 flex-shrink-0" />{f}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* DESIGN / EXTERIOR */}
      <section id="design" className="py-20 px-8 md:pl-20 md:pr-16 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal animation="fade-up">
            <span className="text-xs tracking-[0.2em] text-[#ADADAD] font-medium uppercase">Design</span>
            <h2 className="text-4xl md:text-5xl font-light mt-3 mb-6">Bold. Distinctive.<br />Unmistakable.</h2>
            <p className="text-base md:text-lg font-light text-gray-600 max-w-2xl text-justify leading-relaxed mb-12">The Chery Tiggo 8 PHEV commands attention with its sharp front fascia, sculpted bodywork, and signature Chery Star Matrix grille.</p>
          </ScrollReveal>
          <ScrollReveal animation="scale-up" delay={100}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <img src={tiggo8phevExteriorImages[0].src} alt={tiggo8phevExteriorImages[0].alt} className="w-full rounded-2xl object-cover h-48 col-span-2" />
              <img src={tiggo8phevExteriorImages[1].src} alt={tiggo8phevExteriorImages[1].alt} className="w-full rounded-2xl object-cover h-48" />
              <img src={tiggo8phevExteriorImages[2].src} alt={tiggo8phevExteriorImages[2].alt} className="w-full rounded-2xl object-cover h-48" />
              <img src={tiggo8phevExteriorImages[3].src} alt={tiggo8phevExteriorImages[3].alt} className="w-full rounded-2xl object-cover h-48 col-span-2" />
              <img src="/assets/tiggo8/seater.webp" alt="Tiggo 8 Seating" className="w-full rounded-2xl object-cover h-48 col-span-2" />
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
              <img src={tiggo8phevInteriorImages[0].src} alt={tiggo8phevInteriorImages[0].alt} className="rounded-2xl object-cover h-48 w-full col-span-2" />
              <img src={tiggo8phevInteriorImages[1].src} alt={tiggo8phevInteriorImages[1].alt} className="rounded-2xl object-cover h-36 w-full" />
              <img src={tiggo8phevInteriorImages[2].src} alt={tiggo8phevInteriorImages[2].alt} className="rounded-2xl object-cover h-36 w-full" />
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
