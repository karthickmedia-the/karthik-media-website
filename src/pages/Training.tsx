import { motion } from "framer-motion";
import { CheckCircle2, GraduationCap, Users, Briefcase, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const modules = [
  "SEO — on-page, off-page, technical & local",
  "Google Ads — search, display, shopping & YouTube",
  "Meta Ads — Facebook & Instagram campaigns",
  "Social media strategy & content creation",
  "Website basics, landing pages & funnels",
  "Analytics, tracking & reporting",
];

const highlights = [
  { icon: GraduationCap, title: "Practical First", text: "Live campaigns and real ad budgets, not slides." },
  { icon: Users, title: "Small Batches", text: "Personal mentoring from our working team." },
  { icon: Briefcase, title: "Placement Support", text: "Portfolio building and interview preparation." },
  { icon: Clock, title: "Flexible Timings", text: "Weekday and weekend batches in Madurai." },
];

const Training = () => {
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
            Karthik Media Academy
          </span>
          <h1 className="mt-4 text-4xl md:text-6xl font-black leading-tight">
            Digital Marketing Course in Madurai
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Learn practical digital marketing — SEO, Google Ads, social media and more — with
            hands-on training and placement support from an agency that runs campaigns every day.
          </p>
          <a
            href="https://topmate.io/karthik_media/1790830"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-[#C8F200] px-8 py-3 font-bold text-black transition-all hover:shadow-lg hover:shadow-[#C8F200]/20"
          >
            Start Your Project
          </a>
        </motion.div>

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
            >
              <h.icon className="h-7 w-7 text-[#C8F200]" />
              <h2 className="mt-4 font-bold">{h.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{h.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl md:text-3xl font-black">What you'll learn</h2>
            <ul className="mt-6 space-y-4">
              {modules.map((m) => (
                <li key={m} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#C8F200]" />
                  <span className="text-muted-foreground">{m}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-[#C8F200]/20 bg-[#C8F200]/[0.04] p-10">
            <h2 className="text-2xl font-black">Who it's for</h2>
            <p className="mt-4 text-muted-foreground">
              Students and freshers starting a marketing career, business owners who want to run
              their own campaigns, and working professionals adding digital skills.
            </p>
            <p className="mt-6 text-muted-foreground">
              Training happens at our Madurai office — No 193, 1st floor, South Masi Street.
              Talk to us to check the next batch date.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Training;
