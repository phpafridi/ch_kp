'use client'

import { useState } from 'react'

const faqs = [
  {
    category: 'General',
    items: [
      { q: 'Where can I find an Chery dealer in Pakistan?', a: 'Chery has authorized dealerships across major cities including Karachi, Lahore, Islamabad, Rawalpindi, Faisalabad, Multan, Peshawar, and more. Use our Dealer Locator to find the nearest showroom.' },
      { q: 'What is Chery\'s warranty policy?', a: 'Chery offers a 5-year / 100,000 km warranty on all new vehicles — one of the best in its class. This covers manufacturing defects and includes roadside assistance.' },
      { q: 'How do I book a test drive?', a: 'You can book a test drive through our website, by calling 0336-9999884, or by visiting any authorized Chery dealership.' },
    ],
  },
  {
    category: 'Chery Tiggo 8 PHEV',
    items: [
      { q: 'What is the electric range of the Chery Tiggo 8 PHEV?', a: 'The Chery Tiggo 8 PHEV offers more than 50km of pure electric range on a full charge, making it ideal for daily city commutes without using any fuel.' },
      { q: 'How long does it take to charge the Chery Tiggo 8 PHEV?', a: 'The 16.6kWh battery can be charged via a standard 240V home socket in approximately 4–5 hours, or faster with an appropriate charger.' },
      { q: 'Does the Chery Tiggo 8 PHEV require premium fuel?', a: 'No, the petrol engine in the Chery Tiggo 8 PHEV runs on regular unleaded fuel (RON 91 or higher).' },
    ],
  },
  {
    category: 'Chery Tiggo 7 PHEV',
    items: [
      { q: 'What engine does the Chery Tiggo 7 PHEV have?', a: 'The Chery Tiggo 7 PHEV is equipped with a 2.5-litre turbo-diesel engine, engineered for heavy-duty performance and reliable towing capability.' },
      { q: 'What is the Smart Hatch feature?', a: 'The Smart Hatch Midgate connects the cabin to the tub, allowing loads up to 2.4m long and unlocking up to 1,600 litres of cargo space.' },
    ],
  },
  {
    category: 'Chery Tiggo 8',
    items: [
      { q: 'What is the range of the Chery Tiggo 8?', a: 'The Chery Tiggo 8 offers up to 333km CLTC range on a full charge, powered by MAGIC Battery technology with a 31.9kWh capacity.' },
      { q: 'How fast can the Chery Tiggo 8 charge?', a: 'With CCS2 DC fast charging, the Chery Tiggo 8 can charge from 10% to 80% in approximately 35 minutes.' },
    ],
  },
  {
    category: 'Service & Maintenance',
    items: [
      { q: 'How often should I service my Chery?', a: 'Chery recommends a service every 10,000 km or 12 months, whichever comes first. Refer to your owner\'s manual for model-specific intervals.' },
      { q: 'Can I use any workshop for servicing?', a: 'For warranty to remain valid, we recommend servicing at authorized Chery service centers. Our technicians are factory-trained and use genuine Chery parts.' },
      { q: 'How do I book a service appointment?', a: 'You can book a service via the Chery Care section of our website, by calling our helpline 0336-9999884, or WhatsApp at 0336-9999884.' },
    ],
  },
]

export default function FAQsPage() {
  const [open, setOpen] = useState<string | null>(null)

  const toggle = (key: string) => setOpen(open === key ? null : key)

  return (
    <div className="bg-white">
      <section className="py-16 px-5 md:px-10 bg-[#F7F7F7]">
        <div className="max-w-[1360px] mx-auto">
          <span className="text-[#ADADAD] text-sm font-medium tracking-widest">SUPPORT</span>
          <h1 className="text-4xl md:text-6xl font-light mt-4 mb-2">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-500 font-light">Find answers to our most common questions.</p>
        </div>
      </section>

      <section className="py-16 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto space-y-12">
          {faqs.map(section => (
            <div key={section.category}>
              <h2 className="text-2xl font-light mb-6 border-b border-gray-100 pb-3">{section.category}</h2>
              <div className="space-y-2">
                {section.items.map((item, i) => {
                  const key = `${section.category}-${i}`
                  const isOpen = open === key
                  return (
                    <div key={i} className="border border-gray-100 rounded-xl overflow-hidden">
                      <button
                        onClick={() => toggle(key)}
                        className="w-full flex justify-between items-center px-6 py-5 text-left hover:bg-gray-50 transition"
                      >
                        <span className="text-base font-light text-gray-900 pr-4">{item.q}</span>
                        <span className={`flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full border border-gray-300 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}>+</span>
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-5">
                          <p className="text-base font-light text-gray-600 leading-relaxed">{item.a}</p>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still have questions */}
      <section className="bg-[#F7F7F7] py-16 px-5 md:px-10 text-center">
        <h2 className="text-2xl md:text-3xl font-light mb-3">Still have questions?</h2>
        <p className="text-gray-500 mb-8">Our team is ready to help you.</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a href="tel:03369999884" className="h-12 px-8 bg-black text-white rounded-[58px] text-base font-light hover:bg-gray-800 transition flex items-center">
            Call 0336-9999884
          </a>
          <a href="https://wa.me/923369999884" target="_blank" rel="noopener noreferrer" className="h-12 px-8 border border-black text-black rounded-[58px] text-base font-light hover:bg-black hover:text-white transition flex items-center">
            WhatsApp Us
          </a>
        </div>
      </section>
    </div>
  )
}
