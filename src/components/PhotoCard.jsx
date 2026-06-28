export default function PhotoCard({
  src,
  alt,
  caption,
  className = '',
  style,
  loading = 'lazy',
}) {
  return (
    <figure className={`photo-card ${className}`} style={style}>
      <img src={src} alt={alt} loading={loading} />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}
