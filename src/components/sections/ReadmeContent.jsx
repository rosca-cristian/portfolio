import { useLanguage } from '../../contexts/LanguageContext'

const ReadmeContent = () => {
  const { t } = useLanguage()

  return (
    <div className="markdown-body">
      <h1>👋 {t.readme.title}</h1>
      <p className="lead">
        {t.readme.intro}
      </p>
      <div className="highlight-box">
        <h3>💼 {t.readme.profileTitle}</h3>
        <p>
          {t.readme.profileDesc}
        </p>
      </div>
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-number">3+</div>
          <div className="stat-label">{t.readme.yearsExp}</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">15+</div>
          <div className="stat-label">{t.readme.technologies}</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">8+</div>
          <div className="stat-label">{t.readme.languages}</div>
        </div>
      </div>
      <h3>🎯 {t.readme.specialtiesTitle}</h3>
      <ul className="specialty-list">
        {t.readme.specialties.map((specialty, index) => (
          <li key={index}>{specialty}</li>
        ))}
      </ul>
    </div>
  )
}

export default ReadmeContent
