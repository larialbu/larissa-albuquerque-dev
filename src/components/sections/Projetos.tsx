import { useState } from 'react';
import type { TranslationSet } from '../../translations';
import type { UI } from '../../ui';
import { Icon } from '../atoms/Icons';
import { Modal } from '../organisms/Modal';

interface ProjetosProps {
  t: TranslationSet;
  u: UI;
}

export function Projetos({ t, u }: ProjetosProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const items = [
    { id: 'google', category: t.label_community, title: t.proj_google_title, desc: t.proj_google_desc, impactTitle: t.proj_google_impact, impact: [t.proj_google_impact_1, t.proj_google_impact_2, t.proj_google_impact_3] },
    { id: 'hostgator', category: t.label_community, title: t.proj_hostgator_title, desc: t.proj_hostgator_desc, impactTitle: t.proj_hostgator_impact, impact: [t.proj_hostgator_impact_1, t.proj_hostgator_impact_2, t.proj_hostgator_impact_3] },
    { id: 'alura', category: t.label_community, title: t.proj_alura_title, desc: t.proj_alura_desc, impactTitle: t.proj_alura_impact, impact: [t.proj_alura_impact_1, t.proj_alura_impact_2, 'Participação ativa em fóruns e eventos.'] },
    { id: 'rfec', category: t.label_leadership, title: t.proj_rfec_title, desc: t.proj_rfec_desc, impactTitle: t.proj_rfec_impact, impact: [t.proj_rfec_impact_1, t.proj_rfec_impact_2, 'Parcerias com empresas locais.'] },
    { id: 'mentoria', category: t.label_mentorship, title: t.proj_mentoria_title, desc: t.proj_mentoria_desc, impactTitle: t.proj_mentoria_impact, impact: [t.proj_mentoria_impact_1, t.proj_mentoria_impact_2, 'Apresentações e palestras sobre Front-end, IA e Carreira Tech'] },
    { id: 'hackathons', category: t.label_hackathons, title: t.proj_hackathons_title, desc: t.proj_hackathons_desc, impactTitle: t.proj_hackathons_impact, impact: [t.proj_hackathons_impact_1, t.proj_hackathons_impact_2, t.proj_hackathons_impact_3] },
  ];

  const selected = items.find((i) => i.id === openId);

  return (
    <section id="participacao" className="section">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <span className="eyebrow">{u.community_eyebrow}</span>
            <h2 className="section-title">{t.proj_h1}</h2>
          </div>
        </div>

        <div className="grid grid-3">
          {items.map((it) => (
            <button key={it.id} id={`proj-${it.id}`} className="glass spot clickable card reveal" onClick={() => setOpenId(it.id)}>
              <span className="chip" style={{ alignSelf: 'flex-start' }}>{it.category}</span>
              <h3>{it.title}</h3>
              <p className="clamp">{it.desc}</p>
              <span className="more" style={{ marginTop: 'auto' }}>{u.details} {Icon.arrow}</span>
            </button>
          ))}
        </div>
      </div>

      <Modal open={!!selected} onClose={() => setOpenId(null)} label={selected?.title}>
        {selected && (
          <div className="modal-inner">
            <span className="chip" style={{ alignSelf: 'flex-start' }}>{selected.category}</span>
            <h2>{selected.title}</h2>
            <p>{selected.desc}</p>
            <span className="modal-label">{selected.impactTitle}</span>
            <ul className="modal-list">
              {selected.impact.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </div>
        )}
      </Modal>
    </section>
  );
}
