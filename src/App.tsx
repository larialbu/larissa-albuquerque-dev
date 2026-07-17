import { useState, useEffect } from 'react';
import { translations } from './translations';
import { Sidebar } from './components/organisms/Sidebar';
import { MobileHeader } from './components/organisms/MobileHeader';
import { LanguageSelector } from './components/molecules/LanguageSelector';

import { Sobre } from './components/sections/Sobre';
import { Experiencia } from './components/sections/Experiencia';
import { Academico } from './components/sections/Academico';
import { AcademicProjects } from './components/sections/AcademicProjects';
import { Projetos } from './components/sections/Projetos';
import { Parcerias } from './components/sections/Parcerias';
import { HardSkills } from './components/sections/HardSkills';
import { Certificados } from './components/sections/Certificados';
import { Contato } from './components/sections/Contato';

import './index.css';

function App() {
  const [currentLanguage, setCurrentLanguage] = useState<'pt' | 'en'>(() => {
    const saved = localStorage.getItem('lang');
    return (saved === 'pt' || saved === 'en') ? saved : 'pt';
  });

  const [activeSection, setActiveSection] = useState<string>('sobre');
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem('lang', currentLanguage);
    document.documentElement.lang = currentLanguage === 'pt' ? 'pt-BR' : 'en';
  }, [currentLanguage]);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [menuOpen]);

  const handleLanguageChange = (lang: 'pt' | 'en') => {
    setCurrentLanguage(lang);
  };

  const handleMenuClick = (id: string) => {
    const isMobile = window.innerWidth <= 1024;
    const targetSection = document.getElementById(id);

    if (isMobile) {
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setActiveSection(id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    if (isMobile && menuOpen) {
      setMenuOpen(false);
    }
  };

  const toggleAccordion = (item: string) => {
    setOpenAccordion(prev => prev === item ? null : item);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('larissaamca1@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const t = translations[currentLanguage];

  return (
    <>
      <MobileHeader onToggleMenu={() => setMenuOpen(!menuOpen)} />

      <div className="sidebar-overlay" onClick={() => setMenuOpen(false)}></div>

      <Sidebar 
        activeSection={activeSection} 
        currentLanguage={currentLanguage} 
        onMenuClick={handleMenuClick} 
      />

      <div className="main">
        <LanguageSelector 
          currentLanguage={currentLanguage} 
          onLanguageChange={handleLanguageChange} 
        />

        <Sobre t={t} activeSection={activeSection} />
        
        <Experiencia t={t} activeSection={activeSection} />

        <Academico t={t} activeSection={activeSection} />

        <AcademicProjects t={t} activeSection={activeSection} />

        <Projetos 
          t={t} 
          activeSection={activeSection} 
          openAccordion={openAccordion} 
          onToggleAccordion={toggleAccordion} 
        />

        <Parcerias t={t} activeSection={activeSection} />

        <HardSkills t={t} activeSection={activeSection} />

        <Certificados t={t} activeSection={activeSection} />

        <Contato 
          t={t} 
          activeSection={activeSection} 
          copied={copied} 
          onCopyEmail={copyEmailToClipboard} 
          currentLanguage={currentLanguage}
        />
      </div>
    </>
  );
}

export default App;
