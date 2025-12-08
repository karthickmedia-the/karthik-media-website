import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ResultsStatsSection from "@/components/ResultsStatsSection";
import WhoWeHelpSection from "@/components/WhoWeHelpSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import GlobalNetworkSection from "@/components/GlobalNetworkSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ResultsStatsSection />
      <WhoWeHelpSection />
      <WhatWeDoSection />
      <WhyChooseUsSection />
      <GlobalNetworkSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </div>
  );
};
export default Index;