import { useState, useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { Search, X, Clock, ArrowRight } from "lucide-react";
import { POSTS, trendingPosts, formatDate } from "@/data/posts";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const searchQuery = query.toLowerCase().trim();
  
  const results = searchQuery 
    ? POSTS.filter(post => 
        post.title.toLowerCase().includes(searchQuery) ||
        post.category.toLowerCase().includes(searchQuery) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery))
      ).slice(0, 5)
    : trendingPosts(5);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-background/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative z-50 w-full max-w-2xl transform overflow-hidden rounded-2xl border border-border bg-card shadow-2xl transition-all mx-4">
        <div className="relative flex items-center border-b border-border px-4 py-4">
          <Search className="h-5 w-5 text-muted-foreground" />
          <input
            ref={inputRef}
            type="text"
            className="flex-1 bg-transparent px-4 text-base md:text-lg outline-none placeholder:text-muted-foreground text-foreground"
            placeholder="Search articles, topics, or authors..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button 
            onClick={onClose}
            className="rounded-full p-1.5 hover:bg-muted text-muted-foreground transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-2">
          {results.length > 0 ? (
            <div className="space-y-1">
              <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {searchQuery ? "Search Results" : "Trending Topics"}
              </div>
              {results.map((post) => (
                <Link
                  key={post.slug}
                  to="/article/$slug"
                  params={{ slug: post.slug }}
                  onClick={onClose}
                  className="group flex items-center gap-4 rounded-xl p-3 transition-colors hover:bg-muted"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-16 w-24 rounded-lg object-cover shadow-sm transition-transform group-hover:scale-105"
                  />
                  <div className="flex-1 overflow-hidden">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                      <span className="font-medium text-primary">{post.category}</span>
                      <span>•</span>
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <h4 className="truncate font-heading text-sm font-semibold text-foreground group-hover:text-primary">
                      {post.title}
                    </h4>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100 hidden sm:block" />
                </Link>
              ))}
            </div>
          ) : (
            <div className="px-4 py-12 text-center text-sm text-muted-foreground">
              No results found for "<span className="text-foreground font-medium">{query}</span>"
              <p className="mt-2 text-xs">Try searching for something else like "Marketing" or "AI".</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
