import { useState } from 'react'
import { about, education, experience, person, principles, recognition } from '../data/content'
import { Arrow, ScrollWords, asset } from './primitives'

export function About() {
  return (
    <section className="section wrap" id="about" aria-labelledby="about-title">
      <header className="sec-head">
        <p className="label">02 — About</p>
        <h2 id="about-title">From communication design to product systems.</h2>
      </header>

      <div className="about-grid">
        <ScrollWords className="about-statement" text={about.statement} />

        <figure className="about-portrait">
          <img src={asset('work/arvind.webp')} alt="Portrait of Arvind Sanker, smiling, wearing a cap and glasses" loading="lazy" />
          <figcaption className="label">{person.fullName}</figcaption>
        </figure>

        <div className="about-body">
          {about.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <p className="tools">
            <span className="label">Tools</span>
            {about.tools}
          </p>
        </div>

        <ul className="caps">
          {about.capabilities.map((c) => (
            <li key={c.title}>
              <strong>{c.title}</strong>
              <span>{c.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function Principles() {
  const [open, setOpen] = useState(0)

  return (
    <section className="section wrap" aria-labelledby="principles-title">
      <header className="sec-head">
        <p className="label">03 — How I think</p>
        <h2 id="principles-title">Most of the work is in the decisions before the screen.</h2>
      </header>

      <ol>
        {principles.map((p, i) => {
          const isOpen = open === i
          return (
            <li key={p.title} className={`principle${isOpen ? ' is-open' : ''}`}>
              <button
                className="principle-btn"
                aria-expanded={isOpen}
                aria-controls={`principle-${i}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                <span className="label">0{i + 1}</span>
                <h3>{p.title}</h3>
                <span className="pm" aria-hidden="true" />
              </button>
              <div className="principle-panel" id={`principle-${i}`} inert={!isOpen}>
                <div>
                  <p>{p.text}</p>
                </div>
              </div>
            </li>
          )
        })}
      </ol>

      <p className="principles-quote">Fewer pixels, better placed.</p>
    </section>
  )
}

function Rows({ label, rows }) {
  return (
    <div className="xp-group">
      <h3 className="label">{label}</h3>
      <ul>
        {rows.map((r) => (
          <li key={r.role + r.period}>
            <div className="xp-row">
              <span className="label">{r.period}</span>
              <span className="xp-role">{r.role}</span>
              <span className="xp-co">{r.company}</span>
              {r.note && <p className="xp-note">{r.note}</p>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Experience() {
  return (
    <section className="section wrap" aria-labelledby="xp-title">
      <header className="sec-head">
        <p className="label">04 — Experience</p>
        <h2 id="xp-title">Seven years across brand craft, product systems and fintech.</h2>
      </header>
      <Rows label="Roles" rows={experience} />
      <Rows label="Recognition" rows={recognition} />
      <Rows label="Education" rows={education} />
    </section>
  )
}

export function Contact() {
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(person.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    } catch {
      window.location.href = `mailto:${person.email}`
    }
  }

  return (
    <footer className="contact" id="contact">
      <div className="wrap">
        <p className="label">05 — Contact</p>
        <h2>Got a problem worth designing for?</h2>

        <button className={`contact-mail${copied ? ' is-copied' : ''}`} onClick={copy}>
          <span className="addr">{person.email}</span>
          <span className="hint" aria-live="polite">
            {copied ? 'Copied' : 'Tap to copy'}
          </span>
        </button>

        <div className="contact-foot">
          <div>
            <a className="link" href={`mailto:${person.email}`}>
              Email <Arrow size={14} />
            </a>
            <a className="link" href={person.linkedin} target="_blank" rel="noreferrer">
              LinkedIn <Arrow size={14} />
            </a>
          </div>
          <div>
            <span>
              {person.fullName} · {person.city}, India
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
