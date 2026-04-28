import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Chery Care – Service & Maintenance | Chery KP',
  description: 'Chery Care: genuine parts, Chery Motor Oil, skilled technicians, and a nationwide service network.',
}

const services = [
  {
    title: 'Chery Motor Oil',
    desc: 'Introducing Chery Motor Oil, expertly engineered to enhance engine performance, deliver superior protection, reduce friction, and ensure long-lasting reliability for every journey.',
    detail: 'Available Grades: 0W-20 SP/C5 · 5W-30 SP/C3',
    href: '/CheryMotorOil',
    cta: 'Learn More',
  },
  {
    title: 'Chery Genuine Parts',
    desc: 'Choose Chery approved genuine parts which are engineered for perfect compatibility, making sure your Chery runs smoothly and preserves its exceptional performance.',
    detail: null,
    href: '#',
    cta: 'Parts Price List',
  },
  {
    title: 'Skilled Manpower',
    desc: 'Our vast network of Chery-certified technicians, equipped with advanced tools and training, ensures convenience and care to keep your car performing at its best.',
    detail: null,
    href: '/care/form',
    cta: 'Book Service',
  },
  {
    title: 'Chery Warranty',
    desc: "Pakistan's best-in-class 5-year / 100,000km warranty covering manufacturing defects, giving you complete peace of mind throughout your ownership.",
    detail: '5 Years / 100,000 km',
    href: '#',
    cta: 'Learn More',
  },
]

export default function CarePage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="py-16 px-5 md:px-10 bg-[#F7F7F7]">
        <div className="max-w-[1360px] mx-auto">
          <span className="text-[#ADADAD] text-sm font-medium tracking-widest">AFTER-SALES</span>
          <h1 className="text-4xl md:text-6xl font-light mt-4 mb-2">Chery Care</h1>
          <p className="text-lg text-gray-500 font-light max-w-xl">
            Genuine parts, expert technicians, and world-class service — keeping your Chery performing at its best.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-5 md:px-10">
        <div className="max-w-[1360px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map(s => (
            <div key={s.title} className="bg-[#F7F7F7] rounded-xl p-8">
              <h2 className="text-2xl font-light mb-4">{s.title}</h2>
              <p className="text-gray-600 font-light leading-relaxed mb-4">{s.desc}</p>
              {s.detail && <p className="text-sm text-gray-500 font-medium mb-5">{s.detail}</p>}
              <Link href={s.href}>
                <button className="relative overflow-hidden h-11 px-6 border border-black rounded-[58px] bg-white text-black hover:text-white cursor-pointer group text-sm">
                  <span className="relative z-10">{s.cta}</span>
                  <span className="absolute top-0 left-0 w-full h-full bg-black scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100" />
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Schedule service CTA */}
      <section className="bg-[#181818] py-16 px-5 md:px-10 text-center">
        <h2 className="text-3xl md:text-5xl font-light text-white mb-4">Ready for your next service?</h2>
        <p className="text-white/70 mb-8 text-lg">Book your appointment online — fast and hassle-free.</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/care/form">
            <button className="h-12 px-8 border border-white rounded-[58px] text-white hover:bg-white hover:text-black transition text-base font-light">
              Schedule a Service
            </button>
          </Link>
          <a href="tel:03369999884" className="h-12 px-8 bg-white text-black rounded-[58px] hover:bg-gray-100 transition text-base font-light flex items-center">
            Call 0336-9999884
          </a>
        </div>
      </section>

      {/* Network info */}
      <section className="py-16 px-5 md:px-10">
        <div className="max-w-[1360px] mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: '50+', label: 'Service Centers Nationwide' },
              { num: '200+', label: 'Certified Technicians' },
              { num: '24/7', label: 'Roadside Assistance' },
            ].map(stat => (
              <div key={stat.label}>
                <p className="text-5xl font-light mb-2">{stat.num}</p>
                <p className="text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
