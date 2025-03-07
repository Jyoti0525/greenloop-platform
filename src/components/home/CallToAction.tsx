
import React from "react";
import { useNavigate } from "react-router-dom";
import { CustomButton } from "../ui/CustomButton";
import { ArrowRight, Recycle, ShoppingBag, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CallToAction = () => {
  const navigate = useNavigate();
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const handleNavigate = (path: string) => {
    // Add smooth scrolling to top before navigation
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => navigate(path), 300);
  };
  
  return (
    <section className="py-20 bg-gradient-to-r from-jaivak-500 to-ocean-500 text-white relative overflow-hidden">
      {/* Abstract shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <motion.div 
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-6 relative z-10"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            variants={itemVariants} 
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Join the Green Revolution Today
          </motion.h2>
          <motion.p 
            variants={itemVariants} 
            className="text-lg text-white/80 mb-8 max-w-2xl mx-auto"
          >
            Become part of our community and start making a positive environmental impact. Every action counts in building a sustainable future.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <CustomButton 
              variant="glass" 
              size="xl" 
              className="backdrop-blur-md group transition-all hover:shadow-lg"
              onClick={() => handleNavigate("/auth")}
            >
              Sign Up Now
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </CustomButton>
            <CustomButton 
              variant="outline" 
              size="xl" 
              className="bg-transparent border-white/30 text-white hover:bg-white/10 transition-all hover:shadow-lg"
              onClick={() => handleNavigate("/collection")}
            >
              Learn How It Works
            </CustomButton>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <motion.div 
              variants={itemVariants}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 transition-all hover:bg-white/20 hover:shadow-lg"
              whileHover={{ y: -5 }}
            >
              <div className="bg-white/20 w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-sm mx-auto mb-4">
                <Recycle className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Schedule Collection
              </h3>
              <p className="text-sm text-white/70">
                Book green waste pickup at your convenience through our easy-to-use portal.
              </p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 transition-all hover:bg-white/20 hover:shadow-lg"
              whileHover={{ y: -5 }}
            >
              <div className="bg-white/20 w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-sm mx-auto mb-4">
                <ShoppingBag className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Shop Eco-Products
              </h3>
              <p className="text-sm text-white/70">
                Browse our marketplace for sustainable products made from recycled green waste.
              </p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 transition-all hover:bg-white/20 hover:shadow-lg"
              whileHover={{ y: -5 }}
            >
              <div className="bg-white/20 w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-sm mx-auto mb-4">
                <Users className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Join Community
              </h3>
              <p className="text-sm text-white/70">
                Connect with like-minded individuals and track your collective environmental impact.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CallToAction;
