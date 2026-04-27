import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'End User License Agreement | MG Motors Pakistan' }
export default function Page() {
  return (
    <div className="max-w-[900px] mx-auto py-16 px-5 md:px-10">
      <h1 className="text-4xl font-light mb-8">End User License Agreement</h1>
      <p className="text-gray-600 font-light leading-relaxed mb-6">This End User License Agreement ("EULA") governs your use of MG Motors Pakistan's digital services, website, and mobile applications.</p>
      <p className="text-gray-600 font-light leading-relaxed">By using our digital services, you agree to these terms. All content on this website is the property of MG JW Automobile Pakistan Pvt. Ltd. and may not be reproduced without written permission. MG reserves the right to modify these terms at any time.</p>
    </div>
  )
}
