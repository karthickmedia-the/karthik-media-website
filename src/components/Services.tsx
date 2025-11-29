import { Target, TrendingUp, Megaphone, Video, Mail, BarChart } from "lucide-react";
const services = [{
  icon: Target,
  title: "PAID ADS",
  description: "ROI-focused campaigns that turn clicks into customers"
}, {
  icon: TrendingUp,
  title: "SEO & GROWTH",
  description: "Rank higher, drive organic traffic, dominate your market"
}, {
  icon: Megaphone,
  title: "SOCIAL MEDIA",
  description: "Build brand presence and engage your audience"
}, {
  icon: Video,
  title: "CONTENT CREATION",
  description: "Compelling content that converts and captivates"
}, {
  icon: Mail,
  title: "EMAIL MARKETING",
  description: "Automated sequences that nurture and close deals"
}, {
  icon: BarChart,
  title: "ANALYTICS",
  description: "Data-driven insights for smarter decisions"
}];
const Services = () => {
  return <section id="services" className="relative min-h-screen bg-background py-24 md:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground mb-4">
            OUR <span className="text-primary">SERVICES</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to scale your business to the next level
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
          const Icon = service.icon;
          return <div key={index} className="group relative bg-card border-2 border-primary/10 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:scale-105">
                {/* Icon */}
                <div className="mb-6 inline-block">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-black text-foreground mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground font-sans">
                  {service.description}
                </p>

                {/* Hover Effect - Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>;
        })}
        </div>
      </div>
    </section>;
};
export default Services;