import Button from '../components/Button'
import PhotoCard from '../components/PhotoCard'
import { photos } from '../photos'

const LIST = ['красивый вечер','просекко','еда','смех','истории','возможно, песни','возможно, кальян','возможно, лёгкий хаос','и точно много любви.']

export default function Screen10Invite({ onNext }) {
  return (
    <div className="screen">
      <span className="eyebrow">Official invite</span>
      <PhotoCard
        src={photos.singingSolo}
        alt="Света одна поёт на сцене в красном платье"
        caption="11 July"
        className="hero-photo"
        style={{ '--tilt': '-2deg', '--pos': 'center 26%', minHeight: 380 }}
      />
      <h1 className="screen-title">Света!</h1>
      <div className="screen-body paper-panel tight">
        <p>Твои подруги официально приглашают тебя на девичник.</p>
        <p style={{ marginTop: 'var(--space-md)' }}>Будет всё, что ты любишь:</p>
        <div style={{ marginTop: 'var(--space-sm)', paddingLeft: 'var(--space-md)', color: 'var(--color-muted)' }}>
          {LIST.map((item, i) => (
            <p key={i} style={{ animation: `fadeUp 180ms ease-out ${400 + i * 60}ms both` }}>— {item}</p>
          ))}
        </div>
      </div>
      <div className="paper-panel dark" style={{ animation: 'fadeUp 280ms ease-out 1000ms both' }}>
        <p style={{ fontSize: '0.875rem', lineHeight: 1.7 }}>Потому что 30 — это не «уже».<br />Это когда можно красиво выйти замуж, выпить просекко, спеть, купить квартиру, обсудить баклажаны и всё равно быть в ресурсе.</p>
      </div>
      <div className="paper-panel" style={{ background: 'var(--color-champagne)', display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)', animation: 'fadeUp 280ms ease-out 1100ms both' }}>
        <p style={{ fontSize: '0.875rem' }}><strong>Дата:</strong> 11 июля</p>
        <p style={{ fontSize: '0.875rem' }}><strong>Время:</strong> 12:00</p>
        <p style={{ fontSize: '0.875rem' }}><strong>Место:</strong> секрет</p>
        <p style={{ fontSize: '0.875rem' }}><strong>Дресс-код:</strong> зелёный / коктейльный / быть при параде</p>
      </div>
      <div className="screen-cta"><Button onClick={onNext}>Я готова</Button></div>
    </div>
  )
}
