import {
  BeforeAfter,
  CardGrid,
  CaseHero,
  Chapter,
  IterationGrid,
  MetaGrid,
  MetricGrid,
  NextProject,
  Page,
  StorySection,
  Visual,
} from '../components/StoryKit'

const purple = '#7c3aed'

// Light style diagram wrapper
function DiagramWrapper({ label, children }) {
  return (
    <div style={{
      background: '#faf9f7',
      borderRadius: '20px',
      padding: '32px 24px',
      border: '1px solid rgba(28,26,23,0.06)',
    }}>
      {label && (
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '10px',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'var(--text-tertiary)',
          marginBottom: '24px',
        }}>
          {label}
        </div>
      )}
      {children}
    </div>
  )
}

function FlowNode({ label, active = false }) {
  return (
    <div style={{
      padding: '12px 20px',
      borderRadius: '12px',
      border: `1.5px solid ${active ? purple : 'rgba(28,26,23,0.1)'}`,
      background: active ? 'rgba(124,58,237,0.06)' : '#fff',
      color: active ? purple : 'var(--text-primary)',
      fontSize: '13px',
      fontWeight: active ? 600 : 500,
      whiteSpace: 'nowrap',
      boxShadow: active ? '0 2px 8px rgba(124,58,237,0.12)' : '0 1px 3px rgba(0,0,0,0.04)',
    }}>
      {label}
    </div>
  )
}

function FlowArrow() {
  return (
    <svg width="28" height="12" viewBox="0 0 28 12" fill="none" style={{ flexShrink: 0, opacity: 0.35 }}>
      <path d="M0 6h24m0 0l-5-4.5m5 4.5l-5 4.5" stroke="var(--text-tertiary)" strokeWidth="1.5"/>
    </svg>
  )
}

function FlowRow({ children }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '12px',
      flexWrap: 'wrap',
    }}>
      {children}
    </div>
  )
}

