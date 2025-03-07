
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface LevelStep {
  level: number;
  name: string;
  requiredPoints: number;
  icon: React.ReactNode;
}

interface ProgressPathProps {
  steps: LevelStep[];
  currentPoints: number;
  currentLevel: number;
  className?: string;
}

export const ProgressPath = ({ 
  steps, 
  currentPoints, 
  currentLevel,
  className 
}: ProgressPathProps) => {
  // Find current step based on level
  const currentStepIndex = steps.findIndex(step => step.level === currentLevel);
  
  // Calculate progress to next level (if not at max level)
  const calculateProgress = () => {
    if (currentStepIndex === steps.length - 1) return 100; // Already at max level
    
    const currentLevelPoints = steps[currentStepIndex].requiredPoints;
    const nextLevelPoints = steps[currentStepIndex + 1].requiredPoints;
    const pointsForNextLevel = nextLevelPoints - currentLevelPoints;
    const pointsProgress = currentPoints - currentLevelPoints;
    
    return Math.min(Math.floor((pointsProgress / pointsForNextLevel) * 100), 100);
  };
  
  const progress = calculateProgress();

  return (
    <div className={cn("relative py-4", className)}>
      {/* Path line */}
      <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-200 dark:bg-slate-700 -translate-y-1/2 rounded-full"></div>
      
      {/* Progress line */}
      <div 
        className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-jaivak-500 to-ocean-500 -translate-y-1/2 rounded-full"
        style={{ 
          width: `${Math.min(
            (currentStepIndex / (steps.length - 1)) * 100 + 
            (progress / 100) * (100 / (steps.length - 1))
          , 100)}%` 
        }}
      ></div>
      
      {/* Milestone steps */}
      <div className="flex justify-between relative z-10">
        {steps.map((step, index) => {
          const isCompleted = index < currentStepIndex;
          const isCurrent = index === currentStepIndex;
          const isPending = index > currentStepIndex;
          
          return (
            <div key={step.level} className="flex flex-col items-center">
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center",
                  isCompleted ? "bg-gradient-to-br from-jaivak-500 to-ocean-500 text-white" :
                  isCurrent ? "bg-gradient-to-br from-jaivak-400 to-ocean-400 text-white" :
                  "bg-slate-200 dark:bg-slate-700 text-slate-400 dark:text-slate-500"
                )}
              >
                {step.icon}
              </motion.div>
              <p className={cn(
                "text-xs mt-2 font-medium",
                isCompleted ? "text-jaivak-500 dark:text-jaivak-400" :
                isCurrent ? "text-jaivak-600 dark:text-jaivak-500" :
                "text-slate-500 dark:text-slate-400"
              )}>
                {step.name}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Level {step.level}
              </p>
            </div>
          );
        })}
      </div>
      
      {/* Current progress */}
      {currentStepIndex < steps.length - 1 && (
        <div className="mt-4 text-center">
          <div className="text-sm text-slate-600 dark:text-slate-400">
            {currentPoints} / {steps[currentStepIndex + 1].requiredPoints} points to Level {steps[currentStepIndex + 1].level}
          </div>
          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 mt-2">
            <div 
              className="bg-gradient-to-r from-jaivak-500 to-ocean-500 h-2 rounded-full" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};
