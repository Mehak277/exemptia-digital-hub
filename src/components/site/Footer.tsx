import { Link } from "@tanstack/react-router";
import { CATEGORIES } from "@/data/posts";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-20 border-t border-border bg-section">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary font-heading text-lg font-bold text-primary-foreground">E</span>
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

        <div>
          <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
            Popular Categories
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {CATEGORIES.slice(0, 8).map((c) => (
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
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            <li><Link to="/advertise" className="hover:text-primary">Advertise With Us</Link></li>
            <li><Link to="/write-for-us" className="hover:text-primary">Write For Us</Link></li>
            <li><Link to="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-primary">Terms & Conditions</Link></li>
            <li><Link to="/disclaimer" className="hover:text-primary">Disclaimer</Link></li>
            <li><Link to="/cookies" className="hover:text-primary">Cookie Policy</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-5 text-xs text-muted-foreground md:flex-row">
          <p>© {year} Exemptia Digital. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-primary">Twitter</a>
            <a href="#" className="hover:text-primary">LinkedIn</a>
            <a href="#" className="hover:text-primary">Facebook</a>
            <a href="#" className="hover:text-primary">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
