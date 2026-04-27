'use client'

import { useState } from 'react'

export default function CareersPage() {
  const [form, setForm] = useState({
    fullName: '', cnic: '', phone: '', email: '', city: '',
    designation: '', company: '', experience: '', salary: '',
    allowances: '', expectedSalary: '', education: '', cv: null as File | null,
  })
  const [submitted, setSubmitted] = useState(false)
  const [agreed, setAgreed] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) setForm({ ...form, cv: e.target.files[0] })
  }

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="py-16 px-5 md:px-10 bg-[#F7F7F7]">
        <div className="max-w-[1360px] mx-auto">
          <span className="text-[#ADADAD] text-sm font-medium tracking-widest">JOIN US</span>
          <h1 className="text-4xl md:text-6xl font-light mt-4 mb-2">Careers at MG</h1>
          <p className="text-xl font-light text-gray-500">Apply Now and Become a Part of MG Motors Pakistan!</p>
        </div>
      </section>

      {/* Why MG */}
      <section className="py-16 px-5 md:px-10">
        <div className="max-w-[1360px] mx-auto">
          <h2 className="text-3xl font-light mb-10 text-center">Why Work at MG?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { emoji: '🚗', title: 'Fast-Growing Brand', desc: "Be part of Pakistan's fastest-growing automotive brand with global backing from SAIC Motor." },
              { emoji: '📈', title: 'Career Growth', desc: 'We invest in our people with training, development programs, and clear paths for advancement.' },
              { emoji: '🌍', title: 'Global Exposure', desc: 'Work with international standards, technologies, and a globally recognized automotive brand.' },
            ].map(v => (
              <div key={v.title} className="text-center p-6 bg-[#F7F7F7] rounded-xl">
                <div className="text-4xl mb-4">{v.emoji}</div>
                <h3 className="text-lg font-light mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application form */}
      <section className="py-8 px-5 md:px-10 pb-20">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-3xl font-light mb-8 text-center">Apply Now</h2>
          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-12 text-center">
              <p className="text-2xl font-light text-green-700 mb-2">Application Submitted!</p>
              <p className="text-gray-600">Thank you, <strong>{form.fullName}</strong>! We&apos;ve received your application. Our HR team will be in touch soon.</p>
            </div>
          ) : (
            <div className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  { name: 'fullName', label: 'Full Name *', type: 'text' },
                  { name: 'cnic', label: 'CNIC *', type: 'text', placeholder: '00000-0000000-0' },
                  { name: 'phone', label: 'Contact Number *', type: 'tel' },
                  { name: 'email', label: 'Email Address *', type: 'email' },
                  { name: 'city', label: 'Current City *', type: 'text' },
                  { name: 'designation', label: 'Current Designation', type: 'text' },
                  { name: 'company', label: 'Current Company', type: 'text' },
                  { name: 'experience', label: 'Total Experience *', type: 'text', placeholder: 'e.g. 3 years' },
                  { name: 'salary', label: 'Current Salary', type: 'text', placeholder: 'PKR' },
                  { name: 'allowances', label: 'Other Allowances', type: 'text', placeholder: 'PKR' },
                  { name: 'expectedSalary', label: 'Expected Salary', type: 'text', placeholder: 'PKR' },
                ].map(field => (
                  <div key={field.name}>
                    <label className="block text-sm text-gray-500 mb-1">{field.label}</label>
                    <input
                      type={field.type}
                      name={field.name}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition"
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-sm text-gray-500 mb-1">16 Years Education Completed? *</label>
                  <select
                    name="education"
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition bg-white"
                  >
                    <option value="">Select</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-500 mb-1">Upload CV * (doc, docx, pdf — max 2MB)</label>
                <input
                  type="file"
                  accept=".doc,.docx,.pdf"
                  onChange={handleFile}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition"
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="agree"
                  checked={agreed}
                  onChange={e => setAgreed(e.target.checked)}
                  className="mt-1"
                />
                <label htmlFor="agree" className="text-sm text-gray-600">
                  I agree to the processing of my personal data as described in the{' '}
                  <a href="/privacy-policy" className="underline">Privacy Policy</a>.
                </label>
              </div>

              <button
                onClick={() => { if (agreed) setSubmitted(true) }}
                disabled={!agreed}
                className={`w-full h-12 rounded-[58px] text-base font-light transition ${
                  agreed ? 'bg-black text-white hover:bg-gray-800' : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                Submit Application
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
