// Technology icon mapping
const techIcons: { [key: string]: string } = {
  'Java': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg',
  'Kotlin': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/kotlin/kotlin-original.svg',
  'Android Studio': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original.svg',
  'Oracle Database': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/oracle/oracle-original.svg',
  'MySQL': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg',
  'XML': 'https://api.iconify.design/mdi:xml.svg?color=%23ff6600',
  'Firebase': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg',
  'Python': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
  'Machine Learning': 'https://api.iconify.design/carbon:machine-learning.svg?color=%234169e1',
  'Virtual Machines': 'https://api.iconify.design/mdi:server.svg?color=%23666666',
  'HTML': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
  'CSS': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg',
  'JavaScript': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
  'JPA': 'https://api.iconify.design/simple-icons:spring.svg?color=%236db33f',
  'JDBC': 'https://api.iconify.design/mdi:database-sync.svg?color=%23f89820',
  'Servlets': 'https://api.iconify.design/mdi:coffee.svg?color=%23007396',
  'JSP': 'https://api.iconify.design/mdi:language-java.svg?color=%23007396',
  'jQuery': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/jquery/jquery-original.svg',
  'Bootstrap': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg',
  'PHP': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg',
  'SQL': 'https://api.iconify.design/mdi:database.svg?color=%234169e1',
  'WordPress': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/wordpress/wordpress-plain.svg',
  'Elementor Pro': 'https://api.iconify.design/simple-icons:elementor.svg?color=%2392003b',
  'WooCommerce': 'https://api.iconify.design/simple-icons:woocommerce.svg?color=%2396588a',
  'Software Architecture': 'https://api.iconify.design/mdi:sitemap.svg?color=%234169e1',
  'Eclipse': 'https://api.iconify.design/simple-icons:eclipseide.svg?color=%232c2255',
  'MySQL Workbench': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg',
  'Git': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg',
  'SCRUM': 'https://api.iconify.design/mdi:account-group.svg?color=%2300a8e1',
};

