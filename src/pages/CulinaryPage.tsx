import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChefHat, Clock, Users, Star, BookOpen, Lightbulb, Camera } from "lucide-react";
import cookingImage from "@/assets/cooking-art.jpg";

const CulinaryPage = () => {
  const techniques = [
    { name: "Knife Skills", difficulty: "Beginner", time: "15 min" },
    { name: "Sauce Making", difficulty: "Intermediate", time: "45 min" },
    { name: "Pastry Basics", difficulty: "Advanced", time: "2-3 hours" },
    { name: "Fermentation", difficulty: "Advanced", time: "Days-Weeks" },
  ];

  const projectIdeas = [
    "Master the perfect scrambled eggs",
    "Create your signature pasta sauce",
    "Bake artisan bread from scratch",
    "Design a balanced 3-course meal",
    "Explore international street foods",
    "Perfect your knife cutting techniques",
  ];

  const galleryImages = [
    { title: "French Macarons", artist: "Chef Marie", likes: 445 },
    { title: "Ramen Bowl", artist: "Kenji S.", likes: 678 },
    { title: "Sourdough Bread", artist: "Baker Tom", likes: 523 },
    { title: "Chocolate Tart", artist: "Pastry Anna", likes: 789 },
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="relative mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-gradient-sunset text-background">
                <ChefHat className="h-4 w-4 mr-2" />
                Culinary Arts
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Craft Culinary
                <span className="block bg-gradient-sunset bg-clip-text text-transparent">
                  Masterpieces
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                From ancient cooking methods to molecular gastronomy, discover the art and science 
                of creating extraordinary flavors that tell stories and bring people together.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero">Start Cooking</Button>
                <Button variant="outline">View Recipes</Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={cookingImage} 
                alt="Culinary Art"
                className="rounded-lg shadow-creative w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-lg" />
            </div>
          </div>
        </div>

        {/* Content Tabs */}
        <Tabs defaultValue="history" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="techniques">Techniques</TabsTrigger>
            <TabsTrigger value="ideas">Recipe Ideas</TabsTrigger>
            <TabsTrigger value="gallery">Gallery</TabsTrigger>
          </TabsList>

          <TabsContent value="history" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  The Evolution of Culinary Arts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Ancient Cooking</h3>
                    <p className="text-muted-foreground">
                      Cooking began 1.9 million years ago with the discovery of fire. Ancient 
                      civilizations developed fermentation, preservation, and the first recipes 
                      on clay tablets in Mesopotamia around 1750 BCE.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Medieval Cuisine</h3>
                    <p className="text-muted-foreground">
                      The Middle Ages brought spice trades, guild systems, and elaborate feasts. 
                      Cooking became a respected craft with the first cookbook "De Re Coquinaria" 
                      establishing culinary traditions.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">French Revolution</h3>
                    <p className="text-muted-foreground">
                      The 18th century revolutionized cooking with Auguste Escoffier's brigade 
                      system and haute cuisine. This period established the foundation of 
                      modern culinary techniques and restaurant culture.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Modern Gastronomy</h3>
                    <p className="text-muted-foreground">
                      Today's culinary world embraces molecular gastronomy, fusion cuisine, 
                      and sustainable cooking. Chefs like Ferran Adrià and Grant Achatz push 
                      boundaries while honoring traditional techniques.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="techniques" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {techniques.map((technique) => (
                <Card key={technique.name} className="group hover:shadow-creative transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold">{technique.name}</h3>
                      <Badge variant={technique.difficulty === 'Beginner' ? 'secondary' : 
                                   technique.difficulty === 'Intermediate' ? 'default' : 'destructive'}>
                        {technique.difficulty}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{technique.time}</span>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Learn Technique
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="ideas" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5" />
                  Culinary Project Ideas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {projectIdeas.map((idea, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-accent/50 hover:bg-accent transition-colors">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-sm">{idea}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-6 bg-gradient-sunset/10 rounded-lg border border-primary/20">
                  <h3 className="text-lg font-semibold mb-3">Chef's Tip</h3>
                  <p className="text-muted-foreground">
                    Taste as you go and trust your palate. Great cooking is about understanding 
                    ingredients, balancing flavors, and most importantly, cooking with love. 
                    Every mistake is a learning opportunity!
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="gallery" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((dish) => (
                <Card key={dish.title} className="group overflow-hidden hover:shadow-creative transition-all duration-300">
                  <div className="aspect-square bg-gradient-sunset/20 relative overflow-hidden">
                    <Camera className="absolute inset-0 m-auto h-12 w-12 text-muted-foreground" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-1">{dish.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">by {dish.artist}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <span>{dish.likes}</span>
                      </div>
                      <Button variant="ghost" size="sm">Recipe</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center">
              <Button variant="outline" className="px-8">
                Load More Recipes
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        {/* Community Section */}
        <Card className="mt-16">
          <CardContent className="p-8 text-center">
            <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h3 className="text-2xl font-bold mb-4">Join the Culinary Community</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Connect with 8,000+ chefs and food enthusiasts worldwide. Share recipes, 
              get cooking tips, and learn from professional chefs in our vibrant community.
            </p>
            <Button variant="hero">Join Community</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CulinaryPage;