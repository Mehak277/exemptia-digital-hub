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
import { Clock, TrendingUp, Mail, Users, BookOpen, Zap } from "lucide-react";
import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { toast } from "sonner";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const categoryImages: Record<string, string> = {
  "artificial-intelligence": "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
  "marketing": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  "seo": "https://images.unsplash.com/photo-1572177812156-58036aae439c?auto=format&fit=crop&q=80&w=800",
  "google-ads": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  "meta-ads": "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
  "social-media": "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=800",
  "email-marketing": "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
  "affiliate-marketing": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
};

function HomePage() {
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

  const trending = trendingPosts(15);
  const editors = editorsPicks(12);
  const latest = latestPosts(24);
  const sponsored = sponsoredPosts(8);
  const featured = featuredPosts(12);
  const mostRead = mostReadThisWeek(6);

  const breakingPost = latest[0];
  const mainFeature = latest[1];
  const sideList = latest.slice(2, 5);

  return (
    <div className="bg-[#eaf6f6]/50 min-h-screen">
      {/* SaaS-Style Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden flex items-center justify-center border-b border-border">
        {/* Background Image with Blur */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-[8px] scale-105"
          style={{ backgroundImage: `url('/hero-main.jpg')` }}
        />
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-white/70 dark:bg-black/70 backdrop-blur-sm" />
        
        <div className="container-page relative z-10 flex flex-col items-center text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h1 className="font-heading text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl leading-[1.1] drop-shadow-sm">
              Your Go-To Resource for Marketing, AI & Business Growth
            </h1>
            <p className="mt-6 text-lg text-slate-800 dark:text-slate-200 md:text-xl font-medium drop-shadow-sm">
              Actionable guides, expert insights, and proven strategies to help you grow your brand online.
            </p>
            <div className="mt-8 flex justify-center">
              <a 
                href="#latest-stories" 
                className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-base font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:-translate-y-1"
              >
                Explore Latest Articles
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* Latest Stories Section (Matches the Screenshot Layout) */}
      <section id="latest-stories" className="container-page py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
          <div>
            <h2 className="mb-8 font-heading text-3xl font-bold text-foreground tracking-tight">Latest Stories</h2>
            <div className="grid gap-8 md:grid-cols-[1.4fr_1fr]">
              {/* Featured Large Post */}
              <Link
                to="/article/$slug"
                params={{ slug: mainFeature.slug }}
                className="group flex flex-col"
              >
                <div className="overflow-hidden rounded-2xl border border-border/50 bg-muted/20">
                  <img
                    src={mainFeature.image}
                    alt={mainFeature.title}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-5 font-heading text-2xl font-bold leading-tight text-foreground group-hover:text-primary transition-colors">
                  {mainFeature.title}
                </h3>
                <p className="mt-3 text-sm font-medium text-muted-foreground">
                  {formatDate(mainFeature.date)} · {mainFeature.readingTime} min read
                </p>
              </Link>

              {/* Smaller List */}
              <div className="flex flex-col gap-8">
                {sideList.map((post) => (
                  <Link
                    key={post.slug}
                    to="/article/$slug"
                    params={{ slug: post.slug }}
                    className="group flex gap-4 items-start"
                  >
                    <div className="h-20 w-32 shrink-0 overflow-hidden rounded-lg border border-border/50">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div>
                      <h4 className="font-heading text-sm font-bold leading-snug text-foreground group-hover:text-primary transition-colors line-clamp-3">
                        {post.title}
                      </h4>
                      <p className="mt-1 text-xs font-medium text-muted-foreground">
                        {formatDate(post.date)} · {post.readingTime} min
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Trending Sidebar */}
          <div>
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h3 className="mb-6 font-heading text-lg font-bold text-foreground tracking-tight">Trending</h3>
              <div className="flex flex-col gap-5">
                {trending.slice(0, 5).map((post, index) => (
                  <Link
                    key={post.slug}
                    to="/article/$slug"
                    params={{ slug: post.slug }}
                    className="group flex gap-4 items-start"
                  >
                    <span className="font-heading text-2xl font-bold text-foreground/20 group-hover:text-primary transition-colors">
                      {index + 1}
                    </span>
                    <div>
                      <h4 className="font-heading text-sm font-bold leading-snug text-foreground group-hover:text-primary transition-colors">
                        {post.title}
                      </h4>
                      <p className="mt-1 text-xs font-medium text-muted-foreground">
                        {formatDate(post.date)} · {post.readingTime} min read
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editor's Picks (Premium Bento-style Grid) */}
      <section className="container-page py-20">
        <SectionHeader
          kicker="Editorial"
          title="Editor's Picks"
          actionLabel="View all"
          actionTo="/latest"
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {editors.slice(4, 8).map((post) => (
            <Link
              key={post.slug}
              to="/article/$slug"
              params={{ slug: post.slug }}
              className="group flex flex-col relative rounded-2xl bg-white dark:bg-slate-900 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-200/60 dark:border-slate-800/60 p-3 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.1)] hover:border-primary/30"
            >
              <div className="overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800">
                <img
                  src={post.image}
                  alt={post.title}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col flex-1 mt-4 px-2 pb-2">
                <h3 className="font-heading text-lg font-bold leading-snug text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="mt-auto pt-4 flex items-center gap-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  {formatDate(post.date)}
                  <span>·</span>
                  {post.readingTime} min
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest + Sidebar (Restored) */}
      <section className="border-y border-border bg-section/60">
        <div className="container-page grid gap-12 py-20 lg:grid-cols-[minmax(0,1fr)_340px]">
          <div>
            <SectionHeader kicker="Fresh off the press" title="More Articles" />
            
            {/* Kept the cleaner 4-column style cards but inside a 2/3 column layout for the sidebar */}
            <div className="grid gap-8 sm:grid-cols-2">
              {latest.slice(8, 10).map((p) => (
                <ArticleCard key={p.slug} post={p} size="lg" />
              ))}
            </div>
            <div className="my-12 relative overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-900/50 p-1 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 dark:via-white/5 to-transparent skew-x-12 translate-x-[-100%] animate-[shimmer_3s_infinite]" />
              <AdBanner label="In-Content Advertisement" size="wide" />
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {latest.slice(10, 19).map((p) => (
                <ArticleCard key={p.slug} post={p} size="md" />
              ))}
            </div>
          </div>
          
          <Sidebar />
        </div>
      </section>

      {/* Additional Articles Section before Popular Topics */}
      <section className="container-page py-20">
        <SectionHeader kicker="Sponsored" title="Industry Spotlight" actionLabel="View all" actionTo="/category/marketing" />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {sponsored.slice(0, 4).map((post) => (
            <ArticleCard key={post.slug} post={post} size="md" />
          ))}
        </div>
      </section>

      {/* Popular Topics (Interactive Tiles) */}
      <section className="container-page py-24">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Discover</span>
            <h2 className="mt-2 font-heading text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">Popular Topics</h2>
          </div>
          <Link to="/categories" className="inline-flex h-10 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 px-5 text-sm font-bold text-foreground transition-colors hover:bg-slate-200 dark:hover:bg-slate-700 gap-1.5">
            View All <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {CATEGORIES.slice(0, 8).map((topic) => (
            <Link
              key={topic.slug}
              to="/category/$slug"
              params={{ slug: topic.slug }}
              className="group relative flex flex-col items-start gap-4 overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:border-primary/50"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-colors duration-500" />
              <div className="h-12 w-12 shrink-0 overflow-hidden rounded-2xl shadow-inner">
                <img 
                  src={categoryImages[topic.slug] || "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=100"} 
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div>
                <span className="font-heading text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                  {topic.name}
                </span>
                <span className="block mt-1 text-xs font-semibold text-muted-foreground opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  Explore Now &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* NEW: 3D Floating Newsletter Card */}
      <section className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-900 border-t border-border">
        {/* Decorative background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="container-page relative z-10 max-w-5xl">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 dark:bg-black px-6 py-16 text-center sm:px-12 lg:px-16 lg:py-20 shadow-2xl border border-slate-700/50">
            {/* Inner dynamic glows */}
            <div className="absolute -top-32 -left-32 h-64 w-64 rounded-full bg-blue-500/30 blur-[80px]" />
            <div className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-purple-500/30 blur-[80px]" />
            
            <div className="relative z-10 mx-auto max-w-2xl">
              <span className="inline-flex items-center justify-center rounded-2xl bg-white/10 p-3 shadow-inner mb-6 backdrop-blur-md border border-white/5">
                <Mail className="h-8 w-8 text-white" />
              </span>
              <h2 className="font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl mb-4">
                Stay ahead of the curve.
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-lg text-slate-300 leading-relaxed">
                Join 50,000+ marketers and founders. Get actionable growth strategies, AI insights, and industry news delivered straight to your inbox.
              </p>
              <form onSubmit={handleSubscribe} className="mt-10 flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email"
                  className="flex-1 rounded-2xl border border-slate-700 bg-white/5 px-6 py-4 text-base text-white shadow-inner placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white/10 transition-all backdrop-blur-sm"
                />
                <button
                  type="submit"
                  disabled={isSubscribing}
                  className="shrink-0 rounded-2xl bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-[0_0_20px_-5px_var(--tw-colors-primary)] transition-all hover:-translate-y-1 hover:shadow-[0_0_25px_0_var(--tw-colors-primary)] hover:bg-primary/90 disabled:opacity-70 disabled:hover:translate-y-0"
                >
                  {isSubscribing ? "Subscribing..." : "Subscribe Now"}
                </button>
              </form>
              <p className="mt-5 text-sm font-medium text-slate-400">
                No fluff. Just value. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
