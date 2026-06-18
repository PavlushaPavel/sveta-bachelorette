import { useState } from 'react'
import Button from '../components/Button'
import { isPackComplete, PACK_ITEM_COUNT } from '../gameState'
const GAME_ITEMS = [
  { id: 'coffee', emoji: '☕', label: 'кофе' },
  { id: 'prosecco', emoji: '🥂', label: 'просекко' },
  { id: 'mic', emoji: '🎤', label: 'микрофон' },
  { id: 'eggplant', emoji: '🍆', label: 'баклажан' },
  { id: 'tuna', emoji: '🐟', label: 'тунец' },
  { id: 'bmw', emoji: '🚘', label: 'ключи от BMW' },
  { id: 'fitness', emoji: '💪', label: 'фитнес-резинка' },
  { id: 'flat', emoji: '🏠', label: 'договор купли-продажи' },
  { id: 'lusik', emoji: '🐶', label: 'Люсик' },
  { id: 'phil', emoji: '🐈', label: 'Фил' },
  { id: 'maksim', emoji: '💍', label: 'мысли о Максиме' },
]
export default function Screen09Game({ gameState, onTogglePacked, onNext }) {
  const [done, setDone] = useState(false)
  const complete = isPackComplete(gameState)
  if (done) return (
    <div className="screen">
      <h1 className="screen-title">Сборы завершены.</h1>
      <div style={{ background: 'var(--color-surface)', borderRadius: 16, padding: 'var(--space-lg)', animation: 'fadeUp 300ms ease-out both' }}>
        <p style={{ color: 'var(--color-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>Набор немного странный.<br />Но для Светы — идеально.</p>
      </div>
      <div className="screen-cta"><Button onClick={onNext}>Открыть приглашение 💚</Button></div>
    </div>
  )
  return (
    <div className="screen">
      <h1 className="screen-title">Собери Свету на девичник</h1>
      <div className="screen-body"><p>Выбери {PACK_ITEM_COUNT} обязательных предметов:</p></div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-sm)', animation: 'fadeUp 280ms ease-out 320ms both' }}>
        {GAME_ITEMS.map(item => {
          const selected = gameState.packedItems.has(item.id)
          const maxed = !selected && gameState.packedItems.size >= PACK_ITEM_COUNT
          return (
            <div key={item.id} onClick={() => { if (!maxed) onTogglePacked(item.id) }} style={{ background: selected ? 'oklch(88% 0.16 132)' : 'var(--color-surface)', border: selected ? '2px solid var(--color-lime-pop)' : '2px solid transparent', borderRadius: 14, padding: 'var(--space-md) var(--space-sm)', textAlign: 'center', cursor: maxed ? 'not-allowed' : 'pointer', opacity: maxed ? 0.45 : 1, transform: selected ? 'scale(1.04)' : 'scale(1)', transition: 'all 150ms ease-out' }}>
              <div style={{ fontSize: '1.75rem', marginBottom: 4 }}>{item.emoji}</div>
              <div style={{ fontSize: '0.7rem', color: 'var(--color-muted)', lineHeight: 1.3 }}>{item.label}</div>
            </div>
          )
        })}
      </div>
      <div style={{ textAlign: 'center', fontFamily: 'var(--font-display)', fontSize: '0.8rem', fontWeight: 700, color: complete ? 'var(--color-lime-pop)' : 'var(--color-muted)', transition: 'color 200ms ease' }}>
        Выбрано: {gameState.packedItems.size}/{PACK_ITEM_COUNT}
      </div>
      <div className="screen-cta"><Button onClick={() => setDone(true)} disabled={!complete}>Открыть приглашение 💚</Button></div>
    </div>
  )
}
