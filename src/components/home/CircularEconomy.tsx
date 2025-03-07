
import React from "react";
import { Recycle, Leaf, ShoppingBag, Truck, CheckCircle } from "lucide-react";

const CircularEconomy = () => {
  const steps = [
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Collection",
      description:
        "Green waste is collected from urban areas, parks, and residential locations through our scheduled pickup service.",
    },
    {
      icon: <Recycle className="h-8 w-8" />,
      title: "Processing",
      description:
        "The collected waste undergoes sustainable processing to transform it into valuable raw materials.",
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Production",
      description:
        "Raw materials are converted into high-quality sustainable products for various applications.",
    },
    {
      icon: <ShoppingBag className="h-8 w-8" />,
      title: "Distribution",
      description:
        "Eco-friendly products reach consumers through our marketplace, completing the circular economy.",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block bg-leaf-50 dark:bg-leaf-500/20 px-4 py-1.5 rounded-full text-sm font-medium text-leaf-700 dark:text-leaf-300 mb-6">
            Our Approach
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            The <span className="text-gradient-secondary">Circular Economy</span> Approach
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Our innovative waste-to-value system creates a sustainable cycle that benefits the environment and communities.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connected line */}
          <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-2/3 h-0.5 bg-gradient-to-r from-jaivak-100 via-jaivak-300 to-jaivak-100 dark:from-jaivak-900 dark:via-jaivak-700 dark:to-jaivak-900 hidden md:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div 
                key={step.title} 
                className="relative bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 text-center group hover:shadow-md transition-shadow"
              >
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-br from-jaivak-500 to-leaf-500 rounded-full p-3 shadow-md text-white">
                  {step.icon}
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-3 pt-3 text-slate-800 dark:text-slate-200">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-20">
          <div className="bg-gradient-to-r from-jaivak-50 to-leaf-50 dark:from-jaivak-900/50 dark:to-leaf-900/50 rounded-xl p-8 border border-jaivak-100 dark:border-jaivak-800">
            <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-200">
              Environmental Benefits
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-jaivak-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Reduces landfill waste by up to 30% in partner cities
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-jaivak-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Decreases carbon emissions through local processing
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-jaivak-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Conserves water resources with efficient recycling
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-jaivak-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Creates sustainable jobs in the green economy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CircularEconomy;
