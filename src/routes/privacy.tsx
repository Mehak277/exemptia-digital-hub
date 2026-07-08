import { createFileRoute } from "@tanstack/react-router";
import { StaticPage } from "./about";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [{ title: "Privacy Policy — Exemptia Digital" }, { name: "description", content: "How Exemptia Digital collects, uses and protects your data." }],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: () => (
    <StaticPage
      kicker="Legal"
      title="Privacy Policy"
      intro="This page explains what data Exemptia Digital collects, how we use it, and the choices you have."
      sections={[
        { heading: "Information we collect", body: "We collect information you provide directly (such as your email when subscribing) and standard analytics data (such as pages visited and referring source) via privacy-respecting analytics." },
        { heading: "How we use information", body: "To deliver the newsletter, improve the site, understand which stories resonate, and communicate with subscribers who opt in." },
        { heading: "Cookies", body: "We use a small number of first-party cookies for analytics and preferences. See the Cookie Policy for details." },
        { heading: "Your choices", body: "You can unsubscribe from any newsletter at any time. Contact us if you'd like your data removed." },
      ]}
    />
  ),
});
