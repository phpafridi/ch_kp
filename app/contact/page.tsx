'use client'

import { useState } from 'react'

const socials = [
  {
    label: 'Facebook', href: 'https://www.facebook.com/share/17cyELuxeA/',
    svg: <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
  },
  {
    label: 'Instagram', href: 'https://www.instagram.com/cherykp',
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
  },
  {
    label: 'LinkedIn', href: 'https://www.linkedin.com/company/chery-master-pakistan/',
    svg: <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>,
  },
  {
    label: 'YouTube', href: 'https://www.youtube.com/@cherymaster',
    svg: <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg>,
  },
]

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
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setSubmitted(true)
      } else {
        setError(data.error || 'Something went wrong. Please email us at info@cherykp.com directly.')
      }
    } catch {
      setError('Network error. Please email info@cherykp.com or call 0336-9999884.')
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
      <section className="max-w-[1360px] mx-auto px-5 md:px-10 mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex gap-4 items-start">
            <div className="w-11 h-11 rounded-xl bg-black flex items-center justify-center flex-shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/>
              </svg>
            </div>
            <div>
              <p className="text-[10px] tracking-widest text-gray-400 uppercase font-semibold mb-1">Phone / WhatsApp</p>
              <a href="tel:03369999884" className="block text-sm font-medium text-gray-900 hover:text-black transition">0336-9999884</a>
              <p className="text-xs text-gray-400 mt-0.5">Mon–Sat, 9 AM – 6 PM</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex gap-4 items-start">
            <div className="w-11 h-11 rounded-xl bg-black flex items-center justify-center flex-shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <div>
              <p className="text-[10px] tracking-widest text-gray-400 uppercase font-semibold mb-1">Email</p>
              <a href="mailto:info@cherykp.com" className="block text-sm font-medium text-gray-900 hover:text-black transition">info@cherykp.com</a>
              <p className="text-xs text-gray-400 mt-0.5">We reply within 24 hours</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex gap-4 items-start">
            <div className="w-11 h-11 rounded-xl bg-black flex items-center justify-center flex-shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div>
              <p className="text-[10px] tracking-widest text-gray-400 uppercase font-semibold mb-1">Head Office</p>
              <p className="text-sm font-medium text-gray-900 leading-snug">Main Ring Road, Peshawar</p>
              <p className="text-xs text-gray-400 mt-0.5">KP, Pakistan</p>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="max-w-[1360px] mx-auto px-5 md:px-10 mt-8">
        <div className="rounded-2xl overflow-hidden border border-gray-200" style={{ height: 320 }}>
          <iframe title="Chery KP Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13279.398!2d71.5249!3d33.9911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDU5JzI4LjAiTiA3McKwMzEnMjkuNiJF!5e0!3m2!1sen!2spk!4v1700000000000"
            width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" />
        </div>
      </section>

      {/* FORM */}
      <section className="max-w-[1360px] mx-auto px-5 md:px-10 py-16">
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-14 items-start">

          {/* Left */}
          <div>
            <span className="text-xs tracking-[0.2em] font-semibold text-gray-400 uppercase">Send a Message</span>
            <h2 className="text-4xl md:text-5xl font-light mt-3 mb-5 leading-tight">How can we<br/>help you?</h2>
            <p className="text-gray-500 font-light leading-relaxed mb-8 text-sm">Fill out the form and one of our representatives will contact you as soon as possible.</p>
            <div>
              <p className="text-xs tracking-widest text-gray-400 uppercase font-semibold mb-4">Follow Us</p>
              <div className="flex gap-3">
                {socials.map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                    className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-black hover:text-white hover:border-black transition-all duration-200">
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
                <p className="text-gray-500 font-light text-sm">Our team will get back to you within 24 hours.</p>
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
                  className="w-full bg-black text-white rounded-xl py-4 text-sm font-semibold tracking-wide hover:bg-gray-900 transition-colors disabled:opacity-60">
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" strokeOpacity="0.25"/>
                        <path d="M12 2a10 10 0 0110 10" strokeLinecap="round"/>
                      </svg>
                      Sending...
                    </span>
                  ) : 'Send Message →'}
                </button>
                <p className="text-xs text-gray-400 text-center">Sent to info@cherykp.com · We reply within 24 hours</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
