
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Trophy, Medal, Award } from "lucide-react";

export interface LeaderboardUser {
  id: string;
  name: string;
  avatar?: string;
  points: number;
  rank: number;
  change?: number; // Positive: moved up, negative: moved down, 0 or undefined: no change
  isCurrentUser?: boolean;
}

interface LeaderboardCardProps {
  title: string;
  description?: string;
  users: LeaderboardUser[];
  currentUserRank?: number;
  className?: string;
  maxUsers?: number;
}

export const LeaderboardCard = ({ 
  title, 
  description,
  users,
  currentUserRank,
  className,
  maxUsers = 5
}: LeaderboardCardProps) => {
  const displayUsers = users.slice(0, maxUsers);
  
  // Get rank icon based on position
  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-5 w-5 text-amber-500" />;
      case 2:
        return <Medal className="h-5 w-5 text-slate-400" />;
      case 3:
        return <Medal className="h-5 w-5 text-amber-700" />;
      default:
        return <span className="flex items-center justify-center w-5 h-5 text-slate-500 font-medium">{rank}</span>;
    }
  };
  
  return (
    <Card className={cn("h-full", className)}>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">{title}</CardTitle>
        {description && (
          <p className="text-sm text-slate-500 dark:text-slate-400">{description}</p>
        )}
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {displayUsers.map((user) => (
            <div 
              key={user.id} 
              className={cn(
                "flex items-center justify-between p-2 rounded-lg",
                user.isCurrentUser 
                  ? "bg-jaivak-50 dark:bg-jaivak-900/20 border border-jaivak-200 dark:border-jaivak-800" 
                  : "hover:bg-slate-50 dark:hover:bg-slate-800"
              )}
            >
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  {getRankIcon(user.rank)}
                </div>
                
                <div className="flex items-center gap-2">
                  {user.avatar ? (
                    <div className="w-8 h-8 rounded-full overflow-hidden">
                      <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-jaivak-100 to-ocean-100 dark:from-jaivak-700 dark:to-ocean-700 flex items-center justify-center text-slate-800 dark:text-white font-medium">
                      {user.name.charAt(0)}
                    </div>
                  )}
                  
                  <div className="flex flex-col">
                    <span className={cn(
                      "font-medium",
                      user.isCurrentUser && "text-jaivak-700 dark:text-jaivak-300"
                    )}>
                      {user.name} {user.isCurrentUser && "(You)"}
                    </span>
                    
                    {user.change !== undefined && (
                      <span className="text-xs">
                        {user.change > 0 && (
                          <span className="text-green-600 dark:text-green-400">↑ {user.change}</span>
                        )}
                        {user.change < 0 && (
                          <span className="text-red-600 dark:text-red-400">↓ {Math.abs(user.change)}</span>
                        )}
                        {user.change === 0 && (
                          <span className="text-slate-500">-</span>
                        )}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-1">
                <Award className="h-4 w-4 text-jaivak-500" />
                <span className="font-semibold text-jaivak-600 dark:text-jaivak-400">{user.points}</span>
              </div>
            </div>
          ))}
          
          {/* If current user is not in top 5, show their position separately */}
          {currentUserRank && currentUserRank > maxUsers && (
            <>
              <div className="py-1 px-2 text-center text-sm text-slate-500">
                •••
              </div>
              
              {users.filter(user => user.rank === currentUserRank).map(user => (
                <div 
                  key={user.id} 
                  className="flex items-center justify-between p-2 rounded-lg bg-jaivak-50 dark:bg-jaivak-900/20 border border-jaivak-200 dark:border-jaivak-800"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0">
                      <span className="flex items-center justify-center w-5 h-5 text-slate-500 font-medium">{user.rank}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      {user.avatar ? (
                        <div className="w-8 h-8 rounded-full overflow-hidden">
                          <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                        </div>
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-jaivak-100 to-ocean-100 dark:from-jaivak-700 dark:to-ocean-700 flex items-center justify-center text-slate-800 dark:text-white font-medium">
                          {user.name.charAt(0)}
                        </div>
                      )}
                      
                      <span className="font-medium text-jaivak-700 dark:text-jaivak-300">
                        {user.name} (You)
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    <Award className="h-4 w-4 text-jaivak-500" />
                    <span className="font-semibold text-jaivak-600 dark:text-jaivak-400">{user.points}</span>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
