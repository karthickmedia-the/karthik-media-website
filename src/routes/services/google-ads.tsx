import { createFileRoute } from "@tanstack/react-router";
import GoogleAdsService from "@/pages/GoogleAdsService";
import { seoHead } from "@/lib/seo-head";

export const Route = createFileRoute("/services/google-ads")({
  head: () =>
    seoHead({
      title: "Google Ads Management Services | PPC Advertising | Karthik Media",
      description:
        "Expert Google Ads management. Search, Display, Shopping, YouTube, Performance Max campaigns. 500% average ROAS, 65% lower CPA, 10M+ ad spend managed.",
      path: "/services/google-ads",
    }),
  component: GoogleAdsService,
});
