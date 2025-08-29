import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import paintingImage from "@/assets/painting-art.jpg";
import cookingImage from "@/assets/cooking-art.jpg";
import drawingImage from "@/assets/drawing-art.jpg";
import { Palette, ChefHat, PenTool, Camera, Music, Scissors } from "lucide-react";

const domains = [
  {
    title: "Painting & Arts",
    description: "Express yourself with colors, textures, and endless creativity",
    image: paintingImage,
    icon: Palette,
    gradient: "gradient-creative",
    stats: "15k+ Artists"
  },
  {
    title: "Culinary Arts",
    description: "Create delicious masterpieces and share your recipes",
    image: cookingImage,
    icon: ChefHat,
    gradient: "gradient-sunset",
    stats: "8k+ Chefs"
  },
  {
    title: "Drawing & Sketching",
    description: "From quick sketches to detailed illustrations",
    image: drawingImage,
    icon: PenTool,
    gradient: "gradient-nature",
    stats: "12k+ Artists"
  },
  {
    title: "Photography",
    description: "Capture moments and tell stories through images",
    image: null,
    icon: Camera,
    gradient: "gradient-vibrant",
    stats: "6k+ Photographers"
  },
  {
    title: "Music & Audio",
    description: "Compose, mix, and share your musical creations",
    image: null,
    icon: Music,
    gradient: "gradient-creative",
    stats: "4k+ Musicians"
  },
  {
    title: "Crafts & DIY",
    description: "Handmade creations and innovative projects",
    image: null,
    icon: Scissors,
    gradient: "gradient-sunset",
    stats: "9k+ Crafters"
  }
];

export const CreativeDomains = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Explore Creative
            <span className="block bg-gradient-creative bg-clip-text text-transparent">
              Domains
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover your passion across diverse creative fields and connect with like-minded artists
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {domains.map((domain, index) => (
            <Card key={domain.title} className="domain-card border-0 bg-card/50 backdrop-blur-sm group">
              <CardContent className="p-0">
                {/* Image/Icon Header */}
                <div className="relative h-48 overflow-hidden">
                  {domain.image ? (
                    <img 
                      src={domain.image} 
                      alt={domain.title}
                      className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                    />
                  ) : (
                    <div className={`w-full h-full bg-${domain.gradient} flex items-center justify-center`}>
                      <domain.icon className="h-20 w-20 text-background/80" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-creative-pink text-sm font-medium">
                    {domain.stats}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2 rounded-lg bg-${domain.gradient} bg-opacity-20`}>
                      <domain.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{domain.title}</h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {domain.description}
                  </p>
                  
                  <Button variant="secondary" className="w-full">
                    Explore Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};