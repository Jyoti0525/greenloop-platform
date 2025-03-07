
import React, { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { CustomButton } from "../components/ui/CustomButton";
import { Users, Award, BookOpen, Globe, MessageCircle, Heart } from "lucide-react";

const Community = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const communityPosts = [
    {
      id: 1,
      author: "Jennifer K.",
      avatar: "/placeholder.svg",
      title: "My Garden Transformation with JaiVaK Compost",
      excerpt: "I wanted to share how using JaiVaK's organic compost completely transformed my garden this season. The results have been incredible!",
      likes: 124,
      comments: 28,
      date: "2 days ago"
    },
    {
      id: 2,
      author: "Michael R.",
      avatar: "/placeholder.svg",
      title: "Urban Community Garden Initiative",
      excerpt: "Our neighborhood started a community garden using JaiVaK products. Here's how we organized it and the impact it's had on our community.",
      likes: 98,
      comments: 42,
      date: "5 days ago"
    },
    {
      id: 3,
      author: "Green City Council",
      avatar: "/placeholder.svg",
      title: "Partnership Announcement: City-Wide Green Waste Program",
      excerpt: "We're excited to announce our new partnership with JaiVaK to implement a city-wide green waste collection program starting next month.",
      likes: 215,
      comments: 63,
      date: "1 week ago"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-28">
        <section className="py-12 bg-gradient-to-r from-ocean-50 to-jaivak-50 dark:from-slate-900 dark:to-slate-800">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-ocean-50 dark:bg-ocean-500/20 px-4 py-1.5 rounded-full text-sm font-medium text-ocean-700 dark:text-ocean-300 mb-6">
                Community
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-6">
                Join Our <span className="text-gradient-primary">Green Community</span>
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
                Connect with like-minded individuals, share stories, track your environmental impact, and access educational resources.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white dark:bg-slate-900">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="bg-ocean-50 dark:bg-ocean-900/30 rounded-xl p-6 shadow-sm border border-ocean-100 dark:border-ocean-800 text-center group hover:shadow-md transition-all">
                  <div className="bg-white dark:bg-slate-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:shadow transform group-hover:-translate-y-1 transition-all">
                    <Users className="h-8 w-8 text-ocean-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-slate-800 dark:text-slate-200">
                    Connect
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                    Join forums, groups, and events to connect with environmentally-conscious individuals and organizations.
                  </p>
                  <CustomButton variant="outline" size="sm" className="border-ocean-200 dark:border-ocean-700">
                    Find Groups
                  </CustomButton>
                </div>

                <div className="bg-jaivak-50 dark:bg-jaivak-900/30 rounded-xl p-6 shadow-sm border border-jaivak-100 dark:border-jaivak-800 text-center group hover:shadow-md transition-all">
                  <div className="bg-white dark:bg-slate-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:shadow transform group-hover:-translate-y-1 transition-all">
                    <Award className="h-8 w-8 text-jaivak-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-slate-800 dark:text-slate-200">
                    Impact Tracking
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                    Monitor your Green Impact Credits and see the tangible environmental benefits of your actions.
                  </p>
                  <CustomButton variant="outline" size="sm" className="border-jaivak-200 dark:border-jaivak-700">
                    View Dashboard
                  </CustomButton>
                </div>

                <div className="bg-leaf-50 dark:bg-leaf-900/30 rounded-xl p-6 shadow-sm border border-leaf-100 dark:border-leaf-800 text-center group hover:shadow-md transition-all">
                  <div className="bg-white dark:bg-slate-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:shadow transform group-hover:-translate-y-1 transition-all">
                    <BookOpen className="h-8 w-8 text-leaf-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-slate-800 dark:text-slate-200">
                    Resources
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                    Access educational materials about sustainability, gardening, waste reduction, and environmental impact.
                  </p>
                  <CustomButton variant="outline" size="sm" className="border-leaf-200 dark:border-leaf-700">
                    Browse Library
                  </CustomButton>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden mb-12">
                <div className="p-6 border-b border-slate-100 dark:border-slate-700">
                  <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">
                    Community Highlights
                  </h2>
                </div>
                <div className="divide-y divide-slate-100 dark:divide-slate-700">
                  {communityPosts.map((post) => (
                    <div key={post.id} className="p-6 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-200 dark:bg-slate-700 mr-3">
                          <img src={post.avatar} alt={post.author} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200">{post.author}</h3>
                          <p className="text-xs text-slate-500 dark:text-slate-400">{post.date}</p>
                        </div>
                      </div>
                      <h4 className="text-lg font-medium text-slate-800 dark:text-slate-200 mb-2">{post.title}</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{post.excerpt}</p>
                      <div className="flex items-center space-x-4">
                        <button className="flex items-center text-sm text-slate-500 hover:text-jaivak-500 dark:text-slate-400 dark:hover:text-jaivak-400 transition-colors">
                          <Heart className="h-4 w-4 mr-1" />
                          {post.likes}
                        </button>
                        <button className="flex items-center text-sm text-slate-500 hover:text-ocean-500 dark:text-slate-400 dark:hover:text-ocean-400 transition-colors">
                          <MessageCircle className="h-4 w-4 mr-1" />
                          {post.comments}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-6 border-t border-slate-100 dark:border-slate-700 text-center">
                  <CustomButton variant="gradient" size="sm">
                    View All Posts
                  </CustomButton>
                </div>
              </div>

              <div className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 rounded-xl p-8 border border-slate-200 dark:border-slate-600">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="mb-8 md:mb-0 md:mr-8 md:w-1/2">
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">
                          Your Impact
                        </h3>
                        <Globe className="h-6 w-6 text-ocean-500" />
                      </div>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="font-medium text-slate-700 dark:text-slate-300">Green Impact Credits</span>
                            <span className="text-jaivak-600 dark:text-jaivak-400 font-semibold">1,250</span>
                          </div>
                          <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                            <div className="bg-jaivak-500 h-full w-3/4 rounded-full"></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="font-medium text-slate-700 dark:text-slate-300">Waste Recycled</span>
                            <span className="text-ocean-600 dark:text-ocean-400 font-semibold">85 kg</span>
                          </div>
                          <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                            <div className="bg-ocean-500 h-full w-1/2 rounded-full"></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="font-medium text-slate-700 dark:text-slate-300">CO₂ Emissions Reduced</span>
                            <span className="text-leaf-600 dark:text-leaf-400 font-semibold">120 kg</span>
                          </div>
                          <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                            <div className="bg-leaf-500 h-full w-2/3 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6">
                        <CustomButton variant="gradient-secondary" size="sm" className="w-full">
                          View Full Dashboard
                        </CustomButton>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-200">
                      Upcoming Community Events
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-white dark:bg-slate-900 rounded-lg p-4 shadow-sm border border-slate-200 dark:border-slate-700">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium text-slate-800 dark:text-slate-200">Urban Gardening Workshop</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Learn techniques for effective urban gardening with limited space</p>
                          </div>
                          <div className="text-right">
                            <div className="text-xs font-medium text-ocean-600 dark:text-ocean-400">June 15</div>
                            <div className="text-xs text-slate-500 dark:text-slate-400">10:00 AM</div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white dark:bg-slate-900 rounded-lg p-4 shadow-sm border border-slate-200 dark:border-slate-700">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium text-slate-800 dark:text-slate-200">Waste Reduction Challenge</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Join our 30-day challenge to reduce household waste</p>
                          </div>
                          <div className="text-right">
                            <div className="text-xs font-medium text-ocean-600 dark:text-ocean-400">June 20</div>
                            <div className="text-xs text-slate-500 dark:text-slate-400">Online</div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white dark:bg-slate-900 rounded-lg p-4 shadow-sm border border-slate-200 dark:border-slate-700">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium text-slate-800 dark:text-slate-200">Community Cleanup Day</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Volunteer for our monthly community cleanup initiative</p>
                          </div>
                          <div className="text-right">
                            <div className="text-xs font-medium text-ocean-600 dark:text-ocean-400">June 25</div>
                            <div className="text-xs text-slate-500 dark:text-slate-400">9:00 AM</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 text-center">
                      <CustomButton variant="outline" size="sm">
                        View All Events
                      </CustomButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Community;
