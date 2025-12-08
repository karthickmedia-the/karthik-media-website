import { motion } from "framer-motion";
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

const TeamCard = ({ member, index }: { member: typeof teamMembers[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className="relative cursor-pointer isolate"
      style={{ zIndex: 1 }}
    >
      {/* Glow effect behind card */}
      <motion.div 
        className="absolute -inset-3 bg-[#C8F200]/0 rounded-3xl blur-xl -z-10"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1, backgroundColor: "rgba(200, 242, 0, 0.25)" }}
        transition={{ duration: 0.4 }}
      />

      {/* Card wrapper for hover effects */}
      <motion.div 
        className="relative w-40 h-52 md:w-44 md:h-60 lg:w-48 lg:h-64 rounded-2xl overflow-hidden bg-zinc-900"
        whileHover={{ 
          boxShadow: "0 0 30px rgba(200, 242, 0, 0.3)",
          borderColor: "rgba(200, 242, 0, 0.6)"
        }}
        style={{ border: "1px solid rgba(255,255,255,0.1)" }}
        transition={{ duration: 0.4 }}
      >
        {/* Image with zoom */}
        <motion.img 
          src={member.image} 
          alt={member.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none" />
        
        {/* Shine effect */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent pointer-events-none"
          initial={{ x: "-100%", opacity: 0 }}
          whileHover={{ x: "100%", opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        {/* Corner accents */}
        <motion.div 
          className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-transparent rounded-tl-2xl pointer-events-none"
          whileHover={{ borderColor: "#C8F200" }}
          transition={{ duration: 0.3 }}
        />
        <motion.div 
          className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-transparent rounded-tr-2xl pointer-events-none"
          whileHover={{ borderColor: "#C8F200" }}
          transition={{ duration: 0.3 }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-transparent rounded-bl-2xl pointer-events-none"
          whileHover={{ borderColor: "#C8F200" }}
          transition={{ duration: 0.3 }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-transparent rounded-br-2xl pointer-events-none"
          whileHover={{ borderColor: "#C8F200" }}
          transition={{ duration: 0.3 }}
        />

        {/* Content */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 p-4 pointer-events-none"
          initial={{ y: 5 }}
          whileHover={{ y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.h3 
            className="text-white font-semibold text-sm md:text-base leading-tight"
            whileHover={{ color: "#C8F200" }}
            transition={{ duration: 0.3 }}
          >
            {member.name}
          </motion.h3>
          <p className="text-white/60 text-xs md:text-sm mt-1">
            {member.designation}
          </p>
          
          {/* Underline */}
          <motion.div 
            className="h-0.5 bg-[#C8F200] mt-2"
            initial={{ width: 0 }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </motion.div>

        {/* Top line accent */}
        <motion.div 
          className="absolute top-0 left-1/2 -translate-x-1/2 h-0.5 bg-[#C8F200] pointer-events-none"
          initial={{ width: 0 }}
          whileHover={{ width: "50%" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </motion.div>
    </motion.div>
  );
};

const TeamShowcase = () => {
  return (
    <section className="bg-black py-16 md:py-24 px-4 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C8F200]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8F200]" />
            <span className="text-white/70 text-sm font-medium uppercase tracking-widest">Our Team</span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Meet The <span className="text-[#C8F200]">Experts</span>
          </h2>
          
          <p className="text-white/50 text-base md:text-lg max-w-lg mx-auto">
            The brilliant minds behind The Karthik Media
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-10">
          {teamMembers.map((member, index) => (
            <TeamCard key={member.id} member={member} index={index} />
          ))}
        </div>

        {/* Bottom line */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 md:mt-16 mx-auto max-w-md h-px bg-gradient-to-r from-transparent via-[#C8F200]/30 to-transparent"
        />
      </div>
    </section>
  );
};

export default TeamShowcase;
