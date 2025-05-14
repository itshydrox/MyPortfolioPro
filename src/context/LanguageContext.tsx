import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

// Translations object
const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.studies': 'Education',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',

    // Hero Section
    'hero.greeting': 'Hi, I\'m',
    'hero.im': 'I\'m a',
    'hero.roles.fullstack': 'Full Stack Developer',
    'hero.roles.react': 'React Specialist',
    'hero.roles.nodejs': 'Node.js Engineer',
    'hero.roles.problem': 'Problem Solver',
    'hero.description': 'I build exceptional digital experiences that combine elegant design with powerful functionality. Specializing in full-stack development with a focus on React, Vue.js , Node.js, and modern web technologies.',
    'hero.cta.work': 'View My Work',
    'hero.cta.contact': 'Get In Touch',

    // About Section
    'about.title': 'About Me',
    'about.subtitle': 'Get to know more about me and what I do',
    'about.heading': 'Full Stack Developer with a passion for creating exceptional digital experiences',
    'about.description1': 'With over 6 years of experience in web development, I specialize in building modern, responsive web applications using React, Node.js, and other cutting-edge technologies. My approach combines clean, efficient code with thoughtful user experience design.',
    'about.description2': 'I\'ve worked with startups and established companies across various industries, helping them solve complex problems and deliver high-quality digital products. My background in both frontend and backend development allows me to understand the full development lifecycle and create seamless, integrated solutions.',
    'about.description3': 'When I\'m not coding, you\'ll find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through blog posts and community engagement.',
    'about.cta.contact': 'Contact Me',
    'about.cta.resume': 'Download Resume',

    // Services
    'services.frontend': 'Frontend Development',
    'services.frontend.desc': 'Building responsive, interactive, and engaging user interfaces using modern frameworks and libraries.',
    'services.backend': 'Backend Development',
    'services.backend.desc': 'Crafting robust server-side applications with secure APIs and efficient data processing.',
    'services.database': 'Database Design',
    'services.database.desc': 'Creating optimized data structures and implementing reliable storage solutions for applications.',
    'services.cloud': 'Cloud Solutions',
    'services.cloud.desc': 'Deploying and managing applications on cloud platforms with scalability and reliability in mind.',
    'services.security': 'Security Implementation',
    'services.security.desc': 'Implementing best practices for application security and data protection.',
    'services.performance': 'Performance Optimization',
    'services.performance.desc': 'Enhancing application speed and efficiency through code optimization and best practices.',

    // Skills Section
    'skills.title': 'Skills & Expertise',
    'skills.subtitle': 'A comprehensive overview of my technical skills and proficiency levels',

    // Projects Section
    'projects.title': 'Featured Projects',
    'projects.subtitle': 'A selection of my recent work and personal projects',
    'projects.other': 'Other Notable Projects',
    'projects.live': 'Live Demo',
    'projects.source': 'Source Code',

    // Experience Section
    'experience.title': 'Work Experience',
    'experience.subtitle': 'My professional journey and key achievements',
    'experience.achievements': 'Key Achievements:',

    // Studies Section
    'studies.title': 'Education',
    'studies.subtitle': 'My academic background and qualifications',
    'studies.achievements': 'Key Achievements:',

    // Contact Section
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'Have a question or want to work together? Drop me a message!',
    'contact.info': 'Contact Information',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.location': 'Location'
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.about': 'Sobre mí',
    'nav.skills': 'Habilidades',
    'nav.projects': 'Proyectos',
    'nav.studies': 'Educación',
    'nav.experience': 'Experiencia',
    'nav.contact': 'Contacto',

    // Hero Section
    'hero.greeting': 'Hola, soy',
    'hero.im': 'Soy un',
    'hero.roles.fullstack': 'Desarrollador Full Stack',
    'hero.roles.react': 'Especialista en React',
    'hero.roles.nodejs': 'Ingeniero Node.js',
    'hero.roles.problem': 'Solucionador de Problemas',
    'hero.description': 'Construyo experiencias digitales excepcionales que combinan diseño elegante con funcionalidad potente. Me especializo en desarrollo full-stack con enfoque en React, Vue.js, Node.js y tecnologías web modernas.',
    'hero.cta.work': 'Ver mi Trabajo',
    'hero.cta.contact': 'Contactar',

    // About Section
    'about.title': 'Sobre Mí',
    'about.subtitle': 'Conoce más sobre mí y lo que hago',
    'about.heading': 'Desarrollador Full Stack apasionado por crear experiencias digitales excepcionales',
    'about.description1': 'Con más de 6 años de experiencia en desarrollo web, me especializo en construir aplicaciones web modernas y responsivas utilizando React, Node.js y otras tecnologías de vanguardia. Mi enfoque combina código limpio y eficiente con un diseño de experiencia de usuario bien pensado.',
    'about.description2': 'He trabajado con startups y empresas establecidas en varias industrias, ayudándoles a resolver problemas complejos y entregar productos digitales de alta calidad. Mi experiencia tanto en desarrollo frontend como backend me permite entender el ciclo completo de desarrollo y crear soluciones integradas sin problemas.',
    'about.description3': 'Cuando no estoy programando, me encontrarás explorando nuevas tecnologías, contribuyendo a proyectos de código abierto o compartiendo mi conocimiento a través de publicaciones en blog y participación en la comunidad.',
    'about.cta.contact': 'Contáctame',
    'about.cta.resume': 'Descargar CV',

    // Services
    'services.frontend': 'Desarrollo Frontend',
    'services.frontend.desc': 'Construcción de interfaces de usuario responsivas, interactivas y atractivas utilizando frameworks y bibliotecas modernas.',
    'services.backend': 'Desarrollo Backend',
    'services.backend.desc': 'Creación de aplicaciones robustas del lado del servidor con APIs seguras y procesamiento eficiente de datos.',
    'services.database': 'Diseño de Bases de Datos',
    'services.database.desc': 'Creación de estructuras de datos optimizadas e implementación de soluciones de almacenamiento confiables.',
    'services.cloud': 'Soluciones en la Nube',
    'services.cloud.desc': 'Implementación y gestión de aplicaciones en plataformas cloud con enfoque en escalabilidad y confiabilidad.',
    'services.security': 'Implementación de Seguridad',
    'services.security.desc': 'Implementación de mejores prácticas para la seguridad de aplicaciones y protección de datos.',
    'services.performance': 'Optimización de Rendimiento',
    'services.performance.desc': 'Mejora de la velocidad y eficiencia de las aplicaciones mediante optimización de código y mejores prácticas.',

    // Skills Section
    'skills.title': 'Habilidades y Experiencia',
    'skills.subtitle': 'Una visión completa de mis habilidades técnicas y niveles de competencia',

    // Projects Section
    'projects.title': 'Proyectos Destacados',
    'projects.subtitle': 'Una selección de mis trabajos recientes y proyectos personales',
    'projects.other': 'Otros Proyectos Notables',
    'projects.live': 'Demo en Vivo',
    'projects.source': 'Código Fuente',

    // Experience Section
    'experience.title': 'Experiencia Laboral',
    'experience.subtitle': 'Mi trayectoria profesional y logros principales',
    'experience.achievements': 'Logros Principales:',

    // Studies Section
    'studies.title': 'Educación',
    'studies.subtitle': 'Mi formación académica y cualificaciones',
    'studies.achievements': 'Logros Principales:',

    // Contact Section
    'contact.title': 'Contacto',
    'contact.subtitle': '¿Tienes una pregunta o quieres trabajar juntos? ¡Envíame un mensaje!',
    'contact.info': 'Información de Contacto',
    'contact.form.name': 'Nombre',
    'contact.form.email': 'Correo',
    'contact.form.subject': 'Asunto',
    'contact.form.message': 'Mensaje',
    'contact.form.send': 'Enviar Mensaje',
    'contact.email': 'Correo',
    'contact.phone': 'Teléfono',
    'contact.location': 'Ubicación'
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Check for saved language preference in localStorage
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('language') as Language;
      if (savedLang === 'en' || savedLang === 'es') {
        return savedLang;
      }
      // If no saved preference, check browser language
      const browserLang = navigator.language.split('-')[0];
      if (browserLang === 'en') {
        return 'en';
      }
    }
    return 'es'; // Default to Spanish
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'es' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 