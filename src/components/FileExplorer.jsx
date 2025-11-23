import Sidebar from './Sidebar'
import ContentArea from './ContentArea'

const FileExplorer = ({ activeSection, onSectionChange }) => {
  return (
    <div className="file-explorer">
      <Sidebar
        activeSection={activeSection}
        onSectionChange={onSectionChange}
      />
      <ContentArea activeSection={activeSection} />
    </div>
  )
}

export default FileExplorer
