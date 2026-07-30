import { createFileRoute } from "@tanstack/react-router";
import About from "@/pages/About";
import { seoHead } from "@/lib/seo-head";

export const Route = createFileRoute("/about")({
  head: () =>
    seoHead({
      title: "About Us - Karthik Media | Digital Marketing Experts Since 2012",
      description:
        "Learn about The Karthik Media - 12+ years of experience helping 116+ businesses grow with result-driven digital marketing across 8+ industries.",
      path: "/about",
    }),
  component: About,
});
