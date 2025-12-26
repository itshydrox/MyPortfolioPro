import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Terminal, Code2, FileCode } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import CodeWindow from '../ui/CodeWindow';
import TerminalWindow from '../ui/TerminalWindow';

const HeroIDE: React.FC = () => {
  const { t } = useLanguage();
  const [typedText, setTypedText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [codeLines, setCodeLines] = useState<string[]>([]);
  
  const phrases = [
    'Full Stack Developer',
    'React Specialist',
    'Node.js Expert',
    'Problem Solver'
  ];

  const codeSnippet = [
    'const developer = {',
    '  name: "Mouad Idrissi",',
    '  role: "Full Stack Developer",',
    '  skills: ["React", "Node.js", "TypeScript"],',
    '  passion: "Building amazing things",',
    '  available: true',
    '};'
  ];

  // Typing animation for role
  useEffect(() => {
    let timer: number;
    const currentPhrase = phrases[currentPhraseIndex];
    
    if (isDeleting) {
      if (typedText === '') {
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      } else {
        timer = window.setTimeout(() => {
          setTypedText(currentPhrase.substring(0, typedText.length - 1));
        }, 50);
      }
    } else {
      if (typedText === currentPhrase) {
        timer = window.setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      } else {
        timer = window.setTimeout(() => {
          setTypedText(currentPhrase.substring(0, typedText.length + 1));
        }, 100);
      }
    }

    return () => clearTimeout(timer);
  }, [typedText, currentPhraseIndex, isDeleting]);

  // Code typing animation
  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < codeSnippet.length) {
        setCodeLines(prev => [...prev, codeSnippet[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-20 relative overflow-hidden"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Terminal-style greeting */}
            <div className="flex items-center space-x-2 text-green-400 font-mono text-sm">
              <Terminal size={16} />
              <span>$ whoami</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="text-gray-300">Hi, I'm </span>
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent neon-text">
                Mouad Idrissi
              </span>
            </h1>

            <div className="flex items-center space-x-3 text-xl md:text-2xl font-mono">
              <Code2 className="text-blue-400" size={24} />
              <span className="text-gray-400">{'<'}</span>
              <span className="text-blue-400 min-w-[300px]">
                {typedText}
                <span className="animate-blink text-cyan-400">|</span>
              </span>
              <span className="text-gray-400">{'/>'}</span>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              {t('hero.description')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-medium neon-border hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  <Mail size={18} />
                  Get In Touch
                </span>
              </motion.a>

              <motion.a
                href="/MouadIdrissiCV.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-blue-500/50 text-blue-400 rounded-lg font-medium hover:bg-blue-500/10 transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  <FileCode size={18} />
                  Download CV
                </span>
              </motion.a>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 pt-4">
              <a 
                href="https://github.com/itshydrox" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 border border-gray-700 rounded-lg hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 group"
              >
                <Github className="text-gray-400 group-hover:text-blue-400" size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/mouad-idrissi/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 border border-gray-700 rounded-lg hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 group"
              >
                <Linkedin className="text-gray-400 group-hover:text-blue-400" size={20} />
              </a>
              <a 
                href="mailto:idrissimou3ad@gmail.com"
                className="p-3 border border-gray-700 rounded-lg hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 group"
              >
                <Mail className="text-gray-400 group-hover:text-blue-400" size={20} />
              </a>
            </div>
          </motion.div>

          {/* Right Side - Code Windows */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            {/* Code Window */}
            <CodeWindow title="developer.ts">
              <div className="font-mono text-sm space-y-1">
                {codeLines.map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex"
                  >
                    <span className="text-gray-600 mr-4 select-none">{index + 1}</span>
                    <span className="text-gray-300">
                      {line.includes('const') && <span className="text-purple-400">const </span>}
                      {line.includes('developer') && <span className="text-blue-400">developer</span>}
                      {line.includes('name:') && <><span className="text-blue-300">name</span><span className="text-gray-500">: </span><span className="text-green-400">"{line.split('"')[1]}"</span></>}
                      {line.includes('role:') && <><span className="text-blue-300">role</span><span className="text-gray-500">: </span><span className="text-green-400">"{line.split('"')[1]}"</span></>}
                      {line.includes('skills:') && <><span className="text-blue-300">skills</span><span className="text-gray-500">: </span><span className="text-yellow-400">[</span><span className="text-green-400">{line.split('[')[1]?.split(']')[0]}</span><span className="text-yellow-400">]</span></>}
                      {line.includes('passion:') && <><span className="text-blue-300">passion</span><span className="text-gray-500">: </span><span className="text-green-400">"{line.split('"')[1]}"</span></>}
                      {line.includes('available:') && <><span className="text-blue-300">available</span><span className="text-gray-500">: </span><span className="text-orange-400">true</span></>}
                      {line === '};' && <span className="text-gray-500">{line}</span>}
                      {line === 'const developer = {' && <span className="text-gray-500"> {'{'}</span>}
                      {!line.includes('const') && !line.includes('name:') && !line.includes('role:') && !line.includes('skills:') && !line.includes('passion:') && !line.includes('available:') && line !== '};' && line !== 'const developer = {' && <span className="text-gray-500">{line}</span>}
                    </span>
                  </motion.div>
                ))}
                {codeLines.length < codeSnippet.length && (
                  <span className="inline-block w-2 h-4 bg-blue-400 animate-pulse" />
                )}
              </div>
            </CodeWindow>

            {/* Terminal Window */}
            <TerminalWindow 
              commands={[
                'npm run build',
                '✓ Building for production...',
                '✓ Compiled successfully!'
              ]}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroIDE;
