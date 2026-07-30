const SITE_URL = "https://karthik-media.lovable.app";
const OG_IMAGE = `${SITE_URL}/lovable-uploads/018ff520-50b9-4ad3-8314-5e8b6390a523.png`;

interface SeoHeadArgs {
  title: string;
  description: string;
  path: string;
}

/** Per-route SSR head tags — server-rendered so crawlers see them without JS. */
export function seoHead({ title, description, path }: SeoHeadArgs) {
  const url = path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
