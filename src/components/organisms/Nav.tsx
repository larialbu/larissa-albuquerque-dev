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
  const secondaryOptions: { id: PortfolioTab; label: string }[] = [
    { id: 'comunidades', label: u.tab_community },
    { id: 'embaixadorias', label: u.tab_ambassador },
    { id: 'mediakit', label: u.tab_mediakit },
  ];

  const isSecondaryActive = activeTab !== 'core';

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

      {/* 1. Botão separado: Sobre mim */}
      <button
        id="nav-sobre-mim"
        type="button"
        className={`nav-link ${activeTab === 'core' ? 'active' : ''}`}
        onClick={() => {
          onSelectTab('core');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        {u.nav_about_me}
      </button>

      {/* 2. Select com as 3 opções secundárias */}
      <div className={`nav-select-wrapper ${isSecondaryActive ? 'is-active' : ''}`}>
        <select
          id="nav-secondary-select"
          className={`nav-view-select ${isSecondaryActive ? 'active' : ''}`}
          value={isSecondaryActive ? activeTab : ''}
          aria-label={u.select_more_views}
          onChange={(e) => {
            if (e.target.value) {
              onSelectTab(e.target.value as PortfolioTab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
        >
          <option value="" disabled hidden>
            {u.select_more_views}
          </option>
          {secondaryOptions.map((opt) => (
            <option key={opt.id} value={opt.id}>
              {opt.label}
            </option>
          ))}
        </select>
        <span className="nav-select-chevron" aria-hidden="true">
          {Icon.chevronDown}
        </span>
      </div>

      {/* 3. Link Contato no final */}
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

      {/* 4. Idioma PT / EN */}
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
