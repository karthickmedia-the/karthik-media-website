import { motion } from "framer-motion";
import { useState } from "react";
import karthikImage from "@/assets/karthik-team.png";
import kaushikaImage from "@/assets/kaushika-team.png";
import sivaneshImage from "@/assets/sivanesh-team.png";

const teamMembers = [
  {
    id: 1,
    name: "Karthik Shanmugam",
    designation: "Founder & CEO",
    company: "The Karthik Media",
    initials: "KS",
    color: "from-[#C8F200] to-[#9BC700]",
    image: karthikImage,
  },
  {
    id: 2,
    name: "Kaushika Stalin Kumar",
    designation: "Co-Founder",
    company: "The Karthik Media",
    initials: "KK",
    color: "from-purple-500 to-purple-700",
    image: kaushikaImage,
  },
  {
    id: 3,
    name: "Sivanesh",
    designation: "CTO",
    company: "The Karthik Media",
    initials: "SN",
    color: "from-blue-500 to-blue-700",
    image: sivaneshImage,
  },
  {
    id: 4,
    name: "Gayathri",
    designation: "Digital Marketing Head",
    company: "The Karthik Media",
    initials: "GA",
    color: "from-pink-500 to-pink-700",
  },
  {
    id: 5,
    name: "Manoj Kumar",
    designation: "Video Editor",
    company: "The Karthik Media",
    initials: "MK",
    color: "from-orange-500 to-orange-700",
  },
  {
    id: 6,
    name: "Vijaykumar",
    designation: "Sales Head",
    company: "The Karthik Media",
    initials: "VK",
    color: "from-cyan-500 to-cyan-700",
  },
];

const TeamMemberCard = ({ member, index }: { member: typeof teamMembers[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.9 }}
        animate={isHovered ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 10, scale: 0.9 }}
        transition={{ duration: 0.2 }}
        className="absolute -top-24 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
      >
        <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 shadow-2xl min-w-[180px]">
          <p className="text-white font-semibold text-sm text-center">{member.name}</p>
          <p className="text-[#C8F200] text-xs text-center mt-1">{member.designation}</p>
          <p className="text-gray-400 text-xs text-center">{member.company}</p>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-zinc-900 border-r border-b border-zinc-700 rotate-45" />
        </div>
      </motion.div>

      {/* Avatar */}
      <motion.div
        whileHover={{ scale: 1.15, y: -5 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={`relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center cursor-pointer shadow-lg overflow-hidden`}
      >
        {/* Glow effect on hover */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
          className={`absolute inset-0 rounded-full bg-gradient-to-br ${member.color} blur-xl opacity-50`}
        />
        
        {/* Border ring */}
        <div className="absolute inset-0 rounded-full border-2 border-white/20 group-hover:border-white/40 transition-colors z-20" />
        
        {/* Image or Initials */}
        {member.image ? (
          <img 
            src={member.image} 
            alt={member.name} 
            className="w-full h-full object-cover relative z-10"
          />
        ) : (
          <span className="text-white font-bold text-xl md:text-2xl relative z-10">
            {member.initials}
          </span>
        )}
      </motion.div>

      {/* Name below avatar (mobile) */}
      <p className="text-white text-xs text-center mt-2 md:hidden">{member.name.split(' ')[0]}</p>
    </motion.div>
  );
};

const TeamShowcase = () => {
  return (
    <section className="bg-black py-16 md:py-24 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#C8F200]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Meet Our <span className="text-[#C8F200]">Team</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
            The talented individuals behind The Karthik Media's success
          </p>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={member.id} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamShowcase;
