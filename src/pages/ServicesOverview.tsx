import { motion } from "framer-motion";
import { Link } from "@/lib/router-compat";
import { ArrowRight, Globe, Search, Facebook, Target, PenTool, Workflow } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    name: "Web Design & Development",
    url: "/services/webdesign",
    icon: Globe,
    text: "Fast, SEO-friendly, conversion-focused websites built to turn visitors into customers.",
  },
  {
    name: "SEO Services",
    url: "/services/seo",
    icon: Search,
    text: "On-page, technical and local SEO that delivers measurable ranking growth on Google.",
  },
  {
    name: "Google Ads / PPC",
    url: "/services/google-ads",
    icon: Target,
    text: "Expertly managed search and shopping campaigns that maximise ROI and cut wasted spend.",
  },
  {
    name: "Social Media Marketing",
    url: "/services/meta-ads",
    icon: Facebook,
    text: "Instagram, Facebook and LinkedIn growth — strategy, content and paid campaigns.",
  },
  {
    name: "Content Marketing",
    url: "/services/content-creation",
    icon: PenTool,
    text: "Blogs, copywriting and content strategy built to rank, engage and convert.",
  },
  {
    name: "Funnels & Automation",
    url: "/services/funnels-automation",
    icon: Workflow,
    text: "Sales funnels and marketing automation that nurture leads while you sleep.",
  },
];

const ServicesOverview = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="container mx-auto px-4 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <span className="text-[#C8F200] text-sm font-bold tracking-[0.3em] uppercase">
            What We Do
          </span>
          <h1 className="mt-4 text-4xl md:text-6xl font-black leading-tight">
            Digital Marketing Services in Madurai
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Explore Karthik Media's full range of digital marketing services — SEO, Google Ads,
            social media marketing, content, and marketing automation, all built around measurable
            business growth.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Link
                to={service.url}
                className="group block h-full rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition-all hover:border-[#C8F200]/40 hover:bg-[#C8F200]/[0.04]"
              >
                <service.icon className="h-8 w-8 text-[#C8F200]" />
                <h2 className="mt-6 text-xl font-bold group-hover:text-[#C8F200] transition-colors">
                  {service.name}
                </h2>
                <p className="mt-3 text-sm text-muted-foreground">{service.text}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#C8F200]">
                  Learn more <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 rounded-2xl border border-[#C8F200]/20 bg-[#C8F200]/[0.04] p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-black">Not sure where to start?</h2>
          <p className="mt-3 text-muted-foreground">
            Get a free growth audit and a custom roadmap for your business.
          </p>
          <a
            href="https://topmate.io/karthik_media/1790830"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-[#C8F200] px-8 py-3 font-bold text-black transition-all hover:shadow-lg hover:shadow-[#C8F200]/20"
          >
            Start Your Project
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesOverview;
