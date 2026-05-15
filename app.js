const data = window.TRIP_DATA;
const money = n => `${n < 0 ? '-' : ''}$${Math.abs(n)}`;
const cls = n => n > 0 ? 'pos' : n < 0 ? 'neg' : '';
function scrollToId(id){ document.getElementById(id)?.scrollIntoView({behavior:'smooth', block:'start'}); }

function renderHero(){
  const leader = [...data.players].sort((a,b)=>b.balance-a.balance)[0];
  document.getElementById('heroLeader').textContent = `${leader.name} ${money(leader.balance)}`;
  document.getElementById('heroMeta').textContent = `${leader.record} weekend record · ${leader.note}`;
  const pot = data.players.reduce((sum,p)=>sum+Math.abs(p.balance),0) + 160;
  document.getElementById('totalPot').textContent = money(pot);
  const live = data.rounds.find(r=>r.id === data.trip.liveRoundId) || data.rounds[0];
  document.getElementById('liveRoundName').textContent = live.course;
  document.getElementById('liveRoundStatus').textContent = live.status === 'Live' ? `Hole ${live.hole} · ${live.format}` : `${live.status} · ${live.format}`;
  document.getElementById('betCount').textContent = `${data.bets.length} entries`;
}

function renderPlayers(){
  const el = document.getElementById('players');
  el.innerHTML = [...data.players].sort((a,b)=>b.balance-a.balance).map((p,i)=>`
    <div class="player">
      <div class="rank">${i+1}</div>
      <div><div class="player-name">${p.name}</div><small>Index ${p.index} · ${p.record} · ${p.note}</small></div>
      <div class="balance ${cls(p.balance)}">${money(p.balance)}</div>
    </div>`).join('');
}

function renderFeed(){
  document.getElementById('betFeed').innerHTML = data.bets.map(b=>`
    <div class="feed-item"><div class="feed-time">${b.time}</div><div><b>${b.type}</b><p>${b.text}</p></div></div>
  `).join('');
}

function renderMatches(){
  const live = data.rounds.find(r=>r.id === data.trip.liveRoundId) || data.rounds[0];
  document.getElementById('matches').innerHTML = live.matches.map(m=>`
    <article class="match">
      <div class="match-head">
        <div><div class="teams">${m.teamA.join(' / ')}</div><div class="muted">vs ${m.teamB.join(' / ')}</div></div>
        <div class="match-money">${m.money ? '+' + money(m.money) : '$0'}</div>
      </div>
      <div class="match-lines"><div><span>Front</span><b>${m.front}</b></div><div><span>Back</span><b>${m.back}</b></div><div><span>Total</span><b>${m.total}</b></div></div>
      <div class="holes">${m.holes.map((h,i)=>`<div class="hole ${h==='W'?'win':''} ${h==='L'?'loss':''}"><strong>${i+1}</strong>${h}</div>`).join('')}</div>
    </article>
  `).join('');
}

function renderRounds(){
  document.getElementById('roundCards').innerHTML = data.rounds.map(r=>`
    <article class="round-card">
      <div class="num">R${r.number}</div>
      <h3>${r.course}</h3>
      <p class="muted">${r.format}</p>
      <span class="status ${r.status === 'Live' ? 'live' : ''}">${r.status}${r.hole ? ` · Hole ${r.hole}` : ''}</span>
    </article>
  `).join('');
}

function renderToday(){
  const live = data.rounds.find(r=>r.id === data.trip.liveRoundId) || data.rounds[0];
  document.getElementById('todayCourse').textContent = `${live.course} · Round ${live.number}`;
  document.getElementById('todayStatus').textContent = live.status === 'Live'
    ? `Hole ${live.hole} · ${live.format}`
    : `${live.status} · ${live.format}`;

  const matchSummary = live.matches.map(m => `
    <article class="today-card">
      <span class="today-label">${m.teamA.join(' / ')} vs ${m.teamB.join(' / ')}</span>
      <strong>${m.total}</strong>
      <small>Front: ${m.front} · Back: ${m.back}</small>
    </article>
  `).join('');
  document.getElementById('todayCards').innerHTML = matchSummary || '<article class="today-card"><strong>No live matches yet</strong><small>Waiting for the first tee ball and first bad decision.</small></article>';

  const first = live.matches[0];
  document.getElementById('stickyRound').textContent = `${live.course}${live.hole ? ` · H${live.hole}` : ''}`;
  document.getElementById('stickyMatch').textContent = first ? `${first.teamA.join('/')} ${first.total}` : 'No live match loaded';
}

