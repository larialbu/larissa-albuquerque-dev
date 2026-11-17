import { useState, useEffect } from 'react';
import { translations } from './translations';
import { ui, type Lang } from './ui';
import { Nav } from './components/organisms/Nav';
import type { PortfolioTab } from './components/molecules/ViewSelector';
import { CoreProfissionalView } from './components/views/CoreProfissionalView';
import { ComunidadesLiderancaView } from './components/views/ComunidadesLiderancaView';
import { EmbaixadoriasOpenSourceView } from './components/views/EmbaixadoriasOpenSourceView';
import { ParceriasMediaKitView } from './components/views/ParceriasMediaKitView';
import { Produtos } from './components/sections/Produtos';
import { Contato } from './components/sections/Contato';

import './index.css';

function getInitialTab(): PortfolioTab {
  const hash = window.location.hash.replace('#', '').toLowerCase();
  if (hash === 'produtos' || hash === 'servicos' || hash === 'saas') {
    return 'produtos';
  }
  if (hash === 'comunidades' || hash === 'lideranca' || hash === 'participacao') {
    return 'comunidades';
  }
  if (hash === 'embaixadorias' || hash === 'opensource' || hash === 'open-source') {
    return 'embaixadorias';
  }
  if (hash === 'mediakit' || hash === 'publi' || hash === 'parcerias') {
    return 'mediakit';
  }
  return 'core';
}

function App() {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem('lang');
    return saved === 'pt' || saved === 'en' ? saved : 'pt';
  });

  const [activeTab, setActiveTab] = useState<PortfolioTab>(getInitialTab);

  const t = translations[lang];
  const u = ui[lang];

  // Sincroniza idioma
  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  }, [lang]);

  // Atualiza hash da URL e rola suavemente para o topo ao trocar de aba
  const handleTabChange = (tab: PortfolioTab) => {
    setActiveTab(tab);
    window.location.hash = tab === 'core' ? 'profissional' : tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactClick = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Re-observa elementos revelados sempre que a aba ou o idioma mudar
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    );

    // Permite render do novo componente antes de observar
    const timer = setTimeout(() => {
      document.querySelectorAll('.reveal:not(.in)').forEach((el) => io.observe(el));
    }, 50);

    return () => {
      clearTimeout(timer);
      io.disconnect();
    };
  }, [activeTab, lang]);

  return (
    <>
      <div id="top" />

      {/* Barra de Navegação Corporativa */}
      <Nav
        u={u}
        activeTab={activeTab}
        lang={lang}
        onToggleLang={() => setLang(lang === 'pt' ? 'en' : 'pt')}
        onSelectTab={handleTabChange}
        onContactClick={handleContactClick}
      />

      <main>
        {/* Visão 1: Core Profissional (Default) */}
        {activeTab === 'core' && (
          <CoreProfissionalView t={t} u={u} lang={lang} />
        )}

        {/* Visão 2: Produtos & Serviços (SaaS sob demanda) */}
        {activeTab === 'produtos' && (
          <div id="view-panel-produtos" className="view-panel fade-in">
            <Produtos u={u} lang={lang} />
          </div>
        )}

        {/* Visão 3: Comunidades & Liderança */}
        {activeTab === 'comunidades' && (
          <ComunidadesLiderancaView t={t} u={u} lang={lang} />
        )}

        {/* Visão 3: Embaixadorias & Open Source */}
        {activeTab === 'embaixadorias' && (
          <EmbaixadoriasOpenSourceView t={t} u={u} lang={lang} />
        )}

        {/* Visão 4: Parcerias & Media Kit (NOVO) */}
        {activeTab === 'mediakit' && (
          <ParceriasMediaKitView u={u} lang={lang} />
        )}

        {/* Seção de Contato Universal */}
        <Contato t={t} u={u} />
      </main>
    </>
  );
}

export default App;
