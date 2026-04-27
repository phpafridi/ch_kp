import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About MG Motors Pakistan | British Heritage, Modern Innovation',
  description: 'Learn about MG Motors Pakistan — a century of British automotive heritage combined with cutting-edge SAIC Motor technology.',
}

const promises = [
  'Industry-leading 5-Year Warranty',
  'Genuine Parts & Accessories',
  'Factory-Trained Technicians',
  'Transparent Pricing',
  'Customer First Approach',
  'Nationwide Service Network',
  'Roadside Assistance',
]

const partnerships = [
  { name: 'Arsenal FC', img: `/assets/MG_LP_Desk_HeroHeader_768_br.webp` },
  { name: 'Sports Partnership', img: `/assets/MG_LP_Desk_HeroHeader_768_br.webp` },
  { name: 'Bayer Leverkusen', img: `/assets/MG_LP_Desk_HeroHeader_768_br.webp` },
]

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/assets/MG_LP_Desk_HeroHeader_768_br.webp`}
          alt="About MG"
          className="w-full h-[300px] md:h-[560px] object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-7xl font-light text-white text-center">About MG</h1>
        </div>
      </section>

      {/* Brand story */}
      <section className="py-16 px-5 md:px-10">
        <div className="max-w-[1360px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[#ADADAD] text-sm font-medium tracking-widest">OUR STORY</span>
            <h2 className="text-3xl md:text-5xl font-light mt-4 mb-6">A Century of Driving Excellence</h2>
            <p className="text-lg font-light text-gray-700 text-justify leading-relaxed mb-6">
              MG was born in Britain in 1924 — a brand synonymous with passion, performance, and progressive thinking. Today, under SAIC Motor, MG continues that legacy with smart, connected, and electrified vehicles engineered for a new generation of drivers.
            </p>
            <p className="text-lg font-light text-gray-700 text-justify leading-relaxed">
              In Pakistan, MG Motors is distributed by JW Automobile Pakistan Pvt. Ltd., bringing world-class vehicles, genuine after-sales support, and a commitment to customer satisfaction across the country.
            </p>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`/assets/MG_LP_Desk_HeroHeader_768_br.webp`} alt="MG Heritage" className="w-full rounded-xl object-cover h-80" />
        </div>
      </section>

      {/* Models showcase */}
      <section className="bg-[#F7F7F7] py-16 px-5 md:px-10">
        <div className="max-w-[1360px] mx-auto">
          <span className="text-[#ADADAD] text-sm font-medium tracking-widest">OUR RANGE</span>
          <h2 className="text-3xl md:text-5xl font-light mt-4 mb-10">Purpose-Built for Pakistan</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { img: `/assets/mg-binguo/banner/CtymTX.webp`, label: 'MG4 Electric' },
              { img: `/assets/MG_LP_Desk_HeroHeader_768_br.webp`, label: 'MG7' },
              { img: `/assets/MG_LP_Desk_HeroHeader_768_br.webp`, label: 'MG ZS' },
              { img: `/assets/phev/phev-updated.webp`, label: 'MG HS PHEV' },
            ].map(car => (
              <div key={car.label} className="text-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={car.img} alt={car.label} className="w-full rounded-lg object-cover h-40 mb-3" />
                <p className="text-sm text-gray-700 font-medium">{car.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7 Promises */}
      <section className="py-16 px-5 md:px-10">
        <div className="max-w-[1360px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[#ADADAD] text-sm font-medium tracking-widest">OUR PROMISE</span>
            <h2 className="text-3xl md:text-5xl font-light mt-4 mb-8">7 Promises to You</h2>
            <ul className="space-y-4">
              {promises.map((p, i) => (
                <li key={p} className="flex items-center gap-4">
                  <span className="text-2xl font-light text-gray-300 w-8">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-lg font-light text-gray-800">{p}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`/assets/MG_LP_Desk_HeroHeader_768_br.webp`} alt="7 Promises" className="w-full rounded-xl object-cover h-96" />
        </div>
      </section>

      {/* Partnerships */}
      <section className="bg-[#181818] py-16 px-5 md:px-10">
        <div className="max-w-[1360px] mx-auto text-center">
          <span className="text-[#ADADAD] text-sm font-medium tracking-widest">PARTNERSHIPS</span>
          <h2 className="text-3xl md:text-5xl font-light mt-4 mb-10 text-white">Global Sports Partnerships</h2>
          <div className="flex justify-center gap-12 flex-wrap">
            {partnerships.map(p => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={p.name} src={p.img} alt={p.name} className="h-24 object-contain" />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-5 md:px-10 text-center">
        <h2 className="text-3xl md:text-5xl font-light mb-6">Experience MG for Yourself</h2>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/test-drive">
            <button className="relative overflow-hidden h-12 px-8 border border-black rounded-[58px] bg-white text-black hover:text-white cursor-pointer group">
              <span className="text-base font-light relative z-10">Book a Test Drive</span>
              <span className="absolute top-0 left-0 w-full h-full bg-black scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100" />
            </button>
          </Link>
          <Link href="/dealer-locator">
            <button className="h-12 px-8 bg-black text-white rounded-[58px] hover:bg-gray-800 transition text-base font-light">
              Find a Dealer
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}
