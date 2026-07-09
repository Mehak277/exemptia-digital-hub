import { Link } from "@tanstack/react-router";
import { Search, Menu, X, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { SearchModal } from "./SearchModal";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mainNav = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Latest", to: "/latest" },
    { label: "Blog", to: "/categories" },
  ] as const;

  return (
    <>
      <header className="sticky top-4 z-40 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mb-4">
        <div
          className={`transition-all duration-300 rounded-2xl border ${
            isScrolled 
              ? "bg-white/60 backdrop-blur-xl saturate-150 border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.08)]" 
              : "bg-white/40 backdrop-blur-md saturate-150 border-white/30 shadow-sm"
          }`}
        >
          <div className="flex h-16 items-center justify-between gap-6 px-6">
          <Link to="/" className="flex items-center gap-2 transition-transform hover:scale-105 active:scale-95">
            <img src="/logo.png" alt="Exemptia Digital" className="h-10 w-10 rounded-full object-cover" />
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
                activeProps={{ className: "text-primary font-semibold" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              aria-label="Search"
              onClick={() => setSearchOpen(true)}
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
              onClick={() => setMobileMenuOpen((v) => !v)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border lg:hidden"
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-border bg-background lg:hidden">
            <div className="container-page grid gap-1 py-3">
              {mainNav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-md px-2 py-2 text-sm font-medium hover:bg-section"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
        </div>
      </header>
      
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