// 1. System Overview
function PaymentSystemDiagram() {
  return (
    <DiagramWrapper label="Linked Payments Architecture">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
        <FlowRow>
          <FlowNode label="Customer" />
          <FlowArrow />
          <FlowNode label="Checkout" active />
          <FlowArrow />
          <FlowNode label="Payment" />
        </FlowRow>
        <div style={{ display: 'flex', gap: '32px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <FlowNode label="Gift Card" />
          <FlowNode label="UPI / Card" />
        </div>
      </div>
    </DiagramWrapper>
  )
}

// 2. Payment Sequence
function PaymentSequenceDiagram() {
  return (
    <DiagramWrapper label="Payment Sequence">
      <FlowRow>
        <FlowNode label="Primary (UPI)" active />
        <FlowArrow />
        <FlowNode label="Gift Card" />
        <FlowArrow />
        <FlowNode label="Atomic Commit" active />
      </FlowRow>
    </DiagramWrapper>
  )
}

// 3. Rollback Flow
function RollbackDiagram() {
  return (
    <DiagramWrapper label="Failure & Rollback">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
        <FlowRow>
          <FlowNode label="Primary Success" />
          <FlowArrow />
          <FlowNode label="Gift Card Fails" active />
        </FlowRow>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <svg width="20" height="40" viewBox="0 0 20 40" fill="none" style={{ opacity: 0.35 }}>
            <path d="M10 0v35m0 0l-5-5m5 5l5-5" stroke="var(--text-tertiary)" strokeWidth="1.5"/>
          </svg>
        </div>
        <FlowRow>
          <FlowNode label="Refund Primary" active />
          <FlowArrow />
          <FlowNode label="Notify Merchant" />
          <FlowArrow />
          <FlowNode label="Notify Customer" />
        </FlowRow>
      </div>
    </DiagramWrapper>
  )
}

// 4. Refund Flow
function RefundFlowDiagram() {
  return (
    <DiagramWrapper label="Refund Process">
      <FlowRow>
        <FlowNode label="Detect Failure" />
        <FlowArrow />
        <FlowNode label="Merchant Decision" active />
        <FlowArrow />
        <FlowNode label="Process Refund" />
        <FlowArrow />
        <FlowNode label="Customer Notified" />
      </FlowRow>
    </DiagramWrapper>
  )
}

export default function LinkedPayments() {
  return (
    <Page>
      <CaseHero
        eyebrow="Case Study 02 · Checkout Infrastructure"
        title="Let customers split checkout between gift cards and UPI safely."
        summary="Gift cards come in fixed denominations. Real carts do not. Linked Payments made gift-card redemption work with a second payment method in one atomic session."
        color={purple}
        metrics={[
          { value: '+₹38 Cr/yr', label: 'GMV unlock' },
          { value: '₹400 Cr+', label: 'Pipeline' },
          { value: '5', label: 'Core decisions' },
        ]}
      >
        <Visual label="Checkout split" caption="Visual placeholder: add final checkout, success, and refund-state screens here." />
      </CaseHero>

      <StorySection kicker="Overview" title="Role, team, and scope" wide>
        <PaymentSystemDiagram />
        <div style={{ marginTop: '24px' }}>
          <MetaGrid items={[
            { label: 'My role', value: 'Naming, API UX, refund flow, success state' },
            { label: 'Platform', value: 'Checkout · Gift-card redemption' },
            { label: 'Timeline', value: 'Q4 2024 - Q1 2025' },
            { label: 'Gate', value: 'API council approval' },
          ]} />
        </div>
      </StorySection>

      <Chapter kicker="Setting the scene" title="Gift cards have fixed values. Carts are messy." dark>
        <p>
          A customer may have a ₹500 gift card and a ₹1,349 cart. Without split payment, the merchant either blocks redemption,
          absorbs the mismatch, or forces a bad workaround.
        </p>
      </Chapter>

      <StorySection kicker="What was broken" title="Redemption failed when cart value did not match card value." wide>
        <BeforeAfter
          before="Gift-card redemption worked only when the cart and card value aligned cleanly."
          after="Gift card + UPI/card can complete together as one all-or-nothing payment."
        />
        <CardGrid items={[
          { label: 'Customer', title: 'Value mismatch', text: 'Users could not use gift cards naturally on real cart amounts.' },
          { label: 'Merchant', title: 'Conversion loss', text: 'Puma explicitly requested the capability; MakeMyTrip represented a large pipeline.' },
          { label: 'System', title: 'Partial failure risk', text: 'If one leg succeeds and the other fails, money enters an ambiguous state.' },
        ]} />
      </StorySection>

      <StorySection kicker="Goals" title="Make split payment feel simple while keeping the backend auditable." wide>
        <CardGrid items={[
          { label: 'Goal', title: 'Atomic payment', text: 'Both payment legs should succeed together or roll back cleanly.' },
          { label: 'Guardrail', title: 'No black-box support states', text: 'Support teams must know exactly which payment leg failed and why.' },
          { label: 'Guardrail', title: 'No ambiguous APIs', text: 'Merchants should declare exact per-method amounts instead of relying on silent split logic.' },
        ]} />
      </StorySection>

      <StorySection kicker="How it works" title="Primary payment first. Gift card second. One confirmed order." wide>
        <PaymentSequenceDiagram />
      </StorySection>

      <StorySection kicker="Design decisions" title="The important work was in the trade-offs." wide>
        <IterationGrid items={[
          { label: 'Chosen', title: 'Linked Payments', text: 'The name implied two payment methods tied together, not just split for reporting.', reason: 'Naming created the right mental model.', chosen: true },
          { label: 'Chosen', title: 'Two payment IDs', text: 'Each leg gets a separate ID so failures, refunds, and reconciliation remain traceable.', reason: 'One ID would hide which method failed.' , chosen: true },
          { label: 'Chosen', title: 'Merchant-controlled refunds', text: 'Razorpay detects failure, merchant retains control, customer receives refund.', reason: 'High-volume merchants needed batch control.' , chosen: true },
          { label: 'Chosen', title: 'Explicit amounts', text: 'API requires exact amounts for gift card and primary method.', reason: 'More typing, less ambiguity.' , chosen: true },
        ]} />
      </StorySection>

      <StorySection kicker="Failure handling" title="When things go wrong, everyone needs clarity." wide>
        <RollbackDiagram />
      </StorySection>

      <StorySection kicker="Refund process" title="Merchant controls the refund experience." wide>
        <RefundFlowDiagram />
      </StorySection>

      <StorySection kicker="Rejected" title="What we did not pick." wide>
        <CardGrid items={[
          { label: 'Rejected', title: 'One payment ID', text: 'Simpler on the surface, but support could not isolate the failed leg.' },
          { label: 'Rejected', title: 'Auto-refund everything', text: 'Fast, but bypassed merchant-owned refund workflows for large accounts.' },
          { label: 'Rejected', title: 'Percentage split API', text: 'Created rounding problems and paise-level reconciliation pain.' },
        ]} />
      </StorySection>

      <StorySection kicker="Final experience" title="Checkout, success, failure, refund." wide>
        <div className="card-grid two">
          <Visual label="Happy path" caption="Add prototype: customer sees gift-card amount + UPI amount before paying." />
          <Visual label="Success state" caption="Add prototype: both payment IDs and method breakdown visible after success." />
        </div>
      </StorySection>

      <StorySection kicker="Impact" title="Designed for an API council one-way door." wide>
        <MetricGrid metrics={[
          { value: '+₹38 Cr/yr', label: 'Incremental GMV unlock', note: 'Targeted through three launch merchants.' },
          { value: '₹400 Cr+', label: 'TAM pipeline', note: 'MakeMyTrip and other variable-cart merchants.' },
          { value: '5', label: 'Defensible decisions', note: 'Naming, IDs, refunds, API amounts, and success state.' },
        ]} />
      </StorySection>

      <StorySection kicker="Reflection" title="Failure handling was the product." wide>
        <CardGrid items={[
          { label: 'Learning', title: 'Atomicity is UX', text: 'The customer only sees a payment. The designer has to define every hidden failure owner.' },
          { label: 'Learning', title: 'API design is developer UX', text: 'The safest API was more explicit because it forced the integrator to think clearly.' },
          { label: 'Next', title: 'Tiered refund defaults', text: 'Auto-refunds may be better for smaller merchants, while large merchants need batch control.' },
        ]} />
      </StorySection>

      <NextProject to="/pay-with-points" label="Next case study" title="Pay With Points" />
    </Page>
  )
}
