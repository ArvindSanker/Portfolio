export default function PhoneFrame({ src, alt = '', caption }) {
  return (
    <div style={{ margin: '32px auto', maxWidth: '320px' }}>
      <div style={{
        border: '2px solid rgba(237,232,222,0.15)',
        borderRadius: '40px',
        overflow: 'hidden',
        background: '#0e0b08',
        padding: '12px',
        boxShadow: '0 0 0 1px rgba(237,232,222,0.04) inset',
      }}>
        <div style={{ borderRadius: '30px', overflow: 'hidden' }}>
          <img src={src} alt={alt} style={{ width: '100%', display: 'block', verticalAlign: 'middle' }} loading="lazy" />
        </div>
      </div>
      {caption && (
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '10px',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: 'var(--text-tertiary)',
          marginTop: '12px',
          textAlign: 'center',
        }}>
          {caption}
        </p>
      )}
    </div>
  )
}
