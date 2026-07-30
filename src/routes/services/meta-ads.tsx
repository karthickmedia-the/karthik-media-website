import { createFileRoute } from "@tanstack/react-router";
import MetaAdsService from "@/pages/MetaAdsService";
import { seoHead } from "@/lib/seo-head";

export const Route = createFileRoute("/services/meta-ads")({
  head: () =>
    seoHead({
      title: "Meta Ads Services | Facebook & Instagram Ads | Karthik Media",
      description:
        "Harness Meta's 3.2B users with AI-driven campaigns. Advantage+ campaigns, Andromeda targeting, Reels ads. 8.4X average ROAS, 65% lower CPA.",
      path: "/services/meta-ads",
    }),
  component: MetaAdsService,
});
