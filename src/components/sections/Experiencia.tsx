import type { TranslationSet } from '../../translations';
import { TimelineItem } from '../molecules/TimelineItem';

interface ExperienciaProps {
  t: TranslationSet;
  activeSection: string;
}

export function Experiencia({ t, activeSection }: ExperienciaProps) {
  return (
    <div id="experiencia" className={`section ${activeSection === 'experiencia' ? 'active' : ''}`}>
      <h1>{t.exp_h1}</h1>

      <div className="timeline">
        <TimelineItem
          date="junho 2026 - o momento"
          title="Banco Do Brasil Tecnologia & Seguros (Via Digisystem)"
          subtitle={t.exp_bbts_role}
          descriptionHtml={t.exp_bbts_desc}
        />

        <TimelineItem
          date="janeiro 2026 - junho 2026"
          title="Banco do Brasil (Via NTT DATA)"
          subtitle={t.exp_bb_role}
          descriptionHtml={t.exp_bb_desc}
        />

        <TimelineItem
          date="janeiro 2026 - junho 2026"
          title="SENAC PERNAMBUCO"
          subtitle={t.exp_senac_role}
          descriptionHtml={t.exp_senac_desc}
        />

        <TimelineItem
          date="julho 2025 - dezembro 2025"
          title="Banco do Brasil (Via Qintess)"
          subtitle="Desenvolvedora FULL STACK - Pleno"
          descriptionHtml={t.exp_bb_qintess_desc}
        />

        <TimelineItem
          date="dezembro 2024 - julho 2025"
          title="FCx Labs (Ferreira Costa)"
          subtitle="Desenvolvedora FULL STACK - Pleno"
          descriptionHtml={t.exp_fcx_desc}
        />

        <TimelineItem
          date="agosto 2023 - dezembro 2024"
          title="BSA Tech (Opa Games)"
          subtitle="Desenvolvedora FULL STACK - Junior"
          descriptionHtml={t.exp_bsa_desc}
        />

        <TimelineItem
          date="janeiro 2023 - julho 2023"
          title="CMTech"
          subtitle={t.exp_cmtech_role}
          descriptionHtml={t.exp_cmtech_desc}
        />
      </div>
    </div>
  );
}
