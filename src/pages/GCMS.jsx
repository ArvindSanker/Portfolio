import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { SectionNav, VisualSlot, VisualGrid, InsightBlock, ScrollProgress } from '../components/CaseStudyKit'
import { useIsMobile } from '../hooks/useIsMobile'

const SECTIONS = [
  { id: 'problem', label: 'Problem' },
  { id: 'audience', label: 'Audience' },
  { id: 'solution', label: 'Solution' },
  { id: 'decisions', label: 'Decisions' },
  { id: 'impact', label: 'Impact' },
  { id: 'research', label: 'Research' },
  { id: 'cs-console', label: 'CS Console' },
  { id: 'self-serve', label: 'Self-Serve' },
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

export default function GCMS() {
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
          background: 'radial-gradient(ellipse 80% 60% at 50% 20%, rgba(45,104,254,0.08) 0%, transparent 70%)',
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
              color: '#2d68fe',
              background: 'rgba(45,104,254,0.1)',
              border: '1px solid rgba(45,104,254,0.2)',
              borderRadius: '100px',
              padding: '5px 14px',
              marginBottom: '28px',
            }}>
              Case Study 01 · B2B Platform
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
            Gift Card Management<br />
            <span style={{ color: '#2d68fe' }}>Self-Serve, at Scale</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.38 }}
            style={{
              fontSize: '18px',
              color: 'var(--text-secondary)',
              maxWidth: '560px',
              lineHeight: 1.65,
              marginBottom: '48px',
            }}
          >
            Merchants were losing revenue because issuing gift cards required onboarding resellers.
            We built a self-serve system that eliminated that dependency entirely.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            style={{ display: 'flex', gap: '48px' }}
          >
            {[
              { label: 'GMV Target', value: '₹209 Cr' },
              { label: 'Previous Target', value: '₹55 Cr' },
              { label: 'Benchmark', value: 'NPS 7+' },
            ].map(s => (
              <div key={s.label}>
                <div style={{ fontSize: '28px', fontWeight: 700, letterSpacing: '-0.03em', color: '#2d68fe' }}>{s.value}</div>
                <div style={{ fontSize: '12px', color: 'var(--text-tertiary)', marginTop: '4px' }}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <SectionNav sections={SECTIONS} color="#2d68fe" />
      <ScrollProgress sections={SECTIONS} color="#2d68fe" />

      {/* Content */}
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: 'clamp(40px,6vw,72px) var(--px) 160px' }}>

        {/* Overview strip */}
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
              { label: 'My Role', value: 'End-to-end UX · IA · Stakeholder Research' },
              { label: 'Timeline', value: 'Oct 2023 – Present' },
              { label: 'Platform', value: 'B2B Dashboard · Razorpay Dashboard' },
              { label: 'Status', value: 'Shipped + In Design' },
            ].map(item => (
              <div key={item.label} style={{ padding: '28px', background: 'var(--surface)' }}>
                <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '8px' }}>{item.label}</div>
                <div style={{ fontSize: '15px', fontWeight: 500 }}>{item.value}</div>
              </div>
            ))}
          </div>
        </FadeUp>

        {/* Section: Problem */}
        <Section id="problem" label="01 — The Problem">
          <p style={bodyText}>
            Merchants who wanted to issue gift cards had to onboard through resellers — a slow, high-friction process that added cost and dependency. Two data points told the real story:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '16px', margin: '32px 0' }}>
            <DataCard
              brand="Zomato"
              color="#E23744"
              stat="Routed to PoshVine"
              detail="Lost to a competitor because Razorpay couldn't offer direct issuance"
            />
            <DataCard
              brand="Lenskart"
              color="#F97316"
              stat="14,518 API calls"
              detail="In 3 months using a hacky bulk-file workaround — not a product"
            />
          </div>
          <p style={bodyText}>
            The gap wasn't in payment capability — Razorpay had the rails. The gap was in merchant experience. There was no product surface for merchants to operate gift cards on their own terms.
          </p>
          <VisualSlot src="/images/gcms/IMG_0873.PNG" label="Gift Card Programs Dashboard" aspect="16/9" caption="The Gift Card Programs dashboard — where merchants now own their operations" wide />
        </Section>

        {/* Section: Who We Designed For */}
        <Section id="audience" label="02 — Who We Designed For">
          <p style={bodyText}>
            Gift card operations involve multiple stakeholders with different goals. Getting the mental model right early was critical — one dashboard serving the wrong user would fail everyone.
          </p>
          <div style={{ marginTop: '28px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { role: 'Marketing Ops', need: 'Place bulk orders fast, track status without hand-holding' },
              { role: 'Finance Admin', need: 'Visibility into orders, costs, and reconciliation' },
              { role: 'Gift Card Ops', need: 'Download issued cards, manage inventory by denomination' },
              { role: 'Partnership Manager', need: 'Program configuration, reseller visibility' },
              { role: 'P&L Owner', need: 'Business metrics, GMV, conversion data' },
              { role: 'Customer Support', need: 'Look up individual gift card status for escalations' },
            ].map(p => (
              <div key={p.role} style={{
                display: 'flex',
                gap: '20px',
                padding: '16px 20px',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                alignItems: 'flex-start',
              }}>
                <span style={{ fontSize: '13px', fontWeight: 600, color: '#2d68fe', minWidth: '140px', flexShrink: 0 }}>{p.role}</span>
                <span style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.55 }}>{p.need}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Section: Solution */}
        <Section id="solution" label="03 — The Solution">
          <p style={bodyText}>
            A cart-based ordering flow — familiar enough to require no training, yet structured enough to handle enterprise-scale operations. Merchants pick a program, configure denominations, add to cart, and place the order. No reseller. No phone call. No waiting.
          </p>

          {/* Rejected alternatives */}
          <div style={{ margin: '28px 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-tertiary)', marginBottom: '4px' }}>
              Approaches considered and rejected
            </div>
            {[
              {
                label: 'Bulk CSV upload',
                reason: 'Lenskart\'s 14,518-call workaround was essentially this. No real-time feedback, opaque processing, and error-prone for non-technical ops teams managing recurring orders.',
              },
              {
                label: 'API-only ordering',
                reason: 'Accurate for engineers, wrong for marketing ops. Every order run would require engineering bandwidth. Excludes the teams who actually run gift card operations daily.',
              },
            ].map(a => (
              <div key={a.label} style={{
                display: 'flex',
                gap: '12px',
                padding: '14px 16px',
                border: '1px solid var(--border)',
                borderRadius: '10px',
                background: 'var(--surface)',
                alignItems: 'flex-start',
              }}>
                <span style={{ fontSize: '10px', fontWeight: 700, color: 'var(--text-tertiary)', background: 'var(--surface-2)', padding: '3px 7px', borderRadius: '4px', flexShrink: 0, marginTop: '1px' }}>✗</span>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 600, marginBottom: '3px', color: 'var(--text-secondary)' }}>{a.label}</div>
                  <div style={{ fontSize: '13px', color: 'var(--text-tertiary)', lineHeight: 1.55 }}>{a.reason}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ margin: '36px 0', display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {[
              { step: '1', label: 'Select Program', desc: 'Choose from merchant\'s configured gift card programs' },
              { step: '2', label: 'Choose Denomination', desc: 'Pick from ₹500 / ₹1000 / ₹2000 preset values' },
              { step: '3', label: 'Set Quantity', desc: 'Enter order quantity with real-time total preview' },
              { step: '4', label: 'Add to Cart', desc: 'Stack multiple denominations in one order' },
              { step: '5', label: 'Review & Place', desc: 'Confirm order details and authorize payment' },
              { step: '6', label: 'Track Status', desc: 'Live status updates: queued → processing → fulfilled' },
              { step: '7', label: 'Download Cards', desc: 'Bulk CSV download of issued gift cards' },
            ].map((s, i) => (
              <div
                key={s.step}
                style={{
                  display: 'flex',
                  gap: '20px',
                  alignItems: 'flex-start',
                  padding: '20px 24px',
                  background: i % 2 === 0 ? 'var(--surface)' : 'transparent',
                  borderRadius: '10px',
                }}
              >
                <span style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  color: '#2d68fe',
                  background: 'rgba(45,104,254,0.12)',
                  borderRadius: '6px',
                  padding: '3px 8px',
                  flexShrink: 0,
                  marginTop: '2px',
                }}>
                  {s.step}
                </span>
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 600, marginBottom: '4px' }}>{s.label}</div>
                  <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <VisualSlot src="/images/gcms/fcd6268124089009631904af9c95ade3.gif" label="Order Placement Flow — Animated" aspect="16/9" caption="New order → program select → denomination config → cart → place — full animated flow" wide />
          <VisualSlot src="/images/gcms/order-flow-dark.gif" label="Order Placement Flow — Dark Mode" aspect="16/9" caption="Same flow, dark interface — Razorpay Dashboard contextual cart and confirmation" wide />
        </Section>

        {/* Section: Key Design Decisions */}
        <Section id="decisions" label="04 — Key Design Decisions">
          <p style={bodyText}>
            The hardest calls weren't about visual design — they were about how the system should behave when things go wrong, and who owns what.
          </p>
          <div style={{ marginTop: '28px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <DecisionCard
              title="Order state machine"
              decision="7-state machine: Draft → Submitted → Processing → Fulfilled / Failed / Partial / Cancelled"
              why="Partial fulfillment is real — bulk orders can succeed for 4,000 cards and fail for 1,000. Merchants need granular visibility, not binary success/fail."
            />
            <DecisionCard
              title="Cart vs. single-order flow"
              decision="Cart-based — multiple denominations in one session"
              why="Marketing ops teams rarely order a single denomination. Forcing separate orders per denomination would triple the time cost for a standard monthly issuance."
            />
            <DecisionCard
              title="Download timing"
              decision="Download only available post-fulfillment, not post-submission"
              why="Cards aren't real until Razorpay's vault generates them. An intermediate download would expose empty or invalid card data."
            />
          </div>
        </Section>

        {/* Section: Impact */}
        <Section id="impact" label="05 — Impact">
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: '16px',
            marginBottom: '32px',
          }}>
            {[
              { value: '₹209 Cr', label: 'New GMV target', sub: 'Up from ₹55 Cr baseline' },
              { value: 'NPS 7+', label: 'Target satisfaction', sub: 'Competing vs Qwikcilver' },
              { value: '0', label: 'Reseller dependency', sub: 'Fully self-serve for merchants' },
            ].map(m => (
              <div
                key={m.label}
                style={{
                  padding: '28px 24px',
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '16px',
                }}
              >
                <div style={{ fontSize: '32px', fontWeight: 700, letterSpacing: '-0.04em', color: '#2d68fe', marginBottom: '8px' }}>{m.value}</div>
                <div style={{ fontSize: '13px', fontWeight: 500, marginBottom: '4px' }}>{m.label}</div>
                <div style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>{m.sub}</div>
              </div>
            ))}
          </div>
          <p style={bodyText}>
            The Flipkart pitch positioned GCMS directly against Qwikcilver — the incumbent. Our self-serve model removed the integration overhead that made switching costly, making Razorpay's offering viable for enterprise accounts that previously had no reason to move.
          </p>
        </Section>

        {/* Chapter II: Research */}
        <ChapterBreak
          number="II"
          title="UX Research"
          subtitle="What I learned by asking the right questions"
        />

        {/* Section: Research */}
        <Section id="research" label="06 — Unifying GC & Wallet Experience">
          <p style={bodyText}>
            After shipping order placement, a pattern emerged: 8 of 15 gift card merchants also used Razorpay Wallet. But the two products lived in separate dashboards with inconsistent navigation — bulk GC creation buried under the Wallet tab, GC reports surfacing in sections merchants didn't associate with gift cards. I ran stakeholder research to understand whether this was a real UX problem or just surface-level friction.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '16px', margin: '28px 0' }}>
            <div style={{ padding: '20px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '8px' }}>Method</div>
              <div style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--text-secondary)' }}>Stakeholder interviews — GC PM (Arun Nair) and Wallet PM (Hitesh Agarwal). Structured questionnaire covering navigation patterns, support escalations, and merchant mental models.</div>
            </div>
            <div style={{ padding: '20px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '8px' }}>Trigger</div>
              <div style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--text-secondary)' }}>8 of 15 GC merchants also use Wallet — enough overlap to suspect a systemic IA problem rather than isolated complaints.</div>
            </div>
          </div>
          <p style={{ ...bodyText, marginBottom: '20px' }}>
            I went in with two hypotheses to test:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <HypothesisCard
              id="H1"
              hypothesis="Bad information architecture is causing bad merchant UX — not a feature gap"
              result="validated"
              finding="GC operations were scattered across navigation sections designed for Wallet flows. Merchants couldn't locate reports, bulk creation, or program settings without switching mental contexts entirely."
              implication="Fix the IA first. Reorganize before building new surfaces. A new feature won't fix a navigation model that misdirects users."
            />
            <HypothesisCard
              id="H2"
              hypothesis="Self-serve program creation is the right next priority for enterprise merchants"
              result="invalidated"
              finding="Enterprise GC merchants (Zomato, Lenskart, Flipkart) don't want to configure programs themselves. They expect Razorpay to handle setup so their ops teams can focus on issuance and operations — not configuration."
              implication="Self-serve creation is the right product for mid-market, not enterprise. For enterprise, prioritize operational tooling: support workflows, reporting, and CS capabilities."
            />
          </div>
          <div style={{ marginTop: '36px', padding: '28px', background: 'rgba(45,104,254,0.04)', border: '1px solid rgba(45,104,254,0.15)', borderRadius: '16px' }}>
            <div style={{ fontSize: '11px', color: '#2d68fe', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '20px' }}>Proposed Phased Approach</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                { phase: 'Phase 1', label: 'Fix IA', desc: 'Reorganize GC navigation so GC operations are discoverable without wallet context. Navigation should reflect the merchant\'s job, not Razorpay\'s internal product structure.' },
                { phase: 'Phase 2', label: 'Operational Tooling', desc: 'Build CS Console and support workflows before adding configuration complexity. Give ops teams the tools they actually use daily.' },
                { phase: 'Phase 3', label: 'Self-Serve Creation', desc: 'Introduce program creation for mid-market merchants once the operational foundation is solid and the IA supports it.' },
              ].map(p => (
                <div key={p.phase} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: '#2d68fe', background: 'rgba(45,104,254,0.12)', padding: '3px 8px', borderRadius: '6px', flexShrink: 0, marginTop: '2px' }}>{p.phase}</span>
                  <div>
                    <span style={{ fontSize: '14px', fontWeight: 600, marginRight: '8px' }}>{p.label}</span>
                    <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{p.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Chapter III: What's Being Built */}
        <ChapterBreak
          number="III"
          title="What's Being Built Next"
          subtitle="Two features I'm actively shaping, informed by the research"
        />

        {/* Section: CS Console */}
        <Section id="cs-console" label="07 — Gift Card Customer Support Console">
          <div style={{ marginBottom: '24px' }}>
            <span style={{ fontSize: '11px', fontWeight: 600, color: '#f59e0b', background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.2)', padding: '5px 14px', borderRadius: '100px', letterSpacing: '0.04em' }}>
              In Design Review · Live for 10 merchants
            </span>
          </div>
          <p style={bodyText}>
            When a customer reports a missing or expired gift card, the ticket lands with Razorpay's support team — not the merchant's. That's a broken model. The merchant has no visibility into their own gift card support queue. The CS Console moves that resolution capability directly into the merchant dashboard.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '16px', margin: '28px 0' }}>
            <DataCard
              brand="Before"
              color="var(--text-tertiary)"
              stat="48 hrs"
              detail="Average resolution time for GC support tickets, routed through Razorpay's team"
            />
            <DataCard
              brand="After"
              color="#2d68fe"
              stat="< 1 hr"
              detail="Target resolution time with merchant-owned support console"
            />
          </div>
          <p style={bodyText}>The console has two tabs, each serving a distinct support workflow:</p>
          <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ padding: '24px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '14px' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#2d68fe', marginBottom: '10px', letterSpacing: '0.02em' }}>Cards Tab</div>
              <div style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.65 }}>Look up individual gift cards by card number or order ID. View card status, balance, expiry, and full transaction history. Block or flag cards directly without contacting Razorpay.</div>
            </div>
            <div style={{ padding: '24px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '14px' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#2d68fe', marginBottom: '10px', letterSpacing: '0.02em' }}>Transactions Tab</div>
              <div style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.65 }}>Search all transactions tied to gift cards. Filter by date, status, outlet. Surface the data support teams need for escalation resolution — without needing Razorpay dashboard access.</div>
            </div>
          </div>
          <VisualSlot src="/images/gcms/IMG_0880.PNG" label="CS Console — Cards Tab" aspect="16/9" caption="Cards Tab — search, filter, and act on individual gift cards across all programs" wide />
          <VisualGrid slots={[
            { src: '/images/gcms/IMG_0877.PNG', label: 'Card Detail Panel', aspect: '4/3', caption: 'Card detail — balance, linked user, full event timeline' },
            { src: '/images/gcms/IMG_0879.PNG', label: 'Cancel Action Drawer', aspect: '4/3', caption: 'Cancel action — ticket link, audit trail, one-click confirm' },
          ]} />
          <div style={{ marginTop: '20px', padding: '22px 24px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '14px' }}>
            <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '10px' }}>Expected impact</div>
            <div style={{ fontSize: '16px', fontWeight: 600, letterSpacing: '-0.02em' }}>80–90% reduction in GC support tickets routed to Razorpay</div>
            <div style={{ fontSize: '13px', color: 'var(--text-secondary)', marginTop: '6px' }}>Live for Zomato, Blue Tokai, Lenskart, and 7 additional merchants</div>
          </div>
        </Section>

        {/* Section: Self-Serve Program Creation */}
        <Section id="self-serve" label="08 — Self-Serve Program Creation">
          <div style={{ marginBottom: '24px' }}>
            <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-tertiary)', background: 'var(--surface)', border: '1px solid var(--border)', padding: '5px 14px', borderRadius: '100px', letterSpacing: '0.04em' }}>
              In Design
            </span>
          </div>
          <p style={bodyText}>
            Creating a new gift card program today requires Razorpay's team to configure it manually — a 2–3 day turnaround for something that should take 10 minutes. The research synthesis revealed this matters most for mid-market merchants who move faster and need less handholding. So we're building for them first.
          </p>
          <div style={{ margin: '32px 0', display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {[
              {
                section: 'Basic Details',
                fields: 'Program name, description, merchant category, target audience',
                note: 'Scoped to what Razorpay needs for compliance and routing — nothing the merchant doesn\'t understand',
              },
              {
                section: 'Gift Card Details',
                fields: 'Denomination type (fixed / variable / open-loop), expiry settings, PIN requirement, card number format',
                note: 'The highest complexity section — denomination type determines the entire issuance model downstream',
              },
              {
                section: 'Gift Card Design',
                fields: 'Logo upload, background image, card preview',
                note: 'Live preview renders as the merchant configures — no save-and-preview loop, confidence before submission',
              },
            ].map((s, i) => (
              <div
                key={s.section}
                style={{
                  display: 'flex',
                  gap: '20px',
                  alignItems: 'flex-start',
                  padding: '22px 24px',
                  background: i % 2 === 0 ? 'var(--surface)' : 'transparent',
                  borderRadius: '10px',
                }}
              >
                <span style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  color: '#2d68fe',
                  background: 'rgba(45,104,254,0.12)',
                  borderRadius: '6px',
                  padding: '3px 8px',
                  flexShrink: 0,
                  marginTop: '3px',
                }}>
                  {i + 1}
                </span>
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 600, marginBottom: '6px' }}>{s.section}</div>
                  <div style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '6px' }}>{s.fields}</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-tertiary)', lineHeight: 1.5, fontStyle: 'italic' }}>{s.note}</div>
                </div>
              </div>
            ))}
          </div>
          <VisualGrid slots={[
            { src: '/images/gcms/IMG_0874.PNG', label: 'Step 1 — Program Details', aspect: '4/3', caption: 'Program name, description, category, target audience' },
            { src: '/images/gcms/IMG_0875.PNG', label: 'Step 2 — GC Configuration', aspect: '4/3', caption: 'Denomination type, expiry, PIN, card number format' },
          ]} />
          <VisualSlot src="/images/gcms/IMG_0876.PNG" label="Step 3 — Gift Card Design + Live Preview" aspect="16/9" caption="Live card preview renders as merchant configures logo, background, and brand color" wide />
          <div style={{ padding: '22px 24px', background: 'rgba(45,104,254,0.04)', border: '1px solid rgba(45,104,254,0.15)', borderRadius: '14px' }}>
            <div style={{ fontSize: '11px', color: '#2d68fe', letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '10px' }}>Why mid-market first</div>
            <div style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              H2 invalidated for enterprise — but the research also revealed that mid-market merchants churn during the onboarding wait. Self-serve creation directly addresses that drop-off. Enterprise accounts still get white-glove setup; mid-market gets control.
            </div>
          </div>
        </Section>

        {/* Next case study */}
        <div style={{ marginTop: '80px', paddingTop: '60px', borderTop: '1px solid var(--border)' }}>
          <p style={{ fontSize: '12px', color: 'var(--text-tertiary)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '20px' }}>
            Next Case Study
          </p>
          <Link to="/linked-payments">
            <motion.div
              whileHover={{ x: 8 }}
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
              <div>
                <h3 style={{ fontSize: '22px', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: '8px' }}>Linked Payments</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Atomic split payments · Gift Cards on Checkout</p>
              </div>
              <span style={{ fontSize: '24px', color: 'var(--text-tertiary)' }}>→</span>
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

function DataCard({ brand, color, stat, detail }) {
  return (
    <div style={{
      padding: '24px',
      border: '1px solid var(--border)',
      borderRadius: '14px',
      background: 'var(--surface)',
    }}>
      <div style={{ fontSize: '12px', fontWeight: 700, color, marginBottom: '12px', letterSpacing: '0.04em' }}>{brand}</div>
      <div style={{ fontSize: '20px', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: '8px' }}>{stat}</div>
      <div style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.55 }}>{detail}</div>
    </div>
  )
}

