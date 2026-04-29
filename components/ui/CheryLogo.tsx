import Image from 'next/image'

export default function CheryLogo({ white = false }: { white?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="/assets/chery-logo.png"
        alt="Chery KP"
        width={80}
        height={60}
        className="object-contain"
        priority
      />
      <span className={`text-base font-semibold tracking-[0.15em] ${white ? 'text-white' : 'text-black'}`}>
        CHERY KP
      </span>
    </div>
  )
}
