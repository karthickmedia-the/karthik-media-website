import { TypewriterTestimonial } from "@/components/ui/typewriter-testimonial";
import { motion } from "framer-motion";

const testimonials = [
  {
    image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3',
    text: 'Karthik Media transformed our digital presence completely. Our leads increased by 300% within just 3 months. Their AI-powered strategies are truly next level!',
    name: 'Rahul Sharma',
    jobtitle: 'CEO, TechStart India',
  },
  {
    image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3',
    text: 'The ROI we achieved with their Meta Ads campaigns was incredible. They understand the Indian market like no other agency we have worked with.',
    name: 'Priya Patel',
    jobtitle: 'Marketing Director',
  },
  {
    image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3',
    text: 'Their SEO expertise helped us rank #1 for our key terms. Organic traffic grew 5x and we are now the market leader in our segment.',
    name: 'Vikram Singh',
    jobtitle: 'Founder, E-commerce Brand',
  },
  {
    image: 'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3',
    text: 'From strategy to execution, Karthik Media delivers excellence. Their weekly reports and consultations keep us always informed and ahead.',
    name: 'Ananya Reddy',
    jobtitle: 'Business Owner',
  },
  {
    image: 'https://images.unsplash.com/photo-1507003211169-0a6dd7228f2d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3',
    text: 'The AI automation funnels they built for us work 24/7. We have seen a 400% increase in qualified leads without increasing ad spend.',
    name: 'Arjun Mehta',
    jobtitle: 'Sales Head',
  },
  {
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3',
    text: 'Working with Karthik Media feels like having an in-house team. Their dedication and expertise in Google Ads is unmatched.',
    name: 'Sneha Kapoor',
    jobtitle: 'Restaurant Chain Owner',
  },
  {
    image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3',
    text: 'Best decision we made was partnering with Karthik Media. Our coaching business went from local to national reach in just 6 months.',
    name: 'Dr. Anil Kumar',
    jobtitle: 'Education Consultant',
  },
  {
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3',
    text: 'Their content creation team is phenomenal. The creatives they produce consistently outperform our previous benchmarks by 200%.',
    name: 'Rohan Desai',
    jobtitle: 'D2C Brand Founder',
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-32 bg-black w-full relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#C8F200]/10 via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            What Our <span className="text-[#C8F200]">Clients</span> Say
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Hover over to hear from the brands that trusted us to scale their digital success.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <TypewriterTestimonial testimonials={testimonials} />
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
