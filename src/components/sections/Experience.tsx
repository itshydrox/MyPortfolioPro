import React from 'react';
import Section from '../ui/Section';
import { experiences } from '../../data/experience';
import { Calendar, Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <Section
      id="experience"
      title="Work Experience"
      subtitle="My professional journey and key achievements"
      className="bg-white dark:bg-gray-950"
    >
      <div className="max-w-4xl mx-auto">
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`relative pl-8 pb-12 animate-fadeInUp ${
              index === experiences.length - 1 ? '' : 'border-l-2 border-blue-200 dark:border-blue-900'
            }`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="absolute left-[-8px] top-0 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-950" />
            
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {experience.role}
                </h3>
                <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                  <Calendar size={16} className="mr-2" />
                  {experience.period}
                </div>
              </div>
              
              <div className="flex items-center text-gray-700 dark:text-gray-300 mb-4">
                <Briefcase size={16} className="mr-2" />
                {experience.company}
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {experience.description}
              </p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Key Achievements:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                  {experience.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;