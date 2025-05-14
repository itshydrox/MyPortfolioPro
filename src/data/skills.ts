import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    skills: [
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'JavaScript', level: 95 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Redux', level: 85 },
      { name: 'Next.js', level: 85 },
      { name: 'Vue.js', level: 75 },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Express', level: 85 },
      { name: 'RESTful APIs', level: 90 },
      { name: 'GraphQL', level: 80 },
      { name: 'Python', level: 75 },
      { name: 'Java', level: 70 },
      { name: 'PHP', level: 65 },
    ],
  },
  {
    name: 'Database',
    skills: [
      { name: 'MongoDB', level: 85 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'MySQL', level: 80 },
      { name: 'Firebase', level: 85 },
      { name: 'Redis', level: 70 },
    ],
  },
  {
    name: 'DevOps & Tools',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 80 },
      { name: 'AWS', level: 75 },
      { name: 'CI/CD', level: 80 },
      { name: 'Jest', level: 85 },
      { name: 'Webpack', level: 75 },
    ],
  },
];