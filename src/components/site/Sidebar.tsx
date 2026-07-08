import { Link } from "@tanstack/react-router";
import { CATEGORIES, trendingPosts, latestPosts } from "@/data/posts";
import { ArticleCard } from "./ArticleCard";
import { AdBanner } from "./Section";

export function Sidebar() {
  const trending = trendingPosts(6);
  const recent = latestPosts(5);

  return (
    <aside className="space-y-10">
      <form onSubmit={(e) => e.preventDefault()} className="flex gap-2 rounded-full border border-border bg-background p-1.5 shadow-sm">
        <input
          type="search"
          placeholder="Search the magazine…"
          className="flex-1 bg-transparent px-3 text-sm outline-none placeholder:text-muted-foreground"
        />
        <button className="rounded-full bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary-foreground hover:bg-primary/90">
          Go
        </button>
      </form>

      <div>
        <h3 className="mb-4 border-b border-border pb-2 font-heading text-lg font-bold">Trending Articles</h3>
        <ol className="space-y-4">
          {trending.map((p, i) => (
            <li key={p.slug} className="flex gap-3">
              <span className="font-heading text-3xl font-bold leading-none text-primary/30">
                {String(i + 1).padStart(2, "0")}
              </span>
              <Link to="/article/$slug" params={{ slug: p.slug }} className="group">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-primary">{p.category}</p>
                <h4 className="mt-1 line-clamp-3 font-heading text-sm font-semibold leading-snug group-hover:text-primary">
                  {p.title}
                </h4>
              </Link>
            </li>
          ))}
        </ol>
      </div>

      <AdBanner label="Sidebar Advertisement" size="square" />

      <div>
        <h3 className="mb-4 border-b border-border pb-2 font-heading text-lg font-bold">Recent Posts</h3>
        <div className="space-y-3">
          {recent.map((p) => (
            <ArticleCard key={p.slug} post={p} size="row" />
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-gradient-to-br from-primary to-accent p-6 text-primary-foreground">
        <h3 className="font-heading text-lg font-bold">Get the Weekly Brief</h3>
        <p className="mt-1 text-sm opacity-90">
          The best of AI, marketing and technology — one crisp email every Thursday.
        </p>
        <form onSubmit={(e) => e.preventDefault()} className="mt-4 space-y-2">
          <input
            type="email"
            required
            placeholder="you@company.com"
            className="w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-sm placeholder:text-white/70 outline-none focus:border-white/50"
          />
          <button className="w-full rounded-lg bg-white px-3 py-2 text-sm font-semibold text-primary hover:bg-white/90">
            Subscribe free
          </button>
        </form>
      </div>

      <div>
        <h3 className="mb-4 border-b border-border pb-2 font-heading text-lg font-bold">Categories</h3>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <Link
              key={c.slug}
              to="/category/$slug"
              params={{ slug: c.slug }}
              className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground/80 hover:border-primary hover:text-primary"
            >
              {c.name}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
