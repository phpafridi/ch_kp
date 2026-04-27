import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-5 text-center">
      <p className="text-[120px] font-light text-gray-100 leading-none select-none">404</p>
      <h1 className="text-3xl md:text-4xl font-light text-gray-900 mt-2 mb-4">Page Not Found</h1>
      <p className="text-gray-500 font-light mb-10 max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <div className="flex gap-4 flex-wrap justify-center">
        <Link href="/">
          <button className="relative overflow-hidden h-12 px-8 border border-black rounded-[58px] bg-white text-black hover:text-white cursor-pointer group">
            <span className="relative z-10 text-base font-light">Go to Homepage</span>
            <span className="absolute top-0 left-0 w-full h-full bg-black scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100" />
          </button>
        </Link>
        <Link href="/contact">
          <button className="h-12 px-8 bg-black text-white rounded-[58px] text-base font-light hover:bg-gray-800 transition">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  )
}
