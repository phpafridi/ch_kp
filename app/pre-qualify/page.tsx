'use client'
import { useState } from 'react'
export default function PreQualifyPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name:'', email:'', phone:'', city:'', address:'', dealer:'', date:'', car:'' })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement>) => setForm({...form,[e.target.name]:e.target.value})
  return (
    <div className="bg-white">
      <section className="py-16 px-5 md:px-10 bg-[#F7F7F7]"><div className="max-w-[900px] mx-auto"><span className="text-[#ADADAD] text-sm font-medium tracking-widest">CYBERSTER</span><h1 className="text-4xl md:text-6xl font-light mt-4">Pre-Qualify for Cyberster</h1></div></section>
      <section className="py-16 px-5 md:px-10"><div className="max-w-[700px] mx-auto">
        {submitted ? (
          <div className="bg-green-50 border border-green-200 rounded-xl p-12 text-center"><p className="text-2xl font-light text-green-700 mb-2">Pre-Qualification Submitted!</p><p className="text-gray-600">Our team will review your application and be in touch shortly.</p></div>
        ) : (
          <div className="space-y-5">
            {[{n:'name',l:'Full Name *',t:'text'},{n:'email',l:'Email Address *',t:'email'},{n:'phone',l:'Phone Number *',t:'tel'},{n:'city',l:'City *',t:'text'},{n:'address',l:'Address *',t:'text'},{n:'dealer',l:'Select Dealer *',t:'text'},{n:'date',l:'Preferred Date *',t:'date'},{n:'car',l:'What car do you currently drive? *',t:'text'}].map(f=>(
              <div key={f.n}><label className="block text-sm text-gray-500 mb-1">{f.l}</label><input type={f.t} name={f.n} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition" /></div>
            ))}
            <button onClick={()=>setSubmitted(true)} className="w-full h-12 bg-black text-white rounded-[58px] text-base font-light hover:bg-gray-800 transition">Submit Pre-Qualification</button>
          </div>
        )}
      </div></section>
    </div>
  )
}
