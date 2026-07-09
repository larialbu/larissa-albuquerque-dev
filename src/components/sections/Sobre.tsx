import type { TranslationSet } from '../../translations';
import profileImg from '../../assets/larissa.jpeg';
import { Button } from '../atoms/Button';

interface SobreProps {
  t: TranslationSet;
  activeSection: string;
}

export function Sobre({ t, activeSection }: SobreProps) {
  // Calcular idade dinâmica (nascida em 11/01/2005)
  const calculateAge = () => {
    const birthDate = new Date(2005, 0, 11); // 11 de Janeiro de 2005
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }
    return age;
  };

  const currentAge = calculateAge();
  const dynamicSummary = t.summary_content.replace('{age}', currentAge.toString());

  return (
    <div id="sobre" className={`section ${activeSection === 'sobre' ? 'active' : ''}`}>
      <div className="profile-header-grid">
        {/* Lado Esquerdo - Foto de perfil e textos ao lado */}
        <div className="profile-header">
          <div className="profile-img-container">
            <div className="profile-img-glow"></div>
            <img src={profileImg} alt="Larissa Albuquerque" className="profile-img" />
          </div>
          <div>
            <h1 style={{ margin: '0 0 4px 0', fontSize: '2.1rem', letterSpacing: '-0.03em' }}>Larissa Albuquerque</h1>
            <p style={{ fontSize: '1.05rem', color: 'var(--secondary)', fontWeight: 600, margin: 0 }}>
              {t.hero_title}
            </p>
            
            {/* Currículos */}
            <div className="cv-container">
              <a href="https://www.canva.com/design/DAGtzKKKOHA/DyqCD413aeZ1-S3ExEe-7w/view?utm_content=DAGtzKKKOHA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hfc2496ac09"
                target="_blank" className="cv-btn cv-btn-pt" rel="noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                <span>{t.cv_button_pt}</span>
              </a>
              <a href="#" className="cv-btn cv-btn-en" onClick={(e) => e.preventDefault()}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                <span>{t.cv_button_en}</span>
              </a>
            </div>

            {/* Links Acadêmicos & Redes */}
            <div style={{ marginTop: '16px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              <a href="http://lattes.cnpq.br/7448823611009423" target="_blank" className="cv-btn"
                style={{ background: '#fff', color: 'var(--primary)', borderColor: 'var(--primary)', padding: '8px 12px', fontSize: '0.85rem' }} rel="noreferrer">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px' }}>
                  <path d="M4 4h16v16H4z"></path>
                  <path d="M8 4v16"></path>
                  <path d="M8 8h8"></path>
                </svg>
                <span>{t.link_lattes}</span>
              </a>
              <a href="https://github.com/larialbu" target="_blank" className="cv-btn"
                style={{ background: '#fff', color: 'var(--primary)', borderColor: 'var(--primary)', padding: '8px 12px', fontSize: '0.85rem' }} rel="noreferrer">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px' }}>
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49c0.5 0.09 0.66-0.22 0.66-0.48c0-0.24-0.01-0.87-0.01-1.7c-2.78 0.6-3.37-1.34-3.37-1.34c-0.45-1.14-1.1-1.45-1.1-1.45c-0.9-0.62 0.07-0.61 0.07-0.61c0.99 0.07 1.52 1.02 1.52 1.02c0.89 1.53 2.34 1.09 2.91 0.83c0.09-0.65 0.35-1.09 0.63-1.34c-2.22-0.25-4.56-1.11-4.56-4.93c0-1.09 0.39-1.98 1.02-2.68c-0.1-0.25-0.45-1.27 0.1-2.65c0 0 0.84-0.27 2.75 1.02c0.8-0.22 1.65-0.33 2.5-0.33c0.85 0 1.7 0.11 2.5 0.33c1.91-1.29 2.75-1.02 2.75-1.02c0.55 1.38 0.2 2.4 0.1 2.65c0.63 0.7 1.02 1.59 1.02 2.68c0 3.82-2.34 4.68-4.57 4.93c0.36 0.31 0.68 0.92 0.68 1.85c0 1.34-0.01 2.42-0.01 2.75c0 0.26 0.16 0.58 0.67 0.48C19.13 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10z"></path>
                </svg>
                <span>{t.link_github}</span>
              </a>
              <a href="https://www.instagram.com/lari.devcode" target="_blank" className="cv-btn"
                style={{ background: '#fff', color: 'var(--primary)', borderColor: 'var(--primary)', padding: '8px 12px', fontSize: '0.85rem' }} rel="noreferrer">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px' }}>
                  <rect x="2" y="2" width="20" height="20" rx="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span>{t.link_instagram}</span>
              </a>
              <a href="https://www.linkedin.com/in/larissa-azevedo-albuquerque/" target="_blank" className="cv-btn"
                style={{ background: '#fff', color: 'var(--primary)', borderColor: 'var(--primary)', padding: '8px 12px', fontSize: '0.85rem' }} rel="noreferrer">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px' }}>
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <span>{t.link_linkedin}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Lado Direito - Banner de Chamada para Mentoria apenas */}
        <div className="mentorship-banner" style={{ marginTop: 0 }}>
          <h3>{t.mentorship_banner_title}</h3>
          <p>{t.mentorship_banner_desc}</p>
          <div className="mentorship-btn-container">
            <a href="https://forms.gle/b5zm5CA7DGBfHjWu5" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
              <Button style={{ padding: '10px 22px', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <span>{t.mentorship_banner_btn}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Button>
            </a>
          </div>
        </div>
      </div>



      {/* Card do Resumo Profissional (LOGO ABAIXO DE TUDO) */}
      <div className="card hero-text" style={{ marginTop: '32px', padding: '32px' }}>
        <span className="skill-category" style={{ marginBottom: '16px', display: 'block' }}>
          {t.summary_label}
        </span>
        <span dangerouslySetInnerHTML={{ __html: dynamicSummary }} />
      </div>
    </div>
  );
}
