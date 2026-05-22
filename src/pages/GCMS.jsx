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
const green = '#10b981'

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

function FlowNode({ label, active = false, icon = null }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px',
    }}>
      <div style={{
        padding: '12px 20px',
        borderRadius: '12px',
        border: `1.5px solid ${active ? blue : 'rgba(28,26,23,0.1)'}`,
        background: active ? 'rgba(45,104,254,0.06)' : '#fff',
        color: active ? blue : 'var(--text-primary)',
        fontSize: '13px',
        fontWeight: active ? 600 : 500,
        whiteSpace: 'nowrap',
        boxShadow: active ? '0 2px 8px rgba(45,104,254,0.12)' : '0 1px 3px rgba(0,0,0,0.04)',
      }}>
        {label}
      </div>
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

// 1. System Overview — Complex Architecture
function SystemOverviewDiagram() {
  return (
    <DiagramWrapper label="GCMS Architecture">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
        {/* Frontend Layer */}
        <FlowRow>
          <FlowNode label="Merchant Dashboard" active />
          <FlowArrow />
          <FlowNode label="Operations Portal" />
          <FlowArrow />
          <FlowNode label="Support Console" />
        </FlowRow>
        
        {/* API Layer */}
        <div style={{ 
          width: '100%', 
          height: '1px', 
          background: 'rgba(28,26,23,0.08)', 
          margin: '8px 0' 
        }} />
        <FlowRow>
          <FlowNode label="Order API" />
          <FlowNode label="State Machine" active />
          <FlowNode label="Vault API" />
          <FlowNode label="Notification Service" />
        </FlowRow>
        
        {/* Data Layer */}
        <div style={{ 
          width: '100%', 
          height: '1px', 
          background: 'rgba(28,26,23,0.08)', 
          margin: '8px 0' 
        }} />
        <FlowRow>
          <FlowNode label="Order DB" />
          <FlowNode label="Card Vault" />
          <FlowNode label="Transaction Log" />
          <FlowNode label="Audit Trail" />
        </FlowRow>
      </div>
    </DiagramWrapper>
  )
}

// 2. Program Creation Flow
function ProgramCreationDiagram() {
  return (
    <DiagramWrapper label="Program Creation Flow">
      <FlowRow>
        <FlowNode label="Details" active />
        <FlowArrow />
        <FlowNode label="Design" />
        <FlowArrow />
        <FlowNode label="Review" />
        <FlowArrow />
        <FlowNode label="Launch" />
      </FlowRow>
    </DiagramWrapper>
  )
}

// 3. Order Placement Flow (Program → Denominations → Review → Place)
function OrderFlowDiagram() {
  return (
    <DiagramWrapper label="Order Placement Flow">
      <FlowRow>
        <FlowNode label="Program" />
        <FlowArrow />
        <FlowNode label="Denominations" />
        <FlowArrow />
        <FlowNode label="Review" active />
        <FlowArrow />
        <FlowNode label="Place Order" />
      </FlowRow>
    </DiagramWrapper>
  )
}

// 4. Support Console Flow
function SupportConsoleDiagram() {
  return (
    <DiagramWrapper label="Support Console Workflow">
      <FlowRow>
        <FlowNode label="Ticket" />
        <FlowArrow />
        <FlowNode label="Lookup" active />
        <FlowArrow />
        <FlowNode label="Action" />
        <FlowArrow />
        <FlowNode label="Resolve" />
      </FlowRow>
    </DiagramWrapper>
  )
}

// 5. Cancellation Flow
function CancellationFlowDiagram() {
  return (
    <DiagramWrapper label="Cancellation Process">
      <FlowRow>
        <FlowNode label="Request" />
        <FlowArrow />
        <FlowNode label="Verify" active />
        <FlowArrow />
        <FlowNode label="Cancel" />
        <FlowArrow />
        <FlowNode label="Refund" />
        <FlowArrow />
        <FlowNode label="Notify" />
      </FlowRow>
    </DiagramWrapper>
  )
}

