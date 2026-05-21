import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { SectionNav, VisualSlot, VisualGrid, InsightBlock, ScrollProgress } from '../components/CaseStudyKit'

const SECTIONS = [
  { id: 'problem', label: 'Problem' },
  { id: 'atomic', label: 'Atomicity' },
  { id: 'decisions', label: 'Decisions' },
  { id: 'unhappy', label: 'Unhappy Paths' },
  { id: 'impact', label: 'Pipeline' },
  { id: 'learnings', label: 'Learnings' },
]

const ease = [0.16, 1, 0.3, 1]

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

const DECISIONS = [
  {
    num: '01',
    title: 'Naming the Feature',
    question: 'What do we call atomic split payments?',
    options: [
      { label: 'Split Payment', rejected: true, reason: 'Suggests the merchant splits payment — wrong actor' },
      { label: 'Multi-method Payment', rejected: true, reason: 'Accurate but clinical, no implication of atomicity' },
      { label: 'Hybrid Payment', rejected: true, reason: 'Too vague — hybrid means different things in different contexts' },
      { label: 'Combo Payment', rejected: true, reason: 'Sounds informal, not enterprise-grade' },
      { label: 'Composite Payment', rejected: true, reason: 'Correct but opaque — not intuitive for merchants' },
      { label: 'Linked Payments', chosen: true, reason: 'Implies connection + atomicity. The word "linked" carries the weight of both methods being tied together.' },
    ],
    insight: 'Naming is product design. The right name sets the right expectation before the user reads a single sentence of documentation.',
  },
  {
    num: '02',
    title: 'Payment ID Architecture',
    question: 'One payment ID or two?',
    options: [
      { label: '1 Payment ID', rejected: true, reason: 'Hides which method failed during debugging. Customer support can\'t isolate the issue.' },
      { label: '2 Payment IDs', chosen: true, reason: 'Separate tracking per payment method. Failures, refunds, and reconciliation all become tractable.' },
    ],
    insight: 'The decision that looks like a backend concern is actually a merchant ops and CS design decision. Two IDs means: one failure doesn\'t black-box the other.',
  },
  {
    num: '03',
    title: 'Refund Experience',
    question: 'When the primary payment fails post-GC debit, how do we refund?',
    options: [
      { label: 'Option 1 — Auto-refund immediately', rejected: true, reason: 'Fast but bypasses merchant control. Violates merchant-owned refund flows.' },
      { label: 'Option 2 — Notify merchant, batch refund from details page', chosen: true, reason: 'Merchant retains control. Batch mode reduces operational noise for high-volume merchants.' },
      { label: 'Option 3 — Customer initiates refund', rejected: true, reason: 'Puts burden on the wrong party. The customer had no agency in what failed.' },
      { label: 'Option 4 — Support ticket flow', rejected: true, reason: 'Adds human latency to a system failure. Creates NPS risk.' },
    ],
    insight: 'The refund design defines who owns the failure. We chose: Razorpay detects, merchant decides, customer receives — with no human in the loop for standard cases.',
  },
  {
    num: '04',
    title: 'API Request Structure',
    question: 'How should the API communicate amounts per payment method?',
    options: [
      { label: 'Option 1 — Total amount only', rejected: true, reason: 'API can\'t know how to split. Ambiguous for partial redemptions.' },
      { label: 'Option 2 — Percentage split', rejected: true, reason: 'Floating point rounding creates paise discrepancies. A pain in reconciliation.' },
      { label: 'Option 3 — Implicit GC amount from balance', rejected: true, reason: 'Silent logic. Breaks if the GC balance changes between creation and capture.' },
      { label: 'Option 4 — Explicit per-method amounts', chosen: true, reason: 'Merchant declares exactly: ₹500 from GC, ₹1200 from UPI. No ambiguity, no rounding, no implicit state.' },
    ],
    insight: 'API design is UX for developers. The API that requires the most typing is sometimes the safest — because it forces the caller to think, not assume.',
  },
  {
    num: '05',
    title: 'Success Screen',
    question: 'What does the customer see after a successful linked payment?',
    options: [
      { label: 'Option 1 — Single summary', rejected: true, reason: 'Hides the split — customer can\'t verify what was charged to each method' },
      { label: 'Option 2 — Method breakdown only', rejected: true, reason: 'Shows how much per method but not the transaction reference — can\'t reconcile later' },
      { label: 'Option 3 — Both payment IDs + breakdown', chosen: true, reason: 'Full transparency: what was charged where, with references for both legs of the transaction' },
    ],
    insight: 'Trust in payments is built by showing the user exactly what happened, with evidence. Hiding the split saves screen space but costs trust.',
  },
]

