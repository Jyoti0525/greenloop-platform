
import React from "react";
import { Leaf } from "lucide-react";
import { motion } from "framer-motion";

interface LoadingSpinnerProps {
  size?: "small" | "medium" | "large";
  text?: string;
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = "medium", 
  text, 
  className = "" 
}) => {
  const sizeMap = {
    small: "h-4 w-4",
    medium: "h-6 w-6",
    large: "h-10 w-10"
  };

  const containerClass = {
    small: "text-xs",
    medium: "text-sm",
    large: "text-base"
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className="relative">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className={`text-jaivak-500 ${sizeMap[size]}`}
        >
          <Leaf className="w-full h-full" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-900 to-transparent opacity-40"></div>
      </div>
      
      {text && (
        <p className={`mt-2 font-medium text-slate-600 dark:text-slate-400 ${containerClass[size]}`}>
          {text}
        </p>
      )}
    </div>
  );
};

export default LoadingSpinner;
