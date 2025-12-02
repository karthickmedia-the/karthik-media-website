import { Button } from "@/components/ui/button";
import { Star, ArrowRight } from "lucide-react";
import heroPersonImage from "@/assets/hero-person.png";
const HeroSection = () => {
  return <section className="relative min-h-screen pb-12 bg-background overflow-hidden pt-16">
      {/* Futuristic Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-zinc-900" />
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(200,242,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(200,242,0,0.03)_1px,transparent_1px)] bg-[length:50px_50px] animate-[slideGrid_20s_linear_infinite]" />
      
      {/* Pulsing Radial Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(200,242,0,0.05),transparent_60%)] animate-pulse" style={{
      animationDuration: '3s'
    }} />
      
      {/* Scanning Lines Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_0%,rgba(200,242,0,0.03)_50%,transparent_100%)] bg-[length:100%_4px] animate-[scan_8s_linear_infinite]" />
      
      {/* Diagonal Moving Stripes */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(200,242,0,0.02)_50%,transparent_52%)] bg-[length:30px_30px] animate-[slideStripes_15s_linear_infinite]" />
      
      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/3 rounded-full blur-3xl animate-[float_15s_ease-in-out_infinite_reverse]" />
      
      {/* Interactive Futuristic HUD System */}
      <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
        {/* Radar Scanning Animation - Bottom Left */}
        <div className="absolute bottom-[5%] left-[5%] w-48 h-48 md:w-64 md:h-64">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <defs>
              <linearGradient id="radarGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(200,242,0,0)" />
                <stop offset="100%" stopColor="rgba(200,242,0,0.8)" />
              </linearGradient>
            </defs>
            {/* Radar Circles */}
            <circle cx="100" cy="100" r="80" fill="none" stroke="rgba(200,242,0,0.3)" strokeWidth="1" />
            <circle cx="100" cy="100" r="60" fill="none" stroke="rgba(200,242,0,0.3)" strokeWidth="1" />
            <circle cx="100" cy="100" r="40" fill="none" stroke="rgba(200,242,0,0.3)" strokeWidth="1" />
            <circle cx="100" cy="100" r="20" fill="none" stroke="rgba(200,242,0,0.5)" strokeWidth="1" />
            {/* Scanning Line */}
            <line x1="100" y1="100" x2="100" y2="20" stroke="url(#radarGradient)" strokeWidth="2" className="origin-center animate-[radar_4s_linear_infinite]" style={{
            transformOrigin: '100px 100px'
          }} />
            {/* Crosshair */}
            <line x1="100" y1="0" x2="100" y2="200" stroke="rgba(200,242,0,0.2)" strokeWidth="1" strokeDasharray="2,2" />
            <line x1="0" y1="100" x2="200" y2="100" stroke="rgba(200,242,0,0.2)" strokeWidth="1" strokeDasharray="2,2" />
          </svg>
        </div>

        {/* Data Stream Particles - Left Side */}
        <div className="absolute left-[15%] top-0 bottom-0 w-1 flex flex-col justify-around">
          <div className="w-1 h-20 bg-gradient-to-b from-transparent via-primary to-transparent animate-[dataStream_3s_linear_infinite]" style={{
          animationDelay: '0s'
        }} />
          <div className="w-1 h-16 bg-gradient-to-b from-transparent via-primary to-transparent animate-[dataStream_3s_linear_infinite]" style={{
          animationDelay: '1s'
        }} />
          <div className="w-1 h-12 bg-gradient-to-b from-transparent via-primary to-transparent animate-[dataStream_3s_linear_infinite]" style={{
          animationDelay: '2s'
        }} />
        </div>
        <div className="absolute right-[15%] top-0 bottom-0 w-1 flex flex-col justify-around">
          <div className="w-1 h-16 bg-gradient-to-b from-transparent via-primary to-transparent animate-[dataStream_3s_linear_infinite]" style={{
          animationDelay: '0.5s'
        }} />
          <div className="w-1 h-20 bg-gradient-to-b from-transparent via-primary to-transparent animate-[dataStream_3s_linear_infinite]" style={{
          animationDelay: '1.5s'
        }} />
          <div className="w-1 h-14 bg-gradient-to-b from-transparent via-primary to-transparent animate-[dataStream_3s_linear_infinite]" style={{
          animationDelay: '2.5s'
        }} />
        </div>

        {/* Circular Progress Indicators - Top Right */}
        <div className="absolute top-[10%] right-[8%] w-32 h-32 md:w-40 md:h-40">
          <svg viewBox="0 0 120 120" className="w-full h-full animate-[rotate_8s_linear_infinite]">
            <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(200,242,0,0.2)" strokeWidth="1" />
            <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(200,242,0,0.8)" strokeWidth="2" strokeDasharray="314" strokeDashoffset="78" className="animate-[progressCircle_2s_ease-in-out_infinite]" strokeLinecap="round" transform="rotate(-90 60 60)" />
            <circle cx="60" cy="60" r="38" fill="none" stroke="rgba(200,242,0,0.3)" strokeWidth="1" />
            <circle cx="60" cy="60" r="38" fill="none" stroke="rgba(200,242,0,0.6)" strokeWidth="2" strokeDasharray="238" strokeDashoffset="119" className="animate-[progressCircle_2s_ease-in-out_infinite]" strokeLinecap="round" transform="rotate(-90 60 60)" style={{
            animationDelay: '0.5s'
          }} />
          </svg>
        </div>

        {/* Multi-Line Growth Chart - Bottom Center */}
        <div className="absolute bottom-[8%] left-[20%] right-[20%] h-[30%]">
          <svg viewBox="0 0 600 200" className="w-full h-full" preserveAspectRatio="none">
            {/* Grid */}
            <defs>
              <pattern id="chartGrid" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(200,242,0,0.15)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="600" height="200" fill="url(#chartGrid)" />
            
            {/* Animated Chart Lines */}
            <polyline points="0,180 100,150 200,120 300,90 400,70 500,50 600,30" fill="none" stroke="rgba(200,242,0,0.7)" strokeWidth="2" strokeDasharray="1000" className="animate-[drawLine_4s_ease-out_infinite]" />
            <polyline points="0,190 100,170 200,145 300,115 400,95 500,80 600,65" fill="none" stroke="rgba(200,242,0,0.5)" strokeWidth="2" strokeDasharray="1000" className="animate-[drawLine_4s_ease-out_infinite]" style={{
            animationDelay: '0.5s'
          }} />
            
            {/* Data Points */}
            {[0, 100, 200, 300, 400, 500, 600].map((x, i) => <circle key={i} cx={x} cy={180 - i * 25} r="3" fill="rgba(200,242,0,1)" className="animate-[pulse_2s_ease-in-out_infinite]" style={{
            animationDelay: `${i * 0.2}s`
          }} />)}
          </svg>
        </div>

        {/* Hexagonal Grid Pattern - Top Left */}
        <div className="absolute top-[15%] left-[8%] w-32 h-32 md:w-40 md:h-40 animate-[pulse_3s_ease-in-out_infinite]">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {[0, 1, 2].map(row => [0, 1, 2].map(col => <polygon key={`${row}-${col}`} points="30,15 45,7.5 60,15 60,30 45,37.5 30,30" transform={`translate(${col * 20}, ${row * 26})`} fill="none" stroke="rgba(200,242,0,0.4)" strokeWidth="1" className="animate-[hexPulse_2s_ease-in-out_infinite]" style={{
            animationDelay: `${(row + col) * 0.2}s`
          }} />))}
          </svg>
        </div>

        {/* Vertical Progress Bars - Right Side */}
        <div className="absolute right-[5%] top-[30%] flex gap-2">
          {[60, 75, 90, 70, 85].map((height, i) => <div key={i} className="w-1 h-24 bg-primary/10 relative overflow-hidden">
              <div className="absolute bottom-0 w-full bg-primary animate-[fillBar_3s_ease-out_infinite]" style={{
            animationDelay: `${i * 0.3}s`,
            height: `${height}%`
          }} />
            </div>)}
        </div>
      </div>
      
      {/* Vignette Effects */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-40" />
      
      <div className="container mx-auto px-4 py-6 relative z-10">
        {/* Top Headline */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16 mt-12 md:mt-16 lg:mt-20 relative z-30 px-2">
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-1">
            <span className="text-foreground">THE ONLY DIGITAL </span>
            <span className="text-foreground font-extrabold">MARKETING</span>
            <span className="text-foreground"> AGENCY</span>
          </h1>
          <p className="text-primary text-sm sm:text-base md:text-lg lg:text-xl italic font-extrabold">
            THAT DRIVES YOUR BUSINESS FOR
          </p>
        </div>

        {/* Main Content Area - 10X + Person Image Overlapped */}
        <div className="relative flex justify-center items-center min-h-[400px] sm:min-h-[450px] md:min-h-[550px] lg:min-h-[600px] mt-8 md:mt-12 lg:mt-16">
          {/* 10X Text - Positioned to overlap with person */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
            <h2 className="relative text-[5rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-black leading-none text-primary animate-[quickShake_4s_ease-in-out_infinite] before:content-['10X'] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:text-black before:animate-[blackGlitchLeft_3s_steps(2)_infinite] before:opacity-0 after:content-['10X'] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:text-black after:animate-[blackGlitchRight_3.5s_steps(2)_infinite] after:opacity-0">
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
          <Button variant="hero-primary" size="lg" className="w-full sm:w-auto min-w-[200px] md:min-w-[240px] text-sm md:text-base relative overflow-hidden animate-[ctaGlow_2s_ease-in-out_infinite] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:animate-[ctaShimmer_3s_ease-in-out_infinite]">
            BOOK 1:1 CALL WITH ME
          </Button>
          <Button variant="hero-secondary" size="lg" className="w-full sm:w-auto min-w-[200px] md:min-w-[240px] text-sm md:text-base">
            CHECK OUR WORKS
          </Button>
        </div>

        {/* Founder Info - Left Side with Animated Arrow */}
        <div className="absolute bottom-[28%] sm:bottom-[25%] left-2 sm:left-4 md:left-8 lg:left-12 flex items-center gap-1 sm:gap-2 z-40">
          {/* Connecting line to image */}
          <svg className="absolute left-full top-1/2 -translate-y-1/2 w-16 sm:w-24 md:w-32 h-1 pointer-events-none z-0" style={{
          left: 'calc(100% - 0.5rem)'
        }}>
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
          <svg className="absolute right-full top-1/2 -translate-y-1/2 w-16 sm:w-24 md:w-32 h-1 pointer-events-none z-0" style={{
          right: 'calc(100% - 0.5rem)'
        }}>
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