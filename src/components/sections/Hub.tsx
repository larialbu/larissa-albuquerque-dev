import { useState, useEffect } from 'react';
import type { TranslationSet } from '../../translations';
import type { UI, Lang } from '../../ui';
import { Icon } from '../atoms/Icons';
import { Modal } from '../organisms/Modal';
import { products, type Product } from '../../data/products';

export type ModalType = 'experiencia' | 'academico' | 'participacao' | 'produtos' | 'skills' | 'parcerias';

interface HubProps {
  t: TranslationSet;
  u: UI;
  lang: Lang;
  openModal: ModalType | null;
  onOpenModal: (m: ModalType) => void;
  onCloseModal: () => void;
}

const WHATSAPP = '5581999699386';

const BADGES = [
  'a4c82c09-567a-48fb-883e-91bc6d496a2e',
  '51d15900-a868-4397-ad3a-78de026e0f1f',
  '6ed212c3-515a-4bf8-9bd9-509b6b177e51',
  'b61c0920-a6b7-4afd-806b-dfde84bbd5c9',
  'aa479d0c-7463-46b0-885e-92cc11ec20f6',
  '6c881d4d-5a67-4f9c-987c-68578532381b',
  '8aba53f4-8196-4e6d-ac43-14f18008ed2d',
  'd5e787f1-92bb-4333-bf41-bb07f5012314',
];

const COURSES = [
  'AI Fundamentals',
  'AI for Brainstorming and Planning',
  'AI for Research and Insights',
  'AI for Writing and Communicating',
  'AI for Content Creation',
  'AI for Data Analysis',
  'AI for App Building',
];

function ProductCover({ p, lang }: { p: Product; lang: Lang }) {
  if (p.cover) return <img src={p.cover} alt={p.title[lang]} loading="lazy" />;
  return (
    <div className="cover-fallback" style={{ background: `linear-gradient(135deg, ${p.gradient[0]}, ${p.gradient[1]})` }}>
      <span>{p.title[lang]}</span>
    </div>
  );
}

