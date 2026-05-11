import heroFishing from "../assets/images/hero/mountain-lake-fishing.jpg";
import heroLakeSunrise from "../assets/images/hero/lake-sunrise.jpg";
import heroForest from "../assets/images/hero/forest-cinematic.jpg";

import catFishing from "../assets/images/categories/fishing-guides.jpg";
import catCamping from "../assets/images/categories/camping-tips.jpg";
import catGear from "../assets/images/categories/outdoor-gear.jpg";
import catLake from "../assets/images/categories/lake-adventures.jpg";
import catHiking from "../assets/images/categories/hiking-trails.jpg";
import catSurvival from "../assets/images/categories/survival-skills.jpg";

import blog1 from "../assets/images/blog/blog-1.jpg";
import blog2 from "../assets/images/blog/blog-2.jpg";
import blog3 from "../assets/images/blog/blog-3.jpg";
import blog4 from "../assets/images/blog/blog-4.jpg";
import blog5 from "../assets/images/blog/blog-5.jpg";
import blog6 from "../assets/images/blog/blog-6.jpg";

import p1 from "../assets/images/projects/project-1.jpg";
import p2 from "../assets/images/projects/project-2.jpg";
import p3 from "../assets/images/projects/project-3.jpg";
import p4 from "../assets/images/projects/project-4.jpg";
import p5 from "../assets/images/projects/project-5.jpg";
import p6 from "../assets/images/projects/project-6.jpg";

import m1 from "../assets/images/community/member-1.jpg";
import m2 from "../assets/images/community/member-2.jpg";
import m3 from "../assets/images/community/member-3.jpg";
import m4 from "../assets/images/community/member-4.jpg";

import t1 from "../assets/images/tutorials/tutorial-1.jpg";
import t2 from "../assets/images/tutorials/tutorial-2.jpg";
import t3 from "../assets/images/tutorials/tutorial-3.jpg";

import fishing1 from "../assets/images/fishing/fishing-1.jpg";
import fishing2 from "../assets/images/fishing/fishing-2.jpg";
import camping1 from "../assets/images/camping/camping-1.jpg";
import camping2 from "../assets/images/camping/camping-2.jpg";
import nature1 from "../assets/images/nature/nature-1.jpg";
import nature2 from "../assets/images/nature/nature-2.jpg";
import gear1 from "../assets/images/gear/gear-1.jpg";
import gear2 from "../assets/images/gear/gear-2.jpg";

export const heroImages = { heroFishing, heroLakeSunrise, heroForest };

