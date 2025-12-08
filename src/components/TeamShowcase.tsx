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

const TeamCard = ({ 
  member, 
  index,
  hoveredIndex,
  setHoveredIndex
}: { 
  member: typeof teamMembers[0]; 
  index: number;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
}) => {
  const isHovered = hoveredIndex === index;
  const isAnyHovered = hoveredIndex !== null;
  const shouldShrink = isAnyHovered && !isHovered;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      className="relative cursor-pointer"
      animate={{
        scale: isHovered ? 1.15 : shouldShrink ? 0.95 : 1,
        zIndex: isHovered ? 20 : 1,
        filter: shouldShrink ? "brightness(0.5)" : "brightness(1)",
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 25,
        }
      }}
    >
      {/* Card Container */}
      <div className="relative group">
        {/* Glow effect on hover */}
        <motion.div
          className="absolute -inset-3 rounded-2xl bg-[#C8F200]/30 blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.8 : 0 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Main Card */}
        <div className="relative w-40 h-56 md:w-48 md:h-64 lg:w-52 lg:h-72 rounded-xl overflow-hidden bg-gradient-to-b from-zinc-800 to-zinc-900">
          {/* Image */}
          <img 
            src={member.image} 
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-500"
            style={{
              transform: isHovered ? 'scale(1.1)' : 'scale(1)',
            }}
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
          
          {/* Border glow */}
          <motion.div
            className="absolute inset-0 rounded-xl border-2 border-[#C8F200]"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0.3 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Content overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ 
                y: isHovered ? 0 : 10, 
                opacity: isHovered ? 1 : 0.8 
              }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-white font-bold text-sm md:text-base lg:text-lg leading-tight">
                {member.name}
              </h3>
              <motion.p 
                className="text-[#C8F200] text-xs md:text-sm mt-1 font-medium"
                animate={{ opacity: isHovered ? 1 : 0.7 }}
              >
                {member.designation}
              </motion.p>
            </motion.div>
            
            {/* Expanded info on hover */}
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ 
                height: isHovered ? 'auto' : 0, 
                opacity: isHovered ? 1 : 0 
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-3 mt-3 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#C8F200] animate-pulse" />
                  <span className="text-white/60 text-xs">Available</span>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Top shine effect */}
          <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
        </div>
      </div>
    </motion.div>
  );
};

const TeamShowcase = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-black py-16 md:py-24 px-4 relative overflow-hidden">
      {/* Ambient background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#C8F200]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#C8F200]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/10 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8F200] animate-pulse" />
            <span className="text-white/70 text-sm font-medium uppercase tracking-widest">Our Team</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
            Meet The <span className="text-[#C8F200]">Experts</span>
          </h2>
          
          <p className="text-white/40 text-lg max-w-xl mx-auto">
            The brilliant minds powering The Karthik Media's digital excellence
          </p>
        </motion.div>

        {/* Netflix-style horizontal cards */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-10 pb-8">
          {teamMembers.map((member, index) => (
            <TeamCard 
              key={member.id} 
              member={member} 
              index={index}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
            />
          ))}
        </div>

        {/* Bottom decorative line */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex justify-center mt-8"
        >
          <div className="w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-[#C8F200]/30 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default TeamShowcase;
