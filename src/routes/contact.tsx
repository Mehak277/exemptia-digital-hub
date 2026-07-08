import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Exemptia Digital" },
      { name: "description", content: "Get in touch with the editors and business team at Exemptia Digital." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div>
      <section className="border-b border-border bg-section/40 py-16 text-center">
        <div className="container-page max-w-3xl mx-auto flex flex-col items-center">
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary mb-4">Contact</span>
          <h1 className="font-heading text-4xl font-extrabold md:text-5xl lg:text-6xl tracking-tight text-foreground">Get in touch</h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground">
            Story tips, pitches, partnerships — we read everything.
          </p>
        </div>
      </section>
      <div className="container-page grid gap-10 py-12 lg:grid-cols-3">
        <form onSubmit={(e) => e.preventDefault()} className="lg:col-span-2 space-y-4 rounded-2xl border border-border bg-card p-6 shadow-sm">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="block">
              <span className="text-sm font-medium">Your name</span>
              <input className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary" />
            </label>
            <label className="block">
              <span className="text-sm font-medium">Email</span>
              <input type="email" className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary" />
            </label>
          </div>
          <label className="block">
            <span className="text-sm font-medium">Subject</span>
            <input className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary" />
          </label>
          <label className="block">
            <span className="text-sm font-medium">Message</span>
            <textarea rows={6} className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary" />
          </label>
          <button className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
            Send message
          </button>
        </form>
        <aside className="space-y-6">
          <div className="rounded-2xl border border-border bg-section p-6">
            <h3 className="font-heading text-lg font-semibold">Editorial</h3>
            <p className="mt-1 text-sm text-muted-foreground">Story tips & pitches</p>
            <p className="mt-2 text-sm font-medium">editors@exemptiadigital.online</p>
          </div>
          <div className="rounded-2xl border border-border bg-section p-6">
            <h3 className="font-heading text-lg font-semibold">Advertising</h3>
            <p className="mt-1 text-sm text-muted-foreground">Sponsorships & partnerships</p>
            <p className="mt-2 text-sm font-medium">advertise@exemptiadigital.online</p>
          </div>
          <div className="rounded-2xl border border-border bg-section p-6">
            <h3 className="font-heading text-lg font-semibold">Press</h3>
            <p className="mt-1 text-sm text-muted-foreground">Media & press releases</p>
            <p className="mt-2 text-sm font-medium">press@exemptiadigital.online</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
