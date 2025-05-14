export interface ProjectType {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface ExperienceType {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface StudyType {
  id: number;
  degree: string;
  institution: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export type ThemeMode = 'light' | 'dark';