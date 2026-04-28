'use client'
import { useState } from 'react'
import Link from 'next/link'

const banks = [
  { name: 'Meezan Bank', type: 'Islamic', rate: 'From 20%', tenure: 'Up to 7 years' },
  { name: 'HBL', type: 'Conventional', rate: 'From 22%', tenure: 'Up to 5 years' },
  { name: 'MCB Bank', type: 'Conventional', rate: 'From 21%', tenure: 'Up to 5 years' },
  { name: 'Allied Bank', type: 'Conventional', rate: 'From 21%', tenure: 'Up to 5 years' },
  { name: 'Bank Alfalah', type: 'Both', rate: 'From 20%', tenure: 'Up to 7 years' },
  { name: 'UBL', type: 'Conventional', rate: 'From 22%', tenure: 'Up to 5 years' },
  { name: 'Faysal Bank', type: 'Islamic', rate: 'From 20%', tenure: 'Up to 7 years' },
  { name: 'Dubai Islamic Bank', type: 'Islamic', rate: 'From 19%', tenure: 'Up to 7 years' },
  { name: 'Bank Islami', type: 'Islamic', rate: 'From 20%', tenure: 'Up to 7 years' },
]

const steps = [
  { num: '01', title: 'Choose Your Chery', desc: 'Select the model that suits your lifestyle and budget.' },
  { num: '02', title: 'Pick a Bank', desc: 'Choose from our network of 9 partner banks — Islamic or conventional.' },
  { num: '03', title: 'Apply Online', desc: 'Fill out the application form. We handle the coordination with the bank.' },
  { num: '04', title: 'Get Approved', desc: 'Receive your approval and drive away in your new Chery.' },
]

const models = ['Chery Tiggo 8 PHEV', 'Chery Tiggo 7 PHEV', 'Chery Tiggo 9 PHEV', 'Chery Tiggo 8']
const cities = ['Karachi', 'Lahore', 'Islamabad', 'Rawalpindi', 'Faisalabad', 'Multan', 'Peshawar', 'Quetta']
const dealers = ['Chery KP — Main Ring Road, Peshawar', 'Chery KP — Main Ring Road, Peshawar', 'Chery KP — Main Ring Road, Peshawar', 'Chery KP — Main Ring Road, Peshawar', 'Chery KP — Main Ring Road, Peshawar', 'Chery KP — Main Ring Road, Peshawar', 'Chery KP — Main Ring Road, Peshawar', 'Chery KP — Main Ring Road, Peshawar']
const bankList = ['Meezan Bank', 'HBL', 'MCB', 'Allied Bank', 'Bank Alfalah', 'UBL', 'Faysal Bank', 'Dubai Islamic Bank', 'Bank Islami']

export default function FinancingPage() {
  const [form, setForm] = useState({ name:'', model:'', email:'', phone:'', landline:'', city:'', address:'', dealer:'', delivery:'', bank:'' })
  const [submitted, setSubmitted] = useState(false)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement>) => setForm({...form, [e.target.name]: e.target.value})

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative">
        <img src="/assets/tiggo8phev/hero.jpg" alt="Chery Financing" className="w-full h-[280px] md:h-[480px] object-cover" />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-5">
          <span className="text-[#ADADAD] text-sm font-medium tracking-widest mb-3">FLEXIBLE FINANCING</span>
          <h1 className="text-4xl md:text-7xl font-light text-white mb-4">Your New Chery Awaits</h1>
          <p className="text-lg md:text-2xl text-white/80 font-light max-w-xl">
            Drive your dream Chery today with flexible financing through our trusted banking partners.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-5 md:px-10 bg-[#F7F7F7]">
        <div className="max-w-[1360px] mx-auto">
          <span className="text-[#ADADAD] text-sm font-medium tracking-widest">THE PROCESS</span>
          <h2 className="text-3xl md:text-5xl font-light mt-4 mb-12">How It Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map(s => (
              <div key={s.num} className="flex flex-col">
                <span className="text-5xl font-light text-gray-200 mb-3">{s.num}</span>
                <h3 className="text-lg font-medium mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner banks */}
      <section className="py-16 px-5 md:px-10">
        <div className="max-w-[1360px] mx-auto">
          <span className="text-[#ADADAD] text-sm font-medium tracking-widest">OUR PARTNERS</span>
          <h2 className="text-3xl md:text-5xl font-light mt-4 mb-10">9 Partner Banks</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {banks.map(b => (
              <div key={b.name} className="border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-light">{b.name}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${b.type === 'Islamic' ? 'bg-green-50 text-green-600' : b.type === 'Both' ? 'bg-blue-50 text-blue-600' : 'bg-gray-100 text-gray-500'}`}>
                    {b.type}
                  </span>
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Rate: <strong className="text-gray-800">{b.rate}</strong></span>
                  <span>Tenure: <strong className="text-gray-800">{b.tenure}</strong></span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-6">* Rates are indicative and subject to change. Final rates depend on applicant's credit profile and bank policy.</p>
        </div>
      </section>

      {/* Application form */}
      <section className="py-16 px-5 md:px-10 bg-[#F7F7F7]">
        <div className="max-w-[700px] mx-auto">
          <span className="text-[#ADADAD] text-sm font-medium tracking-widest">GET STARTED</span>
          <h2 className="text-3xl font-light mt-4 mb-8">Apply for Financing</h2>
          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-12 text-center">
              <div className="text-5xl mb-4">🎉</div>
              <p className="text-2xl font-light text-green-700 mb-2">Application Submitted!</p>
              <p className="text-gray-600">Our team will contact you within 24 hours to proceed with your financing application.</p>
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-8 space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  {name:'name', label:'Full Name *', type:'text'},
                  {name:'phone', label:'Phone Number *', type:'tel'},
                  {name:'email', label:'Email Address *', type:'email'},
                  {name:'landline', label:'Landline Number', type:'tel'},
                  {name:'city', label:'City *', type:'text'},
                  {name:'address', label:'Address *', type:'text'},
                ].map(f => (
                  <div key={f.name}>
                    <label className="block text-sm text-gray-500 mb-1">{f.label}</label>
                    <input type={f.type} name={f.name} onChange={handleChange} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition" />
                  </div>
                ))}
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1">Select a Model *</label>
                <select name="model" onChange={handleChange} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition bg-white">
                  <option value="">Choose your Chery</option>
                  {models.map(m => <option key={m}>{m}</option>)}
                </select>
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
                  <label className="block text-sm text-gray-500 mb-1">Preferred Bank *</label>
                  <select name="bank" onChange={handleChange} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition bg-white">
                    <option value="">Select bank</option>
                    {bankList.map(b => <option key={b}>{b}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1">Tentative Delivery Date</label>
                <input type="date" name="delivery" onChange={handleChange} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition" />
              </div>
              <p className="text-xs text-gray-400">
                By submitting this form you agree to our <a href="/privacy-policy" className="underline">terms & conditions</a>.
              </p>
              <button onClick={() => setSubmitted(true)} className="w-full h-12 bg-black text-white rounded-[58px] text-base font-light hover:bg-gray-800 transition">
                Send Application
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
