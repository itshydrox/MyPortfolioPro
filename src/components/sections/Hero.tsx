import React, { useEffect, useState } from 'react';
import Button from '../ui/Button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

// Add random float animations for each icon
const generateRandomFloat = (index: number) => {
  const randomX = Math.random() * 10 - 5; // Random value between -5 and 5
  const randomY = Math.random() * 10 - 5;
  const randomRotate = Math.random() * 10 - 5;
  
  return `
    @keyframes randomFloat${index} {
      0% {
        transform: translate(0px, 0px) rotate(0deg);
      }
      25% {
        transform: translate(${randomX}px, ${randomY}px) rotate(${randomRotate}deg);
      }
      50% {
        transform: translate(${-randomY}px, ${randomX}px) rotate(${-randomRotate}deg);
      }
      75% {
        transform: translate(${-randomX}px, ${-randomY}px) rotate(${randomRotate}deg);
      }
      100% {
        transform: translate(0px, 0px) rotate(0deg);
      }
    }
  `;
};

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

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const [typedText, setTypedText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const phrases = [
    t('hero.roles.fullstack'),
    t('hero.roles.react'),
    t('hero.roles.nodejs'),
    t('hero.roles.problem')
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    let timer: number;
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
  }, [typedText, currentPhraseIndex, isDeleting, phrases]);

  const calculatePosition = (index: number, total: number, screenWidth: number) => {
    // For mobile screens (< 768px)
    if (screenWidth < 768) {
      const centerX = 180;
      const centerY = 90;
      const radius = 150;
      const angle = (index / total) * Math.PI * 2 - Math.PI / 2;
      
      return {
        top: `${Math.sin(angle) * radius + centerY}px`,
        left: `${Math.cos(angle) * radius + centerX}px`,
      };
    }
    // For tablets (768px - 1023px)
    else if (screenWidth < 1024) {
      const centerX = 180;
      const centerY = 180;
      const radius = 250;
      const angle = (index / total) * Math.PI * 2 - Math.PI / 2;
      
      return {
        top: `${Math.sin(angle) * radius + centerY}px`,
        left: `${Math.cos(angle) * radius + centerX}px`,
      };
    }
    // For desktop (≥ 1024px)
    else {
      const centerX = 350;
      const centerY = 170;
      const radius = 250;
      const angle = (index / total) * Math.PI * 2 - Math.PI / 2;
      
      return {
        top: `${Math.sin(angle) * radius + centerY}px`,
        left: `${Math.cos(angle) * radius + centerX}px`,
      };
    }
  };

  const [positions, setPositions] = useState(
    techIcons.map((_, i) => calculatePosition(i, techIcons.length, typeof window !== 'undefined' ? window.innerWidth : 1024))
  );

  useEffect(() => {
    const handleResize = () => {
      setPositions(
        techIcons.map((_, i) => calculatePosition(i, techIcons.length, window.innerWidth))
      );
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Add style tag for random animations
  useEffect(() => {
    const styleSheet = document.createElement("style");
    const animations = techIcons.map((_, index) => generateRandomFloat(index)).join("\n");
    styleSheet.textContent = animations;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-gray-50 via-blue-50/30 to-white dark:from-gray-950 dark:via-blue-950/10 dark:to-gray-900 transition-all duration-700"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col-reverse md:flex-row items-center md:space-x-8 lg:space-x-12">
          {/* Text Content */}
          <div className={`w-full md:w-1/2 md:pr-12 text-center md:text-left transform transition-all duration-1000 mt-16 sm:mt-20 md:mt-0 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-blue-600 dark:from-white dark:to-blue-400 mb-3 sm:mb-4">
              {t('hero.greeting')} <span className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">Mouad Idrissi</span>
            </h1>
            
            <div className="h-6 sm:h-8 md:h-10 mb-3 sm:mb-4 mt-3 sm:mt-4 md:mt-6">
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-gray-700 dark:text-gray-300">
                {t('hero.im')}{' '}
                <span className="text-blue-600 dark:text-blue-400 inline-block">
                  {typedText}
                  <span className="animate-blink">|</span>
                </span>
              </h2>
            </div>
            
            <p className={`text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 mb-5 sm:mb-6 md:mb-8 max-w-lg mx-auto md:mx-0 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              {t('hero.description')}
            </p>
            
            <div className={`flex flex-row items-center justify-center md:justify-start space-x-3 sm:space-x-4 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <Button 
                href="/MouadIdrissiCV.pdf" 
                variant="primary" 
                size="lg"
                className="min-w-[120px] sm:min-w-[130px] md:min-w-[160px] whitespace-nowrap text-xs sm:text-sm md:text-base py-2 px-3 sm:px-4 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 group"
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
                <span className="flex items-center gap-1 sm:gap-2">
                  {t('about.cta.resume')}
                  <svg 
                    className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 transform group-hover:translate-y-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" 
                    />
                  </svg>
                </span>
              </Button>
              <Button 
                href="#contact" 
                variant="outline" 
                size="lg"
                className="min-w-[120px] sm:min-w-[130px] md:min-w-[160px] whitespace-nowrap text-xs sm:text-sm md:text-base py-2 px-3 sm:px-4 hover:scale-105 hover:shadow-lg hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-all duration-300"
              >
                {t('hero.cta.contact')}
              </Button>
            </div>
            
            <div className={`mt-5 sm:mt-6 md:mt-8 flex items-center justify-center md:justify-start space-x-4 sm:space-x-6 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <a 
                href="https://github.com/itshydrox" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-all duration-300 hover:scale-125"
                aria-label="GitHub"
              >
                <Github size={20} className="sm:w-[22px] sm:h-[22px]" />
              </a>
              <a 
                href="https://www.linkedin.com/in/mouad-idrissi/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-all duration-300 hover:scale-125"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="sm:w-[22px] sm:h-[22px]" />
              </a>
              <a 
                href="mailto:idrissimou3ad@gmail.com"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-all duration-300 hover:scale-125"
                aria-label="Email"
              >
                <Mail size={20} className="sm:w-[22px] sm:h-[22px]" />
              </a>
            </div>
          </div>
          
          {/* Image Content */}
          <div className={`w-full md:w-1/2 relative transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
            <div className="relative">
              <div className="w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] md:w-[400px] md:h-[400px] bg-gradient-to-br from-blue-600/20 to-blue-400/10 dark:from-blue-500/20 dark:to-blue-300/10 rounded-full mx-auto flex items-center justify-center animate-pulse-slow">
                <img 
                  src="/mypic.png" 
                  alt="Developer Portrait" 
                  className="w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] md:w-[350px] md:h-[350px] rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500"
                />
              </div>
              
              <div className="absolute inset-0">
                {techIcons.map((icon, index) => (
                  <div
                    key={icon.name}
                    className="absolute w-8 h-8 sm:w-9 sm:h-9 md:w-11 md:h-11 rounded-xl bg-white/90 dark:bg-gray-800/90 p-1.5 sm:p-2 
                      transform hover:scale-110 transition-all duration-500 backdrop-blur-md
                      hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:hover:shadow-[0_8px_30px_rgba(59,130,246,0.1)]
                      border border-white/20 dark:border-gray-700/30
                      before:absolute before:inset-0 before:bg-gradient-to-br before:from-blue-500/10 before:to-purple-500/10 
                      before:rounded-xl before:opacity-0 before:transition-opacity before:duration-500
                      hover:before:opacity-100 group z-10"
                    style={{
                      ...positions[index],
                      animation: `randomFloat${index} ${3 + index * 0.5}s infinite ease-in-out`,
                      animationDelay: `${index * 0.2}s`,
                      transform: `perspective(1000px) rotateX(10deg) rotateY(10deg)`,
                      backfaceVisibility: 'hidden',
                    }}
                  >
                    <div className="relative w-full h-full">
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 
                        group-hover:opacity-100 blur-sm transition-opacity duration-500" />
                      
                      <img
                        src={icon.image}
                        alt={icon.name}
                        className="w-full h-full object-contain relative z-10 transition-transform duration-500 
                          group-hover:scale-110 group-hover:rotate-3 drop-shadow-lg"
                      />
                      
                      <div className="absolute -bottom-4 sm:-bottom-5 left-1/2 -translate-x-1/2 px-1.5 py-0.5 bg-white/90 dark:bg-gray-800/90 
                        rounded-md text-[8px] sm:text-[10px] md:text-xs font-medium text-gray-700 dark:text-gray-300 opacity-0 group-hover:opacity-100 
                        transition-opacity duration-300 whitespace-nowrap backdrop-blur-sm border border-gray-200/50 
                        dark:border-gray-700/50 shadow-lg transform scale-90 group-hover:scale-100 min-w-max">
                        {icon.name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <a 
            href="#about" 
            aria-label="Scroll to About section"
            className="animate-bounce-slow hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
          >
            <ArrowDown className="text-gray-600 dark:text-gray-400" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;