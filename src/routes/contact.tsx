import { createFileRoute } from "@tanstack/react-router";
import Contact from "@/pages/Contact";
import { seoHead } from "@/lib/seo-head";

export const Route = createFileRoute("/contact")({
  head: () =>
    seoHead({
      title: "Contact Us - Karthik Media | Get in Touch for Digital Marketing",
      description:
        "Contact Karthik Media for digital marketing services. Call +91 9842041665, email info@karthikmedia.in, or visit us at HMS Colony, Madurai 625016.",
      path: "/contact",
    }),
  component: Contact,
});
