import { createFileRoute } from "@tanstack/react-router";
import ContentCreationService from "@/pages/ContentCreationService";
import { seoHead } from "@/lib/seo-head";

export const Route = createFileRoute("/services/content-creation")({
  head: () =>
    seoHead({
      title: "Content Marketing Services Madurai | Karthik Media",
      description:
        "Attract and convert your audience with strategic content marketing from Karthik Media — blogs, copywriting & content strategy built to rank and convert.",
      path: "/services/content-creation",
    }),
  component: ContentCreationService,
});
