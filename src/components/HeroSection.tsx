import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import heroPersonImage from "@/assets/hero-person.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-background overflow-hidden">
      <div className="container mx-auto px-4 py-12 relative">
        {/* Top Headline */}
        <div className="text-center mb-8 relative z-30">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-2">
            <span className="text-foreground">THE ONLY DIGITAL </span>
            <span className="text-foreground font-extrabold">MARKETING</span>
            <span className="text-foreground"> AGENCY</span>
          </h1>
          <p className="text-primary text-lg md:text-xl lg:text-2xl italic">
            THAT DRIVES YOUR BUSINESS WITH
          </p>
        </div>

        {/* Main Content Area - 10X + Person Image Overlapped */}
        <div className="relative flex justify-center items-center min-h-[600px] md:min-h-[700px]">
          {/* 10X Text - Positioned to overlap with person */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
            <h2 className="text-[10rem] md:text-[14rem] lg:text-[18rem] font-black leading-none text-primary">
              10X
            </h2>
            <span className="absolute bottom-8 right-0 text-2xl md:text-3xl lg:text-4xl italic text-foreground">
              GROWTH
            </span>
          </div>

          {/* Person Image - Centered, overlapping 10X */}
          <div className="relative flex justify-center items-end w-full">
            {/* Person Image - Large and centered */}
            <img 
              src={heroPersonImage} 
              alt="Digital Marketing Expert" 
              className="relative z-20 w-[400px] md:w-[600px] lg:w-[700px] object-contain mt-24"
            />
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="relative flex justify-center gap-4 md:gap-6 z-30 -mt-20 md:-mt-32 flex-wrap px-4">
          <Button 
            variant="hero-primary" 
            size="xl"
            className="min-w-[250px] md:min-w-[300px]"
          >
            BOOK 1:1 CALL WITH ME
          </Button>
          <Button 
            variant="hero-secondary" 
            size="xl"
            className="min-w-[250px] md:min-w-[300px]"
          >
            CHECK OUR WORKS
          </Button>
        </div>

        {/* Testimonial Card - Bottom Right */}
        <div className="absolute bottom-24 md:bottom-32 right-4 md:right-8 lg:right-16 bg-background/95 backdrop-blur-sm p-5 md:p-6 rounded-2xl max-w-xs md:max-w-sm border-2 border-primary/20 z-40">
          <div className="flex gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-primary text-primary" />
            ))}
          </div>
          <p className="text-primary text-xs md:text-sm italic mb-4">
            "I was shocked at how smoothly they managed our content, ads, and automation. our revenue grew 8X within only two months."
          </p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary overflow-hidden flex-shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" 
                alt="Dr. R. Kanmani"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-primary font-bold text-xs md:text-sm">DR. R. KANMANI</p>
              <p className="text-foreground text-[10px] md:text-xs uppercase">Correspondent</p>
              <p className="text-muted-foreground text-[10px] md:text-xs">Dolphin Group of Schools</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
