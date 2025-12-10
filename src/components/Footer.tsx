import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import { FooterBackgroundGradient, TextHoverEffect } from "@/components/ui/hover-footer";

const Footer = () => {
  const footerLinks = [
    {
      title: "Services",
      links: [
        { label: "Web Design Services", href: "/services/webdesign" },
        { label: "SEO Services", href: "/services/seo" },
        { label: "Meta Ads Services", href: "/services/meta-ads" },
        { label: "Google Ads Services", href: "/services/google-ads" },
        { label: "Content Creation", href: "/services/content-creation" },
        { label: "Funnels & Automation", href: "/services/funnels-automation" },
      ],
    },
    {
      title: "Quick Links",
      links: [
        { label: "Case Studies", href: "/case-studies" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "#contact" },
        { label: "About Us", href: "#about" },
      ],
    },
  ];

  const contactInfo = [
    {
      icon: <Mail size={18} className="text-primary" />,
      text: "info@karthikmedia.in",
      href: "mailto:info@karthikmedia.in",
    },
    {
      icon: <Phone size={18} className="text-primary" />,
      text: "+91 9842041665",
      href: "tel:+919842041665",
    },
  ];

  const socialLinks = [
    { icon: <Instagram size={20} />, label: "Instagram", href: "#" },
    { icon: <Linkedin size={20} />, label: "LinkedIn", href: "#" },
    { icon: <Youtube size={20} />, label: "YouTube", href: "#" },
  ];

  return (
    <footer className="bg-background/10 relative h-fit rounded-3xl overflow-hidden m-4 md:m-8 border border-primary/10">
      <div className="max-w-7xl mx-auto p-8 md:p-14 z-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-16 pb-12">
          {/* Brand section */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-primary text-3xl font-extrabold">
                ✦
              </span>
              <span className="text-foreground text-2xl font-bold">The Karthik Media</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              The only digital marketing agency that drives your business with 10X growth. 12+ years of expertise in digital marketing and content creation.
            </p>
          </div>

          {/* Footer link sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-foreground text-lg font-semibold mb-6">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label} className="relative">
                    {link.href.startsWith("/") ? (
                      <Link
                        to={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors relative group"
                      >
                        {link.label}
                        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors relative group"
                      >
                        {link.label}
                        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact section */}
          <div>
            <h4 className="text-foreground text-lg font-semibold mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-center space-x-3">
                  {item.icon}
                  <a
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-t border-primary/20 my-8" />

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
          {/* Social icons */}
          <div className="flex space-x-6 text-muted-foreground">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="hover:text-primary transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-center md:text-left">
            &copy; {new Date().getFullYear()} The Karthik Media. All rights reserved.
          </p>
        </div>
      </div>

      {/* Text hover effect */}
      <div className="lg:flex hidden h-[30rem] -mt-52 -mb-36">
        <TextHoverEffect text="KARTHIK" className="z-50" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
};

export default Footer;
