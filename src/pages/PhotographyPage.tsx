import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Camera, Clock, Users, Star, BookOpen, Lightbulb, Image } from "lucide-react";

const PhotographyPage = () => {
  const techniques = [
    { name: "Portrait Photography", difficulty: "Beginner", time: "30 min" },
    { name: "Landscape Photography", difficulty: "Intermediate", time: "2-4 hours" },
    { name: "Street Photography", difficulty: "Intermediate", time: "1-3 hours" },
    { name: "Macro Photography", difficulty: "Advanced", time: "1-2 hours" },
  ];

  const projectIdeas = [
    "Golden hour portrait session",
    "Urban exploration photography",
    "Nature macro close-ups",
    "Black and white street scenes",
    "Long exposure night photography",
    "Documentary storytelling series",
  ];

  const galleryImages = [
    { title: "City Lights", artist: "Alex P.", likes: 892 },
    { title: "Mountain Vista", artist: "Maya S.", likes: 567 },
    { title: "Street Portrait", artist: "Carlos M.", likes: 723 },
    { title: "Macro Flower", artist: "Lisa K.", likes: 445 },
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="relative mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-gradient-vibrant text-background">
                <Camera className="h-4 w-4 mr-2" />
                Photography
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Capture Life's
                <span className="block bg-gradient-vibrant bg-clip-text text-transparent">
                  Moments
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                From the first camera obscura to modern digital sensors, explore the art 
                of freezing time and telling stories through light and composition.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero">Start Shooting</Button>
                <Button variant="outline">Learn Techniques</Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-vibrant/20 rounded-lg flex items-center justify-center">
                <Camera className="h-32 w-32 text-muted-foreground" />
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
                  The Evolution of Photography
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Camera Obscura</h3>
                    <p className="text-muted-foreground">
                      Photography began in the 11th century with camera obscura principles. 
                      Early experiments by Alhazen laid groundwork for capturing light, 
                      leading to the first permanent photographs in the 1820s.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Film Revolution</h3>
                    <p className="text-muted-foreground">
                      George Eastman's Kodak camera in 1888 made photography accessible 
                      to everyone with "You press the button, we do the rest." This 
                      democratized image-making and started visual storytelling culture.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Color & Motion</h3>
                    <p className="text-muted-foreground">
                      The 20th century brought color photography, 35mm film, and instant 
                      cameras. Masters like Ansel Adams and Henri Cartier-Bresson established 
                      photography as fine art and documentary medium.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Digital Age</h3>
                    <p className="text-muted-foreground">
                      Digital photography revolutionized the medium with instant review, 
                      unlimited shots, and editing possibilities. Smartphones made everyone 
                      a photographer, creating new forms of visual communication.
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
                  Photography Project Ideas
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
                <div className="mt-8 p-6 bg-gradient-vibrant/10 rounded-lg border border-primary/20">
                  <h3 className="text-lg font-semibold mb-3">Photography Basics</h3>
                  <p className="text-muted-foreground">
                    Master the exposure triangle: aperture, shutter speed, and ISO. 
                    Focus on composition using the rule of thirds, leading lines, and framing. 
                    Remember: the best camera is the one you have with you!
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="gallery" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((photo) => (
                <Card key={photo.title} className="group overflow-hidden hover:shadow-creative transition-all duration-300">
                  <div className="aspect-square bg-gradient-vibrant/20 relative overflow-hidden">
                    <Image className="absolute inset-0 m-auto h-12 w-12 text-muted-foreground" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-1">{photo.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">by {photo.artist}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <span>{photo.likes}</span>
                      </div>
                      <Button variant="ghost" size="sm">View</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center">
              <Button variant="outline" className="px-8">
                Load More Photos
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        {/* Community Section */}
        <Card className="mt-16">
          <CardContent className="p-8 text-center">
            <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h3 className="text-2xl font-bold mb-4">Join the Photography Community</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Connect with 6,000+ photographers worldwide. Share your shots, get technical advice, 
              and learn from professional photographers in our vibrant community.
            </p>
            <Button variant="hero">Join Community</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PhotographyPage;