import Button from '../components/Button'
export default function Screen07Maksim({ onNext }) {
  return (
    <div className="screen">
      <h1 className="screen-title">Отдельная проверка по жениху</h1>
      <div style={{ background: 'var(--color-surface)', borderRadius: 16, padding: 'var(--space-lg)', display: 'flex', flexDirection: 'column', gap: 4, animation: 'fadeUp 280ms ease-out 280ms both' }}>
        <p style={{ fontSize: '0.9rem' }}><strong>Жених:</strong> Максим.</p>
        <p style={{ fontSize: '0.9rem' }}><strong>Статус:</strong> будущий муж Светы.</p>
        <p style={{ fontSize: '0.9rem' }}><strong>Особенность:</strong> для Максима это брак №2.</p>
      </div>
      <div className="screen-body" style={{ animation: 'fadeUp 280ms ease-out 400ms both' }}>
        <p>Для Светы — премьера.</p>
        <p>Для Максима — второй сезон.</p>
        <p>Для всех нас — романтический сериал, который мы уже хотим смотреть.</p>
      </div>
      <div style={{ background: 'var(--color-champagne)', borderRadius: 12, padding: 'var(--space-md) var(--space-lg)', animation: 'fadeUp 280ms ease-out 520ms both' }}>
        <p style={{ fontWeight: 700, fontSize: '0.85rem', marginBottom: 'var(--space-xs)' }}>Вывод системы:</p>
        <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.8rem', color: 'var(--color-lime-pop)', lineHeight: 1.5 }}>«Света & Максим. Второй сезон любви.<br />Главная роль — Света.»</p>
        <p style={{ marginTop: 'var(--space-sm)', fontSize: '0.875rem', color: 'var(--color-muted)', lineHeight: 1.5 }}>В этом сезоне: больше просекко, больше нежности, больше красивых образов, и, возможно, чуть меньше холостой жизни.</p>
      </div>
      <div className="screen-cta"><Button onClick={onNext}>Сезон одобрен 💍</Button></div>
    </div>
  )
}
