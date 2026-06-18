export default function Button({ children, onClick, disabled = false, variant = 'primary' }) {
  const styles = {
    primary: {
      background: disabled ? 'var(--color-muted)' : 'var(--color-lime-pop)',
      color: 'var(--color-surface)',
      border: 'none',
    },
    secondary: {
      background: 'var(--color-surface)',
      color: 'var(--color-deep)',
      border: '2px solid var(--color-lime-pop)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--color-muted)',
      border: '2px solid var(--color-champagne)',
    },
  }

  const base = {
    display: 'block',
    width: '100%',
    padding: '16px var(--space-lg)',
    borderRadius: '14px',
    fontFamily: 'var(--font-body)',
    fontSize: '1rem',
    fontWeight: 700,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    transition: 'transform 120ms ease, opacity 120ms ease',
    ...styles[variant],
  }

  return (
    <button
      style={base}
      onClick={disabled ? undefined : onClick}
      onMouseDown={e => { if (!disabled) e.currentTarget.style.transform = 'scale(0.97)' }}
      onMouseUp={e => { e.currentTarget.style.transform = 'scale(1)' }}
      onTouchStart={e => { if (!disabled) e.currentTarget.style.transform = 'scale(0.97)' }}
      onTouchEnd={e => { e.currentTarget.style.transform = 'scale(1)' }}
    >
      {children}
    </button>
  )
}
