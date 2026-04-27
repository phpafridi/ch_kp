'use client'
import { useState } from 'react'
import Link from 'next/link'

const models = ['MG HS PHEV', 'MG U9', 'MG Cyberster', 'Binguo EV']
const cities = ['Karachi', 'Lahore', 'Islamabad', 'Rawalpindi', 'Faisalabad', 'Multan', 'Peshawar', 'Quetta']
const dealers = ['MG Karachi South', 'MG Karachi North', 'MG Lahore Main', 'MG Lahore DHA', 'MG Islamabad', 'MG Rawalpindi', 'MG Faisalabad', 'MG Multan']

const reasons = [
  { emoji: '⚡', title: 'True Hybrid Technology', desc: 'The MG HS PHEV blends electric efficiency with petrol convenience — over 50km of pure electric range, zero compromises.' },
  { emoji: '🛡️', title: "Pakistan's Best Warranty", desc: '5-year / 100,000km warranty that gives you complete peace of mind from day one.' },
  { emoji: '💡', title: 'MG Pilot Safety Suite', desc: '11 intelligent driver-assistance features to keep you safe on every Pakistani road.' },
  { emoji: '💰', title: 'Flexible Financing', desc: '9 partner banks, Islamic and conventional options, making your MG accessible without compromise.' },
]

