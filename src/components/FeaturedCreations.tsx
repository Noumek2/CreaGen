import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle, Share2, Star } from "lucide-react";

const creations = [
  {
    id: 1,
    title: "Sunset Serenity",
    creator: "Elena Rodriguez",
    category: "Painting",
    likes: 1247,
    comments: 89,
    rating: 4.9,
    tags: ["Acrylic", "Landscape", "Warm Colors"],
    gradient: "gradient-sunset"
  },
  {
    id: 2,
    title: "Fusion Ramen Bowl",
    creator: "Kenji Nakamura",
    category: "Culinary",
    likes: 892,
    comments: 156,
    rating: 4.8,
    tags: ["Asian Fusion", "Comfort Food", "Innovative"],
    gradient: "gradient-vibrant"
  },
  {
    id: 3,
    title: "Urban Wildlife Sketch",
    creator: "Maya Patel",
    category: "Drawing",
    likes: 654,
    comments: 43,
    rating: 4.7,
    tags: ["Wildlife", "Urban", "Pencil Art"],
    gradient: "gradient-nature"
  },
  {
    id: 4,
    title: "Minimalist Pottery",
    creator: "James Chen",
    category: "Crafts",
    likes: 543,
    comments: 67,
    rating: 4.9,
    tags: ["Ceramic", "Minimalist", "Functional"],
    gradient: "gradient-creative"
  }
];

export const FeaturedCreations = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured
            <span className="block bg-gradient-vibrant bg-clip-text text-transparent">
              Creations
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover outstanding works from our creative community
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {creations.map((creation) => (
            <Card key={creation.id} className="domain-card border-0 bg-card group">
              <CardContent className="p-0">
                {/* Featured Image Placeholder */}
                <div className={`h-48 bg-${creation.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-background/20" />
                  <div className="absolute top-3 right-3">
                    <Badge variant="secondary" className="bg-background/80 text-xs">
                      {creation.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-background/80 px-2 py-1 rounded-full">
                    <Star className="h-3 w-3 text-yellow-500 fill-current" />
                    <span className="text-xs font-medium">{creation.rating}</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-4">
                  <h4 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                    {creation.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    by {creation.creator}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {creation.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Heart className="h-4 w-4" />
                        <span>{creation.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="h-4 w-4" />
                        <span>{creation.comments}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="outline" size="lg" className="px-8">
            View All Creations
          </Button>
        </div>
      </div>
    </section>
  );
};