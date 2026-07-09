import type { TranslationSet } from '../../translations';
import { SkillTag } from '../atoms/SkillTag';

interface HardSkillsProps {
  t: TranslationSet;
  activeSection: string;
}

export function HardSkills({ t, activeSection }: HardSkillsProps) {
  return (
    <div id="skills" className={`section ${activeSection === 'skills' ? 'active' : ''}`}>
      <h1>{t.menu_skills}</h1>

      <div className="skills-grid">
        {/* Front-end */}
        <div className="card skill-card">
          <div className="skill-card-header">
            <svg className="skill-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
            <span className="skill-category">{t.skills_frontend}</span>
          </div>
          <div className="skill-tag-container">
            <SkillTag name="TypeScript" />
            <SkillTag name="React" />
            <SkillTag name="Next.js" />
            <SkillTag name="Angular" />
            <SkillTag name="Vue.js" />
          </div>
        </div>

        {/* Back-end */}
        <div className="card skill-card">
          <div className="skill-card-header">
            <svg className="skill-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
              <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
              <line x1="6" y1="6" x2="6.01" y2="6" />
              <line x1="6" y1="18" x2="6.01" y2="18" />
              <line x1="10" y1="6" x2="14" y2="6" />
              <line x1="10" y1="18" x2="14" y2="18" />
            </svg>
            <span className="skill-category">{t.skills_backend}</span>
          </div>
          <div className="skill-tag-container">
            <SkillTag name="Django" />
            <SkillTag name="Python" />
            <SkillTag name="TypeScript" />
            <SkillTag name="NestJS" />
            <SkillTag name="Node.js" />
          </div>
        </div>

        {/* Bancos de Dados */}
        <div className="card skill-card">
          <div className="skill-card-header">
            <svg className="skill-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <ellipse cx="12" cy="5" rx="9" ry="3" />
              <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
              <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
            </svg>
            <span className="skill-category">{t.skills_databases}</span>
          </div>
          <div className="skill-tag-container">
            <SkillTag name="PostgreSQL" />
            <SkillTag name="SQL Server" />
            <SkillTag name="MySQL" />
            <SkillTag name="SQLite" />
          </div>
        </div>

        {/* Versionamento & Doc */}
        <div className="card skill-card">
          <div className="skill-card-header">
            <svg className="skill-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" />
              <path d="M14 2v4a2 2 0 0 0 2 2h4" />
              <path d="M10 9H8" />
              <path d="M16 13H8" />
              <path d="M16 17H8" />
            </svg>
            <span className="skill-category">{t.skills_versioning}</span>
          </div>
          <div className="skill-tag-container">
            <SkillTag name="Git" />
            <SkillTag name="GitHub" />
            <SkillTag name="GitLab" />
            <SkillTag name="Swagger" />
            <SkillTag name="CompoDoc" />
          </div>
        </div>

        {/* Estilização */}
        <div className="card skill-card">
          <div className="skill-card-header">
            <svg className="skill-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
              <path d="M7.5 10.5C8.32843 10.5 9 9.82843 9 9C9 8.17157 8.32843 7.5 7.5 7.5C6.67157 7.5 6 8.17157 6 9C6 9.82843 6.67157 10.5 7.5 10.5Z" />
              <path d="M11.5 7.5C12.3284 7.5 13 6.82843 13 6C13 5.17157 12.3284 4.5 11.5 4.5C10.6716 4.5 10 5.17157 10 6C10 6.82843 10.6716 7.5 11.5 7.5Z" />
              <path d="M16.5 9.5C17.3284 9.5 18 8.82843 18 8C18 7.17157 17.3284 6.5 16.5 6.5C15.6716 6.5 15 7.17157 15 8C15 8.82843 15.6716 9.5 16.5 9.5Z" />
              <path d="M6 15C6 15 7.5 17 12 17C16.5 17 18 15 18 15" />
            </svg>
            <span className="skill-category">{t.skills_styling}</span>
          </div>
          <div className="skill-tag-container">
            <SkillTag name="Angular Material" />
            <SkillTag name="Styled-Components" />
            <SkillTag name="Material UI" />
            <SkillTag name="Bootstrap" />
            <SkillTag name="Tailwind CSS" />
          </div>
        </div>

        {/* Metodologias Ágeis */}
        <div className="card skill-card">
          <div className="skill-card-header">
            <svg className="skill-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M9 3v18" />
              <path d="M15 3v18" />
              <path d="M3 9h18" />
            </svg>
            <span className="skill-category">{t.skills_agile}</span>
          </div>
          <div className="skill-tag-container">
            <SkillTag name="Scrum" />
            <SkillTag name="Kanban" />
            <SkillTag name="Pair Programming" />
          </div>
        </div>

        {/* AWS */}
        <div className="card skill-card">
          <div className="skill-card-header">
            <svg className="skill-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
            </svg>
            <span className="skill-category">{t.skills_aws}</span>
          </div>
          <div className="skill-tag-container">
            <SkillTag name="VPC" />
            <SkillTag name="EC2" />
            <SkillTag name="S3" />
            <SkillTag name="Lambda" />
            <SkillTag name="CloudFront" />
            <SkillTag name="SDK" />
          </div>
        </div>

        {/* Arquitetura */}
        <div className="card skill-card">
          <div className="skill-card-header">
            <svg className="skill-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
            <span className="skill-category">{t.skills_arch}</span>
          </div>
          <div className="skill-tag-container">
            <SkillTag name="Clean Architecture" />
            <SkillTag name="Domain-Driven Design" />
            <SkillTag name="Microserviços" />
            <SkillTag name="Micro Frontends" />
            <SkillTag name="Model-View-Controller" />
          </div>
        </div>

        {/* DevOps e Infra */}
        <div className="card skill-card">
          <div className="skill-card-header">
            <svg className="skill-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 12A10 10 0 0 0 12 2v10z" />
              <path d="M12 22A10 10 0 1 0 22 12H12z" />
            </svg>
            <span className="skill-category">{t.skills_devops}</span>
          </div>
          <div className="skill-tag-container">
            <SkillTag name="Docker" />
            <SkillTag name="CI/CD" />
            <SkillTag name="Rancher" />
            <SkillTag name="Jenkins" />
            <SkillTag name="Argo CD" />
            <SkillTag name="Grafana" />
          </div>
        </div>

        {/* Mensageria */}
        <div className="card skill-card">
          <div className="skill-card-header">
            <svg className="skill-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <path d="M22 6l-10 7L2 6" />
            </svg>
            <span className="skill-category">{t.skills_messaging}</span>
          </div>
          <div className="skill-tag-container">
            <SkillTag name="RabbitMQ" />
            <SkillTag name="SignalR" />
          </div>
        </div>

        {/* Testes */}
        <div className="card skill-card">
          <div className="skill-card-header">
            <svg className="skill-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="M9 11l2 2 4-4" />
            </svg>
            <span className="skill-category">{t.skills_testing}</span>
          </div>
          <div className="skill-tag-container">
            <SkillTag name="Jest" />
            <SkillTag name="Selenium" />
            <SkillTag name="Cypress" />
          </div>
        </div>

        {/* APIs */}
        <div className="card skill-card">
          <div className="skill-card-header">
            <svg className="skill-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
            </svg>
            <span className="skill-category">{t.skills_apis}</span>
          </div>
          <div className="skill-tag-container">
            <SkillTag name="REST" />
            <SkillTag name="gRPC" />
            <SkillTag name="BFF" />
            <SkillTag name="FastAPI" />
            <SkillTag name="Flask" />
          </div>
        </div>

        {/* IA */}
        <div className="card skill-card">
          <div className="skill-card-header">
            <svg className="skill-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2a3 3 0 0 0-3 3v2a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
              <path d="M19 11a7 7 0 0 1-14 0" />
              <line x1="12" y1="18" x2="12" y2="22" />
            </svg>
            <span className="skill-category">{t.skills_ia}</span>
          </div>
          <div className="skill-tag-container">
            <SkillTag name="ChatGPT" />
            <SkillTag name="Claude" />
            <SkillTag name="Gemini" />
            <SkillTag name="GitHub Copilot" />
            <SkillTag name="Cursor AI" />
            <SkillTag name="Windsurf" />
            <SkillTag name="Prompt Engineering" />
            <SkillTag name="AI-Assisted Development" />
            <SkillTag name="AI Pair Programming" />
            <SkillTag name="AI Code Review" />
            <SkillTag name="AI Software Architecture" />
            <SkillTag name="Agentes de IA" />
            <SkillTag name="Multi-Agent Systems" />
            <SkillTag name="Skills" />
            <SkillTag name="MCP" />
            <SkillTag name="Function Calling" />
            <SkillTag name="RAG" />
            <SkillTag name="AI Workflows" />
          </div>
        </div>

        {/* Outros */}
        <div className="card skill-card">
          <div className="skill-card-header">
            <svg className="skill-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M8 12h8" />
              <path d="M12 8v8" />
            </svg>
            <span className="skill-category">{t.skills_others}</span>
          </div>
          <div className="skill-tag-container">
            <SkillTag name="HTML" />
            <SkillTag name="CSS" />
            <SkillTag name="Figma" />
            <SkillTag name="Google Lighthouse" />
            <SkillTag name="Trello" />
            <SkillTag name="Jira" />
            <SkillTag name="GitHub Projects" />
            <SkillTag name="Power BI" />
          </div>
        </div>
      </div>
    </div>
  );
}
