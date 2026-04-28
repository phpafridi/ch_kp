'use client'

import { useState } from 'react'

const models = ['Chery Tiggo 8 PHEV', 'Chery Tiggo 7 PHEV', 'Chery Tiggo 9 PHEV']
const cities = ['Karachi', 'Lahore', 'Islamabad', 'Rawalpindi', 'Faisalabad', 'Multan', 'Peshawar', 'Quetta', 'Sialkot', 'Gujranwala']

export default function TestDrivePage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', model: '', city: '', date: '', notes: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault()
    if (!form.name || !form.phone || !form.model || !form.city) {
      setError('Please fill in all required fields.')
      return
    }
    setError('')
    setLoading(true)

    try {
      const res = await fetch('https://formsubmit.co/ajax/info@cherykp.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `Test Drive Request — ${form.model} (${form.city})`,
          _template: 'table',
          'Full Name': form.name,
          'Phone': form.phone,
          'Email': form.email || 'Not provided',
          'Model': form.model,
          'City': form.city,
          'Preferred Date': form.date || 'Not specified',
          'Notes': form.notes || 'None',
        }),
      })
      const data = await res.json()
      if (data.success === 'true' || data.success === true) {
        setSubmitted(true)
      } else {
        setError('Something went wrong. Please try again or call us directly.')
      }
    } catch {
      setError('Failed to send. Please try again or call 0336-9999884.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white">
      <section className="py-16 px-5 md:px-10 bg-[#F7F7F7]">
        <div className="max-w-[900px] mx-auto text-center">
          <span className="text-[#ADADAD] text-sm font-medium tracking-widest">EXPERIENCE CHERY</span>
          <h1 className="text-4xl md:text-6xl font-light mt-4 mb-4">Book a Test Drive</h1>
          <p className="text-lg text-gray-500 font-light">
            Get behind the wheel and feel the difference. Our team will be in touch to confirm your appointment.
          </p>
        </div>
      </section>

      <section className="py-16 px-5 md:px-10">
        <div className="max-w-[700px] mx-auto">
          {submitted ? (
            <div className="bg-[#F7F7F7] rounded-2xl p-12 text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <h3 className="text-2xl font-light mb-3">Request Sent!</h3>
              <p className="text-gray-500 font-light">
                Thank you, <strong className="text-black font-medium">{form.name}</strong>! Your test drive request for the <strong className="text-black font-medium">{form.model}</strong> has been sent to <strong className="text-black font-medium">info@cherykp.com</strong>. Our team will call you at <strong className="text-black font-medium">{form.phone}</strong> to confirm your appointment.
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Full Name *</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition"
                    placeholder="Your full name" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Phone Number *</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition"
                    placeholder="+92 300 0000000" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Email Address</label>
                <input type="email" name="email" value={form.email} onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition"
                  placeholder="your@email.com" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Select Model *</label>
                  <select name="model" value={form.model} onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition bg-white">
                    <option value="">Choose a model</option>
                    {models.map(m => <option key={m} value={m}>{m}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">City *</label>
                  <select name="city" value={form.city} onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition bg-white">
                    <option value="">Select your city</option>
                    {cities.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Preferred Date</label>
                <input type="date" name="date" value={form.date} onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition" />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Additional Notes</label>
                <textarea name="notes" value={form.notes} onChange={handleChange} rows={3}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition resize-none"
                  placeholder="Any specific requirements or questions?" />
              </div>

              {error && <p className="text-red-500 text-sm text-center">{error}</p>}

              <button onClick={handleSubmit} disabled={loading}
                className="w-full h-14 bg-black text-white rounded-xl text-base font-medium hover:bg-gray-800 transition disabled:opacity-60">
                {loading ? 'Sending...' : 'Book Test Drive →'}
              </button>
              <p className="text-xs text-gray-400 text-center">
                Your request will be sent to info@cherykp.com. We&apos;ll contact you within 24 hours.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
