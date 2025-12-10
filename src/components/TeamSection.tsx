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

const GlossyTeamCard = ({ member, index }: { member: typeof teamMembers[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
      className="group/card relative cursor-pointer isolate"
    >
      {/* Outer glow on hover */}
      <div className="absolute -inset-3 bg-[#C8F200]/0 group-hover/card:bg-[#C8F200]/20 rounded-3xl blur-2xl transition-all duration-500 opacity-0 group-hover/card:opacity-100 pointer-events-none" />
      
      {/* HUD Corner Brackets - CSS only for reliable hover */}
      <div className="absolute -inset-2 pointer-events-none opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
        {/* Top Left */}
        <div className="absolute top-0 left-0 w-0 h-0 border-l-2 border-t-2 border-[#C8F200] transition-all duration-300 ease-out group-hover/card:w-5 group-hover/card:h-5" />
        {/* Top Right */}
        <div className="absolute top-0 right-0 w-0 h-0 border-r-2 border-t-2 border-[#C8F200] transition-all duration-300 ease-out group-hover/card:w-5 group-hover/card:h-5" />
        {/* Bottom Left */}
        <div className="absolute bottom-0 left-0 w-0 h-0 border-l-2 border-b-2 border-[#C8F200] transition-all duration-300 ease-out group-hover/card:w-5 group-hover/card:h-5" />
        {/* Bottom Right */}
        <div className="absolute bottom-0 right-0 w-0 h-0 border-r-2 border-b-2 border-[#C8F200] transition-all duration-300 ease-out group-hover/card:w-5 group-hover/card:h-5" />
      </div>

      {/* Animated HUD lines - Top */}
      <svg className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-4 pointer-events-none opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
        <line x1="50%" y1="100%" x2="50%" y2="0" stroke="#C8F200" strokeWidth="1.5" strokeDasharray="3 3">
          <animate attributeName="stroke-dashoffset" from="6" to="0" dur="0.4s" repeatCount="indefinite" />
        </line>
        <circle cx="50%" cy="2" r="2" fill="#C8F200" className="animate-pulse" />
      </svg>
      
      {/* Animated HUD lines - Bottom */}
      <svg className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-4 pointer-events-none opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
        <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#C8F200" strokeWidth="1.5" strokeDasharray="3 3">
          <animate attributeName="stroke-dashoffset" from="0" to="6" dur="0.4s" repeatCount="indefinite" />
        </line>
        <circle cx="50%" cy="14" r="2" fill="#C8F200" className="animate-pulse" />
      </svg>

      {/* Main Card - Glossy Glass Effect */}
      <div className="relative w-36 h-48 sm:w-40 sm:h-52 md:w-44 md:h-56 lg:w-48 lg:h-64 rounded-2xl overflow-hidden transition-all duration-500 group-hover/card:shadow-[0_0_50px_rgba(200,242,0,0.3)] group-hover/card:-translate-y-3 group-hover/card:scale-[1.02]">
        {/* Glass border */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/30 via-white/10 to-white/5 p-[1px] group-hover/card:from-[#C8F200]/60 group-hover/card:via-[#C8F200]/30 group-hover/card:to-[#C8F200]/10 transition-all duration-500">
          <div className="w-full h-full rounded-2xl overflow-hidden bg-zinc-900/90 backdrop-blur-xl">
            {/* Image */}
            <div className="absolute inset-0">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
              />
            </div>
            
            {/* Glossy overlay - top shine */}
            <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white/20 via-white/5 to-transparent opacity-60 group-hover/card:opacity-80 transition-opacity duration-500" />
            
            {/* Bottom gradient for text */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70 group-hover/card:opacity-85 transition-opacity duration-500" />
            
            {/* Moving shine effect */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/card:translate-x-full transition-transform duration-1000 ease-out" />
            </div>

            {/* Scan line effect on hover */}
            <div className="absolute inset-0 opacity-0 group-hover/card:opacity-30 transition-opacity duration-500 pointer-events-none">
              <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(200,242,0,0.03)_2px,rgba(200,242,0,0.03)_4px)]" />
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
              <h3 className="text-white font-semibold text-xs sm:text-sm md:text-base leading-tight group-hover/card:text-[#C8F200] transition-colors duration-300 drop-shadow-lg">
                {member.name}
              </h3>
              <p className="text-white/60 text-[10px] sm:text-xs md:text-sm mt-0.5 group-hover/card:text-white/90 transition-colors duration-300">
                {member.designation}
              </p>
              
              {/* Animated underline */}
              <div className="h-0.5 w-0 group-hover/card:w-full bg-gradient-to-r from-[#C8F200] to-[#C8F200]/50 mt-2 transition-all duration-500 ease-out rounded-full" />
            </div>

            {/* Corner dots */}
            <div className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-transparent group-hover/card:bg-[#C8F200] transition-all duration-300 group-hover/card:shadow-[0_0_8px_rgba(200,242,0,0.8)]" />
            <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-transparent group-hover/card:bg-[#C8F200] transition-all duration-300 group-hover/card:shadow-[0_0_8px_rgba(200,242,0,0.8)]" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const TeamSection = () => {
  return (
    <section className="bg-black py-20 md:py-28 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#C8F200]/5 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#C8F200] animate-pulse" />
            <span className="text-white/70 text-sm font-medium uppercase tracking-widest">The Minds Behind</span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Meet Our <span className="text-[#C8F200]">Team</span>
          </h2>
          
          <p className="text-white/50 text-base md:text-lg max-w-xl mx-auto">
            The creative strategists powering your digital success
          </p>
        </motion.div>

        {/* Team Grid - All 6 in same line with proper centering */}
        <div className="flex flex-wrap justify-center items-start gap-6 md:gap-8 lg:gap-10 py-8">
          {teamMembers.map((member, index) => (
            <GlossyTeamCard key={member.id} member={member} index={index} />
          ))}
        </div>

        {/* Top accent line */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute top-10 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-[#C8F200]/30 to-transparent"
        />

        {/* Bottom decorative line */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-14 md:mt-20 mx-auto max-w-lg h-px bg-gradient-to-r from-transparent via-[#C8F200]/40 to-transparent"
        />
      </div>
    </section>
  );
};

export default TeamSection;
