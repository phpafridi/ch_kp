import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Dealer Locator | Chery KP',
  description: 'Visit Chery KP — Pakistan\'s first Chery KP dealership on Main Ring Road, Peshawar.',
}

const dealers = [
  { city: 'Peshawar', name: 'Chery KP — Flagship Dealership', address: 'Main Ring Road, Peshawar, Khyber Pakhtunkhwa, Pakistan', phone: '0336-9999884', flagship: true },
]

const cities = [...new Set(dealers.map(d => d.city))]

export default function DealerLocatorPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section
        className="relative h-[280px] md:h-[440px] flex items-center justify-center"
        style={{ backgroundImage: `url('/assets/tiggo7/tiggo7-index.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-5">
          <h1 className="text-4xl md:text-6xl font-light mb-3">Dealer Locator</h1>
          <p className="text-lg text-white/80">Find the Nearest Brand Store or Service Point</p>
        </div>
      </section>

      {/* City filter */}
      <section className="py-12 px-5 md:px-10 bg-[#F7F7F7]">
        <div className="max-w-[1360px] mx-auto">
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="px-5 py-2 rounded-full bg-black text-white text-sm font-light cursor-pointer">All Cities</span>
            {cities.map(city => (
              <span key={city} className="px-5 py-2 rounded-full border border-gray-300 text-sm font-light cursor-pointer hover:border-black transition">
                {city}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dealers.map((d, i) => (
              <div key={i} className={`rounded-xl p-6 border hover:shadow-md transition ${(d as any).flagship ? "bg-black text-white border-black" : "bg-white border-gray-100"}`}>
                <span className={`text-xs font-medium tracking-widest ${(d as any).flagship ? "text-white/50" : "text-[#ADADAD]"}`}>{d.city.toUpperCase()}{(d as any).flagship ? " — FLAGSHIP" : ""}</span>
                <h3 className={`text-lg font-light mt-2 mb-2 ${(d as any).flagship ? "text-white" : ""}`}>{d.name}</h3>
                <p className={`text-sm mb-3 leading-relaxed ${(d as any).flagship ? "text-white/70" : "text-gray-500"}`}>{d.address}</p>
                <a href={`tel:${d.phone.replace(/-/g,"")}`} className={`text-sm hover:underline flex items-center gap-2 ${(d as any).flagship ? "text-white" : "text-gray-900"}`}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  {d.phone}
                </a>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(d.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-4 text-sm flex items-center gap-1 transition hover:underline ${(d as any).flagship ? "text-white/70 hover:text-white" : "text-gray-500 hover:text-black"}`}
                >
                  Get Directions →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a dealer CTA */}
      <section className="py-16 px-5 md:px-10 text-center">
        <h2 className="text-2xl md:text-3xl font-light mb-3">Interested in Joining Our Network?</h2>
        <p className="text-gray-500 mb-8">Chery KP is expanding — become an authorized dealer and bring Chery&apos;s fifth-generation PHEV technology to your city.</p>
        <Link href="/dealer">
          <button className="h-12 px-8 bg-black text-white rounded-[58px] text-base font-light hover:bg-gray-800 transition">
            Become a Dealer
          </button>
        </Link>
      </section>
    </div>
  )
}
