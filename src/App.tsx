import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/layout/Header';
import HeroIDE from './components/sections/HeroIDE';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import Studies from './components/sections/Studies';
import Projects from './components/sections/Projects';
import CompanyProjects from './components/sections/CompanyProjects';
import CodeBackground from './components/three/CodeBackground';
import FloatingCode from './components/ui/FloatingCode';
import { SpeedInsights } from "@vercel/speed-insights/react";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen overflow-x-hidden bg-[#0a0a0a] dark:bg-[#000000] transition-colors duration-300 relative">
          {/* Three.js Animated Background */}
          <CodeBackground />
          
          {/* Floating Code Snippets */}
          <FloatingCode />
          
          {/* Scanline Effect */}
          <div className="fixed inset-0 pointer-events-none z-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent animate-scan" />
          </div>
          
          <Header />
          <main className="overflow-x-hidden relative z-10">
            <SpeedInsights />
            <HeroIDE />
            <About />
            <Skills />
            <Experience />
            <CompanyProjects />
            <Projects />
            <Studies />
            <Contact />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;