import type { Metadata } from 'next'
import HeroCarousel from '@/components/home/HeroCarousel'
import ModelsSection from '@/components/home/ModelsSection'
import AboutSection from '@/components/home/AboutSection'
import TechnologySection from '@/components/home/TechnologySection'
import ContactCardsSection from '@/components/home/ContactCardsSection'

export const metadata: Metadata = {
  title: 'Chery KP – Ideal Solution for Urban Mobility',
  description: "Explore Chery KP's lineup of hybrid, electric and diesel vehicles. Chery Tiggo 8 PHEV, Chery Tiggo 7 PHEV, Chery Tiggo 9 PHEV, Chery Tiggo 8. Book a test drive today.",
}

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <ModelsSection />
      <AboutSection />
      <TechnologySection />
      <ContactCardsSection />
    </>
  )
}
