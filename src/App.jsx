import { useCallback, useEffect, useRef, useState } from 'react'
import { MotionConfig } from 'framer-motion'
import { projects } from './data/content'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Work from './components/Work'
import CaseViewer from './components/CaseViewer'
import { About, Contact, Experience, Principles } from './components/Sections'

function readHash() {
  const match = /^#work\/([\w-]+)/.exec(window.location.hash)
  return match && projects.some((p) => p.id === match[1]) ? match[1] : null
}

/* The open case study lives in the URL hash (#work/<id>) so it can be linked and closed with Back. */
function useCaseRoute() {
  const [id, setId] = useState(readHash)
  const pushed = useRef(false)

  useEffect(() => {
    const sync = () => setId(readHash())
    window.addEventListener('popstate', sync)
    window.addEventListener('hashchange', sync)
    return () => {
      window.removeEventListener('popstate', sync)
      window.removeEventListener('hashchange', sync)
    }
  }, [])

  const open = useCallback((next) => {
    setId(next)
    try {
      window.history.pushState(null, '', `#work/${next}`)
      pushed.current = true
    } catch {
      /* history unavailable: state alone drives the viewer */
    }
  }, [])

  const go = useCallback((next) => {
    setId(next)
    try {
      window.history.replaceState(null, '', `#work/${next}`)
    } catch {
      /* see above */
    }
  }, [])

  const close = useCallback(() => {
    setId(null)
    try {
      if (pushed.current) {
        pushed.current = false
        window.history.back()
      } else {
        window.history.replaceState(null, '', window.location.pathname + window.location.search)
      }
    } catch {
      /* see above */
    }
  }, [])

  return { id, open, go, close }
}

export default function App() {
  const { id, open, go, close } = useCaseRoute()

  return (
    <MotionConfig reducedMotion="user">
      <a className="skip" href="#work">
        Skip to work
      </a>
      <Nav />
      <main inert={Boolean(id)}>
        <Hero />
        <Work onOpen={open} />
        <About />
        <Principles />
        <Experience />
      </main>
      <Contact />
      <CaseViewer id={id} onClose={close} onGo={go} />
    </MotionConfig>
  )
}
