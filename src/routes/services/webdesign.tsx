import { createFileRoute } from "@tanstack/react-router";
import WebdesignService from "@/pages/WebdesignService";
import { seoHead } from "@/lib/seo-head";

export const Route = createFileRoute("/services/webdesign")({
  head: () =>
    seoHead({
      title: "Website Design & Development Madurai | Karthik Media",
      description:
        "Get a fast, SEO-friendly, conversion-focused website built by Karthik Media in Madurai. Custom web design that turns visitors into customers.",
      path: "/services/webdesign",
    }),
  component: WebdesignService,
});
