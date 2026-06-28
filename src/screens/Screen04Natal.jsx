import Button from '../components/Button'
const NATAL_ITEMS = [
  { mark: 'CO', text: 'Кофе — в доме жизненной силы.' },
  { mark: 'VO', text: 'Вокал — в доме «а давайте споём».' },
  { mark: 'BM', text: 'BMW — в доме красивых решений.' },
  { mark: 'LU', text: 'Люсик — в доме радости и контроля.' },
  { mark: 'PH', text: 'Фил — в доме осуждения, но с любовью.' },
  { mark: 'EG', text: 'Баклажан — в доме локальных мемов.' },
  { mark: 'TU', text: 'Тунец — в доме загадочной еды.' },
  { mark: 'PR', text: 'Просекко — в доме «ну по одному».' },
  { mark: 'MX', text: 'Максим — в доме второго сезона любви.' },
]
export default function Screen04Natal({ onNext }) {
  return (
    <div className="screen">
      <span className="eyebrow">Astro report</span>
      <h1 className="screen-title">Натальная карта Светы</h1>
      <div className="screen-body">
        <p>Мы построили твою натальную карту на ближайшие дни.</p>
        <p style={{ marginTop: 'var(--space-sm)' }}>Результат необычный:</p>
      </div>
      <div className="paper-panel line-list" style={{ animation: 'fadeUp 280ms ease-out 360ms both' }}>
        {NATAL_ITEMS.map((item, i) => (
          <div key={i} className="line-item" style={{ animation: `fadeUp 200ms ease-out ${400 + i * 80}ms both` }}>
            <span className="mark">{item.mark}</span>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', lineHeight: 1.5 }}>{item.text}</span>
          </div>
        ))}
      </div>
      <div className="paper-panel tight" style={{ background: 'var(--color-champagne)', animation: 'fadeUp 280ms ease-out 1200ms both' }}>
        <p style={{ fontWeight: 700, fontFamily: 'var(--font-body)', fontSize: '0.9rem' }}>Главный прогноз:</p>
        <p style={{ marginTop: 'var(--space-xs)', fontSize: '0.9rem' }}>В ближайшее время тебе категорически показан девичник.</p>
      </div>
      <div className="screen-cta"><Button onClick={onNext}>Принять диагноз</Button></div>
    </div>
  )
}
