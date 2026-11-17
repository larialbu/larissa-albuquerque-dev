import type { UI } from '../../ui';
import { Icon } from '../atoms/Icons';

export type PortfolioTab = 'core' | 'produtos' | 'comunidades' | 'embaixadorias' | 'mediakit';

interface ViewSelectorProps {
  u: UI;
  activeTab: PortfolioTab;
  onChangeTab: (tab: PortfolioTab) => void;
}

export function ViewSelector({ u, activeTab, onChangeTab }: ViewSelectorProps) {
  const tabs = [
    {
      id: 'core' as PortfolioTab,
      label: u.tab_core,
      desc: u.tab_core_desc,
      icon: Icon.briefcase,
      badge: 'Default',
    },
    {
      id: 'comunidades' as PortfolioTab,
      label: u.tab_community,
      desc: u.tab_community_desc,
      icon: Icon.users,
      badge: 'Liderança',
    },
    {
      id: 'embaixadorias' as PortfolioTab,
      label: u.tab_ambassador,
      desc: u.tab_ambassador_desc,
      icon: Icon.star,
      badge: 'Open Source',
    },
    {
      id: 'mediakit' as PortfolioTab,
      label: u.tab_mediakit,
      desc: u.tab_mediakit_desc,
      icon: Icon.megaphone,
      badge: 'Publi',
    },
  ];

  return (
    <div className="view-selector-container reveal in">
      <div className="container">
        <div className="view-selector-card glass">
          <div className="view-selector-header">
            <span className="view-selector-label">
              <span className="view-pulse-dot" />
              {u.view_label}
            </span>
            <span className="view-selector-active-badge">
              {tabs.find((t) => t.id === activeTab)?.label}
            </span>
          </div>

          {/* Mobile Select Component */}
          <div className="view-selector-mobile-wrapper">
            <div className="custom-select-box">
              <select
                id="portfolio-view-select"
                aria-label={u.view_label}
                className="view-native-select"
                value={activeTab}
                onChange={(e) => onChangeTab(e.target.value as PortfolioTab)}
              >
                {tabs.map((tab) => (
                  <option key={tab.id} value={tab.id}>
                    {tab.label} — {tab.desc}
                  </option>
                ))}
              </select>
              <span className="custom-select-chevron">{Icon.chevronDown}</span>
            </div>
          </div>

          {/* Desktop & Tablet Segmented Tabs */}
          <div className="view-tabs-list" role="tablist" aria-label={u.view_label}>
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  id={`tab-btn-${tab.id}`}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`view-panel-${tab.id}`}
                  className={`view-tab-btn ${isActive ? 'active' : ''}`}
                  onClick={() => onChangeTab(tab.id)}
                  type="button"
                >
                  <span className="view-tab-icon">{tab.icon}</span>
                  <div className="view-tab-content">
                    <span className="view-tab-title">{tab.label}</span>
                    <span className="view-tab-desc">{tab.desc}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
