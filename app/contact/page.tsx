'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="py-16 px-5 md:px-10 bg-[#F7F7F7]">
        <div className="max-w-[1360px] mx-auto">
          <span className="text-[#ADADAD] text-sm font-medium tracking-widest">GET IN TOUCH</span>
          <h1 className="text-4xl md:text-6xl font-light mt-4 mb-2">Contact Us</h1>
          <p className="text-lg text-gray-500 font-light">We&apos;ll be happy to answer your questions.</p>
        </div>
      </section>

      <section className="py-16 px-5 md:px-10">
        <div className="max-w-[1360px] mx-auto grid md:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            <h2 className="text-2xl font-light mb-8">Send us a Message</h2>
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                <p className="text-2xl font-light text-green-700 mb-2">Thank you!</p>
                <p className="text-gray-600">Your message has been sent. Our team will get back to you soon.</p>
              </div>
            ) : (
              <div className="space-y-5">
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
                  <label className="block text-sm text-gray-500 mb-1">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-500 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition"
                    placeholder="+92 300 0000000"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-500 mb-1">Subject</label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition bg-white"
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
                  <label className="block text-sm text-gray-500 mb-1">Message *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  className="w-full h-12 bg-black text-white rounded-[58px] text-base font-light hover:bg-gray-800 transition"
                >
                  Send Message
                </button>
              </div>
            )}
          </div>

          {/* Info */}
          <div>
            <h2 className="text-2xl font-light mb-8">Contact Information</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-medium text-gray-500 tracking-widest mb-2">CUSTOMER SUPPORT</h3>
                <p className="text-lg font-light">0800-00011</p>
                <p className="text-sm text-gray-500">Mon–Sat, 9:00 AM – 6:00 PM</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500 tracking-widest mb-2">WHATSAPP</h3>
                <a href="https://wa.me/+923164411664" className="text-lg font-light hover:underline" target="_blank" rel="noopener noreferrer">
                  +92 316 4411664
                </a>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500 tracking-widest mb-2">EMAIL</h3>
                <a href="mailto:info@mgmotors.com.pk" className="text-lg font-light hover:underline">
                  info@mgmotors.com.pk
                </a>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500 tracking-widest mb-2">HEAD OFFICE</h3>
                <p className="text-lg font-light text-gray-700">
                  JW Automobile Pakistan Pvt. Ltd.<br />
                  Lahore, Pakistan
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500 tracking-widest mb-3">FOLLOW US</h3>
                <div className="flex gap-4">
                  {[
                    { href: 'https://www.facebook.com/MGMotorPak', label: 'Facebook' },
                    { href: 'https://www.instagram.com/mgmotorpakistan/', label: 'Instagram' },
                    { href: 'https://x.com/mgpakistan', label: 'Twitter / X' },
                    { href: 'https://www.youtube.com/channel/UClNny2ymTIZE1uT5Me7vfbA', label: 'YouTube' },
                  ].map(s => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-600 hover:text-black transition underline"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
