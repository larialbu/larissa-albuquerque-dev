import type { TranslationSet } from '../../translations';

interface AcademicProjectsProps {
  t: TranslationSet;
  activeSection: string;
}

export function AcademicProjects({ t, activeSection }: AcademicProjectsProps) {
  return (
    <div id="academic_projects" className={`section ${activeSection === 'academic_projects' ? 'active' : ''}`}>
      <h1>{t.acad_proj_h1}</h1>

      <div className="acad-grid">
        <div className="card">
          <span className="date">ago 2024 – fev 2026</span>
          <span className="skill-category">{t.acad_proj_label_dev}</span>
          <strong>{t.acad_proj_petribu_title}</strong>
          <p style={{ marginTop: '12px', fontSize: '0.92rem', lineHeight: 1.65 }}>
            {t.acad_proj_petribu_desc}
          </p>
        </div>

        <div className="card">
          <span className="date">jan – dez 2025</span>
          <span className="skill-category">{t.acad_proj_label_manager}</span>
          <strong>{t.acad_proj_gp2_title}</strong>
          <p style={{ marginTop: '12px', fontSize: '0.92rem', lineHeight: 1.65 }}>
            {t.acad_proj_gp2_desc}
          </p>
        </div>

        <div className="card">
          <span className="date">fev 2022 – jun 2024</span>
          <strong>Residência Tecnológica com Porto Digital</strong>
          <p style={{ marginTop: '12px', fontSize: '0.92rem', lineHeight: 1.65 }}>
            Participação na Residência Onboard do Porto Digital, desenvolvendo projetos em parceria com empresas
            como Accenture, NTT Data e CMTech. Atuação em projetos práticos orientados por especialistas,
            aplicando conhecimentos adquiridos no programa Embarque Digital.
          </p>
        </div>

        <div className="card">
          <span className="date">nov 2022 – fev 2023</span>
          <span className="skill-category">Bolsista Desenvolvedora Front-end</span>
          <strong>SiDI (PET-Projeto de extensão tecnológica)</strong>
          <p style={{ marginTop: '12px', fontSize: '0.92rem', lineHeight: 1.65 }}>
            Criação de um chatbot inteligente para o departamento de RH, utilizando Rasa como motor
            conversacional, Docker para containerização e AWS para hospedagem. Integração com Python (Lambdas e
            APIs) e Power BI para análise de candidatos.
          </p>
        </div>
      </div>
    </div>
  );
}
