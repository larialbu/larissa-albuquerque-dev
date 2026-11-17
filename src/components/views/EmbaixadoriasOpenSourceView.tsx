import { useState } from 'react';
import type { TranslationSet } from '../../translations';
import type { UI, Lang } from '../../ui';
import { Icon } from '../atoms/Icons';
import { Modal } from '../organisms/Modal';

interface EmbaixadoriasOpenSourceViewProps {
  t: TranslationSet;
  u: UI;
  lang: Lang;
}

interface AmbassadorDetail {
  id: string;
  badge: string;
  role: string;
  brand: string;
  title: string;
  desc: string;
  impactTitle: string;
  impacts: string[];
  tags: string[];
  link?: { label: string; href: string };
}

export function EmbaixadoriasOpenSourceView({ t, u, lang }: EmbaixadoriasOpenSourceViewProps) {
  const [selectedDetail, setSelectedDetail] = useState<AmbassadorDetail | null>(null);
  const isPt = lang === 'pt';

  const ambassadorItems: AmbassadorDetail[] = [
    {
      id: 'google',
      badge: 'Google',
      brand: 'Google',
      role: isPt ? 'Google Student Ambassador (2026)' : 'Google Student Ambassador (2026)',
      title: t.proj_google_title,
      desc: t.proj_google_desc,
      impactTitle: t.proj_google_impact,
      impacts: [
        t.proj_google_impact_1,
        t.proj_google_impact_2,
        t.proj_google_impact_3,
        isPt
          ? 'Capacitação prática em Gemini, Inteligência Artificial e ecossistema de APIs para estudantes.'
          : 'Hands-on training in Gemini, Artificial Intelligence, and developer APIs for students.',
      ],
      tags: ['Google', 'Gemini AI', 'CIn-UFPE', 'Embaixadoria', 'Workshops'],
      link: { label: 'Centro de Informática UFPE', href: 'https://www.cin.ufpe.br' },
    },
    {
      id: 'alura',
      badge: 'Alura Stars',
      brand: 'Alura',
      role: isPt ? 'Embaixadora & Criadora Técnica (Alura Stars)' : 'Ambassador & Tech Creator (Alura Stars)',
      title: t.proj_alura_title,
      desc: t.proj_alura_desc,
      impactTitle: t.proj_alura_impact,
      impacts: [
        t.proj_alura_impact_1,
        t.proj_alura_impact_2,
        isPt
          ? 'Divulgação de cursos, lives técnicas e mentoria de novos alunos na comunidade Alura.'
          : 'Spreading tech courses, technical livestreams, and onboarding new developers in Alura.',
        isPt
          ? 'Cupom exclusivo STAR_LARI para democratizar o acesso à educação em programação.'
          : 'Exclusive discount coupon STAR_LARI to make tech education accessible.',
      ],
      tags: ['Alura', 'Alura Stars', 'Educação Tech', 'Comunidade Dev', 'Mentoria'],
      link: { label: 'Indicação Alura Stars', href: 'https://www.alura.com.br/indique-e-ganhe/larissaamca' },
    },
    {
      id: 'hostgator',
      badge: 'HostGator',
      brand: 'HostGator',
      role: isPt ? 'Embaixadora Oficial HostGator' : 'Official HostGator Ambassador',
      title: t.proj_hostgator_title,
      desc: t.proj_hostgator_desc,
      impactTitle: t.proj_hostgator_impact,
      impacts: [
        t.proj_hostgator_impact_1,
        t.proj_hostgator_impact_2,
        t.proj_hostgator_impact_3,
        isPt
          ? 'Cupom oficial LARIDEV oferecendo até 60% de desconto em hospedagem e infraestrutura.'
          : 'Official LARIDEV coupon delivering up to 60% off web hosting and cloud infrastructure.',
      ],
      tags: ['HostGator', 'HostGator AllPass', 'Infraestrutura Cloud', 'Deploy', 'IA'],
      link: { label: 'Portal HostGator AllPass', href: 'https://www.hostgator.com.br/allpass' },
    },
    {
      id: 'laridev-opensource',
      badge: isPt ? 'Ecossistema' : 'Ecosystem',
      brand: '@laridev/br',
      role: isPt ? 'Criadora de Conteúdo & Comunidade' : 'Content Creator & Community',
      title: isPt ? 'Ecossistema @laridev/br & Projetos' : '@laridev/br Ecosystem & Projects',
      desc: isPt
        ? 'Iniciativa focada em disseminar conhecimento prático, criar repositórios de referência para desenvolvedores, fornecer templates arquiteturais de alto padrão (React, Next.js, APIs em Node e automações com IA) e compartilhar boas práticas com a comunidade.'
        : 'Dedicated initiative focused on tech education, high-grade starter templates (React, Next.js, Node.js APIs, and AI automations), developer resources, and practical projects shared with the community.',
      impactTitle: isPt ? 'Destaques e Iniciativas' : 'Highlights & Initiatives',
      impacts: [
        isPt ? 'Repositórios públicos no GitHub com foco em boas práticas e acessibilidade' : 'Public GitHub repositories featuring clean code and accessibility',
        isPt ? 'Templates prontos com TypeScript, micro frontends e integração com APIs de IA' : 'Ready-to-use templates with TypeScript, micro frontends, and AI integrations',
        isPt ? 'Comunidade engajada com mais de 500k de alcance aprendendo desenvolvimento' : 'Engaged community with 500k+ reach learning software engineering',
      ],
      tags: ['Comunidade', 'GitHub', '@laridev/br', 'TypeScript', 'Tech'],
      link: { label: 'GitHub @larialbu', href: 'https://github.com/larialbu' },
    },
  ];

  return (
    <div id="view-panel-embaixadorias" className="view-panel fade-in">
      <section className="section view-panel-section">
        <div className="container">
          <div className="section-head reveal in">
            <div>
              <span className="eyebrow">{u.tab_ambassador}</span>
              <h2 className="section-title">
                {isPt ? 'Embaixadorias Globais & Atuação Oficial' : 'Global Ambassadorships & Official Roles'}
              </h2>
              <p style={{ marginTop: 8, maxWidth: 680 }}>
                {isPt
                  ? 'Representação oficial de grandes empresas de tecnologia (Google, Alura, HostGator) combinada com iniciativas de capacitação e produção técnica sob o ecossistema @laridev/br.'
                  : 'Official representation of leading tech brands (Google, Alura, HostGator) combined with developer education under the @laridev/br ecosystem.'}
              </p>
            </div>
          </div>

          <div className="grid grid-2">
            {ambassadorItems.map((item) => (
              <article
                key={item.id}
                id={`card-ambassador-${item.id}`}
                className="glass spot clickable card reveal in"
                onClick={() => setSelectedDetail(item)}
              >
                <div className="card-meta">
                  <span className="chip mint">{item.badge}</span>
                  <span className="hub-hint">{u.details}</span>
                </div>
                <h3 style={{ marginTop: 10, marginBottom: 4 }}>{item.title}</h3>
                <span className="mono" style={{ color: 'var(--accent-olive)', fontSize: '.84rem', fontWeight: 600 }}>
                  {item.role}
                </span>
                <p className="clamp" style={{ marginTop: 10 }}>
                  {item.desc}
                </p>
                <div className="tags" style={{ marginTop: 12 }}>
                  {item.tags.map((tag) => (
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
            <span className="chip mint">{selectedDetail.badge}</span>
            <h2 style={{ marginTop: 8 }}>{selectedDetail.title}</h2>
            <span className="mono" style={{ color: 'var(--accent-olive)', fontWeight: 600 }}>
              {selectedDetail.role}
            </span>
            <div className="divider" />
            <p style={{ lineHeight: 1.65 }}>{selectedDetail.desc}</p>
            <span className="modal-label" style={{ marginTop: 16 }}>{selectedDetail.impactTitle}</span>
            <ul className="modal-list">
              {selectedDetail.impacts.map((impact, i) => (
                <li key={i}>{impact}</li>
              ))}
            </ul>
            {selectedDetail.link && (
              <div className="modal-actions" style={{ marginTop: 24 }}>
                <a
                  href={selectedDetail.link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary btn-sm"
                >
                  {Icon.external} {selectedDetail.link.label}
                </a>
              </div>
            )}
          </div>
        )}
      </Modal>
    </div>
  );
}
