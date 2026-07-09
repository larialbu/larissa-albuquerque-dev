import type { TranslationSet } from '../../translations';
import { AccordionItem } from '../molecules/AccordionItem';

interface ProjetosProps {
  t: TranslationSet;
  activeSection: string;
  openAccordion: string | null;
  onToggleAccordion: (item: string) => void;
}

export function Projetos({ t, activeSection, openAccordion, onToggleAccordion }: ProjetosProps) {
  return (
    <div id="projetos" className={`section ${activeSection === 'projetos' ? 'active' : ''}`}>
      <h1>{t.proj_h1}</h1>

      <AccordionItem 
        category={t.label_community}
        title={t.proj_alura_title}
        isOpen={openAccordion === 'alura'}
        onToggle={() => onToggleAccordion('alura')}
        description={t.proj_alura_desc}
        impactTitle={t.proj_alura_impact}
        impactList={[
          t.proj_alura_impact_1,
          t.proj_alura_impact_2,
          'Participação ativa em fóruns e eventos.'
        ]}
        mediaPlaceholderText="[Espaço para Fotos/Media]"
      />

      <AccordionItem 
        category={t.label_leadership}
        title={t.proj_rfec_title}
        isOpen={openAccordion === 'rfec'}
        onToggle={() => onToggleAccordion('rfec')}
        description={t.proj_rfec_desc}
        impactTitle={t.proj_rfec_impact}
        impactList={[
          t.proj_rfec_impact_1,
          t.proj_rfec_impact_2,
          'Parcerias com empresas locais.'
        ]}
        mediaPlaceholderText="[Espaço para Fotos RFEC]"
      />

      <AccordionItem 
        category={t.label_mentorship}
        title={t.proj_mentoria_title}
        isOpen={openAccordion === 'mentoria'}
        onToggle={() => onToggleAccordion('mentoria')}
        description={t.proj_mentoria_desc}
        impactTitle={t.proj_mentoria_impact}
        impactList={[
          t.proj_mentoria_impact_1,
          t.proj_mentoria_impact_2,
          'Apoio em projetos de inclusão digital.'
        ]}
        mediaPlaceholderText="[Espaço para Fotos Mentorias]"
      />

      <AccordionItem 
        category={t.label_hackathons}
        title={t.proj_hackathons_title}
        isOpen={openAccordion === 'hackathons'}
        onToggle={() => onToggleAccordion('hackathons')}
        description={t.proj_hackathons_desc}
        impactTitle={t.proj_hackathons_impact}
        impactList={[
          t.proj_hackathons_impact_1,
          t.proj_hackathons_impact_2,
          'Desenvolvimento de habilidades como trabalho em equipe, resolução de problemas, criatividade e comunicação.'
        ]}
        mediaPlaceholderText="[Espaço para Hackathons]"
      />
    </div>
  );
}
