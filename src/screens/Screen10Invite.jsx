import Button from '../components/Button'

const LIST = [
  'просекко',
  'еда',
  'смех и истории',
  'возможно, песни',
  'возможно, кальян',
  'возможно, лёгкий хаос',
  'и точно много любви',
]

export default function Screen10Invite({ onNext }) {
  return (
    <div className="screen">

      {/* Шапка */}
      <div style={{ textAlign: 'center', animation: 'fadeUp 380ms ease-out 80ms both' }}>
        <p style={{ fontSize: '2.8rem', marginBottom: 'var(--space-xs)' }}>🥂</p>
      </div>

      <h1 className="screen-title" style={{ textAlign: 'center' }}>Света!</h1>

      <div className="screen-body">
        <p>Твои подруги официально приглашают тебя на девичник.</p>
        <p style={{ marginTop: 'var(--space-sm)' }}>Будет всё, что ты любишь:</p>
        <div style={{ marginTop: 'var(--space-sm)', paddingLeft: 'var(--space-md)' }}>
          {LIST.map((item, i) => (
            <p
              key={i}
              style={{
                color: 'var(--color-muted)',
                animation: `fadeUp 160ms ease-out ${360 + i * 55}ms both`,
              }}
            >
              — {item}
            </p>
          ))}
        </div>
      </div>

      {/* Beach Club Stripe Card */}
      <div
        style={{
          background: 'var(--stripe-pattern)',
          borderRadius: 18,
          padding: 'var(--space-xl) var(--space-lg)',
          animation: 'fadeUp 320ms ease-out 780ms both',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Heading на карточке */}
        <p
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 900,
            fontSize: '0.6rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'oklch(97% 0.005 105)',
            textAlign: 'center',
            marginBottom: 'var(--space-lg)',
            textShadow: '0 1px 6px rgba(0,0,0,0.5)',
          }}
        >
          ✦ Официальное приглашение ✦
        </p>

        {/* Детали */}
        {[
          { label: 'ДАТА', value: '11 июля' },
          { label: 'ВРЕМЯ', value: '12:00' },
          { label: 'МЕСТО', value: 'секрет 🤫' },
          { label: 'ДРЕСС-КОД', value: 'зелёный / коктейльный' },
        ].map(({ label, value }, i) => (
          <div
            key={label}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              gap: 'var(--space-md)',
              padding: 'var(--space-sm) 0',
              borderBottom: i < 3 ? '1px solid oklch(97% 0.005 105 / 0.2)' : 'none',
              animation: `fadeUp 180ms ease-out ${860 + i * 70}ms both`,
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.55rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                color: 'oklch(85% 0.03 120)',
                textShadow: '0 1px 4px rgba(0,0,0,0.4)',
                whiteSpace: 'nowrap',
              }}
            >
              {label}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 700,
                fontSize: '0.95rem',
                color: 'oklch(98% 0.005 105)',
                textShadow: '0 1px 6px rgba(0,0,0,0.5)',
                textAlign: 'right',
              }}
            >
              {value}
            </span>
          </div>
        ))}
      </div>

      {/* Цитата */}
      <div
        style={{
          background: 'var(--color-champagne)',
          borderRadius: 14,
          padding: 'var(--space-md) var(--space-lg)',
          animation: 'fadeUp 280ms ease-out 1140ms both',
        }}
      >
        <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--color-deep)' }}>
          Потому что 30 — это не «уже».<br />
          Это когда можно красиво выйти замуж, выпить просекко, спеть, купить квартиру, обсудить баклажаны и всё равно быть в ресурсе.
        </p>
      </div>

      <div className="screen-cta">
        <Button onClick={onNext}>Я готова 🍸</Button>
      </div>
    </div>
  )
}
