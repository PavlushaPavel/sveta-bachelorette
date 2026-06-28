import Button from '../components/Button'
import PhotoCard from '../components/PhotoCard'
import { photos } from '../photos'

export default function Screen01Mission({ onNext }) {
  return (
    <div className="screen">
      <span className="eyebrow">Sveta Beach Club</span>
      <div className="photo-strip">
        <PhotoCard
          src={photos.prosecco}
          alt="Света с бокалом"
          caption="Prosecco mode"
          className="hero-photo"
          loading="eager"
          style={{ '--tilt': '-3deg', '--pos': 'center 34%', minHeight: 244 }}
        />
        <PhotoCard
          src={photos.lusya}
          alt="Света держит корги Люсю"
          caption="Lusya"
          className="side-photo"
          loading="eager"
          style={{ '--tilt': '4deg', '--pos': '42% center', minHeight: 152 }}
        />
      </div>

      <h1 className="screen-title">Света, привет.</h1>
      <div className="screen-body paper-panel tight">
        <p>Это не просто сообщение.</p>
        <p>Это официальный вход в секретную операцию:</p>
        <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--color-lime-pop)', margin: 'var(--space-md) 0', lineHeight: 1.08, letterSpacing: '-0.02em' }}>
          «Света, Максим и второй сезон любви»
        </p>
        <p>Свете уже 30.</p>
        <p>Максим готовится к браку №2.</p>
        <p>А подруги готовят то, что обязано случиться до свадьбы.</p>
        <p style={{ marginTop: 'var(--space-md)', fontWeight: 700 }}>Правильно.</p>
        <p style={{ fontWeight: 700 }}>Девичник.</p>
      </div>
      <div className="screen-cta">
        <Button onClick={onNext}>Начать миссию</Button>
      </div>
    </div>
  )
}
