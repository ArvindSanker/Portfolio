import { useEffect, useRef } from 'react'
import { AnimatePresence, motion, useDragControls, useReducedMotion } from 'framer-motion'
import { projects } from '../data/content'
import { Cover } from './Diagrams'
import { Arrow, CountUp, asset } from './primitives'

const drawer = [0.32, 0.72, 0, 1]

/* Turn a Figma share link into its embeddable form. */
function embedUrl(url) {
  try {
    const u = new URL(url)
    u.hostname = 'embed.figma.com'
    u.searchParams.set('embed-host', 'portfolio')
    return u.toString()
  } catch {
    return null
  }
}

function Media({ project }) {
  const slides = project.slides && embedUrl(project.slides)

  if (slides) {
    return (
      <div className="v-frame">
        <iframe src={slides} title={`${project.name} case study deck`} allowFullScreen loading="lazy" />
      </div>
    )
  }

  if (project.media) {
    const { video, screens } = project.media
    return (
      <>
        {video && (
          <div className="v-frame">
            <video src={asset(video.src)} poster={asset(video.poster)} controls muted loop playsInline preload="none" aria-label={video.label} />
          </div>
        )}
        <div className="v-rail" tabIndex={0} role="group" aria-label="Product screens, scroll sideways">
          {screens.map((s) => (
            <figure key={s.src}>
              <img src={asset(s.src)} alt={s.alt} loading="lazy" />
              <figcaption className="label">{s.label}</figcaption>
            </figure>
          ))}
        </div>
      </>
    )
  }

  return (
    <>
      <div className="v-frame is-diagram">
        <Cover cover={project.cover} />
      </div>
      <p className="v-note">Final screens and the full walkthrough are being added to this case study.</p>
    </>
  )
}

function Sheet({ project, onClose, onGo }) {
  const reduce = useReducedMotion()
  const controls = useDragControls()
  const sheet = useRef(null)
  const scroller = useRef(null)
  const closeBtn = useRef(null)

  const at = projects.findIndex((p) => p.id === project.id)
  const prev = projects[(at - 1 + projects.length) % projects.length]
  const next = projects[(at + 1) % projects.length]

  /* lock the page, trap focus, close on Escape, restore focus after */
  useEffect(() => {
    const returnTo = document.activeElement
    document.body.classList.add('is-locked')
    closeBtn.current?.focus({ preventScroll: true })

    function onKey(e) {
      if (e.key === 'Escape') onClose()
      if (e.key !== 'Tab' || !sheet.current) return
      const items = sheet.current.querySelectorAll('button, a[href], video, iframe, [tabindex="0"]')
      const first = items[0]
      const last = items[items.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.classList.remove('is-locked')
      returnTo?.focus?.({ preventScroll: true })
    }
  }, [onClose])

  /* a new project starts at the top */
  useEffect(() => {
    scroller.current?.scrollTo(0, 0)
  }, [project.id])

  return (
    <div className="viewer" role="dialog" aria-modal="true" aria-label={`${project.name} case study`}>
      <motion.div
        className="viewer-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
      />

      <motion.div
        ref={sheet}
        className="viewer-sheet stage"
        initial={reduce ? { opacity: 0 } : { y: '100%' }}
        animate={reduce ? { opacity: 1 } : { y: 0 }}
        exit={reduce ? { opacity: 0 } : { y: '100%', transition: { duration: 0.3, ease: drawer } }}
        transition={{ duration: 0.5, ease: drawer }}
        drag={reduce ? false : 'y'}
        dragControls={controls}
        dragListener={false}
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={{ top: 0, bottom: 0.7 }}
        onDragEnd={(_, info) => {
          if (info.offset.y > 140 || info.velocity.y > 600) onClose()
        }}
      >
        <header className="viewer-bar" onPointerDown={(e) => !e.target.closest('button') && controls.start(e)}>
          <p className="label">
            {project.index} / 0{projects.length} — <b>{project.name}</b>
          </p>
          <div className="viewer-actions">
            <button className="icon-btn" onClick={() => onGo(prev.id)} aria-label={`Previous case study: ${prev.name}`}>
              <Arrow dir="left" />
            </button>
            <button className="icon-btn" onClick={() => onGo(next.id)} aria-label={`Next case study: ${next.name}`}>
              <Arrow />
            </button>
            <button ref={closeBtn} className="icon-btn is-close" onClick={onClose} aria-label="Close case study">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
          </div>
        </header>

        <div className="viewer-scroll" ref={scroller}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.article
              key={project.id}
              className="wrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <header className="v-head">
                <p className="label">{project.domain}</p>
                <h2>{project.title}</h2>
                <p>{project.summary}</p>
              </header>

              <dl className="v-meta">
                {project.meta.map((m) => (
                  <div key={m.label}>
                    <dt className="label">{m.label}</dt>
                    <dd>{m.value}</dd>
                  </div>
                ))}
              </dl>

              <section className="v-block">
                <h3 className="label">The work</h3>
                <Media project={project} />
              </section>

              <section className="v-block">
                <h3 className="label">The thinking</h3>
                <div className="v-three">
                  <div>
                    <h3>Problem</h3>
                    <p>{project.problem}</p>
                  </div>
                  <div>
                    <h3>Decision</h3>
                    <p>{project.decision}</p>
                  </div>
                  <div>
                    <h3>Impact</h3>
                    <p>{project.impact}</p>
                  </div>
                </div>
              </section>

              <section className="v-block">
                <h3 className="label">Options weighed</h3>
                <ol>
                  {project.options.map((o) => (
                    <li key={o.title} className={`v-option is-${o.verdict.toLowerCase()}`}>
                      <span className="label">{o.verdict}</span>
                      <strong>{o.title}</strong>
                      <p>{o.reason}</p>
                    </li>
                  ))}
                </ol>
              </section>

              <section className="v-block">
                <h3 className="label">The outcome</h3>
                <div className="v-metrics">
                  {project.metrics.map((m) => (
                    <div key={m.label}>
                      <CountUp value={m.value} />
                      <span className="label">{m.label}</span>
                      <p>{m.note}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="v-block v-learning">
                <p className="label" style={{ display: 'block', marginBottom: 20 }}>
                  What I took from it
                </p>
                <h3>{project.learning.title}</h3>
                <p>{project.learning.text}</p>
              </section>

              <button className="v-next" onClick={() => onGo(next.id)}>
                <span>
                  <span className="label">Next case study</span>
                  <strong>{next.name}</strong>
                </span>
                <Arrow size={56} />
              </button>
            </motion.article>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  )
}

export default function CaseViewer({ id, onClose, onGo }) {
  const project = projects.find((p) => p.id === id)
  return <AnimatePresence>{project && <Sheet key="sheet" project={project} onClose={onClose} onGo={onGo} />}</AnimatePresence>
}
