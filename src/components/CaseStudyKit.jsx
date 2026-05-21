import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1]

/* ─── Sticky section navigation ─────────────────────────────────────── */
export function SectionNav({ sections, color = '#2d68fe' }) {
  const [active, setActive] = useState(sections[0]?.id)

  useEffect(() => {
    const observers = sections.map(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { rootMargin: '-20% 0px -70% 0px' }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(obs => obs?.disconnect())
  }, [sections])

  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div style={{
      position: 'sticky',
      top: '60px',
      zIndex: 40,
      background: 'rgba(249,248,246,0.94)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid var(--border)',
      display: 'flex',
      overflowX: 'auto',
      scrollbarWidth: 'none',
      padding: '0 48px',
    }}>
      {sections.map(s => (
        <button
          key={s.id}
          onClick={() => scrollTo(s.id)}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '10px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: active === s.id ? 'var(--text-primary)' : 'var(--text-tertiary)',
            padding: '14px 20px',
            background: 'none',
            border: 'none',
            borderBottom: `2px solid ${active === s.id ? color : 'transparent'}`,
            cursor: 'pointer',
            transition: 'color 0.2s, border-color 0.2s',
            whiteSpace: 'nowrap',
            flexShrink: 0,
          }}
        >
          {s.label}
        </button>
      ))}
    </div>
  )
}

/* ─── Image / visual placeholder slot ───────────────────────────────── */
export function VisualSlot({ src, label = 'Design Screenshot', aspect = '16/9', caption, wide = false }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease }}
      style={{ margin: wide ? '0 -60px' : '0', marginTop: '28px' }}
    >
      {src ? (
        <div style={{
          border: '1px solid var(--border)',
          borderRadius: wide ? '12px' : '16px',
          overflow: 'hidden',
          boxShadow: '0 2px 24px rgba(28,26,23,0.07)',
          background: 'var(--bg-soft)',
        }}>
          <img
            src={src}
            alt={label}
            style={{ width: '100%', display: 'block', verticalAlign: 'middle' }}
            loading="lazy"
          />
        </div>
      ) : (
        <div style={{
          aspectRatio: aspect,
          background: 'var(--bg-soft)',
          border: '1px dashed rgba(28,26,23,0.12)',
          borderRadius: wide ? '12px' : '16px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Subtle grid */}
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'linear-gradient(rgba(28,26,23,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(28,26,23,0.03) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            pointerEvents: 'none',
          }} />
          {/* Corner marks */}
          {[['0','0'], ['0','auto'], ['auto','0'], ['auto','auto']].map(([t,b], i) => (
            <div key={i} style={{
              position: 'absolute',
              top: t === '0' ? '12px' : 'auto',
              bottom: b === '0' ? '12px' : 'auto',
              left: i < 2 ? '12px' : 'auto',
              right: i >= 2 ? '12px' : 'auto',
              width: '12px',
              height: '12px',
              borderTop: (t === '0') ? '1px solid rgba(28,26,23,0.15)' : 'none',
              borderBottom: (b === '0') ? '1px solid rgba(28,26,23,0.15)' : 'none',
              borderLeft: (i < 2) ? '1px solid rgba(28,26,23,0.15)' : 'none',
              borderRight: (i >= 2) ? '1px solid rgba(28,26,23,0.15)' : 'none',
            }} />
          ))}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ opacity: 0.2, position: 'relative' }}>
            <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M3 9h18" stroke="currentColor" strokeWidth="1.5"/>
            <circle cx="7.5" cy="6" r="1" fill="currentColor"/>
            <circle cx="10.5" cy="6" r="1" fill="currentColor"/>
          </svg>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '10px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--text-tertiary)',
            position: 'relative',
          }}>
            {label}
          </span>
        </div>
      )}
      {caption && (
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          color: 'var(--text-tertiary)',
          letterSpacing: '0.04em',
          textAlign: 'center',
          paddingTop: '10px',
        }}>
          {caption}
        </div>
      )}
    </motion.div>
  )
}

/* ─── Two-up image grid ──────────────────────────────────────────────── */
export function VisualGrid({ slots }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${slots.length}, 1fr)`, gap: '12px' }}>
      {slots.map((s, i) => (
        <VisualSlot key={i} {...s} />
      ))}
    </div>
  )
}

/* ─── Pull-quote / insight callout ──────────────────────────────────── */
export function InsightBlock({ children, color = '#2d68fe', label = 'Key Insight' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -12 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, ease }}
      style={{
        margin: '40px 0',
        padding: '28px 32px',
        borderLeft: `3px solid ${color}`,
        background: `${color}08`,
        borderRadius: '0 10px 10px 0',
      }}
    >
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '9px',
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color,
        opacity: 0.7,
        marginBottom: '10px',
      }}>
        {label}
      </div>
      <p style={{
        fontFamily: 'var(--font)',
        fontStyle: 'italic',
        fontSize: '19px',
        fontWeight: 300,
        letterSpacing: '-0.01em',
        lineHeight: 1.55,
        color: 'var(--text-primary)',
        margin: 0,
      }}>
        {children}
      </p>
    </motion.div>
  )
}

/* ─── Scroll progress sidebar (dots) ────────────────────────────────── */
export function ScrollProgress({ sections, color = '#2d68fe' }) {
  const [active, setActive] = useState(sections[0]?.id)

  useEffect(() => {
    const observers = sections.map(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { rootMargin: '-30% 0px -60% 0px' }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(obs => obs?.disconnect())
  }, [sections])

  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div style={{
      position: 'fixed',
      right: '28px',
      top: '50%',
      transform: 'translateY(-50%)',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      zIndex: 30,
    }}>
      {sections.map(s => (
        <button
          key={s.id}
          onClick={() => scrollTo(s.id)}
          title={s.label}
          style={{
            width: active === s.id ? '20px' : '6px',
            height: '6px',
            borderRadius: '3px',
            background: active === s.id ? color : 'rgba(28,26,23,0.12)',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            transition: 'all 0.35s cubic-bezier(0.16,1,0.3,1)',
          }}
        />
      ))}
    </div>
  )
}

/* ─── useInView (local copy to avoid import clash) ───────────────────── */
function useInView(ref, options) {
  const [inView, setInView] = useState(false)
  useEffect(() => {
    if (!ref.current) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); obs.disconnect() }
    }, options)
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return inView
}
