import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Privacy Policy | MG Motors Pakistan' }
export default function Page() {
  return (
    <div className="max-w-[900px] mx-auto py-16 px-5 md:px-10">
      <h1 className="text-4xl font-light mb-8">Privacy Policy</h1>
      <p className="text-gray-600 font-light leading-relaxed mb-6">MG JW Automobile Pakistan Pvt. Ltd. is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal information.</p>
      <h2 className="text-2xl font-light mb-4">Information We Collect</h2>
      <p className="text-gray-600 font-light leading-relaxed mb-6">We collect information you provide directly (name, email, phone, address) when you book a test drive, make an enquiry, or register for our services. We also automatically collect usage data, device information, and IP addresses.</p>
      <h2 className="text-2xl font-light mb-4">How We Use Your Information</h2>
      <p className="text-gray-600 font-light leading-relaxed mb-6">Your information is used to process bookings, respond to enquiries, send marketing communications (with your consent), improve our services, and comply with legal obligations.</p>
      <h2 className="text-2xl font-light mb-4">Contact</h2>
      <p className="text-gray-600 font-light leading-relaxed">For privacy concerns, contact us at <a href="mailto:info@mgmotors.com.pk" className="underline">info@mgmotors.com.pk</a> or call 0800-00011.</p>
    </div>
  )
}
