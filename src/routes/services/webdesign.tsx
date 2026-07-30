import { createFileRoute } from "@tanstack/react-router";
import WebdesignService from "@/pages/WebdesignService";
import { seoHead } from "@/lib/seo-head";

export const Route = createFileRoute("/services/webdesign")({
  head: () =>
    seoHead({
      title: "Web Design & Development Services | Karthik Media",
      description:
        "Premium web design and development services. We craft stunning, high-performance websites that transform visitors into customers. UI/UX design, custom development, mobile-first.",
      path: "/services/webdesign",
    }),
  component: WebdesignService,
});
