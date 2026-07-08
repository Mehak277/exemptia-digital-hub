import { createFileRoute } from "@tanstack/react-router";

type PageProps = {
  title: string;
  kicker: string;
  intro: string;
  sections: { heading: string; body: string }[];
};

export function StaticPage({ title, kicker, intro, sections }: PageProps) {
  return (
    <div className="bg-background min-h-screen">
      <section className="border-b border-border bg-section/40 py-16 text-center">
        <div className="container-page max-w-3xl mx-auto flex flex-col items-center">
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary mb-4">{kicker}</span>
          <h1 className="font-heading text-4xl font-extrabold md:text-5xl lg:text-6xl tracking-tight text-foreground">{title}</h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground">{intro}</p>
        </div>
      </section>
      <div className="container-page py-16">
        <div className="mx-auto max-w-3xl space-y-12">
          {sections.map((s, i) => (
            <div key={i} className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold font-heading text-foreground mb-4">{s.heading}</h2>
              <div className="text-muted-foreground leading-relaxed whitespace-pre-line space-y-4">
                {s.body.split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
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
      kicker="About Us"
      title="About Exemptia Digital"
      intro="Exemptia Digital is a leading digital publication dedicated to empowering the next generation of innovators, marketers, and business leaders with cutting-edge insights and strategies."
      sections={[
        {
          heading: "Our Vision",
          body: "We believe that the intersection of technology, artificial intelligence, and marketing is where the future of business is being built. Our vision is to be the most trusted source of truth for professionals navigating this rapidly evolving digital landscape.\n\nWe aim to demystify complex technologies, uncover hidden trends, and provide actionable playbooks that drive real, measurable growth for modern enterprises.",
        },
        {
          heading: "Who We Are",
          body: "Exemptia Digital was founded by a team of veteran journalists, tech operators, and growth marketers who were frustrated by the noise in traditional tech media. We wanted a publication that didn't just report the news, but explained why it mattered and how to act on it.\n\nToday, our team spans across the globe, bringing diverse perspectives from the heart of Silicon Valley to emerging tech hubs in Europe and Asia.",
        },
        {
          heading: "Our Editorial Standards",
          body: "Accuracy, independence, and depth are the pillars of our editorial process. We do not accept payment for editorial coverage, and our sponsor content is always clearly labeled.\n\nEvery piece published on Exemptia Digital undergoes rigorous fact-checking and is reviewed by subject matter experts to ensure our readers receive the highest quality insights.",
        },
        {
          heading: "Who We Serve",
          body: "Our readership consists of forward-thinking founders, growth marketers, engineering leaders, and executives across DTC, SaaS, and enterprise sectors. Whether you are scaling a startup or transforming a legacy brand, Exemptia Digital provides the intelligence you need to stay ahead of the curve.",
        },
        {
          heading: "Editorial Independence",
          body: "Trust is our most valuable asset. Exemptia Digital maintains a strict firewall between our editorial team and our advertising partners. While we do feature sponsored content, it is always clearly labeled. Our journalists and contributors retain full creative independence to ensure you get unbiased, objective analysis.",
        },
        {
          heading: "Join the Community",
          body: "We are more than a publication; we are a community of operators. We invite you to subscribe to our weekly newsletter, join our discussions, or even pitch a story if you have unique insights to share. Reach out to our editorial team via our Contact page to get involved.",
        },
      ]}
    />
  ),
});
