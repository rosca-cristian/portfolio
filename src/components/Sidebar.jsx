import { useLanguage } from '../contexts/LanguageContext'

const Sidebar = ({ activeSection, onSectionChange }) => {
  const { t } = useLanguage()

  const treeItems = [
    { id: 'readme', type: 'file', name: t.sidebar.readme },
    { id: 'experience', type: 'folder', name: t.sidebar.experience },
    { id: 'projects', type: 'folder', name: t.sidebar.projects },
    { id: 'skills', type: 'folder', name: t.sidebar.skills },
    { id: 'education', type: 'folder', name: t.sidebar.education },
    { id: 'contact', type: 'file', name: t.sidebar.contact },
  ]

  const handleItemClick = (id) => {
    onSectionChange(id)
  }

  const renderIcon = (type) => {
    if (type === 'folder') {
      return (
        <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
        </svg>
      )
    }
    return (
      <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14,2 14,8 20,8"></polyline>
      </svg>
    )
  }

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
        </svg>
        <span>{t.sidebar.explorer}</span>
      </div>
      <nav className="file-tree">
        {treeItems.map((item) => (
          <div
            key={item.id}
            className={`tree-item ${item.type} ${activeSection === item.id ? 'active' : ''}`}
            onClick={() => handleItemClick(item.id)}
          >
            {item.type === 'folder' && (
              <svg className="chevron" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            )}
            {renderIcon(item.type)}
            <span>{item.name}</span>
          </div>
        ))}
      </nav>
    </div>
  )
}

export default Sidebar
