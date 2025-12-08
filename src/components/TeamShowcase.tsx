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
      whileHover={{ y: -10 }}
      className="group relative flex-shrink-0 cursor-pointer"
    >
      {/* Glow effect behind card */}
      <div className="absolute -inset-2 bg-[#C8F200]/0 group-hover:bg-[#C8F200]/20 rounded-3xl blur-xl transition-all duration-500 ease-out" />
      
      {/* Animated border */}
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-[#C8F200]/0 via-[#C8F200]/0 to-[#C8F200]/0 group-hover:from-[#C8F200] group-hover:via-[#C8F200]/50 group-hover:to-[#C8F200] transition-all duration-500 opacity-0 group-hover:opacity-100" />

      {/* Card */}
      <div className="relative w-36 h-48 md:w-40 md:h-56 lg:w-44 lg:h-60 rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 group-hover:border-transparent transition-all duration-500 group-hover:scale-110">
        {/* Image container */}
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src={member.image} 
            alt={member.name}
            className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-110"
          />
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
        
        {/* Shine effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />
        </div>

        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-[#C8F200]/0 group-hover:border-[#C8F200] rounded-tl-2xl transition-all duration-500" />
        <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-[#C8F200]/0 group-hover:border-[#C8F200] rounded-tr-2xl transition-all duration-500" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-[#C8F200]/0 group-hover:border-[#C8F200] rounded-bl-2xl transition-all duration-500" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-[#C8F200]/0 group-hover:border-[#C8F200] rounded-br-2xl transition-all duration-500" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
          <h3 className="text-white font-semibold text-sm md:text-base leading-tight group-hover:text-[#C8F200] transition-colors duration-300">
            {member.name}
          </h3>
          <p className="text-white/60 text-xs md:text-sm mt-1 group-hover:text-white/90 transition-colors duration-300">
            {member.designation}
          </p>
          
          {/* Underline animation */}
          <div className="h-0.5 w-0 group-hover:w-full bg-[#C8F200] mt-2 transition-all duration-500 ease-out" />
        </div>

        {/* Top line accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-1/2 h-0.5 bg-[#C8F200] transition-all duration-500 ease-out" />
      </div>
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

        {/* Team Grid - Single Row */}
        <div className="flex justify-center gap-4 md:gap-6 lg:gap-8 overflow-x-auto pb-4 px-4 scrollbar-hide">
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
