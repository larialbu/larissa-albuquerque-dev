import { useState } from 'react';
import type { TranslationSet } from '../../translations';
import type { UI } from '../../ui';
import profileImg from '../../assets/larissa.jpeg';
import { Icon } from '../atoms/Icons';
import { Modal } from '../organisms/Modal';
import { socials } from '../../data/socials';

interface SobreProps {
  t: TranslationSet;
  u: UI;
}

const CV_PT =
  'https://www.canva.com/design/DAGtzKKKOHA/DyqCD413aeZ1-S3ExEe-7w/view?utm_content=DAGtzKKKOHA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hfc2496ac09';

// Idade dinâmica (nascida em 11/01/2005)
function calculateAge() {
  const birth = new Date(2005, 0, 11);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
  return age;
}

export function Sobre({ t, u }: SobreProps) {
  const [open, setOpen] = useState(false);
  const age = calculateAge().toString();
  const summary = t.summary_content.replace('{age}', age);
  const heroIntro = t.summary_short.replace('{age}', age);

  return (
    <header id="sobre" className="hero">
      <div className="container hero-grid">
        <div className="reveal">
          <span className="hero-hello">
            <span className="pulse" />
            {u.hello}
          </span>
          <h1 className="hero-name">
            Larissa Albuquerque
            <span className="hero-role">{t.hero_title}</span>
          </h1>
          <p className="hero-tagline mono">IA Generativa · AI Agents · RAG · MCP · Full Stack</p>
          <p className="hero-intro" dangerouslySetInnerHTML={{ __html: heroIntro }} />

          <div className="hero-actions">
            <button className="btn btn-primary" onClick={() => setOpen(true)} id="btn-open-summary">
              {u.read_more} {Icon.arrow}
            </button>
            <a className="btn btn-ghost" href={CV_PT} target="_blank" rel="noreferrer" id="btn-cv-pt">
              {Icon.download} {t.cv_button_pt}
            </a>
            <span className="btn btn-ghost is-disabled" id="btn-cv-en">
              {Icon.download} {t.cv_button_en}
            </span>
          </div>

          <div className="socials">
            {socials.map((s) => (
              <a key={s.id} id={`social-${s.id}`} className="social" href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} title={s.label}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="hero-visual reveal">
          <div className="photo-frame">
            <img src={profileImg} alt="Larissa Albuquerque" />
          </div>
          <div className="hero-stats">
            <div className="stat-chip float-chip chip-exp">
              <strong className="grad-text">{t.stat_exp_val}</strong>
              <span>{t.stat_exp_title}</span>
            </div>
            <div className="stat-chip float-chip chip-comm">
              <strong>{t.stat_comm_val}</strong>
              <span>{t.stat_comm_title}</span>
            </div>
            <div className="stat-chip float-chip chip-acad">
              <strong>{t.stat_acad_title}</strong>
              <span>{t.stat_acad_val}</span>
            </div>
          </div>
        </div>
      </div>
      <span className="scroll-hint" aria-label={u.scroll} />

      <Modal open={open} onClose={() => setOpen(false)} label={t.summary_label}>
        <div className="modal-inner">
          <span className="chip">{t.summary_label}</span>
          <h2>Larissa Albuquerque</h2>
          <p dangerouslySetInnerHTML={{ __html: summary }} />
        </div>
      </Modal>
    </header>
  );
}
