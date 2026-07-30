import { createFileRoute } from "@tanstack/react-router";
import Blog from "@/pages/Blog";
import { seoHead } from "@/lib/seo-head";

export const Route = createFileRoute("/blog")({
  head: () =>
    seoHead({
      title: "Digital Marketing Blog | Tips & Insights – Karthik Media",
      description:
        "Stay updated with the latest SEO, social media, and digital marketing tips and trends from the Karthik Media team in Madurai.",
      path: "/blog",
    }),
  component: Blog,
});
