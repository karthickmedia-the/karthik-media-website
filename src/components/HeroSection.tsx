import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import heroPersonImage from "@/assets/hero-person.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-background overflow-hidden flex flex-col">
      {/* Text Content */}
      <div className="container mx-auto px-4 pt-20 pb-12 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
          <span className="text-foreground">THE ONLY DIGITAL </span>
          <span className="text-foreground font-extrabold">MARKETING</span>
          <span className="text-foreground"> AGENCY</span>
          <br />
          <span className="text-accent text-xl md:text-2xl italic">
            THAT DRIVES YOUR BUSINESS WITH
          </span>
        </h1>
        
        <div className="relative inline-block">
          <h2 className="text-[8rem] md:text-[12rem] lg:text-[14rem] font-black leading-none text-primary">
            10X
          </h2>
          <span className="absolute bottom-4 right-0 text-2xl md:text-3xl italic text-foreground">
            GROWTH
          </span>
        </div>

        {/* Testimonial Card */}
        <div className="absolute top-20 right-4 md:right-12 lg:right-24 bg-background/95 backdrop-blur-sm p-6 rounded-2xl max-w-sm border-2 border-primary/20">
          <div className="flex gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-primary text-primary" />
            ))}
          </div>
          <p className="text-accent text-sm italic mb-4">
            "I was shocked at how smoothly they managed our content, ads, and automation. our revenue grew 8X within only two months."
          </p>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" 
                alt="Dr. R. Kanmani"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-accent font-bold text-sm">DR. R. KANMANI</p>
              <p className="text-foreground text-xs uppercase">Correspondent</p>
              <p className="text-muted-foreground text-xs">Dolphin Group of Schools</p>
            </div>
          </div>
        </div>
      </div>

      {/* Person with circular background - Centered Bottom */}
      <div className="relative flex justify-center items-end mt-auto">
        {/* Yellow circular background */}
        <div className="absolute bottom-0 w-[600px] h-[600px] bg-primary rounded-full -mb-48"></div>
        
        {/* Person image */}
        <img 
          src={heroPersonImage} 
          alt="Digital Marketing Expert" 
          className="relative z-10 w-full max-w-lg object-contain"
        />
        
        {/* CTA Buttons */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col sm:flex-row gap-4 z-20 w-full max-w-2xl px-4">
          <Button 
            variant="hero-primary" 
            size="xl"
            className="flex-1"
          >
            BOOK 1:1 CALL WITH ME
          </Button>
          <Button 
            variant="hero-secondary" 
            size="xl"
            className="flex-1"
          >
            CHECK OUR WORKS
          </Button>
        </div>
      </div>

      {/* Curved Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-primary">
        <svg 
          className="absolute top-0 left-0 w-full h-32" 
          viewBox="0 0 1440 100" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,50 Q360,0 720,50 T1440,50 L1440,100 L0,100 Z" 
            fill="currentColor"
            className="text-background"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
