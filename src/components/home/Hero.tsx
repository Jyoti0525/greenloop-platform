
import React from "react";
import { ArrowRight, Leaf, Recycle, TreePine } from "lucide-react";
import { CustomButton } from "../ui/CustomButton";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  
  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      {/* Background decorations */}
      <div className="absolute top-0 inset-0 bg-gradient-to-b from-jaivak-50/50 to-transparent -z-10"></div>
      
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-jaivak-100 rounded-full blur-3xl opacity-50 -z-10"></div>
      <div className="absolute top-60 -left-40 w-96 h-96 bg-ocean-100 rounded-full blur-3xl opacity-40 -z-10"></div>
      
      <div className="absolute top-1/2 left-1/4 w-6 h-6 text-jaivak-400 animate-spin-slow -z-10">
        <Leaf />
      </div>
      <div className="absolute top-1/3 right-1/4 w-6 h-6 text-ocean-400 animate-spin-slow animation-delay-1000 -z-10">
        <Recycle />
      </div>
      <div className="absolute bottom-1/4 right-1/3 w-6 h-6 text-leaf-400 animate-spin-slow animation-delay-2000 -z-10">
        <TreePine />
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-jaivak-50 dark:bg-jaivak-500/20 px-4 py-1.5 rounded-full text-sm font-medium text-jaivak-700 dark:text-jaivak-300 mb-6 animate-fade-in">
            Sustainable Waste Management
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 heading-blur animate-slide-up">
            Transform <span className="text-gradient-primary">Urban Green Waste</span> Into Valuable Resources
          </h1>
          
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto animate-slide-up animate-stagger-1">
            JaiVaK creates a circular economy where urban green waste becomes sustainable products, supporting environmental health and economic growth.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 animate-slide-up animate-stagger-2">
            <CustomButton 
              variant="gradient" 
              size="xl" 
              className="group"
              onClick={() => navigate("/collection")}
            >
              Start Recycling
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </CustomButton>
            <CustomButton 
              variant="outline" 
              size="xl"
              onClick={() => navigate("/marketplace")}
            >
              Explore Products
            </CustomButton>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-slide-up animate-stagger-3">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-gradient-primary mb-1">2.5M</div>
              <p className="text-sm text-slate-500 dark:text-slate-400">Tons of Waste Recycled</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-gradient-primary mb-1">150K</div>
              <p className="text-sm text-slate-500 dark:text-slate-400">Active Users</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-gradient-primary mb-1">45+</div>
              <p className="text-sm text-slate-500 dark:text-slate-400">Partner Cities</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-gradient-primary mb-1">85%</div>
              <p className="text-sm text-slate-500 dark:text-slate-400">Waste-to-Value Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
