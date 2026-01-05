import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Search, 
  TrendingUp, 
  Target, 
  BarChart3, 
  Globe, 
  FileSearch, 
  Link2, 
  Gauge, 
  ChevronRight,
  Zap,
  LineChart,
  Users
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const seoFeatures = [
  {
    icon: FileSearch,
    title: "Technical SEO Audit",
    description: "Comprehensive analysis of your website's technical health, identifying issues that impact search rankings.",
  },
  {
    icon: Target,
    title: "Keyword Research",
    description: "Data-driven keyword strategies that target high-intent searches in your niche market.",
  },
  {
    icon: Link2,
    title: "Link Building",
    description: "High-quality backlink acquisition from authoritative domains to boost your domain authority.",
  },
  {
    icon: FileSearch,
    title: "Content Optimization",
    description: "Strategic content improvements that align with search intent and ranking factors.",
  },
  {
    icon: Globe,
    title: "Local SEO",
    description: "Dominate local search results and Google Maps to capture nearby customers.",
  },
  {
    icon: Gauge,
    title: "Performance Tracking",
    description: "Real-time monitoring and detailed reports on your SEO progress and ROI.",
  },
];

const stats = [
  { value: "500+", label: "Keywords Ranked", icon: Search },
  { value: "10X", label: "Traffic Growth", icon: TrendingUp },
  { value: "95%", label: "Client Retention", icon: Users },
  { value: "150+", label: "Projects Completed", icon: BarChart3 },
];

const seoProcess = [
  { 
    phase: "Audit", 
    title: "Deep Analysis", 
    description: "Complete website audit to identify SEO issues and opportunities",
    metrics: ["Site Health Score", "Competitor Gap Analysis", "Technical Issues"]
  },
  { 
    phase: "Strategy", 
    title: "Custom Roadmap", 
    description: "Tailored SEO strategy based on your business goals and market",
    metrics: ["Keyword Mapping", "Content Calendar", "Link Strategy"]
  },
  { 
    phase: "Execute", 
    title: "Implementation", 
    description: "Execute on-page, off-page, and technical optimizations",
    metrics: ["Content Creation", "Link Acquisition", "Technical Fixes"]
  },
  { 
    phase: "Scale", 
    title: "Growth & Optimize", 
    description: "Continuous optimization based on data and algorithm updates",
    metrics: ["Rank Tracking", "Traffic Analysis", "Conversion Optimization"]
  },
];


