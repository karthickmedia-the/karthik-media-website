import { createFileRoute } from "@tanstack/react-router";
import Contact from "@/pages/Contact";
import { seoHead } from "@/lib/seo-head";

export const Route = createFileRoute("/contact")({
  head: () =>
    seoHead({
      title: "Contact Karthik Media | Digital Marketing Agency in Madurai",
      description:
        "Ready to grow your business online? Contact Karthik Media, Madurai's digital marketing agency, for a free consultation and custom growth strategy.",
      path: "/contact",
    }),
  component: Contact,
});
