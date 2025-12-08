import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
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

const DockIcon = ({ 
  member, 
  mouseX,
  index
}: { 
  member: typeof teamMembers[0]; 
  mouseX: any;
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-250, 0, 250], [120, 200, 120]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  const scaleSync = useTransform(distance, [-250, 0, 250], [1, 1.4, 1]);
  const scale = useSpring(scaleSync, { mass: 0.1, stiffness: 150, damping: 12 });

  const ySync = useTransform(distance, [-250, 0, 250], [0, -40, 0]);
  const y = useSpring(ySync, { mass: 0.1, stiffness: 150, damping: 12 });

  const opacitySync = useTransform(distance, [-180, 0, 180], [0, 1, 0]);
  const tooltipOpacity = useSpring(opacitySync, { mass: 0.1, stiffness: 150, damping: 12 });

  const glowOpacitySync = useTransform(distance, [-250, 0, 250], [0.1, 0.6, 0.1]);
  const glowOpacity = useSpring(glowOpacitySync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="relative flex flex-col items-center"
      style={{ width }}
    >
      {/* Tooltip */}
      <motion.div
        style={{ opacity: tooltipOpacity, y: -10 }}
        className="absolute -top-20 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
      >
        <div className="bg-zinc-900/95 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-2.5 shadow-2xl whitespace-nowrap">
          <p className="text-white font-semibold text-sm">{member.name}</p>
          <p className="text-[#C8F200] text-xs mt-0.5">{member.designation}</p>
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-zinc-900/95 border-r border-b border-white/10 rotate-45" />
        </div>
      </motion.div>

      {/* Icon container */}
      <motion.div 
        style={{ scale, y }}
        className="relative cursor-pointer"
      >
        {/* Subtle glow effect on hover only */}
        <motion.div
          style={{ opacity: glowOpacity }}
          className="absolute -inset-2 bg-white/20 rounded-3xl blur-xl"
        />
        
        {/* Main icon */}
        <div className="relative w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-2xl overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-900 shadow-2xl border border-white/10">
          <img 
            src={member.image} 
            alt={member.name}
            className="w-full h-full object-cover"
          />
          
          {/* Glass shine overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Reflection */}
        <motion.div 
          style={{ opacity: glowOpacity }}
          className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-20 h-5 bg-white/15 rounded-full blur-lg"
        />
      </motion.div>

      {/* Name below */}
      <motion.p 
        style={{ opacity: tooltipOpacity }}
        className="mt-4 text-white text-xs font-medium text-center whitespace-nowrap"
      >
        {member.name.split(' ')[0]}
      </motion.p>
    </motion.div>
  );
};

const TeamShowcase = () => {
  const mouseX = useMotionValue(Infinity);

  return (
    <section className="bg-black py-28 md:py-40 px-4 relative overflow-hidden">

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/10 mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8F200] animate-pulse" />
            <span className="text-white/70 text-sm font-medium uppercase tracking-widest">Our Team</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Meet The <span className="text-[#C8F200]">Experts</span>
          </h2>
          
          <p className="text-white/40 text-lg md:text-xl max-w-2xl mx-auto font-light">
            The brilliant minds powering The Karthik Media's digital excellence
          </p>
        </motion.div>

        {/* Mac Dock style container */}
        <motion.div
          onMouseMove={(e) => mouseX.set(e.pageX)}
          onMouseLeave={() => mouseX.set(Infinity)}
          className="flex items-end justify-center gap-6 md:gap-10 pb-12 mx-auto"
        >
          {teamMembers.map((member, index) => (
            <DockIcon 
              key={member.id} 
              member={member} 
              mouseX={mouseX}
              index={index}
            />
          ))}
        </motion.div>

        {/* Dock shelf line */}
        <div className="flex justify-center mt-6">
          <div className="w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default TeamShowcase;
