import { Link } from 'react-router-dom'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Page, Reveal } from '../components/StoryKit'

const linkedinUrl = 'https://www.linkedin.com/in/arvind-sanker-k-m-810762117/'

const logos = [
  { src: '/logos/razorpay.svg', alt: 'Razorpay' },
  { src: '/logos/10kdesigners.png', alt: '10kDesigners' },
  { src: '/logos/simplilearn.png', alt: 'Simplilearn' },
  { src: '/logos/orita-sinclair.png', alt: 'Orita Sinclair' },
]

const proof = ['7 years in design', '25+ merchants live', '3 flagship case studies', 'Game Changer Award · Rookie MVP']

const skills = [
  { name: 'Framer', src: '/logos/skills/framer.svg' },
  { name: 'Figma', src: '/logos/skills/figma.svg' },
  { name: 'ChatGPT', src: '/logos/skills/chatgpt.svg' },
  { name: 'Claude Code', src: '/logos/skills/claude-code.svg' },
]

const projects = [
  {
    to: '/gcms',
    color: '#2d68fe',
    label: 'Case Study 01 · Gift Card Operations',
    title: 'Enabled operators to issue gift cards without reseller dependency.',
    text: 'Enterprise merchants were losing revenue because issuing gift cards still depended on reseller workflows, manual ops, and support loops. I designed a self-serve operating layer for ordering, tracking, downloading, and support.',
    metrics: ['₹209 Cr target', 'Self-serve ops', 'Enterprise workflow'],
    reveal: {
      problem: 'Merchants had rails, but no operating surface.',
      decision: 'Used a cart-based workflow over CSV and API-only paths.',
      impact: 'Shifted ownership from reseller-led to merchant-led operations.',
    },
    image: '/images/gcms/IMG_0873.PNG',
    imageAlt: 'GCMS dashboard preview',
  },
  {
    to: '/linked-payments',
    color: '#7c3aed',
    label: 'Case Study 02 · Checkout Infrastructure',
    title: 'Made gift card + UPI work as one atomic checkout session.',
    text: 'Gift cards come in fixed values. Carts do not. Linked Payments let customers combine gift cards with a second payment method without creating broken refund or reconciliation states.',
    metrics: ['+₹38 Cr/year', 'API council', 'Failure-path design'],
    reveal: {
      problem: 'Redemption broke when cart value did not match card value.',
      decision: 'Designed around atomicity, explicit APIs, and rollback ownership.',
      impact: 'Unlocked a new redemption capability for high-value merchants.',
    },
    motif: 'Split payments\nAtomic rollback\nTwo payment IDs',
  },
  {
    to: '/pay-with-points',
    color: '#10b981',
    label: 'Case Study 03 · Rewards Experience',
    title: 'Brought reward-point redemption into checkout for 25+ merchants.',
    text: 'Reward points were valuable but hard to use. I designed a native checkout experience that made redemption discoverable, understandable, and easier to act on.',
    metrics: ['25+ merchants', '15/20 preferred', 'Live product'],
    reveal: {
      problem: 'Users had reward value, but not at the moment they were ready to pay.',
      decision: 'Used the native card journey and validated the right redemption surface through testing.',
      impact: 'Shipped across real merchants with measurable engagement lift.',
    },
    motif: 'Points visible\nMoment of choice\nMerchant lift',
  },
]

const principles = [
  {
    title: 'Make complexity legible',
    text: 'I work on systems with multiple actors, constraints, and edge cases. My job is to make them understandable.',
  },
  {
    title: 'Design failure paths early',
    text: 'In payments, the unhappy path is often the product. Rollback, ownership, and recovery are part of UX.',
  },
  {
    title: 'Balance incentives',
    text: 'The best solution works for users, merchants, and the business at the same time.',
  },
  {
    title: 'Use structure to reduce ambiguity',
    text: 'Research, guardrails, and explicit trade-offs help teams move through complexity faster.',
  },
]

const experience = [
  {
    role: 'Product Designer II',
    company: 'Razorpay',
    period: 'Oct 2023 — Present',
    logo: '/logos/razorpay.svg',
    text: 'Leading end-to-end design for EngageHQ, a merchant engagement and incentives platform. Owning the full design journey — from early research and wireframes to shipped, production-grade interfaces. Building custom AI agents in Claude Code to accelerate design ops.',
  },
  {
    role: 'Senior Communication Designer',
    company: 'Razorpay',
    period: 'May 2022 — Sep 2023',
    logo: '/logos/razorpay.svg',
  },
  {
    role: 'Communication Designer',
    company: 'Razorpay',
    period: 'Mar 2021 — May 2022',
    logo: '/logos/razorpay.svg',
  },
  {
    role: 'Designer in Residence',
    company: '10kDesigners',
    period: 'Jul 2022 — Mar 2023',
    logo: '/logos/10kdesigners.png',
  },
  {
    role: 'Senior Graphic & UX Designer',
    company: 'Simplilearn',
    period: 'May 2019 — Mar 2021',
    logo: '/logos/simplilearn.png',
  },
  {
    role: 'Graphic Designer',
    company: 'Orita Sinclair',
    period: 'Mar 2018 — Apr 2019',
    logo: '/logos/orita-sinclair.png',
  },
]

