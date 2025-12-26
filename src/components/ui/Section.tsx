import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ 
  id, 
  title, 
  subtitle, 
  children, 
  className = '' 
}) => {
  return (
    <section 
      id={id} 
      className={`select-none overflow-hidden py-16 md:py-24 transition-colors relative z-10 ${className}`}
    >
      {/* Subtle Grid Overlay - applies to all sections */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(34,211,238,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-50 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 max-w-[100vw] relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-mono font-bold text-slate-900 dark:text-white mb-4">
            <span className="text-cyan-500 dark:text-cyan-400">{'<'}</span>
            {title}
            <span className="text-cyan-500 dark:text-cyan-400">{' />'}</span>
          </h2>
          {subtitle && (
            <p className="text-lg font-mono text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
              <span className="text-cyan-500/70 dark:text-cyan-400/70">// </span>
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;