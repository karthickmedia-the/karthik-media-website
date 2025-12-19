import { Button } from "@/components/ui/button";
import { MovingBorderButton } from "@/components/ui/moving-border";
import { Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pb-12 bg-background overflow-hidden pt-16">
      {/* Simplified Background - Static gradients only */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-zinc-900 pointer-events-none" />
      
      {/* Static Grid Pattern - No animation */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(200,242,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(200,242,0,0.03)_1px,transparent_1px)] bg-[length:50px_50px] pointer-events-none" />
      
      {/* Static Radial Gradient - No pulse animation */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(200,242,0,0.05),transparent_60%)] pointer-events-none" />
      
      {/* Static Floating Orbs - No animation */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/3 rounded-full blur-3xl pointer-events-none" />
      
      {/* Vignette Effects */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-40 pointer-events-none" />
      
      <div className="container mx-auto px-4 py-6 relative z-10">
        {/* Top Headline */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16 mt-12 md:mt-16 lg:mt-20 relative z-30 px-2">
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-1">
            <span className="text-foreground">THE ONLY DIGITAL </span>
            <span className="text-foreground font-extrabold">MARKETING</span>
            <span className="text-foreground"> AGENCY</span>
          </h1>
          <p className="text-primary text-sm sm:text-base md:text-lg italic font-extrabold lg:text-2xl">
            THAT DRIVES YOUR BUSINESS FOR
          </p>
        </div>

        {/* Main Content Area - 10X + Person Image Overlapped */}
        <div className="relative flex justify-center items-center min-h-[400px] sm:min-h-[450px] md:min-h-[550px] lg:min-h-[600px] mt-8 md:mt-12 lg:mt-16 pointer-events-none">
          {/* 10X Text - Positioned to overlap with person */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
            <h2 className="relative text-[5rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-black leading-none text-primary">
              10X
            </h2>
            <span className="absolute -bottom-4 sm:-bottom-6 md:-bottom-8 right-0 text-base sm:text-lg md:text-xl lg:text-2xl italic text-foreground">
              GROWTH
            </span>
          </div>

          {/* Person Image - Responsive Sizing */}
          <div className="relative flex justify-center items-center w-full px-4 sm:px-0">
            <img 
              alt="Digital Marketing Expert" 
              src="/lovable-uploads/018ff520-50b9-4ad3-8314-5e8b6390a523.png" 
              className="relative z-30 w-full max-w-[300px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[500px] h-auto object-contain border-slate-50 border rounded-3xl"
            />
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="relative flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-3 md:gap-4 z-30 -mt-6 sm:-mt-8 md:-mt-12 lg:-mt-16 px-4 pointer-events-auto">
          <a href="https://topmate.io/karthik_media/1790830" target="_blank" rel="noopener noreferrer">
            <MovingBorderButton 
              borderRadius="0.75rem" 
              containerClassName="w-full sm:w-auto min-w-[200px] md:min-w-[240px] h-12 md:h-14" 
              className="bg-red-600 text-white font-bold text-sm md:text-base hover:bg-red-500 transition-colors shadow-[0_0_20px_rgba(239,68,68,0.6),0_0_40px_rgba(239,68,68,0.4),0_0_60px_rgba(239,68,68,0.2)]" 
              borderClassName="bg-[radial-gradient(#ef4444_40%,transparent_60%)]" 
              duration={3000}
            >
              BOOK 1:1 CALL WITH ME
            </MovingBorderButton>
          </a>
          <Button variant="hero-secondary" size="lg" className="w-full sm:w-auto min-w-[200px] md:min-w-[240px] h-12 md:h-14 text-sm md:text-base" asChild>
            <Link to="/case-studies">OUR PORTFOLIO</Link>
          </Button>
        </div>

        {/* Founder Info - Left Side */}
        <div className="absolute bottom-[28%] sm:bottom-[25%] left-2 sm:left-4 md:left-8 lg:left-12 flex items-center gap-1 sm:gap-2 z-40 pointer-events-auto">
          <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 text-primary" />
          <div className="bg-background/95 backdrop-blur-sm p-2 sm:p-3 md:p-4 rounded-lg border-2 border-primary/20 relative">
            <p className="text-foreground font-bold text-[10px] sm:text-xs md:text-sm">Karthik Shanmugam</p>
            <p className="text-primary text-[8px] sm:text-[10px] md:text-xs">Founder & CEO of</p>
            <p className="text-primary text-[8px] sm:text-[10px] md:text-xs font-semibold">THE KARTHIK MEDIA</p>
          </div>
        </div>

        {/* Testimonial Card - Bottom Right */}
        <div className="absolute bottom-[20%] sm:bottom-[18%] right-2 sm:right-4 md:right-8 lg:right-12 bg-background/95 backdrop-blur-sm p-2 sm:p-3 md:p-4 rounded-xl max-w-[110px] sm:max-w-[140px] md:max-w-[180px] border border-primary/20 z-40 pointer-events-auto">
          <div className="flex gap-0.5 mb-1 sm:mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 fill-primary text-primary" />
            ))}
          </div>
          <p className="text-primary text-[8px] sm:text-[9px] md:text-[10px] italic mb-2 sm:mb-3 line-clamp-3">
            "I was shocked at how smoothly they managed our content, ads, and automation. our revenue grew 8X within only two months."
          </p>
          <div className="flex items-center gap-1 sm:gap-2">
            <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-primary overflow-hidden flex-shrink-0">
              <img 
                alt="Dr. R. Kanmani" 
                className="w-full h-full object-cover" 
                src="/lovable-uploads/4ca41282-db8e-4d80-b164-3669398869b0.png"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div>
              <p className="text-primary font-bold text-[8px] sm:text-[9px] md:text-[10px]">DR. R. KANMANI</p>
              <p className="text-foreground text-[7px] sm:text-[8px] md:text-[9px] uppercase">Correspondent</p>
              <p className="text-muted-foreground text-[7px] sm:text-[8px] md:text-[9px]">Dolphin Group of Schools</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
