
import React from "react";
import { 
  Map, 
  ShoppingBag, 
  Users, 
  BarChart3, 
  Sprout, 
  Award 
} from "lucide-react";
import { CustomButton } from "../ui/CustomButton";

const Features = () => {
  const features = [
    {
      icon: <Map className="h-8 w-8" />,
      title: "Waste Collection Portal",
      description:
        "Schedule green waste pickup with interactive map visualization and real-time tracking.",
      link: "/collection",
      color: "from-ocean-500 to-ocean-600"
    },
    {
      icon: <ShoppingBag className="h-8 w-8" />,
      title: "Eco-Product Marketplace",
      description:
        "Browse and purchase sustainable products made from recycled green waste materials.",
      link: "/marketplace",
      color: "from-jaivak-500 to-jaivak-600"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community Hub",
      description:
        "Connect with eco-conscious community members and track collective environmental impact.",
      link: "/community",
      color: "from-leaf-500 to-leaf-600"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Impact Dashboard",
      description:
        "Monitor your personal environmental impact metrics and Green Impact Credits.",
      link: "/profile",
      color: "from-amber-500 to-amber-600"
    },
    {
      icon: <Sprout className="h-8 w-8" />,
      title: "Educational Resources",
      description:
        "Access guides and resources on sustainability practices and waste reduction.",
      link: "/community",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Franchise Partnership",
      description:
        "Join our network of franchise partners and bring JaiVaK to your community.",
      link: "/franchise",
      color: "from-purple-500 to-purple-600"
    },
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block bg-ocean-50 dark:bg-ocean-500/20 px-4 py-1.5 rounded-full text-sm font-medium text-ocean-700 dark:text-ocean-300 mb-6">
            Platform Features
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our <span className="text-gradient-primary">Comprehensive</span> Solution
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            JaiVaK provides all the tools you need to participate in the circular economy and make a positive environmental impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={feature.title} 
              className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-700 group hover:shadow-md transition-all"
            >
              <div className={`bg-gradient-to-r ${feature.color} p-5 text-white`}>
                <div className="bg-white/20 w-14 h-14 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  {feature.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-slate-800 dark:text-slate-200">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  {feature.description}
                </p>
                <CustomButton 
                  variant="link" 
                  className="px-0 text-sm group"
                  onClick={() => window.location.href = feature.link}
                >
                  Learn More
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </CustomButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
