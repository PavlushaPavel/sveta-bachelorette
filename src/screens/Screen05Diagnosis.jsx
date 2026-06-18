import { useState } from 'react'
import Button from '../components/Button'
import Toast from '../components/Toast'
const SYMPTOMS = [
  'Света уже 30, но выглядит так, будто только начала разгоняться',
  'повышенная тяга к красивым машинам',
  'стабильная зависимость от кофе',
  'желание петь при любом удобном случае',
  'склонность к историям, которые начинаются со слов «ну мы просто хотели…»',
  'способность взять фитнес-резинки даже туда, где люди обычно просто отдыхают',
  'интерес к квартирам, еде, просекко и приключениям',
]
export default function Screen05Diagnosis({ onNext }) {
  const [showToast] = useState(true)
  return (
    <div className="screen">
      <h1 className="screen-title">Диагностика</h1>
      <div className="screen-body"><p>Система обнаружила симптомы:</p></div>
      <div style={{ background: 'var(--color-surface)', borderRadius: 16, padding: 'var(--space-lg)', animation: 'fadeUp 280ms ease-out 320ms both' }}>
        {SYMPTOMS.map((s, i) => (
          <p key={i} style={{ fontSize: '0.875rem', lineHeight: 1.6, color: 'var(--color-muted)', padding: 'var(--space-xs) 0', animation: `fadeUp 200ms ease-out ${300 + i * 70}ms both` }}>— {s};</p>
        ))}
      </div>
      <div style={{ background: 'var(--color-champagne)', borderRadius: 12, padding: 'var(--space-md) var(--space-lg)', animation: 'fadeUp 280ms ease-out 900ms both' }}>
        <p style={{ fontWeight: 700, fontSize: '0.9rem' }}>Диагноз:</p>
        <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.85rem', marginTop: 4, color: 'var(--color-lime-pop)' }}>Предсвадебная Света.<br />Стадия активная.<br />Состояние праздничное.</p>
        <p style={{ marginTop: 'var(--space-sm)', fontSize: '0.875rem' }}><strong>Лечение:</strong> Один девичник. Дозировка: до полного веселья.</p>
      </div>
      <div className="screen-cta"><Button onClick={onNext}>Подобрать формат лечения 💚</Button></div>
      <Toast message="🥂 Просекко охлаждается." visible={showToast} />
    </div>
  )
}
