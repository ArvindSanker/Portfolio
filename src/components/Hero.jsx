import { person } from '../data/content'
import { Arrow, RiseWords } from './primitives'

export default function Hero() {
  return (
    <section className="hero wrap" id="top">
      <div className="hero-kicker label">
        <span>Product design portfolio</span>
        <span>Enterprise · Fintech · B2B</span>
      </div>

      <h1 aria-label="Product designer making fintech feel less like fintech.">
        <span aria-hidden="true">
          <RiseWords text="Product designer making fintech feel less like" />
          <span className="word">
            <span style={{ '--i': 7 }}>
              <em>fintech</em>
              <span className="dot">.</span>
            </span>
          </span>
        </span>
      </h1>

      <div className="hero-foot">
        <div>
          <strong>{person.role}</strong>
          <span className="label">{person.city}, India</span>
        </div>
        <p>
          Seven years in design. I turn multi-party payment workflows into enterprise products that operators can run on their own, live with 25+ merchants.
        </p>
        <div>
          <a className="link is-underlined" href="#work">
            See selected work <Arrow dir="down" />
          </a>
          <a className="link" href={`mailto:${person.email}`}>
            Email me
          </a>
        </div>
      </div>
    </section>
  )
}
