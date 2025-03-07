
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CustomButton } from "@/components/ui/CustomButton";
import { cn } from "@/lib/utils";
import { ArrowRight, Users, UserCheck, Award } from "lucide-react";

export interface Challenge {
  id: string;
  title: string;
  description: string;
  type: "individual" | "community" | "team";
  timeRemaining?: string;
  points: number;
  participants?: number;
  progress?: number;
  maxProgress?: number;
  status: "active" | "completed" | "upcoming";
  tags?: string[];
}

interface ChallengeCardProps {
  challenge: Challenge;
  onJoin?: () => void;
  onView?: () => void;
  className?: string;
}

export const ChallengeCard = ({ 
  challenge, 
  onJoin, 
  onView,
  className 
}: ChallengeCardProps) => {
  const typeIcon = {
    individual: <UserCheck className="h-5 w-5" />,
    community: <Users className="h-5 w-5" />,
    team: <Users className="h-5 w-5" />
  };

  const statusClasses = {
    active: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
    completed: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
    upcoming: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400"
  };
  
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Card className={cn("h-full flex flex-col overflow-hidden", className)}>
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start mb-2">
            <div className={cn(
              "text-xs px-2 py-0.5 rounded-full inline-flex items-center gap-1",
              statusClasses[challenge.status]
            )}>
              {challenge.status === "active" && "Active"}
              {challenge.status === "completed" && "Completed"}
              {challenge.status === "upcoming" && "Upcoming"}
            </div>
            
            <div className="flex items-center gap-1 text-jaivak-500 dark:text-jaivak-400 font-medium text-sm">
              <Award className="h-4 w-4" />
              {challenge.points} points
            </div>
          </div>
          
          <CardTitle className="text-lg">{challenge.title}</CardTitle>
          <CardDescription className="flex items-center gap-1">
            {typeIcon[challenge.type]}
            <span>
              {challenge.type === "individual" && "Personal Challenge"}
              {challenge.type === "community" && "Community Challenge"}
              {challenge.type === "team" && "Team Challenge"}
            </span>
          </CardDescription>
        </CardHeader>
        
        <CardContent className="flex-grow pb-2">
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
            {challenge.description}
          </p>
          
          {challenge.tags && challenge.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-3">
              {challenge.tags.map(tag => (
                <span 
                  key={tag} 
                  className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-full text-slate-600 dark:text-slate-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          
          {challenge.progress !== undefined && challenge.maxProgress !== undefined && (
            <div className="mt-2">
              <div className="flex justify-between text-xs mb-1">
                <span>Progress</span>
                <span>{challenge.progress}/{challenge.maxProgress}</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                <div 
                  className="bg-jaivak-500 h-2 rounded-full" 
                  style={{ width: `${(challenge.progress / challenge.maxProgress) * 100}%` }}
                ></div>
              </div>
              
              {challenge.participants && (
                <div className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                  <Users className="h-3 w-3" />
                  {challenge.participants} participants
                </div>
              )}
            </div>
          )}
          
          {challenge.timeRemaining && (
            <div className="text-xs text-slate-500 mt-2">
              {challenge.status === "active" && `${challenge.timeRemaining} remaining`}
              {challenge.status === "upcoming" && `Starts in ${challenge.timeRemaining}`}
            </div>
          )}
        </CardContent>
        
        <CardFooter className="pt-2">
          {challenge.status === "active" && onJoin && (
            <CustomButton 
              variant="gradient" 
              size="sm" 
              className="w-full"
              onClick={onJoin}
            >
              Join Challenge
            </CustomButton>
          )}
          
          {challenge.status === "active" && !onJoin && onView && (
            <CustomButton 
              variant="outline" 
              size="sm" 
              className="w-full"
              onClick={onView}
            >
              View Details
            </CustomButton>
          )}
          
          {challenge.status === "completed" && (
            <CustomButton 
              variant="outline" 
              size="sm" 
              className="w-full"
              onClick={onView}
            >
              View Results
            </CustomButton>
          )}
          
          {challenge.status === "upcoming" && (
            <CustomButton 
              variant="outline" 
              size="sm" 
              className="w-full"
              onClick={onView}
            >
              Remind Me <ArrowRight className="ml-1 h-4 w-4" />
            </CustomButton>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};
