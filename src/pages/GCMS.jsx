import {
  AnnotatedVisual,
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

const blue = '#2d68fe'

export default function GCMS() {
  return (
    <Page>
      <CaseHero
        eyebrow="Case Study 01 · B2B Gift Cards"
        title="Enabled operators to issue gift cards without reseller dependency."
        summary="Gift-card programs were business-critical, but enterprise merchants still needed reseller workarounds, manual ops, or API hacks to issue cards at scale. I designed a self-serve operating layer for placing, tracking, downloading, and supporting gift-card orders."
        color={blue}
        metrics={[
          { value: '₹209 Cr', label: 'GMV target' },
          { value: '0', label: 'Reseller dependency' },
          { value: 'NPS 7+', label: 'Success benchmark' },
        ]}
      >
        <Visual src="/images/gcms/IMG_0873.PNG" label="Final dashboard" caption="The product surface where merchants can own gift-card operations." />
      </CaseHero>

      <StorySection kicker="Overview" title="Role, team, and scope">
        <MetaGrid items={[
          { label: 'My role', value: 'End-to-end UX, IA, research, visual design' },
          { label: 'Platform', value: 'Razorpay Dashboard · EngageHQ' },
          { label: 'Timeline', value: 'Oct 2023 onward' },
          { label: 'Status', value: 'Shipped + new modules in design' },
        ]} />
      </StorySection>

      <Chapter kicker="Setting the scene" title="Brands use gift cards to sell prepaid value." dark>
        <p>
          But issuing gift cards is not just a checkout feature. Someone has to create programs, place bulk orders,
          track fulfillment, download card data, handle support cases, and reconcile money.
        </p>
      </Chapter>

      <StorySection kicker="What was broken" title="The business had rails, but merchants had no operating surface.">
        <BeforeAfter
          before="Merchants depended on resellers, manual files, or engineering teams to issue cards."
          after="Operators can select a program, add denominations to cart, place orders, and track fulfillment themselves."
        />
        <CardGrid variant="two" items={[
          { label: 'Lost account signal', title: 'Zomato routed to PoshVine', text: 'Razorpay could not offer direct self-serve issuance, so the account moved through a competitor path.' },
          { label: 'Workaround signal', title: 'Lenskart made 14,518 API calls', text: 'In three months, a bulk-file workaround behaved like a product. It was fragile, opaque, and not ops-friendly.' },
        ]} />
      </StorySection>

      <StorySection kicker="Goals & guardrails" title="Make gift-card operations self-serve without making them feel technical.">
        <CardGrid items={[
          { label: 'Goal 01', title: 'Reduce dependency', text: 'Remove reseller and internal ops dependency from repeat gift-card ordering.' },
          { label: 'Goal 02', title: 'Increase operator confidence', text: 'Show order totals, fulfillment states, and download availability clearly.' },
          { label: 'Guardrail', title: 'Do not expose system complexity', text: 'Operators should not need to understand vault generation, partial fulfillment, or backend state machines.' },
        ]} />
      </StorySection>

      <StorySection kicker="Who it served" title="Multiple operators, one shared workflow." intro="Gift-card work is not owned by one persona. The system needed to be legible for everyone who touched the program.">
        <CardGrid items={[
          { label: 'Marketing ops', title: 'Place recurring bulk orders', text: 'Run campaigns without waiting on resellers or engineering support.' },
          { label: 'Finance admin', title: 'Track cost and reconciliation', text: 'Understand order value, settlement, and fulfillment status.' },
          { label: 'Customer support', title: 'Resolve card issues', text: 'Look up cards, transactions, balances, and cancellation status directly.' },
        ]} />
      </StorySection>

      <StorySection kicker="Early explorations" title="Three directions, one winner." wide>
        <IterationGrid items={[
          { label: 'Rejected', title: 'Bulk CSV upload', text: 'Familiar to ops teams, but slow, opaque, and hard to recover from when rows fail.', reason: 'It repeated the Lenskart workaround instead of solving it.' },
          { label: 'Rejected', title: 'API-only ordering', text: 'Accurate and scalable for engineers, but wrong for the teams placing monthly orders.', reason: 'Every order run would still depend on engineering bandwidth.' },
          { label: 'Rejected', title: 'Single-order form', text: 'Simple for one denomination, painful for real campaigns that mix values and quantities.', reason: 'Enterprise operators rarely issue one denomination at a time.' },
          { label: 'Chosen', title: 'Cart-based ordering', text: 'Program, denomination, quantity, cart, review, place. Familiar enough to need almost no training.', reason: 'It matched how operators already think about bulk purchase workflows.', chosen: true },
        ]} />
      </StorySection>

      <StorySection kicker="Design principles" title="Research translated into design rules.">
        <CardGrid items={[
          { label: 'Principle 01', title: 'Show state before action', text: 'Operators should know whether an order is draft, processing, fulfilled, partial, or failed before deciding what to do next.' },
          { label: 'Principle 02', title: 'Make bulk feel familiar', text: 'Use cart behavior for multiple denominations instead of inventing a gift-card-specific mental model.' },
          { label: 'Principle 03', title: 'Hide backend timing', text: 'Do not expose cards for download until fulfillment is real. The UI should protect operators from invalid intermediate states.' },
        ]} />
      </StorySection>

      <Chapter kicker="Final experience" title="Put the UI in the face." dark />

      <StorySection kicker="Order placement" title="Operators configure denominations and place bulk orders like a cart." wide>
        <AnnotatedVisual
          src="/images/gcms/fcd6268124089009631904af9c95ade3.gif"
          label="Order placement flow"
          notes={[
            { title: 'Program first', text: 'The workflow starts from the gift-card program, not from internal product taxonomy.' },
            { title: 'Cart model', text: 'Multiple denominations can be built in one session before final review.' },
            { title: 'Status clarity', text: 'Operators get a clear order state instead of waiting on support for updates.' },
          ]}
        />
      </StorySection>

      <StorySection kicker="Support console" title="Support moved from Razorpay-owned to merchant-owned." wide>
        <AnnotatedVisual
          src="/images/gcms/IMG_0880.PNG"
          label="Customer support console"
          notes={[
            { title: 'Cards tab', text: 'Search individual cards by card number or order ID, then inspect balance, expiry, and status.' },
            { title: 'Transactions tab', text: 'Support teams can trace redemptions without asking Razorpay for dashboard access.' },
            { title: 'Action drawer', text: 'Risky actions like cancel need ticket links and audit-friendly confirmation.' },
          ]}
        />
      </StorySection>

      <StorySection kicker="Program creation" title="Self-serve creation was scoped for mid-market, not enterprise." wide>
        <div className="card-grid two">
          <Visual src="/images/gcms/IMG_0874.PNG" label="Step 1" caption="Basic program details." contain />
          <Visual src="/images/gcms/IMG_0876.PNG" label="Step 3" caption="Gift-card design with live preview." contain />
        </div>
      </StorySection>

      <StorySection kicker="Impact" title="The result was not just cleaner UI. It changed ownership.">
        <MetricGrid metrics={[
          { value: '₹209 Cr', label: 'New GMV target', note: 'Up from ₹55 Cr baseline.' },
          { value: '0', label: 'Reseller dependency', note: 'Merchants can operate orders directly.' },
          { value: '80-90%', label: 'Expected ticket reduction', note: 'For merchant-routed GC support cases.' },
        ]} />
      </StorySection>

      <StorySection kicker="Reflection" title="What I would sharpen next.">
        <CardGrid items={[
          { label: 'Challenge', title: 'Enterprise expectations differ', text: 'Large merchants wanted Razorpay to configure programs, while mid-market merchants wanted speed and control.' },
          { label: 'Learning', title: 'IA was the product', text: 'Gift cards and wallet lived in different mental models. Fixing navigation mattered before adding more features.' },
          { label: 'Next improvement', title: 'Show a fulfillment simulator', text: 'A simple preview of order states would help operators understand partial fulfillment before their first live order.' },
        ]} />
      </StorySection>

      <NextProject to="/linked-payments" label="Next case study" title="Linked Payments" />
    </Page>
  )
}
