/* ═══════════════════════════════════════════════════
   main.js — Portfolio engine
   Reads data.json, renders all sections, handles all effects.
   To update content: edit data.json only.
═══════════════════════════════════════════════════ */

/* ── ENTRY POINT ─────────────────────────────────── */
fetch('data.json')
  .then(r => r.json())
  .then(D => {
    buildMeta(D.meta);
    buildBoot(D.boot_lines, D.meta);
    buildNav(D.meta);
    buildHero(D.meta, D.hero_status_bar, D.hero_description, D.instruments);
    buildStack(D.stack);
    buildExperience(D.experience);
    buildProjects(D.projects);
    buildSkills(D.skills);
    buildEducation(D.education, D.certifications, D.interests);
    buildContact(D.meta);
    buildFooter(D.meta);
    initEffects(D.typewriter_phrases);
  })
  .catch(err => console.error('[Portfolio] Failed to load data.json:', err));


/* ── META ────────────────────────────────────────── */
function buildMeta(m) {
  document.title = `${m.name} — ${m.title}`;
}


/* ── BOOT ────────────────────────────────────────── */
function buildBoot(lines, m) {
  document.getElementById('boot-logo').textContent = m.name.toUpperCase().replace(' ', '.').slice(0, 10);
  const el = document.getElementById('boot-lines');
  let i = 0;
  function next() {
    if (i < lines.length) { el.innerHTML += lines[i++] + '<br/>'; setTimeout(next, 220); }
  }
  next();
  setTimeout(() => {
    document.getElementById('boot').classList.add('done');
    animateInstrumentBars();
  }, 2200);
}


/* ── NAV ─────────────────────────────────────────── */
function buildNav(m) {
  document.getElementById('nav-operator').textContent  = m.name.toUpperCase();
  document.getElementById('nav-title').textContent     = m.operator_label;
  document.getElementById('nav-location').textContent  = m.location;
  // Clock
  const clockEl = document.getElementById('nav-clock');
  function tick() { const n = new Date(), p = v => String(v).padStart(2,'0'); clockEl.textContent = p(n.getHours())+':'+p(n.getMinutes())+':'+p(n.getSeconds()); }
  tick(); setInterval(tick, 1000);
}


/* ── HERO ────────────────────────────────────────── */
function buildHero(m, statusBar, desc, instruments) {
  // Status bar dots
  const sbEl = document.getElementById('hero-status-bar');
  sbEl.innerHTML = statusBar.map(s => `
    <div class="hsb-item">
      <span class="dot ${s.dot}"></span>
      <span>${s.label} :</span>
      <span class="hsb-val">${s.value}</span>
    </div>`).join('');

  // Name
  document.querySelector('.hero-name .line1').setAttribute('data-t', m.name.split(' ')[0]);
  document.querySelector('.hero-name .line1').textContent = m.name.split(' ')[0];
  document.querySelector('.hero-name .line2').textContent = m.name.split(' ')[1];

  // Description
  document.getElementById('hero-desc').innerHTML = desc;

  // Availability
  document.getElementById('avail-text').textContent = m.availability;

  // CTAs & contacts
  document.getElementById('btn-contact').href  = '#contact';
  document.getElementById('btn-github').href   = m.github;
  document.getElementById('btn-linkedin').href = m.linkedin;
  document.getElementById('contact-email').href        = `mailto:${m.email}`;
  document.getElementById('contact-email').textContent = `✉ ${m.email}`;
  document.getElementById('contact-phone').href        = `tel:${m.phone.replace(/\s/g,'')}`;
  document.getElementById('contact-phone').textContent = `◈ ${m.phone}`;

  // Instruments
  const panel = document.getElementById('instrument-panel');
  panel.innerHTML = instruments.map(ins => {
    const barStyle = ins.bar_color ? `background:${ins.bar_color};box-shadow:0 0 6px ${ins.bar_color}` : '';
    return `
      <div class="instr-card">
        <div class="instr-label">${ins.label}</div>
        <div class="instr-value">${ins.value}</div>
        <div class="instr-sub">${ins.sub}</div>
        <div class="instr-bar">
          <div class="instr-bar-fill" data-w="${ins.bar_pct}" style="${barStyle}"></div>
        </div>
      </div>`;
  }).join('');
}

function animateInstrumentBars() {
  document.querySelectorAll('.instr-bar-fill').forEach(b => {
    setTimeout(() => { b.style.width = b.dataset.w + '%'; }, 300);
  });
}


