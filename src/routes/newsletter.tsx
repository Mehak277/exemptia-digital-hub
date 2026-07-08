import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/newsletter")({
  head: () => ({
    meta: [
      { title: "Newsletter — Exemptia Digital" },
      { name: "description", content: "Subscribe to the Exemptia Digital weekly brief — AI, marketing and technology in your inbox every Thursday." },
    ],
    links: [{ rel: "canonical", href: "/newsletter" }],
  }),
  component: NewsletterPage,
});

function NewsletterPage() {
  return (
    <div className="container-page py-16">
      <div className="mx-auto max-w-2xl rounded-3xl bg-gradient-to-br from-primary to-accent p-10 text-primary-foreground md:p-14">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] opacity-80">Newsletter</p>
        <h1 className="mt-2 font-heading text-3xl font-bold md:text-4xl">The Weekly Brief</h1>
        <p className="mt-3 opacity-90">
          One curated edition every Thursday covering AI, marketing, technology and business —
          for operators who don't have time for filler.
        </p>
        <form onSubmit={(e) => e.preventDefault()} className="mt-6 flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            placeholder="you@company.com"
            className="flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm placeholder:text-white/70 outline-none"
          />
          <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary">
            Subscribe free
          </button>
        </form>
        <p className="mt-4 text-xs opacity-75">Join 40,000+ readers. Unsubscribe anytime.</p>
      </div>
    </div>
  );
}
