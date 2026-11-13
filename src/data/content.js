export const person = {
  name: 'Arvind Sanker',
  fullName: 'Arvind Sanker K M',
  role: 'Product Designer II, Razorpay',
  city: 'Bengaluru',
  email: 'arvindsanker11@gmail.com',
  linkedin: 'https://www.linkedin.com/in/arvind-sanker-k-m-810762117/',
}

/*
 * Each project opens in the in-page case viewer.
 * `slides`: paste the Figma Slides share link here (for example
 * 'https://www.figma.com/slides/XXXX/Deck-name') and the viewer shows the
 * embedded deck in place of the screens or diagram.
 */
export const projects = [
  {
    id: 'gift-card-operations',
    index: '01',
    name: 'Gift Card Operations',
    domain: 'Enterprise dashboard · Razorpay EngageHQ',
    title: 'Gift-card operations that merchants run themselves.',
    summary:
      'Enterprise merchants relied on resellers, manual files and support loops to issue gift cards. I designed the operating layer for ordering, tracking, downloading and support.',
    stat: { value: '₹209 Cr', label: 'GMV target, up from ₹55 Cr' },
    cover: { type: 'image', src: 'work/gcms-0872.webp', alt: 'Orders table in the gift-card console, listing bulk orders with quantity, value and fulfilment status' },
    slides: null,
    meta: [
      { label: 'Role', value: 'End-to-end UX, IA, research, visual design' },
      { label: 'Platform', value: 'Razorpay Dashboard · EngageHQ' },
      { label: 'Timeline', value: 'Oct 2023 onward' },
      { label: 'Status', value: 'Shipped; new modules in design' },
    ],
    problem:
      'Merchants had payment rails but no operating surface. Zomato routed through a competitor, and Lenskart made 14,518 API calls as a bulk-order workaround.',
    decision:
      'Program-based ordering: pick a program, add denominations, review, place. It matched how operators already think about bulk purchasing.',
    impact:
      'Ownership moved from reseller-led to merchant-led. Marketing, finance and support teams each work from the same console without asking Razorpay.',
    options: [
      { verdict: 'Rejected', title: 'Bulk CSV upload', reason: 'Familiar to ops teams, but slow and hard to recover from when rows fail. It repeated the Lenskart workaround.' },
      { verdict: 'Rejected', title: 'API-only ordering', reason: 'Accurate for engineers, wrong for teams placing monthly orders. Every run would still need engineering time.' },
      { verdict: 'Rejected', title: 'Single-order form', reason: 'Simple for one denomination, painful for campaigns that mix values.' },
      { verdict: 'Chosen', title: 'Program-based ordering', reason: 'Program, denominations, review, place. Several denominations in one session, with a clear order state after.' },
    ],
    metrics: [
      { value: '₹209 Cr', label: 'New GMV target', note: 'Up from a ₹55 Cr baseline.' },
      { value: '0', label: 'Reseller dependency', note: 'Merchants place and track orders directly.' },
      { value: '80–90%', label: 'Expected ticket reduction', note: 'For merchant-routed gift-card support cases.' },
    ],
    learning: {
      title: 'Information architecture was the product.',
      text: 'Gift cards and wallet lived in different mental models. Fixing navigation mattered before adding more features.',
    },
    media: {
      video: { src: 'work/gcms-order-flow.mp4', poster: 'work/gcms-order-flow.jpg', label: 'Order placement, start to finish' },
      screens: [
        { src: 'work/gcms-0872.webp', label: 'Orders', alt: 'Orders table with fulfilment status for each bulk order' },
        { src: 'work/gcms-0873.webp', label: 'Programs', alt: 'Gift card programs home with an introduction panel' },
        { src: 'work/gcms-0875.webp', label: 'Program configuration', alt: 'Program creation step for denomination range, validity and redemption rules' },
        { src: 'work/gcms-0876.webp', label: 'Card design with live preview', alt: 'Gift card design step showing a live preview of the card' },
        { src: 'work/gcms-0880.webp', label: 'Support console: cards', alt: 'Cards table used by support teams to look up individual gift cards' },
        { src: 'work/gcms-0881.webp', label: 'Cancellation with audit trail', alt: 'Cancel card drawer asking for contact information and a ticket link' },
      ],
    },
  },
  {
    id: 'linked-payments',
    index: '02',
    name: 'Linked Payments',
    domain: 'Checkout infrastructure · API design',
    title: 'Gift card and UPI, completed as one atomic checkout.',
    summary:
      'Gift cards come in fixed values. Carts do not. Linked Payments lets a customer combine a gift card with a second method without broken refund or reconciliation states.',
    stat: { value: '+₹38 Cr', label: 'yearly GMV unlock targeted' },
    cover: { type: 'split' },
    slides: null,
    meta: [
      { label: 'Role', value: 'Naming, API UX, refund flow, success state' },
      { label: 'Platform', value: 'Checkout · Gift-card redemption' },
      { label: 'Timeline', value: 'Q4 2024 – Q1 2025' },
      { label: 'Gate', value: 'API council approval' },
    ],
    problem:
      'Redemption only worked when the cart and the card value matched. If one payment leg succeeded and the other failed, money sat in an ambiguous state.',
    decision:
      'Two payment IDs, explicit per-method amounts and merchant-controlled refunds, so every failure has a named owner.',
    impact:
      'A new redemption capability for variable-cart merchants: +₹38 Cr a year targeted through three launch merchants, with a ₹400 Cr+ pipeline behind it.',
    options: [
      { verdict: 'Rejected', title: 'One payment ID', reason: 'Simpler on the surface, but support could not isolate which leg failed.' },
      { verdict: 'Rejected', title: 'Auto-refund everything', reason: 'Fast, but it bypassed the refund workflows large merchants own.' },
      { verdict: 'Rejected', title: 'Percentage split API', reason: 'Created rounding problems and paise-level reconciliation pain.' },
      { verdict: 'Chosen', title: 'Two IDs, explicit amounts', reason: 'Each leg is traceable, and the integrator declares exact amounts. More typing, less ambiguity.' },
    ],
    metrics: [
      { value: '+₹38 Cr', label: 'Yearly GMV unlock', note: 'Targeted through three launch merchants.' },
      { value: '₹400 Cr+', label: 'Pipeline', note: 'MakeMyTrip and other variable-cart merchants.' },
      { value: '5', label: 'Core decisions', note: 'Naming, IDs, refunds, API amounts and success state.' },
    ],
    learning: {
      title: 'Atomicity is UX.',
      text: 'The customer sees one payment. The designer has to define every hidden failure and who owns it.',
    },
    media: null,
  },
  {
    id: 'pay-with-points',
    index: '03',
    name: 'Pay with Points',
    domain: 'Consumer checkout · Rewards',
    title: 'Reward points, redeemable at the moment of paying.',
    summary:
      'Banks issue large reward-point value that rarely gets used, because redemption lives away from purchase intent. I designed redemption inside the card journey and tested where the choice should sit.',
    stat: { value: '25+', label: 'merchants live' },
    cover: { type: 'points' },
    slides: null,
    meta: [
      { label: 'Role', value: 'UX architecture, competitive research, A/B test design' },
      { label: 'Platform', value: 'Razorpay Checkout · Card journey' },
      { label: 'Research', value: 'Floor test · 20 participants' },
      { label: 'Status', value: 'Live across 25+ merchants' },
    ],
    problem:
      'Cardholders had reward value, but not at the moment they were ready to pay. Competitors who made points a separate payment method saw low success rates.',
    decision:
      'Show points only after 3DS authentication, in a bottom sheet with points used, amount remaining and an explicit skip.',
    impact:
      'Live with 25+ merchants including Swiggy, Lenskart, Titan and Nykaa. IDFC FIRST Bank saw early lifts in new users and average spend.',
    options: [
      { verdict: 'Rejected', title: 'Separate payment method', reason: 'The competitor route. Discovery and education cost were too high, with sub-55% success reported on travel merchants.' },
      { verdict: 'Rejected', title: 'Points before authentication', reason: 'Exposed point balances before the cardholder was verified. A fraud risk.' },
      { verdict: 'Tested', title: 'Inline widget', reason: 'Fewer taps and faster for repeat users. 5 of 20 participants preferred it.' },
      { verdict: 'Chosen', title: 'Bottom sheet', reason: 'A dedicated moment of choice. 15 of 20 participants preferred it; the extra step raised confidence.' },
    ],
    metrics: [
      { value: '25+', label: 'Merchants live', note: 'Including Swiggy, Lenskart, Titan and Nykaa.' },
      { value: '+12%', label: 'New users acquired', note: 'IDFC FIRST Bank, early live signal.' },
      { value: '+7%', label: 'Average spend growth', note: 'IDFC FIRST Bank, first month.' },
    ],
    learning: {
      title: 'Friction can create confidence.',
      text: 'The bottom sheet added a step, and made a financial choice easier to read. Banks, merchants and cardholders all had to win.',
    },
    media: null,
  },
]

