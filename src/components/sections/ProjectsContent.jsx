import { useLanguage } from '../../contexts/LanguageContext'

const ProjectsContent = () => {
  const { t } = useLanguage()

  const projects = [
    {
      icon: '💼',
      title: t.projects.portalEmpleo.title,
      description: t.projects.portalEmpleo.description,
      highlights: t.projects.portalEmpleo.highlights,
      tags: ['React', 'TypeScript', 'Express.js', 'Neobrutalism'],
      demo: t.projects.portalEmpleo.demo,
      github: t.projects.portalEmpleo.github
    },
    {
      icon: '📚',
      title: t.projects.gestionCursos.title,
      description: t.projects.gestionCursos.description,
      highlights: t.projects.gestionCursos.highlights,
      tags: ['React', 'TypeScript', 'Vite', 'shadcn/ui'],
      demo: t.projects.gestionCursos.demo,
      github: t.projects.gestionCursos.github
    },
    {
      icon: '📅',
      title: t.projects.reservas.title,
      description: t.projects.reservas.description,
      highlights: t.projects.reservas.highlights,
      tags: ['React', 'TypeScript', 'Zustand', 'Tanstack Query'],
      demo: t.projects.reservas.demo,
      github: t.projects.reservas.github
    },
    {
      icon: '⚡',
      title: t.projects.apiExpress.title,
      description: t.projects.apiExpress.description,
      highlights: t.projects.apiExpress.highlights,
      tags: ['Express.js', 'MongoDB', 'Node.js', 'JWT'],
      github: t.projects.apiExpress.github
    },
    {
      icon: '🔧',
      title: t.projects.backend.title,
      description: t.projects.backend.description,
      highlights: t.projects.backend.highlights,
      tags: ['NestJS', 'TypeScript', 'Prisma', 'JWT'],
      github: t.projects.backend.github
    }
  ]

  return (
    <div className="markdown-body">
      <h1>🚀 {t.projects.title}</h1>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-icon">{project.icon}</div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul className="project-highlights">
              {project.highlights.map((highlight, hIndex) => (
                <li key={hIndex}>{highlight}</li>
              ))}
            </ul>
            <div className="tech-tags">
              {project.tags.map((tag, tIndex) => (
                <span key={tIndex} className="tech-tag">{tag}</span>
              ))}
            </div>
            {(project.demo || project.github) && (
              <div className="project-links">
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link demo">
                    🌐 Demo
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link github">
                    💻 GitHub
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectsContent
