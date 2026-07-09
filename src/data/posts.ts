// Auto-generated demo data for Exemptia Digital
// 120+ articles across many categories with realistic-looking content.

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categorySlug: string;
  tags: string[];
  author: string;
  authorTitle: string;
  date: string; // ISO
  readingTime: number;
  image: string;
  content: string;
  featured?: boolean;
  editorsPick?: boolean;
  trending?: boolean;
  sponsored?: boolean;
};

export const CATEGORIES: { name: string; slug: string; blurb: string }[] = [
  { name: "Artificial Intelligence", slug: "artificial-intelligence", blurb: "Frontier models, tooling, and the real-world impact of AI." },
  { name: "Marketing", slug: "marketing", blurb: "Strategy, creative, and growth playbooks that actually work." },
  { name: "SEO", slug: "seo", blurb: "Search visibility, technical audits, and content strategy." },
  { name: "Google Ads", slug: "google-ads", blurb: "Performance Max, Search, YouTube — deep tactical guides." },
  { name: "Meta Ads", slug: "meta-ads", blurb: "Facebook and Instagram advertising in the post-iOS world." },
  { name: "Social Media", slug: "social-media", blurb: "Community, distribution and creator economy trends." },
  { name: "Email Marketing", slug: "email-marketing", blurb: "Deliverability, lifecycle, and retention playbooks." },
  { name: "Affiliate Marketing", slug: "affiliate-marketing", blurb: "Partner programs, offers, and monetization." },
  { name: "Content Marketing", slug: "content-marketing", blurb: "Editorial systems that scale organic revenue." },
  { name: "Technology", slug: "technology", blurb: "Product, engineering and the platforms behind them." },
  { name: "Business", slug: "business", blurb: "Operators, finance and industry-shaping strategy." },
  { name: "Startups", slug: "startups", blurb: "Founders, funding rounds and go-to-market stories." },
  { name: "Software Reviews", slug: "reviews", blurb: "Hands-on reviews of the tools operators actually use." },
  { name: "Case Studies", slug: "case-studies", blurb: "Real numbers from real campaigns and products." },
  { name: "Tutorials", slug: "tutorials", blurb: "Step-by-step guides for marketers and builders." },
  { name: "Industry News", slug: "industry-news", blurb: "The stories moving marketing, AI and technology." },
  { name: "Opinion", slug: "opinion", blurb: "Sharp takes from operators and thinkers." },
  { name: "Press Releases", slug: "press-releases", blurb: "Announcements from the companies we cover." },
  { name: "Sponsored", slug: "sponsored", blurb: "Paid partner stories, clearly labeled." },
  { name: "Cyber Security", slug: "cyber-security", blurb: "Threats, defense, and privacy for modern teams." },
  { name: "Productivity", slug: "productivity", blurb: "Workflows and systems for high-output teams." },
];

const AUTHORS: { name: string; title: string }[] = [
  { name: "Ava Sinclair", title: "Editor-in-Chief" },
  { name: "Rahul Mehta", title: "Senior Marketing Editor" },
  { name: "Sofia Nakamura", title: "AI Correspondent" },
  { name: "Marcus Boone", title: "Growth Editor" },
  { name: "Priya Kapoor", title: "SEO Editor" },
  { name: "Daniel Osei", title: "Business Correspondent" },
  { name: "Lena Fischer", title: "Tech Reporter" },
  { name: "Julian Ortiz", title: "Startups Editor" },
  { name: "Hana Rezaei", title: "Product Reviewer" },
  { name: "Owen Whitfield", title: "Opinion Columnist" },
  { name: "Chiamaka Ade", title: "Content Strategist" },
  { name: "Yuki Tanaka", title: "Social Media Editor" },
];

