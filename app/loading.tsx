export default function Loading() {
  return (
    <div className="animate-pulse">
      {/* Hero skeleton */}
      <div className="w-full h-[300px] md:h-[640px] bg-gray-200" />

      {/* Content skeleton */}
      <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-16">
        <div className="h-4 w-24 bg-gray-200 rounded mb-6" />
        <div className="h-10 w-2/3 bg-gray-200 rounded mb-4" />
        <div className="h-5 w-full bg-gray-200 rounded mb-3" />
        <div className="h-5 w-5/6 bg-gray-200 rounded mb-3" />
        <div className="h-5 w-4/6 bg-gray-200 rounded mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map(i => (
            <div key={i} className="bg-gray-100 rounded-xl h-64" />
          ))}
        </div>
      </div>
    </div>
  )
}
