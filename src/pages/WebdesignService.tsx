import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Code, Palette, Zap, Layers, Monitor, Smartphone, Globe, Sparkles, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const features = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Stunning interfaces that captivate users and drive engagement with cutting-edge design principles.",
  },
  {
    icon: Code,
    title: "Custom Development",
    description: "Scalable, high-performance websites built with modern technologies and clean code architecture.",
  },
  {
    icon: Zap,
    title: "Speed Optimization",
    description: "Lightning-fast load times with advanced performance techniques for maximum conversions.",
  },
  {
    icon: Layers,
    title: "CMS Integration",
    description: "Seamless content management systems that empower you to control your digital presence.",
  },
  {
    icon: Monitor,
    title: "Desktop Experience",
    description: "Immersive desktop interfaces with smooth animations and intuitive navigation.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Responsive designs that deliver exceptional experiences across all devices and screen sizes.",
  },
];

const processSteps = [
  { step: "01", title: "Discovery", description: "Deep dive into your brand, goals, and target audience" },
  { step: "02", title: "Strategy", description: "Create a comprehensive roadmap for your digital presence" },
  { step: "03", title: "Design", description: "Craft stunning visuals and intuitive user experiences" },
  { step: "04", title: "Development", description: "Build with cutting-edge technology and clean code" },
  { step: "05", title: "Launch", description: "Deploy and optimize for maximum performance" },
];

