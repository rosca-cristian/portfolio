import { useLanguage } from '../contexts/LanguageContext'

const Footer = () => {
  const { t } = useLanguage()

  return (
    <footer className="footer">
      <p>&copy; 2024 Cristian Rosca. {t.footer.text}</p>
    </footer>
  )
}

export default Footer
