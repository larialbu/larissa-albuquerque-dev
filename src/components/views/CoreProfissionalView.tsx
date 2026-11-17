import type { TranslationSet } from '../../translations';
import type { UI, Lang } from '../../ui';
import { Sobre } from '../sections/Sobre';
import { Experiencia } from '../sections/Experiencia';
import { Academico } from '../sections/Academico';
import { HardSkills } from '../sections/HardSkills';

interface CoreProfissionalViewProps {
  t: TranslationSet;
  u: UI;
  lang: Lang;
}

export function CoreProfissionalView({ t, u, lang }: CoreProfissionalViewProps) {
  return (
    <div id="view-panel-core" className="view-panel fade-in">
      {/* 1. Hero / Apresentação */}
      <Sobre t={t} u={u} />

      {/* 2. Experiência como Desenvolvedora Sênior (BBTS) e Trajetória */}
      <Experiencia t={t} u={u} lang={lang} />

      {/* 3. Formação Acadêmica Principal e Pesquisa (CIn/UFPE e UNICAP) */}
      <Academico t={t} u={u} lang={lang} />

      {/* 4. Principais Habilidades Técnicas (TypeScript, React, Next.js, Node, IA Generativa) */}
      <section id="skills" className="section">
        <HardSkills t={t} u={u} lang={lang} />
      </section>
    </div>
  );
}
