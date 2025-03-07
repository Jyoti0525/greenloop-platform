
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { CustomButton } from "@/components/ui/CustomButton";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts";
import { 
  Leaf, Package, CreditCard, History, LogOut, UserCircle, Award, 
  Trophy, TreeDeciduous, Target, Users, BadgeCheck, Star, Globe, 
  Recycle, Sprout, Share2
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { AchievementBadge, Achievement } from "@/components/gamification/AchievementBadge";
import { ProgressPath, LevelStep } from "@/components/gamification/ProgressPath";
import { ChallengeCard, Challenge } from "@/components/gamification/ChallengeCard";
import { LeaderboardCard, LeaderboardUser } from "@/components/gamification/LeaderboardCard";
import { AchievementPopup } from "@/components/gamification/AchievementPopup";

interface User {
  name: string;
  email: string;
  role: string;
  credits: number;
  level: number;
  impact: { waste: number; co2: number };
}

const Profile = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [newAchievement, setNewAchievement] = useState<Achievement | null>(null);
  
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    // Check if user is logged in
    const userString = localStorage.getItem("jaivak_user");
    
    if (userString) {
      try {
        // Add level to user data
        const userData = JSON.parse(userString);
        userData.level = userData.level || 2; // Default level if not set
        setUser(userData);
        
        // Demo: Show achievement popup after 2 seconds
        setTimeout(() => {
          setNewAchievement({
            id: "eco-warrior",
            name: "Eco Warrior",
            description: "Reached 250 Green Impact Credits through sustainable actions",
            icon: <Leaf className="h-6 w-6" />,
            unlocked: true,
            date: "Today"
          });
        }, 2000);
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
    
    setLoading(false);
  }, []);

  useEffect(() => {
    // Redirect to login if not authenticated
    if (!loading && !user) {
      toast({
        variant: "destructive",
        title: "Authentication required",
        description: "Please log in to access your profile.",
      });
      navigate("/auth");
    }
  }, [user, loading, navigate, toast]);

  const handleLogout = () => {
    localStorage.removeItem("jaivak_user");
    toast({
      title: "Logged out successfully",
      description: "You have been logged out from JaiVaK.",
    });
    navigate("/");
  };

  const impactData = [
    { month: "Jan", waste: 5, co2: 1.2 },
    { month: "Feb", waste: 8, co2: 2.3 },
    { month: "Mar", waste: 12, co2: 3.5 },
    { month: "Apr", waste: 15, co2: 4.1 },
    { month: "May", waste: 10, co2: 2.8 },
    { month: "Jun", waste: 18, co2: 5.2 },
  ];
  
  // User achievements
  const achievements: Achievement[] = [
    {
      id: "green-starter",
      name: "Green Starter",
      description: "Complete your first waste collection",
      icon: <Sprout className="h-5 w-5" />,
      unlocked: true,
      date: "Apr 15, 2023"
    },
    {
      id: "eco-warrior",
      name: "Eco Warrior",
      description: "Reached 250 Green Impact Credits",
      icon: <Leaf className="h-5 w-5" />,
      unlocked: true,
      date: "Today"
    },
    {
      id: "recycling-master",
      name: "Recycling Master",
      description: "Recycled over 50kg of green waste",
      icon: <Recycle className="h-5 w-5" />,
      unlocked: true,
      date: "May 22, 2023"
    },
    {
      id: "community-helper",
      name: "Community Helper",
      description: "Participated in 3 community events",
      icon: <Users className="h-5 w-5" />,
      unlocked: true,
      date: "Jun 10, 2023"
    },
    {
      id: "global-impact",
      name: "Global Impact",
      description: "Reduced CO2 emissions by over 10kg",
      icon: <Globe className="h-5 w-5" />,
      unlocked: false,
      progress: 8,
      maxProgress: 10
    },
    {
      id: "green-shopper",
      name: "Green Shopper",
      description: "Purchase 5 sustainable products",
      icon: <Package className="h-5 w-5" />,
      unlocked: false,
      progress: 3,
      maxProgress: 5
    },
    {
      id: "tree-planter",
      name: "Tree Planter",
      description: "Contributed to planting 5 trees",
      icon: <TreeDeciduous className="h-5 w-5" />,
      unlocked: false,
      progress: 2,
      maxProgress: 5
    },
    {
      id: "sustainability-influencer",
      name: "Sustainability Influencer",
      description: "Share 10 achievements on social media",
      icon: <Share2 className="h-5 w-5" />,
      unlocked: false,
      progress: 0,
      maxProgress: 10
    }
  ];
  
  // Sustainability journey steps
  const journeySteps: LevelStep[] = [
    {
      level: 1,
      name: "Beginner",
      requiredPoints: 0,
      icon: <Sprout className="h-5 w-5" />
    },
    {
      level: 2,
      name: "Green Enthusiast",
      requiredPoints: 100,
      icon: <Leaf className="h-5 w-5" />
    },
    {
      level: 3,
      name: "Eco Advocate",
      requiredPoints: 300,
      icon: <Recycle className="h-5 w-5" />
    },
    {
      level: 4,
      name: "Sustainability Hero",
      requiredPoints: 600,
      icon: <TreeDeciduous className="h-5 w-5" />
    },
    {
      level: 5,
      name: "Earth Champion",
      requiredPoints: 1000,
      icon: <Globe className="h-5 w-5" />
    }
  ];
  
  // Active challenges
  const activeChallenges: Challenge[] = [
    {
      id: "weekly-waste",
      title: "Weekly Waste Reduction",
      description: "Collect at least 5kg of green waste this week",
      type: "individual",
      timeRemaining: "3 days",
      points: 30,
      progress: 3,
      maxProgress: 5,
      status: "active",
      tags: ["collection", "weekly"]
    },
    {
      id: "community-cleanup",
      title: "Community Cleanup",
      description: "Join the community cleanup event at Central Park",
      type: "community",
      timeRemaining: "5 days",
      points: 50,
      participants: 28,
      status: "active",
      tags: ["event", "cleanup"]
    },
    {
      id: "sustainable-gardening",
      title: "Sustainable Gardening",
      description: "Use your own compost in your garden and share photos",
      type: "individual",
      timeRemaining: "10 days",
      points: 25,
      progress: 0,
      maxProgress: 1,
      status: "active",
      tags: ["gardening", "compost"]
    }
  ];
  
  // Leaderboard data
  const leaderboardUsers: LeaderboardUser[] = [
    { id: "user1", name: "EcoWarrior221", points: 572, rank: 1, change: 0 },
    { id: "user2", name: "GreenThumb", points: 498, rank: 2, change: 1 },
    { id: "user3", name: "SustainableSam", points: 463, rank: 3, change: -1 },
    { id: "user4", name: "RecycleKing", points: 410, rank: 4, change: 0 },
    { id: "user5", name: "EarthDefender", points: 387, rank: 5, change: 2 },
    // Current user
    { id: "current", name: user?.name || "", points: 259, rank: 12, change: 3, isCurrentUser: true }
  ];

  // Sample order history
  const orderHistory = [
    { id: "ORD-2023-001", date: "2023-09-15", items: ["Organic Fertilizer (5kg)", "Biodegradable Planter"], total: 45.99, status: "Delivered" },
    { id: "ORD-2023-002", date: "2023-10-02", items: ["Composted Soil Mix (10L)", "Garden Stakes (12pk)"], total: 37.50, status: "Shipped" },
    { id: "ORD-2023-003", date: "2023-11-18", items: ["Leaf Mulch (20L)"], total: 22.99, status: "Processing" },
  ];

  // Sample waste collection history
  const collectionHistory = [
    { id: "COL-2023-001", date: "2023-09-10", type: "Garden Waste", weight: 12, credits: 36, status: "Completed" },
    { id: "COL-2023-002", date: "2023-10-05", type: "Hedge Trimmings", weight: 8, credits: 24, status: "Completed" },
    { id: "COL-2023-003", date: "2023-11-12", type: "Fallen Leaves", weight: 15, credits: 45, status: "Scheduled" },
  ];
  
  // Share achievement handler
  const handleShareAchievement = (achievement: Achievement) => {
    toast({
      title: "Achievement Shared!",
      description: `You've shared your "${achievement.name}" achievement with your network.`,
    });
  };
  
  // Join challenge handler
  const handleJoinChallenge = (challenge: Challenge) => {
    toast({
      title: "Challenge Joined!",
      description: `You've joined the "${challenge.title}" challenge.`,
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">Loading profile...</div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect via useEffect
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 px-6 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-start gap-8">
            {/* Sidebar */}
            <div className="md:w-1/4">
              <Card className="sticky top-24">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-r from-jaivak-500 to-ocean-500 flex items-center justify-center text-white text-xl font-bold">
                      {user.name.charAt(0)}
                    </div>
                    <div>
                      <CardTitle>{user.name}</CardTitle>
                      <CardDescription>{user.email}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="py-2 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Leaf className="h-5 w-5 text-jaivak-500" />
                        <span>Green Credits</span>
                      </div>
                      <span className="font-bold text-jaivak-600">{user.credits}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Trophy className="h-5 w-5 text-ocean-500" />
                        <span>Level</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-bold text-ocean-600">{user.level}</span>
                        <span className="text-sm text-slate-500 ml-1">
                          ({journeySteps.find(step => step.level === user.level)?.name})
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Package className="h-5 w-5 text-ocean-500" />
                        <span>Total Orders</span>
                      </div>
                      <span className="font-bold text-ocean-600">3</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <BadgeCheck className="h-5 w-5 text-ocean-500" />
                        <span>Achievements</span>
                      </div>
                      <span className="font-bold text-ocean-600">
                        {achievements.filter(a => a.unlocked).length}/{achievements.length}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <div className="text-sm font-medium mb-2">Recent Achievements</div>
                    <div className="flex gap-2 mb-4">
                      {achievements
                        .filter(a => a.unlocked)
                        .slice(0, 3)
                        .map(achievement => (
                          <AchievementBadge key={achievement.id} achievement={achievement} size="sm" />
                        ))}
                    </div>
                  </div>
                  
                  <div className="mt-6 space-y-2">
                    <CustomButton 
                      variant="outline" 
                      className="w-full justify-start" 
                      onClick={handleLogout}
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      Log Out
                    </CustomButton>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="md:w-3/4">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-bold">My Profile</h1>
                <div className="bg-jaivak-100 dark:bg-jaivak-900/30 text-jaivak-800 dark:text-jaivak-300 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                  <Trophy className="mr-1 h-4 w-4" />
                  Level {user.level} • {journeySteps.find(step => step.level === user.level)?.name}
                </div>
              </div>
              
              {/* Sustainability Journey Progress */}
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Your Sustainability Journey</CardTitle>
                  <CardDescription>Track your progress and unlock new levels</CardDescription>
                </CardHeader>
                <CardContent>
                  <ProgressPath 
                    steps={journeySteps} 
                    currentPoints={user.credits} 
                    currentLevel={user.level} 
                  />
                </CardContent>
              </Card>
              
              <Tabs defaultValue="dashboard">
                <TabsList className="mb-6">
                  <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                  <TabsTrigger value="achievements">Achievements</TabsTrigger>
                  <TabsTrigger value="challenges">Challenges</TabsTrigger>
                  <TabsTrigger value="orders">Orders</TabsTrigger>
                  <TabsTrigger value="collections">Waste Collections</TabsTrigger>
                  <TabsTrigger value="account">Account Settings</TabsTrigger>
                </TabsList>
                
                {/* Dashboard Tab */}
                <TabsContent value="dashboard">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <Card>
                      <CardHeader>
                        <CardTitle>Environmental Impact</CardTitle>
                        <CardDescription>Your contribution to sustainability</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="h-64">
                          <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={impactData}>
                              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                              <XAxis dataKey="month" />
                              <YAxis />
                              <Tooltip />
                              <Bar dataKey="waste" name="Waste Recycled (kg)" fill="#4CAF50" radius={[4, 4, 0, 0]} />
                              <Bar dataKey="co2" name="CO2 Reduced (kg)" fill="#03A9F4" radius={[4, 4, 0, 0]} />
                            </BarChart>
                          </ResponsiveContainer>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>Green Impact Credits</CardTitle>
                        <CardDescription>Earn & redeem credits for eco-friendly actions</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="mb-6">
                          <div className="text-4xl font-bold text-gradient-primary mb-2">{user.credits}</div>
                          <p className="text-sm text-slate-600 dark:text-slate-400">Available credits</p>
                        </div>
                        
                        <div className="space-y-4">
                          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
                            <div className="flex justify-between items-center mb-2">
                              <div className="font-medium">Recent Activity</div>
                              <span className="text-xs text-slate-500">Points</span>
                            </div>
                            <div className="space-y-2">
                              <div className="flex justify-between items-center text-sm">
                                <div>Garden Waste Collection</div>
                                <div className="font-medium text-jaivak-600">+45</div>
                              </div>
                              <div className="flex justify-between items-center text-sm">
                                <div>Eco-Product Purchase</div>
                                <div className="font-medium text-jaivak-600">+15</div>
                              </div>
                              <div className="flex justify-between items-center text-sm">
                                <div>Redeemed for Discount</div>
                                <div className="font-medium text-destructive">-25</div>
                              </div>
                            </div>
                          </div>
                          
                          <CustomButton variant="outline" className="w-full">
                            <CreditCard className="mr-2 h-4 w-4" />
                            Redeem Credits
                          </CustomButton>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <motion.div 
                    ref={statsRef}
                    initial={{ opacity: 0, y: 20 }}
                    animate={statsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    <Card>
                      <CardHeader>
                        <CardTitle>Your Impact Summary</CardTitle>
                        <CardDescription>Total environmental contribution</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <motion.div 
                            whileHover={{ y: -5 }}
                            className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm"
                          >
                            <div className="text-2xl font-bold text-gradient-primary mb-1">{user.impact.waste} kg</div>
                            <p className="text-sm text-slate-500 dark:text-slate-400">Waste Recycled</p>
                          </motion.div>
                          <motion.div 
                            whileHover={{ y: -5 }}
                            className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm"
                          >
                            <div className="text-2xl font-bold text-gradient-primary mb-1">{user.impact.co2} kg</div>
                            <p className="text-sm text-slate-500 dark:text-slate-400">CO2 Emissions Reduced</p>
                          </motion.div>
                          <motion.div 
                            whileHover={{ y: -5 }}
                            className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm"
                          >
                            <div className="text-2xl font-bold text-gradient-primary mb-1">3</div>
                            <p className="text-sm text-slate-500 dark:text-slate-400">Eco-Products Purchased</p>
                          </motion.div>
                          <motion.div 
                            whileHover={{ y: -5 }}
                            className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm"
                          >
                            <div className="text-2xl font-bold text-gradient-primary mb-1">2</div>
                            <p className="text-sm text-slate-500 dark:text-slate-400">Trees Planted</p>
                          </motion.div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <LeaderboardCard 
                      title="Community Leaderboard"
                      description="Top contributors in Green Impact Credits"
                      users={leaderboardUsers}
                      currentUserRank={12}
                    />
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>Active Challenges</CardTitle>
                        <CardDescription>Earn credits by completing challenges</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {activeChallenges.slice(0, 2).map(challenge => (
                            <div key={challenge.id} className="bg-white dark:bg-slate-800 p-3 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700">
                              <div className="flex justify-between mb-1">
                                <div className="font-medium">{challenge.title}</div>
                                <div className="text-xs bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400 px-2 py-0.5 rounded-full">
                                  Active
                                </div>
                              </div>
                              <div className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                                {challenge.description}
                              </div>
                              {challenge.progress !== undefined && challenge.maxProgress && (
                                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5 mb-1">
                                  <div 
                                    className="bg-jaivak-500 h-1.5 rounded-full" 
                                    style={{ width: `${(challenge.progress / challenge.maxProgress) * 100}%` }}
                                  ></div>
                                </div>
                              )}
                              <div className="flex justify-between text-xs text-slate-500">
                                <span>{challenge.timeRemaining} remaining</span>
                                <span className="text-jaivak-600">{challenge.points} credits</span>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="mt-4">
                          <CustomButton variant="link" size="sm" className="mx-auto" onClick={() => document.querySelector('[data-value="challenges"]')?.click()}>
                            View all challenges
                          </CustomButton>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
                
                {/* Achievements Tab */}
                <TabsContent value="achievements">
                  <Card>
                    <CardHeader>
                      <CardTitle>Your Achievements</CardTitle>
                      <CardDescription>
                        Unlock badges by completing sustainable actions
                        <span className="ml-2 bg-jaivak-100 dark:bg-jaivak-900/30 text-jaivak-800 dark:text-jaivak-300 px-2 py-0.5 rounded-full text-xs">
                          {achievements.filter(a => a.unlocked).length}/{achievements.length} Unlocked
                        </span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                        {achievements.map(achievement => (
                          <motion.div 
                            key={achievement.id}
                            whileHover={{ y: -5 }}
                            className="flex flex-col items-center text-center"
                          >
                            <AchievementBadge achievement={achievement} size="lg" />
                            <h4 className="mt-2 font-medium text-sm">{achievement.name}</h4>
                            <p className="text-xs text-slate-500 mt-1">{achievement.description}</p>
                            
                            {achievement.unlocked && (
                              <CustomButton 
                                variant="link" 
                                size="sm" 
                                className="mt-1"
                                onClick={() => handleShareAchievement(achievement)}
                              >
                                <Share2 className="h-3 w-3 mr-1" /> Share
                              </CustomButton>
                            )}
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                {/* Challenges Tab */}
                <TabsContent value="challenges">
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-4">Active Challenges</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {activeChallenges.map(challenge => (
                        <ChallengeCard 
                          key={challenge.id}
                          challenge={challenge}
                          onJoin={() => handleJoinChallenge(challenge)}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Upcoming Challenges</CardTitle>
                      <CardDescription>New sustainability challenges coming soon</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700">
                          <div className="flex justify-between mb-1">
                            <div className="font-medium">Tree Planting Initiative</div>
                            <div className="text-xs bg-amber-100 text-amber-800 dark:bg-amber-900/20 dark:text-amber-400 px-2 py-0.5 rounded-full">
                              Coming Soon
                            </div>
                          </div>
                          <div className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                            Participate in our community tree planting event and earn bonus credits
                          </div>
                          <div className="flex justify-between text-xs text-slate-500">
                            <span>Starts in 2 weeks</span>
                            <span className="text-jaivak-600">75 credits</span>
                          </div>
                        </div>
                        
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700">
                          <div className="flex justify-between mb-1">
                            <div className="font-medium">Zero Waste Month</div>
                            <div className="text-xs bg-amber-100 text-amber-800 dark:bg-amber-900/20 dark:text-amber-400 px-2 py-0.5 rounded-full">
                              Coming Soon
                            </div>
                          </div>
                          <div className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                            Challenge yourself to produce zero waste for an entire month
                          </div>
                          <div className="flex justify-between text-xs text-slate-500">
                            <span>Starts next month</span>
                            <span className="text-jaivak-600">150 credits</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                {/* Orders Tab */}
                <TabsContent value="orders">
                  <Card>
                    <CardHeader>
                      <CardTitle>Order History</CardTitle>
                      <CardDescription>View your past orders and their status</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {orderHistory.map((order) => (
                          <div key={order.id} className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                              <div className="font-medium">{order.id}</div>
                              <div className="text-sm text-slate-500 dark:text-slate-400">{order.date}</div>
                            </div>
                            <div className="mb-3">
                              {order.items.map((item, index) => (
                                <div key={index} className="text-sm">{item}</div>
                              ))}
                            </div>
                            <div className="flex flex-col md:flex-row md:items-center justify-between">
                              <div className="text-sm">
                                <span className="font-medium">Total:</span> ${order.total.toFixed(2)}
                              </div>
                              <div className={`text-sm px-2 py-1 rounded-full ${
                                order.status === 'Delivered' 
                                  ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400' 
                                  : order.status === 'Shipped' 
                                  ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
                                  : 'bg-amber-100 text-amber-800 dark:bg-amber-900/20 dark:text-amber-400'
                              }`}>
                                {order.status}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                {/* Collections Tab */}
                <TabsContent value="collections">
                  <Card>
                    <CardHeader>
                      <CardTitle>Waste Collection History</CardTitle>
                      <CardDescription>Your green waste collection records</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {collectionHistory.map((collection) => (
                          <div key={collection.id} className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                              <div className="font-medium">{collection.id}</div>
                              <div className="text-sm text-slate-500 dark:text-slate-400">{collection.date}</div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-3">
                              <div className="text-sm">
                                <span className="font-medium">Type:</span> {collection.type}
                              </div>
                              <div className="text-sm">
                                <span className="font-medium">Weight:</span> {collection.weight} kg
                              </div>
                              <div className="text-sm">
                                <span className="font-medium">Credits Earned:</span> {collection.credits}
                              </div>
                            </div>
                            <div className="flex justify-between items-center">
                              <div className={`text-sm px-2 py-1 rounded-full ${
                                collection.status === 'Completed' 
                                  ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400' 
                                  : 'bg-amber-100 text-amber-800 dark:bg-amber-900/20 dark:text-amber-400'
                              }`}>
                                {collection.status}
                              </div>
                              <CustomButton variant="link" size="sm">
                                <History className="mr-1 h-3 w-3" />
                                View Details
                              </CustomButton>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                {/* Account Tab */}
                <TabsContent value="account">
                  <Card>
                    <CardHeader>
                      <CardTitle>Account Settings</CardTitle>
                      <CardDescription>Update your personal information</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Full Name</label>
                            <input 
                              type="text" 
                              defaultValue={user.name}
                              className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-md"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Email Address</label>
                            <input 
                              type="email" 
                              defaultValue={user.email}
                              className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-md"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Phone Number</label>
                            <input 
                              type="tel" 
                              placeholder="Enter phone number"
                              className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-md"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Address</label>
                            <input 
                              type="text" 
                              placeholder="Enter address"
                              className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-md"
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Change Password</label>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input 
                              type="password" 
                              placeholder="Current password"
                              className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-md"
                            />
                            <input 
                              type="password" 
                              placeholder="New password"
                              className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-md"
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Notification Preferences</label>
                          <div className="flex items-center space-x-2">
                            <input type="checkbox" id="email-notifications" defaultChecked />
                            <label htmlFor="email-notifications" className="text-sm">Email notifications</label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input type="checkbox" id="sms-notifications" />
                            <label htmlFor="sms-notifications" className="text-sm">SMS notifications</label>
                          </div>
                        </div>
                        
                        <div className="flex justify-end">
                          <CustomButton variant="gradient">
                            <UserCircle className="mr-2 h-4 w-4" />
                            Update Profile
                          </CustomButton>
                        </div>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      
      {/* Achievement popup */}
      {newAchievement && (
        <AchievementPopup 
          achievement={newAchievement}
          onClose={() => setNewAchievement(null)}
        />
      )}
    </div>
  );
};

export default Profile;