export const categories = [
  {
    slug: "fishing-guides",
    title: "Fishing Guides",
    tagline: "Lakes, rivers, and the cold quiet at dawn.",
    image: catFishing,
    intro:
      "From alpine trout streams to backcountry bass lakes, our fishing guides are built from decades of casting, miles of shoreline, and dozens of dawns. We share tackle setups, seasonal patterns, ethical catch-and-release, and the small rituals that turn a fishing trip into a story worth telling.",
    tips: [
      "Match the hatch — observe insects on the water before tying on",
      "Fish the edges where light meets shadow, where weed meets gravel",
      "Use barbless hooks for cleaner, faster releases",
      "Move slow. Cast less. Watch the water for two minutes before you fish it",
    ],
    gear: ["9-foot 5-weight fly rod", "Polarized sunglasses", "Wading boots with felt soles", "Forceps + landing net", "Tippet 4x–6x"],
    duration: "Half-day to multi-day",
    difficulty: "Beginner to advanced",
    seasons: "Spring through late fall",
  },
  {
    slug: "camping-tips",
    title: "Camping Tips",
    tagline: "Sleep where the satellites are brighter than streetlights.",
    image: catCamping,
    intro:
      "Camping isn't about gear — it's about getting comfortable enough in the wild that you can pay attention. Our camping tips help you choose campsites with thoughtful drainage, dial your sleep system, cook one-pan meals that don't disappoint, and Leave No Trace so the next family of campers thinks they were the first.",
    tips: [
      "Set up before sunset — find your gear by daylight, not headlamp",
      "Sleep warm: insulate from the ground, not just on top",
      "Bear-bag your food 200 feet from the tent, 12 feet high, 6 feet from the trunk",
      "Cold-weather trick: a hot Nalgene at your feet inside your sleeping bag",
    ],
    gear: ["3-season tent", "Sleeping bag rated 10°F below forecast low", "Inflatable pad R-value 4+", "Stove + fuel", "Headlamp + spare batteries"],
    duration: "Overnight to 7+ days",
    difficulty: "Beginner friendly",
    seasons: "Year-round with the right setup",
  },
  {
    slug: "outdoor-gear",
    title: "Outdoor Gear",
    tagline: "Buy once. Cry once. Use forever.",
    image: catGear,
    intro:
      "We test gear in real conditions — sleet, sun, three-day storms, and the kind of cold that finds the seams. Our gear reviews favor longevity over hype, repairability over features, and the brands that still answer the phone when you call. Read what we packed, what we returned, and what we still rely on years later.",
    tips: [
      "Spend on shelter, sleep, and footwear. Everything else can wait",
      "A merino base layer outperforms a $400 jacket in 70% of conditions",
      "Repair zippers and seams before they fail — carry a small kit",
      "Weight matters most over miles, not minutes",
    ],
    gear: ["Trail-tested boots", "Layered shell + insulation", "Multi-tool", "Water filter", "First-aid + repair kit"],
    duration: "Reviews 5–25 min each",
    difficulty: "All skill levels",
    seasons: "Reviews year-round",
  },
  {
    slug: "lake-adventures",
    title: "Lake Adventures",
    tagline: "The water is older than the trail.",
    image: catLake,
    intro:
      "We love a lake at first light — the surface holding the mountains like a second sky. Our lake content covers paddle routes, cabin escapes, family-friendly shorelines, and the alpine tarns you only earn with a long climb. Find your next swim, your next paddle, your next cabin coffee at 6 a.m.",
    tips: [
      "Launch early — wind builds with the day on most lakes",
      "Paddle the windward shore on the way out, downwind on the return",
      "Watch for thermal inversions on glacial lakes",
      "Always carry a PFD, even on calm water",
    ],
    gear: ["Touring or recreational kayak", "PFD", "Dry bag", "Map + compass or GPS", "Sun shirt + hat"],
    duration: "Day trips and weekend cabin stays",
    difficulty: "Beginner to intermediate",
    seasons: "Late spring through early fall",
  },
  {
    slug: "hiking-trails",
    title: "Hiking Trails",
    tagline: "The trail teaches what the trailhead can't.",
    image: catHiking,
    intro:
      "Hiking is the cheapest therapy on earth. We map trail beta — elevation, water sources, exposure, parking realities — alongside the kind of detail that helps you choose: do I want to be alone today, or do I want a vista I'll show my kids in twenty years? Pick your trail, then pick your pace.",
    tips: [
      "Start before the sun is over the ridge — finish before storms build",
      "Pack the ten essentials even on short hikes",
      "Trekking poles save your knees on the descent",
      "Tell someone your turnaround time and stick to it",
    ],
    gear: ["Trail runners or boots", "Layered clothing", "1–3L water + filter", "Map + compass", "Headlamp"],
    duration: "1 hour to multi-day thru-hikes",
    difficulty: "Beginner to expert",
    seasons: "Year-round with seasonal gear",
  },
  {
    slug: "survival-skills",
    title: "Survival Skills",
    tagline: "Practice the basics until they're boring.",
    image: catSurvival,
    intro:
      "Survival isn't drama — it's preparation. We teach the small, repeatable skills that turn a bad day into a long story instead of a search-and-rescue call: water, shelter, fire, navigation, and the calm that keeps you making good decisions. Learn the basics in a backyard before you need them in a basin.",
    tips: [
      "Stop, Think, Observe, Plan — STOP is a skill, not a slogan",
      "You can survive longer without food than without shelter or water",
      "Three sticks and a tarp make a shelter. Practice in your yard",
      "A whistle carries farther than your voice and uses no energy",
    ],
    gear: ["Lighter + ferro rod", "Compact tarp", "Water filter or tablets", "Map + compass", "First-aid kit + signal mirror"],
    duration: "Skills practice 1–3 hours each",
    difficulty: "Beginner to advanced",
    seasons: "Year-round",
  },
];

