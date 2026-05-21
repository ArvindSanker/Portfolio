import { useRef, useState, useEffect } from 'react'
import { useIsMobile } from '../hooks/useIsMobile'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1]

function FadeUp({ children, delay = 0, style = {} }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease, delay }}
      style={style}
    >
      {children}
    </motion.div>
  )
}

function useISTTime() {
  const [time, setTime] = useState('')
  useEffect(() => {
    function update() {
      setTime(new Date().toLocaleTimeString('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      }))
    }
    update()
    const id = setInterval(update, 10000)
    return () => clearInterval(id)
  }, [])
  return time
}

const career = [
  { years: '2022–23', role: 'Senior Communication Designer', company: 'Razorpay' },
  { years: '2022–23', role: 'Designer in Residence', company: '10kDesigners' },
  { years: '2021–22', role: 'Communication Designer', company: 'Razorpay' },
  { years: '2019–21', role: 'Senior Designer', company: 'Simplilearn' },
  { years: '2018–19', role: 'Graphic Designer', company: 'Orita Sinclair' },
]

const projects = [
  {
    index: '01',
    to: '/gcms',
    title: 'Gift Card Management System',
    subtitle: 'Self-Serve Order Placement',
    description: 'Replaced manual reseller onboarding with a merchant-owned gift card operation. Zomato, Lenskart, and Flipkart were losing revenue — we fixed that.',
    tags: ['B2B Platform', 'Enterprise UX'],
    outcome: 'End-to-end product design',
    color: '#2d68fe',
  },
  {
    index: '02',
    to: '/linked-payments',
    title: 'Linked Payments',
    subtitle: 'Gift Cards on Checkout',
    description: 'Atomic split payments — gift card + UPI in a single session. Solved the denomination mismatch problem that blocked merchants from enabling gift card redemption.',
    tags: ['Payments', 'API Design'],
    outcome: '5 decisions → API council standard',
    color: '#7c3aed',
  },
  {
    index: '03',
    to: '/pay-with-points',
    title: 'Pay With Points',
    subtitle: 'PaywithRewards — Live Product',
    description: 'Banks issue ₹10,000 Cr in reward points every year. We embedded redemption natively into checkout. Live across 25+ merchants today.',
    tags: ['Live Product', 'User Research'],
    outcome: '15 of 20 research participants preferred',
    color: '#10b981',
  },
]

export default function Home() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 48])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const time = useISTTime()
  const isMobile = useIsMobile()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      {/* Hero */}
      <section
        ref={heroRef}
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '60px var(--px) 80px',
          maxWidth: '1000px',
          margin: '0 auto',
        }}
      >
        <motion.div style={{ y: heroY, opacity: heroOpacity }}>
          {/* Availability + time */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
            style={{ display: 'flex', alignItems: 'center', marginBottom: '40px', gap: '24px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span className="pulse-dot" />
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--text-tertiary)',
              }}>
                Open to opportunities
              </span>
            </div>
            {time && (
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                letterSpacing: '0.06em',
                color: 'var(--text-tertiary)',
              }}>
                {time} IST
              </span>
            )}
          </motion.div>

          {/* Heading — weight contrast */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.18 }}
            style={{
              fontFamily: 'var(--font)',
              fontSize: 'clamp(48px, 7.5vw, 92px)',
              lineHeight: 1.03,
              letterSpacing: '-0.03em',
              marginBottom: '32px',
              color: 'var(--text-primary)',
            }}
          >
            <span style={{ fontWeight: 300, display: 'block' }}>Designing for</span>
            <span style={{ fontWeight: 700 }}>scale.</span>
            {' '}
            <span style={{ fontWeight: 300 }}>Building</span>
            {' '}
            <span style={{ fontWeight: 700 }}>with intention.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.32 }}
            style={{
              fontSize: '18px',
              fontWeight: 300,
              color: 'var(--text-secondary)',
              lineHeight: 1.75,
              maxWidth: '500px',
              marginBottom: '56px',
              letterSpacing: '-0.01em',
            }}
          >
            7 years designing financial products. Most of it at Razorpay —
            payment flows, gift cards, and checkout infrastructure for
            India's largest brands.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.1em',
              color: 'var(--text-tertiary)',
              textTransform: 'uppercase',
            }}>
              ↓ Selected work
            </span>
          </motion.div>
        </motion.div>
      </section>

      {/* About */}
      <section
        id="about"
        style={{
          borderTop: '1px solid var(--border)',
          padding: 'clamp(60px,8vw,88px) var(--px)',
          maxWidth: '1000px',
          margin: '0 auto',
        }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '48px' : '80px', alignItems: 'start' }}>

          {/* Left */}
          <FadeUp>
            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--text-tertiary)',
              marginBottom: '28px',
            }}>
              About
            </p>
            <h2 style={{
              fontFamily: 'var(--font)',
              fontSize: '32px',
              fontWeight: 600,
              letterSpacing: '-0.03em',
              marginBottom: '24px',
              color: 'var(--text-primary)',
              lineHeight: 1.15,
            }}>
              From craft<br />to systems.
            </h2>
            <p style={{ fontSize: '15px', fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '16px' }}>
              I started in communication design — brand, marketing, growth surfaces — and grew into owning end-to-end product experiences at one of India's most complex fintech environments. The transition wasn't a pivot; it was a deepening.
            </p>
            <p style={{ fontSize: '15px', fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '16px' }}>
              Today I design payment products that move billions. Gift cards, checkout infrastructure, merchant dashboards — products where edge cases are real and stakes are high.
            </p>
            <p style={{ fontSize: '15px', fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              I also build with code. This portfolio was crafted in React and Claude — because shipping fast without sacrificing craft is the bar I hold myself to.
            </p>

            <div style={{ display: 'flex', gap: '8px', marginTop: '32px', flexWrap: 'wrap' }}>
              {['Game Changer Award', 'Rookie MVP Award'].map(award => (
                <span
                  key={award}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10px',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: 'var(--accent)',
                    background: 'var(--accent-soft)',
                    border: '1px solid rgba(45,104,254,0.14)',
                    borderRadius: '100px',
                    padding: '5px 12px',
                  }}
                >
                  {award}
                </span>
              ))}
            </div>
          </FadeUp>

          {/* Right */}
          <FadeUp delay={0.1}>
            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--text-tertiary)',
              marginBottom: '20px',
            }}>
              Experience
            </p>

            {/* Current role */}
            <div style={{
              padding: '20px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              marginBottom: '24px',
              display: 'flex',
              gap: '14px',
              alignItems: 'flex-start',
            }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: '#2d68fe',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '13px',
                fontWeight: 700,
                color: '#fff',
                letterSpacing: '-0.02em',
                flexShrink: 0,
              }}>
                R
              </div>
              <div style={{ flex: 1 }}>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10px',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--text-tertiary)',
                  marginBottom: '4px',
                }}>
                  Oct 2023 – Present
                </div>
                <div style={{ fontSize: '15px', fontWeight: 600, marginBottom: '3px', letterSpacing: '-0.01em' }}>
                  Product Designer
                </div>
                <div style={{ fontSize: '13px', fontWeight: 300, color: 'var(--text-secondary)' }}>
                  Razorpay · EngageHQ · Gift Cards · Checkout
                </div>
              </div>
              <span className="pulse-dot" style={{ marginTop: '10px', marginRight: 0 }} />
            </div>

            {/* Timeline */}
            <div style={{
              borderLeft: '1px solid var(--border)',
              paddingLeft: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}>
              {career.map(item => (
                <div key={item.role + item.company} style={{ display: 'flex', gap: '16px', alignItems: 'baseline' }}>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10px',
                    letterSpacing: '0.04em',
                    color: 'var(--text-tertiary)',
                    flexShrink: 0,
                    minWidth: '64px',
                  }}>
                    {item.years}
                  </span>
                  <span style={{ fontSize: '13px', fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{item.role}</span>
                    {' · '}{item.company}
                  </span>
                </div>
              ))}
            </div>

            {/* Info strip */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
              gap: '16px',
              marginTop: '28px',
              paddingTop: '24px',
              borderTop: '1px solid var(--border)',
            }}>
              {[
                { label: 'Experience', value: '7+ Years' },
                { label: 'Location', value: 'Bengaluru, India' },
                { label: 'Education', value: 'MCA · Interaction Design' },
                { label: 'Stack', value: 'Figma · React · Claude' },
              ].map(s => (
                <div key={s.label}>
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10px',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--text-tertiary)',
                    marginBottom: '4px',
                  }}>
                    {s.label}
                  </div>
                  <div style={{ fontSize: '13px', fontWeight: 300, color: 'var(--text-secondary)' }}>{s.value}</div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Work */}
      <section style={{
        borderTop: '1px solid var(--border)',
        padding: 'clamp(60px,8vw,88px) var(--px) 120px',
        maxWidth: '1000px',
        margin: '0 auto',
      }}>
        <FadeUp>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '4px',
          }}>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--text-tertiary)',
            }}>
              Selected Work
            </span>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--text-tertiary)',
            }}>
              2024 – 2025
            </span>
          </div>
        </FadeUp>

        <div>
          {projects.map((p, i) => (
            <ProjectRow key={p.to} project={p} delay={i * 0.07} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid var(--border)',
        padding: '28px var(--px)',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: isMobile ? 'flex-start' : 'space-between',
        alignItems: isMobile ? 'flex-start' : 'center',
        gap: isMobile ? '8px' : 0,
        maxWidth: '1000px',
        margin: '0 auto',
      }}>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          color: 'var(--text-tertiary)',
          letterSpacing: '0.04em',
        }}>
          © 2025 Arvind Sanker K M
        </span>
        <a
          href="mailto:arvindsanker11@gmail.com"
          style={{
            fontSize: '13px',
            fontWeight: 300,
            color: 'var(--text-secondary)',
            letterSpacing: '-0.01em',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
        >
          arvindsanker11@gmail.com
        </a>
      </footer>
    </motion.div>
  )
}

