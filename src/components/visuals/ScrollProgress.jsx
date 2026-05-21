import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ScrollProgress({ sections, color = 'var(--accent)' }) {
  const [active, setActive] = useState(null)
  const [visible, setVisible] = useState(false)
  const [tooltip, setTooltip] = useState(null)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observers = []
    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { threshold: 0.3 }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [sections])

  function scrollTo(id) {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 12 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'fixed',
            right: '28px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 50,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 0,
          }}
        >
          {sections.map(({ id, label }, i) => {
            const isActive = active === id
            return (
              <div key={id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {i > 0 && (
                  <div style={{
                    width: '1px',
                    height: '20px',
                    background: 'rgba(237,232,222,0.12)',
                  }} />
                )}
                <button
                  onClick={() => scrollTo(id)}
                  onMouseEnter={() => setTooltip(id)}
                  onMouseLeave={() => setTooltip(null)}
                  aria-label={label}
                  style={{
                    width: isActive ? '8px' : '6px',
                    height: isActive ? '8px' : '6px',
                    borderRadius: '50%',
                    border: `1.5px solid ${isActive ? color : 'rgba(237,232,222,0.25)'}`,
                    background: isActive ? color : 'transparent',
                    cursor: 'pointer',
                    padding: 0,
                    transition: 'all 0.25s ease',
                    position: 'relative',
                  }}
                >
                  <AnimatePresence>
                    {tooltip === id && (
                      <motion.span
                        initial={{ opacity: 0, x: 4 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 4 }}
                        transition={{ duration: 0.18 }}
                        style={{
                          position: 'absolute',
                          right: '18px',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          whiteSpace: 'nowrap',
                          fontSize: '10px',
                          fontFamily: 'var(--font-mono)',
                          letterSpacing: '0.06em',
                          textTransform: 'uppercase',
                          color: 'var(--text-secondary)',
                          pointerEvents: 'none',
                        }}
                      >
                        {label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            )
          })}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
