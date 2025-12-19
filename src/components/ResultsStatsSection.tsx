import { useEffect, useState, useRef } from "react";

const stats = [
  { value: 116, suffix: "+", label: "Projects Delivered", description: "Successful campaigns launched" },
  { value: 12, suffix: "+", label: "Years Experience", description: "Industry expertise" },
  { value: 10, suffix: "X", label: "Average ROI", description: "Return on ad spend" },
  { value: 98, suffix: "%", label: "Client Retention", description: "Long-term partnerships" },
];

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (hasAnimated) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 1500;
          const startTime = performance.now();
          
          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setDisplayValue(Math.round(easeOut * value));
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <span ref={ref} className="text-5xl md:text-7xl font-bold text-[#C8F200]">
      {displayValue}{suffix}
    </span>
  );
};

const ResultsStatsSection = () => {
  return (
    <section className="py-20 md:py-32 bg-black w-full relative overflow-hidden">
      {/* Background effects - Static */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#C8F200]/5 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#C8F200]/10 border border-[#C8F200]/30 rounded-full text-[#C8F200] text-sm font-medium mb-6">
            Proven Results
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Numbers That <span className="text-[#C8F200]">Speak</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Our Successful track record of delivering exceptional results for businesses across industries.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="relative group">
              <div className="bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 backdrop-blur-sm border border-zinc-800/50 rounded-2xl p-6 md:p-8 text-center transition-all duration-300 hover:border-[#C8F200]/40 hover:shadow-[0_0_30px_rgba(200,242,0,0.1)]">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <p className="text-white font-semibold text-lg mt-4">{stat.label}</p>
                <p className="text-gray-500 text-sm mt-1">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsStatsSection;
