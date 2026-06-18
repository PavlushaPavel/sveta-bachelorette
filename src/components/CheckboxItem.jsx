export default function CheckboxItem({ label, checked, onChange }) {
  return (
    <label
      onClick={onChange}
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 'var(--space-md)',
        padding: 'var(--space-sm) 0',
        cursor: 'pointer',
        userSelect: 'none',
      }}
    >
      <span style={{
        flexShrink: 0,
        width: 24,
        height: 24,
        borderRadius: 6,
        border: `2px solid ${checked ? 'var(--color-lime-pop)' : 'var(--color-muted)'}`,
        background: checked ? 'var(--color-lime-pop)' : 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 150ms ease',
        marginTop: 1,
      }}>
        {checked && (
          <svg width="13" height="10" viewBox="0 0 13 10" fill="none">
            <path d="M1.5 5L5 8.5L11.5 1.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </span>
      <span style={{
        fontFamily: 'var(--font-body)',
        fontSize: '0.9rem',
        lineHeight: 1.5,
        color: checked ? 'var(--color-deep)' : 'var(--color-muted)',
        transition: 'color 150ms ease',
      }}>
        {label}
      </span>
    </label>
  )
}
