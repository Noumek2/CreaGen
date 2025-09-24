import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle, Share2, User } from "lucide-react";
import paintingImage from "@/assets/painting-art.jpg";
import drawingImage from "@/assets/drawing-art.jpg";
import cookingImage from "@/assets/cooking-art.jpg";

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      title: "Abstract Harmony",
      author: "Sarah Chen",
      category: "Digital Art",
      image: paintingImage,
      likes: 234,
      comments: 18,
      description: "A vibrant exploration of color and form in digital space."
    },
    {
      id: 2,
      title: "Urban Sketches",
      author: "Marcus Rodriguez",
      category: "Drawing",
      image: drawingImage,
      likes: 189,
      comments: 12,
      description: "Capturing the essence of city life through quick sketches."
    },
    {
      id: 3,
      title: "Fusion Feast",
      author: "Emily Watson",
      category: "Culinary Arts",
      image: cookingImage,
      likes: 456,
      comments: 32,
      description: "A creative blend of Eastern and Western culinary traditions."
    },
    {
      id: 4,
      title: "Digital Dreams",
      author: "Alex Kim",
      category: "Digital Art",
      image: paintingImage,
      likes: 312,
      comments: 24,
      description: "Surreal landscapes created in the digital realm."
    },
    {
      id: 5,
      title: "Charcoal Portraits",
      author: "Isabella Martinez",
      category: "Drawing",
      image: drawingImage,
      likes: 278,
      comments: 19,
      description: "Emotional depth captured through traditional charcoal techniques."
    },
    {
      id: 6,
      title: "Artisan Pastries",
      author: "James Thompson",
      category: "Culinary Arts",
      image: cookingImage,
      likes: 389,
      comments: 28,
      description: "Handcrafted pastries that are as beautiful as they are delicious."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="py-20 bg-gradient-creative relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Creative Gallery
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Discover amazing creations from our talented community of artists, chefs, and creators from around the world.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item) => (
              <Card key={item.id} className="group overflow-hidden border-0 shadow-card hover:shadow-glow transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-black/50 text-white border-0">
                      {item.category}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-foreground">
                    {item.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-creative flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-medium text-foreground">
                      {item.author}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        <span>{item.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        <span>{item.comments}</span>
                      </div>
                    </div>
                    
                    <Button variant="ghost" size="sm" className="text-creative-purple hover:text-creative-pink">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="px-8 py-6">
              Load More Creations
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Share Your Creativity
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our community of creators and showcase your artistic journey. Upload your creations and inspire others.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-creative text-white hover:opacity-90">
              Upload Creation
            </Button>
            <Button variant="outline" size="lg">
              Join Community
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;