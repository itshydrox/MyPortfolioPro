import React, { useState, useEffect } from 'react';
import Section from '../ui/Section';
import { projects } from '../../data/projects';
import { Github, ExternalLink, ChevronRight } from 'lucide-react';
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
      className="bg-gradient-to-br from-gray-50 via-blue-50/10 to-white dark:from-gray-900 dark:via-blue-900/10 dark:to-gray-800 overflow-hidden"
    >
      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
          >
            <div 
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 overflow-hidden hover:shadow-xl transition-all duration-500"
            >
              <div className="relative overflow-hidden bg-white dark:bg-gray-800">
                <div className="w-full">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-auto max-h-[500px] object-contain transform transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                    <span className="text-white font-medium text-lg">View Project Details</span>
                    <div className="flex space-x-4">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 bg-white/90 rounded-lg text-gray-900 hover:scale-110 hover:bg-white transition-all duration-300"
                        aria-label={t('projects.live')}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={22} />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 bg-white/90 rounded-lg text-gray-900 hover:scale-110 hover:bg-white transition-all duration-300"
                        aria-label={t('projects.source')}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={22} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent mb-4 group-hover:scale-[1.02] transition-transform duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.3, delay: (index * 0.1) + (tagIndex * 0.05) }}
                      className="px-3 py-1.5 text-sm font-medium bg-blue-100/80 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
                >
                  View Full Project Details
                  <ChevronRight size={20} />
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