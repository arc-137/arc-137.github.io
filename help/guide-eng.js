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
  <tr><td>Stalls</td><td>A winch's load is more than the motor's strongest push: it stops. The Fix buttons swap in slower gears, a smaller drum or a counterweight.</td></tr>
  <tr><td>Wrong speed, Backwards</td><td>A clock hand doesn't turn once a minute, once an hour or once in 12 hours, or turns anticlockwise.</td></tr>
</table></div>
<p>The strength numbers are rough: Run shows how the parts move together, and it isn't an engineering analysis. The lessons are <a href="#lesson-eng-make-it-move">Make it move</a> and <a href="#lesson-eng-gearbox">Fix the broken machine</a>. The 3D shape tool can make gears for printing too: <a href="#turned-swept-gear">turned shapes, ropes and rails, and gears</a>.</p>
<h3 id="mech-real">Machines from real life</h3>
<p>Five projects about things you've used or seen, for anyone who'd like to play with how they work. Each starts from a template with a goal (the <b>Goal</b> box on Run's card ticks it off, and keeps your best try), and each has a lesson. While Run plays, the <b>Play with it</b> panel at the top right of the 3D view changes things as it moves: what you change there doesn't touch the plan until you press <b>Keep this</b>. Changes the 3D view has to draw (the gears, the ramp, the wheels, the blades) go into the plan straight away, as one step you can undo.</p>
<div class="tablewrap"><table>
  <tr><th>Template</th><th>What you play with</th><th>The goal</th></tr>
  <tr><td><b>Winch: lift the bucket</b></td><td>The gears on each stage, the weight in the bucket, the drum, a counterweight, <b>Motor on</b> (cut the power: it falls) and a <b>Ratchet</b>.</td><td>1 kg up 300 mm in under 9 s with one TT motor.</td></tr>
  <tr><td><b>Elevator with a counterweight</b></td><td>The same winch with a weight on the other side of the rope.</td><td>No goal: see how little the motor lifts.</td></tr>
  <tr><td><b>Toy car up a ramp</b></td><td>The ramp's angle and surface, 2 or 4 motors, the motor, the wheels, extra gears, the car's weight.</td><td>Get to the top of the 20° ramp.</td></tr>
  <tr><td><b>Bike gears on a hill</b></td><td>Shift the front ring and back cog while you ride, the hill, your legs, you and the bike's weight.</td><td>Over the 8% hill without stopping, and 30 km/h on the flat.</td></tr>
  <tr><td><b>Clock gear train</b></td><td>Each gear's teeth (in the panel). Run's 60× and 3600× show the hands move.</td><td>All three hands keep time.</td></tr>
  <tr><td><b>Prairie windmill pump</b></td><td>The wind, the blades, the pump's stroke, how deep the water is.</td><td>Fill the 200 L trough in under 30 minutes.</td></tr>
</table></div>
<ul>
  <li><b>Motors slow down under load.</b> A motor runs fastest with nothing to turn and stops at its strongest push (it stalls). In between, its speed falls in a straight line. It gives the most power at about half speed, so a winch is fastest geared so its load needs about half the motor's strongest push.</li>
  <li><b>Grip.</b> A wheel can only push as hard as the weight on it times how grippy the surfaces are. Driving all four wheels puts all the weight to work.</li>
  <li><b>Gears trade speed for strength.</b> On a bike, an easy gear makes each push light but the wheel turns slowly; your legs, like a motor, are strongest turning slowly.</li>
  <li><b>Wind power grows fast.</b> Twice the wind brings 8 times the power. Many blades start strongly from a standstill; few blades spin fast.</li>
</ul>
<p>Machine ▾ has the parts for your own: <b>Clock hand</b>, <b>Tube</b> (turns freely on a shaft), <b>Toy car</b>, <b>Ramp</b>, <b>Bike</b> and <b>Farm windmill</b>, the <b>Clock movement</b> motor, and <b>Goal…</b> to make a template's goal harder or easier. Any shaft's <b>Load on it → Winds up a weight</b> makes a winch: set how high it goes, a counterweight and a ratchet in the panel.</p>

<h3 id="physics">Physics you can play with</h3>
<p>The <b>Physics ▾</b> menu (the Physics lab pack) has things to play with that need no gears: anyone can start here. Each starts from a template with a goal, and each has a lesson. Press <b>Run</b>, then drag a slider on the <b>Play with it</b> panel, or drag the thing itself in the 3D view, and the motion and the numbers change straight away. <b>Let go</b>, <b>Pull</b> and <b>Launch</b> play it again from the start. Under the numbers in the corner, the <b>energy bars</b> show where the energy is: as height, as motion, and what rubbing has turned into heat; the small graph shows one number over the whole run.</p>
<div class="tablewrap"><table>
  <tr><th>Template</th><th>What you play with</th><th>The goal</th></tr>
  <tr><td><b>Swing: one tick a second</b></td><td>The string's length, the weight, how far it's pulled back (drag the weight in 3D).</td><td>There and back in 1 s, then a grandfather clock's: 1 s each way.</td></tr>
  <tr><td><b>Playground swing</b></td><td>The chain, the rider, how far back, <b>Pump your legs</b>.</td><td>No goal: why heavy and light kids swing together.</td></tr>
  <tr><td><b>Toboggan hill</b></td><td>The hill's angle, what the sled slides on, the rider's weight.</td><td>The longest ride that stops before the fence; then the steepest hill a rubber boot holds on.</td></tr>
  <tr><td><b>Seesaw: balance a grown-up and a kid</b></td><td>Where each rider sits and their weight, the pivot (drag them in 3D).</td><td>Balance an 80 kg grown-up and a 25 kg kid.</td></tr>
  <tr><td><b>Canoe hoist</b></td><td>How many rope lines hold the canoe, its weight, the pulleys (drag the rope down in 3D).</td><td>Lift 30 kg pulling no harder than lifting 8 kg.</td></tr>
  <tr><td><b>Desk trebuchet</b></td><td>The counterweight, when the ball lets go, the pin, the ball, the bucket (drag it in 3D).</td><td>Land it in the bucket at 1.5 m; then the furthest throw with 200 g of washers.</td></tr>
  <tr><td><b>Marble run with a loop</b></td><td>The start height, the loop's size, a marble or a coaster car.</td><td>Round the loop from the lowest start you can.</td></tr>
</table></div>
<ul>
  <li><b>Only the length sets a swing's time.</b> Weight doesn't; four times as long swings twice as slowly. A big swing is a little slower than a small one: Run works out the real swing, not the textbook shortcut.</li>
  <li><b>Rubbing holds things still on a slope</b> until the slope pulls harder than it can hold. How steep that is depends on the two surfaces, not the weight.</li>
  <li><b>Weight × distance turns a lever.</b> A light rider far out balances a heavy one close in; a crowbar works the same way.</li>
  <li><b>More rope lines, less pull, more rope.</b> Each pulley loses a little to rubbing, so it's never quite the weight divided by the lines.</li>
  <li><b>A rolling marble spins,</b> so only 5/7 of its energy moves it along: it needs a higher start to get round a loop than a sliding car.</li>
</ul>
<p>The numbers are the real sums with typical values for the rubbing and the air: close to the real thing, not exact. Each lesson ends with <b>Make it for real</b>: what you'd need from around the house, and rough prices. Physics ▾ also has each of them as a tool of its own (click where, then the way it faces), and <b>Goal…</b> to change a goal's numbers.</p>

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
<h3 id="struct-real">Real size: lumber, glulam and steel</h3>
<p>The Stick list also has what buildings are made of, under <b>Real size</b>, Canadian sizes first with the US names beside them:</p>
<ul>
  <li><b>Lumber</b>: S-P-F and Douglas fir-larch No.1/No.2 at their dressed sizes, from a 2×4 (38 × 89 mm) to a 2×12 (38 × 286 mm), and a 4×4. Strengths are the CSA O86 specified strengths with its size factors: the values design starts from, so real pieces usually hold more.</li>
  <li><b>Glulam</b>: 20f-E spruce-pine beams, 80 × 228 mm to 175 × 380 mm.</li>
  <li><b>Steel</b> in 350W: W-shapes from W150×22 to W410×60, square HSS, and angles. Their areas and stiffnesses are worked out from the CISC Handbook's dimensions.</li>
</ul>
<p>A real beam or post is <b>Pinned</b> at each end (a bolted clip, a hanger, nails) or <b>Fixed</b> (welded, an end plate); glue is for models. A long steel beam with nothing holding its top flange rolls over sideways (lateral-torsional buckling) well before it bends, and Run shows it. Heavy loads read in kilograms and kN, and the cut list prices lumber by the length and steel by its weight, in Canadian dollars. Typical numbers, for learning: the code check, building loads and connections below take it further, and a real building needs a licensed engineer.</p>
<h3 id="struct-code">The code check</h3>
<p>Real members are also checked the way a Canadian designer starts: steel by <b>CSA S16</b>, lumber and glulam by <b>CSA O86</b>. The loads are multiplied up (1.25 × its own weight + 1.5 × your weights, NBC's main case) and each member's strength is taken down by the code's resistance factors (φ 0.9 for steel, 0.8–0.9 for wood). A member passes when what the loads ask is no more than what it's allowed: pulling, pushing (with buckling), bending (with rolling over sideways) and shear, and pushing or pulling together with bending.</p>
<ul>
  <li><span class="ui">Structures ▾</span> → <b>Code check…</b> lists every real member: what the factored loads ask, what it's allowed (Tr, Cr, Mr, Vr), the clause that governs and how much of it is used.</li>
  <li>A member that doesn't pass shows on the card, with a Fix: the next size up, or <b>Hold its top sideways</b>.</li>
  <li><b>Held sideways along its top</b> in a beam's panel: decking, sheathing or joists fixed across its top stop it rolling over. A bare 2×10 over 3.6 m is allowed about a quarter of what the same joist under a floor is.</li>
</ul>
<p>The load test says when it would break; the code check says whether it's allowed to carry your loads, with the margins the code builds in. Floors, roofs and snow are under Building loads, and the bolts, welds and footings under Connections, below. For learning: a real building needs a licensed engineer.</p>
<h3 id="struct-nbc">Building loads</h3>
<p>A real floor or roof carries the loads of the <b>National Building Code of Canada</b>. Draw a deck over the beams or joists, and in its panel set:</p>
<ul>
  <li><b>Building load</b>: what the floor is for (a home 1.9 kPa, offices or classrooms 2.4 kPa, assembly, stores, corridors, balconies and footbridges 4.8 kPa), or <b>Roof</b>, which carries the place's snow.</li>
  <li><b>Finishes and covering</b>: its dead load in kPa (flooring, sheathing, roofing, ceilings: about 0.5 kPa for a wood floor).</li>
</ul>
<p>The deck's load spreads along the sticks under it by their length. <span class="ui">Structures ▾</span> → <b>Building loads…</b> picks where it stands, western Canada first, and shows its snow (S = 0.8 × Ss + Sr, at least 1.0 kPa) and its 1-in-50 wind. <b>Test its 1-in-50 wind</b> sets the Wind test to it. The code check then takes every NBC load combination (1.4D; 1.25D + 1.5L with snow or wind; 1.25D + 1.5S; 1.25D + 1.4W; 0.9D for uplift; with an earthquake 1.0D + 1.0E + 0.5L + 0.25S) and names the one that governs. The load test grows the live and snow loads with your weights. Rounded values, for learning: drifts, steep and big roofs and the full wind method come later.</p>
<h3 id="struct-conn">Connections and footings</h3>
<p>A real member is only as strong as what holds its ends. In a real member's panel, <b>Joined</b> at each end can be <b>Bolted</b> (pick how many bolts and which) or, for steel, <b>Welded</b>:</p>
<ul>
  <li><b>Steel, bolted</b>: a 10 mm shear tab with ¾" or ⅞" A325 or M20 bolts, checked by CSA S16 for the bolts shearing and the plate or web crushing round them.</li>
  <li><b>Steel, welded</b>: a 6 mm fillet weld all round the end (CSA S16).</li>
  <li><b>Wood, bolted</b>: ½" to ¾" bolts through a steel plate in a slot down the middle, worked out the way CSA O86 does (the wood crushing round the bolt, or the bolt bending), approximately.</li>
</ul>
<p>A block can be <b>A footing on</b> a soil, from soft clay to rock (NBC 9.4.4.1's bearing values). Its panel says how hard it presses on the ground and how big it needs to be, and <b>Make it big enough</b> on the card sizes it. The code check lists each connection with its member; the load test shows a bolt shearing or a weld tearing when that's what gives first. The cut list adds the bolts, plates, welding and concrete, in Canadian dollars. For learning: nails, hangers and moment connections come later, and a real connection is designed by a licensed engineer.</p>
<h3 id="struct-real-start">Real structures to start from</h3>
<p>Four real-size templates (<b>File → New from template</b>), each with a lesson under <b>Real size</b> in <span class="ui">Guide ▾</span>. Each has something to find with the card and the code check:</p>
<ul>
  <li><b>Backyard deck</b>: 2×6 joists, 2×10 beams and concrete piers in Calgary, loaded as a home's deck (1.9 kPa). The joists are too small for their span, and the footings sink in soft clay. Then put a hot tub on it.</li>
  <li><b>Garage door header</b>: a glulam beam over a 5.2 m door, holding the front half of the roof. It passes in Calgary; move it to Prince George, Québec City or St. John's in Building loads and size it for their snow.</li>
  <li><b>Steel carport</b>: two portal frames in Québec City's snow. Its rafters are strong enough but sag more than a roof may (strong isn't stiff), and its footings are small for soft clay.</li>
  <li><b>Glulam footbridge</b>: two beams 8 m across a creek, loaded for a crowd (4.8 kPa). The beams, then the bolts at their ends, then the bounce.</li>
</ul>
<p>Members that fail the same way (all of a deck's joists, both of a bridge's beams) are one card, and its Fix changes them all. A floor or roof shares its load out to the members under it by the part of it nearest each one, the way engineers do: its tributary area. A real member that sags more than its span ÷ 180 under its loads says so, with the next size up. For learning: a real deck, garage or bridge needs a permit, and a real building a licensed engineer.</p>
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
<p>Put down batteries, switches, fuses, LEDs, resistors, a buzzer, motor drivers, boards and servos, wire them from pin to pin, and press <b>Run</b>: Arc works out the volts at every pin and the amps in every wire, lights the LEDs as bright as their current makes them, turns a motor at the speed its battery gives, and drives a car across the floor. While it runs you can flip the switches, swap the battery and the driver, steer, and pull wires out to see what changes. To start, open the <b>Flashlight</b>, <b>Desk fan</b>, <b>Play bench</b>, <b>Battery car</b> or <b>Fan with a speed knob</b> template, or the lesson <a href="#lesson-elec-withme-flashlight">Do it with me: a flashlight</a>.</p>
<h3 id="elec-parts">The parts</h3>
<p>Pick a part from <span class="ui">Power ▾</span>, or pick <b>Part</b> on the tool bar and choose it in the panel, then click where it goes (in the 3D view too: it sits on what you click). The Parts drawer has them all with pictures. Each part has small dots for its pins: red is <b>+</b>, black is <b>−</b>. Click a part to set it up in the panel (a resistor's value, an LED's colour, a fuse's rating, a holder's cells and charge, a switch on or off) and to see what it's doing right now ("19 mA", "4.7 V at its pins").</p>
<ul>
<li><b>Power:</b> holders for 2, 3 and 4 AA cells (alkaline, 1.5 V each, or rechargeable NiMH, 1.2 V), a 9 V battery, a 2S LiPo pack (advanced) and a certified Class 2 plug-in adapter (5, 9 or 12 V; only its low-voltage plug is shown).</li>
<li><b>Switches:</b> slide and rocker switches that stay on or off, a push button and a limit switch that join their legs only while pressed.</li>
<li><b>Fuses:</b> a resettable fuse (0.5, 1 or 2 A) and a blade fuse in an inline holder (2, 3 or 5 A).</li>
<li><b>Lights and sound:</b> 5 mm LEDs in five colours, ¼ W resistors (10 Ω to 1 MΩ, with their colour bands in 3D), a 5 V buzzer and a 10 kΩ knob.</li>
<li><b>Drivers and boards:</b> the L298N, TB6612FNG and DRV8833 motor drivers (two DC motors each), a PWM speed module with a knob (no board needed), the A4988 and DRV8825 stepper drivers, and Uno- and Nano-compatible boards.</li>
<li><b>Servos and the car:</b> SG90 and MG90S servos, a two-wheel car chassis, and a TT motor with a 65 mm wheel to go under it.</li>
<li><b>Breadboards</b> of 830 and 400 holes.</li>
<li><b>Motors</b> are the Machine tools' TT and N20 motors and the NEMA 17 stepper, with two pins on the back (a stepper's pins stand for its two coils).</li>
</ul>
<h3 id="elec-drivers">Motor drivers and boards</h3>
<p>A board's pins give only about 20 mA, a few LEDs' worth: a motor needs a <b>driver</b>. Wire the battery's + to the driver's <b>VM</b> and − to its <b>GND</b>, a motor to <b>A1</b> and <b>A2</b> (and another to <b>B1</b> and <b>B2</b>), and its <b>IN A</b> and <b>IN B</b> to two of the board's pins. Arc draws each channel's IN1, IN2 and EN pins as one IN pin, to keep the wiring simple; on the real module those are three jumpers. Join the driver's GND to the board's GND too: a signal means nothing without a shared ground. The <b>L298N</b> is the common one, but it loses about 1.9 V inside; the <b>TB6612FNG</b> loses only a few tenths and needs the board's 5 V on its VCC pin; the <b>DRV8833</b> is small, for motors up to 1.5 A.</p>
<p>A board takes 7–12 V on <b>VIN</b> (its regulator loses about 1.1 V making 5 V), or 5 V from USB when nothing is on VIN. Its <b>5V</b> pin feeds small parts: servos, a driver's logic. Below about 4.2 V it stops or resets. Until behaviour cards come in the next round, a board runs a remote-control program: under <b>Play with it</b>, each pin that's wired gets its own controls: a motor channel <b>Forward</b>, <b>Stop</b> or <b>Back</b> and its speed (the share of the time the driver switches it on), a servo's angle, a stepper's speed in rpm, anything else on or off. <b>Keep this</b> writes them onto the board.</p>
<p>The <b>PWM speed module</b> does a driver's job with a knob and no board: it switches the power on and off very fast, so the motor gets the knob's share of the volts and the battery gives only that share of the motor's current. A resistor doing the same would turn the rest into heat.</p>
<h3 id="elec-servos">Servos and steppers</h3>
<p>A <b>servo</b> goes to the angle its signal says (0 to 180°): + (red) to 5 V, − (brown) to GND, the signal (orange) to a board pin. In Run its arm swings to the angle under Play with it. Each SG90 pulls about 0.65 A for a moment as it starts, so two starting at once can pull a board's 5 V under 4.2 V and reset it: Run blinks the board and the card says to give the servos their own battery.</p>
<p>A <b>stepper</b> goes on a stepper driver: 8 V or more on VM, its two coils on A and B, the board's 5 V on the driver's 5V pin, and STEP to a board pin. Each pulse is one step, 200 a turn. Its torque falls as it spins faster, so a heavy load at a high speed makes it skip steps: slow it down, turn up the driver's current (its little screw, in the panel) or give it more volts.</p>
<h3 id="elec-breadboard">Breadboards</h3>
<p>Put a breadboard down, then put parts down on it: an LED, a resistor, a button, a Nano or a driver sits on its top and its legs go into the holes. The holes in each row are joined in fives, a–e and f–j, with the gap between; the red + and blue − rails run along both sides. Wire from hole to hole for jumpers. Click the breadboard and set <b>Show inside</b> to see the metal strips that join the holes, in 2D and 3D: that's where most first circuits go wrong.</p>
<h3 id="elec-car">The battery car</h3>
<p>Put a <b>Two-wheel car chassis</b> down, a <b>TT motor with a 65 mm wheel</b> under each side at the back (turn the left one round so its wheel is outside), and the battery, switch, fuse, driver and board on the plate: whatever sits on it rides along. In Run the car drives across the floor at the speed its wheels turn; when one wheel turns faster it steers. Click the 3D view and use the <b>arrow keys</b>: up and down drive, left and right turn it on the spot. The bar shows its speed and how far it would go on this charge. If it spins on the spot, one motor is wired the wrong way round: the card swaps its wires.</p>
<h3 id="elec-sheets">Schematic and wiring diagram</h3>
<p><span class="ui">Power ▾</span> → <b>Schematic and wiring diagram…</b> draws the circuit for you from the wires. The <b>schematic</b> shows each part as its standard symbol (IEC 60617), labelled B1, R1, LED1 and its value, joined square from pin to pin (a breadboard's rows count as joins). The <b>wiring diagram</b> shows the real parts from above with their coloured wires, each numbered, and a cut list: from, to, colour, gauge and the length to cut. <b>Save PDF…</b> saves both pages. A hand-in carries the schematic too.</p>
<h3 id="elec-wire">Wiring</h3>
<p>Pick <b>Wire</b> on the tool bar. Click a pin, click where the wire bends, and click another pin. It carries on from there, so you can go round a loop one pin at a time; <kbd>Esc</kbd> stops. In the 3D view, click the pins on the model: the one nearest the pointer glows orange. Wires to a <b>+</b> come out red and wires to a <b>−</b> black; the panel picks another colour and the <b>gauge</b>: 28 to 18 AWG, where a bigger number is a thinner wire that carries less current. A wire follows its parts when they move. Click a wire to see its ends, its length and its resistance.</p>
<h3 id="elec-run">Run for circuits</h3>
<p>Press <b>Run</b>. Labels on the parts show the numbers: each battery's volts, current and how long it lasts; each LED's current; each fuse's current against its rating; each motor's volts and current. LEDs glow (a burnt one goes dark), a blown fuse goes grey, a wire carrying a lot glows orange, and a buzzer that's on really beeps. A motor's gears turn at the speed its volts give: on a flat battery the whole machine slows, and the machine's own labels say how many volts the motor gets.</p>
<p><b>Play with it</b>, at the top right of the 3D view, changes things while it runs without touching the plan: swap the battery (2, 3 or 4 AA, NiMH, 9 V, LiPo) and its charge (full, half, nearly flat), flip switches, hold a push button down, turn a knob, or short the battery on purpose (safe here, never for real). Clicking a switch, a button or a knob on the 3D model works too, and clicking a wire unplugs it. <b>Keep this</b> writes your changes into the plan as one step you can undo; <b>Put back</b> forgets them, and so does <b>Stop</b>. The <b>60×</b> speed runs a long test quickly.</p>
<h3 id="elec-checks">What Run checks</h3>
<p>The card says what's wrong, why, and how to fix it, with a button that does it:</p>
<ul>
<li><b>Short circuit:</b> a battery's + joined straight to its − by wires alone. Remove the wire, or add a fuse.</li>
<li><b>No fuse</b> by a battery that gives real current (always for a LiPo or an adapter), and a fuse that <b>blows</b>, including for a moment when a motor starts.</li>
<li><b>LEDs:</b> no resistor (it burns out), a resistor too small (too bright and hot) or too big (too dim), in backwards, or not enough volts (white and blue LEDs need about 3.1 V). The fix works out the resistor: R = (supply volts − LED volts) ÷ 20 mA.</li>
<li><b>Wire too thin</b> for its current, a resistor hotter than ¼ W, and a red wire on a − pin (or black on +).</li>
<li><b>Motors:</b> not wired, stalled for want of volts, or given more volts than they're made for (the fix runs it at a lower speed). A stepper on a battery alone needs a stepper driver; on its driver it may skip steps.</li>
<li><b>Drivers and boards:</b> motors that pull more than the driver gives as they start, a driver given too many or too few volts, no signal on its IN pins, no shared ground, a TB6612 with no 5 V on its VCC, the L298N's lost volts, a motor wired straight to a board pin, a battery fed into a board's 5V pin, a board whose VIN is too low so it keeps resetting, servos that make it reset as they start, and a servo given more than 6 V.</li>
<li><b>The car:</b> a wheel that turns backwards, so the car spins on the spot.</li>
<li><b>Batteries:</b> volts that collapse under the load, a 9 V battery asked to run a motor, and a LiPo run below 3.2 V a cell.</li>
<li><b>What did I miss?</b> Notes for your own design: no way to turn it off, a part with a leg left unwired.</li>
</ul>
<p><b>Build ▾ Parts list and prices</b> lists the batteries, cells, switches, fuses, LEDs, resistors, drivers, boards (with a USB cable), servos, breadboards, wheels and the chassis you drew, a LiPo's charger, bag and plug, jumper wires for what goes on a board or a breadboard, and the other wire by gauge and colour in metres, with 10% extra.</p>
<div class="tip"><b>Batteries and low voltage only.</b> Everything here is 24 V DC or less, and nothing is wired to the wall: the plug-in adapter must carry a CSA or cUL mark and say Class 2. <b>LiPo packs</b> are for experienced makers: charge them on a balance charger, in a fire-safe bag, on something that won't burn, and never leave them charging alone. Never use one that's puffed, dented or hot, never run one below 3.2 V a cell, and store them at about 3.8 V a cell. Keep battery terminals covered, never carry a 9 V battery loose with keys or coins, and recycle used batteries (Call2Recycle has drop-offs across Canada). Solder with an iron stand, eye protection and fresh air.</div>
<p>The older house <b>Wires</b> tool (with <b>Show the house tools</b> on in Preferences) still draws a route as a line; for circuits, use <b>Wire</b>.</p>
<h2 class="part" id="printing">9. 3D printing</h2>
<p>Parts you draw with the 3D shape tool, and the machine parts, can go to a 3D printer. The lessons are the <a href="#lesson-printws-plates">3D Print workspace</a> and <a href="#lesson-printws-parts">its parts</a>.</p>
<div data-from="print-object print-workspace print-ground"></div>

<h2 class="part" id="lessons">10. Hands-on lessons</h2>
<!-- lessons:start -->
<!-- Made by tools/make-guide-lessons.js from src/js/lessons.js: change the lessons there, then run it again. -->
<p>40 lessons you do in Arc Engineering, with a panel over the plan that walks you through each step and <b>ticks it off by itself</b> when it sees the work done. Open them from <span class="ui">Guide ▾</span> → <b>Hands-on lessons</b>. Each one opens its own practice project, so save yours first if it asks.</p>
<ul class="do">
  <li><b>Show me</b> points at the button or setting the step needs (it opens a menu first if it has to).</li>
  <li><b>Skip</b> and <b>Back</b> move between steps; click any step in the list to jump to it. The ▾ button folds the panel down to one line; × closes it and keeps your place.</li>
  <li><b>In the way?</b> Drag the panel by its title bar (the ⠿ dots) to anywhere in the window, with the mouse or a finger. It stays where you put it until you close Arc; double-click the title bar to put it back. The same goes for the other floating cards: the lesson offer, the <b>What will you build?</b> start card and the video player.</li>
  <li>At the end, the panel says what comes next, and <b>Do it again</b> starts it fresh.</li>
</ul>
<div class="tablewrap"><table>
<tr><th>Lesson</th><th>What you do</th><th>Time</th></tr>
<tr><th colspan="3">Start here</th></tr>
<tr><td><a href="#lesson-eng-start">1. Getting started with Arc Engineering</a></td><td>Draw a line to length, make a motor turn two gears and press Run to see them go in 3D. Then draw a stick and add a dimension.</td><td>10 min</td></tr>
<tr><th colspan="3">Do it with me</th></tr>
<tr><td><a href="#lesson-eng-withme-coaster">2. Do it with me: a desktop coaster</a></td><td>Build a whole coaster about as long as a table, piece by piece, on dashed lines: a station, a lift hill, a drop, a loop, a climbing turn, a second drop and brakes. Then stand it on posts, put a train on it, find its two problems with Run, fix them and ride it.</td><td>20 min</td></tr>
<tr><td><a href="#lesson-eng-withme-bridge">3. Do it with me: a truss bridge</a></td><td>Build a truss bridge by hand across a 300 mm gap, stick by stick, in the 3D view: the bottom, the triangles and the top. Then make it two sides, hang 1 kg on it, stiffen its joints with gussets, see which sticks are pushed and pulled, make it stronger, read what it costs, and watch it break in slow motion.</td><td>22 min</td></tr>
<tr><td><a href="#lesson-elec-withme-flashlight">4. Do it with me: a flashlight</a></td><td>Wire a battery, a switch and a white LED into one loop, press Run and watch the LED burn out, then work out the resistor that saves it. Flip the switch and try a smaller battery while it runs.</td><td>8 min</td></tr>
<tr><th colspan="3">Physics you can play with</th></tr>
<tr><td><a href="#lesson-eng-swing">5. The swing</a></td><td>Why a heavy kid and a light kid swing back and forth in the same time, and why a grandfather clock is so tall. Make a desk pendulum tick once a second.</td><td>8 min</td></tr>
<tr><td><a href="#lesson-eng-toboggan">6. The toboggan hill</a></td><td>Why a sled sits still on a gentle slope and takes off on a steeper one, why waxed runners go further, and why the rider's weight hardly matters. Get the longest ride that still stops before the fence.</td><td>9 min</td></tr>
<tr><td><a href="#lesson-eng-seesaw">7. The seesaw</a></td><td>How a small kid can lift a grown-up: the same reason a crowbar pulls a nail. Balance Dad and Mia on a seesaw by sliding them along it, or by moving the pivot.</td><td>7 min</td></tr>
<tr><td><a href="#lesson-eng-canoe">8. Lift the canoe</a></td><td>The garage hoist that lifts a 30 kg canoe to the ceiling with one hand. More rope lines make it lighter, and cost you more rope, and every pulley takes a little. Lift it pulling no harder than lifting 8 kg.</td><td>7 min</td></tr>
<tr><td><a href="#lesson-eng-trebuchet">9. The trebuchet</a></td><td>How a castle-siege machine threw stones with no springs: a falling weight and a long arm. Land a marshmallow in a bucket 1.5 m away. Aim at a target, never at people.</td><td>9 min</td></tr>
<tr><td><a href="#lesson-eng-marble-run">10. The marble run</a></td><td>Why a marble can't climb higher than it started, and why it needs to start higher than you'd think to get round a loop. Foam pipe insulation, a marble and a 150 mm loop.</td><td>7 min</td></tr>
<tr><th colspan="3">Coasters</th></tr>
<tr><td><a href="#lesson-eng-coaster">11. Why did the car stop?</a></td><td>Ride a desktop coaster with Run, read why the car stops before hill 2, raise the lift until it makes it, then soften a dip that presses riders too hard, and ride it from the front seat.</td><td>8 min</td></tr>
<tr><th colspan="3">Machines</th></tr>
<tr><td><a href="#lesson-eng-make-it-move">12. Make it move</a></td><td>Put down a motor, a 12-tooth gear on its shaft and a 36-tooth gear that snaps into mesh, press Run and watch the big gear turn 3× slower; then make it 60 teeth and see 5×.</td><td>6 min</td></tr>
<tr><td><a href="#lesson-eng-gearbox">13. Fix the broken machine</a></td><td>A two-stage gearbox with three planted faults: tooth sizes that don't match, a gear 2 mm out, and a shaft with no bearings. Run finds each one; fix them and it turns 9:1.</td><td>8 min</td></tr>
<tr><th colspan="3">Electronics</th></tr>
<tr><td><a href="#lesson-elec-fan">14. A desk fan</a></td><td>A TT motor and a printed fan blade on 4 × AA. Swap the battery while it runs and see the speed follow the volts, find out why a 9 V battery is the wrong one, and size the fuse.</td><td>7 min</td></tr>
<tr><td><a href="#lesson-elec-playbench">15. Play bench</a></td><td>Nothing to build: one battery and switch feeding an LED with a dimmer knob, a buzzer on a button and a fan on its own switch. Turn, press, flip, unplug and short it while Run plays.</td><td>5 min</td></tr>
<tr><td><a href="#lesson-elec-car">16. A battery car</a></td><td>A two-wheel car on 4 × AA with a motor driver and a Nano. Drive it across the floor and steer it, swap the L298N for a TB6612 and see it speed up, find out why NiMH cells make the board reset, and try a LiPo.</td><td>12 min</td></tr>
<tr><td><a href="#lesson-elec-speedknob">17. A fan with a speed knob</a></td><td>A TT motor and fan on a 12 V adapter through a PWM speed module. Turn the knob in Run and see the speed, the amps and the watts, find the knob's limit, and see why a knob can't just be a big resistor.</td><td>6 min</td></tr>
<tr><th colspan="3">Machines from real life</th></tr>
<tr><td><a href="#lesson-eng-winch">18. The winch</a></td><td>A tow truck's winch, a crane, a boat trailer's crank: lift a 1 kg bucket 300 mm in under 9 seconds with one small motor. Too strong is slow, too fast stalls. Then cut the power and see what the load does, and stop it with a ratchet.</td><td>10 min</td></tr>
<tr><td><a href="#lesson-eng-hill-car">19. The hill-climbing car</a></td><td>Why a toy car stalls or spins its wheels on a ramp, and what gets it up: grip, the weight on the driven wheels, gears and wheel size. Then the steepest ramp it can climb.</td><td>9 min</td></tr>
<tr><td><a href="#lesson-eng-bike">20. Bike gears</a></td><td>Your own bike: why a low gear for hills, and why you can't pedal fast enough in it on the flat. Ride a real-size bike over a long hill and shift while you ride.</td><td>9 min</td></tr>
<tr><td><a href="#lesson-eng-clock">21. The clock</a></td><td>How one turning shaft drives three hands at three speeds, two of them on the same spot. A skeleton clock's hour hand goes round in 4 hours: fix its gears so it keeps time.</td><td>8 min</td></tr>
<tr><td><a href="#lesson-eng-windmill">22. The prairie windmill</a></td><td>The many-bladed windmills on prairie farms that pump water for cattle: why they have so many blades, and why twice the wind brings eight times the power. Fill the trough in a light breeze.</td><td>8 min</td></tr>
<tr><th colspan="3">Structures</th></tr>
<tr><td><a href="#lesson-eng-build3d">23. Build it in 3D</a></td><td>No heights to type: in the 3D view a stick follows the pointer up and over. Draw a bridge across a gap from the side, make it two sides, hang weights on its top, brace it, and drag a joint higher.</td><td>8 min</td></tr>
<tr><td><a href="#lesson-eng-triangles">24. Triangles</a></td><td>A ladder bridge with no diagonals holds only by its glue, and lets go at about 0.7 kg. Add diagonals, so every square is two triangles, and it holds about ten times as much.</td><td>5 min</td></tr>
<tr><td><a href="#lesson-eng-forces">25. Where does the load go?</a></td><td>Every stick in a truss is pushed or pulled. See which, read the numbers, and check one by hand: the weight goes down the diagonals to the blocks.</td><td>8 min</td></tr>
<tr><td><a href="#lesson-eng-bridge">26. Why did the bridge break?</a></td><td>A balsa bridge meant to hold 2 kg gives way at under 1 kg. Brace its top sideways, then gusset the joints that let go, and it holds 2 kg and breaks at about 5 kg.</td><td>8 min</td></tr>
<tr><td><a href="#lesson-eng-craft">27. A craft-stick bridge</a></td><td>Craft sticks are only 114 mm long, so a bridge's chords are sticks overlapped and glued. This one's overlaps are 6 mm, and the glue lets go under its 10 kg. Overlap them 30 mm and it holds.</td><td>6 min</td></tr>
<tr><td><a href="#lesson-eng-contest">28. Bridge contest</a></td><td>Hold 2 kg across 400 mm with balsa and hot glue, under 30 g and $12, lightest wins. This bridge holds twenty times that, but it's too heavy: thin the sticks that don't need it, watch the goals tick, and put it on the scoreboard.</td><td>8 min</td></tr>
<tr><td><a href="#lesson-eng-tower">29. Tower in the wind</a></td><td>A tall, thin basswood tower tips over in a 6 m/s breeze. Pegged guy lines hold it up; then see how much wind it takes.</td><td>6 min</td></tr>
<tr><td><a href="#lesson-eng-quake">30. Tower in an earthquake</a></td><td>A tower with a water tank on top, braced on two faces only, leans over in a 0.3 g earthquake. Brace every face, and it stands more than twice that.</td><td>6 min</td></tr>
<tr><td><a href="#lesson-eng-crane">31. Tension and compression: the crane</a></td><td>A crane arm on a wall, held by a string tie that runs the wrong way, so it goes slack. Tie it from above, and see which part is pushed and which is pulled.</td><td>6 min</td></tr>
<tr><td><a href="#lesson-eng-shelf">32. A shelf that holds books</a></td><td>A real-size shelf on 2020 aluminium arms with 20 kg of books: the corner brackets slip at 15 kg. Add a second bracket, read the margin and the sag, then compare a pine board.</td><td>8 min</td></tr>
<tr><th colspan="3">Real size</th></tr>
<tr><td><a href="#lesson-eng-real-deck">33. A backyard deck</a></td><td>A real deck in Calgary, 4.8 × 3.6 m, in 2×6 joists, 2×10 beams and concrete piers. The building code says what it has to carry; the code check finds the joists too small and the footings sinking into soft clay.</td><td>8 min</td></tr>
<tr><td><a href="#lesson-eng-real-header">34. Snow across Canada</a></td><td>The glulam beam over a garage door holds up the front half of the roof and the snow on it. It passes in Calgary. Move the garage to Prince George, where the snow is more than twice as heavy, and size it again.</td><td>6 min</td></tr>
<tr><td><a href="#lesson-eng-real-carport">35. Strong isn't stiff: a steel carport</a></td><td>A steel carport in Québec City's snow: its W150 rafters pass the code check, but sag more than a roof may. Make them stiffer, give the footings room in soft clay, then watch it break.</td><td>8 min</td></tr>
<tr><td><a href="#lesson-eng-real-footbridge">36. A footbridge for a crowd</a></td><td>A glulam footbridge 8 m across a creek, loaded for a crowd. The beams are too small, one bolt can't hold an end, and then it bounces: three fixes, and a look at the connections in 3D.</td><td>8 min</td></tr>
<tr><td><a href="#lesson-printws-plates">37. 3D Print workspace: plates and the colour change</a></td><td>Open the 3D Print workspace, see how a model base is cut into plates with puzzle tabs, change the plate sizes, and find the layer where the filament changes colour.</td><td>8 min</td></tr>
<tr><td><a href="#lesson-printws-parts">38. 3D Print workspace: parts and part numbers</a></td><td>See how Arc breaks a model into printable parts, print two shapes as one part, give a layer its own part-number letters, read the parts list, and re-make only what changed.</td><td>8 min</td></tr>
<tr><th colspan="3">Machines</th></tr>
<tr><td><a href="#lesson-eng-ballroll">39. Why the ball stops: friction, slope and bounce</a></td><td>Test-play a mini golf lane, then change the felt's friction, tilt the lane and change the border's bounce, and see what each does to the ball.</td><td>15 min</td></tr>
<tr><th colspan="3">Structures</th></tr>
<tr><td><a href="#lesson-eng-earthwork">40. Earthwork: cut and fill for a bridge approach</a></td><td>A road has to come down a valley side to a bridge: level it into the bank, and see the cut, the fill, the soil to move and the banks too steep to stand.</td><td>15 min</td></tr>
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
<h3 class="lessons-group">Physics you can play with</h3>
<h3 id="lesson-eng-swing">Lesson 5: The swing</h3>
<p>Why a heavy kid and a light kid swing back and forth in the same time, and why a grandfather clock is so tall. Make a desk pendulum tick once a second. <span class="where">About 8 minutes · 11 steps · starts from the “Swing: one tick a second” template</span></p>
<div class="step"><h3><span class="num">1</span>A pendulum</h3><p>A string with four washers on it, hanging from a stand: a pendulum, like a swing or the weight in a grandfather clock. Its string is 400 mm long. Your goal: make it go <b>there and back in exactly one second</b>.</p></div>
<div class="step"><h3><span class="num">2</span>Let it go</h3><p>Press the green <b>Run</b> button. Watch it swing, and the numbers in the corner: the time there and back, and the speed.</p></div>
<div class="step"><h3><span class="num">3</span>Where the energy goes</h3><p>Under the numbers, the bars swap back and forth: at the ends of each swing it's all <b>height</b>, at the bottom it's all <b>motion</b>. The orange bar is what the air has rubbed off as heat: it grows a little each swing, so the swings get a little smaller.</p></div>
<div class="step"><h3><span class="num">4</span>A heavier weight</h3><p>On the <b>Play with it</b> panel (top right of the 3D view), drag <b>Weight</b> to 200 g or more. Watch the time there and back.</p></div>
<div class="step"><h3><span class="num">5</span>The same time</h3><p>It hardly changes! A heavier weight is pulled down harder, but it's harder to get moving by just as much, so it swings in the same time. That's why a big kid and a small kid on the same swing go back and forth together.</p></div>
<div class="step"><h3><span class="num">6</span>Pull it back further</h3><p>Drag the weight itself in the 3D view: pull it back further, to 60° or so, and let go (or use <b>Pulled back</b>).</p></div>
<div class="step"><h3><span class="num">7</span>A little slower</h3><p>A big swing takes a little longer: about 1.36 s instead of 1.28 s. The shortcut in textbooks only works for small swings; Run works out the real one.</p></div>
<div class="step"><h3><span class="num">8</span>One second</h3><p>Now the goal. Drag <b>Pulled back</b> back to about 20°, and make the <b>String</b> shorter until there and back takes 1.00 s. A string four times as long swings twice as slowly, so it needs to be about 250 mm. The <b>Goal</b> box on the card ticks.</p></div>
<div class="step"><h3><span class="num">9</span>A grandfather clock</h3><p>A grandfather clock ticks once each way: one second there, one second back. Make the string long enough for that. How long is it? (Four times as long as one second there and back.)</p></div>
<div class="step"><h3><span class="num">10</span>Try this</h3><p>That's about a metre: that's why the clocks are so tall. Open the template <b>Playground swing</b>: a 2.5 m chain swings there and back in about 3.2 s. Tick <b>Pump your legs</b>, the way you do on a real swing, and watch it go higher. <b>Keep this</b> writes what you changed into the plan.</p></div>
<div class="step"><h3><span class="num">11</span>Make it for real</h3><p>A piece of string, a few washers or a fishing sinker, and a pencil taped to the edge of a table: under $3. Measure from the pencil to the middle of the weight. Time 10 swings with a phone and divide by 10: is it what Run says?</p></div>
<h3 id="lesson-eng-toboggan">Lesson 6: The toboggan hill</h3>
<p>Why a sled sits still on a gentle slope and takes off on a steeper one, why waxed runners go further, and why the rider's weight hardly matters. Get the longest ride that still stops before the fence. <span class="where">About 9 minutes · 12 steps · starts from the “Toboggan hill” template</span></p>
<div class="step"><h3><span class="num">1</span>A toboggan hill</h3><p>A real-size hill, 6 m high at 20°, packed snow and a waxed toboggan, and a fence 60 m out at the bottom.</p></div>
<div class="step"><h3><span class="num">2</span>Push off</h3><p>Press <b>Run</b>. Watch the speed and the bars: the hill's height turns into speed, and the rubbing on the snow turns some of it into heat.</p></div>
<div class="step"><h3><span class="num">3</span>Too slippery</h3><p>It hits the fence. Waxed runners on packed snow hardly rub at all, so once it's going fast there's little to slow it down on the flat.</p></div>
<div class="step"><h3><span class="num">4</span>A gentle hill</h3><p>On the <b>Play with it</b> panel, set <b>Hill</b> to <b>5°</b>.</p></div>
<div class="step"><h3><span class="num">5</span>Fresh snow</h3><p>It slides off slowly and stops. Now set <b>It slides on</b> to <b>Fresh, fluffy snow</b>.</p></div>
<div class="step"><h3><span class="num">6</span>It stays put</h3><p>It doesn't move at all: the snow holds it. Make the hill steeper, a step at a time, until it just starts. The card says how steep it needs to be.</p></div>
<div class="step"><h3><span class="num">7</span>A heavier rider</h3><p>Drag <b>Rider and sled</b> to 100 kg. Does a heavy sled start on a gentler hill, or go much further?</p></div>
<div class="step"><h3><span class="num">8</span>Hardly any different</h3><p>A heavy sled is pulled down the hill harder, but it also presses into the snow harder, so it rubs harder too: the two grow together. It starts at the same angle and goes about as far (a little further, because the air pushes it back less).</p></div>
<div class="step"><h3><span class="num">9</span>The longest ride</h3><p>Now the goal: the <b>longest ride that still stops before the fence</b>. Try different snow and hills; the <b>Goal</b> box keeps your best. Can you stop within 10 m of the fence?</p></div>
<div class="step"><h3><span class="num">10</span>A rubber boot</h3><p>The second goal: set <b>It slides on</b> to <b>A rubber boot on wood</b>, and find the steepest hill it can stand on without slipping.</p></div>
<div class="step"><h3><span class="num">11</span>Try this</h3><p>A playground slide: try <b>Dry plastic slide</b> and <b>Wet plastic slide</b>. Water makes it as slippery as packed snow. Click the hill and type its height and the fence in the panel to make your own local hill.</p></div>
<div class="step"><h3><span class="num">12</span>Make it for real</h3><p>Tilt a board or a big book on a pile of books. Put a coin, an eraser and an ice cube at the top, and raise it until each one starts to slide. Measure the angle with a protractor or a phone's level: each one starts at its own angle, whatever it weighs.</p></div>
<h3 id="lesson-eng-seesaw">Lesson 7: The seesaw</h3>
<p>How a small kid can lift a grown-up: the same reason a crowbar pulls a nail. Balance Dad and Mia on a seesaw by sliding them along it, or by moving the pivot. <span class="where">About 7 minutes · 8 steps · starts from the “Seesaw: balance a grown-up and a kid” template</span></p>
<div class="step"><h3><span class="num">1</span>A seesaw</h3><p>A 3 m plank on a pivot in its middle. Dad (80 kg) sits at one end and Mia (25 kg) at the other. Your goal: make it balance.</p></div>
<div class="step"><h3><span class="num">2</span>Let go</h3><p>Press <b>Run</b>. The plank is held level, then let go.</p></div>
<div class="step"><h3><span class="num">3</span>Turning pushes</h3><p>Dad's end goes down. What tips a seesaw is each rider's weight <b>times how far they sit from the pivot</b>: a turning push, in kg·m. The bars in the corner show both sides: Dad's is far bigger.</p></div>
<div class="step"><h3><span class="num">4</span>Slide Dad in</h3><p>In the 3D view, drag Dad along the plank toward the pivot (or use the <b>Dad sits</b> slider), until the bars match and it says <b>balanced!</b></p></div>
<div class="step"><h3><span class="num">5</span>Why it works</h3><p>Mia is 25 kg, 1.35 m out: 25 × 1.35 = about 34 kg·m. Dad is 80 kg, so he needs to be 34 ÷ 80 = about 0.42 m from the pivot. A light rider far out balances a heavy one close in.</p></div>
<div class="step"><h3><span class="num">6</span>Move the pivot instead</h3><p>Press <b>Put back</b> on the panel (both riders back at the ends), then drag the <b>pivot</b> (the red stand) toward Dad until it balances. The plank's own weight counts now too.</p></div>
<div class="step"><h3><span class="num">7</span>Try this</h3><p>Click the seesaw and use <b>Add a rider</b> in the panel: can three kids balance a grown-up? A crowbar is a seesaw too: to lift 50 kg with a 5 kg push, the push has to be 10 times as far from the pivot as the load.</p></div>
<div class="step"><h3><span class="num">8</span>Make it for real</h3><p>A ruler on a pencil, and coins as riders: free. Two coins 2 cm from the pencil balance one coin 4 cm out on the other side.</p></div>
<h3 id="lesson-eng-canoe">Lesson 8: Lift the canoe</h3>
<p>The garage hoist that lifts a 30 kg canoe to the ceiling with one hand. More rope lines make it lighter, and cost you more rope, and every pulley takes a little. Lift it pulling no harder than lifting 8 kg. <span class="where">About 7 minutes · 10 steps · starts from the “Canoe hoist” template</span></p>
<div class="step"><h3><span class="num">1</span>A canoe hoist</h3><p>A 30 kg canoe in slings, hanging from pulleys under a garage ceiling. Two rope lines hold it up, and you pull the end of the rope. Your goal: lift it pulling no harder than lifting 8 kg.</p></div>
<div class="step"><h3><span class="num">2</span>Pull</h3><p>Press <b>Run</b>. The yellow spring scale shows how hard you pull, and the corner shows how much rope.</p></div>
<div class="step"><h3><span class="num">3</span>Half, and a bit</h3><p>Two lines share the canoe, so you pull about half its weight: a bit over 15 kg, because each pulley loses a little to rubbing. And you pull 20 cm of rope for each 10 cm it goes up.</p></div>
<div class="step"><h3><span class="num">4</span>One pulley</h3><p>On the <b>Play with it</b> panel, set <b>Rope lines</b> to <b>1</b>: a single pulley.</p></div>
<div class="step"><h3><span class="num">5</span>Heavier than the canoe</h3><p>With one line you pull the whole weight, and a bit more for the pulley. A single pulley only changes which way you pull.</p></div>
<div class="step"><h3><span class="num">6</span>Four lines</h3><p>Set <b>Rope lines</b> to <b>4</b>.</p></div>
<div class="step"><h3><span class="num">7</span>Not quite</h3><p>Four lines: a quarter of 30 kg would be 7.5 kg, but it's 8.5 kg: each pulley takes its share. Add one more line until the <b>Goal</b> box ticks.</p></div>
<div class="step"><h3><span class="num">8</span>The price</h3><p>Now you pull 50 cm of rope for each 10 cm it rises. You do the same work in the end (a light pull for a long way), plus what the pulleys rub away: watch the orange bar. That's why a crane has so many rope lines, and winds so much rope.</p></div>
<div class="step"><h3><span class="num">9</span>Rough pulleys</h3><p>Set <b>Pulleys</b> to <b>Rope over a rough bar</b>. How many lines now?</p></div>
<div class="step"><h3><span class="num">10</span>Make it for real</h3><p>Two double pulleys and 15 m of cord from a hardware store, about $15–25. Or a desk one: two spools on coat-hanger wire and a water bottle, with a luggage scale on the end of the string.</p></div>
<h3 id="lesson-eng-trebuchet">Lesson 9: The trebuchet</h3>
<p>How a castle-siege machine threw stones with no springs: a falling weight and a long arm. Land a marshmallow in a bucket 1.5 m away. Aim at a target, never at people. <span class="where">About 9 minutes · 10 steps · starts from the “Desk trebuchet” template</span></p>
<div class="step"><h3><span class="num">1</span>A desk trebuchet</h3><p>A frame of craft sticks, an arm on a skewer, 100 g of washers on the short end and a mini marshmallow in a pouch on the long end. The bucket is 1.5 m away.</p></div>
<div class="step"><h3><span class="num">2</span>Launch</h3><p>Press <b>Run</b>. The weight falls, the arm swings, and the ball flies (its path is drawn behind it).</p></div>
<div class="step"><h3><span class="num">3</span>Short</h3><p>It lands short, and high: it let go too early, so it went up more than along. The bars show the weight's height turning into motion.</p></div>
<div class="step"><h3><span class="num">4</span>More weight</h3><p>On the <b>Play with it</b> panel, drag <b>Counterweight</b> to 150 g. Press <b>Launch</b>. The last throw stays as a dotted line.</p></div>
<div class="step"><h3><span class="num">5</span>When it lets go</h3><p>Further. Now drag <b>Lets go at</b> to about 50° to 60°: it lets go later, so the ball goes out flatter.</p></div>
<div class="step"><h3><span class="num">6</span>In the bucket</h3><p>Now get it in the bucket: change the counterweight and when it lets go, a little at a time. The <b>Goal</b> box ticks when it goes in.</p></div>
<div class="step"><h3><span class="num">7</span>Too early, too late</h3><p>Drag <b>Lets go at</b> to 120°: far too late. Where does it go?</p></div>
<div class="step"><h3><span class="num">8</span>The furthest throw</h3><p>Into the floor! Now the second goal: the furthest throw with 200 g of washers or less (drag the bucket further away in 3D if it gets in the way). About 45° up at launch goes furthest.</p></div>
<div class="step"><h3><span class="num">9</span>Try this</h3><p>Try a <b>Ping-pong ball</b> or a <b>Craft pompom</b>: the air slows a fluffy pompom a lot. Move the <b>Pin</b>: a longer throwing arm throws faster, but needs more weight to swing it.</p></div>
<div class="step"><h3><span class="num">10</span>Make it for real</h3><p>A pack of craft sticks (about $5), a paint stirrer for the arm, hot glue, a wooden skewer as the pin, washers taped on, and mini marshmallows. A bucket or a box as the target. Aim at the target, never at people.</p></div>
<h3 id="lesson-eng-marble-run">Lesson 10: The marble run</h3>
<p>Why a marble can't climb higher than it started, and why it needs to start higher than you'd think to get round a loop. Foam pipe insulation, a marble and a 150 mm loop. <span class="where">About 7 minutes · 9 steps · starts from the “Marble run with a loop” template</span></p>
<div class="step"><h3><span class="num">1</span>A marble run</h3><p>Foam pipe insulation cut in half, taped up as a drop, a loop 150 mm high and a run-out, with a glass marble at the top. Your goal: get it round the loop, from as low a start as you can.</p></div>
<div class="step"><h3><span class="num">2</span>Let it go</h3><p>Press <b>Run</b>. Watch the marble at the top of the loop.</p></div>
<div class="step"><h3><span class="num">3</span>It falls off</h3><p>At the top of the loop it's upside down, and it stays in the track only if it's going fast enough to be pressed into it. Here it isn't.</p></div>
<div class="step"><h3><span class="num">4</span>Start higher</h3><p>On the <b>Play with it</b> panel, drag <b>Start</b> up a little at a time until the marble gets round.</p></div>
<div class="step"><h3><span class="num">5</span>The lowest start</h3><p>Now bring it back down, 5 mm at a time, to the lowest start that still gets round. The <b>Goal</b> box keeps your lowest.</p></div>
<div class="step"><h3><span class="num">6</span>Higher than you'd think</h3><p>It has to start well above the top of the loop. It needs speed at the top, and a rolling marble puts some of its energy into spinning: only 5/7 of it moves it along. For a round loop it's about 2.7 times the loop's radius above its bottom; this teardrop loop, tighter at the top, needs a little less. Watch the bars: height turns into motion, and a little into heat.</p></div>
<div class="step"><h3><span class="num">7</span>A bigger loop</h3><p>Set <b>Loop</b> to <b>200 mm high</b>, then find the start it needs now.</p></div>
<div class="step"><h3><span class="num">8</span>Try this</h3><p>Set <b>On the track</b> to <b>A coaster car</b>: a car on wheels doesn't spin, so it needs a lower start. (It also needs brakes at the end.) The energy bars work on every coaster too.</p></div>
<div class="step"><h3><span class="num">9</span>Make it for real</h3><p>Foam pipe insulation (about $3–5 for 6 ft) cut in half with scissors, masking tape, a few marbles, and chairs or books to tape it to. Measure the start from the floor of the loop with a tape measure.</p></div>
<h3 class="lessons-group">Coasters</h3>
<h3 id="lesson-eng-coaster">Lesson 11: Why did the car stop?</h3>
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
<h3 id="lesson-eng-make-it-move">Lesson 12: Make it move</h3>
<p>Put down a motor, a 12-tooth gear on its shaft and a 36-tooth gear that snaps into mesh, press Run and watch the big gear turn 3× slower; then make it 60 teeth and see 5×. <span class="where">About 6 minutes · 7 steps · starts with a new plan</span></p>
<div class="step"><h3><span class="num">1</span>Gears from scratch</h3><p>You'll build the simplest machine there is: a motor turning two gears. In Arc there's no joint tool: <b>putting a part in the right place makes the joint</b>.</p></div>
<div class="step"><h3><span class="num">2</span>A motor</h3><p>Pick <b>Motor</b> on the tool bar (the TT motor is picked in the panel) and click in the middle of the plan. Its shaft comes with it.</p></div>
<div class="step"><h3><span class="num">3</span>A small gear on its shaft</h3><p>Pick <b>Gear</b>, set <b>Teeth</b> to <b>12</b> in the panel, and click the motor's shaft (the dot in the middle of the motor). The gear goes on the shaft, its hole made to fit.</p></div>
<div class="step"><h3><span class="num">4</span>A big gear that meshes</h3><p>Set <b>Teeth</b> to <b>36</b> and move the pointer near the small gear: the ghost snaps to just the right distance, its teeth between the small gear's. Click. It comes with its own shaft and two bearings.</p></div>
<div class="step"><h3><span class="num">5</span>Run it</h3><p>Press the green <b>Run</b> button. The motor turns at 200 rpm; the labels show the big gear at about 67 rpm: <b>3× slower, 3× stronger</b>.</p></div>
<div class="step"><h3><span class="num">6</span>A bigger ratio</h3><p>Click the big gear on the plan and type <b>60</b> in its <b>Teeth</b>. Now it's too big to sit where it was: the card says the gears overlap. Press <b>Move … to mesh</b>, and Run plays again: 5× slower.</p></div>
<div class="step"><h3><span class="num">7</span>What next</h3><p>Try <b>Gear pair</b> (type a ratio and get two gears already meshed), <b>Pulley</b> and <b>Belt</b>, a <b>Rack</b> or a <b>Crank</b>. Then the lesson <b>Fix the broken machine</b>. The numbers are rough and for learning: a real machine needs a licensed engineer.</p></div>
<h3 id="lesson-eng-gearbox">Lesson 13: Fix the broken machine</h3>
<p>A two-stage gearbox with three planted faults: tooth sizes that don't match, a gear 2 mm out, and a shaft with no bearings. Run finds each one; fix them and it turns 9:1. <span class="where">About 8 minutes · 7 steps · starts from the “Two-stage gearbox” template</span></p>
<div class="step"><h3><span class="num">1</span>A broken gearbox</h3><p>A TT motor turns gear A, which should turn gear B; gear C on B's shaft should turn gear D, which winds up a small weight. Somebody made <b>three mistakes</b>.</p></div>
<div class="step"><h3><span class="num">2</span>Press Run</h3><p>Click the green <b>Run</b> button. Only the motor's gear turns, and the <b>Why didn't it work?</b> card opens with the first problem.</p></div>
<div class="step"><h3><span class="num">3</span>Match the tooth size</h3><p>Gears A and B have different tooth sizes (module 1 and 1.5). Read the <b>Why</b>, then press <b>Make gear B module 1</b>: B keeps its size but gets smaller teeth, the same as A's.</p></div>
<div class="step"><h3><span class="num">4</span>Close the gap</h3><p>Now gears A, B and C turn, but D doesn't: it's 2 mm too far from C. Press <b>Move gear D to mesh</b> (or press <b>Show me</b> first to see where).</p></div>
<div class="step"><h3><span class="num">5</span>Add the bearings</h3><p>Shaft 2 has nothing holding it: it would wobble and fall. Press <b>Add bearings</b>.</p></div>
<div class="step"><h3><span class="num">6</span>It works</h3><p>The card says <b>It works</b>: the drum turns 9× slower than the motor and about 8× stronger (a little is lost at each gear), and the weight goes up its post. The weight slows the motor a little: watch its speed on the model. Press <b>Follow</b> or <b>Record</b> on the Run bar if you like.</p></div>
<div class="step"><h3><span class="num">7</span>Your own machine</h3><p>That's it. Build your own from the <b>Machine ▾</b> menu: gears, shafts, motors, belts, racks and cranks. Press <b>Run</b> early and often. For machines you know from real life, try the lessons <b>The winch</b>, <b>The hill-climbing car</b>, <b>Bike gears</b>, <b>The clock</b> and <b>The prairie windmill</b>. The numbers are rough and for learning: a real machine needs a licensed engineer.</p></div>
<h3 class="lessons-group">Electronics</h3>
<h3 id="lesson-elec-fan">Lesson 14: A desk fan</h3>
<p>A TT motor and a printed fan blade on 4 × AA. Swap the battery while it runs and see the speed follow the volts, find out why a 9 V battery is the wrong one, and size the fuse. <span class="where">About 7 minutes · 8 steps · starts from the elec-fan template</span></p>
<div class="step"><h3><span class="num">1</span>A motor on a battery</h3><p>This fan is wired already: 4 × AA, a 1 A fuse, a rocker switch and a TT motor with a fan blade on its shaft. A DC motor turns faster with more volts, and pulls more current when it works harder.</p></div>
<div class="step"><h3><span class="num">2</span>Run it</h3><p>Press <b>Run</b>. The blade turns, and the labels show the motor's volts, its current and its speed.</p></div>
<div class="step"><h3><span class="num">3</span>Fewer volts</h3><p>Under <b>Play with it</b>, pick <b>2 × AA alkaline (3 V)</b>. Half the volts, so it turns at less than half the speed: the motor loses some of its volts inside its windings.</p></div>
<div class="step"><h3><span class="num">4</span>The 9 V battery</h3><p>Now pick <b>9 V battery</b>. It turns fast at first, but read the card: a 9 V battery has a lot of resistance inside, so its volts drop under a motor, and it lasts only minutes.</p></div>
<div class="step"><h3><span class="num">5</span>Keep the best one</h3><p>Pick <b>4 × AA NiMH (4.8 V)</b>: rechargeable cells with very little resistance inside. Press <b>Keep this</b>, so the plan has it.</p></div>
<div class="step"><h3><span class="num">6</span>A fuse too small</h3><p>Press <kbd>Esc</kbd> to stop Run. Click the fuse (F1) on the plan and set its <b>Rating</b> to <b>0.5 A</b>. Press <b>Run</b>: the card says it blows when the motor starts. A motor pulls several times its running current for a moment.</p></div>
<div class="step"><h3><span class="num">7</span>The right fuse</h3><p>Press <b>Use a 1 A fuse</b> on the card. A fuse should be a bit above what the circuit normally takes, and below what its wires can carry.</p></div>
<div class="step"><h3><span class="num">8</span>Try this</h3><p>Try a flat battery (<b>Nearly flat</b> under Play with it), or an LED with its resistor that lights while the fan runs. Unplug a wire by clicking it while Run plays. In Arc Engineering, add gears to the motor's shaft and see the whole machine slow with the battery.</p></div>
<h3 id="lesson-elec-playbench">Lesson 15: Play bench</h3>
<p>Nothing to build: one battery and switch feeding an LED with a dimmer knob, a buzzer on a button and a fan on its own switch. Turn, press, flip, unplug and short it while Run plays. <span class="where">About 5 minutes · 7 steps · starts from the elec-playbench template</span></p>
<div class="step"><h3><span class="num">1</span>Play with it</h3><p>Everything here is wired to one battery, through a fuse and a rocker switch. You can't break anything: Run never changes the plan, and Stop puts it all back.</p></div>
<div class="step"><h3><span class="num">2</span>Run</h3><p>Press <b>Run</b>. The LED glows dimly and the fan turns.</p></div>
<div class="step"><h3><span class="num">3</span>Turn the knob</h3><p>Drag the <b>RV1 knob</b> slider under <b>Play with it</b> (or click the knob in 3D). The knob is a resistor you can change: less resistance, more current, a brighter LED.</p></div>
<div class="step"><h3><span class="num">4</span>Press the button</h3><p>Tick <b>S2 push button held down</b> (or click the red button in 3D). The buzzer beeps for as long as it's pressed.</p></div>
<div class="step"><h3><span class="num">5</span>Pull a wire out</h3><p>Click any wire on the 3D model. It unplugs: whatever it fed stops. Click it again to plug it back in.</p></div>
<div class="step"><h3><span class="num">6</span>Short it, safely</h3><p>Tick <b>Short the battery</b>. The card says how many amps rush straight from + to −, and the fuse blows. That's what fuses are for. Never try this with a real battery.</p></div>
<div class="step"><h3><span class="num">7</span>Keep what you like</h3><p>Press <b>Put back</b>, then change something you like (a full battery, the knob half way) and press <b>Keep this</b>: it goes into the plan as one step you can undo. Then try the <b>Flashlight</b> and <b>Desk fan</b> templates, or start your own from <b>Power ▾</b>.</p></div>
<h3 id="lesson-elec-car">Lesson 16: A battery car</h3>
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
<h3 id="lesson-elec-speedknob">Lesson 17: A fan with a speed knob</h3>
<p>A TT motor and fan on a 12 V adapter through a PWM speed module. Turn the knob in Run and see the speed, the amps and the watts, find the knob's limit, and see why a knob can't just be a big resistor. <span class="where">About 6 minutes · 7 steps · starts from the elec-speedfan template</span></p>
<div class="step"><h3><span class="num">1</span>The fan</h3><p>A certified <b>Class 2</b> plug-in adapter gives 12 V DC: it's the only part that touches the wall, and Arc shows only its low-voltage plug. A 1 A fuse and a rocker switch feed a <b>PWM speed module</b>, which turns a TT motor and a fan blade.</p></div>
<div class="step"><h3><span class="num">2</span>Run it</h3><p>Press <b>Run</b>. The knob is at 50 %: the motor gets about 6 V, its rated volts.</p></div>
<div class="step"><h3><span class="num">3</span>Turn the knob</h3><p>Drag the <b>U1 knob</b> slider under <b>Play with it</b> (or click the knob in 3D). The speed follows it.</p></div>
<div class="step"><h3><span class="num">4</span>Too far</h3><p>Turn it up past about 65 %. The card says the motor gets too many volts: a 6 V motor on 12 V spins too fast and wears out.</p></div>
<div class="step"><h3><span class="num">5</span>Not a resistor</h3><p>Look at the labels: at 50 % the motor takes about 0.28 A, but the adapter gives only about half that. The module switches the full 12 V on and off thousands of times a second, so very little turns into heat. A resistor dropping 6 V at 0.28 A would turn 1.7 W into heat: seven times what a ¼ W resistor can take.</p></div>
<div class="step"><h3><span class="num">6</span>Set it right</h3><p>Press <b>Turn the knob to 50 %</b> on the card (or slide it back and press <b>Keep this</b>).</p></div>
<div class="step"><h3><span class="num">7</span>Try this</h3><p>Try the knob at 20 %: the motor slows, and below a point it stalls (it needs enough volts to start). Swap the adapter to 9 V in its panel and find the new top of the knob. A DRV8833 or TB6612 with a board does the same switching, with forward and back too.</p></div>
<h3 class="lessons-group">Machines from real life</h3>
<h3 id="lesson-eng-winch">Lesson 18: The winch</h3>
<p>A tow truck's winch, a crane, a boat trailer's crank: lift a 1 kg bucket 300 mm in under 9 seconds with one small motor. Too strong is slow, too fast stalls. Then cut the power and see what the load does, and stop it with a ratchet. <span class="where">About 10 minutes · 11 steps · starts from the “Winch: lift the bucket” template</span></p>
<div class="step"><h3><span class="num">1</span>A winch</h3><p>A yellow TT motor turns two pairs of gears (12 → 36, twice: 9:1), and the last shaft winds string on a drum. The string goes up a post and down to a paper cup with 1 kg of coins in it. Your goal: get it to the top, 300 mm, in under 9 seconds.</p></div>
<div class="step"><h3><span class="num">2</span>Run it</h3><p>Press the green <b>Run</b> button. The bucket rises. Watch the numbers in the corner: the motor runs a little slower than its 200 rpm, because the load pushes back.</p></div>
<div class="step"><h3><span class="num">3</span>Strong but slow</h3><p>It gets there, but it takes about 15 s: the <b>Goal</b> box on the card has a ✗. 9:1 makes the drum 9 times stronger and 9 times slower than the motor, and this load doesn't need that much strength.</p></div>
<div class="step"><h3><span class="num">4</span>Too few gears</h3><p>On the <b>Play with it</b> panel (top right of the 3D view), set <b>Gears, stage 1</b> and <b>Gears, stage 2</b> both to <b>24 → 24</b>: the gears swap for ones with the same teeth in all, so they still mesh, and the machine is 1:1. Watch the bucket.</p></div>
<div class="step"><h3><span class="num">5</span>It stalls</h3><p>The motor stops: <b>it stalls</b>. A motor slows down as the load grows, and at its strongest push it can't turn at all. The card says how hard it can push, and suggests gears that would work.</p></div>
<div class="step"><h3><span class="num">6</span>In between</h3><p>Find gears in between: try stage 1 at <b>12 → 36</b> and stage 2 at <b>24 → 24</b> (3:1), or <b>16 → 32</b> on both (4:1). The <b>Goal</b> box ticks when the bucket is up in under 9 s.</p></div>
<div class="step"><h3><span class="num">7</span>Why the middle wins</h3><p>A motor gives the most power at about half its top speed, where it pushes about half as hard as it can. Gearing it so the load needs about half its strongest push is the fastest lift. Real winches, cranes and electric screwdrivers are geared the same way.</p></div>
<div class="step"><h3><span class="num">8</span>Cut the power</h3><p>Press <b>Play</b> (or the time slider back to the start) and, when the bucket is halfway up, untick <b>Motor on</b>. Watch the bucket.</p></div>
<div class="step"><h3><span class="num">9</span>A ratchet</h3><p>It falls, and turns the motor backwards. Tick <b>Ratchet</b>: a toothed wheel and a catch, like the crank winch on a boat trailer. Play it again and cut the power halfway.</p></div>
<div class="step"><h3><span class="num">10</span>Try this</h3><p>Put more coins in the cup with the <b>Weight in the bucket</b> slider, or a smaller <b>Drum</b>: a smaller drum works like another gear. Open the template <b>Elevator with a counterweight</b>: an elevator hangs a weight on the other side of the rope, so the motor only lifts the difference. <b>Keep this</b> on the panel writes the weight and the ratchet into your plan.</p></div>
<div class="step"><h3><span class="num">11</span>Make it for real</h3><p>You need a TT motor (about $5), printed gears and shafts (or the ones in a gear kit), a cotton reel as the drum, kite string, a paper cup and a stick for the post. <b>Build ▾ → Parts list</b> lists it all with prices. Batteries and a switch come with the wiring lessons. The numbers here are rough and for learning.</p></div>
<h3 id="lesson-eng-hill-car">Lesson 19: The hill-climbing car</h3>
<p>Why a toy car stalls or spins its wheels on a ramp, and what gets it up: grip, the weight on the driven wheels, gears and wheel size. Then the steepest ramp it can climb. <span class="where">About 9 minutes · 9 steps · starts from the “Toy car up a ramp” template</span></p>
<div class="step"><h3><span class="num">1</span>A toy car</h3><p>A toy car with two yellow TT motors, one on each back wheel, and 65 mm rubber wheels, and a board ramp at 20°. Your goal: get to the top.</p></div>
<div class="step"><h3><span class="num">2</span>Run it</h3><p>Press <b>Run</b>. The car drives off, reaches the ramp, and… watch its wheels.</p></div>
<div class="step"><h3><span class="num">3</span>Why do the wheels spin?</h3><p>Read the card. A wheel can only push as hard as it grips: the weight on it times how grippy the surfaces are. Uphill the car has to push against its own weight, and only the back wheels are driving, with half the weight on them.</p></div>
<div class="step"><h3><span class="num">4</span>All four wheels</h3><p>Press <b>Drive all four wheels</b> on the card (or set <b>Motors</b> to <b>4, on all four wheels</b> on the Play with it panel). Now all its weight helps it grip.</p></div>
<div class="step"><h3><span class="num">5</span>Faster</h3><p>It gets up. Now make it faster: set <b>Wheels</b> to <b>100 mm</b>. Each turn of a bigger wheel goes further.</p></div>
<div class="step"><h3><span class="num">6</span>Steeper</h3><p>Set the <b>Ramp angle</b> to <b>35°</b>. What happens now?</p></div>
<div class="step"><h3><span class="num">7</span>More grip</h3><p>Even with all four wheels driving, rubber on wood can only climb about 35°: the steepest slope is about the grip. Set <b>The ramp is</b> to <b>Carpet</b>, which grips better.</p></div>
<div class="step"><h3><span class="num">8</span>Try this</h3><p>Try the smallest car that still climbs: back to 2 motors, a bigger load on the <b>Weight</b> slider, <b>Extra gears</b> 3:1 (slower but stronger), or an <b>N20</b> motor (tiny but geared 100:1). If it stalls, the card says why. Electric cars, trucks and tractors face the same trade on real hills.</p></div>
<div class="step"><h3><span class="num">9</span>Make it for real</h3><p>A TT motor with its wheel costs about $6 a corner; a plate of stiff cardboard or acrylic for the chassis; a 4 × AA battery box. Tilt a board on a pile of books and measure the angle with a phone. <b>Build ▾ → Parts list</b> has the rest.</p></div>
<h3 id="lesson-eng-bike">Lesson 20: Bike gears</h3>
<p>Your own bike: why a low gear for hills, and why you can't pedal fast enough in it on the flat. Ride a real-size bike over a long hill and shift while you ride. <span class="where">About 9 minutes · 8 steps · starts from the “Bike gears on a hill” template</span></p>
<div class="step"><h3><span class="num">1</span>A bike on a hill</h3><p>A bike and its rider at real size: 250 m of flat road, then a long hill (8%: up 8 m for every 100 m). You start in the hard gear, <b>50 × 15</b>: the big ring at the front and a small cog at the back.</p></div>
<div class="step"><h3><span class="num">2</span>Ride</h3><p>Press <b>Run</b>. It plays at 4× so the ride doesn't take long. Watch the speed and how hard each push on the pedals is.</p></div>
<div class="step"><h3><span class="num">3</span>Too hard</h3><p>Fast on the flat, but on the hill each push gets harder until your legs can't do it and you stop. Wait for it.</p></div>
<div class="step"><h3><span class="num">4</span>Shift down</h3><p>Press <b>Play</b> to ride again, and as the hill starts, set the <b>Back cog</b> to <b>28</b> and the <b>Front ring</b> to <b>34</b> on the Play with it panel. An easier gear turns the wheel less for each turn of the pedals, so each push is lighter.</p></div>
<div class="step"><h3><span class="num">5</span>Fast on the flat too</h3><p>Now try for the goal: over the hill <b>and</b> 30 km/h on the flat. Ride the flat in a harder gear (50 × 12 or 50 × 11), then shift down for the hill.</p></div>
<div class="step"><h3><span class="num">6</span>Why both</h3><p>Your legs push hardest when they turn slowly, and can't push at all when they spin too fast (like a motor). Gears let you keep your legs turning at a comfortable speed, about 80 turns a minute, whatever the road does.</p></div>
<div class="step"><h3><span class="num">7</span>Try this</h3><p>Change <b>Legs</b> to <b>Racer</b> or <b>Taking it easy</b>, or the weight of you and the bike. Click the bike to type in the teeth on your own bike: count them on its chainrings and cassette. A mountain bike has easier gears than a road bike, for steeper hills.</p></div>
<div class="step"><h3><span class="num">8</span>Make it for real</h3><p>Turn your own bike upside down. Count the teeth on the ring and the cog it's in, turn the pedals once, and count how many times the back wheel goes round: it's the teeth at the front divided by the teeth at the back.</p></div>
<h3 id="lesson-eng-clock">Lesson 21: The clock</h3>
<p>How one turning shaft drives three hands at three speeds, two of them on the same spot. A skeleton clock's hour hand goes round in 4 hours: fix its gears so it keeps time. <span class="where">About 8 minutes · 10 steps · starts from the “Clock gear train” template</span></p>
<div class="step"><h3><span class="num">1</span>A skeleton clock</h3><p>A clock lying on its back, with a clear face so you can see its gears. A quartz movement turns the <b>second hand</b> once a minute. Two pairs of brass gears (10 → 80, then 10 → 75) take the <b>minute hand</b> 60 times slower. The orange gears go from the minute shaft out to another shaft and back to a tube round the minute shaft, which carries the <b>hour hand</b>.</p></div>
<div class="step"><h3><span class="num">2</span>Run it</h3><p>Press <b>Run</b>. It plays at 60×: the second hand goes round once a second.</p></div>
<div class="step"><h3><span class="num">3</span>An hour a second</h3><p>Press <b>3600×</b> on the Run bar: an hour goes by each second. Watch the minute and hour hands.</p></div>
<div class="step"><h3><span class="num">4</span>Four hours, not twelve</h3><p>The card says the hour hand goes round once every 4 hours. It needs to turn 12 times slower than the minute hand; its gears are 20 → 40 and 20 → 40, which is 2 × 2 = 4.</p></div>
<div class="step"><h3><span class="num">5</span>The catch</h3><p>Both pairs are 30 mm apart, because the hour hand comes back to the middle. So each pair's teeth must add up to 60. 3 × 4 = 12, and 15 → 45 and 12 → 48 both add up to 60.</p></div>
<div class="step"><h3><span class="num">6</span>The first pair</h3><p>Press <b>Stop</b>. Click the small orange gear on the minute shaft and type <b>15</b> in its <b>Teeth</b>, then click the big orange gear it meshes with and type <b>45</b>.</p></div>
<div class="step"><h3><span class="num">7</span>The second pair</h3><p>Now the other two: the small orange gear on that shaft, <b>12</b>, and the gear on the tube, <b>48</b>.</p></div>
<div class="step"><h3><span class="num">8</span>It keeps time</h3><p>Press <b>Run</b> and <b>3600×</b>. The card says <b>It keeps time</b>, and every line of the Goal box has a tick.</p></div>
<div class="step"><h3><span class="num">9</span>Try this</h3><p>Swap the hour gears for 16 → 44 and 11 → 49: do they add up? Do they keep time? Real clocks do it the same way: this part of a clock is called the motion work.</p></div>
<div class="step"><h3><span class="num">10</span>Make it for real</h3><p>A quartz clock movement from a craft store (about $9) has its own hands; take an old one apart and count its gears. To build this one, print the gears and use 5 mm rod, a brass tube and a clear acrylic disc. <b>Build ▾ → Parts list</b> has them.</p></div>
<h3 id="lesson-eng-windmill">Lesson 22: The prairie windmill</h3>
<p>The many-bladed windmills on prairie farms that pump water for cattle: why they have so many blades, and why twice the wind brings eight times the power. Fill the trough in a light breeze. <span class="where">About 8 minutes · 8 steps · starts from the “Prairie windmill pump” template</span></p>
<div class="step"><h3><span class="num">1</span>A farm windmill</h3><p>A real-size farm windmill: an 8 ft rotor on a 9 m tower, turning a crank that lifts a pump rod, which lifts water 15 m up from a well into a 200 L trough. This one has only 6 blades.</p></div>
<div class="step"><h3><span class="num">2</span>Run it</h3><p>Press <b>Run</b> (it plays at 60×: a minute each second). There's a 4 m/s breeze, a light one.</p></div>
<div class="step"><h3><span class="num">3</span>It won't start</h3><p>The rotor turns a little, then stops. Read the card: a pump is hardest to turn at the start of each stroke, when it lifts the whole column of water.</p></div>
<div class="step"><h3><span class="num">4</span>More blades</h3><p>Set <b>Blades</b> to <b>18</b> on the Play with it panel (or press the card's button). Many blades push hard from a standstill, but turn slowly: just right for a pump.</p></div>
<div class="step"><h3><span class="num">5</span>Fill the trough</h3><p>It pumps. The Goal box wants the trough full in under 30 minutes: watch the water and the clock in the corner.</p></div>
<div class="step"><h3><span class="num">6</span>Twice the wind</h3><p>Drag <b>Wind</b> to <b>8 m/s</b>. The wind brings 8 times the power (it's the speed × the speed × the speed), but the pump can only use some of it.</p></div>
<div class="step"><h3><span class="num">7</span>Try this</h3><p>Try 3 blades, like a wind turbine: they spin fast but can't start a pump. Try a longer <b>Pump stroke</b> (more water each time, harder to start), or a deeper well. Above 11 m/s the tail folds the rotor out of the wind so it doesn't break.</p></div>
<div class="step"><h3><span class="num">8</span>Make it for real</h3><p>A desk model: card or printed blades on a skewer, a crank of bent wire, a straw as the pump and a bottle of water, and a fan for the wind. The real ones are still made in Canada and the US and pump water on farms with no power line.</p></div>
<h3 class="lessons-group">Structures</h3>
<h3 id="lesson-eng-build3d">Lesson 23: Build it in 3D</h3>
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
<h3 id="lesson-eng-triangles">Lesson 24: Triangles</h3>
<p>A ladder bridge with no diagonals holds only by its glue, and lets go at about 0.7 kg. Add diagonals, so every square is two triangles, and it holds about ten times as much. <span class="where">About 5 minutes · 6 steps · starts from the “Ladder bridge” template</span></p>
<div class="step"><h3><span class="num">1</span>A ladder bridge</h3><p>This little bridge is two ladders tied together: top and bottom sticks and upright posts, but <b>no diagonals</b>. It spans the gap between two blocks, with 1 kg hung from the middle.</p></div>
<div class="step"><h3><span class="num">2</span>Press Run</h3><p>Press the green <b>Run</b> button. Every stick turns a colour by how hard it's working, then the load test adds weight until something gives.</p></div>
<div class="step"><h3><span class="num">3</span>Read the Why</h3><p>The <b>Why didn't it work?</b> card says the glue at the end of a post is bent open, and lets go at about 0.7 kg: less than the 1 kg on it. Each square can lean over into a diamond; only the glue at its corners stops it. Read the <b>Why</b> line, then <b>Next</b>.</p></div>
<div class="step"><h3><span class="num">4</span>Add diagonals</h3><p>Press <b>Add diagonals to every square</b> on the card. Every square becomes two triangles. Run starts again by itself.</p></div>
<div class="step"><h3><span class="num">5</span>It holds</h3><p>Now the card says it breaks at about 7 kg, not 0.7, and it hardly sags at all. A triangle can't change shape unless one of its sticks gets longer or shorter, and sticks are strong along their length. That's why bridges, towers and cranes are made of triangles.</p></div>
<div class="step"><h3><span class="num">6</span>What next</h3><p>Try <b>Why did the bridge break?</b>, or draw your own with the <b>Truss</b> tool (click the two ends of a span) and hang a <b>Weight</b> on it. Typical numbers, for learning: real sticks vary.</p></div>
<h3 id="lesson-eng-forces">Lesson 25: Where does the load go?</h3>
<p>Every stick in a truss is pushed or pulled. See which, read the numbers, and check one by hand: the weight goes down the diagonals to the blocks. <span class="where">About 8 minutes · 7 steps · starts from the “Where does the load go?” template</span></p>
<div class="step"><h3><span class="num">1</span>A Warren truss</h3><p>A truss bridge of equilateral triangles (every angle 60°), 400 mm long, on two blocks, with <b>2 kg</b> hung from the middle: 1 kg on each side, which weighs about 9.8 N. It holds. The question is how.</p></div>
<div class="step"><h3><span class="num">2</span>Press Run</h3><p>Press the green <b>Run</b> button.</p></div>
<div class="step"><h3><span class="num">3</span>Pushed or pulled</h3><p>Press <b>Push / pull</b> on the Run bar under the 3D view. Red sticks are pushed (squeezed shorter: compression); blue ones are pulled (stretched: tension). Deep colours carry the most.</p></div>
<div class="step"><h3><span class="num">4</span>Where it goes</h3><p>The top chord is red: pushed. The bottom chord is blue: pulled. The diagonals take turns. The teal arrows are the blocks pushing up on its feet: about 4.9 N each, half of each side's 9.8 N. The labels give each stick's force.</p></div>
<div class="step"><h3><span class="num">5</span>The forces table</h3><p>Open <b>Structures ▾ → Forces…</b>: every stick, pushed or pulled, by how much. Find a <b>diagonal</b> at an end, and the first piece of a <b>bottom chord</b>.</p></div>
<div class="step"><h3><span class="num">6</span>Check it by hand</h3><p>At the foot, only the end diagonal can hold the block's 4.9 N up, and it leans at 60°. So it must push 4.9 ÷ sin 60° ≈ <b>5.7 N</b>, and the bottom chord must pull 5.7 × cos 60° ≈ <b>2.8 N</b> to balance it sideways. The table agrees, near enough: its own weight and its glued joints add a little. That's the <b>method of joints</b>, and it's how engineers check a computer.</p></div>
<div class="step"><h3><span class="num">7</span>Your turn</h3><p>Draw a truss twice as deep with the <b>Truss</b> tool (Height in its panel): the chords push and pull about half as hard. <b>Save as a file</b> in the Forces window gives a table for a worksheet. Typical numbers, for learning.</p></div>
<h3 id="lesson-eng-bridge">Lesson 26: Why did the bridge break?</h3>
<p>A balsa bridge meant to hold 2 kg gives way at under 1 kg. Brace its top sideways, then gusset the joints that let go, and it holds 2 kg and breaks at about 5 kg. <span class="where">About 8 minutes · 8 steps · starts from the “Balsa bridge” template</span></p>
<div class="step"><h3><span class="num">1</span>A balsa bridge</h3><p>A truss bridge 400 mm long, of ⅛" balsa sticks and hot glue, resting on two blocks with <b>2 kg</b> hung from the middle (1 kg on each side). The goal: hold the 2 kg. It has <b>two problems</b>.</p></div>
<div class="step"><h3><span class="num">2</span>Press Run</h3><p>Press the green <b>Run</b> button. Watch the colours climb as the load test adds weight, and see what gives first.</p></div>
<div class="step"><h3><span class="num">3</span>It bows out sideways</h3><p>The card says a top chord would bow out sideways at about 0.9 kg. The two sides are only tied together along the bottom, so the tops can lean over. A long pushed stick bows out long before it crushes. Click <b>Show me</b>, then <b>Next</b>.</p></div>
<div class="step"><h3><span class="num">4</span>Brace it sideways</h3><p>Press <b>Brace it sideways</b>: cross sticks and diagonals across the top, and a portal brace across each end, so the bracing is triangles too.</p></div>
<div class="step"><h3><span class="num">5</span>The glue lets go</h3><p>Now the glue gives first, at about 1.4 kg: each bottom chord is two sticks butted together in the middle, glued only across their ends. Press <b>Add gussets on both faces</b>.</p></div>
<div class="step"><h3><span class="num">6</span>It holds</h3><p>The card says it holds 2 kg and breaks at about 5 kg, when a top chord bows out between its joints. Read the <b>strength-to-weight</b> number at the end: bridge contests use it (what it holds, divided by what it weighs).</p></div>
<div class="step"><h3><span class="num">7</span>Your turn</h3><p>Now make it break above <b>8 kg</b> (a safety factor of 2 at 4 kg) while staying under <b>30 g</b>. It breaks when a top chord bows out: click a top chord, press <b>Select all 2 top chords</b> in its panel, and try basswood, or <b>Doubled up</b>. Press <b>Run</b> early and often.</p></div>
<div class="step"><h3><span class="num">8</span>Done</h3><p>It breaks above 8 kg and weighs under 30 g: twice as strong for a gram or two. The top chord is pushed, and a pushed stick bows out unless it's stiff; the bottom chord is only pulled, so it can stay thin. <b>Structures ▾ → Cut list</b> tells you what to buy, and what it costs. Typical numbers, for learning: real sticks vary, and a real bridge needs a licensed engineer.</p></div>
<h3 id="lesson-eng-craft">Lesson 27: A craft-stick bridge</h3>
<p>Craft sticks are only 114 mm long, so a bridge's chords are sticks overlapped and glued. This one's overlaps are 6 mm, and the glue lets go under its 10 kg. Overlap them 30 mm and it holds. <span class="where">About 6 minutes · 6 steps · starts from the “Craft-stick bridge” template</span></p>
<div class="step"><h3><span class="num">1</span>A craft-stick bridge</h3><p>A truss bridge 280 mm long, of craft sticks and hot glue, with <b>10 kg</b> hung from the middle (5 kg on each side). A craft stick is only 114 mm long, so each bottom chord is <b>three sticks overlapped end to end</b>, glued face to face.</p></div>
<div class="step"><h3><span class="num">2</span>Press Run</h3><p>Press the green <b>Run</b> button, and watch which sticks work hardest as the load test adds weight.</p></div>
<div class="step"><h3><span class="num">3</span>The overlaps let go</h3><p>The card says the glue where the bottom chord sticks overlap lets go at about 9 kg: they overlap only 6 mm. Glue holds by the area it covers, and 6 mm of a 10 mm stick is only 60 mm². Read the <b>Why</b>, then <b>Next</b>.</p></div>
<div class="step"><h3><span class="num">4</span>Overlap more</h3><p>Press <b>Overlap more</b>: the outer sticks reach 30 mm further along the middle one. Five times the overlap is five times the glue.</p></div>
<div class="step"><h3><span class="num">5</span>It holds</h3><p>Now it holds 10 kg, and breaks at about 14 kg when an end post bows out. The overlap was the weak link; now it's a stick. Read the <b>strength-to-weight</b> number on the card.</p></div>
<div class="step"><h3><span class="num">6</span>Your turn</h3><p>Click an end post and set <b>Doubled up</b> to two glued face to face, or switch the glue to <b>Wood glue</b>: it holds about four times what hot glue does over the same overlap. Click a cross stick: craft sticks can lie <b>flat</b> or stand <b>on edge</b>. On edge one sags far less, but on its own it can roll over sideways. Typical numbers, for learning: a real bridge needs a licensed engineer.</p></div>
<h3 id="lesson-eng-contest">Lesson 28: Bridge contest</h3>
<p>Hold 2 kg across 400 mm with balsa and hot glue, under 30 g and $12, lightest wins. This bridge holds twenty times that, but it's too heavy: thin the sticks that don't need it, watch the goals tick, and put it on the scoreboard. <span class="where">About 8 minutes · 8 steps · starts from the “Bridge contest” template</span></p>
<div class="step"><h3><span class="num">1</span>A bridge contest</h3><p>A classic class contest: a bridge across a <b>400 mm</b> gap that holds <b>2 kg</b>, of balsa sticks and hot glue, weighing under <b>30 g</b> and costing under <b>$12</b> (Canadian). The lightest bridge that holds wins. This one's chords and diagonals are ¼" balsa: strong, but heavy.</p></div>
<div class="step"><h3><span class="num">2</span>Press Run</h3><p>Press the green <b>Run</b> button.</p></div>
<div class="step"><h3><span class="num">3</span>The goals</h3><p>Under the card are the contest's goals. It holds 2 kg easily: it would break at about 43 kg. But it weighs 40 g and costs over $14: two ✗. Most of its sticks are working at a few percent of what they can take. A contest bridge puts wood only where it's needed.</p></div>
<div class="step"><h3><span class="num">4</span>Thinner diagonals</h3><p>Click a <b>diagonal</b> (a sloping stick), press <b>Select all 16 diagonals</b> in its panel, and set <b>Stick</b> to <b>3.2 mm (⅛") balsa</b>. Run checks it again by itself.</p></div>
<div class="step"><h3><span class="num">5</span>Thinner chords</h3><p>Close: 32 g. Now the chords: click a <b>top chord</b>, select both, and make them <b>4.8 mm (³⁄₁₆") balsa</b>. Do the same for the two <b>bottom chords</b>. Watch the goals.</p></div>
<div class="step"><h3><span class="num">6</span>Every goal met</h3><p>Every goal is ticked ★, and the score is its weight. One more trick: the bottom chords are only <b>pulled</b>, and a pulled stick can't bow out, so they can be thinner still. Make the bottom chords <b>⅛" balsa</b>.</p></div>
<div class="step"><h3><span class="num">7</span>The scoreboard</h3><p>Open <b>Structures ▾ → Scoreboard…</b>, type your name and press <b>Add this design</b>. It's kept on this computer, best first, and saves as a file for a spreadsheet.</p></div>
<div class="step"><h3><span class="num">8</span>Test it for real</h3><p><b>Structures ▾ → Test certificate…</b> saves a page to print: the picture, what Arc predicts, the goals and the cut list. Build it, test it, type what it really held and save it again to compare. To run your own contest, <b>Structures ▾ → Challenge…</b> sets the goals on any plan. Typical numbers, for learning: the real test decides the contest.</p></div>
<h3 id="lesson-eng-tower">Lesson 29: Tower in the wind</h3>
<p>A tall, thin basswood tower tips over in a 6 m/s breeze. Pegged guy lines hold it up; then see how much wind it takes. <span class="where">About 6 minutes · 6 steps · starts from the “Tower in the wind” template</span></p>
<div class="step"><h3><span class="num">1</span>A tall, thin tower</h3><p>A 500 mm tower of ³⁄₁₆" basswood, braced on every face, with 500 g on top. Its base is only 60 mm across, and a 6 m/s breeze (the teal arrows) blows from the west.</p></div>
<div class="step"><h3><span class="num">2</span>Press Run</h3><p>Press the green <b>Run</b> button. Watch the tower in 3D.</p></div>
<div class="step"><h3><span class="num">3</span>It tips over</h3><p>The card says the wind tips it over: a foot on the windward side lifts off the table. It tips when the push times the height beats its weight times half its base. Read the <b>Why</b> line, then <b>Next</b>.</p></div>
<div class="step"><h3><span class="num">4</span>Guy lines</h3><p>Press <b>Add guy lines</b>: three lines from the top down to pegs in the ground, spread round it. The one upwind does the holding.</p></div>
<div class="step"><h3><span class="num">5</span>It stands</h3><p>Now it stands, and the load test grows the wind until something gives. Read what gives first on the card.</p></div>
<div class="step"><h3><span class="num">6</span>Your turn</h3><p>Try it without guy lines: press <b>Ctrl+Z</b> to take them away, then use <b>Weigh down its feet</b>, or draw a wider tower with the <b>Tower</b> tool. Change the wind in <b>Structures ▾ → Wind…</b>, and test it at its <b>gusts</b> (about 1.4 times as fast, pushing twice as hard). 10 m/s is a fresh breeze; 20 m/s a gale.</p></div>
<h3 id="lesson-eng-quake">Lesson 30: Tower in an earthquake</h3>
<p>A tower with a water tank on top, braced on two faces only, leans over in a 0.3 g earthquake. Brace every face, and it stands more than twice that. <span class="where">About 6 minutes · 6 steps · starts from the “Tower in an earthquake” template</span></p>
<div class="step"><h3><span class="num">1</span>A tower in an earthquake</h3><p>A 400 mm tower of ³⁄₁₆" basswood, glued to a base board, with a <b>2 kg</b> water tank resting on its top corners. An earthquake (the orange arrow) shakes it east and west at <b>0.3 g</b>: a very strong one. Only two of its faces are braced.</p></div>
<div class="step"><h3><span class="num">2</span>Press Run</h3><p>Press the green <b>Run</b> button, and watch it sway in 3D as the shake grows.</p></div>
<div class="step"><h3><span class="num">3</span>It leans over</h3><p>The card says the glue at the end of a ring stick is bent open, and lets go in a shake of about 0.2 g. A shake pushes everything sideways by its own weight, the heavy tank hardest. The faces running east and west should hold that push, but they're squares, and a square leans over into a diamond. Read the <b>Why</b>, then <b>Next</b>.</p></div>
<div class="step"><h3><span class="num">4</span>Brace every face</h3><p>Press <b>Add diagonals to every square</b>: every face is triangles now.</p></div>
<div class="step"><h3><span class="num">5</span>It stands</h3><p>Now it stands the 0.3 g shake, and gives way at about 0.7 g: more than three times as strong. Read what gives first on the card.</p></div>
<div class="step"><h3><span class="num">6</span>Your turn</h3><p>Shake it north and south in <b>Structures ▾ → Earthquake…</b>, or make the tank heavier. Buildings where earthquakes happen are braced both ways, keep heavy things low, and some stand on rubber pads that let the ground move under them. Typical numbers, for learning: a real building needs a licensed engineer.</p></div>
<h3 id="lesson-eng-crane">Lesson 31: Tension and compression: the crane</h3>
<p>A crane arm on a wall, held by a string tie that runs the wrong way, so it goes slack. Tie it from above, and see which part is pushed and which is pulled. <span class="where">About 6 minutes · 6 steps · starts from the “Wall crane” template</span></p>
<div class="step"><h3><span class="num">1</span>A wall crane</h3><p>A basswood arm bolted to a wall, with a weight on its hook. A string tie is meant to hold the arm up, but it runs <b>down</b> from the arm to the wall.</p></div>
<div class="step"><h3><span class="num">2</span>Press Run</h3><p>Press the green <b>Run</b> button.</p></div>
<div class="step"><h3><span class="num">3</span>It goes slack</h3><p>The card says the tie goes slack: the weight pushes its ends together, and string can't push. The arm hangs on its bolts and sags. Read the <b>Why</b>, then <b>Next</b>.</p></div>
<div class="step"><h3><span class="num">4</span>Tie it from above</h3><p>Press <b>Tie it from above instead</b>. Now the weight pulls the tie tight.</p></div>
<div class="step"><h3><span class="num">5</span>Pushed and pulled</h3><p>It holds. The arm is pushed against the wall (compression) and the string is pulled (tension). That's why the tie can be string, and the arm has to be a stick.</p></div>
<div class="step"><h3><span class="num">6</span>Your turn</h3><p>Click the arm and make it string in the panel: it can't hold, because string can't push. Then try steel cable for the tie, and a heavier weight.</p></div>
<h3 id="lesson-eng-shelf">Lesson 32: A shelf that holds books</h3>
<p>A real-size shelf on 2020 aluminium arms with 20 kg of books: the corner brackets slip at 15 kg. Add a second bracket, read the margin and the sag, then compare a pine board. <span class="where">About 8 minutes · 5 steps · starts from the “Shelf of books” template</span></p>
<div class="step"><h3><span class="num">1</span>A shelf of books</h3><p>This one is at <b>real size</b>: two 2020 aluminium arms, 300 mm out from a wall, each held by one corner bracket with T-nuts, and 20 kg of books along them.</p></div>
<div class="step"><h3><span class="num">2</span>Press Run</h3><p>Press the green <b>Run</b> button.</p></div>
<div class="step"><h3><span class="num">3</span>The brackets slip</h3><p>The card says the T-nuts slide along their slots at about 15 kg: a T-nut grips only by how tight its bolt is. Press <b>A second bracket on each</b>.</p></div>
<div class="step"><h3><span class="num">4</span>Margin</h3><p>It holds now, but it breaks at about 30 kg: under twice what it carries. Engineers keep loads to a fraction of what breaks a thing, because real parts vary and books get added. Read the card, then press <b>Next</b>.</p></div>
<div class="step"><h3><span class="num">5</span>Try pine</h3><p>Click an arm, hold <b>Shift</b> and click the other, and pick <b>1×4 pine board</b> in the panel. Run again: compare what it holds, how much it sags, and its own weight. A shelf should sag no more than its span ÷ 180.</p></div>
<h3 class="lessons-group">Real size</h3>
<h3 id="lesson-eng-real-deck">Lesson 33: A backyard deck</h3>
<p>A real deck in Calgary, 4.8 × 3.6 m, in 2×6 joists, 2×10 beams and concrete piers. The building code says what it has to carry; the code check finds the joists too small and the footings sinking into soft clay. <span class="where">About 8 minutes · 7 steps · starts from the “Backyard deck (real size)” template</span></p>
<div class="step"><h3><span class="num">1</span>A real deck</h3><p>This one is full size, in real lumber: <b>2×6 joists</b> every 400 mm (16"), resting on two <b>2×10 beams</b>, each on three concrete piers 300 mm square, dug into <b>soft clay</b>. Click the deck boards (the tan floor between the joists) and look at its panel: <b>Building load</b> is a home's deck, <b>1.9 kPa</b>: the building code's allowance for people, a barbecue and furniture on every square metre. Its boards add 0.5 kPa.</p></div>
<div class="step"><h3><span class="num">2</span>Press Run</h3><p>Press the green <b>Run</b> button, and watch it in 3D.</p></div>
<div class="step"><h3><span class="num">3</span>Two problems</h3><p>It holds. But the card has two things that <b>don't pass the code check</b>. The code check is stricter than the load test on purpose: it multiplies the loads up (people by 1.5) and takes the wood's strength down, so a deck that passes has a margin for a party, a heavy planter and a knot in the wrong place. Read each card, then <b>Next</b>.</p></div>
<div class="step"><h3><span class="num">4</span>Deeper joists</h3><p>The joists bend too much for 2×6s over 3.6 m. Press <b>Use 38 × 184 mm (2×8) … for every joist</b>: a joist only 44 mm deeper is about twice as strong.</p></div>
<div class="step"><h3><span class="num">5</span>Bigger footings</h3><p>Each pier presses on the clay harder than soft clay takes (about 40 kPa), so it would sink. Press <b>Make them big enough</b>: each footing spreads its load over more ground.</p></div>
<div class="step"><h3><span class="num">6</span>The code check</h3><p>Open <b>Structures ▾ → Code check…</b>. Every member is in it: what the factored loads ask of it, what it's allowed, and how much of that it uses. Close it when you've read it.</p></div>
<div class="step"><h3><span class="num">7</span>Your turn</h3><p>Put a <b>hot tub</b> on it: a filled one is about 2000 kg. Use the <b>Weight</b> tool in the middle of the deck and type 2000, then Run. Or click the deck and make it a <b>Balcony outside</b> (4.8 kPa, an apartment's), or click a pier and change <b>A footing on</b> to till. Typical numbers, for learning: a real deck needs a permit, and a real building needs a licensed engineer.</p></div>
<h3 id="lesson-eng-real-header">Lesson 34: Snow across Canada</h3>
<p>The glulam beam over a garage door holds up the front half of the roof and the snow on it. It passes in Calgary. Move the garage to Prince George, where the snow is more than twice as heavy, and size it again. <span class="where">About 6 minutes · 7 steps · starts from the “Garage door header (real size)” template</span></p>
<div class="step"><h3><span class="num">1</span>A garage door header</h3><p>A garage door is a big hole in a wall, and the wall above it still holds up the roof. The beam across the top is the <b>header</b>: here a <b>130 × 266 mm glulam</b> across a 5.2 m door. The tan strip is the front half of the roof it holds up (the back half rests on the back wall).</p></div>
<div class="step"><h3><span class="num">2</span>Press Run</h3><p>Press the green <b>Run</b> button.</p></div>
<div class="step"><h3><span class="num">3</span>It passes in Calgary</h3><p>The card is all good: it passes the code check. A roof's load is mostly <b>snow</b>, and Calgary's is light: the code takes the snow on the ground once in 50 years, and a roof carries 0.8 of it plus the rain on it.</p></div>
<div class="step"><h3><span class="num">4</span>Building loads</h3><p>Open <b>Structures ▾ → Building loads…</b>. It says where the garage stands, and that place's snow and wind.</p></div>
<div class="step"><h3><span class="num">5</span>Move it north</h3><p>Pick <b>Prince George, BC</b> under <b>Where it stands</b>, read its snow, and press <b>OK</b>.</p></div>
<div class="step"><h3><span class="num">6</span>Too small now</h3><p>The same header now has 2.6 kPa of snow on it instead of 1.0: it doesn't pass, and it sags too far. Press <b>Use 130 × 342 mm glulam</b>.</p></div>
<div class="step"><h3><span class="num">7</span>Your turn</h3><p>Try <b>Québec City</b>, <b>St. John's</b> and <b>Toronto</b> in Building loads, and size the header for each. Where does a garage need the deepest one? Snow on the ground (Ss) and the rain on it (Sr) come from the building code's tables for each town. Typical numbers, for learning: a real building needs a licensed engineer.</p></div>
<h3 id="lesson-eng-real-carport">Lesson 35: Strong isn't stiff: a steel carport</h3>
<p>A steel carport in Québec City's snow: its W150 rafters pass the code check, but sag more than a roof may. Make them stiffer, give the footings room in soft clay, then watch it break. <span class="where">About 8 minutes · 6 steps · starts from the “Steel carport (real size)” template</span></p>
<div class="step"><h3><span class="num">1</span>A steel carport</h3><p>Two steel <b>portal frames</b>, 3 m apart: each two <b>W200 columns</b> and a <b>W150 rafter</b> 6 m across, welded at the corners so the frame can't lean. <b>HSS purlins</b> carry the roof to the rafters, and angle <b>X-braces</b> in the side walls stop it leaning. It stands in Québec City, where a roof carries 3.5 kPa of snow.</p></div>
<div class="step"><h3><span class="num">2</span>Press Run</h3><p>Press the green <b>Run</b> button, and look in 3D.</p></div>
<div class="step"><h3><span class="num">3</span>Strong, but it sags</h3><p>The code check passes: the rafters won't break. But the card says they <b>sag</b> more than their span ÷ 180, about 33 mm. Strong is how much a thing takes before it gives; stiff is how little it bends on the way. A roof that sags more than that cracks what's under it and holds puddles.</p></div>
<div class="step"><h3><span class="num">4</span>Stiffer rafters</h3><p>Press <b>Use W200x27 … for every rafter beam</b>. A W200 is only 55 mm deeper, and twice as stiff.</p></div>
<div class="step"><h3><span class="num">5</span>Footings in soft clay</h3><p>Each column's footing presses harder than soft clay takes. Press <b>Make them big enough</b>.</p></div>
<div class="step"><h3><span class="num">6</span>Your turn</h3><p>Press <b>Run</b> and play the load test to the end: <b>Watch it break</b> shows which piece gives first and how the rest follows. Then move it in <b>Building loads…</b>: Vancouver's snow is half Québec's, so would W150s do there? Or click a rafter and make its ends <b>Bolted</b> instead of welded: a bolted shear tab is a pinned corner, and the frame leans on its X-braces instead. Typical numbers, for learning: a real building needs a licensed engineer.</p></div>
<h3 id="lesson-eng-real-footbridge">Lesson 36: A footbridge for a crowd</h3>
<p>A glulam footbridge 8 m across a creek, loaded for a crowd. The beams are too small, one bolt can't hold an end, and then it bounces: three fixes, and a look at the connections in 3D. <span class="where">About 8 minutes · 7 steps · starts from the “Glulam footbridge (real size)” template</span></p>
<div class="step"><h3><span class="num">1</span>A footbridge</h3><p>Two <b>130 × 266 mm glulam</b> beams, 8 m across and 1.5 m apart, with 2×8 cross joists and a deck. Each beam end sits on a steel <b>knife plate</b> in a slot, held by <b>one ½" bolt</b>, on concrete abutments. A footbridge is loaded for a crowd: <b>4.8 kPa</b>, about six people on every square metre.</p></div>
<div class="step"><h3><span class="num">2</span>Press Run</h3><p>Press the green <b>Run</b> button.</p></div>
<div class="step"><h3><span class="num">3</span>Bigger beams</h3><p>The beams don't pass the code check in bending. Press <b>Use 130 × 342 mm glulam … for every main beam</b>.</p></div>
<div class="step"><h3><span class="num">4</span>More bolts</h3><p>Each end's one bolt is pushed sideways harder than it's allowed: the wood round a bolt crushes, or the bolt bends. Press <b>Use 2 bolts at each</b>.</p></div>
<div class="step"><h3><span class="num">5</span>It bounces</h3><p>Strong enough now, but it sags more than its span ÷ 180: a crowd would feel it bounce. Press <b>Use 175 × 380 mm glulam … for every main beam</b>.</p></div>
<div class="step"><h3><span class="num">6</span>The connections in 3D</h3><p>In the <b>3D view</b>, turn round to a beam end: the knife plate shows past the end, with a bolt head on each face. Click a beam: its panel has <b>Bolts at its first end</b> and <b>far end</b>, and the cut list (Build ▾) prices the bolts, plates and concrete.</p></div>
<div class="step"><h3><span class="num">7</span>Your turn</h3><p>Put a <b>quad bike</b> on it: the <b>Weight</b> tool, 350 kg, in the middle. Or click the deck and make its building load <b>Floor: assembly</b>. Or open <b>Building loads…</b> and test its 1-in-50 wind. Typical numbers, for learning: a real bridge needs a licensed engineer.</p></div>
<h3 id="lesson-printws-plates">Lesson 37: 3D Print workspace: plates and the colour change</h3>
<p>Open the 3D Print workspace, see how a model base is cut into plates with puzzle tabs, change the plate sizes, and find the layer where the filament changes colour. <span class="where">About 8 minutes · 7 steps · starts from the “3D print: a small landscape (plates, inserts and parts)” template</span></p>
<div class="step"><h3><span class="num">1</span>A small landscape to practise on</h3><p>This practice board is 400 × 300 mm, in millimetres at full size. It has a grey cobbled street, a raised cobbled square with a turntable hole, two trees and a lamp. Nothing here touches your own projects.</p></div>
<div class="step"><h3><span class="num">2</span>Open the 3D Print workspace</h3><p>Click <b>3D Print</b> in the top bar. All the 3D printing tools are in its seven sections, beside the plan.</p></div>
<div class="step"><h3><span class="num">3</span>Select the board</h3><p>Open <b>2. Model ground and plates</b>, then click the board's edge on the plan. The board is the <b>model base</b>: the ground on it is cut into plates that fit the printer's bed.</p></div>
<div class="step"><h3><span class="num">4</span>Change the plate sizes</h3><p>Type <kbd>150</kbd> in <b>Column widths</b> and press <kbd>Enter</kbd>. The plate line on the plan moves: L1F is 150 mm wide now and L2F takes the rest (250 mm), with puzzle tabs between them. (The last column always takes what's left.)</p></div>
<div class="step"><h3><span class="num">5</span>Put it back</h3><p>Press <kbd>Ctrl+Z</kbd> to undo. Changing plate sizes changes every plate in that row or column, so only do it if you'll print all of them again.</p></div>
<div class="step"><h3><span class="num">6</span>The colour change</h3><p>Read the colour-change line in section 2: below it the plates print in the base colour (grey), above it in the ground cover colour (white). It tells you the layer to type into Bambu Studio. The street is below it, so its cobbles print grey; the raised square is above it, so its cobbles would print white (the next lesson fixes that with an insert).</p></div>
<div class="step"><h3><span class="num">7</span>A map of the plates</h3><p>The plate map shows every plate by name. <b>Save the plate map as a picture</b> keeps one to print out and lay the plates by. Click <b>← Back to the plan</b> when you're done. That's it!</p></div>
<h3 id="lesson-printws-parts">Lesson 38: 3D Print workspace: parts and part numbers</h3>
<p>See how Arc breaks a model into printable parts, print two shapes as one part, give a layer its own part-number letters, read the parts list, and re-make only what changed. <span class="where">About 8 minutes · 8 steps · starts from the “3D print: a small landscape (plates, inserts and parts)” template</span></p>
<div class="step"><h3><span class="num">1</span>How a model becomes parts</h3><p>The ground is cut into <b>plates</b>. Every other 3D shape is a <b>part</b>, except that shapes that <b>touch</b> print as one part (each tree's trunk and crown), and shapes with the same <b>Print together as</b> text print as one part even when they don't touch.</p></div>
<div class="step"><h3><span class="num">2</span>Open the 3D Print workspace</h3><p>Click <b>3D Print</b> in the top bar.</p></div>
<div class="step"><h3><span class="num">3</span>Make the parts list</h3><p>Open <b>5. Parts and numbers</b> and click <b>Make the parts list</b>. Each part has a number from its layer's letters (T for Trees, L for Lamps), its size, colours and grams. The lamp is two parts: its post and its globe don't touch.</p></div>
<div class="step"><h3><span class="num">4</span>Select the lamp's two shapes</h3><p>Click the lamp post on the plan, then hold <b>Shift</b> and click its globe.</p></div>
<div class="step"><h3><span class="num">5</span>Print them as one part</h3><p>Type <kbd>lamp</kbd> in <b>Print together as</b> and press <kbd>Enter</kbd>. Now they print as one part, glued at the slicer or joined by a peg.</p></div>
<div class="step"><h3><span class="num">6</span>Part number letters</h3><p>Type <kbd>LP</kbd> in <b>Part number letters</b> and press <kbd>Enter</kbd>. Every part on the Lamps layer gets them. You never type the numbers: Arc gives them in order when it makes the list or saves the files.</p></div>
<div class="step"><h3><span class="num">7</span>Make the list again</h3><p>Click <b>Make the parts list again</b>: the lamp is one part now, LP-01. New parts go on the list by themselves. Numbers are given in order, so a new part can move the numbers after it: always print from the newest files and list together.</p></div>
<div class="step"><h3><span class="num">8</span>Re-make only what changed</h3><p>In <b>6. Check and export</b>, <b>Save just these plates…</b> makes only the plates you tick, and <b>Save the selected parts…</b> only the parts you've selected. <b>7. What to watch out for</b> lists anything risky about your changes: seams, puzzle tabs, pockets, the colour change and the bed size. That's it!</p></div>
<h3 class="lessons-group">Machines</h3>
<h3 id="lesson-eng-ballroll">Lesson 39: Why the ball stops: friction, slope and bounce</h3>
<p>Test-play a mini golf lane, then change the felt's friction, tilt the lane and change the border's bounce, and see what each does to the ball. <span class="where">About 15 minutes · 6 steps · starts from the eng-ballroll template</span></p>
<div class="step"><h3><span class="num">1</span>Welcome</h3><p>A straight lane with a cup. The ball rolls by real physics: the felt slows it at a steady rate (friction), a slope speeds it up or slows it at 5/7 of gravity times the slope (the rest goes into spinning it), and a border sends it back slower than it hit (the bounce). Opening this turned on the <b>Golf</b> tools.</p></div>
<div class="step"><h3><span class="num">2</span>Test play</h3><p>Open <b>Golf ▾</b> → <b>Test play the course…</b>. Arc plays the hole hundreds of times and says how often the tee shot goes in.</p></div>
<div class="step"><h3><span class="num">3</span>Less friction</h3><p>Select the lane and set <b>Felt speed</b> to <b>Very fast (Stimp 13)</b>: the felt slows the ball less. Test play again: is the hole easier or harder?</p></div>
<div class="step"><h3><span class="num">4</span>Tilt it</h3><p>In the lane's panel give it a <b>slope</b> of 3% toward the cup. Gravity now pulls the ball along: test play again.</p></div>
<div class="step"><h3><span class="num">5</span>Bounce</h3><p>Set <b>Border bounce</b> to <b>Rubber</b>: the border keeps more of the ball's speed (90% instead of 75%). Play it yourself (<b>Golf ▾</b> → <b>Play the selected hole…</b>) and bank a shot off the side.</p></div>
<div class="step"><h3><span class="num">6</span>What you saw</h3><p>Friction takes a fixed amount of speed every second, so a ball hit twice as hard rolls four times as far. A slope adds or takes speed the whole way. A bounce keeps a fraction of the speed into the wall. Real golf greens run about Stimp 10 to 13.</p></div>
<h3 class="lessons-group">Structures</h3>
<h3 id="lesson-eng-earthwork">Lesson 40: Earthwork: cut and fill for a bridge approach</h3>
<p>A road has to come down a valley side to a bridge: level it into the bank, and see the cut, the fill, the soil to move and the banks too steep to stand. <span class="where">About 15 minutes · 5 steps · starts from the eng-earthwork template</span></p>
<div class="step"><h3><span class="num">1</span>Welcome</h3><p>A creek valley about 3 m deep, with a <b>grading area</b> on the west bank where the road comes down to the bridge. Opening this turned on the house tools, which include <b>Outdoor</b>.</p></div>
<div class="step"><h3><span class="num">2</span>Level the approach</h3><p>Pick <b>Outdoor</b>, set <b>Draw</b> to <b>Ground: flat pad</b>, and draw the road's level end, 4 m wide, from the middle of the grading area to its east edge. Set its height to <b>-1.5 m</b>.</p></div>
<div class="step"><h3><span class="num">3</span>Cut and fill</h3><p>Click the grading area's edge and set <b>Shade the area by</b> to <b>Cut and fill</b>. Red is dug out of the bank, blue is built up. The panel gives the volumes, and the soil left over or short.</p></div>
<div class="step"><h3><span class="num">4</span>Steep banks</h3><p>Tick <b>Slope arrows</b>. The <b>Design check</b> lists banks steeper than 2:1 (50%), which slump unless a retaining wall or rock holds them: that is where the bridge needs its abutment wall.</p></div>
<div class="step"><h3><span class="num">5</span>Balance it</h3><p>Engineers try to balance cut and fill so no soil is trucked in or out. Move the pad up or down (its height) and watch the panel's <b>Soil</b> line until it says <b>Balanced</b>.</p></div>
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
