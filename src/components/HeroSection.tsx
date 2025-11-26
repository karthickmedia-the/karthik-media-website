import { Button } from "@/components/ui/button";
import { Star, ArrowRight } from "lucide-react";
import heroPersonImage from "@/assets/hero-person.png";
const HeroSection = () => {
  return <section className="relative min-h-screen bg-background overflow-hidden pt-20">
      {/* Cinematic Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-zinc-900 opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(200,242,0,0.03),transparent_50%)] animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(200,242,0,0.02)_50%,transparent_52%)] bg-[length:20px_20px] animate-[slide_20s_linear_infinite]" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent" />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Top Headline */}
        <div className="text-center mb-4 md:mb-2 relative z-30 px-2">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-2">
            <span className="text-foreground">THE ONLY DIGITAL </span>
            <span className="text-foreground font-extrabold">MARKETING</span>
            <span className="text-foreground"> AGENCY</span>
          </h1>
          <p className="text-primary text-base sm:text-lg md:text-xl lg:text-2xl italic">
            THAT DRIVES YOUR BUSINESS WITH
          </p>
        </div>

        {/* Main Content Area - 10X + Person Image Overlapped */}
        <div className="relative flex justify-center items-center min-h-[600px] sm:min-h-[700px] md:min-h-[900px] lg:min-h-[1000px]">
          {/* 10X Text - Positioned to overlap with person */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
            <h2 className="text-[8rem] sm:text-[10rem] md:text-[14rem] lg:text-[18rem] font-black leading-none text-primary">
              10X
            </h2>
            <span className="absolute -bottom-6 sm:-bottom-8 md:-bottom-12 right-0 text-xl sm:text-2xl md:text-3xl lg:text-4xl italic text-foreground">
              GROWTH
            </span>
          </div>

          {/* Person Image - Centered, overlapping 10X */}
          <div className="relative flex justify-center items-center w-full px-4 sm:px-0">
            {/* Person Image - Responsive Sizing */}
            <img 
              alt="Digital Marketing Expert" 
              src="/lovable-uploads/018ff520-50b9-4ad3-8314-5e8b6390a523.png" 
              className="relative z-30 w-full max-w-[400px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[800px] h-auto object-contain border-slate-50 border rounded-3xl opacity-100" 
            />
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="relative flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 md:gap-6 z-30 -mt-10 sm:-mt-16 md:-mt-24 lg:-mt-32 px-4">
          <Button variant="hero-primary" size="xl" className="w-full sm:w-auto min-w-[250px] md:min-w-[300px]">
            BOOK 1:1 CALL WITH ME
          </Button>
          <Button variant="hero-secondary" size="xl" className="w-full sm:w-auto min-w-[250px] md:min-w-[300px]">
            CHECK OUR WORKS
          </Button>
        </div>

        {/* Founder Info - Left Side with Animated Arrow */}
        <div className="absolute bottom-1/3 sm:bottom-1/4 left-2 sm:left-4 md:left-8 lg:left-16 flex items-center gap-2 sm:gap-3 z-40">
          <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-primary animate-pulse" />
          <div className="bg-background/95 backdrop-blur-sm p-3 sm:p-4 md:p-5 rounded-xl border-2 border-primary/20">
            <p className="text-foreground font-bold text-xs sm:text-sm md:text-base">Karthik Shanmugam</p>
            <p className="text-primary text-[10px] sm:text-xs md:text-sm">Founder & CEO of</p>
            <p className="text-primary text-[10px] sm:text-xs md:text-sm font-semibold">THE KARTHIK MEDIA</p>
          </div>
        </div>

        {/* Testimonial Card - Bottom Right */}
        <div className="absolute bottom-36 sm:bottom-24 md:bottom-32 right-2 sm:right-4 md:right-8 lg:right-16 bg-background/95 backdrop-blur-sm p-4 sm:p-5 md:p-6 rounded-2xl max-w-[280px] sm:max-w-xs md:max-w-sm border-2 border-primary/20 z-40">
          <div className="flex gap-1 mb-2 sm:mb-3">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 fill-primary text-primary" />)}
          </div>
          <p className="text-primary text-[10px] sm:text-xs md:text-sm italic mb-3 sm:mb-4">
            "I was shocked at how smoothly they managed our content, ads, and automation. our revenue grew 8X within only two months."
          </p>
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-primary overflow-hidden flex-shrink-0">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" alt="Dr. R. Kanmani" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-primary font-bold text-[10px] sm:text-xs md:text-sm">DR. R. KANMANI</p>
              <p className="text-foreground text-[9px] sm:text-[10px] md:text-xs uppercase">Correspondent</p>
              <p className="text-muted-foreground text-[9px] sm:text-[10px] md:text-xs">Dolphin Group of Schools</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;