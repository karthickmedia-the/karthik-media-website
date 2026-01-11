import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Target, 
  TrendingUp, 
  Users, 
  BarChart3, 
  Sparkles, 
  Zap, 
  Eye, 
  DollarSign,
  ChevronRight,
  Brain,
  Layers,
  MessageCircle,
  ShoppingCart,
  Video,
  Image as ImageIcon,
  MousePointerClick,
  Smartphone,
  Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const metaFeatures = [
  {
    icon: Target,
    title: "Advantage+ Campaigns",
    description: "AI-powered campaign optimization using Meta's latest Advantage+ suite for maximum performance and ROAS.",
  },
  {
    icon: Brain,
    title: "Andromeda AI Targeting",
    description: "Leverage Meta's Andromeda algorithm that analyzes 10,000+ signals per user for precision targeting.",
  },
  {
    icon: Users,
    title: "Custom & Lookalike Audiences",
    description: "Build high-converting audiences from your customer data and find similar high-value prospects.",
  },
  {
    icon: Video,
    title: "Reels & Video Ads",
    description: "Capture attention with engaging Reels ads that get 22% more engagement than static content.",
  },
  {
    icon: ShoppingCart,
    title: "Catalog & Shopping Ads",
    description: "Dynamic product ads that automatically show relevant products to interested shoppers.",
  },
  {
    icon: MessageCircle,
    title: "Messenger & WhatsApp Ads",
    description: "Direct conversation ads that drive instant engagement and lead generation.",
  },
];

const stats = [
  { value: "3.2B", label: "Monthly Active Users", icon: Users },
  { value: "8.4X", label: "Average ROAS", icon: DollarSign },
  { value: "65%", label: "Lower CPA", icon: TrendingUp },
  { value: "200+", label: "Campaigns Managed", icon: BarChart3 },
];

const andromedaFeatures = [
  {
    title: "10,000+ Targeting Signals",
    description: "Andromeda processes over 10,000 data signals per user including browsing behavior, purchase history, engagement patterns, and cross-platform activity.",
    icon: Layers,
  },
  {
    title: "Real-Time Optimization",
    description: "The algorithm adjusts bidding and targeting every millisecond based on live auction dynamics and user intent signals.",
    icon: Zap,
  },
  {
    title: "Cross-Platform Intelligence",
    description: "Unified insights across Facebook, Instagram, WhatsApp, and Messenger for holistic audience understanding.",
    icon: Globe,
  },
  {
    title: "Predictive Conversion Modeling",
    description: "AI predicts which users are most likely to convert, even with limited data, using advanced machine learning.",
    icon: Brain,
  },
];

const adFormats = [
  { name: "Image Ads", icon: ImageIcon, description: "High-impact visuals" },
  { name: "Video Ads", icon: Video, description: "Engaging storytelling" },
  { name: "Carousel Ads", icon: Layers, description: "Multiple products" },
  { name: "Collection Ads", icon: ShoppingCart, description: "Immersive shopping" },
  { name: "Stories Ads", icon: Smartphone, description: "Full-screen vertical" },
  { name: "Reels Ads", icon: Sparkles, description: "Short-form content" },
];

const testimonials = [
  {
    name: "Arun Prakash",
    role: "Founder - StyleKart Fashion",
    review: "Our ROAS jumped from 2X to 9X after switching to The Karthik Media. Their understanding of Meta's Andromeda algorithm is unmatched.",
    rating: 4.9,
    initials: "AP",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Deepa Krishnan",
    role: "Marketing Head - FitLife Supplements",
    review: "They reduced our cost per acquisition by 70% using Advantage+ campaigns. The results speak for themselves.",
    rating: 4.8,
    initials: "DK",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Vikram Joshi",
    role: "CEO - HomeDecor Plus",
    review: "Our catalog ads are now generating 5X more sales. Their dynamic creative strategies are incredibly effective.",
    rating: 4.7,
    initials: "VJ",
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Meera Nair",
    role: "Founder - Organic Skincare Co.",
    review: "The Reels ad strategy they implemented went viral and brought us 50,000 new followers in just 2 weeks!",
    rating: 4.9,
    initials: "MN",
    color: "from-orange-500 to-red-500",
  },
  {
    name: "Karthik Subramanian",
    role: "Director - TechGadgets India",
    review: "Their WhatsApp ads strategy generates leads at ₹15 per lead. We've never seen such efficient lead generation.",
    rating: 4.6,
    initials: "KS",
    color: "from-indigo-500 to-violet-500",
  },
  {
    name: "Anjali Reddy",
    role: "Owner - Kids Paradise Store",
    review: "From struggling with ads to now scaling to ₹10L monthly revenue. Their expertise in Meta ads is exceptional!",
    rating: 4.8,
    initials: "AR",
    color: "from-teal-500 to-cyan-500",
  },
];

