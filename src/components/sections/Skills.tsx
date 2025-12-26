import React, { useState, useEffect } from 'react';
import Section from '../ui/Section';
import { skillCategories } from '../../data/skills';
import { useLanguage } from '../../context/LanguageContext';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Terminal, Code2 } from 'lucide-react';

const Skills: React.FC = () => {
  const { t, language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const skillsData = skillCategories[language as keyof typeof skillCategories] || skillCategories.en;

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  // Convert percentage to proficiency level
  const getProficiencyLevel = (level: number) => {
    if (level >= 90) return { 
      label: t('skills.proficiency.expert'), 
      dots: 5, 
      color: 'text-green-500 dark:text-green-400' 
    };
    if (level >= 75) return { 
      label: t('skills.proficiency.advanced'), 
      dots: 4, 
      color: 'text-blue-500 dark:text-blue-400' 
    };
    if (level >= 60) return { 
      label: t('skills.proficiency.proficient'), 
      dots: 3, 
      color: 'text-cyan-500 dark:text-cyan-400' 
    };
    if (level >= 40) return { 
      label: t('skills.proficiency.intermediate'), 
      dots: 2, 
      color: 'text-purple-500 dark:text-purple-400' 
    };
    return { 
      label: t('skills.proficiency.familiar'), 
      dots: 1, 
      color: 'text-slate-500 dark:text-slate-400' 
    };
  };

  return (
    <Section
      id="skills"
      title={t('skills.title')}
      subtitle={t('skills.subtitle')}
      className="bg-gradient-to-br from-blue-50 via-slate-50 to-cyan-50 dark:bg-gradient-to-br dark:from-black dark:via-black dark:to-black"
    >
      <div 
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {skillsData.map((category, categoryIndex) => (
          <motion.div 
            key={category.name}
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
          >
            {/* Terminal-style card */}
            <div className="bg-slate-100/80 dark:bg-black/80 backdrop-blur-sm rounded-lg border border-cyan-500/40 hover:border-cyan-500 dark:hover:border-cyan-400 transition-all duration-300 overflow-hidden group hover:shadow-lg hover:shadow-cyan-500/20">
              {/* Terminal header */}
              <div className="border-b border-cyan-500/20 px-4 py-2 flex items-center justify-between bg-slate-200/50 dark:bg-black/50">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                  </div>
                  <Terminal size={12} className="text-cyan-500 dark:text-cyan-400" />
                  <span className="text-[10px] font-mono text-cyan-500 dark:text-cyan-400">
                    {category.name.toLowerCase().replace(/\s+/g, '_')}.tsx
                  </span>
                </div>
                <Code2 size={12} className="text-cyan-500/70 dark:text-cyan-400/70" />
              </div>

              {/* Skills content */}
              <div className="p-5">
                <h3 className="text-base font-mono font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <span className="text-cyan-500 dark:text-cyan-400">{'const'}</span>
                  <span className="text-blue-500 dark:text-blue-400">{category.name.toLowerCase().replace(/\s+/g, '')}</span>
                  <span className="text-cyan-500 dark:text-cyan-400">{'='}</span>
                  <span className="text-purple-500 dark:text-purple-400">{'['}</span>
                </h3>
                
                <div className="space-y-4 pl-4 border-l-2 border-cyan-500/20 dark:border-cyan-400/20">
                  {category.skills.map((skill, skillIndex) => {
                    const proficiency = getProficiencyLevel(skill.level);
                    
                    return (
                    <motion.div 
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isVisible ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                      className="group/skill"
                    >
                      {/* Skill item */}
                      <div className="flex items-center justify-between p-3 rounded-lg bg-white/50 dark:bg-slate-900/50 border border-transparent hover:border-cyan-500/30 dark:hover:border-cyan-400/30 transition-all duration-300 hover:shadow-md">
                        <div className="flex items-center gap-3 flex-1">
                          {/* Icon */}
                          <div className="relative p-2 rounded bg-slate-100 dark:bg-black border border-cyan-500/20 group-hover/skill:border-cyan-500 dark:group-hover/skill:border-cyan-400 transition-all duration-300 group-hover/skill:scale-110 group-hover/skill:shadow-lg group-hover/skill:shadow-cyan-500/20">
                            <img 
                              src={skill.iconUrl} 
                              alt={skill.name}
                              className="w-6 h-6"
                              width={24}
                              height={24}
                            />
                          </div>
                          
                          {/* Skill name */}
                          <div className="flex-1">
                            <div className="text-sm font-mono font-semibold text-slate-900 dark:text-white group-hover/skill:text-cyan-500 dark:group-hover/skill:text-cyan-400 transition-colors duration-300">
                              {skill.name}
                            </div>
                            <div className={`text-xs font-mono ${proficiency.color} mt-0.5`}>
                              {proficiency.label}
                            </div>
                          </div>
                        </div>

                        {/* Proficiency dots */}
                        <div className="flex items-center gap-1.5">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ scale: 0, opacity: 0 }}
                              animate={isVisible ? { scale: 1, opacity: 1 } : {}}
                              transition={{ 
                                duration: 0.3, 
                                delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + (i * 0.05) + 0.3 
                              }}
                              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                i < proficiency.dots
                                  ? 'bg-gradient-to-br from-cyan-500 to-blue-500 dark:from-cyan-400 dark:to-blue-400 shadow-sm group-hover/skill:shadow-md group-hover/skill:shadow-cyan-500/50'
                                  : 'bg-slate-300 dark:bg-slate-700'
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Code comment */}
                      <div className="mt-1 ml-3 text-[10px] font-mono text-cyan-500/50 dark:text-cyan-400/50">
                        {'// '}
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={isVisible ? { opacity: 1 } : {}}
                          transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.5 }}
                        >
                          {Array(proficiency.dots).fill('●').join(' ')} {proficiency.label.toLowerCase()}
                        </motion.span>
                      </div>
                    </motion.div>
                  )}
                  )}
                </div>

                {/* Closing bracket */}
                <div className="mt-4 text-base font-mono font-bold text-purple-500 dark:text-purple-400">
                  {'];'}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;