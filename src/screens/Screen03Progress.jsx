import { useState } from 'react'
import ProgressBar from '../components/ProgressBar'
import Button from '../components/Button'
import Toast from '../components/Toast'
import PhotoCard from '../components/PhotoCard'
import { photos } from '../photos'

const STAGES = [
  { percent: 7, label: '7% — Света ещё делает вид, что всё под контролем.', pauseMs: 500 },
  { percent: 32, label: '32% — Кофе начал действовать.', pauseMs: 800 },
  { percent: 69, label: '69% — Просекко уже охлаждается.', pauseMs: 600 },
  { percent: 100, label: '100% — Девичник неизбежен.', pauseMs: 1000 },
]

export default function Screen03Progress({ onNext }) {
  const [complete, setComplete] = useState(false)
  const [showToast, setShowToast] = useState(false)

  const handleComplete = () => {
    setComplete(true)
    setTimeout(() => setShowToast(true), 300)
  }

  return (
    <div className="screen">
      <span className="eyebrow">Readiness scan</span>
      <h1 className="screen-title">Прогресс готовности</h1>
      <PhotoCard
        src={photos.prosecco}
        alt="Света с бокалом"
        caption="prosecco loading"
        className="side-photo"
        style={{ '--tilt': '-2deg', '--pos': 'center 34%', minHeight: 260 }}
      />
      <div className="screen-body"><p>Запускаем расчёт готовности Светы к девичнику…</p></div>
      <div className="paper-panel" style={{ animation: 'fadeUp 280ms ease-out 320ms both' }}>
        <ProgressBar stages={STAGES} onComplete={handleComplete} />
      </div>
      {complete && (
        <div className="screen-cta" style={{ animation: 'fadeUp 300ms ease-out both' }}>
          <Button onClick={onNext}>Посмотреть прогноз</Button>
        </div>
      )}
      <Toast message="Фил посмотрел с осуждением." visible={showToast} />
    </div>
  )
}
