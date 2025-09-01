import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Scissors, Clock, Users, Star, BookOpen, Lightbulb, Package2 } from "lucide-react";

const CraftsPage = () => {
  const techniques = [
    { name: "Paper Crafting", difficulty: "Beginner", time: "30 min" },
    { name: "Wood Working", difficulty: "Intermediate", time: "2-4 hours" },
    { name: "Jewelry Making", difficulty: "Intermediate", time: "1-3 hours" },
    { name: "Advanced Textiles", difficulty: "Advanced", time: "5-10 hours" },
  ];

  const projectIdeas = [
    "Handmade greeting cards",
    "Upcycled furniture restoration",
    "Custom jewelry pieces",
    "Macramé wall hangings",
    "Pottery and ceramics",
    "Sustainable fabric bags",
  ];

  const galleryImages = [
    { title: "Macrame Art", artist: "Jenny C.", likes: 445 },
    { title: "Wood Sculpture", artist: "Tom H.", likes: 678 },
    { title: "Handmade Jewelry", artist: "Aria L.", likes: 567 },
    { title: "Ceramic Vase", artist: "Kate M.", likes: 389 },
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="relative mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-gradient-sunset text-background">
                <Scissors className="h-4 w-4 mr-2" />
                Crafts & DIY
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Handmade with
                <span className="block bg-gradient-sunset bg-clip-text text-transparent">
                  Love & Creativity
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                From ancient pottery to modern upcycling, discover the joy of creating 
                beautiful, functional items with your own hands and sustainable materials.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero">Start Crafting</Button>
                <Button variant="outline">Browse Projects</Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-sunset/20 rounded-lg flex items-center justify-center">
                <Scissors className="h-32 w-32 text-muted-foreground" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-lg" />
            </div>
          </div>
        </div>

        {/* Content Tabs */}
        <Tabs defaultValue="history" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="techniques">Techniques</TabsTrigger>
            <TabsTrigger value="ideas">Project Ideas</TabsTrigger>
            <TabsTrigger value="gallery">Gallery</TabsTrigger>
          </TabsList>

          <TabsContent value="history" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  The Art of Handcrafts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Ancient Origins</h3>
                    <p className="text-muted-foreground">
                      Crafting began with humanity's need for tools and shelter. From 
                      prehistoric pottery to Egyptian jewelry, early craftspeople combined 
                      functionality with beauty, creating the foundation for decorative arts.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Medieval Guilds</h3>
                    <p className="text-muted-foreground">
                      The Middle Ages established craft guilds that preserved techniques 
                      and maintained quality standards. Master craftsmen passed down skills 
                      through apprenticeships, creating lasting traditions.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Arts & Crafts Movement</h3>
                    <p className="text-muted-foreground">
                      The late 19th century Arts and Crafts movement emphasized handmade 
                      quality over mass production. Leaders like William Morris promoted 
                      craftsmanship as both art and social reform.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Modern DIY Culture</h3>
                    <p className="text-muted-foreground">
                      Today's crafting renaissance combines traditional techniques with 
                      modern materials and sustainability. Online communities share tutorials, 
                      making crafting accessible to everyone worldwide.
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
                  Craft Project Ideas
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
                  <h3 className="text-lg font-semibold mb-3">Crafting Wisdom</h3>
                  <p className="text-muted-foreground">
                    Start with simple projects and gradually build your skills. Embrace 
                    imperfections - they add character to handmade items. Use sustainable 
                    materials when possible and enjoy the meditative process of creating!
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="gallery" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((craft) => (
                <Card key={craft.title} className="group overflow-hidden hover:shadow-creative transition-all duration-300">
                  <div className="aspect-square bg-gradient-sunset/20 relative overflow-hidden">
                    <Package2 className="absolute inset-0 m-auto h-12 w-12 text-muted-foreground" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-1">{craft.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">by {craft.artist}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <span>{craft.likes}</span>
                      </div>
                      <Button variant="ghost" size="sm">Tutorial</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center">
              <Button variant="outline" className="px-8">
                Load More Crafts
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        {/* Community Section */}
        <Card className="mt-16">
          <CardContent className="p-8 text-center">
            <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h3 className="text-2xl font-bold mb-4">Join the Crafting Community</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Connect with 9,000+ crafters and DIY enthusiasts worldwide. Share your projects, 
              exchange techniques, and get inspired by the creativity of our global community.
            </p>
            <Button variant="hero">Join Community</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CraftsPage;