function renderScorecards(){
  const el = document.getElementById('scorecardsGrid');
  if (!el) return;
  el.innerHTML = data.scorecards.map(card => {
    const hasFile = !!card.file;
    return `
      <article class="scorecard-card ${hasFile ? 'has-card' : ''}">
        <div class="scorecard-top">
          <span class="scorecard-status">${card.status}</span>
          <span>${card.round}</span>
        </div>
        <h3>${card.course}</h3>
        <p>${card.note}</p>
        ${hasFile
          ? `<a class="scorecard-button" href="${card.file}" target="_blank" rel="noopener">View scorecard</a>`
          : `<button class="scorecard-button disabled" type="button" disabled>Awaiting card</button>`}
        ${card.receivedFrom ? `<small>Received from ${card.receivedFrom} · ${card.receivedAt || ''}</small>` : `<small>Send scorecard image in iMessage or Discord and I’ll attach it here.</small>`}
      </article>
    `;
  }).join('');
}

function renderSettlement(){
  document.getElementById('settlement').innerHTML = data.settlement.map((s,i)=>`
    <div class="settle-row ${i===0 ? 'danger-row' : ''}"><span><b>${s.from}</b> pays <b>${s.to}</b></span><span>${money(s.amount)}</span></div>
  `).join('');
}

function renderRules(){
  document.getElementById('rulesList').innerHTML = data.rules.map(r=>`<li>${r}</li>`).join('');
}

function initPremiumMotion(){
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;

  const layers = [...document.querySelectorAll('[data-parallax]')];
  const cards = [...document.querySelectorAll('.motion-card')];
  let latestY = window.scrollY;
  let raf = null;

  function update(){
    const y = latestY;
    const max = Math.max(document.body.scrollHeight - window.innerHeight, 1);
    const progress = Math.min(y / max, 1);

    layers.forEach((layer, i) => {
      const speed = Number(layer.dataset.parallax || 0.1);
      const baseRotate = Number(layer.dataset.rotate || 0);
      const drift = Math.sin(progress * Math.PI * 2 + i) * 10;
      const rotate = baseRotate + Math.sin(progress * Math.PI + i * .55) * 3.5;
      layer.style.transform = `translate3d(${drift}px, ${y * speed}px, 0) rotate(${rotate}deg) scale(1.04)`;
    });

    cards.forEach((card, i) => {
      const rect = card.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const viewportCenter = window.innerHeight / 2;
      const distance = (center - viewportCenter) / window.innerHeight;
      const tilt = Number(card.dataset.tilt || 0);
      const rotate = Math.max(Math.min(distance * tilt, 1.8), -1.8);
      const lift = Math.max(Math.min(-distance * 10, 10), -10);
      card.style.setProperty('--tilt-now', `${rotate}deg`);
      card.style.setProperty('--lift', `${lift}px`);
    });

    const hero = document.querySelector('.hero');
    if (hero) hero.style.setProperty('--shine', `${-45 + progress * 115}%`);
    raf = null;
  }

  function request(){
    latestY = window.scrollY;
    if (!raf) raf = requestAnimationFrame(update);
  }

  window.addEventListener('scroll', request, { passive: true });
  window.addEventListener('resize', request);
  request();
}

renderHero(); renderToday(); renderPlayers(); renderFeed(); renderMatches(); renderRounds(); renderScorecards(); renderSettlement(); renderRules(); initPremiumMotion();