export default function LinkedPayments() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 60])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

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
          padding: '60px 48px 80px',
          maxWidth: '1100px',
          margin: '0 auto',
          position: 'relative',
        }}
      >
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'radial-gradient(ellipse 80% 60% at 50% 20%, rgba(124,58,237,0.09) 0%, transparent 70%)',
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
              color: '#7c3aed',
              background: 'rgba(124,58,237,0.1)',
              border: '1px solid rgba(124,58,237,0.2)',
              borderRadius: '100px',
              padding: '5px 14px',
              marginBottom: '28px',
            }}>
              Case Study 02 · Payments Infrastructure
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
            Linked Payments —<br />
            <span style={{ color: '#7c3aed' }}>Atomic by Design</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.38 }}
            style={{ fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '560px', lineHeight: 1.65, marginBottom: '48px' }}
          >
            Gift cards come in fixed denominations. Cart values don't match them. Merchants were restricting redemption to avoid the gap.
            We built atomic split payment — gift card + UPI in a single, all-or-nothing checkout session.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            style={{ display: 'flex', gap: '48px' }}
          >
            {[
              { label: 'GMV Unlock', value: '+₹38 Cr/yr' },
              { label: 'Lead Merchant', value: 'Puma' },
              { label: 'TAM Pipeline', value: '₹400 Cr+' },
            ].map(s => (
              <div key={s.label}>
                <div style={{ fontSize: '28px', fontWeight: 700, letterSpacing: '-0.03em', color: '#7c3aed' }}>{s.value}</div>
                <div style={{ fontSize: '12px', color: 'var(--text-tertiary)', marginTop: '4px' }}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <SectionNav sections={SECTIONS} color="#7c3aed" />
      <ScrollProgress sections={SECTIONS} color="#7c3aed" />

      {/* Content */}
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '72px 48px 160px' }}>

        {/* Overview strip */}
        <FadeUp>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1px',
            background: 'var(--border)',
            border: '1px solid var(--border)',
            borderRadius: '16px',
            overflow: 'hidden',
            marginBottom: '80px',
          }}>
            {[
              { label: 'My Role', value: 'Feature naming · API UX · Refund flow · Success screen' },
              { label: 'Timeline', value: 'Q4 2024 – Q1 2025' },
              { label: 'Gate', value: 'API Council Approval' },
              { label: 'Merchants', value: 'Puma · MakeMyTrip · Nykaa' },
            ].map(item => (
              <div key={item.label} style={{ padding: '28px', background: 'var(--surface)' }}>
                <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '8px' }}>{item.label}</div>
                <div style={{ fontSize: '15px', fontWeight: 500 }}>{item.value}</div>
              </div>
            ))}
          </div>
        </FadeUp>

        {/* Problem */}
        <Section id="problem" label="01 — The Problem" accentColor="#7c3aed">
          <p style={bodyText}>
            Razorpay issues gift cards in fixed denominations: ₹500, ₹1,000, ₹2,000. Real cart values are ₹1,349 or ₹3,720. The math never works perfectly.
          </p>
          <div style={{
            margin: '28px 0',
            padding: '24px',
            background: 'rgba(124,58,237,0.06)',
            border: '1px solid rgba(124,58,237,0.15)',
            borderRadius: '14px',
          }}>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              Without split payment support, merchants had two choices: restrict gift card redemption to exact-denomination carts (killing conversion), or absorb the difference themselves (killing margins). Both were bad. Both were happening.
            </p>
          </div>
          <p style={bodyText}>
            Puma explicitly requested this feature. MakeMyTrip represented ₹400 Cr in pipeline. The solution couldn't be partial — it had to be atomic.
          </p>
        </Section>

        {/* Atomicity */}
        <Section id="atomic" label="02 — What Atomic Means Here" accentColor="#7c3aed">
          <p style={bodyText}>
            "Atomic" in payments means: both succeed together, or neither succeeds. No partial states that leave money in limbo.
          </p>
          <div style={{ margin: '28px 0', display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {[
              { step: '1', label: 'Primary method processes first', desc: 'UPI / card / netbanking — highest failure risk goes first', color: '#7c3aed' },
              { step: '2', label: 'Primary succeeds → GC debited', desc: 'Gift card balance deducted only after UPI clears', color: '#7c3aed' },
              { step: '3', label: 'Both succeed → Order confirmed', desc: 'Customer sees full breakdown with two payment IDs', color: '#16a34a' },
              { step: 'Alt', label: 'Primary fails → GC never touched', desc: 'No refund needed — GC wasn\'t debited', color: '#dc2626' },
              { step: 'Alt', label: 'GC fails after primary → Auto-refund primary', desc: 'Full rollback. Merchant notified. Batch refund available.', color: '#dc2626' },
            ].map((s, i) => (
              <div key={i} style={{
                display: 'flex',
                gap: '16px',
                padding: '18px 20px',
                background: i < 3 ? 'var(--surface)' : 'transparent',
                borderRadius: '10px',
                alignItems: 'flex-start',
                borderLeft: `2px solid ${s.color}20`,
              }}>
                <span style={{
                  fontSize: '10px',
                  fontWeight: 700,
                  color: s.color,
                  background: `${s.color}15`,
                  borderRadius: '6px',
                  padding: '3px 8px',
                  flexShrink: 0,
                  marginTop: '2px',
                }}>
                  {s.step}
                </span>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '3px' }}>{s.label}</div>
                  <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <VisualSlot label="Linked Payment — Happy Path Flow" aspect="16/9" caption="Gift card + UPI in a single atomic session. Primary method first, GC debited only on success." wide />
        </Section>

        {/* Design Decisions — the centrepiece */}
        <Section id="decisions" label="03 — Design Decisions" accentColor="#7c3aed">
          <p style={bodyText}>
            Five documented trade-off decisions. This is where the product thinking lives — not in the pixels, but in the choices.
          </p>
          <div style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {DECISIONS.map(d => (
              <DecisionBlock key={d.num} decision={d} />
            ))}
          </div>
        </Section>

        {/* Unhappy Paths */}
        <Section id="unhappy" label="04 — Unhappy Paths" accentColor="#7c3aed">
          <p style={bodyText}>
            The happy path took one afternoon. The unhappy paths took weeks. Every failure mode needed a defined owner, a resolution path, and a communication plan.
          </p>
          <div style={{ marginTop: '28px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            {[
              { scenario: 'Primary fails', resolution: 'GC never debited. No refund required. Error shown at checkout.' },
              { scenario: 'GC fails post-primary', resolution: 'Primary auto-refunded. Merchant notified. Batch refund from dashboard.' },
              { scenario: 'Timeout during capture', resolution: 'System polls for 15min. If inconclusive, flags for manual review.' },
              { scenario: 'Customer cancels mid-flow', resolution: 'Primary not captured. GC reserve released. Clean exit.' },
              { scenario: 'Late authorization', resolution: 'If primary late-auths, capture attempted. If GC already expired, refund primary + notify.' },
              { scenario: 'GC insufficient balance', resolution: 'Checkout shows updated available balance. User re-enters primary amount.' },
            ].map(s => (
              <div key={s.scenario} style={{
                padding: '20px',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                background: 'var(--surface)',
              }}>
                <div style={{ fontSize: '12px', fontWeight: 600, color: '#f59e0b', marginBottom: '8px' }}>{s.scenario}</div>
                <div style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{s.resolution}</div>
              </div>
            ))}
          </div>
        </Section>

        {/* Merchants + Impact */}
        <Section id="impact" label="05 — Pipeline & Impact" accentColor="#7c3aed">
          <p style={bodyText}>
            This wasn't designed for a prototype. It was designed for API council approval — a one-way door. Merchants integrate once and can't easily migrate. Every API design decision carries years of downstream consequence.
          </p>
          <div style={{ margin: '32px 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { merchant: 'Puma', gmv: '₹50 Cr', note: 'Explicitly requested this feature. Design trigger.' },
              { merchant: 'MakeMyTrip', gmv: '₹400 Cr', note: 'Travel — GC redemption on variable-price flight bookings' },
              { merchant: 'Nykaa', gmv: '₹180 Cr', note: 'Beauty retail — high GC gifting volume' },
              { merchant: 'Tata CLiQ', gmv: '₹175 Cr', note: 'Luxury — gift cards as premium gifting instrument' },
              { merchant: 'Crossword', gmv: '—', note: 'Books — smaller ticket, high GC index' },
            ].map(m => (
              <div key={m.merchant} style={{
                display: 'grid',
                gridTemplateColumns: '120px 80px 1fr',
                gap: '16px',
                padding: '16px 20px',
                border: '1px solid var(--border)',
                borderRadius: '10px',
                alignItems: 'center',
              }}>
                <span style={{ fontSize: '14px', fontWeight: 600 }}>{m.merchant}</span>
                <span style={{ fontSize: '14px', color: '#7c3aed', fontWeight: 600 }}>{m.gmv}</span>
                <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>{m.note}</span>
              </div>
            ))}
          </div>
          <div style={{
            padding: '24px',
            background: 'rgba(124,58,237,0.06)',
            border: '1px solid rgba(124,58,237,0.15)',
            borderRadius: '14px',
          }}>
            <div style={{ fontSize: '32px', fontWeight: 700, letterSpacing: '-0.04em', color: '#7c3aed', marginBottom: '8px' }}>+₹38 Cr/yr</div>
            <div style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
              Incremental GMV unlock. 3 merchants targeted for Q2 launch. API council approval was the critical path — not design, not engineering.
            </div>
          </div>
          <VisualSlot label="Puma Checkout — Linked Payment Integration" aspect="16/9" caption="Gift card + UPI split on Puma checkout — denomination mismatch solved" wide />
        </Section>

        {/* Reflection */}
        <Section id="learnings" label="06 — What I Learned" accentColor="#7c3aed">
          <p style={bodyText}>
            The hardest part of this project wasn't designing the checkout UI — it was making five irreversible decisions defensible. Every option table in the PRD existed because I needed to show, not just conclude. API council approval is a one-way door: merchants integrate once and don't migrate.
          </p>
          <p style={{ ...bodyText, marginTop: '16px' }}>
            Atomic payments expose a design truth: the user experience of a payment is only as good as the failure handling. The 2% of unhappy paths need 80% of the design thinking. The six scenarios in the unhappy paths section weren't edge cases — they were the product.
          </p>
          <p style={{ ...bodyText, marginTop: '16px' }}>
            The decision I'd revisit: Decision 03, the refund experience. We chose merchant control over speed — notify the merchant, let them batch-refund. That's right for high-volume accounts. But for small merchants with one or two incidents a month, the operational overhead of a "refund from details page" flow is real friction. A tiered default — auto-refund under ₹1,000, merchant-controlled above — would have served more of the distribution.
          </p>
          <p style={{ ...bodyText, marginTop: '16px' }}>
            What surprised me: Decision 01 (naming) influenced everything downstream. The word "linked" set a mental model — two methods tied together, indivisible — that made every subsequent API, UI, and support decision easier to align on. Naming is not cosmetic. It's architecture.
          </p>
        </Section>

        {/* Case study nav */}
        <div style={{ marginTop: '80px', paddingTop: '60px', borderTop: '1px solid var(--border)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Link to="/gcms">
            <motion.div
              whileHover={{ x: -8 }}
              transition={{ duration: 0.25, ease }}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '24px 32px',
                border: '1px solid var(--border)',
                borderRadius: '16px',
              }}
            >
              <span style={{ fontSize: '20px', color: 'var(--text-tertiary)' }}>←</span>
              <div style={{ textAlign: 'right' }}>
                <p style={{ fontSize: '11px', color: 'var(--text-tertiary)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '4px' }}>Previous</p>
                <h3 style={{ fontSize: '18px', fontWeight: 700, letterSpacing: '-0.02em' }}>GCMS Self-Serve</h3>
              </div>
            </motion.div>
          </Link>
          <Link to="/pay-with-points">
            <motion.div
              whileHover={{ x: 8 }}
              transition={{ duration: 0.25, ease }}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '24px 32px',
                border: '1px solid var(--border)',
                borderRadius: '16px',
              }}
            >
              <div>
                <p style={{ fontSize: '11px', color: 'var(--text-tertiary)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '4px' }}>Next</p>
                <h3 style={{ fontSize: '18px', fontWeight: 700, letterSpacing: '-0.02em' }}>Pay With Points</h3>
              </div>
              <span style={{ fontSize: '20px', color: 'var(--text-tertiary)' }}>→</span>
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

function Section({ label, children, accentColor, id }) {
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

function DecisionBlock({ decision }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease }}
      style={{
        border: '1px solid var(--border)',
        borderRadius: '18px',
        overflow: 'hidden',
        background: 'var(--surface)',
      }}
    >
      {/* Header */}
      <div style={{
        padding: '24px 28px 20px',
        borderBottom: '1px solid var(--border)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: '20px',
      }}>
        <div>
          <span style={{ fontSize: '10px', fontWeight: 700, color: '#7c3aed', letterSpacing: '0.1em', display: 'block', marginBottom: '6px' }}>
            DECISION {decision.num}
          </span>
          <h4 style={{ fontSize: '18px', fontWeight: 700, letterSpacing: '-0.02em' }}>{decision.title}</h4>
          <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginTop: '6px' }}>{decision.question}</p>
        </div>
      </div>

      {/* Options */}
      <div style={{ padding: '20px 28px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
          {decision.options.map((opt, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                gap: '12px',
                padding: '14px 16px',
                borderRadius: '10px',
                background: opt.chosen ? 'rgba(124,58,237,0.08)' : 'transparent',
                border: opt.chosen ? '1px solid rgba(124,58,237,0.25)' : '1px solid var(--border)',
                alignItems: 'flex-start',
              }}
            >
              <span style={{
                fontSize: '10px',
                fontWeight: 700,
                padding: '3px 7px',
                borderRadius: '4px',
                flexShrink: 0,
                marginTop: '1px',
                background: opt.chosen ? '#7c3aed' : 'var(--surface-2)',
                color: opt.chosen ? '#fff' : 'var(--text-tertiary)',
              }}>
                {opt.chosen ? '✓' : '✗'}
              </span>
              <div style={{ flex: 1 }}>
                <div style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  color: opt.chosen ? '#7c3aed' : 'var(--text-secondary)',
                  marginBottom: '4px',
                }}>
                  {opt.label}
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-tertiary)', lineHeight: 1.5 }}>
                  {opt.reason}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Insight */}
        <div style={{
          padding: '16px',
          background: 'rgba(124,58,237,0.04)',
          borderRadius: '8px',
          borderLeft: '2px solid rgba(124,58,237,0.3)',
        }}>
          <span style={{ fontSize: '10px', fontWeight: 700, color: '#7c3aed', letterSpacing: '0.08em', marginBottom: '6px', display: 'block' }}>
            KEY INSIGHT
          </span>
          <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
            {decision.insight}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
