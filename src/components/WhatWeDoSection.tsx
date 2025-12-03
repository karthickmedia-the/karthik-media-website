import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Globe, ShoppingCart, Video, Facebook, Search, Bot, Workflow, Rocket } from "lucide-react";

const WhatWeDoSection = () => {
  const data = [
    {
      title: "01",
      content: (
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Globe className="w-8 h-8 text-hero-accent" />
            <h4 className="text-xl md:text-2xl font-bold text-foreground">Website Development</h4>
          </div>
          <p className="text-muted-foreground text-sm md:text-base mb-4">
            We build fast, responsive, high-converting websites for businesses.
          </p>
          <p className="text-muted-foreground text-sm md:text-base mb-4">
            Our websites are SEO-ready, mobile-friendly, and designed to deliver a smooth user experience.
          </p>
          <p className="text-muted-foreground text-sm md:text-base">
            From landing pages to full-scale business websites, we create designs that build trust and increase conversions.
          </p>
        </div>
      ),
    },
    {
      title: "02",
      content: (
        <div>
          <div className="flex items-center gap-3 mb-4">
            <ShoppingCart className="w-8 h-8 text-hero-accent" />
            <h4 className="text-xl md:text-2xl font-bold text-foreground">E-Commerce Solutions</h4>
          </div>
          <p className="text-muted-foreground text-sm md:text-base mb-4">
            We develop powerful, easy-to-manage eCommerce stores using platforms like Virpanai, Shopify, and WooCommerce.
          </p>
          <p className="text-muted-foreground text-sm md:text-base">
            Our e-commerce websites come with optimized product pages, secure checkout, payment integrations, and growth-focused features to help you generate more online sales.
          </p>
        </div>
      ),
    },
    {
      title: "03",
      content: (
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Video className="w-8 h-8 text-hero-accent" />
            <h4 className="text-xl md:text-2xl font-bold text-foreground">Content Creation</h4>
          </div>
          <p className="text-muted-foreground text-sm md:text-base mb-4">
            We create content that builds brand visibility and engagement.
          </p>
          <p className="text-muted-foreground text-sm md:text-base mb-4">
            This includes Instagram reels, ad creatives, website content, and educational business content.
          </p>
          <p className="text-muted-foreground text-sm md:text-base">
            Every piece is designed to boost your organic reach and strengthen your digital presence.
          </p>
        </div>
      ),
    },
    {
      title: "04",
      content: (
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Facebook className="w-8 h-8 text-hero-accent" />
            <h4 className="text-xl md:text-2xl font-bold text-foreground">Meta Ads Management</h4>
          </div>
          <p className="text-muted-foreground text-sm md:text-base mb-4">
            Our Meta Ads services help you reach the right audience on Facebook & Instagram.
          </p>
          <p className="text-muted-foreground text-sm md:text-base">
            We handle campaign strategy, creative testing, audience targeting, retargeting, and daily optimization to improve ROI and get consistent leads or sales.
          </p>
        </div>
      ),
    },
    {
      title: "05",
      content: (
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Search className="w-8 h-8 text-hero-accent" />
            <h4 className="text-xl md:text-2xl font-bold text-foreground">Google Ads Management</h4>
          </div>
          <p className="text-muted-foreground text-sm md:text-base mb-4">
            We manage Google Search Ads, Display Ads, YouTube Ads, and Performance Max campaigns.
          </p>
          <p className="text-muted-foreground text-sm md:text-base">
            Our focus is on increasing high-intent traffic, improving conversions, and lowering cost-per-lead with keyword-focused strategies.
          </p>
        </div>
      ),
    },
    {
      title: "06",
      content: (
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Bot className="w-8 h-8 text-hero-accent" />
            <h4 className="text-xl md:text-2xl font-bold text-foreground">AI SEO Services</h4>
          </div>
          <p className="text-muted-foreground text-sm md:text-base mb-4">
            We use AI-powered SEO tools to improve your website's ranking and search visibility.
          </p>
          <p className="text-muted-foreground text-sm md:text-base mb-4">
            This includes keyword optimization, on-page SEO, technical SEO, content clusters, and competitor analysis.
          </p>
          <p className="text-muted-foreground text-sm md:text-base">
            Our AI SEO system helps your website attract organic traffic consistently.
          </p>
        </div>
      ),
    },
    {
      title: "07",
      content: (
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Workflow className="w-8 h-8 text-hero-accent" />
            <h4 className="text-xl md:text-2xl font-bold text-foreground">Marketing Automation & Funnel Building</h4>
          </div>
          <p className="text-muted-foreground text-sm md:text-base mb-4">
            We build automated funnels using WhatsApp, landing pages, CRM tools, and nurture sequences.
          </p>
          <p className="text-muted-foreground text-sm md:text-base mb-4">
            These automations help you convert leads faster, follow up smarter, and reduce manual work.
          </p>
          <p className="text-muted-foreground text-sm md:text-base">
            Perfect for webinars, lead generation, and product launches.
          </p>
        </div>
      ),
    },
    {
      title: "08",
      content: (
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Rocket className="w-8 h-8 text-hero-accent" />
            <h4 className="text-xl md:text-2xl font-bold text-foreground">Digital Product & Course Launch Systems</h4>
          </div>
          <p className="text-muted-foreground text-sm md:text-base mb-4">
            We help creators, coaches, and businesses launch digital products or online courses.
          </p>
          <p className="text-muted-foreground text-sm md:text-base">
            Our service includes offer planning, video content structure, landing pages, webinar funnels, automation, and paid ad strategy to maximize enrolments and revenue.
          </p>
        </div>
      ),
    },
  ];

  return (
    <section className="bg-background">
      <Timeline data={data} />
    </section>
  );
};

export default WhatWeDoSection;
