import { useState } from 'react';
import type { TranslationSet } from '../../translations';
import type { UI } from '../../ui';
import { Icon } from '../atoms/Icons';
import { Modal } from '../organisms/Modal';

interface ExperienciaProps {
  t: TranslationSet;
  u: UI;
}

export function Experiencia({ t, u }: ExperienciaProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const items = [
    { id: 'bbts', date: 'junho 2026 - o momento', current: true, company: 'Banco do Brasil Tecnologia e Serviços - BBTS (Via Digisystem)', role: t.exp_bbts_role, desc: t.exp_bbts_desc },
    { id: 'senac', date: 'janeiro 2026 - junho 2026', current: false, company: 'SENAC PERNAMBUCO (MédioTec Senac)', role: t.exp_senac_role, desc: t.exp_senac_desc },
    { id: 'bb-ntt', date: 'janeiro 2026 - junho 2026', company: 'Banco do Brasil (Via NTT DATA)', role: t.exp_bb_role, desc: t.exp_bb_desc },
    { id: 'bb-qintess', date: 'julho 2025 - dezembro 2025', company: 'Banco do Brasil (Via Qintess)', role: 'Desenvolvedora FULL STACK - Pleno', desc: t.exp_bb_qintess_desc },
    { id: 'fcx', date: 'dezembro 2024 - julho 2025', company: 'FCx Labs (Ferreira Costa)', role: 'Desenvolvedora FULL STACK - Pleno', desc: t.exp_fcx_desc },
    { id: 'bsa', date: 'agosto 2023 - dezembro 2024', company: 'BSA Tech (Opa Games)', role: 'Desenvolvedora FULL STACK - Junior', desc: t.exp_bsa_desc },
    { id: 'cmtech', date: 'janeiro 2023 - julho 2023', company: 'CMTech', role: t.exp_cmtech_role, desc: t.exp_cmtech_desc },
  ];

  const selected = items.find((i) => i.id === openId);

  return (
    <section id="experiencia" className="section">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <span className="eyebrow">{u.experience_eyebrow}</span>
            <h2 className="section-title">{t.exp_h1}</h2>
          </div>
        </div>

        <div className="xp-list">
          {items.map((it) => (
            <button
              key={it.id}
              id={`xp-${it.id}`}
              className={`glass spot clickable xp-row reveal ${it.current ? 'current' : ''}`}
              onClick={() => setOpenId(it.id)}
            >
              <span className="xp-date mono">{it.current ? '● ' : ''}{it.date}</span>
              <span>
                <span className="xp-company">{it.company}</span>
                <br />
                <span className="xp-role">{it.role}</span>
              </span>
              <span className="plus">{Icon.plus}</span>
            </button>
          ))}
        </div>
      </div>

      <Modal open={!!selected} onClose={() => setOpenId(null)} label={selected?.company}>
        {selected && (
          <div className="modal-inner">
            <span className={`chip ${selected.current ? 'mint' : ''}`}>{selected.date}</span>
            <h2>{selected.company}</h2>
            <span className="grad-text" style={{ fontWeight: 600 }}>{selected.role}</span>
            <div className="divider" />
            <p dangerouslySetInnerHTML={{ __html: selected.desc }} />
          </div>
        )}
      </Modal>
    </section>
  );
}
