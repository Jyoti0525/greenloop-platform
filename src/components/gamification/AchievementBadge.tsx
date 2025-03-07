
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  unlocked: boolean;
  progress?: number;
  maxProgress?: number;
  level?: number;
  date?: string;
}

interface AchievementBadgeProps {
  achievement: Achievement;
  size?: "sm" | "md" | "lg";
  showTooltip?: boolean;
  className?: string;
}

export const AchievementBadge = ({ 
  achievement, 
  size = "md", 
  showTooltip = true,
  className 
}: AchievementBadgeProps) => {
  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-16 h-16",
    lg: "w-20 h-20",
  };

  const badgeContent = (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "relative rounded-full flex items-center justify-center",
        sizeClasses[size],
        achievement.unlocked 
          ? "bg-gradient-to-br from-jaivak-500 to-ocean-500 text-white" 
          : "bg-slate-200 dark:bg-slate-700 text-slate-400 dark:text-slate-500",
        className
      )}
    >
      {achievement.progress !== undefined && achievement.maxProgress && (
        <svg className="absolute inset-0 w-full h-full -rotate-90">
          <circle
            cx="50%"
            cy="50%"
            r={size === "sm" ? "22" : size === "md" ? "30" : "38"}
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            strokeDasharray="100"
            strokeDashoffset={100 - (achievement.progress / achievement.maxProgress * 100)}
            className="text-jaivak-300 dark:text-jaivak-700"
          />
        </svg>
      )}
      <div className="z-10">
        {achievement.icon}
      </div>
      {achievement.level && (
        <div className="absolute -bottom-1 -right-1 bg-jaivak-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {achievement.level}
        </div>
      )}
    </motion.div>
  );

  if (!showTooltip) return badgeContent;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          {badgeContent}
        </TooltipTrigger>
        <TooltipContent className="max-w-xs">
          <div>
            <p className="font-semibold">{achievement.name}</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">{achievement.description}</p>
            {achievement.date && (
              <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">Unlocked: {achievement.date}</p>
            )}
            {achievement.progress !== undefined && achievement.maxProgress && (
              <div className="mt-2">
                <div className="flex justify-between text-xs mb-1">
                  <span>Progress</span>
                  <span>{achievement.progress}/{achievement.maxProgress}</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5">
                  <div 
                    className="bg-jaivak-500 h-1.5 rounded-full" 
                    style={{ width: `${(achievement.progress / achievement.maxProgress) * 100}%` }}
                  ></div>
                </div>
              </div>
            )}
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
