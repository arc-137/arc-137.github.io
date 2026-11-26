// ArcRes opens the same help pages with ?edition=res: they're named ArcRes, and the guide leaves out
// the commercial and pro parts while Pro tools are off (ArcRes's start; ?pro=on or ?pro=off says when the
// person switched them in Preferences, in ArcRes or in Arc).
import { RES_HIDDEN_SECTIONS } from './routes.js';

(function () {
  const edRes = /[?&]edition=res\b/.test(location.search);
  const pro = (/[?&]pro=(on|off)\b/.exec(location.search) || [])[1];
  const proOff = pro ? pro === 'off' : edRes;
  let ed = (/[?&]edition=(res|hobby|eng)\b/.exec(location.search) || [])[1] || 'full';
  // (What "not in ArcRes" marks follows Pro tools.)
  if (ed === 'full' && proOff) ed = 'res';
  else if (ed === 'res' && !proOff) ed = 'full';
  document.querySelectorAll('[data-not], [data-only]').forEach((e) => {
    const not = (e.getAttribute('data-not') || '').split(' ');
    const only = e.getAttribute('data-only');
    e.hidden = not.includes(ed) || (only != null && !only.split(' ').includes(ed));
  });
  // Arc Hobby and Arc Engineering: the same, under their own names; the guide gets their own chapters.
  const maker = /[?&]edition=(hobby|eng|land)\b/.exec(location.search);
  if (maker) {
    const name = maker[1] === 'hobby' ? 'Arc Hobby' : maker[1] === 'land' ? 'Arc Landscape' : 'Arc Engineering';
    const swap = (s) => s.replace(/\bArc\b/g, name);
    document.title = swap(document.title);
    document.querySelectorAll('h1, .back-to-arc').forEach((e) => {
      e.textContent = swap(e.textContent);
      if (e.getAttribute('aria-label')) e.setAttribute('aria-label', swap(e.getAttribute('aria-label')));
    });
    if (document.querySelector('nav.toc')) {
      for (const src of [`guide-${maker[1]}.js`, 'guide-edition.js']) {
        const s = document.createElement('script');
        s.src = src;
        s.async = false;
        document.body.append(s);
      }
    }
    return;
  }
  if (edRes) {
    const swap = (s) => s.replace(/\bArc\b(?!Res)/g, 'ArcRes');
    document.title = swap(document.title);
    document.querySelectorAll('h1, .back-to-arc').forEach((e) => {
      e.textContent = swap(e.textContent);
      if (e.getAttribute('aria-label')) e.setAttribute('aria-label', swap(e.getAttribute('aria-label')));
    });
  }
  if (!proOff) return;
  // A heading and everything after it, up to the next heading of the same size or bigger.
  const level = (e) => { const m = /^H(\d)$/.exec(e.tagName); return m ? Number(m[1]) : 99; };
  const section = (id, show) => {
    const el = document.getElementById(id);
    if (!el) return;
    const L = level(el);
    let n = el;
    do { n.hidden = !show; n = n.nextElementSibling; } while (n && level(n) > L);
  };
  // What ArcRes doesn't have, section by section (routes.js: the same list keeps them out of its search).
  for (const id of RES_HIDDEN_SECTIONS) section(id, false);
  // Part 7 began as the commercial part, and most of what's in it now is for every plan (sheets, trades, budgets,
  // renovations, the timeline), so it stays with a name that fits, without its opening about commercial projects.
  const part7 = document.getElementById('commercial');
  if (part7) {
    const title = '7. Drawings, trades, budgets and renovations';
    part7.textContent = title;
    const link = document.querySelector('nav a[href="#commercial"]');
    if (link) link.textContent = title;
    for (let n = part7.nextElementSibling; n && level(n) === 99; n = n.nextElementSibling) n.hidden = true;
  }
  // ArcRes's own names for some menu items (app.js relabels them in the menus too).
  const NAMES = [
    ['Takeoff & cost estimate', 'Cost estimate'],
    ['Save the takeoff as a spreadsheet', 'Save the estimate as a spreadsheet'],
    ['Phase schedule', 'Project timeline'],
    ['Plumbing: fixtures, pipes & water heater', 'Plumbing summary'],
    ['Heating & cooling: loads & ducts', 'Heating & cooling'],
    ['Framing: structure & hardware', 'Structure & lumber'],
    ['Markups & RFIs', 'Notes & questions'],
    ['takeoff & cost estimate', 'cost estimate'],
    ['phase schedule', 'project timeline'],
    // The Designer set (edition.js menuText): the pro tools ArcRes has too, under its names.
    ['Permit-set check', 'Permit drawings check'],
    ['Selections & allowances', 'Finishes & allowances'],
    ['Reflected ceiling plan', 'Ceiling plan (lights & heights)'],
    ['Put these in the takeoff and quote', 'Put it in my cost estimate'],
    ['client approval', 'homeowner approval'],
  ];
  // (Finishes & allowances: its change-order button goes with Arc's quotes, which ArcRes doesn't have.)
  const sel = document.getElementById('selections')?.nextElementSibling;
  const toCo = sel && [...sel.querySelectorAll('b')].find((b) => /change order/.test(b.textContent));
  if (toCo) {
    if (toCo.nextSibling && toCo.nextSibling.nodeType === 3) toCo.nextSibling.remove();
    if (toCo.previousSibling && toCo.previousSibling.nodeType === 3) toCo.previousSibling.nodeValue = toCo.previousSibling.nodeValue.replace(/\s+$/, '');
    toCo.remove();
  }
  const walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  for (let t = walk.nextNode(); t; t = walk.nextNode()) {
    let s = t.nodeValue;
    for (const [a, b] of NAMES) if (s.includes(a)) s = s.split(a).join(b);
    if (s !== t.nodeValue) t.nodeValue = s;
  }
  document.querySelectorAll('nav a[href^="#"]').forEach((a) => {
    const t = document.getElementById(a.getAttribute('href').slice(1));
    if (t && t.hidden) a.closest('li').hidden = true;
  });
})();
