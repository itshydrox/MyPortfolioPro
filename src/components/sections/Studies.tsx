import React from 'react';
import Section from '../ui/Section';
import { studies } from '../../data/studies';
import { Calendar, GraduationCap, Terminal } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'framer-motion';

const Studies: React.FC = () => {
  const { t, language } = useLanguage();
  const studiesData = studies[language as keyof typeof studies] || studies.en;

  return (
    <Section
      id="studies"
      title={t('studies.title')}
      subtitle={t('studies.subtitle')}
      className="bg-gradient-to-br from-blue-50 via-slate-50 to-cyan-50 dark:bg-gradient-to-br dark:from-black dark:via-black dark:to-black"
    >
      <div className="max-w-8xl mx-auto relative">
        {/* Timeline line - coding style */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/60 via-cyan-500/30 to-transparent transform md:-translate-x-1/2" />
        
        {studiesData.map((study, index) => (
          <motion.div
            key={study.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative mb-8 last:mb-0 ${
              index % 2 === 0 
                ? 'md:pr-[51%] pl-12 md:pl-0' 
                : 'md:pl-[51%] pl-12 md:pr-0'
            }`}
          >
            {/* Timeline dot - terminal style */}
            <div 
              className={`absolute left-5 md:left-1/2 top-6 w-2.5 h-2.5 rounded-full bg-cyan-500 dark:bg-cyan-400 transform md:-translate-x-1/2 z-10 shadow-lg shadow-cyan-500/50`}
            >
              <div className="absolute -inset-1.5 rounded-full bg-cyan-500/20 dark:bg-cyan-400/20 animate-pulse" />
            </div>

            {/* Terminal Card */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`relative bg-slate-100/80 dark:bg-black/80 backdrop-blur-sm rounded-lg border border-cyan-500/40 hover:border-cyan-500 dark:hover:border-cyan-400 transition-all duration-300 overflow-hidden group hover:shadow-lg hover:shadow-cyan-500/20
                ${index % 2 === 0 ? 'md:mr-3' : 'md:ml-3'}`}
            >
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
                    study_{index + 1}.tsx
                  </span>
                </div>
                <GraduationCap size={12} className="text-cyan-500/70 dark:text-cyan-400/70" />
              </div>

              {/* Card Content */}
              <div className="p-7">
                {/* Degree - code syntax */}
                <motion.h3 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-lg font-mono font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2"
                >
                  <span className="text-cyan-500 dark:text-cyan-400">{'const'}</span>
                  <span className="text-blue-500 dark:text-blue-400">degree</span>
                  <span className="text-cyan-500 dark:text-cyan-400">{'='}</span>
                  <span className="text-purple-500 dark:text-purple-400">{'{'}</span>
                </motion.h3>
                
                {/* Institution & Period */}
                <div className="space-y-3 pl-5 border-l-2 border-cyan-500/30 dark:border-cyan-400/30 mb-5">
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-base font-mono font-semibold text-slate-700 dark:text-gray-200"
                  >
                    <span className="text-cyan-500/70 dark:text-cyan-400/70">// </span>
                    {study.degree}
                  </motion.p>
                  
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2"
                  >
                    <GraduationCap size={16} className="text-cyan-500 dark:text-cyan-400" />
                    <span className="font-mono text-base text-slate-700 dark:text-gray-300 font-medium">{study.institution}</span>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 text-sm font-mono text-slate-600 dark:text-gray-400"
                  >
                    <Calendar size={14} className="text-cyan-500/70 dark:text-cyan-400/70" />
                    {study.period}
                  </motion.div>
                </div>
                
                <div className="text-lg font-mono font-bold text-purple-500 dark:text-purple-400 mb-5">
                  {'};'}
                </div>

                {/* Description */}
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-sm font-mono text-slate-600 dark:text-gray-300 mb-5 leading-relaxed pl-5 border-l-2 border-cyan-500/30 dark:border-cyan-400/30"
                >
                  <span className="text-cyan-500/70 dark:text-cyan-400/70">// </span>
                  {study.description}
                </motion.p>

                {/* Achievements */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-5"
                >
                  <h4 className="text-base font-mono font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <span className="text-cyan-500 dark:text-cyan-400">{'const'}</span>
                    <span className="text-blue-500 dark:text-blue-400">achievements</span>
                    <span className="text-cyan-500 dark:text-cyan-400">{'='}</span>
                    <span className="text-purple-500 dark:text-purple-400">{'['}</span>
                  </h4>
                  <ul className="space-y-3 pl-5 border-l-2 border-cyan-500/30 dark:border-cyan-400/30">
                    {study.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 * i }}
                        className="flex items-start group/item"
                      >
                        <span className="text-cyan-500/70 dark:text-cyan-400/70 mr-3 text-sm font-mono flex-shrink-0 mt-0.5">{'>'}</span>
                        <span className="text-sm font-mono text-slate-600 dark:text-gray-300 group-hover/item:text-cyan-500 dark:group-hover/item:text-cyan-400 transition-colors duration-300 leading-relaxed">
                          {achievement}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                  <div className="text-lg font-mono font-bold text-purple-500 dark:text-purple-400 mt-4">
                    {'];'}
                  </div>
                </motion.div>

                {/* Technologies - code tags */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-2.5"
                >
                  {study.technologies.map((tech, i) => (
                    <motion.span
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.03 * i }}
                      className="px-3 py-1.5 text-sm font-mono rounded bg-white/50 dark:bg-slate-900/50 
                        text-cyan-600 dark:text-cyan-400 border border-cyan-500/30
                        hover:border-cyan-500 dark:hover:border-cyan-400 hover:shadow-md hover:shadow-cyan-500/20 transition-all duration-300
                        flex items-center gap-2"
                    >
                      <img 
                        src={tech.icon} 
                        alt={tech.name}
                        className="w-4 h-4"
                        width={16}
                        height={16}
                      />
                      {'<'}{tech.name}{' />'}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Studies; 