import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  title?: string;
  className?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ 
  children, 
  id, 
  title,
  className = '' 
}) => {
  return (
    <section 
      id={id}
      className={`py-20 relative ${className}`}
    >
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-blue-400 font-mono text-sm">{'<section>'}</span>
              <div className="h-px flex-1 bg-gradient-to-r from-blue-500/50 to-transparent" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-200 neon-text">
              {title}
            </h2>
            <div className="flex items-center gap-3 mt-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-blue-500/50" />
              <span className="text-blue-400 font-mono text-sm">{'</section>'}</span>
            </div>
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
