import { useState } from 'react';
import type { TranslationSet } from '../../translations';
import type { UI, Lang } from '../../ui';
import { Icon } from '../atoms/Icons';
import { Modal } from '../organisms/Modal';

interface ComunidadesLiderancaViewProps {
  t: TranslationSet;
  u: UI;
  lang: Lang;
}

interface CommunityDetail {
  id: string;
  category: string;
  title: string;
  role: string;
  org: string;
  desc: string;
  impactTitle: string;
  impacts: string[];
  tags: string[];
  links?: { label: string; href: string }[];
}

export function ComunidadesLiderancaView({ t, u, lang }: ComunidadesLiderancaViewProps) {
  const [selectedDetail, setSelectedDetail] = useState<CommunityDetail | null>(null);
  const isPt = lang === 'pt';

  const initiatives: CommunityDetail[] = [
    {
      id: 'rfec',
      category: isPt ? 'Fundação & Liderança' : 'Founding & Leadership',
      role: isPt ? 'Fundadora & Líder de Comunidade' : 'Founder & Community Leader',
      org: 'RFEC – Recife Front-End Community',
      title: t.proj_rfec_title,
      desc: t.proj_rfec_desc,
      impactTitle: t.proj_rfec_impact,
      impacts: [
        t.proj_rfec_impact_1,
        t.proj_rfec_impact_2,
        isPt
          ? 'Criação de pontes com empresas tech, hubs de inovação e palestrantes renomados.'
          : 'Building bridges between tech companies, innovation hubs, and top-tier speakers.',
        isPt
          ? 'Espaço inclusivo com foco em aumentar a presença feminina e impulsionar novos talentos.'
          : 'Inclusive space dedicated to boosting women presence and empowering new tech talent.',
      ],
      tags: ['Liderança', 'Meetups', 'Front-End', 'Comunidade Tech', 'Recife'],
      links: [
        { label: 'LinkedIn RFEC', href: 'https://www.linkedin.com/in/larissa-azevedo-albuquerque/' },
        { label: 'Instagram @lari.devcode', href: 'https://www.instagram.com/lari.devcode' },
      ],
    },
    {
      id: 'porto-digital',
      category: isPt ? 'Tutoria & Residência Tecnológica' : 'Tutoring & Tech Residency',
      role: isPt ? 'Tutora & Residente de Tecnologia' : 'Tutor & Technology Resident',
      org: 'Porto Digital · Embarque Digital & Tech Woman',
      title: isPt ? 'Tutoria no Porto Digital & Tech Woman' : 'Tutoring at Porto Digital & Tech Woman',
      desc: isPt
        ? 'Atuação de destaque no ecossistema do Porto Digital (um dos maiores parques tecnológicos do Brasil). Mentora individual de mulheres no Tech Woman apoiando transição de carreira e capacitação em desenvolvimento de software, além de participação na Residência Onboard com projetos para gigantes como Accenture, NTT Data e CMTech.'
        : 'Prominent leadership within the Porto Digital ecosystem (one of the largest tech parks in Latin America). Individual mentor for women in the Tech Woman program supporting career transition, combined with residency projects for enterprise leaders like Accenture, NTT Data, and CMTech.',
      impactTitle: isPt ? 'Impacto na Tutoria e Formação' : 'Impact on Tutoring & Mentorship',
      impacts: [
        isPt ? 'Mentoria individual para mulheres em transição de carreira no Tech Woman' : 'One-on-one mentorship for women in career transition at Tech Woman',
        isPt ? 'Desenvolvimento de projetos reais na Residência Onboard do Porto Digital' : 'Hands-on software delivery within Porto Digital Onboard Residency',
        isPt ? 'Apoio a novos alunos do programa de bolsas Embarque Digital' : 'Guidance and support for Embarque Digital scholarship students',
      ],
      tags: ['Porto Digital', 'Embarque Digital', 'Tech Woman', 'Mentoria', 'Inclusão'],
    },
    {
      id: 'campus-party',
      category: isPt ? 'Curadoria & Palestras' : 'Curatorship & Speaking',
      role: isPt ? 'Curadora, Palestrante & Mentora' : 'Curator, Speaker & Mentor',
      org: 'Campus Party & Rec’n’Play',
      title: isPt ? 'Curadoria na Campus Party & Rec’n’Play' : 'Curatorship at Campus Party & Rec’n’Play',
      desc: isPt
        ? 'Participação ativa nos maiores eventos de tecnologia do país. Curadoria de conteúdos técnicos, condução de palestras sobre Engenharia de Software, Front-End Moderno e Inteligência Artificial, e atuação como mentora e jurada em Hackathons de inovação.'
        : 'Active participation in the premier tech festivals in the country. Technical curatorship, delivering talks on Modern Front-End, Software Engineering, and Artificial Intelligence, alongside mentoring and judging innovation hackathons.',
      impactTitle: isPt ? 'Destaques em Eventos & Hackathons' : 'Event & Hackathon Highlights',
      impacts: [
        t.proj_mentoria_impact_2,
        t.proj_hackathons_impact_1,
        t.proj_hackathons_impact_2,
        isPt ? 'Workshops práticos sobre IA Generativa e desenvolvimento web moderno' : 'Hands-on workshops on Generative AI and modern web dev',
      ],
      tags: ['Campus Party', 'Rec’n’Play', 'Palestrante', 'Hackathons', 'IA Generativa'],
    },
  ];

  return (
    <div id="view-panel-comunidades" className="view-panel fade-in">
      <section className="section view-panel-section">
        <div className="container">
          <div className="section-head reveal in">
            <div>
              <span className="eyebrow">{u.tab_community}</span>
              <h2 className="section-title">
                {isPt ? 'Liderança, Comunidades & Impacto Social' : 'Leadership, Communities & Social Impact'}
              </h2>
              <p style={{ marginTop: 8, maxWidth: 680 }}>
                {isPt
                  ? 'Compromisso com o fortalecimento do ecossistema de tecnologia, capacitação de mulheres e multiplicação de conhecimento técnico através de comunidades ativas e eventos.'
                  : 'Fostering tech ecosystems, empowering women in engineering, and scaling knowledge transfer across active developer communities and premier conferences.'}
              </p>
            </div>
          </div>

          <div className="grid grid-3">
            {initiatives.map((item) => (
              <article
                key={item.id}
                id={`card-comm-${item.id}`}
                className="glass spot clickable card reveal in"
                onClick={() => setSelectedDetail(item)}
              >
                <div className="card-meta">
                  <span className="chip mint">{item.category}</span>
                </div>
                <h3 style={{ marginTop: 10, marginBottom: 4 }}>{item.title}</h3>
                <span className="mono" style={{ color: 'var(--accent-olive)', fontSize: '.84rem', fontWeight: 600 }}>
                  {item.org}
                </span>
                <p className="clamp" style={{ marginTop: 10 }}>
                  {item.desc}
                </p>
                <div className="tags" style={{ marginTop: 12 }}>
                  {item.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="card-foot" style={{ marginTop: 'auto', paddingTop: 16 }}>
                  <span className="more">
                    {u.details} {Icon.arrow}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Modal de Detalhes */}
      <Modal
        open={!!selectedDetail}
        onClose={() => setSelectedDetail(null)}
        label={selectedDetail?.title}
      >
        {selectedDetail && (
          <div className="modal-inner">
            <span className="chip mint">{selectedDetail.category}</span>
            <h2 style={{ marginTop: 8 }}>{selectedDetail.title}</h2>
            <span className="mono" style={{ color: 'var(--accent-olive)', fontWeight: 600 }}>
              {selectedDetail.role} · {selectedDetail.org}
            </span>
            <div className="divider" />
            <p style={{ lineHeight: 1.65 }}>{selectedDetail.desc}</p>
            <span className="modal-label" style={{ marginTop: 16 }}>{selectedDetail.impactTitle}</span>
            <ul className="modal-list">
              {selectedDetail.impacts.map((impact, i) => (
                <li key={i}>{impact}</li>
              ))}
            </ul>
            {selectedDetail.links && selectedDetail.links.length > 0 && (
              <div className="modal-actions" style={{ marginTop: 24, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                {selectedDetail.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-ghost btn-sm"
                  >
                    {Icon.external} {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        )}
      </Modal>
    </div>
  );
}
