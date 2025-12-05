"use client";

import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

export default function FeaturedSectionStats() {
  const data = [
    { name: "Jan", value: 20 },
    { name: "Feb", value: 40 },
    { name: "Mar", value: 60 },
    { name: "Apr", value: 80 },
    { name: "May", value: 100 },
    { name: "Jun", value: 130 },
    { name: "Jul", value: 160 },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto text-left">
      <div className="px-4">
        <h3 className="text-lg sm:text-xl lg:text-4xl font-medium text-foreground mb-16">
          Powering teams with real-time insights.{" "}
          <span className="text-muted-foreground text-sm sm:text-base lg:text-4xl">
            Our next-gen analytics dashboard helps you track performance, manage
            clients, and make data-driven decisions in seconds.
          </span>
        </h3>

        {/* Stats grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8">
          <div>
            <p className="text-3xl font-medium text-primary">50,000+</p>
            <p className="text-muted-foreground text-md">Projects Managed</p>
          </div>
          <div>
            <p className="text-3xl font-medium text-primary">99.9%</p>
            <p className="text-muted-foreground text-md">Uptime Guarantee</p>
          </div>
          <div>
            <p className="text-3xl font-medium text-primary">1,200+</p>
            <p className="text-muted-foreground text-md">Enterprise Clients</p>
          </div>
          <div>
            <p className="text-3xl font-medium text-primary">1.2s</p>
            <p className="text-muted-foreground text-md">Avg. Response Time</p>
          </div>
        </div>
      </div>

      {/* Area Chart */}
      <div className="w-full h-48 mt-8">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorPrimary" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#C8F200" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#C8F200" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--background))', 
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
                color: 'hsl(var(--foreground))'
              }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#C8F200"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorPrimary)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
