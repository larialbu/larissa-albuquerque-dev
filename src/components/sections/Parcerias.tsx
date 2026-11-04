import { useState } from 'react';
import type { TranslationSet } from '../../translations';
import type { UI, Lang } from '../../ui';
import { Icon } from '../atoms/Icons';

interface ParceriasProps {
  t: TranslationSet;
  u: UI;
  lang?: Lang;
}

export function Parcerias({ t, u, lang = 'pt' }: ParceriasProps) {
  const [copied, setCopied] = useState<string | null>(null);
  const isPt = lang === 'pt';

  const partners = [
    {
      id: 'hostgator',
      name: 'HostGator',
      title: t.proj_partners_hostgator_title,
      desc: t.proj_partners_hostgator_desc,
      coupon: 'LARIDEV',
      btn: t.proj_partners_hostgator_btn,
      link: 'https://www.hostgator.com.br/allpass',
    },
    {
      id: 'alura',
      name: 'Alura',
      title: t.proj_partners_alura_desc,
      desc: isPt ? 'Desconto exclusivo para a maior plataforma tech do Brasil.' : 'Exclusive discount for the top tech platform in Brazil.',
      coupon: 'star_lari',
      btn: t.proj_partners_alura_btn,
      link: 'https://www.alura.com.br/indique-e-ganhe/larissaamca',
    },
    {
      id: 'useti',
      name: 'Use_T.I',
      title: t.proj_partners_usetii_title,
      desc: t.proj_partners_usetii_desc,
      coupon: 'laridev',
      btn: t.proj_partners_usetii_btn,
      link: 'https://www.useti.shop/useti',
    },
    {
      id: 'cdc',
      name: 'Casa do Código',
      title: t.proj_partners_cdc_title,
      desc: t.proj_partners_cdc_desc,
      coupon: 'AF-b5d2572e',
      btn: t.proj_partners_cdc_btn,
      link: 'https://www.casadocodigo.com.br/?cupom=AF-b5d2572e',
    },
    {
      id: 'fiap',
      name: 'FIAP',
      title: t.proj_partners_fiap_title,
      desc: t.proj_partners_fiap_desc,
      btn: t.proj_partners_fiap_btn,
      link: 'https://www.instagram.com/lari.devcode',
    },
  ];

  const copy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(code);
    setTimeout(() => setCopied(null), 1800);
  };

  return (
    <section id="parcerias" className="section" style={{ paddingBottom: 20 }}>
      <div className="container">
        <div className="glass partners-full-wrap reveal">
          <div className="section-head" style={{ marginBottom: 24 }}>
            <div>
              <span className="eyebrow">{u.partners_title}</span>
              <h2 className="section-title">
                <span className="grad-text">{isPt ? 'Parcerias & Cupons' : 'Partners & Coupons'}</span>
              </h2>
              <p style={{ marginTop: 8, maxWidth: 580 }}>
                {isPt
                  ? 'Aproveite descontos e benefícios exclusivos para ferramentas de tecnologia, cursos, livros e hospedagem com meus cupons de embaixadora.'
                  : 'Enjoy exclusive discounts and benefits for dev tools, courses, books, and hosting using my official ambassador coupons.'}
              </p>
            </div>
          </div>

          <div className="partners-five-grid">
            {partners.map((p) => (
              <article key={p.id} className="partner-mini-card">
                <div className="partner-mini-head">
                  <span className="partner-name">{p.name}</span>
                  {p.coupon && (
                    <button
                      className="coupon"
                      onClick={() => copy(p.coupon!)}
                      id={`coupon-${p.id}`}
                      title={u.copy}
                    >
                      {copied === p.coupon ? u.copied : p.coupon} {Icon.copy}
                    </button>
                  )}
                </div>
                <h4 style={{ fontSize: '.92rem', margin: '4px 0 2px', color: 'var(--text)', fontWeight: 600 }}>{p.title}</h4>
                <p style={{ fontSize: '.82rem', color: 'var(--muted)', margin: 0, lineHeight: 1.5 }}>{p.desc}</p>
                <div style={{ marginTop: 8 }}>
                  <a className="btn btn-ghost btn-sm" href={p.link} target="_blank" rel="noreferrer" id={`partner-${p.id}`}>
                    {p.btn} {Icon.arrow}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

