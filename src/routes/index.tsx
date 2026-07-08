import { createFileRoute, Link } from "@tanstack/react-router";
import {
  POSTS,
  postsByCategory,
  editorsPicks,
  trendingPosts,
  latestPosts,
  sponsoredPosts,
  featuredPosts,
  mostReadThisWeek,
  formatDate,
  CATEGORIES,
} from "@/data/posts";
import { ArticleCard } from "@/components/site/ArticleCard";
import { SectionHeader, AdBanner } from "@/components/site/Section";
import { Sidebar } from "@/components/site/Sidebar";
import { Clock, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  const hero = POSTS[0];
  const heroSecondary = POSTS.slice(1, 6);
  const trending = trendingPosts(15);
  const editors = editorsPicks(12);
  const latest = latestPosts(24);
  const sponsored = sponsoredPosts(8);
  const featured = featuredPosts(12);
  const mostRead = mostReadThisWeek(6);

  const catBlocks: { slug: string; title: string; count: number }[] = [
    { slug: "marketing", title: "Marketing", count: 6 },
    { slug: "artificial-intelligence", title: "Artificial Intelligence", count: 6 },
    { slug: "technology", title: "Technology", count: 6 },
    { slug: "business", title: "Business", count: 6 },
    { slug: "seo", title: "SEO", count: 4 },
    { slug: "google-ads", title: "Google Ads", count: 4 },
    { slug: "meta-ads", title: "Meta Ads", count: 4 },
    { slug: "content-marketing", title: "Content Marketing", count: 4 },
    { slug: "social-media", title: "Social Media", count: 4 },
    { slug: "affiliate-marketing", title: "Affiliate Marketing", count: 3 },
    { slug: "reviews", title: "Software Reviews", count: 6 },
    { slug: "case-studies", title: "Case Studies", count: 5 },
    { slug: "tutorials", title: "Tutorials", count: 5 },
    { slug: "industry-news", title: "Industry News", count: 4 },
    { slug: "opinion", title: "Opinion", count: 4 },
    { slug: "startups", title: "Startup Stories", count: 4 },
    { slug: "press-releases", title: "Press Releases", count: 3 },
  ];

  return (
    <div>
      {/* HERO */}
      <section className="border-b border-border bg-gradient-to-b from-section to-background">
        <div className="container-page grid gap-8 py-10 lg:grid-cols-3">
          <Link
            to="/article/$slug"
            params={{ slug: hero.slug }}
            className="group relative lg:col-span-2 overflow-hidden rounded-3xl border border-border bg-card shadow-sm"
          >
            <div className="aspect-[16/10] overflow-hidden bg-section">
              <img
                src={hero.image}
                alt={hero.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-2 text-xs">
                <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 font-semibold uppercase tracking-wider text-primary-foreground">
                  Featured Story
                </span>
                <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 font-semibold uppercase tracking-wider text-primary">
                  {hero.category}
                </span>
              </div>
              <h1 className="mt-4 font-heading text-3xl font-bold leading-tight tracking-tight md:text-5xl group-hover:text-primary">
                {hero.title}
              </h1>
              <p className="mt-3 max-w-2xl text-base text-muted-foreground md:text-lg">
                {hero.excerpt}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">{hero.author}</span>
                <span>·</span>
                <span>{formatDate(hero.date)}</span>
                <span>·</span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-4 w-4" /> {hero.readingTime} min read
                </span>
              </div>
            </div>
          </Link>

          <div className="grid gap-4">
            {heroSecondary.map((p) => (
              <Link
                key={p.slug}
                to="/article/$slug"
                params={{ slug: p.slug }}
                className="group flex gap-4 rounded-2xl border border-border bg-card p-3 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-24 w-32 flex-shrink-0 rounded-xl object-cover"
                />
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-primary">
                    {p.category}
                  </p>
                  <h3 className="mt-1 line-clamp-3 font-heading text-sm font-semibold leading-snug group-hover:text-primary">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-[11px] text-muted-foreground">
                    {formatDate(p.date)} · {p.readingTime} min
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trending strip */}
      <section className="border-b border-border bg-background">
        <div className="container-page flex items-center gap-6 overflow-x-auto py-4">
          <span className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-semibold text-primary">
            <TrendingUp className="h-4 w-4" /> Trending Today
          </span>
          <div className="flex items-center gap-8">
            {trending.slice(0, 8).map((p) => (
              <Link
                key={p.slug}
                to="/article/$slug"
                params={{ slug: p.slug }}
                className="whitespace-nowrap text-sm text-foreground/80 hover:text-primary"
              >
                {p.title.length > 68 ? p.title.slice(0, 68) + "…" : p.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="container-page py-4">
        <AdBanner label="Top Banner Advertisement" size="wide" />
      </div>

      {/* Editor's Picks */}
      <section className="container-page py-12">
        <SectionHeader
          kicker="Editorial"
          title="Editor's Picks"
          actionLabel="View all"
          actionTo="/latest"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {editors.slice(0, 4).map((p) => (
            <ArticleCard key={p.slug} post={p} size="md" />
          ))}
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {editors.slice(4, 8).map((p) => (
            <ArticleCard key={p.slug} post={p} size="md" />
          ))}
        </div>
      </section>

      {/* Latest + Sidebar */}
      <section className="border-y border-border bg-section/60">
        <div className="container-page grid gap-10 py-14 lg:grid-cols-[minmax(0,1fr)_340px]">
          <div>
            <SectionHeader kicker="Fresh off the press" title="Latest Articles" />
            <div className="grid gap-6 md:grid-cols-2">
              {latest.slice(0, 2).map((p) => (
                <ArticleCard key={p.slug} post={p} size="lg" />
              ))}
            </div>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {latest.slice(2, 8).map((p) => (
                <ArticleCard key={p.slug} post={p} size="md" />
              ))}
            </div>
            <div className="my-8">
              <AdBanner label="In-Content Advertisement" size="wide" />
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {latest.slice(8, 17).map((p) => (
                <ArticleCard key={p.slug} post={p} size="md" />
              ))}
            </div>
          </div>
          <Sidebar />
        </div>
      </section>

      {/* Featured stories */}
      <section className="container-page py-14">
        <SectionHeader kicker="Highlighted" title="Featured Stories" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {featured.slice(0, 8).map((p) => (
            <ArticleCard key={p.slug} post={p} size="md" />
          ))}
        </div>
      </section>

      {/* Category blocks */}
      {catBlocks.map((cb, idx) => {
        const catPosts = postsByCategory(cb.slug).slice(0, cb.count);
        if (catPosts.length === 0) return null;
        const bg = idx % 2 === 0 ? "bg-background" : "bg-section/60 border-y border-border";
        return (
          <section key={cb.slug} className={`${bg} py-14`}>
            <div className="container-page">
              <SectionHeader
                kicker="Category"
                title={cb.title}
                actionLabel="See more"
                actionTo={`/category/${cb.slug}`}
              />
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {catPosts.slice(0, 3).map((p) => (
                  <ArticleCard key={p.slug} post={p} size="md" />
                ))}
              </div>
              {catPosts.length > 3 && (
                <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {catPosts.slice(3).map((p) => (
                    <ArticleCard key={p.slug} post={p} size="row" />
                  ))}
                </div>
              )}
            </div>
          </section>
        );
      })}

      {/* Sponsored */}
      <section className="border-y border-border bg-section/60 py-14">
        <div className="container-page">
          <SectionHeader kicker="Partner content" title="Sponsored Articles" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {sponsored.slice(0, 8).map((p) => (
              <ArticleCard key={p.slug} post={p} size="md" />
            ))}
          </div>
        </div>
      </section>

      {/* Most Read */}
      <section className="container-page py-14">
        <SectionHeader kicker="This week" title="Most Read" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mostRead.map((p, i) => (
            <Link
              key={p.slug}
              to="/article/$slug"
              params={{ slug: p.slug }}
              className="group relative flex gap-5 rounded-2xl border border-border bg-card p-5 shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all"
            >
              <span className="font-heading text-5xl font-bold leading-none text-primary/20">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-primary">
                  {p.category}
                </p>
                <h3 className="mt-1 line-clamp-3 font-heading text-base font-semibold leading-snug group-hover:text-primary">
                  {p.title}
                </h3>
                <p className="mt-2 text-xs text-muted-foreground">
                  {p.author} · {p.readingTime} min
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular categories cloud */}
      <section className="border-t border-border bg-section/60 py-14">
        <div className="container-page">
          <SectionHeader kicker="Explore" title="Popular Categories" />
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
            {CATEGORIES.map((c) => (
              <Link
                key={c.slug}
                to="/category/$slug"
                params={{ slug: c.slug }}
                className="group rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-md"
              >
                <h3 className="font-heading text-base font-semibold group-hover:text-primary">
                  {c.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{c.blurb}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="container-page py-16">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-accent p-10 text-primary-foreground md:p-16">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] opacity-80">Newsletter</p>
              <h2 className="mt-2 font-heading text-3xl font-bold leading-tight md:text-4xl">
                The stories shaping AI, marketing and technology — in your inbox every Thursday.
              </h2>
              <p className="mt-3 max-w-xl text-primary-foreground/85">
                Join 40,000+ operators reading Exemptia Digital. One curated edition, no filler.
              </p>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                placeholder="you@company.com"
                className="flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm placeholder:text-white/70 outline-none focus:border-white/60"
              />
              <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-sm hover:bg-white/90">
                Subscribe free
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
