import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { SectionNav, VisualSlot, VisualGrid, InsightBlock, ScrollProgress } from '../components/CaseStudyKit'
import { useIsMobile } from '../hooks/useIsMobile'

const SECTIONS = [
  { id: 'problem', label: 'Problem' },
  { id: 'landscape', label: 'Landscape' },
  { id: 'solutions', label: 'Solutions' },
  { id: 'sequencing', label: 'Sequencing' },
  { id: 'ab-test', label: 'A/B Test' },
  { id: 'impact', label: 'Impact' },
]

const ease = [0.16, 1, 0.3, 1]
const green = '#10b981'


function FadeUp({ children, delay = 0, style = {} }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease, delay }}
      style={style}
    >
      {children}
    </motion.div>
  )
}

const SOLUTIONS = [
  {
    label: 'CHOSEN',
    title: 'Native Card Payment Journey',
    desc: 'Points widget appears inline when user enters eligible card. 2 extra steps. Highest SR, best discovery, no friction.',
    status: 'chosen',
  },
  {
    label: 'ON HOLD',
    title: 'Within 3DS Authentication Flow',
    desc: 'Redemption at OTP page. Cannot be real-time — EMVco protocol forbids modifying the auth flow. Only offline cashback possible.',
    status: 'hold',
  },
  {
    label: 'REJECTED',
    title: 'PWR as a New Payment Method',
    desc: 'Competitor Twid tried this. Reported <55% SR on Yatra, ixigo. Separate method = poor discovery + extra education cost.',
    status: 'rejected',
  },
]

