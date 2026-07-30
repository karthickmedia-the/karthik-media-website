import { createFileRoute } from "@tanstack/react-router";
import ContentCreationService from "@/pages/ContentCreationService";
import { seoHead } from "@/lib/seo-head";

export const Route = createFileRoute("/services/content-creation")({
  head: () =>
    seoHead({
      title: "Content Creation Services | Video, Photography, Design | Karthik Media",
      description:
        "Creative content for SMBs. Video production, photography, graphic design, motion graphics. 3X engagement increase, 150% organic reach growth.",
      path: "/services/content-creation",
    }),
  component: ContentCreationService,
});
