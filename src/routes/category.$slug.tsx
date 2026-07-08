import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CATEGORIES, postsByCategory } from "@/data/posts";
import { ArticleCard } from "@/components/site/ArticleCard";
import { Sidebar } from "@/components/site/Sidebar";
import { SectionHeader } from "@/components/site/Section";

export const Route = createFileRoute("/category/$slug")({
  loader: ({ params }) => {
    const cat = CATEGORIES.find((c) => c.slug === params.slug);
    if (!cat) throw notFound();
    return { category: cat, posts: postsByCategory(cat.slug) };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Category not found" }, { name: "robots", content: "noindex" }] };
    const { category } = loaderData;
    return {
      meta: [
        { title: `${category.name} — Exemptia Digital` },
        { name: "description", content: category.blurb },
        { property: "og:title", content: `${category.name} — Exemptia Digital` },
        { property: "og:description", content: category.blurb },
      ],
      links: [{ rel: "canonical", href: `/category/${category.slug}` }],
    };
  },
  component: CategoryPage,
});

function CategoryPage() {
  const { category, posts } = Route.useLoaderData();
  const featured = posts[0];

  return (
    <div>
      <section className="border-b border-border bg-section/60">
        <div className="container-page py-12">
          <nav className="mb-4 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <span className="text-foreground">{category.name}</span>
          </nav>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Category</p>
          <h1 className="mt-2 font-heading text-4xl font-bold tracking-tight md:text-5xl">
            {category.name}
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground">{category.blurb}</p>
        </div>
      </section>

      <div className="container-page grid gap-12 py-12 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div>
          {featured && (
            <div className="mb-10">
              <ArticleCard post={featured} size="xl" />
            </div>
          )}
          <SectionHeader title={`All in ${category.name}`} kicker={`${posts.length} articles`} />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.slice(1).map((p: import("@/data/posts").Post) => (
              <ArticleCard key={p.slug} post={p} size="md" />
            ))}
          </div>
          {posts.length <= 1 && (
            <p className="text-muted-foreground">More stories in this category coming soon.</p>
          )}
        </div>
        <Sidebar />
      </div>
    </div>
  );
}
