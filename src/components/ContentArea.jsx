import { useEffect, useRef } from 'react'
import ReadmeContent from './sections/ReadmeContent'
import ExperienceContent from './sections/ExperienceContent'
import ProjectsContent from './sections/ProjectsContent'
import SkillsContent from './sections/SkillsContent'
import EducationContent from './sections/EducationContent'
import ContactContent from './sections/ContactContent'

const ContentArea = ({ activeSection }) => {
  const contentBodyRef = useRef(null)

  const contentData = {
    'readme': 'README.md',
    'experience': 'experience',
    'projects': 'projects',
    'skills': 'skills',
    'education': 'education',
    'contact': 'contact.txt'
  }

  useEffect(() => {
    // Scroll to top cuando cambia la sección
    if (contentBodyRef.current) {
      contentBodyRef.current.scrollTop = 0
    }
  }, [activeSection])

  const renderContent = () => {
    switch (activeSection) {
      case 'readme':
        return <ReadmeContent />
      case 'experience':
        return <ExperienceContent />
      case 'projects':
        return <ProjectsContent />
      case 'skills':
        return <SkillsContent />
      case 'education':
        return <EducationContent />
      case 'contact':
        return <ContactContent />
      default:
        return <ReadmeContent />
    }
  }

  return (
    <div className="content-area">
      <div className="content-header">
        <div className="breadcrumb">
          <span className="breadcrumb-item">portfolio</span>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-item active">{contentData[activeSection]}</span>
        </div>
      </div>

      <div className="content-body" ref={contentBodyRef}>
        <div className="content-section active">
          {renderContent()}
        </div>
      </div>
    </div>
  )
}

export default ContentArea