function ProjectRow({ project: p, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [hovered, setHovered] = useState(false)
  const isMobile = useIsMobile()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease, delay }}
    >
      <Link
        to={p.to}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ display: 'block' }}
      >
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr 24px' : '40px 1fr 32px',
          gap: isMobile ? '12px' : '32px',
          padding: '40px 16px 40px 0',
          borderBottom: '1px solid var(--border)',
          alignItems: 'start',
          background: hovered ? 'rgba(28,26,23,0.018)' : 'transparent',
          transition: 'background 0.25s',
          borderRadius: '4px',
          cursor: 'pointer',
        }}>
          {/* Index — hidden on mobile */}
          {!isMobile && (
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: 'var(--text-tertiary)',
              letterSpacing: '0.04em',
              paddingTop: '7px',
            }}>
              {p.index}
            </span>
          )}

          {/* Main content */}
          <div>
            {/* Tags row */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px', alignItems: 'center' }}>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--text-tertiary)',
              }}>
                {p.subtitle}
              </span>
              {p.tags.map(tag => (
                <span
                  key={tag}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '9px',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: 'var(--text-tertiary)',
                    background: 'var(--surface-2)',
                    border: '1px solid var(--border)',
                    borderRadius: '100px',
                    padding: '3px 9px',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h3 style={{
              fontFamily: 'var(--font)',
              fontSize: isMobile ? '20px' : '28px',
              fontWeight: 600,
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
              marginBottom: '12px',
              color: 'var(--text-primary)',
            }}>
              {p.title}
            </h3>

            {/* Description */}
            <p style={{
              fontSize: '14px',
              fontWeight: 300,
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              maxWidth: '480px',
              marginBottom: '16px',
            }}>
              {p.description}
            </p>

            {/* Design outcome pill */}
            <span style={{
              display: 'inline-block',
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: p.color,
              background: `${p.color}0d`,
              border: `1px solid ${p.color}22`,
              borderRadius: '100px',
              padding: '4px 12px',
            }}>
              {p.outcome}
            </span>
          </div>

          {/* Arrow */}
          <motion.div
            animate={{ x: hovered ? 4 : 0 }}
            transition={{ duration: 0.3, ease }}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '16px',
              color: hovered ? p.color : 'var(--text-tertiary)',
              transition: 'color 0.25s',
              paddingTop: '6px',
              textAlign: 'right',
            }}
          >
            →
          </motion.div>
        </div>
      </Link>
    </motion.div>
  )
}
