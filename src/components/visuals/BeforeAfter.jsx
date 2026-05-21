export default function BeforeAfter({ before, after }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '12px',
      margin: '32px 0',
    }}>
      <FramedImage src={before.src} alt={before.label} label={before.label} variant="before" />
      <FramedImage src={after.src} alt={after.label} label={after.label} variant="after" />
    </div>
  )
}

function FramedImage({ src, alt, label, variant }) {
  const isAfter = variant === 'after'
  return (
    <div style={{
      border: '1px solid var(--border)',
      borderRadius: '10px',
      overflow: 'hidden',
      background: 'var(--bg-card)',
    }}>
      <img src={src} alt={alt} style={{ width: '100%', display: 'block', verticalAlign: 'middle' }} loading="lazy" />
      <div style={{
        padding: '9px 12px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        borderTop: '1px solid var(--border)',
      }}>
        <span style={{
          fontSize: '10px',
          fontWeight: 600,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          padding: '3px 8px',
          borderRadius: '100px',
          background: isAfter ? 'rgba(201,169,110,0.12)' : 'rgba(255,80,80,0.1)',
          color: isAfter ? 'var(--accent)' : '#ff6b6b',
          fontFamily: 'var(--font-mono)',
        }}>
          {label}
        </span>
      </div>
    </div>
  )
}
