import { useState, useEffect } from 'react';
import { translations } from './translations';
import { ui, type Lang } from './ui';
import { Nav } from './components/organisms/Nav';

import { Sobre } from './components/sections/Sobre';
import { Trajetoria } from './components/sections/Trajetoria';
import { Parcerias } from './components/sections/Parcerias';
import { Produtos } from './components/sections/Produtos';
import { HardSkills } from './components/sections/HardSkills';
import { Contato } from './components/sections/Contato';
import { MediaKit } from './components/sections/MediaKit';

import './index.css';

const SECTION_IDS = ['sobre', 'trajetoria', 'produtos', 'mediakit', 'skills', 'contato'];

function App() {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem('lang');
    return saved === 'pt' || saved === 'en' ? saved : 'pt';
  });
  const [active, setActive] = useState('sobre');
  const [openTrajetoriaModal, setOpenTrajetoriaModal] = useState<'experiencia' | 'academico' | 'participacao' | null>(null);

  const t = translations[lang];
  const u = ui[lang];

  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  }, [lang]);

  // Handle URL hash on load
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash === 'experiencia') {
      setOpenTrajetoriaModal('experiencia');
    } else if (hash === 'formacao' || hash === 'academico') {
      setOpenTrajetoriaModal('academico');
    } else if (hash === 'participacao' || hash === 'projetos') {
      setOpenTrajetoriaModal('participacao');
    }
  }, []);

  // Reveal on scroll
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      }),
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.reveal:not(.in)').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [lang]);

  // Scrollspy for the nav
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  const handleNavClick = (id: string) => {
    if (id === 'sobre') {
      document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'trajetoria' || id === 'experiencia' || id === 'formacao' || id === 'participacao') {
      document.getElementById('trajetoria')?.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'produtos') {
      document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'mediakit') {
      document.getElementById('mediakit')?.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'skills') {
      document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'contato') {
      document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Compute active nav link
  const currentActive = active;

  return (
    <>
      <Nav
        u={u}
        active={currentActive}
        lang={lang}
        onToggleLang={() => setLang(lang === 'pt' ? 'en' : 'pt')}
        onNavClick={handleNavClick}
      />

      <main>
        <Sobre t={t} u={u} />
        <Trajetoria
          t={t}
          u={u}
          lang={lang}
          openModalId={openTrajetoriaModal}
          onSetOpenModalId={setOpenTrajetoriaModal}
        />
        <section id="skills" className="section">
          <HardSkills t={t} u={u} lang={lang} />
        </section>
        <Produtos u={u} lang={lang} />
        <MediaKit u={u} lang={lang} />
        <Parcerias t={t} u={u} lang={lang} />
        <Contato t={t} u={u} />
      </main>
    </>
  );
}

export default App;


