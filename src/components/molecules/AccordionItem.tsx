interface AccordionItemProps {
  category: string;
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  description: string;
  impactTitle: string;
  impactList: string[];
  mediaPlaceholderText?: string;
}

export function AccordionItem({
  category,
  title,
  isOpen,
  onToggle,
  description,
  impactTitle,
  impactList,
  mediaPlaceholderText = '[Espaço para Fotos/Media]'
}: AccordionItemProps) {
  return (
    <div 
      className={`card accordion-item ${isOpen ? 'open' : ''}`} 
      onClick={onToggle}
    >
      <div className="accordion-header">
        <div>
          <span className="skill-category">{category}</span>
          <strong>{title}</strong>
        </div>
        <i className="arrow">{isOpen ? '▲' : '▼'}</i>
      </div>
      <div className="accordion-content">
        <p style={{ fontSize: '0.95rem' }}>
          {description}
        </p>
        <div style={{ marginTop: '16px', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '16px' }}>
          <strong style={{ fontSize: '0.9rem', color: 'var(--primary)' }}>
            {impactTitle}
          </strong>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-body)', marginTop: '8px' }}>
            {impactList.map((item, index) => (
              <span key={index}>
                • {item}<br />
              </span>
            ))}
          </p>
          <div className="project-media-placeholder">
            <span>{mediaPlaceholderText}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
