import { useLanguage } from '../../contexts/LanguageContext'

const ContactContent = () => {
  const { t } = useLanguage()

  return (
    <div className="markdown-body">
      <h1>📬 {t.contact.title}</h1>

      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-buttons">
            <span className="terminal-button red"></span>
            <span className="terminal-button yellow"></span>
            <span className="terminal-button green"></span>
          </div>
          <span className="terminal-title">{t.contact.terminalTitle}</span>
        </div>
        <div className="terminal-body">
          <div className="terminal-line">
            <span className="terminal-prompt">$</span>
            <span className="terminal-command">cat contact.txt</span>
          </div>
          <div className="terminal-output">
            <div className="contact-info-terminal">
              <div className="contact-line">
                <span className="contact-label">{t.contact.name}</span>
                <span className="contact-value">{t.contact.nameValue}</span>
              </div>
              <div className="contact-line">
                <span className="contact-label">{t.contact.location}</span>
                <span className="contact-value">{t.contact.locationValue}</span>
              </div>
              <div className="contact-line">
                <span className="contact-label">{t.contact.email}</span>
                <span className="contact-value">
                  <a href="mailto:roscacristian98@gmail.com">roscacristian98@gmail.com</a>
                </span>
              </div>
              <div className="contact-line">
                <span className="contact-label">{t.contact.linkedin}</span>
                <span className="contact-value">
                  <a href="https://www.linkedin.com/in/cristian-rosca-b444251b8/" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/cristian-rosca-b444251b8/
                  </a>
                </span>
              </div>
              <div className="contact-line">
                <span className="contact-label">{t.contact.github}</span>
                <span className="contact-value">
                  <a href="https://github.com/rosca-cristian" target="_blank" rel="noopener noreferrer">github.com/rosca-cristian</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-cards">
        <a href="mailto:roscacristian98@gmail.com" className="contact-card">
          <div className="contact-card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </div>
          <div className="contact-card-content">
            <h3>{t.contact.emailCard}</h3>
            <p>roscacristian98@gmail.com</p>
          </div>
        </a>

        <a href="https://www.linkedin.com/in/cristian-rosca-b444251b8/" target="_blank" rel="noopener noreferrer" className="contact-card">
          <div className="contact-card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </div>
          <div className="contact-card-content">
            <h3>{t.contact.linkedinCard}</h3>
            <p>/in/cristian-rosca-b444251b8</p>
          </div>
        </a>

        <a href="https://github.com/rosca-cristian" target="_blank" rel="noopener noreferrer" className="contact-card">
          <div className="contact-card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </div>
          <div className="contact-card-content">
            <h3>{t.contact.githubCard}</h3>
            <p>@rosca-cristian</p>
          </div>
        </a>
      </div>

      <div className="cta-section">
        <h2>{t.contact.ctaTitle}</h2>
        <p>{t.contact.ctaDesc}</p>
        <a href="mailto:roscacristian98@gmail.com" className="cta-button">
          {t.contact.ctaButton}
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </div>
    </div>
  )
}

export default ContactContent
