import { createFileRoute } from "@tanstack/react-router";
import { trendingPosts } from "@/data/posts";
import { ArticleCard } from "@/components/site/ArticleCard";
import { Sidebar } from "@/components/site/Sidebar";
import { SectionHeader } from "@/components/site/Section";

export const Route = createFileRoute("/trending")({
  head: () => ({
    meta: [
      { title: "Trending — Exemptia Digital" },
      { name: "description", content: "The stories our readers can't stop reading right now." },
    ],
    links: [{ rel: "canonical", href: "/trending" }],
  }),
  component: TrendingPage,
});

function TrendingPage() {
  const posts = trendingPosts(30);
  return (
    <div>
      <section className="border-b border-border bg-section/60">
        <div className="container-page py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Right now</p>
          <h1 className="mt-2 font-heading text-4xl font-bold md:text-5xl">Trending Articles</h1>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
            The stories our readers are spending the most time with this week.
          </p>
        </div>
      </section>
      <div className="container-page grid gap-12 py-12 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div>
          <SectionHeader title="Trending now" kicker={`${posts.length} articles`} />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <ArticleCard key={p.slug} post={p} size="md" />
            ))}
          </div>
        </div>
        <Sidebar />
      </div>
    </div>
  );
}
