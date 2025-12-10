import { WorldMap } from "@/components/ui/world-map";
import { motion } from "framer-motion";
const GlobalNetworkSection = () => {
  return <section className="pt-8 pb-20 md:pt-12 md:pb-32 bg-black w-full relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#C8F200]/10 via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div className="text-center mb-12" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }}>
          <h2 className="font-bold text-3xl md:text-5xl text-white mb-4">Our Worldwide Clientele <span className="text-[#C8F200]">Network</span>
          </h2>
          <p className="text-base md:text-lg text-neutral-400 max-w-2xl mx-auto">
            A diverse network of brands worldwide who trust us to scale their digital presence with precision and performance.
          </p>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        scale: 0.95
      }} whileInView={{
        opacity: 1,
        scale: 1
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8,
        delay: 0.2
      }}>
          <WorldMap lineColor="#C8F200" dots={[{
          start: {
            lat: 64.2008,
            lng: -149.4937,
            label: "Alaska"
          },
          end: {
            lat: 34.0522,
            lng: -118.2437,
            label: "Los Angeles"
          }
        }, {
          start: {
            lat: 64.2008,
            lng: -149.4937,
            label: "Alaska"
          },
          end: {
            lat: -15.7975,
            lng: -47.8919,
            label: "Brasília"
          }
        }, {
          start: {
            lat: -15.7975,
            lng: -47.8919,
            label: "Brasília"
          },
          end: {
            lat: 38.7223,
            lng: -9.1393,
            label: "Lisbon"
          }
        }, {
          start: {
            lat: 51.5074,
            lng: -0.1278,
            label: "London"
          },
          end: {
            lat: 28.6139,
            lng: 77.209,
            label: "New Delhi"
          }
        }, {
          start: {
            lat: 28.6139,
            lng: 77.209,
            label: "New Delhi"
          },
          end: {
            lat: 43.1332,
            lng: 131.9113,
            label: "Vladivostok"
          }
        }, {
          start: {
            lat: 28.6139,
            lng: 77.209,
            label: "New Delhi"
          },
          end: {
            lat: -1.2921,
            lng: 36.8219,
            label: "Nairobi"
          }
        }]} />
        </motion.div>
      </div>
    </section>;
};
export default GlobalNetworkSection;