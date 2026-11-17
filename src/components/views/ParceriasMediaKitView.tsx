import { useState, useRef } from 'react';
import type { UI, Lang } from '../../ui';
import { contentVideos, type ContentVideo } from '../../data/mediaKit';
import { Icon } from '../atoms/Icons';
import { Modal } from '../organisms/Modal';

interface ParceriasMediaKitViewProps {
  u: UI;
  lang: Lang;
}

const WHATSAPP_NUMBER = '5581999699386';

export function ParceriasMediaKitView({ u, lang }: ParceriasMediaKitViewProps) {
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [activeVideoModal, setActiveVideoModal] = useState<ContentVideo | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isPt = lang === 'pt';

  const brands = ['all', 'HostGator', 'Red Bull', 'CESAR School', 'Use_T.I', 'Alura'];

  const filteredVideos =
    selectedBrand === 'all'
      ? contentVideos
      : contentVideos.filter((v) => v.brand.toLowerCase() === selectedBrand.toLowerCase());

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const card = container.querySelector('.carousel-card') as HTMLElement | null;
    const scrollAmount = card ? card.offsetWidth + 16 : 320;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  const whatsappMessage = isPt
    ? 'Olá Larissa! Gostaria de saber valores e formatos do seu Media Kit para parcerias e publicidade.'
    : 'Hello Larissa! I would like to request rates and media kit formats for brand partnerships and sponsorships.';

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

  const metrics = [
    {
      value: '+500k',
      label: isPt ? 'Alcance & Visualizações' : 'Reach & Views',
      sub: isPt ? 'Audiência engajada em TI e inovação' : 'Engaged tech and dev audience',
    },
    {
      value: '75%+',
      label: isPt ? 'Público Feminino & Tech' : 'Women & Tech Professionals',
      sub: isPt ? 'Estudantes e devs em transição e pleno' : 'Students and active engineers',
    },
    {
      value: 'Marcas',
      label: isPt ? 'Grandes Parceiros' : 'Trusted by Top Brands',
      sub: 'HostGator, Red Bull, CESAR, Alura, etc.',
    },
  ];

  return (
    <div id="view-panel-mediakit" className="view-panel fade-in">
      <section className="section view-panel-section">
        <div className="container">
          {/* Header Direto e Sem Prolixidade */}
          <div className="section-head reveal in" style={{ marginBottom: 20 }}>
            <div>
              <span className="eyebrow">{u.mediakit_eyebrow}</span>
              <h2 className="section-title">
                {isPt ? 'Publicidade & Parcerias de Marca' : 'Brand Partnerships & Media Kit'}
              </h2>
              <p style={{ marginTop: 8, maxWidth: 640 }}>
                {isPt
                  ? 'Ações de marketing de influência técnica com alta conversão, credibilidade de engenharia e forte representatividade feminina.'
                  : 'High-intent tech influencer campaigns with authentic engineering credibility and strong female representation.'}
              </p>
            </div>

            <div className="mediakit-head-actions">
              <a
                href="https://www.instagram.com/lari.devcode"
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost btn-sm"
                id="btn-mediakit-instagram-profile"
              >
                {Icon.instagram} @lari.devcode
              </a>
            </div>
          </div>

          {/* Métricas Principais em 1 Linha Compacta */}
          <div className="grid grid-3 reveal in" style={{ marginBottom: 28 }}>
            {metrics.map((m, idx) => (
              <div
                key={idx}
                className="glass card"
                style={{
                  padding: '18px 20px',
                  borderRadius: 'var(--radius-sm)',
                }}
              >
                <span
                  className="grad-text"
                  style={{ fontSize: '1.9rem', fontWeight: 800, lineHeight: 1 }}
                >
                  {m.value}
                </span>
                <h4 style={{ margin: '8px 0 2px', fontSize: '0.98rem', color: 'var(--text-pure)' }}>
                  {m.label}
                </h4>
                <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--muted)' }}>
                  {m.sub}
                </p>
              </div>
            ))}
          </div>

          {/* Filtros de Marcas */}
          <div className="mediakit-filters-wrap reveal in" style={{ marginBottom: 14 }}>
            <div className="mediakit-filters">
              {brands.map((b) => (
                <button
                  key={b}
                  type="button"
                  className={`filter-pill ${selectedBrand === b ? 'active' : ''}`}
                  onClick={() => setSelectedBrand(b)}
                >
                  {b === 'all' ? (isPt ? 'Todos os vídeos' : 'All videos') : b}
                </button>
              ))}
            </div>
          </div>

          {/* Carrossel de Prévias dos Reels (Exemplos Reais de Publis) */}
          <div className="reels-carousel-outer reveal in" style={{ marginBottom: 36 }}>
            <button
              type="button"
              className="carousel-side-btn prev"
              onClick={() => scrollCarousel('left')}
              aria-label={isPt ? 'Reel anterior' : 'Previous reel'}
              title={isPt ? 'Anterior' : 'Previous'}
              id="btn-carousel-prev"
            >
              {Icon.chevronLeft}
            </button>

            <div className="reels-carousel-container" ref={carouselRef}>
              {filteredVideos.map((item) => (
                <article key={item.id} className="glass card video-card carousel-card">
                  <div
                    className="video-reel-cover"
                    onClick={() => setActiveVideoModal(item)}
                    title={u.mediakit_watch_reel}
                  >
                    <img
                      src={item.thumbnail}
                      alt={item.title[lang]}
                      className="video-reel-thumb-img"
                      loading="lazy"
                    />
                    <div className="video-reel-overlay">
                      <div className="video-reel-brand-tag">
                        <span>{item.brand}</span>
                        <span className="reel-badge">Reel</span>
                      </div>
                      <div className="video-reel-play-circle">{Icon.play}</div>
                      <span className="video-reel-hint">
                        {isPt ? 'Assistir' : 'Watch'}
                      </span>
                    </div>
                  </div>

                  <div className="video-card-body">
                    <div style={{ display: 'flex', gap: 6, marginBottom: 8, flexWrap: 'wrap' }}>
                      <span className="chip brand-chip">{item.brand}</span>
                      {item.badge && <span className="chip">{item.badge[lang]}</span>}
                    </div>
                    <h4 className="video-title">{item.title[lang]}</h4>
                    <p className="video-desc">{item.desc[lang]}</p>
                  </div>

                  <div className="video-card-footer">
                    <button
                      type="button"
                      className="btn btn-primary btn-sm"
                      onClick={() => setActiveVideoModal(item)}
                      id={`btn-watch-${item.id}`}
                    >
                      {Icon.play} {u.mediakit_watch_reel}
                    </button>
                    <a
                      href={item.instagramUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-ghost btn-sm"
                      id={`btn-open-ig-${item.id}`}
                    >
                      {Icon.external} Instagram
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <button
              type="button"
              className="carousel-side-btn next"
              onClick={() => scrollCarousel('right')}
              aria-label={isPt ? 'Próximo reel' : 'Next reel'}
              title={isPt ? 'Próximo' : 'Next'}
              id="btn-carousel-next"
            >
              {Icon.chevronRight}
            </button>
          </div>

          {/* CTA Comercial WhatsApp Objetivo */}
          <div
            className="glass mediakit-cta-box reveal in"
            style={{
              textAlign: 'center',
              padding: '36px 20px',
              borderRadius: 'var(--radius)',
              border: '1px solid var(--accent-olive-border)',
              background: 'linear-gradient(180deg, #FFFFFF 0%, #FAF9F5 100%)',
              maxWidth: 680,
              margin: '0 auto',
            }}
          >
            <span className="chip mint" style={{ marginBottom: 12 }}>
              {isPt ? 'Orçamento & Parcerias' : 'Brand Inquiries'}
            </span>
            <h3 style={{ fontSize: '1.45rem', margin: '0 0 8px', color: 'var(--text-pure)' }}>
              {isPt ? 'Quer planejar uma ação com a @lari.devcode?' : 'Want to plan a campaign with @lari.devcode?'}
            </h3>
            <p
              style={{
                fontSize: '0.92rem',
                color: 'var(--muted)',
                maxWidth: 520,
                margin: '0 auto 22px',
                lineHeight: 1.55,
              }}
            >
              {isPt
                ? 'Formatos sob medida para Reels, Stories, Carrosséis, Eventos ou Embaixadorias. Fale diretamente comigo no WhatsApp para receber o media kit e proposta.'
                : 'Custom deliverables for Reels, Stories, Carousels, Events, or Brand Ambassadorships. Contact me on WhatsApp for rates and media kit.'}
            </p>

            <a
              id="cta-whatsapp-mediakit"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
              style={{
                fontSize: '0.98rem',
                padding: '12px 28px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: '#128C7E',
                color: '#FFFFFF',
                border: 'none',
                boxShadow: '0 4px 14px rgba(18, 140, 126, 0.25)',
              }}
            >
              <span style={{ display: 'inline-flex', width: 18, height: 18 }}>
                {Icon.whatsapp}
              </span>
              <span>{u.mediakit_cta_whatsapp}</span>
            </a>

            <div style={{ marginTop: 12 }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--faint)' }}>
                {u.mediakit_cta_sub}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL: Assistir Reel do Instagram */}
      <Modal
        open={Boolean(activeVideoModal)}
        onClose={() => setActiveVideoModal(null)}
        label={activeVideoModal ? activeVideoModal.title[lang] : ''}
      >
        {activeVideoModal && (
          <div className="modal-inner video-modal-inner">
            <div style={{ marginBottom: 12 }}>
              <span className="chip mint">{activeVideoModal.brand}</span>
              <h3 style={{ marginTop: 8, marginBottom: 4 }}>{activeVideoModal.title[lang]}</h3>
              <p style={{ color: 'var(--muted)', fontSize: '.9rem' }}>{activeVideoModal.desc[lang]}</p>
            </div>

            <div className="instagram-embed-wrap">
              <iframe
                src={`https://www.instagram.com/p/${activeVideoModal.postId}/embed/captioned/`}
                className="instagram-embed-frame"
                title={activeVideoModal.title[lang]}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            <div style={{ marginTop: 16, display: 'flex', gap: 10, justifyContent: 'flex-end', flexWrap: 'wrap' }}>
              <a
                href={activeVideoModal.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary btn-sm"
              >
                {Icon.instagram} {u.mediakit_open_instagram}
              </a>
              <button
                type="button"
                className="btn btn-ghost btn-sm"
                onClick={() => setActiveVideoModal(null)}
              >
                {u.close}
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
