import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ScrollShowcase from "@/components/ScrollShowcase";
import RadialTimeline from "@/components/RadialTimeline";
import Services from "@/components/Services";
import ClientLogos from "@/components/ClientLogos";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ScrollShowcase />
      <RadialTimeline />
      <Services />
      <ClientLogos />
      <Footer />
    </div>
  );
};

export default Index;
