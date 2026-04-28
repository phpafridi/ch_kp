'use client'

import { useState } from 'react'
import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'

type FilterType = 'All models' | 'Plug-in Hybrid'
const models = [
  {
    href: '/model/tiggo8phev',
    name: 'Chery Tiggo 8 PHEV',
    subtitle: "Pakistan's Only 7-Seater PHEV D-SUV",
    type: 'Plug-in Hybrid' as FilterType,
    typeColor: 'text-[#15DB41]',
    iconSrc: '/assets/plugin-icon.svg',
    imgSrc: '/assets/tiggo8phev/tiggo8-index.png',
    price: 'PKR: 10,999,000/-',
    priceLabel: 'Ex-Factory Price',
    inquire: false,
  },
  {
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

        {/* Filter tabs — 2×2 grid on mobile, single row on md+ */}
        <ScrollReveal animation="fade-up" delay={0}>
        <div className="grid grid-cols-2 gap-x-4 gap-y-3 md:flex md:gap-12 px-4 md:px-8 lg:px-10 pb-0 mb-6 md:mb-8">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className="flex items-center gap-2 transition-colors duration-200 group"
            >
              {f !== 'All models' && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={
                    f === 'Plug-in Hybrid' ? '/assets/plugin-icon.svg'
                    : f === 'Electric' ? '/assets/electric-icon.svg'
                    : '/assets/gasolineeu.svg'
                  }
                  alt={f}
                  className={`w-4 h-4 md:w-5 md:h-5 flex-shrink-0 transition-opacity ${active === f ? 'opacity-100' : 'opacity-30 group-hover:opacity-60'}`}
                />
              )}
              <span
                className={`tracking-tight font-light text-[1rem] md:text-[2.2rem] lg:text-[2.625rem] transition-colors duration-200 leading-tight ${
                  active === f ? 'text-black' : 'text-[#ADADAD] hover:text-gray-500'
                }`}
              >
                {f}
              </span>
            </button>
          ))}
        </div>
        </ScrollReveal>

        {/* Model cards — 2-col on mobile, 4-col on desktop */}
        <div className="relative">
          <div
            className={`px-4 md:px-8 lg:px-10 pb-10 md:pb-12 transition-all duration-300 ${
              filtered.length <= 2
                ? 'grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5'
                : 'grid grid-cols-2 xl:grid-cols-4 gap-3 md:gap-5'
            }`}
            style={{ minHeight: 240 }}
          >
            {filtered.map((model, idx) => (
              <ScrollReveal key={model.href} animation="fade-up" delay={idx * 80}>
              <div
                className="bg-white border border-gray-100 rounded-xl md:rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full"
                style={{ animation: 'fadeIn 0.3s ease forwards' }}
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
                      className="w-full object-contain h-[110px] md:h-[180px] hover:scale-105 transition-transform duration-500"
                    />
                  </Link>
                </div>

                {/* Info */}
                <div className="px-3 pb-3 md:px-5 md:pb-5">
                  <h3 className="text-[0.9rem] md:text-[1.35rem] font-light text-gray-900 mb-0.5 leading-tight">{model.name}</h3>
                  <p className="text-[11px] md:text-sm text-gray-500 mb-2">{model.subtitle}</p>

                  {model.inquire ? (
                    <Link href={model.href}>
                      <p className="text-[11px] md:text-sm font-medium text-[#29C5E8] mb-2 md:mb-3 hover:underline cursor-pointer">Inquire Now</p>
                    </Link>
                  ) : (
                    <div className="mb-2 md:mb-3">
                      <p className="text-[10px] md:text-xs font-medium text-gray-700">{model.priceLabel}</p>
                      <p className="text-[11px] md:text-sm font-light text-gray-800 leading-tight">{model.price}</p>
                    </div>
                  )}

                  <Link href={model.href}>
                    <button className="w-full h-8 md:h-11 border border-black rounded-full text-[11px] md:text-sm font-light text-black hover:bg-black hover:text-white transition-colors duration-300">
                      Discover More
                    </button>
                  </Link>
                </div>
              </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

      </section>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}
