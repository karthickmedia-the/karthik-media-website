import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WhoWeHelpSection from "@/components/WhoWeHelpSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import GlobalNetworkSection from "@/components/GlobalNetworkSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <WhoWeHelpSection />
      <WhatWeDoSection />
      <GlobalNetworkSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};
export default Index;