const DataStream = ({ delay }: { delay: number }) => (
  <motion.div
    className="absolute w-0.5 bg-gradient-to-b from-transparent via-primary to-transparent"
    style={{ height: "100px" }}
    initial={{ y: "-100%", opacity: 0 }}
    animate={{ y: "200%", opacity: [0, 1, 1, 0] }}
    transition={{
      duration: 3,
      delay,
      repeat: Infinity,
      ease: "linear",
    }}
  />
);

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Animated Search Grid Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(200,242,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(200,242,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        {/* Animated Search Pulse */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary/10"
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-primary/20"
          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
        />
      </div>

      {/* Data Streams */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="absolute" style={{ left: `${10 + i * 10}%`, top: 0, height: "100%" }}>
            <DataStream delay={i * 0.4} />
          </div>
        ))}
      </div>

      {/* Floating Search Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ 
              left: `${15 + i * 15}%`, 
              top: `${20 + (i % 3) * 25}%` 
            }}
            animate={{ 
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ 
              duration: 4 + i, 
              repeat: Infinity,
              delay: i * 0.5
            }}
          >
            <Search className="w-8 h-8 text-primary/20" />
          </motion.div>
        ))}
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 container mx-auto px-4 text-center">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Rank Higher, Grow Faster</span>
          </div>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="block">SEO</span>
          <span className="text-primary relative">
            Services
            <motion.span
              className="absolute -inset-2 bg-primary/20 blur-xl"
              animate={{ opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Dominate search rankings with data-driven SEO strategies that drive organic traffic, boost visibility, and deliver measurable ROI.
        </motion.p>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a href="https://topmate.io/karthik_media/1790830" target="_blank" rel="noopener noreferrer">
            <Button variant="hero-primary" size="lg" className="text-lg px-8">
              Start Your Project
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </a>
        </motion.div>
      </motion.div>

      {/* Animated Ranking Visualization */}
      <motion.div
        className="absolute bottom-20 right-10 hidden lg:block"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="relative w-48 h-32 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-xl p-4">
          <div className="text-xs text-muted-foreground mb-2">Ranking Progress</div>
          <div className="flex items-end gap-1 h-16">
            {[40, 55, 45, 70, 65, 85, 95].map((height, i) => (
              <motion.div
                key={i}
                className="flex-1 bg-primary/60 rounded-t"
                initial={{ height: 0 }}
                animate={{ height: `${height}%` }}
                transition={{ duration: 0.5, delay: 1.2 + i * 0.1 }}
              />
            ))}
          </div>
          <motion.div 
            className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <TrendingUp className="w-3 h-3 text-black" />
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 bg-primary rounded-full mt-2"
            animate={{ y: [0, 12, 0], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

const StatsSection = () => {
  return (
    <section className="relative bg-background py-16 border-y border-primary/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <motion.div 
                className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-xl flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <stat.icon className="w-7 h-7 text-primary" />
              </motion.div>
              <motion.div 
                className="text-4xl md:text-5xl font-black text-primary mb-2"
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, delay: index * 0.1 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative bg-background py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-foreground mb-4">
            Our SEO <span className="text-primary">Arsenal</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive SEO solutions that cover every aspect of search engine optimization.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {seoFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative group cursor-pointer"
            >
              <div className="relative p-8 bg-card/50 border border-primary/10 rounded-2xl overflow-hidden transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_40px_rgba(200,242,0,0.15)]">
                {/* HUD Corner Brackets */}
                <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-primary/0 group-hover:border-primary transition-all duration-300" />
                <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-primary/0 group-hover:border-primary transition-all duration-300" />
                <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-primary/0 group-hover:border-primary transition-all duration-300" />
                <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-primary/0 group-hover:border-primary transition-all duration-300" />

                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                <motion.div
                  className="relative w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6"
                  animate={hoveredIndex === index ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <feature.icon className="w-7 h-7 text-primary" />
                </motion.div>

                <h3 className="text-xl font-bold text-foreground mb-3 relative group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground relative">{feature.description}</p>

                {/* Animated underline */}
                <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-primary transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  return (
    <section className="relative bg-background py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(200,242,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(200,242,0,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-foreground mb-4">
            The SEO <span className="text-primary">Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A proven methodology that delivers consistent ranking improvements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {seoProcess.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative group"
            >
              {/* Connection Line */}
              {index < seoProcess.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent z-0" />
              )}

              <div className="relative p-6 bg-card/30 border border-primary/10 rounded-2xl hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(200,242,0,0.1)]">
                {/* Phase Badge */}
                <motion.div 
                  className="absolute -top-4 left-6 px-4 py-1 bg-primary text-black font-bold text-sm rounded-full"
                  whileHover={{ scale: 1.05 }}
                >
                  {step.phase}
                </motion.div>

                <div className="pt-4">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{step.description}</p>

                  {/* Metrics */}
                  <div className="space-y-2">
                    {step.metrics.map((metric, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center gap-2 text-xs text-primary/80"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + i * 0.1 }}
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {metric}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Animated indicator */}
                <motion.div
                  className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <LineChart className="w-4 h-4 text-primary" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="relative bg-background py-24 overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Start Ranking Today</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6">
            Ready to <span className="text-primary">Dominate</span> Search Results?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Get a free SEO audit and discover how we can help your business achieve top rankings and drive organic growth.
          </p>

          <a href="https://topmate.io/karthik_media/1790830" target="_blank" rel="noopener noreferrer">
            <Button variant="hero-primary" size="lg" className="text-lg px-10">
              Start Your Project
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const SeoService = () => {
  return (
    <main className="min-h-screen bg-background">
      <SEOHead
        title="SEO Services - Rank Higher on Google"
        description="Expert SEO services that drive organic traffic and boost your search rankings. Technical SEO audit, keyword research, link building, and local SEO for measurable ROI."
        canonicalUrl="/services/seo"
        keywords="SEO services, search engine optimization, keyword research, link building, local SEO, technical SEO, Google ranking"
      />
      <Navbar />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <ProcessSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default SeoService;