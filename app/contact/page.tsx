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

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in your name, email, and message.')
      return
    }
    setError('')
    setLoading(true)
    try {
      const res = await fetch('https://formsubmit.co/ajax/info@cherykp.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `Contact Us — ${form.subject || 'General Enquiry'}`,
          _template: 'table',
          'Full Name': form.name,
          'Email': form.email,
          'Phone': form.phone || 'Not provided',
          'Subject': form.subject || 'Not specified',
          'Message': form.message,
        }),
      })
      const data = await res.json()
      if (data.success === 'true' || data.success === true) {
        setSubmitted(true)
      } else {
        setError('Something went wrong. Please try again or email us directly.')
      }
    } catch {
      setError('Failed to send. Please email info@cherykp.com directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white">

      {/* ── HERO BANNER ── */}
      <section className="relative bg-[#111] text-white py-20 px-5 md:px-10 overflow-hidden">
        {/* subtle grid texture */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="relative max-w-[1360px] mx-auto">
          <span className="inline-block text-xs tracking-[0.25em] font-semibold text-gray-400 uppercase mb-4">Get in Touch</span>
          <h1 className="text-5xl md:text-7xl font-light leading-tight mb-4">Contact Us</h1>
          <p className="text-gray-400 text-lg font-light max-w-md">We&apos;re here to help. Reach out and our team will get back to you promptly.</p>
        </div>
      </section>

      {/* ── INFO CARDS ── */}
      <section className="max-w-[1360px] mx-auto px-5 md:px-10 -mt-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

          {/* Phone */}
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

          {/* Email */}
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

          {/* Location */}
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

      {/* ── MAP ── */}
      <section className="max-w-[1360px] mx-auto px-5 md:px-10 mt-10">
        <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm" style={{ height: '380px' }}>
          <iframe
            title="Chery KP Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13279.398!2d71.5249!3d33.9911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDU5JzI4LjAiTiA3McKwMzEnMjkuNiJF!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* ── FORM ── */}
      <section className="max-w-[1360px] mx-auto px-5 md:px-10 py-16">
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-14 items-start">

          {/* Left — copy */}
          <div>
            <span className="text-xs tracking-[0.2em] font-semibold text-gray-400 uppercase">Send a Message</span>
            <h2 className="text-4xl md:text-5xl font-light mt-3 mb-5 leading-tight">How can we<br/>help you?</h2>
            <p className="text-gray-500 font-light leading-relaxed mb-8">
              Fill out the form and one of our representatives will contact you as soon as possible.
            </p>

            {/* Social links */}
            <div>
              <p className="text-xs tracking-widest text-gray-400 uppercase font-semibold mb-4">Follow Us</p>
              <div className="flex gap-3">
                <a href="https://www.facebook.com/share/17cyELuxeA/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-black hover:text-white hover:border-black transition-all duration-200">
                  <svg width="10" height="18" viewBox="0 0 11 21" fill="currentColor"><path d="M7.08 6.49V4.89c-.017-.118-.007-.243.03-.361.037-.119.1-.228.183-.316.084-.088.187-.16.302-.207.115-.046.239-.067.363-.06H10.2V.51H7.11C3.69.51 2.92 3.05 2.92 4.7V6.49H.92v4h2.015V20.49H6.93V10.49h2.956l.13-1.581.24-2.43L7.08 6.49z"/></svg>
                </a>
                <a href="https://www.instagram.com/cherykp" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-black hover:text-white hover:border-black transition-all duration-200">
                  <svg width="18" height="18" viewBox="0 0 21 21" fill="currentColor"><path d="M14.75.5C16.2.5 17.59 1.08 18.62 2.1c1.03 1.03 1.6 2.42 1.6 3.88v8.97c0 1.45-.57 2.84-1.6 3.87-1.03 1.03-2.42 1.6-3.87 1.6H5.75c-1.45 0-2.84-.57-3.87-1.6C.85 17.79.27 16.4.27 14.95V5.98c0-1.45.58-2.84 1.61-3.87C2.91 1.08 4.3.5 5.75.5h8.96.04zm-4.43 4.85c-1.02-.009-2.02.284-2.87.842-.85.558-1.51 1.357-1.91 2.294-.4.937-.51 1.972-.3 2.972.19 1.001.672 1.923 1.386 2.65.714.727 1.627 1.225 2.625 1.433.997.207 2.034.114 2.978-.267.945-.382 1.755-1.035 2.328-1.877.574-.841.884-1.835.893-2.853C15.432 9.358 14.9 8.044 13.943 7.07 12.987 6.097 11.683 5.542 10.317 5.527zM10.317 7.3c.665.01 1.311.214 1.86.572.547.357.974.866 1.224 1.462.25.596.313 1.251.181 1.883-.131.632-.45 1.21-.914 1.66-.464.45-1.063.77-1.714.902-.651.132-1.326.069-1.942-.183-.615-.252-1.143-.683-1.514-1.235-.37-.552-.566-1.2-.559-1.86C6.94 9.18 7.456 7.867 8.414 6.893 9.372 5.919 10.668 5.364 11.317 5.35zm5.37-1.458c-.343.002-.672.138-.913.375-.122.12-.218.26-.283.414-.065.154-.099.32-.099.49 0 .17.034.337.099.49.065.157.161.298.283.418.241.244.57.38.913.382.326-.027.631-.177.852-.418.222-.24.345-.556.345-.882 0-.327-.123-.643-.345-.882-.221-.24-.526-.39-.852-.418z"/></svg>
                </a>
                <a href="https://www.linkedin.com/company/chery-master-pakistan/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-black hover:text-white hover:border-black transition-all duration-200">
                  <svg width="18" height="18" viewBox="0 0 21 21" fill="currentColor"><path d="M0.27 10.71V20.5H4.93V7.16H0.27v3.54zM20.16 11.26c-.31-2.53-1.46-4.1-4.87-4.1-2 0-3.35.73-3.92 1.79h-.06V7.16H7.6V20.5h3.89v-6.61c0-1.74.35-3.42 2.48-3.42 2.13 0 2.3 1.99 2.3 3.55V20.5h4V13.17c0-.64-.036-1.28-.11-1.91zM2.6 0.5C2.14 0.5 1.69.637 1.31.893.924 1.149.625 1.513.449 1.939.272 2.365.226 2.834.316 3.286.406 3.739.628 4.154.954 4.48c.326.326.741.549 1.194.639.452.09.921.044 1.347-.133.426-.177.79-.476 1.046-.86.257-.384.393-.834.393-1.295 0-.618-.245-1.211-.682-1.648C3.815.745 3.222.5 2.6.5z"/></svg>
                </a>
                <a href="https://www.youtube.com/@cherymaster" target="_blank" rel="noopener noreferrer" aria-label="YouTube"
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-black hover:text-white hover:border-black transition-all duration-200">
                  <svg width="22" height="16" viewBox="0 0 28 21" fill="currentColor"><path d="M27.12 4.81C27.12 4.81 26.84 2.85 26.05 1.99 25.69 1.62 25.26 1.32 24.79 1.11 24.32.905 23.82.793 23.3.782 19.53.502 13.78.502 13.78.502h-.032S8.05.502 4.23.782c-.513.013-1.018.126-1.487.334-.469.208-.892.507-1.246.879C.662 2.852.403 4.814.403 4.814.23 6.336.136 7.867.123 9.4L.123 11.556c.012 1.529.106 3.056.28 4.576.28 0 .562 1.96 1.357 2.833 1.035 1.137 2.394 1.078 3.014 1.213 2.156.22 9.271.295 9.271.295s5.763-.032 9.536-.274c.507-.014 1.006-.129 1.469-.337.462-.208.879-.506 1.226-.876.814-.873 1.078-2.835 1.078-2.835.168-1.521.258-3.05.27-4.58V9.416c-.012-1.53-.102-3.059-.27-4.578l.047-.019zM18.316 10.203L10.942 14.17V6.193l7.374 4.01z"/></svg>
                </a>
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
                    <input
                      type="text" name="name" value={form.name} onChange={handleChange}
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Phone Number</label>
                    <input
                      type="tel" name="phone" value={form.phone} onChange={handleChange}
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition"
                      placeholder="+92 300 0000000"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Email Address *</label>
                  <input
                    type="email" name="email" value={form.email} onChange={handleChange}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Subject</label>
                  <select
                    name="subject" value={form.subject} onChange={handleChange}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition"
                  >
                    <option value="">Select a subject</option>
                    <option value="sales">Sales Enquiry</option>
                    <option value="service">Service & Maintenance</option>
                    <option value="parts">Parts & Accessories</option>
                    <option value="complaint">Complaint</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Message *</label>
                  <textarea
                    name="message" value={form.message} onChange={handleChange} rows={5}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="w-full h-13 bg-black text-white rounded-xl py-4 text-sm font-semibold tracking-wide hover:bg-gray-800 transition-colors duration-200 disabled:opacity-60"
                >
                  {loading ? 'Sending...' : 'Send Message →'}
                </button>
                {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                <p className="text-xs text-gray-400 text-center">
                  Your message will be sent to info@cherykp.com. We reply within 24 hours.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

    </div>
  )
}