export function Hub({ t, u, lang, openModal, onOpenModal, onCloseModal }: HubProps) {
  const isPt = lang === 'pt';
  const [copiedCoupon, setCopiedCoupon] = useState<string | null>(null);

  // Skill active tab
  const skillGroups = [
    { id: 'frontend', label: t.skills_frontend, items: ['TypeScript', 'React', 'Next.js', 'Angular', 'Vue.js'] },
    { id: 'backend', label: t.skills_backend, items: ['Django', 'Python', 'TypeScript', 'NestJS', 'Node.js'] },
    {
      id: 'ia',
      label: t.skills_ia,
      items: [
        'ChatGPT', 'Claude', 'Gemini', 'GitHub Copilot', 'Cursor AI', 'Windsurf',
        'Prompt Engineering', 'AI-Assisted Development', 'AI Pair Programming',
        'AI Code Review', 'AI Software Architecture', 'Agentes de IA',
        'Multi-Agent Systems', 'Skills', 'MCP', 'Function Calling', 'RAG', 'AI Workflows',
      ],
    },
    { id: 'db', label: t.skills_databases, items: ['PostgreSQL', 'SQL Server', 'MySQL', 'SQLite'] },
    { id: 'arch', label: t.skills_arch, items: ['Clean Architecture', 'Domain-Driven Design', 'Microserviços', 'Micro Frontends', 'Model-View-Controller'] },
    { id: 'devops', label: t.skills_devops, items: ['Docker', 'CI/CD', 'Rancher', 'Jenkins', 'Argo CD', 'Grafana'] },
    { id: 'aws', label: t.skills_aws, items: ['VPC', 'EC2', 'S3', 'Lambda', 'CloudFront', 'SDK'] },
    { id: 'apis', label: t.skills_apis, items: ['REST', 'gRPC', 'BFF', 'FastAPI', 'Flask'] },
    { id: 'styling', label: t.skills_styling, items: ['Angular Material', 'Styled-Components', 'Material UI', 'Bootstrap', 'Tailwind CSS'] },
    { id: 'testing', label: t.skills_testing, items: ['Jest', 'Selenium', 'Cypress'] },
    { id: 'messaging', label: t.skills_messaging, items: ['RabbitMQ', 'SignalR'] },
    { id: 'versioning', label: t.skills_versioning, items: ['Git', 'GitHub', 'GitLab', 'Swagger', 'CompoDoc'] },
    { id: 'agile', label: t.skills_agile, items: ['Scrum', 'Kanban', 'Pair Programming'] },
    { id: 'others', label: t.skills_others, items: ['HTML', 'CSS', 'Figma', 'Google Lighthouse', 'Trello', 'Jira', 'GitHub Projects', 'Power BI'] },
  ];
  const [activeSkillTab, setActiveSkillTab] = useState(skillGroups[0].id);
  const currentSkillGroup = skillGroups.find((g) => g.id === activeSkillTab) || skillGroups[0];

  // Load credly script on mount
  useEffect(() => {
    if (!document.querySelector('script[src="//cdn.credly.com/assets/utilities/embed.js"]')) {
      const script = document.createElement('script');
      script.src = '//cdn.credly.com/assets/utilities/embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const copyCoupon = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCoupon(code);
    setTimeout(() => setCopiedCoupon(null), 1800);
  };

  // Experiências list
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
      date: isPt ? 'janeiro 2026 - o momento' : 'January 2026 - Present',
      current: true,
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

  // Academico projects
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

  // Participações list
  const participacoes = [
    {
      id: 'google',
      category: t.label_community,
      badge: 'Google 2026',
      title: t.proj_google_title,
      desc: t.proj_google_desc,
      impactTitle: t.proj_google_impact,
      impact: [t.proj_google_impact_1, t.proj_google_impact_2, t.proj_google_impact_3],
    },
    {
      id: 'hostgator',
      category: t.label_community,
      badge: 'HostGator',
      title: t.proj_hostgator_title,
      desc: t.proj_hostgator_desc,
      impactTitle: t.proj_hostgator_impact,
      impact: [t.proj_hostgator_impact_1, t.proj_hostgator_impact_2, t.proj_hostgator_impact_3],
    },
    {
      id: 'alura',
      category: t.label_community,
      badge: 'Alura Stars',
      title: t.proj_alura_title,
      desc: t.proj_alura_desc,
      impactTitle: t.proj_alura_impact,
      impact: [t.proj_alura_impact_1, t.proj_alura_impact_2, 'Participação ativa em fóruns e eventos técnicos.'],
    },
    {
      id: 'rfec',
      category: t.label_leadership,
      badge: 'Liderança',
      title: t.proj_rfec_title,
      desc: t.proj_rfec_desc,
      impactTitle: t.proj_rfec_impact,
      impact: [t.proj_rfec_impact_1, t.proj_rfec_impact_2, 'Parcerias estratégicas com empresas de tecnologia locais.'],
    },
    {
      id: 'mentoria',
      category: t.label_mentorship,
      badge: 'Mentoria & Palestras',
      title: t.proj_mentoria_title,
      desc: t.proj_mentoria_desc,
      impactTitle: t.proj_mentoria_impact,
      impact: [t.proj_mentoria_impact_1, t.proj_mentoria_impact_2, 'Apresentações e palestras sobre Front-end, IA e Carreira Tech'],
    },
    {
      id: 'hackathons',
      category: t.label_hackathons,
      badge: '2x Campeã',
      title: t.proj_hackathons_title,
      desc: t.proj_hackathons_desc,
      impactTitle: t.proj_hackathons_impact,
      impact: [t.proj_hackathons_impact_1, t.proj_hackathons_impact_2, t.proj_hackathons_impact_3],
    },
  ];

  // Parcerias list
  const partners = [
    {
      id: 'hostgator',
      name: 'HostGator',
      title: t.proj_partners_hostgator_title,
      desc: t.proj_partners_hostgator_desc,
      coupon: 'LARIDEV',
      btn: t.proj_partners_hostgator_btn,
      link: 'https://www.hostgator.com.br/allpass',
    },
    {
      id: 'alura',
      name: 'Alura',
      title: t.proj_partners_alura_desc,
      desc: isPt ? 'Aproveite o desconto exclusivo para a maior plataforma de tecnologia do Brasil.' : 'Enjoy exclusive discounts for the largest tech education platform in Brazil.',
      coupon: 'star_lari',
      btn: t.proj_partners_alura_btn,
      link: 'https://www.alura.com.br/indique-e-ganhe/larissaamca',
    },
    {
      id: 'useti',
      name: 'Use_T.I',
      title: t.proj_partners_usetii_title,
      desc: t.proj_partners_usetii_desc,
      coupon: 'laridev',
      btn: t.proj_partners_usetii_btn,
      link: 'https://www.useti.shop/useti',
    },
    {
      id: 'cdc',
      name: 'Casa do Código',
      title: t.proj_partners_cdc_title,
      desc: t.proj_partners_cdc_desc,
      coupon: 'AF-b5d2572e',
      btn: t.proj_partners_cdc_btn,
      link: 'https://www.casadocodigo.com.br/?cupom=AF-b5d2572e',
    },
    {
      id: 'fiap',
      name: 'FIAP',
      title: t.proj_partners_fiap_title,
      desc: t.proj_partners_fiap_desc,
      btn: t.proj_partners_fiap_btn,
      link: 'https://www.instagram.com/lari.devcode',
    },
  ];

  // The 6 Hub cards displayed side-by-side on the homepage
  const hubCards = [
    {
      id: 'experiencia' as ModalType,
      chip: isPt ? '💼 Carreira' : '💼 Career',
      title: t.exp_h1,
      preview: isPt
        ? 'BBTS (Banco do Brasil) & SENAC PE atualmente. 7 empresas de grande porte com atuação Full Stack e Cloud.'
        : 'BBTS (Banco do Brasil) & SENAC PE currently. 7 prominent companies with Full Stack and Cloud experience.',
      tags: ['BBTS', 'SENAC PE', 'Banco do Brasil', 'Full Stack', 'Cloud'],
    },
    {
      id: 'academico' as ModalType,
      chip: isPt ? '🎓 Acadêmico' : '🎓 Academic',
      title: t.acad_h1,
      preview: isPt
        ? 'Mestrado CIn-UFPE (Eng. de Software & IA), Graduação UNICAP (Embarque Digital) e 4 Projetos de Inovação.'
        : 'Master\'s at CIn-UFPE (Software Eng & AI), UNICAP Degree (Embarque Digital), and 4 Innovation Projects.',
      tags: ['CIn-UFPE', 'Mestrado', 'UNICAP', 'Embarque Digital', 'Lattes'],
    },
    {
      id: 'participacao' as ModalType,
      chip: isPt ? '🌟 Participações' : '🌟 Participation',
      title: t.proj_h1,
      preview: isPt
        ? 'Embaixadora Estudantil Google 2026, Embaixadora HostGator, Alura Stars, Diretora RFEC e 2x Campeã em Hackathons.'
        : 'Google Student Ambassador 2026, HostGator Ambassador, Alura Stars, RFEC Director, and 2x Hackathon Champion.',
      tags: ['Google Ambassador', 'HostGator', 'Alura Stars', 'RFEC', 'Hackathons'],
    },
    {
      id: 'produtos' as ModalType,
      chip: isPt ? '🚀 Freela & Produtos' : '🚀 Freela & Products',
      title: u.products_title,
      preview: isPt
        ? 'Landing Pages de alta conversão, Sites Institucionais e Sistemas Web sob medida com entrega ágil.'
        : 'High-converting Landing Pages, Corporate Websites, and Custom Web Systems with agile delivery.',
      tags: ['Landing Pages', 'Sites Completos', 'Sistemas Web', 'IA Integrada'],
    },
    {
      id: 'skills' as ModalType,
      chip: isPt ? '⚡ Stack & Badges' : '⚡ Stack & Badges',
      title: isPt ? 'Hard Skills & Certificações' : 'Hard Skills & Certifications',
      preview: isPt
        ? 'React, TypeScript, Node, Python, AWS, Docker + Certificado Profissional Google AI (7 cursos) e Badges Credly.'
        : 'React, TypeScript, Node, Python, AWS, Docker + Google AI Professional Certificate (7 courses) and Credly Badges.',
      tags: ['React / TypeScript', 'Node / Python', 'AWS / DevOps', 'Google AI Cert'],
    },
    {
      id: 'parcerias' as ModalType,
      chip: isPt ? '🎁 Benefícios' : '🎁 Benefits',
      title: u.partners_title,
      preview: isPt
        ? 'Cupons exclusivos de desconto: HostGator All Pass (LARIDEV), Alura (star_lari), Use_T.I e Casa do Código.'
        : 'Exclusive discount coupons: HostGator All Pass (LARIDEV), Alura (star_lari), Use_T.I and Casa do Código.',
      tags: ['HostGator All Pass', 'Cupom LARIDEV', 'Alura', 'Use_T.I'],
    },
  ];

  return (
    <>
      {/* SEÇÃO PRINCIPAL COMPACTA DE CARDS LADO A LADO */}
      <section id="areas" className="section hub-section">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">{u.hub_eyebrow}</span>
              <h2 className="section-title">{u.hub_title}</h2>
              <p style={{ marginTop: 8, maxWidth: 540 }}>{u.hub_sub}</p>
            </div>
          </div>

          <div className="grid grid-2 hub-grid">
            {hubCards.map((c) => (
              <article
                key={c.id}
                id={`hub-card-${c.id}`}
                className="glass spot clickable card hub-card reveal"
                onClick={() => onOpenModal(c.id)}
              >
                <div className="card-meta">
                  <span className="chip mint">{c.chip}</span>
                  <span className="hub-hint">{u.details}</span>
                </div>
                <h3 className="hub-card-title">{c.title}</h3>
                <p className="hub-card-preview">{c.preview}</p>
                <div className="tags hub-card-tags">
                  {c.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="card-foot hub-card-foot">
                  <button
                    type="button"
                    className="btn btn-primary btn-sm hub-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenModal(c.id);
                    }}
                  >
                    {u.see_more} {Icon.arrow}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* MODAL 1: EXPERIÊNCIA PROFISSIONAL (SEM POPUPS INTERNOS) */}
      {/* ============================================================== */}
      <Modal open={openModal === 'experiencia'} onClose={onCloseModal} wide label={t.exp_h1}>
        <div className="modal-inner modal-scrollable">
          <div className="modal-header-banner">
            <span className="chip mint">{isPt ? '💼 Carreira & Atuação' : '💼 Career & Roles'}</span>
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

      {/* ============================================================== */}
      {/* MODAL 2: HISTÓRICO ACADÊMICO (SEM POPUPS INTERNOS) */}
      {/* ============================================================== */}
      <Modal open={openModal === 'academico'} onClose={onCloseModal} wide label={t.acad_h1}>
        <div className="modal-inner modal-scrollable">
          <div className="modal-header-banner">
            <div className="banner-row">
              <span className="chip mint">{isPt ? '🎓 Pós-Graduação & P&D' : '🎓 Postgrad & R&D'}</span>
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

      {/* ============================================================== */}
      {/* MODAL 3: PARTICIPAÇÕES & COMUNIDADE (SEM POPUPS INTERNOS) */}
      {/* ============================================================== */}
      <Modal open={openModal === 'participacao'} onClose={onCloseModal} wide label={t.proj_h1}>
        <div className="modal-inner modal-scrollable">
          <div className="modal-header-banner">
            <span className="chip mint">{isPt ? '🌟 Comunidade & Liderança' : '🌟 Community & Leadership'}</span>
            <h2>{t.proj_h1}</h2>
            <p>{isPt ? 'Atuação ativa em ecossistemas de tecnologia, embaixadas oficiais e iniciativas de impacto social.' : 'Active participation in tech ecosystems, official ambassadorships, and social impact initiatives.'}</p>
          </div>
          <div className="divider" />

          <div className="grid grid-2 modal-inner-grid">
            {participacoes.map((it) => (
              <article key={it.id} className="glass card modal-card">
                <div className="card-meta">
                  <span className="chip mint">{it.badge}</span>
                  <span className="mono" style={{ color: 'var(--faint)', fontSize: '.82rem' }}>{it.category}</span>
                </div>
                <h3 style={{ fontSize: '1.1rem', margin: '10px 0 6px', color: 'var(--text)' }}>{it.title}</h3>
                <p style={{ fontSize: '.92rem', lineHeight: 1.6, color: 'var(--muted)' }}>{it.desc}</p>

                <div className="divider" style={{ margin: '14px 0 10px' }} />
                <span className="modal-label" style={{ fontSize: '.82rem', fontWeight: 600 }}>{it.impactTitle}</span>
                <ul className="modal-list" style={{ marginTop: 8 }}>
                  {it.impact.map((point) => (
                    <li key={point} style={{ fontSize: '.88rem' }}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </Modal>

      {/* ============================================================== */}
      {/* MODAL 4: PRODUTOS & FREELAS (SEM POPUPS INTERNOS) */}
      {/* ============================================================== */}
      <Modal open={openModal === 'produtos'} onClose={onCloseModal} wide label={u.products_title}>
        <div className="modal-inner modal-scrollable">
          <div className="modal-header-banner">
            <span className="chip mint">{isPt ? '🚀 Freelance & Soluções' : '🚀 Freelance & Solutions'}</span>
            <h2>{u.products_title}</h2>
            <p>{u.products_sub}</p>
          </div>
          <div className="divider" />

          <div className="modal-products-grid">
            {products.map((p) => (
              <article key={p.id} className="glass card modal-card modal-product-card">
                <div className="product-cover" style={{ maxHeight: 150, borderRadius: 'var(--radius-sm)' }}>
                  <ProductCover p={p} lang={lang} />
                </div>
                <div style={{ marginTop: 14 }}>
                  <div className="card-meta">
                    <span className="chip mint">{p.category[lang]}</span>
                    {p.price && <span className="price">{p.price[lang]}</span>}
                  </div>
                  <h3 style={{ fontSize: '1.2rem', margin: '10px 0 6px', color: 'var(--text)' }}>{p.title[lang]}</h3>
                  <p style={{ fontSize: '.93rem', lineHeight: 1.6, color: 'var(--muted)' }}>{p.description[lang]}</p>

                  <div className="divider" style={{ margin: '14px 0 10px' }} />
                  <span className="modal-label" style={{ fontSize: '.82rem', fontWeight: 600 }}>{u.product_features}</span>
                  <ul className="modal-list" style={{ marginTop: 8 }}>
                    {p.features[lang].map((f) => (
                      <li key={f} style={{ fontSize: '.88rem' }}>{f}</li>
                    ))}
                  </ul>

                  <span className="modal-label" style={{ fontSize: '.82rem', fontWeight: 600, marginTop: 12 }}>{u.product_stack}</span>
                  <div className="tags" style={{ marginTop: 8 }}>
                    {p.stack.map((s) => (
                      <span key={s} className="tag">{s}</span>
                    ))}
                  </div>

                  <div className="card-foot" style={{ marginTop: 16 }}>
                    <a
                      className="btn btn-primary btn-sm"
                      target="_blank"
                      rel="noreferrer"
                      href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`${u.product_whatsapp_msg} ${p.title[lang]}`)}`}
                    >
                      {Icon.whatsapp} {u.product_cta}
                    </a>
                    {p.link && (
                      <a className="btn btn-ghost btn-sm" href={p.link} target="_blank" rel="noreferrer">
                        {Icon.external} Demo
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Modal>

      {/* ============================================================== */}
      {/* MODAL 5: HARD SKILLS & CERTIFICAÇÕES (SEM POPUPS INTERNOS) */}
      {/* ============================================================== */}
      <Modal open={openModal === 'skills'} onClose={onCloseModal} wide label={isPt ? 'Hard Skills & Certificações' : 'Hard Skills & Certifications'}>
        <div className="modal-inner modal-scrollable">
          <div className="modal-header-banner">
            <span className="chip mint">{isPt ? '⚡ Tecnologias & Badges' : '⚡ Technologies & Badges'}</span>
            <h2>{isPt ? 'Hard Skills & Certificações' : 'Hard Skills & Certifications'}</h2>
            <p>{isPt ? 'Competências técnicas dominadas, certificações oficiais e credenciais validadas.' : 'Core technical skills, official certifications, and verified credentials.'}</p>
          </div>
          <div className="divider" />

          {/* Destaque Certificado Google AI */}
          <div className="glass card modal-card" style={{ marginBottom: 20 }}>
            <div className="card-meta">
              <span className="chip mint">Google — Coursera · 27/07/2026</span>
              <a
                className="btn btn-primary btn-sm"
                href="https://coursera.org/verify/professional-cert/FLXB2QI17CGK"
                target="_blank"
                rel="noreferrer"
              >
                {Icon.external} {isPt ? 'Verificar Coursera' : 'Verify Certificate'}
              </a>
            </div>
            <h3 style={{ fontSize: '1.25rem', marginTop: 10, color: 'var(--text)' }}>
              {isPt ? 'Certificado Profissional Google AI' : 'Google AI Professional Certificate'}
            </h3>
            <p style={{ fontSize: '.93rem', marginTop: 8, color: 'var(--muted)', lineHeight: 1.6 }}>
              {isPt
                ? 'Certificado Profissional composto por 7 cursos demonstrando fluência e aplicação prática de IA em brainstorming, pesquisa, escrita, comunicação, criação de conteúdo, análise de dados e desenvolvimento de aplicações com IA.'
                : 'Professional Certificate consisting of 7 courses demonstrating fluency and practical application of AI in brainstorming, research, writing, communication, content creation, data analysis, and building AI apps.'}
            </p>
            <div className="tags" style={{ marginTop: 12 }}>
              {COURSES.map((c) => (
                <span key={c} className="tag">{c}</span>
              ))}
            </div>
          </div>

          {/* Hard Skills Tabbed Box */}
          <h3 className="modal-section-subtitle">{t.menu_skills}</h3>
          <div className="glass skills-box" style={{ marginTop: 12 }}>
            <div className="skill-tabs" role="tablist">
              {skillGroups.map((g) => (
                <button
                  key={g.id}
                  id={`skill-tab-${g.id}`}
                  role="tab"
                  aria-selected={activeSkillTab === g.id}
                  className={`skill-tab ${activeSkillTab === g.id ? 'active' : ''}`}
                  onClick={() => setActiveSkillTab(g.id)}
                >
                  {g.label}
                </button>
              ))}
            </div>
            <div className="tags skill-panel" key={currentSkillGroup.id} role="tabpanel">
              {currentSkillGroup.items.map((s) => (
                <span key={s} className="tag">{s}</span>
              ))}
            </div>
          </div>

          {/* Credly Badges */}
          <h3 className="modal-section-subtitle" style={{ marginTop: 24 }}>{u.certificates_title} (Credly)</h3>
          <div className="badges" style={{ marginTop: 12 }}>
            {BADGES.map((id) => (
              <div key={id} data-iframe-width="150" data-iframe-height="270" data-share-badge-id={id} data-share-badge-host="https://www.credly.com" />
            ))}
          </div>
        </div>
      </Modal>

      {/* ============================================================== */}
      {/* MODAL 6: PARCERIAS & CUPONS (SEM POPUPS INTERNOS) */}
      {/* ============================================================== */}
      <Modal open={openModal === 'parcerias'} onClose={onCloseModal} wide label={u.partners_title}>
        <div className="modal-inner modal-scrollable">
          <div className="modal-header-banner">
            <span className="chip mint">{isPt ? '🎁 Descontos Exclusivos' : '🎁 Exclusive Discounts'}</span>
            <h2>{u.partners_title}</h2>
            <p>{isPt ? 'Parcerias oficiais com grandes empresas de tecnologia oferecendo cupons para minha comunidade.' : 'Official partnerships with major tech brands providing exclusive coupons for my community.'}</p>
          </div>
          <div className="divider" />

          <div className="grid grid-2 modal-inner-grid">
            {partners.map((p) => (
              <article key={p.id} className="glass card partner modal-card">
                <span className="partner-name">{p.name}</span>
                <h3 style={{ fontSize: '1.05rem', margin: '8px 0 6px', color: 'var(--text)' }}>{p.title}</h3>
                <p style={{ fontSize: '.88rem', color: 'var(--muted)', lineHeight: 1.6 }}>{p.desc}</p>
                <div className="card-foot" style={{ marginTop: 16 }}>
                  {p.coupon && (
                    <button
                      className="coupon"
                      onClick={() => copyCoupon(p.coupon!)}
                      id={`coupon-${p.id}`}
                      title={u.copy}
                    >
                      {copiedCoupon === p.coupon ? u.copied : p.coupon} {Icon.copy}
                    </button>
                  )}
                  <a className="btn btn-ghost btn-sm" href={p.link} target="_blank" rel="noreferrer" id={`partner-${p.id}`}>
                    {p.btn} {Icon.arrow}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Modal>
    </>
  );
}
