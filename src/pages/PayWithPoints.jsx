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

function PointsFlowDiagram() {
  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      gap: '12px',
      flexWrap: 'wrap',
      padding: '32px 24px',
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      color: 'rgba(255,255,255,0.7)'
    }}>
      {['Card Entry', 'Auth', 'Points Shown', 'Redeem', 'Complete'].map((step, i, arr) => (
        <>
          <div key={step} style={{
            padding: '10px 16px',
            borderRadius: '8px',
            border: `1px solid ${i === arr.length - 1 ? 'rgba(16,185,129,0.4)' : 'rgba(255,255,255,0.15)'}`,
            background: i === arr.length - 1 ? 'rgba(16,185,129,0.15)' : 'rgba(255,255,255,0.05)',
            color: i === arr.length - 1 ? '#10b981' : 'inherit',
            textAlign: 'center'
          }}>
            {step}
          </div>
          {i < arr.length - 1 && (
            <svg width="24" height="12" viewBox="0 0 24 12" fill="none" style={{ opacity: 0.4 }}>
              <path d="M0 6h20m0 0l-5-5m5 5l-5 5" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          )}
        </>
      ))}
    </div>
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
        <MetaGrid items={[
          { label: 'My role', value: 'UX architecture, competitive research, A/B test design' },
          { label: 'Platform', value: 'Razorpay Checkout · Card payment journey' },
          { label: 'Research', value: 'Floor test · 20 participants · screen recorded' },
          { label: 'Status', value: 'Live across 25+ merchants' },
        ]} />
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
        <div className="visual">
          <span>Redemption flow</span>
          <PointsFlowDiagram />
        </div>
      </StorySection>

      <StorySection kicker="A/B test" title="Widget was faster. Bottom sheet was clearer." wide>
        <IterationGrid items={[
          { label: 'Concept A', title: 'Inline widget', text: 'Fewer taps and faster for repeat users.', reason: '5 of 20 participants preferred it.' },
          { label: 'Concept B', title: 'Bottom sheet', text: 'Dedicated moment with points used, remaining amount, and explicit skip.', reason: '15 of 20 participants preferred it.', chosen: true },
          { label: 'Finding', title: 'Extra step increased confidence', text: 'Financial decisions benefited from a clear moment of choice.', reason: 'Users read, understood, and completed more decisively.' },
          { label: 'Roadmap', title: 'Adapt by familiarity', text: 'Use bottom sheet first, then simplify for returning users.', reason: 'Clarity and speed can coexist over time.' },
        ]} />
      </StorySection>

      <StorySection kicker="Key decision" title="Post-auth won because it was safer and faster." wide>
        <CardGrid variant="two" items={[
          { label: 'Rejected', title: 'Pre-auth redemption', text: 'A bad actor could enter someone else\'s card number and expose or burn points before verification.' },
          { label: 'Chosen', title: 'Post-auth redemption', text: 'Points appear only after card verification. The user waits less, and the fraud surface disappears.' },
        ]} />
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