export default function PayWithPoints() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 60])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const isMobile = useIsMobile()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Hero */}
      <section
        ref={heroRef}
        style={{
          minHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: 'clamp(80px,10vh,120px) var(--px) 80px',
          maxWidth: '1100px',
          margin: '0 auto',
          position: 'relative',
        }}
      >
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'radial-gradient(ellipse 80% 60% at 50% 20%, rgba(16,185,129,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <motion.div style={{ y: heroY, opacity: heroOpacity }}>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease, delay: 0.15 }}>
            <span style={{
              display: 'inline-block',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: green,
              background: 'rgba(16,185,129,0.1)',
              border: '1px solid rgba(16,185,129,0.2)',
              borderRadius: '100px',
              padding: '5px 14px',
              marginBottom: '28px',
            }}>
              Case Study 03 · Live Product · User Research
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.25 }}
            style={{
              fontSize: 'clamp(40px, 6vw, 72px)',
              fontWeight: 700,
              letterSpacing: '-0.04em',
              lineHeight: 1.05,
              marginBottom: '24px',
            }}
          >
            Pay With Points —<br />
            <span style={{ color: green }}>Points That Actually Get Used</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.38 }}
            style={{ fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '580px', lineHeight: 1.65, marginBottom: '48px' }}
          >
            Banks issue ₹10,000 Cr in reward points every year. 45% go unused.
            We embedded redemption natively into Razorpay's checkout — live across 25+ merchants, validated with real users.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            style={{ display: 'flex', gap: '48px' }}
          >
            {[
              { label: 'GMV Target', value: '₹1,000 Cr' },
              { label: 'Merchants Live', value: '25+' },
              { label: 'CC Wallet Share', value: '8% → 15%' },
            ].map(s => (
              <div key={s.label}>
                <div style={{ fontSize: '28px', fontWeight: 700, letterSpacing: '-0.03em', color: green }}>{s.value}</div>
                <div style={{ fontSize: '12px', color: 'var(--text-tertiary)', marginTop: '4px' }}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <SectionNav sections={SECTIONS} color={green} />
      <ScrollProgress sections={SECTIONS} color={green} />

      {/* Content */}
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: 'clamp(40px,6vw,72px) var(--px) 160px' }}>

        {/* Overview */}
        <FadeUp>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
            gap: '1px',
            background: 'var(--border)',
            border: '1px solid var(--border)',
            borderRadius: '16px',
            overflow: 'hidden',
            marginBottom: '80px',
          }}>
            {[
              { label: 'My Role', value: 'UX architecture · Competitive research · A/B test design' },
              { label: 'Timeline', value: 'Q2 – Q3 2024' },
              { label: 'Research', value: 'Floor test · 20 participants · Screen recorded' },
              { label: 'Status', value: 'Live — 25+ Merchants' },
            ].map(item => (
              <div key={item.label} style={{ padding: '28px', background: 'var(--surface)' }}>
                <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '8px' }}>{item.label}</div>
                <div style={{ fontSize: '15px', fontWeight: 500 }}>{item.value}</div>
              </div>
            ))}
          </div>
        </FadeUp>

        {/* Problem */}
        <Section id="problem" label="01 — The 3-Sided Problem">
          <p style={bodyText}>
            This wasn't a two-party problem. Three separate stakeholders each had an urgent need — and none of them could solve it alone.
          </p>
          <div style={{ marginTop: '28px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <StakeholderCard
              role="Banks (Issuers)"
              color="#3b82f6"
              need="Increase card spends and points burn"
              pain="Redemption portals have limited merchant participation. Banks control burn opacity to manage cost — which kills customer motivation."
            />
            <StakeholderCard
              role="Merchants"
              color={green}
              need="Boost conversion and AOV, reduce CAC"
              pain="Performance marketing is getting expensive. They need retention tools that actually target premium credit card users."
            />
            <StakeholderCard
              role="Cardholders"
              color="#f59e0b"
              need="Redeem points they've already earned"
              pain="Points expire. Redemption options are narrow and confusing. Nobody knows how many points they have at checkout."
            />
          </div>
          <div style={{
            marginTop: '28px',
            padding: '20px 24px',
            background: 'rgba(16,185,129,0.05)',
            border: '1px solid rgba(16,185,129,0.15)',
            borderRadius: '12px',
          }}>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              The insight: <strong style={{ color: 'var(--text-primary)' }}>the redemption problem isn't about the points program — it's about where redemption lives in the purchase journey.</strong> Separate portals mean separate intent. Checkout is where the intent to spend already exists.
            </p>
          </div>
        </Section>

        {/* Competitive Context */}
        <Section id="landscape" label="02 — Competitive Landscape">
          <p style={bodyText}>
            We weren't first to this idea. Pine Labs, Twid, Cred Pay, and CiPay had all attempted some version of it. Understanding why they fell short shaped our entire approach.
          </p>
          <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              { competitor: 'Twid (via PayU)', weakness: '<55% success rate. Separate payment method = poor discovery, education cost, high drop-off.' },
              { competitor: 'Pine Labs', weakness: 'Opaque MDR (3.5–7%). POS-first. Online presence weak. Redemption requires multiple merchant taps.' },
              { competitor: 'Cred Pay', weakness: 'App-centric. Keeps issuers at bay. Merchant network limited to Cred ecosystem.' },
              { competitor: 'CiPay', weakness: 'Non-native PWA UX. Mobile OTP auth not UCIC-based. High MDR markup.' },
            ].map(c => (
              <div key={c.competitor} style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : '160px 1fr',
                gap: '16px',
                padding: '16px 20px',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '10px',
                alignItems: 'flex-start',
              }}>
                <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-secondary)' }}>{c.competitor}</span>
                <span style={{ fontSize: '13px', color: 'var(--text-tertiary)', lineHeight: 1.6 }}>{c.weakness}</span>
              </div>
            ))}
          </div>
          <div style={{
            marginTop: '20px',
            padding: '20px 24px',
            background: 'rgba(16,185,129,0.05)',
            border: '1px solid rgba(16,185,129,0.15)',
            borderRadius: '12px',
          }}>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              Razorpay's moat: native card journey means no extra payment method, no extra education. Integration: <strong style={{ color: green }}>3 weeks vs Twid's 6, Pine Labs' 8+.</strong> And 36 of 42 Indian unicorns already use Razorpay.
            </p>
          </div>
        </Section>

        {/* Solutions Evaluated */}
        <Section id="solutions" label="03 — Solutions Evaluated">
          <p style={bodyText}>
            Three architectural approaches. We evaluated all three before committing — because this decision determines where friction appears in the user journey.
          </p>
          <div style={{ marginTop: '28px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {SOLUTIONS.map(s => (
              <SolutionCard key={s.title} solution={s} />
            ))}
          </div>
        </Section>

        {/* The sequencing insight */}
        <Section id="sequencing" label="04 — The Key Sequencing Decision">
          <p style={bodyText}>
            Within the native card journey, there was one more decision that looked technical but was fundamentally a design decision: should points redemption happen before or after card authentication?
          </p>

          <div style={{ margin: '28px 0', overflowX: 'auto' }}>
          <div style={{
            border: '1px solid var(--border)',
            borderRadius: '16px',
            overflow: 'hidden',
            minWidth: '480px',
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: '1px solid var(--border)' }}>
              <div style={{ padding: '14px 20px', background: 'var(--surface-2)', fontSize: '11px', fontWeight: 600, color: 'var(--text-tertiary)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Pre-Auth (Points → Then Card)</div>
              <div style={{ padding: '14px 20px', background: `rgba(16,185,129,0.06)`, fontSize: '11px', fontWeight: 600, color: green, letterSpacing: '0.06em', textTransform: 'uppercase', borderLeft: '1px solid var(--border)' }}>Post-Auth (Card → Then Points) ✓</div>
            </div>
            {[
              { label: 'Wait time', pre: '2–4 seconds', post: '0.5–1.5 seconds' },
              { label: 'Fraud risk', pre: 'High — bad actor enters someone\'s card, burns their points', post: 'None — points only redeemed after card is verified' },
              { label: 'Card auth SR', pre: '0.8 × 0.99 × 0.9 = ~70%', post: '0.8 × 0.99 = ~80%' },
              { label: 'Server load', pre: 'High — P1 fail requires refunding both P1 + P2', post: 'Low — if P1 fails, P2 never triggers' },
            ].map((row, i) => (
              <div key={row.label} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: i < 3 ? '1px solid var(--border)' : 'none' }}>
                <div style={{ padding: '16px 20px', background: 'var(--surface)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span style={{ fontSize: '10px', color: 'var(--text-tertiary)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>{row.label}</span>
                  <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>{row.pre}</span>
                </div>
                <div style={{ padding: '16px 20px', background: 'rgba(16,185,129,0.03)', display: 'flex', flexDirection: 'column', gap: '4px', borderLeft: '1px solid var(--border)' }}>
                  <span style={{ fontSize: '10px', color: 'var(--text-tertiary)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>{row.label}</span>
                  <span style={{ fontSize: '13px', color: 'var(--text-primary)', fontWeight: 500 }}>{row.post}</span>
                </div>
              </div>
            ))}
          </div>
          </div>

          <div style={{
            padding: '20px 24px',
            background: 'rgba(16,185,129,0.06)',
            borderLeft: '2px solid rgba(16,185,129,0.4)',
            borderRadius: '0 8px 8px 0',
          }}>
            <span style={{ fontSize: '10px', fontWeight: 700, color: green, letterSpacing: '0.08em', display: 'block', marginBottom: '6px' }}>KEY INSIGHT</span>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
              The sequencing choice is actually a compliance + fraud design decision. Pre-auth in an open-loop system means a bad actor can enter any card number and drain someone else's points. Post-auth eliminates the attack surface entirely — and happens to be faster and higher success rate too.
            </p>
          </div>
        </Section>

        {/* A/B Test */}
        <Section id="ab-test" label="05 — A/B Test: Widget vs Bottom Sheet">
          <p style={bodyText}>
            Once the architecture was decided, the UX question was: how do we surface the points offer in the card flow? We ran a floor test with ~20 participants, screen recording each session.
          </p>

          <div style={{
            margin: '28px 0',
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: '16px',
          }}>
            <div style={{
              padding: '24px',
              border: '1px solid var(--border)',
              borderRadius: '14px',
              background: 'var(--surface)',
            }}>
              <div style={{ fontSize: '10px', fontWeight: 700, color: 'var(--text-tertiary)', letterSpacing: '0.1em', marginBottom: '12px' }}>CONCEPT A — INLINE WIDGET</div>
              <div style={{ fontSize: '15px', fontWeight: 600, marginBottom: '8px' }}>Embedded slider</div>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Points slider and offer appear inline inside the card form. Fewer taps. Less visible opt-out.
              </p>
              <div style={{
                marginTop: '16px',
                fontSize: '11px',
                fontWeight: 600,
                color: '#f59e0b',
                background: 'rgba(245,158,11,0.1)',
                padding: '4px 10px',
                borderRadius: '100px',
                display: 'inline-block',
              }}>
                5 of 20 preferred
              </div>
            </div>
            <div style={{
              padding: '24px',
              border: `1px solid rgba(16,185,129,0.3)`,
              borderRadius: '14px',
              background: 'rgba(16,185,129,0.05)',
            }}>
              <div style={{ fontSize: '10px', fontWeight: 700, color: green, letterSpacing: '0.1em', marginBottom: '12px' }}>CONCEPT B — BOTTOM SHEET ✓</div>
              <div style={{ fontSize: '15px', fontWeight: 600, marginBottom: '8px' }}>Modal sheet</div>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Dedicated bottom sheet with clear breakdown: points used, remaining amount, explicit skip option.
              </p>
              <div style={{
                marginTop: '16px',
                fontSize: '11px',
                fontWeight: 600,
                color: green,
                background: 'rgba(16,185,129,0.1)',
                padding: '4px 10px',
                borderRadius: '100px',
                display: 'inline-block',
              }}>
                15 of 20 preferred
              </div>
            </div>
          </div>

          {/* User quotes */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
            {[
              '"It clearly calls out that I am using my points — versus the first option where the chances of me missing it is easy"',
              '"It made me quickly choose the value and decision overhead felt much lesser"',
              '"More clear on the Skip and Pay option, and the UI also covers card details and the amount which needs to be paid"',
            ].map((q, i) => (
              <div key={i} style={{
                padding: '14px 18px',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '10px',
                fontSize: '13px',
                color: 'var(--text-secondary)',
                lineHeight: 1.65,
                fontStyle: 'italic',
              }}>
                {q}
              </div>
            ))}
          </div>

          <div style={{
            padding: '20px 24px',
            background: 'rgba(16,185,129,0.06)',
            borderLeft: '2px solid rgba(16,185,129,0.4)',
            borderRadius: '0 8px 8px 0',
          }}>
            <span style={{ fontSize: '10px', fontWeight: 700, color: green, letterSpacing: '0.08em', display: 'block', marginBottom: '6px' }}>NUANCE FROM RESEARCH</span>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
              Bottom sheet won overall, but widget has a speed advantage for repeat users. Recommendation: bottom sheet for first-time flow, progressively simplify to inline widget for returning cardholders. This became a roadmap input, not just a test result.
            </p>
          </div>
          <VisualGrid slots={[
            { label: 'Concept A — Inline Widget', aspect: '9/16', caption: '5 of 20 participants preferred — faster for repeat users' },
            { label: 'Concept B — Bottom Sheet', aspect: '9/16', caption: '15 of 20 preferred — clearer breakdown, explicit skip' },
          ]} />
        </Section>

        {/* Live Impact */}
        <Section id="impact" label="06 — Live Impact">
          <p style={bodyText}>
            This shipped. These are real numbers from real merchants.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '16px', marginTop: '28px', marginBottom: '28px' }}>
            <ImpactCard
              brand="IDFC FIRST Bank"
              color={green}
              stats={[
                { value: '+12%', label: 'New users acquired' },
                { value: '+7%', label: 'Avg spend growth' },
              ]}
              note="In 1 month live on 20 merchants + Razorpay Affordability widget"
            />
            <ImpactCard
              brand="Licious"
              color={green}
              stats={[
                { value: '+5%', label: 'Monthly cohort retention (projected)' },
              ]}
              note="Infrequent redeemers now get discounted access to daily-use category"
            />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '12px' }}>
            {[
              { value: '₹1,000 Cr', label: 'GMV target', sub: 'Via CC payment method' },
              { value: '25+', label: 'Merchants live', sub: 'Swiggy, Lenskart, Titan, Nykaa' },
              { value: '3 weeks', label: 'Integration time', sub: 'vs 6–10 weeks for competitors' },
            ].map(m => (
              <div
                key={m.label}
                style={{
                  padding: '24px 20px',
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '14px',
                }}
              >
                <div style={{ fontSize: '28px', fontWeight: 700, letterSpacing: '-0.04em', color: green, marginBottom: '6px' }}>{m.value}</div>
                <div style={{ fontSize: '13px', fontWeight: 500, marginBottom: '4px' }}>{m.label}</div>
                <div style={{ fontSize: '11px', color: 'var(--text-tertiary)' }}>{m.sub}</div>
              </div>
            ))}
          </div>
        </Section>

        {/* Reflection */}
        <Section id="different" label="07 — What I Learned">
          <p style={bodyText}>
            Designing a 3-sided marketplace means no single user is "the user." Every decision — placement, sequencing, opt-out visibility, points display — had to work for cardholders, satisfy bank compliance requirements, and give merchants a measurable conversion lever. Optimising for one stakeholder usually compromised another.
          </p>
          <p style={{ ...bodyText, marginTop: '16px' }}>
            The finding I didn't expect from the floor test: the extra step increased conversion confidence, not just transparency. We assumed friction = drop-off. The session recordings showed the opposite — participants lingered on the bottom sheet, read the breakdown, and completed more decisively than the inline widget group. Financial decisions benefit from explicit moment of choice.
          </p>
          <p style={{ ...bodyText, marginTop: '16px' }}>
            The sequencing decision (post-auth, not pre-auth) was framed internally as a technical call. I pushed to frame it as a compliance and fraud design decision — because it was. That reframe got the right stakeholders in the room and got it decided in one session instead of three.
          </p>
          <p style={{ ...bodyText, marginTop: '16px' }}>
            What I'd do differently: the competitive landscape research happened early but wasn't formally documented until late. Twid's failure data (sub-55% SR as a separate payment method) was the single most useful input to our architecture decision. I'd surface that artifact earlier in future 0→1 projects — it changes the conversation before the first wire is drawn.
          </p>
        </Section>

        {/* Nav */}
        <div style={{ marginTop: '80px', paddingTop: '60px', borderTop: '1px solid var(--border)' }}>
          <p style={{ fontSize: '12px', color: 'var(--text-tertiary)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '20px' }}>
            Previous Case Study
          </p>
          <Link to="/linked-payments">
            <motion.div
              whileHover={{ x: -8 }}
              transition={{ duration: 0.25, ease }}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '32px',
                border: '1px solid var(--border)',
                borderRadius: '16px',
              }}
            >
              <span style={{ fontSize: '24px', color: 'var(--text-tertiary)' }}>←</span>
              <div style={{ textAlign: 'right' }}>
                <h3 style={{ fontSize: '22px', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: '8px' }}>Linked Payments</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Atomic split payments · Gift Cards on Checkout</p>
              </div>
            </motion.div>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

const bodyText = {
  fontSize: '16px',
  color: 'var(--text-secondary)',
  lineHeight: 1.75,
  letterSpacing: '-0.005em',
}

function Section({ label, children, id }) {
  return (
    <div id={id}>
      <FadeUp style={{ marginBottom: '72px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px' }}>
          <p style={{
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--text-tertiary)',
            margin: 0,
            flexShrink: 0,
          }}>
            {label}
          </p>
          <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
        </div>
        {children}
      </FadeUp>
    </div>
  )
}