// Unsplash-hosted royalty-free imagery, grouped by category for relevance.
const CATEGORY_IMAGES: Record<string, string[]> = {
  "artificial-intelligence": [
    "photo-1620712943543-bcc4688e7485", "photo-1677442136019-21780ecad995",
    "photo-1555255707-c07966088b7b", "photo-1518770660439-4636190af475",
    "photo-1526374965328-7f61d4dc18c5", "photo-1675271591211-126ad94e495d",
    "photo-1451187580459-43490279c0fa", "photo-1620712943543-bcc4688e7485",
    "photo-1535223289827-42f1e9919769", "photo-1589254065878-42c9da997008",
    "photo-1593508512255-86ab42a8e620", "photo-1507146426996-ef05306b995a",
  ],
  "marketing": [
    "photo-1557838923-2985c318be48", "photo-1460925895917-afdab827c52f",
    "photo-1432888498266-38ffec3eaf0a", "photo-1533750516457-a7f992034fec",
    "photo-1542744173-8e7e53415bb0", "photo-1552664730-d307ca884978",
    "photo-1517245386807-bb43f82c33c4", "photo-1499951360447-b19be8fe80f5",
    "photo-1504868584819-f8e8b4b6d7e3", "photo-1553877522-43269d4ea984",
    "photo-1486312338219-ce68d2c6f44d", "photo-1517048676732-d65bc937f952",
    "photo-1551288049-bebda4e38f71", "photo-1533749047139-189de3cf06d3"
  ],
  "seo": [
    "photo-1551288049-bebda4e38f71", "photo-1460925895917-afdab827c52f",
    "photo-1504868584819-f8e8b4b6d7e3", "photo-1573164713988-8665fc963095",
    "photo-1432888498266-38ffec3eaf0a", "photo-1516321318423-f06f85e504b3",
    "photo-1454165804606-c3d57bc86b40", "photo-1486312338219-ce68d2c6f44d",
    "photo-1556761175-5973dc0f32b7", "photo-1543286386-2e659306cd6c"
  ],
  "technology": [
    "photo-1451187580459-43490279c0fa", "photo-1518770660439-4636190af475",
    "photo-1550751827-4bd374c3f58b", "photo-1504384308090-c894fdcc538d",
    "photo-1525547719571-a2d4ac8945e2", "photo-1519389950473-47ba0277781c",
    "photo-1498050108023-c5249f4df085", "photo-1531297484001-80022131f5a1",
    "photo-1488590528505-98d2b5aba04b", "photo-1518005020951-eccb494ad742",
    "photo-1483058712412-4245e9b90334", "photo-1496307653780-42ee777d4833",
  ],
  "business": [
    "photo-1486406146926-c627a92ad1ab", "photo-1600880292203-757bb62b4baf",
    "photo-1507679799987-c73779587ccf", "photo-1454165804606-c3d57bc86b40",
    "photo-1556761175-4b46a572b786", "photo-1522071820081-009f0129c71c",
    "photo-1515169067868-5387ec356754", "photo-1559526324-4b87b5e36e44",
    "photo-1542744173-8e7e53415bb0", "photo-1552664730-d307ca884978",
  ],
  "startups": [
    "photo-1522071820081-009f0129c71c", "photo-1515169067868-5387ec356754",
    "photo-1559526324-4b87b5e36e44", "photo-1531206715517-5c0ba140b2b8",
    "photo-1556761175-4b46a572b786", "photo-1454165804606-c3d57bc86b40",
    "photo-1542744173-8e7e53415bb0", "photo-1432888498266-38ffec3eaf0a",
    "photo-1497215728101-856f4ea42174", "photo-1497366216548-37526070297c"
  ],
  "default": [
    "photo-1498050108023-c5249f4df085", "photo-1531297484001-80022131f5a1",
    "photo-1488590528505-98d2b5aba04b", "photo-1518005020951-eccb494ad742",
    "photo-1483058712412-4245e9b90334", "photo-1496307653780-42ee777d4833",
    "photo-1449157291145-7efd050a4d0e", "photo-1460574283810-2aab119d8511",
    "photo-1439337153520-7082a56a81f4", "photo-1497604401993-f2e922e5cb0a",
    "photo-1487958449943-2429e8be8625", "photo-1721322800607-8c38375eef04",
    "photo-1618160702438-9b02ab6515c9", "photo-1517245386807-bb43f82c33c4"
  ]
};

