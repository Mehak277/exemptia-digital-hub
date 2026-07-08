import { createFileRoute } from "@tanstack/react-router";

type PageProps = {
  title: string;
  kicker: string;
  intro: string;
  sections: { heading: string; body: string }[];
};

export function StaticPage({ title, kicker, intro, sections }: PageProps) {
  return (
    <div>
      <section className="border-b border-border bg-section/60">
        <div className="container-page py-14">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">{kicker}</p>
          <h1 className="mt-2 font-heading text-4xl font-bold md:text-5xl">{title}</h1>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">{intro}</p>
        </div>
      </section>
      <div className="container-page py-12">
        <div className="prose-article">
          {sections.map((s, i) => (
            <div key={i}>
              <h2>{s.heading}</h2>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Exemptia Digital" },
      { name: "description", content: "Exemptia Digital is a premium publication covering AI, technology, marketing, business and advertising." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: () => (
    <StaticPage
      kicker="About"
      title="About Exemptia Digital"
      intro="Exemptia Digital is a premium publication for the operators building what's next in AI, technology, marketing, business and advertising."
      sections={[
        {
          heading: "Our mission",
          body: "We report on the shifts reshaping how modern teams work. Every story is designed to help founders, marketers, engineers and executives make better decisions in a landscape that changes faster every year.",
        },
        {
          heading: "What we cover",
          body: "Artificial intelligence, marketing strategy, digital advertising, SEO, content, technology, business, startups, product reviews, case studies and industry news.",
        },
        {
          heading: "Editorial standards",
          body: "Exemptia Digital maintains a strict separation between editorial and sponsored content. Sponsored stories are clearly labeled. Our editorial team retains full independence over every piece we publish.",
        },
        {
          heading: "Get in touch",
          body: "Have a story tip, a pitch, or an idea? We'd love to hear from you. Reach the editors through our contact page.",
        },
      ]}
    />
  ),
});
