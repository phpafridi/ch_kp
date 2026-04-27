'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 text-center">
      <h2 className="text-2xl font-light text-gray-900 mb-3">Something went wrong</h2>
      <p className="text-gray-500 text-sm mb-8">An unexpected error occurred. Please try again.</p>
      <button
        onClick={reset}
        className="h-11 px-8 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition"
      >
        Try again
      </button>
    </div>
  )
}
