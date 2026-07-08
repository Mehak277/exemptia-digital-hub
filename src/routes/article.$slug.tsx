import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { getPost, relatedPosts, formatDate, POSTS } from "@/data/posts";
import { ArticleCard } from "@/components/site/ArticleCard";
import { Sidebar } from "@/components/site/Sidebar";
import { AdBanner } from "@/components/site/Section";
import { Clock, Twitter, Facebook, Linkedin, LinkIcon } from "lucide-react";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { toast } from "sonner";

export const Route = createFileRoute("/article/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Article not found" }, { name: "robots", content: "noindex" }] };
    }
    const p = loaderData.post;
    return {
      meta: [
        { title: `${p.title} — Exemptia Digital` },
        { name: "description", content: p.excerpt },
        { property: "og:title", content: p.title },
        { property: "og:description", content: p.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:image", content: p.image },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: p.image },
      ],
      links: [{ rel: "canonical", href: `/article/${p.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: p.title,
            image: [p.image],
            datePublished: p.date,
            author: [{ "@type": "Person", name: p.author }],
            publisher: {
              "@type": "Organization",
              name: "Exemptia Digital",
            },
            description: p.excerpt,
          }),
        },
      ],
    };
  },
  component: ArticlePage,
});

function ArticlePage() {
  const { post } = Route.useLoaderData();
  const related = relatedPosts(post, 3);
  const currentIndex = POSTS.findIndex((p) => p.slug === post.slug);
  const prev = POSTS[currentIndex + 1];
  const next = POSTS[currentIndex - 1];

  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubscribing(true);
    try {
      await addDoc(collection(db, "subscribers"), {
        email,
        subscribedAt: serverTimestamp(),
      });
      toast.success("Successfully subscribed to the newsletter!");
      setEmail("");
    } catch (error) {
      console.error("Error adding subscriber: ", error);
      toast.error("Failed to subscribe. Please try again.");
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <article>
      {/* Breadcrumb + hero */}
      <div className="border-b border-border bg-section/60">
        <div className="container-page py-8">
          <nav className="mb-4 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link to="/category/$slug" params={{ slug: post.categorySlug }} className="hover:text-primary">
              {post.category}
            </Link>
            <span>/</span>
            <span className="truncate text-foreground">{post.title}</span>
          </nav>
          <div className="max-w-4xl">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              {post.category}
            </span>
            <h1 className="mt-4 font-heading text-3xl font-bold leading-tight tracking-tight md:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground md:text-xl">{post.excerpt}</p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-heading font-semibold text-primary">
                  {post.author.split(" ").map((s: string) => s[0]).slice(0, 2).join("")}
                </div>
                <div>
                  <p className="font-medium text-foreground">{post.author}</p>
                  <p className="text-xs">{post.authorTitle}</p>
                </div>
              </div>
              <span>·</span>
              <span>{formatDate(post.date)}</span>
              <span>·</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="h-4 w-4" /> {post.readingTime} min read
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container-page py-10">
        <div className="mb-10 overflow-hidden rounded-2xl border border-border">
          <img src={post.image} alt={post.title} className="w-full object-cover max-h-[400px] md:max-h-[500px]" />
        </div>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div>

            {/* TOC */}
            <aside className="mb-10 rounded-2xl border border-border bg-section p-5">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Table of Contents
              </p>
              <ol className="grid gap-2 text-sm text-foreground/85 md:grid-cols-2">
                <li>1. Introduction</li>
                <li>2. What the leading teams are doing differently</li>
                <li>3. The role of AI in the new stack</li>
                <li>4. What to measure — and what to ignore</li>
                <li>5. Where this is heading</li>
                <li>6. Bottom line</li>
              </ol>
            </aside>

            <div
              className="prose-article"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="my-10">
              <AdBanner label="In-Article Advertisement" size="wide" />
            </div>

            {/* Tags */}
            <div className="mt-10 flex flex-wrap gap-2">
              {post.tags.map((t: string) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-section px-3 py-1 text-xs font-medium text-foreground/80"
                >
                  #{t}
                </span>
              ))}
            </div>

            {/* Author box */}
            <div className="mt-10 flex gap-4 rounded-2xl border border-border bg-section p-6">
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-primary text-lg font-semibold text-primary-foreground">
                {post.author.split(" ").map((s: string) => s[0]).slice(0, 2).join("")}
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">Written by</p>
                <h3 className="font-heading text-lg font-semibold">{post.author}</h3>
                <p className="text-sm text-muted-foreground">{post.authorTitle}</p>
                <p className="mt-2 text-sm text-foreground/80">
                  {post.author} covers {post.category.toLowerCase()} for Exemptia Digital, reporting
                  on the shifts reshaping how modern teams operate.
                </p>
              </div>
            </div>

            {/* Prev/Next */}
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {prev && (
                <Link
                  to="/article/$slug"
                  params={{ slug: prev.slug }}
                  className="group rounded-2xl border border-border p-5 hover:border-primary"
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    ← Previous
                  </p>
                  <p className="mt-1 font-heading font-semibold group-hover:text-primary line-clamp-2">
                    {prev.title}
                  </p>
                </Link>
              )}
              {next && (
                <Link
                  to="/article/$slug"
                  params={{ slug: next.slug }}
                  className="group rounded-2xl border border-border p-5 text-right hover:border-primary"
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Next →
                  </p>
                  <p className="mt-1 font-heading font-semibold group-hover:text-primary line-clamp-2">
                    {next.title}
                  </p>
                </Link>
              )}
            </div>

            {/* Related */}
            {related.length > 0 && (
              <div className="mt-14">
                <h2 className="mb-6 font-heading text-2xl font-bold">Related Articles</h2>
                <div className="grid gap-6 md:grid-cols-3">
                  {related.map((p) => (
                    <ArticleCard key={p.slug} post={p} size="md" />
                  ))}
                </div>
              </div>
            )}

            {/* Comments placeholder */}
            <div className="mt-14 rounded-2xl border border-border bg-section p-6">
              <h3 className="font-heading text-lg font-semibold">Comments</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Join the conversation. Comments open to subscribers.
              </p>
              <div className="mt-4 space-y-4">
                <div className="rounded-xl border border-border bg-background p-4">
                  <p className="text-sm font-semibold">Reader</p>
                  <p className="mt-1 text-sm text-foreground/80">
                    Great piece — the point about consolidation over expansion mirrors what
                    we're seeing on our team.
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-background p-4">
                  <p className="text-sm font-semibold">Operator</p>
                  <p className="mt-1 text-sm text-foreground/80">
                    Would love a follow-up specifically on how mid-market teams are handling
                    measurement.
                  </p>
                </div>
              </div>
            </div>

            {/* Inline newsletter */}
            <div className="mt-10 rounded-2xl bg-gradient-to-br from-primary to-accent p-8 text-primary-foreground">
              <h3 className="font-heading text-xl font-bold">Enjoyed this article?</h3>
              <p className="mt-1 text-sm opacity-90">
                Get the weekly Exemptia Digital brief — free, curated, no filler.
              </p>
              <form onSubmit={handleSubscribe} className="mt-4 flex flex-col gap-2 sm:flex-row">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  required
                  className="flex-1 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm placeholder:text-white/70 outline-none focus:border-white/50"
                  disabled={isSubscribing}
                />
                <button 
                  disabled={isSubscribing}
                  className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-primary disabled:opacity-70"
                >
                  {isSubscribing ? "Subscribing..." : "Subscribe free"}
                </button>
              </form>
            </div>
          </div>

          <Sidebar />
        </div>
      </div>
    </article>
  );
}
