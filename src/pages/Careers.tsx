import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, Mail, Phone, Video, Search, Code, Users, ChevronDown, Sparkles } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

interface JobPosition {
  id: number;
  title: string;
  icon: React.ReactNode;
  location: string;
  type: string;
  experience: string;
  preferred?: string;
  about: string;
  responsibilities: string[];
  skills: string[];
}

const jobPositions: JobPosition[] = [
  {
    id: 1,
    title: "Video Editor",
    icon: <Video className="w-6 h-6" />,
    location: "Madurai",
    type: "Full-time",
    experience: "Freshers / Experienced",
    about: "We are looking for a creative and detail-oriented Video Editor who can turn raw footage into engaging, high-quality content for social media, ads, YouTube, and brand campaigns. You will work closely with the content and marketing team to bring ideas to life.",
    responsibilities: [
      "Edit and assemble raw footage into polished videos",
      "Add transitions, animations, subtitles, and sound effects",
      "Create reels, shorts, ads, and long-format videos",
      "Ensure brand consistency in all video outputs",
      "Work with the team to understand video requirements",
      "Stay updated with trending editing styles"
    ],
    skills: [
      "Proficiency in Adobe Premiere Pro / Final Cut Pro / DaVinci Resolve",
      "Basic motion graphics knowledge (After Effects preferred)",
      "Strong sense of timing, pacing, and storytelling",
      "Creative thinking and attention to detail",
      "Ability to work under deadlines",
      "Understanding of social media video formats"
    ]
  },
  {
    id: 2,
    title: "SEO Specialist",
    icon: <Search className="w-6 h-6" />,
    location: "Madurai",
    type: "Full-time",
    experience: "Freshers",
    about: "We are hiring SEO freshers who are eager to learn and passionate about ranking websites on Google. You will work with our digital marketing team to implement SEO strategies that improve organic visibility and website performance.",
    responsibilities: [
      "On-page optimization: Titles, tags, meta descriptions, URLs",
      "Off-page activities and link building",
      "Keyword research and competitor analysis",
      "Website audits and performance tracking",
      "Assisting in content optimization for SEO",
      "Reporting using Google tools"
    ],
    skills: [
      "Basic knowledge of SEO concepts",
      "Familiarity with tools like Google Analytics, Search Console",
      "Understanding of keywords & content optimization",
      "Strong analytical and research skills",
      "Good written communication",
      "Willingness to learn and grow fast"
    ]
  },
  {
    id: 3,
    title: "Web Developer",
    icon: <Code className="w-6 h-6" />,
    location: "Madurai",
    type: "Full-time",
    experience: "Fresher / Experienced",
    about: "We are looking for a skilled Web Developer who can build responsive, user-friendly, and high-performing websites. You will be responsible for front-end development and collaborating on backend logic whenever needed.",
    responsibilities: [
      "Develop and maintain responsive websites",
      "Convert UI/UX designs into functional web pages",
      "Optimize websites for speed, performance, and SEO",
      "Perform website testing and debugging",
      "Work on landing pages, e-commerce sites, and client portals",
      "Collaborate with designers and marketers"
    ],
    skills: [
      "Proficiency in HTML, CSS, JavaScript",
      "Knowledge of WordPress or other CMS platforms",
      "Understanding of responsive design",
      "Basic knowledge of PHP (bonus)",
      "Familiarity with hosting, domains, and website deployment",
      "Problem-solving mindset"
    ]
  },
  {
    id: 4,
    title: "Client Relationship Executive",
    icon: <Users className="w-6 h-6" />,
    location: "Madurai",
    type: "Full-time",
    experience: "Fresher",
    preferred: "Female Candidates",
    about: "We are looking for a friendly, confident, and communication-strong Client Relationship Executive to act as the bridge between our company and clients. You'll ensure smooth communication, handle client requirements, and maintain long-term relationships.",
    responsibilities: [
      "Coordinate with clients and understand their needs",
      "Follow up on project progress and updates",
      "Maintain positive relationships with clients",
      "Handle client queries and route them to the right team",
      "Ensure timely delivery of project reports and outputs",
      "Maintain CRM and documentation"
    ],
    skills: [
      "Strong communication skills (English & Tamil)",
      "Good interpersonal and customer-handling skills",
      "Basic understanding of digital marketing (bonus)",
      "Time management and coordination ability",
      "Confident, organised, and presentable personality",
      "Ability to handle client calls and follow-ups professionally"
    ]
  }
];

