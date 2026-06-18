import Button from '../components/Button'

export default function Screen01Mission({ onNext }) {
  return (
    <div className="screen" style={{ justifyContent: 'center', minHeight: '100vh' }}>
      <div style={{ textAlign: 'center', animation: 'fadeUp 400ms ease-out 100ms both' }}>
        <p style={{ fontSize: '2.5rem', marginBottom: 'var(--space-md)' }}>🍸</p>
      </div>
      <h1 className="screen-title" style={{ textAlign: 'center' }}>Света, привет.</h1>
      <div className="screen-body">
        <p>Это не просто сообщение.</p>
        <p>Это официальный вход в секретную операцию:</p>
        <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9rem', color: 'var(--color-lime-pop)', margin: 'var(--space-md) 0', lineHeight: 1.4 }}>
          «Света, Максим и второй сезон любви»
        </p>
        <p>Свете уже 30.</p>
        <p>Максим готовится к браку №2.</p>
        <p>А подруги готовят то, что обязано случиться до свадьбы.</p>
        <p style={{ marginTop: 'var(--space-md)', fontWeight: 700 }}>Правильно.</p>
        <p style={{ fontWeight: 700 }}>Девичник.</p>
      </div>
      <div className="screen-cta">
        <Button onClick={onNext}>Начать миссию 🍸</Button>
      </div>
    </div>
  )
}
