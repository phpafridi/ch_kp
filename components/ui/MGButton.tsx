import Link from 'next/link'

interface ButtonProps {
  href?: string
  onClick?: () => void
  children: React.ReactNode
  variant?: 'outline' | 'solid'
  className?: string
  external?: boolean
}

export default function MGButton({ href, onClick, children, variant = 'outline', className = '', external }: ButtonProps) {
  const base = `relative overflow-hidden h-12 px-8 rounded-[58px] cursor-pointer group transition-all duration-300
    ${variant === 'solid'
      ? 'bg-black text-white border border-black hover:bg-gray-800'
      : 'bg-white text-black border border-black hover:text-white'
    } ${className}`

  const inner = (
    <>
      <span className="text-base leading-6 font-light relative z-10">{children}</span>
      {variant === 'outline' && (
        <span className="absolute top-0 left-0 w-full h-full bg-black scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 rounded-[58px]" />
      )}
    </>
  )

  if (href) {
    return external
      ? <a href={href} target="_blank" rel="noopener noreferrer" className={base}>{inner}</a>
      : <Link href={href} className={base}>{inner}</Link>
  }

  return <button onClick={onClick} className={base}>{inner}</button>
}