export const studies = {
  en: [
    {
      id: 1,
      degree: 'Higher Degree in Multi-platform Application Development',
      institution: 'Ceinmark Study Center, Bilbao',
      period: '2024 - 2025',
      description: 'Two-years cycle oriented to professional software development for different environments (mobile, web, and desktop), with a solid foundation in programming, interface design, data access, and application deployment.',
      achievements: [
        'Development with technologies such as Java, Kotlin, Android Studio, Oracle Database, MySQL, XML, and Firebase.',
        'Programming graphical interfaces design, and management of local and remote databases.',
        'Web site programming with HTML, CSS, Java, Servlets, JSP, JPA, JDBC, and MySQL.',
        'Management of Linux, Virtual Machines, and Python.',
      ],
      technologies: [
        { name: 'Java', icon: techIcons['Java'] },
        { name: 'Kotlin', icon: techIcons['Kotlin'] },
        { name: 'Android Studio', icon: techIcons['Android Studio'] },
        { name: 'Oracle Database', icon: techIcons['Oracle Database'] },
        { name: 'MySQL', icon: techIcons['MySQL'] },
        { name: 'XML', icon: techIcons['XML'] },
        { name: 'Firebase', icon: techIcons['Firebase'] },
        { name: 'Python', icon: techIcons['Python'] },
        { name: 'Machine Learning', icon: techIcons['Machine Learning'] },
        { name: 'Virtual Machines', icon: techIcons['Virtual Machines'] },
        { name: 'HTML', icon: techIcons['HTML'] },
        { name: 'CSS', icon: techIcons['CSS'] },
        { name: 'JavaScript', icon: techIcons['JavaScript'] },
        { name: 'JPA', icon: techIcons['JPA'] },
        { name: 'JDBC', icon: techIcons['JDBC'] },
        { name: 'Servlets', icon: techIcons['Servlets'] },
        { name: 'JSP', icon: techIcons['JSP'] }
      ]
    },
    {
      id: 2,
      degree: 'Higher Degree in Web Application Development',
      institution: 'Ceinmark Study Center, Bilbao',
      period: '2022 - 2024',
      description: 'Two-years cycle focused on the design, development, and maintenance of dynamic and adaptive web applications. This degree provides a solid foundation in both client-side and server-side programming, as well as professional web design and database management.',
      achievements: [
        'Development with technologies such as Java, JavaScript, jQuery, Bootstrap, PHP, SQL, WordPress, Elementor Pro, WooCommerce, and Software Architecture.',
        'Client-side and server-side programming, database integration, and development with MVC architectures.',
        'Management of development tools such as Eclipse, MySQL Workbench, and Git.',
        'Project management using agile methodologies (SCRUM).'
      ],
      technologies: [
        { name: 'JavaScript', icon: techIcons['JavaScript'] },
        { name: 'Java', icon: techIcons['Java'] },
        { name: 'jQuery', icon: techIcons['jQuery'] },
        { name: 'Bootstrap', icon: techIcons['Bootstrap'] },
        { name: 'PHP', icon: techIcons['PHP'] },
        { name: 'SQL', icon: techIcons['SQL'] },
        { name: 'WordPress', icon: techIcons['WordPress'] },
        { name: 'Elementor Pro', icon: techIcons['Elementor Pro'] },
        { name: 'WooCommerce', icon: techIcons['WooCommerce'] },
        { name: 'Software Architecture', icon: techIcons['Software Architecture'] },
        { name: 'Eclipse', icon: techIcons['Eclipse'] },
        { name: 'MySQL Workbench', icon: techIcons['MySQL Workbench'] },
        { name: 'Git', icon: techIcons['Git'] },
        { name: 'SCRUM', icon: techIcons['SCRUM'] },
        { name: 'HTML', icon: techIcons['HTML'] },
        { name: 'CSS', icon: techIcons['CSS'] }
      ]
    }
  ],
  es: [
    {
      id: 1,
      degree: 'Grado superior en desarrollo de aplicaciones multi plataformas',
      institution: 'Centro de estudios Ceinmark, Bilbao',
      period: '2024 - 2025',
      description: 'Ciclo de dos años orientado al desarrollo de software profesional para distintos entornos (móviles, web y escritorio), con una base sólida en programación, diseño de interfaces, acceso a datos y despliegue de aplicaciones.',
      achievements: [
        'Desarrollo con tecnologías como Java, Kotlin, Android Studio, Oracle Database, MySQL, XML, y Firebase.',
        'Programación diseño de interfaces gráficas, y manejo de bases de datos locales y remotas.',
        'Programación de sitios web con HTML, CSS, Java, Servlets, JSP, JPA, JDBC, y MySQL.',
        'Manejo de Linux, Máquinas Virtuales y Python.',
      ],
      technologies: [
        { name: 'Java', icon: techIcons['Java'] },
        { name: 'Kotlin', icon: techIcons['Kotlin'] },
        { name: 'Android Studio', icon: techIcons['Android Studio'] },
        { name: 'Oracle Database', icon: techIcons['Oracle Database'] },
        { name: 'MySQL', icon: techIcons['MySQL'] },
        { name: 'XML', icon: techIcons['XML'] },
        { name: 'Firebase', icon: techIcons['Firebase'] },
        { name: 'Python', icon: techIcons['Python'] },
        { name: 'Machine Learning', icon: techIcons['Machine Learning'] },
        { name: 'Virtual Machines', icon: techIcons['Virtual Machines'] },
        { name: 'HTML', icon: techIcons['HTML'] },
        { name: 'CSS', icon: techIcons['CSS'] },
        { name: 'JavaScript', icon: techIcons['JavaScript'] },
        { name: 'JPA', icon: techIcons['JPA'] },
        { name: 'JDBC', icon: techIcons['JDBC'] },
        { name: 'Servlets', icon: techIcons['Servlets'] },
        { name: 'JSP', icon: techIcons['JSP'] }
      ]
    },
    {
      id: 2,
      degree: 'Grado superior en desarrollo de aplicaciones web',
      institution: 'Centro de estudios Ceinmark, Bilbao',
      period: '2022 - 2024',
      description: 'Ciclo de dos años centrada en el diseño, desarrollo y mantenimiento de aplicaciones web dinámicas y adaptativas. Este grado proporciona una base sólida en programación tanto del lado cliente como del servidor, así como en diseño web profesional y gestión de bases de datos.',
      achievements: [
        'Desarrollo con tecnologías como Java, JavaScript, jQuery, Bootstrap, PHP, SQL, WordPress, Elementor Pro, WooCommerce, y Software Architecture.',
        'Programación del lado cliente y servidor, integración de bases de datos, y desarrollo con arquitecturas MVC.',
        'Manejo de herramientas de desarrollo como Eclipse, MySQL Workbench, y Git.',
        'Gestión de proyectos mediante metodologías ágiles (SCRUM).'
      ],
      technologies: [
        { name: 'JavaScript', icon: techIcons['JavaScript'] },
        { name: 'Java', icon: techIcons['Java'] },
        { name: 'jQuery', icon: techIcons['jQuery'] },
        { name: 'Bootstrap', icon: techIcons['Bootstrap'] },
        { name: 'PHP', icon: techIcons['PHP'] },
        { name: 'SQL', icon: techIcons['SQL'] },
        { name: 'WordPress', icon: techIcons['WordPress'] },
        { name: 'Elementor Pro', icon: techIcons['Elementor Pro'] },
        { name: 'WooCommerce', icon: techIcons['WooCommerce'] },
        { name: 'Software Architecture', icon: techIcons['Software Architecture'] },
        { name: 'Eclipse', icon: techIcons['Eclipse'] },
        { name: 'MySQL Workbench', icon: techIcons['MySQL Workbench'] },
        { name: 'Git', icon: techIcons['Git'] },
        { name: 'SCRUM', icon: techIcons['SCRUM'] },
        { name: 'HTML', icon: techIcons['HTML'] },
        { name: 'CSS', icon: techIcons['CSS'] }
      ]
    }
  ],
  fr: [
    {
      id: 1,
      degree: 'Diplôme Supérieur en Développement d\'Applications Multi-Plateformes',
      institution: 'Centre d\'Études Ceinmark, Bilbao',
      period: '2024 - 2025',
      description: 'Cycle de deux ans orienté vers le développement professionnel de logiciels pour différents environnements (mobile, web et bureau), avec une base solide en programmation, conception d\'interfaces, accès aux données et déploiement d\'applications.',
      achievements: [
        'Développement avec des technologies telles que Java, Kotlin, Android Studio, Oracle Database, MySQL, XML et Firebase.',
        'Programmation de conception d\'interfaces graphiques et gestion de bases de données locales et distantes.',
        'Programmation de sites web avec HTML, CSS, Java, Servlets, JSP, JPA, JDBC et MySQL.',
        'Gestion de Linux, Machines Virtuelles et Python.',
      ],
      technologies: [
        { name: 'Java', icon: techIcons['Java'] },
        { name: 'Kotlin', icon: techIcons['Kotlin'] },
        { name: 'Android Studio', icon: techIcons['Android Studio'] },
        { name: 'Oracle Database', icon: techIcons['Oracle Database'] },
        { name: 'MySQL', icon: techIcons['MySQL'] },
        { name: 'XML', icon: techIcons['XML'] },
        { name: 'Firebase', icon: techIcons['Firebase'] },
        { name: 'Python', icon: techIcons['Python'] },
        { name: 'Machine Learning', icon: techIcons['Machine Learning'] },
        { name: 'Virtual Machines', icon: techIcons['Virtual Machines'] },
        { name: 'HTML', icon: techIcons['HTML'] },
        { name: 'CSS', icon: techIcons['CSS'] },
        { name: 'JavaScript', icon: techIcons['JavaScript'] },
        { name: 'JPA', icon: techIcons['JPA'] },
        { name: 'JDBC', icon: techIcons['JDBC'] },
        { name: 'Servlets', icon: techIcons['Servlets'] },
        { name: 'JSP', icon: techIcons['JSP'] }
      ]
    },
    {
      id: 2,
      degree: 'Diplôme Supérieur en Développement d\'Applications Web',
      institution: 'Centre d\'Études Ceinmark, Bilbao',
      period: '2022 - 2024',
      description: 'Cycle de deux ans axé sur la conception, le développement et la maintenance d\'applications web dynamiques et adaptatives. Ce diplôme fournit une base solide en programmation côté client et serveur, ainsi qu\'en conception web professionnelle et gestion de bases de données.',
      achievements: [
        'Développement avec des technologies telles que Java, JavaScript, jQuery, Bootstrap, PHP, SQL, WordPress, Elementor Pro, WooCommerce et Architecture Logicielle.',
        'Programmation côté client et serveur, intégration de bases de données et développement avec des architectures MVC.',
        'Gestion d\'outils de développement tels que Eclipse, MySQL Workbench et Git.',
        'Gestion de projets selon les méthodologies agiles (SCRUM).'
      ],
      technologies: [
        { name: 'JavaScript', icon: techIcons['JavaScript'] },
        { name: 'Java', icon: techIcons['Java'] },
        { name: 'jQuery', icon: techIcons['jQuery'] },
        { name: 'Bootstrap', icon: techIcons['Bootstrap'] },
        { name: 'PHP', icon: techIcons['PHP'] },
        { name: 'SQL', icon: techIcons['SQL'] },
        { name: 'WordPress', icon: techIcons['WordPress'] },
        { name: 'Elementor Pro', icon: techIcons['Elementor Pro'] },
        { name: 'WooCommerce', icon: techIcons['WooCommerce'] },
        { name: 'Software Architecture', icon: techIcons['Software Architecture'] },
        { name: 'Eclipse', icon: techIcons['Eclipse'] },
        { name: 'MySQL Workbench', icon: techIcons['MySQL Workbench'] },
        { name: 'Git', icon: techIcons['Git'] },
        { name: 'SCRUM', icon: techIcons['SCRUM'] },
        { name: 'HTML', icon: techIcons['HTML'] },
        { name: 'CSS', icon: techIcons['CSS'] }
      ]
    }
  ]
}; 