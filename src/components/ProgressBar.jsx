import { useState, useEffect, useRef } from 'react'

export default function ProgressBar({ stages, onComplete }) {
  const [stageIndex, setStageIndex] = useState(-1)
  const [visibleLabels, setVisibleLabels] = useState([])
  const onCompleteRef = useRef(onComplete)

  useEffect(() => {
    onCompleteRef.current = onComplete
  }, [onComplete])

  useEffect(() => {
    let cancelled = false
    let totalDelay = 600

    stages.forEach((stage, i) => {
      totalDelay += stage.pauseMs
      const delay = totalDelay

      setTimeout(() => {
        if (cancelled) return
        setStageIndex(i)
        setVisibleLabels(prev => [...prev, stage.label])

        if (i === stages.length - 1) {
          setTimeout(() => { if (!cancelled) onCompleteRef.current?.() }, 800)
        }
      }, delay)
    })

    return () => { cancelled = true }
  }, [stages])

  const currentPercent = stageIndex >= 0 ? stages[stageIndex].percent : 0

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--color-muted)' }}>
          Готовность Светы к девичнику
        </span>
        <span style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1rem',
          fontWeight: 700,
          color: 'var(--color-lime-pop)',
          animation: currentPercent === 100 ? 'pulse 600ms ease-in-out 3' : 'none',
        }}>
          {currentPercent}%
        </span>
      </div>

      <div style={{
        height: 12,
        borderRadius: 8,
        background: 'var(--color-champagne)',
        overflow: 'hidden',
      }}>
        <div style={{
          height: '100%',
          borderRadius: 8,
          background: 'var(--color-lime-pop)',
          width: `${currentPercent}%`,
          transition: 'width 600ms cubic-bezier(0.22, 1, 0.36, 1)',
        }} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
        {visibleLabels.map((label, i) => (
          <p key={i} style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.875rem',
            color: 'var(--color-muted)',
            animation: 'fadeUp 250ms ease-out both',
          }}>
            {label}
          </p>
        ))}
      </div>
    </div>
  )
}
