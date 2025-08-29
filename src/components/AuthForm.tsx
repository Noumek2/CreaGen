import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { Loader2, Palette, Brush, Camera } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const AuthForm = () => {
  const { signUp, signIn } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await signUp(formData.email, formData.password, formData.fullName);

    if (error) {
      toast({
        title: "Sign up failed",
        description: error.message,
        variant: "destructive"
      });
    } else {
      toast({
        title: "Success!",
        description: "Please check your email to confirm your account."
      });
    }

    setLoading(false);
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await signIn(formData.email, formData.password);

    if (error) {
      toast({
        title: "Sign in failed",
        description: error.message,
        variant: "destructive"
      });
    } else {
      navigate('/');
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-creative-purple opacity-20 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-creative-pink opacity-20 rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 left-1/4 w-60 h-60 bg-creative-blue opacity-15 rounded-full animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-creative-orange opacity-15 rounded-full animate-bounce animation-delay-2000"></div>
      </div>

      {/* Floating creative icons */}
      <div className="absolute top-20 left-20 animate-float">
        <Palette className="w-8 h-8 text-creative-purple opacity-60" />
      </div>
      <div className="absolute top-40 right-32 animate-float animation-delay-1000">
        <Brush className="w-6 h-6 text-creative-pink opacity-60" />
      </div>
      <div className="absolute bottom-32 left-32 animate-float animation-delay-2000">
        <Camera className="w-7 h-7 text-creative-blue opacity-60" />
      </div>

      <Card className="w-full max-w-md backdrop-blur-sm bg-card/80 border-border/50 shadow-creative animate-fade-in">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-3xl font-bold bg-gradient-creative bg-clip-text text-transparent">
            CreativeHub
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Join the creative community
          </CardDescription>
        </CardHeader>

        <Tabs defaultValue="signin" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="signin" className="transition-all">Sign In</TabsTrigger>
            <TabsTrigger value="signup" className="transition-all">Sign Up</TabsTrigger>
          </TabsList>

          <TabsContent value="signin">
            <form onSubmit={handleSignIn}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="signin-email">Email</Label>
                  <Input
                    id="signin-email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="transition-all hover:border-primary/50 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signin-password">Password</Label>
                  <Input
                    id="signin-password"
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className="transition-all hover:border-primary/50 focus:border-primary"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  type="submit" 
                  className="w-full creative-hover" 
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Signing in...
                    </>
                  ) : (
                    'Sign In'
                  )}
                </Button>
              </CardFooter>
            </form>
          </TabsContent>

          <TabsContent value="signup">
            <form onSubmit={handleSignUp}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="signup-name">Full Name</Label>
                  <Input
                    id="signup-name"
                    name="fullName"
                    type="text"
                    placeholder="Your creative name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="transition-all hover:border-primary/50 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-email">Email</Label>
                  <Input
                    id="signup-email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="transition-all hover:border-primary/50 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-password">Password</Label>
                  <Input
                    id="signup-password"
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className="transition-all hover:border-primary/50 focus:border-primary"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  type="submit" 
                  variant="secondary" 
                  className="w-full creative-hover" 
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Creating account...
                    </>
                  ) : (
                    'Create Account'
                  )}
                </Button>
              </CardFooter>
            </form>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};