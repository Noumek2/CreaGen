import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Palette, Clock, Users, Star, BookOpen, Lightbulb, Camera } from "lucide-react";
import paintingImage from "@/assets/painting-art.jpg";

const PaintingPage = () => {
  const techniques = [
    { name: "Watercolor", difficulty: "Beginner", time: "30 min" },
    { name: "Oil Painting", difficulty: "Advanced", time: "2-4 hours" },
    { name: "Acrylic", difficulty: "Intermediate", time: "1-2 hours" },
    { name: "Digital Art", difficulty: "Intermediate", time: "1-3 hours" },
  ];

  const projectIdeas = [
    "Abstract color study with primary colors",
    "Landscape painting of your favorite place",
    "Portrait practice with self-portraits",
    "Still life with everyday objects",
    "Texture exploration with different brushes",
    "Color mixing experiments",
  ];

  const galleryImages = [
    { title: "Sunset Landscape", artist: "Maria K.", likes: 234 },
    { title: "Abstract Expression", artist: "John D.", likes: 189 },
    { title: "Portrait Study", artist: "Sarah L.", likes: 312 },
    { title: "Still Life", artist: "Alex R.", likes: 156 },
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="relative mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-gradient-creative text-background">
                <Palette className="h-4 w-4 mr-2" />
                Painting & Arts
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Master the Art of
                <span className="block bg-gradient-creative bg-clip-text text-transparent">
                  Painting
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                From cave paintings to digital masterpieces, explore the rich history and endless 
                possibilities of visual expression through paint and color.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero">Start Creating</Button>
                <Button variant="outline">View Gallery</Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={paintingImage} 
                alt="Painting Art"
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
                  The History of Painting
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Ancient Origins</h3>
                    <p className="text-muted-foreground">
                      Painting began over 40,000 years ago with cave paintings in Spain and France. 
                      Early humans used natural pigments to create the first artistic expressions, 
                      documenting their world and spiritual beliefs.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Renaissance Revolution</h3>
                    <p className="text-muted-foreground">
                      The Renaissance (14th-17th century) transformed painting with perspective, 
                      realism, and oil techniques. Masters like Leonardo da Vinci and Michelangelo 
                      established foundations still used today.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Modern Movements</h3>
                    <p className="text-muted-foreground">
                      The 19th and 20th centuries brought Impressionism, Cubism, and Abstract art. 
                      Artists like Monet, Picasso, and Kandinsky broke traditional rules and 
                      explored new forms of expression.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Digital Age</h3>
                    <p className="text-muted-foreground">
                      Today's artists blend traditional techniques with digital tools, creating 
                      new possibilities for color, texture, and form. Digital painting opens 
                      infinite creative possibilities.
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
                  Creative Project Ideas
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
                <div className="mt-8 p-6 bg-gradient-creative/10 rounded-lg border border-primary/20">
                  <h3 className="text-lg font-semibold mb-3">Pro Tip for Beginners</h3>
                  <p className="text-muted-foreground">
                    Start with simple subjects and focus on understanding light and shadow. 
                    Practice color mixing with just three primary colors plus white. 
                    Remember: every master was once a beginner!
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="gallery" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((artwork) => (
                <Card key={artwork.title} className="group overflow-hidden hover:shadow-creative transition-all duration-300">
                  <div className="aspect-square bg-gradient-creative/20 relative overflow-hidden">
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
                Load More Artworks
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        {/* Community Section */}
        <Card className="mt-16">
          <CardContent className="p-8 text-center">
            <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h3 className="text-2xl font-bold mb-4">Join the Painting Community</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Connect with 15,000+ painters worldwide. Share your work, get feedback, 
              and learn from experienced artists in our supportive community.
            </p>
            <Button variant="hero">Join Community</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PaintingPage;