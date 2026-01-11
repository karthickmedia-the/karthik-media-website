import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SEO from "@/components/SEO";

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
      <SEO 
        title="Karthik Media - Digital Marketing Agency | 10X Growth"
        description="Only digital marketing agency that drives your business with 10X growth. Expert strategies for content, ads, SEO, web design, and automation in Madurai, India."
        canonical="/"
      />
      <Navbar />
      <HeroSection />
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
