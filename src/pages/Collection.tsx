
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { CustomButton } from "@/components/ui/CustomButton";
import { MapPin, Calendar, Clock, Truck, Leaf, ChevronRight, Search } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Collection = () => {
  const [mapRef, mapInView] = useInView({ 
    triggerOnce: true,
    threshold: 0.1
  });

  const [schedulingRef, schedulingInView] = useInView({
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
                Waste Collection Services
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                Schedule green waste collection from your doorstep and contribute to a sustainable future. Our eco-friendly process ensures your waste is transformed into valuable resources.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CustomButton variant="gradient" size="lg" className="flex items-center gap-2">
                  Schedule a Pickup <Calendar className="h-5 w-5" />
                </CustomButton>
                <CustomButton variant="outline" size="lg" className="flex items-center gap-2">
                  Collection Points <MapPin className="h-5 w-5" />
                </CustomButton>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-white dark:bg-slate-900">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white">
              How Our Waste Collection Works
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                className="bg-green-50 dark:bg-slate-800 p-8 rounded-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="w-16 h-16 bg-jaivak-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">Schedule</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Book your collection online or via our app. Choose the date and time that works best for you.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-green-50 dark:bg-slate-800 p-8 rounded-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="w-16 h-16 bg-jaivak-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Truck className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">Collection</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Our eco-friendly trucks will arrive at your location to collect your green waste.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-green-50 dark:bg-slate-800 p-8 rounded-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="w-16 h-16 bg-jaivak-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Leaf className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">Transformation</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Your waste is processed into valuable resources like compost, biogas, and eco-friendly products.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <motion.section 
          ref={mapRef}
          initial={{ opacity: 0 }}
          animate={mapInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="py-16 bg-slate-50 dark:bg-slate-800"
        >
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-10">
              <div className="w-full md:w-1/3">
                <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">Collection Points</h2>
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  Find the nearest collection points in your area. Drop off your green waste at your convenience or schedule a home pickup.
                </p>
                
                <div className="mb-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                    <input 
                      type="text" 
                      placeholder="Enter your location" 
                      className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-jaivak-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white dark:bg-slate-700 p-4 rounded-lg shadow-sm cursor-pointer hover:shadow-md transition">
                    <h4 className="font-semibold text-slate-900 dark:text-white">Central Park Collection Center</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">2.5 km away • Open daily 8 AM - 6 PM</p>
                  </div>
                  
                  <div className="bg-white dark:bg-slate-700 p-4 rounded-lg shadow-sm cursor-pointer hover:shadow-md transition">
                    <h4 className="font-semibold text-slate-900 dark:text-white">Riverside Recycling Hub</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">4.3 km away • Open Mon-Sat 9 AM - 7 PM</p>
                  </div>
                  
                  <div className="bg-white dark:bg-slate-700 p-4 rounded-lg shadow-sm cursor-pointer hover:shadow-md transition">
                    <h4 className="font-semibold text-slate-900 dark:text-white">Green Valley Collection Point</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">5.8 km away • Open 24/7</p>
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-2/3 bg-white dark:bg-slate-700 rounded-xl overflow-hidden shadow-md h-[500px] flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="mb-4 text-jaivak-500">
                    <MapPin className="h-12 w-12 mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">Map Visualization</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    Interactive map would load here, showing collection points and service areas.
                  </p>
                  <CustomButton variant="outline" size="sm">
                    Load Map
                  </CustomButton>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Scheduling Section */}
        <motion.section 
          ref={schedulingRef}
          initial={{ opacity: 0 }}
          animate={schedulingInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="py-16 bg-white dark:bg-slate-900"
        >
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white">
              Schedule a Collection
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue="oneTime" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-10">
                  <TabsTrigger value="oneTime">One-Time Collection</TabsTrigger>
                  <TabsTrigger value="recurring">Recurring Service</TabsTrigger>
                </TabsList>
                
                <TabsContent value="oneTime" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>One-Time Waste Collection</CardTitle>
                      <CardDescription>Schedule a single pickup for your green waste</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Collection Date</label>
                          <input 
                            type="date" 
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-jaivak-500"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Preferred Time Slot</label>
                          <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-jaivak-500">
                            <option>Morning (8 AM - 12 PM)</option>
                            <option>Afternoon (12 PM - 4 PM)</option>
                            <option>Evening (4 PM - 8 PM)</option>
                          </select>
                        </div>
                        
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Waste Type</label>
                          <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-jaivak-500">
                            <option>Garden Waste</option>
                            <option>Kitchen Waste</option>
                            <option>Mixed Green Waste</option>
                            <option>Other Organic Waste</option>
                          </select>
                        </div>
                        
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Quantity (Approximate)</label>
                          <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-jaivak-500">
                            <option>Small (1-2 bags)</option>
                            <option>Medium (3-5 bags)</option>
                            <option>Large (6-10 bags)</option>
                            <option>Extra Large (10+ bags)</option>
                          </select>
                        </div>
                        
                        <div className="space-y-2 md:col-span-2">
                          <label className="text-sm font-medium">Collection Address</label>
                          <textarea 
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-jaivak-500 h-24"
                            placeholder="Enter your full address for collection"
                          ></textarea>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <CustomButton variant="outline">Cancel</CustomButton>
                      <CustomButton variant="gradient">Schedule Collection</CustomButton>
                    </CardFooter>
                  </Card>
                </TabsContent>
                
                <TabsContent value="recurring" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Recurring Waste Collection</CardTitle>
                      <CardDescription>Set up a regular collection schedule</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Frequency</label>
                          <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-jaivak-500">
                            <option>Weekly</option>
                            <option>Bi-weekly</option>
                            <option>Monthly</option>
                          </select>
                        </div>
                        
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Preferred Day</label>
                          <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-jaivak-500">
                            <option>Monday</option>
                            <option>Tuesday</option>
                            <option>Wednesday</option>
                            <option>Thursday</option>
                            <option>Friday</option>
                            <option>Saturday</option>
                          </select>
                        </div>
                        
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Preferred Time Slot</label>
                          <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-jaivak-500">
                            <option>Morning (8 AM - 12 PM)</option>
                            <option>Afternoon (12 PM - 4 PM)</option>
                            <option>Evening (4 PM - 8 PM)</option>
                          </select>
                        </div>
                        
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Contract Length</label>
                          <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-jaivak-500">
                            <option>3 Months</option>
                            <option>6 Months</option>
                            <option>12 Months</option>
                          </select>
                        </div>
                        
                        <div className="space-y-2 md:col-span-2">
                          <label className="text-sm font-medium">Collection Address</label>
                          <textarea 
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-jaivak-500 h-24"
                            placeholder="Enter your full address for collection"
                          ></textarea>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <CustomButton variant="outline">Cancel</CustomButton>
                      <CustomButton variant="gradient">Set Up Recurring Collection</CustomButton>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </motion.section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Collection;
