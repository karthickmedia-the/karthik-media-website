import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutUsSection from "@/components/ui/about-us-section";
import TeamShowcase from "@/components/TeamShowcase";
import ScrollShowcase from "@/components/ScrollShowcase";
import Services from "@/components/Services";
import TestimonialSection from "@/components/TestimonialSection";
import ClientLogos from "@/components/ClientLogos";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutUsSection />
      <TeamShowcase />
      <ScrollShowcase />
      <Services />
      <TestimonialSection />
      <ClientLogos />
      <Footer />
    </div>
  );
};

export default Index;
