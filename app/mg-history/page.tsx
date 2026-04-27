import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'MG History – A Century of British Excellence | MG Motors Pakistan',
  description: 'Explore MG\'s rich history from 1924 to today — from the Oxford streets to Pakistani roads.',
}

const timeline = [
  {
    era: '1924',
    title: 'The Birth of MG',
    desc: 'MG was born in 1924 out of the Morris Garages in Oxford, England. Founded by Cecil Kimber, the brand immediately set its sights on producing stylish, sporty cars that were accessible to everyday drivers. The MG 14/28 became the first model to bear the iconic octagon badge.',
    tag: 'The Origin',
  },
  {
    era: '1927–1945',
    title: 'The Golden Age of Sports Cars',
    desc: 'MG quickly gained fame for its two-seater sports cars and became a regular name in motorsport. Models like the M-Type Midget brought sports car racing to the masses. Despite World War II halting production from 1940–1945, MG emerged with an even stronger identity.',
    tag: 'Golden Era',
  },
  {
    era: '1945–1962',
    title: 'Post-War Revival',
    desc: 'The iconic MG TD and MG TF cemented MG\'s reputation as the quintessential British sports car. American servicemen returning from WWII brought MGs home, igniting a passionate global following. The MGA, launched in 1955, modernised the design with a sleek aerodynamic body.',
    tag: 'Global Growth',
  },
  {
    era: '1962–1980',
    title: 'MGB & The Classic Era',
    desc: 'The MGB, launched in 1962, became one of the best-selling sports cars of its era with over 500,000 units produced. Its clean lines, open-top driving experience, and accessible price point made it a cult classic. The MGB GT coupe variant extended the appeal even further.',
    tag: 'Icon Born',
  },
  {
    era: '1980–2000',
    title: 'The British Leyland Years',
    desc: 'Under British Leyland, MG went through significant changes. The brand temporarily ceased independent production, though MG badging continued on performance variants of mainstream models. The MG RV8 in 1992 revived interest in the classic roadster formula.',
    tag: 'Transition',
  },
  {
    era: '2000–2010',
    title: 'Rebirth Under SAIC',
    desc: 'SAIC Motor acquired MG in 2007, marking a new chapter. With SAIC\'s engineering capability and investment, MG was reborn as a modern, technology-forward brand. Production moved to a state-of-the-art facility, blending British design DNA with Chinese manufacturing excellence.',
    tag: 'New Chapter',
  },
  {
    era: '2010–2019',
    title: 'MG Goes Global',
    desc: 'MG relaunched in markets across Asia, Europe, Australia and the Middle East with a range of compact SUVs and electric vehicles. The MG3, MG ZS, and MG6 found huge success. The brand\'s commitment to value, technology, and style resonated with a new generation of drivers worldwide.',
    tag: 'Global Expansion',
  },
  {
    era: '2019–2022',
    title: 'MG Arrives in Pakistan',
    desc: 'JW Automobile Pakistan launched MG in Pakistan in 2019, introducing the MG HS and MG ZS. The response was overwhelming — customers embraced MG\'s combination of European styling, advanced features, and competitive pricing. MG quickly became one of the fastest-growing automotive brands in Pakistan.',
    tag: 'Pakistan Launch',
  },
  {
    era: '2022–Present',
    title: 'The Electric & Hybrid Future',
    desc: 'MG is leading Pakistan\'s transition to electrified mobility with the MG HS PHEV — the country\'s first and best plug-in hybrid — alongside the all-electric Binguo EV and MG Cyberster roadster. The MG U9 truck brings rugged luxury. Pakistan\'s MG story is still being written.',
    tag: 'Future Forward',
  },
]

const models = [
  { year: '1924', name: 'MG 14/28', desc: 'The first MG' },
  { year: '1962', name: 'MGB', desc: '500,000+ sold' },
  { year: '1992', name: 'MG RV8', desc: 'Classic revival' },
  { year: '2019', name: 'MG HS', desc: 'Pakistan debut' },
  { year: '2024', name: 'MG Cyberster', desc: 'EV Roadster' },
  { year: '2025', name: 'MG U9', desc: 'Luxury truck' },
]

export default function MGHistoryPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-[#181818] py-24 px-5 md:px-10 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/assets/MG_LP_Desk_HeroHeader_768_br.webp" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10">
          <span className="text-[#ADADAD] text-sm font-medium tracking-widest">SINCE 1924</span>
          <h1 className="text-4xl md:text-7xl font-light text-white mt-4 mb-4">Driven by Excellence</h1>
          <p className="text-xl text-white/70 font-light max-w-2xl mx-auto">
            A Century of MG — from the streets of Oxford to the roads of Pakistan.
          </p>
        </div>
      </section>

      {/* Intro quote */}
      <section className="py-16 px-5 md:px-10 bg-[#F7F7F7]">
        <div className="max-w-[900px] mx-auto text-center">
          <p className="text-2xl md:text-3xl font-light text-gray-800 italic leading-relaxed">
            &ldquo;Few brands have a history as proud and passionate as MG. Since 1924, MG has been making cars people love to drive.&rdquo;
          </p>
        </div>
      </section>

      {/* Key models */}
      <section className="py-16 px-5 md:px-10">
        <div className="max-w-[1360px] mx-auto">
          <span className="text-[#ADADAD] text-sm font-medium tracking-widest">THROUGH THE DECADES</span>
          <h2 className="text-3xl font-light mt-4 mb-10">Iconic Models</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {models.map(m => (
              <div key={m.year} className="bg-[#F7F7F7] rounded-xl p-5 text-center">
                <p className="text-xs text-[#ADADAD] tracking-widest mb-1">{m.year}</p>
                <p className="text-lg font-light">{m.name}</p>
                <p className="text-xs text-gray-500 mt-1">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full timeline */}
      <section className="py-8 px-5 md:px-10 pb-20">
        <div className="max-w-[900px] mx-auto">
          <span className="text-[#ADADAD] text-sm font-medium tracking-widest">FULL TIMELINE</span>
          <h2 className="text-3xl font-light mt-4 mb-12">100 Years of MG</h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-gray-100 hidden md:block" />
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <div key={item.era} className="flex gap-8 items-start">
                  {/* Dot */}
                  <div className="hidden md:flex flex-col items-center flex-shrink-0">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-medium z-10 ${i === timeline.length-1 ? 'bg-black text-white' : 'bg-white border-2 border-gray-300 text-gray-500'}`}>
                      {i+1}
                    </div>
                  </div>
                  <div className="flex-1 pb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs bg-[#F7F7F7] text-gray-500 px-3 py-1 rounded-full font-medium">{item.era}</span>
                      <span className="text-xs text-[#ADADAD] tracking-widest">{item.tag}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-light mb-3">{item.title}</h3>
                    <p className="text-gray-600 font-light leading-relaxed text-justify">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#181818] py-16 px-5 md:px-10 text-center">
        <h2 className="text-3xl md:text-4xl font-light text-white mb-4">Be Part of the Next Chapter</h2>
        <p className="text-white/60 mb-8 font-light">The MG story continues — and it&apos;s being written on Pakistan&apos;s roads.</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/model/phev">
            <button className="h-12 px-8 border border-white rounded-[58px] text-white hover:bg-white hover:text-black transition text-base font-light">
              Explore Models
            </button>
          </Link>
          <Link href="/test-drive">
            <button className="h-12 px-8 bg-white text-black rounded-[58px] hover:bg-gray-100 transition text-base font-light">
              Book a Test Drive
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}
