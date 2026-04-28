import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Cookie Policy | Chery KP' }
export default function Page() {
  return (
    <div className="max-w-[900px] mx-auto py-16 px-5 md:px-10">
      <h1 className="text-4xl font-light mb-8">Cookie Policy</h1>
      <p className="text-gray-600 font-light leading-relaxed mb-6">This website uses cookies to enhance your browsing experience and provide personalized services. By continuing to use our site, you agree to our use of cookies.</p>
      <h2 className="text-2xl font-light mb-4">What are cookies?</h2>
      <p className="text-gray-600 font-light leading-relaxed mb-6">Cookies are small text files stored on your device when you visit a website. They help us remember your preferences, understand site usage, and improve your experience.</p>
      <h2 className="text-2xl font-light mb-4">How we use cookies</h2>
      <p className="text-gray-600 font-light leading-relaxed">We use essential cookies for website functionality, analytics cookies to understand how visitors interact with our site, and marketing cookies to deliver relevant advertisements. You may disable cookies through your browser settings, though this may affect some site functionality.</p>
    </div>
  )
}
