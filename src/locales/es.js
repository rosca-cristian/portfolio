export default {
  // Header
  header: {
    name: 'Cristian Rosca',
    title: 'Desarrollador Full-Stack',
    email: 'Email',
    linkedin: 'LinkedIn',
    github: 'GitHub'
  },

  // Sidebar
  sidebar: {
    explorer: 'EXPLORADOR',
    readme: 'README.md',
    experience: 'experience',
    projects: 'projects',
    skills: 'skills',
    education: 'education',
    contact: 'contact.txt'
  },

  // README Content
  readme: {
    title: 'Sobre Mí',
    intro: 'Desarrollador Full-Stack con más de 3 años de experiencia en la construcción de aplicaciones web escalables utilizando React, TypeScript, ASP.NET Core y ASP.NET Framework.',
    profileTitle: 'Perfil Profesional',
    profileDesc: 'Historial probado de liderazgo en migraciones de frontend (CRA a Vite, Redux a Zustand) y optimización del rendimiento del backend. Experimentado en tecnologías en la nube (Azure) y gestión de bases de datos (MongoDB, Entity Framework).',
    yearsExp: 'Años de Experiencia',
    technologies: 'Tecnologías',
    languages: 'Idiomas',
    specialtiesTitle: 'Especialidades',
    specialties: [
      'Desarrollo Frontend con React y TypeScript',
      'Arquitectura Backend con ASP.NET Core',
      'Desarrollo de Aplicaciones Empresariales con .NET Framework',
      'Migraciones y Modernización de Sistemas',
      'Optimización de Rendimiento',
      'Integración Cloud (Azure)'
    ]
  },

  // Experience Content
  experience: {
    title: 'Experiencia Profesional',
    ruano: {
      title: 'Desarrollador Full-Stack',
      company: 'Ruano Informática',
      date: 'Marzo 2024 - Actualidad',
      location: 'Almería, España (Presencial)',
      frontend: 'Frontend',
      frontendItems: [
        'Lideré la migración de Create React App a Vite, mejorando significativamente la velocidad de carga y compilación',
        'Migración del manejo de estado de Redux a Zustand',
        'Modernización de componentes DevExpress, mejorando estabilidad'
      ],
      backend: 'Backend (ASP.NET Core / Web)',
      backendItems: [
        'Desarrollo de módulos críticos para reportes y BI Dashboards con DevExpress',
        'Diseño e implementación de servicios robustos en ASP.NET Core',
        'Optimización con Azure y Entity Framework'
      ],
      dotnet: '.NET Framework / Aplicaciones Empresariales',
      dotnetItems: [
        'Arquitecturé y desarrollé módulos backend críticos para el sistema ERP "Indot", una aplicación empresarial a gran escala construida sobre el ecosistema .NET (C# y VB)',
        'Lideré la implementación de lógica de negocio compleja para adaptar la plataforma a los requisitos específicos y flujos de trabajo de diversos clientes del sector comercio',
        'Dirigí el análisis técnico y la implementación completa del sistema de cumplimiento normativo "NO-Verifactu", asegurando la integridad, inmutabilidad y conformidad de todos los procesos de facturación según la nueva legislación antifraude'
      ]
    },
    hudl: {
      title: 'Ingeniero de Software',
      company: 'HUDL',
      date: 'Septiembre 2022 - Julio 2023',
      location: 'Londres (Remoto)',
      items: [
        'Actualización de MongoDB a su última versión con planificación meticulosa',
        'Implementación de sistema de registro robusto para tracking de rendimiento y errores',
        'Incorporación de pruebas unitarias en el proceso de desarrollo',
        'Formación de nuevos miembros del equipo y promoción de buenas prácticas'
      ]
    },
    realtrack: {
      title: 'Desarrollador Web',
      company: 'Realtrack Systems S.L',
      date: 'Febrero 2022 - Septiembre 2022',
      location: 'Almería, España (Presencial)',
      items: [
        'Desarrollo de plataforma Wimu-Cloud para análisis de datos deportivos',
        'Implementación de sistema de programación visual con Rete.js para expresiones matemáticas de MongoDB',
        'Desarrollo con stack completo: JavaScript, Kotlin, React, MongoDB, Node'
      ]
    }
  },

  // Projects Content
  projects: {
    title: 'Proyectos Destacados',
    portalEmpleo: {
      title: 'Portal de Empleo',
      description: 'Marketplace de empleo con diseño neobrutalism que conecta candidatos y empresas. Incluye gestión de CVs, aplicaciones y agendamiento de entrevistas.',
      highlights: [
        'React + TypeScript + Vite',
        'Express.js + MongoDB',
        'Diseño neobrutalism único',
        'Sistema de gestión de CVs múltiples',
        'Agendamiento de entrevistas bidireccional'
      ],
      demo: 'https://portal-empleo.vercel.app',
      github: 'https://github.com/rosca-cristian/portal-empleo'
    },
    apiExpress: {
      title: 'API Express - Portal de Empleo',
      description: 'API RESTful desarrollada con Express.js y MongoDB que sirve como backend del Portal de Empleo. Gestiona autenticación, CVs, aplicaciones y entrevistas.',
      highlights: [
        'Express.js + Node.js',
        'MongoDB + Mongoose',
        'Autenticación JWT',
        'Upload de archivos',
        'Arquitectura REST escalable'
      ],
      github: 'https://github.com/rosca-cristian/api-express-portal-empleo'
    },
    backend: {
      title: 'API Backend NestJS',
      description: 'API RESTful desarrollada con NestJS y Prisma que sirve como backend para múltiples aplicaciones (Gestión de Cursos y Sistema de Reservas).',
      highlights: [
        'NestJS + TypeScript',
        'Autenticación JWT',
        'Prisma ORM',
        'Arquitectura modular escalable'
      ],
      github: 'https://github.com/rosca-cristian/api-nest-portal-cursos-reservas'
    },
    gestionCursos: {
      title: 'Sistema de Gestión de Cursos',
      description: 'Plataforma web para la administración de cursos con gestión de roles (Admin, Profesor, Alumno) y autenticación completa.',
      highlights: [
        'React + TypeScript + Vite',
        'Sistema de roles y permisos',
        'Gestión de cursos y matriculación',
        'shadcn/ui + Tailwind CSS'
      ],
      demo: 'https://portal-cursos-seven.vercel.app',
      github: 'https://github.com/rosca-cristian/portal-cursos'
    },
    reservas: {
      title: 'Sistema de Reservas de Espacios',
      description: 'Aplicación web para la reserva y gestión de espacios con visualización de planos interactivos y calendario de reservas.',
      highlights: [
        'React + TypeScript',
        'Calendario interactivo con react-big-calendar',
        'Visualización de planos con zoom y pan',
        'Gestión de QR para reservas'
      ],
      demo: 'https://portal-reservas.vercel.app',
      github: 'https://github.com/rosca-cristian/portal-reservas'
    }
  },

  // Skills Content
  skills: {
    title: 'Habilidades Técnicas',
    frontend: 'Frontend',
    backend: 'Backend',
    tools: 'Herramientas & Cloud',
    softSkills: 'Soft Skills',
    languagesTitle: 'Idiomas',
    categories: {
      languages: 'Lenguajes',
      frameworks: 'Frameworks & Librerías',
      buildTools: 'Build Tools',
      frameworksBackend: 'Frameworks',
      databases: 'Bases de Datos'
    },
    softSkillsList: [
      'Liderazgo Técnico',
      'Resolución de Problemas',
      'Adaptabilidad',
      'Comunicación Efectiva',
      'Pensamiento Analítico',
      'Gestión del Cambio',
      'Trabajo en Equipo',
      'Aprendizaje Continuo'
    ],
    languagesList: [
      { name: 'Español', level: 'Nativo' },
      { name: 'Rumano', level: 'Nativo' },
      { name: 'Inglés', level: 'B2 - Intermedio-Avanzado' }
    ]
  },

  // Education Content
  education: {
    title: 'Formación',
    degree: 'Grado Superior en Desarrollo de Aplicaciones Web',
    institution: 'IES CELIA VIÑAS',
    location: 'Almería, España',
    date: '2020 - 2022',
    description: 'Formación profesional especializada en desarrollo de aplicaciones web, cubriendo tecnologías frontend y backend, bases de datos, y despliegue de aplicaciones.',
    areasTitle: 'Áreas de estudio:',
    areas: [
      'Desarrollo Frontend (HTML, CSS, JavaScript)',
      'Programación Backend',
      'Gestión de Bases de Datos',
      'Desarrollo de Interfaces Web',
      'Despliegue de Aplicaciones Web'
    ],
    certificationsTitle: 'Certificaciones & Formación Continua',
    certificationsDesc: 'Como profesional del desarrollo de software, mantengo un compromiso continuo con el aprendizaje y la actualización de mis habilidades a través de:',
    certificationsList: [
      'Cursos online de tecnologías emergentes',
      'Participación en comunidades de desarrollo',
      'Proyectos personales y experimentación con nuevas tecnologías',
      'Lectura de documentación técnica y blogs especializados'
    ]
  },

  // Contact Content
  contact: {
    title: 'Contacto',
    terminalTitle: 'contact.txt',
    name: 'NAME:',
    nameValue: 'Cristian Rosca',
    location: 'LOCATION:',
    locationValue: 'España',
    email: 'EMAIL:',
    linkedin: 'LINKEDIN:',
    github: 'GITHUB:',
    emailCard: 'Email',
    linkedinCard: 'LinkedIn',
    githubCard: 'GitHub',
    ctaTitle: '¿Interesado en trabajar juntos?',
    ctaDesc: 'Estoy siempre abierto a nuevas oportunidades y colaboraciones interesantes. No dudes en contactarme!',
    ctaButton: 'Enviar Mensaje'
  },

  // Footer
  footer: {
    text: 'Desarrollado con React + Vite'
  }
}