function StakeholderCard({ role, color, need, pain }) {
  return (
    <div style={{
      padding: '20px 24px',
      border: '1px solid var(--border)',
      borderRadius: '12px',
      background: 'var(--surface)',
    }}>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
        <div style={{
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          background: color,
          flexShrink: 0,
          marginTop: '7px',
        }} />
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
            <span style={{ fontSize: '13px', fontWeight: 700, color }}>{role}</span>
            <span style={{ fontSize: '12px', color: 'var(--text-tertiary)', maxWidth: '55%', textAlign: 'right', lineHeight: 1.4 }}>
              Need: {need}
            </span>
          </div>
          <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            <span style={{ color: 'var(--text-tertiary)' }}>Pain: </span>{pain}
          </p>
        </div>
      </div>
    </div>
  )
}

function SolutionCard({ solution }) {
  const statusColor = solution.status === 'chosen' ? green : solution.status === 'hold' ? '#f59e0b' : '#ef4444'
  const statusBg = solution.status === 'chosen' ? 'rgba(16,185,129,0.08)' : solution.status === 'hold' ? 'rgba(245,158,11,0.08)' : 'rgba(239,68,68,0.06)'
  const statusBorder = solution.status === 'chosen' ? 'rgba(16,185,129,0.25)' : solution.status === 'hold' ? 'rgba(245,158,11,0.2)' : 'rgba(239,68,68,0.15)'

  return (
    <div style={{
      padding: '20px 24px',
      border: `1px solid ${statusBorder}`,
      borderRadius: '12px',
      background: statusBg,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
        <span style={{ fontSize: '14px', fontWeight: 600 }}>{solution.title}</span>
        <span style={{
          fontSize: '10px',
          fontWeight: 700,
          color: statusColor,
          background: `${statusColor}15`,
          padding: '3px 8px',
          borderRadius: '4px',
          letterSpacing: '0.06em',
          flexShrink: 0,
        }}>
          {solution.label}
        </span>
      </div>
      <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.65 }}>{solution.desc}</p>
    </div>
  )
}

function ImpactCard({ brand, color, stats, note }) {
  return (
    <div style={{
      padding: '24px',
      border: `1px solid rgba(16,185,129,0.2)`,
      borderRadius: '14px',
      background: 'rgba(16,185,129,0.04)',
    }}>
      <div style={{ fontSize: '12px', fontWeight: 700, color, marginBottom: '16px', letterSpacing: '0.04em' }}>{brand}</div>
      <div style={{ display: 'flex', gap: '20px', marginBottom: '12px', flexWrap: 'wrap' }}>
        {stats.map(s => (
          <div key={s.label}>
            <div style={{ fontSize: '24px', fontWeight: 700, letterSpacing: '-0.03em', color }}>{s.value}</div>
            <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginTop: '2px' }}>{s.label}</div>
          </div>
        ))}
      </div>
      <p style={{ fontSize: '12px', color: 'var(--text-tertiary)', lineHeight: 1.55 }}>{note}</p>
    </div>
  )
}
