// Arc Hobby's own chapters of the user guide: guide-edition.js shows them in place of Arc's on the same page.
// <div data-from="id id"> takes those parts out of Arc's guide (user-guide.html), so shared text stays the same.
// The Hands-on lessons part is made by tools/make-guide-lessons.js. No backticks or dollar-brace in the text.
window.ARC_GUIDE = {
  name: 'Arc Hobby',
  lead: 'How to go from a drawing to the bench: wood, fasteners, the laser and 3D printing.',
  html: String.raw`
<h2 class="part" id="start">1. How to use this guide</h2>
<p>Arc Hobby takes a project from a drawing to the bench. You draw each piece at its real size, join the pieces the way you would in the shop, and Arc works out the cut list, the tools, the shopping list and a build guide to take with you. It also makes the files for a laser and a 3D printer.</p>
<p>Part 2 gets you started. Parts 3 to 7 follow the order you work in: find your way round, make the pieces, join them, finish them, and get ready for the shop. Part 8 is the laser, Part 9 is 3D printing and Part 10 is for your class. Part 11 has every hands-on lesson written out, and Part 12 has the keys and a few things worth knowing.</p>
<div class="tip"><b>Your teacher decides what you use.</b> Arc Hobby is for practice and planning. It never replaces being shown at the machine. Follow your teacher's rules in the shop, and ask first if your class hasn't been signed off on a tool.</div>
<div class="tip"><b>Typing sizes.</b> When a tool is waiting for a click, you can type a size and press <kbd>Enter</kbd>. Type inches like <code>24</code> or <code>7 1/4</code>. What you type shows in the <b>Size</b> box at the bottom right.</div>
<div class="tip"><b>Undo.</b> <kbd>Ctrl</kbd>+<kbd>Z</kbd> undoes anything. <kbd>Esc</kbd> stops the tool you're using.</div>

<h2 class="part" id="first-project">2. Your first project</h2>
<p>An empty plan asks <b>What will you make?</b> and gives you five ways in:</p>
<ul class="do">
  <li><b>Start here</b>: a key rack in about 15 minutes, step by step. This is the best first choice.</li>
  <li><b>Pick a project</b>: the templates, like the birdhouse, the box to fasten and the wall shelf.</li>
  <li><b>Make a box…</b>: type its size, and Arc lays out the boards and joints.</li>
  <li><b>Draw a board</b>: real lumber sizes, click to click.</li>
  <li><b>Open a class kit</b>: a <code>.arckit</code> file from your teacher.</li>
</ul>
<p>After the key rack, try <a href="#lesson-hobby-withme-birdhouse">Do it with me: a birdhouse</a>. You start with nothing but dashed outlines and draw every board yourself, drill the entrance hole, put in each screw, then get the cut list and what to buy.</p>
<p>Every project follows the same five steps, shown on the strip at the top of the screen:</p>
<div class="tablewrap"><table>
  <tr><th>Step</th><th>What it does when you click it</th></tr>
  <tr><td><b>Design</b></td><td>Picks <b>Board</b>, so you can draw the boards and join them.</td></tr>
  <tr><td><b>Test</b></td><td>Opens the checks: what would go wrong at the bench, and <b>Will it tip over?</b></td></tr>
  <tr><td><b>Build</b></td><td>Steps through the build in Arc, one piece at a time.</td></tr>
  <tr><td><b>Buy</b></td><td>Opens <b>Ready to build?</b>: what's left to do, and the shopping list.</td></tr>
  <tr><td><b>Make</b></td><td>Saves the build guide (a PDF) for the bench.</td></tr>
</table></div>
<p>A step turns teal when it's done, and the next one to do is purple. The small × hides the strip; <span class="ui">Shop ▾</span> → <b>Show or hide the progress strip</b> brings it back.</p>

<h2 class="part" id="screen">3. The main screen</h2>
<p>The plan is in the middle, looking straight down at your project. The tool bar is on the left and the panel is on the right. <b>3D view</b> on the top bar opens the model beside the plan.</p>
<h3 id="the-panel">The panel</h3>
<p>The panel shows what's picked. With a board picked it shows that board: its name, size, wood, joints and checks. With nothing picked it shows the settings of the tool you're using.</p>
<div class="tip"><b>Can't see a tool's settings?</b> Something is still picked. Press <kbd>Esc</kbd> twice to pick nothing, then pick the tool again.</div>
<p>Most headings in the panel have a small <b>?</b> that opens this guide at the right place.</p>
<h3 id="tool-bar">The tool bar</h3>
<div class="tablewrap"><table>
  <tr><th>Tools</th><th>What they're for</th></tr>
  <tr><td><b>Select</b>, <b>Measure</b></td><td>Pick things, and measure between two points without adding anything.</td></tr>
  <tr><td><b>Line</b>, <b>Rectangle</b>, <b>Circle</b></td><td>Sketch lines to plan with and trace over.</td></tr>
  <tr><td><b>3D shape</b></td><td>A solid from any outline: <a href="#tool-shape">3D shapes</a>.</td></tr>
  <tr><td><b>Board</b>, <b>Fasten</b>, <b>Joint</b>, <b>Molding</b></td><td>The woodworking tools: Parts <a href="#tools">4</a> and <a href="#join">5</a>.</td></tr>
  <tr><td><b>Text</b>, <b>Dimension</b></td><td>Words and sizes on the plan.</td></tr>
  <tr><td><b>Parts</b>, <b>Paint</b></td><td>The <a href="#parts-drawer">Parts drawer</a>, and <a href="#tool-paint">paint</a>.</td></tr>
  <tr><td><b>Move</b>, <b>Duplicate</b>, <b>Rotate</b>, <b>Mirror</b>, <b>Delete</b></td><td>Change what's picked.</td></tr>
</table></div>
<h3 id="menus">The menus</h3>
<div class="tablewrap"><table>
  <tr><th>Menu</th><th>What's in it</th></tr>
  <tr><td><span class="ui">File ▾</span>, <span class="ui">Export ▾</span></td><td>New, open and save, templates, Preferences, and files for other programs.</td></tr>
  <tr><td><span class="ui">View ▾</span>, <span class="ui">Draw ▾</span>, <span class="ui">Modify ▾</span></td><td>What you see, more drawing tools, and offset, trim and the rest.</td></tr>
  <tr><td><span class="ui">Laser ▾</span></td><td><a href="#laser-workspace">The Laser workspace</a>, the laser-cut box and the fit test.</td></tr>
  <tr><td><span class="ui">Make ▾</span></td><td><a href="#tools">The pieces</a>.</td></tr>
  <tr><td><span class="ui">Join ▾</span></td><td><a href="#join">Fasteners, joints and hardware</a>.</td></tr>
  <tr><td><span class="ui">Finish ▾</span></td><td><a href="#finish">The wood, the edges, sanding and the finish</a>.</td></tr>
  <tr><td><span class="ui">Shop ▾</span></td><td><a href="#shop">The cut list, the shopping list and the build guide</a>.</td></tr>
  <tr><td><span class="ui">Class ▾</span></td><td><a href="#class">Your class</a>: Hand it in, badges, your level; the class folder and teacher settings.</td></tr>
  <tr><td><span class="ui">Snap ▾</span>, <span class="ui">Show ▾</span></td><td>What the pointer lines up with, and what the plan shows.</td></tr>
  <tr><td><span class="ui">Guide ▾</span></td><td>The lessons, this guide and the wood cheat sheet.</td></tr>
</table></div>
<h3 id="view3d">The 3D view</h3>
<p>Drag to turn the model, right-drag to slide it, and scroll to zoom. The bar under the 3D view has more:</p>
<ul class="do">
  <li><b>Turn</b>: turns the board or part you're placing 90° (the <kbd>R</kbd> key).</li>
  <li><b>Flip</b>: flips the molding you're drawing to face the other way (the <kbd>F</kbd> key).</li>
  <li><b>Explode</b>: pushes every part out from the middle, to see how it goes together.</li>
  <li><b>Labels</b>: each part's number and name, as on the cut list.</li>
  <li><b>Bare wood</b>: shows it before the finish goes on.</li>
  <li><b>Sounds</b>: a click when a fastener goes in, a buzz when the preview turns red, and a chime when every check passes.</li>
</ul>
<h3 id="units">Inches or millimetres, and your level</h3>
<p>The small <b>in</b> or <b>mm</b> chip on the status bar changes the units of this design. In millimetres, the Board tool offers metric sizes. The chip beside it is the project's <a href="#class">level</a>.</p>
<h3 id="search">Search for any command (Ctrl+K)</h3>
<p>Press <kbd>Ctrl</kbd>+<kbd>K</kbd>, or click the magnifier on the top bar, and type a word or two: <code>hinge</code>, <code>cut list</code>, <code>laser</code>. Use the arrow keys and <kbd>Enter</kbd>, or click.</p>
<h3 id="help">The ? buttons</h3>
<p>Click a <b>?</b> on a panel heading and this guide opens at the part that explains it.</p>
<h3 id="guide-menu">Learning while you draw: Guide ▾</h3>
<ul class="do">
  <li><b>Hands-on lessons</b>: a panel walks you through the steps and ticks each one off as you do it (<a href="#lessons">Part 11</a>).</li>
  <li><b>User guide</b>: this guide.</li>
  <li><b>Wood cheat sheet</b>: which wood for which job, what to avoid, and the real sizes behind the names on the rack. It prints on two pages.</li>
  <li><b>Search commands and help</b>, and the <b>Welcome screen</b>.</li>
</ul>
<div class="tip">The video lessons in this menu are Arc's. They show the house tools, though the screen, the 3D view and printing work the same way here.</div>
<h3 id="settings">Preferences and Project settings</h3>
<p><span class="ui">File ▾</span> → <b>Preferences…</b> holds how Arc Hobby works on this computer, for every design. It includes units for new designs and the country for prices and money: Canada, the US or the UK. <b>Show the house tools</b> turns on the <a href="#building-pack">Building pack</a>.</p>
<p><span class="ui">File ▾</span> → <b>Project settings…</b> holds what's saved with this design: its name and its units.</p>
<h3 id="layers">Layers</h3>
<p>Every item sits on a layer: <b>Parts</b>, <b>Base &amp; landscape</b>, <b>Pictures to trace</b>, <b>Sketch lines</b> and <b>Text &amp; dimensions</b>. In the Layers list under the panel, click a layer to draw on it, the eye to hide it and the lock to stop it being picked.</p>
<h3 id="focus">Work on just this part</h3>
<p>Pick what you want to work on and click <b>◎ Work on this part</b> in the panel. Only those pieces can be picked and changed, and the rest fades, so nothing else moves by accident.</p>
<div data-from="tool-edit drafting"></div>

<h2 class="part" id="tools">4. Make: the pieces</h2>
<p>Everything you can add is in <span class="ui">Make ▾</span>. Most of it is boards.</p>
<h3 id="tool-board">Board</h3>
<p>A board is a 3D shape at the wood's real size: a 1×6 is really ¾" × 5½". Pick <b>Board</b> and set these in the panel:</p>
<ul class="do">
  <li><b>Size</b>: lumber like <b>1×6</b> or <b>2×4</b>, or a sheet of plywood. The label gives the real size.</li>
  <li><b>Wood</b>: the species. Its hardness, weight and what it's good for show underneath.</li>
  <li><b>Lies</b>: <b>Flat</b> (a shelf, a floor), <b>On its edge</b> (a side, a front) or on its end (a leg, a post), with <b>How tall</b> in the panel.</li>
  <li><b>Bottom above the floor</b>: how high up it starts.</li>
</ul>
<p><b>On the plan:</b> click where it starts and where it ends, or click once and type its length. A flat board or one on its edge lies on the left of the line you click, as you look along it. If it lands on the wrong side, press <kbd>Ctrl</kbd>+<kbd>Z</kbd> and click the other way round.</p>
<p><b>In 3D:</b> point at a face or the floor to see the board there, and click to put it down. Press and drag along the face to set its length. <kbd>R</kbd> turns it, the arrow keys nudge it ¼", and <kbd>Shift</kbd> works in ⅛" steps. You can't place a board on a sloping face.</p>
<p>Pick a board and its panel has the rest: <b>Name</b>, <b>Bought at</b> (<b>Home store</b> or <b>Lumberyard</b>), <b>Grain</b>, <b>Edges</b>, <b>Top finish</b>, <b>Length</b>, its <b>Joints</b> and its <b>Checks</b>, each with a fix if there is one. <b>Plywood part</b> in <span class="ui">Make ▾</span> picks ¾" plywood, cut to any width.</p>
<h3 id="tool-holes">Holes and cut-outs</h3>
<p>Draw a board <b>Flat</b>, pick <b>3D shape</b>, set <b>Draw</b> to <b>Circle</b>, click the middle of the hole and type how far it is to the edge. A circle drawn inside a board cuts a hole through it, and the panel shows it as <b>Hole across</b>. To turn it into a front or a side, press <b>Stand it up</b> near the bottom of the panel.</p>
<div data-from="tool-shape"></div>
<h3 id="tool-turned">Turned parts</h3>
<p><b>Turned part (a knob, a leg)</b> makes a shape spun round its middle, like a lathe. Click the centre, then how wide. The panel has presets and <b>Edit the profile…</b> to draw your own. The cut list gives the blank to start from and the lathe speeds. See also <a href="#turned-swept-gear">turned shapes, ropes and rails, and gears</a>.</p>
<h3 id="tool-carve">Carve or engrave</h3>
<p>Pick a board and open <b>Carve or engrave…</b>, or use <b>Carve words…</b> and <b>Carve a pattern…</b> in its panel. Set the <b>How</b>: wood burning, chip carving, V-carving and relief, or a router with a V-bit. Then set its size, how deep, and where it goes. The build guide gets a full-size template. <b>Text &amp; signs</b> picks the Text tool for words on the plan.</p>
<h3 id="tool-makers">Whole pieces</h3>
<p>Type the sizes and Arc lays out every board and cut joint, beside whatever is already on the plan:</p>
<ul class="do">
  <li><b>A box…</b>: four sides and a bottom, with finger joints, dovetails, rabbets, miters or screws.</li>
  <li><b>A drawer…</b>: made to fit an opening, with room for the slides and a front if you like.</li>
  <li><b>A frame…</b>: a picture or face frame, with miters, half-laps, bridles, mortise and tenon, pocket screws or dowels.</li>
  <li><b>A cabinet box (carcase)…</b>: sides, top, bottom, fixed shelves and a back, from plywood.</li>
</ul>
<p>Screws, pocket screws and dowels are left for you to put in with <b>Fasten</b>.</p>
<h3 id="tool-molding">Molding</h3>
<p><span class="ui">Make ▾</span> has <b>Crown molding</b>, <b>Baseboard and shoe</b>, <b>Chair rail and casing</b>, <b>Quarter round, cove, screen molding</b> and <b>Picture frame</b>. Click corner to corner along where it goes, or type each length. <kbd>Enter</kbd> finishes it, and a click on the first point closes it into a frame. <kbd>F</kbd> flips it. Corners are mitered for you, and the cut list gives each end's saw settings. The lesson <a href="#lesson-hobby-trim">Trim a cabinet</a> shows how to cut crown and how to cope an inside corner.</p>
<h3 id="tool-rock">Rock: walls, ledges and cliffs</h3>
<p>Pick <b>Rock</b> on the tool bar and click a picture: laid stone (stacked shale, ledgestone, rough shale, fieldstone) or natural rock (granite boulders, Rockies layers, layered rock, limestone cliff, mountain cliff). Click along the wall and press <kbd>Enter</kbd>: every stone stands out in 3D and in print, in millimetres on a model. Its panel changes the <b>Colour</b> (or <b>Some stones in</b> a second colour, and <b>How many</b>), and the <b>Stone size</b>, <b>Depth</b>, <b>Roughness</b> and <b>Wobble</b>. Each wall prints as its own part, standing up with no supports (every stone keeps to 45°); a second colour is a second piece for a second filament. <b>Save a test tile…</b> makes a 50 × 30 mm piece to try first. Lesson 13 goes through it.</p>
<h3 id="hobby-electronics">Electronics and wiring</h3>
<p>Lights for a model, a battery-powered fan, a buzzer on a box lid: turn on <b>Electronics and wiring</b> in <span class="ui">File ▾</span> → <b>Preferences</b>. That adds <b>Part</b> and <b>Wire</b> to the tool bar, <span class="ui">Power ▾</span> with batteries, switches, fuses, LEDs, resistors, a buzzer and a knob, the <b>Flashlight</b>, <b>Desk fan</b> and <b>Play bench</b> templates, and the green <b>Run</b> button, which works out the volts and amps, lights the LEDs, spins the fan, and says what's wrong and how to fix it (a missing resistor, no fuse, a short). While it runs you can flip switches, swap the battery and pull wires out. It has motor drivers, a PWM speed knob, Uno and Nano boards, servos, breadboards (with Show inside, to see the strips) and a battery car to drive across the floor, a schematic and wiring diagram drawn from your wires (<span class="ui">Power ▾</span>), and the parts go on the shopping list. Arc Engineering's guide has it all: Wires and electronics. Batteries and low voltage only, 24 V DC or less, never wall power.</p>
<h3 id="parts-drawer">The Parts drawer</h3>
<p><b>Parts</b> on the tool bar opens every piece you can add, with a picture, in groups, with search: wood, fasteners, hinges, drawer slides, brackets, knobs and pulls, and the parts you've saved. Click a card to pick the tool that places it. In 3D, hardware goes on any face: point at the face and click. On the plan, it sits on top of the board under the click. It goes on the shopping list and in the build steps by itself.</p>

<h2 class="part" id="join">5. Join: fasteners and joints</h2>
<p>Boards that touch need something holding them together. Test tells you when they don't have it.</p>
<h3 id="tool-fasten">Fasten: put in each one yourself</h3>
<p>Arc never adds a screw for you (unless your teacher turns that on). Pick <b>Fasten</b>, or pick a kind from <span class="ui">Join ▾</span>. In the panel, <b>Kind</b> and <b>Size</b> say what you're putting in.</p>
<ul class="do">
  <li><b>In 3D:</b> point at the outside of the board it goes through, over the board behind it. The see-through preview is <b>green</b> when it will hold; <b>orange</b> or <b>red</b> says why not. Click to put it in. Click one that's in to take it out.</li>
  <li><b>On the plan:</b> click the board it goes through, then where it meets the other board.</li>
</ul>
<div class="tablewrap"><table>
  <tr><th>Kind</th><th>What it's for</th></tr>
  <tr><td><b>Screws</b></td><td>#6, #8 and #10 wood screws, with pilot holes. <b>Hide the head under a wood plug</b> counterbores the hole and plugs it. Confirmat screws hold particleboard, MDF and melamine.</td></tr>
  <tr><td><b>Pocket screws</b></td><td>Angled screws from a board's hidden face, from a pocket-hole jig. Point at the hidden face, near its end.</td></tr>
  <tr><td><b>Lag screws</b></td><td>Big hex-headed screws with washers, for 2x lumber and benches.</td></tr>
  <tr><td><b>Nails</b></td><td>Brads, pin nails, finish nails and common nails. They pull out of end grain, and the preview tells you when you're over some.</td></tr>
  <tr><td><b>Bolts</b></td><td>Carriage or hex bolts right through both boards, with a washer and a nut.</td></tr>
  <tr><td><b>Knock-down</b></td><td>A bolt into a threaded insert or a T-nut: furniture that comes apart.</td></tr>
  <tr><td><b>Dowels</b></td><td>Wooden pins glued into both boards.</td></tr>
  <tr><td><b>Biscuits and Dominos</b></td><td>Glued biscuits or loose tenons in machine-cut slots.</td></tr>
  <tr><td><b>Glue</b></td><td>Wood glue on a joint, clamped. Click a board where it meets another; click again to take the glue off.</td></tr>
</table></div>
<p>The panel also has <b>Drill a pilot hole</b> and <b>Glue the joint too</b>. Every fastener you put in shows in the build steps, the build guide and the shopping list, counted.</p>
<h3 id="tool-joint">Joint: cut joints</h3>
<p>Pick a joint from <span class="ui">Join ▾</span>, or pick <b>Joint</b> and set <b>Kind</b> in the panel. Click one board, then the board it meets. Or pick two boards first, and the panel offers <b>Join these two boards</b>.</p>
<div class="tablewrap"><table>
  <tr><th>Joint</th><th>What it is</th></tr>
  <tr><td><b>Dado or rabbet</b></td><td>A groove, or a step along an edge, that another board sits in.</td></tr>
  <tr><td><b>Finger (box) joint</b></td><td>Interlocking fingers on a corner, glued.</td></tr>
  <tr><td><b>Half-lap</b></td><td>Two boards crossing or overlapping, each cut to half its thickness.</td></tr>
  <tr><td><b>Mortise and tenon</b></td><td>A tenon on the rail's end into a mortise in the leg.</td></tr>
  <tr><td><b>Bridle joint</b></td><td>An open mortise at a frame's corner.</td></tr>
  <tr><td><b>Tongue and groove</b></td><td>Boards edge to edge, a tongue in a groove.</td></tr>
  <tr><td><b>Miter</b></td><td>Both ends at 45° on a corner, with splines if you like.</td></tr>
  <tr><td><b>Dovetails</b></td><td>Through dovetails on a box corner: click the tail board, then the pin board.</td></tr>
  <tr><td><b>Glue only</b></td><td>Wood glue and clamps, no screws.</td></tr>
</table></div>
<p><b>Glue up a panel</b>: pick the boards lying edge to edge (<kbd>Shift</kbd>+click), then this. Each pair is edge-glued into one wide panel.</p>
<h3 id="tool-hardware">Hardware</h3>
<p><b>Hinges…</b>, <b>Drawer slides…</b>, <b>Brackets…</b> and <b>Knobs, pulls and catches…</b> in <span class="ui">Join ▾</span> open the <a href="#parts-drawer">Parts drawer</a> at that group. Test checks them too: slides, for example, come in pairs.</p>

<h2 class="part" id="finish">6. Finish</h2>
<p><span class="ui">Finish ▾</span> is how it looks, and how long it lasts.</p>
<ul class="do">
  <li><b>What it's for</b>: <b>It lives outdoors</b>, <b>Food touches it</b>, <b>It holds weight</b> and <b>It's for children</b>. Test and the finish advice follow what you tick.</li>
  <li><b>Wood species…</b>: the wood for every board. A board can have its own in its panel.</li>
  <li><b>Edges</b>: square, eased, round-over, chamfer, cove or ogee, with the bit to use. A board can have its own edge in its panel.</li>
  <li><b>Sanding…</b>: the grits, in order.</li>
  <li><b>Finish</b>: no finish, oils, waxes, polyurethanes, shellac, lacquer, spar varnish for outdoors and more. Pick the one that suits what it's for.</li>
</ul>
<h3 id="tool-paint">Paint a part</h3>
<p><b>Paint a part</b> picks <b>Paint</b>. Pick a colour or material by its picture, then click the part on the plan or in 3D. The eraser takes it off again. <b>Bare wood</b> under the 3D view shows it without the finish.</p>
<div class="tip"><b>Which wood?</b> <span class="ui">Guide ▾</span> → <b>Wood cheat sheet</b> has which wood suits which job, what to avoid and the real sizes. Print it for the shop.</div>

<h2 class="part" id="shop">7. Shop: from the drawing to the bench</h2>
<p><span class="ui">Shop ▾</span> has what you need to get ready, in the order you use it.</p>
<h3 id="cut-list">Cut list and layout</h3>
<p>Every piece is numbered, with its stock and size, and laid out on the boards you buy. The red lines are the saw's cuts, and <b>Saw blade width</b> sets how wide they are. It also gives the machine settings, the offcuts you'll have and part drawings. Click a row to find the part on the plan. <b>Save as PDF…</b> saves it, with full-size templates of the small parts to trace onto the wood. <b>Built it? Keep the offcuts</b> adds them to your list, so the next project uses them first.</p>
<h3 id="tools-needed">Tools you'll need</h3>
<p>Every tool this project takes, and what for. A tool your class hasn't been signed off on says to ask your teacher first.</p>
<h3 id="shopping-list">Shopping list</h3>
<p>Everything the build needs, grouped: wood, hardware, supplies and tools. Tick what you have. Prices marked <b>typical</b> are typical prices for learning and estimating: Canadian first, in CAD, or USD or GBP if you set that country in Preferences. Type your store's price over one to use it. Arc never looks prices up. Tools you don't have are listed but not added to the total, since you keep them after the build. <b>Copy as a list</b> and <b>Save as a spreadsheet…</b> take it with you.</p>
<p><b>I have these…</b> keeps the tools, bits, screws, offcuts and supplies already in your shop, on this device. The shopping list leaves them off, the tool list ticks them and the cut list uses your offcuts first.</p>
<h3 id="tip-over">Will it tip over?</h3>
<p>Arc finds the balance point of the whole build against the feet it stands on, and says how far it can lean before it goes. Add a <b>Load on top</b> to try it with books on. It's a rough estimate for small projects.</p>
<h3 id="step-through">Step through the build</h3>
<p>Press <b>Next</b> and the next part flies into place, with its tools and screws named. The order comes from how the parts join, lowest first. Notes and a photo for each step at the bench go in your project report.</p>
<h3 id="ready">Ready to build?</h3>
<p>A list of ticks: every part on the cut list, the checks pass, it won't tip over, you've stepped through the build, the tools are listed, every item has a price and the time is added up. Anything left has a way to go and fix it.</p>
<h3 id="build-guide">Build guide and project report</h3>
<p><b>Build guide (PDF)…</b> is one PDF for the bench: the parts, an exploded picture, the cut list and board layouts, the tools, a picture for every step, the finish and the safety lines. Checks that still fail print in orange at the top.</p>
<p><b>Project report (PDF)…</b> is for your teacher: the parts, the joints and why, the checks you fixed, time, cost, your self-check and your photos.</p>
<h3 id="beyond-shop">Beyond the shop</h3>
<ul class="do">
  <li><b>3D print it…</b>: a model of the piece or its parts at full size. See <a href="#printing">Part 9</a>.</li>
  <li><b>Save as a piece for Arc…</b>: puts it in a house in Arc at its real size, like a bench on the deck or a shelf on a wall.</li>
  <li><b>Bigger text</b>: larger windows, panel and lessons, for reading at a distance or on a small screen.</li>
</ul>
<h3 id="metal-shop">The metal shop: steel and welding</h3>
<p><span class="ui">Metal ▾</span> is for welded steel frames: a table base, a bench, a plant stand or a welding cart, or anything you draw yourself.</p>
<ul class="do">
  <li><b>Steel</b> on the tool bar draws square and rectangular tube, angle, flat bar, round bar and round tube at their real sizes, in inches or millimetres. Click where a rail starts and where it ends, or set <b>Stands up</b> for a leg. <b>Bottom at</b> puts a rail at a height, on top of the legs.</li>
  <li><b>Whole frames</b> makes a table base, bench, plant stand or welding cart from its outside sizes, welds every joint, and can put a wood top on. To change one later, pick any leg or rail and choose <b>Change the sizes…</b> on its panel: it is made again in the same place, with its welds and top (plates, braces and gussets added to it come off, to add again).</li>
  <li><b>Weld</b> joins two pieces that touch: a butt, corner (square or mitered), tee or lap joint. Arc works out the fillet size from the steel and how far round it goes. A piece's panel changes them.</li>
  <li><b>Metal cut list</b>: each piece's length to the long point, the angle at each end, the saw and its setting, and the pieces laid out on the lengths you buy, with the kerf and the offcuts.</li>
  <li><b>Coping templates</b>: where a round tube's end meets another round tube, a full-size paper strip to wrap round the end and cut to. Print it at 100%.</li>
  <li><b>Bend</b> on the tool bar bends round bar, flat bar or tube: click the corners, and each one becomes a bend of the panel's radius. It lies flat (a hook, a hoop) or stands up (hairpin legs, a curved leg: draw its side view, up the page as up). <b>Bending sheets</b> gives the length to cut, where each bend starts from end A, and the shape full size to check it on. Arc says when a radius is tighter than the steel bends cold.</li>
  <li><b>Sheet metal</b>: an L bracket, a U channel, a tray or a cover by its outside sizes, in steel, galvanized or aluminum sheet. <b>Flat patterns</b> prints the blank full size with its bend lines and corner notches, and the order to fold it on the box-and-pan brake.</li>
  <li><b>Plates and bolts</b>: base plates under the legs (to bolt or lag it down), caster plates drilled for bolt-on casters, tabs inside the top rails for a wood top's screws, levelling feet, or a plate of your own with its holes. <b>Plate templates</b> prints each one full size with the centres to punch, and there's a DXF for a CNC plasma table or a laser. <b>Bolt two pieces</b> bolts pieces that overlap or cross (it comes apart again): Arc picks the bolt, its length and the hole, and warns where a bolt would crush a tube. The <b>drill and tap chart</b> has the hole sizes and drill-press speeds.</li>
  <li><b>What it's for</b>: outdoors, near a fire, food on it, children, or people sitting, standing or leaning on it. Arc says what that changes and offers the fix: drain holes in closed tube outdoors, powder coat or galvanizing (with vent holes), stainless hardware, no zinc and high-heat paint near a fire, no paint where food goes, gaps a child's head could be caught in, and for a railing the building code's height, the 4" (100 mm) rule, no footholds to climb, and a note that it needs a permit.</li>
  <li><b>Will it hold?</b>: type what it carries (on the top, on the shelf, or someone sitting or standing on it). Arc checks each rail's sag, each leg's strength and how much the frame wobbles under a push, says which fails in plain words, and offers the fix: a bigger tube, diagonal braces or corner gussets. Test lists anything that fails. It's a rough hobby check; anything people stand on or could fall from follows the building code.</li>
  <li><b>Your welder and metal</b>: pick MIG, flux-core (no gas), stick or TIG, and the power it plugs into (a 15 A or 20 A house outlet, or 240 V). Arc says what it welds in one pass and in several, checks every weld against it (too thick for the outlet, too thin for stick rods, aluminum with a flux-core or stick welder, aluminum welded to steel), and the settings, the shopping list's wire, rods and gas, the safety lines and the practice follow. Each steel piece can be <b>mild steel</b>, <b>stainless</b> or <b>aluminum</b> (the Metal row in its panel, or make all of it one metal here), and <b>Pipe (Schedule 40)</b> sits beside tube: "1 inch pipe" is 1.315" outside. If you've ticked the tools you have (Shop ▸ I have these…), it says what to use for the rest: a grinder or hacksaw for the saw, the printed templates for the notcher, a bolted frame for the welder.</li>
  <li><b>Practice coupons</b>, the <b>Starting chart</b> and <b>Welding safety</b>: weld each joint on scraps first, start from rough settings for the thickness and your welder (the chart inside its door wins), and know the safety lines by heart.</li>
</ul>
<p>The build guide has the welds with their symbols and a welding order. <b>Practise the build</b> takes you through it at the bench: measure and mark each piece with soapstone, cut it on the bandsaw, grind the joints clean and tack the frame up on the 3D bench, then steer each weld through the helmet. Move the gun along the seam at a steady speed, pushing at 10–15°: too fast leaves a ropey bead sitting on top, too slow a wide one (and holes in thin tube), and the bead shows it. The lesson <a href="#lesson-metal-withme-plant">Do it with me: a welded plant stand</a> walks you through a whole frame. A wood top goes on after the frame is welded and painted, screwed on from underneath. Arc Engineering has the same Metal menu and a <b>Metal shop guide (PDF)</b>.</p>
<div class="tip"><b>Welding is taught at the machine.</b> Your teacher shows you the welder, the grinder and the saw, and their rules, before you use them. Weld in the metal shop, never near the wood shop's dust.</div>

<h2 class="part" id="laser-workspace">8. The Laser workspace</h2>
<p>A laser cuts thin sheet parts along their true outlines and engraves words, patterns and photos. <span class="ui">Laser ▾</span> → <b>Laser workspace…</b> takes every board up to 6 mm thick and packs it onto sheets, one SVG file in millimetres for each sheet. It's set up for the laser module on the Bambu Lab H2D, at 10 W or 40 W.</p>
<div class="tip"><b>Safety first.</b> Never leave the laser while it runs, keep its lid shut and the extractor on, and have the fire blanket within reach. Only cut what's on the materials list. The window's <b>Never into the laser</b> list says what makes poisonous or corrosive fumes: PVC and vinyl, polycarbonate and ABS, fibreglass and coated boards, foam, chrome-tanned or fake leather. If you can't name it, it doesn't go in.</div>
<h3 id="laser-window">The window</h3>
<ul class="do">
  <li><b>Laser</b>: <b>10 W laser</b> or <b>40 W laser</b>.</li>
  <li><b>Sheet in the laser</b>: the size you load.</li>
  <li><b>Cut out parts up to</b>: the thickest part to include.</li>
  <li>The material for each group of parts: basswood, birch, MDF, hardboard, solid wood, veneer, card, cardboard, leather, felt, cork or dark cast acrylic. Each one gives the power, speed and passes to start from, and its own note. Some can flare up, and it says so.</li>
  <li><b>Make up for the kerf</b>: moves the cut lines out, so the parts come out their true size and joints fit snug.</li>
  <li><b>Engrave the carvings, words and photos</b>, and <b>Engrave each part's number</b>, lightly.</li>
</ul>
<p>The pictures show each sheet: <b>red</b> is cut, <b>blue</b> is engraved and <b>green</b> is a guide only. <b>Save the files…</b> saves them. If a groove doesn't go right through, or a part is bigger than the sheet, the window says so.</p>
<h3 id="laser-fit-test">Find the kerf: the fit test</h3>
<p>Kerf is the width the beam burns away. It changes with the laser and the sheet, so measure it. <span class="ui">Laser ▾</span> → <b>Fit test (find the kerf)…</b> saves a small plate with six numbered tabs and six slots, each drawn for a different kerf. Pick the <b>Material</b> and press <b>Save the test file…</b>, then cut it from the sheet you'll use. Push each tab into the slot with its number. Set <b>The snug one was</b> and press <b>Use it</b>. The workspace uses that number from then on, and shows it as measured.</p>
<h3 id="laser-box">A laser-cut box</h3>
<p><span class="ui">Laser ▾</span> → <b>A laser-cut box…</b> makes a box from one thin sheet with fingers on every edge, so it slots together. Type its outside sizes and tick <b>A lid</b> if you want one. The lesson <a href="#lesson-hobby-laser">A laser-cut box</a> goes from there to the files.</p>
<h3 id="laser-board">On a board: a bend or a photo</h3>
<p>Pick a board up to about 6 mm thick. Its panel has <b>On the laser</b>:</p>
<ul class="do">
  <li><b>Bend it (living hinge)</b>: rows of short cuts that let the sheet bend there, for a rounded box corner or a book cover. <b>Bending part</b> sets how long it is, and the panel says the radius it bends round. Bend it slowly.</li>
  <li><b>Engrave a photo…</b>: the picture is turned to dots, the way a laser burns shades. Set <b>Wide</b> and where it goes. High-contrast photos come out best.</li>
</ul>

<h2 class="part" id="printing">9. 3D printing</h2>
<p>Arc Hobby can print a model of what you've built, or parts you've drawn in millimetres. The quickest way for a wood project is <span class="ui">Shop ▾</span> → <b>3D print it…</b>: it asks for one piece or a kit, a scale that fits the printer's bed and whether to leave the hardware out, says what won't print well at that scale, then opens the 3D Print workspace. The lesson <a href="#lesson-hobby-start">Draw a part to print</a> and the 3D Print workspace lessons show the rest.</p>
<div class="tip">The ground tools below, like <b>Outdoor</b>, are in the Building pack. Tick <b>Show the house tools</b> in Preferences to use them.</div>
<div data-from="print-object print-workspace print-ground"></div>

<h2 class="part" id="class">10. In class</h2>
<p>These are in <span class="ui">Class ▾</span>: the students' items first, then the teacher's.</p>
<h3 id="class-students">For students</h3>
<ul class="do">
  <li><b>Project level…</b>: <b>Beginner</b>, <b>Intermediate</b>, <b>Advanced</b> or <b>Expert</b>. Nothing is ever locked: what's above your level gets a note in Test, and the menus and Parts drawer can show only what fits.</li>
  <li><b>From your teacher…</b>: the instructions from the class kit this project started from.</li>
  <li><b>Badges…</b>: small wins from the design and the build, like first joint, all green or thrifty. Earned badges stay on this device, from project to project.</li>
  <li><b>Hand it in…</b>: one file for your teacher with the design, your notes and photos, and a summary. Fill in <b>Your name</b> and <b>Class</b>, then press <b>Save the hand-in file…</b>.</li>
  <li><b>Open a class kit…</b>: a <code>.arckit</code> file from your teacher. It starts a new project, shows the instructions and sets the class's settings on this device, after asking.</li>
</ul>
<h3 id="class-teachers">For teachers</h3>
<p><b>Teacher settings…</b> holds what's kept for the class on this device:</p>
<ul class="do">
  <li><b>Level</b>: <b>The class starts at</b>, and <b>Show students only what fits their project's level</b>.</li>
  <li><b>Tools the class may use</b>: untick <b>Every tool</b> and tick the ones you've signed them off on. Nothing is stopped: any other tool gets a note in Test, the tool list and the build guide to ask you first.</li>
  <li><b>Self-check for the project report</b>: the list students tick.</li>
  <li><b>Class challenge</b>: a name and targets, like <b>Materials cost under</b> and <b>Uses at least (% of the wood)</b>.</li>
  <li><b>Class prices</b>: the prices the shopping list uses. <b>Keep these prices for the class</b> on the shopping list fills them in.</li>
  <li><b>Place screws, pocket screws and dowels for them</b>: for a class that isn't learning fasteners yet.</li>
</ul>
<p><b>Save a class kit…</b> makes one <code>.arckit</code> file from the design that's open, with instructions and these settings. <b>Class folder (hand-ins)…</b> opens your students' hand-in files side by side, opens any one of them, and saves a <b>Gallery page (PDF)…</b> for the wall.</p>

<h2 class="part" id="lessons">11. Hands-on lessons</h2>
<!-- lessons:start -->
<!-- Made by tools/make-guide-lessons.js from src/js/lessons.js: change the lessons there, then run it again. -->
<p>20 lessons you do in Arc Hobby, with a panel over the plan that walks you through each step and <b>ticks it off by itself</b> when it sees the work done. Open them from <span class="ui">Guide ▾</span> → <b>Hands-on lessons</b>. Each one opens its own practice project, so save yours first if it asks.</p>
<ul class="do">
  <li><b>Show me</b> points at the button or setting the step needs (it opens a menu first if it has to).</li>
  <li><b>Skip</b> and <b>Back</b> move between steps; click any step in the list to jump to it. The ▾ button folds the panel down to one line; × closes it and keeps your place.</li>
  <li><b>In the way?</b> Drag the panel by its title bar (the ⠿ dots) to anywhere in the window, with the mouse or a finger. It stays where you put it until you close Arc; double-click the title bar to put it back. The same goes for the other floating cards: the lesson offer, the <b>What will you make?</b> start card and the video player.</li>
  <li>At the end, the panel says what comes next, and <b>Do it again</b> starts it fresh.</li>
</ul>
<div class="tablewrap"><table>
<tr><th>Lesson</th><th>What you do</th><th>Time</th></tr>
<tr><th colspan="3">Start here</th></tr>
<tr><td><a href="#lesson-hobby-wood-start">1. Start here: a key rack</a></td><td>Your first project, from the drawing to the bench: make the key rack longer, screw its shelf on, twist in the cup hooks, test it, step through the build and see what to buy.</td><td>15 min</td></tr>
<tr><th colspan="3">Do it with me</th></tr>
<tr><td><a href="#lesson-hobby-withme-birdhouse">2. Do it with me: a birdhouse</a></td><td>Build a birdhouse from nothing but outlines: draw every board, drill the entrance hole, stand the front up, put in each screw yourself, fix what Test finds, then get the cut list, the build steps and what to buy.</td><td>30 min</td></tr>
<tr><td><a href="#lesson-metal-withme-plant">3. Do it with me: a welded plant stand</a></td><td>Build a steel plant stand from outlines: draw the legs and rails in ¾" square tube, weld one joint yourself and the rest in one go, check it, get the metal cut list, then practise the cuts and steer a weld through the helmet.</td><td>30 min</td></tr>
<tr><td><a href="#lesson-elec-withme-flashlight">4. Do it with me: a flashlight</a></td><td>Wire a battery, a switch and a white LED into one loop, press Run and watch the LED burn out, then work out the resistor that saves it. Flip the switch and try a smaller battery while it runs.</td><td>8 min</td></tr>
<tr><th colspan="3">Wood</th></tr>
<tr><td><a href="#lesson-hobby-birdhouse">5. A birdhouse from one board</a></td><td>Open the birdhouse (in inches), change the hole and the roof, fix a screw that would split the wood, see the cut list, step through the build and make the shopping list and build guide.</td><td>12 min</td></tr>
<tr><td><a href="#lesson-hobby-fasten">6. Fasten a box yourself</a></td><td>A small box with nothing holding it together: put in each screw and nail yourself in 3D, watch the preview turn green when it's right, fix what Test finds and see them on the shopping list.</td><td>12 min</td></tr>
<tr><td><a href="#lesson-hobby-shelf">7. A wall shelf</a></td><td>Make the shelf longer, put in the back rail's pocket screws, try plywood and see the sheet layout, read the wall-stud note and check you're ready to build.</td><td>10 min</td></tr>
<tr><td><a href="#lesson-hobby-trim">8. Trim a cabinet: cutting the corners</a></td><td>Put crown round a cabinet's top and baseboard round its foot, read each corner's saw settings in the cut list, and learn the two ways to cut crown and how to cope an inside corner.</td><td>12 min</td></tr>
<tr><th colspan="3">Laser</th></tr>
<tr><td><a href="#lesson-hobby-laser">9. A laser-cut box</a></td><td>A box from one thin sheet with fingers on every edge: make it, put your name or a photo on the lid, then see the files for the laser and how to find its kerf.</td><td>15 min</td></tr>
<tr><th colspan="3">Electronics</th></tr>
<tr><td><a href="#lesson-elec-fan">10. A desk fan</a></td><td>A TT motor and a printed fan blade on 4 × AA. Swap the battery while it runs and see the speed follow the volts, find out why a 9 V battery is the wrong one, and size the fuse.</td><td>7 min</td></tr>
<tr><td><a href="#lesson-elec-playbench">11. Play bench</a></td><td>Nothing to build: one battery and switch feeding an LED with a dimmer knob, a buzzer on a button and a fan on its own switch. Turn, press, flip, unplug and short it while Run plays.</td><td>5 min</td></tr>
<tr><td><a href="#lesson-elec-car">12. A battery car</a></td><td>A two-wheel car on 4 × AA with a motor driver and a Nano. Drive it across the floor and steer it, swap the L298N for a TB6612 and see it speed up, find out why NiMH cells make the board reset, and try a LiPo.</td><td>12 min</td></tr>
<tr><td><a href="#lesson-elec-speedknob">13. A fan with a speed knob</a></td><td>A TT motor and fan on a 12 V adapter through a PWM speed module. Turn the knob in Run and see the speed, the amps and the watts, find the knob's limit, and see why a knob can't just be a big resistor.</td><td>6 min</td></tr>
<tr><th colspan="3">3D printing</th></tr>
<tr><td><a href="#lesson-hobby-start">14. Draw a part to print</a></td><td>Draw a part to exact sizes in millimetres, cut a hole, label it, measure it, see it in 3D and open the 3D Print workspace with the H2D's bed.</td><td>8 min</td></tr>
<tr><td><a href="#lesson-printws-plates">15. 3D Print workspace: plates and the colour change</a></td><td>Open the 3D Print workspace, see how a model base is cut into plates with puzzle tabs, change the plate sizes, and find the layer where the filament changes colour.</td><td>8 min</td></tr>
<tr><td><a href="#lesson-printws-inserts">16. 3D Print workspace: surfaces and printed inserts</a></td><td>Soften the cobblestones on a street, turn a raised square into a printed insert that drops into a pocket, change how much snow lies on it, and split it to fit the bed.</td><td>10 min</td></tr>
<tr><td><a href="#lesson-printws-parts">17. 3D Print workspace: parts and part numbers</a></td><td>See how Arc breaks a model into printable parts, print two shapes as one part, give a layer its own part-number letters, read the parts list, and re-make only what changed.</td><td>8 min</td></tr>
<tr><th colspan="3">Do it with me</th></tr>
<tr><td><a href="#lesson-withme-rock">18. Do it with me: rock walls and cliffs</a></td><td>Draw a rock wall on a small landscape with the Rock tool, change its rock, colour and the size of its stones, colour some stones lighter, turn it into a mountain cliff, and save a test tile to print.</td><td>15 min</td></tr>
<tr><th colspan="3">Wood projects</th></tr>
<tr><td><a href="#lesson-hobby-planter">19. A cedar planter</a></td><td>A planter from 1×6 cedar for the garden: look it over in 3D, test it, step through the build and see what to buy.</td><td>15 min</td></tr>
<tr><th colspan="3">3D printing</th></tr>
<tr><td><a href="#lesson-hobby-minigolf-print">20. Print a mini golf hole</a></td><td>One mini golf hole cut into pieces that fit your printer's bed and push together: pick the ball, the scale and the fit, and save the files.</td><td>10 min</td></tr>
</table></div>
<h3 class="lessons-group">Start here</h3>
<h3 id="lesson-hobby-wood-start">Lesson 1: Start here: a key rack</h3>
<p>Your first project, from the drawing to the bench: make the key rack longer, screw its shelf on, twist in the cup hooks, test it, step through the build and see what to buy. <span class="where">About 15 minutes · 10 steps · starts from the hobby-keyrack template</span></p>
<div class="step"><h3><span class="num">1</span>Welcome</h3><p>This is a key rack: a <b>1×6</b> back, a <b>1×3</b> shelf on top for the post, and a thin lip glued along its front, in <b>inches</b>. Each piece is a <b>board</b> at the wood's real size. The strip at the top, <b>Design, Test, Build, Buy, Make</b>, is the order you'll work in. This panel ticks each step off when it sees it done.</p></div>
<div class="step"><h3><span class="num">2</span>Make it 18" long</h3><p>Click the <b>Back</b> on the plan and set its <b>Length</b> to <kbd>18</kbd> in the panel. Then do the same for the <b>Shelf</b> and the <b>Lip</b>. The cut list changes with them.</p></div>
<div class="step"><h3><span class="num">3</span>See it in 3D</h3><p>Click <b>3D view</b> on the top bar. Drag to turn it, scroll to zoom. The shelf sits on the back's top edge.</p></div>
<div class="step"><h3><span class="num">4</span>Screw the shelf on</h3><p>Pick <b>Fasten</b> on the tool bar (it starts on <b>#8 screws</b>). In the 3D view, point at the top of the <b>Shelf</b>, right over the <b>Back</b>: the preview turns green when the screw will hold. Click to put it in. Put in three, one near each end and one in the middle.</p></div>
<div class="step"><h3><span class="num">5</span>Cup hooks</h3><p>Click <b>Parts</b> on the tool bar and search <b>cup hook</b>. Pick it, then point at the front of the <b>Back</b> in 3D, under the shelf, and click. Put in three hooks for the keys.</p></div>
<div class="step"><h3><span class="num">6</span>Test it</h3><p>Click <b>Test</b> on the strip. Arc checks every board and screw: a screw too near an end, one that pokes out, boards that don't touch. Fix anything it lists with its button.</p></div>
<div class="step"><h3><span class="num">7</span>Build it in Arc</h3><p>Close the checks and click <b>Build</b> on the strip. Press <b>Next</b> to watch each piece go on, with its tools and screws.</p></div>
<div class="step"><h3><span class="num">8</span>What to buy</h3><p>Open <b>Shop ▾</b> → <b>Shopping list…</b>: the boards, the screws, the hooks and the screws into the wall studs. Tick what the shop already has.</p></div>
<div class="step"><h3><span class="num">9</span>Make it</h3><p>Close the list. <b>Shop ▾</b> → <b>Build guide (PDF)…</b> saves everything for the bench: the parts, the cut list, the tools, a picture of each step and the finish. Hang it on two screws into a wall stud.</p></div>
<div class="step"><h3><span class="num">10</span>What comes next</h3><p>Draw your own with <b>Board</b> and <b>Fasten</b>, or let Arc lay one out: <b>Make ▾</b> → <b>A box…</b>, <b>A drawer…</b>, <b>A frame…</b> or <b>A cabinet box…</b>. The next lessons build a birdhouse, fasten a box by hand and make a shelf.</p></div>
<h3 class="lessons-group">Do it with me</h3>
<h3 id="lesson-hobby-withme-birdhouse">Lesson 2: Do it with me: a birdhouse</h3>
<p>Build a birdhouse from nothing but outlines: draw every board, drill the entrance hole, stand the front up, put in each screw yourself, fix what Test finds, then get the cut list, the build steps and what to buy. <span class="where">About 30 minutes · 19 steps · starts from the hobby-withme-birdhouse template</span></p>
<div class="step"><h3><span class="num">1</span>The outlines</h3><p>This time there are no boards: you draw them all. The dashed outlines show where each one goes, in <b>inches</b>: <b>blue</b> for the box, <b>purple</b> for the front while it lies flat, <b>teal</b> for the roof. It's a plain box with a flat roof, the easiest birdhouse to cut. One thing to know: while a board is picked, the panel shows that board. Press <kbd>Esc</kbd> twice to pick nothing, and the panel goes back to the tool's settings.</p></div>
<div class="step"><h3><span class="num">2</span>The front, lying flat</h3><p>Pick <b>Board</b> on the tool bar. In its panel set <b>Size</b> to <b>1×8</b>, <b>Lies</b> to <b>Flat</b> and <b>Bottom above the floor</b> to <kbd>0</kbd>. Click the lower-left corner of the purple outline, then its lower-right corner. A 1×8 is really 7¼" wide, so it fills the outline. The panel now shows your board: set its <b>Name</b> to <kbd>Front</kbd> and press <kbd>Enter</kbd>.</p></div>
<div class="step"><h3><span class="num">3</span>Drill the entrance hole</h3><p>A 1½" hole lets a bluebird in and keeps bigger birds out. Press <kbd>Esc</kbd> twice, pick <b>3D shape</b> on the tool bar and set <b>Draw</b> to <b>Circle</b>. Click the middle of the purple cross, type <kbd>3/4"</kbd> and press <kbd>Enter</kbd>: that's from the middle to the edge, so 1½" across. A circle drawn inside a board cuts a hole through it, and the panel shows it as <b>Hole across</b>.</p></div>
<div class="step"><h3><span class="num">4</span>Stand it up</h3><p>Pick the <b>Select</b> arrow on the tool bar and click the Front. Near the bottom of the panel press <b>Stand it up</b>. It stands on the blue line at the front, with the hole 5" up.</p></div>
<div class="step"><h3><span class="num">5</span>The back</h3><p>Press <kbd>Esc</kbd> twice, pick <b>Board</b> and set <b>Lies</b> to <b>On its edge</b>. Click the lower-left corner of the <b>Back</b> outline, then its lower-right corner. It stands 7¼" tall, the width of the 1×8. Set its <b>Name</b> to <kbd>Back</kbd>. If a board lands on the wrong side of the line, press <kbd>Ctrl+Z</kbd> and click its two corners the other way round.</p></div>
<div class="step"><h3><span class="num">6</span>The two sides</h3><p>Board is still picked, on its edge. For the <b>Left side</b>, click its outline's lower-right corner, then its upper-right corner, and set its <b>Name</b> to <kbd>Left side</kbd>. Do the same for the <b>Right side</b>, with the name <kbd>Right side</kbd>. The sides fit between the front and the back.</p></div>
<div class="step"><h3><span class="num">7</span>The floor</h3><p>Press <kbd>Esc</kbd> twice and pick <b>Board</b>. Set <b>Size</b> to <b>1×6</b>, <b>Lies</b> to <b>Flat</b> and <b>Bottom above the floor</b> to <kbd>1/4</kbd>: a floor set ¼" up leaves a gap so rain drains out. Click the lower-left corner of the <b>Floor</b> outline, then its lower-right corner. Set its <b>Name</b> to <kbd>Floor</kbd>.</p></div>
<div class="step"><h3><span class="num">8</span>The roof</h3><p>Press <kbd>Esc</kbd> twice and pick <b>Board</b>. Set <b>Size</b> to <b>1×8</b> and <b>Bottom above the floor</b> to <kbd>7 1/4</kbd>, so it sits on top of the box. Click the lower-right corner of the teal outline, then its upper-right corner. It hangs over all round, and furthest over the hole to keep the rain out. Set its <b>Name</b> to <kbd>Roof</kbd>.</p></div>
<div class="step"><h3><span class="num">9</span>See it in 3D</h3><p>Click <b>3D view</b> on the top bar. Drag to turn it, scroll to zoom. Nothing holds it together yet: that comes next.</p></div>
<div class="step"><h3><span class="num">10</span>Screw the sides to the floor</h3><p>Pick <b>Fasten</b> on the tool bar (it starts on <b>#8 × 1¼" wood screw</b>, with a pilot hole). Turn the box and point at the outside of the <b>Left side</b>, low down, over the floor behind it. The see-through screw is <b>green</b> when it's right; <b>orange</b> or <b>red</b> says why not. Click to put it in. Put in <b>two</b>, about 1" from each end, then two more through the <b>Right side</b>. A click on a screw takes it out again.</p></div>
<div class="step"><h3><span class="num">11</span>Screw on the front</h3><p>Turn to the front. Point at the <b>Front</b>, over the edge of the <b>Left side</b> behind it, and put in <b>two</b> screws, one low and one high. Then two more over the <b>Right side</b>. Keep them about 1" from each end of the board.</p></div>
<div class="step"><h3><span class="num">12</span>Screw on the back</h3><p>Turn right round and do the same on the <b>Back</b>: two screws into each side.</p></div>
<div class="step"><h3><span class="num">13</span>Screw down the roof</h3><p>Look down from above. Point at the top of the <b>Roof</b>, over the top edge of the <b>Front</b>, and put in <b>two</b> screws. Then two over the <b>Back</b>.</p></div>
<div class="step"><h3><span class="num">14</span>Test it</h3><p>Click <b>Test</b> on the strip at the top. Arc checks every board and screw. Fix anything orange or red, with its button or by taking a screw out and putting it in again. Its note about pine outdoors is only a note: press <b>Use western red cedar</b> if you like.</p></div>
<div class="step"><h3><span class="num">15</span>The cut list</h3><p>Close it and open <b>Shop ▾</b> → <b>Cut list and layout…</b>. Every piece you drew is numbered and laid out on its board; the red lines are the saw's cuts.</p></div>
<div class="step"><h3><span class="num">16</span>Build it in Arc</h3><p>Close the cut list and click <b>Build</b> on the strip. Press <b>Next</b> to watch each piece go on, with its tools and your screws, until <b>Done</b>.</p></div>
<div class="step"><h3><span class="num">17</span>What to buy</h3><p>Open <b>Shop ▾</b> → <b>Shopping list…</b>: the 1×8, the 1×6 and every screw you put in, counted. Prices marked <b>typical</b> are for estimating: type your store's price over the 1×8's.</p></div>
<div class="step"><h3><span class="num">18</span>The build guide</h3><p>Close the list and open <b>Shop ▾</b> → <b>Build guide (PDF)…</b> to save everything for the bench: the parts, the cut list, the tools, a picture for every step and the finish.</p></div>
<div class="step"><h3><span class="num">19</span>What comes next</h3><p>You drew that whole birdhouse yourself. Save it with <b>File ▾</b> → <b>Save</b>. The lesson <b>A birdhouse from one board</b> shows the same idea with a pitched roof, and <b>Make ▾</b> → <b>A box…</b>, <b>A drawer…</b>, <b>A frame…</b> and <b>A cabinet box…</b> lay out whole pieces for you.</p></div>
<h3 id="lesson-metal-withme-plant">Lesson 3: Do it with me: a welded plant stand</h3>
<p>Build a steel plant stand from outlines: draw the legs and rails in ¾" square tube, weld one joint yourself and the rest in one go, check it, get the metal cut list, then practise the cuts and steer a weld through the helmet. <span class="where">About 30 minutes · 13 steps · starts from the metal-withme-plant template</span></p>
<div class="step"><h3><span class="num">1</span>The outlines</h3><p>No steel yet: you draw it all, in <b>inches</b>. The four <b>blue</b> squares are the legs, 28" tall. The <b>purple</b> lines are the rails, each from one leg's face to the next: you draw them twice, once at the top and once 6" up.</p></div>
<div class="step"><h3><span class="num">2</span>Pick the steel</h3><p>Pick <b>Steel</b> on the tool bar. In its panel set <b>Shape</b> to <b>Square tube</b> and <b>Size</b> to <b>¾" square tube, 16 ga</b>: light, cheap and easy to weld.</p></div>
<div class="step"><h3><span class="num">3</span>Stand up the legs</h3><p>Set <b>Lies</b> to <b>Stands up (a leg or a post)</b>, <b>Length</b> to <kbd>28</kbd> and <b>Bottom at</b> to <kbd>0</kbd>. Click the cross in the middle of each blue square: four legs.</p></div>
<div class="step"><h3><span class="num">4</span>The top rails</h3><p>Set <b>Lies</b> to <b>Along the plan (a rail)</b> and <b>Bottom at</b> to <kbd>27 1/4</kbd>, so each rail's top is flush with the legs' tops. Click one end of a purple line, then the other: do all four.</p></div>
<div class="step"><h3><span class="num">5</span>The low rails</h3><p>Now set <b>Bottom at</b> to <kbd>6</kbd> and draw the four purple lines again: a frame low down, for a shelf or just for stiffness.</p></div>
<div class="step"><h3><span class="num">6</span>See it in 3D</h3><p>Click <b>3D view</b> on the top bar and turn it round. Each piece shows its real end: a tube with its wall. Nothing joins them yet.</p></div>
<div class="step"><h3><span class="num">7</span>Weld one joint yourself</h3><p>Pick <b>Weld</b> on the tool bar. Click a <b>low rail</b> (the piece whose end is cut to fit), then the <b>leg</b> it meets. Arc sees it's a tee joint and works out the fillet: a ¾" tube's end, welded all round.</p></div>
<div class="step"><h3><span class="num">8</span>Weld the rest</h3><p>Open <b>Metal ▾</b> → <b>Weld everything that touches</b>. Every rail end is welded to its leg: the top rails make corner joints, the low ones tees.</p></div>
<div class="step"><h3><span class="num">9</span>Test it</h3><p>Click <b>Test</b> on the strip at the top. Nothing about the steel should be orange or red: if a piece "touches but isn't welded", its button welds it.</p></div>
<div class="step"><h3><span class="num">10</span>The metal cut list</h3><p>Close it and open <b>Metal ▾</b> → <b>Metal cut list…</b>: four legs and eight rails, each with its length and the saw's setting, laid out on the lengths you buy, with the kerf between them.</p></div>
<div class="step"><h3><span class="num">11</span>Practise a cut and a weld</h3><p>Close it and open <b>Shop ▾</b> → <b>Practise the build…</b>. Measure and cut a leg on the bandsaw, then go to <b>Fit and weld</b> and steer a weld through the helmet: steady, at the right speed, pushing at 10–15°. Finish one weld.</p></div>
<div class="step"><h3><span class="num">12</span>Know the safety lines</h3><p>Close practice and open <b>Metal ▾</b> → <b>Welding safety…</b>: the gear, the fumes, hot metal, grinder sparks and the fire watch. Your teacher shows you the real welder before you use it.</p></div>
<div class="step"><h3><span class="num">13</span>What comes next</h3><p>You drew and welded a whole frame. Save it with <b>File ▾</b> → <b>Save</b>. <b>Shop ▾</b> → <b>Build guide (PDF)…</b> has the welds, their symbols and order, and the starting chart for your welder. Try round tube for the rails to get coping templates, or <b>Metal ▾</b> → <b>A table base…</b> with a wood top.</p></div>
<h3 id="lesson-elec-withme-flashlight">Lesson 4: Do it with me: a flashlight</h3>
<p>Wire a battery, a switch and a white LED into one loop, press Run and watch the LED burn out, then work out the resistor that saves it. Flip the switch and try a smaller battery while it runs. <span class="where">About 8 minutes · 9 steps · starts from the elec-withme-flashlight template</span></p>
<div class="step"><h3><span class="num">1</span>One loop</h3><p>You'll wire a flashlight: three AA batteries, a switch and a white LED. Current needs a <b>whole loop</b>: out of the battery's <b>+</b>, through each part, and back to its <b>−</b>. Each part has small dots for its pins: red is <b>+</b>, black is <b>−</b>.</p></div>
<div class="step"><h3><span class="num">2</span>Battery to switch</h3><p>Pick <b>Wire</b> on the tool bar. Click the battery's red <b>+</b> dot, then one of the switch's two dots. A red wire joins them, and the next wire starts from the switch.</p></div>
<div class="step"><h3><span class="num">3</span>Switch to the LED</h3><p>Click the switch's other dot, then the LED's <b>+ (long leg)</b> dot, the red one. Light only goes one way through an LED.</p></div>
<div class="step"><h3><span class="num">4</span>Back to −</h3><p>Click the LED's <b>− (short leg)</b> dot, then the battery's black <b>−</b>. The loop is closed. Press <kbd>Esc</kbd> to stop wiring.</p></div>
<div class="step"><h3><span class="num">5</span>Run it</h3><p>Press the green <b>Run</b> button and watch the LED in 3D.</p></div>
<div class="step"><h3><span class="num">6</span>It burnt out</h3><p>The card says about 100 mA flowed and the LED burnt out: an LED can't limit its own current. Read its <b>Why</b> line: the resistor takes the extra volts, R = (4.7 V − 3.1 V) ÷ 20 mA. Press <b>Add a … resistor</b>.</p></div>
<div class="step"><h3><span class="num">7</span>Flip the switch</h3><p>Run plays again and the LED glows: about 20 mA. Now click the switch on the 3D model (or untick it under <b>Play with it</b>, top right). The LED goes out: the loop is open.</p></div>
<div class="step"><h3><span class="num">8</span>A smaller battery</h3><p>Turn it back on, then under <b>Play with it</b> pick the battery <b>2 × AA alkaline (3 V)</b>. A white LED needs about 3.1 V, so it barely glows. The card says why.</p></div>
<div class="step"><h3><span class="num">9</span>Try this</h3><p>Press <b>Put back</b>. Then try: a red LED (it needs only 2 V, so work out a bigger resistor), a second LED beside the first with its own resistor, or a 0.5 A <b>Resettable fuse</b> next to the battery's + (Power ▾). The card notes what you missed. Batteries and low voltage only: never wall power.</p></div>
<h3 class="lessons-group">Wood</h3>
<h3 id="lesson-hobby-birdhouse">Lesson 5: A birdhouse from one board</h3>
<p>Open the birdhouse (in inches), change the hole and the roof, fix a screw that would split the wood, see the cut list, step through the build and make the shopping list and build guide. <span class="where">About 12 minutes · 10 steps · starts from the hobby-birdhouse template</span></p>
<div class="step"><h3><span class="num">1</span>Welcome</h3><p>This birdhouse is cut from one 6 ft <b>1×6</b>, in <b>inches</b>. Each piece is a <b>board</b>: a 3D shape at the wood's real size (a 1×6 is really ¾" × 5½"). The strip at the top (<b>Design, Test, Build, Buy, Make</b>) shows what's next.</p></div>
<div class="step"><h3><span class="num">2</span>Pick the front</h3><p>Click the <b>Front</b> on the plan: the board along the bottom edge. Its panel shows its store size, its real size, its wood and its joints. Open the <b>3D view</b> to see it standing.</p></div>
<div class="step"><h3><span class="num">3</span>A wren-size hole</h3><p>A bluebird needs a 1½" hole; a wren a 1¼" one. In the panel set <b>Hole across</b> to <kbd>1 1/4</kbd> and press <kbd>Enter</kbd>.</p></div>
<div class="step"><h3><span class="num">4</span>A longer roof</h3><p>Click <b>Roof, left</b> and set its <b>Length</b> to <kbd>9</kbd>. A longer roof keeps the rain off the hole. The cut list changes with it.</p></div>
<div class="step"><h3><span class="num">5</span>Fix a screw</h3><p>One screw is only ½" from the end of a side: it may split the wood. Click <b>Test</b> on the strip at the top and press <b>Move it to 1"</b>.</p></div>
<div class="step"><h3><span class="num">6</span>The cut list</h3><p>Open <b>Shop ▾</b> → <b>Cut list and layout…</b>. Every piece is numbered and laid out on the board; the red lines are the saw's cuts (⅛" each).</p></div>
<div class="step"><h3><span class="num">7</span>Build it in Arc</h3><p>Close the cut list and click <b>Build</b> on the strip. Press <b>Next</b> to watch each piece go on, with its tools and screws, until <b>Done</b>.</p></div>
<div class="step"><h3><span class="num">8</span>What to buy</h3><p>Open <b>Shop ▾</b> → <b>Shopping list…</b>. Tick what you already have and type the price of the 1×6 from your store. Arc never looks prices up.</p></div>
<div class="step"><h3><span class="num">9</span>The build guide</h3><p>Open <b>Shop ▾</b> → <b>Build guide (PDF)…</b> to save the guide: the parts, an exploded picture, the cut list, the tools, a picture for every step, and the finish. Take it to the bench.</p></div>
<div class="step"><h3><span class="num">10</span>What comes next</h3><p>That's a whole project. Draw your own with <b>Board</b> and <b>Fasten</b> on the tool bar; <b>Parts</b> has hinges, knobs, screws, nails and bolts. <b>Fasten a box yourself</b> puts in each screw by hand; <b>Wall shelf</b> tries pocket screws and plywood.</p></div>
<h3 id="lesson-hobby-fasten">Lesson 6: Fasten a box yourself</h3>
<p>A small box with nothing holding it together: put in each screw and nail yourself in 3D, watch the preview turn green when it's right, fix what Test finds and see them on the shopping list. <span class="where">About 12 minutes · 9 steps · starts from the hobby-box template</span></p>
<div class="step"><h3><span class="num">1</span>Welcome</h3><p>This box is cut and set in place, but <b>nothing holds it together</b>: that's your job. You'll put in every screw and nail yourself, where you would at the bench.</p></div>
<div class="step"><h3><span class="num">2</span>Open it in 3D</h3><p>Click <b>3D view</b> on the top bar. Turn it so you can see the front and the left end.</p></div>
<div class="step"><h3><span class="num">3</span>Pick Fasten</h3><p>Pick <b>Fasten</b> on the tool bar. In the panel, <b>Kind</b> is <b>Screws</b> and <b>Size</b> is <b>#8 × 1¼" wood screw</b>. Leave <b>Drill a pilot hole</b> ticked.</p></div>
<div class="step"><h3><span class="num">4</span>Screw on the left end</h3><p>Point at the outside of the <b>Left end</b>, low down, over the bottom behind it. The see-through screw is <b>green</b> when it's right, <b>orange</b> or <b>red</b> when a check has something to say. Click to put it in. Put in <b>two</b>, about 1" from the front and from the back: it lines up there by itself when you're close.</p></div>
<div class="step"><h3><span class="num">5</span>And the right end</h3><p>Turn the box round and do the same on the <b>Right end</b>: two screws into the bottom. A click on a screw that's in takes it out again; <b>Ctrl+Z</b> puts it back.</p></div>
<div class="step"><h3><span class="num">6</span>Nail on the front</h3><p>In the panel set <b>Kind</b> to <b>Nails</b> (1¼" brads). Point at the <b>Front</b>, low down over the bottom's edge, and put in <b>three</b> brads along it. Brads hold small parts; they pull out of end grain, and the preview tells you when you're over some.</p></div>
<div class="step"><h3><span class="num">7</span>Test it</h3><p>Click <b>Test</b> on the strip at the top. Fix anything orange or red, with its button or by taking a fastener out and putting it in again, until the fastener checks pass.</p></div>
<div class="step"><h3><span class="num">8</span>What to buy</h3><p>Close it and open <b>Shop ▾</b> → <b>Shopping list…</b>: the screws and brads you put in are there, counted.</p></div>
<div class="step"><h3><span class="num">9</span>What comes next</h3><p>Every screw is where you put it, so the build steps and the build guide show each one. <b>Join ▾</b> has pocket screws, bolts, dowels and glue too: a bolt goes right through both boards, with a washer and a nut.</p></div>
<h3 id="lesson-hobby-shelf">Lesson 7: A wall shelf</h3>
<p>Make the shelf longer, put in the back rail's pocket screws, try plywood and see the sheet layout, read the wall-stud note and check you're ready to build. <span class="where">About 10 minutes · 7 steps · starts from the hobby-shelf template</span></p>
<div class="step"><h3><span class="num">1</span>Welcome</h3><p>A 24" shelf on a 1×4 back rail, held up by two brackets cut from a 1×6, in <b>inches</b>. The brackets are screwed on; the back rail isn't joined to the shelf yet.</p></div>
<div class="step"><h3><span class="num">2</span>Make it 30" long</h3><p>Click the <b>Shelf</b> and set its <b>Length</b> to <kbd>30</kbd>. Then click the <b>Back rail</b> and make it 30" too.</p></div>
<div class="step"><h3><span class="num">3</span>Pocket screws</h3><p>Open <b>Join ▾</b> → <b>Pocket screws</b>. In the <b>3D view</b>, point at the front face of the <b>Back rail</b>, under the shelf near its top, and click: the screw goes in at an angle, up into the <b>Shelf</b>. Put in three along it. (On the plan: click the Back rail, then where it meets the Shelf.)</p></div>
<div class="step"><h3><span class="num">4</span>Try plywood</h3><p>Click the <b>Shelf</b> and set its <b>Size</b> to <b>¾" plywood</b>. Then open <b>Shop ▾</b> → <b>Cut list and layout…</b>: it's laid out on a sheet, with the grain the long way.</p></div>
<div class="step"><h3><span class="num">5</span>Hang it safely</h3><p>Close the cut list and open <b>Shop ▾</b> → <b>Will it tip over?</b> A wall shelf can't tip, but it has to be screwed into the wall studs (or anchors rated for the weight).</p></div>
<div class="step"><h3><span class="num">6</span>Ready to build?</h3><p>Close it and open <b>Shop ▾</b> → <b>Ready to build?</b>: green ticks, or what's left, each with <b>Show me</b>.</p></div>
<div class="step"><h3><span class="num">7</span>Done</h3><p>Step through the build, type the prices in the shopping list and save the build guide, and it's ready for the shop. Draw your own with <b>Board</b> and <b>Fasten</b>.</p></div>
<h3 id="lesson-hobby-trim">Lesson 8: Trim a cabinet: cutting the corners</h3>
<p>Put crown round a cabinet's top and baseboard round its foot, read each corner's saw settings in the cut list, and learn the two ways to cut crown and how to cope an inside corner. <span class="where">About 12 minutes · 9 steps · starts from the hobby-trim template</span></p>
<div class="step"><h3><span class="num">1</span>Welcome</h3><p>This cabinet stands against a wall. You'll trim it: <b>crown molding</b> round its top and <b>baseboard</b> round its foot, then see how each corner is cut at the saw.</p></div>
<div class="step"><h3><span class="num">2</span>Crown round the top</h3><p>Open <b>Make ▾</b> → <b>Crown molding</b>. On the plan, click the top's back-left corner, then its front-left, front-right and back-right corners, and press <kbd>Enter</kbd>. Arc miters both front corners.</p></div>
<div class="step"><h3><span class="num">3</span>Read the saw settings</h3><p>Open <b>Shop ▾</b> → <b>Cut list and layout…</b>. Under <b>Moldings</b>, each crown piece has its length (long point to long point) and, for each end, a <b>miter</b> and a <b>bevel</b>: 31.6° and 33.9° for this crown on a square corner.</p></div>
<div class="step"><h3><span class="num">4</span>Crown laid flat</h3><p>With a compound miter saw, crown can lie <b>flat, face up</b> on the saw table. Set the miter to <b>31.6°</b> and tilt the blade to <b>33.9°</b>. Which edge goes against the fence swaps between the left and the right piece of a corner, so mark each piece and cut a test pair from scrap first. Hold the two together: the fronts meet at the corner, with the long point on the face for an outside corner.</p></div>
<div class="step"><h3><span class="num">5</span>Or upside down and backwards</h3><p>With a plain miter saw (no tilt), stand the crown against the fence <b>upside down and backwards</b>: the edge that goes up against the ceiling (here, under the cabinet top) sits on the saw table, and the edge that goes against the wall leans on the fence, at the angle it will sit at when it's up. Then cut a plain <b>45°</b> miter. A strip of tape on the table marks where its edge goes, so every piece sits at the same angle.</p></div>
<div class="step"><h3><span class="num">6</span>Baseboard round the foot</h3><p>Close the cut list and open <b>Make ▾</b> → <b>Baseboard and shoe</b>. Click along the wall from its left end to where the cabinet meets it, then round the cabinet's front, back to the wall, and on to the wall's right end. Press <kbd>Enter</kbd>.</p></div>
<div class="step"><h3><span class="num">7</span>Inside corners: cope them</h3><p>Where the baseboard meets the cabinet's side by the wall, the corner is <b>inside</b>: the long point is at the back, against the wall. Run one piece square into the corner. Miter the other at 45°, then <b>cope</b> it: saw along the line the miter shows on its face with a coping saw, angled back a little. It fits over the face of the first piece and stays tight even when the corner isn't square. Outside corners (the cabinet's front) are plain 45° miters, standing against the fence.</p></div>
<div class="step"><h3><span class="num">8</span>Test it</h3><p>Click <b>Test</b> on the strip at the top: it reminds you to cope the inside corners, and warns about any piece too short to hold safely at the saw.</p></div>
<div class="step"><h3><span class="num">9</span>What comes next</h3><p>Click a crown or baseboard piece: its panel sets its finish (painted, stained or clear) and shows each piece's cuts. The shopping list counts the sticks to buy (8, 12 or 16 ft), the brads and the filler. Try a picture frame next: <b>Make ▾</b> → <b>Picture frame</b>, then click round its outline and back to the start.</p></div>
<h3 class="lessons-group">Laser</h3>
<h3 id="lesson-hobby-laser">Lesson 9: A laser-cut box</h3>
<p>A box from one thin sheet with fingers on every edge: make it, put your name or a photo on the lid, then see the files for the laser and how to find its kerf. <span class="where">About 15 minutes · 8 steps · starts from the “Blank plan” template</span></p>
<div class="step"><h3><span class="num">1</span>Welcome</h3><p>The laser cuts thin sheets (up to about 6 mm) along a line and burns pictures into them. A box from one sheet needs no screws: its edges have <b>fingers</b> that slot together with a little glue. Arc draws the box; the laser workspace makes the files.</p></div>
<div class="step"><h3><span class="num">2</span>Make the box</h3><p>Open <b>Laser ▾</b> → <b>A laser-cut box…</b>. Keep the sizes (or type your own), keep <b>3 mm basswood plywood</b> and the <b>lid</b>, and click <b>Make it</b>.</p></div>
<div class="step"><h3><span class="num">3</span>See it in 3D</h3><p>Click <b>3D view</b> on the top bar and turn it round: every edge has fingers, the sides' fingers come up through the lid and down through the bottom.</p></div>
<div class="step"><h3><span class="num">4</span>Make it yours</h3><p>Click the <b>Lid</b>. In its panel, <b>Carve words…</b> puts your name on it (the laser engraves it), or <b>On the laser</b> → <b>Engrave a photo…</b> burns a picture into it as dots.</p></div>
<div class="step"><h3><span class="num">5</span>The laser workspace</h3><p>Open <b>Laser ▾</b> → <b>Laser workspace…</b>. Each panel is cut along its true outline, fingers and all: red is cut, blue is engraved. It says the settings to start from for the sheet and the laser.</p></div>
<div class="step"><h3><span class="num">6</span>Find the kerf</h3><p>The laser burns away a thin line (the <b>kerf</b>): the files move each cut out by half of it, so the fingers fit snug. Click <b>Fit test…</b>: cut its six tabs and slots from your sheet, find the pair that slides together snug, and type in its number. Every file after that uses it.</p></div>
<div class="step"><h3><span class="num">7</span>Safely</h3><p>Never leave the laser while it runs: lid shut, extractor on, the fire blanket in reach. Only cut what's on the materials list: <b>never</b> PVC or vinyl, polycarbonate or ABS, foam or fake leather (open <b>Never into the laser</b> at the bottom of the workspace).</p></div>
<div class="step"><h3><span class="num">8</span>What comes next</h3><p>Save the files, run a test on a scrap, then cut the box. On any thin board, <b>On the laser</b> → <b>Bend it</b> adds a living hinge: rows of slits that let the sheet curve round a corner.</p></div>
<h3 class="lessons-group">Electronics</h3>
<h3 id="lesson-elec-fan">Lesson 10: A desk fan</h3>
<p>A TT motor and a printed fan blade on 4 × AA. Swap the battery while it runs and see the speed follow the volts, find out why a 9 V battery is the wrong one, and size the fuse. <span class="where">About 7 minutes · 8 steps · starts from the elec-fan template</span></p>
<div class="step"><h3><span class="num">1</span>A motor on a battery</h3><p>This fan is wired already: 4 × AA, a 1 A fuse, a rocker switch and a TT motor with a fan blade on its shaft. A DC motor turns faster with more volts, and pulls more current when it works harder.</p></div>
<div class="step"><h3><span class="num">2</span>Run it</h3><p>Press <b>Run</b>. The blade turns, and the labels show the motor's volts, its current and its speed.</p></div>
<div class="step"><h3><span class="num">3</span>Fewer volts</h3><p>Under <b>Play with it</b>, pick <b>2 × AA alkaline (3 V)</b>. Half the volts, so it turns at less than half the speed: the motor loses some of its volts inside its windings.</p></div>
<div class="step"><h3><span class="num">4</span>The 9 V battery</h3><p>Now pick <b>9 V battery</b>. It turns fast at first, but read the card: a 9 V battery has a lot of resistance inside, so its volts drop under a motor, and it lasts only minutes.</p></div>
<div class="step"><h3><span class="num">5</span>Keep the best one</h3><p>Pick <b>4 × AA NiMH (4.8 V)</b>: rechargeable cells with very little resistance inside. Press <b>Keep this</b>, so the plan has it.</p></div>
<div class="step"><h3><span class="num">6</span>A fuse too small</h3><p>Press <kbd>Esc</kbd> to stop Run. Click the fuse (F1) on the plan and set its <b>Rating</b> to <b>0.5 A</b>. Press <b>Run</b>: the card says it blows when the motor starts. A motor pulls several times its running current for a moment.</p></div>
<div class="step"><h3><span class="num">7</span>The right fuse</h3><p>Press <b>Use a 1 A fuse</b> on the card. A fuse should be a bit above what the circuit normally takes, and below what its wires can carry.</p></div>
<div class="step"><h3><span class="num">8</span>Try this</h3><p>Try a flat battery (<b>Nearly flat</b> under Play with it), or an LED with its resistor that lights while the fan runs. Unplug a wire by clicking it while Run plays. In Arc Engineering, add gears to the motor's shaft and see the whole machine slow with the battery.</p></div>
<h3 id="lesson-elec-playbench">Lesson 11: Play bench</h3>
<p>Nothing to build: one battery and switch feeding an LED with a dimmer knob, a buzzer on a button and a fan on its own switch. Turn, press, flip, unplug and short it while Run plays. <span class="where">About 5 minutes · 7 steps · starts from the elec-playbench template</span></p>
<div class="step"><h3><span class="num">1</span>Play with it</h3><p>Everything here is wired to one battery, through a fuse and a rocker switch. You can't break anything: Run never changes the plan, and Stop puts it all back.</p></div>
<div class="step"><h3><span class="num">2</span>Run</h3><p>Press <b>Run</b>. The LED glows dimly and the fan turns.</p></div>
<div class="step"><h3><span class="num">3</span>Turn the knob</h3><p>Drag the <b>RV1 knob</b> slider under <b>Play with it</b> (or click the knob in 3D). The knob is a resistor you can change: less resistance, more current, a brighter LED.</p></div>
<div class="step"><h3><span class="num">4</span>Press the button</h3><p>Tick <b>S2 push button held down</b> (or click the red button in 3D). The buzzer beeps for as long as it's pressed.</p></div>
<div class="step"><h3><span class="num">5</span>Pull a wire out</h3><p>Click any wire on the 3D model. It unplugs: whatever it fed stops. Click it again to plug it back in.</p></div>
<div class="step"><h3><span class="num">6</span>Short it, safely</h3><p>Tick <b>Short the battery</b>. The card says how many amps rush straight from + to −, and the fuse blows. That's what fuses are for. Never try this with a real battery.</p></div>
<div class="step"><h3><span class="num">7</span>Keep what you like</h3><p>Press <b>Put back</b>, then change something you like (a full battery, the knob half way) and press <b>Keep this</b>: it goes into the plan as one step you can undo. Then try the <b>Flashlight</b> and <b>Desk fan</b> templates, or start your own from <b>Power ▾</b>.</p></div>
<h3 id="lesson-elec-car">Lesson 12: A battery car</h3>
<p>A two-wheel car on 4 × AA with a motor driver and a Nano. Drive it across the floor and steer it, swap the L298N for a TB6612 and see it speed up, find out why NiMH cells make the board reset, and try a LiPo. <span class="where">About 12 minutes · 9 steps · starts from the elec-car template</span></p>
<div class="step"><h3><span class="num">1</span>The car</h3><p>Everything rides on the clear chassis: 4 × AA, a 2 A fuse, a rocker switch, an <b>L298N motor driver</b> and a <b>Nano</b> board. A TT motor and wheel sit under each side. The board's pins D5 and D6 tell the driver what each motor does; the driver gives the motors the battery's current.</p></div>
<div class="step"><h3><span class="num">2</span>Drive it</h3><p>Press <b>Run</b>. The car drives across the floor. The bar at the top shows its speed and how far it would go on these batteries.</p></div>
<div class="step"><h3><span class="num">3</span>Steer it</h3><p>Click the 3D view, then use the <b>arrow keys</b>: up and down drive, left and right turn it on the spot. Each key tells the board to run one motor forward and the other back. Let go and it drives on.</p></div>
<div class="step"><h3><span class="num">4</span>A better driver</h3><p>Under <b>Play with it</b>, set <b>U1 driver</b> to <b>TB6612FNG</b>. The car stops! Read the card: this driver has a second supply, VCC, for the chip that reads the signals.</p></div>
<div class="step"><h3><span class="num">5</span>Give it 5 V</h3><p>Press <b>Wire VCC to the board's 5 V</b> on the card. The car goes again, faster: the L298N lost about 1.9 V inside, the TB6612 only a few tenths, so the motors get nearly all 6 V.</p></div>
<div class="step"><h3><span class="num">6</span>Rechargeable cells</h3><p>Under <b>Play with it</b>, pick the battery <b>4 × AA NiMH (4.8 V)</b>. The car stops and the board blinks: its VIN needs about 6.5 V, because its regulator loses about 1.1 V making 5 V.</p></div>
<div class="step"><h3><span class="num">7</span>A LiPo</h3><p>Now pick <b>2S LiPo (7.4 V)</b>. The board runs again, but the card says the motors get too many volts. Press <b>Run it at … %</b>: the driver switches the power on and off, and the motor feels the average.</p></div>
<div class="step"><h3><span class="num">8</span>LiPo care</h3><p>A LiPo is the advanced choice: light and strong, but it needs care. Charge it on a <b>balance charger</b>, in a <b>fire-safe bag</b>, on something that won't burn, and never leave it charging alone. Never use a puffed, dented or hot pack. Store it at about 3.8 V a cell and never run it below 3.2 V a cell (fit a low-voltage alarm). Recycle old ones through Call2Recycle.</p></div>
<div class="step"><h3><span class="num">9</span>Try this</h3><p>Tick <b>Follow</b> on the Run bar to ride along. Try a <b>Nearly flat</b> battery and watch the range drop. Swap one motor's two wires (stop Run, click a wire, change its end) and see the car spin on the spot. Then open <b>Power ▾</b> → <b>Schematic and wiring diagram…</b> to see the whole circuit drawn out.</p></div>
<h3 id="lesson-elec-speedknob">Lesson 13: A fan with a speed knob</h3>
<p>A TT motor and fan on a 12 V adapter through a PWM speed module. Turn the knob in Run and see the speed, the amps and the watts, find the knob's limit, and see why a knob can't just be a big resistor. <span class="where">About 6 minutes · 7 steps · starts from the elec-speedfan template</span></p>
<div class="step"><h3><span class="num">1</span>The fan</h3><p>A certified <b>Class 2</b> plug-in adapter gives 12 V DC: it's the only part that touches the wall, and Arc shows only its low-voltage plug. A 1 A fuse and a rocker switch feed a <b>PWM speed module</b>, which turns a TT motor and a fan blade.</p></div>
<div class="step"><h3><span class="num">2</span>Run it</h3><p>Press <b>Run</b>. The knob is at 50 %: the motor gets about 6 V, its rated volts.</p></div>
<div class="step"><h3><span class="num">3</span>Turn the knob</h3><p>Drag the <b>U1 knob</b> slider under <b>Play with it</b> (or click the knob in 3D). The speed follows it.</p></div>
<div class="step"><h3><span class="num">4</span>Too far</h3><p>Turn it up past about 65 %. The card says the motor gets too many volts: a 6 V motor on 12 V spins too fast and wears out.</p></div>
<div class="step"><h3><span class="num">5</span>Not a resistor</h3><p>Look at the labels: at 50 % the motor takes about 0.28 A, but the adapter gives only about half that. The module switches the full 12 V on and off thousands of times a second, so very little turns into heat. A resistor dropping 6 V at 0.28 A would turn 1.7 W into heat: seven times what a ¼ W resistor can take.</p></div>
<div class="step"><h3><span class="num">6</span>Set it right</h3><p>Press <b>Turn the knob to 50 %</b> on the card (or slide it back and press <b>Keep this</b>).</p></div>
<div class="step"><h3><span class="num">7</span>Try this</h3><p>Try the knob at 20 %: the motor slows, and below a point it stalls (it needs enough volts to start). Swap the adapter to 9 V in its panel and find the new top of the knob. A DRV8833 or TB6612 with a board does the same switching, with forward and back too.</p></div>
<h3 class="lessons-group">3D printing</h3>
<h3 id="lesson-hobby-start">Lesson 14: Draw a part to print</h3>
<p>Draw a part to exact sizes in millimetres, cut a hole, label it, measure it, see it in 3D and open the 3D Print workspace with the H2D's bed. <span class="where">About 8 minutes · 9 steps · starts from the “3D print: an object in millimetres” template</span></p>
<div class="step"><h3><span class="num">1</span>Welcome</h3><p>This panel walks you through each step and ticks it off when it sees it done. The <b>tools</b> are on the left, and the <b>panel</b> on the right shows the settings for the tool or whatever you pick. This design is in <b>millimetres</b>; the dashed outline is your printer's <b>bed</b>.</p></div>
<div class="step"><h3><span class="num">2</span>Pick the 3D shape tool</h3><p>Click <b>3D shape</b> on the tool bar. Its panel sets the shape (a rectangle, a circle, any outline, a turned shape, a gear) and how tall it is.</p></div>
<div class="step"><h3><span class="num">3</span>Draw a part to size</h3><p>Set <b>Draw</b> to <b>Rectangle</b> and <b>Height</b> to <kbd>10 mm</kbd>. Click one corner on the plan, then type the size, like <kbd>60 x 40</kbd>, and press <kbd>Enter</kbd>.</p></div>
<div class="step"><h3><span class="num">4</span>Cut a hole</h3><p>Your part is picked, so the panel shows <b>its</b> settings. Press <kbd>Esc</kbd> twice, pick <b>3D shape</b> again and set <b>Draw</b> to <b>Circle</b>. Draw a small circle <b>inside</b> your part: a shape drawn inside another cuts a hole straight through it, for a screw or a peg.</p></div>
<div class="step"><h3><span class="num">5</span>Label it</h3><p>Pick <b>Text</b> (<kbd>T</kbd>), click beside your part and type its name, like <b>Bracket</b>. <kbd>Esc</kbd> when you're done.</p></div>
<div class="step"><h3><span class="num">6</span>Measure it</h3><p>Pick <b>Measure</b> (<kbd>E</kbd>) and click two corners of your part. The length shows on the plan; nothing is added.</p></div>
<div class="step"><h3><span class="num">7</span>See it in 3D</h3><p>Click <b>3D view</b> on the top bar. Drag to turn it, right-drag to slide, scroll to zoom. Everything you draw shows up there straight away.</p></div>
<div class="step"><h3><span class="num">8</span>Open the 3D Print workspace</h3><p>Open <b>File ▾</b> → <b>3D Print workspace…</b>: the printer and its bed, the parts with their names and numbers, the print check and the files, all in one place.</p></div>
<div class="step"><h3><span class="num">9</span>What comes next</h3><p>That's the start. The next lessons are about wood: build a birdhouse, screw boards together, make a shelf and put trim on it. Each one opens its own practice design, so nothing you've drawn is lost. Find any command with <b>Ctrl+K</b>.</p></div>
<h3 id="lesson-printws-plates">Lesson 15: 3D Print workspace: plates and the colour change</h3>
<p>Open the 3D Print workspace, see how a model base is cut into plates with puzzle tabs, change the plate sizes, and find the layer where the filament changes colour. <span class="where">About 8 minutes · 7 steps · starts from the “3D print: a small landscape (plates, inserts and parts)” template</span></p>
<div class="step"><h3><span class="num">1</span>A small landscape to practise on</h3><p>This practice board is 400 × 300 mm, in millimetres at full size. It has a grey cobbled street, a raised cobbled square with a turntable hole, two trees and a lamp. Nothing here touches your own projects.</p></div>
<div class="step"><h3><span class="num">2</span>Open the 3D Print workspace</h3><p>Click <b>3D Print</b> in the top bar. All the 3D printing tools are in its seven sections, beside the plan.</p></div>
<div class="step"><h3><span class="num">3</span>Select the board</h3><p>Open <b>2. Model ground and plates</b>, then click the board's edge on the plan. The board is the <b>model base</b>: the ground on it is cut into plates that fit the printer's bed.</p></div>
<div class="step"><h3><span class="num">4</span>Change the plate sizes</h3><p>Type <kbd>150</kbd> in <b>Column widths</b> and press <kbd>Enter</kbd>. The plate line on the plan moves: L1F is 150 mm wide now and L2F takes the rest (250 mm), with puzzle tabs between them. (The last column always takes what's left.)</p></div>
<div class="step"><h3><span class="num">5</span>Put it back</h3><p>Press <kbd>Ctrl+Z</kbd> to undo. Changing plate sizes changes every plate in that row or column, so only do it if you'll print all of them again.</p></div>
<div class="step"><h3><span class="num">6</span>The colour change</h3><p>Read the colour-change line in section 2: below it the plates print in the base colour (grey), above it in the ground cover colour (white). It tells you the layer to type into Bambu Studio. The street is below it, so its cobbles print grey; the raised square is above it, so its cobbles would print white (the next lesson fixes that with an insert).</p></div>
<div class="step"><h3><span class="num">7</span>A map of the plates</h3><p>The plate map shows every plate by name. <b>Save the plate map as a picture</b> keeps one to print out and lay the plates by. Click <b>← Back to the plan</b> when you're done. That's it!</p></div>
<h3 id="lesson-printws-inserts">Lesson 16: 3D Print workspace: surfaces and printed inserts</h3>
<p>Soften the cobblestones on a street, turn a raised square into a printed insert that drops into a pocket, change how much snow lies on it, and split it to fit the bed. <span class="where">About 10 minutes · 8 steps · starts from the “3D print: a small landscape (plates, inserts and parts)” template</span></p>
<div class="step"><h3><span class="num">1</span>Surfaces and inserts</h3><p>Cobblestones, bricks and planks are pressed into the printed plates. But anything grey that sits above the colour change (like this raised square) prints white, so it becomes a <b>printed insert</b>: its own two-colour piece that drops into a pocket.</p></div>
<div class="step"><h3><span class="num">2</span>Open the 3D Print workspace</h3><p>Click <b>3D Print</b> in the top bar.</p></div>
<div class="step"><h3><span class="num">3</span>Change the street's cobbles</h3><p>Open <b>3. Surfaces</b> and click the street on the plan. Change <b>Soft edges</b> (how rounded each stone's edge is) or <b>Groove depth</b>, and press Enter. The 3D view shows the new stones.</p></div>
<div class="step"><h3><span class="num">4</span>Select the square</h3><p>Open <b>4. Inserts</b> and click the raised <b>Town square</b> on the plan. The section says <b>Insert in: Town square</b>.</p></div>
<div class="step"><h3><span class="num">5</span>Make it a printed insert</h3><p>Leave <b>Stones or tiles</b> on <b>Soft cobblestones</b> and click <b>Make it a printed insert</b>. The square drops 3 mm to make the pocket, and the insert's stones are made, with a hole round the turntable.</p></div>
<div class="step"><h3><span class="num">6</span>Change the snow</h3><p>Drag the <b>Snow on the stones</b> slider, or type a number from 0 to 100 in its box (<kbd>30</kbd>, say) and press <kbd>Enter</kbd>. The insert is made again: <b>What was made</b> shows how many stones have snow.</p></div>
<div class="step"><h3><span class="num">7</span>Split it to fit</h3><p>Set <b>Split into</b> to <b>Four quarters</b>. Each piece prints on its own; a big insert has to be split so every piece fits the bed (<b>Automatic</b> does that by itself).</p></div>
<div class="step"><h3><span class="num">8</span>Have a look</h3><p>Open the 3D view to see the stones and their caps of snow. The plates don't change when you change the snow: only the insert's pieces need printing again. To print them, select them and use <b>Save the selected parts…</b> in section 6; each comes as a two-colour .3mf. That's it!</p></div>
<h3 id="lesson-printws-parts">Lesson 17: 3D Print workspace: parts and part numbers</h3>
<p>See how Arc breaks a model into printable parts, print two shapes as one part, give a layer its own part-number letters, read the parts list, and re-make only what changed. <span class="where">About 8 minutes · 8 steps · starts from the “3D print: a small landscape (plates, inserts and parts)” template</span></p>
<div class="step"><h3><span class="num">1</span>How a model becomes parts</h3><p>The ground is cut into <b>plates</b>. Every other 3D shape is a <b>part</b>, except that shapes that <b>touch</b> print as one part (each tree's trunk and crown), and shapes with the same <b>Print together as</b> text print as one part even when they don't touch.</p></div>
<div class="step"><h3><span class="num">2</span>Open the 3D Print workspace</h3><p>Click <b>3D Print</b> in the top bar.</p></div>
<div class="step"><h3><span class="num">3</span>Make the parts list</h3><p>Open <b>5. Parts and numbers</b> and click <b>Make the parts list</b>. Each part has a number from its layer's letters (T for Trees, L for Lamps), its size, colours and grams. The lamp is two parts: its post and its globe don't touch.</p></div>
<div class="step"><h3><span class="num">4</span>Select the lamp's two shapes</h3><p>Click the lamp post on the plan, then hold <b>Shift</b> and click its globe.</p></div>
<div class="step"><h3><span class="num">5</span>Print them as one part</h3><p>Type <kbd>lamp</kbd> in <b>Print together as</b> and press <kbd>Enter</kbd>. Now they print as one part, glued at the slicer or joined by a peg.</p></div>
<div class="step"><h3><span class="num">6</span>Part number letters</h3><p>Type <kbd>LP</kbd> in <b>Part number letters</b> and press <kbd>Enter</kbd>. Every part on the Lamps layer gets them. You never type the numbers: Arc gives them in order when it makes the list or saves the files.</p></div>
<div class="step"><h3><span class="num">7</span>Make the list again</h3><p>Click <b>Make the parts list again</b>: the lamp is one part now, LP-01. New parts go on the list by themselves. Numbers are given in order, so a new part can move the numbers after it: always print from the newest files and list together.</p></div>
<div class="step"><h3><span class="num">8</span>Re-make only what changed</h3><p>In <b>6. Check and export</b>, <b>Save just these plates…</b> makes only the plates you tick, and <b>Save the selected parts…</b> only the parts you've selected. <b>7. What to watch out for</b> lists anything risky about your changes: seams, puzzle tabs, pockets, the colour change and the bed size. That's it!</p></div>
<h3 class="lessons-group">Do it with me</h3>
<h3 id="lesson-withme-rock">Lesson 18: Do it with me: rock walls and cliffs</h3>
<p>Draw a rock wall on a small landscape with the Rock tool, change its rock, colour and the size of its stones, colour some stones lighter, turn it into a mountain cliff, and save a test tile to print. <span class="where">About 15 minutes · 12 steps · starts from the “3D print: a small landscape (plates, inserts and parts)” template</span></p>
<div class="step"><h3><span class="num">1</span>Rock, as it really is</h3><p>The Rock tool draws walls, ledges and cliffs in real rock: every stone stands out in 3D and in the print files, and it always keeps to the 45° rule, so it prints standing up with no supports. This board is 400 × 300 mm, at full size, so the rock is sized in millimetres.</p></div>
<div class="step"><h3><span class="num">2</span>Pick the Rock tool</h3><p>Click <b>Rock</b> on the tool bar. The panel shows a picture of each rock: laid stone on top (for walls and house finishes), natural rock below (for ledges and cliffs).</p></div>
<div class="step"><h3><span class="num">3</span>Pick a rock</h3><p>Click the <b>Rough shale</b> picture: thin slabs with lumpy faces and chipped corners.</p></div>
<div class="step"><h3><span class="num">4</span>Draw the wall</h3><p>Click near the back-left corner of the board, then near the back-right corner, and press <kbd>Enter</kbd>. The wall stands where you clicked, from the ground up to its <b>Top of wall</b>.</p></div>
<div class="step"><h3><span class="num">5</span>See it in 3D</h3><p>Click <b>3D view</b> on the top bar and zoom in on the wall. Each slab has its own shade, and the joints are darker.</p></div>
<div class="step"><h3><span class="num">6</span>Select it</h3><p>Pick the <b>Select</b> arrow and click the wall on the plan. Its panel has the same pictures, and everything below them.</p></div>
<div class="step"><h3><span class="num">7</span>Its colour</h3><p>Click one of the colour squares under <b>Colour</b>: <b>Rustic brown</b>, say. Or click the box beside them for any colour at all. Every stone takes it, each a little lighter or darker.</p></div>
<div class="step"><h3><span class="num">8</span>Some stones lighter</h3><p>Drag <b>How many</b> to about 30%. A third of the stones turn the colour under <b>Some stones in</b>. In print they become a second piece, for a second filament.</p></div>
<div class="step"><h3><span class="num">9</span>The size of the stones</h3><p>Drag <b>Stone size</b> to bigger or smaller. <b>Depth</b>, <b>Roughness</b> and <b>Wobble</b> change how far the stones stand out, how lumpy they are and how much their lines wave. <b>Reset the shape</b> puts them back.</p></div>
<div class="step"><h3><span class="num">10</span>A mountain cliff</h3><p>Click the <b>Mountain cliff</b> picture: the same wall becomes a cliff of buttresses, bays and long cracks. Try <b>Granite boulders</b> and <b>Limestone cliff</b> too.</p></div>
<div class="step"><h3><span class="num">11</span>A test tile</h3><p>Click <b>Save a test tile…</b> near the bottom of the panel: a piece 50 mm long and 30 mm tall of this rock, as a Bambu Studio project, to try on the printer before the whole wall. In two colours it takes much longer, because the printer changes filament on every layer.</p></div>
<div class="step"><h3><span class="num">12</span>Printing it</h3><p>Open <b>3D Print</b> on the top bar: the wall is a part of its own, standing up, with no supports. On a house, the Rock tool makes rock garden walls and retaining walls, and walls finished in <b>Stacked shale</b> or <b>Stone veneer</b> show real stones in 3D.</p></div>
<h3 class="lessons-group">Wood projects</h3>
<h3 id="lesson-hobby-planter">Lesson 19: A cedar planter</h3>
<p>A planter from 1×6 cedar for the garden: look it over in 3D, test it, step through the build and see what to buy. <span class="where">About 15 minutes · 6 steps · starts from the hobby-planter template</span></p>
<div class="step"><h3><span class="num">1</span>Welcome</h3><p>A cedar planter, 24" × 12" outside: two rows of <b>1×6 cedar</b> on each side and end, and two bottom slats with a gap between them so water drains. Cedar is used outdoors because it resists rot.</p></div>
<div class="step"><h3><span class="num">2</span>See it in 3D</h3><p>Click <b>3D view</b> on the top bar and turn it: the ends sit between the sides, and the slats sit on top of a 1" gap.</p></div>
<div class="step"><h3><span class="num">3</span>Test it</h3><p>Click <b>Test</b> on the strip. Arc checks every board: anything to fix gets a button.</p></div>
<div class="step"><h3><span class="num">4</span>Build it in Arc</h3><p>Close the checks and click <b>Build</b>. Press <b>Next</b> to watch each board go on.</p></div>
<div class="step"><h3><span class="num">5</span>What to buy</h3><p>Open <b>Shop ▾</b> → <b>Shopping list…</b>: the cedar boards and the screws. Use exterior screws (coated or stainless) outdoors.</p></div>
<div class="step"><h3><span class="num">6</span>Planting it</h3><p>Line the inside with landscape fabric (not plastic) so it drains, add a few centimetres of gravel, then potting soil. Arc Landscape works out how much soil a planter holds.</p></div>
<h3 class="lessons-group">3D printing</h3>
<h3 id="lesson-hobby-minigolf-print">Lesson 20: Print a mini golf hole</h3>
<p>One mini golf hole cut into pieces that fit your printer's bed and push together: pick the ball, the scale and the fit, and save the files. <span class="where">About 10 minutes · 5 steps · starts from the hobby-minigolf template</span></p>
<div class="step"><h3><span class="num">1</span>Welcome</h3><p>A straight mini golf hole with a cup. Opening it turned on the <b>Golf</b> tools (Preferences → Show the mini golf tools turns them off again).</p></div>
<div class="step"><h3><span class="num">2</span>Select the hole</h3><p>Click the green on the plan. Its panel shows its par, its length and its slope.</p></div>
<div class="step"><h3><span class="num">3</span>Print it</h3><p>Open <b>Golf ▾</b> → <b>Print the selected hole…</b>. Arc fits the hole to your printer's bed, cuts it into sections with dovetails if it's long, and puts the cup in.</p></div>
<div class="step"><h3><span class="num">4</span>The fit</h3><p>Set <b>Fit</b> to <b>0.3 mm</b>: the gap between pieces that push together. On a 0.4 mm nozzle, a little looser fits better than too tight.</p></div>
<div class="step"><h3><span class="num">5</span>Save and print</h3><p>Save the 3MF (one per plate) and print the green in green, the border in white. A 10 mm ball rolls well at this size; glue felt on the top if you like.</p></div>
<!-- lessons:end -->

<h2 class="part" id="reference">12. Quick reference and good to know</h2>
<h3 id="shortcuts">Keyboard shortcuts</h3>
<div class="tablewrap"><table>
  <tr><th>Key</th><th>Tool</th><th>Key</th><th>Tool</th></tr>
  <tr><td><kbd>V</kbd></td><td>Select</td><td><kbd>E</kbd></td><td>Measure</td></tr>
  <tr><td><kbd>L</kbd></td><td>Line</td><td><kbd>T</kbd></td><td>Text</td></tr>
  <tr><td><kbd>B</kbd></td><td>Parts</td><td><kbd>K</kbd></td><td>Paint</td></tr>
  <tr><td><kbd>M</kbd></td><td>Move</td><td><kbd>C</kbd></td><td>Duplicate</td></tr>
  <tr><td><kbd>Q</kbd></td><td>Rotate</td><td><kbd>X</kbd></td><td>Mirror</td></tr>
  <tr><td><kbd>Del</kbd></td><td>Delete</td><td><kbd>Esc</kbd></td><td>Stop the tool, then pick nothing</td></tr>
  <tr><td><kbd>Ctrl</kbd>+<kbd>Z</kbd></td><td>Undo</td><td><kbd>Ctrl</kbd>+<kbd>K</kbd></td><td>Search</td></tr>
</table></div>
<p>While placing a board or a part in 3D, <kbd>R</kbd> turns it and <kbd>Shift</kbd> works in finer steps. While drawing a molding, <kbd>F</kbd> flips it.</p>
<h3 id="limits">Good to know</h3>
<ul class="do">
  <li><b>The numbers are for learning.</b> Typical prices, times, screw checks and <b>Will it tip over?</b> are estimates. Check your own store's prices, and measure your own wood: a real board can be a little off its size.</li>
  <li><b>The checks look for common mistakes.</b> They don't see everything. Passing Test doesn't mean it's safe to sit on, climb on or hang a heavy load from: ask your teacher.</li>
  <li><b>Practice isn't the machine.</b> Stepping through a build in Arc Hobby never replaces being shown at the machine.</li>
  <li><b>Your work is saved apart.</b> On one device, Arc Hobby keeps its settings and saved work separate from the other Arc editions. <span class="ui">File ▾</span> → <b>Backup copies…</b> lists earlier copies of your work.</li>
</ul>

<details class="fold" id="building-pack"><summary>The Building pack</summary>
<p>Walls, rooms, doors and windows, stairs, floors, roofs, porches and outdoor work are Arc's house tools. They're for a dollhouse, a model or a building round your project, and they're off at the start. To turn them on, open <span class="ui">File ▾</span> → <b>Preferences…</b> and tick <b>Show the house tools</b>.</p>
<div data-from="tool-wall tool-room tool-door tool-stairs tool-floors tool-outdoor tool-roof tool-porch tool-decorate tool-parts"></div>
</details>
`,
};
