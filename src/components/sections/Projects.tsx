import React, { useState, useEffect } from 'react';
import Section from '../ui/Section';
import { projects } from '../../data/projects';
import { GithubIcon, ExternalLink, ChevronRight, Terminal, Code2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useInView } from 'react-intersection-observer';
import ProjectModal from '../ui/ProjectModal';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  const { t, language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof projects.en[0] | null>(null);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  const projectsData = projects[language as keyof typeof projects] || projects.en;
  const featuredProjects = projectsData.filter(project => project.featured);

  return (
    <Section
      id="projects"
      title={t('projects.title')}
      subtitle={t('projects.subtitle')}
      className="bg-gradient-to-br from-blue-50 via-slate-50 to-cyan-50 dark:bg-gradient-to-br dark:from-black dark:via-black dark:to-black"
    >
      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
          >
            {/* Terminal Card */}
            <div 
              className="bg-slate-100/80 dark:bg-black/80 backdrop-blur-sm rounded-lg border border-cyan-500/40 hover:border-cyan-500 dark:hover:border-cyan-400 transition-all duration-300 overflow-hidden hover:shadow-lg hover:shadow-cyan-500/20"
            >
              {/* Terminal header */}
              <div className="border-b border-cyan-500/20 px-4 py-2 flex items-center justify-between bg-slate-200/50 dark:bg-black/50">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                  </div>
                  <Terminal size={12} className="text-cyan-500 dark:text-cyan-400" />
                  <span className="text-[10px] font-mono text-cyan-500 dark:text-cyan-400">
                    project_{index + 1}.tsx
                  </span>
                </div>
                <Code2 size={12} className="text-cyan-500/70 dark:text-cyan-400/70" />
              </div>
              {/* Project Image */}
              <div className="relative overflow-hidden bg-slate-200 dark:bg-slate-900 aspect-video">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-white font-mono text-sm">{'<View />'}</span>
                    <div className="flex space-x-3">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/90 rounded-lg text-gray-900 hover:scale-110 hover:bg-white transition-all duration-300"
                        aria-label={t('projects.live')}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={18} />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/90 rounded-lg text-gray-900 hover:scale-110 hover:bg-white transition-all duration-300"
                        aria-label={t('projects.source')}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <GithubIcon size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                {/* Title - code syntax */}
                <motion.h3 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-lg font-mono font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2"
                >
                  <span className="text-cyan-500 dark:text-cyan-400">{'const'}</span>
                  <span className="text-blue-500 dark:text-blue-400">project</span>
                  <span className="text-cyan-500 dark:text-cyan-400">{'='}</span>
                  <span className="text-purple-500 dark:text-purple-400">{'{'}</span>
                </motion.h3>
                
                {/* Project Name & Description */}
                <div className="space-y-3 pl-5 border-l-2 border-cyan-500/30 dark:border-cyan-400/30 mb-4">
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-base font-mono font-semibold text-slate-700 dark:text-gray-200"
                  >
                    <span className="text-cyan-500/70 dark:text-cyan-400/70">// </span>
                    {project.title}
                  </motion.p>
                  
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-sm font-mono text-slate-600 dark:text-gray-300 leading-relaxed"
                  >
                    {project.description}
                  </motion.p>
                </div>
                
                <div className="text-base font-mono font-bold text-purple-500 dark:text-purple-400 mb-4">
                  {'};'}
                </div>
                
                {/* Tags - code style */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-2 mb-4"
                >
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tag.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.02 * tagIndex }}
                      className="px-3 py-1 text-xs font-mono rounded bg-white/50 dark:bg-slate-900/50 
                        text-cyan-600 dark:text-cyan-400 border border-cyan-500/30
                        hover:border-cyan-500 dark:hover:border-cyan-400 hover:shadow-md hover:shadow-cyan-500/20 transition-all duration-300
                        flex items-center gap-2"
                    >
                      <img 
                        src={tag.icon} 
                        alt={tag.name}
                        className="w-4 h-4"
                        width={16}
                        height={16}
                      />
                      {'<'}{tag.name}{' />'}
                    </motion.span>
                  ))}
                </motion.div>
                
                {/* View Details Button */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 
                    bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 
                    text-white rounded-lg font-mono text-sm font-medium transition-all duration-300 
                    hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-[1.02]"
                >
                  <Code2 size={16} />
                  View Details
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <ProjectModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject || featuredProjects[0]}
      />
    </Section>
  );
};

export default Projects;