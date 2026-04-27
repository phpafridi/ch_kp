'use client'

import { useEffect, useRef, ReactNode } from 'react'

type Animation = 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'fade' | 'scale-up'

interface Props {
  children: ReactNode
  animation?: Animation
  delay?: number
  className?: string
}

export default function ScrollReveal({ children, animation = 'fade-up', delay = 0, className }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.setAttribute('data-visible', 'true')
        io.disconnect()
      }
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' })

    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      data-sr={animation}
      data-delay={delay}
      className={className}
      style={{ '--sr-delay': `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </div>
  )
}
