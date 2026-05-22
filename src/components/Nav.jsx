import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, useScroll } from 'framer-motion'
import { useIsMobile } from '../hooks/useIsMobile'

const links = [
  { to: '/', label: 'Work' },
]

const linkedinUrl = 'https://www.linkedin.com/in/arvind-sanker-k-m-810762117/'

export default function Nav() {
  const location = useLocation()
  const { scrollYProgress } = useScroll()
  const [hovered, setHovered] = useState(null)
  const isMobile = useIsMobile()

  function isActive(to) {
    return to === '/' ? location.pathname === '/' : location.pathname === to
  }

  return (
    <>
      {/* Scroll progress — 2px line at very top */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'var(--accent)',
          scaleX: scrollYProgress,
          transformOrigin: '0%',
          zIndex: 200,
        }}
      />

      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '60px',
          zIndex: 100,
          background: 'rgba(249,248,246,0.94)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        {/* Inner container — aligns with page content */}
        <div style={{
          maxWidth: '1360px',
          margin: '0 auto',
          height: '100%',
          padding: '0 var(--px)',
          display: 'flex',
          alignItems: 'center',
          gap: '32px',
        }}>
          {/* Wordmark */}
          <Link to="/" style={{ marginRight: 'auto' }}>
            <span style={{
              fontFamily: 'var(--font)',
              fontSize: '14px',
              fontWeight: 600,
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)',
            }}>
              Arvind Sanker
            </span>
          </Link>

          {/* Nav links — hidden on mobile */}
          {!isMobile && links.map((link, i) => {
            const active = isActive(link.to)
            const hovering = hovered === i
            return (
              <Link
                key={link.to}
                to={link.to}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  position: 'relative',
                  padding: '4px 0',
                  fontSize: '14px',
                  fontWeight: 400,
                  color: active || hovering ? 'var(--text-primary)' : 'var(--text-secondary)',
                  transition: 'color 0.2s',
                }}
              >
                {link.label}
                <motion.span
                  animate={{ scaleX: active || hovering ? 1 : 0 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '1.5px',
                    background: 'var(--accent)',
                    transformOrigin: 'left',
                    display: 'block',
                    borderRadius: '1px',
                  }}
                />
              </Link>
            )
          })}

          {/* Separator */}
          {!isMobile && <div style={{ width: '1px', height: '16px', background: 'var(--border)', flexShrink: 0 }} />}

          {/* Contact */}
          <ContactLink />
        </div>
      </motion.nav>
    </>
  )
}

function ContactLink() {
  const [over, setOver] = useState(false)
  return (
    <a
      href={linkedinUrl}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => setOver(true)}
      onMouseLeave={() => setOver(false)}
      style={{
        fontSize: '13px',
        fontWeight: 500,
        color: over ? 'var(--text-primary)' : 'var(--text-secondary)',
        padding: '6px 16px',
        border: `1px solid ${over ? 'var(--border-hover)' : 'var(--border)'}`,
        borderRadius: '100px',
        transition: 'all 0.2s',
        flexShrink: 0,
      }}
    >
      View LinkedIn
    </a>
  )
}
