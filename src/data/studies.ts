import { StudyType } from '../types';

export const studies: StudyType[] = [
  {
    id: 1,
    degree: 'Master in Computer Science',
    institution: 'Example University',
    period: '2020 - 2022',
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
    degree: 'Bachelor in Software Engineering',
    institution: 'Tech Institute',
    period: '2016 - 2020',
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
    degree: 'Web Development Bootcamp',
    institution: 'Code Academy',
    period: '2015 - 2016',
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