import { Button } from "@/components/ui/button";
import { Star, ArrowRight } from "lucide-react";
import heroPersonImage from "@/assets/hero-person.png";
const HeroSection = () => {
  return <section className="relative min-h-screen pb-12 bg-background overflow-hidden pt-16">
      {/* Cinematic Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-zinc-900 opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(200,242,0,0.03),transparent_50%)] animate-pulse" style={{
      animationDuration: '4s'
    }} />
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(200,242,0,0.02)_50%,transparent_52%)] bg-[length:20px_20px] animate-[slide_20s_linear_infinite]" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent" />
      
      <div className="container mx-auto px-4 py-6 relative z-10">
        {/* Top Headline */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16 relative z-30 px-2">
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-1">
            <span className="text-foreground">THE ONLY DIGITAL </span>
            <span className="text-foreground font-extrabold">MARKETING</span>
            <span className="text-foreground"> AGENCY</span>
          </h1>
          <p className="text-primary text-sm sm:text-base md:text-lg lg:text-xl italic">
            THAT DRIVES YOUR BUSINESS WITH
          </p>
        </div>

        {/* Main Content Area - 10X + Person Image Overlapped */}
        <div className="relative flex justify-center items-center min-h-[400px] sm:min-h-[450px] md:min-h-[550px] lg:min-h-[600px] mt-8 md:mt-12 lg:mt-16">
          {/* 10X Text - Positioned to overlap with person */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
            <h2 className="text-[5rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-black leading-none text-primary">
              10X
            </h2>
            <span className="absolute -bottom-4 sm:-bottom-6 md:-bottom-8 right-0 text-base sm:text-lg md:text-xl lg:text-2xl italic text-foreground">
              GROWTH
            </span>
          </div>

          {/* Person Image - Centered, overlapping 10X */}
          <div className="relative flex justify-center items-center w-full px-4 sm:px-0">
            {/* Person Image - Responsive Sizing */}
            <img alt="Digital Marketing Expert" src="/lovable-uploads/018ff520-50b9-4ad3-8314-5e8b6390a523.png" className="relative z-30 w-full max-w-[300px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[500px] h-auto object-contain border-slate-50 border rounded-3xl opacity-100" />
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="relative flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-3 md:gap-4 z-30 -mt-6 sm:-mt-8 md:-mt-12 lg:-mt-16 px-4">
          <Button variant="hero-primary" size="lg" className="w-full sm:w-auto min-w-[200px] md:min-w-[240px] text-sm md:text-base">
            BOOK 1:1 CALL WITH ME
          </Button>
          <Button variant="hero-secondary" size="lg" className="w-full sm:w-auto min-w-[200px] md:min-w-[240px] text-sm md:text-base">
            CHECK OUR WORKS
          </Button>
        </div>

        {/* Founder Info - Left Side with Animated Arrow */}
        <div className="absolute bottom-[28%] sm:bottom-[25%] left-2 sm:left-4 md:left-8 lg:left-12 flex items-center gap-1 sm:gap-2 z-40">
          {/* Connecting line to image */}
          <svg className="absolute left-full top-1/2 -translate-y-1/2 w-16 sm:w-24 md:w-32 h-1 pointer-events-none z-0" style={{ left: 'calc(100% - 0.5rem)' }}>
            <line x1="0" y1="50%" x2="100%" y2="50%" stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="4 4" opacity="0.6">
              <animate attributeName="stroke-dashoffset" from="8" to="0" dur="1s" repeatCount="indefinite" />
            </line>
          </svg>
          <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 text-primary animate-pulse" />
          <div className="bg-background/95 backdrop-blur-sm p-2 sm:p-3 md:p-4 rounded-lg border-2 border-primary/20 relative">
            <p className="text-foreground font-bold text-[10px] sm:text-xs md:text-sm">Karthik Shanmugam</p>
            <p className="text-primary text-[8px] sm:text-[10px] md:text-xs">Founder & CEO of</p>
            <p className="text-primary text-[8px] sm:text-[10px] md:text-xs font-semibold">THE KARTHIK MEDIA</p>
          </div>
        </div>

        {/* Testimonial Card - Bottom Right */}
        <div className="absolute bottom-[20%] sm:bottom-[18%] right-2 sm:right-4 md:right-8 lg:right-12 bg-background/95 backdrop-blur-sm p-2 sm:p-3 md:p-4 rounded-xl max-w-[110px] sm:max-w-[140px] md:max-w-[180px] border border-primary/20 z-40">
          {/* Connecting line to image */}
          <svg className="absolute right-full top-1/2 -translate-y-1/2 w-16 sm:w-24 md:w-32 h-1 pointer-events-none z-0" style={{ right: 'calc(100% - 0.5rem)' }}>
            <line x1="0" y1="50%" x2="100%" y2="50%" stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="4 4" opacity="0.6">
              <animate attributeName="stroke-dashoffset" from="0" to="8" dur="1s" repeatCount="indefinite" />
            </line>
          </svg>
          <div className="flex gap-0.5 mb-1 sm:mb-2">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 fill-primary text-primary" />)}
          </div>
          <p className="text-primary text-[8px] sm:text-[9px] md:text-[10px] italic mb-2 sm:mb-3 line-clamp-3">
            "I was shocked at how smoothly they managed our content, ads, and automation. our revenue grew 8X within only two months."
          </p>
          <div className="flex items-center gap-1 sm:gap-2">
            <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-primary overflow-hidden flex-shrink-0">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" alt="Dr. R. Kanmani" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-primary font-bold text-[8px] sm:text-[9px] md:text-[10px]">DR. R. KANMANI</p>
              <p className="text-foreground text-[7px] sm:text-[8px] md:text-[9px] uppercase">Correspondent</p>
              <p className="text-muted-foreground text-[7px] sm:text-[8px] md:text-[9px]">Dolphin Group of Schools</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;