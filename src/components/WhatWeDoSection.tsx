import { motion } from "framer-motion";
import { Globe, Search, Target, Megaphone, Video, Bot } from "lucide-react";

const services = [
  { icon: Globe, name: "Webdesign", color: "text-emerald-400" },
  { icon: Search, name: "Search Engine Optimization", color: "text-blue-400" },
  { icon: Target, name: "Google Ads", color: "text-yellow-400" },
  { icon: Megaphone, name: "META Ads", color: "text-red-400" },
  { icon: Video, name: "Content Creation", color: "text-purple-400" },
  { icon: Bot, name: "AI Automation/Funnels", color: "text-cyan-400" },
];

const WhatWeDoSection = () => {
  return (
    <section className="relative min-h-screen bg-background py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground mb-4">
            What we <span className="text-primary">do?</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Creating High Quality Traffic for Conversions
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative bg-card/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:scale-105 text-center">
                  <div className={`mb-4 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 ${service.color}`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-foreground leading-tight">
                    {service.name}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats/Results Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {/* Daily Leads */}
          <div className="relative bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-3xl p-8 text-center group hover:border-primary/40 transition-all duration-300">
            <div className="absolute inset-0 bg-primary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <span className="text-5xl md:text-6xl font-black text-primary">∞</span>
              <h3 className="text-2xl md:text-3xl font-black text-foreground mt-4 mb-2">
                Daily Leads
              </h3>
              <p className="text-muted-foreground">
                Consistent flow of qualified prospects
              </p>
            </div>
          </div>

          {/* Sales Conversions */}
          <div className="relative bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-3xl p-8 text-center group hover:border-primary/40 transition-all duration-300">
            <div className="absolute inset-0 bg-primary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <span className="text-5xl md:text-6xl font-black text-primary">10X</span>
              <h3 className="text-2xl md:text-3xl font-black text-foreground mt-4 mb-2">
                Sales Conversions
              </h3>
              <p className="text-muted-foreground">
                Turn traffic into revenue
              </p>
            </div>
          </div>

          {/* Your Brand */}
          <div className="relative bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-3xl p-8 text-center group hover:border-primary/40 transition-all duration-300">
            <div className="absolute inset-0 bg-primary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <span className="text-5xl md:text-6xl font-black text-primary">★</span>
              <h3 className="text-2xl md:text-3xl font-black text-foreground mt-4 mb-2">
                Your Brand
              </h3>
              <p className="text-muted-foreground">
                Build recognition & trust
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
