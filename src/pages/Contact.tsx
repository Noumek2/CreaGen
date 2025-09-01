import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Facebook, Twitter, Instagram, Music, Send } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: "https://wa.me/1234567890",
      color: "text-green-500",
      description: "Chat with us directly"
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://facebook.com/creagen",
      color: "text-blue-600",
      description: "Follow our community"
    },
    {
      name: "X (Twitter)",
      icon: Twitter,
      url: "https://twitter.com/creagen",
      color: "text-gray-900 dark:text-white",
      description: "Latest updates & tips"
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/creagen",
      color: "text-pink-500",
      description: "Visual inspiration"
    },
    {
      name: "TikTok",
      icon: Music,
      url: "https://tiktok.com/@creagen",
      color: "text-black dark:text-white",
      description: "Creative tutorials"
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Let's Connect &
            <span className="block bg-gradient-creative bg-clip-text text-transparent">
              Create Together
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join our global community of creators. Follow us on social media for daily inspiration,
            tutorials, and connect with fellow artists worldwide.
          </p>
        </div>

        {/* Social Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {socialLinks.map((platform) => (
            <Card key={platform.name} className="group hover:shadow-creative transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className={`inline-flex p-4 rounded-full bg-background shadow-md mb-4 ${platform.color}`}>
                  <platform.icon className="h-8 w-8" />
                </div>
                <CardTitle className="mb-2">{platform.name}</CardTitle>
                <p className="text-muted-foreground mb-4">{platform.description}</p>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  onClick={() => window.open(platform.url, '_blank')}
                >
                  <Send className="h-4 w-4 mr-2" />
                  Connect
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Form */}
        <Card className="max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl mb-2">Get in Touch</CardTitle>
            <p className="text-muted-foreground">
              Have a question or want to collaborate? We'd love to hear from you!
            </p>
          </CardHeader>
          <CardContent className="p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Creative Field</label>
                <select className="w-full px-3 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>Select your field</option>
                  <option>Painting & Arts</option>
                  <option>Culinary Arts</option>
                  <option>Drawing & Sketching</option>
                  <option>Photography</option>
                  <option>Music & Audio</option>
                  <option>Crafts & DIY</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-3 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Tell us about your creative journey or ask us anything..."
                ></textarea>
              </div>
              
              <Button variant="hero" className="w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Community Stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50K+</div>
              <div className="text-muted-foreground">Active Creators</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">200+</div>
              <div className="text-muted-foreground">Countries</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">1M+</div>
              <div className="text-muted-foreground">Creations Shared</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Community Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;