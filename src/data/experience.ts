import { ExperienceType } from '../types';

export const experiences: ExperienceType[] = [
  {
    id: 1,
    role: 'Senior Full Stack Developer',
    company: 'TechInnovate Solutions',
    period: 'Jan 2022 - Present',
    description: 'Lead development of enterprise applications using React, Node.js, and AWS. Implemented microservices architecture and CI/CD pipelines. Mentored junior developers and conducted code reviews.',
    achievements: [
      'Reduced application load time by 40% through optimized code and asset delivery',
      'Led migration from monolith to microservices architecture',
      'Implemented automated testing that increased code coverage to 90%',
      'Streamlined deployment process, reducing release time by 60%'
    ],
    technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'MongoDB', 'Docker', 'Kubernetes']
  },
  {
    id: 2,
    role: 'Full Stack Developer',
    company: 'DataViz Platforms',
    period: 'Mar 2020 - Dec 2021',
    description: 'Developed data visualization dashboards and reporting tools for financial clients. Built RESTful APIs and implemented real-time data processing using WebSockets.',
    achievements: [
      'Created interactive visualizations used by 50+ enterprise clients',
      'Implemented real-time data processing reducing latency by 65%',
      'Designed and built a component library used across multiple projects',
      'Optimized database queries, improving report generation speed by 30%'
    ],
    technologies: ['JavaScript', 'React', 'D3.js', 'Node.js', 'PostgreSQL', 'Express', 'Redis']
  },
  {
    id: 3,
    role: 'Frontend Developer',
    company: 'Web Creations Agency',
    period: 'Jun 2018 - Feb 2020',
    description: 'Developed responsive websites and applications for clients across various industries. Collaborated with designers and back-end developers to deliver complete web solutions.',
    achievements: [
      'Built 15+ client websites with responsive designs',
      'Increased site performance scores by an average of 25 points on Lighthouse',
      'Implemented accessibility standards across all projects',
      'Reduced development time by creating reusable component library'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'SCSS', 'Webpack', 'Jest']
  },
  {
    id: 4,
    role: 'Junior Web Developer',
    company: 'Digital Frontiers',
    period: 'Sep 2016 - May 2018',
    description: 'Assisted in the development of web applications and e-commerce solutions. Performed bug fixes and implemented new features based on client requirements.',
    achievements: [
      'Contributed to 5 major website launches',
      'Developed custom WordPress plugins for client-specific needs',
      'Implemented e-commerce integrations with payment gateways',
      'Created automated reporting tools for marketing team'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'WordPress', 'MySQL']
  }
];