import { createFileRoute } from "@tanstack/react-router";
import About from "@/pages/About";
import { seoHead } from "@/lib/seo-head";

export const Route = createFileRoute("/about")({
  head: () =>
    seoHead({
      title: "About Karthik Media | Digital Marketing Experts in Madurai",
      description:
        "Meet the team behind Karthik Media — a Madurai-based digital marketing agency helping brands scale with data-driven SEO, ads, and content strategies since 2012.",
      path: "/about",
    }),
  component: About,
});
