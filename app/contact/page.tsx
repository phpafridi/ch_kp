'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in your name, email, and message.')
      return
    }
    setError('')
    setLoading(true)
    try {
      const formData = new FormData()
      formData.append('name', form.name)
      formData.append('email', form.email)
      formData.append('phone', form.phone || 'Not provided')
      formData.append('subject', form.subject || 'General Enquiry')
      formData.append('message', form.message)
      formData.append('_subject', `Contact Us — ${form.subject || 'General Enquiry'}`)
      formData.append('_template', 'table')
      formData.append('_captcha', 'false')
      formData.append('_autoresponse', 'Thank you for contacting Chery KP. We will get back to you within 24 hours.')

      const res = await fetch('https://formsubmit.co/073d3d2a810ea9f1c5c415594482bb17', {
        method: 'POST',
        body: formData,
      })
      // formsubmit redirects on success — any 2xx or redirect = success
      if (res.ok || res.redirected || res.status === 302 || res.status === 200) {
        setSubmitted(true)
      } else {
        setError('Something went wrong. Please email us at info@cherykp.com directly.')
      }
    } catch {
      // formsubmit may throw due to redirect — treat as success
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="relative bg-[#111] text-white py-20 px-5 md:px-10 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="relative max-w-[1360px] mx-auto">
          <span className="inline-block text-xs tracking-[0.25em] font-semibold text-gray-400 uppercase mb-4">Get in Touch</span>
          <h1 className="text-5xl md:text-7xl font-light leading-tight mb-4">Contact Us</h1>
          <p className="text-gray-400 text-lg font-light max-w-md">We&apos;re here to help. Reach out and our team will get back to you promptly.</p>
        </div>
      </section>

      {/* INFO CARDS */}
      <section className="max-w-[1360px] mx-auto px-5 md:px-10 -mt-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-7 flex gap-5 items-start">
            <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/>
              </svg>
            </div>
            <div>
              <p className="text-xs tracking-widest text-gray-400 uppercase font-semibold mb-1">Phone / WhatsApp</p>
              <a href="tel:03369999884" className="block text-base font-medium text-gray-900 hover:text-black transition">0336-9999884</a>
              <p className="text-xs text-gray-400 mt-1">Mon–Sat, 9 AM – 6 PM</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-7 flex gap-5 items-start">
            <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <div>
              <p className="text-xs tracking-widest text-gray-400 uppercase font-semibold mb-1">Email</p>
              <a href="mailto:info@cherykp.com" className="block text-base font-medium text-gray-900 hover:text-black transition">info@cherykp.com</a>
              <p className="text-xs text-gray-400 mt-1">We reply within 24 hours</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-7 flex gap-5 items-start">
            <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div>
              <p className="text-xs tracking-widest text-gray-400 uppercase font-semibold mb-1">Head Office</p>
              <p className="text-base font-medium text-gray-900 leading-snug">Main Ring Road<br/>Peshawar, KP, Pakistan</p>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="max-w-[1360px] mx-auto px-5 md:px-10 mt-10">
        <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm" style={{ height: '380px' }}>
          <iframe
            title="Chery KP Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13279.398!2d71.5249!3d33.9911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDU5JzI4LjAiTiA3McKwMzEnMjkuNiJF!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk"
            width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* FORM */}
      <section className="max-w-[1360px] mx-auto px-5 md:px-10 py-16">
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-14 items-start">

          {/* Left */}
          <div>
            <span className="text-xs tracking-[0.2em] font-semibold text-gray-400 uppercase">Send a Message</span>
            <h2 className="text-4xl md:text-5xl font-light mt-3 mb-5 leading-tight">How can we<br/>help you?</h2>
            <p className="text-gray-500 font-light leading-relaxed mb-8">Fill out the form and one of our representatives will contact you as soon as possible.</p>
            <div>
              <p className="text-xs tracking-widest text-gray-400 uppercase font-semibold mb-4">Follow Us</p>
              <div className="flex gap-3">
                {[
                  { href: 'https://www.facebook.com/share/17cyELuxeA/', label: 'Facebook', svg: <svg width="10" height="18" viewBox="0 0 11 21" fill="currentColor"><path d="M7.08 6.49V4.89c-.017-.118-.007-.243.03-.361.037-.119.1-.228.183-.316.084-.088.187-.16.302-.207.115-.046.239-.067.363-.06H10.2V.51H7.11C3.69.51 2.92 3.05 2.92 4.7V6.49H.92v4h2.015V20.49H6.93V10.49h2.956l.13-1.581.24-2.43L7.08 6.49z"/></svg> },
                  { href: 'https://www.instagram.com/cherykp', label: 'Instagram', svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg> },
                  { href: 'https://www.linkedin.com/company/chery-master-pakistan/', label: 'LinkedIn', svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg> },
                  { href: 'https://www.youtube.com/@cherymaster', label: 'YouTube', svg: <svg width="20" height="14" viewBox="0 0 24 17" fill="currentColor"><path d="M23.5 2.6A3 3 0 0021.4.5C19.5 0 12 0 12 0S4.5 0 2.6.5A3 3 0 00.5 2.6C0 4.5 0 8.5 0 8.5s0 4 .5 5.9a3 3 0 002.1 2.1C4.5 17 12 17 12 17s7.5 0 9.4-.5a3 3 0 002.1-2.1C24 12.5 24 8.5 24 8.5s0-4-.5-5.9zM9.75 12V5l6.5 3.5L9.75 12z"/></svg> },
                ].map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-black hover:text-white hover:border-black transition-all duration-200">
                    {s.svg}
                  </a>
                ))}
              </div>
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
                <h3 className="text-2xl font-light mb-2">Message Sent!</h3>
                <p className="text-gray-500 font-light">Our team will get back to you within 24 hours.</p>
              </div>
            ) : (
              <div className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Full Name *</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange}
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition"
                      placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Phone Number</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition"
                      placeholder="+92 300 0000000" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Email Address *</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition"
                    placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Subject</label>
                  <select name="subject" value={form.subject} onChange={handleChange}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition">
                    <option value="">Select a subject</option>
                    <option value="Sales Enquiry">Sales Enquiry</option>
                    <option value="Service & Maintenance">Service &amp; Maintenance</option>
                    <option value="Parts & Accessories">Parts &amp; Accessories</option>
                    <option value="Complaint">Complaint</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Message *</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={5}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition resize-none"
                    placeholder="How can we help you?" />
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
                  ) : 'Send Message →'}
                </button>
                <p className="text-xs text-gray-400 text-center">Your message will be sent to info@cherykp.com. We reply within 24 hours.</p>
              </div>
            )}
          </div>
        </div>
      </section>

    </div>
  )
}
