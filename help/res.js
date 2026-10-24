// ArcRes opens the same help pages with ?edition=res: they're named ArcRes, and the guide leaves out
// the commercial and pro parts (ArcRes doesn't have those tools).
(function () {
  if (!/[?&]edition=res\b/.test(location.search)) return;
  const swap = (s) => s.replace(/\bArc\b(?!Res)/g, 'ArcRes');
  document.title = swap(document.title);
  document.querySelectorAll('h1, .back-to-arc').forEach((e) => {
    e.textContent = swap(e.textContent);
    if (e.getAttribute('aria-label')) e.setAttribute('aria-label', swap(e.getAttribute('aria-label')));
  });
  // A heading and everything after it, up to the next heading of the same size or bigger.
  const level = (e) => { const m = /^H(\d)$/.exec(e.tagName); return m ? Number(m[1]) : 99; };
  const section = (id, show) => {
    const el = document.getElementById(id);
    if (!el) return;
    const L = level(el);
    let n = el;
    do { n.hidden = !show; n = n.nextElementSibling; } while (n && level(n) > L);
  };
  for (const id of ['house-commercial', 'commercial', 'tutorial', 'pdf-takeoff', 'price-books', 'quote', 'change-orders', 'selections', 'electrical', 'cut-lists', 'permit']) section(id, false);
  // Markups are in ArcRes, though their part of the guide is the commercial one.
  section('markups', true);
  // ArcRes's own names for some menu items (app.js relabels them in the menus too).
  const NAMES = [
    ['Markups & RFIs (questions for the builder)', 'Notes & questions for the builder'],
    ['Takeoff & cost estimate', 'Cost estimate'],
    ['Save the takeoff as a spreadsheet', 'Save the estimate as a spreadsheet'],
    ['Phase schedule', 'Project timeline'],
    ['Plumbing: fixtures, pipes & water heater', 'Plumbing summary'],
    ['Heating & cooling: loads & ducts', 'Heating & cooling'],
    ['Framing: structure & hardware', 'Structure & lumber'],
    ['Markups & RFIs', 'Notes & questions'],
    ['takeoff & cost estimate', 'cost estimate'],
    ['phase schedule', 'project timeline'],
  ];
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
