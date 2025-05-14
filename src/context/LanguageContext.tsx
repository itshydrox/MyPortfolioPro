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
    'hero.description': 'Motivated and adaptable, with important skills developed during my studies and experiences in the development of websites, Android applications and desktop programs. My real perspective is focused on locating and seizing opportunities for expansion and progress in this sector, with the firm intention of offering relevant value to any project or company in which I cooperate.',
    'hero.cta.work': 'View My Work',
    'hero.cta.contact': 'Get In Touch',

    // About Section
    'about.title': 'About Me',
    'about.subtitle': 'Get to know more about me and what I do',
    'about.heading': 'Full Stack Developer with a passion for creating exceptional digital experiences',
    'about.description1': 'I am a Full-Stack developer of web and cross-platform applications with a solid background and experience.',
    'about.description2': 'My interest in technology and software development has motivated me to specialize in the design and creation of web, mobile and desktop applications, using modern technologies such as React.js Vue.js, Nuxt.js, Tailwind CSS, Bootstrap and Android Studio with Java.',
    'about.description3': 'Throughout my career, I have been involved in significant projects for entities such as Renfe, Basque Government, Avilés City Council and the Port Authority of Avilés, Fresmak, where I contributed to develop digital platforms and design modern interfaces that improve the user experience.',
    'about.description4': 'In addition to my work experience, I have worked independently, developing custom websites with WordPress and WooCommerce, always trying to provide modern websites that meet the particular needs of each client. My ability to manage projects, meet deadlines and adapt to client suggestions has allowed me to deliver outstanding ones.',
    'about.description5': 'I am constantly looking for opportunities to grow and gain knowledge, with the goal of bringing value to every project I am involved in and learning new technologies.',
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
    'skills.title': 'Lenguages & Frameworks',
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
    'hero.description': 'Motivado y adaptable, con importantes competencias desarrolladas durante mis estudios y experiencias en el desarrollo de páginas web, aplicaciones para Android y programas de escritorio. Mi perspectiva real se enfoca en localizar y aprovechar oportunidades de expansión y progreso en este sector, con la firme intención de ofrecer un valor relevante a cualquier proyecto o empresa en la que coopere.',
    'hero.cta.work': 'Ver mi Trabajo',
    'hero.cta.contact': 'Contactar',

    // About Section
    'about.title': 'Sobre Mí',
    'about.subtitle': 'Conoce más sobre mí y lo que hago',
    'about.heading': 'Desarrollador Full Stack apasionado por crear experiencias digitales excepcionales',
    'about.description1': 'Soy un desarrollador Full-Stack de aplicaciones web y multiplataforma con una sólida formación y experiencia.',
    'about.description2': 'Mi interés por la tecnología y el desarrollo de software me ha motivado a especializarme en el diseño y creación de aplicaciones web, móviles y de escritorio, utilizando tecnologías modernas como React.js, Vue.js, Node.js, Tailwind CSS, Bootstrap y Android Studio con Java.',
    'about.description3': 'A lo largo de mi trayectoria, he podido involucrarme en proyectos significativos para entidades como Renfe, Gobierno Vasco, el Ayuntamiento de Avilés y la Autoridad Portuaria de Avilés, Fresmak, donde contribuí a desarrollar de plataformas digitales y a diseñar interfaces modernas que mejoren la experiencia del usuario.',
    'about.description4': 'Además de mi experiencia laboral, he trabajado de forma independiente, desarrollando sitios web personalizados con WordPress y WooCommerce, siempre intentando brindar sitios web modernos que cubren las necesidades particulares de cada cliente. Mi capacidad para gestionar proyectos, cumplir con los plazos y adaptarme a las sugerencias de los clientes me ha permitido ofrecer sobresalientes.',
    'about.description5': 'Constantemente busco oportunidades para crecer y obtener conocimientos , con el objetivo de aportar valor a cada proyecto en el que participo y aprender nuevas tecnologías.',
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
    'skills.title': 'Lenguages y Frameworks',
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