function HeroVisual() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springX = useSpring(x, { stiffness: 110, damping: 20, mass: 0.5 })
  const springY = useSpring(y, { stiffness: 110, damping: 20, mass: 0.5 })

  const photoX = useTransform(springX, [-1, 1], [-18, 18])
  const photoY = useTransform(springY, [-1, 1], [-14, 14])
  const sysX = useTransform(springX, [-1, 1], [-10, 10])
  const sysY = useTransform(springY, [-1, 1], [-10, 10])

  function handleMove(event) {
    const rect = event.currentTarget.getBoundingClientRect()
    const px = ((event.clientX - rect.left) / rect.width) * 2 - 1
    const py = ((event.clientY - rect.top) / rect.height) * 2 - 1
    x.set(px)
    y.set(py)
  }

  function resetMove() {
    x.set(0)
    y.set(0)
  }

  return (
    <div className="hero-visual-shell" onMouseMove={handleMove} onMouseLeave={resetMove} aria-hidden="true">
      <motion.svg className="hero-system" viewBox="0 0 400 400" style={{ x: sysX, y: sysY }}>
        <circle cx="200" cy="200" r="140" stroke="rgba(45,104,254,0.10)" strokeWidth="1" fill="none" />
        <circle cx="200" cy="60" r="5" fill="rgba(45,104,254,0.22)" />
        <circle cx="340" cy="200" r="5" fill="rgba(45,104,254,0.22)" />
        <circle cx="200" cy="340" r="5" fill="rgba(45,104,254,0.22)" />
        <line x1="200" y1="200" x2="200" y2="60" stroke="rgba(45,104,254,0.10)" strokeWidth="1" />
        <line x1="200" y1="200" x2="340" y2="200" stroke="rgba(45,104,254,0.10)" strokeWidth="1" />
        <line x1="200" y1="200" x2="200" y2="340" stroke="rgba(45,104,254,0.10)" strokeWidth="1" />
      </motion.svg>
      <motion.div className="hero-portrait-frame" style={{ x: photoX, y: photoY }}>
        <img src="/images/home/arvind.jpeg" alt="" />
      </motion.div>
    </div>
  )
}

