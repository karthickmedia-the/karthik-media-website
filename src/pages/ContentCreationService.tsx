import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Camera, Video, Palette, TrendingUp, Instagram, Youtube, 
  Facebook, Sparkles, Play, Image, Film, Megaphone, Target,
  BarChart3, Users, Zap, CheckCircle2, ArrowRight
} from "lucide-react";

const ContentCreationService = () => {
  const contentTypes = [
    {
      icon: Video,
      title: "Video Production",
      description: "Cinematic reels, product videos, and brand stories that captivate audiences",
      samples: [
        "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400&h=300&fit=crop",
      ]
    },
    {
      icon: Camera,
      title: "Photography",
      description: "Professional product shoots, lifestyle imagery, and brand photography",
      samples: [
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
      ]
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Eye-catching social media graphics, banners, and marketing materials",
      samples: [
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop",
      ]
    },
    {
      icon: Film,
      title: "Motion Graphics",
      description: "Animated content, logo reveals, and dynamic visual storytelling",
      samples: [
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      ]
    }
  ];

  const platforms = [
    { icon: Instagram, name: "Instagram", color: "#E4405F", stats: "2B+ Monthly Users" },
    { icon: Youtube, name: "YouTube", color: "#FF0000", stats: "2.5B+ Monthly Users" },
    { icon: Facebook, name: "Facebook", color: "#1877F2", stats: "3B+ Monthly Users" },
  ];

  const processSteps = [
    { step: "01", title: "Discovery", description: "Understanding your brand voice, audience, and goals" },
    { step: "02", title: "Strategy", description: "Creating a content calendar aligned with your objectives" },
    { step: "03", title: "Creation", description: "Producing high-quality visual content that resonates" },
    { step: "04", title: "Optimization", description: "A/B testing and refining for maximum engagement" },
  ];

  const results = [
    { metric: "3X", label: "Average Engagement Increase" },
    { metric: "150%", label: "Organic Reach Growth" },
    { metric: "40%", label: "Lower Ad CPM with Quality Creatives" },
    { metric: "2.5X", label: "Higher Conversion Rates" },
  ];

  const portfolioItems = [
    { type: "Reel", thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=500&fit=crop", category: "Social Media" },
    { type: "Ad", thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=500&fit=crop", category: "Performance" },
    { type: "Photo", thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=500&fit=crop", category: "Corporate" },
    { type: "Video", thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=500&fit=crop", category: "Brand Story" },
    { type: "Design", thumbnail: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=500&fit=crop", category: "Graphics" },
    { type: "Reel", thumbnail: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=400&h=500&fit=crop", category: "Product" },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      
      {/* Hero Section with Visual Grid */}
      <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#C8F200]/10 via-transparent to-purple-500/10" />
          <motion.div 
            className="absolute top-20 left-10 w-72 h-72 bg-[#C8F200]/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="inline-flex items-center gap-2 bg-[#C8F200]/10 border border-[#C8F200]/30 rounded-full px-4 py-2 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Sparkles className="w-4 h-4 text-[#C8F200]" />
                <span className="text-[#C8F200] text-sm font-medium">Content That Converts</span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                <span className="text-white">Creative</span>
                <br />
                <span className="text-[#C8F200]">Content</span>
                <br />
                <span className="text-white">For SMBs</span>
              </h1>

              <p className="text-xl text-gray-400 mb-8 max-w-lg">
                Stand out in the feed. We create scroll-stopping content that drives organic growth and supercharges your ad performance.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button 
                  size="xl" 
                  className="bg-[#C8F200] text-black hover:bg-[#C8F200]/90 font-bold group"
                >
                  View Our Work
                  <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                </Button>
                <Button 
                  size="xl" 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  Get a Quote
                </Button>
              </div>
            </motion.div>

            {/* Right Visual Grid */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=300&h=400&fit=crop",
                  "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=300&h=300&fit=crop",
                  "https://images.unsplash.com/photo-1493711662062-fa541f7f2f60?w=300&h=300&fit=crop",
                  "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=300&h=400&fit=crop",
                ].map((img, i) => (
                  <motion.div
                    key={i}
                    className={`relative overflow-hidden rounded-2xl ${i % 2 === 0 ? 'row-span-2' : ''}`}
                    whileHover={{ scale: 1.05, zIndex: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src={img} 
                      alt={`Creative sample ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
                      <Play className="w-10 h-10 text-white" />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Floating Stats */}
              <motion.div 
                className="absolute -bottom-4 -left-4 bg-black/80 backdrop-blur-xl border border-[#C8F200]/30 rounded-xl p-4"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#C8F200]/20 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-[#C8F200]" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#C8F200]">300%</p>
                    <p className="text-xs text-gray-400">Avg. Engagement Lift</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Types Showcase */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Content That <span className="text-[#C8F200]">Works</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              From stunning visuals to engaging videos, we create content that resonates with your audience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contentTypes.map((type, index) => (
              <motion.div
                key={type.title}
                className="group relative bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-2xl overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, borderColor: "rgba(200, 242, 0, 0.5)" }}
              >
                {/* Sample Images Stack */}
                <div className="relative h-48 overflow-hidden">
                  {type.samples.map((sample, i) => (
                    <motion.img
                      key={i}
                      src={sample}
                      alt={type.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      initial={{ opacity: i === 0 ? 1 : 0 }}
                      whileHover={{ opacity: 1 }}
                      style={{ zIndex: type.samples.length - i }}
                    />
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <motion.div 
                    className="absolute top-4 right-4 w-10 h-10 bg-[#C8F200] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ scale: 1.1 }}
                  >
                    <ArrowRight className="w-5 h-5 text-black" />
                  </motion.div>
                </div>

                <div className="p-6">
                  <div className="w-12 h-12 bg-[#C8F200]/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#C8F200]/30 transition-colors">
                    <type.icon className="w-6 h-6 text-[#C8F200]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{type.title}</h3>
                  <p className="text-gray-400 text-sm">{type.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="py-20 bg-gradient-to-b from-transparent via-[#C8F200]/5 to-transparent">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Our <span className="text-[#C8F200]">Creative Portfolio</span>
            </h2>
            <p className="text-gray-400 text-lg">A glimpse into our creative excellence</p>
          </motion.div>

          {/* Masonry-style Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                className={`relative group overflow-hidden rounded-2xl ${
                  index === 0 || index === 3 ? 'col-span-2 row-span-2' : ''
                }`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
              >
                <img 
                  src={item.thumbnail} 
                  alt={item.type}
                  className="w-full h-full object-cover min-h-[200px] group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="text-[#C8F200] text-xs font-medium uppercase tracking-wider">{item.category}</span>
                    <h4 className="text-white font-bold mt-1">{item.type}</h4>
                  </div>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-10 h-10 bg-[#C8F200] rounded-full flex items-center justify-center">
                    <Play className="w-5 h-5 text-black" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Optimization */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Optimized for <span className="text-[#C8F200]">Every Platform</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We create platform-specific content that maximizes reach and engagement
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative bg-black border border-white/10 rounded-3xl p-8 overflow-hidden group-hover:border-white/30 transition-colors">
                  {/* Colored Glow */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity blur-3xl"
                    style={{ backgroundColor: platform.color }}
                  />

                  <div className="relative z-10">
                    <div 
                      className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                      style={{ backgroundColor: `${platform.color}20` }}
                    >
                      <platform.icon className="w-10 h-10" style={{ color: platform.color }} />
                    </div>

                    <h3 className="text-2xl font-bold mb-2">{platform.name}</h3>
                    <p className="text-gray-500 mb-6">{platform.stats}</p>

                    <div className="space-y-3">
                      {["Reels & Stories", "Feed Posts", "Ad Creatives"].map((format, i) => (
                        <div key={i} className="flex items-center gap-2 text-gray-400">
                          <CheckCircle2 className="w-4 h-4 text-[#C8F200]" />
                          <span className="text-sm">{format}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#C8F200]/10 via-transparent to-[#C8F200]/10" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Real <span className="text-[#C8F200]">Results</span>
            </h2>
            <p className="text-gray-400 text-lg">Quality content delivers measurable outcomes</p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((result, index) => (
              <motion.div
                key={index}
                className="text-center p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, borderColor: "rgba(200, 242, 0, 0.5)" }}
              >
                <motion.p 
                  className="text-5xl md:text-6xl font-black text-[#C8F200] mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  {result.metric}
                </motion.p>
                <p className="text-gray-400">{result.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Our <span className="text-[#C8F200]">Process</span>
            </h2>
            <p className="text-gray-400 text-lg">From concept to content that converts</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                className="relative"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-[#C8F200]/50 to-transparent" />
                )}

                <div className="relative bg-black border border-white/10 rounded-2xl p-6 hover:border-[#C8F200]/50 transition-colors">
                  <div className="w-20 h-20 bg-[#C8F200]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl font-black text-[#C8F200]">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm text-center">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why SMBs Choose Us */}
      <section className="py-20 bg-gradient-to-b from-transparent via-[#C8F200]/5 to-transparent">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Why SMBs <span className="text-[#C8F200]">Choose Us</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "ROI-Focused Content",
                description: "Every piece of content is designed with your business goals in mind, not just vanity metrics"
              },
              {
                icon: Zap,
                title: "Quick Turnaround",
                description: "We understand SMBs move fast. Get quality content delivered on time, every time"
              },
              {
                icon: BarChart3,
                title: "Data-Driven Creativity",
                description: "Our creative decisions are backed by performance data and platform insights"
              },
              {
                icon: Users,
                title: "Dedicated Team",
                description: "Work with a consistent team that understands your brand inside and out"
              },
              {
                icon: Megaphone,
                title: "Ad-Ready Assets",
                description: "Content optimized for both organic reach and paid ad campaigns"
              },
              {
                icon: Image,
                title: "Full Asset Library",
                description: "Build a comprehensive content library for consistent brand presence"
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="group bg-black border border-white/10 rounded-2xl p-6 hover:border-[#C8F200]/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-14 h-14 bg-[#C8F200]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#C8F200]/20 transition-colors">
                  <benefit.icon className="w-7 h-7 text-[#C8F200]" />
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#C8F200]/20 via-transparent to-purple-500/20" />
          <motion.div 
            className="absolute -top-40 -right-40 w-80 h-80 bg-[#C8F200]/30 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              Ready to Create <span className="text-[#C8F200]">Content That Converts?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Let's discuss how we can help your SMB stand out with stunning visuals and engaging content.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="xl" 
                className="bg-[#C8F200] text-black hover:bg-[#C8F200]/90 font-bold text-lg px-10"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="xl" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 font-bold text-lg"
              >
                View Pricing
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContentCreationService;
