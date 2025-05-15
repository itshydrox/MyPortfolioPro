import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import { Menu, X, Sun, Moon, Github, Linkedin, Languages } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavLink {
  key: string;
  href: string;
}

const navLinks: NavLink[] = [
  { key: 'nav.home', href: '#home' },
  { key: 'nav.about', href: '#about' },
  { key: 'nav.skills', href: '#skills' },
  { key: 'nav.projects', href: '#projects' },
  { key: 'nav.studies', href: '#studies' },
  { key: 'nav.experience', href: '#experience' },
  { key: 'nav.contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionId = section.getAttribute('id') || '';
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className={`fixed w-full md:w-[96%] left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'top-0 md:top-3 bg-white/[0.65] dark:bg-gray-950/[0.65] backdrop-blur-[12px] backdrop-saturate-[1.8] border-[0.5px] border-white/[0.15] dark:border-gray-800/[0.15] shadow-[0_8px_32px_rgba(0,0,0,0.03)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.2)] md:rounded-2xl' 
            : 'top-0 bg-transparent border-transparent'
        }`}
      >
        <div className={`mx-auto px-4 ${isScrolled ? 'py-2.5' : 'py-3'} transition-all duration-300`}>
          <nav className="flex items-center justify-between md:justify-center relative">
            {/* Logo */}
            <motion.a 
              href="#home" 
              className="flex items-center md:absolute md:left-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Go to homepage"
            >
              <div className="relative w-auto h-8 md:h-9">
                <img 
                  src="/logo.png"
                  alt="Logo" 
                  className="h-full w-auto object-contain"
                />
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center">
              <motion.div 
                className="flex items-center bg-white/[0.45] dark:bg-gray-950/[0.45] backdrop-blur-md backdrop-saturate-150 rounded-xl p-1.5"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.key}
                    href={link.href}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    className={`px-4 py-1.5 text-[13px] font-medium transition-all duration-300 relative ${
                      activeSection === link.href.substring(1)
                        ? 'text-white'
                        : 'text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400'
                    }`}
                  >
                    {activeSection === link.href.substring(1) && (
                      <motion.span
                        layoutId="activeSection"
                        className="absolute inset-0 bg-gradient-to-r from-blue-500/90 to-blue-600/90 backdrop-blur-sm rounded-md -z-10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {t(link.key)}
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Actions */}
            <div className="hidden md:flex items-center space-x-2 md:absolute md:right-0">
              {/* Language Toggle */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleLanguage}
                className="p-2 rounded-lg bg-white/[0.45] dark:bg-gray-950/[0.45] backdrop-blur-md backdrop-saturate-150 hover:bg-white/60 dark:hover:bg-gray-800/60 transition-all duration-300 flex items-center gap-1"
                aria-label="Switch language"
              >
                <Languages size={18} className="text-gray-700 dark:text-gray-200" />
                <span className="text-xs font-medium text-gray-700 dark:text-gray-200">
                  {language.toUpperCase()}
                </span>
              </motion.button>

              {/* Theme Toggle */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-white/[0.45] dark:bg-gray-950/[0.45] backdrop-blur-md backdrop-saturate-150 hover:bg-white/60 dark:hover:bg-gray-800/60 transition-all duration-300"
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={theme}
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 180, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {theme === 'dark' ? (
                      <Sun size={18} className="text-gray-700 dark:text-gray-200" />
                    ) : (
                      <Moon size={18} className="text-gray-700 dark:text-gray-200" />
                    )}
                  </motion.div>
                </AnimatePresence>
              </motion.button>

              {/* Social Links */}
              <motion.div 
                className="flex items-center space-x-1 bg-white/[0.45] dark:bg-gray-950/[0.45] backdrop-blur-md backdrop-saturate-150 rounded-lg p-1.5"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <motion.a 
                  href="https://github.com/itshydrox" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-md hover:bg-white/60 dark:hover:bg-gray-800/60 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="GitHub"
                >
                  <Github size={18} className="text-gray-700 dark:text-gray-200" />
                </motion.a>
                <motion.a 
                  href="https://www.linkedin.com/in/mouad-idrissi/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-md hover:bg-white/60 dark:hover:bg-gray-800/60 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} className="text-gray-700 dark:text-gray-200" />
                </motion.a>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleLanguage}
                className="p-2 rounded-lg bg-white/[0.45] dark:bg-gray-950/[0.45] backdrop-blur-md backdrop-saturate-150 flex items-center gap-1"
                aria-label="Switch language"
              >
                <Languages size={18} className="text-gray-700 dark:text-gray-200" />
                <span className="text-xs font-medium text-gray-700 dark:text-gray-200">
                  {language.toUpperCase()}
                </span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-white/[0.45] dark:bg-gray-950/[0.45] backdrop-blur-md backdrop-saturate-150"
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={theme}
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 180, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {theme === 'dark' ? (
                      <Sun size={18} className="text-gray-800 dark:text-gray-200" />
                    ) : (
                      <Moon size={18} className="text-gray-800 dark:text-gray-200" />
                    )}
                  </motion.div>
                </AnimatePresence>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg bg-white/[0.45] dark:bg-gray-950/[0.45] backdrop-blur-md backdrop-saturate-150"
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isOpen ? 'close' : 'open'}
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 180, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isOpen ? (
                      <X size={18} className="text-gray-800 dark:text-gray-200" />
                    ) : (
                      <Menu size={18} className="text-gray-800 dark:text-gray-200" />
                    )}
                  </motion.div>
                </AnimatePresence>
              </motion.button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu - Outside header */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm z-[998]"
              onClick={() => setIsOpen(false)}
            />
            <motion.div 
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-[100dvh] w-[85%] sm:w-[380px] bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl backdrop-saturate-150 
                shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] 
                border-l border-white/[0.15] dark:border-gray-800/[0.15] z-[999] overflow-hidden"
            >
              <div className="h-full flex flex-col">
                {/* Header */}
                <div className="sticky top-0 flex items-center justify-between p-5 border-b border-gray-200/50 dark:border-gray-800/50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl">
                  <motion.a 
                    href="#home"
                    className="flex items-center gap-2"
                    onClick={() => setIsOpen(false)}
                  >
                    <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
                  </motion.a>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors duration-300"
                    aria-label="Close menu"
                  >
                    <X size={24} className="text-gray-700 dark:text-gray-300" />
                  </motion.button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 overflow-y-auto py-6 px-4">
                  <div className="space-y-2">
                    {navLinks.map((link, index) => (
                      <motion.a
                        key={link.key}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`block px-5 py-3.5 rounded-xl text-[15px] font-medium transition-all duration-300 
                          ${activeSection === link.href.substring(1)
                            ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-sm'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/50'
                          }`}
                      >
                        {t(link.key)}
                      </motion.a>
                    ))}
                  </div>
                </nav>

                {/* Footer Actions */}
                <div className="sticky bottom-0 p-5 border-t border-gray-200/50 dark:border-gray-800/50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl">
                  <div className="grid grid-cols-2 gap-3">
                    <motion.a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl 
                        bg-gray-100 dark:bg-gray-800/50 hover:bg-gray-200 dark:hover:bg-gray-700/50 
                        text-gray-700 dark:text-gray-300 transition-all duration-300"
                    >
                      <Github size={20} />
                      <span className="text-sm font-medium">GitHub</span>
                    </motion.a>
                    <motion.a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl 
                        bg-gray-100 dark:bg-gray-800/50 hover:bg-gray-200 dark:hover:bg-gray-700/50 
                        text-gray-700 dark:text-gray-300 transition-all duration-300"
                    >
                      <Linkedin size={20} />
                      <span className="text-sm font-medium">LinkedIn</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;