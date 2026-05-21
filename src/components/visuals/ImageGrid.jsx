import { useState } from 'react'

export default function ImageGrid({ images = [], cols = 2 }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: `repeat(${cols}, 1fr)`,
      gap: '12px',
      margin: '32px 0',
    }}>
      {images.map(({ src, alt = '', caption }, i) => (
        <GridItem key={i} src={src} alt={alt} caption={caption} />
      ))}
    </div>
  )
}

function GridItem({ src, alt, caption }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: '1px solid var(--border)',
        borderRadius: '10px',
        overflow: 'hidden',
        background: 'var(--bg-card)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'transform 0.25s ease',
      }}
    >
      <img src={src} alt={alt} style={{ width: '100%', display: 'block', verticalAlign: 'middle' }} loading="lazy" />
      {caption && (
        <div style={{
          padding: '9px 12px',
          fontFamily: 'var(--font-mono)',
          fontSize: '10px',
          letterSpacing: '0.07em',
          textTransform: 'uppercase',
          color: 'var(--text-tertiary)',
          borderTop: '1px solid var(--border)',
        }}>
          {caption}
        </div>
      )}
    </div>
  )
}
