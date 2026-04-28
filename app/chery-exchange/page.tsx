'use client'

import { useState } from 'react'

const benefits = [
  { icon: '🔍', title: 'Quick Inspection', desc: 'Fast and transparent evaluation of your current vehicle by certified Chery appraisers.' },
  { icon: '💰', title: 'Best Market Value', desc: 'Get the fairest market value for your used vehicle through our transparent assessment process.' },
  { icon: '✅', title: 'Zero Hassle', desc: 'We handle all the paperwork, transfer, and documentation so you can focus on enjoying your new Chery.' },
  { icon: '🛡️', title: '6-Month Warranty', desc: 'Buy Chery certified used vehicles with a 6-month / 10,000 km warranty (whichever comes first).' },
]

export default function MGExchangePage() {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', city: '', dealer: '', comments: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/assets/tiggo7/tiggo7-index.png`}
          alt="Chery Exchange"
          className="w-full h-[280px] md:h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-5">
            <h1 className="text-4xl md:text-7xl font-light mb-4">Chery Exchange</h1>
            <p className="text-lg md:text-2xl text-white/80 max-w-2xl">Chery Exchange — Certified Used Vehicle Program</p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-5 md:px-10">
        <div className="max-w-[1360px] mx-auto">
          <span className="text-[#ADADAD] text-sm font-medium tracking-widest">HOW IT WORKS</span>
          <h2 className="text-3xl md:text-5xl font-light mt-4 mb-4">Upgrade with MG</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 mb-10">
            <div className="bg-[#F7F7F7] rounded-xl p-6">
              <h3 className="text-lg font-medium mb-2">Trade-In Your Vehicle</h3>
              <p className="text-gray-600 font-light">Exchange your current vehicle at a fair value at Chery dealerships with exciting offers and drive away in a new MG.</p>
            </div>
            <div className="bg-[#F7F7F7] rounded-xl p-6">
              <h3 className="text-lg font-medium mb-2">Buy Certified Used</h3>
              <p className="text-gray-600 font-light">Buy Chery certified used vehicle with 6 months / 10,000 km warranty (whichever comes first).</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-[#F7F7F7] py-16 px-5 md:px-10">
        <div className="max-w-[1360px] mx-auto">
          <span className="text-[#ADADAD] text-sm font-medium tracking-widest">EXCLUSIVE BENEFITS</span>
          <h2 className="text-3xl font-light mt-4 mb-10">Why Choose Chery Exchange?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map(b => (
              <div key={b.title} className="bg-white rounded-xl p-6 text-center">
                <div className="text-4xl mb-4">{b.icon}</div>
                <h3 className="text-lg font-light mb-2">{b.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry form */}
      <section className="py-16 px-5 md:px-10">
        <div className="max-w-[700px] mx-auto">
          <h2 className="text-3xl font-light mb-8 text-center">Get in Touch</h2>
          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-12 text-center">
              <p className="text-2xl font-light text-green-700 mb-2">Thank you!</p>
              <p className="text-gray-600">We&apos;ve received your enquiry. Our team will contact you within 24 hours.</p>
            </div>
          ) : (
            <div className="space-y-5">
              {[
                { name: 'name', label: 'Full Name *', type: 'text', placeholder: 'Your full name' },
                { name: 'company', label: 'Company Name', type: 'text', placeholder: 'Optional' },
                { name: 'email', label: 'Email Address *', type: 'email', placeholder: 'your@email.com' },
                { name: 'phone', label: 'Phone Number *', type: 'tel', placeholder: '+92 300 0000000' },
                { name: 'city', label: 'City *', type: 'text', placeholder: 'Your city' },
                { name: 'dealer', label: 'Dealer Address *', type: 'text', placeholder: 'Preferred dealer location' },
              ].map(field => (
                <div key={field.name}>
                  <label className="block text-sm text-gray-500 mb-1">{field.label}</label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={form[field.name as keyof typeof form]}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition"
                    placeholder={field.placeholder}
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm text-gray-500 mb-1">Comments</label>
                <textarea
                  name="comments"
                  value={form.comments}
                  onChange={handleChange}
                  rows={4}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition resize-none"
                  placeholder="Tell us about your current vehicle..."
                />
              </div>
              <p className="text-xs text-gray-400">
                By submitting this form, you agree to our{' '}
                <a href="/privacy-policy" className="underline">terms & conditions</a>.
              </p>
              <button
                onClick={() => setSubmitted(true)}
                className="w-full h-12 bg-black text-white rounded-[58px] text-base font-light hover:bg-gray-800 transition"
              >
                Send Enquiry
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