/* ── STACK ───────────────────────────────────────── */
function buildStack(stack) {
  const el = document.getElementById('stack-grid');
  el.innerHTML = stack.map(s => {
    const bars = Array.from({ length: 5 }, (_, i) => {
      const active = i < s.signal;
      return `<div class="sig-bar${active ? '' : ' off'}" style="height:${(i+1)*2.5}px;background:${active ? s.color : s.color}"></div>`;
    }).join('');
    return `
      <div class="stack-chip" style="--chip-color:${s.color}">
        ${s.name}<span class="sig">${bars}</span>
      </div>`;
  }).join('');
}


/* ── EXPERIENCE ──────────────────────────────────── */
function buildExperience(experience) {
  const el = document.getElementById('mission-list');
  el.innerHTML = experience.map((e, i) => {
    const typeBadge = e.type === 'CDI' ? 'mc-type-cdi' : 'mc-type-stage';
    const durUnit   = parseInt(e.duration) > 1 ? 'mois' : 'an';
    const durH      = Math.min(parseInt(e.duration) * 8, 100);
    const links     = e.links.map(l => `<a href="${l.url}" target="_blank" class="mc-link">↗ ${l.label}</a>`).join('');
    const norms     = e.norms.map(n => `<span class="norm-badge">${n}</span>`).join('');
    return `
      <div class="mission-card ${e.card_class}" style="transition-delay:${i*.15}s">
        <div class="mc-stripe" style="background:${e.stripe_color}"></div>
        <div class="mc-inner">
          <div>
            <div class="mc-mission-id">${e.id} · ${e.icon} ${e.type.toUpperCase()} · ${e.location.toUpperCase()}</div>
            <div class="mc-role">${e.role}</div>
            <div class="mc-company">${e.company_html}</div>
            <p class="mc-desc">${e.description}</p>
            <ul class="mc-resp">${e.responsibilities.map(r => `<li>${r}</li>`).join('')}</ul>
            <div class="mc-norms">${norms}</div>
            <div class="mc-tags">${e.techs.map(t => `<span class="mc-tag">${t}</span>`).join('')}</div>
            ${links}
          </div>
          <div class="mc-duration">
            <div class="mc-dur-val" style="color:${e.stripe_color}">${e.duration}</div>
            <div class="mc-dur-unit">${durUnit}</div>
            <div class="mc-dur-bar">
              <div class="mc-dur-fill" data-h="${durH}%" style="background:${e.stripe_color};box-shadow:0 0 8px ${e.stripe_color}"></div>
            </div>
          </div>
          <div style="position:absolute;top:16px;right:20px;display:flex;flex-direction:column;align-items:flex-end;gap:6px">
            <span class="mc-type ${typeBadge}">${e.type}</span>
            <span class="mc-period">${e.period}</span>
          </div>
        </div>
      </div>`;
  }).join('');
}


/* ── PROJECTS ────────────────────────────────────── */
function buildProjects(projects) {
  const el = document.getElementById('projects-grid');
  el.innerHTML = projects.map((p, i) => {
    const statusClass = p.status === 'done' ? 'ps-done' : 'ps-ongoing';
    const statusLabel = p.status === 'done' ? 'TERMINÉ' : 'EN COURS';
    const link = p.link ? `<div style="margin-top:12px"><a href="${p.link.url}" target="_blank" class="mc-link">↗ ${p.link.label}</a></div>` : '';
    return `
      <div class="proj-card ${p.card_class}" style="transition-delay:${i*.12}s">
        <div class="proj-id">
          ${p.id} · ${p.partner} · ${p.context}
          <span class="proj-status ${statusClass}">${statusLabel}</span>
        </div>
        <span class="proj-icon">${p.icon}</span>
        <div class="proj-title">${p.title}</div>
        <div class="proj-partner">${p.partner} · ${p.context} · ${p.year}</div>
        <p class="proj-desc">${p.description}</p>
        <ul class="proj-resp">${p.highlights.map(h => `<li>${h}</li>`).join('')}</ul>
        <div class="proj-techs">${p.techs.map(t => `<span class="proj-tech">${t}</span>`).join('')}</div>
        ${link}
      </div>`;
  }).join('');

  // Apply 3D tilt to each card after render
  document.querySelectorAll('.proj-card').forEach(applyTilt);
}


