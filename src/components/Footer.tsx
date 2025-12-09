import { Mail, Phone, MapPin, Instagram, Linkedin, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="contact" className="relative bg-background border-t border-primary/10">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            <div className="text-3xl font-black mb-4">
              <span className="text-primary">10X</span>
              <span className="text-foreground">GROWTH</span>
            </div>
            <p className="text-muted-foreground mb-6">
              The only digital marketing agency that drives your business with 10X growth.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-card border border-primary/20 hover:border-primary/50 flex items-center justify-center transition-colors group"
              >
                <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-card border border-primary/20 hover:border-primary/50 flex items-center justify-center transition-colors group"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-card border border-primary/20 hover:border-primary/50 flex items-center justify-center transition-colors group"
              >
                <Youtube className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-black text-foreground mb-4">QUICK LINKS</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#clients" className="text-muted-foreground hover:text-primary transition-colors">
                  Clients
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-black text-foreground mb-4">SERVICES</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/webdesign" className="text-muted-foreground hover:text-primary transition-colors">
                  Web Design Services
                </Link>
              </li>
              <li>
                <Link to="/services/seo" className="text-muted-foreground hover:text-primary transition-colors">
                  SEO Services
                </Link>
              </li>
              <li>
                <Link to="/services/meta-ads" className="text-muted-foreground hover:text-primary transition-colors">
                  Meta Ad Services
                </Link>
              </li>
              <li>
                <Link to="/services/google-ads" className="text-muted-foreground hover:text-primary transition-colors">
                  Google Ad Services
                </Link>
              </li>
              <li>
                <Link to="/services/content-creation" className="text-muted-foreground hover:text-primary transition-colors">
                  Content Creation
                </Link>
              </li>
              <li>
                <span className="text-muted-foreground">Funnels & Automation</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-black text-foreground mb-4">CONTACT</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">hello@10xgrowth.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">123 Marketing Street, Digital City, DC 12345</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2024 10X Growth. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
