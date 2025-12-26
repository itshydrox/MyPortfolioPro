import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface IDECardProps {
  children: ReactNode;
  title?: string;
  icon?: ReactNode;
  className?: string;
  delay?: number;
}

const IDECard: React.FC<IDECardProps> = ({ 
  children, 
  title, 
  icon,
  className = '',
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ y: -5, scale: 1.02 }}
      className={`bg-[#1e1e1e]/50 dark:bg-[#0d1117]/50 backdrop-blur-sm rounded-lg border border-gray-700/30 hover:border-blue-500/50 transition-all duration-300 overflow-hidden group ${className}`}
    >
      {/* Card Header */}
      {title && (
        <div className="bg-[#2d2d30]/80 dark:bg-[#161b22]/80 px-4 py-3 border-b border-gray-700/30 flex items-center gap-3">
          {icon && (
            <div className="text-blue-400 group-hover:text-cyan-400 transition-colors">
              {icon}
            </div>
          )}
          <span className="text-sm font-mono text-gray-300 group-hover:text-blue-400 transition-colors">
            {title}
          </span>
          <div className="ml-auto flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/50 group-hover:bg-red-500 transition-colors" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50 group-hover:bg-yellow-500 transition-colors" />
            <div className="w-3 h-3 rounded-full bg-green-500/50 group-hover:bg-green-500 transition-colors" />
          </div>
        </div>
      )}
      
      {/* Card Content */}
      <div className="p-6">
        {children}
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5" />
      </div>
    </motion.div>
  );
};

export default IDECard;
