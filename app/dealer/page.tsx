'use client'
import { useState } from 'react'

const provinces = ['Punjab', 'Sindh', 'KPK', 'Balochistan', 'AJK', 'Gilgit-Baltistan']
const cities = ['Karachi', 'Lahore', 'Islamabad', 'Rawalpindi', 'Faisalabad', 'Multan', 'Peshawar', 'Quetta', 'Sialkot', 'Gujranwala', 'Hyderabad', 'Abbottabad']
const propertyStatus = ['Owned', 'Leased', 'Rented', 'Under Construction']
const yesNo = ['Yes', 'No']

const benefits = [
  { icon: '🏆', title: 'Market Leader', desc: "Join Pakistan's fastest-growing automotive brand and benefit from strong brand recognition." },
  { icon: '📈', title: 'Proven Business Model', desc: 'Access to a proven dealership model with comprehensive support from Chery headquarters.' },
  { icon: '🔧', title: 'Full Technical Training', desc: 'Factory-trained technicians and ongoing technical support for your service team.' },
  { icon: '📣', title: 'Marketing Support', desc: 'Benefit from national marketing campaigns, digital support, and co-op advertising programs.' },
  { icon: '🚗', title: 'Full Product Range', desc: 'Access to Chery\'s complete PHEV vehicle lineup including Tiggo 8, Tiggo 9, and Tiggo 7.' },
  { icon: '🤝', title: 'Dedicated Partner Team', desc: 'A dedicated Chery partner manager assigned to support your dealership growth.' },
]

