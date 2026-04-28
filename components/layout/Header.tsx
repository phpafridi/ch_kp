'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import CheryLogo from '@/components/ui/CheryLogo'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/model/tiggo8phev', label: 'Tiggo 8 PHEV' },
  { href: '/model/tiggo9', label: 'Tiggo 9 PHEV' },
  { href: '/model/tiggo7', label: 'Tiggo 7 PHEV' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact Us' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
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
          {/* Logo */}
          <Link href="/" aria-label="Chery KP Home" className="flex-shrink-0">
            <CheryLogo />
          </Link>

          {/* Desktop nav — hidden on mobile */}
          <nav className="hidden md:flex gap-x-5 items-center">
            {navLinks.map(link => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname === link.href || pathname.startsWith(link.href + '/')
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative pb-1 text-[15px] font-medium transition-opacity hover:opacity-80 text-black ${
                    isActive ? 'opacity-100' : 'opacity-70'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-[-10px] left-0 w-[29px] h-[4px] bg-black rounded-full" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Test Drive — hidden on mobile */}
            <Link
              href="/test-drive"
              className="hidden md:inline-block bg-black text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-800 transition whitespace-nowrap"
            >
              Test Drive
            </Link>

            {/* Hamburger — visible only on mobile */}
            <button
              onClick={() => setMobileOpen(v => !v)}
              className="flex md:hidden flex-col items-center justify-center w-10 h-10 gap-[5px]"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              <span className={`block h-[2px] w-[26px] bg-black origin-center transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`block h-[2px] bg-black transition-all duration-200 ${mobileOpen ? 'w-0 opacity-0' : 'w-[26px] opacity-100'}`} />
              <span className={`block h-[2px] w-[26px] bg-black origin-center transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile slide-in menu */}
      <div
        className={`fixed inset-0 z-[140] bg-white transform transition-transform duration-300 ease-in-out overflow-y-auto md:hidden ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="pt-20 pb-10 px-6 sm:px-10">
          <ul className="space-y-1 mb-8">
            {navLinks.map(link => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname === link.href || pathname.startsWith(link.href + '/')
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block py-3 text-xl font-light border-b border-gray-100 transition-colors ${
                      isActive ? 'text-black font-normal' : 'text-gray-700 hover:text-black'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>

          <div className="mt-8 flex flex-col gap-3 border-t border-gray-100 pt-8">
            <Link href="/test-drive">
              <button className="w-full h-12 bg-black text-white rounded-[58px] text-base font-light hover:bg-gray-800 transition">
                Book a Test Drive
              </button>
            </Link>
          </div>

          <div className="mt-6 text-sm text-gray-400 space-y-1">
            <p>Helpline: <a href="tel:03369999884" className="text-gray-600 hover:text-black">0336-9999884</a></p>
            <p>WhatsApp: <a href="https://wa.me/923369999884" className="text-gray-600 hover:text-black">0336-9999884</a></p>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[130] bg-black/20 backdrop-blur-sm md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  )
}
