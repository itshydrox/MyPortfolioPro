import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import { Menu, X, Sun, Moon, Github, Linkedin, Terminal, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavLink {
  key: string;
  href: string;
  icon?: string;
}

const navLinks: NavLink[] = [
  { key: 'nav.home', href: '#home', icon: '~/' },
  { key: 'nav.about', href: '#about', icon: 'fn' },
  { key: 'nav.skills', href: '#skills', icon: '<>' },
  { key: 'nav.experience', href: '#experience', icon: '{}' },
  { key: 'nav.projects', href: '#company-projects', icon: '[]' },
  { key: 'nav.studies', href: '#studies', icon: '//' },
  { key: 'nav.contact', href: '#contact', icon: '=>' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, t, setLanguage } = useLanguage();

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
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed w-full md:w-[96%] md:left-[2%] z-50 transition-all duration-500 ${
          isScrolled 
            ? 'top-0 md:top-2 bg-blue-50/80 dark:bg-black/50 backdrop-blur-xl border border-cyan-500/30 shadow-[0_8px_32px_rgba(6,182,212,0.2)] md:rounded-lg' 
            : 'top-0 bg-blue-50/80 dark:bg-black/50 backdrop-blur-md border border-cyan-500/30'
        }`}
      >

        {/* Terminal-style top bar */}
        <div className="border-b border-cyan-500/20 px-4 py-1.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
            </div>
            <span className="text-[10px] font-mono text-cyan-500 dark:text-cyan-400 ml-2 hidden sm:block">
              portfolio.tsx
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Terminal size={12} className="text-cyan-500 dark:text-cyan-400" />
            <span className="text-[10px] font-mono text-cyan-500 dark:text-cyan-400 hidden sm:block">v1.0.0</span>
          </div>
        </div>

        <div className={`mx-auto px-4 ${isScrolled ? 'py-2' : 'py-2.5'} transition-all duration-300`}>
          <nav className="flex items-center justify-between md:justify-center relative">
            {/* Logo with Terminal Icon */}
            <motion.a 
              href="#home" 
              className="flex items-center gap-2 md:absolute md:left-0 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              aria-label="Go to homepage"
            >
              <div className="flex items-center gap-2 px-2 py-1 rounded bg-slate-100/80 dark:bg-black/80 border border-cyan-500/40">
                <Code2 size={18} className="text-cyan-500 dark:text-cyan-400" />
                <span className="font-mono text-sm font-bold text-cyan-500 dark:text-cyan-400 hidden sm:block">
                  {'<Mouad Portfolio/>'}
                </span>
              </div>
            </motion.a>

            {/* Desktop Navigation - Code Style */}
            <div className="hidden md:flex items-center">
              <motion.div 
                className="flex items-center gap-1 bg-slate-100/80 dark:bg-black/80 backdrop-blur-md border border-cyan-500/40 rounded-md p-1"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.key}
                    href={link.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    className={`group relative px-3 py-1.5 text-[12px] font-mono font-medium transition-all duration-300 rounded ${
                      activeSection === link.href.substring(1)
                        ? 'text-slate-900 dark:text-slate-900'
                        : 'text-slate-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400'
                    }`}
                  >
                    {activeSection === link.href.substring(1) && (
                      <motion.span
                        layoutId="activeSection"
                        className="absolute inset-0 bg-cyan-400 rounded shadow-[0_0_15px_rgba(6,182,212,0.5)]"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative flex items-center gap-1.5">
                      <span className="text-[10px] opacity-60">{link.icon}</span>
                      <span className="tracking-wide">{t(link.key)}</span>
                    </span>
                    {/* Hover effect */}
                    {activeSection !== link.href.substring(1) && (
                      <motion.span
                        className="absolute bottom-0 left-0 h-[1px] bg-cyan-400"
                        initial={{ width: 0 }}
                        whileHover={{ width: '100%' }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Actions - Terminal Style */}
            <div className="hidden md:flex items-center gap-1.5 md:absolute md:right-0">
              {/* Language Toggle */}
              <motion.div className="relative group z-[60]">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-2.5 py-1.5 rounded bg-slate-100/80 dark:bg-black/80 border border-cyan-500/40 flex items-center gap-2 hover:border-cyan-400 transition-all duration-300"
                  aria-label="Select language"
                >
                  <span className="text-[10px] font-mono text-cyan-500/70 dark:text-cyan-400/70">lang:</span>
                  <span className="text-xs font-mono font-bold text-cyan-500 dark:text-cyan-400">
                    {language.toUpperCase()}
                  </span>
                </motion.button>
                
                {/* Language Dropdown - Terminal Style */}
                <motion.div 
                  className="absolute right-0 mt-2 w-44 rounded-md overflow-visible bg-slate-100/98 dark:bg-black/98 backdrop-blur-xl border border-cyan-500/40 shadow-[0_8px_32px_rgba(6,182,212,0.3)] z-[70] transform opacity-0 -translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300"
                >
                  <div className="py-1">
                    <button
                      onClick={() => setLanguage('en')}
                      className={`w-full text-left px-3 py-2 text-xs font-mono flex items-center gap-2 
                        ${language === 'en' 
                          ? 'bg-cyan-400/20 text-cyan-400 border-l-2 border-cyan-400' 
                          : 'text-gray-400 hover:bg-slate-800/50 dark:hover:bg-slate-900/50 hover:text-cyan-400'
                        } transition-all duration-200`}
                    >
                      <span className="opacity-60">{'>'}</span>
                      <span>English</span>
                      {language === 'en' && (
                        <span className="ml-auto text-[10px]">✓</span>
                      )}
                    </button>
                    <button
                      onClick={() => setLanguage('es')}
                      className={`w-full text-left px-3 py-2 text-xs font-mono flex items-center gap-2 
                        ${language === 'es' 
                          ? 'bg-cyan-400/20 text-cyan-400 border-l-2 border-cyan-400' 
                          : 'text-gray-400 hover:bg-slate-800/50 dark:hover:bg-slate-900/50 hover:text-cyan-400'
                        } transition-all duration-200`}
                    >
                      <span className="opacity-60">{'>'}</span>
                      <span>Español</span>
                      {language === 'es' && (
                        <span className="ml-auto text-[10px]">✓</span>
                      )}
                    </button>
                    <button
                      onClick={() => setLanguage('fr')}
                      className={`w-full text-left px-3 py-2 text-xs font-mono flex items-center gap-2 
                        ${language === 'fr' 
                          ? 'bg-cyan-400/20 text-cyan-400 border-l-2 border-cyan-400' 
                          : 'text-gray-400 hover:bg-slate-800/50 dark:hover:bg-slate-900/50 hover:text-cyan-400'
                        } transition-all duration-200`}
                    >
                      <span className="opacity-60">{'>'}</span>
                      <span>Français</span>
                      {language === 'fr' && (
                        <span className="ml-auto text-[10px]">✓</span>
                      )}
                    </button>
                  </div>
                </motion.div>
              </motion.div>

              {/* Theme Toggle */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={toggleTheme}
                className="p-1.5 rounded bg-slate-100/80 dark:bg-black/80 border border-cyan-500/40 hover:border-cyan-400 transition-all duration-300"
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={theme}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {theme === 'dark' ? (
                      <Sun size={16} className="text-cyan-400" />
                    ) : (
                      <Moon size={16} className="text-cyan-500 dark:text-cyan-400" />
                    )}
                  </motion.div>
                </AnimatePresence>
              </motion.button>

              {/* Social Links */}
              <motion.div 
                className="flex items-center gap-1 bg-slate-100/80 dark:bg-black/80 border border-cyan-500/40 rounded p-1"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <motion.a 
                  href="https://github.com/itshydrox" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-1 rounded hover:bg-cyan-400/20 transition-all duration-300 group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="GitHub"
                >
                  <Github size={16} className="text-slate-600 dark:text-gray-400 group-hover:text-cyan-500 dark:group-hover:text-cyan-400" />
                </motion.a>
                <motion.a 
                  href="https://www.linkedin.com/in/mouad-idrissi/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-1 rounded hover:bg-cyan-400/20 transition-all duration-300 group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} className="text-slate-600 dark:text-gray-400 group-hover:text-cyan-500 dark:group-hover:text-cyan-400" />
                </motion.a>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-1.5">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={toggleTheme}
                className="p-1.5 rounded bg-slate-100/80 dark:bg-black/80 border border-cyan-500/40"
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={theme}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {theme === 'dark' ? (
                      <Sun size={16} className="text-cyan-400" />
                    ) : (
                      <Moon size={16} className="text-cyan-500" />
                    )}
                  </motion.div>
                </AnimatePresence>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsOpen(!isOpen)}
                className="p-1.5 rounded bg-slate-100/80 dark:bg-black/80 border border-cyan-500/40"
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isOpen ? 'close' : 'open'}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isOpen ? (
                      <X size={16} className="text-cyan-400" />
                    ) : (
                      <Menu size={16} className="text-cyan-400" />
                    )}
                  </motion.div>
                </AnimatePresence>
              </motion.button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu - Terminal Style */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[998]"
              onClick={() => setIsOpen(false)}
            />
            <motion.div 
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-[100dvh] w-[85%] sm:w-[380px] bg-slate-100/98 dark:bg-black/98 backdrop-blur-xl 
                shadow-[0_8px_32px_rgba(6,182,212,0.3)] 
                border-l border-cyan-500/30 z-[999] overflow-hidden"
            >
              <div className="h-full flex flex-col">
                {/* Terminal Header */}
                <div className="border-b border-cyan-500/20 px-4 py-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                    </div>
                    <span className="text-[10px] font-mono text-cyan-400 ml-2">menu.tsx</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(false)}
                    className="p-1 rounded hover:bg-slate-800/50 dark:hover:bg-slate-900/50 transition-colors duration-300"
                    aria-label="Close menu"
                  >
                    <X size={18} className="text-cyan-400" />
                  </motion.button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 overflow-y-auto py-4 px-3">
                  <div className="space-y-1">
                    {navLinks.map((link, index) => (
                      <motion.a
                        key={link.key}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className={`block px-3 py-2.5 rounded text-xs font-mono transition-all duration-300 
                          ${activeSection === link.href.substring(1)
                            ? 'bg-cyan-400/20 text-cyan-400 border-l-2 border-cyan-400'
                            : 'text-gray-400 hover:bg-slate-800/50 dark:hover:bg-slate-900/50 hover:text-cyan-400'
                          }`}
                      >
                        <span className="flex items-center gap-2">
                          <span className="opacity-60">{link.icon}</span>
                          <span>{t(link.key)}</span>
                        </span>
                      </motion.a>
                    ))}
                  </div>

                  {/* Language Selector */}
                  <div className="mt-6 pt-4 border-t border-cyan-500/20">
                    <div className="text-[10px] font-mono text-cyan-400/70 mb-2 px-3">// Language</div>
                    <div className="space-y-1">
                      <button
                        onClick={() => setLanguage('en')}
                        className={`w-full text-left px-3 py-2 rounded text-xs font-mono flex items-center gap-2 
                          ${language === 'en' 
                            ? 'bg-cyan-400/20 text-cyan-400 border-l-2 border-cyan-400' 
                            : 'text-gray-400 hover:bg-slate-800/50 dark:hover:bg-slate-900/50 hover:text-cyan-400'
                          } transition-all duration-200`}
                      >
                        <span className="opacity-60">{'>'}</span>
                        <span>English</span>
                        {language === 'en' && <span className="ml-auto text-[10px]">✓</span>}
                      </button>
                      <button
                        onClick={() => setLanguage('es')}
                        className={`w-full text-left px-3 py-2 rounded text-xs font-mono flex items-center gap-2 
                          ${language === 'es' 
                            ? 'bg-cyan-400/20 text-cyan-400 border-l-2 border-cyan-400' 
                            : 'text-gray-400 hover:bg-slate-800/50 dark:hover:bg-slate-900/50 hover:text-cyan-400'
                          } transition-all duration-200`}
                      >
                        <span className="opacity-60">{'>'}</span>
                        <span>Español</span>
                        {language === 'es' && <span className="ml-auto text-[10px]">✓</span>}
                      </button>
                      <button
                        onClick={() => setLanguage('fr')}
                        className={`w-full text-left px-3 py-2 rounded text-xs font-mono flex items-center gap-2 
                          ${language === 'fr' 
                            ? 'bg-cyan-400/20 text-cyan-400 border-l-2 border-cyan-400' 
                            : 'text-gray-400 hover:bg-slate-800/50 dark:hover:bg-slate-900/50 hover:text-cyan-400'
                          } transition-all duration-200`}
                      >
                        <span className="opacity-60">{'>'}</span>
                        <span>Français</span>
                        {language === 'fr' && <span className="ml-auto text-[10px]">✓</span>}
                      </button>
                    </div>
                  </div>
                </nav>

                {/* Footer Actions */}
                <div className="border-t border-cyan-500/20 p-3">
                  <div className="text-[10px] font-mono text-cyan-400/70 mb-2">// Social Links</div>
                  <div className="grid grid-cols-2 gap-2">
                    <motion.a
                      href="https://github.com/itshydrox"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center gap-2 px-3 py-2 rounded 
                        bg-slate-800/50 dark:bg-slate-900/50 hover:bg-cyan-400/20 
                        text-gray-400 hover:text-cyan-400 border border-cyan-500/30 transition-all duration-300"
                    >
                      <Github size={16} />
                      <span className="text-xs font-mono">GitHub</span>
                    </motion.a>
                    <motion.a
                      href="https://www.linkedin.com/in/mouad-idrissi/"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center gap-2 px-3 py-2 rounded 
                        bg-slate-800/50 dark:bg-slate-900/50 hover:bg-cyan-400/20 
                        text-gray-400 hover:text-cyan-400 border border-cyan-500/30 transition-all duration-300"
                    >
                      <Linkedin size={16} />
                      <span className="text-xs font-mono">LinkedIn</span>
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
