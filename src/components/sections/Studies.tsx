import React from 'react';
import Section from '../ui/Section';
import { studies } from '../../data/studies';
import { Calendar, GraduationCap } from 'lucide-react';
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
      className="bg-gradient-to-b from-white via-indigo-50/10 to-white dark:from-gray-950 dark:via-indigo-950/10 dark:to-gray-900"
    >
      <div className="max-w-10xl mx-auto relative">
        {/* Timeline line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-indigo-500/50 to-transparent transform md:-translate-x-1/2" />
        
        {studiesData.map((study, index) => (
          <motion.div
            key={study.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`relative mb-16 last:mb-0 ${
              index % 2 === 0 
                ? 'md:pr-[53%] pl-16 md:pl-0' 
                : 'md:pl-[53%] pl-16 md:pr-0'
            }`}
          >
            {/* Timeline dot */}
            <div 
              className={`absolute left-7 md:left-1/2 top-8 w-3 h-3 rounded-full bg-indigo-500 transform
                ${index % 2 === 0 
                  ? 'md:-translate-x-1/2' 
                  : 'md:-translate-x-1/2'
                }`}
            >
              <div className="absolute -inset-2 rounded-full bg-indigo-500/20 animate-pulse" />
              <div className="absolute -inset-1 rounded-full bg-indigo-500/40" />
            </div>

            {/* Card */}
            <motion.div
              whileHover={{ y: -4, x: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl backdrop-saturate-150 rounded-2xl p-8 shadow-lg
                ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}
                border border-gray-100 dark:border-gray-700
                hover:shadow-xl transition-all duration-300`}
            >
              {/* Icon Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  type: "spring",
                  stiffness: 400,
                  damping: 25,
                  delay: 0.2 
                }}
                className={`absolute -top-3 -left-3 md:-top-3 
                  ${index % 2 === 0 ? 'md:-right-3 md:left-auto' : 'md:-left-3'}
                  flex items-center justify-center z-10`}
              >
                <div className="relative">
                  {/* Outer glow effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-500 blur-md opacity-40" />
                  
                  {/* Main circle */}
                  <div className="relative h-11 w-11 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-500 p-[2px]">
                    <div className="h-full w-full rounded-xl bg-white dark:bg-gray-800 flex items-center justify-center backdrop-blur-xl">
                      <GraduationCap size={18} className="text-indigo-500 dark:text-indigo-400" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                <motion.h3 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-2xl w-2/3 font-bold bg-gradient-to-r from-indigo-600 to-purple-400 dark:from-indigo-400 dark:to-purple-300 bg-clip-text text-transparent"
                >
                  {study.degree}
                </motion.h3>
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center text-gray-500 dark:text-gray-400 text-sm bg-gray-100 dark:bg-gray-700/50 rounded-full px-4 py-1.5"
                >
                  <Calendar size={14} className="mr-2" />
                  {study.period}
                </motion.div>
              </div>

              {/* Institution */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex items-center text-gray-600 dark:text-gray-300 mb-8 bg-gray-50 dark:bg-gray-700/30 rounded-lg px-5 py-3"
              >
                <GraduationCap size={20} className="mr-3 text-indigo-500 dark:text-indigo-400" />
                <span className="font-medium text-lg">{study.institution}</span>
              </motion.div>

              {/* Description */}
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed text-base"
              >
                {study.description}
              </motion.p>

              {/* Achievements */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-5 uppercase tracking-wider">
                  {t('studies.achievements')}
                </h4>
                <ul className="space-y-4">
                  {study.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i }}
                      className="flex items-start group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400 mt-2 mr-4 flex-shrink-0 group-hover:scale-150 transition-transform duration-300" />
                      <span className="text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors duration-300">
                        {achievement}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Technologies */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex flex-wrap gap-2"
              >
                {study.technologies.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: 0.05 * i,
                      type: "spring",
                      stiffness: 300,
                      damping: 20
                    }}
                    className="px-4 py-1.5 text-sm rounded-full bg-indigo-50 dark:bg-indigo-900/30 
                      text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-800
                      hover:bg-indigo-100 dark:hover:bg-indigo-800/40 transition-colors duration-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Studies; 