const HERO_IMAGES = CATEGORY_IMAGES.default;

export function img(seed: number, categorySlug = "default", w = 1600, h = 900) {
  const pool = CATEGORY_IMAGES[categorySlug] || CATEGORY_IMAGES.default;
  // Use sequential indexing to absolutely guarantee no duplicates in short spans
  const id = pool[seed % pool.length];
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;
}

// A pool of realistic, non-repeating title templates per category area.
const TITLE_POOL: Record<string, string[]> = {
  "artificial-intelligence": [
    "How Multimodal AI Is Rewriting the Rules of Content Production",
    "The Real Cost of Running a Frontier Model in Production",
    "AI Agents Move From Demo to Deployment: What Actually Works",
    "Fine-Tuning vs. RAG: A Practical Guide for Marketing Teams",
    "Inside the Open-Source Models Closing the Gap on GPT-Class Systems",
    "Prompt Engineering Is Dead. Long Live Context Engineering.",
    "Why Every SaaS Company Is Suddenly Shipping an AI Copilot",
    "The Quiet Rise of Small Language Models Inside the Enterprise",
    "Generative Video Is Now Good Enough to Ship. Here's the Workflow.",
    "How AI Is Reshaping the Economics of Freelance Creative Work",
  ],
  "marketing": [
    "The New Full-Funnel Playbook for Lean Marketing Teams",
    "Attribution Is Broken. Here's What Operators Are Doing Instead.",
    "Brand vs. Performance: The False Choice Killing Growth",
    "How Consumer Behavior Shifted in the Last 18 Months",
    "Building a Category-Defining Message From First Principles",
    "The Return of Direct Mail (and Why It's Working Again)",
    "Positioning for a World Where Your Audience Has Infinite Choice",
    "What B2B Marketers Get Wrong About Demand Generation",
    "Inside the Marketing Stacks of Ten Fast-Growing DTC Brands",
    "Lifecycle Marketing Is Becoming the New Growth Advantage",
  ],
  "seo": [
    "Google's AI Overviews and What They Mean for Publisher Traffic",
    "The Technical SEO Checklist That Still Matters in 2026",
    "How to Audit a Site's Content Portfolio Like an Editor",
    "Topical Authority Beats Keyword Coverage. Here's Why.",
    "Programmatic SEO Works — When You Actually Ship Value",
    "Core Web Vitals: The Metrics That Move Rankings Now",
    "Why Internal Linking Is the Most Underrated SEO Lever",
    "The E-E-A-T Framework, Explained for Practitioners",
    "How to Recover From a Google Update Without Panicking",
    "Search Everywhere Optimization: Beyond Google",
  ],
  "google-ads": [
    "Performance Max After 12 Months: What Actually Scales",
    "Search Campaigns Aren't Dead. They're Just Different Now.",
    "How to Structure a Google Ads Account for Sustainable Growth",
    "Bidding Strategies Ranked: A Practical Benchmark Study",
    "The Real Story Behind Rising CPCs in Competitive Verticals",
    "YouTube Ads for B2B: A Framework That Actually Converts",
    "First-Party Data and the Future of Google Ads Targeting",
  ],
  "meta-ads": [
    "Meta's Advantage+ Playbook: What's Working in Post-iOS Advertising",
    "Creative Testing Frameworks for Facebook and Instagram in 2026",
    "The Death of Micro-Targeting and the Rise of Creative Signals",
    "How to Build a Winning UGC Ads Pipeline",
    "Attribution After Aggregated Event Measurement",
    "The New CBO vs ABO Debate — And What the Data Says",
  ],
  "social-media": [
    "The Creator Economy Enters Its Consolidation Era",
    "Threads, Bluesky, X: Where Attention Is Actually Moving",
    "Short-Form Video Is Still the Highest-ROI Channel",
    "How to Build a Social Team Without Hiring a Social Team",
    "The Comment Section Is the New Front Page",
  ],
  "email-marketing": [
    "Email Deliverability in a Post-Gmail-Update World",
    "Lifecycle Email Programs That Compound Revenue",
    "Segmentation Isn't a Tactic. It's an Operating Model.",
    "Why Newsletters Are Quietly Beating Social for Distribution",
  ],
  "affiliate-marketing": [
    "The New Affiliate Playbook for Software Reviews",
    "Building an Affiliate Program From Zero to $1M in Payouts",
    "Why the Best Affiliates Now Look Like Media Companies",
  ],
  "content-marketing": [
    "Content Marketing After AI: What Still Compounds",
    "The Editorial Operating System for Modern SaaS",
    "How to Measure Content That Doesn't Convert Directly",
    "Long-Form Is Winning Again. Here's the Data.",
  ],
  "technology": [
    "The Chip Shortage Is Back, and It's Different This Time",
    "Cloud Repatriation Is Real. Here's Who's Doing It.",
    "Edge Computing Finds Its Killer Use Case",
    "The Quiet Return of Native Apps in an AI World",
    "Inside the Infrastructure Powering Modern AI Startups",
    "Why Rust Adoption Is Accelerating in Production Systems",
  ],
  "business": [
    "The New Rules of Fundraising in a Cautious Capital Market",
    "How Operators Are Thinking About Margins in 2026",
    "Remote Work Is Restructuring the Global Talent Market",
    "PE-Backed Rollups Are Reshaping B2B Software",
    "The Efficient Growth Playbook Every Board Now Wants",
  ],
  "startups": [
    "The Rise of the Tiny, Profitable AI Startup",
    "How Solo Founders Are Building $10M Businesses",
    "Inside the New Wave of Vertical AI Companies",
    "Why Community-Led Growth Is the New Product-Led Growth",
  ],
  "reviews": [
    "We Tried Every Major AI Writing Tool. Here's the Verdict.",
    "The Best Analytics Platforms for Growing Marketing Teams",
    "SEO Suites Compared: Ahrefs vs Semrush vs the Challengers",
    "The Best CRM for Under-50-Person Teams in 2026",
    "Newsletter Platforms Reviewed: Beehiiv, Substack, Ghost",
    "Automation Tools That Actually Save Marketing Teams Hours",
  ],
  "case-studies": [
    "How a DTC Brand Cut CAC by 42% Without Cutting Spend",
    "The Content Bet That 10x'd Organic Revenue in 18 Months",
    "From $0 to $2M ARR With a Two-Person Team",
    "Rebuilding a Broken Paid Search Account: A Case Study",
    "How One Publisher Doubled Newsletter Revenue in a Year",
  ],
  "tutorials": [
    "How to Set Up GA4 Correctly (Actually)",
    "Building Your First AI Agent Without Writing Code",
    "A Practical Guide to Server-Side Tracking in 2026",
    "How to Audit Your Site's Information Architecture",
    "Writing a Content Brief That Editors Actually Use",
  ],
  "industry-news": [
    "The Ad Industry Reacts to Google's Latest Policy Shift",
    "Major Platform Update Reshapes Programmatic Buying",
    "Regulators Move on AI Training Data Practices",
    "A Landmark Acquisition Signals a Shift in Martech",
  ],
  "opinion": [
    "Stop Building Newsletters for LinkedIn Screenshots",
    "The Marketing Industry Has a Storytelling Problem",
    "In Defense of Boring, Predictable, Compounding Channels",
    "AI Slop Is a Distribution Problem, Not a Content Problem",
  ],
  "press-releases": [
    "Exemptia Digital Announces Editorial Expansion Into AI Coverage",
    "New Advertising Partnership Program Launches for 2026",
    "Exemptia Digital Names New Executive Editor",
  ],
  "sponsored": [
    "Sponsored: How Modern Teams Ship Faster With Unified Tooling",
    "Sponsored: The State of B2B Buying, According to New Research",
    "Sponsored: A New Approach to Full-Funnel Attribution",
    "Sponsored: Why Enterprise Buyers Are Rethinking Their Stack",
  ],
  "cyber-security": [
    "The New Threat Landscape Facing Marketing Teams",
    "Why Every Marketer Should Care About Consent Management",
    "Zero-Trust Isn't Just for Enterprises Anymore",
  ],
  "productivity": [
    "The Modern Operator's Weekly Review",
    "Async by Default: How Fast Teams Actually Communicate",
    "The Deep Work Playbook for Managers",
  ],
};

