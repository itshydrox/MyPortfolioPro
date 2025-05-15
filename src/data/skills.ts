interface Skill {
  name: string;
  level: number;
  iconUrl: string;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

interface SkillTranslations {
  en: SkillCategory[];
  es: SkillCategory[];
  fr: SkillCategory[];
}

export const skillCategories: SkillTranslations = {
  en: [
    {
      name: "Frontend Development",
      skills: [
        { 
          name: "React", 
          level: 80, 
          iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
        },
        { 
          name: "Vue.js", 
          level: 85, 
          iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg"
        },
        { 
          name: "JavaScript", 
          level: 90, 
          iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
        },
        { 
          name: "Tailwind CSS", 
          level: 85, 
          iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg"
        },
        { 
          name: "TypeScript", 
          level: 80, 
          iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
        },
        { 
          name: "HTML & CSS", 
          level: 95, 
          iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
        },
      ],
    },
    {
      name: "Backend Development",
      skills: [
        { 
          name: "Node.js", 
          level: 85, 
          iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"
        },
        { 
          name: "Express.js", 
          level: 75, 
          iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg"
        },
        { 
          name: "Java", 
          level: 80, 
          iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
        },
        { 
          name: "PHP", 
          level: 75, 
          iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg"
        },
        { 
          name: "Python", 
          level: 70, 
          iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
        },
        { 
          name: "Django", 
          level: 70, 
          iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-plain.svg"
        },
      ],
    },
    {
      name: "Tools",
      skills: [
        { 
          name: "Git", 
          level: 90, 
          iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg"
        },
        { 
          name: "Android Studio", 
          level: 80, 
          iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original.svg"
        },
        { 
          name: "Visual Studio Code", 
          level: 90, 
          iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg"
        },
        { 
          name: "Adobe Illustrator", 
          level: 70, 
          iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/illustrator/illustrator-plain.svg"
        },
        { 
          name: "Davinci Resolve", 
          level: 70, 
          iconUrl: "https://upload.wikimedia.org/wikipedia/commons/9/90/DaVinci_Resolve_17_logo.svg"
        },
      ],
    },
    {
      name: "Database",
      skills: [
        { 
          name: "MongoDB", 
          level: 80, 
          iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg"
        },
        { 
          name: "MySQL", 
          level: 80, 
          iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg"
        },
        { 
          name: "Oracle", 
          level: 70, 
          iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/oracle/oracle-original.svg"
        },
        { 
          name: "PostgreSQL", 
          level: 75, 
          iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg"
        },
        { 
          name: "Database Design", 
          level: 85, 
          iconUrl: "https://api.iconify.design/mdi:database.svg?color=%234169e1"
        },
      ],
    },
  ],
  es: [
    {
      name: "Desarrollo Frontend",
      skills: [
        { 
          name: "React", 
          level: 80, 
          iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
        },
        { 
          name: "Vue.js", 
          level: 85, 
          iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg"
        },
        { 
          name: "JavaScript", 
          level: 90, 
          iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
        },
        { 
          name: "Tailwind CSS", 
          level: 85, 
          iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg"
        },
        { 
          name: "TypeScript", 
          level: 80, 
          iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
        },
        { 
          name: "HTML & CSS", 
          level: 95, 
          iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
        },
      ],
    },
    {
      name: "Desarrollo Backend",
      skills: [
        { 
          name: "Node.js", 
          level: 85, 
          iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"
        },
        { 
          name: "Express.js", 
          level: 75, 
          iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg"
        },
        { 
          name: "Java", 
          level: 80, 
          iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
        },
        { 
          name: "PHP", 
          level: 75, 
          iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg"
        },
        { 
          name: "Python", 
          level: 70, 
          iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
        },
        { 
          name: "Django", 
          level: 70, 
          iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-plain.svg"
        },
      ],
    },
    {
      name: "Herramientas",
      skills: [
        { 
          name: "Git", 
          level: 90, 
          iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg"
        },
        { 
          name: "Android Studio", 
          level: 80, 
          iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original.svg"
        },
        { 
          name: "Visual Studio Code", 
          level: 90, 
          iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg"
        },
        { 
          name: "Adobe Illustrator", 
          level: 70, 
          iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/illustrator/illustrator-plain.svg"
        },
        { 
          name: "Davinci Resolve", 
          level: 70, 
          iconUrl: "https://upload.wikimedia.org/wikipedia/commons/9/90/DaVinci_Resolve_17_logo.svg"
        },
      ],
    },
    {
      name: "Base de Datos",
      skills: [
        { 
          name: "MongoDB", 
          level: 80, 
          iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg"
        },
        { 
          name: "MySQL", 
          level: 80, 
          iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg"
        },
        { 
          name: "Oracle", 
          level: 70, 
          iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/oracle/oracle-original.svg"
        },
        { 
          name: "PostgreSQL", 
          level: 75, 
          iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg"
        },
        { 
          name: "Diseño de Bases de Datos", 
          level: 85, 
          iconUrl: "https://api.iconify.design/mdi:database.svg?color=%234169e1"
        },
      ],
    },
  ],
  fr: [
    {
      name: "Développement Frontend",
    skills: [
        { 
          name: "React", 
          level: 80, 
          iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
        },
        { 
          name: "Vue.js", 
          level: 85, 
          iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg"
        },
        { 
          name: "JavaScript", 
          level: 90, 
          iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
        },
        { 
          name: "Tailwind CSS", 
          level: 85, 
          iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg"
        },
        { 
          name: "TypeScript", 
          level: 80, 
          iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
        },
        { 
          name: "HTML & CSS", 
          level: 95, 
          iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
        },
    ],
  },
  {
      name: "Développement Backend",
    skills: [
        { 
          name: "Node.js", 
          level: 85, 
          iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"
        },
        { 
          name: "Express.js", 
          level: 75, 
          iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg"
        },
        { 
          name: "Java", 
          level: 80, 
          iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
        },
        { 
          name: "PHP", 
          level: 75, 
          iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg"
        },
        { 
          name: "Python", 
          level: 70, 
          iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
        },
        { 
          name: "Django", 
          level: 70, 
          iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-plain.svg"
        },
    ],
  },
  {
      name: "Outils",
    skills: [
        { 
          name: "Git", 
          level: 90, 
          iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg"
        },
        { 
          name: "Android Studio", 
          level: 80, 
          iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original.svg"
        },
        { 
          name: "Visual Studio Code", 
          level: 90, 
          iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg"
        },
        { 
          name: "Adobe Illustrator", 
          level: 70, 
          iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/illustrator/illustrator-plain.svg"
        },
        { 
          name: "Davinci Resolve", 
          level: 70, 
          iconUrl: "https://upload.wikimedia.org/wikipedia/commons/9/90/DaVinci_Resolve_17_logo.svg"
        },
    ],
  },
  {
      name: "Base de Données",
    skills: [
        { 
          name: "MongoDB", 
          level: 80, 
          iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg"
        },
        { 
          name: "MySQL", 
          level: 80, 
          iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg"
        },
        { 
          name: "Oracle", 
          level: 70, 
          iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/oracle/oracle-original.svg"
        },
        { 
          name: "PostgreSQL", 
          level: 75, 
          iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg"
        },
        { 
          name: "Conception de Bases de Données", 
          level: 85, 
          iconUrl: "https://api.iconify.design/mdi:database.svg?color=%234169e1"
        },
      ],
    },
  ]
};