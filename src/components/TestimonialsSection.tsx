import { motion } from "framer-motion";

const testimonials = [
  {
    name: 'Giftson Paul',
    company: 'Destiny Decoder',
    text: 'The Karthik Media perfectly understood our vision and delivered a clean, meaningful website for Destiny Decoder.',
    rating: 4.9,
  },
  {
    name: 'Karthick',
    company: 'Black Caps',
    text: 'Super smooth process and an impressive website—The Karthik Media made our brand look powerful online.',
    rating: 4.8,
  },
  {
    name: 'Dr. R. Kanmani',
    company: 'Dolphin Group of Schools',
    text: 'The Karthik Media captured our school\'s identity beautifully and delivered a very professional website.',
    rating: 4.7,
  },
  {
    name: 'Mr. Wahab',
    company: 'Waioz Consulting Services',
    text: 'Professional, fast, and reliable—The Karthik Media built exactly the website we needed.',
    rating: 4.5,
  },
  {
    name: 'Mr. Anbu',
    company: 'Solid Pro',
    text: 'A seamless experience; The Karthik Media gave us a website that fits our brand perfectly.',
    rating: 4.6,
  },
  {
    name: 'Mr. Abi Sangeeth',
    company: 'Blenforge Technology',
    text: 'The Karthik Media delivered a clean, premium, and high-performing website that exceeded our expectations.',
    rating: 4.8,
  },
];

const TestimonialCard = ({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="relative group"
  >
    <div className="bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 backdrop-blur-sm border border-zinc-800/50 rounded-2xl p-6 h-full transition-all duration-500 hover:border-[#C8F200]/40 hover:shadow-[0_0_30px_rgba(200,242,0,0.1)]">
      {/* Star rating */}
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className={`w-4 h-4 ${i < Math.floor(testimonial.rating) ? 'text-[#C8F200]' : i < testimonial.rating ? 'text-[#C8F200]/50' : 'text-zinc-600'}`} fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="text-[#C8F200] font-bold text-sm ml-1">{testimonial.rating}</span>
      </div>

      {/* Quote */}
      <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 min-h-[80px]">
        "{testimonial.text}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C8F200]/20 to-[#C8F200]/5 flex items-center justify-center border border-[#C8F200]/30">
          <span className="text-[#C8F200] font-bold text-sm">
            {testimonial.name.charAt(0)}
          </span>
        </div>
        <div>
          <p className="text-white font-semibold text-sm">{testimonial.name}</p>
          <p className="text-[#C8F200]/70 text-xs">{testimonial.company}</p>
        </div>
      </div>
    </div>
  </motion.div>
);

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-32 bg-black w-full relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#C8F200]/5 via-transparent to-transparent" />
        <motion.div
          className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#C8F200]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#C8F200]/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            Client Success Stories
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            What Our <span className="text-[#C8F200]">Clients</span> Say
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Real feedback from brands that trusted us to build their digital presence.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 text-sm">
            Join <span className="text-[#C8F200]">100+</span> satisfied clients who scaled their business with us
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
