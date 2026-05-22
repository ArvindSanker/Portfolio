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

      <StorySection kicker="Overview" title="Role, team, and scope">
        <MetaGrid items={[
          { label: 'My role', value: 'Naming, API UX, refund flow, success state' },
          { label: 'Platform', value: 'Checkout · Gift-card redemption' },
          { label: 'Timeline', value: 'Q4 2024 - Q1 2025' },
          { label: 'Gate', value: 'API council approval' },
        ]} />
      </StorySection>

      <Chapter kicker="Setting the scene" title="Gift cards have fixed values. Carts are messy." dark>
        <p>
          A customer may have a ₹500 gift card and a ₹1,349 cart. Without split payment, the merchant either blocks redemption,
          absorbs the mismatch, or forces a bad workaround.
        </p>
      </Chapter>

      <StorySection kicker="What was broken" title="Redemption failed when cart value did not match card value.">
        <BeforeAfter
          before="Gift-card redemption worked only when the cart and card value aligned cleanly."
          after="Gift card + UPI/card can complete together as one all-or-nothing payment."
        />
        <CardGrid items={[
          { label: 'Customer problem', title: 'Value mismatch', text: 'Users could not use gift cards naturally on real cart amounts.' },
          { label: 'Merchant problem', title: 'Conversion loss', text: 'Puma explicitly requested the capability; MakeMyTrip represented a large pipeline.' },
          { label: 'System problem', title: 'Partial failure risk', text: 'If one leg succeeds and the other fails, money enters an ambiguous state.' },
        ]} />
      </StorySection>

      <StorySection kicker="Goals & guardrails" title="Make split payment feel simple while keeping the backend auditable.">
        <CardGrid items={[
          { label: 'Goal', title: 'Atomic payment', text: 'Both payment legs should succeed together or roll back cleanly.' },
          { label: 'Guardrail', title: 'No black-box support states', text: 'Support teams must know exactly which payment leg failed and why.' },
          { label: 'Guardrail', title: 'No ambiguous APIs', text: 'Merchants should declare exact per-method amounts instead of relying on silent split logic.' },
        ]} />
      </StorySection>

      <StorySection kicker="How it works" title="Primary payment first. Gift card second. One confirmed order.">
        <IterationGrid items={[
          { label: 'Step 01', title: 'Primary method processes first', text: 'UPI/card has the highest failure risk, so it clears before gift-card debit.' },
          { label: 'Step 02', title: 'Gift card is debited', text: 'Only after the primary payment succeeds does the system debit the gift card.' },
          { label: 'Step 03', title: 'Success screen explains both legs', text: 'Customer sees the split amount and references for both payments.' },
          { label: 'Rollback', title: 'Failures have owners', text: 'If gift-card debit fails after primary success, refund rules and merchant notifications are defined.' },
        ]} />
      </StorySection>

      <StorySection kicker="Design decisions" title="The important work was in the trade-offs." wide>
        <IterationGrid items={[
          { label: 'Chosen', title: 'Linked Payments', text: 'The name implied two payment methods tied together, not just split for reporting.', reason: 'Naming created the right mental model for product, API, and support.', chosen: true },
          { label: 'Chosen', title: 'Two payment IDs', text: 'Each leg gets a separate ID so failures, refunds, and reconciliation remain traceable.', reason: 'One ID would hide which method failed.' , chosen: true },
          { label: 'Chosen', title: 'Merchant-controlled refunds', text: 'Razorpay detects failure, merchant retains control, customer receives refund.', reason: 'High-volume merchants needed batch control.' , chosen: true },
          { label: 'Chosen', title: 'Explicit amounts', text: 'API requires exact amounts for gift card and primary method.', reason: 'More typing, less ambiguity.' , chosen: true },
        ]} />
      </StorySection>

      <StorySection kicker="Rejected paths" title="What we did not pick.">
        <CardGrid items={[
          { label: 'Rejected', title: 'One payment ID', text: 'Simpler on the surface, but support could not isolate the failed leg.' },
          { label: 'Rejected', title: 'Auto-refund everything', text: 'Fast, but bypassed merchant-owned refund workflows for large accounts.' },
          { label: 'Rejected', title: 'Percentage split API', text: 'Created rounding problems and paise-level reconciliation pain.' },
        ]} />
      </StorySection>

      <StorySection kicker="Final experience" title="Screens needed: checkout, success, failure, refund." wide>
        <div className="card-grid two">
          <Visual label="Happy path" caption="Add prototype: customer sees gift-card amount + UPI amount before paying." />
          <Visual label="Success state" caption="Add prototype: both payment IDs and method breakdown visible after success." />
        </div>
      </StorySection>

      <StorySection kicker="Impact" title="Designed for an API council one-way door.">
        <MetricGrid metrics={[
          { value: '+₹38 Cr/yr', label: 'Incremental GMV unlock', note: 'Targeted through three launch merchants.' },
          { value: '₹400 Cr+', label: 'TAM pipeline', note: 'MakeMyTrip and other variable-cart merchants.' },
          { value: '5', label: 'Defensible decisions', note: 'Naming, IDs, refunds, API amounts, and success state.' },
        ]} />
      </StorySection>

      <StorySection kicker="Reflection" title="Failure handling was the product.">
        <CardGrid items={[
          { label: 'Learning', title: 'Atomicity is UX', text: 'The customer only sees a payment. The designer has to define every hidden failure owner.' },
          { label: 'Learning', title: 'API design is developer UX', text: 'The safest API was more explicit because it forced the integrator to think clearly.' },
          { label: 'Next improvement', title: 'Tiered refund defaults', text: 'Auto-refunds may be better for smaller merchants, while large merchants need batch control.' },
        ]} />
      </StorySection>

      <NextProject to="/pay-with-points" label="Next case study" title="Pay With Points" />
    </Page>
  )
}
