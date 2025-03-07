
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { CustomButton } from "@/components/ui/CustomButton";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
import { Check, Building, ArrowRight, Leaf, DollarSign, Users, Globe } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Mock data for charts
const revenueData = [
  { name: "Product Sales", value: 45 },
  { name: "Collection Services", value: 30 },
  { name: "Government Incentives", value: 15 },
  { name: "Other Services", value: 10 },
];

const growthData = [
  { name: "Year 1", revenue: 120000, profit: 30000 },
  { name: "Year 2", revenue: 250000, profit: 70000 },
  { name: "Year 3", revenue: 420000, profit: 140000 },
  { name: "Year 4", revenue: 620000, profit: 220000 },
  { name: "Year 5", revenue: 850000, profit: 320000 },
];

const COLORS = ["#38a169", "#48bb78", "#68d391", "#9ae6b4"];

const Franchise = () => {
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    investmentLevel: "",
    experience: "",
    motivation: "",
  });

  const [chartRef, chartInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [benefitsRef, benefitsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    setFormStep(step => step + 1);
  };

  const prevStep = () => {
    setFormStep(step => step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would normally send the data to your backend
    setFormStep(3); // Move to thank you step
  };

  const renderFormStep = () => {
    switch (formStep) {
      case 1:
        return (
          <>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-jaivak-500"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-jaivak-500"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-jaivak-500"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Preferred Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-jaivak-500"
                  required
                />
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <CustomButton 
                variant="gradient" 
                onClick={nextStep}
                className="flex items-center gap-2"
              >
                Next Step <ArrowRight className="h-4 w-4" />
              </CustomButton>
            </div>
          </>
        );
      
      case 2:
        return (
          <>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Investment Level</label>
                <select
                  name="investmentLevel"
                  value={formData.investmentLevel}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-jaivak-500"
                  required
                >
                  <option value="">Select your investment level</option>
                  <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                  <option value="$100,000 - $250,000">$100,000 - $250,000</option>
                  <option value="$250,000 - $500,000">$250,000 - $500,000</option>
                  <option value="$500,000+">$500,000+</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Prior Business Experience</label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-jaivak-500"
                  required
                >
                  <option value="">Select your experience level</option>
                  <option value="No prior business experience">No prior business experience</option>
                  <option value="1-3 years of business ownership">1-3 years of business ownership</option>
                  <option value="3-5 years of business ownership">3-5 years of business ownership</option>
                  <option value="5+ years of business ownership">5+ years of business ownership</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Why are you interested in a JaiVaK franchise?</label>
                <textarea
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-jaivak-500 h-32"
                  required
                ></textarea>
              </div>
            </div>

            <div className="flex justify-between mt-6">
              <CustomButton 
                variant="outline" 
                onClick={prevStep}
              >
                Previous
              </CustomButton>
              <CustomButton 
                variant="gradient" 
                onClick={handleSubmit}
              >
                Submit Application
              </CustomButton>
            </div>
          </>
        );
      
      case 3:
        return (
          <div className="py-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Application Submitted!</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Thank you for your interest in becoming a JaiVaK franchise partner. Our team will review your application and contact you within 3-5 business days.
            </p>
            <CustomButton 
              variant="outline"
              onClick={() => window.location.href = '/'}
            >
              Return to Home
            </CustomButton>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-28 pb-16 bg-gradient-to-b from-green-50 to-white dark:from-slate-900 dark:to-slate-900">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
                Franchise Opportunities
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                Join our growing network of sustainability-focused businesses. Become a JaiVaK franchise partner and build a profitable business while making a positive environmental impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CustomButton variant="gradient" size="lg" className="flex items-center gap-2">
                  Apply Now <ArrowRight className="h-5 w-5" />
                </CustomButton>
                <CustomButton variant="outline" size="lg" className="flex items-center gap-2">
                  Download Info Pack <ArrowRight className="h-5 w-5" />
                </CustomButton>
              </div>
            </div>
          </div>
        </section>

        {/* Business Model Section */}
        <section className="py-16 bg-white dark:bg-slate-900">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-center mb-6 text-slate-900 dark:text-white">
                Our Franchise Business Model
              </h2>
              <p className="text-lg text-center text-slate-600 dark:text-slate-300">
                JaiVaK franchises operate on a proven circular economy model, creating multiple revenue streams while solving environmental challenges.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-slate-900 dark:text-white">
                  Multiple Revenue Streams
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-jaivak-500 mr-2 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-slate-900 dark:text-white mb-1">Collection Services</h4>
                      <p className="text-slate-600 dark:text-slate-400">
                        Offer subscription-based green waste collection to households and businesses.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-jaivak-500 mr-2 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-slate-900 dark:text-white mb-1">Product Sales</h4>
                      <p className="text-slate-600 dark:text-slate-400">
                        Convert collected waste into valuable compost, mulch, and other eco-friendly products.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-jaivak-500 mr-2 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-slate-900 dark:text-white mb-1">Consulting Services</h4>
                      <p className="text-slate-600 dark:text-slate-400">
                        Provide sustainability consulting to local businesses and government agencies.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-jaivak-500 mr-2 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-slate-900 dark:text-white mb-1">Government Incentives</h4>
                      <p className="text-slate-600 dark:text-slate-400">
                        Access to environmental grants and tax incentives for green businesses.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <motion.div 
                ref={chartRef}
                initial={{ opacity: 0, x: 50 }}
                animate={chartInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.6 }}
                className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md"
              >
                <h3 className="text-xl font-semibold mb-4 text-center text-slate-900 dark:text-white">
                  Revenue Breakdown
                </h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={revenueData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {revenueData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            </div>
            
            <div className="mt-16">
              <h3 className="text-2xl font-semibold mb-6 text-center text-slate-900 dark:text-white">
                Projected Growth Over 5 Years
              </h3>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={growthData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                      <Legend />
                      <Bar dataKey="revenue" name="Revenue" fill="#38a169" />
                      <Bar dataKey="profit" name="Profit" fill="#805ad5" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <motion.section 
          ref={benefitsRef}
          initial={{ opacity: 0 }}
          animate={benefitsInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="py-16 bg-slate-50 dark:bg-slate-800"
        >
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white">
              Why Partner With JaiVaK?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="w-14 h-14 bg-jaivak-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle>Proven Business Model</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-jaivak-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600 dark:text-slate-400">Established operations systems</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-jaivak-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600 dark:text-slate-400">Multiple revenue streams</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-jaivak-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600 dark:text-slate-400">Proprietary processing methods</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-jaivak-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600 dark:text-slate-400">Scalable business structure</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="w-14 h-14 bg-jaivak-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle>Financial Advantages</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-jaivak-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600 dark:text-slate-400">Lower startup costs than traditional franchises</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-jaivak-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600 dark:text-slate-400">Access to sustainability grants</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-jaivak-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600 dark:text-slate-400">Specialized financing options</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-jaivak-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600 dark:text-slate-400">Potential tax advantages for green businesses</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="w-14 h-14 bg-jaivak-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle>Comprehensive Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-jaivak-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600 dark:text-slate-400">Extensive initial training program</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-jaivak-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600 dark:text-slate-400">Ongoing operational support</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-jaivak-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600 dark:text-slate-400">Marketing and branding materials</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-jaivak-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600 dark:text-slate-400">Technology and software solutions</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-16 text-center">
              <Card className="max-w-4xl mx-auto border-2 border-jaivak-500/20">
                <CardHeader>
                  <CardTitle className="flex items-center justify-center gap-2">
                    <Globe className="h-5 w-5 text-jaivak-500" />
                    <span>Growing Market Potential</span>
                  </CardTitle>
                  <CardDescription>
                    The green waste management industry is projected to grow at 9% annually through 2030
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col md:flex-row gap-8 justify-between">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-jaivak-500 mb-2">62%</div>
                    <p className="text-slate-600 dark:text-slate-400">
                      of consumers prefer eco-friendly businesses
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-jaivak-500 mb-2">$18B</div>
                    <p className="text-slate-600 dark:text-slate-400">
                      market size for organic soil products
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-jaivak-500 mb-2">3.5x</div>
                    <p className="text-slate-600 dark:text-slate-400">
                      growth in green waste recycling since 2015
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="justify-center">
                  <CustomButton variant="gradient" size="lg" className="mx-auto">
                    Request Market Analysis
                  </CustomButton>
                </CardFooter>
              </Card>
            </div>
          </div>
        </motion.section>

        {/* Application Form */}
        <section className="py-16 bg-white dark:bg-slate-900">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">
                Apply to Become a Franchise Partner
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Take the first step towards owning a sustainable business with proven growth potential. Fill out the application form below and our franchise team will contact you.
              </p>
            </div>
            
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle>Franchise Application</CardTitle>
                <CardDescription>
                  {formStep === 1 ? "Step 1 of 2: Personal Information" : 
                   formStep === 2 ? "Step 2 of 2: Business Details" : 
                   "Application Complete"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  {renderFormStep()}
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Franchise;
