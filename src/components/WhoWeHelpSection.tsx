import { Store, ShoppingCart, Briefcase, TrendingUp } from "lucide-react";

const helpCategories = [{
  icon: Store,
  title: "Small Businesses & Local Brands",
  description: "We help local shops, coaching centers, salons, restaurants, and service businesses get more walk-ins, leads, and calls through targeted digital marketing."
}, {
  icon: ShoppingCart,
  title: "E-Commerce Brands & D2C Startups",
  description: "If you sell products online, we help you grow with performance marketing, Meta Ads, Google Ads, conversion optimization, and funnel building that brings consistent orders every day."
}, {
  icon: Briefcase,
  title: "Service Providers & Coaches",
  description: "Consultants, trainers, doctors, real estate agents, and freelancers rely on us to generate high-quality leads with a clear digital strategy and automated follow-up systems."
}, {
  icon: TrendingUp,
  title: "Growing Companies Ready to Scale",
  description: "We assist businesses that already have customers but want to scale aggressively with SEO, ads, content marketing, automation, and data-driven campaigns."
}];

const WhoWeHelpSection = () => {
  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--primary) / 0.1) 0%, transparent 50%),
                            radial-gradient(circle at 80% 50%, hsl(var(--primary) / 0.05) 0%, transparent 50%)`
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6">
            WHO WE <span className="text-primary">HELP?</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            We work with brands that want steady growth, predictable sales, and a marketing system that actually works — not guesswork.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {helpCategories.map((category, index) => (
            <div 
              key={index}
              className="h-full min-h-[280px] flex flex-col p-6 rounded-2xl bg-card/50 border border-border/30 hover:border-primary/30 transition-colors duration-300"
            >
              <div className="flex flex-col h-full">
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                    <category.icon className="w-7 h-7 text-primary" />
                  </div>
                </div>

                {/* Number badge */}
                <span className="text-primary/60 text-sm font-bold mb-2">
                  0{index + 1}
                </span>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                  {category.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed flex-grow">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelpSection;