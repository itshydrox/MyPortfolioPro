import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaHtml5,
  FaJs,
  FaGitAlt,
  FaDatabase,
  FaVuejs,
  FaPhp,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiExpress,
  SiOracle,
  SiAndroidstudio,
  SiAdobeillustrator,
  SiDavinciresolve,
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import { IconType } from 'react-icons';

interface Skill {
  name: string;
  level: number;
  icon: IconType;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend Development",
    skills: [
      { name: "React", level: 80, icon: FaReact },
      { name: "Vue.js", level: 85, icon: FaVuejs },
      { name: "JavaScript", level: 90, icon: FaJs },
      { name: "Tailwind CSS", level: 85, icon: SiTailwindcss },
      { name: "TypeScript", level: 80, icon: SiTypescript },
      { name: "HTML & CSS", level: 95, icon: FaHtml5 },
    ],
  },
  {
    name: "Backend Development",
    skills: [
      { name: "Node.js", level: 85, icon: FaNodeJs },
      { name: "Express.js", level: 75, icon: SiExpress },
      { name: "Java", level: 80, icon: FaJava },
      { name: "PHP", level: 75, icon: FaPhp },
      { name: "Python", level: 70, icon: FaPython },
      
    ],
  },
  {
    name: "Tools",
    skills: [
      { name: "Git", level: 90, icon: FaGitAlt },
      { name: "Android Studio", level: 80, icon: SiAndroidstudio },
      { name: "Visual Studio Code", level: 90, icon: VscCode },
      { name: "Adobe Illustrator", level: 70, icon: SiAdobeillustrator },
      { name: "Davinci Resolve", level: 70, icon: SiDavinciresolve },

    ],
  },
  {
    name: "Database & Infrastructure",
    skills: [
      { name: "MongoDB", level: 80, icon: SiMongodb },
      { name: "MySQL", level: 80, icon: SiMysql },
      { name: "Oracle", level: 70, icon: SiOracle },
      { name: "PostgreSQL", level: 75, icon: SiPostgresql },
      { name: "Database Design", level: 85, icon: FaDatabase },

    ],
  },
];