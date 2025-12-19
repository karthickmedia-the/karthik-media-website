import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, TrendingUp, Users, Eye, Target, ChevronRight, Sparkles, BarChart3, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const caseStudies = [
  {
    id: 1,
    client: "Giftson Paul",
    company: "Destiny Decoder",
    tagline: "From Scratch to ₹1.3 Lakhs/Month Through a Complete Funnel Transformation",
    industry: "Coaching",
    overview: "Giftson Paul, Founder of Destiny Decoder, wanted to build a sustainable online coaching business through 1:1 consultations.",
    challenge: "He had no defined business model, no funnel, and no predictable source of monthly revenue.",
    strategy: [
      "Designed a complete 1:1 consultation business model from the ground up.",
      "Built a powerful digital funnel with lead magnets + nurturing system.",
      "Added digital products to increase AOV and create passive income.",
      "Implemented monthly automation systems for consistent conversions."
    ],
    results: [
      { metric: "₹1.3L", label: "Monthly Revenue" },
      { metric: "Daily", label: "Consistent Sales" },
      { metric: "100%", label: "Automated Model" }
    ],
    impact: "Giftson now runs a predictable, branded, and highly scalable expert-business ecosystem.",
    color: "#C8F200"
  },
  {
    id: 2,
    client: "Waioz",
    company: "E-commerce Builder Platform",
    tagline: "400+ Leads in 20 Days & 200% Growth in Store Signups",
    industry: "SaaS",
    overview: "Waioz is a fast-growing e-commerce builder platform helping businesses create online stores with ease.",
    challenge: "Their lead flow had slowed down, and they needed high-quality signups for demos and store creation.",
    strategy: [
      "Planned and executed high-intent lead generation campaigns.",
      "Optimized the ad funnels for lower CPL and high lead quality.",
      "Implemented retargeting and micro-video ads for maximum visibility."
    ],
    results: [
      { metric: "400+", label: "Qualified Leads" },
      { metric: "20", label: "Days" },
      { metric: "200%", label: "Signup Growth" }
    ],
    impact: "Waioz now has a stronger funnel with predictable enquiries and faster platform adoption.",
    color: "#00D4FF"
  },
  {
    id: 3,
    client: "Dolphin Group of Schools",
    company: "Educational Institution",
    tagline: "800K+ Views, 90K Engagements & a Fully Optimized Digital Presence",
    industry: "Education",
    overview: "Dolphin Group of Schools is a leading educational institution known for academics, sports and culturals.",
    challenge: "They wanted to boost social media presence, improve brand perception, and rank better on Google.",
    strategy: [
      "Shot and edited highly engaging live event videos in Reels format.",
      "Revamped their Instagram content flow to attract parents & students.",
      "Designed and developed a clean, modern school website.",
      "Optimized Google Business Profile to improve keyword ranking."
    ],
    results: [
      { metric: "800K+", label: "Views" },
      { metric: "90K+", label: "Engagements" },
      { metric: "#1", label: "Google Maps Rank" }
    ],
    impact: "Dolphin School now enjoys stronger brand authority, high admission enquiries, and a dominant digital presence.",
    color: "#FF6B35"
  },
  {
    id: 4,
    client: "KR Logics",
    company: "#1 Tamil YouTube Channel for Banking Courses",
    tagline: "238 First-Page YouTube Rankings & High-Ticket Funnel Success",
    industry: "EdTech",
    overview: "KR Logics is Tamil Nadu's leading YouTube channel for banking exam training.",
    challenge: "They wanted to convert their existing YouTube audience into paying customers for their premium programs.",
    strategy: [
      "Built a high-converting webinar funnel for lead nurturing & conversions.",
      "Created upsell flows for promoting their high-ticket digital product.",
      "Optimized content strategy to improve organic reach & keyword ranking."
    ],
    results: [
      { metric: "238", label: "First-Page Keywords" },
      { metric: "High", label: "Organic Traffic" },
      { metric: "Consistent", label: "High-Ticket Sales" }
    ],
    impact: "KR Logics has transformed its YouTube authority into a scalable revenue engine.",
    color: "#A855F7"
  },
  {
    id: 5,
    client: "The Karthik Media",
    company: "Multi-Industry Growth Results",
    tagline: "Proven Expertise Across Education, Tech, Coaching & E-commerce",
    industry: "Agency",
    overview: "To showcase the collective capability built over the years, this additional case study summarizes the breadth of successful projects delivered across industries.",
    challenge: "Clients across multiple industries needed customized digital marketing strategies for growth.",
    strategy: [
      "Education sector digital transformation",
      "Coaching & Digital Products funnel optimization",
      "SaaS & E-commerce Platform growth strategies",
      "Media & Event Organizations brand building",
      "Training Institutions lead generation"
    ],
    results: [
      { metric: "116+", label: "Projects Delivered" },
      { metric: "5+", label: "Industries Served" },
      { metric: "12+", label: "Years Experience" }
    ],
    impact: "With multiple clients generating revenue breakthroughs, organic growth, optimized funnels, and strong brand presence, The Karthik Media continues to deliver measurable results across categories.",
    color: "#C8F200"
  }
];

