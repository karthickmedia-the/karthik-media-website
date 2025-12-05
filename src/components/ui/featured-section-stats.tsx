"use client";

import { motion } from "framer-motion";

const processSteps = [
  {
    step: "01",
    title: "Discovery & Deep Understanding",
    description: "We begin by understanding your business, audience, challenges, and goals.",
    outcome: "Full clarity on what you want to achieve.",
  },
  {
    step: "02",
    title: "Strategy Blueprint (AI-Powered)",
    description: "Based on insights, we create a custom AI-driven marketing blueprint.",
    outcome: "Clear roadmap with platforms, budgets, targeting, creatives, and offer strategy.",
  },
  {
    step: "03",
    title: "Execution & Funnel Setup",
    description: "We launch high-performance campaigns, funnels, automations, and creatives.",
    outcome: "Your marketing system becomes active and starts generating leads/sales.",
  },
  {
    step: "04",
    title: "Optimization & Scaling",
    description: "We monitor performance daily using AI tools and optimize for maximum ROI.",
    outcome: "Better results, lower cost-per-lead/sale, and scalable growth.",
  },
  {
    step: "05",
    title: "Reporting & Growth Consultation",
    description: "You get weekly reports and monthly consultation calls with action steps.",
    outcome: "Complete transparency + a clear plan for continuous growth.",
  },
];

const GlassCard = ({ step, index }: { step: typeof processSteps[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="group relative"
    >
      {/* Glass Panel */}
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8 transition-all duration-500 group-hover:border-primary/30 group-hover:bg-white/10">
        {/* Background gradient that moves on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
        
        {/* Content */}
        <div className="relative z-10">
          {/* Step number */}
          <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl md:text-5xl font-black text-primary/30 group-hover:text-primary/50 transition-colors duration-300">
              {step.step}
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent" />
          </div>
          
          {/* Title */}
          <h4 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
            {step.title}
          </h4>
          
          {/* Description */}
          <p className="text-muted-foreground mb-4 leading-relaxed">
            {step.description}
          </p>
          
          {/* Outcome */}
          <div className="flex items-start gap-2 pt-4 border-t border-white/10">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Outcome:</span>
            <p className="text-foreground/80 text-sm">{step.outcome}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function FeaturedSectionStats() {
  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Flowchart Connection Line */}
      <div className="relative">
        {/* Vertical timeline line - visible on desktop */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/30 to-primary/50 -translate-x-1/2 z-0" />
        
        {/* Process Steps Grid */}
        <div className="relative z-10 space-y-6 lg:space-y-12">
          {processSteps.map((step, index) => (
            <div key={step.step} className="relative">
              {/* Connection node on timeline */}
              <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                  className="w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_rgba(200,242,0,0.5)]"
                />
              </div>
              
              {/* Card positioned alternately */}
              <div className={`lg:w-[45%] ${index % 2 === 0 ? 'lg:mr-auto lg:pr-12' : 'lg:ml-auto lg:pl-12'}`}>
                {/* Horizontal connector line */}
                <div className={`hidden lg:block absolute top-1/2 h-px bg-gradient-to-r ${index % 2 === 0 ? 'right-[55%] left-[5%] from-transparent to-primary/50' : 'left-[55%] right-[5%] from-primary/50 to-transparent'}`} />
                
                <GlassCard step={step} index={index} />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Bottom Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-16 pt-12 border-t border-white/10"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="group">
            <p className="text-3xl md:text-4xl font-black text-primary group-hover:scale-110 transition-transform duration-300">12+</p>
            <p className="text-muted-foreground text-sm mt-2">Years Experience</p>
          </div>
          <div className="group">
            <p className="text-3xl md:text-4xl font-black text-primary group-hover:scale-110 transition-transform duration-300">500+</p>
            <p className="text-muted-foreground text-sm mt-2">Projects Delivered</p>
          </div>
          <div className="group">
            <p className="text-3xl md:text-4xl font-black text-primary group-hover:scale-110 transition-transform duration-300">10X</p>
            <p className="text-muted-foreground text-sm mt-2">Average ROI</p>
          </div>
          <div className="group">
            <p className="text-3xl md:text-4xl font-black text-primary group-hover:scale-110 transition-transform duration-300">98%</p>
            <p className="text-muted-foreground text-sm mt-2">Client Satisfaction</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
