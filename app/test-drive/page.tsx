'use client'

import { useState } from 'react'

const models = ['MG HS PHEV', 'MG U9', 'MG Cyberster', 'Binguo EV']
const cities = ['Karachi', 'Lahore', 'Islamabad', 'Rawalpindi', 'Faisalabad', 'Multan', 'Peshawar', 'Quetta', 'Sialkot', 'Gujranwala']

export default function TestDrivePage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', model: '', city: '', date: '', notes: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="bg-white">
      <section className="py-16 px-5 md:px-10 bg-[#F7F7F7]">
        <div className="max-w-[900px] mx-auto text-center">
          <span className="text-[#ADADAD] text-sm font-medium tracking-widest">EXPERIENCE MG</span>
          <h1 className="text-4xl md:text-6xl font-light mt-4 mb-4">Book a Test Drive</h1>
          <p className="text-lg text-gray-500 font-light">
            Get behind the wheel and feel the difference. Our team will be in touch to confirm your appointment.
          </p>
        </div>
      </section>

      <section className="py-16 px-5 md:px-10">
        <div className="max-w-[700px] mx-auto">
          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-12 text-center">
              <div className="text-5xl mb-4">✓</div>
              <p className="text-2xl font-light text-green-700 mb-3">Booking Confirmed!</p>
              <p className="text-gray-600">
                Thank you, <strong>{form.name}</strong>! Your test drive request for the <strong>{form.model}</strong> has been received.
                Our team will call you at {form.phone} to confirm your appointment.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-500 mb-1">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-500 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition"
                    placeholder="+92 300 0000000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-500 mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition"
                  placeholder="your@email.com"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-500 mb-1">Select Model *</label>
                  <select
                    name="model"
                    value={form.model}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition bg-white"
                  >
                    <option value="">Choose a model</option>
                    {models.map(m => <option key={m} value={m}>{m}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-500 mb-1">City *</label>
                  <select
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition bg-white"
                  >
                    <option value="">Select your city</option>
                    {cities.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-500 mb-1">Preferred Date</label>
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-500 mb-1">Additional Notes</label>
                <textarea
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                  rows={3}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition resize-none"
                  placeholder="Any specific requirements or questions?"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full h-14 bg-black text-white rounded-[58px] text-base font-light hover:bg-gray-800 transition"
              >
                Book Test Drive
              </button>
              <p className="text-xs text-gray-400 text-center">
                By submitting this form you agree to our Privacy Policy. We&apos;ll contact you within 24 hours.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
