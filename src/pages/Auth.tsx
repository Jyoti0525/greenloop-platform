
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CustomButton } from "@/components/ui/CustomButton";
import { Leaf } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Auth = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  // Login form state
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  // Register form state
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // For demo purposes, allow any login
      localStorage.setItem("jaivak_user", JSON.stringify({ 
        name: "Demo User", 
        email: loginData.email,
        role: "user",
        credits: 120,
        impact: { waste: 45, co2: 12 }
      }));
      
      toast({
        title: "Login successful",
        description: "Welcome back to JaiVaK!",
      });
      
      navigate("/profile");
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Login failed",
        description: "Please check your credentials and try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Basic validation
    if (registerData.password !== registerData.confirmPassword) {
      toast({
        variant: "destructive",
        title: "Passwords don't match",
        description: "Please make sure your passwords match.",
      });
      setIsLoading(false);
      return;
    }

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // For demo purposes, create user directly
      localStorage.setItem("jaivak_user", JSON.stringify({ 
        name: registerData.name, 
        email: registerData.email,
        role: "user",
        credits: 0,
        impact: { waste: 0, co2: 0 }
      }));
      
      toast({
        title: "Registration successful",
        description: "Welcome to JaiVaK! Your account has been created.",
      });
      
      navigate("/profile");
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Registration failed",
        description: "An error occurred during registration. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-16 px-6 bg-slate-50 dark:bg-slate-900">
        <Card className="w-full max-w-md shadow-lg">
          <CardHeader className="space-y-1 flex flex-col items-center">
            <div className="mb-2 p-2 bg-jaivak-50 dark:bg-jaivak-900/20 rounded-full">
              <Leaf className="h-8 w-8 text-jaivak-500" />
            </div>
            <CardTitle className="text-2xl font-bold text-center">Welcome to JaiVaK</CardTitle>
            <CardDescription className="text-center">
              Join the green revolution today
            </CardDescription>
          </CardHeader>
          
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>
            
            <TabsContent value="login">
              <form onSubmit={handleLogin}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      placeholder="your@email.com" 
                      required 
                      value={loginData.email}
                      onChange={handleLoginChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Password</Label>
                      <a href="#" className="text-xs text-jaivak-500 hover:underline">
                        Forgot password?
                      </a>
                    </div>
                    <Input 
                      id="password" 
                      name="password" 
                      type="password" 
                      required 
                      value={loginData.password}
                      onChange={handleLoginChange}
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <CustomButton 
                    type="submit" 
                    variant="gradient" 
                    className="w-full" 
                    disabled={isLoading}
                  >
                    {isLoading ? "Logging in..." : "Login"}
                  </CustomButton>
                </CardFooter>
              </form>
            </TabsContent>
            
            <TabsContent value="register">
              <form onSubmit={handleRegister}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      placeholder="John Doe" 
                      required 
                      value={registerData.name}
                      onChange={handleRegisterChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-email">Email</Label>
                    <Input 
                      id="register-email" 
                      name="email" 
                      type="email" 
                      placeholder="your@email.com" 
                      required 
                      value={registerData.email}
                      onChange={handleRegisterChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-password">Password</Label>
                    <Input 
                      id="register-password" 
                      name="password" 
                      type="password" 
                      required 
                      value={registerData.password}
                      onChange={handleRegisterChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm Password</Label>
                    <Input 
                      id="confirm-password" 
                      name="confirmPassword" 
                      type="password" 
                      required 
                      value={registerData.confirmPassword}
                      onChange={handleRegisterChange}
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <CustomButton 
                    type="submit" 
                    variant="gradient" 
                    className="w-full" 
                    disabled={isLoading}
                  >
                    {isLoading ? "Creating account..." : "Create Account"}
                  </CustomButton>
                </CardFooter>
              </form>
            </TabsContent>
          </Tabs>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Auth;
