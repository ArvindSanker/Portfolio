import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'

export default function FullBleed({ src, alt = '', caption, parallax = false, height = '520px' }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-6%', '6%'])

  return (
    <div style={{ margin: '48px -40px' }}>
      <div
        ref={ref}
        style={{
          height,
          overflow: 'hidden',
          borderRadius: '0',
          position: 'relative',
        }}
      >
        <motion.img
          src={src}
          alt={alt}
          style={{
            width: '100%',
            height: parallax ? '115%' : '100%',
            objectFit: 'cover',
            display: 'block',
            y: parallax ? y : 0,
          }}
          loading="lazy"
        />
      </div>
      {caption && (
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '10px',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: 'var(--text-tertiary)',
          marginTop: '12px',
          paddingLeft: '40px',
        }}>
          {caption}
        </p>
      )}
    </div>
  )
}
