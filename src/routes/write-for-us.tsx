import { createFileRoute } from "@tanstack/react-router";
import { StaticPage } from "./about";

export const Route = createFileRoute("/write-for-us")({
  head: () => ({
    meta: [
      { title: "Write For Us — Exemptia Digital" },
      { name: "description", content: "Pitch a story to Exemptia Digital. We publish contributions from operators, founders and industry experts." },
    ],
    links: [{ rel: "canonical", href: "/write-for-us" }],
  }),
  component: () => (
    <StaticPage
      kicker="Contribute"
      title="Write For Us"
      intro="We publish contributions from operators, founders and subject-matter experts across AI, marketing, technology and business."
      sections={[
        { heading: "What we're looking for", body: "First-hand experience, contrarian analysis, deeply-reported case studies and practical guides that help readers do the work better." },
        { heading: "What we don't publish", body: "Thinly-veiled promotional content, AI-generated filler, or pieces that rehash what's already widely covered." },
        { heading: "How to pitch", body: "Send a 3-5 sentence pitch, plus links to two published pieces, to editors@exemptiadigital.online. We respond within a week." },
      ]}
    />
  ),
});
