import type { UI } from '../../ui';

interface NavProps {
  u: UI;
  active: string;
  lang: 'pt' | 'en';
  onToggleLang: () => void;
  onNavClick?: (id: string) => void;
}

export function Nav({ u, active, lang, onToggleLang, onNavClick }: NavProps) {
  const links = [
    { id: 'sobre', label: u.nav_about },
    { id: 'trajetoria', label: u.nav_trajectory },
    { id: 'produtos', label: u.nav_products },
    { id: 'skills', label: u.nav_skills },
    { id: 'contato', label: u.nav_contact },
  ];

  const handleClick = (e: React.MouseEvent, id: string) => {
    if (onNavClick) {
      e.preventDefault();
      onNavClick(id);
    }
  };

  return (
    <nav className="nav" aria-label="Principal">
      <a href="#sobre" className="nav-logo" aria-label="Início" onClick={(e) => handleClick(e, 'sobre')}>LA</a>
      <div className="nav-links">
        {links.map((l) => (
          <a
            key={l.id}
            id={`nav-${l.id}`}
            href={`#${l.id}`}
            className={`nav-link ${active === l.id ? 'active' : ''}`}
            onClick={(e) => handleClick(e, l.id)}
          >
            {l.label}
          </a>
        ))}
      </div>
      <button className="lang-toggle" onClick={onToggleLang} id="lang-toggle" aria-label="Mudar idioma">
        {lang === 'pt' ? 'EN' : 'PT'}
      </button>
    </nav>
  );
}

