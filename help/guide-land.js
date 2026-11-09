// Arc Landscape's own chapters of the user guide: guide-edition.js shows them in place of Arc's on the same page.
// <div data-from="id id"> takes those parts out of Arc's guide (user-guide.html), so shared text stays the same.
// No backticks or dollar-brace in the text.
window.ARC_GUIDE = {
  name: 'Arc Landscape',
  lead: 'How to plan a yard: plants and beds, patios and walls, water, the ground, and what it all costs.',
  html: String.raw`
<h2 class="part" id="start">1. How to use this guide</h2>
<p>Arc Landscape plans a yard the way you'd build it. You draw the lot and the house, then the beds and plants, the patio and walls, the sprinklers and where the rain goes. Arc works out what to buy, what it costs, what grows where you live, and what to sort out before anyone digs.</p>
<p>Part 2 gets you started. Parts 3 to 8 follow the order a yard usually goes in: the lot and its rules, the ground, hard surfaces, water, plants, then the money. Part 9 is mini golf and putting greens.</p>
<div class="tip"><b>Edmonton first.</b> Plants, frost dates, base depths, prices and bylaw lines start from Edmonton (zone 4a, heavy clay, CAD). Set your zone and soil in the Plants tool and your region in Preferences. Every rule is a starting point to check with your own city.</div>
<div class="tip"><b>Typing sizes.</b> When a tool is waiting for a click, type a length and press <kbd>Enter</kbd>: <code>12'</code>, <code>3.5 m</code> or <code>40</code> (inches). <kbd>Ctrl</kbd>+<kbd>Z</kbd> undoes anything and <kbd>Esc</kbd> stops the tool.</div>

<h2 class="part" id="first-yard">2. Your first yard</h2>
<p>The welcome screen gives you <b>Plan a yard</b> (type your lot's size and setbacks), <b>Start from a template</b>, and <b>Plan your yard (a lesson)</b>.</p>
<ul class="do">
  <li><b>Plan your yard</b> (the lesson): a new house on a bare lot. Draw a bed, fill it with plants, lay a patio, put in a lawn with sprinklers, then see the cost and what to do before you dig. About 25 minutes.</li>
  <li><b>New house, bare yard</b>: a 50' × 120' lot with the house, driveway, walk, ground heights, downspouts and a utility right-of-way, ready to grade and plant.</li>
  <li><b>Front and back yard</b>: the same lot planted, with lawns, a tree, a patio, a fence and a front bed.</li>
  <li><b>Vegetable garden and patio</b>: raised beds on gravel, a compost bin and a rain barrel.</li>
</ul>
<p>The tool bar starts with the outdoor tools: <b>Plants</b>, <b>Water</b>, <b>Outdoor</b> (beds, lawns, patios, fences, the ground, rights-of-way) and <b>Rock</b>. The house tools are there too, for drawing the house the yard goes round.</p>

<h2 class="part" id="lot">3. The lot and its rules</h2>
<h3 id="property-line">Property lines</h3>
<p>Draw the lot with <b>File ▾ → New lot…</b>, or <b>Outdoor → Property line</b> round it. Select the property line to see its bearings and area.</p>
<h3 id="rights-of-way">Rights-of-way and easements</h3>
<p>Your <b>Real Property Report</b> (Canada; a property survey in the US, a title plan in the UK) shows the utility rights-of-way and easements. Most Edmonton back yards have a 1.5 to 3 m utility right-of-way along the back. Select the property line and use <b>Add a right-of-way</b>, or draw one with <b>Outdoor → Utility right-of-way or easement</b>. The <b>Design check</b> then warns about walls, sheds, decks, fire pits, hot tubs, trees and sprinkler mains in it, because the utility can dig them up.</p>
<p>It also warns when anything you build is over the property line, when a tree will grow over it, and when a fence is taller than the bylaw allows (about 1.85 m in a back yard and 1.2 m in a front yard in Edmonton; check yours).</p>
<h3 id="before-you-build">Before you build</h3>
<p><b>Review ▾ → Before you build: digging &amp; permits…</b> lists, from what's on the plan: the call to have the lines located before digging (Click Before You Dig in Alberta, 811 in the US), the permits it probably needs (tall walls and fences, raised decks, big sheds, hot tubs, sprinkler tie-ins, 120 V lights, fire pits) and the rights-of-way.</p>
<h3 id="snow">Where the snow goes</h3>
<p>Draw <b>Outdoor → Where the snow goes</b> where you pile shovelled snow. Plants in it, and plants within a metre of a salted walk or driveway that don't take road salt, get a warning.</p>

<h2 class="part" id="ground">4. The ground</h2>
<h3 id="heights">Ground heights</h3>
<p>The ground's shape comes from <b>contour lines</b> and <b>spot heights</b> (Outdoor → Ground). Heights are from the main floor: ground beside a house is usually 6" to 8" below it.</p>
<ul>
  <li><b>No heights yet?</b> Pick <b>Outdoor → Ground: spot height</b> and tick <b>Survey with a level</b>. Read a measuring stick with a line, laser or builder's level at a corner of the house, then at each point: Arc works out each height as you click.</li>
  <li><b>Heights from a file…</b> reads a LiDAR elevation grid (.asc) or a list of x, y, z points in metres, and lays them over the plan as spot heights.</li>
</ul>
<h3 id="grading">Grading a yard</h3>
<p>Draw <b>Outdoor → Ground: grading area</b> round the part you'll reshape. Inside it the sculpt brushes work in 3D (<b>Sculpt the ground in 3D…</b>), and the area's panel shows the <b>cut</b> and <b>fill</b>, whether soil goes away or comes in (in truckloads), and can shade the area by <b>slope</b> or by <b>cut and fill</b>, with arrows pointing downhill and the new contour lines over the old ones.</p>
<p>The Design check warns about lawn too steep to mow (over 3:1), banks too steep to stand (over 2:1), lawn too flat to drain, and low spots where water will sit. The takeoff prices digging, compacting fill, stripping and putting back the topsoil, and hauling soil away or bringing fill in.</p>
<h3 id="drainage">Where the water goes</h3>
<p>Add <b>Blocks → Drainage → Downspout</b> at the house corners and a <b>Sump pump discharge</b>. Each one's dashed line on the plan shows where its water runs: to the street or lane, onto a neighbour, back to the house, or into a low spot. Extensions should end 2 m or more from the house. A downspout's panel shows the roof it drains, the rain from a 25 mm storm, the rain barrels that would catch it and the rain garden that would soak it up.</p>
<p><b>Outdoor → Ground: swale</b> draws a shallow grass channel that carries water along the ground. The Design check also warns when the ground beside the house doesn't fall away from it, or when a grading area drains onto a neighbour.</p>

<h2 class="part" id="hardscape">5. Patios, paths, walls and lights</h2>
<p><b>Outdoor → Patio</b> and <b>Ground: driveway or path</b> draw paving. Each has a <b>product</b> (pavers, slabs, natural stone, concrete, asphalt, gravel), and Arc works out the base under it for Edmonton frost, the amounts (square feet, pallets, tonnes, bags) and the price. Pavers in a plain running bond count their cut pieces from the real shape.</p>
<p>The Design check warns about walks narrower than 900 mm or steeper than 1:20 without landings, slabs that won't take a car, permeable pavers on clay without an underdrain, retaining walls over 1.2 m (a permit and an engineer), and fire pits too close to anything that burns or bigger than the bylaw allows.</p>
<p><b>Blocks → Outdoor living</b> has seat walls, block steps, fire pit kits, low-voltage path and spot lights with their transformer, 120 V lamp posts and flood lights, a garden shed, a compost bin and a chipping net.</p>

<h2 class="part" id="water">6. Sprinklers and drip</h2>
<p>Select a lawn and click <b>Lay out sprinklers</b>: heads go round the edge and through the middle, each throwing to the next, split into zones your tap can run. Or pick <b>Water</b> on the tool bar and put heads, drip line and pipe down yourself.</p>
<p>The Water panel sets what the tap gives (time a pail), its <b>pressure</b>, the <b>watering days</b> allowed, and a <b>rain sensor</b>. The coverage map shows dry and thin spots, and <b>Watering schedule…</b> gives each zone's minutes and the season's water and cost. The Design check warns about zones over 80% of the tap, too little pressure, mixed head types, spray on the house, dry lawn and a missing backflow preventer.</p>

<h2 class="part" id="plants">7. Plants and beds</h2>
<h3 id="plant-library">The plant library</h3>
<p>Pick <b>Plants</b>. Set your <b>zone</b>, <b>soil</b> and <b>pH</b> at the top, then search or filter by kind, light, colour and bloom month. Filters leave out plants that won't live through your winter, that are <b>poisonous</b> to pets and children, or that <b>spread</b>. Each plant's card says how big it gets, its care, the diseases to watch for, and whether it needs a partner to fruit.</p>
<h3 id="beds">Beds</h3>
<p>Draw a bed with <b>Outdoor → Landscape fill</b> (mulch, rock or a garden bed: mulch starts 3" deep). Select it to fill it with the plant picked, in rows, a grid, a drift or along the edge, at the spacing they need when grown. Its panel shows edging, mulch and soil amounts, a score for bees and butterflies and for the seasons it looks good, the <b>Bloom calendar</b> and the <b>Garden timeline</b> (sowing, planting, pruning, wrapping trunks, watering evergreens, planting bulbs).</p>
<h3 id="growth">Growth and the seasons</h3>
<p><b>Show it</b> sizes every plant as planted, or after 1 to 20 years, and <b>In</b> shows a month in 3D, with fall colour, bare twigs and snow. <b>Planting day, year 5, year 15…</b> puts three pictures side by side. The <b>Sun and shade map</b> shows hours of sun with the trees at their grown size.</p>
<p>The Design check warns about trees that will crowd the house or each other, sun lovers in shade, plants that go yellow on alkaline clay, poplars and willows near the house, big trees beside paving, tender plants on the windy north-west side, and fruit trees with no partner.</p>

<h2 class="part" id="money">8. What it costs</h2>
<p><b>Budget ▾ → Takeoff &amp; cost estimate…</b> lists every material: plants in the pot size you chose (a plant's <b>Buy it as</b> picks a bigger one), new lawn (topsoil and sod or seed, or artificial turf), beds, paving with its base, walls, sprinklers, drainage and earthwork. Prices start from Edmonton estimates; change any of them.</p>
<p><b>Budget ▾ → Yard: do it or hire it, and upkeep…</b> shows the crew hours to build it and the cost if hired (tick <b>Hire it done</b> to put the labour in the estimate), and the time it takes to look after: mowing, weeding, watering, pruning and leaves.</p>

<h2 class="part" id="golf">9. Mini golf</h2>
<p>Design a mini golf course, play it with a real rolling ball, and print it. The seven <b>Mini golf, step by step</b> lessons go through this chapter in order: open them from <b>Guide ▾ → Do-it-with-me lessons</b>.</p>

<h3 id="mg-hole">A hole</h3>
<p>Pick <b>Mini golf</b> on the tool bar and click the corners of the green, starting at the tee end. Click the first corner, double-click or press <kbd>Enter</kbd> to finish. Arc puts the tee near the end you started at, the cup near the far end, and a border all round. Select the green to change its <b>Name</b>, <b>Par</b>, felt colour and border, or use <b>Move the tee</b> and <b>Move the cup</b>. Drag its corner dots to reshape it.</p>

<h3 id="mg-shape">Slopes, mounds and hollows</h3>
<p><b>Slope</b> tilts the whole green toward the side you pick in <b>Falls toward</b>: the ball drifts that way all down the hole, so you aim uphill of the cup. <b>Add a mound</b> puts a round bump on the green, and <b>Add a hollow</b> a dip that catches a slow ball. <b>Add a wall</b> draws a wall inside the green to bank shots off.</p>

<h3 id="mg-obstacles">Obstacles</h3>
<p><b>Golf ▾ → Add an obstacle…</b> opens the Mini golf blocks: a windmill with turning blades, tunnels, ramps, a loop, a castle, a bridge, a boardwalk and more. Moving ones keep their timing, so you putt as a gap comes round.</p>

<h3 id="mg-traps">Sand, water, surfaces and bridges</h3>
<p><b>Add a sand trap</b> slows the ball right down. <b>Add a water trap</b> costs a stroke and sends the ball back to where it was hit. <b>Add another surface…</b> adds rough, a road, gravel or out of bounds. A <b>Bridge</b> or <b>Boardwalk</b> from the Mini golf blocks carries the ball over water.</p>

<h3 id="mg-design">Design your own obstacle</h3>
<p><b>Golf ▾ → Design an obstacle…</b> builds one from parts: walls with gates (6" or more for the ball), arches, roofs, posts, signs and a spinning arm. Name it and click <b>Save to My obstacles</b>: <b>Golf ▾ → My obstacles…</b> puts it on any hole, in any plan.</p>

<h3 id="mg-course">A course</h3>
<p>Draw as many holes as you like: Arc numbers them in order. <b>Golf ▾ → Scorecard…</b> lists each hole, its par and length. A hole's panel can set the <b>Felt speed</b> and the <b>Border bounce</b> for the whole course, and <b>Every hole par 2</b> sets them all at once. <b>Golf ▾ → Test play the course…</b> plays every hole hundreds of times: it lists any hole that can't be finished, how often a tee shot goes in, and how many putts a careful player needs. <b>Ground under the course…</b> lays turf, grass or gravel round all the holes. <b>New course from a scorecard…</b> lays out a real golf course's holes, scaled down, from its names, pars and yards.</p>

<h3 id="mg-play">Playing</h3>
<p><b>Play it</b> (a hole's panel), <b>Golf ▾ → Play the selected hole…</b> or <b>Play the course…</b> (one to four players). Aim with <kbd>←</kbd> and <kbd>→</kbd> (or click where you want it to go), then hold <kbd>Space</kbd> or <b>Hold to putt</b> and let go: the power meter runs up and back down, so holding too long costs power. The view follows behind the ball. The felt slows it, slopes pull it at about five-sevenths of gravity times the slope, borders bounce it back slower, and it drops only if it isn't going too fast over the cup. <kbd>Esc</kbd> stops.</p>

<h3 id="mg-quick">Starter shapes, Easy mode and fixing a hole</h3>
<p><b>Golf ▾ → Start from a shape…</b> (or <b>Start from a shape…</b> on the Mini golf tool's panel) makes a hole without clicking corners: <b>Straight</b>, <b>Dogleg left</b> or <b>right</b>, an <b>L</b> either way, an <b>S-bend</b>, a <b>Horseshoe</b>, or <b>Over the water</b> with a bridge. Pick a length (15' to 30') and a width; it goes beside your other holes with a tee and a cup, ready to play. Every shape can be finished; then drag its corners to make it yours.</p>
<p><b>Easy mode</b> is ticked per player in the window that opens when you play, so a younger player can play easy while others don't. It shows a dotted line of where the putt will go (bounces too), puts <b>Soft</b>, <b>Medium</b> and <b>Hard</b> buttons in place of the swinging power meter, makes the cup half as big again (a yellow ring shows it) and lets nine strokes go before picking up. Test play and the ratings never use it.</p>
<p>Anyone can putt by pressing on the ball and dragging back, like a slingshot: the further back, the harder, and the ball goes the opposite way. On a tablet use a finger; two fingers turn the view. The play bar gets bigger buttons on a narrow screen. <b>◎</b> aims straight at the cup. <b>Try again</b> (easy players, or anyone playing alone) puts the ball back where the last putt was hit and doesn't count it.</p>
<p><b>Fix this hole</b> leaves play with the hole selected and the ball's spot marked with a yellow ring. Change what you like, then <b>Play from here</b> in its panel starts again at that spot with the same players.</p>

<h3 id="mg-curves">Curved holes</h3>
<p>A green can curve. <b>Corners</b> in a hole's panel rounds every corner of the green: <b>Gently rounded</b> (6"), <b>Rounded</b> (1'), <b>Very rounded</b> (2'), <b>Sweeping</b> (4') or <b>As round as they go</b> (a square becomes a circle, a dogleg a smooth bend). The orange handles stay on the corners: drag one and the curve follows; Move, Rotate and Mirror carry it; <b>Sharp</b> puts the corners back exactly. The Mini golf tool has the same <b>Corners</b> choice for the next green you draw. A sand or water trap can be <b>Rounded</b> or <b>Round</b> in its row of the hole's panel, and a wall of three points or more can be <b>Curved</b>. <b>Start from a shape…</b> has five curved ones: a <b>Sweeping S</b>, a <b>Long curve</b>, a <b>Round U-turn</b>, a <b>Round green</b> and a <b>Spiral in</b>; Surprise me makes some holes curved too. The ball, the putt lines, Test play, 3D and printing all follow the curve, and course codes carry it.</p>

<h3 id="mg-levels">Two levels: drop holes and roll-offs</h3>
<p><b>Add an upper level</b> (a hole's panel) and click its corners on the green: a raised part of the green, 8" up to start (4" to 18" in its row), with its own border. Put the tee on it for a hole that starts up high. Then either:</p>
<ul>
<li><b>Add a drop hole</b> and click on the upper level: the ball falls through it and shoots out of the level's side onto the green below (the yellow arrow), faster for a bigger drop. Drag the arrow's end along the side to choose where it comes out.</li>
<li>Or set the level <b>Open on side…</b>: that side has no border, so the ball rolls off it and lands below (a little slower). It can't roll back up: from below, every side is a wall.</li>
</ul>
<p>The upper level's corners can be rounded like the green's. Test play, the putt lines and the scene all know the levels; the ball rides on top of them in 3D. In print, each upper level is its own raised piece to glue on the green, with its border and drop hole; for the drop, glue a short bent tube (a drinking straw works at small scales) under the hole, out to the side. Dropping down a level and still getting the ball in earns the <b>Down a level</b> sticker.</p>

<h3 id="mg-help">Design help: the bot's shot, ideas, challenges, dressing the course</h3>
<p><b>Show the bot's shot</b> (a hole's panel) draws Arc's careful player's strokes in purple, numbered where each is played from, and says how many it needs. <b>Beat the bot</b>: change the hole until it needs two strokes or more, and can still be finished. The drawing goes when the hole changes; show it again to see what your change did.</p>
<p><b>Golf ▾ → Hole ideas…</b>: a dozen ready holes with a picture, the trick to each and how hard it is (a windmill lane, the volcano, an island green, the hollow, a bank shot, a pipe through a wall, a loop, a funnel finish, a drop, a pinball green, a see-saw, a sweeping S). <b>Add to my course</b> puts one beside your holes to play and change.</p>
<p><b>Golf ▾ → Design challenges…</b>: puzzles Arc checks by test-playing the selected hole: a tough par 2, a hole that needs a bank shot, water with no bridge, a tap and in, beat the bot by two, a curved ace, down and in, and nine holes in a 20' × 30' yard. Done ones are ticked and kept on this computer; three earns the Designer sticker.</p>
<p><b>Golf ▾ → Dress the course</b> sets a sign by every tee (with the hole's number and name), a welcome sign and flag by the first, benches by the cups, lamps along the way between holes, and trees and shrubs from the plant library round the edge, never on a green or a trap. Dress it again for a fresh lot; one Undo takes them away.</p>
<p>The Mini golf tool can <b>Draw by dragging a rectangle</b> or <b>an oval</b> (snapped to 6", with the tee and cup at the ends), as well as by clicking corners. In the obstacle designer, Arc warns of a gate or a gap under 6" (and one the ball can't get through at all), and <b>Roll a ball through</b> rolls five balls at your design and says how many get past.</p>

<h3 id="mg-surprise">Surprise me, putt lines and the difficulty badge</h3>
<p><b>Golf ▾ → Surprise me…</b> (or <b>Surprise me…</b> on the Mini golf tool's panel) makes a hole for you: a starter shape, a slope, and a sand trap, a mound or a hollow, or an obstacle (more of them for a harder hole; water with a bridge for some hard ones). Arc test-plays it and makes it again until it comes out <b>Easy</b>, <b>Medium</b> or <b>Hard</b>, as you asked, and every one can be finished. <b>Shuffle</b> makes another, <b>Keep</b> leaves it, <b>Take it away</b> removes it (one Undo does the same). <b>A 9-hole course (easy to hard)</b> makes three of each, getting harder, in rows of three. Each hole gets a name; change anything afterwards.</p>
<p>With a hole selected, three <b>putt lines</b> run from the tee straight at the cup: <b>blue</b> soft, <b>yellow</b> just right (the speed that would stop at the cup on flat felt) and <b>orange</b> firm. A small ring marks where each first hits something; a circle at the cup means in, × means water or out of bounds. They move as you drag the tee, the cup or a corner. A moment after you stop changing a hole, Arc gives it a quick test play: the <b>badge</b> by its number (green Easy, amber Medium, orange Hard, red Very hard or Can't finish) and the line at the top of its panel say how hard it is. It's a quick check with fewer putts than <b>Test play</b>, which still gives the full rating. <b>Show where putts roll</b> and <b>Rate it as I change it</b> in the hole's panel turn them off.</p>
<p>Five more obstacles (<b>Add an obstacle…</b>): a <b>Pinball bumper</b> and a <b>Kicker strip</b> send the ball away faster than it came (never faster than a full-power putt), with a boing; after eight kicks in one putt they just bounce it, so a ball can't be kept going forever; a <b>Funnel</b> has a rim to climb, then spirals the ball down to its middle (set it over the cup); a <b>Banked curve</b> turns a ball coming up its left side round to the right; a <b>Split ramp</b> has two lanes, over a hump (it needs a firmer putt) or the flat way round. They print like the others.</p>

<h3 id="mg-scenery">Scenes, scenery and your own picture</h3>
<p><b>Scene when playing</b> (a hole's panel, or the window that opens when you play) puts the course somewhere: <b>Castle grounds</b>, <b>Under the sea</b>, <b>Space</b>, a <b>Beach</b> with palms and huts, a <b>Snowy village</b> with lit windows and falling snow, a <b>Jungle</b>, or <b>Night glow</b>, dark with glowing lamps and mushrooms (every ball glows a little there). <b>Apply the look</b> sets the felt and borders to suit (white felt for the snow), and each scene adds two balls of its own, marked ★. The scene is drawn by Arc, so nothing downloads.</p>
<p><b>Add scenery…</b> (a hole's panel, or <b>Golf ▾</b>) sets things round the course for looks: a castle tower, a flag, a palm tree, a big rock, a shipwreck, a rocket, a snowman, a lamp post, a bench, a signpost, a giant mushroom and a treasure chest. They show on the plan and in 3D, move and turn like any block, and aren't printed. Set one on a green and the ball bounces off what's solid near the ground (a palm's trunk, a lamp's post, a bench or a chest).</p>
<p><b>Use my own picture…</b> (or <b>Golf ▾ → My own picture as the scene…</b>) makes a photo or a drawing the scene. <b>My picture</b> → <b>All round the course</b> wraps it round (two copies, the second mirrored so there's no seam, with a sky above and ground below from its own colours); <b>A backdrop behind the course</b> stands it up behind the far end, facing the first tee. Arc shrinks it to 2048 pixels across at most and keeps it in the plan, so the plan stays a sensible size and the picture goes where the plan goes. Use your own pictures (or ones you're allowed to use).</p>

<h3 id="mg-tricks">Pipes, loops, gates and stickers</h3>
<p>More obstacles (<b>Add an obstacle…</b>): a <b>Pipe</b> pairs with another pipe of the same colour: the ball rolls into one mouth and out of the other at the same speed (the open side faces the arrow on the plan; a third pipe of one colour has no partner and is just a dead end). The <b>Loop-the-loop</b> now needs speed: going in too slowly, the ball runs back out the way it came. A rolling ball needs v² ≥ 27/7 × g × R to get round, so a 3' loop takes most of a full putt. A <b>One-way gate</b> lets the ball through only the way its arrow points. A <b>See-saw plank</b> tips the ball off whichever end it's nearer once it's past the middle. A <b>Chimney drop</b>: up its ramp, down the tube and out of its right side. Test play and the putt lines know all of them.</p>
<p><b>Golf ▾ → My stickers…</b> shows the sticker sheet: <b>Hole in one</b>, <b>Bank-shot ace</b> (off a wall), <b>Through the windmill</b>, <b>Loop-the-loop</b>, <b>Down the pipe</b>, <b>Pinball</b> (three kicks in one putt), a <b>Dry round</b>, <b>Under par</b>, <b>Steady hand</b> (nine holes or more, all within par) and <b>Designer</b> (Test play rates your hole Hard, and it can still be finished). New stickers are named on the final scorecard, never in the middle of a putt. They're kept on this computer for every course; <b>Start again</b> clears the sheet for a new player or class.</p>

<h3 id="mg-share">Built-in courses, sharing and the best rounds</h3>
<p>Three courses come with Arc Landscape (File ▾ → New from template): <b>Family nine</b> (easy to a little harder, in the castle grounds), <b>Tricky nine</b> (a trick on every hole) and <b>Links eighteen</b> (out and back by the sea, from a made-up scorecard). Every hole has been test-played and can be finished. Play them, or change them like any course.</p>
<p><b>Golf ▾ → Share this course…</b> makes a <b>course code</b>: the holes, their obstacles and scenery and the felt speed and scene, as a few KB of letters starting <code>ARCGOLF1:</code>. <b>Copy the code</b> to paste into a message, <b>Save as a file…</b> for a small .arcgolf file, or, on the web, <b>Copy a link</b> that opens Arc on that course (the person needs to be able to sign in). Select some holes first to share just those. Your own scene picture isn't in a code. <b>Golf ▾ → Paste a course…</b> adds a code or a .arcgolf file beside your holes, as one step you can undo. A code is checked as it comes in: only felts, borders, surfaces and obstacles Arc knows, sensible sizes, and at most 36 holes.</p>
<p>After a full round of stroke play (three holes or more), the final scorecard shows the <b>best rounds on this course</b>: the five lowest totals, kept with the plan.</p>

<h3 id="mg-moving">Moving obstacles</h3>
<p><b>Golf ▾ → Add a moving obstacle…</b> places one that moves while you play: a <b>Swinging log</b> on a frame, a <b>Sliding wall</b> or <b>Two sliding walls</b>, a <b>Timed gate</b> that opens and shuts, <b>Two gates out of step</b>, a <b>Turntable</b> that carries the ball round, or a <b>Spinner</b>. Each is a designed obstacle, so its panel can change it: how far it moves, how many seconds it takes, where it <b>Starts</b> (two the same, one starting halfway, take turns) and which way a spinner or turntable turns. You can also add these parts to your own designs. They move the same way in every game, so test play rates the hole fairly; a moving wall can't push the ball through a border.</p>

<h3 id="mg-games">Games, replays and your ghost</h3>
<p>Pick the <b>Game</b> in the window that opens when you play:</p>
<ul>
<li><b>Stroke play</b>: fewest strokes wins.</li>
<li><b>Match play</b> (2 players): win holes, not strokes; the card says who is up.</li>
<li><b>Two against two</b> (4 players): players 1 and 2 against 3 and 4, each team counting its better score on every hole.</li>
<li><b>Time trial</b>: a clock runs from your first putt on a hole until the ball drops; fastest round wins.</li>
<li><b>Speed golf</b>: strokes plus seconds ÷ 10.</li>
<li><b>Puzzle holes</b>: in within par solves the hole.</li>
<li><b>Hole-in-one hunt</b>: ten balls from the tee, one putt each; the card shows how many went in, beside how often Arc's careful player gets one.</li>
</ul>
<p>A hole in one, or a long putt that drops, plays a slow-motion replay from the side (any key or a tap skips it). <b>▶ Watch again</b> replays your last putt any time. Your best first putt on each hole is kept (in Arc, not in the plan) as a see-through <b>ghost ball</b> that rolls from the tee while you aim your first putt; the card shows the ghost's score as <b>Your ghost</b>. Change the hole and its old ghost goes, so it never shows a putt that wouldn't work now.</p>

<h3 id="mg-scene">Scenes, balls and sounds</h3>
<p>A hole's panel sets the <b>Scene when playing</b> for the whole course: <b>Castle grounds</b> (towers, walls and pine trees under a summer sky), <b>Under the sea</b> (kelp, coral and rocks, with bubbles rising and light from above) or <b>Space</b> (craters, a dome base and a rocket under the stars and a ringed planet). The sky goes all the way round and the scenery stands back from the holes, with fog and light to match. You can also pick the scene in the window that opens when you play. A scene never changes how the ball rolls, so test play and the ratings stay the same.</p>
<p><b>Apply the look</b> sets every hole's felt and borders to suit the scene (green felt and stone at the castle, blue and white under the sea, a black glow course in space). One undo puts your own colours back, and the scene shows either way.</p>
<p>Each player picks a ball: plain colours, striped, spotty, two-tone or a glow ball, and with a scene, balls marked ★ that go with it (a cannonball or a shield ball, a pearl or a striped fish, a little planet with a ring or a moon). With two or more players each ball has its player's first letter, so colour is never the only way to tell them apart. A short line trails behind the rolling ball.</p>
<p>Sounds are made by Arc as you play: the putt, a clack off a border (louder the harder it hits), a plop in the cup, a splash in water, an "ooh" when it lips out and a little tune for a hole in one. The <b>Sound</b> button in the play bar turns them off or on.</p>

<h3 id="mg-print">Printing a hole</h3>
<p>A hole's <b>Print it</b> (or <b>Golf ▾ → Print the selected hole…</b>) cuts it into pieces for your 3D printer's bed, joined with dovetails, with a cup, drop-in traps and the obstacles as their own parts. Pick the <b>Ball</b> (a 6 mm BB, a 10 or 16 mm marble, or a real golf ball), the <b>Scale</b>, and the <b>Fit</b>: 0.3 mm suits a 0.4 mm nozzle. Each plate saves as its own 3MF file.</p>

<h3 id="putting-green">A putting green in the yard</h3>
<p><b>Outdoor → Landscape fill → Putting green (synthetic)</b> prices the turf, the crushed base, stone dust shaped for the breaks, the infill and the cups. A <b>Chipping net</b> (Blocks → Outdoor living) makes it a short-game practice area.</p>

<h2 class="part" id="lessons">10. Lessons</h2>
<p><b>Plan your yard</b> walks through a whole yard in about 25 minutes. <b>Mini golf, step by step</b> is seven short lessons, from your first hole to a course of your own, played with friends and printed. Open them from the welcome screen or <b>Guide ▾ → Do-it-with-me lessons</b>.</p>
`,
};