export default function Home() {
  return (
    <Page>
      <section className="home-hero home-band">
        <Reveal className="home-hero-grid">
          <div className="home-hero-copy home-copy-column">
            <p className="eyebrow">Arvind Sanker K M · Product Designer II</p>
            <h1>Product Designer making fintech feel less like fintech.</h1>
            <p>
              Product Designer II at Razorpay, based in Bengaluru. Seven years untangling complex workflows for a living.
            </p>
            <div className="hero-actions">
              <a className="hero-button primary" href="#work">View selected work</a>
              <a className="hero-button secondary" href={linkedinUrl} target="_blank" rel="noreferrer">View LinkedIn</a>
            </div>
            <div className="hero-proof">
              {['Razorpay', 'Checkout', 'Gift cards', 'Rewards', 'Merchant systems'].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          <HeroVisual />
        </Reveal>
      </section>

      <section className="credibility-strip home-band">
        <Reveal className="credibility-grid">
          <div>
            <p className="eyebrow">Experience across</p>
            <span className="cred-line">Designed in Bengaluru. Tested by reality.</span>
          </div>

          <div className="logo-row">
            {logos.map((logo) => (
              <img key={logo.alt} src={logo.src} alt={logo.alt} />
            ))}
          </div>

          <div className="proof-row">
            {proof.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="story-section home-section home-intro-section">
        <Reveal className="home-intro-grid">
          <div className="section-head home-copy-column home-intro-copy">
            <p className="eyebrow">About</p>
            <h2>From communication design to product systems.</h2>
            <p>
              I&apos;m a product designer based in Bengaluru, currently in my fifth year at Razorpay where I design merchant-facing products that handle money — payments, incentives, engagement, the works.
            </p>
            <p>
              What I enjoy most is the part of design that doesn&apos;t look like design: untangling business logic, questioning assumptions, and finding the smallest possible interface that does the biggest possible job.
            </p>
          </div>

          <div className="capability-stack">
            {[
              { title: 'UX strategy & systems thinking', text: 'Mapping business logic to user flows before any UI is drawn.' },
              { title: 'Interaction design & prototyping', text: 'Prototyping complex states and edge cases in Framer and Figma.' },
              { title: 'Research & validation', text: 'Using testing and data to cut ambiguity and align teams.' },
              { title: 'AI-assisted workflow', text: 'Building custom agents and prompts to accelerate design ops and exploration.' },
            ].map((item) => (
              <div key={item.title} className="capability-block">
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="project-showcase home-band" id="work">
        <Reveal className="showcase-heading home-copy-column">
          <p className="eyebrow">Selected work</p>
          <h2>Three product stories about making complexity usable.</h2>
          <p>Payments are easy to use only when a lot of hard decisions have already been made. These are some of mine.</p>
        </Reveal>

        {projects.map((project, index) => (
          <Reveal key={project.to} delay={index * 0.06}>
            <Link className="project-card" to={project.to} style={{ '--case': project.color }}>
              <div className="project-copy">
                <p className="eyebrow">{project.label}</p>
                <h2>{project.title}</h2>
                <p>{project.text}</p>
                <ul>
                  {project.metrics.map((metric) => <li key={metric}>{metric}</li>)}
                </ul>
              </div>

              <div className="project-visual">
                {project.image
                  ? <img src={project.image} alt={project.imageAlt} />
                  : <pre>{project.motif}</pre>}
                <div className="project-track project-track-top" />
                <div className="project-track project-track-bottom" />
              </div>

              <div className="project-hover-panel">
                <div>
                  <span>Problem</span>
                  <p>{project.reveal.problem}</p>
                </div>
                <div>
                  <span>Decision</span>
                  <p>{project.reveal.decision}</p>
                </div>
                <div>
                  <span>Impact</span>
                  <p>{project.reveal.impact}</p>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </section>

      <section className="story-section home-section">
        <Reveal>
          <div className="section-head home-copy-column">
            <p className="eyebrow">How I think</p>
            <h2>Most of the work is in the decisions before the screen.</h2>
          </div>
          <div className="principles-grid">
            {principles.map((item) => (
              <div key={item.title} className="principle-card">
                <span className="card-label">Principle</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <i className="principle-line" />
              </div>
            ))}
          </div>
          <p className="section-quote">I prefer fewer pixels, better placed.</p>
        </Reveal>
      </section>

      <section className="story-section home-section skills-section">
        <Reveal>
          <div className="section-head home-copy-column">
            <p className="eyebrow">Skill Set</p>
            <h2>Tools I use to think, prototype, ship, and push ideas further.</h2>
          </div>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div key={skill.name} className="skill-card">
                <div className="skill-icon-wrap">
                  <img src={skill.src} alt={skill.name} className="skill-icon" />
                </div>
                <h3>{skill.name}</h3>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="story-section wide home-band experience-section">
        <Reveal>
          <div className="section-head home-copy-column">
            <p className="eyebrow">Experience</p>
            <h2>Seven years across brand craft, product systems, and fintech.</h2>
          </div>

          <div className="experience-grid">
            <article className="experience-featured">
              <img src={experience[0].logo} alt={experience[0].company} />
              <p className="eyebrow">Current</p>
              <h3>{experience[0].role}</h3>
              <strong>{experience[0].company} · {experience[0].period}</strong>
              <p>{experience[0].text}</p>
              <div className="experience-tags">
                {['EngageHQ', 'Gift cards', 'Checkout', 'Rewards', 'Claude Code'].map((item) => <span key={item}>{item}</span>)}
              </div>
            </article>

            <div className="experience-list">
              {experience.slice(1).map((item) => (
                <div key={item.role + item.period} className="experience-item">
                  <img src={item.logo} alt={item.company} />
                  <div>
                    <h3>{item.role}</h3>
                    <p>{item.company} · {item.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="recognition-row">
            <span>Game Changer Award — Razorpay</span>
            <span>Rookie MVP Award — Razorpay</span>
          </div>
        </Reveal>
      </section>

      <section className="story-section home-section education-section">
        <Reveal>
          <div className="section-head home-copy-column">
            <p className="eyebrow">Education</p>
            <h2>Technical thinking meets design craft.</h2>
          </div>

          <div className="education-grid">
            <div className="story-card">
              <span className="card-label">2015 — 2018</span>
              <h3>Master of Computer Applications</h3>
              <p>Kumaraguru College of Technology, Coimbatore</p>
            </div>
            <div className="story-card">
              <span className="card-label">2017 — 2018</span>
              <h3>Diploma in User Interaction Design</h3>
              <p>Orita Sinclair School of Design &amp; Music, Bengaluru</p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="story-section home-section contact-section">
        <Reveal className="contact-grid">
          <div className="contact-card">
            <p className="eyebrow">Contact</p>
            <h2>Got a problem worth designing for?</h2>
            <p>Drop me a line — arvindsanker11@gmail.com</p>
          </div>

          <div className="contact-links">
            <a href="mailto:arvindsanker11@gmail.com">arvindsanker11@gmail.com</a>
            <a href={linkedinUrl} target="_blank" rel="noreferrer">LinkedIn</a>
            <span>Bengaluru, India</span>
            <span>Available for select freelance and full-time conversations</span>
          </div>
        </Reveal>
      </section>

      <footer className="site-footer home-band">
        <span>Arvind Sanker K M</span>
        <div>
          <a href="mailto:arvindsanker11@gmail.com">Email</a>
          <a href={linkedinUrl} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </footer>
    </Page>
  )
}
