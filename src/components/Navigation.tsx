import { Users, Briefcase, BookOpen, FolderKanban, Award, Phone } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";

const Navigation = () => {
  const navItems = [
    { name: 'About Us', url: '#about', icon: Users },
    { 
      name: 'Services', 
      url: '#services', 
      icon: Briefcase,
      subItems: [
        { name: 'Web Design', url: '/services/webdesign' },
        { name: 'SEO Services', url: '/services/seo' },
        { name: 'Meta Ads', url: '/services/meta-ads' },
        { name: 'Google Ads', url: '/services/google-ads' },
        { name: 'Content Creation', url: '/services/content-creation' },
        { name: 'Funnels & Automation', url: '/services/funnels-automation' },
      ]
    },
    { name: 'Blog', url: '#blog', icon: BookOpen },
    { name: 'Case Studies', url: '#case-studies', icon: FolderKanban },
    { name: 'Careers', url: '/careers', icon: Award },
    { name: 'Contact', url: '#contact', icon: Phone },
  ];

  return <NavBar items={navItems} />;
};

export default Navigation;
