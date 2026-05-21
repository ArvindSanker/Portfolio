export default function BrowserFrame({ src, alt = '', url = 'dashboard.razorpay.com', caption }) {
  return (
    <div style={{ margin: '32px 0' }}>
      <div style={{
        border: '1px solid var(--border)',
        borderRadius: '14px',
        overflow: 'hidden',
        background: '#1a1511',
      }}>
        {/* Chrome bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '10px 16px',
          background: '#1a1511',
          borderBottom: '1px solid rgba(237,232,222,0.06)',
        }}>
          <div style={{ display: 'flex', gap: '6px', flexShrink: 0 }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f57' }} />
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#febc2e' }} />
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#28c840' }} />
          </div>
          <div style={{
            flex: 1,
            background: 'rgba(237,232,222,0.05)',
            borderRadius: '6px',
            padding: '4px 10px',
            fontSize: '11px',
            fontFamily: 'var(--font-mono)',
            color: 'var(--text-tertiary)',
            letterSpacing: '0.02em',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}>
            {url}
          </div>
        </div>
        {/* Screenshot */}
        <img
          src={src}
          alt={alt}
          style={{ width: '100%', display: 'block', verticalAlign: 'middle' }}
          loading="lazy"
        />
        {caption && (
          <div style={{
            padding: '10px 16px',
            fontFamily: 'var(--font-mono)',
            fontSize: '10px',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--text-tertiary)',
            borderTop: '1px solid rgba(237,232,222,0.06)',
          }}>
            {caption}
          </div>
        )}
      </div>
    </div>
  )
}
