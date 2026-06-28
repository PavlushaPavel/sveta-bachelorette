import { useState } from 'react'
import CheckboxItem from '../components/CheckboxItem'
import Button from '../components/Button'
import Toast from '../components/Toast'
import { isIdentityConfirmed } from '../gameState'
import PhotoCard from '../components/PhotoCard'
import { photos } from '../photos'

const IDENTITY_ITEMS = [
  { id: 'bmw', label: 'любит BMW' },
  { id: 'coffee', label: 'пьёт кофе как отдельный вид топлива' },
  { id: 'vocal', label: 'любит петь и ходить на вокал' },
  { id: 'stories', label: 'умеет влипать в интересные истории' },
  { id: 'phil', label: 'у неё есть кот Фил' },
  { id: 'lusik', label: 'у неё есть корги Люсик' },
  { id: 'aquapark', label: 'любит аквапарк' },
  { id: 'hookah', label: 'уважает кальян и просекко' },
  { id: 'fitness', label: 'может взять фитнес-резинки даже на отдых в Абу-Даби' },
  { id: 'flat', label: 'покупка квартир — это не стресс, а стиль жизни' },
  { id: 'meme', label: 'баклажаны и тунец — это не просто еда, это локальный мем' },
]

export default function Screen02Identity({ gameState, onToggleChecked, onNext }) {
  const [confirmed, setConfirmed] = useState(false)
  const [showToast, setShowToast] = useState(false)

  const handleConfirm = () => {
    setConfirmed(true)
    setTimeout(() => setShowToast(true), 400)
  }

  return (
    <div className="screen">
      <span className="eyebrow">Identity check</span>
      <h1 className="screen-title">Проверка личности</h1>
      <PhotoCard
        src={photos.fullBodyWhite}
        alt="Света в белом платье у каменной стены"
        caption="main character"
        className="hero-photo contain"
        style={{ '--tilt': '2deg', '--pos': 'center top', minHeight: 430, aspectRatio: '0.62' }}
      />
      <div className="screen-body">
        <p>Для допуска к девичнику нужно подтвердить, что перед нами настоящая Света.</p>
        <p style={{ marginTop: 'var(--space-sm)' }}>Отметь всё, что совпадает:</p>
      </div>
      <div className="paper-panel tight" style={{ animation: 'fadeUp 280ms ease-out 360ms both' }}>
        {IDENTITY_ITEMS.map(item => (
          <CheckboxItem key={item.id} label={item.label} checked={gameState.checkedItems.has(item.id)} onChange={() => onToggleChecked(item.id)} />
        ))}
      </div>
      {!confirmed ? (
        <div className="screen-cta">
          <Button onClick={handleConfirm} disabled={!isIdentityConfirmed(gameState)}>Подтвердить личность</Button>
        </div>
      ) : (
        <div style={{ animation: 'fadeUp 300ms ease-out both' }}>
          <div className="paper-panel" style={{ marginBottom: 'var(--space-lg)' }}>
            <p style={{ fontWeight: 700, marginBottom: 'var(--space-sm)' }}>Личность подтверждена.</p>
            <p style={{ color: 'var(--color-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
              Перед нами: Света. 30 лет. Женщина, легенда, будущая жена, кофейный двигатель, вокальная дива и человек, который умеет превращать жизнь в интересную историю.
            </p>
          </div>
          <Button onClick={onNext}>Продолжить</Button>
        </div>
      )}
      <Toast message="Люсик присоединился к миссии." visible={showToast} />
    </div>
  )
}
