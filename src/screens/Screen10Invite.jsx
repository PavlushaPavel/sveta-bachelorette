import Button from '../components/Button'

const LIST = ['красивый вечер','просекко','еда','смех','истории','возможно, песни','возможно, кальян','возможно, лёгкий хаос','и точно много любви.']

export default function Screen10Invite({ onNext }) {
  return (
    <div className="screen">
      <div style={{ textAlign: 'center', animation: 'fadeUp 400ms ease-out 100ms both' }}>
        <p style={{ fontSize: '2.5rem' }}>🥂</p>
      </div>
      <h1 className="screen-title" style={{ textAlign: 'center' }}>Света!</h1>
      <div className="screen-body">
        <p>Твои подруги официально приглашают тебя на девичник.</p>
        <p style={{ marginTop: 'var(--space-md)' }}>Будет всё, что ты любишь:</p>
        <div style={{ marginTop: 'var(--space-sm)', paddingLeft: 'var(--space-md)', color: 'var(--color-muted)' }}>
          {LIST.map((item, i) => (
            <p key={i} style={{ animation: `fadeUp 180ms ease-out ${400 + i * 60}ms both` }}>— {item}</p>
          ))}
        </div>
      </div>
      <div style={{ background: 'var(--color-surface)', borderRadius: 16, padding: 'var(--space-lg)', animation: 'fadeUp 280ms ease-out 1000ms both' }}>
        <p style={{ fontSize: '0.875rem', lineHeight: 1.7 }}>Потому что 30 — это не «уже».<br />Это когда можно красиво выйти замуж, выпить просекко, спеть, купить квартиру, обсудить баклажаны и всё равно быть в ресурсе.</p>
      </div>
      <div style={{ background: 'var(--color-champagne)', borderRadius: 14, padding: 'var(--space-lg)', display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)', animation: 'fadeUp 280ms ease-out 1100ms both' }}>
        <p style={{ fontSize: '0.875rem' }}><strong>Дата:</strong> 11 июля</p>
        <p style={{ fontSize: '0.875rem' }}><strong>Время:</strong> 12:00</p>
        <p style={{ fontSize: '0.875rem' }}><strong>Место:</strong> секрет 🤫</p>
        <p style={{ fontSize: '0.875rem' }}><strong>Дресс-код:</strong> зелёный / коктейльный / быть при параде</p>
      </div>
      <div className="screen-cta"><Button onClick={onNext}>Я готова 🍸</Button></div>
    </div>
  )
}
