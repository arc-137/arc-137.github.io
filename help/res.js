// ArcRes opens the same help pages with ?edition=res: they're named ArcRes, and the guide leaves out
// the commercial and pro parts (ArcRes doesn't have those tools).
(function () {
  const ed = (/[?&]edition=(res|hobby|eng)\b/.exec(location.search) || [])[1] || 'full';
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
  // What ArcRes doesn't have, section by section (help.js RES_HIDDEN_TOPICS leaves the same ones out of search).
  for (const id of ['house-commercial', 'tutorial', 'life-safety', 'rcp', 'codes', 'schedules', 'permit', 'pdf-takeoff', 'electrical', 'cut-lists', 'margin', 'price-books', 'quote', 'change-orders', 'selections']) section(id, false);
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
    ['Save the takeoff as a spreadsheet', 'Save the estimate as a spreadsheet'],
    // Part 9, the Guggenheim lesson, isn't in ArcRes's guide.
    ["then a step-by-step lesson that builds a commercial building: Frank Lloyd Wright's Guggenheim Museum.", 'then step-by-step lessons.'],
    ['; Part 9 is a longer lesson on a commercial building', ''],
    ['The main screen, with the Guggenheim from the lesson open.', 'The main screen.'],
    ['The pictures here are from a tour of the finished Guggenheim.', 'The pictures here are from a tour of a finished plan.'],
    ["The Guggenheim's three saved views", 'Three saved views'],
    ["The Guggenheim's X-ray stop", 'An X-ray stop'],
    ['the Guggenheim tour, stop by stop', 'a museum tour, stop by stop'],
    // Exports ArcRes doesn't have.
    ['DXF, DWG)', 'DXF)'],
    ['Collada for SketchUp, IFC for BIM, 3D printing', 'Collada for SketchUp, 3D printing'],
    ['the DXF, DWG, IFC and STL exports', 'the DXF and STL exports'],
    [', and the IFC export has one building each', ''],
  ];
  // (DWG export: the sentences about it, and the converter it needs.)
  const cad = document.getElementById('to-autocad')?.nextElementSibling;
  if (cad) {
    const at = [...cad.childNodes].findIndex((c) => c.textContent.includes('DWG'));
    if (at > 0) {
      const kids = [...cad.childNodes];
      const start = kids[at - 2];
      if (start && start.textContent.includes('Export')) for (const c of kids.slice(at - 2)) c.remove();
    }
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
