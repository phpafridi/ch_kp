'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import MGLogo from '@/components/ui/MGLogo'
import Image from 'next/image'

const navLinks = [
  { href: '/model/phev', label: 'MG HS PHEV' },
  { href: '/model/mgu9', label: 'MG U9' },
  { href: '/model/cyberster', label: 'MG Cyberster', color: 'text-cyan-500' },
  { href: '/model/binguo', label: 'BINGUO EV', color: 'text-cyan-500' },
  { href: '/mg-exchange', label: 'MG Exchange' },
  { href: '/mg-partnerships', label: 'Financing' },
  { href: '/start-smart', label: 'Start Smart' },
]

const mobileGroups = [
  {
    label: 'Models',
    links: [
      { href: '/model/phev', label: 'MG HS PHEV' },
      { href: '/model/mgu9', label: 'MG U9' },
      { href: '/model/cyberster', label: 'MG Cyberster' },
      { href: '/model/binguo', label: 'Binguo EV' },
    ],
  },
  {
    label: 'Ownership',
    links: [
      { href: '/mg-exchange', label: 'MG Exchange' },
      { href: '/mg-partnerships', label: 'Financing' },
      { href: '/start-smart', label: 'Start Smart' },
      { href: '/care', label: 'MG Care' },
      { href: '/test-drive', label: 'Book a Test Drive' },
      { href: '/book-my-mg', label: 'Book My MG' },
      { href: '/track-my-mg', label: 'Track My MG' },
    ],
  },
  {
    label: 'Explore',
    links: [
      { href: '/world-of-mg', label: 'World of MG' },
      { href: '/about', label: 'About MG' },
      { href: '/mg-history', label: 'MG History' },
      { href: '/dealer-locator', label: 'Dealer Locator' },
      { href: '/careers', label: 'Careers' },
      { href: '/contact', label: 'Contact Us' },
      { href: '/faqs', label: 'FAQs' },
    ],
  },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [pathname])

  return (
    <>
      <header
        className={`sticky top-0 z-[150] bg-[#F7F7F7] px-4 sm:px-6 md:px-10 pt-4 pb-4 transition-shadow duration-300 ${
          scrolled ? 'shadow-md' : 'shadow-sm'
        }`}
      >
        <div className="flex justify-between items-center max-w-[1400px] mx-auto">
          <Link href="/" aria-label="MG Motors Pakistan Home" className="flex-shrink-0">
            <MGLogo />
          </Link>

          <nav className="hidden [@media(min-width:944px)]:flex gap-x-5 items-center">
            {navLinks.map(link => {
              const isActive = pathname === link.href || pathname.startsWith(link.href + '/')
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative pb-1 text-[15px] font-medium transition-opacity hover:opacity-80 ${
                    link.color || 'text-black'
                  } ${isActive ? 'opacity-100' : 'opacity-70'}`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-[-10px] left-0 w-[29px] h-[4px] bg-black rounded-full" />
                  )}
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/care/form"
              className="hidden lgCustom1:inline-block border border-black text-black text-sm font-medium px-4 py-2 rounded-lg hover:bg-black hover:text-white transition whitespace-nowrap"
            >
              Schedule Service
            </Link>
            <Link
              href="/test-drive"
              className="hidden lgCustom1:inline-block bg-black text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-800 transition whitespace-nowrap"
            >
              Test Drive
            </Link>
            <span className="text-sm font-normal flex gap-1 items-center mx-1">
              <Image
                src="/assets/pakistan-flag-icon.webp"
                alt="Pakistan"
                width={22}
                height={22}
                className="rounded-sm"
              />
              <span className="hidden sm:inline text-xs text-gray-600">PK</span>
            </span>
            <button
              onClick={() => setMobileOpen(v => !v)}
              className="flex flex-col items-center justify-center w-10 h-10 gap-[5px]"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              <span className={`block h-[2px] w-[26px] bg-black origin-center transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`block h-[2px] bg-black transition-all duration-200 ${mobileOpen ? 'w-0 opacity-0' : 'w-[26px] opacity-100'}`} />
              <span className={`block h-[2px] w-[26px] bg-black origin-center transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Slide-in mobile menu */}
      <div
        className={`fixed inset-0 z-[140] bg-white transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="pt-20 pb-10 px-6 sm:px-10">
          {mobileGroups.map(group => (
            <div key={group.label} className="mb-8">
              <p className="text-xs tracking-[0.15em] text-[#ADADAD] font-medium mb-4 uppercase">{group.label}</p>
              <ul className="space-y-1">
                {group.links.map(link => {
                  const isActive = pathname === link.href
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`block py-2 text-xl font-light border-b border-gray-50 transition-colors ${
                          isActive ? 'text-black font-normal' : 'text-gray-700 hover:text-black'
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}

          <div className="mt-8 flex flex-col gap-3 border-t border-gray-100 pt-8">
            <Link href="/care/form">
              <button className="w-full h-12 border border-black text-black rounded-[58px] text-base font-light hover:bg-black hover:text-white transition">
                Schedule a Service
              </button>
            </Link>
            <Link href="/test-drive">
              <button className="w-full h-12 bg-black text-white rounded-[58px] text-base font-light hover:bg-gray-800 transition">
                Book a Test Drive
              </button>
            </Link>
          </div>

          <div className="mt-8 text-sm text-gray-400 space-y-1">
            <p>Helpline: <a href="tel:080000011" className="text-gray-600 hover:text-black">0800-00011</a></p>
            <p>WhatsApp: <a href="https://wa.me/+923164411664" className="text-gray-600 hover:text-black">+92 316 4411664</a></p>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-[130] bg-black/20 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  )
}