const industries = ["All", "Coaching", "SaaS", "Education", "EdTech", "Agency"];

const CaseStudies = () => {
  const [selectedIndustry, setSelectedIndustry] = useState("All");
  const [expandedCase, setExpandedCase] = useState<number | null>(null);

  const filteredStudies = selectedIndustry === "All" 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === selectedIndustry);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#C8F200]/5 via-transparent to-transparent" />
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#C8F200]/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#C8F200]/30 bg-[#C8F200]/5 mb-6">
              <Sparkles className="w-4 h-4 text-[#C8F200]" />
              <span className="text-[#C8F200] text-sm font-medium">Real Results, Real Growth</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-white">Our </span>
              <span className="text-[#C8F200]">Case Studies</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12">
              Discover how we've helped businesses across industries achieve remarkable growth 
              through strategic digital marketing, funnel optimization, and brand transformation.
            </p>

            {/* Stats Bar */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              {[
                { value: "116+", label: "Projects Delivered" },
                { value: "₹10Cr+", label: "Revenue Generated" },
                { value: "12+", label: "Years Experience" },
                { value: "5+", label: "Industries Served" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-[#C8F200]">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industry Filter */}
      <section className="py-8 px-4 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry) => (
              <motion.button
                key={industry}
                onClick={() => setSelectedIndustry(industry)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedIndustry === industry
                    ? "bg-[#C8F200] text-black"
                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                {industry}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedIndustry}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-8"
            >
              {filteredStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative"
                >
                  {/* Case Study Card */}
                  <div 
                    className={`relative rounded-2xl border transition-all duration-500 overflow-hidden ${
                      expandedCase === study.id 
                        ? "border-[#C8F200]/50 bg-[#C8F200]/5" 
                        : "border-white/10 bg-white/[0.02] hover:border-white/20"
                    }`}
                  >
                    {/* Glow Effect */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${study.color}10, transparent 40%)`
                      }}
                    />

                    {/* Header - Always Visible */}
                    <div 
                      onClick={() => setExpandedCase(expandedCase === study.id ? null : study.id)}
                      className="relative p-6 md:p-8 cursor-pointer"
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <span 
                              className="px-3 py-1 rounded-full text-xs font-medium"
                              style={{ backgroundColor: `${study.color}20`, color: study.color }}
                            >
                              {study.industry}
                            </span>
                            <span className="text-gray-500 text-sm">Case Study #{study.id}</span>
                          </div>
                          
                          <h3 className="text-2xl md:text-3xl font-bold mb-2">
                            <span className="text-white">{study.client}</span>
                            <span className="text-gray-500"> — {study.company}</span>
                          </h3>
                          
                          <p className="text-lg" style={{ color: study.color }}>
                            {study.tagline}
                          </p>
                        </div>

                        {/* Results Preview */}
                        <div className="flex items-center gap-6">
                          <div className="hidden md:flex gap-6">
                            {study.results.slice(0, 2).map((result, i) => (
                              <div key={i} className="text-center">
                                <div className="text-2xl font-bold" style={{ color: study.color }}>
                                  {result.metric}
                                </div>
                                <div className="text-xs text-gray-500">{result.label}</div>
                              </div>
                            ))}
                          </div>
                          
                          <motion.div
                            animate={{ rotate: expandedCase === study.id ? 90 : 0 }}
                            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center"
                          >
                            <ChevronRight className="w-5 h-5 text-gray-400" />
                          </motion.div>
                        </div>
                      </div>
                    </div>

                    {/* Expanded Content */}
                    <AnimatePresence>
                      {expandedCase === study.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 md:px-8 pb-8 pt-0">
                            <div className="border-t border-white/10 pt-8">
                              <div className="grid md:grid-cols-2 gap-8">
                                {/* Left Column */}
                                <div className="space-y-6">
                                  {/* Overview */}
                                  <div>
                                    <div className="flex items-center gap-2 mb-3">
                                      <Users className="w-5 h-5" style={{ color: study.color }} />
                                      <h4 className="text-lg font-semibold text-white">Client Overview</h4>
                                    </div>
                                    <p className="text-gray-400">{study.overview}</p>
                                  </div>

                                  {/* Challenge */}
                                  <div>
                                    <div className="flex items-center gap-2 mb-3">
                                      <Target className="w-5 h-5" style={{ color: study.color }} />
                                      <h4 className="text-lg font-semibold text-white">The Challenge</h4>
                                    </div>
                                    <p className="text-gray-400">{study.challenge}</p>
                                  </div>

                                  {/* Strategy */}
                                  <div>
                                    <div className="flex items-center gap-2 mb-3">
                                      <Zap className="w-5 h-5" style={{ color: study.color }} />
                                      <h4 className="text-lg font-semibold text-white">Our Strategy</h4>
                                    </div>
                                    <ul className="space-y-2">
                                      {study.strategy.map((item, i) => (
                                        <motion.li
                                          key={i}
                                          initial={{ opacity: 0, x: -20 }}
                                          animate={{ opacity: 1, x: 0 }}
                                          transition={{ delay: i * 0.1 }}
                                          className="flex items-start gap-3"
                                        >
                                          <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: study.color }} />
                                          <span className="text-gray-400">{item}</span>
                                        </motion.li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>

                                {/* Right Column */}
                                <div className="space-y-6">
                                  {/* Results */}
                                  <div>
                                    <div className="flex items-center gap-2 mb-4">
                                      <BarChart3 className="w-5 h-5" style={{ color: study.color }} />
                                      <h4 className="text-lg font-semibold text-white">Results Achieved</h4>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4">
                                      {study.results.map((result, i) => (
                                        <motion.div
                                          key={i}
                                          initial={{ opacity: 0, scale: 0.8 }}
                                          animate={{ opacity: 1, scale: 1 }}
                                          transition={{ delay: i * 0.1 }}
                                          className="text-center p-4 rounded-xl bg-white/5 border border-white/10"
                                        >
                                          <div className="text-2xl md:text-3xl font-bold" style={{ color: study.color }}>
                                            {result.metric}
                                          </div>
                                          <div className="text-xs text-gray-500 mt-1">{result.label}</div>
                                        </motion.div>
                                      ))}
                                    </div>
                                  </div>

                                  {/* Impact */}
                                  <div className="p-6 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent">
                                    <div className="flex items-center gap-2 mb-3">
                                      <TrendingUp className="w-5 h-5" style={{ color: study.color }} />
                                      <h4 className="text-lg font-semibold text-white">The Impact</h4>
                                    </div>
                                    <p className="text-gray-300">{study.impact}</p>
                                  </div>

                                  {/* CTA */}
                                  <motion.a
                                    href="https://topmate.io/karthik_media/1790830"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-semibold transition-all duration-300"
                                    style={{ 
                                      backgroundColor: study.color,
                                      color: "#000"
                                    }}
                                  >
                                    Want Similar Results?
                                    <ArrowRight className="w-5 h-5" />
                                  </motion.a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[#C8F200]/5 to-transparent" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-white">Ready to Be Our </span>
              <span className="text-[#C8F200]">Next Success Story?</span>
            </h2>
            
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Join 100+ businesses that have transformed their digital presence 
              and achieved measurable growth with The Karthik Media.
            </p>

            <motion.a
              href="https://topmate.io/karthik_media/1790830"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#C8F200] text-black rounded-full font-bold text-lg shadow-[0_0_30px_rgba(200,242,0,0.3)] hover:shadow-[0_0_50px_rgba(200,242,0,0.5)] transition-all duration-300"
            >
              Book Your Free Strategy Call
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;
