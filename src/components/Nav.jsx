import { useEffect, useRef, useState } from 'react'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import { person } from '../data/content'

const fmt = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', hour12: false })

function useBengaluruTime() {
  const [time, setTime] = useState(() => fmt.format(new Date()))
  useEffect(() => {
    const id = setInterval(() => setTime(fmt.format(new Date())), 20000)
    return () => clearInterval(id)
  }, [])
  return time
}

export default function Nav() {
  const { scrollY } = useScroll()
  const last = useRef(0)
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const time = useBengaluruTime()

  useMotionValueEvent(scrollY, 'change', (y) => {
    const goingDown = y > last.current
    setHidden(goingDown && y > 240)
    setScrolled(y > 8)
    last.current = y
  })

  return (
    <header className={`nav${hidden ? ' is-hidden' : ''}${scrolled ? ' is-scrolled' : ''}`}>
      <nav className="wrap nav-inner" aria-label="Main">
        <a className="nav-name" href="#top">{person.name}</a>
        <div className="nav-links">
          <a className="link" href="#work">Work</a>
          <a className="link" href="#about">About</a>
          <a className="link" href="#contact">Contact</a>
        </div>
        <span className="nav-time" aria-label={`Local time in Bengaluru, ${time}`}>
          BLR {time}
        </span>
      </nav>
    </header>
  )
}
