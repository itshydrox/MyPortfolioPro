import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ArrowUp, MapPin, Phone, Terminal, Code2, Braces } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'framer-motion';

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
    { icon: <Github size={20} />, href: 'https://github.com/itshydrox', label: 'GitHub', symbol: '<>' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/mouad-idrissi', label: 'LinkedIn', symbol: '{}' },
    { icon: <Mail size={20} />, href: 'mailto:idrissimou3ad@gmail.com', label: 'Email', symbol: '=>' }
  ];

  const navLinks = [
    { href: '#home', label: t('nav.home'), icon: '~/' },
    { href: '#about', label: t('nav.about'), icon: 'fn' },
    { href: '#skills', label: t('nav.skills'), icon: '<>' },
    { href: '#experience', label: t('nav.experience'), icon: '{}' },
    { href: '#studies', label: t('nav.studies'), icon: '//' },
    { href: '#projects', label: t('nav.projects'), icon: '[]' },
    { href: '#contact', label: t('nav.contact'), icon: '=>' }
  ];

  return (
    <footer ref={ref} className="relative bg-blue-50/50 dark:bg-black/50 backdrop-blur-md border-t border-cyan-500/30 overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>


      <div className="relative container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand/Logo Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-slate-100/80 dark:bg-black/80 border border-cyan-500/40 w-fit">
              <Code2 size={24} className="text-cyan-500 dark:text-cyan-400" />
              <span className="font-mono text-lg font-bold text-cyan-500 dark:text-cyan-400">
                {'<Mouad Portfolio/>'}
              </span>
            </div>
            
            <p className="text-sm font-mono text-slate-600 dark:text-gray-400 max-w-xs leading-relaxed">
              <span className="text-cyan-500/70 dark:text-cyan-400/70">// </span>
              {t('footer.tagline')}
            </p>

            {/* Social Links - Terminal Style */}
            <div className="space-y-2">
              <div className="text-xs font-mono text-cyan-500/70 dark:text-cyan-400/70">// Social Links</div>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative px-3 py-2 rounded bg-slate-100/80 dark:bg-black/80 border border-cyan-500/40 hover:border-cyan-500 dark:hover:border-cyan-400 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-cyan-500/70 dark:text-cyan-400/70 opacity-60">{social.symbol}</span>
                      <span className="text-slate-600 dark:text-gray-400 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                        {social.icon}
                      </span>
                      <span className="text-xs font-mono text-slate-600 dark:text-gray-400 group-hover:text-cyan-500 dark:group-hover:text-cyan-400">
                        {social.label}
                      </span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Site Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-sm font-mono font-semibold mb-4 text-cyan-500 dark:text-cyan-400 flex items-center gap-2">
              <Braces size={16} className="text-cyan-500 dark:text-cyan-400" />
              {t('footer.navigation')}
            </h4>
            <nav className="space-y-1">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  className="group flex items-center gap-2 px-3 py-2 rounded text-xs font-mono text-slate-600 dark:text-gray-400 hover:bg-slate-200/50 dark:hover:bg-slate-900/50 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all duration-300"
                >
                  <span className="opacity-60">{link.icon}</span>
                  <span className="relative">
                    {link.label}
                    <motion.span
                      className="absolute -bottom-0.5 left-0 h-[1px] bg-cyan-500 dark:bg-cyan-400"
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </span>
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-sm font-mono font-semibold mb-4 text-cyan-500 dark:text-cyan-400 flex items-center gap-2">
              <Terminal size={16} className="text-cyan-500 dark:text-cyan-400" />
              {t('footer.contact')}
            </h4>
            <address className="not-italic space-y-3">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="flex items-center gap-3 px-3 py-2 rounded bg-slate-100/80 dark:bg-black/80 border border-cyan-500/30"
              >
                <MapPin size={16} className="text-cyan-500 dark:text-cyan-400 flex-shrink-0" />
                <p className="text-xs font-mono text-slate-600 dark:text-gray-400">Bilbao, Spain</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="flex items-center gap-3 px-3 py-2 rounded bg-slate-100/80 dark:bg-black/80 border border-cyan-500/30 hover:border-cyan-500 dark:hover:border-cyan-400 transition-all duration-300 group"
              >
                <Mail size={16} className="text-cyan-500 dark:text-cyan-400 flex-shrink-0" />
                <a 
                  href="mailto:idrissimou3ad@gmail.com"
                  className="text-xs font-mono text-slate-600 dark:text-gray-400 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors duration-300 truncate"
                >
                  idrissimou3ad@gmail.com
                </a>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.7 }}
                className="flex items-center gap-3 px-3 py-2 rounded bg-slate-100/80 dark:bg-black/80 border border-cyan-500/30 hover:border-cyan-500 dark:hover:border-cyan-400 transition-all duration-300 group"
              >
                <Phone size={16} className="text-cyan-500 dark:text-cyan-400 flex-shrink-0" />
                <a 
                  href="tel:+34643753339"
                  className="text-xs font-mono text-slate-600 dark:text-gray-400 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors duration-300"
                >
                  +34 643 753 339
                </a>
              </motion.div>
            </address>
          </motion.div>
        </div>

        {/* Bottom Bar - Terminal Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 pt-8 border-t border-cyan-500/20"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs font-mono text-slate-600 dark:text-gray-400">
              <span className="text-cyan-500/70 dark:text-cyan-400/70">// </span>
              {t('footer.copyright').replace('{year}', currentYear.toString())}
            </p>
            
            <div className="flex items-center gap-2 text-xs font-mono text-slate-600 dark:text-gray-400">
              <span className="w-2 h-2 rounded-full bg-green-500/80 animate-pulse"></span>
              <span>Built with React + TypeScript</span>
            </div>
          </div>
        </motion.div>

        {/* Scroll to Top Button - Terminal Style */}
        <motion.a
          href="#home"
          initial={{ opacity: 0, scale: 0 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 p-3 rounded-lg bg-cyan-500 dark:bg-cyan-400 text-white dark:text-slate-900 shadow-lg hover:shadow-cyan-500/50 dark:hover:shadow-cyan-400/50 transition-all duration-300 z-50 group"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform duration-300" />
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-slate-100/90 dark:bg-black/90 border border-cyan-500/40 text-cyan-500 dark:text-cyan-400 text-xs font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            scroll.top()
          </span>
        </motion.a>
      </div>

      {/* Animated Corner Brackets */}
      <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-cyan-400/20"></div>
      <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-cyan-400/20"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-cyan-400/20"></div>
      <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-cyan-400/20"></div>
    </footer>
  );
};

export default Footer;