export const about = {
  statement:
    'I design merchant-facing products that handle money. The part I enjoy most does not look like design: untangling business logic, questioning assumptions, and finding the smallest interface that does the biggest job.',
  body: [
    'I am in my fifth year at Razorpay, where I lead end-to-end design for EngageHQ, the merchant engagement and incentives platform. I started in communication design and moved into product, so I care about how a system reads as much as how it works.',
    'I also build custom AI agents in Claude Code to speed up design operations and exploration.',
  ],
  tools: 'Figma, Framer, Claude Code, ChatGPT',
  capabilities: [
    { title: 'UX strategy and systems thinking', text: 'Mapping business logic to user flows before any UI is drawn.' },
    { title: 'Interaction design and prototyping', text: 'Prototyping complex states and edge cases in Figma and Framer.' },
    { title: 'Research and validation', text: 'Using testing and data to cut ambiguity and align teams.' },
    { title: 'AI-assisted workflow', text: 'Custom agents and prompts that speed up design ops and exploration.' },
  ],
}

export const principles = [
  {
    title: 'Make complexity legible',
    text: 'I work on systems with several actors, constraints and edge cases. My job is to make them understandable to the person who has to operate them.',
  },
  {
    title: 'Design failure paths early',
    text: 'In payments, the unhappy path is often the product. Rollback, ownership and recovery are part of the experience, not an afterthought.',
  },
  {
    title: 'Balance incentives',
    text: 'The best solution works for users, merchants and the business at the same time. If one of them loses, the design is not finished.',
  },
  {
    title: 'Use structure to reduce ambiguity',
    text: 'Research, guardrails and explicit trade-offs help teams move through complexity faster, and make design rationale easy to defend.',
  },
]

export const experience = [
  {
    period: '2023 — Now',
    role: 'Product Designer II',
    company: 'Razorpay',
    note: 'Leading end-to-end design for EngageHQ: gift cards, checkout and rewards. From early research and wireframes to shipped, production-grade interfaces.',
  },
  { period: '2022 — 2023', role: 'Senior Communication Designer', company: 'Razorpay' },
  { period: '2022 — 2023', role: 'Designer in Residence', company: '10kDesigners' },
  { period: '2021 — 2022', role: 'Communication Designer', company: 'Razorpay' },
  { period: '2019 — 2021', role: 'Senior Graphic & UX Designer', company: 'Simplilearn' },
  { period: '2018 — 2019', role: 'Graphic Designer', company: 'Orita Sinclair' },
]

export const recognition = [
  { period: 'Award', role: 'Game Changer Award', company: 'Razorpay' },
  { period: 'Award', role: 'Rookie MVP Award', company: 'Razorpay' },
]

export const education = [
  { period: '2015 — 2018', role: 'Master of Computer Applications', company: 'Kumaraguru College of Technology' },
  { period: '2017 — 2018', role: 'Diploma in User Interaction Design', company: 'Orita Sinclair School of Design' },
]
