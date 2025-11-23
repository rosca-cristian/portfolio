import { useState, useEffect } from 'react'
import ThemeToggle from './components/ThemeToggle'
import LanguageToggle from './components/LanguageToggle'
import Header from './components/Header'
import FileExplorer from './components/FileExplorer'
import Footer from './components/Footer'
import { useLanguage } from './contexts/LanguageContext'

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light'
  })

  const [activeSection, setActiveSection] = useState('readme')
  const { language } = useLanguage()

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.target.matches('input, textarea')) return

      if (e.key === 't' || e.key === 'T') {
        toggleTheme()
      }
    }

    document.addEventListener('keydown', handleKeyPress)
    return () => document.removeEventListener('keydown', handleKeyPress)
  }, [])

  // Console easter egg
  useEffect(() => {
    if (language === 'es') {
      console.log('%c👋 ¡Hola! Bienvenido a mi portfolio', 'font-size: 20px; color: #3182ce; font-weight: bold;')
      console.log('%cEste portfolio fue creado con React + Vite', 'font-size: 14px; color: #4a5568;')
      console.log('%cPresiona "T" para cambiar el tema 🌓', 'font-size: 14px; color: #48bb78;')
    } else {
      console.log('%c👋 Hello! Welcome to my portfolio', 'font-size: 20px; color: #3182ce; font-weight: bold;')
      console.log('%cThis portfolio was created with React + Vite', 'font-size: 14px; color: #4a5568;')
      console.log('%cPress "T" to toggle theme 🌓', 'font-size: 14px; color: #48bb78;')
    }
  }, [language])

  return (
    <>
      <ThemeToggle theme={theme} onToggle={toggleTheme} />
      <LanguageToggle />

      <div className="container">
        <Header />
        <FileExplorer
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />
        <Footer />
      </div>
    </>
  )
}

export default App
