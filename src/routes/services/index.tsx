import { createFileRoute } from "@tanstack/react-router";
import ServicesOverview from "@/pages/ServicesOverview";
import { seoHead } from "@/lib/seo-head";

export const Route = createFileRoute("/services/")({
  head: () =>
    seoHead({
      title: "Digital Marketing Services in Madurai | SEO, Ads & Social Media",
      description:
        "Explore Karthik Media's full range of digital marketing services in Madurai — SEO, Google Ads, social media marketing, content, and marketing automation.",
      path: "/services",
    }),
  component: ServicesOverview,
});
