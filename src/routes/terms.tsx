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
      intro="These terms and conditions outline the rules and regulations for the use of Exemptia Digital's Website. By accessing this website we assume you accept these terms and conditions."
      sections={[
        { heading: "Use of Content", body: "All content provided on Exemptia Digital is for informational and educational purposes only. You may view, download for caching purposes only, and print pages or other content from the website for your own personal use, subject to the restrictions set out below and elsewhere in these terms and conditions.\n\nYou must not republish material from this website without proper attribution, sell, rent or sub-license material, or reproduce, duplicate, copy or otherwise exploit material on our website for a commercial purpose without our explicit consent." },
        { heading: "Intellectual Property Rights", body: "Unless otherwise stated, Exemptia Digital and/or its licensors own the intellectual property rights for all material on Exemptia Digital. All intellectual property rights are reserved.\n\nGuest contributors and writers retain the moral rights to their bylined pieces, subject to the publishing agreement between them and Exemptia Digital." },
        { heading: "User Comments and Feedback", body: "Certain parts of this website may offer the opportunity for users to post and exchange opinions, information, material and data. Exemptia Digital reserves the right to monitor all Comments and to remove any Comments which it considers in its absolute discretion to be inappropriate, offensive or otherwise in breach of these Terms and Conditions." },
        { heading: "Disclaimer of Liability", body: "The information on this website is provided on an 'as is' basis. To the fullest extent permitted by law, Exemptia Digital excludes all representations and warranties relating to this website and its contents.\n\nWe will not be liable to you in respect of any business losses, including (without limitation) loss of or damage to profits, income, revenue, use, production, anticipated savings, business, contracts, commercial opportunities or goodwill. Decisions made based on our content are made at your own risk." },
        { heading: "Changes to Terms", body: "Exemptia Digital reserves the right to revise these terms and conditions at any time. By using this website you are expected to review these terms and conditions on a regular basis to ensure you understand all terms and conditions governing use of this website." },
      ]}
    />
  ),
});
