import { createFileRoute } from "@tanstack/react-router";
import SeoService from "@/pages/SeoService";
import { seoHead } from "@/lib/seo-head";

export const Route = createFileRoute("/services/seo")({
  head: () =>
    seoHead({
      title: "SEO Services | Rank Higher on Google | Karthik Media",
      description:
        "Dominate search rankings with data-driven SEO strategies. Technical audits, keyword research, link building, local SEO. 500+ keywords ranked, 10X traffic growth.",
      path: "/services/seo",
    }),
  component: SeoService,
});
