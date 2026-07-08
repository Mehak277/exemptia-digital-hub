import { Link } from "@tanstack/react-router";
import { CATEGORIES } from "@/data/posts";
import { Search, Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);
  const mainNav = [
    { label: "Latest", to: "/latest" },
    { label: "Trending", to: "/trending" },
    { label: "Categories", to: "/categories" },
    { label: "Reviews", to: "/category/reviews" },
    { label: "Advertise", to: "/advertise" },
    { label: "Write For Us", to: "/write-for-us" },
    { label: "Contact", to: "/contact" },
  ] as const;

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/85 backdrop-blur-xl">
      <div className="border-b border-border/70 bg-section/70 py-1.5 text-xs text-muted-foreground">
        <div className="container-page flex items-center justify-between gap-4">
          <span className="hidden sm:block">Marketing • Technology • AI • Business • Advertising</span>
          <div className="flex items-center gap-4">
            <Link to="/about" className="hover:text-foreground">About</Link>
            <Link to="/advertise" className="hover:text-foreground">Advertise</Link>
            <Link to="/newsletter" className="hover:text-foreground">Newsletter</Link>
          </div>
        </div>
      </div>

      <div className="container-page flex h-16 items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary font-heading text-lg font-bold text-primary-foreground">E</span>
          <span className="font-heading text-xl font-bold tracking-tight">
            Exemptia<span className="text-primary"> Digital</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {mainNav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            aria-label="Search"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-section hover:text-foreground"
          >
            <Search className="h-4 w-4" />
          </button>
          <Link
            to="/newsletter"
            className="hidden rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5 hover:bg-primary/90 sm:inline-flex"
          >
            Subscribe
          </Link>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="container-page grid gap-1 py-3">
            {mainNav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm font-medium hover:bg-section"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="border-t border-border bg-background">
        <div className="container-page flex items-center gap-6 overflow-x-auto py-2 text-xs font-medium text-muted-foreground scrollbar-none">
          {CATEGORIES.slice(0, 14).map((c) => (
            <Link
              key={c.slug}
              to="/category/$slug"
              params={{ slug: c.slug }}
              className="whitespace-nowrap hover:text-primary"
            >
              {c.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
