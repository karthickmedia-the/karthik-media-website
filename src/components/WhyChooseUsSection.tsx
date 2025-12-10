import { motion } from "framer-motion";
import { Target, Zap, Users, TrendingUp, Shield, Clock } from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "Data-Driven Strategy",
    description: "Every campaign is backed by deep analytics and market research to maximize your ROI.",
  },
  {
    icon: Zap,
    title: "Fast Execution",
    description: "We move quickly without compromising quality—launch campaigns within days, not weeks.",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "Get a committed team that treats your business like their own, available when you need them.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Growth",
    description: "Our strategies are designed to grow with you—from startup budgets to enterprise scale.",
  },
  {
    icon: Shield,
    title: "Transparent Reporting",
    description: "Clear, honest communication with detailed reports—no hidden metrics or confusing jargon.",
  },
  {
    icon: Clock,
    title: "12+ Years Experience",
    description: "Over a decade of navigating digital trends and delivering results across industries.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-20 md:py-32 bg-black w-full relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C8F200]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 bg-[#C8F200]/10 border border-[#C8F200]/30 rounded-full text-[#C8F200] text-sm font-medium mb-6"
            >
              Why Us
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Why Brands <span className="text-[#C8F200]">Trust</span> Us
            </h2>
            <p className="text-gray-400 text-base md:text-lg mb-8">
              We don't just run ads—we build growth engines. Our approach combines creativity with data, 
              delivering measurable results that actually move your business forward.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-6 py-3 bg-[#C8F200] text-black font-semibold rounded-lg transition-all hover:shadow-[0_0_30px_rgba(200,242,0,0.4)]"
              >
                Start Your Growth
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-6 py-3 border border-zinc-700 text-white font-semibold rounded-lg transition-all hover:border-[#C8F200]/50 hover:text-[#C8F200]"
              >
                View Case Studies
              </motion.a>
            </div>
          </motion.div>

          {/* Right grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gradient-to-br from-zinc-900/60 to-zinc-950/60 backdrop-blur-sm border border-zinc-800/50 rounded-xl p-5 h-full transition-all duration-500 hover:border-[#C8F200]/30 hover:bg-zinc-900/80">
                  <div className="w-10 h-10 rounded-lg bg-[#C8F200]/10 flex items-center justify-center mb-4 group-hover:bg-[#C8F200]/20 transition-colors">
                    <reason.icon className="w-5 h-5 text-[#C8F200]" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{reason.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
