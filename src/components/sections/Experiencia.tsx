import type { TranslationSet } from '../../translations';
import type { UI, Lang } from '../../ui';

interface ExperienciaProps {
  t: TranslationSet;
  u: UI;
  lang?: Lang;
}

export function Experiencia({ t, u, lang = 'pt' }: ExperienciaProps) {
  const isPt = lang === 'pt';

  const items = [
    {
      id: 'bbts',
      date: isPt ? 'junho 2026 até o momento' : 'June 2026 to Present',
      current: true,
      company: 'Banco do Brasil Tecnologia e Serviços BBTS (Via Digisystem)',
      role: t.exp_bbts_role,
      desc: t.exp_bbts_desc,
      tags: ['AI Agents', 'RAG', 'MCP', 'Skills', 'NestJS', 'React', 'TypeScript'],
    },
    {
      id: 'senac',
      date: isPt ? 'janeiro 2026 a junho 2026' : 'January 2026 to June 2026',
      current: false,
      company: 'SENAC PERNAMBUCO (MédioTec Senac)',
      role: t.exp_senac_role,
      desc: t.exp_senac_desc,
      tags: ['Docência Tech', 'Node.js', 'React', 'SQL', 'Git', 'Didática'],
    },
    {
      id: 'bb-ntt',
      date: isPt ? 'janeiro 2026 a junho 2026' : 'January 2026 to June 2026',
      current: false,
      company: 'Banco do Brasil (Via NTT DATA)',
      role: t.exp_bb_role,
      desc: t.exp_bb_desc,
      tags: ['Angular', 'Micro Frontends', 'NestJS', 'Jenkins', 'Argo', 'CI/CD', 'DevRel'],
    },
    {
      id: 'bb-qintess',
      date: isPt ? 'julho 2025 a dezembro 2025' : 'July 2025 to December 2025',
      current: false,
      company: 'Banco do Brasil (Via Qintess)',
      role: isPt ? 'Desenvolvedora FULL STACK (Pleno)' : 'Full Stack Developer (Mid Level)',
      desc: t.exp_bb_qintess_desc,
      tags: ['Angular', 'TypeScript', 'APIs REST', 'SQL', 'Fintech'],
    },
    {
      id: 'fcx',
      date: isPt ? 'dezembro 2024 a julho 2025' : 'December 2024 to July 2025',
      current: false,
      company: 'FCx Labs (Ferreira Costa)',
      role: isPt ? 'Desenvolvedora FULL STACK (Pleno)' : 'Full Stack Developer (Mid Level)',
      desc: t.exp_fcx_desc,
      tags: ['React', 'Next.js', 'NestJS', 'Micro Frontends', 'E-commerce'],
    },
    {
      id: 'bsa',
      date: isPt ? 'agosto 2023 a dezembro 2024' : 'August 2023 to December 2024',
      current: false,
      company: 'BSA Tech (Opa Games)',
      role: isPt ? 'Desenvolvedora FULL STACK (Junior)' : 'Full Stack Developer (Junior)',
      desc: t.exp_bsa_desc,
      tags: ['Next.js', 'Django', 'Python', 'WebSockets', 'Dashboards'],
    },
    {
      id: 'cmtech',
      date: isPt ? 'janeiro 2023 a julho 2023' : 'January 2023 to July 2023',
      current: false,
      company: 'CMTech',
      role: t.exp_cmtech_role,
      desc: t.exp_cmtech_desc,
      tags: ['ReactJS', 'SignalR', '.NET Core', 'PostgreSQL', 'MUI'],
    },
  ];

  return (
    <section id="experiencia" className="section" style={{ paddingTop: 20 }}>
      <div className="container">
        <div className="section-head reveal in">
          <div>
            <span className="eyebrow">{u.experience_eyebrow}</span>
            <h2 className="section-title">{t.exp_h1}</h2>
            <p style={{ marginTop: 8, maxWidth: 660 }}>
              {isPt
                ? 'Trajetória completa com 7 empresas de grande porte, liderança técnica, inteligência artificial e atuação Full Stack.'
                : 'Complete career timeline across 7 prominent companies, technical leadership, artificial intelligence, and Full Stack engineering.'}
            </p>
          </div>
        </div>

        {/* Linha do Tempo Aberta e Elegante (Conforme solicitado) */}
        <div className="career-timeline modal-timeline reveal in">
          {items.map((it) => (
            <div
              key={it.id}
              className={`career-timeline-item modal-timeline-item ${it.current ? 'current' : ''}`}
            >
              <div className="career-timeline-dot modal-timeline-dot" />
              <div className="career-timeline-content modal-timeline-content">
                <div className="career-timeline-header modal-timeline-header">
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                    <span className={`chip ${it.current ? 'mint' : ''}`}>
                      {it.current ? '● ' : ''}
                      {it.date}
                    </span>
                    {it.current && (
                      <span className="timeline-badge-current">
                        {isPt ? 'Posição Atual' : 'Current Role'}
                      </span>
                    )}
                  </div>
                  <h3 className="career-item-title modal-item-title">{it.company}</h3>
                  <span className="career-item-role modal-item-role">{it.role}</span>
                </div>
                <div
                  className="career-item-desc modal-item-desc"
                  dangerouslySetInnerHTML={{ __html: it.desc }}
                />
                {it.tags && it.tags.length > 0 && (
                  <div className="tags career-tags" style={{ marginTop: 14 }}>
                    {it.tags.map((tg) => (
                      <span key={tg} className="tag tag-sm">
                        {tg}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
