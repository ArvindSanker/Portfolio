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

function FlowNode({ label, active = false }) {
  return (
    <div style={{
      padding: '12px 20px',
      borderRadius: '12px',
      border: `1.5px solid ${active ? green : 'rgba(28,26,23,0.1)'}`,
      background: active ? 'rgba(16,185,129,0.06)' : '#fff',
      color: active ? green : 'var(--text-primary)',
      fontSize: '13px',
      fontWeight: active ? 600 : 500,
      whiteSpace: 'nowrap',
      boxShadow: active ? '0 2px 8px rgba(16,185,129,0.12)' : '0 1px 3px rgba(0,0,0,0.04)',
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
function RewardsSystemDiagram() {
  return (
    <DiagramWrapper label="Pay With Points Architecture">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
        <FlowRow>
          <FlowNode label="Cardholder" />
          <FlowArrow />
          <FlowNode label="Checkout" active />
          <FlowArrow />
          <FlowNode label="Redeem" />
        </FlowRow>
        <div style={{ display: 'flex', gap: '32px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <FlowNode label="Bank" />
          <FlowNode label="Merchant" />
          <FlowNode label="Razorpay" />
        </div>
      </div>
    </DiagramWrapper>
  )
}

// 2. Redemption Flow
function RedemptionFlowDiagram() {
  return (
    <DiagramWrapper label="Redemption Flow">
      <FlowRow>
        <FlowNode label="Card Entry" />
        <FlowArrow />
        <FlowNode label="Auth" active />
        <FlowArrow />
        <FlowNode label="Points Shown" active />
        <FlowArrow />
        <FlowNode label="Redeem" />
        <FlowArrow />
        <FlowNode label="Complete" />
      </FlowRow>
    </DiagramWrapper>
  )
}

// 3. Bottom Sheet Interaction
function BottomSheetDiagram() {
  return (
    <DiagramWrapper label="Bottom Sheet Interaction">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
        <FlowRow>
          <FlowNode label="Slide Up" />
          <FlowArrow />
          <FlowNode label="Points Available" active />
        </FlowRow>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <FlowNode label="Adjust Amount" />
          <FlowNode label="Remaining" />
          <FlowNode label="Skip" />
        </div>
      </div>
    </DiagramWrapper>
  )
}

// 4. Post-Auth Security
function PostAuthDiagram() {
  return (
    <DiagramWrapper label="Post-Auth Security Model">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
        <FlowRow>
          <FlowNode label="Enter Card" />
          <FlowArrow />
          <FlowNode label="3DS Auth" active />
          <FlowArrow />
          <FlowNode label="Points Visible" active />
        </FlowRow>
        <div style={{
          padding: '12px 20px',
          borderRadius: '12px',
          border: '1.5px solid rgba(239,68,68,0.2)',
          background: 'rgba(239,68,68,0.04)',
          color: '#ef4444',
          fontSize: '12px',
          textAlign: 'center',
        }}>
          Pre-auth: Fraud risk · Points exposed before verification
        </div>
        <div style={{
          padding: '12px 20px',
          borderRadius: '12px',
          border: `1.5px solid ${green}`,
          background: 'rgba(16,185,129,0.06)',
          color: green,
          fontSize: '12px',
          textAlign: 'center',
        }}>
          Post-auth: Secure · Points only after verified identity
        </div>
      </div>
    </DiagramWrapper>
  )
}

export default function PayWithPoints() {
  return (
    <Page>
      <CaseHero
        eyebrow="Case Study 03 · Rewards Checkout"
        title="Brought reward-point redemption into checkout for 25+ merchants."
        summary="Banks issue massive reward-point value, but users rarely redeem because the experience lives away from purchase intent. We embedded redemption into the card journey and validated the right moment of choice."
        color={green}
        metrics={[
          { value: '25+', label: 'Merchants live' },
          { value: '15/20', label: 'Preferred bottom sheet' },
          { value: '₹1,000 Cr', label: 'GMV target' },
        ]}
      >
        <Visual label="Checkout redemption" caption="Visual placeholder: add bottom sheet, inline widget, and live checkout screens here." />
      </CaseHero>

      <StorySection kicker="Overview" title="Role, team, and scope" wide>
        <RewardsSystemDiagram />
        <div style={{ marginTop: '24px' }}>
          <MetaGrid items={[
            { label: 'My role', value: 'UX architecture, competitive research, A/B test design' },
            { label: 'Platform', value: 'Razorpay Checkout · Card payment journey' },
            { label: 'Research', value: 'Floor test · 20 participants · screen recorded' },
            { label: 'Status', value: 'Live across 25+ merchants' },
          ]} />
        </div>
      </StorySection>

      <Chapter kicker="Setting the scene" title="Reward points are valuable, but redemption is hidden." dark>
        <p>
          Cardholders earn points on spends. Banks want points to drive card usage. Merchants want conversion lifts.
          The missing link was where redemption appeared in the purchase journey.
        </p>
      </Chapter>

      <StorySection kicker="What was broken" title="Users had value, but not at the moment they were ready to spend." wide>
        <BeforeAfter
          before="Users had to discover points through bank portals or separate payment methods away from checkout intent."
          after="Eligible cardholders see points redemption inside the checkout flow when they are already paying."
        />
        <CardGrid items={[
          { label: 'Banks', title: 'Increase card spends and points burn', text: 'Issuer programs need redemption to feel useful, not like a hidden accounting balance.' },
          { label: 'Merchants', title: 'Improve conversion and retention', text: 'Rewards can reduce effective price without the merchant carrying the full discount alone.' },
          { label: 'Cardholders', title: 'Use value they already earned', text: 'People should not need to remember points or calculate redemption manually.' },
        ]} />
      </StorySection>

      <StorySection kicker="Goals" title="Make redemption discoverable without hurting checkout completion." wide>
        <CardGrid items={[
          { label: 'Goal', title: 'Native discovery', text: 'Surface points inside the card journey instead of creating a separate payment method.' },
          { label: 'Guardrail', title: 'No fraud exposure', text: 'Do not reveal or redeem points before the cardholder is authenticated.' },
          { label: 'Guardrail', title: 'No heavy education', text: 'Users should understand points value in seconds, not read program rules.' },
        ]} />
      </StorySection>

      <StorySection kicker="Competitive" title="The separate-payment-method path was the trap." wide>
        <CardGrid items={[
          { label: 'Twid', title: 'Separate method hurt success', text: 'Reported sub-55% success on travel merchants. Discovery and education cost were too high.' },
          { label: 'Pine Labs', title: 'Strong offline, weaker online', text: 'POS-first redemption patterns did not translate cleanly to online checkout.' },
          { label: 'Edge', title: 'Native card journey', text: 'Razorpay could show redemption where card intent already exists.' },
        ]} />
      </StorySection>

      <StorySection kicker="Solution" title="Native card journey" wide>
        <RedemptionFlowDiagram />
      </StorySection>

      <StorySection kicker="Security" title="Post-auth won because it was safer and faster." wide>
        <PostAuthDiagram />
      </StorySection>

      <StorySection kicker="A/B test" title="Widget was faster. Bottom sheet was clearer." wide>
        <BottomSheetDiagram />
        <div style={{ marginTop: '24px' }}>
          <IterationGrid items={[
            { label: 'Concept A', title: 'Inline widget', text: 'Fewer taps and faster for repeat users.', reason: '5 of 20 participants preferred it.' },
            { label: 'Concept B', title: 'Bottom sheet', text: 'Dedicated moment with points used, remaining amount, and explicit skip.', reason: '15 of 20 participants preferred it.', chosen: true },
            { label: 'Finding', title: 'Extra step increased confidence', text: 'Financial decisions benefited from a clear moment of choice.', reason: 'Users read, understood, and completed more decisively.' },
            { label: 'Roadmap', title: 'Adapt by familiarity', text: 'Use bottom sheet first, then simplify for returning users.', reason: 'Clarity and speed can coexist over time.' },
          ]} />
        </div>
      </StorySection>

      <StorySection kicker="Final experience" title="Card flow, bottom sheet, success state." wide>
        <div className="card-grid two">
          <Visual label="Bottom sheet" caption="Add prototype: points available, slider/amount choice, remaining payable, skip action." />
          <Visual label="Inline widget" caption="Add prototype: repeat-user compact state inside card form." />
        </div>
      </StorySection>

      <StorySection kicker="Impact" title="The product shipped and is live across real merchants." wide>
        <MetricGrid metrics={[
          { value: '25+', label: 'Merchants live', note: 'Including Swiggy, Lenskart, Titan, and Nykaa.' },
          { value: '+12%', label: 'New users acquired', note: 'IDFC FIRST Bank early live signal.' },
          { value: '+7%', label: 'Average spend growth', note: 'Observed in first month for IDFC FIRST Bank.' },
        ]} />
      </StorySection>

      <StorySection kicker="Reflection" title="No single user was the user." wide>
        <CardGrid items={[
          { label: 'Learning', title: 'Three-sided design', text: 'Every decision had to work for banks, merchants, and cardholders at the same time.' },
          { label: 'Learning', title: 'Friction can create confidence', text: 'The bottom sheet added a step but made the financial choice more legible.' },
          { label: 'Next', title: 'Document competitor failures earlier', text: 'Twid\'s low success data should have been surfaced before the first wireframe.' },
        ]} />
      </StorySection>

      <NextProject to="/gcms" label="Back to first case study" title="Gift Card Management System" />
    </Page>
  )
}
