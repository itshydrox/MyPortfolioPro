import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CodeWindowProps {
  children: ReactNode;
  title?: string;
  className?: string;
}

const CodeWindow: React.FC<CodeWindowProps> = ({ children, title = 'index.tsx', className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`bg-[#1e1e1e] dark:bg-[#0d1117] rounded-lg overflow-hidden border border-gray-700/50 dark:border-gray-800/50 shadow-2xl ${className}`}
    >
      {/* Window Header */}
      <div className="bg-[#2d2d30] dark:bg-[#161b22] px-4 py-2 flex items-center justify-between border-b border-gray-700/50">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors cursor-pointer" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors cursor-pointer" />
            <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors cursor-pointer" />
          </div>
          <span className="text-xs text-gray-400 ml-3 font-mono">{title}</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 flex items-center justify-center text-gray-500 hover:text-gray-300 cursor-pointer">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
              <path d="M6 0L0 6h12L6 0z" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Window Content */}
      <div className="p-6">
        {children}
      </div>
    </motion.div>
  );
};

export default CodeWindow;
