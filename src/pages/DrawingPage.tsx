import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PenTool, Clock, Users, Star, BookOpen, Lightbulb, Camera } from "lucide-react";
import drawingImage from "@/assets/drawing-art.jpg";

const DrawingPage = () => {
  const techniques = [
    { name: "Pencil Sketching", difficulty: "Beginner", time: "20 min" },
    { name: "Pen & Ink", difficulty: "Intermediate", time: "1 hour" },
    { name: "Charcoal Drawing", difficulty: "Intermediate", time: "1-2 hours" },
    { name: "Digital Illustration", difficulty: "Advanced", time: "2-4 hours" },
  ];

  const projectIdeas = [
    "Daily gesture drawing practice",
    "Portrait studies from life",
    "Urban sketching adventures", 
    "Animal anatomy studies",
    "Still life composition mastery",
    "Character design exploration",
  ];

  const galleryImages = [
    { title: "Portrait Study", artist: "Emma L.", likes: 567 },
    { title: "Urban Sketch", artist: "David M.", likes: 423 },
    { title: "Character Design", artist: "Sofia R.", likes: 789 },
    { title: "Nature Study", artist: "Marcus K.", likes: 345 },
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="relative mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-gradient-nature text-background">
                <PenTool className="h-4 w-4 mr-2" />
                Drawing & Sketching
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Express Through
                <span className="block bg-gradient-nature bg-clip-text text-transparent">
                  Lines & Form
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                From cave drawings to digital art, explore the fundamental language of visual 
                communication through the simple yet powerful medium of drawing.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero">Start Drawing</Button>
                <Button variant="outline">View Tutorials</Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={drawingImage} 
                alt="Drawing Art"
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
            <TabsTrigger value="ideas">Project Ideas</TabsTrigger>
            <TabsTrigger value="gallery">Gallery</TabsTrigger>
          </TabsList>

          <TabsContent value="history" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  The Art of Drawing Through Time
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Prehistoric Origins</h3>
                    <p className="text-muted-foreground">
                      Drawing is humanity's oldest art form, beginning 73,000 years ago with 
                      abstract patterns on cave walls. Early humans used ochre and charcoal 
                      to record their world and spiritual beliefs.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Renaissance Masters</h3>
                    <p className="text-muted-foreground">
                      Leonardo da Vinci, Michelangelo, and Dürer elevated drawing from mere 
                      preparation to finished art. They developed techniques for proportion, 
                      perspective, and anatomical accuracy still used today.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Industrial Innovation</h3>
                    <p className="text-muted-foreground">
                      The 19th century brought mass-produced pencils, papers, and art supplies. 
                      This democratized drawing, leading to illustration's golden age and the 
                      birth of comic art and technical drawing.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Digital Revolution</h3>
                    <p className="text-muted-foreground">
                      Digital tablets and software have transformed drawing, offering infinite 
                      tools, colors, and possibilities. Artists can now create, edit, and 
                      share their work instantly across the globe.
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
                  Drawing Project Ideas
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
                <div className="mt-8 p-6 bg-gradient-nature/10 rounded-lg border border-primary/20">
                  <h3 className="text-lg font-semibold mb-3">Drawing Fundamentals</h3>
                  <p className="text-muted-foreground">
                    Focus on basic shapes first - everything can be broken down into circles, 
                    squares, and triangles. Practice line quality and don't fear making mistakes. 
                    The best drawings come from observation and consistent practice!
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="gallery" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((artwork) => (
                <Card key={artwork.title} className="group overflow-hidden hover:shadow-creative transition-all duration-300">
                  <div className="aspect-square bg-gradient-nature/20 relative overflow-hidden">
                    <Camera className="absolute inset-0 m-auto h-12 w-12 text-muted-foreground" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-1">{artwork.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">by {artwork.artist}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <span>{artwork.likes}</span>
                      </div>
                      <Button variant="ghost" size="sm">View</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center">
              <Button variant="outline" className="px-8">
                Load More Drawings
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        {/* Community Section */}
        <Card className="mt-16">
          <CardContent className="p-8 text-center">
            <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h3 className="text-2xl font-bold mb-4">Join the Drawing Community</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Connect with 12,000+ artists worldwide. Share your sketches, get constructive 
              feedback, and learn from experienced illustrators in our supportive community.
            </p>
            <Button variant="hero">Join Community</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DrawingPage;