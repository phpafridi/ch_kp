import Link from 'next/link'
import CheryLogo from '@/components/ui/CheryLogo'

const models = [
  { href: '/model/tiggo8phev', label: 'Chery Tiggo 8 PHEV' },
  { href: '/model/tiggo9',     label: 'Chery Tiggo 9 PHEV' },
  { href: '/model/tiggo7',     label: 'Chery Tiggo 7 PHEV' },
]

const pages = [
  { href: '/test-drive', label: 'Test Drive' },
  { href: '/about',      label: 'About' },
  { href: '/contact',    label: 'Contact Us' },
]

const socials = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/17cyELuxeA/',
    icon: (
      <svg width="10" height="19" viewBox="0 0 11 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.08 6.49V4.89c-.017-.118-.007-.243.03-.361.037-.119.1-.228.183-.316.084-.088.187-.16.302-.207.115-.046.239-.067.363-.06H10.2V.51H7.11C3.69.51 2.92 3.05 2.92 4.7V6.49H.92v4h2.015V20.49H6.93V10.49h2.956l.13-1.581.24-2.43L7.08 6.49z"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/cherykp',
    icon: (
      <svg width="19" height="19" viewBox="0 0 21 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.75.5C16.2.5 17.59 1.08 18.62 2.1c1.03 1.03 1.6 2.42 1.6 3.88v8.97c0 1.45-.57 2.84-1.6 3.87-1.03 1.03-2.42 1.6-3.87 1.6H5.75c-1.45 0-2.84-.57-3.87-1.6C.85 17.79.27 16.4.27 14.95V5.98c0-1.45.58-2.84 1.61-3.87C2.91 1.08 4.3.5 5.75.5h8.96.04zm-4.43 4.85c-1.02-.009-2.02.284-2.87.842-.85.558-1.51 1.357-1.91 2.294-.4.937-.51 1.972-.3 2.972.19 1.001.672 1.923 1.386 2.65.714.727 1.627 1.225 2.625 1.433.997.207 2.034.114 2.978-.267.945-.382 1.755-1.035 2.328-1.877.574-.841.884-1.835.893-2.853C15.432 9.358 14.9 8.044 13.943 7.07 12.987 6.097 11.683 5.542 10.317 5.527zM10.317 7.3c.665.01 1.311.214 1.86.572.547.357.974.866 1.224 1.462.25.596.313 1.251.181 1.883-.131.632-.45 1.21-.914 1.66-.464.45-1.063.77-1.714.902-.651.132-1.326.069-1.942-.183-.615-.252-1.143-.683-1.514-1.235-.37-.552-.566-1.2-.559-1.86C6.94 9.18 7.456 7.867 8.414 6.893 9.372 5.919 10.668 5.364 11.317 5.35zm5.37-1.458c-.343.002-.672.138-.913.375-.122.12-.218.26-.283.414-.065.154-.099.32-.099.49 0 .17.034.337.099.49.065.157.161.298.283.418.241.244.57.38.913.382.326-.027.631-.177.852-.418.222-.24.345-.556.345-.882 0-.327-.123-.643-.345-.882-.221-.24-.526-.39-.852-.418z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/chery-master-pakistan/',
    icon: (
      <svg width="19" height="19" viewBox="0 0 21 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.27 10.71V20.5H4.93V7.16H0.27v3.54zM20.16 11.26c-.31-2.53-1.46-4.1-4.87-4.1-2 0-3.35.73-3.92 1.79h-.06V7.16H7.6V20.5h3.89v-6.61c0-1.74.35-3.42 2.48-3.42 2.13 0 2.3 1.99 2.3 3.55V20.5h4V13.17c0-.64-.036-1.28-.11-1.91zM2.6 0.5C2.14 0.5 1.69.637 1.31.893.924 1.149.625 1.513.449 1.939.272 2.365.226 2.834.316 3.286.406 3.739.628 4.154.954 4.48c.326.326.741.549 1.194.639.452.09.921.044 1.347-.133.426-.177.79-.476 1.046-.86.257-.384.393-.834.393-1.295 0-.618-.245-1.211-.682-1.648C3.815.745 3.222.5 2.6.5z"/>
      </svg>
    ),
  },
  {
    label: 'X',
    href: 'https://x.com/cherykp',
    icon: (
      <svg width="19" height="19" viewBox="0 0 21 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.33 2.375H18.09L12.06 9.258l7.085 9.367H13.6L9.255 12.944 4.283 18.625H1.525L7.967 11.263 1.17 2.375H6.858L10.786 7.567l4.542-5.192zM14.36 16.975H15.888L6.028 3.938H4.39L14.36 16.975z"/>
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@cherymaster',
    icon: (
      <svg width="24" height="19" viewBox="0 0 28 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M27.12 4.81C27.12 4.81 26.84 2.85 26.05 1.99 25.69 1.62 25.26 1.32 24.79 1.11 24.32.905 23.82.793 23.3.782 19.53.502 13.78.502 13.78.502h-.032S8.05.502 4.23.782c-.513.013-1.018.126-1.487.334-.469.208-.892.507-1.246.879C.662 2.852.403 4.814.403 4.814.23 6.336.136 7.867.123 9.4L.123 11.556c.012 1.529.106 3.056.28 4.576.28 0 .562 1.96 1.357 2.833 1.035 1.137 2.394 1.078 3.014 1.213 2.156.22 9.271.295 9.271.295s5.763-.032 9.536-.274c.507-.014 1.006-.129 1.469-.337.462-.208.879-.506 1.226-.876.814-.873 1.078-2.835 1.078-2.835.168-1.521.258-3.05.27-4.58V9.416c-.012-1.53-.102-3.059-.27-4.578l.047-.019zM18.316 10.203L10.942 14.17V6.193l7.374 4.01z"/>
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white mt-10">

      {/* Top section */}
      <div className="max-w-[1360px] mx-auto px-5 md:px-8 lg:px-16 pt-16 pb-10">

        {/* Logo + tagline */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="brightness-0 invert mb-4">
            <CheryLogo />
          </div>
          <p className="text-gray-400 text-sm tracking-widest uppercase">Ideal Solution for Urban Mobility</p>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-12" />

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">

          {/* Models */}
          <div>
            <p className="text-xs tracking-[0.2em] font-semibold text-gray-400 uppercase mb-6">Models</p>
            <ul className="space-y-3">
              {models.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-gray-300 hover:text-white transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div>
            <p className="text-xs tracking-[0.2em] font-semibold text-gray-400 uppercase mb-6">Pages</p>
            <ul className="space-y-3">
              {pages.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-gray-300 hover:text-white transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs tracking-[0.2em] font-semibold text-gray-400 uppercase mb-6">Contact</p>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <a href="tel:03369999884" className="hover:text-white transition-colors duration-200">0336-9999884</a>
              </li>
              <li>
                <a href="https://wa.me/923369999884" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">WhatsApp Us</a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="flex flex-col gap-3">
            <p className="text-xs tracking-[0.2em] font-semibold text-gray-400 uppercase mb-3">Get Started</p>
            <Link
              href="/test-drive"
              className="inline-block text-center bg-white text-black text-sm font-semibold px-5 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Book a Test Drive
            </Link>
            <Link
              href="/contact"
              className="inline-block text-center border border-white/30 text-white text-sm font-medium px-5 py-3 rounded-lg hover:border-white transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Copyright */}
          <p className="text-xs text-gray-500 order-2 md:order-1">
            © {new Date().getFullYear()} Chery KP. All rights reserved.
          </p>

          {/* Socials */}
          <div className="flex items-center gap-1 order-1 md:order-2">
            {socials.map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-9 h-9 flex items-center justify-center rounded-full border border-white/15 text-gray-400 hover:text-white hover:border-white/50 transition-all duration-200"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
