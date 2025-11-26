const clients = [
  { name: "TECH CORP", logo: "TC" },
  { name: "DIGITAL SOLUTIONS", logo: "DS" },
  { name: "GROWTH CO", logo: "GC" },
  { name: "SCALE UP", logo: "SU" },
  { name: "MARKET PROS", logo: "MP" },
  { name: "BRAND MASTERS", logo: "BM" },
  { name: "SALES BOOST", logo: "SB" },
  { name: "REVENUE KINGS", logo: "RK" },
];

const ClientLogos = () => {
  return (
    <section id="clients" className="relative bg-background py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-3xl md:text-5xl font-black text-center text-foreground">
          TRUSTED BY <span className="text-primary">100+ CLIENTS</span>
        </h2>
      </div>

      {/* Scrolling Logo Strip */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Scrolling Container */}
        <div className="flex animate-scroll">
          {/* First Set */}
          <div className="flex gap-8 md:gap-12 px-4 md:px-6">
            {clients.map((client, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-40 h-40 md:w-48 md:h-48 bg-card border-2 border-primary/20 rounded-2xl flex flex-col items-center justify-center hover:border-primary/50 transition-all group"
              >
                <span className="text-4xl md:text-5xl font-black text-primary mb-2 group-hover:scale-110 transition-transform">
                  {client.logo}
                </span>
                <span className="text-xs md:text-sm text-muted-foreground text-center px-2">
                  {client.name}
                </span>
              </div>
            ))}
          </div>

          {/* Duplicate Set for Seamless Loop */}
          <div className="flex gap-8 md:gap-12 px-4 md:px-6">
            {clients.map((client, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-40 h-40 md:w-48 md:h-48 bg-card border-2 border-primary/20 rounded-2xl flex flex-col items-center justify-center hover:border-primary/50 transition-all group"
              >
                <span className="text-4xl md:text-5xl font-black text-primary mb-2 group-hover:scale-110 transition-transform">
                  {client.logo}
                </span>
                <span className="text-xs md:text-sm text-muted-foreground text-center px-2">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-scroll {
            animation: scroll 30s linear infinite;
          }

          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}
      </style>
    </section>
  );
};

export default ClientLogos;