const JobCard = ({ job, index }: { job: JobPosition; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative bg-background/50 backdrop-blur-sm border border-primary/20 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300">
        {/* Header */}
        <div 
          className="p-6 cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-xl text-primary">
                {job.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">{job.title}</h3>
                <div className="flex flex-wrap gap-3 text-sm">
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <MapPin className="w-4 h-4" /> {job.location}
                  </span>
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="w-4 h-4" /> {job.type}
                  </span>
                  <span className="flex items-center gap-1 text-primary">
                    <Briefcase className="w-4 h-4" /> {job.experience}
                  </span>
                </div>
                {job.preferred && (
                  <span className="inline-block mt-2 px-3 py-1 bg-primary/20 text-primary text-xs rounded-full">
                    Preferred: {job.preferred}
                  </span>
                )}
              </div>
            </div>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-primary"
            >
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </div>
        </div>

        {/* Expanded Content */}
        <motion.div
          initial={false}
          animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="px-6 pb-6 space-y-6">
            {/* About */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" /> About the Role
              </h4>
              <p className="text-muted-foreground leading-relaxed">{job.about}</p>
            </div>

            {/* Responsibilities */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-3">Responsibilities</h4>
              <ul className="space-y-2">
                {job.responsibilities.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-2 text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Skills */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-3">Skills Required</h4>
              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="px-3 py-1.5 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Apply Button */}
            <motion.a
              href="mailto:info@karthikmedia.in"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-colors"
            >
              <Mail className="w-5 h-5" /> Apply Now
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Careers = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <SEO 
        title="Careers at Karthik Media | Join Our Digital Marketing Team"
        description="Join The Karthik Media team in Madurai. Open positions for Video Editor, SEO Specialist, Web Developer, and Client Relationship Executive."
        canonical="/careers"
      />
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
      </div>

      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary mb-6"
            >
              <Briefcase className="w-5 h-5" />
              <span className="font-medium">We are Hiring</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6">
              Careers at{" "}
              <span className="text-primary">The Karthik Media</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join a fast-growing digital marketing agency powered by creativity, technology, and innovation. 
              If you are passionate about building brands, crafting digital experiences, and growing in a 
              high-energy environment, we would love to have you on our team.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
          >
            {[
              { value: "12+", label: "Years Experience" },
              { value: "50+", label: "Happy Clients" },
              { value: "4", label: "Open Positions" },
              { value: "100%", label: "Growth Focus" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 bg-background/50 backdrop-blur-sm border border-primary/20 rounded-2xl">
                <div className="text-3xl font-black text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center"
          >
            Open Positions
          </motion.h2>
          
          <div className="space-y-6">
            {jobPositions.map((job, index) => (
              <JobCard key={job.id} job={job} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-3xl blur-2xl" />
            
            <div className="relative bg-background/80 backdrop-blur-xl border border-primary/30 rounded-3xl p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Ready to Join Our Team?
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Send your resume and let us know which position interests you. We review every application 
                and get back to qualified candidates within 48 hours.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.a
                  href="mailto:info@karthikmedia.in"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary/90 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  info@karthikmedia.in
                </motion.a>
                
                <motion.a
                  href="tel:9842041665"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-8 py-4 bg-background border-2 border-primary text-primary font-bold rounded-full hover:bg-primary/10 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  9842041665
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
