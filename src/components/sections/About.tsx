import React, { useState, useEffect } from 'react';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { Code, Cloud, Server, Database, Shield, Globe } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useInView } from 'react-intersection-observer';

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
      icon: <Code size={24} />,
      titleKey: 'services.frontend',
      descriptionKey: 'services.frontend.desc',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Server size={24} />,
      titleKey: 'services.backend',
      descriptionKey: 'services.backend.desc',
      gradient: 'from-purple-500 to-blue-500'
    },
    {
      icon: <Database size={24} />,
      titleKey: 'services.database',
      descriptionKey: 'services.database.desc',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Cloud size={24} />,
      titleKey: 'services.cloud',
      descriptionKey: 'services.cloud.desc',
      gradient: 'from-orange-500 to-yellow-500'
    },
    {
      icon: <Shield size={24} />,
      titleKey: 'services.security',
      descriptionKey: 'services.security.desc',
      gradient: 'from-red-500 to-pink-500'
    },
    {
      icon: <Globe size={24} />,
      titleKey: 'services.performance',
      descriptionKey: 'services.performance.desc',
      gradient: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <Section 
      id="about" 
      title={t('about.title')}
      subtitle={t('about.subtitle')}
      className="bg-gradient-to-br from-gray-50 via-blue-50/10 to-white dark:from-gray-900 dark:via-blue-900/10 dark:to-gray-800 overflow-hidden"
    >
      <div 
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        <div className={`space-y-6 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
          <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">
            {t('about.heading')}
          </h3>
          
          <div className="space-y-4">
            <p className={`text-gray-700 dark:text-gray-300 leading-relaxed transform transition-all duration-1000 delay-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              {t('about.description1')}
            </p>
            
            <p className={`text-gray-700 dark:text-gray-300 leading-relaxed transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              {t('about.description2')}
          </p>
          
            <p className={`text-gray-700 dark:text-gray-300 leading-relaxed transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              {t('about.description3')}
            </p>

            <p className={`text-gray-700 dark:text-gray-300 leading-relaxed transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              {t('about.description4')}
          </p>
          
            <p className={`text-gray-700 dark:text-gray-300 leading-relaxed transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              {t('about.description5')}
            </p>
          </div>
          
          <div className={`flex flex-wrap gap-4 pt-4 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <Button 
              href="#contact" 
              variant="primary"
              className="group hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                {t('about.cta.contact')}
                <svg 
                  className="w-4 h-4 transition-transform duration-300 transform group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M13 7l5 5m0 0l-5 5m5-5H6" 
                  />
                </svg>
              </span>
            </Button>
            <Button 
              href="#projects" 
              variant="outline"
              className="group hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10 hover:border-blue-500/50 transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                {t('hero.cta.work')}
                <svg 
                  className="w-4 h-4 transition-transform duration-300 transform group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M13 7l5 5m0 0l-5 5m5-5H6" 
                  />
                </svg>
              </span>
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {serviceItems.map((item, index) => (
            <div 
              key={index} 
              className={`group bg-white dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl border border-gray-100/50 dark:border-gray-700/50 transform transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
              style={{ 
                transitionDelay: `${500 + index * 100}ms`,
              }}
            >
              <div className={`inline-flex items-center justify-center p-3 rounded-lg mb-4 transform transition-transform duration-300 group-hover:scale-110 bg-gradient-to-br ${item.gradient} bg-opacity-10 dark:bg-opacity-20`}>
                <div className="text-white">
                {item.icon}
                </div>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                {t(item.titleKey)}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed transition-colors duration-300">
                {t(item.descriptionKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default About;