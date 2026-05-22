import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1]

export function Page({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      {children}
    </motion.main>
  )
}

export function Reveal({ children, className = '', delay = 0, staggerChildren = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  if (staggerChildren > 0) {
    return (
      <motion.div
        ref={ref}
        className={className}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren,
              delayChildren: delay,
            },
          },
        }}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease, delay }}
    >
      {children}
    </motion.div>
  )
}

export function RevealItem({ children, className = '' }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export function CaseHero({ eyebrow, title, summary, metrics, color = 'var(--accent)', children }) {
  return (
    <section className="case-hero" style={{ '--case': color }}>
      <Reveal>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="case-summary">{summary}</p>
        {metrics && <MetricGrid metrics={metrics} compact />}
      </Reveal>
      {children && <Reveal delay={0.12}>{children}</Reveal>}
    </section>
  )
}

export function Chapter({ kicker, title, children, dark = false }) {
  return (
    <section className={dark ? 'chapter dark' : 'chapter'}>
      <Reveal>
        <p className="eyebrow">{kicker}</p>
        <h2>{title}</h2>
        {children && <div className="chapter-body">{children}</div>}
      </Reveal>
    </section>
  )
}

export function StorySection({ kicker, title, intro, children, wide = false }) {
  return (
    <section className={wide ? 'story-section wide' : 'story-section'}>
      <Reveal staggerChildren={0.1}>
        <div className="section-head">
          <RevealItem>
            <p className="eyebrow">{kicker}</p>
          </RevealItem>
          <RevealItem>
            <h2>{title}</h2>
          </RevealItem>
          {intro && (
            <RevealItem>
              <p>{intro}</p>
            </RevealItem>
          )}
        </div>
        <RevealItem>{children}</RevealItem>
      </Reveal>
    </section>
  )
}

export function MetaGrid({ items }) {
  return (
    <div className="meta-grid">
      {items.map((item) => (
        <div key={item.label}>
          <span>{item.label}</span>
          <strong>{item.value}</strong>
        </div>
      ))}
    </div>
  )
}

export function MetricGrid({ metrics, compact = false }) {
  return (
    <div className={compact ? 'metric-grid compact' : 'metric-grid'}>
      {metrics.map((metric) => (
        <div key={metric.label} className="metric-card">
          <strong>{metric.value}</strong>
          <span>{metric.label}</span>
          {metric.note && <p>{metric.note}</p>}
        </div>
      ))}
    </div>
  )
}

export function CardGrid({ items, variant = 'default' }) {
  return (
    <div className={`card-grid ${variant}`}>
      {items.map((item) => (
        <div key={item.title} className="story-card">
          {item.label && <span className="card-label">{item.label}</span>}
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  )
}

export function IterationGrid({ items }) {
  return (
    <div className="iteration-grid">
      {items.map((item) => (
        <div key={item.title} className={item.chosen ? 'iteration-card chosen' : 'iteration-card'}>
          <span>{item.label}</span>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
          {item.reason && <small>{item.reason}</small>}
        </div>
      ))}
    </div>
  )
}

export function Visual({ src, alt, label, caption, contain = false }) {
  return (
    <figure className={contain ? 'visual contain' : 'visual'}>
      {label && <span>{label}</span>}
      {src ? <img src={src} alt={alt || label || ''} /> : <div className="visual-placeholder">Visual to add</div>}
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}

export function AnnotatedVisual({ src, alt, label, notes }) {
  return (
    <div className="annotated-visual">
      <Visual src={src} alt={alt} label={label} />
      <div className="annotation-list">
        {notes.map((note) => (
          <div key={note.title}>
            <strong>{note.title}</strong>
            <p>{note.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export function BeforeAfter({ before, after }) {
  return (
    <div className="before-after">
      <div>
        <span>Before</span>
        <p>{before}</p>
      </div>
      <div>
        <span>After</span>
        <p>{after}</p>
      </div>
    </div>
  )
}

export function NextProject({ to, label, title }) {
  return (
    <section className="next-project">
      <Link to={to}>
        <span>{label}</span>
        <strong>{title}</strong>
        <i>→</i>
      </Link>
    </section>
  )
}

export function MagneticButton({ children, className = '', ...props }) {
  return (
    <motion.button
      className={className}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export function TextReveal({ text, className = '', delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const words = text.split(' ')

  return (
    <motion.span
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.03,
            delayChildren: delay,
          },
        },
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          style={{ display: 'inline-block', marginRight: '0.25em' }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease },
            },
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  )
}
