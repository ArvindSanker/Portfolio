import { useEffect, useRef, useState } from 'react'
import { animate, motion, useInView, useReducedMotion, useScroll, useTransform } from 'framer-motion'

/* Resolve a file in /public against the build's base path. */
export function asset(path) {
  return `${import.meta.env.BASE_URL}${path}`
}

/* Heading words that rise out of a mask, once, on load. Pure CSS animation. */
export function RiseWords({ text, start = 0 }) {
  return text.split(' ').map((word, i) => (
    <span key={i}>
      <span className="word">
        <span style={{ '--i': start + i }}>{word}</span>
      </span>{' '}
    </span>
  ))
}

/* Paragraph whose words darken as the reader scrolls through it. */
export function ScrollWords({ text, className }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.9', 'end 0.55'] })
  const words = text.split(' ')

  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => (
        <ScrollWord key={i} progress={scrollYProgress} range={[i / words.length, (i + 1.5) / words.length]} still={reduce}>
          {word}
        </ScrollWord>
      ))}
    </p>
  )
}

function ScrollWord({ children, progress, range, still }) {
  const opacity = useTransform(progress, range, [0.18, 1])
  return (
    <motion.span className="sw" style={still ? undefined : { opacity }}>
      {children}{' '}
    </motion.span>
  )
}

/* Counts the numeric part of a value up from zero when it scrolls into view. */
export function CountUp({ value }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const reduce = useReducedMotion()
  const match = /^(\D*)(\d+)(.*)$/.exec(value)
  const target = match ? Number(match[2]) : 0
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!match || !inView || reduce) return
    const controls = animate(0, target, {
      duration: 1.1,
      ease: [0.23, 1, 0.32, 1],
      onUpdate: (v) => setN(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, reduce, target]) // eslint-disable-line react-hooks/exhaustive-deps

  if (!match || reduce) return <strong ref={ref}>{value}</strong>
  return (
    <strong ref={ref} aria-label={value}>
      {match[1]}
      {inView ? n : 0}
      {match[3]}
    </strong>
  )
}

export function Arrow({ dir = 'right', size = 18 }) {
  const rotate = { right: 0, down: 90, left: 180, up: 270 }[dir]
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ transform: `rotate(${rotate}deg)` }}>
      <path d="M4 12h15M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}
