import { createFileRoute } from "@tanstack/react-router";
import SeoService from "@/pages/SeoService";
import { seoHead } from "@/lib/seo-head";

export const Route = createFileRoute("/services/seo")({
  head: () =>
    seoHead({
      title: "SEO Company in Madurai | Rank Higher on Google | Karthik Media",
      description:
        "Boost your organic traffic with Madurai's trusted SEO experts. On-page, technical & local SEO strategies that get real, measurable ranking results.",
      path: "/services/seo",
    }),
  component: SeoService,
});
