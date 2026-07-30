import { createFileRoute } from "@tanstack/react-router";
import GoogleAdsService from "@/pages/GoogleAdsService";
import { seoHead } from "@/lib/seo-head";

export const Route = createFileRoute("/services/google-ads")({
  head: () =>
    seoHead({
      title: "Google Ads Management Madurai | PPC Experts – Karthik Media",
      description:
        "Get more leads with expertly managed Google Ads campaigns. Karthik Media's Madurai-based PPC team maximizes ROI while cutting wasted ad spend.",
      path: "/services/google-ads",
    }),
  component: GoogleAdsService,
});
