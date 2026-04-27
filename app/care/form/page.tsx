'use client'
import { useState } from 'react'
const services = ['Regular Service', 'Oil Change', 'Tire Rotation', 'Brake Inspection', 'Battery Check', 'AC Service', 'Warranty Repair', 'Accident Repair']
export default function ServiceFormPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name:'', phone:'', email:'', model:'', reg:'', service:'', date:'', notes:'' })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>) => setForm({...form, [e.target.name]: e.target.value})
  return (
    <div className="bg-white">
      <section className="py-16 px-5 md:px-10 bg-[#F7F7F7]">
        <div className="max-w-[900px] mx-auto"><span className="text-[#ADADAD] text-sm font-medium tracking-widest">MG CARE</span><h1 className="text-4xl md:text-5xl font-light mt-4">Schedule a Service</h1></div>
      </section>
      <section className="py-16 px-5 md:px-10">
        <div className="max-w-[700px] mx-auto">
          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-12 text-center">
              <p className="text-2xl font-light text-green-700 mb-2">Service Booked!</p>
              <p className="text-gray-600">We&apos;ll confirm your appointment within 24 hours.</p>
            </div>
          ) : (
            <div className="space-y-5">
              {[{name:'name',label:'Full Name *',type:'text'},{name:'phone',label:'Phone Number *',type:'tel'},{name:'email',label:'Email Address',type:'email'},{name:'model',label:'Vehicle Model *',type:'text',placeholder:'e.g. MG HS PHEV'},{name:'reg',label:'Registration Number *',type:'text',placeholder:'e.g. ABC-123'}].map(f=>(
                <div key={f.name}><label className="block text-sm text-gray-500 mb-1">{f.label}</label>
                <input type={f.type} name={f.name} onChange={handleChange} placeholder={(f as any).placeholder} className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition" /></div>
              ))}
              <div><label className="block text-sm text-gray-500 mb-1">Service Type *</label>
              <select name="service" onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition bg-white">
                <option value="">Select service</option>{services.map(s=><option key={s} value={s}>{s}</option>)}
              </select></div>
              <div><label className="block text-sm text-gray-500 mb-1">Preferred Date</label>
              <input type="date" name="date" onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition" /></div>
              <div><label className="block text-sm text-gray-500 mb-1">Additional Notes</label>
              <textarea name="notes" onChange={handleChange} rows={3} className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition resize-none" /></div>
              <button onClick={()=>setSubmitted(true)} className="w-full h-12 bg-black text-white rounded-[58px] text-base font-light hover:bg-gray-800 transition">Schedule Service</button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
