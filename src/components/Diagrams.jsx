/*
 * Schematic covers for projects whose screens are still to come from the
 * Figma deck. They use figures from the case studies and are drawn as
 * diagrams, not as product UI.
 */

export function SplitDiagram() {
  return (
    <div className="diagram" role="img" aria-label="Diagram: a ₹1,349 cart paid with a ₹500 gift card and ₹849 by UPI, as one order with two payment IDs">
      <div className="diagram-row">
        <span>Cart total</span>
        <b>₹1,349</b>
      </div>
      <div className="split-bar">
        <div>
          <span>Gift card</span>
          <b>₹500</b>
        </div>
        <div>
          <span>UPI</span>
          <b>₹849</b>
        </div>
      </div>
      <div className="split-bracket" />
      <div className="diagram-row">
        <span>
          <b>One order.</b> Two payment IDs.
        </span>
        <span>Both succeed, or both roll back</span>
      </div>
    </div>
  )
}

export function PointsDiagram() {
  return (
    <div className="diagram" role="img" aria-label="Diagram: card entered, then 3DS authentication, then points shown, then paid. 15 of 20 test participants preferred the bottom sheet.">
      <div className="diagram-row">
        <span>Card journey</span>
        <b>Points appear after authentication</b>
      </div>
      <ol className="steps">
        <li>Card entered</li>
        <li>3DS auth</li>
        <li className="is-key">Points shown</li>
        <li>Paid</li>
      </ol>
      <div className="tally" aria-hidden="true">
        {Array.from({ length: 20 }, (_, i) => (
          <i key={i} className={i < 15 ? 'on' : undefined} />
        ))}
      </div>
      <div className="diagram-row">
        <span>
          <b>15 of 20</b> participants preferred the bottom sheet
        </span>
      </div>
    </div>
  )
}

export function Cover({ cover }) {
  if (cover.type === 'split') return <SplitDiagram />
  if (cover.type === 'points') return <PointsDiagram />
  return null
}
