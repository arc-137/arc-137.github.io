// Arc Engineering's own chapters of the user guide: guide-edition.js shows them in place of Arc's on the same page.
// <div data-from="id id"> takes those parts out of Arc's guide (user-guide.html), so shared text stays the same.
// The Hands-on lessons part is made by tools/make-guide-lessons.js. No backticks or dollar-brace in the text.
window.ARC_GUIDE = {
  name: 'Arc Engineering',
  lead: 'How to draw machines, coasters and structures, and press Run to see whether they work.',
  html: String.raw`
<h2 class="part" id="start">1. How to use this guide</h2>
<p>Arc Engineering is for designing things that move or hold: machines, coasters and structures. You draw them with real parts at their real sizes, press <b>Run</b>, and watch them work in 3D. If something goes wrong, Run says what, why, and how to fix it.</p>
<div class="tip"><b>For models, prototypes and learning.</b> A real ride, or a machine that carries loads or people, needs a licensed engineer. Run's numbers are typical and rough. They teach how things behave; they don't prove that something is safe.</div>
<p>Part 2 gets you started. Part 3 shows you round the screen, and Part 4 explains Run, which every kind of design uses. Parts 5 to 8 take machines, coasters, structures and wires in turn. Part 9 is 3D printing what you've designed. Part 10 has every hands-on lesson written out, and Part 11 is for looking things up.</p>
<div class="tip"><b>Typing sizes.</b> New designs start in <b>millimetres</b>. When a tool is waiting for a click you can type a size and press <kbd>Enter</kbd>, and every number in the panel takes typing too.</div>
<div class="tip"><b>Undo.</b> <kbd>Ctrl</kbd>+<kbd>Z</kbd> undoes anything, and a Fix on Run's card is one step to undo. <kbd>Esc</kbd> or a right-click stops the tool you're using.</div>

<h2 class="part" id="first-design">2. Your first design</h2>
<p>When Arc Engineering starts, the welcome screen offers <b>New design</b>, <b>From a template…</b> and <b>Open a design…</b>, with the <b>Hands-on lessons</b> beside them. <b>New design</b> opens an empty plan with a <b>What will you build?</b> card, which starts any of these lessons or opens a template, and goes as soon as you draw something. Three good ways in:</p>
<ul class="do">
  <li><a href="#lesson-eng-start">Getting started with Arc Engineering</a>: a line to length, a motor turning two gears, Run in 3D, a stick and a dimension, in about 10 minutes.</li>
  <li><a href="#lesson-eng-withme-coaster">Do it with me: a desktop coaster</a>: every piece of a whole coaster, from dashed lines on an empty plan to a ride in the front seat.</li>
  <li><a href="#lesson-eng-withme-bridge">Do it with me: a truss bridge</a>: every stick of a whole bridge, in the 3D view, then its load test.</li>
</ul>
<h3 id="eng-templates">Templates</h3>
<p><span class="ui">File ▾</span> → <span class="ui">New from a template…</span> opens a finished starting point. Most of them have a problem on purpose, and a lesson that goes with it.</p>
<div class="tablewrap"><table>
  <tr><th>Template</th><th>What it is</th></tr>
  <tr><td><b>Desktop coaster</b></td><td>A coaster about as long as a table, with two problems to find.</td></tr>
  <tr><td><b>Two-stage gearbox</b></td><td>A machine with three faults planted in it.</td></tr>
  <tr><td><b>Build it in 3D</b></td><td>Two blocks and a gap, ready for a bridge.</td></tr>
  <tr><td><b>Balsa bridge</b>, <b>Craft-stick bridge</b>, <b>Ladder bridge</b></td><td>Bridges to test and improve.</td></tr>
  <tr><td><b>Bridge contest</b></td><td>A bridge with goals to meet: what it holds, its weight and its cost.</td></tr>
  <tr><td><b>Where does the load go?</b></td><td>A truss for reading the push and pull in each stick.</td></tr>
  <tr><td><b>Tower in the wind</b>, <b>Tower in an earthquake</b></td><td>Tall towers to keep standing.</td></tr>
  <tr><td><b>Wall crane</b>, <b>Shelf of books</b></td><td>Arms held out from a wall. The shelf is full size, in aluminium.</td></tr>
  <tr><td><b>3D print: an object in millimetres</b>, <b>a small landscape</b>, <b>a house model</b></td><td>Starting points for printing (Part 9).</td></tr>
</table></div>

<h2 class="part" id="screen">3. The main screen</h2>
<p>The plan fills the middle: you look down on your design, at its real size. The tool bar is on the left, the top bar has the menus, and the side panel on the right shows the numbers of whatever tool or part is picked. Click <span class="ui">3D view</span> and the model opens beside the plan; click it again to close it. Drag to turn the view, right-drag to slide it, and scroll to zoom.</p>
<h3 id="tools">The tool bar and the tool packs</h3>
<p>Tools come in groups called packs. All of these are on from the start:</p>
<div class="tablewrap"><table>
  <tr><th>Group</th><th>Tools on the bar</th><th>Its menu</th></tr>
  <tr><td>Drawing</td><td>Select (<kbd>V</kbd>), Measure (<kbd>E</kbd>), Line (<kbd>L</kbd>), Polyline (<kbd>P</kbd>), Circle, 3D shape, Dimension, Text (<kbd>T</kbd>)</td><td><span class="ui">Draw ▾</span></td></tr>
  <tr><td>Coaster</td><td>Track, Lift hill, Drop, Loop, Curve, Brakes, Launch, Station, Supports, Car</td><td><span class="ui">Coaster ▾</span></td></tr>
  <tr><td>Mechanisms</td><td>Gear, Gear pair, Shaft, Motor, Pulley, Belt, Rack, Crank</td><td><span class="ui">Machine ▾</span></td></tr>
  <tr><td>Structures</td><td>Stick, Post, Truss, Tower, Gusset, Cable, Guy lines, Weight, Block, Move joint</td><td><span class="ui">Structures ▾</span></td></tr>
  <tr><td>Changing things</td><td>Move (<kbd>M</kbd>), Duplicate (<kbd>C</kbd>), Rotate (<kbd>Q</kbd>), Mirror (<kbd>X</kbd>)</td><td><span class="ui">Modify ▾</span></td></tr>
</table></div>
<p>House tools are a pack too, off at the start: see <a href="#building-pack">the Building pack</a> at the end of this guide.</p>
<h3 id="eng-menus">The menus</h3>
<ul>
  <li><span class="ui">File ▾</span>: new, open and save, templates, backup copies, bringing in a drawing, and settings.</li>
  <li><span class="ui">Export ▾</span>: pictures, DXF and DWG drawings, 3D files, and <b>3D print</b>.</li>
  <li><span class="ui">View ▾</span>: how the 3D view draws things, such as <b>X-ray</b> and <b>Wireframe</b>.</li>
  <li><span class="ui">Test ▾</span>: <b>Run</b>, <b>Step</b>, <b>Ride along</b>, <b>Run check</b> (what's wrong, without playing it) and <b>Record a video</b>.</li>
  <li><span class="ui">Snap ▾</span> and <span class="ui">Show ▾</span>: units, angle lock and rounding; dimensions and the grid.</li>
  <li><span class="ui">Guide ▾</span>: the hands-on lessons, this guide and the search.</li>
</ul>
<h3 id="parts-drawer">The Parts drawer</h3>
<p><span class="ui">Machine ▾</span> → <b>Parts drawer…</b> or <span class="ui">Structures ▾</span> → <b>Parts drawer…</b> shows every part with a picture, in groups: Motors, Bearings, Shafts, Gears, Belts &amp; pulleys, Racks &amp; cranks, Sticks, Joints, Weights and My parts. Search it by name, and click a card to pick the tool that places that part.</p>
<h3 id="search">Search for any command (Ctrl+K)</h3>
<p>Press <kbd>Ctrl</kbd>+<kbd>K</kbd>, or click the magnifier on the top bar, and type a word or two: <code>gear</code>, <code>truss</code>, <code>wind</code>. It finds tools, menu commands, settings, lessons and the topics in this guide. Use <kbd>↑</kbd> <kbd>↓</kbd> and <kbd>Enter</kbd>, or click.</p>
<div data-from="help"></div>
<h3 id="settings">Preferences and Project settings</h3>
<p><span class="ui">File ▾</span> → <span class="ui">Preferences…</span> (<kbd>Ctrl</kbd>+<kbd>,</kbd>) holds how Arc Engineering works on this computer: units for new designs, the country for prices and money (Canada, the US or the UK), angle lock and rounding, what the plan shows, the 3D background, autosave and the welcome screen. <span class="ui">File ▾</span> → <span class="ui">Project settings…</span> holds what's saved with this design, such as its name and units.</p>
<div data-from="backups"></div>
<h3 id="layers">Layers</h3>
<p>Every item sits on a layer: Parts, Frame, Motors &amp; gears, Wiring, Base &amp; landscape, Pictures to trace and Sketch lines. In the Layers list under the panel, click a layer to draw on it, the eye to hide it and the lock to stop it being picked. Double-click a name to rename it.</p>
<div data-from="drafting tool-shape tool-edit measure"></div>
<h3 id="focus">Work on just this part</h3>
<p>Select what you want to work on and click <b>◎ Work on this part</b> at the top of the panel (or <span class="ui">Modify ▾</span> → <b>Work on just this part</b>). Only those pieces can be picked and changed, and the rest fades, so nothing else moves by accident. It's still the real design, so nothing needs copying back.</p>
<div data-from="lock"></div>
<p>The house tools are tucked away at the start. <span class="ui">File ▾</span> → <b>Preferences</b> → <b>Show the house tools</b> brings them back, with Framing (<kbd>J</kbd>) and Wires (<kbd>U</kbd>) on the bar. Framing draws one post, beam, stud or joist where you click, at its real size. It's a drawn part for a frame or a base: Run doesn't test it. To test what holds up your design, build it from sticks (Part 7).</p>

<h2 class="part" id="run">4. Run: does it work?</h2>
<p>Press the green <b>Run</b> button on the top bar. The 3D view opens and your design plays: the train rides its track, the gears turn, the sticks take their load. Run never changes your design by itself. <b>Stop</b> (or <kbd>Esc</kbd>) puts everything back where you drew it.</p>
<h3 id="run-bar">The bar under the 3D view</h3>
<div class="tablewrap"><table>
  <tr><th>Button</th><th>What it does</th></tr>
  <tr><td><b>Pause</b> / <b>Play</b></td><td>Holds it still, or carries on. <kbd>Space</kbd> does the same.</td></tr>
  <tr><td><b>Stop</b></td><td>Ends the run and puts everything back.</td></tr>
  <tr><td><b>Step</b></td><td>One small move at a time.</td></tr>
  <tr><td><b>¼×</b>, <b>1×</b>, <b>4×</b></td><td>The speed: ¼× is slow motion. The slider beside them moves through the time (a structure's whole load test, to the moment it breaks and after: <a href="#struct-break">Part 7</a>).</td></tr>
  <tr><td><b>Follow</b></td><td>The camera stays with what moves.</td></tr>
  <tr><td><b>Ride</b></td><td>A coaster's front seat.</td></tr>
  <tr><td><b>Record</b></td><td>Saves a video.</td></tr>
  <tr><td><b>Push / pull</b></td><td>A structure's sticks in red and blue (<a href="#forces">Part 7</a>).</td></tr>
</table></div>
<h3 id="run-card">The card: why didn't it work?</h3>
<p>If something's wrong, the <b>Why didn't it work?</b> card opens at the top of the side panel, and the part glows orange in 3D. It shows one problem at a time, the most important first:</p>
<ul class="do">
  <li>What's wrong, in plain words.</li>
  <li>A <b>Why</b> line: the idea behind it. This is the part worth reading.</li>
  <li>A button with the fix, when there's one the program can make for you, like <b>Raise the lift</b>. It changes your design, in one step you can undo, and Run starts again by itself.</li>
  <li><b>Show me</b>: turns the camera to the problem.</li>
  <li><b>Show all</b>: the whole list, instead of one at a time.</li>
</ul>
<p>Problems you've fixed stay on the card, struck through. When nothing's wrong, the card says <b>It works</b>, with the numbers. You can also change any number yourself, with Run still on: click the part and type in the panel, and Run starts again.</p>
<p><b>Press Run early and often.</b> You don't have to finish a design to test it, and a problem found early is the easiest to fix. A plan with a machine, a coaster and a structure runs them together.</p>

<h2 class="part" id="machines">5. Machines</h2>
<p>A machine is made of real parts: each one has real teeth, holes and sizes. Parts join by where they sit, so you don't connect anything by hand: a gear on a shaft is on that shaft, and two gears at the right distance are meshed. Run starts at the motor and passes the turning on, part to part.</p>
<h3 id="mech-parts">The parts</h3>
<div class="tablewrap"><table>
  <tr><th>Tool</th><th>How to place it</th><th>In the panel</th></tr>
  <tr><td><b>Motor</b></td><td>Click. It brings its own shaft.</td><td>TT gear motor (the yellow hobby motor, 3–6 V), N20 gear motor, NEMA 17 stepper, or Hand crank. Placed, it also has <b>Speed</b>, <b>Direction</b> and <b>On</b>.</td></tr>
  <tr><td><b>Shaft</b></td><td>Click. Shafts stand upright out of the plan.</td><td><b>Diameter</b> (3, 5 or 8 mm), <b>Length</b>, <b>Bearings</b>. Placed, it also has <b>Load on it</b>: <b>Winds up a weight</b>, <b>A small fan</b> or <b>A turning force</b>.</td></tr>
  <tr><td><b>Gear</b></td><td>Click a shaft to put it on, or click near another gear to mesh with it.</td><td><b>Teeth</b>, <b>Tooth size (module)</b>, <b>Thickness</b>. Placed, it also has <b>Hole</b> and <b>Turn by hand</b>.</td></tr>
  <tr><td><b>Gear pair</b></td><td>Click. Two gears, already meshed.</td><td><b>Ratio</b>, <b>Small gear teeth</b>, <b>Tooth size (module)</b>.</td></tr>
  <tr><td><b>Pulley</b> and <b>Belt</b></td><td>A pulley goes on a shaft. For a belt, click two pulleys at the same height.</td><td>GT2 pulleys by their <b>Teeth</b>. Belts come in fixed lengths, so it picks the nearest real one and slides the second pulley until it's tight.</td></tr>
  <tr><td><b>Rack</b></td><td>Start it near a gear and it snaps under it, teeth facing the gear.</td><td><b>Length</b>. A rack turns a gear's turning into a straight push.</td></tr>
  <tr><td><b>Crank</b></td><td>A crank and slider: turning becomes back and forth.</td><td><b>Crank reach</b>. The slider moves twice the reach each turn.</td></tr>
</table></div>
<h3 id="mech-ideas">The ideas</h3>
<ul>
  <li><b>Teeth have to match.</b> The module is the tooth size: a gear's pitch diameter in millimetres, divided by its number of teeth. Two gears mesh only when their modules are the same.</li>
  <li><b>Ratios.</b> A 12-tooth gear turning a 36-tooth gear turns it 3× slower, and 3× harder. Two stages multiply: 3:1 and 3:1 make 9:1.</li>
  <li><b>Pulleys and belts.</b> Two pulleys on a belt turn the same way. Two meshed gears turn opposite ways.</li>
  <li><b>Bearings.</b> A ball bearing holds a shaft but lets it spin. A shaft needs two, and the bearing's hole has to match the shaft: 623 for 3 mm, 625 for 5 mm, 608 for 8 mm.</li>
</ul>
<h3 id="mech-checks">What Run checks</h3>
<div class="tablewrap"><table>
  <tr><th>The label in 3D</th><th>What it means</th></tr>
  <tr><td>Nothing turns this</td><td>There's no motor or hand crank.</td></tr>
  <tr><td>Teeth don't match</td><td>Two meshing gears have different modules.</td></tr>
  <tr><td>No shaft</td><td>A gear or pulley has nothing to turn on.</td></tr>
  <tr><td>Hole doesn't fit</td><td>The part's hole isn't the size of its shaft.</td></tr>
  <tr><td>No bearings, One bearing, Wrong size</td><td>A shaft isn't held properly.</td></tr>
  <tr><td>Fighting</td><td>Two motors are trying to turn the same parts.</td></tr>
  <tr><td>Not in line</td><td>Two pulleys on a belt aren't at the same height.</td></tr>
  <tr><td>Link too short</td><td>A crank's link can't reach all the way round.</td></tr>
  <tr><td>Too weak</td><td>The motor can't turn what it's been given.</td></tr>
  <tr><td>Teeth strip</td><td>The push is too much for that gear's teeth.</td></tr>
</table></div>
<p>The strength numbers are rough: Run shows how the parts move together, and it isn't an engineering analysis. The lessons are <a href="#lesson-eng-make-it-move">Make it move</a> and <a href="#lesson-eng-gearbox">Fix the broken machine</a>. The 3D shape tool can make gears for printing too: <a href="#turned-swept-gear">turned shapes, ropes and rails, and gears</a>.</p>

<h2 class="part" id="coasters">6. Coasters</h2>
<p>A coaster is pieces of track, joined end to end. Most designs are in millimetres, at about table size. Pieces join where one ends and the next starts, so you can copy, move and delete them freely.</p>
<h3 id="coaster-pieces">Adding a piece</h3>
<p>Pick a piece's tool and an <b>orange dot</b> shows at each open end of the track. Click a dot and the piece joins on there, heading the same way. The new piece is picked, so the panel shows its numbers: type them, and the pieces after it stay joined on. To start a new ride, set <b>A new ride starts at height</b> in the panel, click where it starts, then click the way it heads.</p>
<div class="tablewrap"><table>
  <tr><th>Piece</th><th>What it does</th><th>Its numbers</th></tr>
  <tr><td><b>Station</b></td><td>Where the ride starts and ends. Its tyres push the car out and slow it coming in.</td><td><b>Length</b>, <b>Speed in and out</b></td></tr>
  <tr><td><b>Lift hill</b></td><td>A chain pulls the car up.</td><td><b>Climbs</b>, <b>Over (along the plan)</b>, <b>Chain speed</b></td></tr>
  <tr><td><b>Drop</b></td><td>A rounded crest, a fall and a dip. Longer is gentler.</td><td><b>Drops</b>, <b>Over (along the plan)</b></td></tr>
  <tr><td><b>Loop</b></td><td>A teardrop loop that comes out beside where it went in.</td><td><b>Height</b></td></tr>
  <tr><td><b>Curve</b></td><td>A banked turn. Over 360° with a climb or drop, it's a helix.</td><td><b>Radius</b>, <b>Turns (degrees, + left)</b>, <b>Climbs (− drops)</b>, <b>Bank (tilt)</b></td></tr>
  <tr><td><b>Brakes</b></td><td>Slow the car to a set speed (0 stops it).</td><td><b>Length</b>, <b>Slows the car to</b></td></tr>
  <tr><td><b>Launch</b></td><td>Throws the car up to speed, instead of a lift hill.</td><td><b>Length</b>, <b>Launches to</b></td></tr>
  <tr><td><b>Track</b></td><td>Click points like a polyline, each at its own height, for hills and dips of any shape.</td><td><b>Height of the next point</b>, <b>Tilt (bank, + leans left)</b>; afterwards, a height and tilt at each point</td></tr>
</table></div>
<h3 id="coaster-up">Holding it up, and riding it</h3>
<p><b>Supports</b>: click a piece of track, right on its line, and posts stand under it, evenly spaced, from the ground up. Loops are stiff hoops and stations sit on their platform, so they don't need them. <b>Car</b>: click on the track where the ride starts. There's one train; clicking again moves it. Pick it to set <b>Cars in the train</b>, what each one weighs and how long it is. <b>Design the car…</b> changes how it looks; only the weight and length count in Run. A piece's panel has <b>Track paint</b>, and a post's has its look.</p>
<h3 id="coaster-ideas">The ideas, and what Run checks</h3>
<p>A car can't climb higher than it started, and every bit of track takes a little speed away. So the lift has to be the highest point, by a margin.</p>
<div class="tablewrap"><table>
  <tr><th>The label in 3D</th><th>What it means</th><th>What fixes it</th></tr>
  <tr><td>Stops here</td><td>The car rolls back before a top, or runs out of speed on the level.</td><td>Raise the lift, or lower the hill.</td></tr>
  <tr><td>Too slow here</td><td>At the top of a loop the car stays on the track only if it's going fast enough.</td><td>Make the loop smaller, or raise the lift.</td></tr>
  <tr><td>Too many g</td><td>More than about 4.5 g at the bottom of a dip.</td><td>Soften the dip: a longer drop has a rounder dip.</td></tr>
  <tr><td>Lifts off here</td><td>Below about −1.5 g over a sharp crest.</td><td>Round the crest.</td></tr>
  <tr><td>Thrown sideways</td><td>More than about 1.8 g sideways in a turn.</td><td>Bank it, or widen the turn.</td></tr>
  <tr><td>Runs off here</td><td>Every ride ends in brakes or a station.</td><td>Add brakes at the end.</td></tr>
  <tr><td>Gap, Kink</td><td>The rail has a break, or turns sharply where two pieces meet.</td><td>Join the track, or smooth the join.</td></tr>
  <tr><td>Nothing holding it, Too short</td><td>A long stretch has no post (150 mm or so is the most), or a post doesn't reach.</td><td>Add supports, or stretch the post.</td></tr>
</table></div>
<p>The g numbers are for learning about model-scale cars, not for a ride people sit in. The lessons are <a href="#lesson-eng-withme-coaster">Do it with me: a desktop coaster</a> and <a href="#lesson-eng-coaster">Why did the car stop?</a></p>

<h2 class="part" id="structures">7. Structures</h2>
<p>A structure is sticks a class can buy, joined at their ends and hung with weights: bridges, towers, cranes and shelves. Sticks meeting at a point make a <b>joint</b>, drawn as a dot. Run works out what every stick carries, then adds weight until something gives.</p>
<h3 id="struct-draw">Drawing sticks</h3>
<ul>
  <li><b>Stick</b>: click where it starts, then where it ends, and carry on from there. Press <kbd>Enter</kbd> to stop. Click a dot and it joins there, at that joint's height.</li>
  <li><b>In the 3D view</b>, a stick follows the pointer up and over, with its length and height on a label, so there are no heights to type. Press <b>Look from the side (3D)</b> in the Stick panel (or in <span class="ui">Structures ▾</span>) to face your design side on, like a drawing. A click puts a stick down, and a press and drag still turns the view. Hold <kbd>Shift</kbd> for straight up.</li>
  <li><b>On the plan</b>, each end is at <b>Height of the next end</b> in the panel.</li>
  <li><b>Post</b>: an upright stick. Click a joint to stand one under it.</li>
  <li><b>Move joint</b>: drag a dot, and every stick there follows, with any weight or gusset on it.</li>
  <li><b>Truss</b>: click the two ends of a span and it draws the whole bridge, both sides, on two blocks. The panel has the <b>Pattern</b> (Warren, Pratt, Howe or Ladder), <b>Panels</b>, <b>Height</b>, <b>Sides</b> and more.</li>
  <li><b>Tower</b>: click the middle for a braced tower. The panel has <b>Base</b>, <b>Top</b>, <b>Height</b>, <b>Bays (levels)</b>, <b>Legs</b> and <b>Bracing</b>.</li>
  <li><b>Block</b>: click two corners for something to rest on, like a table edge or a pile of books. Joints on its top hold the structure up and can slide, as on a real table. Set <b>Fixed to it</b> for a wall.</li>
</ul>
<p>The Stick list goes from balsa, basswood, craft sticks, dowels, bamboo skewers and spaghetti through card, printed PLA and a pine board to aluminium extrusion and steel. Pick a stick to change it in its panel: <b>Stick</b>, <b>Glue</b>, how it's <b>Joined</b> at each end, <b>Doubled up</b> and more. Shift+click to change several at once. A truss's sticks have jobs, like top chord, and a button selects all of a job.</p>
<h3 id="struct-joints">Joints and ties</h3>
<ul>
  <li><b>Glue</b>: hot glue, wood glue (PVA) or super glue. Glued ends hold like a weak hinge, and sticks butted end to end hold least of all. Overlap them instead.</li>
  <li><b>Gusset</b>: a card or balsa plate glued on both faces of a joint. The sticks there hold each other stiffly, and the glue has several times the area to grip. Click a joint.</li>
  <li><b>Cable</b>: string, fishing line, steel cable or a zip tie between two joints. It only pulls, and Run greys it out when it goes slack. Click a point on the ground for a peg.</li>
  <li><b>Guy lines</b>: three lines from the top of a tower down to pegs.</li>
</ul>
<h3 id="struct-load">Testing it</h3>
<p><b>Weight</b>: click a joint or a stick. A weight <b>Hangs still</b>, or it can be <b>A person standing</b>, books that <b>Lie along a stick</b>, or a car that <b>Drives across</b> a deck. Hang weights at joints: partway along a stick, it bends it. <b>Put on</b> says whether it's lowered gently or dropped on.</p>
<p>Press <b>Run</b>. Every stick glows from cool blue (barely working) through green and yellow to red (at its limit), and the load test adds weight until something gives. Labels <b>①</b> <b>②</b> <b>③</b> mark the three sticks working hardest, with how close each is to giving (100% gives). The bending is drawn much bigger than life, and the label says by how much. The card says what gives first, and at what load, and a label marks the place:</p>
<div class="tablewrap"><table>
  <tr><th>The label in 3D</th><th>Why</th><th>What fixes it</th></tr>
  <tr><td>Falls over</td><td>A flat truss is stiff in its own plane and floppy out of it.</td><td>Make it two sides.</td></tr>
  <tr><td>Can fold</td><td>A shape with four or more sides can lean over.</td><td>Add diagonals. A triangle can't change shape.</td></tr>
  <tr><td>Bows out, Bows out sideways</td><td>A pushed stick bows out long before it crushes. Half the length takes four times the push, and twice as thick takes sixteen times.</td><td>A thicker or stiffer stick, doubling it up, or bracing it.</td></tr>
  <tr><td>Glue lets go</td><td>The joint is weaker than the sticks.</td><td>Gussets, overlap more, or wood glue.</td></tr>
  <tr><td>Crushes, Snaps</td><td>The stick itself has had too much.</td><td>A stronger stick.</td></tr>
  <tr><td>Tips over</td><td>The push on the top is more than its feet can hold.</td><td>Guy lines, or weigh down its feet.</td></tr>
  <tr><td>Close to giving</td><td>It holds, but real sticks vary, so keep a margin.</td><td>Make it stronger, or carry less.</td></tr>
  <tr><td>Sags</td><td>It holds, but it bends more than it should.</td><td>A deeper truss, or stiffer sticks.</td></tr>
</table></div>
<h3 id="struct-break">Watch it break</h3>
<p>The load test doesn't stop at the first break. When something gives, you see it: a pushed stick buckles, a pulled one snaps (splinters fly and the halves swing down), or a joint lets go, with a label such as <b>SNAP! 2.6 kg</b>. Then the load that stick carried moves to its neighbours, and their colours jump. Arc works the damaged structure out again: if a neighbour is now past its limit, it goes too; if what's left still holds, the load grows again until the next thing gives. When what's left can fold, or drops its weight, it collapses onto the table and the blocks, the pieces falling in slow motion.</p>
<ul>
  <li><b>¼×</b> on the Run bar slows it right down, and the slider goes to any moment: just before the break, the break itself, the fall.</li>
  <li>The card's <b>Why it broke</b> box says what gave first, at what load and why, with the same fix buttons as the card, then what went after it. <b>Watch it again, slowly</b> replays the break at ¼×.</li>
  <li>Make the first one stronger and the next weakest takes over: press Run again to see which. That's how engineers find a design's weak link.</li>
</ul>
<p>Which stick gives, in what order and at what load are worked out from the sticks, the glue and the weights. The falling is a picture of what happens next, not a measurement. It works the same with wind and earthquakes.</p>
<p>When it holds, the card gives the load it breaks at, the <b>safety factor</b> (what breaks it, divided by what it holds), the weakest stick, the sag, its own weight, the <b>strength-to-weight</b> number and the cost.</p>
<p><span class="ui">Structures ▾</span> also has two more tests. <b>Wind…</b> sets a speed and the way it blows, and whether to test its gusts. <b>Earthquake…</b> shakes the whole design back and forth, as hard as you choose. Run grows the wind or the shake until something gives.</p>
<h3 id="forces">Pushed or pulled</h3>
<p><b>Push / pull</b> on the Run bar colours each stick: red is pushed (compression), blue is pulled (tension), and deep colours carry the most. Labels give each force in newtons, and teal arrows show what holds it up at each foot. <span class="ui">Structures ▾</span> → <b>Forces…</b> has it all in a table, with <b>Save as a file</b> for a worksheet.</p>
<h3 id="struct-class">Parts, real numbers and contests</h3>
<ul>
  <li><b>Cut list…</b>: every stick by what you buy, packed onto the lengths sold, with the gussets, the glue and the cost. Prices are typical, or your class's own from the challenge.</li>
  <li><b>Test a stick…</b>: break a real stick across a gap between two books, with a cup of weights hung from its middle, and type in where it broke. Wear safety glasses: it can flick. <b>Use them in this plan</b> puts your class's numbers into Run.</li>
  <li><b>Challenge…</b>: set a contest on a design: the span, what it holds, its weight, its cost, the glue, the sticks allowed and how it's scored. Save it and hand it out, and Run ticks each goal on its card.</li>
  <li><b>Scoreboard…</b>: the class's designs, best first, kept on this computer.</li>
  <li><b>Test certificate…</b>: a page to print or hand in: the design coloured by how hard each stick works, what Run predicts, its weight, cost and cut list, and the goals.</li>
</ul>
<div class="tip"><b>Typical numbers, for learning.</b> Real sticks vary (balsa by as much as double), so it always says "about", and the real test decides a contest. A real structure is designed by a licensed engineer to the codes where it's built: in Canada, the National Building Code with CSA S16 for steel and CSA O86 for wood. Arc Engineering doesn't check against them.</div>

<h2 class="part" id="wires">8. Wires and electronics</h2>
<p>You can draw where the wires go. Turn on <b>Show the house tools</b> in <span class="ui">File ▾</span> → <b>Preferences</b>, which puts <b>Wires</b> on the bar. Pick <b>Wires</b> (<kbd>U</kbd>), set <b>System</b> to <b>Wiring</b> (its type is <b>Low voltage / data</b>: this edition is for batteries and low voltage), then click along the route from part to part, and press <kbd>Enter</kbd> or double-click to finish. Wires show in 3D and sit on their own layer. The tool's other systems (ducting and plumbing) are for houses: leave them.</p>
<p>That's all for now: there are no electronic parts to place, no wiring diagram and no power check, and Run doesn't test wires. A motor in Run turns because you placed it, whether it's wired or not.</p>
<div class="tip"><b>Batteries and low voltage only.</b> Keep your models to battery and low-voltage power, 24 V DC or less, and never wall power. The TT and N20 motors run on 3–6 V.</div>

<h2 class="part" id="printing">9. 3D printing</h2>
<p>Parts you draw with the 3D shape tool, and the machine parts, can go to a 3D printer. The lessons are <a href="#lesson-print">3D printing: an object, then a house</a>, then the <a href="#lesson-printws-plates">3D Print workspace</a> and <a href="#lesson-printws-parts">its parts</a>.</p>
<div data-from="print-object print-workspace print-ground print-house"></div>

<h2 class="part" id="lessons">10. Hands-on lessons</h2>
<!-- lessons:start -->
<!-- Made by tools/make-guide-lessons.js from src/js/lessons.js: change the lessons there, then run it again. -->
<p>19 lessons you do in Arc Engineering, with a panel over the plan that walks you through each step and <b>ticks it off by itself</b> when it sees the work done. Open them from <span class="ui">Guide ▾</span> → <b>Hands-on lessons</b>. Each one opens its own practice project, so save yours first if it asks.</p>
<ul class="do">
  <li><b>Show me</b> points at the button or setting the step needs (it opens a menu first if it has to).</li>
  <li><b>Skip</b> and <b>Back</b> move between steps; click any step in the list to jump to it. The ▾ button folds the panel down to one line; × closes it and keeps your place.</li>
  <li>At the end, the panel says what comes next, and <b>Do it again</b> starts it fresh.</li>
</ul>
<div class="tablewrap"><table>
<tr><th>Lesson</th><th>What you do</th><th>Time</th></tr>
<tr><th colspan="3">Start here</th></tr>
<tr><td><a href="#lesson-eng-start">1. Getting started with Arc Engineering</a></td><td>Draw a line to length, make a motor turn two gears and press Run to see them go in 3D. Then draw a stick and add a dimension.</td><td>10 min</td></tr>
<tr><th colspan="3">Do it with me</th></tr>
<tr><td><a href="#lesson-eng-withme-coaster">2. Do it with me: a desktop coaster</a></td><td>Build a whole coaster about as long as a table, piece by piece, on dashed lines: a station, a lift hill, a drop, a loop, a climbing turn, a second drop and brakes. Then stand it on posts, put a train on it, find its two problems with Run, fix them and ride it.</td><td>20 min</td></tr>
<tr><td><a href="#lesson-eng-withme-bridge">3. Do it with me: a truss bridge</a></td><td>Build a truss bridge by hand across a 300 mm gap, stick by stick, in the 3D view: the bottom, the triangles and the top. Then make it two sides, hang 1 kg on it, stiffen its joints with gussets, see which sticks are pushed and pulled, make it stronger, read what it costs, and watch it break in slow motion.</td><td>22 min</td></tr>
<tr><th colspan="3">Coasters</th></tr>
<tr><td><a href="#lesson-eng-coaster">4. Why did the car stop?</a></td><td>Ride a desktop coaster with Run, read why the car stops before hill 2, raise the lift until it makes it, then soften a dip that presses riders too hard, and ride it from the front seat.</td><td>8 min</td></tr>
<tr><th colspan="3">Machines</th></tr>
<tr><td><a href="#lesson-eng-make-it-move">5. Make it move</a></td><td>Put down a motor, a 12-tooth gear on its shaft and a 36-tooth gear that snaps into mesh, press Run and watch the big gear turn 3× slower; then make it 60 teeth and see 5×.</td><td>6 min</td></tr>
<tr><td><a href="#lesson-eng-gearbox">6. Fix the broken machine</a></td><td>A two-stage gearbox with three planted faults: tooth sizes that don't match, a gear 2 mm out, and a shaft with no bearings. Run finds each one; fix them and it turns 9:1.</td><td>8 min</td></tr>
<tr><th colspan="3">Structures</th></tr>
<tr><td><a href="#lesson-eng-build3d">7. Build it in 3D</a></td><td>No heights to type: in the 3D view a stick follows the pointer up and over. Draw a bridge across a gap from the side, make it two sides, hang weights on its top, brace it, and drag a joint higher.</td><td>8 min</td></tr>
<tr><td><a href="#lesson-eng-triangles">8. Triangles</a></td><td>A ladder bridge with no diagonals holds only by its glue, and lets go at about 0.7 kg. Add diagonals, so every square is two triangles, and it holds about ten times as much.</td><td>5 min</td></tr>
<tr><td><a href="#lesson-eng-forces">9. Where does the load go?</a></td><td>Every stick in a truss is pushed or pulled. See which, read the numbers, and check one by hand: the weight goes down the diagonals to the blocks.</td><td>8 min</td></tr>
<tr><td><a href="#lesson-eng-bridge">10. Why did the bridge break?</a></td><td>A balsa bridge meant to hold 2 kg gives way at under 1 kg. Brace its top sideways, then gusset the joints that let go, and it holds 2 kg and breaks at about 5 kg.</td><td>8 min</td></tr>
<tr><td><a href="#lesson-eng-craft">11. A craft-stick bridge</a></td><td>Craft sticks are only 114 mm long, so a bridge's chords are sticks overlapped and glued. This one's overlaps are 6 mm, and the glue lets go under its 10 kg. Overlap them 30 mm and it holds.</td><td>6 min</td></tr>
<tr><td><a href="#lesson-eng-contest">12. Bridge contest</a></td><td>Hold 2 kg across 400 mm with balsa and hot glue, under 30 g and $12, lightest wins. This bridge holds twenty times that, but it's too heavy: thin the sticks that don't need it, watch the goals tick, and put it on the scoreboard.</td><td>8 min</td></tr>
<tr><td><a href="#lesson-eng-tower">13. Tower in the wind</a></td><td>A tall, thin basswood tower tips over in a 6 m/s breeze. Pegged guy lines hold it up; then see how much wind it takes.</td><td>6 min</td></tr>
<tr><td><a href="#lesson-eng-quake">14. Tower in an earthquake</a></td><td>A tower with a water tank on top, braced on two faces only, leans over in a 0.3 g earthquake. Brace every face, and it stands more than twice that.</td><td>6 min</td></tr>
<tr><td><a href="#lesson-eng-crane">15. Tension and compression: the crane</a></td><td>A crane arm on a wall, held by a string tie that runs the wrong way, so it goes slack. Tie it from above, and see which part is pushed and which is pulled.</td><td>6 min</td></tr>
<tr><td><a href="#lesson-eng-shelf">16. A shelf that holds books</a></td><td>A real-size shelf on 2020 aluminium arms with 20 kg of books: the corner brackets slip at 15 kg. Add a second bracket, read the margin and the sag, then compare a pine board.</td><td>8 min</td></tr>
<tr><th colspan="3">3D printing</th></tr>
<tr><td><a href="#lesson-print">17. 3D printing: an object, then a house</a></td><td>Draw a small part to exact sizes in millimetres and cut a hole in it, read the print checks, then print a house as floors and a roof that peg together, fixing the warnings as you go.</td><td>12 min</td></tr>
<tr><td><a href="#lesson-printws-plates">18. 3D Print workspace: plates and the colour change</a></td><td>Open the 3D Print workspace, see how a model base is cut into plates with puzzle tabs, change the plate sizes, and find the layer where the filament changes colour.</td><td>8 min</td></tr>
<tr><td><a href="#lesson-printws-parts">19. 3D Print workspace: parts and part numbers</a></td><td>See how Arc breaks a model into printable parts, print two shapes as one part, give a layer its own part-number letters, read the parts list, and re-make only what changed.</td><td>8 min</td></tr>
</table></div>
<h3 class="lessons-group">Start here</h3>
<h3 id="lesson-eng-start">Lesson 1: Getting started with Arc Engineering</h3>
<p>Draw a line to length, make a motor turn two gears and press Run to see them go in 3D. Then draw a stick and add a dimension. <span class="where">About 10 minutes · 10 steps · starts with a new plan</span></p>
<div class="step"><h3><span class="num">1</span>Welcome</h3><p>This panel walks you through each step and ticks it off when it sees it done. Arc Engineering is for <b>models, prototypes and learning</b>: a real ride, or a machine that carries loads or people, needs a licensed engineer. The design is in <b>millimetres</b>.</p></div>
<div class="step"><h3><span class="num">2</span>A line to length</h3><p>Pick <b>Line</b> (<kbd>L</kbd>), click to start, point to the right, type <kbd>200</kbd> and press <kbd>Enter</kbd>. <kbd>Esc</kbd> stops. Typing a size works the same way with the other tools.</p></div>
<div class="step"><h3><span class="num">3</span>A motor</h3><p>Pick <b>Motor</b> on the tool bar and click in the middle of the plan. It comes with its shaft, and the panel shows which motor it is.</p></div>
<div class="step"><h3><span class="num">4</span>A small gear on its shaft</h3><p>Pick <b>Gear</b>, set <b>Teeth</b> to <b>12</b> in the panel, and click the motor's shaft (the dot in the middle of the motor). Putting a part in the right place makes the joint, so there's no joint tool to learn.</p></div>
<div class="step"><h3><span class="num">5</span>A big gear that meshes</h3><p>Set <b>Teeth</b> to <b>36</b> and move the pointer near the small gear: the ghost snaps to just the right distance, with its teeth between the small gear's. Click.</p></div>
<div class="step"><h3><span class="num">6</span>Run it</h3><p>Press the green <b>Run</b> button. The labels show the big gear turning <b>3× slower</b> than the small one, and 3× stronger. Run is how you test everything here: machines, coasters and structures.</p></div>
<div class="step"><h3><span class="num">7</span>A stick</h3><p>Press <kbd>Esc</kbd> to stop Run. The 3D view stays open beside the plan. Pick <b>Stick</b> on the tool bar, then click on the plan where it starts and where it ends. Press <kbd>Enter</kbd> to stop. Sticks are what bridges, towers and frames are built from.</p></div>
<div class="step"><h3><span class="num">8</span>Add a dimension</h3><p>Pick <b>Dimension</b> and click two points on the plan, then where the line goes. It stays with the drawing.</p></div>
<div class="step"><h3><span class="num">9</span>Look around in 3D</h3><p>Everything you've drawn is in the 3D view too. Drag to turn it, right-drag to slide, scroll to zoom. The <b>3D view</b> button on the top bar closes it and opens it again.</p></div>
<div class="step"><h3><span class="num">10</span>What comes next</h3><p>That's the start. Next, build something whole: <b>Do it with me: a desktop coaster</b> or <b>Do it with me: a truss bridge</b> in Guide ▾ → Hands-on lessons, or <b>Make it move</b> for more about machines. Find any tool with <b>Ctrl+K</b>.</p></div>
<h3 class="lessons-group">Do it with me</h3>
<h3 id="lesson-eng-withme-coaster">Lesson 2: Do it with me: a desktop coaster</h3>
<p>Build a whole coaster about as long as a table, piece by piece, on dashed lines: a station, a lift hill, a drop, a loop, a climbing turn, a second drop and brakes. Then stand it on posts, put a train on it, find its two problems with Run, fix them and ride it. <span class="where">About 20 minutes · 19 steps · starts from the “Do it with me: a desktop coaster” template</span></p>
<div class="step"><h3><span class="num">1</span>The plan</h3><p>Each dashed line shows where a piece of track goes, in <b>millimetres</b>, seen from above. You'll build them in order, starting at the left, each joined to the last. Add a piece first, then type its numbers in the panel.</p></div>
<div class="step"><h3><span class="num">2</span>The station</h3><p>Pick <b>Station</b> on the tool bar. In the panel set <b>A new ride starts at height</b> to <kbd>20</kbd>. Click the <b>left end</b> of the first dashed line, then its <b>right end</b>, to say which way the ride heads.</p></div>
<div class="step"><h3><span class="num">3</span>The lift hill</h3><p>Pick <b>Lift hill</b> and click the <b>orange dot</b> at the open end of the station. The new piece is picked, so the panel shows its numbers: set <b>Climbs</b> to <kbd>270</kbd> and <b>Over (along the plan)</b> to <kbd>410</kbd>. A chain will pull the car up here.</p></div>
<div class="step"><h3><span class="num">4</span>The drop</h3><p>Pick <b>Drop</b> and click the orange dot at the top of the lift. Set <b>Drops</b> to <kbd>270</kbd> and <b>Over (along the plan)</b> to <kbd>370</kbd>. The height the chain gave the car turns into speed here.</p></div>
<div class="step"><h3><span class="num">5</span>Try it now</h3><p>You don't have to finish to test it. Press the green <b>Run</b> button. The 3D view opens, Run brings a train, and it rides what you have so far. Watch what happens at the end.</p></div>
<div class="step"><h3><span class="num">6</span>Read the card</h3><p>The <b>Why didn't it work?</b> card at the top of the panel says the car runs off the end of the track. Read its <b>Why</b> line: every ride ends in brakes or a station. Don't press its button this time: you're about to build the rest.</p></div>
<div class="step"><h3><span class="num">7</span>Back to the plan</h3><p>Press <b>Stop</b> on the bar under the 3D view (or <kbd>Esc</kbd>): the train goes back, and your plan is as you drew it. Run never changes it by itself. Then click <b>3D view</b> on the top bar, so the plan has its room back.</p></div>
<div class="step"><h3><span class="num">8</span>The loop</h3><p>Pick <b>Loop</b> and click the orange dot at the bottom of the drop. Set <b>Height</b> to <kbd>220</kbd>. It comes out beside where it went in.</p></div>
<div class="step"><h3><span class="num">9</span>A climbing turn</h3><p>Pick <b>Curve</b> and click the orange dot after the loop. Set <b>Radius</b> to <kbd>230</kbd>, <b>Turns (degrees, + left)</b> to <kbd>180</kbd>, <b>Climbs (− drops)</b> to <kbd>265</kbd> and <b>Bank (tilt)</b> to <kbd>45</kbd>. The track climbs as it turns back the way it came.</p></div>
<div class="step"><h3><span class="num">10</span>The second drop</h3><p>Pick <b>Drop</b> again and click the orange dot at the top of the turn. Set <b>Drops</b> to <kbd>265</kbd> and <b>Over (along the plan)</b> to <kbd>450</kbd>.</p></div>
<div class="step"><h3><span class="num">11</span>The brakes</h3><p>Pick <b>Brakes</b> and click the last orange dot. Set <b>Length</b> to <kbd>150</kbd>. They slow the car down at the end, so now the ride has an end.</p></div>
<div class="step"><h3><span class="num">12</span>Posts</h3><p>Pick <b>Supports</b> and click each piece of track, right on its line: posts stand under it, evenly spaced, from the ground up. The loop is a stiff hoop and the station sits on its platform, so they don't need any. The step ticks when no stretch is left without a post.</p></div>
<div class="step"><h3><span class="num">13</span>The train</h3><p>Pick <b>Car</b> and click on the <b>station</b>. Run starts the ride from here. The train is picked, so the panel shows <b>Cars in the train</b>: make it <kbd>3</kbd>.</p></div>
<div class="step"><h3><span class="num">14</span>Run the whole ride</h3><p>Press <b>Run</b>. The train goes up the lift, down the drop and round the loop. Watch it on the climbing turn.</p></div>
<div class="step"><h3><span class="num">15</span>Why did it stop?</h3><p>The card says the car stops before the top and rolls back. A car can't climb higher than it started, and friction takes a little height on the way: the turn climbs nearly as high as the lift. Press <b>Show me</b> to see where, then click <b>Next</b>.</p></div>
<div class="step"><h3><span class="num">16</span>Raise the lift</h3><p>Press the card's <b>Raise the lift</b> button. The numbers change on your plan, in one step you can undo, and the pieces after it stay joined on. Run starts again by itself.</p></div>
<div class="step"><h3><span class="num">17</span>Soften the dip</h3><p>Now the train gets round, but the card says the bottom of the first drop presses riders too hard: more than 4.5 g. The car is faster now, and that dip is tight. Press <b>Soften the dip</b>: a longer drop has a rounder dip, and the push is spread out.</p></div>
<div class="step"><h3><span class="num">18</span>Ride it</h3><p>The card says <b>It works</b>, with the top speed and the g-forces. Press <b>Ride</b> on the bar under the 3D view to sit in the front seat.</p></div>
<div class="step"><h3><span class="num">19</span>Your coaster</h3><p>That's a whole coaster, and you built every piece. Change any number: click a piece, type in the panel, and press <b>Run</b> again. The numbers are rough and for learning: a real ride needs a licensed engineer.</p></div>
<h3 id="lesson-eng-withme-bridge">Lesson 3: Do it with me: a truss bridge</h3>
<p>Build a truss bridge by hand across a 300 mm gap, stick by stick, in the 3D view: the bottom, the triangles and the top. Then make it two sides, hang 1 kg on it, stiffen its joints with gussets, see which sticks are pushed and pulled, make it stronger, read what it costs, and watch it break in slow motion. <span class="where">About 22 minutes · 20 steps · starts from the “Do it with me: a truss bridge” template</span></p>
<div class="step"><h3><span class="num">1</span>The gap</h3><p>Two blocks, 60 mm high, with a <b>300 mm gap</b> between them. The dashed drawing below them is a side view of the truss you'll build: two sticks along the bottom, four sloping sticks that make the triangles, and one along the top. Each stick is ⅛" balsa, glued with hot glue.</p></div>
<div class="step"><h3><span class="num">2</span>The 3D view</h3><p>Click <b>3D view</b> on the top bar. You'll build in 3D, where a stick follows the pointer up and over: no heights to type.</p></div>
<div class="step"><h3><span class="num">3</span>Look from the side</h3><p>Pick <b>Stick</b> on the tool bar and press <b>Look from the side (3D)</b> in its panel. Now you face the gap side on, like the drawing.</p></div>
<div class="step"><h3><span class="num">4</span>Along the bottom</h3><p>Click the <b>left block</b> near its top right corner: the stick starts on its top. Move right until the label says about <b>150 mm long</b> and click. Then click the <b>right block</b> near its top left corner, and press <kbd>Enter</kbd> to stop. A press and drag still turns the view.</p></div>
<div class="step"><h3><span class="num">5</span>The first peak</h3><p>Click the <b>left end</b> of the bottom stick (its dot glows orange). Move up and to the right until the label says about <b>150 mm up</b>, a quarter of the way across, and click. Then click the <b>middle joint</b>. That's the first triangle.</p></div>
<div class="step"><h3><span class="num">6</span>The second peak</h3><p>Carry on from the middle joint: move up and to the right to about <b>150 mm up</b>, three quarters of the way across, and click. Then click the <b>right end</b>, and press <kbd>Enter</kbd>.</p></div>
<div class="step"><h3><span class="num">7</span>The top stick</h3><p>Click the first peak, then the second peak, and press <kbd>Enter</kbd>. That's the whole side.</p></div>
<div class="step"><h3><span class="num">8</span>Press Run</h3><p>Press the green <b>Run</b> button. The card says one flat side on its own falls over sideways: it's stiff in its own plane, and floppy out of it. Read its <b>Why</b> line.</p></div>
<div class="step"><h3><span class="num">9</span>Two sides</h3><p>Press <b>Make it two sides</b> on the card. A second side appears, tied to the first by cross sticks. Run starts again by itself, and the card says it holds itself up.</p></div>
<div class="step"><h3><span class="num">10</span>Hang the weights</h3><p>Pick <b>Weight</b>, set it to <kbd>0.5</kbd> kg in its panel, and click the <b>middle joint along the bottom</b> on each side: 1 kg in all, shared between the two sides. If the dots line up, drag to turn the view first.</p></div>
<div class="step"><h3><span class="num">11</span>It would bow out</h3><p>Run's load test adds weight until something gives. The card says a sloping stick would bow out at about 0.9 kg: less than the 1 kg on it. A long pushed stick bends out sideways long before it crushes, and hot glue holds its ends like a hinge. Press <b>Show me</b>, then click <b>Next</b>.</p></div>
<div class="step"><h3><span class="num">12</span>Gussets</h3><p>A gusset is a plate glued over a joint, so the sticks there hold each other stiffly. Pick <b>Gusset</b> and click each joint on both sides: five on a side. Run starts again after each one.</p></div>
<div class="step"><h3><span class="num">13</span>It holds</h3><p>The card says <b>It works</b>: it holds 1 kg and breaks at about 2.6 kg. Read the rest of the line: the safety factor (what breaks it, divided by what it holds), the sag, its own weight, the <b>strength-to-weight</b> number and what it costs.</p></div>
<div class="step"><h3><span class="num">14</span>Pushed or pulled</h3><p>Press <b>Push / pull</b> on the Run bar under the 3D view. Red sticks are pushed; blue ones are pulled. The top stick is red, the bottom sticks are blue, and the sloping ones take turns. The teal arrows are the blocks holding it up.</p></div>
<div class="step"><h3><span class="num">15</span>The numbers</h3><p>Open <b>Structures ▾ → Forces…</b>: every stick, pushed or pulled, by how much. Close it when you've found the top stick.</p></div>
<div class="step"><h3><span class="num">16</span>Make it stronger</h3><p>The card names the weakest stick: the top stick, bowing out. Press <b>Pause</b> on the bar to hold the bridge still. Pick the <b>Select</b> arrow, click the top stick, hold <b>Shift</b> and click the top stick on the other side. In the panel set <b>Stick</b> to <b>4.8 mm (³⁄₁₆") balsa stick</b>. The step ticks when it breaks above <b>5 kg</b>.</p></div>
<div class="step"><h3><span class="num">17</span>What to buy</h3><p>Open <b>Structures ▾ → Cut list…</b>: every stick by what you buy, packed onto the lengths sold, with the gussets, the glue and what it all costs. The prices are typical; a class can set its own in <b>Structures ▾ → Challenge…</b>.</p></div>
<div class="step"><h3><span class="num">18</span>Watch it break</h3><p>Close the cut list. Run's load test doesn't stop at your 1 kg: it adds weight until something gives. Press <b>¼×</b> on the Run bar for slow motion, then <b>Play</b>, or drag the time slider all the way to the right. The sticks glow from blue (barely working) to red (at their limit), and <b>① ② ③</b> mark the three working hardest, with how close each is to giving.</p></div>
<div class="step"><h3><span class="num">19</span>Why it broke</h3><p>The first stick to go snaps or buckles at the load the card gave. The load it carried moves to its neighbours (watch their colours jump), and if one of them is now past its limit it goes too, until the bridge falls onto the table. The card's <b>Why it broke</b> box names the first one, the load, and why, with a Fix; <b>Watch it again, slowly</b> replays it. Make the first one stronger and the next weakest takes over: that's how engineers find a design's weak link.</p></div>
<div class="step"><h3><span class="num">20</span>Your bridge</h3><p>That's a whole bridge, and you placed every stick. Try <b>Why did the bridge break?</b> next, or use <b>Truss</b> to draw a whole one in two clicks. Typical numbers, for learning: real sticks vary, and a real bridge needs a licensed engineer.</p></div>
<h3 class="lessons-group">Coasters</h3>
<h3 id="lesson-eng-coaster">Lesson 4: Why did the car stop?</h3>
<p>Ride a desktop coaster with Run, read why the car stops before hill 2, raise the lift until it makes it, then soften a dip that presses riders too hard, and ride it from the front seat. <span class="where">About 8 minutes · 8 steps · starts from the “Desktop coaster” template</span></p>
<div class="step"><h3><span class="num">1</span>A desktop coaster</h3><p>This coaster is in <b>millimetres</b>, about as long as a table: a station, a lift hill, a drop, a loop, a banked turn, a second hill on the way back, brakes and a three-car train. It has <b>two problems</b>.</p></div>
<div class="step"><h3><span class="num">2</span>Press Run</h3><p>Click the green <b>Run</b> button on the top bar. The 3D view opens and the train rides: up the lift, down the drop, round the loop… Watch what happens on hill 2.</p></div>
<div class="step"><h3><span class="num">3</span>Read the Why</h3><p>The <b>Why didn't it work?</b> card at the top of the panel says the car stops before the top of hill 2 and rolls back. Read its <b>Why</b> line: a car can't climb higher than it started, and friction takes a little height on the way. Click <b>Show me</b> to turn the camera there, then <b>Next</b>.</p></div>
<div class="step"><h3><span class="num">4</span>Raise the lift</h3><p>Press the card's <b>Raise the lift</b> button, or click the lift hill on the plan and type a bigger <b>Climbs</b> in the panel. The pieces after it stay joined on.</p></div>
<div class="step"><h3><span class="num">5</span>Run again</h3><p>Run starts again by itself after a fix (press <b>Run</b> if you stopped it). Now the train makes it over hill 2, but the card says the bottom of the first drop presses riders too hard: more than 4.5 g.</p></div>
<div class="step"><h3><span class="num">6</span>Soften the dip</h3><p>Press <b>Soften the dip</b> on the card, or click the drop and make it longer <b>Over (along the plan)</b> in the panel: a longer drop has a rounder dip, and the push is spread out.</p></div>
<div class="step"><h3><span class="num">7</span>Ride it</h3><p>The card says <b>It works</b>, with the top speed and the g-forces. Press <b>Ride</b> on the bar under the 3D view to sit in the front seat.</p></div>
<div class="step"><h3><span class="num">8</span>Your own coaster</h3><p>That's it. Make your own with the Coaster tools on the tool bar (or <b>Coaster ▾</b>): click the orange dot at the open end of the track to add the next piece. Press <b>Run</b> early and often. The numbers are rough and for learning: a real ride needs a licensed engineer.</p></div>
<h3 class="lessons-group">Machines</h3>
<h3 id="lesson-eng-make-it-move">Lesson 5: Make it move</h3>
<p>Put down a motor, a 12-tooth gear on its shaft and a 36-tooth gear that snaps into mesh, press Run and watch the big gear turn 3× slower; then make it 60 teeth and see 5×. <span class="where">About 6 minutes · 7 steps · starts with a new plan</span></p>
<div class="step"><h3><span class="num">1</span>Gears from scratch</h3><p>You'll build the simplest machine there is: a motor turning two gears. In Arc there's no joint tool: <b>putting a part in the right place makes the joint</b>.</p></div>
<div class="step"><h3><span class="num">2</span>A motor</h3><p>Pick <b>Motor</b> on the tool bar (the TT motor is picked in the panel) and click in the middle of the plan. Its shaft comes with it.</p></div>
<div class="step"><h3><span class="num">3</span>A small gear on its shaft</h3><p>Pick <b>Gear</b>, set <b>Teeth</b> to <b>12</b> in the panel, and click the motor's shaft (the dot in the middle of the motor). The gear goes on the shaft, its hole made to fit.</p></div>
<div class="step"><h3><span class="num">4</span>A big gear that meshes</h3><p>Set <b>Teeth</b> to <b>36</b> and move the pointer near the small gear: the ghost snaps to just the right distance, its teeth between the small gear's. Click. It comes with its own shaft and two bearings.</p></div>
<div class="step"><h3><span class="num">5</span>Run it</h3><p>Press the green <b>Run</b> button. The motor turns at 200 rpm; the labels show the big gear at about 67 rpm: <b>3× slower, 3× stronger</b>.</p></div>
<div class="step"><h3><span class="num">6</span>A bigger ratio</h3><p>Click the big gear on the plan and type <b>60</b> in its <b>Teeth</b>. Now it's too big to sit where it was: the card says the gears overlap. Press <b>Move … to mesh</b>, and Run plays again: 5× slower.</p></div>
<div class="step"><h3><span class="num">7</span>What next</h3><p>Try <b>Gear pair</b> (type a ratio and get two gears already meshed), <b>Pulley</b> and <b>Belt</b>, a <b>Rack</b> or a <b>Crank</b>. Then the lesson <b>Fix the broken machine</b>. The numbers are rough and for learning: a real machine needs a licensed engineer.</p></div>
<h3 id="lesson-eng-gearbox">Lesson 6: Fix the broken machine</h3>
<p>A two-stage gearbox with three planted faults: tooth sizes that don't match, a gear 2 mm out, and a shaft with no bearings. Run finds each one; fix them and it turns 9:1. <span class="where">About 8 minutes · 7 steps · starts from the “Two-stage gearbox” template</span></p>
<div class="step"><h3><span class="num">1</span>A broken gearbox</h3><p>A TT motor turns gear A, which should turn gear B; gear C on B's shaft should turn gear D, which winds up a small weight. Somebody made <b>three mistakes</b>.</p></div>
<div class="step"><h3><span class="num">2</span>Press Run</h3><p>Click the green <b>Run</b> button. Only the motor's gear turns, and the <b>Why didn't it work?</b> card opens with the first problem.</p></div>
<div class="step"><h3><span class="num">3</span>Match the tooth size</h3><p>Gears A and B have different tooth sizes (module 1 and 1.5). Read the <b>Why</b>, then press <b>Make gear B module 1</b>: B keeps its size but gets smaller teeth, the same as A's.</p></div>
<div class="step"><h3><span class="num">4</span>Close the gap</h3><p>Now gears A, B and C turn, but D doesn't: it's 2 mm too far from C. Press <b>Move gear D to mesh</b> (or press <b>Show me</b> first to see where).</p></div>
<div class="step"><h3><span class="num">5</span>Add the bearings</h3><p>Shaft 2 has nothing holding it: it would wobble and fall. Press <b>Add bearings</b>.</p></div>
<div class="step"><h3><span class="num">6</span>It works</h3><p>The card says <b>It works</b>: the motor's 200 rpm comes out at about 22 rpm, 9× slower and about 8× stronger (a little is lost at each gear). Press <b>Follow</b> or <b>Record</b> on the Run bar if you like.</p></div>
<div class="step"><h3><span class="num">7</span>Your own machine</h3><p>That's it. Build your own from the <b>Machine ▾</b> menu: gears, shafts, motors, belts, racks and cranks. Press <b>Run</b> early and often. The numbers are rough and for learning: a real machine needs a licensed engineer.</p></div>
<h3 class="lessons-group">Structures</h3>
<h3 id="lesson-eng-build3d">Lesson 7: Build it in 3D</h3>
<p>No heights to type: in the 3D view a stick follows the pointer up and over. Draw a bridge across a gap from the side, make it two sides, hang weights on its top, brace it, and drag a joint higher. <span class="where">About 8 minutes · 9 steps · starts from the “Build it in 3D” template</span></p>
<div class="step"><h3><span class="num">1</span>Two blocks</h3><p>Two blocks, 60 mm high, with a <b>300 mm gap</b> between them, and nothing on them yet. You'll build a bridge across in the <b>3D view</b>, where a stick follows the pointer up and over: no heights to type.</p></div>
<div class="step"><h3><span class="num">2</span>The 3D view</h3><p>Click <b>3D view</b> on the top bar.</p></div>
<div class="step"><h3><span class="num">3</span>Look from the side</h3><p>Pick <b>Stick</b> on the tool bar and press <b>Look from the side (3D)</b> in its panel. Now you face the gap side on, like a drawing of it.</p></div>
<div class="step"><h3><span class="num">4</span>Across the gap</h3><p>Click the <b>left block</b> near its top right corner: the stick starts on its top. Then click the <b>right block</b> near its top left corner, and a stick lies across the gap (its label says how long). Press <b>Enter</b> to stop. A press and drag still turns the view.</p></div>
<div class="step"><h3><span class="num">5</span>Up and over</h3><p>Click the <b>left end</b> of that stick (its dot glows orange), move up and over to the middle until the label says about <b>120 mm up</b>, and click. Then click the <b>right end</b>, and press <b>Enter</b>. A triangle.</p></div>
<div class="step"><h3><span class="num">6</span>Press Run</h3><p>Press the green <b>Run</b> button. The card says one flat side falls over sideways: it's stiff in its own plane and floppy out of it. Press <b>Make it two sides</b>.</p></div>
<div class="step"><h3><span class="num">7</span>Weights on top</h3><p>Pick <b>Weight</b>, set it to <b>0.2 kg</b> in its panel, and click each of the two top joints in 3D (each glows as you point at it).</p></div>
<div class="step"><h3><span class="num">8</span>Brace it</h3><p>Run starts again by itself. The card says a sloping stick would bow out sideways: only one cross stick ties the two tops together. Press <b>Brace it sideways</b>.</p></div>
<div class="step"><h3><span class="num">9</span>Drag a joint</h3><p>It holds, and breaks at about 1.4 kg when a sloping stick bows out: now a thicker stick would help. Or pick <b>Move joint</b> and drag a top joint in 3D: the sticks there follow, and the label shows its height (hold <b>Shift</b> for straight up and down). Run tells you whether it holds more or less. That's how to build anything in Arc: <b>Stick</b> in 3D, <b>Move joint</b> to adjust, <b>Run</b> to test. Typical numbers, for learning.</p></div>
<h3 id="lesson-eng-triangles">Lesson 8: Triangles</h3>
<p>A ladder bridge with no diagonals holds only by its glue, and lets go at about 0.7 kg. Add diagonals, so every square is two triangles, and it holds about ten times as much. <span class="where">About 5 minutes · 6 steps · starts from the “Ladder bridge” template</span></p>
<div class="step"><h3><span class="num">1</span>A ladder bridge</h3><p>This little bridge is two ladders tied together: top and bottom sticks and upright posts, but <b>no diagonals</b>. It spans the gap between two blocks, with 1 kg hung from the middle.</p></div>
<div class="step"><h3><span class="num">2</span>Press Run</h3><p>Press the green <b>Run</b> button. Every stick turns a colour by how hard it's working, then the load test adds weight until something gives.</p></div>
<div class="step"><h3><span class="num">3</span>Read the Why</h3><p>The <b>Why didn't it work?</b> card says the glue at the end of a post is bent open, and lets go at about 0.7 kg: less than the 1 kg on it. Each square can lean over into a diamond; only the glue at its corners stops it. Read the <b>Why</b> line, then <b>Next</b>.</p></div>
<div class="step"><h3><span class="num">4</span>Add diagonals</h3><p>Press <b>Add diagonals to every square</b> on the card. Every square becomes two triangles. Run starts again by itself.</p></div>
<div class="step"><h3><span class="num">5</span>It holds</h3><p>Now the card says it breaks at about 7 kg, not 0.7, and it hardly sags at all. A triangle can't change shape unless one of its sticks gets longer or shorter, and sticks are strong along their length. That's why bridges, towers and cranes are made of triangles.</p></div>
<div class="step"><h3><span class="num">6</span>What next</h3><p>Try <b>Why did the bridge break?</b>, or draw your own with the <b>Truss</b> tool (click the two ends of a span) and hang a <b>Weight</b> on it. Typical numbers, for learning: real sticks vary.</p></div>
<h3 id="lesson-eng-forces">Lesson 9: Where does the load go?</h3>
<p>Every stick in a truss is pushed or pulled. See which, read the numbers, and check one by hand: the weight goes down the diagonals to the blocks. <span class="where">About 8 minutes · 7 steps · starts from the “Where does the load go?” template</span></p>
<div class="step"><h3><span class="num">1</span>A Warren truss</h3><p>A truss bridge of equilateral triangles (every angle 60°), 400 mm long, on two blocks, with <b>2 kg</b> hung from the middle: 1 kg on each side, which weighs about 9.8 N. It holds. The question is how.</p></div>
<div class="step"><h3><span class="num">2</span>Press Run</h3><p>Press the green <b>Run</b> button.</p></div>
<div class="step"><h3><span class="num">3</span>Pushed or pulled</h3><p>Press <b>Push / pull</b> on the Run bar under the 3D view. Red sticks are pushed (squeezed shorter: compression); blue ones are pulled (stretched: tension). Deep colours carry the most.</p></div>
<div class="step"><h3><span class="num">4</span>Where it goes</h3><p>The top chord is red: pushed. The bottom chord is blue: pulled. The diagonals take turns. The teal arrows are the blocks pushing up on its feet: about 4.9 N each, half of each side's 9.8 N. The labels give each stick's force.</p></div>
<div class="step"><h3><span class="num">5</span>The forces table</h3><p>Open <b>Structures ▾ → Forces…</b>: every stick, pushed or pulled, by how much. Find a <b>diagonal</b> at an end, and the first piece of a <b>bottom chord</b>.</p></div>
<div class="step"><h3><span class="num">6</span>Check it by hand</h3><p>At the foot, only the end diagonal can hold the block's 4.9 N up, and it leans at 60°. So it must push 4.9 ÷ sin 60° ≈ <b>5.7 N</b>, and the bottom chord must pull 5.7 × cos 60° ≈ <b>2.8 N</b> to balance it sideways. The table agrees, near enough: its own weight and its glued joints add a little. That's the <b>method of joints</b>, and it's how engineers check a computer.</p></div>
<div class="step"><h3><span class="num">7</span>Your turn</h3><p>Draw a truss twice as deep with the <b>Truss</b> tool (Height in its panel): the chords push and pull about half as hard. <b>Save as a file</b> in the Forces window gives a table for a worksheet. Typical numbers, for learning.</p></div>
<h3 id="lesson-eng-bridge">Lesson 10: Why did the bridge break?</h3>
<p>A balsa bridge meant to hold 2 kg gives way at under 1 kg. Brace its top sideways, then gusset the joints that let go, and it holds 2 kg and breaks at about 5 kg. <span class="where">About 8 minutes · 8 steps · starts from the “Balsa bridge” template</span></p>
<div class="step"><h3><span class="num">1</span>A balsa bridge</h3><p>A truss bridge 400 mm long, of ⅛" balsa sticks and hot glue, resting on two blocks with <b>2 kg</b> hung from the middle (1 kg on each side). The goal: hold the 2 kg. It has <b>two problems</b>.</p></div>
<div class="step"><h3><span class="num">2</span>Press Run</h3><p>Press the green <b>Run</b> button. Watch the colours climb as the load test adds weight, and see what gives first.</p></div>
<div class="step"><h3><span class="num">3</span>It bows out sideways</h3><p>The card says a top chord would bow out sideways at about 0.9 kg. The two sides are only tied together along the bottom, so the tops can lean over. A long pushed stick bows out long before it crushes. Click <b>Show me</b>, then <b>Next</b>.</p></div>
<div class="step"><h3><span class="num">4</span>Brace it sideways</h3><p>Press <b>Brace it sideways</b>: cross sticks and diagonals across the top, and a portal brace across each end, so the bracing is triangles too.</p></div>
<div class="step"><h3><span class="num">5</span>The glue lets go</h3><p>Now the glue gives first, at about 1.4 kg: each bottom chord is two sticks butted together in the middle, glued only across their ends. Press <b>Add gussets on both faces</b>.</p></div>
<div class="step"><h3><span class="num">6</span>It holds</h3><p>The card says it holds 2 kg and breaks at about 5 kg, when a top chord bows out between its joints. Read the <b>strength-to-weight</b> number at the end: bridge contests use it (what it holds, divided by what it weighs).</p></div>
<div class="step"><h3><span class="num">7</span>Your turn</h3><p>Now make it break above <b>8 kg</b> (a safety factor of 2 at 4 kg) while staying under <b>30 g</b>. It breaks when a top chord bows out: click a top chord, press <b>Select all 2 top chords</b> in its panel, and try basswood, or <b>Doubled up</b>. Press <b>Run</b> early and often.</p></div>
<div class="step"><h3><span class="num">8</span>Done</h3><p>It breaks above 8 kg and weighs under 30 g: twice as strong for a gram or two. The top chord is pushed, and a pushed stick bows out unless it's stiff; the bottom chord is only pulled, so it can stay thin. <b>Structures ▾ → Cut list</b> tells you what to buy, and what it costs. Typical numbers, for learning: real sticks vary, and a real bridge needs a licensed engineer.</p></div>
<h3 id="lesson-eng-craft">Lesson 11: A craft-stick bridge</h3>
<p>Craft sticks are only 114 mm long, so a bridge's chords are sticks overlapped and glued. This one's overlaps are 6 mm, and the glue lets go under its 10 kg. Overlap them 30 mm and it holds. <span class="where">About 6 minutes · 6 steps · starts from the “Craft-stick bridge” template</span></p>
<div class="step"><h3><span class="num">1</span>A craft-stick bridge</h3><p>A truss bridge 280 mm long, of craft sticks and hot glue, with <b>10 kg</b> hung from the middle (5 kg on each side). A craft stick is only 114 mm long, so each bottom chord is <b>three sticks overlapped end to end</b>, glued face to face.</p></div>
<div class="step"><h3><span class="num">2</span>Press Run</h3><p>Press the green <b>Run</b> button, and watch which sticks work hardest as the load test adds weight.</p></div>
<div class="step"><h3><span class="num">3</span>The overlaps let go</h3><p>The card says the glue where the bottom chord sticks overlap lets go at about 9 kg: they overlap only 6 mm. Glue holds by the area it covers, and 6 mm of a 10 mm stick is only 60 mm². Read the <b>Why</b>, then <b>Next</b>.</p></div>
<div class="step"><h3><span class="num">4</span>Overlap more</h3><p>Press <b>Overlap more</b>: the outer sticks reach 30 mm further along the middle one. Five times the overlap is five times the glue.</p></div>
<div class="step"><h3><span class="num">5</span>It holds</h3><p>Now it holds 10 kg, and breaks at about 14 kg when an end post bows out. The overlap was the weak link; now it's a stick. Read the <b>strength-to-weight</b> number on the card.</p></div>
<div class="step"><h3><span class="num">6</span>Your turn</h3><p>Click an end post and set <b>Doubled up</b> to two glued face to face, or switch the glue to <b>Wood glue</b>: it holds about four times what hot glue does over the same overlap. Click a cross stick: craft sticks can lie <b>flat</b> or stand <b>on edge</b>. On edge one sags far less, but on its own it can roll over sideways. Typical numbers, for learning: a real bridge needs a licensed engineer.</p></div>
<h3 id="lesson-eng-contest">Lesson 12: Bridge contest</h3>
<p>Hold 2 kg across 400 mm with balsa and hot glue, under 30 g and $12, lightest wins. This bridge holds twenty times that, but it's too heavy: thin the sticks that don't need it, watch the goals tick, and put it on the scoreboard. <span class="where">About 8 minutes · 8 steps · starts from the “Bridge contest” template</span></p>
<div class="step"><h3><span class="num">1</span>A bridge contest</h3><p>A classic class contest: a bridge across a <b>400 mm</b> gap that holds <b>2 kg</b>, of balsa sticks and hot glue, weighing under <b>30 g</b> and costing under <b>$12</b> (Canadian). The lightest bridge that holds wins. This one's chords and diagonals are ¼" balsa: strong, but heavy.</p></div>
<div class="step"><h3><span class="num">2</span>Press Run</h3><p>Press the green <b>Run</b> button.</p></div>
<div class="step"><h3><span class="num">3</span>The goals</h3><p>Under the card are the contest's goals. It holds 2 kg easily: it would break at about 43 kg. But it weighs 40 g and costs over $14: two ✗. Most of its sticks are working at a few percent of what they can take. A contest bridge puts wood only where it's needed.</p></div>
<div class="step"><h3><span class="num">4</span>Thinner diagonals</h3><p>Click a <b>diagonal</b> (a sloping stick), press <b>Select all 16 diagonals</b> in its panel, and set <b>Stick</b> to <b>3.2 mm (⅛") balsa</b>. Run checks it again by itself.</p></div>
<div class="step"><h3><span class="num">5</span>Thinner chords</h3><p>Close: 32 g. Now the chords: click a <b>top chord</b>, select both, and make them <b>4.8 mm (³⁄₁₆") balsa</b>. Do the same for the two <b>bottom chords</b>. Watch the goals.</p></div>
<div class="step"><h3><span class="num">6</span>Every goal met</h3><p>Every goal is ticked ★, and the score is its weight. One more trick: the bottom chords are only <b>pulled</b>, and a pulled stick can't bow out, so they can be thinner still. Make the bottom chords <b>⅛" balsa</b>.</p></div>
<div class="step"><h3><span class="num">7</span>The scoreboard</h3><p>Open <b>Structures ▾ → Scoreboard…</b>, type your name and press <b>Add this design</b>. It's kept on this computer, best first, and saves as a file for a spreadsheet.</p></div>
<div class="step"><h3><span class="num">8</span>Test it for real</h3><p><b>Structures ▾ → Test certificate…</b> saves a page to print: the picture, what Arc predicts, the goals and the cut list. Build it, test it, type what it really held and save it again to compare. To run your own contest, <b>Structures ▾ → Challenge…</b> sets the goals on any plan. Typical numbers, for learning: the real test decides the contest.</p></div>
<h3 id="lesson-eng-tower">Lesson 13: Tower in the wind</h3>
<p>A tall, thin basswood tower tips over in a 6 m/s breeze. Pegged guy lines hold it up; then see how much wind it takes. <span class="where">About 6 minutes · 6 steps · starts from the “Tower in the wind” template</span></p>
<div class="step"><h3><span class="num">1</span>A tall, thin tower</h3><p>A 500 mm tower of ³⁄₁₆" basswood, braced on every face, with 500 g on top. Its base is only 60 mm across, and a 6 m/s breeze (the teal arrows) blows from the west.</p></div>
<div class="step"><h3><span class="num">2</span>Press Run</h3><p>Press the green <b>Run</b> button. Watch the tower in 3D.</p></div>
<div class="step"><h3><span class="num">3</span>It tips over</h3><p>The card says the wind tips it over: a foot on the windward side lifts off the table. It tips when the push times the height beats its weight times half its base. Read the <b>Why</b> line, then <b>Next</b>.</p></div>
<div class="step"><h3><span class="num">4</span>Guy lines</h3><p>Press <b>Add guy lines</b>: three lines from the top down to pegs in the ground, spread round it. The one upwind does the holding.</p></div>
<div class="step"><h3><span class="num">5</span>It stands</h3><p>Now it stands, and the load test grows the wind until something gives. Read what gives first on the card.</p></div>
<div class="step"><h3><span class="num">6</span>Your turn</h3><p>Try it without guy lines: press <b>Ctrl+Z</b> to take them away, then use <b>Weigh down its feet</b>, or draw a wider tower with the <b>Tower</b> tool. Change the wind in <b>Structures ▾ → Wind…</b>, and test it at its <b>gusts</b> (about 1.4 times as fast, pushing twice as hard). 10 m/s is a fresh breeze; 20 m/s a gale.</p></div>
<h3 id="lesson-eng-quake">Lesson 14: Tower in an earthquake</h3>
<p>A tower with a water tank on top, braced on two faces only, leans over in a 0.3 g earthquake. Brace every face, and it stands more than twice that. <span class="where">About 6 minutes · 6 steps · starts from the “Tower in an earthquake” template</span></p>
<div class="step"><h3><span class="num">1</span>A tower in an earthquake</h3><p>A 400 mm tower of ³⁄₁₆" basswood, glued to a base board, with a <b>2 kg</b> water tank resting on its top corners. An earthquake (the orange arrow) shakes it east and west at <b>0.3 g</b>: a very strong one. Only two of its faces are braced.</p></div>
<div class="step"><h3><span class="num">2</span>Press Run</h3><p>Press the green <b>Run</b> button, and watch it sway in 3D as the shake grows.</p></div>
<div class="step"><h3><span class="num">3</span>It leans over</h3><p>The card says the glue at the end of a ring stick is bent open, and lets go in a shake of about 0.2 g. A shake pushes everything sideways by its own weight, the heavy tank hardest. The faces running east and west should hold that push, but they're squares, and a square leans over into a diamond. Read the <b>Why</b>, then <b>Next</b>.</p></div>
<div class="step"><h3><span class="num">4</span>Brace every face</h3><p>Press <b>Add diagonals to every square</b>: every face is triangles now.</p></div>
<div class="step"><h3><span class="num">5</span>It stands</h3><p>Now it stands the 0.3 g shake, and gives way at about 0.7 g: more than three times as strong. Read what gives first on the card.</p></div>
<div class="step"><h3><span class="num">6</span>Your turn</h3><p>Shake it north and south in <b>Structures ▾ → Earthquake…</b>, or make the tank heavier. Buildings where earthquakes happen are braced both ways, keep heavy things low, and some stand on rubber pads that let the ground move under them. Typical numbers, for learning: a real building needs a licensed engineer.</p></div>
<h3 id="lesson-eng-crane">Lesson 15: Tension and compression: the crane</h3>
<p>A crane arm on a wall, held by a string tie that runs the wrong way, so it goes slack. Tie it from above, and see which part is pushed and which is pulled. <span class="where">About 6 minutes · 6 steps · starts from the “Wall crane” template</span></p>
<div class="step"><h3><span class="num">1</span>A wall crane</h3><p>A basswood arm bolted to a wall, with a weight on its hook. A string tie is meant to hold the arm up, but it runs <b>down</b> from the arm to the wall.</p></div>
<div class="step"><h3><span class="num">2</span>Press Run</h3><p>Press the green <b>Run</b> button.</p></div>
<div class="step"><h3><span class="num">3</span>It goes slack</h3><p>The card says the tie goes slack: the weight pushes its ends together, and string can't push. The arm hangs on its bolts and sags. Read the <b>Why</b>, then <b>Next</b>.</p></div>
<div class="step"><h3><span class="num">4</span>Tie it from above</h3><p>Press <b>Tie it from above instead</b>. Now the weight pulls the tie tight.</p></div>
<div class="step"><h3><span class="num">5</span>Pushed and pulled</h3><p>It holds. The arm is pushed against the wall (compression) and the string is pulled (tension). That's why the tie can be string, and the arm has to be a stick.</p></div>
<div class="step"><h3><span class="num">6</span>Your turn</h3><p>Click the arm and make it string in the panel: it can't hold, because string can't push. Then try steel cable for the tie, and a heavier weight.</p></div>
<h3 id="lesson-eng-shelf">Lesson 16: A shelf that holds books</h3>
<p>A real-size shelf on 2020 aluminium arms with 20 kg of books: the corner brackets slip at 15 kg. Add a second bracket, read the margin and the sag, then compare a pine board. <span class="where">About 8 minutes · 5 steps · starts from the “Shelf of books” template</span></p>
<div class="step"><h3><span class="num">1</span>A shelf of books</h3><p>This one is at <b>real size</b>: two 2020 aluminium arms, 300 mm out from a wall, each held by one corner bracket with T-nuts, and 20 kg of books along them.</p></div>
<div class="step"><h3><span class="num">2</span>Press Run</h3><p>Press the green <b>Run</b> button.</p></div>
<div class="step"><h3><span class="num">3</span>The brackets slip</h3><p>The card says the T-nuts slide along their slots at about 15 kg: a T-nut grips only by how tight its bolt is. Press <b>A second bracket on each</b>.</p></div>
<div class="step"><h3><span class="num">4</span>Margin</h3><p>It holds now, but it breaks at about 30 kg: under twice what it carries. Engineers keep loads to a fraction of what breaks a thing, because real parts vary and books get added. Read the card, then press <b>Next</b>.</p></div>
<div class="step"><h3><span class="num">5</span>Try pine</h3><p>Click an arm, hold <b>Shift</b> and click the other, and pick <b>1×4 pine board</b> in the panel. Run again: compare what it holds, how much it sags, and its own weight. A shelf should sag no more than its span ÷ 180.</p></div>
<h3 class="lessons-group">3D printing</h3>
<h3 id="lesson-print">Lesson 17: 3D printing: an object, then a house</h3>
<p>Draw a small part to exact sizes in millimetres and cut a hole in it, read the print checks, then print a house as floors and a roof that peg together, fixing the warnings as you go. <span class="where">About 12 minutes · 11 steps · starts from the “3D print: an object in millimetres” template</span></p>
<div class="step"><h3><span class="num">1</span>A plan for printing</h3><p>This plan is in <b>millimetres</b> at full size. The dashed teal outline is your printer's <b>bed</b>: anything inside it prints in one piece. Two shapes are already there: a base plate and a round post.</p></div>
<div class="step"><h3><span class="num">2</span>Pick the 3D shape tool</h3><p>Open <b>Draw ▾</b> and pick <b>3D shape</b>. Its panel sets the shape (rectangle, circle or outline) and how tall it is.</p></div>
<div class="step"><h3><span class="num">3</span>Draw a block to size</h3><p>Set <b>Draw</b> to <b>Rectangle</b> and <b>Height</b> to <kbd>8 mm</kbd>. Click one corner on the plan, then type the size, width by depth, like <kbd>40 x 25</kbd>, and press <kbd>Enter</kbd> (or click the opposite corner).</p></div>
<div class="step"><h3><span class="num">4</span>Cut a hole</h3><p>Your block is picked, so the panel shows <b>its</b> settings. Press <kbd>Esc</kbd> twice, open <b>Draw ▾</b>, pick <b>3D shape</b> again and set <b>Draw</b> to <b>Circle</b>. Draw a small circle <b>inside</b> the base plate: a shape drawn inside another cuts a hole straight through it.</p></div>
<div class="step"><h3><span class="num">5</span>Read the print hints</h3><p>Pick the Select arrow and click a shape. The panel's <b>3D printing</b> box gives its printed size and warns if it's too thin for the nozzle, too big for the bed, or would need supports.</p></div>
<div class="step"><h3><span class="num">6</span>Check it for printing</h3><p>Open <b>Export ▾</b> → <b>3D print (STL files, plates, checks)…</b>. Arc checks every part for your printer and lays them out on a plate. Green ticks mean it should print well.</p></div>
<div class="step"><h3><span class="num">7</span>Now a house</h3><p>Close the window. Next you'll print a house: open <b>File ▾</b> → <b>New from a template…</b> and pick <b>3D print: a house model</b> (two floors and a roof).</p></div>
<div class="step"><h3><span class="num">8</span>Floors that peg together</h3><p>Open <b>Export ▾</b> → <b>3D print…</b> again. With <b>Pegs and sockets</b> ticked, each floor gets small posts in its corners with a peg on top, and the floor above (and the roof's flat base) gets matching sockets.</p></div>
<div class="step"><h3><span class="num">9</span>Make it too big, then fix it</h3><p>Set <b>Scale</b> to <b>1:20</b>. A red warning says the parts don't fit the bed, with a button for the scale that does: click it.</p></div>
<div class="step"><h3><span class="num">10</span>Thin walls</h3><p>Set <b>Scale</b> to <b>1:200</b> and untick <b>Thicken walls too thin for the nozzle</b>: the walls would print thinner than the nozzle can lay. Click <b>Thicken thin walls for printing</b> on the warning to fix it.</p></div>
<div class="step"><h3><span class="num">11</span>Save the files</h3><p>Set the scale back to <b>1:48</b> and click <b>Save files…</b>: one file per plate, one per part, and a <b>print guide</b> PDF with the slicer settings and how the parts go together. Open the plate files in Bambu Studio and print. That's it!</p></div>
<h3 id="lesson-printws-plates">Lesson 18: 3D Print workspace: plates and the colour change</h3>
<p>Open the 3D Print workspace, see how a model base is cut into plates with puzzle tabs, change the plate sizes, and find the layer where the filament changes colour. <span class="where">About 8 minutes · 7 steps · starts from the “3D print: a small landscape (plates, inserts and parts)” template</span></p>
<div class="step"><h3><span class="num">1</span>A small landscape to practise on</h3><p>This practice board is 400 × 300 mm, in millimetres at full size. It has a grey cobbled street, a raised cobbled square with a turntable hole, two trees and a lamp. Nothing here touches your own projects.</p></div>
<div class="step"><h3><span class="num">2</span>Open the 3D Print workspace</h3><p>Click <b>3D Print</b> in the top bar. All the 3D printing tools are in its seven sections, beside the plan.</p></div>
<div class="step"><h3><span class="num">3</span>Select the board</h3><p>Open <b>2. Model ground and plates</b>, then click the board's edge on the plan. The board is the <b>model base</b>: the ground on it is cut into plates that fit the printer's bed.</p></div>
<div class="step"><h3><span class="num">4</span>Change the plate sizes</h3><p>Type <kbd>150</kbd> in <b>Column widths</b> and press <kbd>Enter</kbd>. The plate line on the plan moves: L1F is 150 mm wide now and L2F takes the rest (250 mm), with puzzle tabs between them. (The last column always takes what's left.)</p></div>
<div class="step"><h3><span class="num">5</span>Put it back</h3><p>Press <kbd>Ctrl+Z</kbd> to undo. Changing plate sizes changes every plate in that row or column, so only do it if you'll print all of them again.</p></div>
<div class="step"><h3><span class="num">6</span>The colour change</h3><p>Read the colour-change line in section 2: below it the plates print in the base colour (grey), above it in the ground cover colour (white). It tells you the layer to type into Bambu Studio. The street is below it, so its cobbles print grey; the raised square is above it, so its cobbles would print white (the next lesson fixes that with an insert).</p></div>
<div class="step"><h3><span class="num">7</span>A map of the plates</h3><p>The plate map shows every plate by name. <b>Save the plate map as a picture</b> keeps one to print out and lay the plates by. Click <b>← Back to the plan</b> when you're done. That's it!</p></div>
<h3 id="lesson-printws-parts">Lesson 19: 3D Print workspace: parts and part numbers</h3>
<p>See how Arc breaks a model into printable parts, print two shapes as one part, give a layer its own part-number letters, read the parts list, and re-make only what changed. <span class="where">About 8 minutes · 8 steps · starts from the “3D print: a small landscape (plates, inserts and parts)” template</span></p>
<div class="step"><h3><span class="num">1</span>How a model becomes parts</h3><p>The ground is cut into <b>plates</b>. Every other 3D shape is a <b>part</b>, except that shapes that <b>touch</b> print as one part (each tree's trunk and crown), and shapes with the same <b>Print together as</b> text print as one part even when they don't touch.</p></div>
<div class="step"><h3><span class="num">2</span>Open the 3D Print workspace</h3><p>Click <b>3D Print</b> in the top bar.</p></div>
<div class="step"><h3><span class="num">3</span>Make the parts list</h3><p>Open <b>5. Parts and numbers</b> and click <b>Make the parts list</b>. Each part has a number from its layer's letters (T for Trees, L for Lamps), its size, colours and grams. The lamp is two parts: its post and its globe don't touch.</p></div>
<div class="step"><h3><span class="num">4</span>Select the lamp's two shapes</h3><p>Click the lamp post on the plan, then hold <b>Shift</b> and click its globe.</p></div>
<div class="step"><h3><span class="num">5</span>Print them as one part</h3><p>Type <kbd>lamp</kbd> in <b>Print together as</b> and press <kbd>Enter</kbd>. Now they print as one part, glued at the slicer or joined by a peg.</p></div>
<div class="step"><h3><span class="num">6</span>Part number letters</h3><p>Type <kbd>LP</kbd> in <b>Part number letters</b> and press <kbd>Enter</kbd>. Every part on the Lamps layer gets them. You never type the numbers: Arc gives them in order when it makes the list or saves the files.</p></div>
<div class="step"><h3><span class="num">7</span>Make the list again</h3><p>Click <b>Make the parts list again</b>: the lamp is one part now, LP-01. New parts go on the list by themselves. Numbers are given in order, so a new part can move the numbers after it: always print from the newest files and list together.</p></div>
<div class="step"><h3><span class="num">8</span>Re-make only what changed</h3><p>In <b>6. Check and export</b>, <b>Save just these plates…</b> makes only the plates you tick, and <b>Save the selected parts…</b> only the parts you've selected. <b>7. What to watch out for</b> lists anything risky about your changes: seams, puzzle tabs, pockets, the colour change and the bed size. That's it!</p></div>
<!-- lessons:end -->

<h2 class="part" id="reference">11. Quick reference and good to know</h2>
<h3 id="shortcuts">Keyboard shortcuts</h3>
<div class="tablewrap"><table>
  <tr><th>Key</th><th>What it does</th><th>Key</th><th>What it does</th></tr>
  <tr><td><kbd>V</kbd></td><td>Select</td><td><kbd>M</kbd> / <kbd>C</kbd></td><td>Move / Duplicate</td></tr>
  <tr><td><kbd>E</kbd></td><td>Measure</td><td><kbd>Q</kbd> / <kbd>X</kbd></td><td>Rotate / Mirror</td></tr>
  <tr><td><kbd>L</kbd> / <kbd>P</kbd></td><td>Line / Polyline</td><td><kbd>Z</kbd></td><td>Zoom to fit</td></tr>
  <tr><td><kbd>T</kbd></td><td>Text</td><td><kbd>Esc</kbd></td><td>Stop the tool, or stop Run</td></tr>
  <tr><td></td><td></td><td><kbd>Space</kbd></td><td>Pause or play Run</td></tr>
  <tr><td></td><td></td><td><kbd>Enter</kbd></td><td>Finish, or stop a stick</td></tr>
  <tr><td><kbd>Ctrl</kbd>+<kbd>K</kbd></td><td>Search for any command</td><td><kbd>Ctrl</kbd>+<kbd>,</kbd></td><td>Preferences</td></tr>
  <tr><td><kbd>Ctrl</kbd>+<kbd>Z</kbd> / <kbd>Y</kbd></td><td>Undo / Redo</td><td><kbd>Ctrl</kbd>+<kbd>S</kbd></td><td>Save</td></tr>
</table></div>
<h3 id="eng-words">Words</h3>
<div class="tablewrap"><table>
  <tr><td><b>Module</b></td><td>A gear's tooth size: its pitch diameter in mm, divided by its teeth.</td></tr>
  <tr><td><b>g</b></td><td>How hard a rider is pressed, as a multiple of their own weight.</td></tr>
  <tr><td><b>Chord</b></td><td>A long stick along the top or bottom of a truss.</td></tr>
  <tr><td><b>Gusset</b></td><td>A plate glued over a joint.</td></tr>
  <tr><td><b>Compression</b>, <b>tension</b></td><td>Being pushed, being pulled.</td></tr>
  <tr><td><b>Safety factor</b></td><td>What breaks it, divided by what it has to hold.</td></tr>
</table></div>
<h3 id="limits">Good to know</h3>
<ul class="do">
  <li>Run's numbers are typical and rough, for models and learning. A real ride, or a machine or structure that carries loads or people, needs a licensed engineer.</li>
  <li>Coasters, machines and sticks draw in any edition, so a design made here opens in Arc and Arc Hobby too. Run and these tools are only in Arc Engineering.</li>
  <li>Some of the program is shared with Arc, so you'll see house commands in <span class="ui">File ▾</span> and <span class="ui">Export ▾</span>, such as <b>New lot</b>. You can ignore them.</li>
  <li>The video lessons in <span class="ui">Guide ▾</span> are Arc's, about houses. For Arc Engineering, use the <a href="#lessons">hands-on lessons</a>.</li>
</ul>

<details class="fold" id="building-pack"><summary>The Building pack</summary>
<p>Walls, rooms, doors and windows, stairs, floors, roofs, porches and outdoor work are Arc's house tools. They're for a dollhouse, a model or a station building, and they're off at the start. To turn them on: <span class="ui">File ▾</span> → <span class="ui">Preferences…</span> → <b>Show the house tools</b>.</p>
<div data-from="tool-wall tool-room tool-door tool-stairs tool-floors tool-outdoor tool-roof tool-porch tool-decorate tool-parts"></div>
</details>
`,
};
