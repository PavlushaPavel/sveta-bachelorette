import Button from '../components/Button'
import PhotoCard from '../components/PhotoCard'
import { photos } from '../photos'
const PACK_ITEMS = [
  { mark: 'PR', text: 'настроение «я просто на часик»' },
  { mark: 'VO', text: 'голосовые связки в рабочем состоянии' },
  { mark: 'CO', text: 'кофе заранее, чтобы дожить до просекко' },
  { mark: 'EG', text: 'уважение к баклажанам' },
  { mark: 'TU', text: 'внутреннего тунца' },
  { mark: 'BM', text: 'вайб BMW, даже если едем не на BMW' },
  { mark: 'FT', text: 'фитнес-резинку — только если очень хочется' },
  { mark: 'FL', text: 'мысли о квартирах оставить на потом' },
  { mark: 'PH', text: 'телефон с памятью, но без компромата в общий чат' },
]
export default function Screen08Pack({ onNext }) {
  return (
    <div className="screen">
      <span className="eyebrow">Packing list</span>
      <h1 className="screen-title">Что взять с собой</h1>
      <PhotoCard src={photos.officeBlue} alt="Света в синем образе" caption="chaos kit" className="side-photo" style={{ '--tilt': '3deg', '--pos': 'center 45%', minHeight: 290 }} />
      <div className="screen-body"><p>Перед девичником система рекомендует взять:</p></div>
      <div className="paper-panel line-list" style={{ animation: 'fadeUp 280ms ease-out 320ms both' }}>
        {PACK_ITEMS.map((item, i) => (
          <div key={i} className="line-item" style={{ animation: `fadeUp 180ms ease-out ${350 + i * 60}ms both` }}>
            <span className="mark">{item.mark}</span>
            <span style={{ fontSize: '0.875rem', lineHeight: 1.5 }}>{item.text}</span>
          </div>
        ))}
      </div>
      <div className="paper-panel tight" style={{ background: 'var(--color-champagne)' }}>
        <p style={{ fontSize: '0.875rem', fontWeight: 600 }}>Важно: Фил и Люсик назначаются моральными хранителями праздника.</p>
      </div>
      <div className="screen-cta"><Button onClick={onNext}>Собрать Свету на девичник</Button></div>
    </div>
  )
}
