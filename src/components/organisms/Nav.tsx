import type { UI } from '../../ui';
import type { PortfolioTab } from '../molecules/ViewSelector';
import { Icon } from '../atoms/Icons';

interface NavProps {
  u: UI;
  activeTab: PortfolioTab;
  lang: 'pt' | 'en';
  onToggleLang: () => void;
  onSelectTab: (tab: PortfolioTab) => void;
  onContactClick?: () => void;
}

export function Nav({
  u,
  activeTab,
  lang,
  onToggleLang,
  onSelectTab,
  onContactClick,
}: NavProps) {
  const options: { id: PortfolioTab; label: string }[] = [
    { id: 'core', label: u.nav_about_me },
    { id: 'produtos', label: u.nav_products },
    { id: 'comunidades', label: u.tab_community },
    { id: 'embaixadorias', label: u.tab_ambassador },
    { id: 'mediakit', label: u.tab_mediakit },
  ];

  const currentOption = options.find((opt) => opt.id === activeTab) || options[0];
  const currentLabel = currentOption.label;

  return (
    <nav className="nav" aria-label="Principal">
      <a
        href="#top"
        className="nav-logo"
        aria-label="Início"
        onClick={(e) => {
          e.preventDefault();
          onSelectTab('core');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        LA
      </a>

      {/* Select central adaptável: "Sobre mim" já vem como padrão e as outras opções ficam aqui dentro */}
      <div className="nav-select-wrapper is-active">
        <span className="nav-select-display">
          <span className="nav-select-text">{currentLabel}</span>
          <span className="nav-select-chevron" aria-hidden="true">
            {Icon.chevronDown}
          </span>
        </span>
        <select
          id="nav-view-select"
          className="nav-view-select-invisible"
          value={activeTab}
          aria-label={u.view_label}
          onChange={(e) => {
            if (e.target.value) {
              onSelectTab(e.target.value as PortfolioTab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
        >
          {options.map((opt) => (
            <option key={opt.id} value={opt.id}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* O Contato é o ÚNICO que fica fora */}
      <a
        id="nav-contato"
        href="#contato"
        className="nav-link"
        onClick={(e) => {
          if (onContactClick) {
            e.preventDefault();
            onContactClick();
          }
        }}
      >
        {u.nav_contact}
      </a>

      <button
        className="lang-toggle"
        onClick={onToggleLang}
        id="lang-toggle"
        aria-label="Mudar idioma"
      >
        {lang === 'pt' ? 'EN' : 'PT'}
      </button>
    </nav>
  );
}
