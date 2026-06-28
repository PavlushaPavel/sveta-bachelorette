import { useState } from 'react'
import Button from '../components/Button'
import { isPackComplete, PACK_ITEM_COUNT } from '../gameState'
const GAME_ITEMS = [
  { id: 'coffee', mark: 'CO', label: 'кофе' },
  { id: 'prosecco', mark: 'PR', label: 'просекко' },
  { id: 'mic', mark: 'VO', label: 'микрофон' },
  { id: 'eggplant', mark: 'EG', label: 'баклажан' },
  { id: 'tuna', mark: 'TU', label: 'тунец' },
  { id: 'bmw', mark: 'BM', label: 'ключи от BMW' },
  { id: 'fitness', mark: 'FT', label: 'фитнес-резинка' },
  { id: 'flat', mark: 'FL', label: 'договор купли-продажи' },
  { id: 'lusik', mark: 'LU', label: 'Люсик' },
  { id: 'phil', mark: 'PH', label: 'Фил' },
  { id: 'maksim', mark: 'MX', label: 'мысли о Максиме' },
]
export default function Screen09Game({ gameState, onTogglePacked, onNext }) {
  const [done, setDone] = useState(false)
  const complete = isPackComplete(gameState)
  if (done) return (
    <div className="screen">
      <span className="eyebrow">Ready</span>
      <h1 className="screen-title">Сборы завершены.</h1>
      <div className="paper-panel" style={{ animation: 'fadeUp 300ms ease-out both' }}>
        <p style={{ color: 'var(--color-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>Набор немного странный.<br />Но для Светы — идеально.</p>
      </div>
      <div className="screen-cta"><Button onClick={onNext}>Открыть приглашение</Button></div>
    </div>
  )
  return (
    <div className="screen">
      <span className="eyebrow">Mini game</span>
      <h1 className="screen-title">Собери Свету на девичник</h1>
      <div className="screen-body"><p>Выбери {PACK_ITEM_COUNT} обязательных предметов:</p></div>
      <div className="pack-grid" style={{ animation: 'fadeUp 280ms ease-out 320ms both' }}>
        {GAME_ITEMS.map(item => {
          const selected = gameState.packedItems.has(item.id)
          const maxed = !selected && gameState.packedItems.size >= PACK_ITEM_COUNT
          return (
            <div key={item.id} onClick={() => { if (!maxed) onTogglePacked(item.id) }} className={`pack-tile ${selected ? 'selected' : ''}`} style={{ opacity: maxed ? 0.45 : 1, cursor: maxed ? 'not-allowed' : 'pointer' }}>
              <span className="mark" style={{ marginBottom: 10 }}>{item.mark}</span>
              <div style={{ fontSize: '0.78rem', lineHeight: 1.3, marginTop: 8 }}>{item.label}</div>
            </div>
          )
        })}
      </div>
      <div style={{ textAlign: 'center', fontFamily: 'var(--font-display)', fontSize: '0.8rem', fontWeight: 700, color: complete ? 'var(--color-lime-pop)' : 'var(--color-muted)', transition: 'color 200ms ease' }}>
        Выбрано: {gameState.packedItems.size}/{PACK_ITEM_COUNT}
      </div>
      <div className="screen-cta"><Button onClick={() => setDone(true)} disabled={!complete}>Открыть приглашение</Button></div>
    </div>
  )
}
