import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SEOHead from "@/components/SEOHead";
import { Gallery6 } from "@/components/ui/gallery6";

// Lazy load below-the-fold components for better initial load performance
const ResultsStatsSection = lazy(() => import("@/components/ResultsStatsSection"));
const WhoWeHelpSection = lazy(() => import("@/components/WhoWeHelpSection"));
const WhatWeDoSection = lazy(() => import("@/components/WhatWeDoSection"));
const TeamSection = lazy(() => import("@/components/TeamSection"));
const WhyChooseUsSection = lazy(() => import("@/components/WhyChooseUsSection"));
const GlobalNetworkSection = lazy(() => import("@/components/GlobalNetworkSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const Footer = lazy(() => import("@/components/Footer"));

// Minimal loading placeholder
const SectionLoader = () => (
  <div className="min-h-[200px] bg-background" />
);

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Karthik Media - Digital Marketing Agency | 10X Growth"
        description="Only digital marketing agency that drives your business with 10X growth. Expert strategies for content, ads, SEO, and automation."
        canonicalUrl="/"
        keywords="digital marketing agency, SEO services, Meta ads, Google ads, web design, content creation, marketing automation"
      />
      <Navbar />
      <HeroSection />
      <Gallery6 
        heading="Featured Projects"
        demoUrl="https://karthikmedia.in/contact"
        items={[
          {
            id: "item-1",
            title: "Build Modern UIs",
            summary: "Create stunning user interfaces with our comprehensive design system.",
            url: "#",
            image: "https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg",
          },
          {
            id: "item-2",
            title: "Design System Components",
            summary: "Explore our library of customizable components built with shadcn/ui and Tailwind CSS.",
            url: "#",
            image: "https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg",
          },
          {
            id: "item-3",
            title: "Responsive Layouts",
            summary: "Build websites that look great on any device with our responsive design patterns.",
            url: "#",
            image: "https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg",
          },
          {
            id: "item-4",
            title: "Developer Experience",
            summary: "Streamline your workflow with our developer-friendly tools and documentation.",
            url: "#",
            image: "https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg",
          },
          {
            id: "item-5",
            title: "Performance First",
            summary: "Create fast, optimized websites using our performance-focused components.",
            url: "#",
            image: "https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg",
          },
        ]}
      />
      <Suspense fallback={<SectionLoader />}>
        <ResultsStatsSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <WhoWeHelpSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <WhatWeDoSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <TeamSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <WhyChooseUsSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <GlobalNetworkSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <TestimonialsSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <FAQSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
    </div>
  );
};
export default Index;
