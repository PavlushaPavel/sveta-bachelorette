import Button from '../components/Button'
const NATAL_ITEMS = [
  { emoji: '☕', text: 'Кофе — в доме жизненной силы.' },
  { emoji: '🎤', text: 'Вокал — в доме «а давайте споём».' },
  { emoji: '🚘', text: 'BMW — в доме красивых решений.' },
  { emoji: '🐶', text: 'Люсик — в доме радости и контроля.' },
  { emoji: '🐈', text: 'Фил — в доме осуждения, но с любовью.' },
  { emoji: '🍆', text: 'Баклажан — в доме локальных мемов.' },
  { emoji: '🐟', text: 'Тунец — в доме загадочной еды.' },
  { emoji: '🥂', text: 'Просекко — в доме «ну по одному».' },
  { emoji: '💍', text: 'Максим — в доме второго сезона любви.' },
]
export default function Screen04Natal({ onNext }) {
  return (
    <div className="screen">
      <h1 className="screen-title">Натальная карта Светы</h1>
      <div className="screen-body">
        <p>Мы построили твою натальную карту на ближайшие дни.</p>
        <p style={{ marginTop: 'var(--space-sm)' }}>Результат необычный:</p>
      </div>
      <div style={{ background: 'var(--color-surface)', borderRadius: 16, padding: 'var(--space-lg)', display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)', animation: 'fadeUp 280ms ease-out 360ms both' }}>
        {NATAL_ITEMS.map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-md)', animation: `fadeUp 200ms ease-out ${400 + i * 80}ms both` }}>
            <span style={{ fontSize: '1.2rem', flexShrink: 0 }}>{item.emoji}</span>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', lineHeight: 1.5 }}>{item.text}</span>
          </div>
        ))}
      </div>
      <div style={{ background: 'var(--color-champagne)', borderRadius: 12, padding: 'var(--space-md) var(--space-lg)', animation: 'fadeUp 280ms ease-out 1200ms both' }}>
        <p style={{ fontWeight: 700, fontFamily: 'var(--font-body)', fontSize: '0.9rem' }}>Главный прогноз:</p>
        <p style={{ marginTop: 'var(--space-xs)', fontSize: '0.9rem' }}>В ближайшее время тебе категорически показан девичник.</p>
      </div>
      <div className="screen-cta"><Button onClick={onNext}>Принять диагноз 🍾</Button></div>
    </div>
  )
}
