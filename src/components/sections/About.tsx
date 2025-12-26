import React, { useState, useEffect } from 'react';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { Code, Cloud, Server, Database, Shield, Globe, Terminal, Braces } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const About: React.FC = () => {
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

  const serviceItems = [
    {
      icon: <Code size={20} />,
      titleKey: 'services.frontend',
      descriptionKey: 'services.frontend.desc',
      symbol: '</>',
      color: 'cyan'
    },
    {
      icon: <Server size={20} />,
      titleKey: 'services.backend',
      descriptionKey: 'services.backend.desc',
      symbol: '{}',
      color: 'blue'
    },
    {
      icon: <Database size={20} />,
      titleKey: 'services.database',
      descriptionKey: 'services.database.desc',
      symbol: '[]',
      color: 'green'
    },
    {
      icon: <Cloud size={20} />,
      titleKey: 'services.cloud',
      descriptionKey: 'services.cloud.desc',
      symbol: '()',
      color: 'purple'
    },
    {
      icon: <Shield size={20} />,
      titleKey: 'services.security',
      descriptionKey: 'services.security.desc',
      symbol: '!=',
      color: 'red'
    },
    {
      icon: <Globe size={20} />,
      titleKey: 'services.performance',
      descriptionKey: 'services.performance.desc',
      symbol: '=>',
      color: 'indigo'
    }
  ];

  return (
    <Section 
      id="about" 
      title={t('about.title')}
      subtitle={t('about.subtitle')}
      className="bg-gradient-to-br from-blue-50 via-slate-50 to-cyan-50 dark:bg-gradient-to-br dark:from-black dark:via-black dark:to-black"
    >
      <div 
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative"
      >
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Terminal Header */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100/80 dark:bg-black/80 border border-cyan-500/40 rounded-lg backdrop-blur-sm">
            <Terminal className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />
            <span className="text-xs font-mono text-cyan-500 dark:text-cyan-400">~/about.tsx</span>
          </div>

          <h3 className="text-3xl font-mono font-bold text-slate-900 dark:text-white">
            <span className="text-cyan-500 dark:text-cyan-400">{'const '}</span>
            <span className="text-blue-500 dark:text-blue-400">about</span>
            <span className="text-cyan-500 dark:text-cyan-400">{' = '}</span>
            <span className="text-purple-500 dark:text-purple-400">{'{'}</span>
          </h3>
          
          <div className="space-y-4 pl-4 border-l-2 border-cyan-500/30 dark:border-cyan-400/30">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-slate-600 dark:text-gray-300 leading-relaxed font-mono text-sm"
            >
              <span className="text-cyan-500/70 dark:text-cyan-400/70">// </span>
              {t('about.description1')}
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-600 dark:text-gray-300 leading-relaxed font-mono text-sm"
            >
              <span className="text-cyan-500/70 dark:text-cyan-400/70">// </span>
              {t('about.description2')}
            </motion.p>
          
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-slate-600 dark:text-gray-300 leading-relaxed font-mono text-sm"
            >
              <span className="text-cyan-500/70 dark:text-cyan-400/70">// </span>
              {t('about.description3')}
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-slate-600 dark:text-gray-300 leading-relaxed font-mono text-sm"
            >
              <span className="text-cyan-500/70 dark:text-cyan-400/70">// </span>
              {t('about.description4')}
            </motion.p>
          
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-slate-600 dark:text-gray-300 leading-relaxed font-mono text-sm"
            >
              <span className="text-cyan-500/70 dark:text-cyan-400/70">// </span>
              {t('about.description5')}
            </motion.p>
          </div>

          <div className="text-2xl font-mono font-bold text-purple-500 dark:text-purple-400">
            {'};'}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <Button 
              href="#contact" 
              variant="primary"
              className="group hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 font-mono"
            >
              <span className="flex items-center gap-2">
                <Braces className="w-4 h-4" />
                {t('about.cta.contact')}
                <span className="group-hover:translate-x-1 transition-transform duration-300">{'=>'}</span>
              </span>
            </Button>
            <Button 
              href="#projects" 
              variant="outline"
              className="group hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 border-cyan-500/50 text-cyan-500 dark:text-cyan-400 hover:border-cyan-500 dark:hover:border-cyan-400 transition-all duration-300 font-mono"
            >
              <span className="flex items-center gap-2">
                <Code className="w-4 h-4" />
                {t('hero.cta.work')}
                <span className="group-hover:translate-x-1 transition-transform duration-300">{'=>'}</span>
              </span>
            </Button>
          </motion.div>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {serviceItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="group bg-slate-100/80 dark:bg-black/80 backdrop-blur-sm p-5 rounded-lg border border-cyan-500/40 hover:border-cyan-500 dark:hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              {/* Terminal-style header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-cyan-500/70 dark:text-cyan-400/70">{item.symbol}</span>
                  <div className="text-cyan-500 dark:text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                </div>
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-red-500/60"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500/60"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500/60"></div>
                </div>
              </div>

              <h4 className="text-base font-mono font-semibold text-slate-900 dark:text-white mb-2 transition-colors duration-300 group-hover:text-cyan-500 dark:group-hover:text-cyan-400">
                {t(item.titleKey)}
              </h4>
              <p className="text-slate-600 dark:text-gray-400 text-xs font-mono leading-relaxed">
                <span className="text-cyan-500/70 dark:text-cyan-400/70">// </span>
                {t(item.descriptionKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default About;