export const articles = [
  {
    id: "a1",
    image: blog1,
    title: "Reading Water: How to Spot Trout Lies in a New River",
    excerpt: "Find seams, slack water, and the shadow lines where big trout hold all day.",
    author: "Marlow Hayes",
    date: "May 03, 2026",
    readTime: "8 min",
    tag: "Fishing",
    body: `Every river is a book the trout already finished reading. The current is the prose; the seams and pools are the punctuation. Stand on the bank for two minutes before you cast. Watch where bubbles slow, where foam lines form, where the surface goes glassy beside a riffle — these are the seams, the resting places.

Big trout don't fight current; they bend it. They hold behind boulders, beneath cut banks, and along the edges where fast water meets slow. Cast upstream of the seam and let the fly drift naturally. Mend your line, keep your tippet long, and don't strike before the take is real.

Reading water is part observation, part memory, and part respect for the fish that live there.`,
  },
  {
    id: "a2",
    image: blog2,
    title: "Cabin Coffee: A Lake-Morning Ritual Worth the Drive",
    excerpt: "Why we wake before the loons, what we brew, and the silence we don't break.",
    author: "Iris Tan",
    date: "Apr 28, 2026",
    readTime: "6 min",
    tag: "Lake Life",
    body: `Lake mornings are a particular kind of quiet. The water is glass, the mist still gathering the night's breath. Wake before the loons — five-thirty if you can — and step out without speaking.

We grind beans the night before. Pour-over on the porch. No phone. We listen to the lake the way you listen to a friend who hasn't called in a while: carefully, all at once.

This is what cabins are for. Not escape, exactly. More like return.`,
  },
  {
    id: "a3",
    image: blog3,
    title: "Bear Country: The Three Rules We Never Break",
    excerpt: "After a decade of grizzly country, here's what we do without thinking.",
    author: "Sage Vance",
    date: "Apr 18, 2026",
    readTime: "9 min",
    tag: "Survival",
    body: `Three rules: store food right, make noise on blind corners, never run.

Bear bags go 200 feet from camp, hung in the bear-hang triangle. We carry bear spray on a chest strap, not buried in a pack. On blind trails, we talk loud or clap every minute or so — bears don't want to meet us either.

If we see a bear, we stop, speak calmly, and back away slow. We never run. Running is a deer's job, and a grizzly knows that better than we do.`,
  },
  {
    id: "a4",
    image: blog4,
    title: "Layering for the Shoulder Season Without Overpacking",
    excerpt: "The four pieces of clothing that handle 90% of fall conditions.",
    author: "Eli Brookes",
    date: "Apr 09, 2026",
    readTime: "7 min",
    tag: "Gear",
    body: `Shoulder seasons are the test. Cold mornings, warm afternoons, surprise rain. We pack four things: a merino base, a midweight fleece, a packable down vest, and a hardshell jacket.

The base layer wicks. The fleece insulates when active. The vest insulates the core when stopped. The shell blocks wind and rain. That's it. No cotton. No spares. Everything earns its place.

Add a beanie and a buff for the cold mornings, and you've covered 28°F to 65°F without overstuffing your pack.`,
  },
  {
    id: "a5",
    image: blog5,
    title: "How to Filter Water in the Backcountry — Three Methods Ranked",
    excerpt: "Squeeze filters, pumps, and chemical tablets compared.",
    author: "Mara Ortiz",
    date: "Mar 31, 2026",
    readTime: "10 min",
    tag: "Skills",
    body: `Squeeze filters are our default — light, fast, and reliable. We use them on most trips under five days. Pump filters are for groups; they're heavier but better for milky alpine water.

Chemical tablets are our backup. They take 30 minutes, taste a little funky, and weigh nothing. We carry them on every trip in a labeled mini-baggie.

The best water source is the highest, fastest, and most exposed to sunlight. Avoid stagnant pools and water near pack-animal trails.`,
  },
  {
    id: "a6",
    image: blog6,
    title: "Why We Walk Slow: Notes on Wilderness Pace",
    excerpt: "The trail will still be there if you stop to listen.",
    author: "Marlow Hayes",
    date: "Mar 22, 2026",
    readTime: "5 min",
    tag: "Reflection",
    body: `We walk slow on purpose. Fast hikers see miles. Slow hikers see the deer at thirty feet, the kingfisher on the snag, the bear track set deep in soft mud.

You don't have to earn the view. You can sit on a stump and let the trail come to you. Wilderness pace is a kind of attention. The trail is generous if you let it be.`,
  },
];

