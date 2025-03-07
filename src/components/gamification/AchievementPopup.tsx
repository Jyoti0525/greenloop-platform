
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Achievement } from "./AchievementBadge";

interface AchievementPopupProps {
  achievement: Achievement;
  onClose: () => void;
  duration?: number;
}

export const AchievementPopup = ({ achievement, onClose, duration = 5000 }: AchievementPopupProps) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 500); // Allow time for exit animation
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.8 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="fixed bottom-4 right-4 md:bottom-8 md:right-8 max-w-sm z-50"
        >
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-jaivak-200 dark:border-slate-700 overflow-hidden">
            <div className="bg-gradient-to-r from-jaivak-500 to-ocean-500 px-4 py-2 flex justify-between items-center">
              <span className="text-white font-semibold">Achievement Unlocked!</span>
              <button 
                onClick={() => {
                  setVisible(false);
                  setTimeout(onClose, 500);
                }}
                className="text-white/80 hover:text-white focus:outline-none"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            
            <div className="p-4 flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-jaivak-500 to-ocean-500 flex items-center justify-center text-white">
                {achievement.icon}
              </div>
              
              <div className="flex-1">
                <h4 className="text-lg font-medium text-slate-900 dark:text-white">{achievement.name}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">{achievement.description}</p>
              </div>
            </div>
            
            <motion.div 
              className="h-1 bg-jaivak-500"
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: duration / 1000, ease: "linear" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
