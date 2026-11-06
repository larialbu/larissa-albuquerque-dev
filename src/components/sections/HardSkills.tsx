import { useEffect, useState } from 'react';
import type { TranslationSet } from '../../translations';
import type { UI, Lang } from '../../ui';
import { Icon } from '../atoms/Icons';
import { Modal } from '../organisms/Modal';

interface HardSkillsProps {
  t: TranslationSet;
  u: UI;
  lang?: Lang;
}

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

export function HardSkills({ t, u, lang = 'pt' }: HardSkillsProps) {
  const [openSkillsModal, setOpenSkillsModal] = useState(false);
  const [openCertModal, setOpenCertModal] = useState(false);
  const isPt = lang === 'pt';

  const groups = [
    {
      id: 'frontend',
      label: t.skills_frontend,
      desc: isPt
        ? 'Desenvolvimento de interfaces modernas, reativas e de alta performance com TypeScript, React, Next.js, Angular e Vue.js, aplicando arquitetura de micro frontends e boas práticas de acessibilidade.'
        : 'Development of modern, reactive, and high-performance interfaces with TypeScript, React, Next.js, Angular, and Vue.js, applying micro frontends and accessibility best practices.',
      items: ['TypeScript', 'React', 'Next.js', 'Angular', 'Vue.js'],
    },
    {
      id: 'backend',
      label: t.skills_backend,
      desc: isPt
        ? 'Construção de APIs escaláveis, microsserviços e regras de negócio robustas com Python (Django, FastAPI, Flask) e Node.js/TypeScript (NestJS), garantindo resiliência e alta disponibilidade.'
        : 'Building scalable APIs, microservices, and robust business logic with Python (Django, FastAPI, Flask) and Node.js/TypeScript (NestJS), ensuring resilience and high availability.',
      items: ['Django', 'Python', 'TypeScript', 'NestJS', 'Node.js'],
    },
    {
      id: 'ia',
      label: t.skills_ia,
      desc: isPt
        ? 'Engenharia de prompt avançada, criação de agentes autônomos, sistemas multi-agentes, MCP (Model Context Protocol), fluxos RAG e desenvolvimento assistido por IA (Copilot, Cursor, Windsurf, Claude, ChatGPT, Gemini).'
        : 'Advanced prompt engineering, autonomous agents, multi-agent systems, MCP (Model Context Protocol), RAG workflows, and AI-assisted development (Copilot, Cursor, Windsurf, Claude, ChatGPT, Gemini).',
      items: ['ChatGPT', 'Claude', 'Gemini', 'GitHub Copilot', 'Cursor AI', 'Windsurf', 'Prompt Engineering', 'AI-Assisted Development', 'AI Pair Programming', 'AI Code Review', 'AI Software Architecture', 'Agentes de IA', 'Multi-Agent Systems', 'Skills', 'MCP', 'Function Calling', 'RAG', 'AI Workflows'],
    },
    {
      id: 'db',
      label: t.skills_databases,
      desc: isPt
        ? 'Modelagem de dados relacional, indexação, queries otimizadas e governança de dados estruturados com PostgreSQL, SQL Server, MySQL e SQLite.'
        : 'Relational data modeling, indexing, query optimization, and structured data governance with PostgreSQL, SQL Server, MySQL, and SQLite.',
      items: ['PostgreSQL', 'SQL Server', 'MySQL', 'SQLite'],
    },
    {
      id: 'arch',
      label: t.skills_arch,
      desc: isPt
        ? 'Estruturação de sistemas modulares e sustentáveis utilizando Clean Architecture, Domain-Driven Design (DDD), padrões SOLID, Microsserviços e Micro Frontends.'
        : 'Designing modular, sustainable systems using Clean Architecture, Domain-Driven Design (DDD), SOLID principles, Microservices, and Micro Frontends.',
      items: ['Clean Architecture', 'Domain-Driven Design', 'Microserviços', 'Micro Frontends', 'Model-View-Controller'],
    },
    {
      id: 'devops',
      label: t.skills_devops,
      desc: isPt
        ? 'Ambientes conteinerizados com Docker, automação de pipelines CI/CD com Jenkins e Argo CD, gerenciamento de clusters via Rancher e observabilidade com Grafana.'
        : 'Containerized environments with Docker, CI/CD automation with Jenkins and Argo CD, cluster management with Rancher, and observability with Grafana.',
      items: ['Docker', 'CI/CD', 'Rancher', 'Jenkins', 'Argo CD', 'Grafana'],
    },
    {
      id: 'aws',
      label: t.skills_aws,
      desc: isPt
        ? 'Arquitetura e computação em nuvem na Amazon Web Services: VPCs, instâncias EC2, armazenamento em S3, funções serverless AWS Lambda, CDN CloudFront e integração com AWS SDK.'
        : 'Cloud architecture on AWS: VPCs, EC2 instances, S3 storage, serverless compute with AWS Lambda, CloudFront CDN, and AWS SDK integration.',
      items: ['VPC', 'EC2', 'S3', 'Lambda', 'CloudFront', 'SDK'],
    },
    {
      id: 'apis',
      label: t.skills_apis,
      desc: isPt
        ? 'Desenvolvimento e consumo de APIs RESTful, RPC de alto rendimento com gRPC, arquiteturas BFF (Backend for Frontend) e micro frameworks modernos como FastAPI e Flask.'
        : 'Development and consumption of RESTful APIs, high-performance RPC with gRPC, BFF (Backend for Frontend) architectures, and micro frameworks like FastAPI and Flask.',
      items: ['REST', 'gRPC', 'BFF', 'FastAPI', 'Flask'],
    },
    {
      id: 'styling',
      label: t.skills_styling,
      desc: isPt
        ? 'Implementação de interfaces consistentes, responsivas e sistemas de design com Angular Material, Styled-Components, Material UI, Tailwind CSS e Bootstrap.'
        : 'Consistent and responsive design systems with Angular Material, Styled-Components, Material UI, Tailwind CSS, and Bootstrap.',
      items: ['Angular Material', 'Styled-Components', 'Material UI', 'Bootstrap', 'Tailwind CSS'],
    },
    {
      id: 'testing',
      label: t.skills_testing,
      desc: isPt
        ? 'Garantia de qualidade contínua em todas as camadas da aplicação: testes unitários, testes de integração e end-to-end com Jest, Cypress e Selenium.'
        : 'Continuous quality assurance across application layers: unit, integration, and E2E testing with Jest, Cypress, and Selenium.',
      items: ['Jest', 'Selenium', 'Cypress'],
    },
    {
      id: 'messaging',
      label: t.skills_messaging,
      desc: isPt
        ? 'Comunicação assíncrona entre microsserviços orientada a eventos com mensageria RabbitMQ e fluxos em tempo real com SignalR.'
        : 'Asynchronous event-driven communication between microservices with RabbitMQ messaging and real-time bidirectional flows with SignalR.',
      items: ['RabbitMQ', 'SignalR'],
    },
    {
      id: 'versioning',
      label: t.skills_versioning,
      desc: isPt
        ? 'Controle de versão colaborativo no Git (GitHub e GitLab), documentação viva de especificações com OpenAPI/Swagger e documentação técnica com CompoDoc.'
        : 'Collaborative version control with Git (GitHub & GitLab), live specification documentation with OpenAPI/Swagger, and technical docs with CompoDoc.',
      items: ['Git', 'GitHub', 'GitLab', 'Swagger', 'CompoDoc'],
    },
    {
      id: 'agile',
      label: t.skills_agile,
      desc: isPt
        ? 'Fluxos ágeis com cerimônias Scrum e gestão visual em Kanban, pair programming, refinamento técnico e entregas iterativas contínuas.'
        : 'Agile workflows with Scrum ceremonies and visual Kanban management, pair programming, technical refinement, and iterative deliveries.',
      items: ['Scrum', 'Kanban', 'Pair Programming'],
    },
    {
      id: 'others',
      label: t.skills_others,
      desc: isPt
        ? 'Ferramentas de prototipação, análise e produtividade: Figma, auditoria técnica e SEO com Google Lighthouse, gestão de projetos no Jira/Trello/GitHub Projects e dashboards no Power BI.'
        : 'Prototyping, analytics, and productivity tools: Figma, technical audits with Google Lighthouse, project tracking with Jira/Trello/GitHub Projects, and Power BI dashboards.',
      items: ['HTML', 'CSS', 'Figma', 'Google Lighthouse', 'Trello', 'Jira', 'GitHub Projects', 'Power BI'],
    },
  ];

  const [active, setActive] = useState(groups[0].id);
  const current = groups.find((g) => g.id === active) || groups[0];

  const loadCredlyScript = () => {
    const oldScript = document.getElementById('credly-embed-script');
    if (oldScript) {
      oldScript.remove();
    }
    const script = document.createElement('script');
    script.id = 'credly-embed-script';
    script.src = '//cdn.credly.com/assets/utilities/embed.js';
    script.async = true;
    document.body.appendChild(script);
  };

  useEffect(() => {
    if (openCertModal) {
      const timer = setTimeout(() => {
        loadCredlyScript();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [openCertModal]);

  return (
    <div className="container">
      <div className="section-head reveal">
        <div>
          <span className="eyebrow">{u.skills_eyebrow}</span>
          <h2 className="section-title">
            {isPt ? 'Skills & Certificações' : 'Skills & Certifications'}
          </h2>
          <p style={{ marginTop: 8, maxWidth: 640 }}>
            {isPt
              ? 'Conheça minhas competências técnicas em desenvolvimento de software e certificações internacionais em tecnologia e IA.'
              : 'Explore my software engineering competencies and international certifications in tech and AI.'}
          </p>
        </div>
      </div>

      {/* 2 CARDS LADO A LADO RECOLHIDOS */}
      <div className="grid grid-2 hub-grid">
        {/* Card 1: Hard Skills */}
        <article
          id="hub-card-skills"
          className="glass spot clickable card hub-card reveal"
          onClick={() => setOpenSkillsModal(true)}
        >
          <div className="card-meta">
            <span className="chip mint">{isPt ? 'Competências' : 'Skills'}</span>
            <span className="hub-hint">{u.details}</span>
          </div>
          <h3 className="hub-card-title">{t.menu_skills}</h3>
          <p className="hub-card-preview">
            {isPt
              ? 'Front-end, Back-end, Inteligência Artificial & IA Assistida, Cloud AWS, Bancos de Dados, DevOps, Arquitetura e Engenharia de Software.'
              : 'Front-end, Back-end, Generative & Assisted AI, Cloud AWS, Databases, DevOps, Architecture, and Software Engineering.'}
          </p>
          <div className="tags" style={{ marginTop: 'auto', paddingTop: 14, marginBottom: 14 }}>
            <span className="tag">TypeScript</span>
            <span className="tag">React / Next.js</span>
            <span className="tag">Python / Django</span>
            <span className="tag">IA & Agentes</span>
            <span className="tag">AWS Cloud</span>
            <span className="tag">Docker</span>
          </div>
          <div className="card-foot hub-card-foot">
            <button
              type="button"
              className="btn btn-primary btn-sm hub-btn"
              onClick={(e) => {
                e.stopPropagation();
                setOpenSkillsModal(true);
              }}
            >
              {u.see_more} {Icon.arrow}
            </button>
          </div>
        </article>

        {/* Card 2: Certificações */}
        <article
          id="hub-card-certificados"
          className="glass spot clickable card hub-card reveal"
          onClick={() => setOpenCertModal(true)}
        >
          <div className="card-meta">
            <span className="chip mint">Google — Coursera</span>
            <span className="hub-hint">{u.details}</span>
          </div>
          <h3 className="hub-card-title">{u.certificates_title}</h3>
          <p className="hub-card-preview">
            {isPt
              ? 'Certificado Profissional Google AI composto por 7 cursos demonstrando fluência e aplicação prática de IA, engenharia de prompt e 8 badges oficiais via Credly.'
              : 'Google AI Professional Certificate composed of 7 courses covering practical AI, prompt engineering, and 8 official Credly badges.'}
          </p>
          <div className="tags cert-tags" style={{ marginTop: 'auto', paddingTop: 14, marginBottom: 14 }}>
            <span className="tag tag-course">Google AI Professional</span>
            <span className="tag tag-course">Prompt Engineering</span>
            <span className="tag tag-course">8 Badges Credly</span>
          </div>
          <div className="card-foot hub-card-foot">
            <button
              type="button"
              className="btn btn-primary btn-sm hub-btn"
              onClick={(e) => {
                e.stopPropagation();
                setOpenCertModal(true);
              }}
            >
              {u.see_more} {Icon.arrow}
            </button>
          </div>
        </article>
      </div>

      {/* MODAL 1: Hard Skills & Stacks Detalhadas */}
      <Modal
        open={openSkillsModal}
        onClose={() => setOpenSkillsModal(false)}
        label={isPt ? 'Hard Skills & Tecnologias' : 'Hard Skills & Tech Stack'}
        wide
      >
        <div className="modal-inner">
          <div className="cert-header" style={{ marginBottom: 12 }}>
            <span className="chip mint">{isPt ? 'Competências Técnicas' : 'Technical Skills'}</span>
            <span className="hub-hint">{groups.length} {isPt ? 'áreas mapeadas' : 'specialized areas'}</span>
          </div>

          <h2>{isPt ? 'Hard Skills & Ecossistema de Desenvolvimento' : 'Hard Skills & Development Ecosystem'}</h2>
          <p style={{ color: 'var(--muted)', marginBottom: 20 }}>
            {isPt
              ? 'Selecione uma área abaixo para visualizar a atuação, descrição e stacks de tecnologias correspondentes:'
              : 'Select an area below to view the scope, description, and corresponding tech stacks:'}
          </p>

          <div className="skill-tabs" role="tablist">
            {groups.map((g) => (
              <button
                key={g.id}
                id={`modal-skill-tab-${g.id}`}
                role="tab"
                aria-selected={active === g.id}
                className={`skill-tab ${active === g.id ? 'active' : ''}`}
                onClick={() => setActive(g.id)}
              >
                {g.label}
              </button>
            ))}
          </div>

          <div className="skill-panel" key={current.id} role="tabpanel" style={{ marginTop: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, flexWrap: 'wrap', gap: 8 }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, margin: 0, color: 'var(--text)' }}>
                {current.label}
              </h3>
              <span className="chip" style={{ fontSize: '0.78rem' }}>
                {current.items.length} {isPt ? 'competências' : 'skills'}
              </span>
            </div>

            <p style={{ fontSize: '0.94rem', color: 'var(--muted)', lineHeight: 1.6, marginBottom: 18 }}>
              {current.desc}
            </p>

            <div className="modal-label" style={{ marginBottom: 10 }}>
              {isPt ? 'Tecnologias, Ferramentas & Conceitos:' : 'Technologies, Tools & Concepts:'}
            </div>
            <div className="tags">
              {current.items.map((s) => (
                <span key={s} className="tag">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Modal>

      {/* MODAL 2: Certificações & Badges Oficiais */}
      <Modal
        open={openCertModal}
        onClose={() => setOpenCertModal(false)}
        label={isPt ? 'Certificações & Badges' : 'Certifications & Badges'}
        wide
      >
        <div className="modal-inner">
          <div className="cert-header">
            <span className="chip mint">Google — Coursera · 27/07/2026</span>
            <a
              className="btn btn-primary btn-sm"
              href="https://coursera.org/verify/professional-cert/FLXB2QI17CGK"
              target="_blank"
              rel="noreferrer"
              id="btn-verify-cert"
            >
              {Icon.external} {isPt ? 'Verificar no Coursera' : 'Verify on Coursera'}
            </a>
          </div>

          <h2>{isPt ? 'Certificado Profissional Google AI' : 'Google AI Professional Certificate'}</h2>

          <p>
            {isPt
              ? 'Certificado Profissional composto por 7 cursos demonstrando fluência e aplicação prática de IA em brainstorming, pesquisa, escrita, comunicação, criação de conteúdo, análise de dados e desenvolvimento de aplicações com IA.'
              : 'Professional Certificate consisting of 7 courses demonstrating fluency and practical application of AI in brainstorming, research, writing, communication, content creation, data analysis, and building AI apps.'}
          </p>

          <div className="divider" />

          <div className="modal-label">
            {isPt ? 'Cursos que compõem o programa:' : 'Courses included in the program:'}
          </div>
          <div className="tags cert-tags">
            {COURSES.map((c) => (
              <span key={c} className="tag tag-course">
                {c}
              </span>
            ))}
          </div>

          <div className="divider" style={{ marginTop: 8 }} />

          <div className="cert-badges-wrapper">
            <span className="cert-badges-label">
              {isPt ? 'Badges oficiais emitidas via Credly:' : 'Official badges issued via Credly:'}
            </span>
            <div className="badges cert-badges-inner">
              {BADGES.map((id) => (
                <div
                  key={id}
                  data-iframe-width="150"
                  data-iframe-height="270"
                  data-share-badge-id={id}
                  data-share-badge-host="https://www.credly.com"
                />
              ))}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
