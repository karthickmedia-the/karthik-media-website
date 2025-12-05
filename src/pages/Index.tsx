import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WhoWeHelpSection from "@/components/WhoWeHelpSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import CreativesShowcase from "@/components/CreativesShowcase";
import Footer from "@/components/Footer";
const Index = () => {
  return <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <WhoWeHelpSection />
      <WhatWeDoSection />
      <HowWeWorkSection />
      <CreativesShowcase />
      <Footer />
    </div>;
};
export default Index;