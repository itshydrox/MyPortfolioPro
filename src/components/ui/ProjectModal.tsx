import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Terminal, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    longDescription: string;
    tags: { name: string; icon: string; }[];
    images: string[];
    demoUrl: string;
    githubUrl: string;
  };
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-md flex items-center justify-center p-2 pt-20 pb-4 sm:p-4 sm:pt-40 sm:pb-20"
        onClick={onClose}
        style={{ overflow: 'hidden' }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: -20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: -20 }}
          className="relative w-full max-w-6xl max-h-[90vh] sm:max-h-[85vh] bg-slate-100 dark:bg-black rounded-lg border border-cyan-500/40 shadow-2xl shadow-cyan-500/20 overflow-y-auto overflow-x-hidden scrollbar-hide"
          onClick={e => e.stopPropagation()}
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
            {/* Terminal Header */}
            <div className="border-b border-cyan-500/20 px-4 py-3 flex items-center justify-between bg-slate-200/50 dark:bg-black/50 sticky top-0 z-10">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 cursor-pointer transition-colors"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 cursor-pointer transition-colors"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 cursor-pointer transition-colors"></div>
                </div>
                <Terminal size={14} className="text-cyan-500 dark:text-cyan-400" />
                <span className="text-xs font-mono text-cyan-500 dark:text-cyan-400">
                  project_details.tsx
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg bg-slate-300/50 dark:bg-gray-800/50 hover:bg-red-500 hover:text-white transition-all duration-300"
                aria-label="Close modal"
              >
                <X size={18} className="transition-transform hover:rotate-90 duration-300" />
              </button>
            </div>

            <div className="relative bg-slate-200 dark:bg-slate-900">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  className="w-full flex justify-center items-center bg-slate-200 dark:bg-slate-900"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={project.images[currentImageIndex]}
                    alt={`${project.title} - Image ${currentImageIndex + 1}`}
                    className="w-auto h-auto max-h-[70vh] object-contain"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Image Navigation */}
              <div className="absolute inset-0 flex items-center justify-between p-4">
                <button
                  onClick={previousImage}
                  className="p-2 rounded-lg bg-cyan-500/80 hover:bg-cyan-500 text-white transition-all duration-300 hover:scale-110"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextImage}
                  className="p-2 rounded-lg bg-cyan-500/80 hover:bg-cyan-500 text-white transition-all duration-300 hover:scale-110"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Image Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? 'bg-cyan-500 w-8'
                        : 'bg-cyan-500/50 hover:bg-cyan-500/75'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="p-8 bg-slate-100 dark:bg-black">
              {/* Code-style title */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3 font-mono text-sm">
                  <span className="text-cyan-500 dark:text-cyan-400">const</span>
                  <span className="text-blue-500 dark:text-blue-400">projectDetails</span>
                  <span className="text-cyan-500 dark:text-cyan-400">=</span>
                  <span className="text-purple-500 dark:text-purple-400">{'{'}</span>
                </div>
                
                <div className="pl-6 border-l-2 border-cyan-500/30 dark:border-cyan-400/30">
                  <h2 className="text-3xl font-bold font-mono text-slate-900 dark:text-white mb-2">
                    <span className="text-cyan-500/70 dark:text-cyan-400/70 text-sm">// </span>
                    {project.title}
                  </h2>
                </div>
              </div>
              
              <div className="space-y-6 pl-6">
                <div className="bg-white/50 dark:bg-slate-900/50 rounded-lg p-4 border border-cyan-500/20">
                  <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed font-mono">
                    {project.description}
                  </p>
                </div>

                <div className="bg-white/50 dark:bg-slate-900/50 rounded-lg p-6 border border-cyan-500/20">
                  <div className="flex items-center gap-2 mb-4">
                    <Code2 size={20} className="text-cyan-500 dark:text-cyan-400" />
                    <h3 className="text-lg font-semibold font-mono text-slate-900 dark:text-white">
                      <span className="text-cyan-500 dark:text-cyan-400">{'<'}</span>
                      Detailed Features
                      <span className="text-cyan-500 dark:text-cyan-400">{' />'}</span>
                    </h3>
                  </div>
                  <div className="space-y-2 font-mono text-sm">
                    {project.longDescription.split('\n').map((line, index) => (
                      <p key={index} className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {line && <span className="text-cyan-500/50 dark:text-cyan-400/50 mr-2">//</span>}
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-4 mb-2 font-mono text-sm pl-6">
                <span className="text-purple-500 dark:text-purple-400">{'};'}</span>
              </div>

              <div className="flex flex-wrap gap-2 my-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag.name}
                    className="px-3 py-1.5 text-xs font-mono rounded bg-white/50 dark:bg-slate-900/50 
                      text-cyan-600 dark:text-cyan-400 border border-cyan-500/30
                      hover:border-cyan-500 dark:hover:border-cyan-400 hover:shadow-md hover:shadow-cyan-500/20 
                      transition-all duration-300 flex items-center gap-2"
                  >
                    <img 
                      src={tag.icon} 
                      alt={tag.name}
                      className="w-4 h-4"
                      width={16}
                      height={16}
                    />
                    {'<'}{tag.name}{' />'}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-6">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 
                    text-white rounded-lg text-center font-mono font-medium transition-all duration-300 
                    hover:shadow-lg hover:shadow-cyan-500/30 flex items-center justify-center gap-2"
                >
                  <Code2 size={18} />
                  View Live Website
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-3 bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 
                    text-slate-900 dark:text-white rounded-lg text-center font-mono font-medium transition-all duration-300
                    border border-cyan-500/30 hover:border-cyan-500 flex items-center justify-center gap-2"
                >
                  <Terminal size={18} />
                  View Source Code
                </a>
              </div>
            </div>
          </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal; 