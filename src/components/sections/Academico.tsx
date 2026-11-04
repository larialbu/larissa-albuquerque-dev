import { useState } from 'react';
import type { TranslationSet } from '../../translations';
import type { UI } from '../../ui';
import { Icon } from '../atoms/Icons';
import { Modal } from '../organisms/Modal';

interface AcademicoProps {
  t: TranslationSet;
  u: UI;
  lang: 'pt' | 'en';
}

export function Academico({ t, u, lang }: AcademicoProps) {
  const [openId, setOpenId] = useState<string | null>(null);
  const isPt = lang === 'pt';

  const projects = [
    { id: 'petribu', date: 'ago 2024 – fev 2026', role: t.acad_proj_label_dev, title: t.acad_proj_petribu_title, desc: t.acad_proj_petribu_desc },
    { id: 'gp2', date: 'jan – dez 2025', role: t.acad_proj_label_manager, title: t.acad_proj_gp2_title, desc: t.acad_proj_gp2_desc },
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

  const selected = projects.find((p) => p.id === openId);

  return (
    <section id="formacao" className="section">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <span className="eyebrow">{u.education_eyebrow}</span>
            <h2 className="section-title">{t.acad_h1}</h2>
          </div>
          <a className="btn btn-ghost btn-sm" href="http://lattes.cnpq.br/7448823611009423" target="_blank" rel="noreferrer" id="btn-lattes">
            {Icon.external} {t.acad_lattes_btn}
          </a>
        </div>

        <div className="grid grid-2">
          <article className="glass spot card reveal">
            <div className="card-meta">
              <span className="icon-badge">{Icon.cap}</span>
              <span className="chip mint">● {isPt ? 'Em andamento' : 'In progress'}</span>
            </div>
            <h3>{t.acad_mestrado_title}</h3>
            <span className="mono" style={{ color: 'var(--faint)' }}>Centro de Informática (CIn) — UFPE · 2024.2 – 2026.2</span>
            <p style={{ fontSize: '.92rem' }}>{t.acad_mestrado_research}</p>
            <div className="tags">
              {['Engenharia de Software', 'Inteligência Artificial', 'Maturidade de Projetos', 'CIn-UFPE'].map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
            <div className="card-foot">
              <span className="btn btn-ghost btn-sm is-disabled">{t.acad_mestrado_btn}</span>
            </div>
          </article>

          <article className="glass spot card reveal">
            <div className="card-meta">
              <span className="icon-badge">{Icon.monitor}</span>
              <span className="chip">{isPt ? 'Concluído' : 'Completed'}</span>
            </div>
            <h3>{t.acad_tecnologo_title}</h3>
            <span className="mono" style={{ color: 'var(--faint)' }}>Universidade Católica de Pernambuco — UNICAP · 2022.1 – 2024.1</span>
            <p style={{ fontSize: '.92rem' }}>{t.acad_tecnologo_embarque}</p>
            <div className="tags">
              {['Embarque Digital', 'Porto Digital', 'Sistemas para Internet', 'Full Stack'].map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
            <div className="card-foot">
              <a className="btn btn-ghost btn-sm" href="https://github.com/orgs/SIN-disciplina-PI5/teams/2024-1-unicapevents" target="_blank" rel="noreferrer" id="btn-tcc">
                {Icon.external} {t.acad_tcc_btn}
              </a>
            </div>
          </article>
        </div>

        <h3 className="sub-title reveal">{t.acad_proj_h1}</h3>
        <div className="grid grid-2">
          {projects.map((p) => (
            <button key={p.id} id={`acad-${p.id}`} className="glass spot clickable card reveal" onClick={() => setOpenId(p.id)}>
              <div className="card-meta">
                <span className="chip peach">{p.role}</span>
                <span className="mono" style={{ color: 'var(--faint)' }}>{p.date}</span>
              </div>
              <h3>{p.title}</h3>
              <p className="clamp">{p.desc}</p>
              <span className="more">{u.details} {Icon.arrow}</span>
            </button>
          ))}
        </div>
      </div>

      <Modal open={!!selected} onClose={() => setOpenId(null)} label={selected?.title}>
        {selected && (
          <div className="modal-inner">
            <span className="chip peach">{selected.role}</span>
            <h2>{selected.title}</h2>
            <span className="mono" style={{ color: 'var(--faint)' }}>{selected.date}</span>
            <div className="divider" />
            <p>{selected.desc}</p>
          </div>
        )}
      </Modal>
    </section>
  );
}
