import React from 'react';
import Section from '../ui/Section';
import { skillCategories } from '../../data/skills';

const Skills: React.FC = () => {
  return (
    <Section
      id="skills"
      title="Skills & Expertise"
      subtitle="A comprehensive overview of my technical skills and proficiency levels"
      className="bg-white dark:bg-gray-950"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <div 
            key={category.name}
            className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-sm"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              {category.name}
            </h3>
            <div className="space-y-4">
              {category.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;