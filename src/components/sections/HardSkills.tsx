import { useState } from 'react';
import type { TranslationSet } from '../../translations';
import type { UI } from '../../ui';

interface HardSkillsProps {
  t: TranslationSet;
  u: UI;
}

export function HardSkills({ t, u }: HardSkillsProps) {
  const groups = [
    { id: 'frontend', label: t.skills_frontend, items: ['TypeScript', 'React', 'Next.js', 'Angular', 'Vue.js'] },
    { id: 'backend', label: t.skills_backend, items: ['Django', 'Python', 'TypeScript', 'NestJS', 'Node.js'] },
    { id: 'ia', label: t.skills_ia, items: ['ChatGPT', 'Claude', 'Gemini', 'GitHub Copilot', 'Cursor AI', 'Windsurf', 'Prompt Engineering', 'AI-Assisted Development', 'AI Pair Programming', 'AI Code Review', 'AI Software Architecture', 'Agentes de IA', 'Multi-Agent Systems', 'Skills', 'MCP', 'Function Calling', 'RAG', 'AI Workflows'] },
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

  const [active, setActive] = useState(groups[0].id);
  const current = groups.find((g) => g.id === active)!;

  return (
    <div className="container">
      <div className="section-head reveal">
        <div>
          <span className="eyebrow">{u.skills_eyebrow}</span>
          <h2 className="section-title">{t.menu_skills}</h2>
        </div>
      </div>

      <div className="glass skills-box reveal">
        <div className="skill-tabs" role="tablist">
          {groups.map((g) => (
            <button
              key={g.id}
              id={`skill-tab-${g.id}`}
              role="tab"
              aria-selected={active === g.id}
              className={`skill-tab ${active === g.id ? 'active' : ''}`}
              onClick={() => setActive(g.id)}
            >
              {g.label}
            </button>
          ))}
        </div>
        <div className="tags skill-panel" key={current.id} role="tabpanel">
          {current.items.map((s) => <span key={s} className="tag">{s}</span>)}
        </div>
      </div>
    </div>
  );
}
