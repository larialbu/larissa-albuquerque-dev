import { useState } from 'react';
import type { UI, Lang } from '../../ui';
import { products, type Product } from '../../data/products';
import { Icon } from '../atoms/Icons';
import { Modal } from '../organisms/Modal';

interface ProdutosProps {
  u: UI;
  lang: Lang;
}

const WHATSAPP = '5581999699386';

function Cover({ p, lang }: { p: Product; lang: Lang }) {
  if (p.cover) return <img src={p.cover} alt={p.title[lang]} loading="lazy" />;
  return (
    <div className="cover-fallback" style={{ background: `linear-gradient(135deg, ${p.gradient[0]}, ${p.gradient[1]})` }}>
      <span>{p.title[lang]}</span>
    </div>
  );
}

export function Produtos({ u, lang }: ProdutosProps) {
  const [openId, setOpenId] = useState<string | null>(null);
  const selected = products.find((p) => p.id === openId);

  return (
    <section id="produtos" className="section">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <span className="eyebrow">{u.products_eyebrow}</span>
            <h2 className="section-title">{u.products_title}</h2>
            <p style={{ marginTop: 10, maxWidth: 520 }}>{u.products_sub}</p>
          </div>
        </div>

        <div className="grid grid-products">
          {products.map((p) => (
            <button key={p.id} id={`product-${p.id}`} className="glass spot clickable card product reveal" onClick={() => setOpenId(p.id)}>
              <div className="product-cover">
                <Cover p={p} lang={lang} />
              </div>
              <div className="product-body">
                <div className="card-meta">
                  <span className="chip">{p.category[lang]}</span>
                  {p.link && <span className="chip mint">● Online</span>}
                  {p.price && <span className="price">{p.price[lang]}</span>}
                </div>
                <h3>{p.title[lang]}</h3>
                <p style={{ fontSize: '.9rem' }}>{p.short[lang]}</p>
                <span className="more" style={{ marginTop: 'auto' }}>{u.details} {Icon.arrow}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Modal open={!!selected} onClose={() => setOpenId(null)} wide label={selected?.title[lang]}>
        {selected && (
          <>
            <div className="modal-cover">
              <Cover p={selected} lang={lang} />
            </div>
            <div className="modal-inner">
              <div className="card-meta">
                <span className="chip">{selected.category[lang]}</span>
                {selected.link && <span className="chip mint">● Online</span>}
                {selected.price && <span className="price">{selected.price[lang]}</span>}
              </div>
              <h2>{selected.title[lang]}</h2>
              <p>{selected.description[lang]}</p>

              <span className="modal-label">{u.product_features}</span>
              <ul className="modal-list">
                {selected.features[lang].map((f) => <li key={f}>{f}</li>)}
              </ul>

              <span className="modal-label">{u.product_stack}</span>
              <div className="tags">
                {selected.stack.map((s) => <span key={s} className="tag">{s}</span>)}
              </div>

              <div className="card-foot" style={{ marginTop: 16, flexWrap: 'wrap', gap: 10 }}>
                {selected.link && (
                  <a
                    className="btn btn-primary"
                    href={selected.link}
                    target="_blank"
                    rel="noreferrer"
                    id={`live-${selected.id}`}
                  >
                    {Icon.external} {lang === 'pt' ? 'Acessar projeto online' : 'Visit live project'}
                  </a>
                )}
                <a
                  className={`btn ${selected.link ? 'btn-ghost' : 'btn-primary'}`}
                  id="product-cta"
                  target="_blank"
                  rel="noreferrer"
                  href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`${u.product_whatsapp_msg} ${selected.title[lang]}`)}`}
                >
                  {Icon.whatsapp} {selected.link ? (lang === 'pt' ? 'Quero um projeto como esse' : 'I want a project like this') : u.product_cta}
                </a>
              </div>
            </div>
          </>
        )}
      </Modal>
    </section>
  );
}
