import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WhoWeHelpSection from "@/components/WhoWeHelpSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import Footer from "@/components/Footer";
const Index = () => {
  return <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <WhoWeHelpSection />
      <WhatWeDoSection />
      <Footer />
    </div>;
};
export default Index;