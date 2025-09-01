import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X, Palette } from "lucide-react";
import { useTheme } from "next-themes";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/contact", label: "Contact" },
  ];

  const creativeFields = [
    { path: "/painting", label: "Painting & Arts" },
    { path: "/culinary", label: "Culinary Arts" },
    { path: "/drawing", label: "Drawing" },
    { path: "/photography", label: "Photography" },
    { path: "/music", label: "Music" },
    { path: "/crafts", label: "Crafts & DIY" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="p-2 rounded-lg bg-gradient-creative">
              <Palette className="h-6 w-6 text-background" />
            </div>
            <span className="bg-gradient-creative bg-clip-text text-transparent">
              CreaGen
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Creative Fields Dropdown */}
            <div className="relative group">
              <button className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Explore Fields
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-2">
                  {creativeFields.map((field) => (
                    <Link
                      key={field.path}
                      to={field.path}
                      className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-accent rounded-md transition-colors"
                    >
                      {field.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="h-8 w-8"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden h-8 w-8"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-2 py-2 text-sm font-medium rounded-md transition-colors ${
                    location.pathname === item.path
                      ? "text-primary bg-accent"
                      : "text-muted-foreground hover:text-primary hover:bg-accent"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              <div className="px-2 py-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Creative Fields
              </div>
              {creativeFields.map((field) => (
                <Link
                  key={field.path}
                  to={field.path}
                  className="px-2 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-accent rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {field.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;