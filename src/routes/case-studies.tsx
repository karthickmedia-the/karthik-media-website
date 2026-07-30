import { createFileRoute } from "@tanstack/react-router";
import CaseStudies from "@/pages/CaseStudies";
import { seoHead } from "@/lib/seo-head";

export const Route = createFileRoute("/case-studies")({
  head: () =>
    seoHead({
      title: "Case Studies - Karthik Media | Real Results & Success Stories",
      description:
        "Explore our case studies showing real results: 10X growth, ₹10Cr+ revenue generated, 800K+ views, and 400+ leads. See how we drive business growth.",
      path: "/case-studies",
    }),
  component: CaseStudies,
});
