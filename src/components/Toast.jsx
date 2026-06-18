import { useState, useEffect } from 'react'

export default function Toast({ message, visible }) {
  const [show, setShow] = useState(false)
  const [hiding, setHiding] = useState(false)

  useEffect(() => {
    if (visible) {
      setShow(true)
      setHiding(false)
      const timer = setTimeout(() => {
        setHiding(true)
        setTimeout(() => setShow(false), 300)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [visible])

  if (!show) return null

  return (
    <div style={{
      position: 'fixed',
      bottom: 'calc(env(safe-area-inset-bottom) + 24px)',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 100,
      background: 'var(--color-deep)',
      color: 'var(--color-champagne)',
      padding: '12px 20px',
      borderRadius: 14,
      fontFamily: 'var(--font-body)',
      fontSize: '0.85rem',
      fontWeight: 600,
      whiteSpace: 'nowrap',
      maxWidth: 'calc(100vw - 48px)',
      textAlign: 'center',
      boxShadow: '0 4px 24px oklch(20% 0.08 148 / 0.25)',
      animation: hiding
        ? 'toastOut 300ms ease-in forwards'
        : 'toastIn 300ms cubic-bezier(0.22,1,0.36,1) forwards',
    }}>
      {message}
    </div>
  )
}