const EXCERPTS = [
  "A grounded look at what's changing, what's noise, and what smart operators are doing right now.",
  "We spoke with a dozen practitioners to separate the hype from the actual, measurable shifts in the market.",
  "The playbook that worked last year is quietly being rewritten. Here's what the leading teams are shipping instead.",
  "Behind the headline numbers is a nuanced story about strategy, execution and the compounding advantage of doing the boring work well.",
  "A practical breakdown of the frameworks, tools and org design decisions that are separating the winners from everyone else.",
  "From first principles to shipped campaigns — this is how modern marketing and growth teams are approaching the problem.",
];

const CONTENT_BLOCKS: string[] = [
  `<p>The last twelve months have compressed what used to be a decade of change into a handful of quarters. Marketers, founders and engineering leaders are all confronting the same underlying question: which of yesterday's playbooks still compound, and which have quietly stopped working?</p>`,
  `<p>Talk to any operator running a fast-growing brand and you'll hear a similar story. The channels are noisier, the platforms are more opaque, and the traditional levers — cheap paid acquisition, easy organic reach, predictable lifecycle economics — are all under pressure at the same time.</p>`,
  `<h2>What the leading teams are doing differently</h2>
  <p>The teams pulling ahead aren't chasing every trend. If anything, they are consolidating: fewer channels, deeper investment, more discipline about measurement, and a willingness to run experiments long enough to see them through.</p>
  <p>The pattern shows up across categories. A DTC brand we spoke with reduced its active channel count from nine to four in a single quarter and grew contribution margin by 18%. A B2B software company killed half its content program and doubled traffic to the pieces that remained.</p>`,
  `<h3>Three shifts that keep showing up</h3>
  <ul>
    <li><strong>Consolidation over expansion.</strong> Fewer, better bets. Deeper investment per bet.</li>
    <li><strong>First-party everything.</strong> Owned audiences, owned data, owned distribution.</li>
    <li><strong>Craft as competitive advantage.</strong> When every team has access to the same tooling, execution quality is the moat.</li>
  </ul>`,
  `<blockquote>"The advantage isn't in knowing the tactic. Every marketer knows the tactic. The advantage is in the boring, disciplined execution of it, week after week, until it compounds." — Head of Growth, Series B SaaS</blockquote>`,
  `<h2>The role of AI in the new stack</h2>
  <p>It's impossible to write about the current moment without talking about AI, but the way the best teams are using it is quieter than the discourse would suggest. It isn't about replacing the work — it's about compressing the cycle time between idea, execution and learning.</p>
  <p>One editor we interviewed described her team's workflow as "human-led, AI-accelerated." Ideas start with a person, are drafted collaboratively with a model, edited aggressively, and shipped only after a human editor has signed off. The tooling changed. The standards didn't.</p>`,
  `<h2>What to measure — and what to ignore</h2>
  <p>The measurement conversation has genuinely shifted. Multi-touch attribution, which dominated marketing conversations for years, is being replaced by a mix of incrementality testing, media-mix modeling and, quietly, more qualitative judgement. The organizations doing this well share a common trait: they treat measurement as a strategic capability, not a reporting function.</p>
  <ol>
    <li>Pick two or three durable metrics that map to enterprise value.</li>
    <li>Instrument them honestly, even when the numbers are uncomfortable.</li>
    <li>Run fewer, larger experiments and give them room to breathe.</li>
  </ol>`,
  `<h2>Where this is heading</h2>
  <p>The next twelve months will belong to teams that combine disciplined execution with a genuine point of view. The tooling advantage is gone. The information advantage is gone. What's left is judgement, taste, and the willingness to commit to a bet long enough to see it work.</p>
  <p>That's not a fashionable answer. But it's the one every high-performing operator we spoke with kept returning to, in different words.</p>`,
  `<h3>Bottom line</h3>
  <p>Ignore the noise. Pick a small number of bets you can defend from first principles. Instrument them honestly. Give them time. The rest — the tools, the trends, the tactics — will keep changing. The fundamentals will not.</p>`,
];

