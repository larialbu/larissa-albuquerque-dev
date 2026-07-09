import type { TranslationSet } from '../../translations';
import { Button } from '../atoms/Button';

interface AcademicoProps {
  t: TranslationSet;
  activeSection: string;
}

export function Academico({ t, activeSection }: AcademicoProps) {
  return (
    <div id="academico" className={`section ${activeSection === 'academico' ? 'active' : ''}`}>
      <h1>{t.acad_h1}</h1>

      <div className="acad-grid">
        {/* Mestrado */}
        <div className="acad-card card">
          <div className="acad-card-top">
            <div className="acad-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
              </svg>
            </div>
            <span className="acad-status acad-status--active">
              {t.acad_mestrado_status.includes('andamento') || t.acad_mestrado_status.includes('progress')
                ? (t.acad_h1 === 'Histórico Acadêmico' ? 'Em andamento' : 'In progress')
                : ''}
            </span>
          </div>

          <h3 className="acad-title">{t.acad_mestrado_title}</h3>
          <span className="acad-institution">Centro de Informática (CIn) — UFPE</span>
          <span className="acad-period">2024.2 – 2026.2</span>

          <div className="acad-tags">
            <span className="timeline-tag">Ciências da Computação</span>
            <span className="timeline-tag">Dissertação</span>
            <span className="timeline-tag">Pesquisa</span>
          </div>

          <div className="acad-action">
            <Button style={{ padding: '8px 16px', fontSize: '0.85rem', opacity: 0.5, cursor: 'default' }}>
              {t.acad_mestrado_btn}
            </Button>
          </div>
        </div>

        {/* Tecnólogo */}
        <div className="acad-card card">
          <div className="acad-card-top">
            <div className="acad-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>
            <span className="acad-status acad-status--done">
              {t.acad_h1 === 'Histórico Acadêmico' ? 'Concluído' : 'Completed'}
            </span>
          </div>

          <h3 className="acad-title">{t.acad_tecnologo_title}</h3>
          <span className="acad-institution">Universidade Católica de Pernambuco — UNICAP</span>
          <span className="acad-period">2022.1 – 2024.1</span>

          <div className="acad-tags">
            <span className="timeline-tag">Sistemas para Internet</span>
            <span className="timeline-tag">TCC</span>
            <span className="timeline-tag">Full Stack</span>
          </div>

          <div className="acad-action">
            <a href="https://github.com/orgs/SIN-disciplina-PI5/teams/2024-1-unicapevents" target="_blank"
              style={{ textDecoration: 'none' }} rel="noreferrer">
              <Button style={{ padding: '8px 16px', fontSize: '0.85rem' }}>
                {t.acad_tcc_btn}
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Link Lattes */}
      <div className="acad-lattes">
        <a href="http://lattes.cnpq.br/7448823611009423" target="_blank" style={{ textDecoration: 'none' }} rel="noreferrer">
          <Button style={{ padding: '10px 20px', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            {t.acad_lattes_btn}
          </Button>
        </a>
      </div>
    </div>
  );
}
