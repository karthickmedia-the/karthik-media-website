import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does it take to see results from digital marketing?",
    answer: "Results vary by service. For paid ads (Google & Meta), you can see initial results within 1-2 weeks. SEO typically takes 3-6 months for significant improvements. We provide weekly reports so you can track progress from day one.",
  },
  {
    question: "What's your minimum budget requirement?",
    answer: "We work with businesses of all sizes. Our strategies are scalable—whether you're starting with ₹25,000/month or investing lakhs, we optimize every rupee for maximum ROI. We'll recommend the right budget based on your goals.",
  },
  {
    question: "Do you work with businesses outside India?",
    answer: "Yes! We have clients across the globe including the US, UK, UAE, and Australia. Our team is experienced in running campaigns for international markets with timezone-flexible communication.",
  },
  {
    question: "How is The Karthik Media different from other agencies?",
    answer: "With 12+ years of experience, we combine creativity with data-driven strategy. We're not just service providers—we're growth partners. You get transparent reporting, dedicated support, and strategies tailored to your specific business goals.",
  },
  {
    question: "What industries do you specialize in?",
    answer: "We've delivered results across 50+ industries including e-commerce, education, healthcare, real estate, coaching, restaurants, and B2B services. Our diverse experience helps us bring fresh perspectives to every project.",
  },
  {
    question: "Can I pause or cancel my campaigns anytime?",
    answer: "Absolutely. We believe in flexibility. You can pause, scale, or adjust campaigns based on your business needs. No long-term lock-ins—we earn your trust through results, not contracts.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 md:py-32 bg-black w-full relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#C8F200]/5 via-transparent to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-[#C8F200]/10 border border-[#C8F200]/30 rounded-full text-[#C8F200] text-sm font-medium mb-6"
          >
            FAQ
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked <span className="text-[#C8F200]">Questions</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Got questions? We've got answers. Here's what brands commonly ask before partnering with us.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 backdrop-blur-sm border border-zinc-800/50 rounded-xl px-6 data-[state=open]:border-[#C8F200]/30 transition-all duration-300"
              >
                <AccordionTrigger className="text-white text-left hover:text-[#C8F200] hover:no-underline py-5 text-base md:text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-5 text-sm md:text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 mb-4">Still have questions?</p>
          <motion.a
            href="https://topmate.io/karthik_media/1790830"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center px-6 py-3 bg-[#C8F200] text-black font-semibold rounded-lg transition-all hover:shadow-[0_0_30px_rgba(200,242,0,0.4)]"
          >
            Book a Free Consultation
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
