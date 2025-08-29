import { Users, Trophy, Paintbrush, Globe } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "50K+",
    label: "Active Creators",
    gradient: "gradient-creative"
  },
  {
    icon: Paintbrush,
    value: "200K+",
    label: "Artworks Shared",
    gradient: "gradient-vibrant"
  },
  {
    icon: Trophy,
    value: "1K+",
    label: "Awards Given",
    gradient: "gradient-sunset"
  },
  {
    icon: Globe,
    value: "120+",
    label: "Countries",
    gradient: "gradient-nature"
  }
];

export const CommunityStats = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Creative
            <span className="block bg-gradient-creative bg-clip-text text-transparent">
              Community
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join a thriving global community of artists, creators, and innovators
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center group creative-hover p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50"
            >
              <div className={`mx-auto w-16 h-16 rounded-full bg-${stat.gradient} flex items-center justify-center mb-4 shadow-glow`}>
                <stat.icon className="h-8 w-8 text-background" />
              </div>
              
              <div className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-creative bg-clip-text text-transparent">
                {stat.value}
              </div>
              
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};