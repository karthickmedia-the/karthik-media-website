import { motion } from "framer-motion";

const phoneContents = [
  { id: 1, placeholder: "Reel 1" },
  { id: 2, placeholder: "Reel 2" },
  { id: 3, placeholder: "Reel 3" },
  { id: 4, placeholder: "Reel 4" },
];

const CreativesShowcase = () => {
  return (
    <section className="relative py-20 md:py-32 bg-background overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(200,242,0,0.03),transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Look at our <span className="text-[#C8F200]">Creatives</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Scroll-stopping content that drives engagement and conversions
          </p>
        </motion.div>

        {/* Phone Mockups Container */}
        <div className="flex justify-center items-start gap-4 md:gap-8 flex-wrap md:flex-nowrap">
          {phoneContents.map((phone, index) => (
            <motion.div
              key={phone.id}
              initial={{ opacity: 0, y: 50, rotate: index % 2 === 0 ? -5 : 5 }}
              whileInView={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? -3 : 3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
              style={{
                transform: `translateY(${index % 2 === 0 ? '0' : '20px'})`,
              }}
            >
              {/* Phone Frame */}
              <div className="relative w-[160px] md:w-[200px] lg:w-[220px]">
                {/* Phone outer frame */}
                <div className="relative bg-zinc-900 rounded-[2.5rem] p-2 shadow-2xl border border-zinc-800">
                  {/* Notch */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full z-20" />
                  
                  {/* Screen */}
                  <div className="relative bg-black rounded-[2rem] overflow-hidden aspect-[9/19.5]">
                    {/* Placeholder content - replace with actual GIFs */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900">
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#C8F200]/20 flex items-center justify-center">
                          <svg 
                            className="w-6 h-6 text-[#C8F200]" 
                            fill="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                        <span className="text-zinc-500 text-xs">{phone.placeholder}</span>
                      </div>
                    </div>
                    
                    {/* Animated gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                </div>

                {/* Hanging wire effect */}
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-zinc-600 to-zinc-800" />
                <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-zinc-700 border-2 border-zinc-600" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-4">
            Want content like this for your brand?
          </p>
          <button className="px-8 py-3 bg-[#C8F200] text-black font-semibold rounded-full hover:bg-[#d4ff00] transition-colors">
            Let's Create Together
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CreativesShowcase;
