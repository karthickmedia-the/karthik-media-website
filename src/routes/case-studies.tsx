import { createFileRoute } from "@tanstack/react-router";
import CaseStudies from "@/pages/CaseStudies";
import { seoHead } from "@/lib/seo-head";

export const Route = createFileRoute("/case-studies")({
  head: () =>
    seoHead({
      title: "Our Work | Digital Marketing Case Studies – Karthik Media",
      description:
        "See real results Karthik Media has delivered for clients through SEO, Google Ads, and social media campaigns — Madurai's proven digital marketing partner.",
      path: "/case-studies",
    }),
  component: CaseStudies,
});
