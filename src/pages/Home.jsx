import { Link } from 'react-router-dom'
import { Page, Reveal } from '../components/StoryKit'

const projects = [
  {
    to: '/gcms',
    color: '#2d68fe',
    label: 'Case Study 01 · Gift Cards',
    title: 'Enabled operators to issue gift cards without reseller dependency.',
    text: 'A self-serve operating system for enterprise gift-card programs: place bulk orders, track fulfillment, download cards, and resolve support cases from one dashboard.',
    metrics: ['₹209 Cr GMV target', '0 reseller dependency', 'Enterprise ops workflow'],
    image: '/images/gcms/IMG_0873.PNG',
  },
  {
    to: '/linked-payments',
    color: '#7c3aed',
    label: 'Case Study 02 · Checkout Infra',
    title: 'Let customers split checkout between gift cards and UPI safely.',
    text: 'Gift cards have fixed values. Carts do not. Linked Payments made gift card + primary payment work as one atomic checkout session.',
    metrics: ['+₹38 Cr/yr unlock', 'API council standard', '5 product decisions'],
  },
  {
    to: '/pay-with-points',
    color: '#10b981',
    label: 'Case Study 03 · Rewards',
    title: 'Brought reward-point redemption into checkout for 25+ merchants.',
    text: 'Reward points were valuable but hidden. We moved redemption into the card journey and validated the moment of choice with users.',
    metrics: ['25+ merchants live', '15/20 preferred sheet', '₹1,000 Cr GMV target'],
  },
]

export default function Home() {
  return (
    <Page>
      <section className="home-hero">
        <Reveal>
          <p className="eyebrow">Arvind Sanker · Product Designer</p>
          <h1>I design complex payment products and make them understandable.</h1>
          <p>
            Seven years across communication design and fintech product design. Most recently at Razorpay,
            shaping gift cards, checkout, rewards, and merchant-facing payment infrastructure.
          </p>
        </Reveal>
      </section>

      <section className="project-showcase" id="work">
        {projects.map((project, index) => (
          <Reveal key={project.to} delay={index * 0.06}>
            <Link className="project-card" to={project.to} style={{ '--case': project.color }}>
              <div>
                <p className="eyebrow">{project.label}</p>
                <h2>{project.title}</h2>
                <p>{project.text}</p>
                <ul>
                  {project.metrics.map((metric) => <li key={metric}>{metric}</li>)}
                </ul>
              </div>
              <div className="project-visual">
                {project.image ? <img src={project.image} alt="Gift card dashboard preview" /> : <span />}
              </div>
            </Link>
          </Reveal>
        ))}
      </section>

      <section className="story-section">
        <Reveal>
          <div className="section-head">
            <p className="eyebrow">About</p>
            <h2>From brand craft to product systems.</h2>
            <p>
              I started in communication design, then moved deeper into product systems where edge cases,
              stakeholder alignment, and shipping constraints matter as much as pixels. I also build with code,
              which helps me prototype quickly and collaborate better with engineering.
            </p>
          </div>
          <div className="card-grid two">
            <div className="story-card">
              <span className="card-label">Current focus</span>
              <h3>Razorpay EngageHQ</h3>
              <p>Gift cards, loyalty, checkout rewards, payment offers, and merchant operation workflows.</p>
            </div>
            <div className="story-card">
              <span className="card-label">Recognition</span>
              <h3>Game Changer Award · Rookie MVP Award</h3>
              <p>Recognized for taking ambiguous fintech problems from early product thinking to shipped experiences.</p>
            </div>
          </div>
        </Reveal>
      </section>
    </Page>
  )
}
