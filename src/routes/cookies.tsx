import { createFileRoute } from "@tanstack/react-router";
import { StaticPage } from "./about";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [{ title: "Cookie Policy — Exemptia Digital" }, { name: "description", content: "How Exemptia Digital uses cookies." }],
    links: [{ rel: "canonical", href: "/cookies" }],
  }),
  component: () => (
    <StaticPage
      kicker="Legal"
      title="Cookie Policy"
      intro="This page describes the cookies we use and why."
      sections={[
        { heading: "Essential cookies", body: "Required for the site to function correctly — for example remembering that you've dismissed a banner." },
        { heading: "Analytics cookies", body: "Help us understand which stories resonate and how the site is being used, in aggregate and without identifying you personally." },
        { heading: "Managing cookies", body: "You can control cookies through your browser settings at any time." },
      ]}
    />
  ),
});
