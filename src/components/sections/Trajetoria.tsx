import { useState } from 'react';
import type { TranslationSet } from '../../translations';
import type { UI, Lang } from '../../ui';
import { Icon } from '../atoms/Icons';
import { Modal } from '../organisms/Modal';

interface TrajetoriaProps {
  t: TranslationSet;
  u: UI;
  lang: Lang;
  openModalId?: 'experiencia' | 'academico' | 'participacao' | null;
  onSetOpenModalId?: (id: 'experiencia' | 'academico' | 'participacao' | null) => void;
}

export function Trajetoria({ t, u, lang, openModalId, onSetOpenModalId }: TrajetoriaProps) {
  const [internalOpen, setInternalOpen] = useState<'experiencia' | 'academico' | 'participacao' | null>(null);
  const activeModal = openModalId !== undefined ? openModalId : internalOpen;
  const setActiveModal = (val: 'experiencia' | 'academico' | 'participacao' | null) => {
    if (onSetOpenModalId) onSetOpenModalId(val);
    else setInternalOpen(val);
  };

  const isPt = lang === 'pt';

  // Experiências profissionais
  const experiences = [
    {
      id: 'bbts',
      date: isPt ? 'junho 2026 - o momento' : 'June 2026 - Present',
      current: true,
      company: 'Banco do Brasil Tecnologia e Serviços - BBTS (Via Digisystem)',
      role: t.exp_bbts_role,
      desc: t.exp_bbts_desc,
    },
    {
      id: 'senac',
      date: isPt ? 'janeiro 2026 - junho 2026' : 'January 2026 - June 2026',
      current: false,
      company: 'SENAC PERNAMBUCO (MédioTec Senac)',
      role: t.exp_senac_role,
      desc: t.exp_senac_desc,
    },
    {
      id: 'bb-ntt',
      date: isPt ? 'janeiro 2026 - junho 2026' : 'January 2026 - June 2026',
      company: 'Banco do Brasil (Via NTT DATA)',
      role: t.exp_bb_role,
      desc: t.exp_bb_desc,
    },
    {
      id: 'bb-qintess',
      date: isPt ? 'julho 2025 - dezembro 2025' : 'July 2025 - December 2025',
      company: 'Banco do Brasil (Via Qintess)',
      role: isPt ? 'Desenvolvedora FULL STACK - Pleno' : 'Full Stack Developer - Mid-Level',
      desc: t.exp_bb_qintess_desc,
    },
    {
      id: 'fcx',
      date: isPt ? 'dezembro 2024 - julho 2025' : 'December 2024 - July 2025',
      company: 'FCx Labs (Ferreira Costa)',
      role: isPt ? 'Desenvolvedora FULL STACK - Pleno' : 'Full Stack Developer - Mid-Level',
      desc: t.exp_fcx_desc,
    },
    {
      id: 'bsa',
      date: isPt ? 'agosto 2023 - dezembro 2024' : 'August 2023 - December 2024',
      company: 'BSA Tech (Opa Games)',
      role: isPt ? 'Desenvolvedora FULL STACK - Junior' : 'Full Stack Developer - Junior',
      desc: t.exp_bsa_desc,
    },
    {
      id: 'cmtech',
      date: isPt ? 'janeiro 2023 - julho 2023' : 'January 2023 - July 2023',
      company: 'CMTech',
      role: t.exp_cmtech_role,
      desc: t.exp_cmtech_desc,
    },
  ];

  // Projetos acadêmicos
  const academicProjects = [
    {
      id: 'petribu',
      date: 'ago 2024 – fev 2026',
      role: t.acad_proj_label_dev,
      title: t.acad_proj_petribu_title,
      desc: t.acad_proj_petribu_desc,
    },
    {
      id: 'gp2',
      date: 'jan – dez 2025',
      role: t.acad_proj_label_manager,
      title: t.acad_proj_gp2_title,
      desc: t.acad_proj_gp2_desc,
    },
    {
      id: 'porto',
      date: 'fev 2022 – jun 2024',
      role: 'Embarque Digital',
      title: 'Residência Tecnológica com Porto Digital',
      desc: 'Participação na Residência Onboard do Porto Digital, desenvolvendo projetos em parceria com empresas como Accenture, NTT Data e CMTech. Atuação em projetos práticos orientados por especialistas, aplicando conhecimentos adquiridos no programa Embarque Digital.',
    },
    {
      id: 'sidi',
      date: 'nov 2022 – fev 2023',
      role: 'Bolsista Desenvolvedora Front-end',
      title: 'SiDI (PET-Projeto de extensão tecnológica)',
      desc: 'Criação de um chatbot inteligente para o departamento de RH, utilizando Rasa como motor conversacional, Docker para containerização e AWS para hospedagem. Integração com Python (Lambdas e APIs) e Power BI para análise de candidatos.',
    },
  ];

  // Participações & Projetos
  const communityItems = [
    {
      id: 'google',
      category: t.label_community,
      title: t.proj_google_title,
      desc: t.proj_google_desc,
      impactTitle: t.proj_google_impact,
      impact: [t.proj_google_impact_1, t.proj_google_impact_2, t.proj_google_impact_3],
    },
    {
      id: 'hostgator',
      category: t.label_community,
      title: t.proj_hostgator_title,
      desc: t.proj_hostgator_desc,
      impactTitle: t.proj_hostgator_impact,
      impact: [t.proj_hostgator_impact_1, t.proj_hostgator_impact_2, t.proj_hostgator_impact_3],
    },
    {
      id: 'alura',
      category: t.label_community,
      title: t.proj_alura_title,
      desc: t.proj_alura_desc,
      impactTitle: t.proj_alura_impact,
      impact: [t.proj_alura_impact_1, t.proj_alura_impact_2, isPt ? 'Participação ativa em fóruns e eventos técnicos.' : 'Active participation in technical forums and events.'],
    },
    {
      id: 'rfec',
      category: t.label_leadership,
      title: t.proj_rfec_title,
      desc: t.proj_rfec_desc,
      impactTitle: t.proj_rfec_impact,
      impact: [t.proj_rfec_impact_1, t.proj_rfec_impact_2, isPt ? 'Parcerias com empresas locais e workshops de capacitação.' : 'Partnerships with local companies and training workshops.'],
    },
    {
      id: 'mentoria',
      category: t.label_mentorship,
      title: t.proj_mentoria_title,
      desc: t.proj_mentoria_desc,
      impactTitle: t.proj_mentoria_impact,
      impact: [t.proj_mentoria_impact_1, t.proj_mentoria_impact_2, isPt ? 'Apresentações e palestras sobre Front-end, IA e Carreira Tech.' : 'Presentations and talks on Front-end, AI, and Tech Careers.'],
    },
    {
      id: 'hackathons',
      category: t.label_hackathons,
      title: t.proj_hackathons_title,
      desc: t.proj_hackathons_desc,
      impactTitle: t.proj_hackathons_impact,
      impact: [t.proj_hackathons_impact_1, t.proj_hackathons_impact_2, t.proj_hackathons_impact_3],
    },
  ];

  return (
    <section id="trajetoria" className="section" style={{ paddingTop: 20, paddingBottom: 40 }}>
      <div className="container">
        <div className="section-head reveal">
          <div>
            <span className="eyebrow">{isPt ? 'Trajetória' : 'Background'}</span>
            <h2 className="section-title">
              {isPt ? 'Carreira & Formação & Participações & Projetos' : 'Career, Education, Community & Projects'}
            </h2>
            <p style={{ marginTop: 8, maxWidth: 640 }}>
              {isPt
                ? 'Conheça minha experiência no mercado de trabalho, formação acadêmica em tecnologia e projetos em comunidade.'
                : 'Explore my professional experience, academic background in tech, and community projects.'}
            </p>
          </div>
        </div>

        {/* 3 CARDS LADO A LADO RECOLHIDOS */}
        <div className="grid grid-3 hub-grid">
          {/* Card 1: Experiência Profissional */}
          <article
            id="hub-card-experiencia"
            className="glass spot clickable card hub-card reveal"
            onClick={() => setActiveModal('experiencia')}
          >
            <div className="card-meta">
              <span className="chip mint">{isPt ? 'Carreira' : 'Career'}</span>
              <span className="hub-hint">{u.details}</span>
            </div>
            <h3 className="hub-card-title">{t.exp_h1}</h3>
            <p className="hub-card-preview">
              {isPt
                ? 'BBTS (Banco do Brasil Tecnologia e Serviços) atualmente. Trajetória com 7 empresas de grande porte com atuação Full Stack e Cloud AWS.'
                : 'BBTS (Banco do Brasil Tech & Services) currently. Career across 7 prominent companies with Full Stack and Cloud AWS practice.'}
            </p>
            <div className="card-foot hub-card-foot">
              <button
                type="button"
                className="btn btn-primary btn-sm hub-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveModal('experiencia');
                }}
              >
                {u.see_more} {Icon.arrow}
              </button>
            </div>
          </article>

          {/* Card 2: Histórico Acadêmico */}
          <article
            id="hub-card-academico"
            className="glass spot clickable card hub-card reveal"
            onClick={() => setActiveModal('academico')}
          >
            <div className="card-meta">
              <span className="chip mint">{isPt ? 'Formação' : 'Education'}</span>
              <span className="hub-hint">{u.details}</span>
            </div>
            <h3 className="hub-card-title">{t.acad_h1}</h3>
            <p className="hub-card-preview">
              {isPt
                ? 'Mestrado no CIn-UFPE (Eng. de Software & IA), Graduação na UNICAP (Embarque Digital) e 4 Projetos de Inovação e P&D.'
                : 'Master\'s at CIn-UFPE (Software Eng & AI), UNICAP Degree (Embarque Digital), and 4 Innovation Projects.'}
            </p>
            <div className="card-foot hub-card-foot">
              <button
                type="button"
                className="btn btn-primary btn-sm hub-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveModal('academico');
                }}
              >
                {u.see_more} {Icon.arrow}
              </button>
            </div>
          </article>

          {/* Card 3: Participações & Projetos */}
          <article
            id="hub-card-participacao"
            className="glass spot clickable card hub-card reveal"
            onClick={() => setActiveModal('participacao')}
          >
            <div className="card-meta">
              <span className="chip mint">{isPt ? 'Projetos & Comunidade' : 'Projects & Community'}</span>
              <span className="hub-hint">{u.details}</span>
            </div>
            <h3 className="hub-card-title">{isPt ? 'Participações & Projetos' : 'Community & Projects'}</h3>
            <p className="hub-card-preview">
              {isPt
                ? 'Embaixadora Estudantil Google 2026, Embaixadora HostGator, Alura Stars, Liderança na RFEC (+2000 membros), mentorias e hackathons.'
                : 'Google Student Ambassador 2026, HostGator Ambassador, Alura Stars, RFEC Leadership (+2000 members), mentorships, and hackathons.'}
            </p>
            <div className="card-foot hub-card-foot">
              <button
                type="button"
                className="btn btn-primary btn-sm hub-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveModal('participacao');
                }}
              >
                {u.see_more} {Icon.arrow}
              </button>
            </div>
          </article>
        </div>
      </div>

      {/* POPUP 1: EXPERIÊNCIA PROFISSIONAL (SEM POPUPS INTERNOS) */}
      <Modal open={activeModal === 'experiencia'} onClose={() => setActiveModal(null)} wide label={t.exp_h1}>
        <div className="modal-inner modal-scrollable">
          <div className="modal-header-banner">
            <span className="chip mint">{isPt ? 'Carreira & Atuação' : 'Career & Roles'}</span>
            <h2>{t.exp_h1}</h2>
            <p>{isPt ? 'Trajetória completa com 7 empresas de grande porte, liderança técnica e docência.' : 'Complete career timeline across 7 prominent companies, technical leadership, and teaching.'}</p>
          </div>
          <div className="divider" />

          <div className="modal-timeline">
            {experiences.map((it) => (
              <div key={it.id} className={`modal-timeline-item ${it.current ? 'current' : ''}`}>
                <div className="modal-timeline-dot" />
                <div className="modal-timeline-content">
                  <div className="modal-timeline-header">
                    <span className={`chip ${it.current ? 'mint' : ''}`}>{it.date}</span>
                    <h3 className="modal-item-title">{it.company}</h3>
                    <span className="grad-text modal-item-role">{it.role}</span>
                  </div>
                  <div className="modal-item-desc" dangerouslySetInnerHTML={{ __html: it.desc }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Modal>

      {/* POPUP 2: HISTÓRICO ACADÊMICO (SEM POPUPS INTERNOS) */}
      <Modal open={activeModal === 'academico'} onClose={() => setActiveModal(null)} wide label={t.acad_h1}>
        <div className="modal-inner modal-scrollable">
          <div className="modal-header-banner">
            <div className="banner-row">
              <span className="chip mint">{isPt ? 'Pós-Graduação & P&D' : 'Postgrad & R&D'}</span>
              <a className="btn btn-ghost btn-sm" href="http://lattes.cnpq.br/7448823611009423" target="_blank" rel="noreferrer" id="btn-lattes-modal">
                {Icon.external} {t.acad_lattes_btn}
              </a>
            </div>
            <h2>{t.acad_h1}</h2>
            <p>{isPt ? 'Formação acadêmica no CIn-UFPE e UNICAP, além de projetos práticos de inovação e pesquisa.' : 'Academic degrees at CIn-UFPE and UNICAP, plus applied research and innovation projects.'}</p>
          </div>
          <div className="divider" />

          <h3 className="modal-section-subtitle">{isPt ? 'Títulos Acadêmicos' : 'Academic Degrees'}</h3>
          <div className="grid grid-2 modal-inner-grid">
            {/* Mestrado */}
            <article className="glass card modal-card">
              <div className="card-meta">
                <span className="icon-badge">{Icon.cap}</span>
                <span className="chip mint">● {isPt ? 'Em andamento' : 'In progress'}</span>
              </div>
              <h3>{t.acad_mestrado_title}</h3>
              <span className="mono" style={{ color: 'var(--faint)', fontSize: '.84rem' }}>Centro de Informática (CIn) — UFPE · 2024.2 – 2026.2</span>
              <p style={{ fontSize: '.92rem', marginTop: 10 }}>{t.acad_mestrado_research}</p>
              <div className="tags" style={{ marginTop: 12 }}>
                {['Engenharia de Software', 'Inteligência Artificial', 'Maturidade de Projetos', 'CIn-UFPE'].map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </article>

            {/* Graduação */}
            <article className="glass card modal-card">
              <div className="card-meta">
                <span className="icon-badge">{Icon.monitor}</span>
                <span className="chip">{isPt ? 'Concluído' : 'Completed'}</span>
              </div>
              <h3>{t.acad_tecnologo_title}</h3>
              <span className="mono" style={{ color: 'var(--faint)', fontSize: '.84rem' }}>Universidade Católica de Pernambuco — UNICAP · 2022.1 – 2024.1</span>
              <p style={{ fontSize: '.92rem', marginTop: 10 }}>{t.acad_tecnologo_embarque}</p>
              <div className="tags" style={{ marginTop: 12 }}>
                {['Embarque Digital', 'Porto Digital', 'Sistemas para Internet', 'Full Stack'].map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <div style={{ marginTop: 14 }}>
                <a className="btn btn-ghost btn-sm" href="https://github.com/orgs/SIN-disciplina-PI5/teams/2024-1-unicapevents" target="_blank" rel="noreferrer">
                  {Icon.external} {t.acad_tcc_btn}
                </a>
              </div>
            </article>
          </div>

          <h3 className="modal-section-subtitle" style={{ marginTop: 20 }}>{t.acad_proj_h1}</h3>
          <div className="modal-projects-list">
            {academicProjects.map((p) => (
              <div key={p.id} className="glass card modal-card" style={{ padding: 18 }}>
                <div className="card-meta">
                  <span className="chip peach">{p.role}</span>
                  <span className="mono" style={{ color: 'var(--faint)', fontSize: '.82rem' }}>{p.date}</span>
                </div>
                <h4 style={{ fontSize: '1.05rem', margin: '8px 0 6px', color: 'var(--text)' }}>{p.title}</h4>
                <p style={{ fontSize: '.92rem', lineHeight: 1.6, color: 'var(--muted)' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Modal>

      {/* POPUP 3: PARTICIPAÇÕES & PROJETOS */}
      <Modal
        open={activeModal === 'participacao'}
        onClose={() => setActiveModal(null)}
        wide
        label={isPt ? 'Participações & Projetos' : 'Community & Projects'}
      >
        <div className="modal-inner modal-scrollable">
          <div className="modal-header-banner">
            <span className="chip mint">{isPt ? 'Comunidade & Liderança' : 'Community & Leadership'}</span>
            <h2>{isPt ? 'Participações & Projetos' : 'Community & Projects'}</h2>
            <p>
              {isPt
                ? 'Iniciativas em comunidades de tecnologia, programas globais de embaixadores, liderança técnica, mentorias e hackathons.'
                : 'Tech community initiatives, global ambassador programs, technical leadership, mentorships, and hackathons.'}
            </p>
          </div>
          <div className="divider" />

          <div className="grid grid-2 modal-inner-grid">
            {communityItems.map((it) => (
              <article key={it.id} className="glass card modal-card" style={{ padding: 20 }}>
                <div className="card-meta">
                  <span className="chip mint">{it.category}</span>
                </div>
                <h3 style={{ fontSize: '1.15rem', margin: '8px 0 6px', color: 'var(--text)' }}>{it.title}</h3>
                <p style={{ fontSize: '.92rem', lineHeight: 1.6, color: 'var(--muted)', marginBottom: 12 }}>
                  {it.desc}
                </p>
                <span className="modal-label">{it.impactTitle}</span>
                <ul className="modal-list" style={{ marginTop: 8 }}>
                  {it.impact.map((point) => (
                    <li key={point} style={{ fontSize: '.88rem' }}>
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </Modal>
    </section>
  );
}
