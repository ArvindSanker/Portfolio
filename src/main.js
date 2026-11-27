(function () {
  var IMG = { rzp: "logos/razorpay.svg", me: "work/arvind-portrait.webp", fun: "work/arvind.webp", w1: "work/gcms-cover.webp", w2: "work/checkout-cover.webp" }
  var EMAIL = 'arvindsanker11@gmail.com'
  var I = {
    arrow: '<svg class="ico" viewBox="0 0 24 24"><path d="M4 12h15M13 6l6 6-6 6"/></svg>',
    sun: '<svg class="ico" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/></svg>',
    moon: '<svg class="ico" viewBox="0 0 24 24" style="animation:none"><path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5z"/></svg>',
    pin: '<svg class="ico" viewBox="0 0 24 24"><path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.500C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>',
    ball: '<svg class="ico" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9.5"/><path d="M12 7.500l4.300 3.100-1.600 5h-5.400l-1.600-5zM12 2.500v5M21 10.200l-4.700.4M17.800 19.500l-3.100-3.900M6.200 19.500l3.100-3.900M3 10.200l4.700.4"/></svg>',
    leaf: '<svg class="ico" viewBox="0 0 24 24"><path d="M12 22V11M12 15c-4.500 0-7-2.500-7-7 4.500 0 7 2.500 7 7zM12 11c0-4 2.200-6.500 7-7 .3 4.800-2.200 7-7 7z"/></svg>',
    cam: '<svg class="ico" viewBox="0 0 24 24"><path d="M3 8h4l1.500-2.500h7L17 8h4v11H3z"/><circle cx="12" cy="13" r="3.500"/></svg>',
    film: '<svg class="ico" viewBox="0 0 24 24"><path d="M3 10h18v10H3zM3 10l1-4 17-3 .5 3.500zM8 5.300l2 4M13 4.400l2 4"/></svg>',
    out: '<svg class="ico" viewBox="0 0 24 24"><path d="M7 17L17 7M9 7h8v8"/></svg>',
    plane: '<svg class="ico" viewBox="0 0 24 24"><path d="M21 3L3 10.500l7 2.500 2.500 7zM10 13l5-4.500"/></svg>'
  }
  var LINES = {
    1: ['I\'m Arvind.<br>A <em>senior product designer</em> who builds his own AI tools, thinks in systems <span class="nb">and mentors <span class="nb2">other designers</span></span>', '<span>Currently Senior Product Designer at <a href="https://www.equiti.com/" target="_blank" rel="noopener">Equiti Group</a>.</span><span>Previously five years at <a href="https://razorpay.com/" target="_blank" rel="noopener">Razorpay</a>, designing gift cards, checkout and EngageHQ. <b class="x">Along the way, Designer in Residence at <a href="https://10kdesigners.com/" target="_blank" rel="noopener">10kDesigners</a>.</b></span><span>On the side, I build Claude Code skills for my own design work.</span>'],
    2: ['I\'m Arvind. A senior product designer who turns messy, many-sided problems into products people can <em>simply use</em>', 'Currently Senior Product Designer at Equiti Group. Previously five years at Razorpay, where I designed gift cards, checkout and rewards.'],
    3: ['I\'m Arvind. A senior product designer who started in communication design, <em>thinks in systems</em> and builds with AI', 'Currently Senior Product Designer at Equiti Group. Previously five years at Razorpay.'],
    4: ['I\'m Arvind. I design the <em>calm, clear side</em> of complicated products', 'Senior Product Designer at Equiti Group. Previously five years at Razorpay, where I designed gift cards, checkout and rewards.']
  }
  var P = [
    { n: '01', url: 'https://www.figma.com/deck/ekIWiXMlcyLfg4REkVmmGI/Merchants-can-now-issue-gift-cards--in-under-a-minute?node-id=2-10&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1', name: 'Gift Card Operations', tag: 'Enterprise dashboard · Razorpay', yr: '', title: 'Gift-card operations that merchants <span class="under">run themselves</span>', plain: 'Gift-card operations that merchants run themselves', out: '₹209 Cr', outl: 'GMV target, up from ₹55 Cr', img: 'w1', alt: 'Gift card orders dashboard with order detail drawers: generated, processing and failed', sum: 'Enterprise merchants relied on resellers, manual files and support loops to issue gift cards. I designed the console for ordering, tracking and support.', problem: 'Merchants had payment rails but no operating surface. One made 14,518 API calls as a bulk-order workaround.', decision: 'Program-based ordering: pick a program, add denominations, review, place.', impact: 'Ownership moved from reseller-led to merchant-led.' },
    { n: '02', url: 'https://www.figma.com/deck/It31h46feVEQ7hR43btomy/Case-Study-%E2%80%94-Gift-Cards-on-Checkout?node-id=3-2&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1', name: 'Gift Cards on Checkout', tag: 'Checkout · Razorpay', yr: '', title: 'Gift cards on checkout, <span class="under">when the balance isn\'t enough</span>', plain: 'Gift cards on checkout, when the balance isn\'t enough', out: '+₹38 Cr', outl: 'yearly GMV targeted', img: 'w2', alt: 'Checkout on desktop with a gift card applied, and phone screens for adding a gift card and a successful payment', sum: 'Gift cards come in fixed values. Carts do not. I designed how a customer pays the rest with UPI or a card in the same checkout.', problem: 'Gift cards come in fixed values and carts do not. When the balance fell short, there was no way to pay the difference.', decision: 'Split payment in one checkout: apply the gift card, then pay the rest with UPI or a card.', impact: 'A gift card can now pay for any cart, whatever its balance.' }
  ]
  var H = [
    ['kit', 'Left wing, always', 'I play on the left wing and support Manchester United with more loyalty than sense. Ronaldo is the greatest, and yes, I will argue about it.'],
    ['pots', 'A home turning green', 'I grow plants at home and I am a little crazy about it. A new leaf is a good day. They have taught me more patience than any deadline.'],
    ['pass', 'Solo, then family', 'Before marriage I travelled solo. Now it is family trips, on the safer side of the map. Different pace, better company.'],
    ['rec', 'Influencer, pending', 'I film everything on the road, planning to be a travel influencer. The footage is ready. The editor, also me, is busy. Maybe in future.']
  ]
  var ART = {
    kit: '<div class="art kit"><svg viewBox="0 0 120 100" role="img" aria-label="A red football shirt with the name Arvind and the number 7"><path d="M40 8L22 15 5 33l13 13 10-8v56h64V38l10 8 13-13-17-18-18-7c-5 9-35 9-40 0z" fill="#d8232c"/><path d="M40 8c5 9 35 9 40 0l-4-1c-4 6-28 6-32 0z" fill="#fff"/><text x="60" y="40" text-anchor="middle" font-family="Figtree, sans-serif" font-weight="700" font-size="9" letter-spacing="1.5" fill="#fff">ARVIND</text><text x="60" y="80" text-anchor="middle" font-family="Figtree, sans-serif" font-weight="700" font-size="40" fill="#fff">7</text></svg></div>',
    pots: '<div class="art pots"><svg viewBox="0 0 160 100" role="img" aria-label="Three potted plants"><g fill="#3c9a5c"><path d="M30 64C16 60 10 44 14 30c12 4 20 16 16 34zM32 64c-2-18 6-32 20-36 2 16-4 30-20 36z"/><path d="M80 66V18c7 10 9 30 0 48zM78 66C68 52 68 34 72 24c6 10 9 26 6 42zM82 66c-2-14 2-28 10-36 2 12-2 26-10 36z" fill="#2f8550"/><circle cx="122" cy="52" r="7"/><circle cx="134" cy="46" r="6"/><circle cx="130" cy="60" r="6"/><circle cx="142" cy="58" r="5"/><circle cx="116" cy="62" r="5"/></g><g fill="#c96a41"><path d="M18 64h28l-4 26H22zM66 66h28l-4 24H70zM112 66h30l-4 24h-22z"/></g><g fill="#b25a35"><rect x="16" y="62" width="32" height="6" rx="2"/><rect x="64" y="64" width="32" height="6" rx="2"/><rect x="110" y="64" width="34" height="6" rx="2"/></g></svg></div>',
    pass: '<div class="art pass"><div class="tk"><span><small>From</small><b>Solo</b></span><i>' + I.plane + '</i><span><small>To</small><b>Family</b></span></div></div>',
    rec: '<div class="art rec"><span class="dot"></span><span class="lbl">REC</span><span class="bar"><small>Edit</small><i></i><small>0%</small></span></div>'
  }

  var $ = function (q, el) { return (el || document).querySelector(q) }, $$ = function (q, el) { return [].slice.call((el || document).querySelectorAll(q)) }
  var clamp = function (v) { return Math.max(0, Math.min(1, v)) }
  var GREET = { morning: 'good morning, friend.', midday: 'good afternoon, friend.', evening: 'good evening, friend.', night: 'good night, friend.' }
  function hello() { var ph = phase(), h = new Date().getHours(), auto = !st.sky || st.sky === 'auto', g = auto && h < 5 ? 'up late, friend?' : GREET[ph]; return (ph === 'night' ? I.moon : I.sun) + g }
  function blr() { try { return new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', hour12: false }).format(new Date()) } catch (e) { return '' } }
  function fig(p) {
    if (p.img) return '<div class="fig"><img src="' + IMG[p.img] + '" alt="' + p.alt + '"></div>'
    return ''
  }
  var st = { line: '1', pal: '1', type: 'soft' }
  try { localStorage.removeItem('arvind-reel') } catch (e) {}
  st.line = '1'; st.type = 'soft'; st.pal = '3'; st.snd = 'off'; if (!st.sky) st.sky = 'auto'

  // time of day: the visitor's own clock sets the scene; the button in the scrubber overrides it
  var ORDER = ['auto', 'morning', 'midday', 'evening', 'night']
  function phase() { if (st.sky && st.sky !== 'auto') return st.sky; var h = new Date().getHours(); return h >= 5 && h < 11 ? 'morning' : h >= 11 && h < 16 ? 'midday' : h >= 16 && h < 19 ? 'evening' : 'night' }
  var ARC = { morning: [54, 92, 70, 20, 0], midday: [44, 13, 82, 13, 4], evening: [60, 18, 90, 94, 0], night: [56, 13, 90, 20, 4] }
  // ambient sound, generated in the browser from filtered noise and soft tones; starts only when the speaker is tapped
  var AC = null, master = null, wet = null, timers = [], live = []
  function setupAudio() {
    AC = new (window.AudioContext || window.webkitAudioContext)(); master = AC.createGain(); master.gain.value = 0; master.connect(AC.destination)
    var len = AC.sampleRate * 2.8, ir = AC.createBuffer(2, len, AC.sampleRate); for (var c = 0; c < 2; c++) { var d = ir.getChannelData(c); for (var i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2.6) }
    var conv = AC.createConvolver(); conv.buffer = ir; wet = AC.createGain(); wet.gain.value = .9; wet.connect(conv); conv.connect(master)
  }
  function stopSound() { timers.forEach(clearTimeout); timers = []; var old = live; live = []; if (master) { master.gain.cancelScheduledValues(AC.currentTime); master.gain.setTargetAtTime(0, AC.currentTime, .25) } setTimeout(function () { old.forEach(function (n) { try { n.stop() } catch (e) {} }) }, 900) }
  function air(cut, level, gust) { // wind and open air: looped noise through a low-pass filter whose level drifts slowly
    var len = AC.sampleRate * 4, buf = AC.createBuffer(1, len, AC.sampleRate), d = buf.getChannelData(0), last = 0; for (var i = 0; i < len; i++) { last = (last + .04 * (Math.random() * 2 - 1)) / 1.04; d[i] = last * 6 }
    var src = AC.createBufferSource(), f = AC.createBiquadFilter(), g = AC.createGain(), l = AC.createOscillator(), lg = AC.createGain(); src.buffer = buf; src.loop = true; f.type = 'lowpass'; f.frequency.value = cut; g.gain.value = level; l.frequency.value = gust; lg.gain.value = level * .6
    l.connect(lg); lg.connect(g.gain); src.connect(f); f.connect(g); g.connect(master); src.start(); l.start(); live.push(src, l)
  }
  function note(f0, f1, t0, dur, gain, vib) { var o = AC.createOscillator(), g = AC.createGain(); o.type = 'sine'; o.frequency.setValueAtTime(f0, t0); o.frequency.exponentialRampToValueAtTime(f1, t0 + dur); if (vib) { var v = AC.createOscillator(), vg = AC.createGain(); v.frequency.value = vib; vg.gain.value = f0 * .03; v.connect(vg); vg.connect(o.frequency); v.start(t0); v.stop(t0 + dur + .05) } g.gain.setValueAtTime(0, t0); g.gain.linearRampToValueAtTime(gain, t0 + dur * .3); g.gain.exponentialRampToValueAtTime(.0001, t0 + dur); o.connect(g); g.connect(wet); g.connect(master); o.start(t0); o.stop(t0 + dur + .05) }
  function bird(lo, hi, gain) { var t = AC.currentTime + .05, base = lo + Math.random() * (hi - lo), n = 2 + Math.floor(Math.random() * 4), gap = .09 + Math.random() * .09; for (var i = 0; i < n; i++) { var f = base * (1 + (Math.random() - .5) * .25); note(f, f * (Math.random() < .5 ? 1.25 : .82), t + i * gap, .07 + Math.random() * .06, gain * (.6 + Math.random() * .4), 0) } }
  function cricket() { var t = AC.currentTime + .05, f = 4000 + Math.random() * 500; for (var k = 0; k < 3; k++) for (var i = 0; i < 5; i++) note(f, f, t + k * .2 + i * .024, .02, .0045, 0) }
  function owl() { var t = AC.currentTime + .05; note(410, 385, t, .32, .012, 5); note(395, 350, t + .5, .6, .014, 5) }
  function every(fn, min, max, first) { timers.push(setTimeout(function go() { fn(); timers.push(setTimeout(go, min + Math.random() * (max - min))) }, first || 600)) }
  function startSound() {
    if (!AC) return; stopSound(); if (st.snd !== 'on') return
    timers.push(setTimeout(function () {
      var ph = phase(); master.gain.cancelScheduledValues(AC.currentTime); master.gain.setTargetAtTime(.9, AC.currentTime, 1.6)
      if (ph === 'morning') { every(function () { bird(2600, 4600, .02) }, 900, 3200, 900); every(function () { bird(1700, 2400, .014) }, 3500, 8000, 2600) }
      else if (ph === 'midday') { every(function () { bird(2200, 3400, .01) }, 6000, 13000, 3000) }
      else if (ph === 'evening') { every(function () { bird(1500, 2300, .013) }, 3500, 9000, 1500); every(cricket, 2600, 5200, 5000) }
      else { every(cricket, 900, 1500, 700); every(owl, 14000, 26000, 6000) }
    }, 950))
  }
  var SPK = { on: '<svg class="ico" viewBox="0 0 24 24"><path d="M4 9.500v5h3.500L12 18V6L7.500 9.500zM15.500 9a4 4 0 0 1 0 6M18 6.500a7.500 7.500 0 0 1 0 11"/></svg>', off: '<svg class="ico" viewBox="0 0 24 24"><path d="M4 9.500v5h3.500L12 18V6L7.500 9.500zM16 9.500l5 5M21 9.500l-5 5"/></svg>' }

  // ── page: one vertical document. The sky is the hero; everything after it sits on calm paper. ──
  var SKY = '<div class="sky" id="sky" aria-hidden="true"><div class="g morning"></div><div class="g midday"></div><div class="g evening"></div><div class="g night"></div><div class="stars" id="stars"></div><i class="shoot"></i><i class="sun"></i><i class="moon"></i><i class="cloud"></i><i class="cloud"></i><i class="cloud"></i>' +
    '<div class="hills"><svg viewBox="0 0 1600 200" preserveAspectRatio="none"><path d="M0 110C200 50 350 85 520 62S800 105 980 72s320-42 620 20V200H0z"/></svg><svg viewBox="0 0 1600 200" preserveAspectRatio="none"><path d="M0 150C180 105 300 140 480 118s280 32 460 6 340-28 660 14V200H0z"/></svg><svg viewBox="0 0 1600 200" preserveAspectRatio="none"><path stroke="none" d="M0 178C220 150 380 182 600 160s300 26 500 6 300-16 500 8V200H0z"/><g stroke-width="3" stroke-linecap="round" fill="none"><path d="M196 162v-26M196 146l-9-9M196 140l10-10M330 172v-20M330 160l8-8M905 172v-24M905 156l-9-8M905 152l9-9M1265 160v-24h44v24"/></g><g stroke="none"><ellipse cx="196" cy="128" rx="13" ry="11"/><ellipse cx="330" cy="147" rx="9" ry="8"/><ellipse cx="905" cy="141" rx="12" ry="10"/><ellipse cx="1420" cy="160" rx="22" ry="9"/></g></svg><svg class="edge" viewBox="0 0 1600 200" preserveAspectRatio="none"><path d="M0 196C300 184 560 192 800 188s520 4 800-6V200H0z"/></svg></div>' +
    '<div class="flock"><i class="bird" style="--x:78%;--y:40%;--s:1.00;--f:0.46s;--d:-0.10s"><b></b></i><i class="bird" style="--x:60%;--y:22%;--s:0.90;--f:0.52s;--d:-0.30s"><b></b></i><i class="bird" style="--x:58%;--y:62%;--s:0.95;--f:0.50s;--d:-0.60s"><b></b></i><i class="bird" style="--x:40%;--y:8%;--s:0.80;--f:0.56s;--d:-0.20s"><b></b></i><i class="bird" style="--x:36%;--y:80%;--s:0.85;--f:0.48s;--d:-0.70s"><b></b></i><i class="bird" style="--x:18%;--y:0%;--s:0.70;--f:0.60s;--d:-0.40s"><b></b></i></div><div class="flock far"><i class="bird" style="--x:70%;--y:50%;--s:1.00;--f:0.50s;--d:-0.20s"><b></b></i><i class="bird" style="--x:50%;--y:30%;--s:0.90;--f:0.58s;--d:-0.50s"><b></b></i><i class="bird" style="--x:46%;--y:72%;--s:0.85;--f:0.54s;--d:-0.10s"><b></b></i><i class="bird" style="--x:24%;--y:16%;--s:0.75;--f:0.62s;--d:-0.60s"><b></b></i><i class="bird" style="--x:10%;--y:60%;--s:0.70;--f:0.50s;--d:-0.30s"><b></b></i></div>' +
    '<svg class="balloon" viewBox="0 0 40 58"><path d="M20 2C9 2 3 10 3 19c0 9 8 15 13 22h8c5-7 13-13 13-22C37 10 31 2 20 2z" fill="#2b3fe0"/><path d="M20 2c-5 5-7 12-7 17s4 15 7 22c3-7 7-17 7-22S25 7 20 2z" fill="#fff" opacity=".9"/><path d="M16 41l1 6M24 41l-1 6" stroke="#6b4a33" stroke-width="1"/><rect x="15.500" y="47" width="9" height="7" rx="1.500" fill="#8a5a3c"/></svg></div>'
  function section(id, label, body, cls) { return '<section class="sec ' + (cls || '') + '" id="' + id + '" aria-labelledby="' + id + '-l"><p class="sec-l mono" id="' + id + '-l">' + label + '</p><div class="sec-b">' + body + '</div></section>' }
  function caseStudy(p) {
    return '<article class="case" data-reveal>' +
      '<a class="case-fig" href="' + p.url + '" target="_blank" rel="noopener" aria-label="Open the ' + p.name + ' case study (opens in a new tab)">' + fig(p) + '</a>' +
      '<div class="case-t"><div><p class="co"><img src="' + IMG.rzp + '" alt="Razorpay"></p><h3>' + p.title + '</h3><p class="sum">' + p.sum + '</p></div>' +
      '<div><p class="stat"><b>' + p.out + '</b><span>' + p.outl + '</span></p>' +
      (p.problem ? '<dl class="pdi"><div><dt class="mono">Problem</dt><dd>' + p.problem + '</dd></div><div><dt class="mono">Decision</dt><dd>' + p.decision + '</dd></div><div><dt class="mono">Impact</dt><dd>' + p.impact + '</dd></div></dl>' : '') +
      '<a class="btn" href="' + p.url + '" target="_blank" rel="noopener"><span>Read the case study</span>' + I.out + '</a></div></div></article>'
  }
  var COPY = matchMedia('(hover: hover) and (pointer: fine)').matches ? 'Click to copy' : 'Tap to copy'
  var NAV = [['work', 'Work'], ['about', 'About'], ['contact', 'Contact']]
  $('#app').innerHTML =
    '<a class="skip" href="#work">Skip to work</a>' +
    '<header class="top" id="top"><a class="name" href="#hello-sec">Arvind Sanker</a><nav aria-label="Sections">' + NAV.map(function (n) { return '<a href="#' + n[0] + '" data-nav="' + n[0] + '">' + n[1] + '</a>' }).join('') + '</nav></header>' +
    '<main>' +
    '<section class="hero" id="hello-sec" aria-label="Introduction">' + SKY +
      '<div class="hero-in"><div class="hero-t"><p class="hello" id="hello">' + hello() + '</p><h1 id="h1"></h1><p id="sub"></p><a class="btn" href="#work"><span>See the work</span>' + I.arrow + '</a></div>' +
      '<div class="me"><img src="' + IMG.me + '" alt="Arvind Sanker" width="640" height="800"></div></div>' +
      '<div class="skyctl"><span class="blrw mono">Bengaluru <span class="blr"></span></span><button id="skybtn" aria-label="Change time of day"></button><button id="sndbtn" aria-label="Ambient sound" aria-pressed="false"></button></div>' +
    '</section>' +
    section('now', '<i class="live-dot"></i>Now', '<h2 data-reveal>Designing at <em>Equiti Group</em></h2><p class="lede" data-reveal>Product design for Equiti\'s trading products, from Bengaluru. New work lands here when it can be shared. Two projects from my Razorpay years follow.</p>', 'now') +
    section('work', 'Selected work', P.map(caseStudy).join('')) +
    section('about', 'About', '<div class="about"><div class="story" data-reveal>' +
      '<p>I\'m a designer who likes working out how something should work before deciding how it should look. I studied computer applications and interaction design side by side, which is probably why I can\'t look at a screen without asking what the system behind it is doing.</p>' +
      '<p>I started in Coimbatore in 2017 as a junior graphic designer, then moved to Bengaluru. Orita Sinclair and Simplilearn kept me busy with brand, print, motion graphics and the odd hand-coded web page. Those years taught me to make things read clearly.</p>' +
      '<p>In 2021 I joined Razorpay and stayed for five years, working my way from how the products were communicated into the products themselves. Partway through I spent nine months as a Designer in Residence at 10kDesigners, teaching and mentoring other designers. Razorpay is where I found the work I like most: gift cards, checkout and rewards, the parts of payments with the most moving pieces.</p>' +
      '<p>I\'m at Equiti Group now, as a Senior Product Designer. Away from the screen I\'m usually on a football pitch, on the left wing, or fussing over the plants at home.</p></div>' +
      '<figure class="polaroid" data-reveal><img src="' + IMG.fun + '" alt="Arvind Sanker, smiling in a cap" loading="lazy"><figcaption class="mono">Arvind, Bengaluru</figcaption></figure></div>') +
    section('off', 'Off the clock', '<h2 data-reveal>When I\'m <em>not</em> designing</h2><div class="hob">' + H.map(function (h) { return '<div class="hc" data-reveal>' + ART[h[0]] + '<span><h3>' + h[1] + '</h3><p>' + h[2] + '</p></span></div>' }).join('') + '</div>') +
    section('contact', 'Contact', '<h2 data-reveal>Say hello</h2><button class="mail" data-copy data-reveal>' + EMAIL + '<small>' + COPY + '</small></button><div class="links" data-reveal><a href="https://www.linkedin.com/in/arvind-sanker-k-m-810762117/" target="_blank" rel="noopener">LinkedIn ' + I.out + '</a><a href="https://medium.com/@arvindsanker11" target="_blank" rel="noopener">Medium ' + I.out + '</a><a href="https://x.com/sanker_arvind" target="_blank" rel="noopener">X ' + I.out + '</a></div>') +
    '</main><footer class="foot mono"><span>Arvind Sanker</span><span>Bengaluru <span class="blr"></span></span></footer>'

  var hero = $('#hello-sec'), sky = $('#sky'), sun = $('.sun', sky), moon = $('.moon', sky), top = $('#top')
  // Where the sun or moon sits for each time of day, as % of the hero: low and rising, high, low and setting, high.
  var POS = { morning: [60, 72], midday: [70, 14], evening: [82, 70], night: [74, 16] }
  function placeSun() { var a = POS[phase()], narrow = innerWidth <= 820, x = narrow ? 84 : a[0], y = narrow ? 15 : a[1], o = 'translate3d(' + (x * sky.clientWidth / 100) + 'px,' + (y * sky.clientHeight / 100) + 'px,0)'; sun.style.transform = o; moon.style.transform = o }
  addEventListener('resize', placeSun)
  // Header: clear over the sky, paper with a hairline once the page moves.
  var solid = false; function head() { var s = scrollY > 8; if (s !== solid) { solid = s; top.classList.toggle('solid', s) } }
  addEventListener('scroll', head, { passive: true })
  if ('IntersectionObserver' in window) {
    // The sky only animates while you can see it.
    new IntersectionObserver(function (es) { document.body.classList.toggle('sky-off', !es[0].isIntersecting) }).observe(hero)
    // Highlight the section you are reading.
    var links = $$('[data-nav]', top), cur = ''
    var navIO = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { var id = e.target.id === 'now' ? '' : e.target.id === 'off' ? 'about' : e.target.id; if (id !== cur) { cur = id; links.forEach(function (l) { var on = l.getAttribute('data-nav') === id; l.classList.toggle('on', on); if (on) l.setAttribute('aria-current', 'true'); else l.removeAttribute('aria-current') }) } } }) }, { rootMargin: '-40% 0px -55% 0px' })
    $$('.sec, .hero').forEach(function (s) { navIO.observe(s) })
    // Sections settle in once as they arrive.
    if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.documentElement.classList.add('rv')
      var revIO = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); revIO.unobserve(e.target) } }) }, { rootMargin: '0px 0px -8% 0px', threshold: .12 })
      $$('[data-reveal]').forEach(function (el) { revIO.observe(el) })
    }
  }

  var lastHello = ''
  $('#stars').innerHTML = Array.apply(null, Array(70)).map(function () { var s = Math.random(); return '<i style="left:' + (Math.random() * 100).toFixed(1) + '%;top:' + (Math.random() * 70).toFixed(1) + '%;animation-delay:' + (Math.random() * 3).toFixed(2) + 's;transform:scale(' + (s > .9 ? 2.4 : 1 + s).toFixed(2) + ')"></i>' }).join('')
  $('#skybtn').addEventListener('click', function () { st.sky = ORDER[(ORDER.indexOf(st.sky) + 1) % ORDER.length]; apply(); startSound() })
  $('#sndbtn').addEventListener('click', function () { st.snd = st.snd === 'on' ? 'off' : 'on'; if (st.snd === 'on' && !AC) { try { setupAudio() } catch (e) { st.snd = 'off' } } if (AC) AC.resume(); apply(); startSound() })
  function apply() {
    document.body.setAttribute('data-pal', st.pal); var ph = phase(); document.body.setAttribute('data-sky', ph); lastHello = hello(); $('#hello').innerHTML = lastHello
    $('#skybtn').innerHTML = (ph === 'night' ? I.moon : I.sun) + (st.sky === 'auto' ? 'Now · ' : '') + ph.charAt(0).toUpperCase() + ph.slice(1); $('#sndbtn').innerHTML = SPK[st.snd === 'on' ? 'on' : 'off']; $('#sndbtn').setAttribute('aria-pressed', st.snd === 'on')
    $('#h1').innerHTML = LINES[st.line][0]; $('#sub').innerHTML = LINES[st.line][1]; placeSun()
  }
  function tick() { $$('.blr').forEach(function (b) { b.textContent = blr() }); var h = hello(); if (h !== lastHello) { apply(); startSound() } } setInterval(tick, 20000)
  document.addEventListener('click', function (e) {
    var c = e.target.closest('[data-copy]'); if (c) { var s = $('small', c), done = function (m) { s.textContent = m; setTimeout(function () { s.textContent = COPY }, 2000) }; try { navigator.clipboard.writeText(EMAIL).then(function () { done('Copied') }, function () { done('Press and hold to copy') }) } catch (err) { done('Press and hold to copy') } }
  })
  apply(); tick(); head(); addEventListener('load', placeSun)
})()
