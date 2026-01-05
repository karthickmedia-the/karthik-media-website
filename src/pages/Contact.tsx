import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Mail, Phone, MapPin, Clock, Send, 
  Instagram, Linkedin, Youtube, MessageCircle,
  ArrowRight, Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      value: "info@karthikmedia.in",
      href: "mailto:info@karthikmedia.in",
      description: "Drop us an email anytime"
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+91 9842041665",
      href: "tel:+919842041665",
      description: "Mon-Sat, 9AM to 6PM IST"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "HMS Colony, Madurai 625016",
      href: "https://maps.google.com/?q=HMS+Colony,+Madurai,+Tamil+Nadu,+India",
      description: "46/6, Sekar Flour Mill Compound"
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "Mon - Sat: 9AM - 6PM",
      href: null,
      description: "IST Timezone"
    }
  ];

  const socialLinks = [
    { 
      icon: Instagram, 
      name: "Instagram", 
      href: "https://www.instagram.com/karthickmedia?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      color: "from-pink-500 to-purple-500"
    },
    { 
      icon: Linkedin, 
      name: "LinkedIn", 
      href: "https://www.linkedin.com/company/110543036/admin/dashboard/",
      color: "from-blue-500 to-blue-600"
    },
    { 
      icon: Youtube, 
      name: "YouTube", 
      href: "https://youtube.com/@thekarthikmedia",
      color: "from-red-500 to-red-600"
    },
    { 
      icon: MessageCircle, 
      name: "WhatsApp", 
      href: "https://wa.me/919842041665",
      color: "from-green-500 to-green-600",
      followers: "Chat Now"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <SEOHead
        title="Contact Us - Get in Touch with Karthik Media"
        description="Contact Karthik Media for digital marketing services. Reach us via email, phone, or visit our office in Madurai. Get a free consultation today."
        canonicalUrl="/contact"
        keywords="contact Karthik Media, digital marketing agency contact, marketing consultation, Madurai marketing agency"
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#C8F200]/5 via-transparent to-purple-500/5" />
          <motion.div 
            className="absolute top-40 left-20 w-72 h-72 bg-[#C8F200]/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(200,242,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(200,242,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#C8F200]/10 border border-[#C8F200]/30 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-[#C8F200]" />
              <span className="text-[#C8F200] text-sm font-medium">Let's Connect</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6">
              <span className="text-white">Get in </span>
              <span className="text-[#C8F200]">Touch</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Have a project in mind? Want to scale your business? We'd love to hear from you. 
              Reach out and let's create something amazing together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                {info.href ? (
                  <a href={info.href} target={info.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                    <div className="relative p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-[#C8F200]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#C8F200]/10">
                      <div className="w-14 h-14 bg-[#C8F200]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#C8F200]/20 transition-colors">
                        <info.icon className="w-7 h-7 text-[#C8F200]" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-1">{info.title}</h3>
                      <p className="text-[#C8F200] font-medium mb-1">{info.value}</p>
                      <p className="text-gray-500 text-sm">{info.description}</p>
                    </div>
                  </a>
                ) : (
                  <div className="relative p-6 bg-white/5 border border-white/10 rounded-2xl">
                    <div className="w-14 h-14 bg-[#C8F200]/10 rounded-xl flex items-center justify-center mb-4">
                      <info.icon className="w-7 h-7 text-[#C8F200]" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">{info.title}</h3>
                    <p className="text-[#C8F200] font-medium mb-1">{info.value}</p>
                    <p className="text-gray-500 text-sm">{info.description}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#C8F200]/10 to-transparent rounded-3xl blur-2xl" />
              
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-10">
                <h2 className="text-3xl font-bold mb-2">Send us a Message</h2>
                <p className="text-gray-400 mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="bg-white/5 border-white/10 focus:border-[#C8F200]/50 text-white placeholder:text-gray-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="bg-white/5 border-white/10 focus:border-[#C8F200]/50 text-white placeholder:text-gray-500"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98420 41665"
                        className="bg-white/5 border-white/10 focus:border-[#C8F200]/50 text-white placeholder:text-gray-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help?"
                        required
                        className="bg-white/5 border-white/10 focus:border-[#C8F200]/50 text-white placeholder:text-gray-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Your Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project, goals, and how we can help..."
                      required
                      rows={5}
                      className="bg-white/5 border-white/10 focus:border-[#C8F200]/50 text-white placeholder:text-gray-500 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#C8F200] text-black font-bold hover:bg-[#C8F200]/90 h-12 text-lg group"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-black border-t-transparent rounded-full"
                        />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Send Message
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Right Side - Social & CTA */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Quick Connect */}
              <div className="bg-gradient-to-br from-[#C8F200]/10 to-transparent border border-[#C8F200]/20 rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-4">Prefer to Talk?</h3>
                <p className="text-gray-400 mb-6">
                  Schedule a free 30-minute consultation call with our team to discuss your project requirements.
                </p>
                <a
                  href="tel:+919842041665"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#C8F200] text-black font-bold rounded-full hover:bg-[#C8F200]/90 transition-all group"
                >
                  <Phone className="w-5 h-5" />
                  Call +91 9842041665
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Connect With Us</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="group relative p-5 bg-white/5 border border-white/10 rounded-2xl hover:border-white/20 transition-all overflow-hidden"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                      <div className="relative flex items-center gap-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${social.color} rounded-xl flex items-center justify-center`}>
                          <social.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="font-bold text-white">{social.name}</p>
                          {social.followers && <p className="text-sm text-gray-400">{social.followers}</p>}
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* WhatsApp CTA */}
              <motion.a
                href="https://wa.me/919842041665?text=Hi%2C%20I%20want%20to%20discuss%20a%20project"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="block p-6 bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 rounded-2xl hover:border-green-500/50 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-white text-lg">Chat on WhatsApp</p>
                    <p className="text-green-400 text-sm">Usually replies within an hour</p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-green-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden border border-white/10"
          >
            <div className="aspect-[21/9] bg-white/5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.5!2d78.1!3d9.93!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c5eb08f18fe5%3A0x8b8b8b8b8b8b8b8b!2sHMS%20Colony%2C%20Madurai%2C%20Tamil%20Nadu%20625016!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Karthik Media Location - HMS Colony, Madurai"
              />
            </div>
            
            {/* Overlay Card */}
            <div className="absolute bottom-6 left-6 bg-black/90 backdrop-blur-xl border border-[#C8F200]/30 rounded-2xl p-6 max-w-sm">
              <h4 className="font-bold text-lg text-white mb-2">The Karthik Media</h4>
              <p className="text-gray-400 text-sm mb-4">
                46/6, Sekar Flour Mill Compound,<br />
                HMS Colony 1st Street,<br />
                Madurai, Tamil Nadu 625016
              </p>
              <a
                href="https://maps.google.com/?q=HMS+Colony,+Madurai,+Tamil+Nadu,+India"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#C8F200] text-sm font-medium hover:underline"
              >
                Get Directions
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
