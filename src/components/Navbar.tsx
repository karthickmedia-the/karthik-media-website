import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import karthikMediaLogo from "@/assets/karthik-media-logo.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const services = [{
    name: 'Web Design',
    url: '/services/webdesign'
  }, {
    name: 'SEO Services',
    url: '/services/seo'
  }, {
    name: 'Meta Ads',
    url: '/services/meta-ads'
  }, {
    name: 'Google Ads',
    url: '/services/google-ads'
  }, {
    name: 'Content Creation',
    url: '/services/content-creation'
  }, {
    name: 'Funnels & Automation',
    url: '/services/funnels-automation'
  }];
  const navLinks = [{
    name: 'About',
    url: '/about'
  }, {
    name: 'Case Studies',
    url: '/case-studies'
  }, {
    name: 'Careers',
    url: '/careers'
  }, {
    name: 'Contact',
    url: '/contact'
  }];
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [location]);
  return <motion.nav initial={{
    y: -100
  }} animate={{
    y: 0
  }} transition={{
    duration: 0.5
  }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-xl border-b border-[#C8F200]/10 shadow-lg shadow-black/20' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.img src={karthikMediaLogo} alt="The Karthik Media" className="h-10 w-auto" whileHover={{
            scale: 1.05
          }} transition={{
            type: "spring",
            stiffness: 400
          }} />
            <span className="hidden sm:block text-white font-bold text-lg group-hover:text-[#C8F200] transition-colors">
              The Karthik Media
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.slice(0, 1).map(link => <Link key={link.name} to={link.url} className="text-white/80 hover:text-[#C8F200] transition-colors text-sm font-medium">
                {link.name}
              </Link>)}

            {/* Services Dropdown */}
            <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <button className="flex items-center gap-1 text-white/80 hover:text-[#C8F200] transition-colors text-sm font-medium">
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {servicesOpen && <motion.div initial={{
                opacity: 0,
                y: 10
              }} animate={{
                opacity: 1,
                y: 0
              }} exit={{
                opacity: 0,
                y: 10
              }} transition={{
                duration: 0.2
              }} className="absolute top-full left-0 mt-2 w-56 bg-black/95 backdrop-blur-xl border border-[#C8F200]/20 rounded-xl overflow-hidden shadow-xl shadow-black/50">
                    {services.map((service, index) => <motion.div key={service.name} initial={{
                  opacity: 0,
                  x: -10
                }} animate={{
                  opacity: 1,
                  x: 0
                }} transition={{
                  delay: index * 0.05
                }}>
                        <Link to={service.url} className="block px-4 py-3 text-white/80 hover:text-[#C8F200] hover:bg-[#C8F200]/10 transition-all text-sm border-b border-white/5 last:border-0">
                          {service.name}
                        </Link>
                      </motion.div>)}
                  </motion.div>}
              </AnimatePresence>
            </div>

            {navLinks.slice(1).map(link => <Link key={link.name} to={link.url} className="text-white/80 hover:text-[#C8F200] transition-colors text-sm font-medium">
                {link.name}
              </Link>)}

            {/* CTA Button */}
            <a href="https://topmate.io/karthik_media/1790830" target="_blank" rel="noopener noreferrer" className="ml-4 px-6 py-2.5 bg-[#C8F200] text-black font-bold text-sm rounded-full hover:bg-[#C8F200]/90 hover:shadow-lg hover:shadow-[#C8F200]/20 transition-all">
              Book 1:1 Quick Call
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-white hover:text-[#C8F200] transition-colors">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && <motion.div initial={{
          opacity: 0,
          height: 0
        }} animate={{
          opacity: 1,
          height: 'auto'
        }} exit={{
          opacity: 0,
          height: 0
        }} transition={{
          duration: 0.3
        }} className="lg:hidden overflow-hidden border-t border-[#C8F200]/10">
              <div className="py-4 space-y-2">
                {navLinks.slice(0, 1).map(link => <Link key={link.name} to={link.url} className="block px-4 py-3 text-white/80 hover:text-[#C8F200] hover:bg-[#C8F200]/5 rounded-lg transition-all text-sm font-medium">
                    {link.name}
                  </Link>)}

                {/* Mobile Services Accordion */}
                <div>
                  <button onClick={() => setServicesOpen(!servicesOpen)} className="flex items-center justify-between w-full px-4 py-3 text-white/80 hover:text-[#C8F200] rounded-lg transition-all text-sm font-medium">
                    Services
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {servicesOpen && <motion.div initial={{
                  opacity: 0,
                  height: 0
                }} animate={{
                  opacity: 1,
                  height: 'auto'
                }} exit={{
                  opacity: 0,
                  height: 0
                }} className="ml-4 border-l border-[#C8F200]/20">
                        {services.map(service => <Link key={service.name} to={service.url} className="block px-4 py-2.5 text-white/60 hover:text-[#C8F200] transition-all text-sm">
                            {service.name}
                          </Link>)}
                      </motion.div>}
                  </AnimatePresence>
                </div>

                {navLinks.slice(1).map(link => <Link key={link.name} to={link.url} className="block px-4 py-3 text-white/80 hover:text-[#C8F200] hover:bg-[#C8F200]/5 rounded-lg transition-all text-sm font-medium">
                    {link.name}
                  </Link>)}

                <div className="px-4 pt-2">
                  <a href="https://topmate.io/karthik_media/1790830" target="_blank" rel="noopener noreferrer" className="block w-full px-6 py-3 bg-[#C8F200] text-black font-bold text-sm rounded-full text-center hover:bg-[#C8F200]/90 transition-all">
                    Book a Call
                  </a>
                </div>
              </div>
            </motion.div>}
        </AnimatePresence>
      </div>
    </motion.nav>;
};
export default Navbar;