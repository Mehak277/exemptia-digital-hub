import { createFileRoute } from "@tanstack/react-router";
import { StaticPage } from "./about";

export const Route = createFileRoute("/advertise")({
  head: () => ({
    meta: [
      { title: "Advertise With Us — Exemptia Digital" },
      { name: "description", content: "Reach a premium audience of marketers, founders and technology leaders through Exemptia Digital." },
    ],
    links: [{ rel: "canonical", href: "/advertise" }],
  }),
  component: () => (
    <StaticPage
      kicker="For partners"
      title="Advertise With Us"
      intro="Reach a premium, high-intent audience of marketers, founders and technology leaders. Sponsored articles, display, newsletter placements and custom campaigns."
      sections={[
        { heading: "Who reads Exemptia Digital", body: "Marketing leaders, growth operators, founders, engineers and executives across DTC, SaaS and enterprise." },
        { heading: "What we offer", body: "Display advertising, sponsored articles, newsletter sponsorships, custom research reports and event partnerships." },
        { heading: "Standards", body: "Every sponsored placement is clearly labeled. We work only with partners whose products we would recommend to our own readers." },
        { heading: "Get in touch", body: "Email advertise@exemptiadigital.online with your goals and we'll put together a proposal." },
      ]}
    />
  ),
});
