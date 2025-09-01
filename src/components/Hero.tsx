import { Button } from "@/components/ui/button";
import { useAuth } from '@/hooks/useAuth';
import { Link } from 'react-router-dom';
import { LogOut, User, Sparkles, Palette, ChefHat, PenTool } from "lucide-react";
import heroImage from "@/assets/hero-creativity.jpg";

export const Hero = () => {
  const { user, signOut, loading } = useAuth();

  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Auth Navigation */}
      <div className="absolute top-6 right-6 z-20">
        {user ? (
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-foreground/80">
              <User className="w-4 h-4" />
              <span className="text-sm">{user.email}</span>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={signOut}
              className="bg-background/20 border-border/50 hover:bg-background/40"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>
        ) : !loading && (
          <Link to="/auth">
            <Button variant="outline" className="bg-background/20 border-border/50 hover:bg-background/40">
              Sign In
            </Button>
          </Link>
        )}
      </div>

      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-creative opacity-80" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-screen text-center">
        <div className="flex items-center gap-2 mb-6 animate-fade-in">
          <Sparkles className="h-8 w-8 text-creative-pink" />
          <span className="text-xl font-medium text-creative-pink">CreaGen</span>
        </div>
        
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-6 leading-tight">
            Welcome to
            <span className="block bg-gradient-creative bg-clip-text text-transparent">
              CreaGen
            </span>
          </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl leading-relaxed">
          Join thousands of creators exploring endless possibilities in cooking, painting, drawing, and beyond. 
          Your artistic journey starts here.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Button variant="hero" size="lg" className="text-lg px-8 py-6">
            Start Creating
            <Palette className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-creative-pink text-creative-pink hover:bg-creative-pink hover:text-background">
            Explore Gallery
            <Sparkles className="ml-2 h-5 w-5" />
          </Button>
        </div>
        
        {/* Creative Icons */}
        <div className="flex gap-8 items-center justify-center opacity-60">
          <div className="p-3 rounded-full bg-creative-purple/20 creative-hover">
            <Palette className="h-6 w-6 text-creative-purple" />
          </div>
          <div className="p-3 rounded-full bg-creative-orange/20 creative-hover">
            <ChefHat className="h-6 w-6 text-creative-orange" />
          </div>
          <div className="p-3 rounded-full bg-creative-blue/20 creative-hover">
            <PenTool className="h-6 w-6 text-creative-blue" />
          </div>
        </div>
      </div>
    </section>
  );
};