/* ── SKILLS ──────────────────────────────────────── */
function buildSkills(skills) {
  // Language bars
  const barsEl = document.getElementById('skill-bars');
  barsEl.innerHTML = skills.languages.map(s => `
    <div class="skill-bar">
      <div class="sb-head">
        <span class="sb-name">${s.name}</span>
        <span class="sb-val">${s.level}%</span>
      </div>
      <div class="sb-track">
        <div class="sb-fill ${s.bar_class}" data-v="${s.level}" style="width:0%">
          <div class="sb-dot"></div>
        </div>
      </div>
    </div>`).join('');

  // Tools
  document.getElementById('tools-wrap').innerHTML =
    skills.tools.map(t => `<span class="tool">${t}</span>`).join('');

  // Methods
  document.getElementById('methods-wrap').innerHTML =
    skills.methods.map(m => `<span class="tool tool-method">${m}</span>`).join('');

  // Radar
  drawRadar(skills.radar);

  // Observe skills section for bar animation
  const skillObs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      document.querySelectorAll('.sb-fill').forEach(b => {
        setTimeout(() => {
          b.style.width = b.dataset.v + '%';
          setTimeout(() => b.classList.add('done'), 1600);
        }, 200);
      });
      skillObs.unobserve(entries[0].target);
    }
  }, { threshold: .2 });
  const sk = document.getElementById('skills');
  if (sk) skillObs.observe(sk);
}


