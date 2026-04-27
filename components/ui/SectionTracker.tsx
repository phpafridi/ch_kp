'use client'

import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

interface Section {
  id: string
  label: string
}

interface Props {
  sections: Section[]
}

export default function SectionTracker({ sections }: Props) {
  const [active, setActive] = useState<string>(sections[0]?.id ?? '')
  const [mounted, setMounted] = useState(false)
  const rafRef = useRef<number | null>(null)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    const update = () => {
      const windowH = window.innerHeight
      let current = sections[0]?.id ?? ''
      for (const { id } of sections) {
        const el = document.getElementById(id)
        if (!el) continue
        if (el.getBoundingClientRect().top <= windowH * 0.5) current = id
      }
      setActive(current)
    }
    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [sections])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const tracker = (
    <div style={{
      position: 'fixed',
      top: '50%',
      left: '12px',
      transform: 'translateY(-50%)',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '6px',
    }}>
      {sections.map(({ id, label }) => {
        const isActive = active === id
        return (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            title={label}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '8px',
              padding: 0,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              outline: 'none',
            }}
          >
            {/* THE BAR — clearly visible */}
            <div style={{
              width: '3px',
              height: isActive ? '40px' : '16px',
              background: isActive ? '#000000' : '#BBBBBB',
              borderRadius: '2px',
              flexShrink: 0,
              transition: 'height 0.3s ease, background 0.3s ease',
            }} />

            {/* Label — horizontal, only on active, small caps */}
            {isActive && (
              <span style={{
                fontSize: '9px',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#000000',
                whiteSpace: 'nowrap',
                userSelect: 'none',
                lineHeight: 1,
              }}>
                {label}
              </span>
            )}
          </button>
        )
      })}
    </div>
  )

  if (!mounted) return null
  return createPortal(tracker, document.body)
}
