import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { 
  Search, TrendingUp, Target, BarChart3, Zap, Shield, 
  CheckCircle2, ArrowRight, Play, DollarSign, Eye, MousePointer,
  ShoppingBag, Youtube, Globe, Layers, Settings, Users,
  Award, Clock, LineChart, PieChart, Sparkles, ChevronDown
} from "lucide-react";

const GoogleAdsService = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const campaignTypes = [
    {
      icon: Search,
      title: "Search Ads",
      description: "Appear at the top of Google search results when potential customers search for your products or services. Our Google Ads management team crafts compelling ad copy that drives clicks and conversions.",
      features: ["Keyword Research & Optimization", "Ad Copy A/B Testing", "Bid Strategy Management", "Quality Score Improvement"],
      color: "#4285F4"
    },
    {
      icon: Globe,
      title: "Display Ads",
      description: "Reach over 90% of internet users across 2 million websites with visually engaging display advertising. Perfect for brand awareness and remarketing campaigns.",
      features: ["Custom Banner Design", "Audience Targeting", "Placement Optimization", "Responsive Ad Formats"],
      color: "#EA4335"
    },
    {
      icon: ShoppingBag,
      title: "Shopping Ads",
      description: "Showcase your products directly in Google search results with images, prices, and your store name. Ideal for e-commerce businesses looking to drive qualified traffic and sales.",
      features: ["Product Feed Optimization", "Merchant Center Setup", "Smart Shopping Campaigns", "ROAS Optimization"],
      color: "#FBBC04"
    },
    {
      icon: Youtube,
      title: "YouTube Ads",
      description: "Engage your audience with video advertising on the world's second-largest search engine. From skippable in-stream ads to discovery ads, we maximize your video marketing ROI.",
      features: ["Video Ad Creation", "Audience Targeting", "TrueView Campaigns", "Brand Lift Studies"],
      color: "#FF0000"
    },
    {
      icon: Layers,
      title: "Performance Max",
      description: "Leverage Google's AI-powered campaign type that optimizes across all Google channels including Search, Display, YouTube, Gmail, and Maps for maximum conversions.",
      features: ["AI-Driven Optimization", "Cross-Channel Reach", "Automated Bidding", "Asset Group Management"],
      color: "#34A853"
    },
    {
      icon: Target,
      title: "Remarketing Ads",
      description: "Re-engage visitors who have previously interacted with your website or app. Our remarketing strategies bring back potential customers and improve conversion rates significantly.",
      features: ["Dynamic Remarketing", "Custom Audience Lists", "Sequential Messaging", "Cross-Device Targeting"],
      color: "#C8F200"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Audit",
      description: "We begin with a comprehensive analysis of your current Google Ads account, competitor landscape, and market opportunities. Our PPC specialists identify gaps and growth potential in your pay-per-click advertising strategy."
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Based on our findings, we develop a customized Google Ads strategy aligned with your business goals. This includes keyword research, audience targeting, budget allocation, and campaign structure planning."
    },
    {
      step: "03",
      title: "Campaign Setup",
      description: "Our Google Ads agency team builds your campaigns from the ground up with proper account structure, compelling ad copy, optimized landing pages, and conversion tracking implementation."
    },
    {
      step: "04",
      title: "Launch & Monitor",
      description: "We launch your campaigns with careful monitoring during the initial phase. Real-time adjustments ensure optimal performance from day one of your Google Ads campaign management."
    },
    {
      step: "05",
      title: "Optimize & Scale",
      description: "Continuous optimization through A/B testing, bid adjustments, and performance analysis. We scale what works and eliminate what does not to maximize your advertising ROI."
    },
    {
      step: "06",
      title: "Report & Refine",
      description: "Transparent monthly reporting with actionable insights. We review performance metrics together and refine strategies to continuously improve your Google Ads results."
    }
  ];

  const stats = [
    { value: "500%", label: "Average ROAS Achieved", icon: TrendingUp },
    { value: "65%", label: "Lower Cost Per Acquisition", icon: DollarSign },
    { value: "10M+", label: "Ad Spend Managed", icon: BarChart3 },
    { value: "200+", label: "Successful Campaigns", icon: Award }
  ];

  const benefits = [
    {
      icon: Target,
      title: "Precision Targeting",
      description: "Reach the right audience at the right time with advanced targeting options including demographics, interests, behaviors, and custom intent audiences."
    },
    {
      icon: DollarSign,
      title: "Cost-Effective Advertising",
      description: "Pay only when someone clicks on your ad. Our optimization strategies ensure every rupee spent contributes to your business growth and marketing goals."
    },
    {
      icon: LineChart,
      title: "Measurable Results",
      description: "Track every click, impression, and conversion with detailed analytics. Know exactly how your Google Ads investment translates to revenue and business growth."
    },
    {
      icon: Zap,
      title: "Instant Visibility",
      description: "Unlike SEO which takes months, Google Ads delivers immediate visibility. Start appearing on page one of Google search results within hours of campaign launch."
    },
    {
      icon: Settings,
      title: "Complete Control",
      description: "Full control over your budget, targeting, and messaging. Pause, adjust, or scale your campaigns anytime based on business needs and market conditions."
    },
    {
      icon: Users,
      title: "Competitive Advantage",
      description: "Outrank competitors in search results and capture market share. Strategic bidding and quality optimization help you win in competitive industries."
    }
  ];

  const faqs = [
    {
      question: "How much does Google Ads management cost?",
      answer: "Our Google Ads management services are tailored to your budget and goals. We work with businesses spending anywhere from ₹25,000 to ₹10,00,000+ per month on ad spend. Our management fee is typically a percentage of ad spend or a flat monthly retainer, depending on the complexity of your campaigns. Contact us for a customized quote based on your specific needs."
    },
    {
      question: "How long does it take to see results from Google Ads?",
      answer: "One of the biggest advantages of Google Ads is immediate visibility. Your ads can start appearing within hours of campaign launch. However, optimal performance typically takes 2-4 weeks as we gather data, test different approaches, and optimize campaigns. Significant ROI improvements are usually visible within the first 60-90 days of professional management."
    },
    {
      question: "What is the difference between Google Ads and SEO?",
      answer: "Google Ads (PPC) provides immediate visibility through paid placements at the top of search results, while SEO focuses on organic rankings that take months to achieve. Google Ads offers precise targeting and instant traffic, whereas SEO builds long-term authority. The best digital marketing strategy often combines both for maximum impact and sustainable growth."
    },
    {
      question: "How do you measure Google Ads success?",
      answer: "We track multiple key performance indicators including Click-Through Rate (CTR), Cost Per Click (CPC), Conversion Rate, Cost Per Acquisition (CPA), Return on Ad Spend (ROAS), and Quality Score. Our comprehensive reporting dashboard provides real-time insights into campaign performance, allowing data-driven optimization decisions."
    },
    {
      question: "Can you work with my existing Google Ads account?",
      answer: "Absolutely! We frequently take over existing Google Ads accounts. Our first step is conducting a thorough audit to identify optimization opportunities, wasted spend, and areas for improvement. Many clients see significant performance improvements within the first month after we restructure and optimize their existing campaigns."
    },
    {
      question: "What industries do you specialize in for Google Ads?",
      answer: "Our Google Ads specialists have experience across diverse industries including e-commerce, healthcare, real estate, education, legal services, home services, B2B technology, and local businesses. Each industry has unique challenges, and our team adapts strategies accordingly to deliver maximum ROI for your specific market."
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Google Partner Certified",
      description: "Our team holds Google Ads certifications and follows best practices recommended by Google for campaign management and optimization."
    },
    {
      icon: Clock,
      title: "Dedicated Account Manager",
      description: "Get a dedicated PPC specialist who understands your business and is available for regular strategy calls and quick support."
    },
    {
      icon: Shield,
      title: "Transparent Reporting",
      description: "No hidden fees or confusing metrics. We provide clear, actionable reports that show exactly where your money goes and the results it generates."
    },
    {
      icon: PieChart,
      title: "Data-Driven Decisions",
      description: "Every optimization we make is backed by data. We use advanced analytics and testing methodologies to continuously improve performance."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <SEOHead
        title="Google Ads Management Services - PPC Advertising"
        description="Expert Google Ads management for maximum ROI. Search ads, display ads, YouTube ads, shopping campaigns, and remarketing. Drive targeted traffic and conversions."
        canonicalUrl="/services/google-ads"
        keywords="Google Ads, PPC advertising, search ads, display ads, YouTube ads, Google Ads agency, pay per click"
      />
      <Navbar />
      {/* Hero Section */}
      <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-[#C8F200]/10" />
          <motion.div 
            className="absolute top-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-40 left-20 w-72 h-72 bg-[#C8F200]/20 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          
          {/* Floating Google Colors */}
          {["#4285F4", "#EA4335", "#FBBC04", "#34A853"].map((color, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 rounded-full"
              style={{ 
                backgroundColor: color,
                left: `${20 + i * 20}%`,
                top: `${30 + (i % 2) * 40}%`
              }}
              animate={{ 
                y: [0, -30, 0],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div 
              className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Search className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 text-sm font-medium">Google Ads Management Services</span>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl font-black mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Drive <span className="text-[#C8F200]">Qualified Traffic</span>
              <br />
              & <span className="text-blue-400">Maximize ROI</span>
            </motion.h1>

            <motion.p 
              className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Transform your business with expert Google Ads management. Our certified PPC specialists 
              create high-converting campaigns that put your brand in front of customers actively 
              searching for your products and services.
            </motion.p>

            <motion.div 
              className="flex justify-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <a href="https://topmate.io/karthik_media/1790830" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="xl" 
                  className="bg-[#C8F200] text-black hover:bg-[#C8F200]/90 font-bold group"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </motion.div>

            {/* Stats Row */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center"
                >
                  <stat.icon className="w-8 h-8 text-[#C8F200] mx-auto mb-3" />
                  <p className="text-3xl md:text-4xl font-black text-white mb-1">{stat.value}</p>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* What is Google Ads Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                What is <span className="text-[#C8F200]">Google Ads</span>?
              </h2>
              <div className="space-y-4 text-gray-300 text-lg">
                <p>
                  Google Ads, formerly known as Google AdWords, is the world's largest and most powerful 
                  pay-per-click (PPC) advertising platform. It allows businesses of all sizes to display 
                  ads across Google's vast network, including Google Search, YouTube, Gmail, and millions 
                  of partner websites.
                </p>
                <p>
                  With Google processing over 8.5 billion searches daily, Google Ads provides unparalleled 
                  access to potential customers actively looking for products and services like yours. 
                  Unlike traditional advertising where you pay for impressions, Google Ads operates on a 
                  cost-per-click model, meaning you only pay when someone shows genuine interest by 
                  clicking on your ad.
                </p>
                <p>
                  Our Google Ads agency specializes in creating, managing, and optimizing campaigns that 
                  deliver measurable results. From search ads that capture high-intent traffic to display 
                  campaigns that build brand awareness, we leverage the full power of Google's advertising 
                  ecosystem to grow your business.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-blue-500/20 to-[#C8F200]/20 rounded-3xl p-8 border border-white/10">
                <div className="space-y-4">
                  {/* Mock Search Result */}
                  <div className="bg-white rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Ad</span>
                      <span className="text-green-600 text-sm">www.yourbusiness.com</span>
                    </div>
                    <h4 className="text-blue-600 text-lg font-medium mb-1 hover:underline cursor-pointer">
                      Your Business - Professional Services | Get Started Today
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Expert solutions tailored to your needs. Trusted by 1000+ customers. 
                      Free consultation available. Contact us now!
                    </p>
                  </div>

                  <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-gray-400 text-sm">www.competitor1.com</span>
                    </div>
                    <h4 className="text-gray-300 text-lg font-medium mb-1">
                      Competitor Result #1
                    </h4>
                    <p className="text-gray-500 text-sm">
                      Generic description of competitor services...
                    </p>
                  </div>

                  <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-gray-400 text-sm">www.competitor2.com</span>
                    </div>
                    <h4 className="text-gray-300 text-lg font-medium mb-1">
                      Competitor Result #2
                    </h4>
                    <p className="text-gray-500 text-sm">
                      Generic description of competitor services...
                    </p>
                  </div>
                </div>

                <motion.div 
                  className="absolute -top-4 -right-4 bg-[#C8F200] text-black rounded-full px-4 py-2 font-bold text-sm"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Position #1
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Why Invest in <span className="text-[#C8F200]">Google Ads</span>?
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Google Ads offers unmatched advantages for businesses looking to grow their online presence 
              and generate qualified leads. Here is why pay-per-click advertising should be part of your 
              digital marketing strategy.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="group bg-black border border-white/10 rounded-2xl p-6 hover:border-[#C8F200]/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#C8F200]/20 transition-colors">
                  <benefit.icon className="w-7 h-7 text-blue-400 group-hover:text-[#C8F200] transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Types - Interactive Tabs */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Google Ads <span className="text-[#C8F200]">Campaign Types</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              We manage all types of Google Ads campaigns to meet your specific business objectives. 
              Whether you want to drive sales, generate leads, or build brand awareness, our PPC 
              advertising experts have you covered.
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {campaignTypes.map((type, index) => (
              <motion.button
                key={type.title}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all ${
                  activeTab === index 
                    ? 'bg-[#C8F200] text-black' 
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <type.icon className="w-5 h-5" />
                <span className="hidden sm:inline">{type.title}</span>
              </motion.button>
            ))}
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-3xl p-8 md:p-12">
              <div className="flex items-center gap-4 mb-6">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: `${campaignTypes[activeTab].color}20` }}
                >
                  {(() => {
                    const IconComponent = campaignTypes[activeTab].icon;
                    return <IconComponent className="w-8 h-8" style={{ color: campaignTypes[activeTab].color }} />;
                  })()}
                </div>
                <h3 className="text-3xl font-bold">{campaignTypes[activeTab].title}</h3>
              </div>

              <p className="text-gray-300 text-lg mb-8">
                {campaignTypes[activeTab].description}
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {campaignTypes[activeTab].features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C8F200] flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-gradient-to-b from-transparent via-[#C8F200]/5 to-transparent">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Our Google Ads <span className="text-[#C8F200]">Management Process</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              A proven methodology that delivers consistent results. Our structured approach to 
              Google Ads campaign management ensures your advertising investment generates maximum returns.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                className="relative bg-black border border-white/10 rounded-2xl p-6 hover:border-[#C8F200]/50 transition-colors"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#C8F200] rounded-full flex items-center justify-center">
                  <span className="text-black font-black">{step.step}</span>
                </div>
                <div className="pt-4">
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Why Choose Our <span className="text-[#C8F200]">Google Ads Agency</span>?
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Partnering with the right Google Ads management company can make or break your digital 
              advertising success. Here is what sets The Karthik Media apart from other PPC agencies.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                className="group text-center p-6 bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-2xl hover:border-[#C8F200]/50 transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-[#C8F200]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#C8F200]/20 transition-colors">
                  <item.icon className="w-8 h-8 text-[#C8F200]" />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Frequently Asked <span className="text-[#C8F200]">Questions</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Get answers to common questions about our Google Ads services and PPC advertising management.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="border border-white/10 rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                >
                  <span className="font-bold text-lg pr-4">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-[#C8F200] flex-shrink-0 transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{ 
                    height: openFaq === index ? 'auto' : 0,
                    opacity: openFaq === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-gray-400">
                    {faq.answer}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-transparent to-[#C8F200]/20" />
          <motion.div 
            className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/30 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          <motion.div 
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#C8F200]/30 rounded-full blur-3xl"
            animate={{ scale: [1.3, 1, 1.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-12 h-12 text-[#C8F200] mx-auto mb-6" />
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              Ready to <span className="text-[#C8F200]">Grow Your Business</span> with Google Ads?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Stop wasting money on underperforming campaigns. Let our certified Google Ads specialists 
              build and manage campaigns that deliver real results. Get your free PPC audit today and 
              discover untapped opportunities in your market.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="xl" 
                className="bg-[#C8F200] text-black hover:bg-[#C8F200]/90 font-bold text-lg px-10"
              >
                Get Free PPC Audit
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="xl" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 font-bold text-lg"
              >
                Call: 9842041665
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GoogleAdsService;
