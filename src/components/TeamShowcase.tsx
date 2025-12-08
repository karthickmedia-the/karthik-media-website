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
    company: "The Karthik Media",
    initials: "KS",
    color: "#C8F200",
    image: karthikImage,
  },
  {
    id: 2,
    name: "Kaushika Stalin Kumar",
    designation: "Co-Founder",
    company: "The Karthik Media",
    initials: "KK",
    color: "#A855F7",
    image: kaushikaImage,
  },
  {
    id: 3,
    name: "Sivanesh",
    designation: "CTO",
    company: "The Karthik Media",
    initials: "SN",
    color: "#3B82F6",
    image: sivaneshImage,
  },
  {
    id: 4,
    name: "Gayathri",
    designation: "Digital Marketing Head",
    company: "The Karthik Media",
    initials: "GA",
    color: "#EC4899",
    image: gayathriImage,
  },
  {
    id: 5,
    name: "Manoj Kumar",
    designation: "Video Editor",
    company: "The Karthik Media",
    initials: "MK",
    color: "#F97316",
    image: manojImage,
  },
  {
    id: 6,
    name: "Vijaykumar",
    designation: "Sales Head",
    company: "The Karthik Media",
    initials: "VK",
    color: "#06B6D4",
    image: vijayImage,
  },
];

const TeamMemberCard = ({ member, index }: { member: typeof teamMembers[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, rotateY: -30 }}
      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.15,
        type: "spring",
        stiffness: 100
      }}
      className="relative flex flex-col items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Outer animated rings */}
      <div className="relative">
        {/* Pulsing outer ring */}
        <motion.div
          animate={{ 
            scale: isHovered ? [1, 1.2, 1] : 1,
            opacity: isHovered ? [0.5, 0.8, 0.5] : 0.3
          }}
          transition={{ 
            duration: 1.5, 
            repeat: isHovered ? Infinity : 0,
            ease: "easeInOut"
          }}
          className="absolute -inset-4 rounded-full border-2 opacity-30"
          style={{ borderColor: member.color }}
        />
        
        {/* Second pulsing ring */}
        <motion.div
          animate={{ 
            scale: isHovered ? [1, 1.4, 1] : 1,
            opacity: isHovered ? [0.3, 0.5, 0.3] : 0.15
          }}
          transition={{ 
            duration: 2, 
            repeat: isHovered ? Infinity : 0,
            ease: "easeInOut",
            delay: 0.3
          }}
          className="absolute -inset-8 rounded-full border opacity-15"
          style={{ borderColor: member.color }}
        />

        {/* Main avatar container */}
        <motion.div
          animate={{ 
            scale: isHovered ? 1.15 : 1,
            y: isHovered ? -10 : 0
          }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="relative w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 cursor-pointer"
        >
          {/* Glow effect */}
          <motion.div
            animate={{ 
              opacity: isHovered ? 0.8 : 0.3,
              scale: isHovered ? 1.1 : 1
            }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 rounded-full blur-2xl"
            style={{ backgroundColor: member.color }}
          />

          {/* Rotating border */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full p-1"
            style={{ 
              background: `conic-gradient(from 0deg, ${member.color}, transparent, ${member.color}, transparent, ${member.color})`
            }}
          >
            <div className="w-full h-full rounded-full bg-black" />
          </motion.div>

          {/* Inner glowing border */}
          <motion.div
            animate={{ 
              boxShadow: isHovered 
                ? `0 0 30px ${member.color}, inset 0 0 20px ${member.color}40`
                : `0 0 10px ${member.color}50, inset 0 0 5px ${member.color}20`
            }}
            transition={{ duration: 0.3 }}
            className="absolute inset-1 rounded-full border-2 overflow-hidden"
            style={{ borderColor: member.color }}
          >
            {/* Image */}
            {member.image ? (
              <motion.img 
                src={member.image} 
                alt={member.name}
                animate={{ scale: isHovered ? 1.1 : 1 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full object-cover"
              />
            ) : (
              <div 
                className="w-full h-full flex items-center justify-center text-3xl font-bold"
                style={{ 
                  background: `linear-gradient(135deg, ${member.color}40, ${member.color}10)`,
                  color: member.color
                }}
              >
                {member.initials}
              </div>
            )}
          </motion.div>

          {/* Corner accents */}
          <motion.div
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute -top-2 -right-2 w-4 h-4"
          >
            <div className="w-full h-0.5" style={{ backgroundColor: member.color }} />
            <div className="w-0.5 h-full absolute right-0 top-0" style={{ backgroundColor: member.color }} />
          </motion.div>
          <motion.div
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute -bottom-2 -left-2 w-4 h-4"
          >
            <div className="w-full h-0.5 absolute bottom-0" style={{ backgroundColor: member.color }} />
            <div className="w-0.5 h-full" style={{ backgroundColor: member.color }} />
          </motion.div>
        </motion.div>
      </div>

      {/* Name and designation below */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.15 + 0.3 }}
        className="mt-6 text-center"
      >
        <motion.h3 
          animate={{ 
            color: isHovered ? member.color : "#ffffff",
            scale: isHovered ? 1.05 : 1
          }}
          transition={{ duration: 0.3 }}
          className="text-lg md:text-xl font-bold"
        >
          {member.name}
        </motion.h3>
        <motion.p 
          animate={{ opacity: isHovered ? 1 : 0.7 }}
          className="text-sm md:text-base mt-1"
          style={{ color: member.color }}
        >
          {member.designation}
        </motion.p>
      </motion.div>

      {/* Hover info card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={isHovered ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 20 }}
        transition={{ duration: 0.2 }}
        className="absolute -bottom-2 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
      >
        <div 
          className="px-3 py-1 rounded-full text-xs font-medium text-black whitespace-nowrap"
          style={{ backgroundColor: member.color }}
        >
          {member.company}
        </div>
      </motion.div>
    </motion.div>
  );
};

const TeamShowcase = () => {
  return (
    <section className="bg-black py-20 md:py-32 px-4 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(200, 242, 0, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(200, 242, 0, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Floating orbs */}
      <motion.div
        animate={{ 
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/6 w-96 h-96 bg-[#C8F200]/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          x: [0, 30, 0],
          y: [0, -50, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"
      />

      {/* Scanning line effect */}
      <motion.div
        animate={{ y: ["0%", "100%", "0%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8F200]/30 to-transparent"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          {/* Section badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#C8F200]/30 bg-[#C8F200]/5 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#C8F200] animate-pulse" />
            <span className="text-[#C8F200] text-sm font-medium uppercase tracking-wider">Our Team</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Meet The <span className="text-[#C8F200]">Experts</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            The brilliant minds powering The Karthik Media's digital excellence
          </p>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-32 h-1 bg-gradient-to-r from-transparent via-[#C8F200] to-transparent mx-auto mt-8"
          />
        </motion.div>

        {/* Team grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-16 lg:gap-20 justify-items-center">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={member.id} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamShowcase;
