import { useEffect } from "react";
import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRouteWithContext,
  useRouter,
} from "@tanstack/react-router";
import type { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollToTop from "@/components/ScrollToTop";
import NotFound from "@/pages/NotFound";
import { reportLovableError } from "@/lib/lovable-error-reporting";
import appCss from "../styles.css?url";

const ORGANIZATION_JSONLD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Karthik Media",
  alternateName: "The Karthik Media",
  url: "https://karthik-media.lovable.app",
  logo: "https://karthik-media.lovable.app/lovable-uploads/018ff520-50b9-4ad3-8314-5e8b6390a523.png",
  description:
    "Digital marketing agency that drives your business with 10X growth through expert strategies for content, ads, SEO, web design, and automation.",
  foundingDate: "2023",
  address: {
    "@type": "PostalAddress",
    streetAddress: "No 193, 1st floor, South Masi Street",
    addressLocality: "Madurai",
    addressRegion: "Tamil Nadu",
    postalCode: "625001",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-8870701616",
    contactType: "customer service",
    email: "hello@karthikmedia.in",
    availableLanguage: ["English", "Tamil"],
  },
  sameAs: [
    "https://www.instagram.com/thekarthikmedia",
    "https://www.linkedin.com/company/thekarthikmedia",
    "https://www.facebook.com/thekarthikmedia",
    "https://www.youtube.com/@thekarthikmedia",
  ],
  areaServed: { "@type": "Country", name: "India" },
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: { "@type": "GeoCoordinates", latitude: "9.9252", longitude: "78.1198" },
    geoRadius: "50000",
  },
});

const LOCAL_BUSINESS_JSONLD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Karthik Media",
  image: "https://karthik-media.lovable.app/lovable-uploads/018ff520-50b9-4ad3-8314-5e8b6390a523.png",
  url: "https://karthik-media.lovable.app",
  telephone: "+91-8870701616",
  email: "hello@karthikmedia.in",
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "No 193, 1st floor, South Masi Street",
    addressLocality: "Madurai",
    addressRegion: "Tamil Nadu",
    postalCode: "625001",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: "9.9252", longitude: "78.1198" },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "18:00",
  },
});

const WEBSITE_JSONLD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Karthik Media",
  url: "https://karthik-media.lovable.app",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://karthik-media.lovable.app/?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
});

const SERVICES_JSONLD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Digital Marketing Services",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Service",
        name: "Web Design & Development",
        url: "https://karthik-media.lovable.app/services/webdesign",
        description: "Custom website design and development services",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Service",
        name: "SEO Services",
        url: "https://karthik-media.lovable.app/services/seo",
        description: "Search engine optimization to improve rankings",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Service",
        name: "Meta Ads",
        url: "https://karthik-media.lovable.app/services/meta-ads",
        description: "Facebook and Instagram advertising services",
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Service",
        name: "Google Ads",
        url: "https://karthik-media.lovable.app/services/google-ads",
        description: "Google Ads management and PPC services",
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "Service",
        name: "Content Creation",
        url: "https://karthik-media.lovable.app/services/content-creation",
        description: "Professional content creation for social media and marketing",
      },
    },
    {
      "@type": "ListItem",
      position: 6,
      item: {
        "@type": "Service",
        name: "Funnels & Automation",
        url: "https://karthik-media.lovable.app/services/funnels-automation",
        description: "Marketing automation and sales funnel development",
      },
    },
  ],
});

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { title: "Karthik Media - Digital Marketing Agency | 10X Growth" },
      {
        name: "description",
        content:
          "Only digital marketing agency that drives your business with 10X growth. Expert strategies for content, ads, SEO, and automation.",
      },
      { name: "author", content: "Karthik Media" },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      {
        name: "googlebot",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { name: "bingbot", content: "index, follow" },
      { property: "og:title", content: "Karthik Media - Digital Marketing Agency | 10X Growth" },
      {
        property: "og:description",
        content: "Only digital marketing agency that drives your business with 10X growth.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://karthik-media.lovable.app/" },
      {
        property: "og:image",
        content:
          "https://karthik-media.lovable.app/lovable-uploads/018ff520-50b9-4ad3-8314-5e8b6390a523.png",
      },
      { property: "og:site_name", content: "Karthik Media" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@karthikmedia" },
      { name: "twitter:title", content: "Karthik Media - Digital Marketing Agency | 10X Growth" },
      {
        name: "twitter:description",
        content: "Only digital marketing agency that drives your business with 10X growth.",
      },
      {
        name: "twitter:image",
        content:
          "https://karthik-media.lovable.app/lovable-uploads/018ff520-50b9-4ad3-8314-5e8b6390a523.png",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "preconnect", href: "https://www.googletagmanager.com" },
      {
        rel: "preload",
        href: "/lovable-uploads/018ff520-50b9-4ad3-8314-5e8b6390a523.png",
        as: "image",
        fetchPriority: "high",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;0,800;0,900;1,400&display=swap",
      },
      { rel: "dns-prefetch", href: "https://topmate.io" },
    ],
    scripts: [
      { type: "application/ld+json", children: ORGANIZATION_JSONLD },
      { type: "application/ld+json", children: LOCAL_BUSINESS_JSONLD },
      { type: "application/ld+json", children: WEBSITE_JSONLD },
      { type: "application/ld+json", children: SERVICES_JSONLD },
      { src: "https://www.googletagmanager.com/gtag/js?id=G-1X04C99XEX", async: true },
      {
        children:
          "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-1X04C99XEX');",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFound,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <ScrollToTop />
          <Outlet />
          <FloatingWhatsApp />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background px-6 text-center text-foreground">
      <h1 className="text-3xl font-bold">This page didn't load</h1>
      <p className="max-w-md text-muted-foreground">
        Something went wrong while loading this page. You can try again or head back home.
      </p>
      <div className="flex gap-4">
        <button
          className="rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground"
          onClick={() => {
            router.invalidate();
            reset();
          }}
        >
          Try again
        </button>
        <a href="/" className="rounded-lg border border-border px-6 py-3 font-semibold">
          Go home
        </a>
      </div>
    </div>
  );
}