// 6. Transaction Tracking
function TransactionTrackingDiagram() {
  return (
    <DiagramWrapper label="Transaction Tracking">
      <FlowRow>
        <FlowNode label="Search" />
        <FlowArrow />
        <FlowNode label="Filter" />
        <FlowArrow />
        <FlowNode label="Trace" active />
        <FlowArrow />
        <FlowNode label="Export" />
      </FlowRow>
    </DiagramWrapper>
  )
}

export default function GCMS() {
  return (
    <Page>
      <CaseHero
        eyebrow="Case Study 01 · B2B Gift Cards"
        title="Enabled operators to issue gift cards without reseller dependency."
        summary="Enterprise merchants needed reseller workarounds to issue cards at scale. I designed a self-serve operating layer for placing, tracking, and supporting gift-card orders."
        color={blue}
        metrics={[
          { value: '₹209 Cr', label: 'GMV target' },
          { value: '0', label: 'Reseller dependency' },
          { value: 'NPS 7+', label: 'Success benchmark' },
        ]}
      >
        <Visual src="/images/gcms/IMG_0873.PNG" label="Final dashboard" caption="The product surface where merchants can own gift-card operations." />
      </CaseHero>

      <StorySection kicker="Overview" title="Role, team, and scope" wide>
        <SystemOverviewDiagram />
        <div style={{ marginTop: '24px' }}>
          <MetaGrid items={[
            { label: 'My role', value: 'End-to-end UX, IA, research, visual design' },
            { label: 'Platform', value: 'Razorpay Dashboard · EngageHQ' },
            { label: 'Timeline', value: 'Oct 2023 onward' },
            { label: 'Status', value: 'Shipped + new modules in design' },
          ]} />
        </div>
      </StorySection>

      <Chapter kicker="Setting the scene" title="Brands use gift cards to sell prepaid value." dark>
        <p>
          But issuing gift cards is not just a checkout feature. Someone has to create programs, place bulk orders,
          track fulfillment, download card data, handle support cases, and reconcile money.
        </p>
      </Chapter>

      <StorySection kicker="What was broken" title="The business had rails, but merchants had no operating surface." wide>
        <BeforeAfter
          before="Merchants depended on resellers, manual files, or engineering teams to issue cards."
          after="Operators can select a program, add denominations to cart, place orders, and track fulfillment themselves."
        />
        <div style={{ marginTop: '32px' }}>
          <CardGrid variant="two" items={[
            { label: 'Lost account', title: 'Zomato routed to PoshVine', text: 'Razorpay could not offer direct self-serve issuance, so the account moved through a competitor path.' },
            { label: 'Workaround', title: 'Lenskart made 14,518 API calls', text: 'A bulk-file workaround behaved like a product. It was fragile, opaque, and not ops-friendly.' },
          ]} />
        </div>
      </StorySection>

      <StorySection kicker="Goals" title="Make gift-card operations self-serve without making them feel technical." wide>
        <CardGrid items={[
          { label: 'Goal 01', title: 'Reduce dependency', text: 'Remove reseller and internal ops dependency from repeat gift-card ordering.' },
          { label: 'Goal 02', title: 'Increase operator confidence', text: 'Show order totals, fulfillment states, and download availability clearly.' },
          { label: 'Guardrail', title: 'Do not expose system complexity', text: 'Operators should not need to understand vault generation or backend state machines.' },
        ]} />
      </StorySection>

      <StorySection kicker="Who it served" title="Multiple operators, one shared workflow." intro="Gift-card work is not owned by one persona." wide>
        <CardGrid items={[
          { label: 'Marketing ops', title: 'Place recurring bulk orders', text: 'Run campaigns without waiting on resellers or engineering support.' },
          { label: 'Finance admin', title: 'Track cost and reconciliation', text: 'Understand order value, settlement, and fulfillment status.' },
          { label: 'Customer support', title: 'Resolve card issues', text: 'Look up cards, transactions, balances, and cancellation status directly.' },
        ]} />
      </StorySection>

      <StorySection kicker="Explorations" title="Finding the right approach." wide>
        <IterationGrid items={[
          { label: 'Rejected', title: 'Bulk CSV upload', text: 'Familiar to ops teams, but slow and hard to recover from when rows fail.', reason: 'It repeated the Lenskart workaround instead of solving it.' },
          { label: 'Rejected', title: 'API-only ordering', text: 'Accurate for engineers, but wrong for teams placing monthly orders.', reason: 'Every order run would still depend on engineering bandwidth.' },
          { label: 'Rejected', title: 'Single-order form', text: 'Simple for one denomination, painful for campaigns that mix values.', reason: 'Enterprise operators rarely issue one denomination at a time.' },
          { label: 'Chosen', title: 'Program-based ordering', text: 'Program, denomination, review, place. Familiar and fast.', reason: 'It matched how operators already think about bulk purchase workflows.', chosen: true },
        ]} />
      </StorySection>

      <StorySection kicker="Final experience" title="Order placement" wide>
        <OrderFlowDiagram />
        <div style={{ marginTop: '32px' }}>
          <AnnotatedVisual
            src="/images/gcms/order-flow-dark.gif"
            label="Order placement flow"
            notes={[
              { title: 'Program first', text: 'The workflow starts from the gift-card program, not from internal product taxonomy.' },
              { title: 'Denominations', text: 'Multiple denominations can be built in one session before final review.' },
              { title: 'Status clarity', text: 'Operators get a clear order state instead of waiting on support for updates.' },
            ]}
          />
        </div>
      </StorySection>

      <StorySection kicker="Support console" title="Support moved from Razorpay-owned to merchant-owned." wide>
        <SupportConsoleDiagram />
        <div style={{ marginTop: '24px' }}>
          <AnnotatedVisual
            src="/images/gcms/IMG_0880.PNG"
            label="Customer support console"
            notes={[
              { title: 'Cards tab', text: 'Search individual cards by card number or order ID, then inspect balance, expiry, and status.' },
              { title: 'Transactions tab', text: 'Support teams can trace redemptions without asking Razorpay for dashboard access.' },
              { title: 'Action drawer', text: 'Risky actions like cancel need ticket links and audit-friendly confirmation.' },
            ]}
          />
        </div>
      </StorySection>

      <StorySection kicker="Cancellation" title="Safe cancellation with audit trail." wide>
        <CancellationFlowDiagram />
      </StorySection>

      <StorySection kicker="Transaction tracking" title="Trace any card or transaction in seconds." wide>
        <TransactionTrackingDiagram />
        <div style={{ marginTop: '32px' }}>
          <Visual label="Transaction lookup" caption="Visual to add: search, filter, and trace interface for support teams." />
        </div>
      </StorySection>

      <StorySection kicker="Program creation" title="Self-serve creation was scoped for mid-market." wide>
        <ProgramCreationDiagram />
        <div style={{ marginTop: '24px' }}>
          <div className="card-grid two">
            <Visual src="/images/gcms/IMG_0874.PNG" label="Step 1" caption="Basic program details." contain />
            <Visual src="/images/gcms/IMG_0876.PNG" label="Step 3" caption="Gift-card design with live preview." contain />
          </div>
        </div>
      </StorySection>

      <StorySection kicker="Impact" title="The result was not just cleaner UI. It changed ownership." wide>
        <MetricGrid metrics={[
          { value: '₹209 Cr', label: 'New GMV target', note: 'Up from ₹55 Cr baseline.' },
          { value: '0', label: 'Reseller dependency', note: 'Merchants can operate orders directly.' },
          { value: '80-90%', label: 'Expected ticket reduction', note: 'For merchant-routed GC support cases.' },
        ]} />
      </StorySection>

      <StorySection kicker="Reflection" title="What I would sharpen next." wide>
        <CardGrid items={[
          { label: 'Challenge', title: 'Enterprise expectations differ', text: 'Large merchants wanted Razorpay to configure programs, while mid-market merchants wanted speed and control.' },
          { label: 'Learning', title: 'IA was the product', text: 'Gift cards and wallet lived in different mental models. Fixing navigation mattered before adding more features.' },
          { label: 'Next', title: 'Show a fulfillment simulator', text: 'A simple preview of order states would help operators understand partial fulfillment before their first live order.' },
        ]} />
      </StorySection>

      <NextProject to="/linked-payments" label="Next case study" title="Linked Payments" />
    </Page>
  )
}