function DecisionCard({ title, decision, why }) {
  return (
    <div style={{
      padding: '28px',
      border: '1px solid var(--border)',
      borderRadius: '14px',
      background: 'var(--surface)',
    }}>
      <div style={{ fontSize: '12px', color: 'var(--text-tertiary)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>{title}</div>
      <div style={{ fontSize: '15px', fontWeight: 600, marginBottom: '12px', color: '#2d68fe' }}>{decision}</div>
      <div style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
        <span style={{ color: 'var(--text-tertiary)' }}>Why: </span>{why}
      </div>
    </div>
  )
}

function ChapterBreak({ number, title, subtitle }) {
  return (
    <FadeUp style={{ margin: '80px 0 56px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', paddingTop: '64px', borderTop: '1px solid var(--border)' }}>
        <span style={{ fontSize: '11px', fontWeight: 700, color: '#2d68fe', letterSpacing: '0.12em', textTransform: 'uppercase', flexShrink: 0 }}>
          Chapter {number}
        </span>
        <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
      </div>
      <h2 style={{ fontSize: '30px', fontWeight: 700, letterSpacing: '-0.03em', marginTop: '20px', marginBottom: '8px' }}>
        {title}
      </h2>
      <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{subtitle}</p>
    </FadeUp>
  )
}

function HypothesisCard({ id, hypothesis, result, finding, implication }) {
  const validated = result === 'validated'
  return (
    <div style={{
      padding: '24px',
      border: `1px solid ${validated ? 'rgba(16,185,129,0.25)' : 'rgba(239,68,68,0.25)'}`,
      borderRadius: '14px',
      background: validated ? 'rgba(16,185,129,0.03)' : 'rgba(239,68,68,0.03)',
    }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px', marginBottom: '16px' }}>
        <div style={{ flex: 1 }}>
          <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-tertiary)', letterSpacing: '0.08em' }}>{id} — </span>
          <span style={{ fontSize: '15px', fontWeight: 600 }}>{hypothesis}</span>
        </div>
        <span style={{
          fontSize: '11px',
          fontWeight: 700,
          color: validated ? '#10b981' : '#ef4444',
          background: validated ? 'rgba(16,185,129,0.12)' : 'rgba(239,68,68,0.12)',
          padding: '4px 10px',
          borderRadius: '100px',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          flexShrink: 0,
          whiteSpace: 'nowrap',
        }}>
          {validated ? '✓ Validated' : '✗ Invalidated'}
        </span>
      </div>
      <div style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '10px' }}>
        <span style={{ color: 'var(--text-tertiary)', fontWeight: 500 }}>Finding: </span>{finding}
      </div>
      <div style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
        <span style={{ fontWeight: 600, color: validated ? '#10b981' : '#ef4444' }}>Implication: </span>{implication}
      </div>
    </div>
  )
}
