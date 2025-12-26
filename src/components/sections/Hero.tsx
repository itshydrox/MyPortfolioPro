import React, { useEffect, useState, useRef } from 'react';
import Button from '../ui/Button';
import { ArrowDown, Github, Linkedin, Mail, Terminal, Code2, Braces } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const techIcons = [
  { name: 'Node.js', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg' },
  { name: 'HTML5', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg' },
  { name: 'CSS3', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg' },
  { name: 'Java', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg' },
  { name: 'JavaScript', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' },
  { name: 'React', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' },
  { name: 'Vue.js', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg' },
  { name: 'Tailwind', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Express', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg' },
];

const codeSnippets = [
  'const code = "art";',
  'function build() {}',
  'npm install',
  'git commit -m',
  '<Component />',
  'async/await',
  'import React',
  '{ useState }',
  'export default',
  'console.log()',
];

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const [typedText, setTypedText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const phrasesRef = useRef<string[]>([]);
  const mousePosition = useRef({ x: 0, y: 0 });
  const [floatingCode, setFloatingCode] = useState<Array<{
    text: string;
    x: number;
    y: number;
    speed: number;
    opacity: number;
  }>>([]);
  
  // Update phrases ref when translations change
  useEffect(() => {
    phrasesRef.current = [
      t('hero.roles.fullstack'),
      t('hero.roles.react'),
      t('hero.roles.nodejs'),
      t('hero.roles.problem')
    ];
  }, [t]);

  useEffect(() => {
    setIsVisible(true);
    
    // Initialize floating code snippets
    const snippets = Array.from({ length: 8 }, () => ({
      text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      speed: 0.1 + Math.random() * 0.3,
      opacity: 0.1 + Math.random() * 0.2,
    }));
    setFloatingCode(snippets);
  }, []);

  useEffect(() => {
    let timer: number;
    const phrases = phrasesRef.current;
    if (phrases.length === 0) return;
    
    const currentPhrase = phrases[currentPhraseIndex];
    
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseTime = 1500;

    if (isDeleting) {
      if (typedText === '') {
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      } else {
        timer = window.setTimeout(() => {
          setTypedText(currentPhrase.substring(0, typedText.length - 1));
        }, deletingSpeed);
      }
    } else {
      if (typedText === currentPhrase) {
        timer = window.setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      } else {
        timer = window.setTimeout(() => {
          setTypedText(currentPhrase.substring(0, typedText.length + 1));
        }, typingSpeed);
      }
    }

    return () => clearTimeout(timer);
  }, [typedText, currentPhraseIndex, isDeleting]);

  // Canvas Animation - Developer Coding Background
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const isMobile = window.innerWidth < 768;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = canvas.offsetWidth * (isMobile ? 1 : window.devicePixelRatio);
      canvas.height = canvas.offsetHeight * (isMobile ? 1 : window.devicePixelRatio);
      ctx.scale(isMobile ? 1 : window.devicePixelRatio, isMobile ? 1 : window.devicePixelRatio);
    };
    setCanvasSize();

    // Code characters for developer feel
    const codeChars = ['<', '>', '{', '}', '/', '=', ';', '(', ')', '[', ']', '.', ','];
    
    // Particle system with code symbols - Fewer on mobile
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      char: string;
      opacity: number;
      size: number;
    }> = [];

    // Create code character particles
    const particleCount = isMobile ? 15 : 30;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * (isMobile ? 0.1 : 0.2),
        vy: (Math.random() - 0.5) * (isMobile ? 0.1 : 0.2),
        char: codeChars[Math.floor(Math.random() * codeChars.length)],
        opacity: Math.random() * (isMobile ? 0.1 : 0.15) + 0.05,
        size: Math.random() * (isMobile ? 6 : 8) + (isMobile ? 8 : 10),
      });
    }

    // Animation loop
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      
      const currentIsDark = document.documentElement.classList.contains('dark');
      
      // Clear canvas with faster fade effect - theme aware
      ctx.fillStyle = currentIsDark ? 'rgba(0, 0, 0, 0.25)' : 'rgba(239, 246, 255, 0.25)';
      ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      // Draw cursor glow with softer edges - theme aware - Skip on mobile
      if (!isMobile) {
        const gradient = ctx.createRadialGradient(
          mousePosition.current.x,
          mousePosition.current.y,
          0,
          mousePosition.current.x,
          mousePosition.current.y,
          120
        );
        
        if (currentIsDark) {
          gradient.addColorStop(0, 'rgba(34, 211, 238, 0.04)');
          gradient.addColorStop(0.3, 'rgba(59, 130, 246, 0.02)');
          gradient.addColorStop(0.6, 'rgba(59, 130, 246, 0.01)');
          gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
        } else {
          gradient.addColorStop(0, 'rgba(6, 182, 212, 0.08)');
          gradient.addColorStop(0.3, 'rgba(59, 130, 246, 0.04)');
          gradient.addColorStop(0.6, 'rgba(59, 130, 246, 0.02)');
          gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
        }
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      }

      // Update and draw code character particles - theme aware
      particles.forEach((particle) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < -20) particle.x = canvas.offsetWidth + 20;
        if (particle.x > canvas.offsetWidth + 20) particle.x = -20;
        if (particle.y < -20) particle.y = canvas.offsetHeight + 20;
        if (particle.y > canvas.offsetHeight + 20) particle.y = -20;

        // Calculate distance from mouse - Skip on mobile
        let proximityOpacity = particle.opacity;
        if (!isMobile) {
          const dx = mousePosition.current.x - particle.x;
          const dy = mousePosition.current.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 150;

          // Enhance opacity near cursor
          proximityOpacity = distance < maxDistance 
            ? particle.opacity + (1 - distance / maxDistance) * 0.3
            : particle.opacity;
        }

        // Draw code character with theme-aware colors
        ctx.font = `${particle.size}px monospace`;
        ctx.fillStyle = currentIsDark 
          ? `rgba(34, 211, 238, ${proximityOpacity})` 
          : `rgba(6, 182, 212, ${proximityOpacity * 1.5})`;
        ctx.fillText(particle.char, particle.x, particle.y);
      });
    };

    animate();

    // Handle resize
    const handleResize = () => {
      setCanvasSize();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (canvasRef.current) {
        const rect = canvasRef.current.getBoundingClientRect();
        mousePosition.current = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        };
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animate floating code
  useEffect(() => {
    const interval = setInterval(() => {
      setFloatingCode(prev => 
        prev.map(item => ({
          ...item,
          y: (item.y + item.speed) % 100,
        }))
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-20 pb-12 md:pt-16 md:pb-0 relative overflow-hidden bg-gradient-to-br from-blue-50 via-slate-50 to-cyan-50 dark:bg-black sticky top-0 z-0"
    >
      {/* Solid Background Layer for Dark Mode */}
      <div className="absolute inset-0 bg-transparent dark:bg-black" />
      
      {/* Minimalist Animated Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full opacity-60 md:opacity-100"
      />
      
      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(34,211,238,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.015)_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,black,transparent)]" />

      {/* Floating Code Snippets - Hidden on mobile */}
      {floatingCode.map((code, i) => (
        <div
          key={i}
          className="hidden md:block absolute text-xs md:text-sm font-mono text-cyan-500/20 dark:text-cyan-400/15 pointer-events-none whitespace-nowrap"
          style={{
            left: `${code.x}%`,
            top: `${code.y}%`,
            opacity: code.opacity,
          }}
        >
          {code.text}
        </div>
      ))}

      <div className="container mx-auto px-4 sm:px-6 md:px-6 relative z-10 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center md:space-x-8 lg:space-x-12 gap-6 sm:gap-8 md:gap-0">
          {/* Text Content - Terminal Style */}
          <div className={`w-full md:w-1/2 md:pr-12 text-center md:text-left transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
            {/* Terminal Header */}
            <div className="inline-flex items-center gap-2 mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-100/80 dark:bg-black/80 border border-cyan-500/40 rounded-lg backdrop-blur-sm">
              <Terminal className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-500 dark:text-cyan-400" />
              <span className="text-[10px] sm:text-xs font-mono text-cyan-500 dark:text-cyan-400">~/portfolio</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-mono font-bold mb-2 sm:mb-3 md:mb-4 leading-tight">
              <span className="text-cyan-500 dark:text-cyan-400">{'> '}</span>
              <span className="text-slate-900 dark:text-white">{t('hero.greeting')}</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient break-words">
                Mouad Idrissi
              </span>
            </h1>
            
            {/* Typing Animation */}
            <div className="h-auto min-h-[1.2rem] sm:min-h-[1.5rem] md:min-h-[2.5rem] mb-3 sm:mb-4 mt-2 sm:mt-3 md:mt-6">
              <h2 className="text-xs sm:text-sm md:text-lg lg:text-xl font-mono text-slate-700 dark:text-gray-300 break-words leading-relaxed">
                <span className="text-purple-500 dark:text-purple-400">const</span>{' '}
                <span className="text-blue-500 dark:text-blue-400">role</span>{' '}
                <span className="text-cyan-500 dark:text-cyan-400">=</span>{' '}
                <span className="text-green-600 dark:text-green-400">"{typedText}"</span>
                <span className="animate-blink text-cyan-500 dark:text-cyan-400">|</span>
              </h2>
            </div>
            
            {/* Description */}
            <p className={`text-[11px] leading-relaxed sm:text-xs md:text-base lg:text-lg text-slate-600 dark:text-gray-400 mb-4 sm:mb-5 md:mb-8 max-w-lg mx-auto md:mx-0 font-mono transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <span className="text-slate-400 dark:text-gray-600">// </span>
              {t('hero.description')}
            </p>
            
            {/* Buttons */}
            <div className={`flex flex-col sm:flex-row items-stretch sm:items-center justify-center md:justify-start gap-2.5 sm:gap-3 md:gap-4 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <Button 
                href="/MouadIdrissiCV.pdf" 
                variant="primary" 
                size="lg"
                className="w-full sm:w-auto sm:min-w-[130px] md:min-w-[160px] whitespace-nowrap text-[11px] sm:text-xs md:text-base py-2 sm:py-2.5 px-3 sm:px-4 
                  bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 
                  border-0 font-mono hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 group"
                onClick={(e: React.MouseEvent<HTMLElement>) => {
                  e.preventDefault();
                  const link = document.createElement('a');
                  link.href = '/MouadIdrissiCV.pdf';
                  link.download = 'MouadIdrissiCV.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                <span className="flex items-center justify-center gap-1.5 sm:gap-2">
                  <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  {t('about.cta.resume')}
                </span>
              </Button>
              <Button 
                href="#contact" 
                variant="outline" 
                size="lg"
                className="w-full sm:w-auto sm:min-w-[130px] md:min-w-[160px] whitespace-nowrap text-[11px] sm:text-xs md:text-base py-2 sm:py-2.5 px-3 sm:px-4 
                  border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 font-mono
                  hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
              >
                <span className="flex items-center justify-center gap-1.5 sm:gap-2">
                  <Braces className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  {t('hero.cta.contact')}
                </span>
              </Button>
            </div>
            
            {/* Social Links */}
            <div className={`mt-4 sm:mt-5 md:mt-8 flex items-center justify-center md:justify-start space-x-3 sm:space-x-4 md:space-x-6 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <a 
                href="https://github.com/itshydrox" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-1.5 sm:p-2 rounded-lg bg-slate-100/80 dark:bg-black/80 border border-cyan-500/40 text-cyan-500 dark:text-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-300 hover:border-cyan-500 dark:hover:border-cyan-400 hover:bg-slate-200/80 dark:hover:bg-slate-900/50 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/mouad-idrissi/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-1.5 sm:p-2 rounded-lg bg-slate-100/80 dark:bg-black/80 border border-cyan-500/40 text-cyan-500 dark:text-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-300 hover:border-cyan-500 dark:hover:border-cyan-400 hover:bg-slate-200/80 dark:hover:bg-slate-900/50 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a 
                href="mailto:idrissimou3ad@gmail.com"
                className="p-1.5 sm:p-2 rounded-lg bg-slate-100/80 dark:bg-black/80 border border-cyan-500/40 text-cyan-500 dark:text-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-300 hover:border-cyan-500 dark:hover:border-cyan-400 hover:bg-slate-200/80 dark:hover:bg-slate-900/50 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
          
          {/* Image Content - Clean Design */}
          <div className={`w-full md:w-1/2 relative transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
            <div className="relative w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] md:w-[400px] md:h-[400px] lg:w-[480px] lg:h-[480px] mx-auto">
              
              {/* Main Image Container */}
              <div className="absolute inset-0 flex items-center justify-center p-10 sm:p-12 md:p-16">
                <div className="relative w-full h-full">
                  
                  {/* Subtle Glow */}
                  <div className="absolute -inset-2 sm:-inset-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl sm:blur-2xl" />
                  
                  {/* Image */}
                  <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl group">
                    <img 
                      src="/mypic.png" 
                      alt="Developer Portrait" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              {/* Tech Stack Icons - Small Clean Circles */}
              <div className="absolute inset-0 pointer-events-none">
                {techIcons.map((icon, index) => {
                  const angle = (index / techIcons.length) * Math.PI * 2 - Math.PI / 2;
                  const radiusPercent = 50;
                  const x = Math.cos(angle) * radiusPercent;
                  const y = Math.sin(angle) * radiusPercent;
                  
                  return (
                    <div
                      key={icon.name}
                      className="absolute w-7 h-7 sm:w-8 sm:h-8 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-full 
                        bg-white/95 dark:bg-slate-900/95 p-1 sm:p-1.5 md:p-2
                        backdrop-blur-sm hover:scale-110
                        transition-all duration-300 group cursor-pointer pointer-events-auto
                        shadow-lg hover:shadow-xl"
                      style={{
                        left: `calc(50% + ${x}%)`,
                        top: `calc(50% + ${y}%)`,
                        transform: 'translate(-50%, -50%)',
                        animation: `floatBubble ${3 + index * 0.3}s ease-in-out infinite`,
                        animationDelay: `${index * 0.2}s`,
                      }}
                    >
                      <div className="relative w-full h-full flex items-center justify-center">
                        <img
                          src={icon.image}
                          alt={icon.name}
                          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      
                      {/* Tooltip - Hidden on mobile */}
                      <div className="hidden md:block absolute -bottom-7 left-1/2 -translate-x-1/2 px-2 py-0.5 
                        bg-slate-900/90 dark:bg-black/90 rounded text-[10px] font-medium text-cyan-400 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-30">
                        {icon.name}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} hidden md:block`}>
          <a 
            href="#about" 
            aria-label="Scroll to About section"
            className="flex flex-col items-center gap-2 text-cyan-500 dark:text-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors duration-300 group"
          >
            <span className="text-xs font-mono">scroll</span>
            <ArrowDown className="animate-bounce-soft group-hover:translate-y-1 transition-transform" />
          </a>
        </div>
      </div>

      <style>{`
        @keyframes floatBubble {
          0%, 100% { 
            transform: translate(-50%, -50%) translateY(0px);
          }
          50% { 
            transform: translate(-50%, -50%) translateY(-12px);
          }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }
      }`}</style>
    </section>
  );
};

export default Hero;