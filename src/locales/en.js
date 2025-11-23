export default {
  // Header
  header: {
    name: 'Cristian Rosca',
    title: 'Full-Stack Developer',
    email: 'Email',
    linkedin: 'LinkedIn',
    github: 'GitHub'
  },

  // Sidebar
  sidebar: {
    explorer: 'EXPLORER',
    readme: 'README.md',
    experience: 'experience',
    projects: 'projects',
    skills: 'skills',
    education: 'education',
    contact: 'contact.txt'
  },

  // README Content
  readme: {
    title: 'About Me',
    intro: 'Full-Stack Developer with over 3 years of experience building scalable web applications using React, TypeScript, ASP.NET Core, and ASP.NET Framework.',
    profileTitle: 'Professional Profile',
    profileDesc: 'Proven track record of leadership in frontend migrations (CRA to Vite, Redux to Zustand) and backend performance optimization. Experienced in cloud technologies (Azure) and database management (MongoDB, Entity Framework).',
    yearsExp: 'Years of Experience',
    technologies: 'Technologies',
    languages: 'Languages',
    specialtiesTitle: 'Specialties',
    specialties: [
      'Frontend Development with React and TypeScript',
      'Backend Architecture with ASP.NET Core',
      'Enterprise Application Development with .NET Framework',
      'System Migrations and Modernization',
      'Performance Optimization',
      'Cloud Integration (Azure)'
    ]
  },

  // Experience Content
  experience: {
    title: 'Professional Experience',
    ruano: {
      title: 'Full-Stack Developer',
      company: 'Ruano Informática',
      date: 'March 2024 - Present',
      location: 'Almería, Spain (On-site)',
      frontend: 'Frontend',
      frontendItems: [
        'Led the migration from Create React App to Vite, significantly improving loading and compilation speed',
        'State management migration from Redux to Zustand',
        'Modernization of DevExpress components, improving stability'
      ],
      backend: 'Backend (ASP.NET Core / Web)',
      backendItems: [
        'Development of critical modules for reporting and BI Dashboards with DevExpress',
        'Design and implementation of robust services in ASP.NET Core',
        'Optimization with Azure and Entity Framework'
      ],
      dotnet: '.NET Framework / Enterprise Applications',
      dotnetItems: [
        'Architected and developed critical backend modules for the "Indot" ERP system, a large-scale enterprise application built on the .NET ecosystem (C# and VB)',
        'Led the implementation of complex business logic to adapt the platform to specific requirements and workflows of various clients in the commerce sector',
        'Directed the technical analysis and complete implementation of the "NO-Verifactu" regulatory compliance system, ensuring integrity, immutability, and compliance of all billing processes according to new anti-fraud legislation'
      ]
    },
    hudl: {
      title: 'Software Engineer',
      company: 'HUDL',
      date: 'September 2022 - July 2023',
      location: 'London (Remote)',
      items: [
        'MongoDB upgrade to latest version with meticulous planning',
        'Implementation of robust logging system for performance and error tracking',
        'Integration of unit testing into the development process',
        'Training of new team members and promotion of best practices'
      ]
    },
    realtrack: {
      title: 'Web Developer',
      company: 'Realtrack Systems S.L',
      date: 'February 2022 - September 2022',
      location: 'Almería, Spain (On-site)',
      items: [
        'Development of Wimu-Cloud platform for sports data analysis',
        'Implementation of visual programming system with Rete.js for MongoDB mathematical expressions',
        'Full-stack development: JavaScript, Kotlin, React, MongoDB, Node'
      ]
    }
  },

  // Projects Content
  projects: {
    title: 'Featured Projects',
    portalEmpleo: {
      title: 'Job Portal',
      description: 'Job marketplace with neobrutalism design connecting candidates and companies. Includes CV management, applications, and interview scheduling.',
      highlights: [
        'React + TypeScript + Vite',
        'Express.js + MongoDB',
        'Unique neobrutalism design',
        'Multiple CV management system',
        'Bi-directional interview scheduling'
      ],
      demo: 'https://portal-empleo.vercel.app',
      github: 'https://github.com/rosca-cristian/portal-empleo'
    },
    apiExpress: {
      title: 'Express API - Job Portal',
      description: 'RESTful API developed with Express.js and MongoDB serving as backend for the Job Portal. Manages authentication, CVs, applications, and interviews.',
      highlights: [
        'Express.js + Node.js',
        'MongoDB + Mongoose',
        'JWT Authentication',
        'File upload',
        'Scalable REST architecture'
      ],
      github: 'https://github.com/rosca-cristian/api-express-portal-empleo'
    },
    backend: {
      title: 'NestJS Backend API',
      description: 'RESTful API developed with NestJS and Prisma serving as backend for multiple applications (Course Management and Space Reservation System).',
      highlights: [
        'NestJS + TypeScript',
        'JWT Authentication',
        'Prisma ORM',
        'Scalable modular architecture'
      ],
      github: 'https://github.com/rosca-cristian/api-nest-portal-cursos-reservas'
    },
    gestionCursos: {
      title: 'Course Management System',
      description: 'Web platform for course administration with role management (Admin, Teacher, Student) and complete authentication.',
      highlights: [
        'React + TypeScript + Vite',
        'Role-based permissions system',
        'Course management and enrollment',
        'shadcn/ui + Tailwind CSS'
      ],
      demo: 'https://portal-cursos-seven.vercel.app',
      github: 'https://github.com/rosca-cristian/portal-cursos'
    },
    reservas: {
      title: 'Space Reservation System',
      description: 'Web application for space booking and management with interactive floor plans visualization and reservation calendar.',
      highlights: [
        'React + TypeScript',
        'Interactive calendar with react-big-calendar',
        'Floor plan visualization with zoom and pan',
        'QR management for reservations'
      ],
      demo: 'https://portal-reservas.vercel.app',
      github: 'https://github.com/rosca-cristian/portal-reservas'
    }
  },

  // Skills Content
  skills: {
    title: 'Technical Skills',
    frontend: 'Frontend',
    backend: 'Backend',
    tools: 'Tools & Cloud',
    softSkills: 'Soft Skills',
    languagesTitle: 'Languages',
    categories: {
      languages: 'Languages',
      frameworks: 'Frameworks & Libraries',
      buildTools: 'Build Tools',
      frameworksBackend: 'Frameworks',
      databases: 'Databases'
    },
    softSkillsList: [
      'Technical Leadership',
      'Problem Solving',
      'Adaptability',
      'Effective Communication',
      'Analytical Thinking',
      'Change Management',
      'Teamwork',
      'Continuous Learning'
    ],
    languagesList: [
      { name: 'Spanish', level: 'Native' },
      { name: 'Romanian', level: 'Native' },
      { name: 'English', level: 'B2 - Upper Intermediate' }
    ]
  },

  // Education Content
  education: {
    title: 'Education',
    degree: 'Higher Degree in Web Application Development',
    institution: 'IES CELIA VIÑAS',
    location: 'Almería, Spain',
    date: '2020 - 2022',
    description: 'Professional training specialized in web application development, covering frontend and backend technologies, databases, and application deployment.',
    areasTitle: 'Areas of study:',
    areas: [
      'Frontend Development (HTML, CSS, JavaScript)',
      'Backend Programming',
      'Database Management',
      'Web Interface Development',
      'Web Application Deployment'
    ],
    certificationsTitle: 'Certifications & Continuous Training',
    certificationsDesc: 'As a software development professional, I maintain an ongoing commitment to learning and updating my skills through:',
    certificationsList: [
      'Online courses on emerging technologies',
      'Participation in development communities',
      'Personal projects and experimentation with new technologies',
      'Reading technical documentation and specialized blogs'
    ]
  },

  // Contact Content
  contact: {
    title: 'Contact',
    terminalTitle: 'contact.txt',
    name: 'NAME:',
    nameValue: 'Cristian Rosca',
    location: 'LOCATION:',
    locationValue: 'Spain',
    email: 'EMAIL:',
    linkedin: 'LINKEDIN:',
    github: 'GITHUB:',
    emailCard: 'Email',
    linkedinCard: 'LinkedIn',
    githubCard: 'GitHub',
    ctaTitle: 'Interested in working together?',
    ctaDesc: "I'm always open to new opportunities and interesting collaborations. Don't hesitate to contact me!",
    ctaButton: 'Send Message'
  },

  // Footer
  footer: {
    text: 'Developed with React + Vite'
  }
}
