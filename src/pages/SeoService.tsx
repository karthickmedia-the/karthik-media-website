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
  Star,
  Zap,
  LineChart,
  Users
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";

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

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "CEO - TechStart Solutions",
    review: "Our organic traffic increased by 400% within 6 months. The Karthik Media's SEO team truly understands how to rank websites in competitive niches.",
    rating: 5,
    initials: "RK",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Priya Sharma",
    role: "Marketing Director - EduLearn Academy",
    review: "From page 5 to position 1 for our main keywords. Their strategic approach to SEO completely transformed our online visibility.",
    rating: 5,
    initials: "PS",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Mohammed Farhan",
    role: "Founder - GreenEarth Organics",
    review: "The local SEO work they did helped us dominate Google Maps in our city. Our store visits doubled within 3 months!",
    rating: 5,
    initials: "MF",
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Ananya Reddy",
    role: "Owner - Reddy's Restaurant Chain",
    review: "Professional, transparent, and results-driven. They explained everything in simple terms and delivered exactly what they promised.",
    rating: 5,
    initials: "AR",
    color: "from-orange-500 to-red-500",
  },
  {
    name: "Suresh Menon",
    role: "Director - BuildRight Construction",
    review: "We were skeptical about SEO, but the leads we get now from organic search have the highest conversion rate of all our channels.",
    rating: 5,
    initials: "SM",
    color: "from-indigo-500 to-violet-500",
  },
  {
    name: "Lakshmi Venkat",
    role: "Founder - Ayurveda Wellness",
    review: "Their content strategy combined with technical SEO gave us consistent growth month after month. Highly recommend their services!",
    rating: 5,
    initials: "LV",
    color: "from-teal-500 to-cyan-500",
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
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button variant="hero-primary" size="lg" className="text-lg px-8">
            Get Free SEO Audit
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 border-primary/30 text-foreground hover:bg-primary/10">
            View Case Studies
          </Button>
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

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? "text-primary fill-primary" : "text-muted-foreground/30"}`}
      />
    ))}
  </div>
);

const TestimonialsSection = () => {
  return (
    <section className="relative bg-background py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-foreground mb-4">
            Client <span className="text-primary">Success Stories</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from real businesses who trusted us with their SEO.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative p-6 bg-card/50 border border-primary/10 rounded-2xl overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_30px_rgba(200,242,0,0.1)]">
                {/* Faceless Avatar */}
                <div className="flex items-start gap-4 mb-4">
                  <motion.div 
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${testimonial.color} flex items-center justify-center flex-shrink-0`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <span className="text-white font-bold text-lg">{testimonial.initials}</span>
                  </motion.div>
                  <div>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <div className="mt-1">
                      <StarRating rating={testimonial.rating} />
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <div className="relative">
                  <div className="absolute -top-2 -left-2 text-4xl text-primary/20 font-serif">"</div>
                  <p className="text-muted-foreground text-sm leading-relaxed pl-4">
                    {testimonial.review}
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <motion.div
                  className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Zap className="w-4 h-4 text-primary/30" />
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

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero-primary" size="lg" className="text-lg px-10">
              Get Free SEO Audit
              <Search className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-10 border-primary/30 text-foreground hover:bg-primary/10">
              Schedule a Call
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SeoService = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
};

export default SeoService;