import { createFileRoute } from "@tanstack/react-router";
import Index from "@/pages/Index";
import { seoHead } from "@/lib/seo-head";

export const Route = createFileRoute("/")({
  head: () =>
    seoHead({
      title: "Digital Marketing Agency in Madurai | Karthik Media – 10X Growth",
      description:
        "Karthik Media is a results-driven digital marketing agency in Madurai offering SEO, Google Ads, social media & content strategy. Get a free growth audit today.",
      path: "/",
    }),
  component: Index,
});
