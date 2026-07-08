import { createFileRoute } from "@tanstack/react-router";
import { StaticPage } from "./about";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [{ title: "Terms & Conditions — Exemptia Digital" }, { name: "description", content: "The terms that govern your use of Exemptia Digital." }],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: () => (
    <StaticPage
      kicker="Legal"
      title="Terms & Conditions"
      intro="By using Exemptia Digital you agree to these terms."
      sections={[
        { heading: "Use of the site", body: "Content is provided for informational purposes. You may share and cite our articles with attribution." },
        { heading: "Intellectual property", body: "All content is © Exemptia Digital unless otherwise stated. Contributors retain the rights to their bylined pieces." },
        { heading: "Liability", body: "Exemptia Digital is not liable for decisions made based on content published on the site." },
      ]}
    />
  ),
});