export default function StartSmartPage() {
  const [form, setForm] = useState({ name:'', model:'MG HS PHEV', email:'', phone:'', landline:'', city:'', address:'', dealer:'', date:'', delivery:'' })
  const [submitted, setSubmitted] = useState(false)
  const [agreed, setAgreed] = useState(false)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement>) => setForm({...form, [e.target.name]: e.target.value})

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative">
        <img src="/assets/phev/phev-updated.webp" alt="Start Smart Campaign" className="w-full h-[280px] md:h-[560px] object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent flex flex-col justify-center px-8 md:px-16">
          <span className="text-[#ADADAD] text-sm font-medium tracking-widest mb-4">CAMPAIGN 2025</span>
          <h1 className="text-4xl md:text-7xl font-light text-white leading-tight mb-4">
            Start Smart<br />This Year
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-light max-w-lg mb-8">
            A smarter year begins with the right choice.
          </p>
          <Link href="#book-form">
            <button className="w-fit h-12 px-8 border-2 border-white rounded-[58px] text-white hover:bg-white hover:text-black transition text-base font-light">
              Book My MG HS PHEV
            </button>
          </Link>
        </div>
      </section>

      {/* Campaign message */}
      <section className="py-16 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto text-center">
          <span className="text-[#ADADAD] text-sm font-medium tracking-widest">THE IDEA</span>
          <h2 className="text-3xl md:text-5xl font-light mt-4 mb-8">Make the Right Call</h2>
          <p className="text-lg md:text-xl font-light text-gray-700 leading-relaxed mb-6">
            A new year often brings new plans and new priorities. Choosing the right car is not just about where you are going, but how confidently you get there.
          </p>
          <p className="text-lg md:text-xl font-light text-gray-700 leading-relaxed">
            The Start Smart campaign is about making a decision that feels right from day one. One that blends intelligent technology, refined performance, and meaningful value into a drive that works for everyday life.
          </p>
        </div>
      </section>

      {/* 4 reasons */}
      <section className="bg-[#F7F7F7] py-16 px-5 md:px-10">
        <div className="max-w-[1360px] mx-auto">
          <span className="text-[#ADADAD] text-sm font-medium tracking-widest">WHY START SMART</span>
          <h2 className="text-3xl md:text-5xl font-light mt-4 mb-10">4 Reasons to Choose MG</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reasons.map(r => (
              <div key={r.title} className="bg-white rounded-2xl p-8 flex gap-5">
                <span className="text-4xl flex-shrink-0">{r.emoji}</span>
                <div>
                  <h3 className="text-xl font-light mb-2">{r.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Car showcase */}
      <section className="py-16 px-5 md:px-10">
        <div className="max-w-[1360px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[#ADADAD] text-sm font-medium tracking-widest">FEATURED MODEL</span>
            <h2 className="text-3xl md:text-5xl font-light mt-4 mb-6">MG HS PHEV</h2>
            <p className="text-lg font-light text-gray-700 leading-relaxed mb-8">
              Pakistan&apos;s first and best plug-in hybrid electric vehicle. 0–100 km/h in 7.1 seconds, over 50km pure electric range, and 16 advanced safety features — this is the car that starts your year right.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                {val:'7.1s', label:'0–100 km/h'},
                {val:'+50km', label:'Electric Range'},
                {val:'16.6kWh', label:'Battery'},
              ].map(s => (
                <div key={s.label} className="text-center border border-gray-100 rounded-xl py-4">
                  <p className="text-2xl font-light">{s.val}</p>
                  <p className="text-xs text-gray-500 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="flex gap-4">
              <Link href="/model/phev">
                <button className="relative overflow-hidden h-12 px-6 border border-black rounded-[58px] bg-white text-black hover:text-white cursor-pointer group text-sm">
                  <span className="relative z-10">Discover More</span>
                  <span className="absolute inset-0 bg-black scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100" />
                </button>
              </Link>
              <Link href="/test-drive">
                <button className="h-12 px-6 bg-black text-white rounded-[58px] text-sm hover:bg-gray-800 transition">Test Drive</button>
              </Link>
            </div>
          </div>
          <img src="/assets/phev/phev-updated.webp" alt="MG HS PHEV" className="w-full rounded-xl object-contain max-h-[400px]" />
        </div>
      </section>

      {/* Booking form */}
      <section id="book-form" className="py-16 px-5 md:px-10 bg-[#F7F7F7]">
        <div className="max-w-[700px] mx-auto">
          <span className="text-[#ADADAD] text-sm font-medium tracking-widest">START NOW</span>
          <h2 className="text-3xl font-light mt-4 mb-8">Book My MG HS PHEV</h2>
          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-12 text-center">
              <div className="text-5xl mb-4">✓</div>
              <p className="text-2xl font-light text-green-700 mb-2">You&apos;ve Started Smart!</p>
              <p className="text-gray-600">Our team will be in touch within 24 hours to confirm your booking.</p>
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-8 space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  {name:'name',label:'Full Name *',type:'text'},
                  {name:'phone',label:'Phone Number *',type:'tel'},
                  {name:'email',label:'Email Address *',type:'email'},
                  {name:'landline',label:'Landline Number',type:'tel'},
                  {name:'city',label:'City *',type:'text'},
                  {name:'address',label:'Address *',type:'text'},
                ].map(f => (
                  <div key={f.name}>
                    <label className="block text-sm text-gray-500 mb-1">{f.label}</label>
                    <input type={f.type} name={f.name} onChange={handleChange} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition" />
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-gray-500 mb-1">Select Dealer *</label>
                  <select name="dealer" onChange={handleChange} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition bg-white">
                    <option value="">Select dealer</option>
                    {dealers.map(d => <option key={d}>{d}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-500 mb-1">Preferred Date *</label>
                  <input type="date" name="date" onChange={handleChange} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition" />
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1">Tentative Delivery</label>
                <input type="month" name="delivery" onChange={handleChange} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition" />
              </div>
              <div className="flex items-start gap-3">
                <input type="checkbox" id="agree" checked={agreed} onChange={e => setAgreed(e.target.checked)} className="mt-1" />
                <label htmlFor="agree" className="text-xs text-gray-500">
                  Read our <a href="/privacy-policy" className="underline">terms & conditions</a>.
                </label>
              </div>
              <button onClick={() => { if(agreed) setSubmitted(true) }} disabled={!agreed}
                className={`w-full h-12 rounded-[58px] text-base font-light transition ${agreed ? 'bg-black text-white hover:bg-gray-800' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}>
                Send
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
