export default function AnnotatedImage({ src, alt = '', annotations = [] }) {
  return (
    <div style={{ margin: '32px 0' }}>
      <div style={{ position: 'relative', border: '1px solid var(--border)', borderRadius: '14px', overflow: 'hidden' }}>
        <img src={src} alt={alt} style={{ width: '100%', display: 'block', verticalAlign: 'middle' }} loading="lazy" />
        {annotations.map(({ x, y, label }, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: `${x}%`,
              top: `${y}%`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <div style={{
              width: '22px',
              height: '22px',
              borderRadius: '50%',
              background: 'var(--accent)',
              color: '#0e0b08',
              fontSize: '11px',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--font-mono)',
              boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
            }}>
              {i + 1}
            </div>
          </div>
        ))}
      </div>
      {annotations.length > 0 && (
        <ol style={{ marginTop: '16px', paddingLeft: '0', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {annotations.map(({ label }, i) => (
            <li key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <span style={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                background: 'rgba(201,169,110,0.15)',
                color: 'var(--accent)',
                fontSize: '10px',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-mono)',
                flexShrink: 0,
              }}>
                {i + 1}
              </span>
              <span style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{label}</span>
            </li>
          ))}
        </ol>
      )}
    </div>
  )
}