function pickN<T>(arr: T[], n: number, offset: number): T[] {
  const out: T[] = [];
  for (let i = 0; i < n; i++) out.push(arr[(offset + i) % arr.length]);
  return out;
}

function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

const TAG_POOL = [
  "growth", "strategy", "ai", "analytics", "creative", "b2b", "dtc", "saas",
  "search", "paid-media", "organic", "content", "leadership", "operators",
  "trends", "playbook", "case-study", "tools", "workflow", "measurement",
];

function buildContent(seed: number, title: string): string {
  const intro = `<p class="lead"><strong>${title}.</strong> ${EXCERPTS[seed % EXCERPTS.length]}</p>`;
  const body = pickN(CONTENT_BLOCKS, CONTENT_BLOCKS.length, seed).join("\n");
  return intro + "\n" + body;
}

function generatePosts(): Post[] {
  const posts: Post[] = [];
  let seed = 0;
  const now = Date.now();

  for (const cat of CATEGORIES) {
    const titles = TITLE_POOL[cat.slug] ?? TITLE_POOL["marketing"];
    for (let i = 0; i < 6; i++) {
      const title = titles[i % titles.length];
      const author = AUTHORS[seed % AUTHORS.length];
      const daysAgo = (seed * 3 + i) % 240;
      const date = new Date(now - daysAgo * 24 * 60 * 60 * 1000).toISOString();
      const readingTime = 5 + ((seed * 7) % 10);
      const slug = slugify(title) + "-" + seed.toString(36);
      posts.push({
        slug,
        title,
        excerpt: EXCERPTS[seed % EXCERPTS.length],
        category: cat.name,
        categorySlug: cat.slug,
        tags: pickN(TAG_POOL, 4, seed),
        author: author.name,
        authorTitle: author.title,
        date,
        readingTime,
        image: img(seed, cat.slug),
        content: buildContent(seed, title),
        featured: seed % 9 === 0,
        editorsPick: seed % 7 === 0,
        trending: seed % 5 === 0,
        sponsored: cat.slug === "sponsored",
      });
      seed++;
    }
  }
  // Sort by date desc for "latest"
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

// Dynamically import JSON posts from NeuroSEO (or other webhook receivers)
const importedFiles = import.meta.glob('../content/blog/*.json', { eager: true });
const externalPosts: Post[] = Object.values(importedFiles).map((mod: any) => mod.default || mod);

export const POSTS: Post[] = [...externalPosts, ...generatePosts()].sort((a, b) => (a.date < b.date ? 1 : -1));

export const HERO_POST: Post = POSTS[0];

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function postsByCategory(slug: string): Post[] {
  return POSTS.filter((p) => p.categorySlug === slug);
}

export function relatedPosts(post: Post, n = 3): Post[] {
  return POSTS.filter((p) => p.slug !== post.slug && p.categorySlug === post.categorySlug).slice(0, n);
}

export function trendingPosts(n = 15): Post[] {
  return POSTS.filter((p) => p.trending).slice(0, n);
}
export function editorsPicks(n = 12): Post[] {
  return POSTS.filter((p) => p.editorsPick).slice(0, n);
}
export function featuredPosts(n = 6): Post[] {
  return POSTS.filter((p) => p.featured).slice(0, n);
}
export function sponsoredPosts(n = 8): Post[] {
  return POSTS.filter((p) => p.sponsored).slice(0, n);
}
export function latestPosts(n = 24): Post[] {
  return POSTS.slice(0, n);
}
export function mostReadThisWeek(n = 6): Post[] {
  return [...POSTS].sort((a, b) => (a.title.length < b.title.length ? 1 : -1)).slice(0, n);
}

export function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

// Small hint so linter doesn't complain about unused HERO_IMAGES.
export const _HERO_IMAGES = HERO_IMAGES;
