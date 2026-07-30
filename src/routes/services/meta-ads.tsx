import { createFileRoute } from "@tanstack/react-router";
import MetaAdsService from "@/pages/MetaAdsService";
import { seoHead } from "@/lib/seo-head";

export const Route = createFileRoute("/services/meta-ads")({
  head: () =>
    seoHead({
      title: "Social Media Marketing Agency in Madurai | Karthik Media",
      description:
        "Grow your brand on Instagram, Facebook & LinkedIn with Karthik Media's social media marketing services in Madurai — strategy, content & paid campaigns.",
      path: "/services/meta-ads",
    }),
  component: MetaAdsService,
});
