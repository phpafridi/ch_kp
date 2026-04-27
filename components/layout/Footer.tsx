import Link from 'next/link'
import MGLogo from '@/components/ui/MGLogo'

const footerLinks = {
  MODELS: [
    { href: '/model/phev', label: 'MG HS PHEV' },
    { href: '/model/mgu9', label: 'MG U9' },
    { href: '/model/cyberster', label: 'MG Cyberster' },
    { href: '/model/binguo', label: 'Binguo EV' },
  ],
  'OTHER LINKS': [
    { href: '/mg-exchange', label: 'MG Exchange' },
    { href: '/mg-partnerships', label: 'Financing' },
    { href: '/start-smart', label: 'Start Smart' },
    { href: '/dealer-locator', label: 'Dealer Locator' },
    { href: '/care', label: 'MG Care' },
    { href: '/test-drive', label: 'Book a Test Drive' },
    { href: '/book-my-mg', label: 'Book My MG' },
    { href: '/world-of-mg', label: 'World of MG' },
    { href: '/track-my-mg', label: 'Track My MG' },
  ],
  LEGAL: [
    { href: '/privacy', label: 'Cookie Policy' },
    { href: '/license', label: 'End User License Agreement' },
    { href: '/privacy-policy', label: 'Privacy Policy' },
  ],
  CONTACT: [
    { href: '/about', label: 'About MG' },
    { href: '/contact', label: 'Contact Us' },
    { href: '/careers', label: 'Careers' },
    { href: '/dealer', label: 'Become a Dealer' },
    { href: '/faqs', label: 'FAQ' },
  ],
}

