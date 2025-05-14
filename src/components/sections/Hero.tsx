import React, { useEffect, useState } from 'react';
import Button from '../ui/Button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const techIcons = [
  { name: 'React', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' },
  { name: 'Vue.js', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg' },
  { name: 'Node.js', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg' },
  { name: 'Python', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' },
  { name: 'Java', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg' },
  { name: 'HTML5', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg' },
  { name: 'CSS3', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg' },
  { name: 'Tailwind', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg' },
  { name: 'Express', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg' },
];

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const phrases = [
    'Full Stack Developer',
    'React Specialist',
    'Node.js Engineer',
    'Problem Solver'
  ];

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

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 transition-colors overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 animate-fadeIn">
              Hi, I'm <span className="text-blue-600">John Doe</span>
            </h1>
            
            <div className="h-8 md:h-10 mb-6">
              <h2 className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300">
                I'm a{' '}
                <span className="text-blue-600 inline-block">
                  {typedText}
                  <span className="animate-blink">|</span>
                </span>
              </h2>
            </div>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto md:mx-0 animate-fadeInUp">
              I build exceptional digital experiences that combine elegant design with 
              powerful functionality. Specializing in full-stack development with a focus on 
              React, Node.js, and modern web technologies.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 animate-fadeInUp" style={{ animationDelay: '200ms' }}>
              <Button href="#projects" variant="primary" size="lg">
                View My Work
              </Button>
              <Button href="#contact" variant="outline" size="lg">
                Get In Touch
              </Button>
            </div>
            
            <div className="mt-8 flex items-center justify-center md:justify-start space-x-6 animate-fadeInUp" style={{ animationDelay: '400ms' }}>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500 transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:contact@example.com"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500 transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-12 md:mt-0 animate-fadeInUp relative" style={{ animationDelay: '300ms' }}>
            <div className="relative">
              <div className="w-[280px] h-[280px] md:w-[400px] md:h-[400px] bg-blue-600/10 dark:bg-blue-500/10 rounded-full mx-auto flex items-center justify-center">
                <img 
                  src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Developer Portrait" 
                  className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-lg"
                />
              </div>
              
              {/* Floating Tech Icons */}
              {techIcons.map((icon, index) => (
                <div
                  key={icon.name}
                  className="absolute w-12 h-12 rounded-full bg-white dark:bg-gray-800 p-2 shadow-lg transform hover:scale-110 transition-transform duration-200 animate-float"
                  style={{
                    top: `${Math.sin((index / techIcons.length) * Math.PI * 2) * 180 + 200}px`,
                    left: `${Math.cos((index / techIcons.length) * Math.PI * 2) * 180 + 200}px`,
                    animationDelay: `${index * 0.2}s`
                  }}
                >
                  <img
                    src={icon.image}
                    alt={icon.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#about" aria-label="Scroll to About section">
            <ArrowDown className="text-gray-600 dark:text-gray-400" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;