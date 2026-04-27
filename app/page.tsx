import type { Metadata } from 'next'
import HeroCarousel from '@/components/home/HeroCarousel'
import ModelsSection from '@/components/home/ModelsSection'
import AboutSection from '@/components/home/AboutSection'
import TechnologySection from '@/components/home/TechnologySection'
import NewsSection from '@/components/home/NewsSection'
import ContactCardsSection from '@/components/home/ContactCardsSection'

export const metadata: Metadata = {
  title: 'MG Motors Pakistan – Ideal Solution for Urban Mobility',
  description: "Explore MG Motors Pakistan's lineup of hybrid, electric and diesel vehicles. MG HS PHEV, MG U9, MG Cyberster, Binguo EV. Book a test drive today.",
}

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <ModelsSection />
      <AboutSection />
      <TechnologySection />
      <NewsSection />
      <ContactCardsSection />
    </>
  )
}
