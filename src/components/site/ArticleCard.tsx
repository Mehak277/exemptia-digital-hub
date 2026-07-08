import { Link } from "@tanstack/react-router";
import type { Post } from "@/data/posts";
import { formatDate } from "@/data/posts";
import { Clock } from "lucide-react";

type Size = "sm" | "md" | "lg" | "xl" | "row";

export function ArticleCard({ post, size = "md" }: { post: Post; size?: Size }) {
  if (size === "row") {
    return (
      <Link
        to="/article/$slug"
        params={{ slug: post.slug }}
        className="group flex gap-4 rounded-xl p-2 transition-colors hover:bg-section"
      >
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          className="h-20 w-28 flex-shrink-0 rounded-lg object-cover"
        />
        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-primary">
            {post.category}
          </p>
          <h3 className="mt-1 font-heading text-sm font-semibold leading-snug line-clamp-2 group-hover:text-primary">
            {post.title}
          </h3>
          <p className="mt-1 text-xs text-muted-foreground">
            {formatDate(post.date)} · {post.readingTime} min
          </p>
        </div>
      </Link>
    );
  }

  const imgClass =
    size === "xl"
      ? "aspect-[16/10] w-full"
      : size === "lg"
      ? "aspect-[16/10] w-full"
      : size === "sm"
      ? "aspect-[16/10] w-full"
      : "aspect-[16/10] w-full";

  const titleClass =
    size === "xl"
      ? "text-3xl md:text-4xl font-bold leading-tight"
      : size === "lg"
      ? "text-xl md:text-2xl font-bold leading-tight"
      : size === "sm"
      ? "text-base font-semibold leading-snug"
      : "text-lg font-semibold leading-snug";

  return (
    <Link
      to="/article/$slug"
      params={{ slug: post.slug }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="overflow-hidden bg-section">
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          className={`${imgClass} object-cover transition-transform duration-500 group-hover:scale-105`}
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary">
            {post.category}
          </span>
          {post.sponsored && (
            <span className="inline-flex items-center rounded-full bg-success/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-success">
              Sponsored
            </span>
          )}
        </div>
        <h3 className={`${titleClass} font-heading text-foreground line-clamp-3 group-hover:text-primary`}>
          {post.title}
        </h3>
        {size !== "sm" && (
          <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
        )}
        <div className="mt-auto flex items-center justify-between pt-2 text-xs text-muted-foreground">
          <span className="font-medium text-foreground/80">{post.author}</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {post.readingTime} min · {formatDate(post.date)}
          </span>
        </div>
      </div>
    </Link>
  );
}
