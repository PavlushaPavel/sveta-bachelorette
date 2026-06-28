export default function Button({ children, onClick, disabled = false, variant = 'primary' }) {
  return (
    <button
      className={`button ${variant}`}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
    >
      {children}
    </button>
  )
}
