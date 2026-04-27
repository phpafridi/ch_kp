'use client'
import { useState } from 'react'

type Stage = 'idle' | 'otp' | 'result'
type Status = 'Order Confirmed' | 'In Production' | 'Quality Check' | 'Dispatched' | 'Ready for Delivery'

const mockOrders: Record<string, { model: string; color: string; dealer: string; date: string; status: Status; progress: number }> = {
  'MG-123456': { model: 'MG HS PHEV', color: 'Pearl White', dealer: 'MG Lahore Main', date: 'May 2025', status: 'In Production', progress: 40 },
  'MG-789012': { model: 'MG U9', color: 'Midnight Black', dealer: 'MG Karachi South', date: 'June 2025', status: 'Dispatched', progress: 80 },
  'MG-345678': { model: 'Binguo EV', color: 'Avocado Green', dealer: 'MG Islamabad', date: 'April 2025', status: 'Ready for Delivery', progress: 100 },
}

const stages: Status[] = ['Order Confirmed', 'In Production', 'Quality Check', 'Dispatched', 'Ready for Delivery']
const stageIcons = ['📋', '🏭', '✅', '🚚', '🎉']

export default function TrackMyMGPage() {
  const [bookingNum, setBookingNum] = useState('')
  const [otp, setOtp] = useState('')
  const [stage, setStage] = useState<Stage>('idle')
  const [order, setOrder] = useState<typeof mockOrders[string] | null>(null)
  const [error, setError] = useState('')

  const handleSendOtp = () => {
    if (!bookingNum) { setError('Please enter your booking number.'); return }
    setError('')
    setStage('otp')
  }

  const handleVerify = () => {
    if (otp.length < 4) { setError('Please enter the 6-digit OTP.'); return }
    const found = mockOrders[bookingNum.toUpperCase().trim()]
    if (found) {
      setOrder(found)
      setStage('result')
      setError('')
    } else {
      // Demo: show a sample order for any valid OTP
      setOrder({ model: 'MG HS PHEV', color: 'Pearl White', dealer: 'MG Lahore Main', date: 'May 2025', status: 'In Production', progress: 40 })
      setStage('result')
      setError('')
    }
  }

  const activeIdx = order ? stages.indexOf(order.status) : -1

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="py-16 px-5 md:px-10 bg-[#F7F7F7]">
        <div className="max-w-[1360px] mx-auto">
          <span className="text-[#ADADAD] text-sm font-medium tracking-widest">YOUR ORDER</span>
          <h1 className="text-4xl md:text-6xl font-light mt-4 mb-2">Track My MG</h1>
          <p className="text-lg text-gray-500 font-light">Real-time updates on your vehicle order status.</p>
        </div>
      </section>

      <section className="py-16 px-5 md:px-10">
        <div className="max-w-[700px] mx-auto">

          {stage === 'idle' && (
            <div className="space-y-6">
              {/* Instructions */}
              <div className="bg-[#F7F7F7] rounded-2xl p-6">
                <h2 className="text-lg font-medium mb-4">Order Tracking Instructions</h2>
                <ol className="space-y-2">
                  {[
                    'Enter your MG Booking/Order Number from your confirmation email.',
                    'Click "Send OTP" to receive a verification code.',
                    'Enter the OTP sent to your registered mobile or email.',
                    'Upon verification, your order details will be displayed.',
                  ].map((step, i) => (
                    <li key={i} className="flex gap-3 text-sm text-gray-600">
                      <span className="font-medium text-gray-900 flex-shrink-0">{i+1}.</span>
                      {step}
                    </li>
                  ))}
                </ol>
                <p className="text-xs text-gray-400 mt-4">Need help? Contact <a href="mailto:info@mgmotors.com.pk" className="underline">info@mgmotors.com.pk</a></p>
              </div>

              <div>
                <label className="block text-sm text-gray-500 mb-2">Enter Booking Number / Order Number</label>
                <input
                  type="text"
                  value={bookingNum}
                  onChange={e => setBookingNum(e.target.value)}
                  placeholder="MG-XXXXXXX"
                  className="w-full border border-gray-300 rounded-xl px-5 py-4 text-base focus:outline-none focus:border-black transition font-mono tracking-wider"
                />
                <p className="text-xs text-gray-400 mt-2">Example: MG-123456 (try MG-789012 or MG-345678 for demo)</p>
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button onClick={handleSendOtp} className="w-full h-12 bg-black text-white rounded-[58px] text-base font-light hover:bg-gray-800 transition">
                Send OTP
              </button>
            </div>
          )}

          {stage === 'otp' && (
            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 text-center">
                <p className="text-blue-700 text-sm">An OTP has been sent to your registered phone number and email.</p>
                <p className="text-blue-500 text-xs mt-1">For demo purposes, enter any 4+ digit code.</p>
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-2">Enter OTP</label>
                <input
                  type="text"
                  value={otp}
                  onChange={e => setOtp(e.target.value)}
                  placeholder="Enter 6-digit OTP"
                  maxLength={6}
                  className="w-full border border-gray-300 rounded-xl px-5 py-4 text-2xl text-center tracking-[0.5em] focus:outline-none focus:border-black transition"
                />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <div className="flex gap-3">
                <button onClick={() => { setStage('idle'); setError('') }} className="flex-1 h-12 border border-gray-300 rounded-[58px] text-sm hover:border-black transition">
                  Back
                </button>
                <button onClick={handleVerify} className="flex-1 h-12 bg-black text-white rounded-[58px] text-base font-light hover:bg-gray-800 transition">
                  Verify & Track
                </button>
              </div>
            </div>
          )}

          {stage === 'result' && order && (
            <div className="space-y-8 animate-fadeIn">
              {/* Order summary card */}
              <div className="bg-[#F7F7F7] rounded-2xl p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-xs text-[#ADADAD] tracking-widest mb-1">ORDER #{bookingNum.toUpperCase() || 'MG-DEMO'}</p>
                    <h2 className="text-2xl font-light">{order.model}</h2>
                    <p className="text-gray-500 text-sm">{order.color} · {order.dealer}</p>
                  </div>
                  <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                    order.status === 'Ready for Delivery' ? 'bg-green-100 text-green-700' :
                    order.status === 'Dispatched' ? 'bg-blue-100 text-blue-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>{order.status}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-500 border-t border-gray-200 pt-4">
                  <span>Tentative Delivery: <strong className="text-gray-900">{order.date}</strong></span>
                </div>
              </div>

              {/* Progress bar */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-500">Order Progress</span>
                  <span className="text-sm font-medium">{order.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-black h-2 rounded-full transition-all duration-500" style={{width: `${order.progress}%`}} />
                </div>
              </div>

              {/* Stage tracker */}
              <div>
                <h3 className="text-lg font-light mb-6">Journey Status</h3>
                <div className="space-y-4">
                  {stages.map((s, i) => {
                    const done = i <= activeIdx
                    const active = i === activeIdx
                    return (
                      <div key={s} className={`flex gap-4 items-center p-4 rounded-xl transition-colors ${active ? 'bg-black text-white' : done ? 'bg-gray-50' : 'bg-white border border-gray-100'}`}>
                        <span className="text-2xl">{stageIcons[i]}</span>
                        <div className="flex-1">
                          <p className={`font-medium text-sm ${active ? 'text-white' : done ? 'text-gray-900' : 'text-gray-400'}`}>{s}</p>
                          {active && <p className="text-white/70 text-xs mt-0.5">Current Stage</p>}
                        </div>
                        {done && !active && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-green-500"><polyline points="20 6 9 17 4 12"/></svg>}
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Confidentiality notice */}
              <div className="border border-gray-100 rounded-xl p-5 text-xs text-gray-400 leading-relaxed">
                <strong className="text-gray-600">Confidentiality Statement:</strong> The information provided on this page is confidential and intended solely for the registered customer of MG Motors Pakistan. By entering your PBO Number, you acknowledge that the retrieved booking details are for your personal reference only. Any unauthorized access, sharing, or misuse of this data is strictly prohibited.
              </div>

              <button onClick={() => { setStage('idle'); setBookingNum(''); setOtp(''); setOrder(null) }} className="w-full h-12 border border-black rounded-[58px] text-sm hover:bg-black hover:text-white transition">
                Track Another Order
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
