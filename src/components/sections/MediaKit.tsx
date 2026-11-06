import { useState, useRef } from 'react';
import type { UI, Lang } from '../../ui';
import { contentVideos, mediaKitPackages, type ContentVideo } from '../../data/mediaKit';
import { Icon } from '../atoms/Icons';
import { Modal } from '../organisms/Modal';

interface MediaKitProps {
  u: UI;
  lang: Lang;
}

const WHATSAPP_NUMBER = '5581999699386';

export function MediaKit({ u, lang }: MediaKitProps) {
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [activeVideoModal, setActiveVideoModal] = useState<ContentVideo | null>(null);
  const [openPricesModal, setOpenPricesModal] = useState<boolean>(false);
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

  const monthlyPlan = mediaKitPackages.find((p) => p.id === 'pacote-mensal');
  const standardPackages = mediaKitPackages.filter((p) => p.id !== 'pacote-mensal');

  return (
    <section id="mediakit" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-head reveal">
          <div>
            <span className="eyebrow">{u.mediakit_eyebrow}</span>
            <h2 className="section-title">
              <span className="grad-text">{u.mediakit_title}</span>
            </h2>
            <p style={{ marginTop: 10, maxWidth: 580 }}>
              {u.mediakit_sub}
            </p>
            <div className="women-in-tech-badge">
              <span>
                <strong>{isPt ? 'Público Engajado & Representatividade:' : 'Engaged Audience & Reach:'}</strong>{' '}
                {isPt
                  ? 'Forte conexão e diálogo constante com o público feminino e jovem profissional, com versatilidade para marcas de educação, serviços, tecnologia, mobilidade e cotidiano.'
                  : 'Authentic engagement with women and young professionals, highly versatile for education, services, tech, mobility, and lifestyle brands.'}
              </span>
            </div>
          </div>

          {/* Quick Actions: Open Rate Card Modal & Instagram Link */}
          <div className="mediakit-head-actions">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => setOpenPricesModal(true)}
              id="btn-open-mediakit-prices"
            >
              {Icon.sparkles} {u.mediakit_open_prices}
            </button>
            <a
              href="https://www.instagram.com/lari.devcode"
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
              id="btn-mediakit-instagram-profile"
            >
              {Icon.instagram} @lari.devcode
            </a>
          </div>
        </div>

        {/* Brand Filters */}
        <div className="mediakit-filters-wrap reveal">
          <div className="mediakit-filters">
            {brands.map((b) => (
              <button
                key={b}
                type="button"
                className={`filter-pill ${selectedBrand === b ? 'active' : ''}`}
                onClick={() => setSelectedBrand(b)}
              >
                {b === 'all' ? (isPt ? 'Todas as marcas' : 'All brands') : b}
              </button>
            ))}
          </div>
        </div>

        {/* Reels Horizontal Carousel: < [CARROSSEL] > */}
        <div className="reels-carousel-outer reveal">
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
                    <div className="video-reel-play-circle">
                      {Icon.play}
                    </div>
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
      </div>

      {/* MODAL 1: Watch Instagram Reel */}
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

      {/* MODAL 2: Tabela de Valores & Media Kit Completo */}
      <Modal
        open={openPricesModal}
        onClose={() => setOpenPricesModal(false)}
        wide
        label={u.mediakit_modal_title}
      >
        <div className="modal-inner mediakit-modal-content">
          <div>
            <span className="chip mint">{Icon.sparkles} Media Kit Oficial</span>
            <h2 style={{ marginTop: 8, marginBottom: 6 }}>{u.mediakit_modal_title}</h2>
            <p style={{ color: 'var(--muted)', fontSize: '.94rem', lineHeight: 1.55 }}>
              {u.mediakit_modal_sub}
            </p>

            {/* Female Audience & Diverse Segments Highlight Banner */}
            <div className="women-in-tech-banner">
              <div>
                <h4>{isPt ? 'Comunidade Engajada & Versatilidade de Marca' : 'Engaged Community & Brand Versatility'}</h4>
                <p>
                  {isPt
                    ? 'Canal com forte representatividade feminina e alto índice de interação. Parcerias dinâmicas e flexíveis para marcas de diferentes segmentos: de educação, tecnologia e aplicativos a mobilidade, serviços e produtos do dia a dia.'
                    : 'A channel with strong female presence and high organic interaction. Dynamic, flexible campaigns for diverse brand categories: from education and tech to mobility, services, and everyday consumer products.'}
                </p>
              </div>
            </div>
          </div>

          {/* PACOTE MENSAL EM DESTAQUE VIP (Dentro do Popup) */}
          {monthlyPlan && (
            <div className="monthly-vip-card" style={{ marginTop: 12 }}>
              <div className="monthly-vip-badge">
                <span className="chip mint">{monthlyPlan.badge?.[lang] || 'Destaque'}</span>
                <span className="chip">{isPt ? 'Parceria Contínua' : 'Continuous Retainer'}</span>
              </div>

              <div className="monthly-vip-grid">
                <div className="monthly-vip-info">
                  <span className="mono" style={{ color: 'var(--accent-olive)', fontWeight: 600 }}>
                    {monthlyPlan.category[lang]}
                  </span>
                  <h3 className="monthly-vip-title">{monthlyPlan.title[lang]}</h3>
                  <div className="monthly-price-wrap">
                    <span className="monthly-price">{monthlyPlan.price}</span>
                    <span className="monthly-period">{monthlyPlan.period?.[lang]}</span>
                  </div>
                  <p style={{ marginTop: 10, fontSize: '.9rem', lineHeight: 1.55, color: 'var(--muted)' }}>
                    {isPt
                      ? 'Recomendado para marcas que desejam presença consistente e alto alcance orgânico com a comunidade tech.'
                      : 'Recommended for brands seeking continuous presence and high organic reach in the tech developer community.'}
                  </p>

                  <div style={{ marginTop: 16 }}>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(monthlyPlan.whatsappMsg)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary btn-sm"
                      id="btn-hire-monthly-modal"
                    >
                      {Icon.whatsapp} {u.mediakit_monthly_cta}
                    </a>
                  </div>
                </div>

                <div className="monthly-vip-features">
                  <span className="mono" style={{ fontWeight: 600, color: 'var(--text)', fontSize: '.8rem' }}>
                    {u.mediakit_included}
                  </span>
                  <ul className="monthly-feature-list">
                    {monthlyPlan.deliverables[lang].map((f, i) => (
                      <li key={i}>
                        <span className="check-icon">{Icon.check}</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Grid de Formatos Individuais (Dentro do Popup) */}
          <div style={{ marginTop: 24 }}>
            <h4 style={{ fontSize: '1.05rem', marginBottom: 12 }}>
              {isPt ? 'Formatos Individuais & Ações Avulsas' : 'Individual Formats & Ad-hoc Posts'}
            </h4>
            <div className="grid grid-packages-modal">
              {standardPackages.map((pkg) => (
                <article key={pkg.id} className={`glass card package-card ${pkg.popular ? 'popular' : ''}`}>
                  <div className="package-card-head">
                    <div className="package-meta">
                      <span className="mono package-category">{pkg.category[lang]}</span>
                      {pkg.badge && <span className="chip mint">{pkg.badge[lang]}</span>}
                    </div>
                    <h5 className="package-title">{pkg.title[lang]}</h5>
                    <div className="package-price-wrap">
                      <span className="package-price">{pkg.price}</span>
                      {pkg.note && <span className="package-note">{pkg.note[lang]}</span>}
                    </div>
                  </div>

                  <div className="package-body">
                    <ul className="package-feature-list">
                      {pkg.deliverables[lang].map((item, idx) => (
                        <li key={idx}>
                          <span className="check-icon-mini">{Icon.check}</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="package-foot">
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(pkg.whatsappMsg)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-ghost btn-sm"
                      style={{ width: '100%', justifyContent: 'center' }}
                      id={`btn-modal-hire-${pkg.id}`}
                    >
                      {Icon.whatsapp} {u.mediakit_hire_btn}
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Modal Footer Contacts */}
          <div className="mediakit-modal-footer">
            <div>
              <strong>{isPt ? 'Precisa de uma proposta sob medida?' : 'Looking for a custom campaign?'}</strong>
              <p style={{ margin: '2px 0 0', fontSize: '.84rem', color: 'var(--muted)' }}>
                {isPt
                  ? 'Fale diretamente pelo WhatsApp ou pelo e-mail contato.lari.devcode@gmail.com'
                  : 'Contact directly via WhatsApp or email at contato.lari.devcode@gmail.com'}
              </p>
            </div>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                isPt
                  ? 'Olá Larissa! Gostaria de uma proposta de parceria/media kit personalizada para minha marca.'
                  : 'Hi Larissa! I would like a custom sponsorship/media kit proposal for my brand.'
              )}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary btn-sm"
              id="btn-modal-whatsapp-direct"
            >
              {Icon.whatsapp} {isPt ? 'Chamar no WhatsApp' : 'Chat on WhatsApp'}
            </a>
          </div>
        </div>
      </Modal>
    </section>
  );
}