const DataStream = ({ delay }: { delay: number }) => (
  <motion.div
    className="absolute w-0.5 bg-gradient-to-b from-transparent via-[#C8F200] to-transparent"
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

const FloatingIcon = ({ icon: Icon, delay, x, y }: { icon: typeof Target; delay: number; x: string; y: string }) => (
  <motion.div
    className="absolute"
    style={{ left: x, top: y }}
    animate={{ 
      y: [0, -15, 0],
      opacity: [0.3, 0.6, 0.3],
      rotate: [0, 5, -5, 0]
    }}
    transition={{ 
      duration: 4 + delay, 
      repeat: Infinity,
      delay: delay * 0.3
    }}
  >
    <Icon className="w-8 h-8 text-[#C8F200]/30" />
  </motion.div>
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
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* Animated Grid Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(200,242,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(200,242,0,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        {/* Meta-style Animated Circles */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-[#C8F200]/10"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0, 0.2], rotate: [0, 180, 360] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-[#C8F200]/20"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.1, 0.3], rotate: [360, 180, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-gradient-to-br from-[#C8F200]/10 to-transparent"
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.2, 0.4] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>

      {/* Data Streams */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="absolute" style={{ left: `${5 + i * 8}%`, top: 0, height: "100%" }}>
            <DataStream delay={i * 0.3} />
          </div>
        ))}
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingIcon icon={Target} delay={0} x="15%" y="25%" />
        <FloatingIcon icon={Users} delay={1} x="80%" y="20%" />
        <FloatingIcon icon={Sparkles} delay={2} x="10%" y="70%" />
        <FloatingIcon icon={Eye} delay={3} x="85%" y="65%" />
        <FloatingIcon icon={MousePointerClick} delay={4} x="25%" y="80%" />
        <FloatingIcon icon={DollarSign} delay={5} x="70%" y="75%" />
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 container mx-auto px-4 text-center">
        <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-[#C8F200] transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C8F200]/10 border border-[#C8F200]/30 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-[#C8F200]" />
            <span className="text-[#C8F200] text-sm font-medium">Powered by Andromeda AI</span>
          </div>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="block">META Ads</span>
          <span className="text-[#C8F200] relative">
            Services
            <motion.span
              className="absolute -inset-2 bg-[#C8F200]/20 blur-xl"
              animate={{ opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Harness the power of Meta's 3.2 billion users with AI-driven campaigns optimized by the latest Andromeda algorithm updates.
        </motion.p>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a href="https://topmate.io/karthik_media/1790830" target="_blank" rel="noopener noreferrer">
            <Button className="text-lg px-8 bg-[#C8F200] text-black hover:bg-[#C8F200]/90 shadow-[0_0_30px_rgba(200,242,0,0.4)]">
              Start Your Project
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </a>
        </motion.div>
      </motion.div>

      {/* Live Performance Widget */}
      <motion.div
        className="absolute bottom-20 right-10 hidden lg:block"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="relative w-56 h-36 bg-zinc-900/80 backdrop-blur-sm border border-[#C8F200]/20 rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs text-white/50">Live Campaign</span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs text-green-500">Active</span>
            </span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-white/60">ROAS</span>
              <motion.span 
                className="text-[#C8F200] font-bold"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                8.4X
              </motion.span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-white/60">Conversions</span>
              <span className="text-white font-semibold">2,847</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-white/60">CPA</span>
              <span className="text-green-400 font-semibold">₹48</span>
            </div>
          </div>
          <motion.div 
            className="absolute -top-2 -right-2 w-6 h-6 bg-[#C8F200] rounded-full flex items-center justify-center"
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
        <div className="w-6 h-10 border-2 border-[#C8F200]/50 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 bg-[#C8F200] rounded-full mt-2"
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
    <section className="relative bg-black py-16 border-y border-[#C8F200]/10">
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
                className="w-14 h-14 mx-auto mb-4 bg-[#C8F200]/10 rounded-xl flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <stat.icon className="w-7 h-7 text-[#C8F200]" />
              </motion.div>
              <motion.div 
                className="text-4xl md:text-5xl font-black text-[#C8F200] mb-2"
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, delay: index * 0.1 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-white/50 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AndromedaSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section className="relative bg-black py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#C8F200]/5 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C8F200]/10 border border-[#C8F200]/30 rounded-full mb-6">
            <Brain className="w-4 h-4 text-[#C8F200]" />
            <span className="text-[#C8F200] text-sm font-medium">Latest Algorithm Update</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
            Meta's <span className="text-[#C8F200]">Andromeda</span> Algorithm
          </h2>
          <p className="text-lg text-white/60 max-w-3xl mx-auto">
            Meta's Andromeda is their most advanced AI retrieval system, processing billions of ads in milliseconds 
            to find the perfect match between advertisers and users. Here's how we leverage it for your campaigns.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Feature List */}
          <div className="space-y-4">
            {andromedaFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-500 ${
                  activeFeature === index 
                    ? 'bg-[#C8F200]/10 border border-[#C8F200]/40 shadow-[0_0_30px_rgba(200,242,0,0.15)]' 
                    : 'bg-zinc-900/50 border border-zinc-800/50 hover:border-[#C8F200]/20'
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                    activeFeature === index ? 'bg-[#C8F200] text-black' : 'bg-[#C8F200]/10 text-[#C8F200]'
                  }`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-lg font-bold mb-2 transition-colors ${
                      activeFeature === index ? 'text-[#C8F200]' : 'text-white'
                    }`}>
                      {feature.title}
                    </h3>
                    <p className="text-white/60 text-sm">{feature.description}</p>
                  </div>
                </div>
                {activeFeature === index && (
                  <motion.div
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-[#C8F200] rounded-r"
                    layoutId="activeIndicator"
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Animated Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Central Brain */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#C8F200]/20 rounded-full flex items-center justify-center border-2 border-[#C8F200]/40"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Brain className="w-16 h-16 text-[#C8F200]" />
              </motion.div>

              {/* Orbiting Data Points */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2 w-4 h-4"
                  style={{ 
                    transformOrigin: '50% 50%',
                  }}
                  animate={{ 
                    rotate: [i * 45, i * 45 + 360],
                  }}
                  transition={{ 
                    duration: 8 + i,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <motion.div 
                    className="w-3 h-3 bg-[#C8F200] rounded-full"
                    style={{ 
                      transform: `translateX(${80 + i * 15}px)`,
                    }}
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                  />
                </motion.div>
              ))}

              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                {[...Array(6)].map((_, i) => (
                  <motion.line
                    key={i}
                    x1="200"
                    y1="200"
                    x2={200 + Math.cos((i * 60 * Math.PI) / 180) * 150}
                    y2={200 + Math.sin((i * 60 * Math.PI) / 180) * 150}
                    stroke="#C8F200"
                    strokeWidth="1"
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.3 }}
                    transition={{ duration: 2, delay: i * 0.2 }}
                  />
                ))}
              </svg>

              {/* Outer Ring */}
              <motion.div
                className="absolute inset-0 border-2 border-dashed border-[#C8F200]/20 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FeaturesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative bg-black py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C8F200]/30 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
            Our META Ads <span className="text-[#C8F200]">Arsenal</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Full-funnel advertising solutions across Facebook, Instagram, WhatsApp & Messenger.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {metaFeatures.map((feature, index) => (
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
              <div className="relative p-8 bg-zinc-900/50 border border-zinc-800/50 rounded-2xl overflow-hidden transition-all duration-500 hover:border-[#C8F200]/40 hover:shadow-[0_0_40px_rgba(200,242,0,0.15)]">
                {/* HUD Corner Brackets */}
                <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-transparent group-hover:border-[#C8F200] transition-all duration-300" />
                <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-transparent group-hover:border-[#C8F200] transition-all duration-300" />
                <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-transparent group-hover:border-[#C8F200] transition-all duration-300" />
                <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-transparent group-hover:border-[#C8F200] transition-all duration-300" />

                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#C8F200]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                <motion.div
                  className="relative w-14 h-14 bg-[#C8F200]/10 rounded-xl flex items-center justify-center mb-6"
                  animate={hoveredIndex === index ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <feature.icon className="w-7 h-7 text-[#C8F200]" />
                </motion.div>

                <h3 className="text-xl font-bold text-white mb-3 relative group-hover:text-[#C8F200] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-white/60 relative">{feature.description}</p>

                <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-[#C8F200] transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AdFormatsSection = () => {
  return (
    <section className="relative bg-black py-24 overflow-hidden">
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
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
            Ad <span className="text-[#C8F200]">Formats</span> We Master
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Every format, every placement, optimized for maximum impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {adFormats.map((format, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group"
            >
              <div className="p-6 bg-zinc-900/50 border border-zinc-800/50 rounded-2xl text-center transition-all duration-300 hover:border-[#C8F200]/40 hover:shadow-[0_0_30px_rgba(200,242,0,0.1)]">
                <div className="w-12 h-12 mx-auto mb-4 bg-[#C8F200]/10 rounded-xl flex items-center justify-center group-hover:bg-[#C8F200] transition-colors">
                  <format.icon className="w-6 h-6 text-[#C8F200] group-hover:text-black transition-colors" />
                </div>
                <h3 className="text-white font-semibold text-sm mb-1">{format.name}</h3>
                <p className="text-white/40 text-xs">{format.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="relative bg-black py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#C8F200]/5 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
            Client <span className="text-[#C8F200]">Success</span> Stories
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Real results from brands that scaled with our META Ads expertise.
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
              className="relative group"
            >
              <div className="p-6 bg-zinc-900/50 border border-zinc-800/50 rounded-2xl h-full transition-all duration-300 hover:border-[#C8F200]/40 hover:shadow-[0_0_30px_rgba(200,242,0,0.1)]">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-4 h-4 ${i < Math.floor(testimonial.rating) ? 'text-[#C8F200]' : i < testimonial.rating ? 'text-[#C8F200]/50' : 'text-zinc-600'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-[#C8F200] font-bold text-sm ml-1">{testimonial.rating}</span>
                </div>

                <p className="text-white/70 text-sm leading-relaxed mb-6">"{testimonial.review}"</p>

                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center`}>
                    <span className="text-white font-bold text-sm">{testimonial.initials}</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-[#C8F200]/70 text-xs">{testimonial.role}</p>
                  </div>
                </div>
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
    <section className="relative bg-black py-24 overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C8F200]/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Ready to <span className="text-[#C8F200]">Scale</span> with META Ads?
          </h2>
          <p className="text-xl text-white/60 mb-10">
            Get a free campaign audit and discover how we can improve your ROAS by up to 8X using the latest Andromeda optimizations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="text-lg px-10 py-6 bg-[#C8F200] text-black hover:bg-[#C8F200]/90 shadow-[0_0_40px_rgba(200,242,0,0.4)]">
              Get Free Audit
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-10 py-6 border-[#C8F200]/30 text-white hover:bg-[#C8F200]/10">
              Schedule a Call
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const MetaAdsService = () => {
  return (
    <div className="min-h-screen bg-black">
      <SEO 
        title="Meta Ads Services | Facebook & Instagram Ads | Karthik Media"
        description="Harness Meta's 3.2B users with AI-driven campaigns. Advantage+ campaigns, Andromeda targeting, Reels ads. 8.4X average ROAS, 65% lower CPA."
        canonical="/services/meta-ads"
      />
      <Navbar />
      <HeroSection />
      <StatsSection />
      <AndromedaSection />
      <FeaturesSection />
      <AdFormatsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default MetaAdsService;