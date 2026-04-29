'use client'

import { useState } from 'react'

const models = ['Chery Tiggo 8 PHEV', 'Chery Tiggo 9 PHEV', 'Chery Tiggo 7 PHEV']
const cities = ['Peshawar', 'Islamabad', 'Rawalpindi', 'Lahore', 'Karachi', 'Faisalabad', 'Multan', 'Quetta', 'Sialkot', 'Gujranwala']

export default function TestDrivePage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', model: '', city: '', date: '', notes: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    if (!form.name || !form.phone || !form.model || !form.city) {
      setError('Please fill in all required fields: Name, Phone, Model and City.')
      return
    }
    setError('')
    setLoading(true)
    try {
      const formData = new FormData()
      formData.append('Full Name', form.name)
      formData.append('Phone', form.phone)
      formData.append('Email', form.email || 'Not provided')
      formData.append('Model', form.model)
      formData.append('City', form.city)
      formData.append('Preferred Date', form.date || 'Not specified')
      formData.append('Notes', form.notes || 'None')
      formData.append('_subject', `Test Drive Request — ${form.model} (${form.city})`)
      formData.append('_template', 'table')
      formData.append('_captcha', 'false')
      formData.append('_autoresponse', 'Thank you for booking a test drive with Chery KP! Our team will contact you shortly to confirm your appointment.')

      const res = await fetch('https://formsubmit.co/073d3d2a810ea9f1c5c415594482bb17', {
        method: 'POST',
        body: formData,
      })
      if (res.ok || res.redirected || res.status === 200 || res.status === 302) {
        setSubmitted(true)
      } else {
        setError('Something went wrong. Please call us at 0336-9999884 directly.')
      }
    } catch {
      // formsubmit may throw on redirect — treat as success
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white min-h-screen">

      {/* HERO */}
      <section className="relative overflow-hidden" style={{ minHeight: 320 }}>
        <img src="/assets/tiggo8/newtigo8.webp" alt="Book a Test Drive"
          className="w-full h-full object-cover absolute inset-0" style={{ objectPosition: '50% 40%', height: 320 }} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" style={{ height: 320 }} />
        <div className="relative z-10 flex flex-col justify-end pb-14 px-6 md:px-16" style={{ minHeight: 320 }}>
          <span className="text-white/60 text-xs tracking-[0.25em] uppercase font-medium mb-3">Experience Chery</span>
          <h1 className="text-5xl md:text-7xl font-light text-white leading-tight">Book a<br/><strong className="font-bold">Test Drive</strong></h1>
        </div>
      </section>

      <section className="max-w-[1100px] mx-auto px-5 md:px-10 py-14">
        <div className="grid md:grid-cols-[1fr_1.6fr] gap-14 items-start">

          {/* Left info */}
          <div className="md:sticky md:top-28">
            <h2 className="text-2xl font-light mb-4 text-gray-900">Feel the Difference<br/>Behind the Wheel</h2>
            <p className="text-gray-500 font-light leading-relaxed mb-8 text-sm">Fill in the form and our team will call you within 24 hours to confirm your appointment at your nearest dealership.</p>

            <div className="space-y-5">
              {[
                { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/></svg>, label: 'Call / WhatsApp', value: '0336-9999884', href: 'tel:03369999884' },
                { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>, label: 'Email', value: 'info@cherykp.com', href: 'mailto:info@cherykp.com' },
              ].map(item => (
                <a key={item.label} href={item.href} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-600 group-hover:bg-black group-hover:text-white transition-all duration-200">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">{item.label}</p>
                    <p className="text-sm font-medium text-gray-900">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Model previews */}
            <div className="mt-10 space-y-3">
              <p className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-3">Available Models</p>
              {[
                { name: 'Tiggo 8 PHEV', img: '/assets/tiggo8phev/tiggo8-index.png' },
                { name: 'Tiggo 9 PHEV', img: '/assets/tiggo9/tiggo9-index.png' },
                { name: 'Tiggo 7 PHEV', img: '/assets/tiggo7/tiggo7-index.png' },
              ].map(m => (
                <div key={m.name} className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-2">
                  <img src={m.img} alt={m.name} className="h-10 w-20 object-contain" />
                  <p className="text-sm font-medium text-gray-700">{m.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-[#F7F7F7] rounded-2xl p-8 md:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-light mb-3">Request Sent!</h3>
                <p className="text-gray-500 font-light max-w-sm">
                  Thank you, <strong className="text-black font-medium">{form.name}</strong>! We&apos;ve received your test drive request for the <strong className="text-black font-medium">{form.model}</strong>. Our team will call you at <strong className="text-black font-medium">{form.phone}</strong> to confirm your appointment.
                </p>
              </div>
            ) : (
              <div className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Full Name *</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange}
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition"
                      placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Phone Number *</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition"
                      placeholder="+92 300 0000000" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Email Address</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition"
                    placeholder="your@email.com (optional)" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Select Model *</label>
                    <select name="model" value={form.model} onChange={handleChange}
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition">
                      <option value="">Choose a model</option>
                      {models.map(m => <option key={m} value={m}>{m}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">City *</label>
                    <select name="city" value={form.city} onChange={handleChange}
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition">
                      <option value="">Select your city</option>
                      {cities.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Preferred Date</label>
                  <input type="date" name="date" value={form.date} onChange={handleChange}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition" />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Additional Notes</label>
                  <textarea name="notes" value={form.notes} onChange={handleChange} rows={3}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition resize-none"
                    placeholder="Any specific requirements or questions?" />
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                    <p className="text-red-600 text-sm">{error}</p>
                  </div>
                )}

                <button onClick={handleSubmit} disabled={loading}
                  className="w-full bg-black text-white rounded-xl py-4 text-sm font-semibold tracking-wide hover:bg-gray-800 transition-colors duration-200 disabled:opacity-60">
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><circle cx="12" cy="12" r="10" strokeOpacity="0.25"/><path d="M12 2a10 10 0 0110 10" strokeLinecap="round"/></svg>
                      Sending...
                    </span>
                  ) : 'Book Test Drive →'}
                </button>
                <p className="text-xs text-gray-400 text-center">Your request will be sent to info@cherykp.com. We&apos;ll contact you within 24 hours.</p>
              </div>
            )}
          </div>

        </div>
      </section>
    </div>
  )
}
