
import React from "react";
import { CustomButton } from "../ui/CustomButton";
import { ArrowRight, Recycle, ShoppingBag, Users } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-jaivak-500 to-ocean-500 text-white relative overflow-hidden">
      {/* Abstract shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join the Green Revolution Today
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Become part of our community and start making a positive environmental impact. Every action counts in building a sustainable future.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <CustomButton 
              variant="glass" 
              size="xl" 
              className="backdrop-blur-md group"
            >
              Sign Up Now
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </CustomButton>
            <CustomButton 
              variant="outline" 
              size="xl" 
              className="bg-transparent border-white/30 text-white hover:bg-white/10"
            >
              Learn How It Works
            </CustomButton>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="bg-white/20 w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-sm mx-auto mb-4">
                <Recycle className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Schedule Collection
              </h3>
              <p className="text-sm text-white/70">
                Book green waste pickup at your convenience through our easy-to-use portal.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="bg-white/20 w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-sm mx-auto mb-4">
                <ShoppingBag className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Shop Eco-Products
              </h3>
              <p className="text-sm text-white/70">
                Browse our marketplace for sustainable products made from recycled green waste.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="bg-white/20 w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-sm mx-auto mb-4">
                <Users className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Join Community
              </h3>
              <p className="text-sm text-white/70">
                Connect with like-minded individuals and track your collective environmental impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