export default function BecomeDealerPage() {
  const [form, setForm] = useState({
    fullName:'', email:'', phone1:'', phone2:'', businessName:'',
    yearsAuto:'', isOemDealer:'', address:'', province:'', city:'', propertyStatus:''
  })
  const [submitted, setSubmitted] = useState(false)
  const [agreed, setAgreed] = useState(false)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement>) => setForm({...form, [e.target.name]: e.target.value})

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-[#181818]">
        <img src="/assets/tiggo7/tiggo7-index.png" alt="Become a Dealer" className="w-full h-[280px] md:h-[480px] object-cover opacity-60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">
          <span className="text-[#ADADAD] text-sm font-medium tracking-widest mb-3">PARTNERSHIP OPPORTUNITY</span>
          <h1 className="text-4xl md:text-7xl font-light text-white mb-4">Become a Dealer</h1>
          <p className="text-lg text-white/70 font-light max-w-xl">
            Join Chery's professional dealer network and be part of Pakistan&apos;s automotive future.
          </p>
        </div>
      </section>

      {/* Why partner with Chery */}
      <section className="py-16 px-5 md:px-10">
        <div className="max-w-[1360px] mx-auto">
          <span className="text-[#ADADAD] text-sm font-medium tracking-widest">WHY MG</span>
          <h2 className="text-3xl md:text-5xl font-light mt-4 mb-10">The Chery Dealer Advantage</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map(b => (
              <div key={b.title} className="bg-[#F7F7F7] rounded-2xl p-7">
                <span className="text-4xl mb-4 block">{b.icon}</span>
                <h3 className="text-lg font-light mb-2">{b.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="bg-[#F7F7F7] py-16 px-5 md:px-10">
        <div className="max-w-[1360px] mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <span className="text-[#ADADAD] text-sm font-medium tracking-widest">REQUIREMENTS</span>
            <h2 className="text-3xl font-light mt-4 mb-8">What We Look For</h2>
            <ul className="space-y-4">
              {[
                'Minimum 5,000 sq ft showroom space in a prime location',
                'Dedicated service workshop with at least 4 bays',
                'Experience in automotive retail or related business',
                'Strong financial standing and access to working capital',
                'Commitment to Chery brand standards and customer experience',
                'Full-time management team dedicated to the dealership',
              ].map((req, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="w-6 h-6 rounded-full bg-black text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">{i+1}</span>
                  <span className="text-gray-700 font-light">{req}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="text-[#ADADAD] text-sm font-medium tracking-widest">THE PROCESS</span>
            <h2 className="text-3xl font-light mt-4 mb-8">How to Apply</h2>
            {[
              {step:'Submit Application', desc:'Fill out the form below with your personal and business details.'},
              {step:'Initial Review', desc:'Our team reviews your application within 5–7 business days.'},
              {step:'Site Visit & Meeting', desc:'Chery team visits your proposed location and meets with you.'},
              {step:'Approval & Onboarding', desc:'Upon approval, begin the Chery onboarding and training program.'},
            ].map((s, i) => (
              <div key={i} className="flex gap-4 mb-6">
                <span className="text-3xl font-light text-gray-200 w-10 flex-shrink-0">0{i+1}</span>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">{s.step}</h3>
                  <p className="text-sm text-gray-500">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application form */}
      <section className="py-16 px-5 md:px-10">
        <div className="max-w-[700px] mx-auto">
          <span className="text-[#ADADAD] text-sm font-medium tracking-widest">APPLY NOW</span>
          <h2 className="text-3xl font-light mt-4 mb-8">Dealer Application</h2>
          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-12 text-center">
              <p className="text-2xl font-light text-green-700 mb-2">Application Received!</p>
              <p className="text-gray-600">Thank you, <strong>{form.fullName}</strong>. Our partnerships team will review your application and contact you within 5–7 business days.</p>
            </div>
          ) : (
            <div className="space-y-5">
              <h3 className="text-sm font-medium text-gray-500 tracking-widest uppercase pt-2">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  {name:'fullName',label:'Full Name *',type:'text'},
                  {name:'email',label:'Email Address *',type:'email'},
                  {name:'phone1',label:'Phone Number 1 *',type:'tel'},
                  {name:'phone2',label:'Phone Number 2',type:'tel'},
                ].map(f => (
                  <div key={f.name}>
                    <label className="block text-sm text-gray-500 mb-1">{f.label}</label>
                    <input type={f.type} name={f.name} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition" />
                  </div>
                ))}
              </div>
              <h3 className="text-sm font-medium text-gray-500 tracking-widest uppercase pt-2">Business Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-gray-500 mb-1">Current Business Name *</label>
                  <input type="text" name="businessName" onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition" />
                </div>
                <div>
                  <label className="block text-sm text-gray-500 mb-1">Years in Automotive Business *</label>
                  <input type="number" name="yearsAuto" onChange={handleChange} min="0" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition" />
                </div>
                <div>
                  <label className="block text-sm text-gray-500 mb-1">Currently an OEM Dealer? *</label>
                  <select name="isOemDealer" onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition bg-white">
                    <option value="">Select</option>
                    {yesNo.map(v => <option key={v}>{v}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-500 mb-1">Property Status *</label>
                  <select name="propertyStatus" onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition bg-white">
                    <option value="">Select</option>
                    {propertyStatus.map(v => <option key={v}>{v}</option>)}
                  </select>
                </div>
              </div>
              <h3 className="text-sm font-medium text-gray-500 tracking-widest uppercase pt-2">Applying Area</h3>
              <div>
                <label className="block text-sm text-gray-500 mb-1">Address *</label>
                <input type="text" name="address" onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition" placeholder="Proposed showroom address" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-gray-500 mb-1">Province *</label>
                  <select name="province" onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition bg-white">
                    <option value="">Select province</option>
                    {provinces.map(p => <option key={p}>{p}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-500 mb-1">City *</label>
                  <select name="city" onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition bg-white">
                    <option value="">Select city</option>
                    {cities.map(c => <option key={c}>{c}</option>)}
                  </select>
                </div>
              </div>
              <div className="flex items-start gap-3 pt-2">
                <input type="checkbox" id="agree" checked={agreed} onChange={e => setAgreed(e.target.checked)} className="mt-1" />
                <label htmlFor="agree" className="text-xs text-gray-500">
                  I agree to the <a href="/privacy-policy" className="underline">terms & conditions</a> and consent to Chery contacting me regarding this application.
                </label>
              </div>
              <button onClick={() => { if(agreed) setSubmitted(true) }} disabled={!agreed}
                className={`w-full h-12 rounded-[58px] text-base font-light transition ${agreed ? 'bg-black text-white hover:bg-gray-800' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}>
                Send Application
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
