
import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { CustomButton } from "../ui/CustomButton";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const Impact = () => {
  const [activeView, setActiveView] = useState("yearly");
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const yearlyData = [
    {
      year: "2018",
      waste: 50,
      products: 30,
    },
    {
      year: "2019",
      waste: 85,
      products: 55,
    },
    {
      year: "2020",
      waste: 130,
      products: 90,
    },
    {
      year: "2021",
      waste: 210,
      products: 145,
    },
    {
      year: "2022",
      waste: 315,
      products: 220,
    },
    {
      year: "2023",
      waste: 450,
      products: 320,
    },
  ];

  const monthlyData = [
    {
      month: "Jan",
      waste: 35,
      products: 22,
    },
    {
      month: "Feb",
      waste: 42,
      products: 28,
    },
    {
      month: "Mar",
      waste: 50,
      products: 35,
    },
    {
      month: "Apr",
      waste: 65,
      products: 45,
    },
    {
      month: "May",
      waste: 72,
      products: 50,
    },
    {
      month: "Jun",
      waste: 80,
      products: 58,
    },
    {
      month: "Jul",
      waste: 95,
      products: 68,
    },
    {
      month: "Aug",
      waste: 88,
      products: 60,
    },
  ];

  const testimonials = [
    {
      quote: "JaiVaK has revolutionized how we handle green waste in our city, turning a costly problem into a valuable resource stream.",
      author: "Mayor Sarah Thompson",
      role: "Greenville City"
    },
    {
      quote: "Our partnership with JaiVaK has not only reduced our environmental footprint but also created sustainable local jobs.",
      author: "John Watkins",
      role: "EcoTech Industries"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="inline-block bg-jaivak-50 dark:bg-jaivak-500/20 px-4 py-1.5 rounded-full text-sm font-medium text-jaivak-700 dark:text-jaivak-300 mb-6">
            Our Impact
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Creating <span className="text-gradient-primary">Measurable Change</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Together with our users and partners, we're making a significant impact on waste reduction and sustainability goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUpVariants}
            className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 h-96"
          >
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-slate-200">
                Waste Recycled vs Products Created (Tons)
              </h3>
              <Tabs defaultValue="yearly" className="w-full" onValueChange={setActiveView}>
                <TabsList className="mb-4">
                  <TabsTrigger value="yearly">Yearly</TabsTrigger>
                  <TabsTrigger value="monthly">Monthly</TabsTrigger>
                </TabsList>
                
                <TabsContent value="yearly" className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={yearlyData}
                      margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                      barGap={8}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                          borderRadius: '8px',
                          border: 'none',
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                        }}
                        cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }}
                      />
                      <Legend wrapperStyle={{ paddingTop: '10px' }} />
                      <Bar 
                        dataKey="waste" 
                        name="Waste Recycled" 
                        fill="#4CAF50" 
                        radius={[4, 4, 0, 0]} 
                        animationDuration={1500}
                      />
                      <Bar 
                        dataKey="products" 
                        name="Products Created" 
                        fill="#03A9F4" 
                        radius={[4, 4, 0, 0]} 
                        animationDuration={1500}
                        animationBegin={300}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </TabsContent>
                
                <TabsContent value="monthly" className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={monthlyData}
                      margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                      barGap={8}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                          borderRadius: '8px',
                          border: 'none',
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                        }}
                        cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }}
                      />
                      <Legend wrapperStyle={{ paddingTop: '10px' }} />
                      <Bar 
                        dataKey="waste" 
                        name="Waste Recycled" 
                        fill="#4CAF50" 
                        radius={[4, 4, 0, 0]} 
                        animationDuration={1500}
                      />
                      <Bar 
                        dataKey="products" 
                        name="Products Created" 
                        fill="#03A9F4" 
                        radius={[4, 4, 0, 0]} 
                        animationDuration={1500}
                        animationBegin={300}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </TabsContent>
              </Tabs>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={staggerContainerVariants}
            className="space-y-8"
          >
            <motion.div 
              variants={fadeInUpVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <motion.div 
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                className="bg-gradient-to-br from-jaivak-500 to-jaivak-600 rounded-xl p-6 text-white shadow-sm"
              >
                <div className="text-3xl font-bold mb-1">85%</div>
                <p className="text-sm text-white/80">
                  Waste-to-Product Conversion Rate
                </p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                className="bg-gradient-to-br from-ocean-500 to-ocean-600 rounded-xl p-6 text-white shadow-sm"
              >
                <div className="text-3xl font-bold mb-1">12.5K</div>
                <p className="text-sm text-white/80">
                  Tons of CO2 Emissions Reduced
                </p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                className="bg-gradient-to-br from-leaf-500 to-leaf-600 rounded-xl p-6 text-white shadow-sm"
              >
                <div className="text-3xl font-bold mb-1">3.2M</div>
                <p className="text-sm text-white/80">
                  Green Impact Credits Issued
                </p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl p-6 text-white shadow-sm"
              >
                <div className="text-3xl font-bold mb-1">450+</div>
                <p className="text-sm text-white/80">
                  Local Green Jobs Created
                </p>
              </motion.div>
            </motion.div>

            <motion.div 
              variants={fadeInUpVariants}
              className="space-y-4"
            >
              {testimonials.map((testimonial, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-100 dark:border-slate-700 shadow-sm"
                >
                  <p className="text-slate-600 dark:text-slate-300 italic mb-4">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-jaivak-100 to-ocean-100 dark:from-jaivak-700 dark:to-ocean-700 flex items-center justify-center text-xl font-bold text-jaivak-500 dark:text-jaivak-300">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">{testimonial.author}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
