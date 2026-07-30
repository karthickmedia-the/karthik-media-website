import { createFileRoute } from "@tanstack/react-router";
import Careers from "@/pages/Careers";
import { seoHead } from "@/lib/seo-head";

export const Route = createFileRoute("/careers")({
  head: () =>
    seoHead({
      title: "Careers at Karthik Media | Join Our Digital Marketing Team",
      description:
        "Join The Karthik Media team in Madurai. Open positions for Video Editor, SEO Specialist, Web Developer, and Client Relationship Executive.",
      path: "/careers",
    }),
  component: Careers,
});
