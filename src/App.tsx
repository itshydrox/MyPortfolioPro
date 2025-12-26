import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import Studies from './components/sections/Studies';
import Projects from './components/sections/Projects';
import CompanyProjects from './components/sections/CompanyProjects';
import ThreeBackground from './components/layout/ThreeBackground';
import { SpeedInsights } from "@vercel/speed-insights/react";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen overflow-x-hidden bg-white dark:bg-gray-900 transition-colors duration-300 relative">
          <ThreeBackground />
          <Header />
          <main className="overflow-x-hidden relative z-10">
          <SpeedInsights />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <CompanyProjects />
        <Projects />
        <Studies />
        <Contact />
          </main>
          <div className="relative z-10">
            <Footer />
          </div>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;