import Button from '../components/Button'
const PACK_ITEMS = [
  { emoji: '🥂', text: 'настроение «я просто на часик»' },
  { emoji: '🎤', text: 'голосовые связки в рабочем состоянии' },
  { emoji: '☕', text: 'кофе заранее, чтобы дожить до просекко' },
  { emoji: '🍆', text: 'уважение к баклажанам' },
  { emoji: '🐟', text: 'внутреннего тунца' },
  { emoji: '🚘', text: 'вайб BMW, даже если едем не на BMW' },
  { emoji: '💪', text: 'фитнес-резинку — только если очень хочется' },
  { emoji: '🏠', text: 'мысли о квартирах оставить на потом' },
  { emoji: '📱', text: 'телефон с памятью, но без компромата в общий чат' },
]
export default function Screen08Pack({ onNext }) {
  return (
    <div className="screen">
      <h1 className="screen-title">Что взять с собой</h1>
      <div className="screen-body"><p>Перед девичником система рекомендует взять:</p></div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)', animation: 'fadeUp 280ms ease-out 320ms both' }}>
        {PACK_ITEMS.map((item, i) => (
          <div key={i} style={{ display: 'flex', gap: 'var(--space-md)', alignItems: 'flex-start', background: 'var(--color-surface)', padding: 'var(--space-sm) var(--space-md)', borderRadius: 10, animation: `fadeUp 180ms ease-out ${350 + i * 60}ms both` }}>
            <span style={{ fontSize: '1.2rem', flexShrink: 0 }}>{item.emoji}</span>
            <span style={{ fontSize: '0.875rem', lineHeight: 1.5 }}>{item.text}</span>
          </div>
        ))}
      </div>
      <div style={{ background: 'var(--color-champagne)', borderRadius: 12, padding: 'var(--space-md) var(--space-lg)' }}>
        <p style={{ fontSize: '0.875rem', fontWeight: 600 }}>Важно: Фил и Люсик назначаются моральными хранителями праздника.</p>
      </div>
      <div className="screen-cta"><Button onClick={onNext}>Собрать Свету на девичник 😎</Button></div>
    </div>
  )
}
