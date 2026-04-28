import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Chery KP - Ideal Solution for Urban Mobility',
  description: 'Chery KP redefines urban mobility with smart, stylish, and fuel-efficient SUVs. Combining British heritage with modern innovation.',
  icons: { icon: '/favicon.ico', apple: '/assets/chery-logo.png' },
    openGraph: {
    title: 'Chery KP - Ideal Solution for Urban Mobility',
    description: 'Explore Chery\'s fifth-generation PHEV hybrid SUVs in Pakistan.',
    url: 'https://cherykp.com',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@cherykp',
    title: 'Chery KP - Premium Cars',
    description: 'Explore premium SUVs and sedans at Chery KP.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans bg-[#F7F7F7]">
        <Header />
        <main>{children}</main>
        <Footer />
        {/* WhatsApp floating button */}
        <a
          href="https://wa.me/923369999884"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          style={{
            position: 'fixed', bottom: '20px', right: '20px',
            backgroundColor: '#25D366', borderRadius: '50%',
            width: '60px', height: '60px',
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            boxShadow: '0 2px 10px rgba(0,0,0,0.3)', zIndex: 1000,
          }}
        >
          <svg width="30" height="30" viewBox="0 0 30 30" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 2C8.373 2 3 7.373 3 14c0 2.128.558 4.126 1.535 5.858L3 28l8.385-1.502A11.94 11.94 0 0015 27c6.627 0 12-5.373 12-12S21.627 2 15 2zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10c-1.8 0-3.487-.48-4.95-1.32l-.356-.21-4.98.892.946-4.832-.23-.372A9.96 9.96 0 015 14c0-5.514 4.486-10 10-10zm-3.5 5.5c-.2 0-.52.075-.79.375S9 11.1 9 12.2c0 1.1.735 2.163.835 2.313.1.15 1.41 2.238 3.48 3.088 1.72.71 2.07.57 2.443.535.372-.035 1.2-.49 1.37-.965.17-.475.17-.88.12-.965-.05-.085-.19-.135-.4-.235s-1.24-.61-1.433-.68c-.193-.07-.334-.105-.474.105-.14.21-.54.68-.663.82-.122.14-.245.158-.455.053-.21-.105-.886-.326-1.688-1.04-.624-.556-1.045-1.243-1.167-1.453-.122-.21-.013-.323.091-.427.094-.093.21-.243.315-.365.105-.12.14-.21.21-.35.07-.14.035-.262-.017-.367-.053-.105-.474-1.152-.65-1.577-.17-.413-.342-.356-.474-.362-.122-.005-.262-.008-.402-.008z"/>
          </svg>
        </a>
      </body>
    </html>
  )
}