/* ── RADAR CHART ─────────────────────────────────── */
function drawRadar(data) {
  const canvas = document.getElementById('radar-canvas');
  const ctx    = canvas.getContext('2d');
  const W = 340, H = 340, cx = 170, cy = 170, R = 130, N = data.length;
  let sweep = 0;

  (function frame() {
    ctx.clearRect(0, 0, W, H);

    // Rings
    [.2, .4, .6, .8, 1].forEach(r => {
      ctx.beginPath();
      ctx.strokeStyle = `rgba(0,229,255,${r * .08 + .04})`;
      ctx.lineWidth = 1;
      data.forEach((_, i) => {
        const a = i / N * Math.PI * 2 - Math.PI / 2;
        const x = cx + Math.cos(a) * R * r, y = cy + Math.sin(a) * R * r;
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      });
      ctx.closePath(); ctx.stroke();
    });

    // Axes
    data.forEach((_, i) => {
      const a = i / N * Math.PI * 2 - Math.PI / 2;
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(0,229,255,.15)'; ctx.lineWidth = 1;
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + Math.cos(a) * R, cy + Math.sin(a) * R);
      ctx.stroke();
    });

    // Sweep
    sweep += .005;
    ctx.save(); ctx.translate(cx, cy); ctx.rotate(sweep);
    const sg = ctx.createLinearGradient(0, 0, R, 0);
    sg.addColorStop(0, 'rgba(0,229,255,0)'); sg.addColorStop(1, 'rgba(0,229,255,.25)');
    ctx.fillStyle = sg; ctx.beginPath(); ctx.moveTo(0, 0);
    ctx.arc(0, 0, R, -.3, .01); ctx.closePath(); ctx.fill();
    ctx.restore();

    // Data fill
    ctx.beginPath();
    data.forEach((d, i) => {
      const a = i / N * Math.PI * 2 - Math.PI / 2;
      const x = cx + Math.cos(a) * d.value * R, y = cy + Math.sin(a) * d.value * R;
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.closePath();
    ctx.fillStyle = 'rgba(0,229,255,.08)'; ctx.fill();
    ctx.strokeStyle = 'rgba(0,229,255,.7)'; ctx.lineWidth = 1.5; ctx.stroke();

    // Points
    data.forEach((d, i) => {
      const a = i / N * Math.PI * 2 - Math.PI / 2;
      const x = cx + Math.cos(a) * d.value * R, y = cy + Math.sin(a) * d.value * R;
      ctx.beginPath(); ctx.arc(x, y, 3, 0, Math.PI * 2);
      ctx.fillStyle = '#00E5FF'; ctx.shadowColor = '#00E5FF'; ctx.shadowBlur = 8;
      ctx.fill(); ctx.shadowBlur = 0;
    });

    // Labels
    ctx.font = '10px Share Tech Mono'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    data.forEach((d, i) => {
      const a = i / N * Math.PI * 2 - Math.PI / 2;
      ctx.fillStyle = 'rgba(0,229,255,.6)';
      ctx.fillText(d.axis, cx + Math.cos(a) * (R + 22), cy + Math.sin(a) * (R + 22));
    });

    requestAnimationFrame(frame);
  })();
}


/* ── EDUCATION ───────────────────────────────────── */
function buildEducation(education, certs, interests) {
  // Degrees
  const eduEl = document.getElementById('edu-grid');
  eduEl.innerHTML = education.map((e, i) => `
    <div class="edu-card" style="transition-delay:${i*.15}s">
      <div class="edu-yr">${e.year}</div>
      <div class="edu-deg">${e.degree}</div>
      <div class="edu-field">${e.field}</div>
      <div class="edu-school">${e.school}</div>
    </div>`).join('');

  // Certs
  document.getElementById('certs-row').innerHTML = certs.map(c => `
    <div class="cert">
      <span class="cert-ico">${c.icon}</span>
      <div>
        <div class="cert-name">${c.name}</div>
        <div class="cert-detail">${c.detail}</div>
      </div>
    </div>`).join('');

  // Interests
  document.getElementById('int-row').innerHTML =
    interests.map(i => `<div class="int-tag">${i}</div>`).join('');
}


/* ── CONTACT ─────────────────────────────────────── */
function buildContact(m) {
  document.getElementById('contact-sub').textContent = m.contact_intro + '\n\n' + m.availability_detail;
  const items = [
    { icon: '✉', label: 'Email principal', text: m.email,    href: `mailto:${m.email}` },
    { icon: '◈', label: 'Téléphone',       text: m.phone,    href: `tel:${m.phone.replace(/\s/g,'')}` },
    { icon: '◉', label: 'LinkedIn',        text: m.linkedin.replace('https://www.linkedin.com/in/',''), href: m.linkedin, target: true },
    { icon: '⌥', label: 'GitHub',          text: m.github.replace('https://',''), href: m.github, target: true },
    { icon: '◎', label: 'Localisation',    text: m.location, href: null },
  ];
  document.getElementById('c-items').innerHTML = items.map(it => {
    const tag  = it.href ? 'a' : 'div';
    const href = it.href ? `href="${it.href}"` : '';
    const tgt  = it.target ? 'target="_blank"' : '';
    return `
      <${tag} class="c-item" ${href} ${tgt}>
        <span class="c-icon">${it.icon}</span>
        <div><span class="c-lbl">${it.label}</span>${it.text}</div>
      </${tag}>`;
  }).join('');
}


/* ── FOOTER ──────────────────────────────────────── */
function buildFooter(m) {
  document.getElementById('foot-ver').textContent      = `SYS_VER : ${m.sys_version} · CLEARANCE : ${m.clearance}`;
  document.getElementById('foot-name').textContent     = m.name.toUpperCase() + ' · ';
  document.getElementById('foot-title').textContent    = m.operator_label;
  document.getElementById('foot-location').textContent = m.location.toUpperCase();
}


/* ══════════════════════════════════════════════════
   EFFECTS — cursor, particles, typewriter, observers
══════════════════════════════════════════════════ */
function initEffects(phrases) {
  initCursor();
  initParticles();
  initTypewriter(phrases);
  initScrollProgress();
  initObservers();
  initButtonSpotlight();
  initClickRipple();
}


/* ── CURSOR ──────────────────────────────────────── */
function initCursor() {
  const xh  = document.getElementById('xhair');
  const svg = xh.querySelector('svg');
  const xy  = document.getElementById('xy-coords');

  document.addEventListener('mousemove', e => {
    xh.style.left = (e.clientX - 16) + 'px';
    xh.style.top  = (e.clientY - 16) + 'px';
    xy.textContent = `X:${String(e.clientX).padStart(4,'0')} Y:${String(e.clientY).padStart(4,'0')}`;
    const aura = document.getElementById('aura');
    if (aura) { aura.style.left = e.clientX + 'px'; aura.style.top = e.clientY + 'px'; }
  });

  document.querySelectorAll('a, button, .btn, .stack-chip, .tool, .int-tag, .instr-card, .proj-card, .cert, .mission-card, .edu-card').forEach(el => {
    el.addEventListener('mouseenter', () => { svg.style.transform = 'scale(1.6)'; svg.style.opacity = '.4'; });
    el.addEventListener('mouseleave', () => { svg.style.transform = 'scale(1)';   svg.style.opacity = '1'; });
  });
}


/* ── PARTICLES ───────────────────────────────────── */
function initParticles() {
  const c   = document.getElementById('hero-canvas');
  const ctx = c.getContext('2d');
  const resize = () => { c.width = c.offsetWidth; c.height = c.offsetHeight; };
  resize();
  window.addEventListener('resize', resize);

  const pts = Array.from({ length: 60 }, () => ({
    x: Math.random() * c.width, y: Math.random() * c.height,
    vx: (Math.random() - .5) * .25, vy: (Math.random() - .5) * .25,
    r: Math.random() + .3, a: Math.random() * .3 + .05,
  }));

  (function frame() {
    ctx.clearRect(0, 0, c.width, c.height);
    pts.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > c.width)  p.vx *= -1;
      if (p.y < 0 || p.y > c.height) p.vy *= -1;
      ctx.save(); ctx.globalAlpha = p.a; ctx.fillStyle = '#00E5FF';
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill(); ctx.restore();
    });
    pts.forEach((a, i) => pts.forEach((b, j) => {
      if (j <= i) return;
      const d = Math.hypot(a.x - b.x, a.y - b.y);
      if (d < 120) {
        ctx.save(); ctx.globalAlpha = (1 - d / 120) * .04;
        ctx.strokeStyle = '#00E5FF'; ctx.lineWidth = .5;
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); ctx.restore();
      }
    }));
    requestAnimationFrame(frame);
  })();
}