export const projects = [
  { image: p1, title: "Glacier Basin Fly-Out", desc: "Three days, three lakes, brook trout up to 18 inches." },
  { image: p2, title: "Lake Cabin Restoration", desc: "An eight-week rebuild of a 1962 fishing cabin in Wyoming." },
  { image: p3, title: "Backcountry Gear Audit", desc: "Twenty-two essentials weighed, ranked, and used hard." },
  { image: p4, title: "Sierra High Route Thru-Hike", desc: "195 miles, 12 days, one busted boot, zero regrets." },
  { image: p5, title: "Wild Trout Census", desc: "Volunteer monitoring of native cutthroat in headwater streams." },
  { image: p6, title: "Cold Weather Survival Camp", desc: "Three nights below freezing, only tarps and skills." },
];

export const members = [
  { image: m1, name: "Sage V.", quote: "Their fishing guide for the Madison was better than any map I bought.", role: "Bozeman, MT" },
  { image: m2, name: "Eli B.", quote: "I learned to set up a tarp shelter from one of their videos. Used it that summer.", role: "Asheville, NC" },
  { image: m3, name: "Iris T.", quote: "The lake cabin coffee piece made me drive eleven hours to a place I'd never been.", role: "Madison, WI" },
  { image: m4, name: "Mara O.", quote: "Honest gear reviews. No paid hype. That's why I keep coming back.", role: "Bend, OR" },
];

export const tutorials = [
  { image: t1, title: "Tying the Improved Clinch Knot", desc: "The knot we tie before every fish.", duration: "4 min" },
  { image: t2, title: "Building a 1-Match Camp Fire", desc: "Tinder, kindling, lay — every time.", duration: "7 min" },
  { image: t3, title: "Setting up a Backpacking Tent in Wind", desc: "Anchor the windward corner first.", duration: "5 min" },
];

export const gallery = { fishing1, fishing2, camping1, camping2, nature1, nature2, gear1, gear2 };

export const faqs = [
  {
    q: "Do I need a fishing license? Where do I get one?",
    a: "Yes, almost everywhere in the U.S. and Canada. Buy online from the state Department of Fish & Wildlife — usually $20–$35 for a year, often less for a day or week. Carry it on you (paper or phone). Tribal and national park waters often require separate permits.",
  },
  {
    q: "I'm brand new to camping. What gear should I buy first?",
    a: "Shelter, sleep, and footwear. A 3-season tent, a sleeping bag rated for the coldest night you'll camp, an insulated sleeping pad, and well-fitting boots. Borrow or rent the rest until you know what kind of camping you love.",
  },
  {
    q: "What are the ten essentials for hiking safety?",
    a: "Navigation, sun protection, insulation, illumination, first-aid, fire, repair kit, nutrition, hydration, and emergency shelter. Carry them even on short hikes. Conditions change.",
  },
  {
    q: "What's the best fishing knot for beginners?",
    a: "The improved clinch knot. Five turns, pass through the small loop, then through the big loop, wet it, pull tight. It holds 90% of line strength and is easy in the cold.",
  },
  {
    q: "How do I camp in the rain without being miserable?",
    a: "Pitch on high ground, never in a depression. Use a footprint or groundsheet. Vent the tent to reduce condensation. Hang wet gear under a tarp away from sleep space. Bring extra socks. Cook under a separate tarp.",
  },
  {
    q: "What seasons are best for what activities?",
    a: "Spring: trout, wildflowers, fewer crowds. Summer: alpine lakes, long days, peak hiking. Fall: cool fishing, golden aspens, perfect camping weather. Winter: snowshoeing, ice fishing, fireside reading.",
  },
  {
    q: "Are bears really a danger? How worried should I be?",
    a: "More careful than worried. Black bears want your food, not you. Grizzlies want space — give it. Store food properly, make noise on the trail, carry bear spray in grizzly country, and never run. Most bears never see you.",
  },
];

export const stats = [
  { value: 1240, suffix: "+", label: "Trail miles documented" },
  { value: 480, suffix: "+", label: "Lakes mapped" },
  { value: 92, suffix: "k", label: "Newsletter readers" },
  { value: 14, suffix: "yrs", label: "On the water" },
];
