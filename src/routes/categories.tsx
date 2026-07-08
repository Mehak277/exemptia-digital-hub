import { createFileRoute, Link } from "@tanstack/react-router";
import { CATEGORIES, postsByCategory, img } from "@/data/posts";

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
          {CATEGORIES.map((c, i) => (
            <Link
              key={c.slug}
              to="/category/$slug"
              params={{ slug: c.slug }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm hover:-translate-y-0.5 hover:border-primary hover:shadow-md transition-all"
            >
              <div className="aspect-video w-full overflow-hidden bg-muted">
                <img src={img(i, 600, 400)} alt={c.name} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h2 className="font-heading text-xl font-bold group-hover:text-primary">{c.name}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{c.blurb}</p>
                <div className="mt-auto pt-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {postsByCategory(c.slug).length} articles →
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
