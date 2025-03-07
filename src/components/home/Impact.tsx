
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import { CustomButton } from "../ui/CustomButton";

const Impact = () => {
  const impactData = [
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
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block bg-jaivak-50 dark:bg-jaivak-500/20 px-4 py-1.5 rounded-full text-sm font-medium text-jaivak-700 dark:text-jaivak-300 mb-6">
            Our Impact
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Creating <span className="text-gradient-primary">Measurable Change</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Together with our users and partners, we're making a significant impact on waste reduction and sustainability goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 h-96">
            <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-200">
              Waste Recycled vs Products Created (Tons)
            </h3>
            <ResponsiveContainer width="100%" height="85%">
              <BarChart
                data={impactData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="year" />
                <YAxis />
                <Bar dataKey="waste" name="Waste Recycled" fill="#4CAF50" radius={[4, 4, 0, 0]} />
                <Bar dataKey="products" name="Products Created" fill="#03A9F4" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-jaivak-500 to-jaivak-600 rounded-xl p-6 text-white shadow-sm">
                <div className="text-3xl font-bold mb-1">85%</div>
                <p className="text-sm text-white/80">
                  Waste-to-Product Conversion Rate
                </p>
              </div>
              <div className="bg-gradient-to-br from-ocean-500 to-ocean-600 rounded-xl p-6 text-white shadow-sm">
                <div className="text-3xl font-bold mb-1">12.5K</div>
                <p className="text-sm text-white/80">
                  Tons of CO2 Emissions Reduced
                </p>
              </div>
              <div className="bg-gradient-to-br from-leaf-500 to-leaf-600 rounded-xl p-6 text-white shadow-sm">
                <div className="text-3xl font-bold mb-1">3.2M</div>
                <p className="text-sm text-white/80">
                  Green Impact Credits Issued
                </p>
              </div>
              <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl p-6 text-white shadow-sm">
                <div className="text-3xl font-bold mb-1">450+</div>
                <p className="text-sm text-white/80">
                  Local Green Jobs Created
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
