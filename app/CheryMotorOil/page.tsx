import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Chery Motor Oil | Premium Engine Protection | Chery KP',
  description: 'Chery Motor Oil — expertly engineered to enhance engine performance, deliver superior protection, reduce friction, and ensure long-lasting reliability.',
}

const grades = [
  {
    grade: '0W-20 SP/C5',
    desc: 'Fully synthetic low-viscosity oil for modern turbocharged and hybrid engines. Maximises fuel efficiency and cold-start protection.',
    highlight: 'Best for: Chery Tiggo 8 PHEV',
  },
  {
    grade: '5W-30 SP/C3',
    desc: 'Premium full synthetic oil offering robust protection for high-performance petrol and light diesel engines across all temperatures.',
    highlight: 'Best for: Chery HS, Chery ZS, MG5',
  },
]

const benefits = [
  { icon: '⚙️', title: 'Enhanced Engine Performance', desc: 'Engineered specifically for Chery engines to unlock their full potential.' },
  { icon: '🛡️', title: 'Superior Protection', desc: 'Guards critical components against wear, sludge, and deposits.' },
  { icon: '💧', title: 'Reduced Friction', desc: 'Advanced additive package minimises metal-to-metal contact throughout the engine.' },
  { icon: '🌡️', title: 'All-Temperature Stability', desc: 'Maintains optimal viscosity from cold winter starts to peak operating temperatures.' },
  { icon: '♻️', title: 'Longer Drain Intervals', desc: 'Extended service life means fewer oil changes and lower maintenance costs.' },
  { icon: '✅', title: 'Warranty Approved', desc: "Using Chery Motor Oil ensures your vehicle's 5-year warranty remains fully intact." },
]

export default function CheryMotorOilPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-[#181818] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/assets/tiggo8phev/hero.jpg`}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 py-24 px-5 md:px-10 text-center">
          <span className="text-[#ADADAD] text-sm font-medium tracking-widest">CHERY CARE</span>
          <h1 className="text-5xl md:text-7xl font-light text-white mt-4 mb-4">Chery Motor Oil</h1>
          <p className="text-xl text-white/70 font-light max-w-xl mx-auto">
            Precision-engineered lubrication for every Chery engine
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-5 md:px-10">
        <div className="max-w-[1360px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[#ADADAD] text-sm font-medium tracking-widest">ABOUT THE PRODUCT</span>
            <h2 className="text-3xl md:text-5xl font-light mt-4 mb-6">
              Built for Chery. Trusted by Engineers.
            </h2>
            <p className="text-lg font-light text-gray-700 leading-relaxed text-justify mb-6">
              Introducing Chery Motor Oil — expertly engineered to enhance engine performance, deliver superior protection, reduce friction, and ensure long-lasting reliability for every journey.
            </p>
            <p className="text-lg font-light text-gray-700 leading-relaxed text-justify">
              Available in two grades formulated to meet the latest ACEA and API standards, Chery Motor Oil is the only oil we trust in every Chery leaving our service centres.
            </p>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/assets/tiggo8phev/hero.jpg`}
            alt="Chery Motor Oil"
            className="w-full rounded-xl object-contain max-h-[440px]"
          />
        </div>
      </section>

      {/* Oil grades */}
      <section className="bg-[#F7F7F7] py-16 px-5 md:px-10">
        <div className="max-w-[1360px] mx-auto">
          <span className="text-[#ADADAD] text-sm font-medium tracking-widest">AVAILABLE GRADES</span>
          <h2 className="text-3xl md:text-4xl font-light mt-4 mb-10">Choose Your Grade</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {grades.map(g => (
              <div key={g.grade} className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="inline-block bg-black text-white text-lg font-light px-5 py-2 rounded-full mb-5">
                  {g.grade}
                </div>
                <p className="text-gray-700 font-light leading-relaxed mb-4">{g.desc}</p>
                <p className="text-sm font-medium text-gray-500">{g.highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-5 md:px-10">
        <div className="max-w-[1360px] mx-auto">
          <span className="text-[#ADADAD] text-sm font-medium tracking-widest">WHY Chery MOTOR OIL</span>
          <h2 className="text-3xl md:text-4xl font-light mt-4 mb-10">6 Reasons to Trust Chery Oil</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map(b => (
              <div key={b.title} className="flex gap-4 items-start p-5 rounded-xl bg-[#F7F7F7]">
                <span className="text-3xl flex-shrink-0">{b.icon}</span>
                <div>
                  <h3 className="text-base font-medium mb-1">{b.title}</h3>
                  <p className="text-sm text-gray-500 font-light leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compatibility table */}
      <section className="bg-[#F7F7F7] py-16 px-5 md:px-10">
        <div className="max-w-[1360px] mx-auto">
          <span className="text-[#ADADAD] text-sm font-medium tracking-widest">COMPATIBILITY</span>
          <h2 className="text-3xl font-light mt-4 mb-8">Which Oil for My MG?</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-100">
            <table className="w-full bg-white text-sm">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                  {['Model', 'Recommended Grade', 'Service Interval'].map(h => (
                    <th key={h} className="text-left px-6 py-4 font-medium text-gray-500 text-xs tracking-widest uppercase">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Chery Tiggo 8 PHEV', '0W-20 SP/C5', '10,000 km / 12 months'],
                  ['Chery Tiggo 7 PHEV (Diesel)', '5W-30 SP/C3', '10,000 km / 12 months'],
                  ['Chery Tiggo 9 PHEV (EV)', 'N/A — Electric', 'Annual inspection only'],
                  ['Chery Tiggo 8', 'N/A — Electric', 'Annual inspection only'],
                  ['Chery HS (Petrol)', '5W-30 SP/C3', '10,000 km / 12 months'],
                  ['Chery ZS EV', 'N/A — Electric', 'Annual inspection only'],
                ].map(([model, grade, interval], i) => (
                  <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-light text-gray-900">{model}</td>
                    <td className="px-6 py-4 font-light text-gray-600">{grade}</td>
                    <td className="px-6 py-4 font-light text-gray-500">{interval}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            * Always refer to your vehicle owner&apos;s manual for the definitive recommendation.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#181818] py-16 px-5 md:px-10 text-center">
        <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
          Ready for your next oil change?
        </h2>
        <p className="text-white/60 mb-8 text-lg font-light">
          Book a service at any authorized Chery dealership and request Chery Motor Oil by name.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/care/form">
            <button className="h-12 px-8 border border-white rounded-[58px] text-white hover:bg-white hover:text-black transition text-base font-light">
              Schedule a Service
            </button>
          </Link>
          <Link href="/dealer-locator">
            <button className="h-12 px-8 bg-white text-black rounded-[58px] hover:bg-gray-100 transition text-base font-light">
              Find a Dealer
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}
