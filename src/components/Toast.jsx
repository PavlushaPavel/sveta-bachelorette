import { useState, useEffect } from 'react'

export default function Toast({ message, visible }) {
  const [show, setShow] = useState(false)
  const [hiding, setHiding] = useState(false)

  useEffect(() => {
    if (!visible) return undefined

    const showTimer = setTimeout(() => {
      setShow(true)
      setHiding(false)
    }, 0)
    const hideTimer = setTimeout(() => setHiding(true), 3000)
    const removeTimer = setTimeout(() => setShow(false), 3240)

    return () => {
      clearTimeout(showTimer)
      clearTimeout(hideTimer)
      clearTimeout(removeTimer)
    }
  }, [visible])

  if (!show) return null

  return (
    <div className="toast" style={{
      transform: 'translateX(-50%)',
      animation: hiding ? 'toastOut 240ms var(--ease-out) forwards' : 'toastIn 240ms var(--ease-out) forwards',
    }}>
      {message}
    </div>
  )
}
