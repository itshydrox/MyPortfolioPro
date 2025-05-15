import React, { useState, useEffect } from 'react';
import Section from '../ui/Section';
import { skillCategories } from '../../data/skills';
import { useLanguage } from '../../context/LanguageContext';
import { useInView } from 'react-intersection-observer';

const Skills: React.FC = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <Section
      id="skills"
      title={t('skills.title')}
      subtitle={t('skills.subtitle')}
      className="bg-gradient-to-br from-gray-50 via-blue-50/10 to-white dark:from-gray-900 dark:via-blue-900/10 dark:to-gray-800 overflow-hidden"
    >
      <div 
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {skillCategories.map((category, categoryIndex) => (
          <div 
            key={category.name}
            className="opacity-0 animate-fade-in"
            style={{ animationDelay: `${categoryIndex * 200}ms`, animationFillMode: 'forwards' }}
          >
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-500 group">
              <h3 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent mb-4">
                {category.name}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name}
                    className={`transform transition-all duration-500 ${
                      isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
                    }`}
                    style={{ transitionDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms` }}
                  >
                    <div className="flex justify-between items-center mb-1.5 group/skill">
                      <div className="flex items-center gap-2">
                        <div className="relative p-2 rounded-xl bg-white dark:bg-gray-900 shadow-lg group-hover/skill:shadow-xl 
                          transition-all duration-300 transform group-hover/skill:scale-110 group-hover/skill:-rotate-3
                          hover:shadow-[0_8px_20px_-6px_rgba(79,209,197,0.5)] dark:hover:shadow-[0_8px_20px_-6px_rgba(79,209,197,0.3)]
                          before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-br before:from-white/40 before:to-transparent before:opacity-0 
                          before:transition-opacity before:duration-300 group-hover/skill:before:opacity-100
                          border border-gray-100 dark:border-gray-700"
                        >
                          <span className="relative z-10 transform transition-transform duration-300">
                            <img 
                              src={skill.iconUrl} 
                              alt={skill.name}
                              className="w-6 h-6 transition-all duration-300"
                              width={24}
                              height={24}
                            />
                          </span>
                        </div>
                        <span className="text-base font-medium text-gray-900 dark:text-white transition-colors duration-300 group-hover/skill:text-blue-600 dark:group-hover/skill:text-blue-400">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400 font-medium min-w-[2.5rem] text-right">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200/50 dark:bg-gray-700/50 rounded-full overflow-hidden backdrop-blur-sm relative">
                      <div
                        className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-500 dark:to-cyan-400 rounded-full transition-all duration-1000 ease-out shadow-lg"
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * 200) + (skillIndex * 100) + 300}ms`
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-shimmer-slow"></div>
                      </div>
                      <div 
                        className="absolute h-full w-full rounded-full opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"
                        style={{
                          background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%)',
                          transform: 'translateX(-100%)',
                          animation: 'shimmer 2s infinite'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;