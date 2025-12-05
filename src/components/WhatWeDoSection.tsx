import { motion } from "framer-motion";
import DatabaseWithRestApi from "@/components/ui/database-with-rest-api";

const WhatWeDoSection = () => {
  return (
    <section className="relative bg-background py-24 pb-40 md:pb-48 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground mb-4">
            What we <span className="text-primary">do?</span>
          </h2>
        </motion.div>

        {/* Database REST API Component */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center w-full"
        >
          <DatabaseWithRestApi
            className="w-full max-w-6xl h-[550px] md:h-[650px] lg:h-[750px]"
            badgeTexts={{
              first: "Webdesign",
              second: "SEO",
              third: "Google Ads",
              fourth: "META Ads",
              fifth: "Content",
              sixth: "AI Funnels",
            }}
            buttonTexts={{
              first: "Daily Leads",
              second: "Sales Conversions",
            }}
            circleText="Your Brand"
            title="Creating High Quality Traffic for Conversions"
            lightColor="#C8F200"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
