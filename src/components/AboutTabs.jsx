import { useState } from "preact/hooks";

export default function AboutTabs({ sections }) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");
  const activeSection = sections.find((section) => section.id === activeId) ?? sections[0];
  const getInitials = (text = "") =>
    text
      .split(" ")
      .map((chunk) => chunk[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

  return (
    <section className="about-tabs" aria-label="Curriculum sections">
      <div className="tabs-list" role="tablist" aria-label="About sections">
        {sections.map((section) => (
          <button
            key={section.id}
            type="button"
            role="tab"
            aria-selected={activeId === section.id}
            className={activeId === section.id ? "tab-btn active" : "tab-btn"}
            onClick={() => setActiveId(section.id)}
          >
            {section.label}
          </button>
        ))}
      </div>

      <div className="tab-panel" role="tabpanel">
        <h3>{activeSection.title}</h3>
        <div className="timeline">
          {activeSection.items.map((item) => (
            <article className="timeline-item" key={`${item.period}-${item.role}`}>
              <div className="item-media" aria-hidden="true">
                {item.iconSrc ? (
                  <img src={item.iconSrc} alt={item.iconAlt || `${item.organization} logo`} />
                ) : (
                  <span className="item-fallback">{getInitials(item.organization || item.role)}</span>
                )}
              </div>

              <div className="item-divider" aria-hidden="true" />

              <div className="item-content">
                <p className="period">{item.period}</p>
                <h4>{item.role}</h4>
                {item.url ? (
                  <a className="org" href={item.url} target="_blank" rel="noreferrer">
                    {item.organization}
                  </a>
                ) : (
                  <p className="org">{item.organization}</p>
                )}
                <p className="desc">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
