import { useRef } from 'react'
import { motion, useInView, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'
import { projects } from '../data/content'
import { Cover } from './Diagrams'
import { Arrow, asset } from './primitives'

const spring = { stiffness: 260, damping: 26, mass: 0.6 }

function WorkItem({ project, onOpen }) {
  const visual = useRef(null)
  const reduce = useReducedMotion()
  const seen = useInView(visual, { once: true, margin: '-80px' })
  const x = useSpring(useMotionValue(0), spring)
  const y = useSpring(useMotionValue(0), spring)
  const scale = useSpring(0, { stiffness: 300, damping: 24 })

  function move(e) {
    const rect = visual.current.getBoundingClientRect()
    const inside = e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom
    scale.set(inside ? 1 : 0)
    if (!inside) return
    x.set(e.clientX - rect.left)
    y.set(e.clientY - rect.top)
  }

  return (
    <li className="work-item" onPointerMove={move} onPointerLeave={() => scale.set(0)}>
      <div className="work-head">
        <p className="work-index label">
          <span>{project.index}</span>
          <span>{project.domain}</span>
        </p>
        <h3>{project.title}</h3>
      </div>

      <div ref={visual} className="work-visual">
        <motion.div
          className="work-visual-inner"
          initial={false}
          animate={{ clipPath: seen || reduce ? 'inset(0% 0% 0% 0%)' : 'inset(0% 0% 100% 0%)' }}
          transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
        >
          {project.cover.type === 'image' ? (
            <img src={asset(project.cover.src)} alt={project.cover.alt} loading="lazy" />
          ) : (
            <Cover cover={project.cover} />
          )}
        </motion.div>
        <motion.span className="work-badge" style={{ x, y, scale }} aria-hidden="true">
          Open
        </motion.span>
      </div>

      <div className="work-body">
        <p>{project.summary}</p>
        <p className="work-stat">
          <strong>{project.stat.value}</strong>
          <span>{project.stat.label}</span>
        </p>
        <button className="work-open link press" onClick={() => onOpen(project.id)} aria-haspopup="dialog">
          Open case study<span className="sr"> : {project.name}</span> <Arrow />
        </button>
      </div>
    </li>
  )
}

export default function Work({ onOpen }) {
  return (
    <section className="section wrap" id="work" aria-labelledby="work-title">
      <header className="sec-head">
        <p className="label">01 — Selected work</p>
        <h2 id="work-title">Three products where the hard part was the system.</h2>
      </header>
      <ol>
        {projects.map((project) => (
          <WorkItem key={project.id} project={project} onOpen={onOpen} />
        ))}
      </ol>
    </section>
  )
}
