import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Music, Clock, Users, Star, BookOpen, Lightbulb, Headphones } from "lucide-react";

const MusicPage = () => {
  const techniques = [
    { name: "Basic Music Theory", difficulty: "Beginner", time: "1 hour" },
    { name: "Digital Audio Workstation", difficulty: "Intermediate", time: "2-3 hours" },
    { name: "Sound Design", difficulty: "Advanced", time: "3-5 hours" },
    { name: "Music Mixing & Mastering", difficulty: "Advanced", time: "4-6 hours" },
  ];

  const projectIdeas = [
    "Create your first beat in a DAW",
    "Record and layer vocal harmonies",
    "Compose a 30-second jingle",
    "Remix a popular song",
    "Design ambient soundscapes",
    "Write lyrics for original melody",
  ];

  const galleryImages = [
    { title: "Electronic Beat", artist: "DJ Nova", likes: 1234 },
    { title: "Acoustic Ballad", artist: "Sarah M.", likes: 876 },
    { title: "Hip-Hop Track", artist: "MC Flow", likes: 1567 },
    { title: "Ambient Piece", artist: "Echo Lab", likes: 654 },
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="relative mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-gradient-creative text-background">
                <Music className="h-4 w-4 mr-2" />
                Music & Audio
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Create Musical
                <span className="block bg-gradient-creative bg-clip-text text-transparent">
                  Masterpieces
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                From ancient rhythms to digital beats, explore the universal language 
                of music and discover how sound can move hearts and change lives.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero">Start Creating</Button>
                <Button variant="outline">Listen & Learn</Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-creative/20 rounded-lg flex items-center justify-center">
                <Music className="h-32 w-32 text-muted-foreground" />
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
                  The History of Music
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Prehistoric Rhythms</h3>
                    <p className="text-muted-foreground">
                      Music began 40,000 years ago with bone flutes and vocal chants. 
                      Early humans used rhythm and melody for rituals, communication, 
                      and storytelling, establishing music as fundamental to human culture.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Classical Foundations</h3>
                    <p className="text-muted-foreground">
                      Ancient civilizations developed musical notation, scales, and instruments. 
                      The Classical period (1750-1820) with composers like Mozart and Beethoven 
                      established harmonic structures still used today.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Popular Revolution</h3>
                    <p className="text-muted-foreground">
                      The 20th century brought recording technology, radio, and diverse genres 
                      like jazz, blues, rock, and hip-hop. Music became a global language 
                      transcending cultural boundaries.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Digital Era</h3>
                    <p className="text-muted-foreground">
                      Digital technology democratized music creation with affordable software 
                      and home studios. Streaming platforms and social media created new 
                      ways to discover, create, and share music globally.
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
                  Music Project Ideas
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
                  <h3 className="text-lg font-semibold mb-3">Music Creation Tips</h3>
                  <p className="text-muted-foreground">
                    Start with simple melodies and build complexity gradually. Learn basic 
                    chord progressions and experiment with different rhythms. Most importantly, 
                    let your emotions guide the music - authenticity resonates with listeners!
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="gallery" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((track) => (
                <Card key={track.title} className="group overflow-hidden hover:shadow-creative transition-all duration-300">
                  <div className="aspect-square bg-gradient-creative/20 relative overflow-hidden">
                    <Headphones className="absolute inset-0 m-auto h-12 w-12 text-muted-foreground" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-1">{track.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">by {track.artist}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <span>{track.likes}</span>
                      </div>
                      <Button variant="ghost" size="sm">Play</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center">
              <Button variant="outline" className="px-8">
                Load More Tracks
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        {/* Community Section */}
        <Card className="mt-16">
          <CardContent className="p-8 text-center">
            <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h3 className="text-2xl font-bold mb-4">Join the Music Community</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Connect with 4,000+ musicians and producers worldwide. Share your tracks, 
              collaborate on projects, and learn from experienced artists in our creative community.
            </p>
            <Button variant="hero">Join Community</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MusicPage;