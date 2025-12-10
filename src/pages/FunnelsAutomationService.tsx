import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Zap, ArrowRight, Bot, Workflow, Mail, MessageSquare,
  ShoppingCart, Users, BarChart3, Clock, Target, Rocket,
  CheckCircle2, ChevronDown, Play, Sparkles, Settings,
  MousePointer, RefreshCw, Bell, Calendar, Database,
  Filter, Send, TrendingUp, DollarSign, Heart, Star
} from "lucide-react";

const FunnelsAutomationService = () => {
  const [activeFunnelStage, setActiveFunnelStage] = useState(0);
  const [activeAutomation, setActiveAutomation] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const funnelStages = [
    {
      name: "Awareness",
      icon: Target,
      visitors: "10,000",
      description: "Attract potential customers through targeted ads, SEO, and content marketing",
      tactics: ["Social Media Ads", "Google Ads", "SEO Content", "Influencer Marketing"],
      color: "#C8F200"
    },
    {
      name: "Interest",
      icon: Heart,
      visitors: "3,500",
      description: "Capture attention with lead magnets, landing pages, and valuable content offers",
      tactics: ["Lead Magnets", "Landing Pages", "Email Capture", "Webinars"],
      color: "#A8D200"
    },
    {
      name: "Consideration",
      icon: Star,
      visitors: "1,200",
      description: "Nurture leads with email sequences, case studies, and personalized follow-ups",
      tactics: ["Email Sequences", "Case Studies", "Product Demos", "Retargeting"],
      color: "#88B200"
    },
    {
      name: "Conversion",
      icon: ShoppingCart,
      visitors: "450",
      description: "Convert leads to customers with optimized checkout and compelling offers",
      tactics: ["Sales Pages", "Limited Offers", "Payment Plans", "Trust Signals"],
      color: "#689200"
    },
    {
      name: "Retention",
      icon: RefreshCw,
      visitors: "380",
      description: "Keep customers engaged and coming back with loyalty programs and upsells",
      tactics: ["Loyalty Programs", "Upsell Sequences", "VIP Access", "Referral Rewards"],
      color: "#487200"
    }
  ];

  const automationWorkflows = [
    {
      title: "Lead Nurture Sequence",
      description: "Automatically nurture new leads with a personalized email sequence that builds trust and moves them toward purchase.",
      trigger: "New lead signup",
      steps: [
        { icon: Mail, label: "Welcome Email", delay: "Instant" },
        { icon: Clock, label: "Value Email #1", delay: "Day 2" },
        { icon: MessageSquare, label: "Case Study", delay: "Day 4" },
        { icon: Target, label: "Offer Email", delay: "Day 7" },
        { icon: Bell, label: "Final Reminder", delay: "Day 10" }
      ]
    },
    {
      title: "Abandoned Cart Recovery",
      description: "Recover lost sales by automatically reaching out to customers who left items in their cart without completing purchase.",
      trigger: "Cart abandoned",
      steps: [
        { icon: Clock, label: "Wait 1 Hour", delay: "1h" },
        { icon: Mail, label: "Reminder Email", delay: "1h" },
        { icon: Clock, label: "Wait 24 Hours", delay: "24h" },
        { icon: Mail, label: "Discount Offer", delay: "24h" },
        { icon: MessageSquare, label: "SMS Reminder", delay: "48h" }
      ]
    },
    {
      title: "Customer Onboarding",
      description: "Deliver an exceptional first experience with automated welcome sequences, tutorials, and check-ins.",
      trigger: "New purchase",
      steps: [
        { icon: Mail, label: "Welcome + Access", delay: "Instant" },
        { icon: Calendar, label: "Getting Started Guide", delay: "Day 1" },
        { icon: MessageSquare, label: "Check-in Email", delay: "Day 3" },
        { icon: Target, label: "Tips & Tricks", delay: "Day 7" },
        { icon: Star, label: "Review Request", delay: "Day 14" }
      ]
    },
    {
      title: "Re-engagement Campaign",
      description: "Win back inactive subscribers and customers with targeted re-engagement campaigns.",
      trigger: "90 days inactive",
      steps: [
        { icon: Heart, label: "We Miss You", delay: "Day 1" },
        { icon: Mail, label: "Special Offer", delay: "Day 3" },
        { icon: Target, label: "Last Chance", delay: "Day 7" },
        { icon: Filter, label: "Clean List", delay: "Day 14" }
      ]
    }
  ];

  const funnelTypes = [
    {
      icon: Users,
      title: "Lead Generation Funnel",
      description: "Capture qualified leads with irresistible lead magnets and optimized landing pages that convert visitors into subscribers.",
      features: ["Custom Landing Pages", "Lead Magnet Delivery", "Email Integration", "A/B Testing"]
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Sales Funnel",
      description: "Maximize online sales with product funnels that include upsells, downsells, and order bumps to increase average order value.",
      features: ["Product Pages", "Upsell Sequences", "Order Bumps", "Post-Purchase Flow"]
    },
    {
      icon: Calendar,
      title: "Webinar Funnel",
      description: "Fill your webinars with qualified prospects and convert them into customers with automated registration and follow-up sequences.",
      features: ["Registration Pages", "Reminder Sequences", "Replay Access", "Sales Follow-up"]
    },
    {
      icon: Rocket,
      title: "Launch Funnel",
      description: "Create buzz and drive sales for product launches with pre-launch sequences, waitlists, and limited-time offer campaigns.",
      features: ["Waitlist Building", "Launch Sequences", "Scarcity Timers", "Social Proof"]
    },
    {
      icon: MessageSquare,
      title: "Consultation Funnel",
      description: "Book more calls and consultations with automated scheduling, reminder sequences, and pre-call questionnaires.",
      features: ["Calendar Integration", "Appointment Reminders", "Pre-call Forms", "No-show Recovery"]
    },
    {
      icon: TrendingUp,
      title: "Tripwire Funnel",
      description: "Convert cold traffic into buyers with low-ticket offers that lead to high-ticket purchases through strategic upselling.",
      features: ["Low-ticket Offers", "Upsell Pages", "Downsell Options", "Backend Offers"]
    }
  ];

  const stats = [
    { value: "300%", label: "Average Increase in Conversions" },
    { value: "15hrs", label: "Saved Weekly Per Business" },
    { value: "67%", label: "Higher Lead Quality" },
    { value: "4.2X", label: "Return on Investment" }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Save Time",
      description: "Automate repetitive tasks and free up hours every week to focus on growing your business instead of manual follow-ups."
    },
    {
      icon: TrendingUp,
      title: "Increase Conversions",
      description: "Strategic funnels guide prospects through a proven path to purchase, dramatically improving your conversion rates."
    },
    {
      icon: Users,
      title: "Never Miss a Lead",
      description: "Automated follow-ups ensure every lead gets nurtured at the right time, even while you sleep or focus on other tasks."
    },
    {
      icon: DollarSign,
      title: "Maximize Revenue",
      description: "Upsells, cross-sells, and retention automations help you extract maximum value from every customer relationship."
    },
    {
      icon: BarChart3,
      title: "Data-Driven Decisions",
      description: "Track every touchpoint and conversion to understand what works and continuously optimize for better results."
    },
    {
      icon: Zap,
      title: "Scale Without Stress",
      description: "Systems that work 24/7 allow you to scale your business without proportionally increasing workload or staff."
    }
  ];

  const faqs = [
    {
      question: "What is a marketing funnel and why do I need one?",
      answer: "A marketing funnel is a strategic path that guides potential customers from first awareness of your brand to becoming paying customers and beyond. Unlike random marketing efforts, funnels provide a systematic approach to converting strangers into leads and leads into loyal customers. Every business, regardless of size, benefits from having structured funnels because they create predictable, scalable revenue and improve conversion rates at every stage of the customer journey."
    },
    {
      question: "What automation tools do you work with?",
      answer: "We work with a wide range of marketing automation platforms to match your specific needs and budget. Our team is proficient in tools like ActiveCampaign, Mailchimp, ConvertKit, HubSpot, Zapier, Make (formerly Integromat), GoHighLevel, ClickFunnels, and many more. We will recommend the best tools based on your business requirements, existing tech stack, and growth goals."
    },
    {
      question: "How long does it take to set up a complete funnel system?",
      answer: "The timeline depends on the complexity of your funnel and automation requirements. A simple lead generation funnel can be set up in 1-2 weeks, while comprehensive multi-step funnels with complex automation sequences typically take 4-6 weeks. We follow an agile approach, launching core components first so you start seeing results quickly while we build out additional features."
    },
    {
      question: "Will I be able to manage the automations myself after setup?",
      answer: "Absolutely! We believe in empowering our clients. Every funnel and automation we build comes with comprehensive documentation and training. We will walk you through how everything works, how to make common adjustments, and how to monitor performance. For clients who prefer hands-off management, we also offer ongoing maintenance and optimization packages."
    },
    {
      question: "What kind of results can I expect from marketing automation?",
      answer: "Results vary based on your industry, audience, and current baseline, but our clients typically see significant improvements. Common outcomes include 2-4x increase in lead conversion rates, 50-70% reduction in time spent on manual tasks, 30-50% improvement in email open and click rates through better segmentation, and substantial increases in customer lifetime value through automated retention campaigns."
    },
    {
      question: "Do you offer ongoing support and optimization?",
      answer: "Yes, we offer flexible support options. Our basic package includes 30 days of post-launch support to ensure everything runs smoothly. For clients seeking continuous improvement, we offer monthly optimization retainers where we monitor performance, run A/B tests, and continuously refine your funnels and automations for better results over time."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      {/* Hero Section */}
      <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-[#C8F200]/10" />
          
          {/* Animated Connection Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-20">
            <motion.path
              d="M0,200 Q400,100 800,200 T1600,200"
              stroke="#C8F200"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.path
              d="M0,400 Q400,300 800,400 T1600,400"
              stroke="#9333EA"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, delay: 0.5, repeat: Infinity }}
            />
          </svg>

          <motion.div 
            className="absolute top-40 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-20 right-20 w-96 h-96 bg-[#C8F200]/20 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div 
              className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Bot className="w-4 h-4 text-purple-400" />
              <span className="text-purple-400 text-sm font-medium">Marketing Automation & Funnels</span>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl font-black mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Automate Your <span className="text-[#C8F200]">Growth</span>
              <br />
              <span className="text-purple-400">24/7</span>
            </motion.h1>

            <motion.p 
              className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Build intelligent sales funnels and marketing automations that work while you sleep. 
              Convert more leads, nurture relationships, and scale your business without burning out.
            </motion.p>

            <motion.div 
              className="flex flex-wrap justify-center gap-4 mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button 
                size="xl" 
                className="bg-[#C8F200] text-black hover:bg-[#C8F200]/90 font-bold group"
              >
                Get Automation Audit
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="xl" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </motion.div>

            {/* Stats */}
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
                  <p className="text-3xl md:text-4xl font-black text-[#C8F200] mb-1">{stat.value}</p>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Funnel Visualization */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              The <span className="text-[#C8F200]">Perfect Funnel</span> Journey
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Click on each stage to see how we optimize your customer journey from first touch to loyal advocate
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {/* Funnel Shape */}
            <div className="relative">
              {funnelStages.map((stage, index) => {
                const widthPercent = 100 - (index * 15);
                const isActive = activeFunnelStage === index;
                
                return (
                  <motion.div
                    key={stage.name}
                    className="relative mx-auto mb-2 cursor-pointer group"
                    style={{ width: `${widthPercent}%` }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setActiveFunnelStage(index)}
                  >
                    <div 
                      className={`relative py-6 px-8 rounded-lg transition-all duration-300 ${
                        isActive 
                          ? 'bg-gradient-to-r from-[#C8F200]/30 to-purple-500/30 border-2 border-[#C8F200]' 
                          : 'bg-white/5 border border-white/10 hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div 
                            className="w-12 h-12 rounded-xl flex items-center justify-center"
                            style={{ backgroundColor: `${stage.color}30` }}
                          >
                            <stage.icon className="w-6 h-6" style={{ color: stage.color }} />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold">{stage.name}</h3>
                            <p className="text-gray-400 text-sm hidden md:block">{stage.description}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-black" style={{ color: stage.color }}>{stage.visitors}</p>
                          <p className="text-gray-500 text-xs">visitors</p>
                        </div>
                      </div>

                      {/* Expanded Content */}
                      {isActive && (
                        <motion.div 
                          className="mt-6 pt-6 border-t border-white/10"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                        >
                          <p className="text-gray-300 mb-4 md:hidden">{stage.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {stage.tactics.map((tactic, i) => (
                              <span 
                                key={i}
                                className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300"
                              >
                                {tactic}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </div>

                    {/* Arrow */}
                    {index < funnelStages.length - 1 && (
                      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 z-10">
                        <ChevronDown className="w-6 h-6 text-gray-600" />
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Automation Workflows Demo */}
      <section className="py-20 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="text-[#C8F200]">Automation</span> Workflows
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              See how our automated workflows nurture leads and drive conversions without manual intervention
            </p>
          </motion.div>

          {/* Workflow Selector */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {automationWorkflows.map((workflow, index) => (
              <motion.button
                key={workflow.title}
                onClick={() => setActiveAutomation(index)}
                className={`px-4 py-3 rounded-xl font-medium transition-all ${
                  activeAutomation === index 
                    ? 'bg-[#C8F200] text-black' 
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {workflow.title}
              </motion.button>
            ))}
          </div>

          {/* Workflow Visualization */}
          <motion.div
            key={activeAutomation}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Workflow className="w-8 h-8 text-purple-400" />
                <div>
                  <h3 className="text-2xl font-bold">{automationWorkflows[activeAutomation].title}</h3>
                  <p className="text-gray-400">{automationWorkflows[activeAutomation].description}</p>
                </div>
              </div>

              {/* Trigger */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-purple-400" />
                </div>
                <div className="flex-1 h-0.5 bg-gradient-to-r from-purple-500 to-transparent" />
                <span className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-lg text-purple-300 font-medium">
                  Trigger: {automationWorkflows[activeAutomation].trigger}
                </span>
              </div>

              {/* Steps */}
              <div className="relative">
                <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#C8F200] via-[#C8F200]/50 to-transparent" />
                
                <div className="space-y-4">
                  {automationWorkflows[activeAutomation].steps.map((step, index) => (
                    <motion.div
                      key={index}
                      className="relative flex items-center gap-4 pl-12"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.15 }}
                    >
                      {/* Node */}
                      <div className="absolute left-0 w-10 h-10 bg-[#C8F200]/20 border-2 border-[#C8F200] rounded-full flex items-center justify-center">
                        <step.icon className="w-5 h-5 text-[#C8F200]" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 flex items-center justify-between bg-white/5 rounded-xl p-4 border border-white/10">
                        <span className="font-medium">{step.label}</span>
                        <span className="text-sm text-gray-500 bg-white/5 px-3 py-1 rounded-full">
                          {step.delay}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Funnel Types */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Funnel Types <span className="text-[#C8F200]">We Build</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Custom-designed funnels tailored to your specific business model and goals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {funnelTypes.map((funnel, index) => (
              <motion.div
                key={funnel.title}
                className="group bg-black border border-white/10 rounded-2xl p-6 hover:border-[#C8F200]/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#C8F200]/20 transition-colors">
                  <funnel.icon className="w-7 h-7 text-purple-400 group-hover:text-[#C8F200] transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3">{funnel.title}</h3>
                <p className="text-gray-400 mb-4">{funnel.description}</p>
                <div className="space-y-2">
                  {funnel.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-500">
                      <CheckCircle2 className="w-4 h-4 text-[#C8F200]" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-b from-transparent via-[#C8F200]/5 to-transparent">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Why <span className="text-[#C8F200]">Automate</span>?
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              The businesses that win are the ones that work smarter, not harder
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="group text-center p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div 
                  className="w-20 h-20 bg-gradient-to-br from-[#C8F200]/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <benefit.icon className="w-10 h-10 text-[#C8F200]" />
                </motion.div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools We Use */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Tools & Platforms <span className="text-[#C8F200]">We Master</span>
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              "ActiveCampaign", "Mailchimp", "HubSpot", "Zapier", "Make",
              "GoHighLevel", "ClickFunnels", "ConvertKit", "Kajabi", "Keap",
              "Drip", "GetResponse", "Sendinblue", "Pipedrive", "Calendly"
            ].map((tool, index) => (
              <motion.div
                key={tool}
                className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl hover:border-[#C8F200]/50 hover:bg-white/10 transition-all cursor-default"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                whileHover={{ y: -2 }}
              >
                <span className="text-gray-300 font-medium">{tool}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent">
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
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-transparent to-[#C8F200]/20" />
          <motion.div 
            className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl"
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
            <Sparkles className="w-12 h-12 text-[#C8F200] mx-auto mb-6" />
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              Ready to <span className="text-[#C8F200]">Automate</span> Your Growth?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Stop losing leads to slow follow-ups and manual processes. Let us build systems 
              that convert prospects into customers while you focus on what you do best.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="xl" 
                className="bg-[#C8F200] text-black hover:bg-[#C8F200]/90 font-bold text-lg px-10"
              >
                Get Your Automation Audit
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

export default FunnelsAutomationService;
