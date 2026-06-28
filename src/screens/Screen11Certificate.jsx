import Button from '../components/Button'
import PhotoCard from '../components/PhotoCard'
import { photos } from '../photos'
export default function Screen11Certificate() {
  const handleClose = () => {
    const tg = window.Telegram?.WebApp
    if (tg) { tg.MainButton.setText('Принято'); tg.MainButton.show(); tg.MainButton.onClick(() => tg.close()) }
  }
  return (
    <div className="screen">
      <span className="eyebrow">Access granted</span>
      <PhotoCard src={photos.disco} alt="Света с диско-ободком" caption="certified" className="side-photo" style={{ '--tilt': '3deg', '--pos': 'center 30%', minHeight: 260 }} />
      <div className="paper-panel" style={{ border: '2px solid var(--color-gold)', textAlign: 'center', animation: 'fadeUp 400ms ease-out 200ms both' }}>
        <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 700, color: 'var(--color-gold)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 'var(--space-lg)' }}>Сертификат допуска</p>
        <p style={{ fontSize: '0.875rem', color: 'var(--color-muted)', marginBottom: 'var(--space-sm)' }}>Настоящим подтверждается, что</p>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 900, color: 'var(--color-deep)', marginBottom: 'var(--space-md)' }}>Света</h2>
        <p style={{ fontSize: '0.875rem', color: 'var(--color-muted)', marginBottom: 'var(--space-md)' }}>допущена к девичнику уровня:</p>
        <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-lime-pop)', lineHeight: 1.6, marginBottom: 'var(--space-lg)' }}>«30 лет, второй сезон любви,<br />зелёный коктейльный режим»</p>
        <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: 'var(--space-lg)', padding: 'var(--space-md) 0', borderTop: '1px solid var(--color-champagne)', borderBottom: '1px solid var(--color-champagne)' }}>
          <div>
            <p style={{ fontSize: '0.65rem', color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Статус</p>
            <p style={{ fontWeight: 700, fontSize: '0.8rem', marginTop: 2 }}>быть при параде</p>
          </div>
          <div>
            <p style={{ fontSize: '0.65rem', color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Уровень</p>
            <p style={{ fontWeight: 700, fontSize: '0.8rem', marginTop: 2, color: 'var(--color-lime-pop)' }}>100%</p>
          </div>
        </div>
        <p style={{ fontSize: '0.75rem', color: 'var(--color-muted)', lineHeight: 1.6 }}>Ответственные: подруги, Фил, Люсик<br />и немного просекко.</p>
      </div>
      <div className="screen-body" style={{ textAlign: 'center', animation: 'fadeUp 280ms ease-out 700ms both' }}>
        <p style={{ fontWeight: 700 }}>Света, готовься.</p>
        <p>Это будет не просто девичник.</p>
        <p style={{ marginTop: 'var(--space-sm)', color: 'var(--color-muted)', fontSize: '0.9rem' }}>Это будет история, в которую ты снова влипнешь —<br />но в этот раз красиво, при параде и с бокалом в руке.</p>
      </div>
      <div className="screen-cta"><Button onClick={handleClose}>Принято</Button></div>
    </div>
  )
}
