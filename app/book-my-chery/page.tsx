'use client'

import { useState } from 'react'

const models = ['Chery Tiggo 8 PHEV', 'Chery Tiggo 7 PHEV', 'Chery Tiggo 9 PHEV', 'Chery Tiggo 8']
const cities = ['Karachi', 'Lahore', 'Islamabad', 'Rawalpindi', 'Faisalabad', 'Multan', 'Peshawar', 'Quetta', 'Sialkot', 'Gujranwala']
const dealers = ['Chery KP — Main Ring Road, Peshawar', 'Chery KP — Main Ring Road, Peshawar', 'Chery KP — Main Ring Road, Peshawar', 'Chery KP — Main Ring Road, Peshawar', 'Chery KP — Main Ring Road, Peshawar', 'Chery KP — Main Ring Road, Peshawar', 'Chery KP — Main Ring Road, Peshawar', 'Chery KP — Main Ring Road, Peshawar', 'Chery KP — Main Ring Road, Peshawar', 'Chery KP — Main Ring Road, Peshawar']
const banks = ['Meezan Bank', 'HBL', 'MCB', 'Allied Bank', 'Bank Alfalah', 'UBL', 'Faysal Bank', 'Dubai Islamic Bank', 'Bank Islami', 'Self Finance']

export default function BookMyMGPage() {
  const [form, setForm] = useState({
    name: '', model: '', email: '', phone: '', landline: '',
    city: '', address: '', dealer: '', delivery: '', financing: '', bank: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <div className="bg-white">
      <section className="py-16 px-5 md:px-10 bg-[#F7F7F7]">
        <div className="max-w-[900px] mx-auto text-center">
          <span className="text-[#ADADAD] text-sm font-medium tracking-widest">RESERVE YOUR CHERY</span>
          <h1 className="text-4xl md:text-6xl font-light mt-4 mb-4">Book My Chery</h1>
          <p className="text-lg text-gray-500 font-light">Your new Chery awaits. Fill in the form and our team will be in touch.</p>
        </div>
      </section>

      <section className="py-16 px-5 md:px-10">
        <div className="max-w-[700px] mx-auto">
          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-12 text-center">
              <div className="text-5xl mb-4">🎉</div>
              <p className="text-2xl font-light text-green-700 mb-3">Booking Received!</p>
              <p className="text-gray-600">
                Thank you, <strong>{form.name}</strong>! Your booking for the <strong>{form.model}</strong> has been submitted.
                Our team will contact you shortly to proceed.
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              <div>
                <label className="block text-sm text-gray-500 mb-1">Full Name *</label>
                <input type="text" name="name" onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition" placeholder="Your full name" />
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1">Select a Model *</label>
                <select name="model" onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition bg-white">
                  <option value="">Choose your Chery</option>
                  {models.map(m => <option key={m} value={m}>{m}</option>)}
                </select>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-gray-500 mb-1">Email Address *</label>
                  <input type="email" name="email" onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm text-gray-500 mb-1">Phone Number *</label>
                  <input type="tel" name="phone" onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition" placeholder="+92 300 0000000" />
                </div>
                <div>
                  <label className="block text-sm text-gray-500 mb-1">Landline Number</label>
                  <input type="tel" name="landline" onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition" placeholder="021-XXXXXXX" />
                </div>
                <div>
                  <label className="block text-sm text-gray-500 mb-1">City *</label>
                  <select name="city" onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition bg-white">
                    <option value="">Select city</option>
                    {cities.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1">Address *</label>
                <input type="text" name="address" onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition" placeholder="Your delivery address" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-gray-500 mb-1">Select Dealer *</label>
                  <select name="dealer" onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition bg-white">
                    <option value="">Select dealer</option>
                    {dealers.map(d => <option key={d} value={d}>{d}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-500 mb-1">Tentative Delivery Date</label>
                  <input type="date" name="delivery" onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition" />
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1">Interested in Bank Financing?</label>
                <select name="financing" onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition bg-white">
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              {form.financing === 'yes' && (
                <div>
                  <label className="block text-sm text-gray-500 mb-1">Preferred Bank</label>
                  <select name="bank" onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition bg-white">
                    <option value="">Select bank</option>
                    {banks.map(b => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>
              )}
              <p className="text-xs text-gray-400">
                By submitting this form, you agree to our{' '}
                <a href="/privacy-policy" className="underline">terms & conditions</a>.
              </p>
              <button
                onClick={() => setSubmitted(true)}
                className="w-full h-14 bg-black text-white rounded-[58px] text-base font-light hover:bg-gray-800 transition"
              >
                Book My Chery
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
