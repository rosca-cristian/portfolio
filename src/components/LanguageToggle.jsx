import { useLanguage } from '../contexts/LanguageContext'

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage()

  return (
    <button
      className="language-toggle"
      onClick={toggleLanguage}
      aria-label="Toggle language"
      title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
    >
      <span className="language-flag">
        {language === 'es' ? '🇬🇧' : '🇪🇸'}
      </span>
      <span className="language-code">
        {language === 'es' ? 'EN' : 'ES'}
      </span>
    </button>
  )
}

export default LanguageToggle
