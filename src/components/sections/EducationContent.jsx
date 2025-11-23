import { useLanguage } from '../../contexts/LanguageContext'

const EducationContent = () => {
  const { t } = useLanguage()

  return (
    <div className="markdown-body">
      <h1>🎓 {t.education.title}</h1>

      <div className="education-container">
        <div className="education-card">
          <div className="education-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
              <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
            </svg>
          </div>
          <div className="education-content">
            <h3>{t.education.degree}</h3>
            <div className="education-institution">{t.education.institution}</div>
            <div className="education-meta">
              <span className="education-location">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                {t.education.location}
              </span>
              <span className="education-date">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                {t.education.date}
              </span>
            </div>
            <div className="education-description">
              <p>{t.education.description}</p>
              <div className="education-highlights">
                <h4>{t.education.areasTitle}</h4>
                <ul>
                  {t.education.areas.map((area, index) => (
                    <li key={index}>{area}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="certifications-section">
        <h2>📜 {t.education.certificationsTitle}</h2>
        <div className="info-box">
          <p>{t.education.certificationsDesc}</p>
          <ul>
            {t.education.certificationsList.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default EducationContent
