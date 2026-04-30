'use client'

import { useState } from 'react'
import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'

type FilterType = 'All models' | 'Plug-in Hybrid'
const models = [
  {
    id: 'tiggo8phev',
    href: '/model/tiggo8phev',
    name: 'Chery Tiggo 8 PHEV',
    subtitle: "Pakistan's Only 7-Seater PHEV D-SUV",
    type: 'Plug-in Hybrid' as FilterType,
    typeColor: 'text-[#15DB41]',
    iconSrc: '/assets/plugin-icon.svg',
    imgSrc: '/assets/tiggo8phev/tiggo8-index.png',
    price: null,
    priceLabel: null,
    inquire: true,
  },
  {
    id: 'tiggo9',
    href: '/model/tiggo9',
    name: 'Chery Tiggo 9 PHEV',
    subtitle: 'E-Segment Premium SUV',
    type: 'Plug-in Hybrid' as FilterType,
    typeColor: 'text-[#15DB41]',
    iconSrc: '/assets/plugin-icon.svg',
    imgSrc: '/assets/tiggo9/tiggo9-index.png',
    price: null,
    priceLabel: null,
    inquire: true,
  },
  {
    id: 'tiggo7',
    href: '/model/tiggo7',
    name: 'Chery Tiggo 7 PHEV',
    subtitle: 'C-Segment Smart Hybrid',
    type: 'Plug-in Hybrid' as FilterType,
    typeColor: 'text-[#15DB41]',
    iconSrc: '/assets/plugin-icon.svg',
    imgSrc: '/assets/tiggo7/tiggo7-index.png',
    price: null,
    priceLabel: null,
    inquire: true,
  },
]

const filters: FilterType[] = ['Plug-in Hybrid', 'All models']

export default function ModelsSection() {
  const [active, setActive] = useState<FilterType>('All models')

  const filtered = active === 'All models'
    ? models
    : models.filter(m => m.type === active)

  return (
    <div className="pt-8 md:pt-16 bg-white">
      <section className="mx-auto max-w-[1360px]">

        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 px-4 md:px-8 lg:px-10 pb-6 md:pb-10">
          <div>
            <span className="text-xs tracking-[0.2em] font-semibold text-gray-400 uppercase">Our Models</span>
            <h2 className="text-3xl md:text-5xl font-light mt-2">Choose Your Chery</h2>
          </div>

          {/* Filter tabs */}
          <div className="flex gap-2">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide border transition-all duration-200 ${
                  active === f
                    ? 'bg-black text-white border-black'
                    : 'bg-white text-gray-500 border-gray-200 hover:border-gray-400'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Cards grid */}
        <div
          className={`px-4 md:px-8 lg:px-10 pb-10 md:pb-12 transition-all duration-300 ${
            filtered.length <= 2
              ? 'grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5'
              : 'grid grid-cols-2 xl:grid-cols-4 gap-3 md:gap-5'
          }`}
          style={{ minHeight: 240 }}
        >
          {filtered.map((model, idx) => (
            <ScrollReveal key={model.id} animation="fade-up" delay={idx * 80}>
              <div
                className="bg-white border border-gray-100 rounded-xl md:rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full"
              >
                {/* Type badge */}
                <div className="flex items-center gap-1.5 px-3 pt-3 md:px-5 md:pt-5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={model.iconSrc} alt="" className="w-4 h-4 md:w-5 md:h-5" />
                  <span className={`text-[11px] md:text-sm font-light ${model.typeColor}`}>{model.type}</span>
                </div>

                {/* Car image */}
                <div className="px-2 py-2 md:px-4 md:py-4 flex-1 flex items-center justify-center">
                  <Link href={model.href} className="block w-full">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={model.imgSrc}
                      alt={model.name}
                      className="w-full h-28 md:h-44 object-contain transition-transform duration-500 hover:scale-105"
                    />
                  </Link>
                </div>

                {/* Info */}
                <div className="px-3 pb-3 md:px-5 md:pb-5">
                  <Link href={model.href}>
                    <h3 className="text-sm md:text-base font-semibold text-gray-900 hover:text-black transition-colors leading-tight">
                      {model.name}
                    </h3>
                  </Link>
                  <p className="text-[11px] md:text-sm text-gray-500 font-light mt-1">{model.subtitle}</p>

                  {/* Price or inquire */}
                  <div className="mt-3 md:mt-4">
                    {model.price ? (
                      <div>
                        <p className="text-[10px] text-gray-400 uppercase tracking-wider">{model.priceLabel}</p>
                        <p className="text-sm md:text-base font-semibold text-gray-900">{model.price}</p>
                      </div>
                    ) : (
                      <p className="text-[10px] md:text-xs text-gray-400 italic">Price on Application</p>
                    )}
                  </div>

                  {/* CTA */}
                  <Link href={model.href} className="block mt-3 md:mt-4">
                    <button className="w-full h-8 md:h-10 border border-gray-200 rounded-lg text-[11px] md:text-xs font-semibold text-gray-700 hover:bg-black hover:text-white hover:border-black transition-all duration-200 tracking-wide">
                      {model.inquire ? 'Learn More' : 'Book Now'}
                    </button>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </section>
    </div>
  )
}
