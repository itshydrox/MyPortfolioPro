import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ArrowUp, MapPin, Phone } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../../context/LanguageContext';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  const { t } = useLanguage();

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/itshydrox', label: 'GitHub', gradient: 'from-gray-600 to-gray-800 dark:from-gray-400 dark:to-gray-600' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/mouad-idrissi', label: 'LinkedIn', gradient: 'from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600' },
    { icon: <Mail size={20} />, href: 'mailto:idrissimou3ad@gmail.com', label: 'Email', gradient: 'from-purple-600 to-purple-800 dark:from-purple-400 dark:to-purple-600' }
  ];

  const navLinks = [
    { href: '#home', label: t('nav.home') },
    { href: '#about', label: t('nav.about') },
    { href: '#skills', label: t('nav.skills') },
    { href: '#experience', label: t('nav.experience') },
    { href: '#studies', label: t('nav.studies') },
    { href: '#projects', label: t('nav.projects') },
    { href: '#contact', label: t('nav.contact') }
  ];

  return (
    <footer ref={ref} className="select-none relative bg-[#1e1e1e]/80 dark:bg-[#0d1117]/80 backdrop-blur-sm border-t border-blue-500/20 py-16 transition-all duration-700">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand/Logo Section */}
          <div className={`space-y-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <img 
              src="logo.png"
              alt="Logo" 
              className="h-12 w-auto object-contain"
            />
            <p className="text-gray-400 dark:text-gray-400 max-w-xs leading-relaxed font-mono text-sm">
              <span className="text-blue-400">{'// '}</span>{t('footer.tagline')}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transform transition-all duration-500 hover:scale-125 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  aria-label={social.label}
                >
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${social.gradient} text-white hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300`}>
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Site Navigation */}
          <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h4 className="text-lg font-semibold mb-6 text-gray-200 dark:text-white font-mono">
              <span className="text-blue-400">{'<nav>'}</span> {t('footer.navigation')}
            </h4>
            <nav className="grid grid-cols-2 gap-4">
              {navLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`group flex items-center text-gray-600 dark:text-gray-400 transform transition-all duration-500 hover:text-blue-600 dark:hover:text-blue-400 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}
                  style={{ transitionDelay: `${index * 100 + 300}ms` }}
                >
                  <span className="relative">
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h4 className="text-lg font-semibold mb-6 text-gray-200 dark:text-white font-mono">
              <span className="text-blue-400">{'<contact>'}</span> {t('footer.contact')}
            </h4>
            <address className="not-italic space-y-4">
              <div className={`flex items-center space-x-3 text-gray-600 dark:text-gray-400 transform transition-all duration-500 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`} style={{ transitionDelay: '600ms' }}>
                <MapPin size={18} className="text-blue-600 dark:text-blue-400" />
                <p>Bilbao, Spain</p>
              </div>
              <div className={`flex items-center space-x-3 transform transition-all duration-500 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`} style={{ transitionDelay: '700ms' }}>
                <Mail size={18} className="text-blue-600 dark:text-blue-400" />
                <a 
                  href="mailto:idrissimou3ad@gmail.com"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                >
                  idrissimou3ad@gmail.com
                </a>
              </div>
              <div className={`flex items-center space-x-3 transform transition-all duration-500 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`} style={{ transitionDelay: '800ms' }}>
                <Phone size={18} className="text-blue-600 dark:text-blue-400" />
                <a 
                  href="tel:+34 643 753 339"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                >
                  +34 643 753 339
                </a>
              </div>
            </address>
          </div>
        </div>

        <div className={`mt-16 pt-8 border-t border-blue-500/20 text-center transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <p className="text-gray-400 dark:text-gray-400 font-mono text-sm">
            <span className="text-blue-400">{'// '}</span>
            {t('footer.copyright').replace('{year}', currentYear.toString())}
          </p>
        </div>

        {/* Scroll to Top Button */}
        <a
          href="#home"
          className={`fixed bottom-8 right-8 p-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-500 dark:to-cyan-500 text-white shadow-lg hover:shadow-blue-500/50 transform transition-all duration-300 hover:scale-110 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;