import { createFileRoute } from "@tanstack/react-router";
import FunnelsAutomationService from "@/pages/FunnelsAutomationService";
import { seoHead } from "@/lib/seo-head";

export const Route = createFileRoute("/services/funnels-automation")({
  head: () =>
    seoHead({
      title: "Funnels & Marketing Automation | Karthik Media",
      description:
        "Build intelligent sales funnels and marketing automations. Lead nurturing, cart recovery, onboarding. 300% conversion increase, 4.2X ROI.",
      path: "/services/funnels-automation",
    }),
  component: FunnelsAutomationService,
});
