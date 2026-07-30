import { createFileRoute } from "@tanstack/react-router";
import Training from "@/pages/Training";
import { seoHead } from "@/lib/seo-head";

export const Route = createFileRoute("/training")({
  head: () =>
    seoHead({
      title: "Digital Marketing Course in Madurai | Karthik Media Academy",
      description:
        "Learn practical digital marketing — SEO, Google Ads, social media & more — with hands-on training and placement support from Karthik Media, Madurai.",
      path: "/training",
    }),
  component: Training,
});
