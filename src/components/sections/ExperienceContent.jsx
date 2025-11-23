import { useLanguage } from "../../contexts/LanguageContext";

const ExperienceContent = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      title: t.experience.ruano.title,
      company: t.experience.ruano.company,
      date: t.experience.ruano.date,
      location: t.experience.ruano.location,
      sections: [
        {
          title: t.experience.ruano.frontend,
          items: t.experience.ruano.frontendItems,
        },
        {
          title: t.experience.ruano.backend,
          items: t.experience.ruano.backendItems,
        },
        {
          title: t.experience.ruano.dotnet,
          items: t.experience.ruano.dotnetItems,
        },
      ],
      tags: [
        "React",
        "TypeScript",
        "Vite",
        "Zustand",
        "ASP.NET Core",
        "Azure",
        "Entity Framework",
        ".NET Framework",
      ],
    },
    {
      title: t.experience.hudl.title,
      company: t.experience.hudl.company,
      date: t.experience.hudl.date,
      location: t.experience.hudl.location,
      sections: [
        {
          title: null,
          items: t.experience.hudl.items,
        },
      ],
      tags: ["MongoDB", "Node.js", "Testing"],
    },
    {
      title: t.experience.realtrack.title,
      company: t.experience.realtrack.company,
      date: t.experience.realtrack.date,
      location: t.experience.realtrack.location,
      sections: [
        {
          title: null,
          items: t.experience.realtrack.items,
        },
      ],
      tags: ["React", "JavaScript", "Kotlin", "MongoDB", "Node.js"],
    },
  ];

  return (
    <div className="markdown-body">
      <h1>💼 {t.experience.title}</h1>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h3>{exp.title}</h3>
                <span className="company">{exp.company}</span>
              </div>
              <div className="timeline-meta">
                <span className="date">{exp.date}</span>
                <span className="location">{exp.location}</span>
              </div>
              <div className="timeline-description">
                {exp.sections.map((section, sIndex) => (
                  <div key={sIndex}>
                    {section.title && <h4>{section.title}</h4>}
                    <ul>
                      {section.items.map((item, iIndex) => (
                        <li key={iIndex}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="tech-tags">
                {exp.tags.map((tag, tIndex) => (
                  <span key={tIndex} className="tech-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceContent;
