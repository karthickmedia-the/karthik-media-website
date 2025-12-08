import { motion } from "framer-motion";
import { useState } from "react";
import karthikImage from "@/assets/karthik-team.png";
import kaushikaImage from "@/assets/kaushika-team.png";
import sivaneshImage from "@/assets/sivanesh-team.png";
import gayathriImage from "@/assets/gayathri-team.png";
import manojImage from "@/assets/manoj-team.png";
import vijayImage from "@/assets/vijay-team.png";

const teamMembers = [
  {
    id: 1,
    name: "Karthik Shanmugam",
    designation: "Founder & CEO",
    image: karthikImage,
  },
  {
    id: 2,
    name: "Kaushika Stalin Kumar",
    designation: "Co-Founder",
    image: kaushikaImage,
  },
  {
    id: 3,
    name: "Sivanesh",
    designation: "CTO",
    image: sivaneshImage,
  },
  {
    id: 4,
    name: "Gayathri",
    designation: "Digital Marketing Head",
    image: gayathriImage,
  },
  {
    id: 5,
    name: "Manoj Kumar",
    designation: "Video Editor",
    image: manojImage,
  },
  {
    id: 6,
    name: "Vijaykumar",
    designation: "Sales Head",
    image: vijayImage,
  },
];

const TeamMemberCard = ({ member, index }: { member: typeof teamMembers[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glass card container */}
      <motion.div
        animate={{ 
          x: isHovered ? 8 : 0,
          y: isHovered ? -4 : 0
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative cursor-pointer"
      >
        {/* White glow effect */}
        <motion.div
          animate={{ 
            opacity: isHovered ? 0.4 : 0,
            scale: isHovered ? 1.05 : 1
          }}
          transition={{ duration: 0.4 }}
          className="absolute -inset-4 bg-white/20 rounded-2xl blur-2xl"
        />

        {/* Cinematic light sweep */}
        <motion.div
          animate={{ 
            x: isHovered ? "200%" : "-100%",
            opacity: isHovered ? 1 : 0
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 z-20 pointer-events-none rounded-2xl overflow-hidden"
        />

        {/* Main glass card */}
        <div className="relative overflow-hidden rounded-2xl backdrop-blur-xl bg-white/[0.08] border border-white/[0.15] shadow-2xl">
          {/* Top glass reflection */}
          <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/[0.12] to-transparent pointer-events-none" />
          
          {/* Image container - Square */}
          <div className="relative w-40 h-48 md:w-48 md:h-56 lg:w-52 lg:h-60 overflow-hidden">
            <motion.img 
              src={member.image} 
              alt={member.name}
              animate={{ 
                scale: isHovered ? 1.08 : 1,
                filter: isHovered ? "brightness(1.1)" : "brightness(1)"
              }}
              transition={{ duration: 0.5 }}
              className="w-full h-full object-cover"
            />
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            {/* Bottom glass info panel */}
            <motion.div
              animate={{ y: isHovered ? 0 : 10, opacity: isHovered ? 1 : 0.9 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-0 left-0 right-0 p-4 backdrop-blur-md bg-white/[0.05]"
            >
              <motion.h3 
                animate={{ x: isHovered ? 4 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-white font-semibold text-base md:text-lg leading-tight"
              >
                {member.name}
              </motion.h3>
              <motion.p 
                animate={{ x: isHovered ? 4 : 0 }}
                transition={{ duration: 0.3, delay: 0.05 }}
                className="text-white/60 text-xs md:text-sm mt-1"
              >
                {member.designation}
              </motion.p>
            </motion.div>
          </div>

          {/* Corner accents */}
          <motion.div
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-white/40 rounded-tl"
          />
          <motion.div
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-white/40 rounded-tr"
          />
          <motion.div
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-white/40 rounded-bl"
          />
          <motion.div
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-white/40 rounded-br"
          />
        </div>

        {/* Subtle shadow */}
        <motion.div
          animate={{ 
            opacity: isHovered ? 0.3 : 0.1,
            y: isHovered ? 8 : 4
          }}
          className="absolute inset-x-4 bottom-0 h-8 bg-white/20 blur-xl rounded-full -z-10"
        />
      </motion.div>
    </motion.div>
  );
};

const TeamShowcase = () => {
  return (
    <section className="bg-black py-20 md:py-32 px-4 relative overflow-hidden">
      {/* Cinematic background */}
      <div className="absolute inset-0">
        {/* Subtle grid */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Ambient light spots */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-white/[0.015] rounded-full blur-3xl" />
      </div>

      {/* Slow moving film grain effect */}
      <motion.div
        animate={{ opacity: [0.02, 0.04, 0.02] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')] opacity-[0.03]"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          {/* Section badge - glass style */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full backdrop-blur-xl bg-white/[0.08] border border-white/[0.15] mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-white/80 text-sm font-medium uppercase tracking-widest">Our Team</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Meet The <span className="text-[#C8F200]">Experts</span>
          </h2>
          
          <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto font-light">
            The brilliant minds powering The Karthik Media's digital excellence
          </p>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-24 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto mt-10"
          />
        </motion.div>

        {/* Team grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 justify-items-center">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={member.id} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamShowcase;
