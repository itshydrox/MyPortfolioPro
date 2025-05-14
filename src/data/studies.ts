import { StudyType } from '../types';

export const studies: StudyType[] = [
  {
    id: 1,
    degree: 'Grado superior en desarrollo de aplicaciones multi plataformas',
    institution: 'Centro de estudios Ceinmark, Bilbao',
    period: '2024 - 2025',
    description: 'Specialized in Software Engineering and Artificial Intelligence. Developed advanced skills in machine learning and distributed systems.',
    achievements: [
      'Graduated with honors - GPA 3.9/4.0',
      'Published research paper on distributed systems',
      'Led a team project on AI-powered recommendation systems',
      'Received Outstanding Graduate Student Award'
    ],
    technologies: ['Python', 'TensorFlow', 'Distributed Systems', 'Machine Learning']
  },
  {
    id: 2,
    degree: 'Grado superior en desarrollo de aplicaciones web',
    institution: 'Centro de estudios Ceinmark, Bilbao',
    period: '2022 - 2024',
    description: 'Comprehensive study of software development principles, algorithms, and modern programming practices. Focus on web technologies and software architecture.',
    achievements: [
      'Dean\'s List for all semesters',
      'Developed an award-winning project management tool',
      'President of the Computer Science Club',
      'Completed internship at major tech company'
    ],
    technologies: ['Java', 'JavaScript', 'SQL', 'Software Architecture']
  },
  {
    id: 3,
    degree: 'Selectividad de la modalidad de Ciencias',
    institution: 'Instituto Internacional Princesa, Granada',
    period: '2020 - 2021',
    description: 'Intensive program covering full-stack web development. Learned modern frameworks and best practices for web application development.',
    achievements: [
      'Built 5 full-stack applications',
      'Won Best Project Award',
      'Mentored junior developers',
      'Perfect attendance and project completion rate'
    ],
    technologies: ['HTML/CSS', 'JavaScript', 'Node.js', 'React']
  }
]; 