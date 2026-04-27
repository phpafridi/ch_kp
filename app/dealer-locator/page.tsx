import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Dealer Locator | MG Motors Pakistan',
  description: 'Find the nearest MG brand store or service point across Pakistan.',
}

const dealers = [
  { city: 'Karachi', name: 'MG Karachi South', address: 'Plot No. 4-C, Block 6, PECHS, Shahra-e-Faisal, Karachi', phone: '021-1234567' },
  { city: 'Karachi', name: 'MG Karachi North', address: 'Main Rashid Minhas Road, Gulshan-e-Iqbal, Karachi', phone: '021-7654321' },
  { city: 'Lahore', name: 'MG Lahore Main', address: '12 Main Boulevard, Gulberg III, Lahore', phone: '042-1234567' },
  { city: 'Lahore', name: 'MG Lahore DHA', address: 'Phase 5, Commercial Area, DHA Lahore', phone: '042-7654321' },
  { city: 'Islamabad', name: 'MG Islamabad', address: 'Plot No. 15, Blue Area, Islamabad', phone: '051-1234567' },
  { city: 'Rawalpindi', name: 'MG Rawalpindi', address: 'Murree Road, Rawalpindi', phone: '051-9876543' },
  { city: 'Faisalabad', name: 'MG Faisalabad', address: 'Susan Road, Madina Town, Faisalabad', phone: '041-1234567' },
  { city: 'Multan', name: 'MG Multan', address: 'Abdali Road, Multan', phone: '061-1234567' },
  { city: 'Peshawar', name: 'MG Peshawar', address: 'Ring Road, University Town, Peshawar', phone: '091-1234567' },
  { city: 'Quetta', name: 'MG Quetta', address: 'Jinnah Road, Quetta', phone: '081-1234567' },
]

const cities = [...new Set(dealers.map(d => d.city))]

export default function DealerLocatorPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section
        className="relative h-[280px] md:h-[440px] flex items-center justify-center"
        style={{ backgroundImage: `url('/assets/Find-your-dealer-Banner2.webp')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
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
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition">
                <span className="text-xs text-[#ADADAD] font-medium tracking-widest">{d.city.toUpperCase()}</span>
                <h3 className="text-lg font-light mt-2 mb-2">{d.name}</h3>
                <p className="text-sm text-gray-500 mb-3 leading-relaxed">{d.address}</p>
                <a href={`tel:${d.phone}`} className="text-sm text-gray-900 hover:underline flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  {d.phone}
                </a>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(d.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-sm text-gray-500 hover:text-black flex items-center gap-1 transition"
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
        <p className="text-gray-500 mb-8">Become an authorized MG dealer and be part of Pakistan&apos;s fastest-growing automotive brand.</p>
        <Link href="/dealer">
          <button className="h-12 px-8 bg-black text-white rounded-[58px] text-base font-light hover:bg-gray-800 transition">
            Become a Dealer
          </button>
        </Link>
      </section>
    </div>
  )
}