/* ── TYPEWRITER ──────────────────────────────────── */
function initTypewriter(phrases) {
  const el = document.getElementById('tw-text');
  let pi = 0, ci = 0, del = false, w = 0;
  function tick() {
    if (w-- > 0) { setTimeout(tick, 50); return; }
    const ph = phrases[pi];
    if (!del) {
      el.textContent = ph.slice(0, ++ci);
      if (ci === ph.length) { del = true; w = 38; }
      setTimeout(tick, 60);
    } else {
      el.textContent = ph.slice(0, --ci);
      if (ci === 0) { del = false; pi = (pi + 1) % phrases.length; w = 12; }
      setTimeout(tick, 30);
    }
  }
  setTimeout(tick, 2400);
}


/* ── SCROLL PROGRESS ─────────────────────────────── */
function initScrollProgress() {
  const prog = document.getElementById('prog');
  const nav  = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    prog.style.transform = `scaleX(${pct})`;
    nav.style.borderBottomColor = window.scrollY > 20 ? 'rgba(0,229,255,.25)' : 'rgba(0,229,255,.15)';
  }, { passive: true });
}


/* ── INTERSECTION OBSERVERS ──────────────────────── */
function initObservers() {
  // Reveal cards
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        // Mission duration bars
        const fill = e.target.querySelector('.mc-dur-fill');
        if (fill) setTimeout(() => { fill.style.height = fill.dataset.h || '80%'; }, 300);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: .1 });

  document.querySelectorAll('.mission-card, .proj-card, .edu-card').forEach(el => obs.observe(el));
}


/* ── 3D TILT ─────────────────────────────────────── */
function applyTilt(card) {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width  - .5;
    const y = (e.clientY - r.top)  / r.height - .5;
    card.style.transform = `perspective(700px) rotateY(${x*8}deg) rotateX(${-y*8}deg) translateY(-4px)`;
    card.style.setProperty('--mx', ((e.clientX - r.left) / r.width  * 100) + '%');
    card.style.setProperty('--my', ((e.clientY - r.top)  / r.height * 100) + '%');
  });
  card.addEventListener('mouseleave', () => {
    card.style.transition = 'transform .5s ease, border-color .3s, box-shadow .3s';
    card.style.transform  = '';
  });
  card.addEventListener('mouseenter', () => {
    card.style.transition = 'border-color .3s, box-shadow .3s';
  });
}


/* ── BUTTON SPOTLIGHT ────────────────────────────── */
function initButtonSpotlight() {
  document.querySelectorAll('.btn').forEach(b => {
    b.addEventListener('mousemove', e => {
      const r = b.getBoundingClientRect();
      b.style.setProperty('--mx', ((e.clientX - r.left) / r.width  * 100) + '%');
      b.style.setProperty('--my', ((e.clientY - r.top)  / r.height * 100) + '%');
    });
  });
}


/* ── CLICK RIPPLE ────────────────────────────────── */
function initClickRipple() {
  const style = document.createElement('style');
  style.textContent = '@keyframes cr { to { width:60px; height:60px; opacity:0; } }';
  document.head.appendChild(style);

  document.addEventListener('click', e => {
    const r = document.createElement('div');
    r.style.cssText = `position:fixed;pointer-events:none;z-index:9997;border-radius:50%;
      left:${e.clientX}px;top:${e.clientY}px;transform:translate(-50%,-50%);
      border:1px solid var(--cyan);animation:cr .5s ease-out forwards;width:0;height:0`;
    document.body.appendChild(r);
    setTimeout(() => r.remove(), 600);
  });
}
