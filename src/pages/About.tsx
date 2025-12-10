import { motion } from "framer-motion";
import { 
  Rocket, Target, TrendingUp, Users, Zap, Heart, 
  Building2, GraduationCap, Stethoscope, Home, Briefcase,
  Bitcoin, Headphones, ShoppingCart, Code, Laptop,
  BarChart3, Globe, Video, Palette, Settings, MessageCircle,
  CheckCircle2, ArrowRight, Sparkles, Award, Shield, Eye
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  const industries = [
    { name: "IT & Tech", icon: Code, color: "#4285F4" },
    { name: "Real Estate", icon: Home, color: "#34A853" },
    { name: "Healthcare", icon: Stethoscope, color: "#EA4335" },
    { name: "Education", icon: GraduationCap, color: "#FBBC04" },
    { name: "Exhibitions", icon: Building2, color: "#9333EA" },
    { name: "Cryptocurrency", icon: Bitcoin, color: "#F7931A" },
    { name: "UK Tech Support", icon: Headphones, color: "#00D4FF" },
    { name: "E-commerce", icon: ShoppingCart, color: "#FF6B35" },
  ];


  const services = [
    { 
      icon: BarChart3, 
      title: "Digital Marketing & Performance Ads",
      description: "Meta + Google Ads that drive real results"
    },
    { 
      icon: Globe, 
      title: "Website Design & Development",
      description: "Modern, high-converting websites"
    },
    { 
      icon: Target, 
      title: "Lead Generation & Funnel Automation",
      description: "Systems that work 24/7"
    },
    { 
      icon: Palette, 
      title: "Brand Strategy & Content Production",
      description: "Building memorable brands"
    },
    { 
      icon: Video, 
      title: "Video Marketing & Social Media Growth",
      description: "Engaging content that converts"
    },
    { 
      icon: Settings, 
      title: "Marketing Automation",
      description: "Streamlined workflows for scale"
    },
  ];

  const differentiators = [
    {
      icon: Users,
      title: "Extended Marketing Partner",
      description: "We work like your in-house team, not a distant agency."
    },
    {
      icon: TrendingUp,
      title: "ROI-Focused",
      description: "We chase results, not vanity metrics."
    },
    {
      icon: Zap,
      title: "Proven Systems",
      description: "Battle-tested strategies that scaled multiple brands from scratch."
    },
    {
      icon: Eye,
      title: "Transparency & Clarity",
      description: "Simple strategies with clear accountability."
    },
  ];

  const timeline = [
    { year: "2012", title: "The Beginning", description: "Started our journey in the digital landscape" },
    { year: "2015", title: "Industry Experience", description: "Worked across IT, Real Estate, Healthcare" },
    { year: "2018", title: "Major Campaigns", description: "Managed campaigns for Amazon, CTS, HCL" },
    { year: "2020", title: "Agency Founded", description: "The Karthik Media officially launched" },
    { year: "2024", title: "10X Growth", description: "Helping 116+ businesses scale digitally" },
  ];

  const stats = [
    { value: "12+", label: "Years Experience" },
    { value: "116+", label: "Projects Delivered" },
    { value: "8+", label: "Industries Served" },
    { value: "10X", label: "Average Growth" },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#C8F200]/5 via-transparent to-purple-500/5" />
          <motion.div 
            className="absolute top-40 left-20 w-96 h-96 bg-[#C8F200]/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(200,242,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(200,242,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#C8F200]/10 border border-[#C8F200]/30 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-[#C8F200]" />
              <span className="text-[#C8F200] text-sm font-medium">Our Story</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6">
              <span className="text-white">About </span>
              <span className="text-[#C8F200]">The Karthik Media</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              We help businesses grow <span className="text-[#C8F200] font-bold">faster, stronger, and smarter</span> with result-driven digital marketing.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="inline-block bg-gradient-to-r from-[#C8F200]/20 to-purple-500/20 border border-[#C8F200]/30 rounded-2xl p-6 md:p-8"
            >
              <p className="text-lg md:text-xl text-gray-200 italic">
                "Born from <span className="text-[#C8F200] font-bold">12 years</span> of real industry experience, our agency was built with one mission — to help small businesses scale like big brands."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-[#C8F200]/10 bg-[#C8F200]/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div 
                  className="text-4xl md:text-5xl font-black text-[#C8F200] mb-2"
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, delay: index * 0.1 }}
                >
                  {stat.value}
                </motion.div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              Our <span className="text-[#C8F200]">Journey</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Every lesson, every project, every mistake shaped our strongest advantage — practical marketing that works in the real world.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Center Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#C8F200] via-[#C8F200]/50 to-transparent hidden md:block" />

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#C8F200]/40 transition-all">
                    <span className="text-[#C8F200] font-bold text-lg">{item.year}</span>
                    <h3 className="text-xl font-bold mt-2 mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                  <motion.div 
                    className="w-5 h-5 bg-[#C8F200] rounded-full border-4 border-black"
                    whileHover={{ scale: 1.3 }}
                  />
                </div>

                {/* Empty space for other side */}
                <div className="hidden md:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Experience */}
      <section className="py-24 bg-gradient-to-b from-transparent via-[#C8F200]/5 to-transparent">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              Industries We Have <span className="text-[#C8F200]">Conquered</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              From IT to Healthcare, Real Estate to Crypto — our experience spans across diverse sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-white/30 transition-all"
              >
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity"
                  style={{ background: `radial-gradient(circle at center, ${industry.color}, transparent 70%)` }}
                />
                <div 
                  className="w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center transition-colors"
                  style={{ backgroundColor: `${industry.color}20` }}
                >
                  <industry.icon className="w-8 h-8" style={{ color: industry.color }} />
                </div>
                <h3 className="font-bold text-white">{industry.name}</h3>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              What We <span className="text-[#C8F200]">Offer</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Today, The Karthik Media stands as a modern, performance-driven digital growth agency
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#C8F200]/40 transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#C8F200]/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity" />
                <div className="relative">
                  <div className="w-14 h-14 bg-[#C8F200]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#C8F200]/20 transition-colors">
                    <service.icon className="w-7 h-7 text-[#C8F200]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#C8F200] transition-colors">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Not just ads statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center max-w-3xl mx-auto"
          >
            <div className="bg-gradient-to-r from-[#C8F200]/10 via-purple-500/10 to-[#C8F200]/10 border border-[#C8F200]/20 rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-black mb-4">
                We don't just run ads.
              </h3>
              <p className="text-xl text-gray-300">
                We build <span className="text-[#C8F200] font-bold">systems</span> that bring consistent sales, high-quality leads, and long-term brand growth.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-24 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              What Makes Us <span className="text-[#C8F200]">Different?</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {differentiators.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-5 p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-[#C8F200]/40 transition-all group"
              >
                <div className="w-14 h-14 bg-[#C8F200]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#C8F200]/20 transition-colors">
                  <item.icon className="w-7 h-7 text-[#C8F200]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#C8F200] transition-colors">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-black mb-8">
              Who Do We <span className="text-[#C8F200]">Help?</span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {["Startups", "Small Businesses", "Educators", "E-commerce Brands"].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-center gap-2 bg-[#C8F200]/10 border border-[#C8F200]/30 rounded-full px-5 py-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#C8F200]" />
                  <span className="font-medium text-white">{item}</span>
                </motion.div>
              ))}
            </div>

            <p className="text-xl text-gray-300 leading-relaxed">
              We help you grow <span className="text-[#C8F200] font-bold">10×</span> with the right combination of creativity, technology, and data-driven marketing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Passion Statement */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#C8F200]/10 via-transparent to-[#C8F200]/10" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="w-20 h-20 bg-[#C8F200]/20 rounded-full flex items-center justify-center mx-auto mb-8"
            >
              <Heart className="w-10 h-10 text-[#C8F200]" />
            </motion.div>

            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl text-gray-300"
              >
                This is not just our work.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-2xl md:text-3xl text-white font-bold"
              >
                This is our <span className="text-[#C8F200]">passion</span>.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl text-gray-400"
              >
                This is <span className="text-[#C8F200] font-bold">The Karthik Media</span> — building brands, empowering people, and creating digital growth stories every day.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#C8F200]/20 to-purple-500/20 rounded-3xl blur-2xl" />
            
            <div className="relative bg-black/80 border border-[#C8F200]/30 rounded-3xl p-8 md:p-12 text-center">
              <Rocket className="w-16 h-16 text-[#C8F200] mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-black mb-4">
                Ready to Grow <span className="text-[#C8F200]">10×</span>?
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss how we can transform your digital presence and drive real business results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button className="bg-[#C8F200] text-black hover:bg-[#C8F200]/90 font-bold px-8 py-6 text-lg group">
                    Get Started Today
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <a href="tel:+919842041665">
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg">
                    Call +91 9842041665
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
