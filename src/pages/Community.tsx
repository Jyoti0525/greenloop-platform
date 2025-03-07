
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { CustomButton } from "@/components/ui/CustomButton";
import { Leaf, Users, Trophy, BookOpen, Calendar, MessageSquare, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Mock data for community events
const communityEvents = [
  {
    id: 1,
    title: "Community Clean-up Day",
    date: "June 15, 2023",
    location: "Central Park",
    description: "Join us for a day of community service as we clean up our local park and collect green waste for recycling.",
    attendees: 34
  },
  {
    id: 2,
    title: "Sustainable Gardening Workshop",
    date: "June 22, 2023",
    location: "JaiVaK Community Center",
    description: "Learn sustainable gardening techniques using our organic compost and eco-friendly practices.",
    attendees: 28
  },
  {
    id: 3,
    title: "Green Waste Collection Drive",
    date: "July 5, 2023",
    location: "Multiple Locations",
    description: "Special collection drive for green waste across the city. Schedule your pickup or drop off at designated points.",
    attendees: 56
  }
];

// Mock data for forum posts
const forumPosts = [
  {
    id: 1,
    title: "Best practices for composting kitchen waste?",
    author: "GreenThumb",
    date: "May 28, 2023",
    replies: 12,
    views: 145
  },
  {
    id: 2,
    title: "How to maximize benefits from organic fertilizers",
    author: "OrganicFarmer",
    date: "May 30, 2023",
    replies: 8,
    views: 97
  },
  {
    id: 3,
    title: "Starting a community garden - Looking for advice",
    author: "CommunityBuilder",
    date: "June 2, 2023",
    replies: 15,
    views: 203
  },
  {
    id: 4,
    title: "Urban composting solutions for small spaces",
    author: "CityDweller",
    date: "June 5, 2023",
    replies: 7,
    views: 86
  }
];

const Community = () => {
  const [impactRef, impactInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const [eventsRef, eventsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-28 pb-16 bg-gradient-to-b from-green-50 to-white dark:from-slate-900 dark:to-slate-900">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
                Join Our Green Community
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                Connect with like-minded individuals, track your environmental impact, and participate in community initiatives for a greener future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CustomButton variant="gradient" size="lg" className="flex items-center gap-2">
                  Join Community <Users className="h-5 w-5" />
                </CustomButton>
                <CustomButton variant="outline" size="lg" className="flex items-center gap-2">
                  Learn More <BookOpen className="h-5 w-5" />
                </CustomButton>
              </div>
            </div>
          </div>
        </section>

        {/* Green Impact Section */}
        <motion.section 
          ref={impactRef}
          initial={{ opacity: 0 }}
          animate={impactInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="py-16 bg-white dark:bg-slate-900"
        >
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">
                Green Impact Credits
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Track your environmental contribution and earn rewards through our Green Impact Credits system. Every action counts towards a greener planet.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-gradient-to-br from-jaivak-500/10 to-ocean-500/10 border-none">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-jaivak-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Leaf className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle>Waste Collection</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-3xl font-bold mb-2 text-jaivak-500">247 kg</div>
                  <p className="text-slate-600 dark:text-slate-400">
                    Total green waste contributed to our circular economy
                  </p>
                </CardContent>
                <CardFooter className="justify-center pt-0">
                  <div className="text-sm text-jaivak-500 font-medium">
                    + 124 Green Credits
                  </div>
                </CardFooter>
              </Card>
              
              <Card className="bg-gradient-to-br from-jaivak-500/10 to-ocean-500/10 border-none">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-jaivak-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trophy className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle>Product Purchases</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-3xl font-bold mb-2 text-jaivak-500">12 Items</div>
                  <p className="text-slate-600 dark:text-slate-400">
                    Sustainable products purchased from our marketplace
                  </p>
                </CardContent>
                <CardFooter className="justify-center pt-0">
                  <div className="text-sm text-jaivak-500 font-medium">
                    + 60 Green Credits
                  </div>
                </CardFooter>
              </Card>
              
              <Card className="bg-gradient-to-br from-jaivak-500/10 to-ocean-500/10 border-none">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-jaivak-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle>Community Participation</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-3xl font-bold mb-2 text-jaivak-500">5 Events</div>
                  <p className="text-slate-600 dark:text-slate-400">
                    Community events and workshops attended
                  </p>
                </CardContent>
                <CardFooter className="justify-center pt-0">
                  <div className="text-sm text-jaivak-500 font-medium">
                    + 75 Green Credits
                  </div>
                </CardFooter>
              </Card>
            </div>
            
            <div className="mt-12 text-center">
              <Card className="max-w-md mx-auto border-2 border-jaivak-500">
                <CardHeader>
                  <CardTitle className="text-jaivak-500">Total Impact</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-4xl font-bold mb-2 text-jaivak-500">259</div>
                  <p className="text-slate-600 dark:text-slate-400 font-medium">
                    Green Impact Credits
                  </p>
                  <div className="w-full bg-slate-200 rounded-full h-2.5 mt-4">
                    <div className="bg-jaivak-500 h-2.5 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                  <div className="text-sm text-slate-500 mt-2">41 more credits until Silver Level</div>
                </CardContent>
                <CardFooter className="justify-center">
                  <CustomButton variant="gradient" size="sm">
                    View Full Impact Report
                  </CustomButton>
                </CardFooter>
              </Card>
            </div>
          </div>
        </motion.section>

        {/* Events & Forum Section */}
        <motion.section 
          ref={eventsRef}
          initial={{ opacity: 0 }}
          animate={eventsInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="py-16 bg-slate-50 dark:bg-slate-800"
        >
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white">
              Community Hub
            </h2>
            
            <Tabs defaultValue="events" className="w-full max-w-5xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 mb-10">
                <TabsTrigger value="events" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Events & Workshops
                </TabsTrigger>
                <TabsTrigger value="forum" className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Community Forum
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="events">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {communityEvents.map((event) => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card className="h-full flex flex-col">
                        <CardHeader>
                          <CardTitle>{event.title}</CardTitle>
                          <CardDescription>
                            <div className="flex justify-between mt-2">
                              <span>{event.date}</span>
                              <span>{event.location}</span>
                            </div>
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <p className="text-slate-600 dark:text-slate-400 mb-4">
                            {event.description}
                          </p>
                          <div className="text-sm text-jaivak-500">
                            {event.attendees} people attending
                          </div>
                        </CardContent>
                        <CardFooter className="justify-between">
                          <div className="text-sm text-slate-500">
                            +15 Green Credits for attending
                          </div>
                          <CustomButton variant="gradient" size="sm">
                            Register
                          </CustomButton>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </div>
                
                <div className="text-center mt-10">
                  <CustomButton variant="outline" size="lg" className="mx-auto flex items-center gap-2">
                    View All Events <ArrowRight className="h-4 w-4" />
                  </CustomButton>
                </div>
              </TabsContent>
              
              <TabsContent value="forum">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Discussions</CardTitle>
                    <CardDescription>
                      Join conversations with our community of eco-enthusiasts
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {forumPosts.map((post) => (
                        <div 
                          key={post.id}
                          className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-jaivak-500 hover:shadow-sm transition cursor-pointer"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-medium text-slate-900 dark:text-white">
                              {post.title}
                            </h3>
                            <div className="text-xs bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 px-2 py-1 rounded-full">
                              Active
                            </div>
                          </div>
                          <div className="flex justify-between text-sm text-slate-500 dark:text-slate-400">
                            <span>By {post.author} • {post.date}</span>
                            <span>{post.replies} replies • {post.views} views</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <CustomButton variant="outline" size="sm">
                      Browse All Topics
                    </CustomButton>
                    <CustomButton variant="gradient" size="sm">
                      Start New Topic
                    </CustomButton>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </motion.section>

        {/* Educational Resources */}
        <section className="py-16 bg-white dark:bg-slate-900">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">
                Educational Resources
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Explore our collection of resources to learn more about sustainable practices, composting techniques, and the environmental benefits of our work.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="hover:shadow-md transition">
                <CardHeader>
                  <CardTitle>Composting Guide</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-400">
                    Learn the fundamentals of composting, from setting up your bin to maintaining the perfect balance for nutrient-rich compost.
                  </p>
                </CardContent>
                <CardFooter>
                  <CustomButton variant="outline" size="sm" className="w-full">
                    Download PDF
                  </CustomButton>
                </CardFooter>
              </Card>
              
              <Card className="hover:shadow-md transition">
                <CardHeader>
                  <CardTitle>Video Tutorials</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-400">
                    Watch step-by-step video guides on sustainable gardening, waste reduction techniques, and using our products effectively.
                  </p>
                </CardContent>
                <CardFooter>
                  <CustomButton variant="outline" size="sm" className="w-full">
                    View Library
                  </CustomButton>
                </CardFooter>
              </Card>
              
              <Card className="hover:shadow-md transition">
                <CardHeader>
                  <CardTitle>Sustainability Blog</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-400">
                    Explore articles on the latest sustainability trends, success stories, and tips for reducing your environmental footprint.
                  </p>
                </CardContent>
                <CardFooter>
                  <CustomButton variant="outline" size="sm" className="w-full">
                    Read Articles
                  </CustomButton>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Community;
