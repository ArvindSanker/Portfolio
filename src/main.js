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
    1: ['I\'m Arvind.<br>A <em>senior product designer</em> who builds his own AI tools, thinks in systems and mentors other&nbsp;designers', 'Senior Product Designer at Equiti Group. Before that, five years at Razorpay on gift cards, checkout, rewards and EngageHQ.'],
    2: ['I\'m Arvind. A senior product designer who turns messy, many-sided problems into products people can <em>simply use</em>', 'Currently Senior Product Designer at Equiti Group. Previously five years at Razorpay, where I designed gift cards, checkout and rewards.'],
    3: ['I\'m Arvind. A senior product designer who started in communication design, <em>thinks in systems</em> and builds with AI', 'Currently Senior Product Designer at Equiti Group. Previously five years at Razorpay.'],
    4: ['I\'m Arvind. I design the <em>calm, clear side</em> of complicated products', 'Senior Product Designer at Equiti Group. Previously five years at Razorpay, where I designed gift cards, checkout and rewards.']
  }
  var CASE_LINK = true
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

  var chapters = [
    ['Hello', '<div><p class="hello" id="hello">' + hello() + '</p><h1 id="h1" class="rise"></h1><p id="sub" class="rise"></p><a class="btn rise" href="#" data-go="Work"><span>See the work</span>' + I.arrow + '</a></div><div class="me"><img src="' + IMG.me + '" alt="Arvind Sanker"></div>'],
    ['Now', '<div><p class="mono live"><i></i>Now · Bengaluru <span class="blr"></span></p><h2 style="margin-top:16px">Designing at <em>Equiti Group</em></h2><p>' + I.pin + ' Product design for Equiti\'s trading products, from Bengaluru. New work lands here when it can be shared. Two projects from my Razorpay years follow.</p></div>', 'one']
  ].concat(P.map(function (p, i) { return [i ? '' : 'Work', '<span class="num">' + p.n + '</span><div><p class="co"><img src="' + IMG.rzp + '" alt="Razorpay">' + (p.yr ? '<span>' + p.yr + '</span>' : '') + '</p><h2 class="rise" style="margin-top:12px">' + p.title + '</h2><p class="out rise">' + p.out + ' · ' + p.outl + '</p>' + (p.problem ? '<dl class="pdi rise"><div><dt class="mono">Problem</dt><dd>' + p.problem + '</dd></div><div><dt class="mono">Decision</dt><dd>' + p.decision + '</dd></div><div><dt class="mono">Impact</dt><dd>' + p.impact + '</dd></div></dl>' : '') + (CASE_LINK ? '<a class="btn rise" href="' + p.url + '" target="_blank" rel="noopener"><span>Read the case study</span>' + I.out + '</a>' : '') + '</div>' + (CASE_LINK ? '<a class="media" href="' + p.url + '" target="_blank" rel="noopener" aria-label="Open the ' + p.name + ' case study (opens in a new tab)">' + fig(p) + '</a>' : '<div class="media">' + fig(p) + '</div>')] })).concat([
    ['About', '<div class="story"><p class="mono" style="margin-bottom:16px">About</p><p>I\'m a designer who likes working out <em>how something should work</em> before deciding how it should look. I studied computer applications and interaction design side by side, which is probably why I can\'t look at a screen without asking what the system behind it is doing.</p><p>I started in Coimbatore in 2017 as a junior graphic designer, then moved to Bengaluru. Orita Sinclair and Simplilearn kept me busy with brand, print, motion graphics and the odd hand-coded web page. Those years taught me to make things <em>read clearly</em>.</p></div><figure class="polaroid"><img src="' + IMG.fun + '" alt="Arvind Sanker"><figcaption class="mono">Arvind, Bengaluru</figcaption></figure>'],
    ['', '<div class="story"><p>In 2021 I joined Razorpay and stayed for five years, working my way from how the products were communicated into the products themselves. Partway through I spent nine months as a Designer in Residence at 10kDesigners, teaching and mentoring other designers. Razorpay is where I found the work I like most: gift cards, checkout and rewards, <em>the parts of payments with the most moving pieces</em>.</p><p>I\'m at <em>Equiti Group</em> now, as a Senior Product Designer. Away from the screen I\'m usually on a football pitch, on the left wing, or fussing over the plants at home.</p></div>', 'one'],
    ['Off the clock', '<div style="width:100%"><p class="mono">Off the clock</p><h2 style="margin-top:12px">When I\'m <em>not</em> designing</h2><div class="hob">' + H.map(function (h) { return '<div class="hc">' + ART[h[0]] + '<span><h3>' + h[1] + '</h3><p>' + h[2] + '</p></span></div>' }).join('') + '</div></div>', 'one'],
    ['Contact', '<div><p class="mono">' + I.plane + ' Say hello</p><button class="mail" data-copy>' + EMAIL + '<small>Tap to copy</small></button><div class="links"><a href="https://www.linkedin.com/in/arvind-sanker-k-m-810762117/" target="_blank" rel="noopener">LinkedIn ' + I.out + '</a><a href="https://medium.com/@arvindsanker11" target="_blank" rel="noopener">Medium ' + I.out + '</a><a href="https://x.com/sanker_arvind" target="_blank" rel="noopener">X ' + I.out + '</a></div></div>', 'one']
  ])
  var N = chapters.length
  $('#app').innerHTML = '<div class="D" style="height:' + (N * 85) + 'svh">' + chapters.map(function () { return '<i class="snap"></i>' }).join('') + '<div class="D-view"><div class="sky" id="sky"><div class="g morning"></div><div class="g midday"></div><div class="g evening"></div><div class="g night"></div><div class="stars" id="stars"></div><i class="shoot"></i><i class="sun"></i><i class="moon"></i><i class="cloud"></i><i class="cloud"></i><i class="cloud"></i><div class="hills"><svg viewBox="0 0 1600 200" preserveAspectRatio="none"><path d="M0 110C200 50 350 85 520 62S800 105 980 72s320-42 620 20V200H0z"/></svg><svg viewBox="0 0 1600 200" preserveAspectRatio="none"><path d="M0 150C180 105 300 140 480 118s280 32 460 6 340-28 660 14V200H0z"/></svg><svg viewBox="0 0 1600 200" preserveAspectRatio="none"><path stroke="none" d="M0 178C220 150 380 182 600 160s300 26 500 6 300-16 500 8V200H0z"/><g stroke-width="3" stroke-linecap="round" fill="none"><path d="M196 162v-26M196 146l-9-9M196 140l10-10M330 172v-20M330 160l8-8M905 172v-24M905 156l-9-8M905 152l9-9M1265 160v-24h44v24"/></g><g stroke="none"><ellipse cx="196" cy="128" rx="13" ry="11"/><ellipse cx="330" cy="147" rx="9" ry="8"/><ellipse cx="905" cy="141" rx="12" ry="10"/><ellipse cx="1420" cy="160" rx="22" ry="9"/></g></svg></div><div class="flock"><i class="bird" style="--x:78%;--y:40%;--s:1.00;--f:0.46s;--d:-0.10s"><b></b></i><i class="bird" style="--x:60%;--y:22%;--s:0.90;--f:0.52s;--d:-0.30s"><b></b></i><i class="bird" style="--x:58%;--y:62%;--s:0.95;--f:0.50s;--d:-0.60s"><b></b></i><i class="bird" style="--x:40%;--y:8%;--s:0.80;--f:0.56s;--d:-0.20s"><b></b></i><i class="bird" style="--x:36%;--y:80%;--s:0.85;--f:0.48s;--d:-0.70s"><b></b></i><i class="bird" style="--x:18%;--y:0%;--s:0.70;--f:0.60s;--d:-0.40s"><b></b></i></div><div class="flock far"><i class="bird" style="--x:70%;--y:50%;--s:1.00;--f:0.50s;--d:-0.20s"><b></b></i><i class="bird" style="--x:50%;--y:30%;--s:0.90;--f:0.58s;--d:-0.50s"><b></b></i><i class="bird" style="--x:46%;--y:72%;--s:0.85;--f:0.54s;--d:-0.10s"><b></b></i><i class="bird" style="--x:24%;--y:16%;--s:0.75;--f:0.62s;--d:-0.60s"><b></b></i><i class="bird" style="--x:10%;--y:60%;--s:0.70;--f:0.50s;--d:-0.30s"><b></b></i></div><svg class="balloon" viewBox="0 0 40 58"><path d="M20 2C9 2 3 10 3 19c0 9 8 15 13 22h8c5-7 13-13 13-22C37 10 31 2 20 2z" fill="#2b3fe0"/><path d="M20 2c-5 5-7 12-7 17s4 15 7 22c3-7 7-17 7-22S25 7 20 2z" fill="#fff" opacity=".9"/><path d="M16 41l1 6M24 41l-1 6" stroke="#6b4a33" stroke-width="1"/><rect x="15.500" y="47" width="9" height="7" rx="1.500" fill="#8a5a3c"/></svg></div><div class="D-track">' + chapters.map(function (c) { return '<section class="ch ' + (c[2] || '') + '"' + (c[0] ? ' data-nav="' + c[0] + '"' : '') + '>' + c[1] + '</section>' }).join('') + '</div><div class="scrub mono"><span id="dch"></span><div class="line"><i></i>' + chapters.map(function (c, i) { return '<u style="left:' + (i / (N - 1) * 100) + '%"></u>' }).join('') + '<b></b></div><span class="skyctl"><span class="blrw">Bengaluru <span class="blr"></span></span><button id="skybtn" aria-label="Change time of day"></button><button id="sndbtn" aria-label="Ambient sound" aria-pressed="false"></button></span></div></div></div>'

  var d = $('.D'), track = $('.D-track'), chs = $$('.ch'), view = $('.D-view'), lab = $('#dch'), pill = $('#pill'), navs = $$('[data-nav]')
  pill.innerHTML = navs.map(function (n, i) { return '<button data-i="' + i + '">' + n.getAttribute('data-nav') + '</button>' }).join('')
  var snaps = $$('.snap', d), sky = $('#sky'), sun = $('.sun', sky), moon = $('.moon', sky), stars = $('#stars'), hills = $$('.hills svg', sky)
  var bar = $('.line i', view), knob = $('.line b', view), lineEl = $('.line', view)
  var PAR = chs.map(function (c) { return $$('.media, .me, .num, .polaroid', c).filter(function (el) { return el.parentNode === c || el.closest('.ch') === c }).map(function (el) { return { el: el, f: el.classList.contains('num') ? 16 : 9, tail: el.classList.contains('polaroid') ? ' rotate(2deg)' : '' } }) })
  var start = 0, sp = 1, vw = innerWidth, skyW = 0, skyH = 0, lineW = 0
  // Measure once per real resize, never during scroll.
  function measure() {
    vw = innerWidth; start = d.offsetTop - (parseFloat(getComputedStyle(view).top) || 0)
    sp = Math.max(1, d.offsetHeight - view.offsetHeight); skyW = sky.clientWidth; skyH = sky.clientHeight; lineW = lineEl.clientWidth
    snaps.forEach(function (m, k) { m.style.top = (start - d.offsetTop + k / (N - 1) * sp) + 'px' })
  }
  function span() { return sp }
  var lastAct = -1, lastLab = '', landed = -1
  // Work and About are for reading: the sky goes quiet there.
  var CALM = chs.map(function (c, i) { return c.querySelector('.media, .story') ? i : -1 }).filter(function (i) { return i > -1 })
  function frame() {
    var p = clamp((scrollY - start) / sp), x = p * (N - 1), act = 0
    track.style.transform = 'translate3d(' + (-x * vw) + 'px,0,0)'
    PAR.forEach(function (list, i) { var dd = Math.max(-1.2, Math.min(1.2, i - x)); if (Math.abs(i - x) > 2.2 && list.done === dd) return; list.done = dd; list.forEach(function (o) { o.el.style.transform = 'translate3d(' + (dd * o.f * vw / 100) + 'px,0,0)' + o.tail }) })
    var a = ARC[phase()], ox = a[0] + (a[2] - a[0]) * p, oy = a[1] + (a[3] - a[1]) * p - Math.sin(Math.PI * p) * a[4]; if (vw <= 820) { ox = 88 + 6 * p; oy = 3.5 } var o = 'translate3d(' + (ox * skyW / 100) + 'px,' + (oy * skyH / 100) + 'px,0)'
    sun.style.transform = o; moon.style.transform = o
    stars.style.transform = 'translate3d(' + (p * -6) + '%,0,0)'; hills.forEach(function (h, i) { h.style.transform = 'translate3d(' + (p * [-8, -14, -22][i]) + '%,0,0)' })
    bar.style.transform = 'scaleX(' + p + ')'; knob.style.transform = 'translate3d(' + (p * lineW) + 'px,0,0)'
    var l = ('0' + (Math.round(x) + 1)).slice(-2) + ' / ' + ('0' + N).slice(-2); if (l !== lastLab) lab.textContent = lastLab = l
    navs.forEach(function (n, i) { if (chs.indexOf(n) <= Math.round(x)) act = i }); if (act !== lastAct) { lastAct = act; $$('button', pill).forEach(function (b, i) { b.classList.toggle('on', i === act); if (i === act && pill.scrollWidth > pill.clientWidth) pill.scrollTo({ left: b.offsetLeft - (pill.clientWidth - b.offsetWidth) / 2, behavior: 'smooth' }) }) }
    var k = Math.round(x); if (Math.abs(x - k) < .04 && k !== landed) { landed = k; chs.forEach(function (c, i) { c.classList.toggle('land', i === k) }); document.body.classList.toggle('calm', CALM.indexOf(k) > -1) }
  }
  var raf = 0, lastW = innerWidth, lastH = innerHeight
  addEventListener('scroll', function () { if (!raf) raf = requestAnimationFrame(function () { raf = 0; frame() }) }, { passive: true })
  // Phones fire resize when the address bar slides; only refit on a real size change.
  addEventListener('resize', function () { var w = innerWidth, h = innerHeight, big = w !== lastW || Math.abs(h - lastH) > 160; lastW = w; lastH = h; if (big) fit(); measure(); frame() })
  // One gesture, one chapter. Animate the page scroll ourselves (snap off while it runs) so every move has the same ease.
  var html = document.documentElement, anim = 0, animK = -1
  function stopAnim() { if (anim) { cancelAnimationFrame(anim); anim = 0; animK = -1; html.style.scrollSnapType = '' } }
  function goTo(k) {
    k = Math.max(0, Math.min(N - 1, k)); var to = start + k / (N - 1) * sp, from = scrollY, dist = to - from
    stopAnim(); if (Math.abs(dist) < 2) return
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) { window.scrollTo(0, to); return }
    var steps = Math.abs(dist) / (sp / (N - 1)), dur = Math.min(1000, 520 + 100 * Math.max(0, steps - 1)), t0 = performance.now()
    animK = k; html.style.scrollSnapType = 'none'
    var run = function (now) { var t = Math.min(1, (now - t0) / dur), e = steps > 1.5 ? (t < .5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2) : 1 - Math.pow(1 - t, 4)
      window.scrollTo(0, from + dist * e); if (t < 1) anim = requestAnimationFrame(run); else { anim = 0; animK = -1; window.scrollTo(0, to); html.style.scrollSnapType = '' } }
    anim = requestAnimationFrame(run)
  }
  var wLast = 0, wFired = 0, wMag = 0, wArmed = true
  addEventListener('wheel', function (e) {
    if (e.ctrlKey) return
    e.preventDefault()
    var dx = e.deltaX, dy = e.deltaY, v = Math.abs(dx) > Math.abs(dy) ? dx : dy; if (e.deltaMode === 1) v *= 16
    var now = performance.now(), gap = now - wLast, mag = Math.abs(v); wLast = now
    var notch = e.deltaMode === 1 || (e.wheelDeltaY && e.wheelDeltaY % 120 === 0 && mag >= 50)
    if (gap > 220) wArmed = true
    else if (!wArmed && now - wFired > 480 && (notch || (mag > wMag * 1.8 && mag > 14))) wArmed = true
    wMag = mag
    if (wArmed && mag >= 3) { wArmed = false; wFired = now; goTo(curK() + (v > 0 ? 1 : -1)) }
  }, { passive: false })
  addEventListener('touchstart', stopAnim, { passive: true })
  // Keyboard focus: the browser would scroll the hidden strip sideways. Keep it still and bring the focused chapter in instead.
  view.addEventListener('scroll', function () { if (view.scrollLeft) view.scrollLeft = 0 })
  d.addEventListener('focusin', function (e) { var c = e.target.closest('.ch'); view.scrollLeft = 0; if (c) { var k = chs.indexOf(c); if (k !== curK()) goTo(k) } })
  function goNav(n) { goTo(chs.indexOf(n)) }
  function curK() { return anim ? animK : Math.round(clamp((scrollY - start) / sp) * (N - 1)) }
  document.addEventListener('keydown', function (e) {
    if (e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey || /INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName) || (e.key === ' ' && /BUTTON|A/.test(document.activeElement.tagName))) return
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === 'PageDown' || (e.key === ' ' && !e.shiftKey)) { e.preventDefault(); goTo(curK() + 1) }
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'PageUp' || (e.key === ' ' && e.shiftKey)) { e.preventDefault(); goTo(curK() - 1) }
    else if (e.key === 'Home') { e.preventDefault(); goTo(0) } else if (e.key === 'End') { e.preventDefault(); goTo(N - 1) }
  })
  pill.addEventListener('click', function (e) { var b = e.target.closest('button'); if (b) goNav(navs[+b.getAttribute('data-i')]) })

  var lastHello = ''
  $('#stars').innerHTML = Array.apply(null, Array(70)).map(function () { var s = Math.random(); return '<i style="left:' + (Math.random() * 100).toFixed(1) + '%;top:' + (Math.random() * 70).toFixed(1) + '%;animation-delay:' + (Math.random() * 3).toFixed(2) + 's;transform:scale(' + (s > .9 ? 2.4 : 1 + s).toFixed(2) + ')"></i>' }).join('')
  $('#skybtn').addEventListener('click', function () { st.sky = ORDER[(ORDER.indexOf(st.sky) + 1) % ORDER.length]; apply(); startSound() })
  $('#sndbtn').addEventListener('click', function () { st.snd = st.snd === 'on' ? 'off' : 'on'; if (st.snd === 'on' && !AC) { try { setupAudio() } catch (e) { st.snd = 'off' } } if (AC) AC.resume(); apply(); startSound() })
  var PAL = { 1: 'Peach and plum', 2: 'Night and amber', 3: 'Paper and cobalt', 4: 'Sage and clay', 5: 'Butter and red' }
  function apply() {
    document.body.setAttribute('data-pal', st.pal); document.body.setAttribute('data-type', st.type); var ph = phase(); document.body.setAttribute('data-sky', ph); lastHello = hello(); $('#hello').innerHTML = lastHello; $('#skybtn').innerHTML = (ph === 'night' ? I.moon : I.sun) + (st.sky === 'auto' ? 'Now · ' : '') + ph.charAt(0).toUpperCase() + ph.slice(1); $('#sndbtn').innerHTML = SPK[st.snd === 'on' ? 'on' : 'off']; $('#sndbtn').setAttribute('aria-pressed', st.snd === 'on'); frame()
    $('#h1').innerHTML = LINES[st.line][0]; $('#sub').textContent = LINES[st.line][1]
    $$('.grp').forEach(function (g) { var k = g.getAttribute('data-g'); $$('button', g).forEach(function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-v') === st[k]) }) })
    if (typeof fit === 'function' && chs) fit()
  }
  $('#opts').addEventListener('click', function (e) { var b = e.target.closest('button'); if (!b) return; st[b.closest('.grp').getAttribute('data-g')] = b.getAttribute('data-v'); apply() })
  function tick() { $$('.blr').forEach(function (b) { b.textContent = blr() }); var h = hello(); if (h !== lastHello) { apply(); startSound() } } setInterval(tick, 20000)

  document.addEventListener('click', function (e) {
    var g = e.target.closest('[data-go]'); if (g) { e.preventDefault(); goNav(navs.filter(function (x) { return x.getAttribute('data-nav') === g.getAttribute('data-go') })[0]); return }
    var c = e.target.closest('[data-copy]'); if (c) { var s = $('small', c), done = function (m) { s.textContent = m; setTimeout(function () { s.textContent = 'Tap to copy' }, 2000) }; try { navigator.clipboard.writeText(EMAIL).then(function () { done('Copied') }, function () { done('Press and hold to copy') }) } catch (err) { done('Press and hold to copy') } }
  })

  function fit() {
    chs.forEach(function (c) {
      var kids = [].filter.call(c.children, function (k) { return !k.classList.contains('num') }); kids.forEach(function (k) { k.style.zoom = '' })
      var cs = getComputedStyle(c), avail = c.clientHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom), s = 1
      for (var n = 0; n < 5; n++) { var top = Infinity, bot = -Infinity; kids.forEach(function (k) { var r = k.getBoundingClientRect(); if (!r.width) return; top = Math.min(top, r.top); bot = Math.max(bot, r.bottom) }); var h = bot - top; if (h <= avail + 1) break; s = Math.max(.45, s * avail / h * .985); kids.forEach(function (k) { k.style.zoom = s }) }
    })
  }
  apply(); tick(); fit(); measure(); frame(); if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { fit(); measure(); frame() }); addEventListener('load', function () { measure(); frame() })
})()
