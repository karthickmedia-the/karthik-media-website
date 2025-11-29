import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TeamShowcase from "@/components/TeamShowcase";
import ScrollShowcase from "@/components/ScrollShowcase";
import Services from "@/components/Services";
import ClientLogos from "@/components/ClientLogos";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <TeamShowcase />
      <ScrollShowcase />
      <Services />
      <ClientLogos />
      <Footer />
    </div>
  );
};

export default Index;
