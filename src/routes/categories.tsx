import { createFileRoute, Link } from "@tanstack/react-router";
import { CATEGORIES, postsByCategory } from "@/data/posts";

export const Route = createFileRoute("/categories")({
  head: () => ({
    meta: [
      { title: "All Categories — Exemptia Digital" },
      { name: "description", content: "Browse every category on Exemptia Digital — from AI and marketing to reviews and case studies." },
    ],
    links: [{ rel: "canonical", href: "/categories" }],
  }),
  component: CategoriesPage,
});

function CategoriesPage() {
  return (
    <div>
      <section className="border-b border-border bg-section/60">
        <div className="container-page py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Explore</p>
          <h1 className="mt-2 font-heading text-4xl font-bold md:text-5xl">All Categories</h1>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
            Every beat we cover, from AI to advertising.
          </p>
        </div>
      </section>
      <div className="container-page py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c) => (
            <Link
              key={c.slug}
              to="/category/$slug"
              params={{ slug: c.slug }}
              className="group rounded-2xl border border-border bg-card p-6 shadow-sm hover:-translate-y-0.5 hover:border-primary hover:shadow-md transition-all"
            >
              <h2 className="font-heading text-xl font-bold group-hover:text-primary">{c.name}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{c.blurb}</p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-primary">
                {postsByCategory(c.slug).length} articles →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
