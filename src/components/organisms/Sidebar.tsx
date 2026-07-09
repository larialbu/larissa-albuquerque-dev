import { translations } from '../../translations';

interface SidebarProps {
  activeSection: string;
  currentLanguage: 'pt' | 'en';
  onMenuClick: (id: string) => void;
}

export function Sidebar({ activeSection, currentLanguage, onMenuClick }: SidebarProps) {
  const t = translations[currentLanguage];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2 style={{ marginBottom: '8px' }}>Larissa Albuquerque</h2>
        <p id="sidebar-subtitle"
          style={{ 
            color: 'rgba(255,255,255,0.7)', 
            fontSize: '0.7rem', 
            fontWeight: 600, 
            textTransform: 'uppercase', 
            letterSpacing: '0.1em', 
            marginBottom: 0 
          }}>
          {t.sidebar_subtitle}
        </p>
      </div>

      <nav className="sidebar-nav">
        <a className={`menu ${activeSection === 'sobre' ? 'active' : ''}`} onClick={() => onMenuClick('sobre')}>{t.menu_about}</a>
        <a className={`menu ${activeSection === 'experiencia' ? 'active' : ''}`} onClick={() => onMenuClick('experiencia')}>{t.menu_experience}</a>
        <a className={`menu ${activeSection === 'academico' ? 'active' : ''}`} onClick={() => onMenuClick('academico')}>{t.menu_academic}</a>
        <a className={`menu ${activeSection === 'academic_projects' ? 'active' : ''}`} onClick={() => onMenuClick('academic_projects')}>{t.menu_academic_projects}</a>
        <a className={`menu ${activeSection === 'projetos' ? 'active' : ''}`} onClick={() => onMenuClick('projetos')}>{t.menu_projects}</a>
        <a className={`menu ${activeSection === 'parcerias' ? 'active' : ''}`} onClick={() => onMenuClick('parcerias')}>{t.menu_partnerships}</a>
        <a className={`menu ${activeSection === 'skills' ? 'active' : ''}`} onClick={() => onMenuClick('skills')}>{t.menu_skills}</a>
        <a className={`menu ${activeSection === 'contato' ? 'active' : ''}`} onClick={() => onMenuClick('contato')}>{t.menu_contact}</a>
      </nav>

      <div className="sidebar-footer">
        <p>
          &copy; {new Date().getFullYear()} Larissa Albuquerque.<br />
          <span>{t.footer_rights}</span>
        </p>
      </div>
    </div>
  );
}