const FloatingParticle = ({ delay, x, y }: { delay: number; x: number; y: number }) => (
  <motion.div
    className="absolute w-1 h-1 bg-primary rounded-full"
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0, 1, 0],
      scale: [0, 1.5, 0],
      x: [x, x + 50, x],
      y: [y, y - 100, y],
    }}
    transition={{
      duration: 4,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Animated Grid Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(200,242,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(200,242,0,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <FloatingParticle key={i} delay={i * 0.3} x={Math.random() * 100} y={Math.random() * 100} />
      ))}

      {/* Animated Circles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-primary/20 rounded-full"
            style={{
              width: `${300 + i * 200}px`,
              height: `${300 + i * 200}px`,
              left: "50%",
              top: "50%",
              x: "-50%",
              y: "-50%",
            }}
            animate={{ rotate: 360, scale: [1, 1.05, 1] }}
            transition={{
              rotate: { duration: 20 + i * 10, repeat: Infinity, ease: "linear" },
              scale: { duration: 4 + i * 2, repeat: Infinity, ease: "easeInOut" },
            }}
          />
        ))}
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 container mx-auto px-4 text-center">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
            <Globe className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Premium Web Solutions</span>
          </div>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="block">Webdesign &</span>
          <span className="text-primary relative">
            Development
            <motion.span
              className="absolute -inset-1 bg-primary/20 blur-xl"
              animate={{ opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          We craft stunning, high-performance websites that transform visitors into customers and elevate your brand's digital presence.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button variant="hero-primary" size="lg" className="text-lg px-8">
            Start Your Project
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 border-primary/30 text-foreground hover:bg-primary/10">
            View Portfolio
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 bg-primary rounded-full mt-2"
            animate={{ y: [0, 12, 0], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

const FeaturesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative bg-background py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-foreground mb-4">
            What We <span className="text-primary">Deliver</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive web solutions designed to make your business stand out in the digital landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative group"
            >
              <div className="relative p-8 bg-card/50 border border-primary/10 rounded-2xl overflow-hidden transition-all duration-500 hover:border-primary/40">
                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                {/* Icon */}
                <motion.div
                  className="relative w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6"
                  animate={hoveredIndex === index ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <feature.icon className="w-7 h-7 text-primary" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3 relative">{feature.title}</h3>
                <p className="text-muted-foreground relative">{feature.description}</p>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  return (
    <section className="relative bg-background py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(200,242,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(200,242,0,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-foreground mb-4">
            Our <span className="text-primary">Process</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A systematic approach to building exceptional digital experiences.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connection Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/30 to-transparent hidden md:block" />

          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative flex items-center gap-8 mb-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              {/* Step Number */}
              <motion.div
                className="relative z-10 flex-shrink-0"
                whileHover={{ scale: 1.1 }}
              >
                <div className="w-16 h-16 bg-primary/20 border-2 border-primary rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">{step.step}</span>
                </div>
                <motion.div
                  className="absolute inset-0 bg-primary/30 rounded-full blur-xl"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                />
              </motion.div>

              {/* Content */}
              <div className={`flex-1 p-6 bg-card/30 border border-primary/10 rounded-xl ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                <h3 className="text-2xl font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Founder, TechStartup India",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    review: "Karthik Media transformed our outdated website into a stunning digital experience. Our bounce rate dropped by 60% and conversions doubled within the first month!",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "CEO, Fashion Boutique",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=150&h=150&fit=crop&crop=face",
    review: "The team understood our brand vision perfectly. The website they delivered exceeded all expectations with beautiful animations and seamless user experience.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    role: "Director, Real Estate Group",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    review: "Professional team with exceptional design skills. They delivered our property listing website on time with all the advanced features we needed.",
    rating: 5,
  },
  {
    name: "Sneha Reddy",
    role: "Owner, Organic Foods",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
    review: "Our e-commerce site now loads in under 2 seconds! The mobile experience is fantastic and our online sales have increased by 150%.",
    rating: 4,
  },
  {
    name: "Vikram Singh",
    role: "Managing Director, Logistics Co",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    review: "The dashboard they built for our operations is intuitive and powerful. Our team productivity improved significantly after the implementation.",
    rating: 5,
  },
  {
    name: "Ananya Iyer",
    role: "Founder, Wellness Studio",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
    review: "Beautiful, calming design that perfectly captures our brand essence. The booking system integration works flawlessly. Highly recommended!",
    rating: 5,
  },
  {
    name: "Rohan Mehta",
    role: "Tech Lead, SaaS Company",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    review: "As a developer myself, I appreciate the clean code and modern tech stack they used. The website is fast, secure, and easy to maintain.",
    rating: 5,
  },
  {
    name: "Kavitha Nair",
    role: "Owner, Restaurant Chain",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    review: "Our online ordering system is a game-changer! The design attracts customers and the UX makes ordering so simple. Best investment we made.",
    rating: 4,
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? "text-primary fill-primary" : "text-muted-foreground/30"}`}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const TestimonialCard = ({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="flex-shrink-0 w-[350px] p-6 bg-card/50 border border-primary/10 rounded-2xl hover:border-primary/30 transition-all duration-300 group"
  >
    <div className="flex items-start gap-4 mb-4">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-14 h-14 rounded-full object-cover border-2 border-primary/30 group-hover:border-primary transition-colors"
      />
      <div>
        <h4 className="text-foreground font-semibold">{testimonial.name}</h4>
        <p className="text-muted-foreground text-sm">{testimonial.role}</p>
        <StarRating rating={testimonial.rating} />
      </div>
    </div>
    <p className="text-muted-foreground text-sm leading-relaxed">"{testimonial.review}"</p>
  </motion.div>
);

const TestimonialsSection = () => {
  return (
    <section className="relative bg-background py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-foreground mb-4">
            Client <span className="text-primary">Success Stories</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our clients have to say about their experience working with us.
          </p>
        </motion.div>

        {/* Auto-scrolling testimonials */}
        <div className="relative">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
          
          {/* First row - scroll left */}
          <div className="overflow-hidden mb-6">
            <motion.div
              className="flex gap-6"
              animate={{ x: [0, -1800] }}
              transition={{
                x: {
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} index={index % testimonials.length} />
              ))}
            </motion.div>
          </div>

          {/* Second row - scroll right */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: [-1800, 0] }}
              transition={{
                x: {
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {[...testimonials.slice(4), ...testimonials.slice(0, 4), ...testimonials.slice(4), ...testimonials.slice(0, 4)].map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} index={index % testimonials.length} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="relative bg-background py-24 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-primary/5 to-transparent"
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
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
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-primary/20 rounded-full mb-8"
          >
            <Sparkles className="w-10 h-10 text-primary" />
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6">
            Ready to <span className="text-primary">Transform</span> Your Digital Presence?
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Let's create something extraordinary together. Get in touch and let's discuss your vision.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero-primary" size="lg" className="text-lg px-10">
              Book a Free Consultation
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-10 border-primary/30 text-foreground hover:bg-primary/10">
              View Our Work
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const WebdesignService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default WebdesignService;