export default function Footer() {
  return (
    <div className="relative z-[50] max-w-[1360px] mx-auto px-5 md:px-8 lg:px-10 mb-20 bg-white mt-10">
      <footer className="pt-1 md:pt-16 border-t border-gray-200">
        {/* Mobile logo */}
        <div className="flex lg:hidden mb-5">
          <Link href="/" aria-label="Go to homepage">
            <MGLogo />
          </Link>
        </div>

        {/* Link columns */}
        <div className="flex flex-col md:flex-row md:justify-between md:gap-0 gap-10 mt-10 md:mt-0">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <p className="text-xs tracking-widest font-normal text-gray-500 mb-4 md:mb-12">{category}</p>
              <ul className="space-y-2">
                {links.map(link => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-base font-normal text-gray-900 hover:text-gray-600 transition-colors block mb-3">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>

      {/* Bottom bar */}
      <div className="pt-24">
        <div className="flex justify-between items-center">
          {/* Desktop logo */}
          <div className="hidden lg:flex">
            <Link href="/">
              <MGLogo />
            </Link>
          </div>

          {/* Social icons */}
          <div className="flex flex-row items-center flex-wrap">
            <a href="https://www.facebook.com/MGMotorPak" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="p-4 group">
              <svg className="transition-colors duration-300 text-[#696969] group-hover:text-black" width="11" height="21" viewBox="0 0 11 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.08 6.49V4.89c-.017-.118-.007-.243.03-.361.037-.119.1-.228.183-.316.084-.088.187-.16.302-.207.115-.046.239-.067.363-.06H10.2V.51H7.11C3.69.51 2.92 3.05 2.92 4.7V6.49H.92v4h2.015V20.49H6.93V10.49h2.956l.13-1.581.24-2.43L7.08 6.49z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/mgmotorpakistan/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-4 group">
              <svg className="transition-colors duration-300 text-[#696969] group-hover:text-black" width="21" height="21" viewBox="0 0 21 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.75 .5C16.2 .5 17.59 1.08 18.62 2.1c1.03 1.03 1.6 2.42 1.6 3.88v8.97c0 1.45-.57 2.84-1.6 3.87-1.03 1.03-2.42 1.6-3.87 1.6H5.75c-1.45 0-2.84-.57-3.87-1.6C.85 17.79.27 16.4.27 14.95V5.98c0-1.45.58-2.84 1.61-3.87C2.91 1.08 4.3.5 5.75.5h8.96.04zm-4.43 4.85c-1.02-.009-2.02.284-2.87.842-.85.558-1.51 1.357-1.91 2.294-.4.937-.51 1.972-.3 2.972.19 1.001.672 1.923 1.386 2.65.714.727 1.627 1.225 2.625 1.433.997.207 2.034.114 2.978-.267.945-.382 1.755-1.035 2.328-1.877.574-.841.884-1.835.893-2.853C15.432 9.358 14.9 8.044 13.943 7.07 12.987 6.097 11.683 5.542 10.317 5.527zM10.317 7.3c.665.01 1.311.214 1.86.572.547.357.974.866 1.224 1.462.25.596.313 1.251.181 1.883-.131.632-.45 1.21-.914 1.66-.464.45-1.063.77-1.714.902-.651.132-1.326.069-1.942-.183-.615-.252-1.143-.683-1.514-1.235-.37-.552-.566-1.2-.559-1.86C6.94 9.18 7.456 7.867 8.414 6.893 9.372 5.919 10.668 5.364 11.317 5.35zm5.37-1.458c-.343.002-.672.138-.913.375-.122.12-.218.26-.283.414-.065.154-.099.32-.099.49 0 .17.034.337.099.49.065.157.161.298.283.418.241.244.57.38.913.382.326-.027.631-.177.852-.418.222-.24.345-.556.345-.882 0-.327-.123-.643-.345-.882-.221-.24-.526-.39-.852-.418z"/>
              </svg>
            </a>
            <a href="https://pk.linkedin.com/company/mg-motor-pakistan" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-4 group">
              <svg className="transition-colors duration-300 text-[#696969] group-hover:text-black" width="21" height="21" viewBox="0 0 21 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.27 10.71V20.5H4.93V7.16H0.27v3.54zM20.16 11.26c-.31-2.53-1.46-4.1-4.87-4.1-2 0-3.35.73-3.92 1.79h-.06V7.16H7.6V20.5h3.89v-6.61c0-1.74.35-3.42 2.48-3.42 2.13 0 2.3 1.99 2.3 3.55V20.5h4V13.17c0-.64-.036-1.28-.11-1.91zM2.6 0.5C2.14 0.5 1.69.637 1.31.893.924 1.149.625 1.513.449 1.939.272 2.365.226 2.834.316 3.286.406 3.739.628 4.154.954 4.48c.326.326.741.549 1.194.639.452.09.921.044 1.347-.133.426-.177.79-.476 1.046-.86.257-.384.393-.834.393-1.295 0-.618-.245-1.211-.682-1.648C3.815.745 3.222.5 2.6.5z"/>
              </svg>
            </a>
            <a href="https://x.com/mgpakistan" target="_blank" rel="noopener noreferrer" aria-label="X / Twitter" className="p-4 group">
              <svg className="transition-colors duration-300 text-[#696969] group-hover:text-black" width="21" height="21" viewBox="0 0 21 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.33 2.375H18.09L12.06 9.258l7.085 9.367H13.6L9.255 12.944 4.283 18.625H1.525L7.967 11.263 1.17 2.375H6.858L10.786 7.567l4.542-5.192zM14.36 16.975H15.888L6.028 3.938H4.39L14.36 16.975z"/>
              </svg>
            </a>
            <a href="https://www.youtube.com/channel/UClNny2ymTIZE1uT5Me7vfbA" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="p-4 group">
              <svg className="transition-colors duration-300 text-[#696969] group-hover:text-black" width="28" height="21" viewBox="0 0 28 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M27.12 4.81C27.12 4.81 26.84 2.85 26.05 1.99 25.69 1.62 25.26 1.32 24.79 1.11 24.32.905 23.82.793 23.3.782 19.53.502 13.78.502 13.78.502h-.032S8.05.502 4.23.782c-.513.013-1.018.126-1.487.334-.469.208-.892.507-1.246.879C.662 2.852.403 4.814.403 4.814.23 6.336.136 7.867.123 9.4L.123 11.556c.012 1.529.106 3.056.28 4.576.28 0 .562 1.96 1.357 2.833 1.035 1.137 2.394 1.078 3.014 1.213 2.156.22 9.271.295 9.271.295s5.763-.032 9.536-.274c.507-.014 1.006-.129 1.469-.337.462-.208.879-.506 1.226-.876.814-.873 1.078-2.835 1.078-2.835.168-1.521.258-3.05.27-4.58V9.416c-.012-1.53-.102-3.059-.27-4.578l.047-.019zM18.316 10.203L10.942 14.17V6.193l7.374 4.01z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-8 pb-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} MG JW Automobile Pakistan Pvt. Ltd. All rights reserved.
        </div>
      </div>
    </div>
  )
}
