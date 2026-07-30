import { motion } from "framer-motion";
import { Link } from "@/lib/router-compat";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const posts = [
  {
    category: "SEO",
    title: "Local SEO checklist for Madurai businesses",
    excerpt:
      "The exact steps we follow to get local businesses into the Google Map Pack — from Business Profile setup to review velocity.",
    link: "/services/seo",
  },
  {
    category: "Google Ads",
    title: "Where most small business ad budgets get wasted",
    excerpt:
      "Broad match, missing negatives and untracked conversions quietly drain budgets. Here's how we plug the leaks.",
    link: "/services/google-ads",
  },
  {
    category: "Social Media",
    title: "A content system that keeps your brand posting weekly",
    excerpt:
      "Batch shooting, pillar planning and repurposing — how to stay consistent without a full in-house team.",
    link: "/services/meta-ads",
  },
  {
    category: "Web Design",
    title: "Why your website loads slow (and what it costs you)",
    excerpt:
      "Core Web Vitals in plain language, and the fixes that move both rankings and conversion rate.",
    link: "/services/webdesign",
  },
  {
    category: "Content",
    title: "Writing content that ranks and actually sells",
    excerpt:
      "Search intent, structure and internal linking — the content framework behind our clients' organic growth.",
    link: "/services/content-creation",
  },
  {
    category: "Automation",
    title: "Simple funnels every service business should run",
    excerpt:
      "Lead magnet, follow-up sequence and booking flow — a low-effort setup that compounds over time.",
    link: "/services/funnels-automation",
  },
];

const Blog = () => {
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
            Insights
          </span>
          <h1 className="mt-4 text-4xl md:text-6xl font-black leading-tight">
            Digital Marketing Blog
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Tips, insights and trends on SEO, social media and digital marketing from the Karthik
            Media team in Madurai.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition-all hover:border-[#C8F200]/40"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-[#C8F200]">
                {post.category}
              </span>
              <h2 className="mt-4 text-xl font-bold group-hover:text-[#C8F200] transition-colors">
                {post.title}
              </h2>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">{post.excerpt}</p>
              <Link
                to={post.link}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#C8F200]"
              >
                Read the service page <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
