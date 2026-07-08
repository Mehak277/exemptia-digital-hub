import { createFileRoute } from "@tanstack/react-router";
import { StaticPage } from "./about";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [{ title: "Disclaimer — Exemptia Digital" }, { name: "description", content: "Editorial and advertising disclaimer for Exemptia Digital." }],
    links: [{ rel: "canonical", href: "/disclaimer" }],
  }),
  component: () => (
    <StaticPage
      kicker="Legal"
      title="Disclaimer"
      intro="Exemptia Digital publishes reporting, analysis and opinion for informational purposes."
      sections={[
        { heading: "No professional advice", body: "Our content is not financial, legal or professional advice. Consult a qualified professional for guidance specific to your situation." },
        { heading: "Sponsored content", body: "Sponsored articles are clearly labeled. Editorial independence is maintained across all non-sponsored coverage." },
        { heading: "Affiliate links", body: "Some links may be affiliate links. When they are, this does not influence editorial coverage." },
      ]}
    />
  ),
});
