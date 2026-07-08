import { Link } from "@tanstack/react-router";
import { CATEGORIES } from "@/data/posts";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-20 border-t border-border bg-section">
      <div className="container-page grid gap-12 py-16 lg:grid-cols-5 lg:gap-8">
        <div className="lg:col-span-2 lg:pr-8">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="Exemptia Digital" className="h-10 w-10 rounded-full object-cover" />
            <span className="font-heading text-xl font-bold tracking-tight">
              Exemptia<span className="text-primary"> Digital</span>
            </span>
          </Link>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            A trusted digital publication covering AI, technology, marketing, business,
            advertising and innovation. Reporting for the operators building what's next.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-6 flex max-w-md gap-2 rounded-full border border-border bg-background p-1.5 shadow-sm"
          >
            <input
              type="email"
              required
              placeholder="Your email address"
              className="flex-1 bg-transparent px-3 text-sm outline-none placeholder:text-muted-foreground"
            />
            <button className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
              Subscribe
            </button>
          </form>
        </div>

        <div className="lg:col-span-3 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:gap-12">
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
              Categories
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {CATEGORIES.slice(0, 6).map((c) => (
                <li key={c.slug}>
                  <Link to="/category/$slug" params={{ slug: c.slug }} className="hover:text-primary">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
              More Topics
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {CATEGORIES.slice(6, 12).map((c) => (
                <li key={c.slug}>
                  <Link to="/category/$slug" params={{ slug: c.slug }} className="hover:text-primary">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
              Company
            </h4>
            <ul className="mt-4 space-y-3 text-sm font-medium text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page py-6 text-center text-sm text-muted-foreground">
          <p>© {year} Exemptia Digital. All rights reserved. Designed for operators.</p>
        </div>
      </div>
    </footer>
  );
}
