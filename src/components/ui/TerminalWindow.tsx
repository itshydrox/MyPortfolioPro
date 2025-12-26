import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TerminalWindowProps {
  commands?: string[];
  className?: string;
}

const TerminalWindow: React.FC<TerminalWindowProps> = ({ 
  commands = ['npm install', 'npm run dev', 'Server running on port 3000...'],
  className = '' 
}) => {
  const [displayedCommands, setDisplayedCommands] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < commands.length) {
      const timer = setTimeout(() => {
        setDisplayedCommands(prev => [...prev, commands[currentIndex]]);
        setCurrentIndex(prev => prev + 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, commands]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`bg-[#1e1e1e] dark:bg-[#0d1117] rounded-lg overflow-hidden border border-gray-700/50 shadow-2xl ${className}`}
    >
      {/* Terminal Header */}
      <div className="bg-[#2d2d30] dark:bg-[#161b22] px-4 py-2 flex items-center justify-between border-b border-gray-700/50">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="text-xs text-gray-400 ml-3 font-mono">terminal</span>
        </div>
      </div>
      
      {/* Terminal Content */}
      <div className="p-4 font-mono text-sm">
        {displayedCommands.map((cmd, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-2"
          >
            <span className="text-green-400">$</span>
            <span className="text-blue-400 ml-2">{cmd}</span>
          </motion.div>
        ))}
        {currentIndex < commands.length && (
          <span className="inline-block w-2 h-4 bg-green-400 animate-pulse ml-1" />
        )}
      </div>
    </motion.div>
  );
};

export default TerminalWindow;
