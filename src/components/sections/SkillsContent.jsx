import { useLanguage } from '../../contexts/LanguageContext'

const SkillsContent = () => {
  const { t } = useLanguage()

  const frontend = {
    categories: [
      {
        title: t.skills.categories.languages,
        items: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'Less']
      },
      {
        title: t.skills.categories.frameworks,
        items: ['React.js', 'Redux', 'Zustand', 'DevExpress']
      },
      {
        title: t.skills.categories.buildTools,
        items: ['Vite', 'Create React App']
      }
    ]
  }

  const backend = {
    categories: [
      {
        title: t.skills.categories.languages,
        items: ['C#', 'VB.NET', 'Node.js', 'Python', 'Kotlin']
      },
      {
        title: t.skills.categories.frameworksBackend,
        items: ['ASP.NET Core', 'ASP.NET Framework', 'Entity Framework']
      },
      {
        title: t.skills.categories.databases,
        items: ['MongoDB', 'SQL Server']
      }
    ]
  }

  const tools = ['Azure', 'Git', 'DevExpress', 'Rete.js', 'Testing', 'CI/CD']

  return (
    <div className="markdown-body">
      <h1>🛠️ {t.skills.title}</h1>

      <div className="skills-container">
        {/* Frontend */}
        <div className="skill-category">
          <h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
            {t.skills.frontend}
          </h3>
          <div className="tech-stack-grid">
            {frontend.categories.map((category, index) => (
              <div key={index} className="tech-stack-item">
                <div className="tech-stack-header">
                  <span className="tech-stack-title">{category.title}</span>
                </div>
                <div className="tech-tags-wrap">
                  {category.items.map((item, itemIndex) => (
                    <span key={itemIndex} className="tech-tag-large">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Backend */}
        <div className="skill-category">
          <h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
              <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
              <line x1="6" y1="6" x2="6.01" y2="6"></line>
              <line x1="6" y1="18" x2="6.01" y2="18"></line>
            </svg>
            {t.skills.backend}
          </h3>
          <div className="tech-stack-grid">
            {backend.categories.map((category, index) => (
              <div key={index} className="tech-stack-item">
                <div className="tech-stack-header">
                  <span className="tech-stack-title">{category.title}</span>
                </div>
                <div className="tech-tags-wrap">
                  {category.items.map((item, itemIndex) => (
                    <span key={itemIndex} className="tech-tag-large">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Herramientas & Cloud */}
        <div className="skill-category">
          <h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
            </svg>
            {t.skills.tools}
          </h3>
          <div className="tech-tags">
            {tools.map((tool, index) => (
              <span key={index} className="tech-tag">{tool}</span>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="skill-category">
          <h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            {t.skills.softSkills}
          </h3>
          <div className="soft-skills-grid">
            {t.skills.softSkillsList.map((skill, index) => (
              <div key={index} className="soft-skill">{skill}</div>
            ))}
          </div>
        </div>

        {/* Idiomas */}
        <div className="skill-category">
          <h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
            {t.skills.languagesTitle}
          </h3>
          <div className="languages">
            {t.skills.languagesList.map((lang, index) => (
              <div key={index} className="language-item">
                <span className="language-name">{lang.name}</span>
                <span className="language-level">{lang.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillsContent
