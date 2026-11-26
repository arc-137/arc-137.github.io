// Arc Hobby's and Arc Engineering's guide: the same page as Arc's (user-guide.html, loaded by res.js with
// the edition's own chapters from guide-hobby.js or guide-eng.js), rebuilt when it opens. The chapters
// replace the cover and the contents, and take the parts they share with Arc out of Arc's text
// (<div data-from="print-object print-workspace">), so those stay the same in every edition. The rest of
// Arc's guide stays on the page, hidden: a "?" button or a link to it still opens just that part.
(function () {
  const G = window.ARC_GUIDE;
  const wrap = document.querySelector('.wrap');
  if (!G || !wrap) return;

  const style = document.createElement('style');
  style.textContent = `
    details.fold { margin: 56px 0 8px; padding-top: 8px; border-top: 1px solid var(--line); }
    details.fold > summary { font-size: 1.6rem; font-weight: 700; cursor: pointer; }
    details.fold > p:first-of-type { margin-top: 8px; }
  `;
  document.head.append(style);

  // A heading and everything after it, up to the next heading of the same size or bigger.
  const level = (e) => { const m = /^H(\d)$/.exec(e.tagName); return m ? Number(m[1]) : 99; };
  const sectionOf = (el) => {
    const L = level(el);
    const nodes = [];
    let n = el;
    do { nodes.push(n); n = n.nextElementSibling; } while (n && level(n) > L);
    return nodes;
  };

  // Arc's name in the text taken from Arc's guide (the chapters are written with the edition's own).
  const rename = (node) => {
    const walk = document.createTreeWalker(node, NodeFilter.SHOW_TEXT);
    for (let t = walk.nextNode(); t; t = walk.nextNode()) t.nodeValue = t.nodeValue.replace(/\bArc\b(?!Res)/g, G.name);
  };

  const box = document.createElement('div');
  box.innerHTML = G.html;
  for (const slot of [...box.querySelectorAll('[data-from]')]) {
    for (const id of slot.dataset.from.trim().split(/\s+/)) {
      const el = wrap.querySelector(`#${id}`);
      if (!el) { console.warn(`The guide has no "${id}" to show here.`); continue; }
      for (const n of sectionOf(el)) { rename(n); slot.before(n); }
    }
    slot.remove();
  }

  // What's left of Arc's guide. An id the chapters use themselves ("lessons", "reference") is theirs.
  const rest = document.createElement('div');
  rest.id = 'from-arc';
  rest.hidden = true;
  const cover = wrap.querySelector('header.cover');
  const toc = wrap.querySelector('nav.toc');
  for (const n of [...wrap.children]) if (n !== cover && n !== toc) rest.append(n);
  for (const n of rest.querySelectorAll('[id]')) if (box.querySelector(`[id="${n.id}"]`)) n.removeAttribute('id');
  for (const n of rest.children) n.hidden = true;
  wrap.append(box, rest);

  document.title = `${G.name} User Guide`;
  cover.querySelector('h1').textContent = `${G.name} User Guide`;
  cover.querySelector('p').textContent = G.lead;
  const list = toc.querySelector('ol');
  list.textContent = '';
  for (const head of box.querySelectorAll('h2.part, details.fold')) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = `#${head.id}`;
    a.textContent = (head.matches('details') ? head.querySelector('summary') : head).textContent.replace(/^\d+\.\s*/, '');
    li.append(a);
    list.append(li);
  }

  // Goes to a part: out of its fold, or out of the hidden rest of Arc's guide (with its heading).
  const go = (id) => {
    const el = id && document.getElementById(id);
    if (!el) return;
    if (rest.contains(el)) {
      rest.hidden = false;
      let head = el;
      while (level(head) === 99 && head.previousElementSibling && head.parentElement === rest) head = head.previousElementSibling;
      rename(head.parentElement === rest ? head : el);
      for (const n of sectionOf(head.parentElement === rest ? head : el)) { rename(n); n.hidden = false; }
    }
    for (let p = el.parentElement; p; p = p.parentElement) if (p.tagName === 'DETAILS') p.open = true;
    el.scrollIntoView();
  };
  const fromHash = () => { let id = location.hash.slice(1); try { id = decodeURIComponent(id); } catch { /* it isn't one of ours */ } go(id); };
  window.addEventListener('hashchange', fromHash);
  document.addEventListener('click', (e) => {
    const a = e.target.closest && e.target.closest('a[href^="#"]');
    if (a) go(a.getAttribute('href').slice(1));
  });
  fromHash();

  // The chapters' pictures open big like the others, and a printed guide has its folds open.
  const zoom = document.getElementById('zoom');
  box.querySelectorAll('figure img').forEach((img) => img.addEventListener('click', () => { const big = zoom.querySelector('img'); big.src = img.src; big.alt = img.alt; zoom.classList.add('on'); }));
  window.addEventListener('beforeprint', () => { box.querySelectorAll('details').forEach((d) => { d.open = true; }); });
})();
