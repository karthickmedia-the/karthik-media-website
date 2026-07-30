import { createFileRoute } from "@tanstack/react-router";
import Index from "@/pages/Index";
import { seoHead } from "@/lib/seo-head";

export const Route = createFileRoute("/")({
  head: () =>
    seoHead({
      title: "Karthik Media - Digital Marketing Agency | 10X Growth",
      description:
        "Only digital marketing agency that drives your business with 10X growth. Expert strategies for content, ads, SEO, web design, and automation in Madurai, India.",
      path: "/",
    }),
  component: Index,
});
