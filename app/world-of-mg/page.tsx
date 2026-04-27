import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'World of MG – Latest News & Updates | MG Motors Pakistan',
  description: 'Stay updated on the latest trends in the automobile industry from MG Motors Pakistan.',
}

const articles = [
  {
    img: `/assets/MG_cyberster_Desk_HeroHeader.webp`,
    title: 'MG at PAPS 2025: Flooded stalls and Exotic cars',
    excerpt: "MG's display became the main focus for car enthusiasts at the Pakistan Auto Show 2025 featuring its latest vehicles along with the MG Cyberster, MG HS PHEV, and the MG4 electric.",
    date: 'March 2025',
  },
  {
    img: `/assets/mg-binguo/banner/CtymTX.webp`,
    title: 'MG unveils the all-new MG U9 and Binguo EV at Pakistan Auto Show 2025',
    excerpt: 'MG launched two new vehicles at the Pakistan Auto Show 2025 in Karachi with an overwhelming response from the audience.',
    date: 'March 2025',
  },
  {
    img: `/assets/phev/phev-updated.webp`,
    title: 'The True Hybrid Electric is Here',
    excerpt: "MG's latest ad campaign for the MG HS PHEV boldly celebrates innovation, showcasing MG's leadership in hybrid technology.",
    date: 'February 2025',
  },
  {
    img: `/assets/MG_LP_Desk_HeroHeader_768_br.webp`,
    title: 'MG Pakistan Reaches 100,000 Customers Milestone',
    excerpt: 'A landmark achievement for MG Motors Pakistan as we celebrate 100,000 happy customers across the country.',
    date: 'January 2025',
  },
  {
    img: `/assets/Find-your-dealer-Banner2.webp`,
    title: 'Introducing the MG U9 Pickup Truck for Pakistan',
    excerpt: 'The MG U9 brings together a 2.5L turbo-diesel engine, intelligent 4×4 system, and smart hatch technology for Pakistani drivers.',
    date: 'December 2024',
  },
  {
    img: `/assets/mg-binguo/banner/CtymTX.webp`,
    title: 'Binguo EV: Affordable Electric Mobility for Pakistan',
    excerpt: 'MG introduces the Binguo EV — a compact, city-focused electric vehicle with MAGIC battery technology and up to 333km CLTC range.',
    date: 'November 2024',
  },
]

export default function WorldOfMGPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/assets/MG_LP_Desk_HeroHeader_768_br.webp`}
          alt="World of MG"
          className="w-full h-[280px] md:h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-7xl font-light text-white">World of MG</h1>
            <p className="text-lg text-white/80 mt-3">Latest on Mobility</p>
          </div>
        </div>
      </section>

      {/* Featured video */}
      <section className="py-16 px-5 md:px-10">
        <div className="max-w-[1360px] mx-auto">
          <span className="text-[#ADADAD] text-sm font-medium tracking-widest">FEATURED</span>
          <h2 className="text-3xl md:text-4xl font-light mt-4 mb-8">Latest Video</h2>
          <div className="relative w-full pt-[56.25%] rounded-xl overflow-hidden">
            <a
              href="https://www.youtube.com/watch?v=dVuHIDXZsO4"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://img.youtube.com/vi/dVuHIDXZsO4/maxresdefault.jpg"
                alt="MG HS PHEV Video"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[70px] h-[50px] bg-[#FF0000] rounded-[12px] flex items-center justify-center shadow-xl">
                  <svg fill="#fff" viewBox="0 0 24 24" width="28" height="28"><path d="M8 5v14l11-7z" /></svg>
                </div>
              </div>
            </a>
          </div>
          <div className="mt-6">
            <h3 className="text-xl md:text-2xl font-medium">THE TRUE HYBRID ELECTRIC is here with a Banger</h3>
            <p className="text-gray-500 mt-2">MG&apos;s latest campaign for the MG HS PHEV celebrates the future of hybrid innovation in Pakistan.</p>
          </div>
        </div>
      </section>

      {/* News grid */}
      <section className="py-8 px-5 md:px-10 pb-20">
        <div className="max-w-[1360px] mx-auto">
          <span className="text-[#ADADAD] text-sm font-medium tracking-widest">LATEST NEWS</span>
          <h2 className="text-3xl md:text-4xl font-light mt-4 mb-10">Stay Updated</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((a, i) => (
              <article key={i} className="group cursor-pointer">
                <div className="overflow-hidden rounded-xl mb-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={a.img}
                    alt={a.title}
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-xs text-gray-400 mb-2">{a.date}</p>
                <h3 className="text-lg font-medium text-gray-900 mb-2 group-hover:underline">{a.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{a.excerpt}</p>
                <button className="flex items-center gap-2 mt-4 text-sm text-gray-900 group-hover:gap-3 transition-all">
                  Read the Story
                  <svg width="13" height="12" viewBox="0 0 13 12" fill="none">
                    <mask id="arrow" fill="white"><path d="M0.939 5.78L6.596 0.123L12.253 5.78L6.596 11.437L0.939 5.78Z" /></mask>
                    <path d="M12.253 5.78L13.667 7.194L15.082 5.78L13.667 4.366L12.253 5.78ZM5.182 1.537L10.839 7.194L13.667 4.366L8.011-1.291L5.182 1.537ZM10.839 4.366L5.182 10.022L8.011 12.851L13.667 7.194L10.839 4.366Z" fill="black" mask="url(#arrow)" />
                  </svg>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-[#F7F7F7] py-16 px-5 md:px-10 text-center">
        <h2 className="text-3xl font-light mb-4">Stay in the Loop</h2>
        <p className="text-gray-500 mb-8">Get the latest MG news, launches, and offers delivered to your inbox.</p>
        <div className="flex justify-center gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 border border-gray-300 rounded-[58px] px-5 py-3 text-sm focus:outline-none focus:border-black"
          />
          <button className="bg-black text-white px-6 py-3 rounded-[58px] text-sm hover:bg-gray-800 transition">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  )
}
