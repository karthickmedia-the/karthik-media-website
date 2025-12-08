import { Home, Users, Briefcase, BookOpen, FolderKanban, Award, Phone } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";

const Navigation = () => {
  const navItems = [
    { name: 'About Us', url: '#about', icon: Users },
    { name: 'Services', url: '#services', icon: Briefcase },
    { name: 'Blog', url: '#blog', icon: BookOpen },
    { name: 'Case Studies', url: '#case-studies', icon: FolderKanban },
    { name: 'Careers', url: '#careers', icon: Award },
    { name: 'Contact', url: '#contact', icon: Phone },
  ];

  return <NavBar items={navItems} />;
};

export default Navigation;
