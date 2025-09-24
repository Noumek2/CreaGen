import { Button } from "@/components/ui/button";
import { useAuth } from '@/hooks/useAuth';
import { useTheme } from '@/components/ThemeProvider';
import { Link } from 'react-router-dom';
import { LogOut, User, Sparkles, Palette, ChefHat, PenTool, Moon, Sun } from "lucide-react";
import heroImage from "@/assets/hero-creativity.jpg";

export const Hero = () => {
  const { user, signOut, loading } = useAuth();
  const { theme, setTheme } = useTheme();

  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Theme Toggle and Auth Navigation */}
      <div className="absolute top-6 right-6 z-20 flex items-center gap-4">
        {/* Theme Toggle */}
        <Button
          variant="outline"
          size="sm"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="bg-black/20 border-white/30 text-white hover:bg-black/40"
        >
          {theme === "light" ? (
            <Moon className="h-4 w-4" />
          ) : (
            <Sun className="h-4 w-4" />
          )}
        </Button>
        
        {user ? (
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-white/80">
              <User className="w-4 h-4" />
              <span className="text-sm">{user.email}</span>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={signOut}
              className="bg-black/20 border-white/30 text-white hover:bg-black/40"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>
        ) : !loading && (
          <Link to="/auth">
            <Button variant="outline" className="bg-black/20 border-white/30 text-white hover:bg-black/40">
              Sign In
            </Button>
          </Link>
        )}
      </div>

      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-creative opacity-60" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-screen text-center">
        <div className="flex items-center gap-2 mb-6 animate-fade-in">
          <Sparkles className="h-8 w-8 text-white" />
          <span className="text-xl font-medium text-white">CreaGen</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-6 leading-tight text-white">
          Welcome to
          <span className="block text-white">
            CreaGen
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl leading-relaxed">
          Join thousands of creators exploring endless possibilities in cooking, painting, drawing, and beyond. 
          Your artistic journey starts here.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Button variant="hero" size="lg" className="text-lg px-8 py-6 bg-white/20 border-white/30 text-white hover:bg-black/40">
            Start Creating
            <Palette className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-white/20 border-white/30 text-white hover:bg-black/40">
            Explore Gallery
            <Sparkles className="ml-2 h-5 w-5" />
          </Button>
        </div>
        
        {/* Creative Icons */}
        <div className="flex gap-8 items-center justify-center opacity-80">
          <div className="p-3 rounded-full bg-white/20 hover:bg-black/40 transition-colors duration-300 cursor-pointer">
            <Palette className="h-6 w-6 text-white" />
          </div>
          <div className="p-3 rounded-full bg-white/20 hover:bg-black/40 transition-colors duration-300 cursor-pointer">
            <ChefHat className="h-6 w-6 text-white" />
          </div>
          <div className="p-3 rounded-full bg-white/20 hover:bg-black/40 transition-colors duration-300 cursor-pointer">
            <PenTool className="h-6 w-6 text-white" />
          </div>
        </div>
      </div>
    </section>
  );
};