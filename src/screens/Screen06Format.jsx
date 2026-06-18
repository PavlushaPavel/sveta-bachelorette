import { useState } from 'react'
import Button from '../components/Button'
const OPTIONS = [
  { id: 1, title: 'Вариант 1', desc: 'Тихий вечер дома, чай, плед, лечь спать в 22:00.', btn: 'Фил бы одобрил, но нет.' },
  { id: 2, title: 'Вариант 2', desc: 'Спортзал, фитнес-резинки, функциональная тренировка, вода без газа.', btn: 'Света бы смогла, но мы не за этим.' },
  { id: 3, title: 'Вариант 3', desc: 'Просекко, еда, смех, истории, песни, красивый образ, зелёный коктейльный вайб и лёгкий хаос.', btn: 'Вот это похоже на правду.' },
]
export default function Screen06Format({ onSetFormat, onNext }) {
  const [chosen, setChosen] = useState(null)
  const [confirmed, setConfirmed] = useState(false)
  const handleClick = (id) => {
    setChosen(id)
    if (id === 3) { onSetFormat(3); setTimeout(() => setConfirmed(true), 300) }
  }
  return (
    <div className="screen">
      <h1 className="screen-title">Выбор формата</h1>
      <div className="screen-body"><p>Какой формат подходит Свете?</p></div>
      {!confirmed ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', animation: 'fadeUp 280ms ease-out 320ms both' }}>
          {OPTIONS.map(opt => (
            <div key={opt.id} style={{ background: chosen !== null && opt.id === 3 ? 'oklch(91% 0.15 132)' : 'var(--color-surface)', borderRadius: 14, padding: 'var(--space-md) var(--space-lg)', border: chosen !== null && opt.id === 3 ? '2px solid var(--color-lime-pop)' : '2px solid transparent', transition: 'all 250ms ease' }}>
              <p style={{ fontWeight: 700, fontSize: '0.85rem', marginBottom: 'var(--space-sm)', color: 'var(--color-muted)' }}>{opt.title}</p>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.5, marginBottom: 'var(--space-md)' }}>{opt.desc}</p>
              <Button onClick={() => handleClick(opt.id)} variant={chosen !== null && opt.id === 3 ? 'primary' : 'secondary'}>{opt.btn}</Button>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ animation: 'fadeUp 300ms ease-out both' }}>
          <div style={{ background: 'var(--color-surface)', borderRadius: 16, padding: 'var(--space-lg)', marginBottom: 'var(--space-lg)' }}>
            <p style={{ fontWeight: 700, marginBottom: 'var(--space-sm)' }}>Выбор подтверждён.</p>
            <p style={{ color: 'var(--color-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>Система одобряет.<br />Люсик виляет хвостом.<br />Фил делает вид, что ему всё равно.<br />Максим начал что-то подозревать.</p>
          </div>
          <Button onClick={onNext}>Что с Максимом? 👀</Button>
        </div>
      )}
    </div>
  )
}
