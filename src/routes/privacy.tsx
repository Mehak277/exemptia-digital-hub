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
      intro="Your privacy is important to us. This policy explains what data Exemptia Digital collects, how we use it, and the choices you have regarding your personal information."
      sections={[
        { heading: "Information We Collect", body: "We collect information you provide directly to us when you subscribe to our newsletter, participate in any interactive features of our services, fill out a form, request customer support, or otherwise communicate with us.\n\nThis may include your name, email address, and any other information you choose to provide. We also automatically collect certain information about your device and how you interact with our website via privacy-respecting analytics." },
        { heading: "How We Use Information", body: "We use the information we collect to deliver, maintain, and improve our services, including delivering the newsletter to your inbox. We also use this data to understand which stories and topics resonate most with our audience, allowing us to tailor our content.\n\nWe may also use the information to communicate with you about products, services, offers, and events offered by Exemptia Digital, and provide news and information we think will be of interest to you." },
        { heading: "Data Sharing and Disclosure", body: "We do not sell your personal information to third parties. We may share your information with trusted third-party vendors, consultants, and other service providers who need access to such information to carry out work on our behalf (such as our email delivery platform).\n\nWe may also disclose personal information if we believe it is necessary to comply with applicable laws, regulations, or legal processes." },
        { heading: "Cookies and Tracking", body: "We use a minimal amount of first-party cookies to provide essential site functionality and gather aggregated analytics to improve your reading experience.\n\nYou can typically configure your browser to accept or reject all cookies, or to notify you when a cookie is set. However, if you choose to reject cookies, some areas of our site may not function properly." },
        { heading: "Your Choices and Rights", body: "You may opt out of receiving promotional communications from us by following the instructions in those emails (e.g., clicking the 'unsubscribe' link). If you opt out, we may still send you non-promotional communications.\n\nDepending on your location, you may also have the right to access, correct, or delete your personal information. Please contact us to exercise these rights." },
      ]}
    />
  ),
});
