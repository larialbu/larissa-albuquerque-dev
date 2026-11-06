import React, { useState } from 'react';
import type { TranslationSet } from '../../translations';
import type { UI } from '../../ui';
import { Icon } from '../atoms/Icons';
import { socials } from './Sobre';

interface ContatoProps {
  t: TranslationSet;
  u: UI;
}

const PROJECT_TYPES = [
  {
    id: 'saas',
    label: 'Plataforma Web / SaaS',
    desc: 'Sistemas corporativos, automação, dashboards e APIs escaláveis sob demanda (como Labs Email).',
  },
  {
    id: 'landing',
    label: 'Landing Page Premium',
    desc: 'Design exclusivo de alta conversão, responsivo e integrado para profissionais e empresas.',
  },
  {
    id: 'ecommerce',
    label: 'E commerce & Gateway',
    desc: 'Loja virtual com catálogo, checkout transparente e múltiplos meios de pagamento.',
  },
  {
    id: 'ai',
    label: 'Solução com IA & Automação',
    desc: 'Aplicações inteligentes com IA Generativa, RAG, MCPs e automação de processos.',
  },
  {
    id: 'mediakit',
    label: 'Publi & Parcerias de Marca',
    desc: 'Reels, stories, embaixada e ações para marcas de diversos segmentos: educação, serviços, tecnologia, mobilidade e público feminino.',
  },
  {
    id: 'duvidas',
    label: 'Dúvidas, Conversa & Networking',
    desc: 'Tirar dúvidas sobre programação e carreira, conselhos, mentorias ou bater um papo descontraído sobre tecnologia.',
  },
];

export function Contato({ t, u }: ContatoProps) {
  const [selectedType, setSelectedType] = useState(PROJECT_TYPES[0].id);
  const [name, setName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const currentProject = PROJECT_TYPES.find((p) => p.id === selectedType) || PROJECT_TYPES[0];

  const copyEmail = () => {
    navigator.clipboard.writeText('contato.lari.devcode@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const whatsappUrl = `https://wa.me/5581999699386?text=${encodeURIComponent(
    `Olá Larissa! Gostaria de conversar com você sobre ${currentProject.label}.`
  )}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !contactInfo) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setName('');
      setContactInfo('');
      setMessage('');
    }, 1000);
  };

  return (
    <section id="contato" className="section">
      <div className="container">
        <div className="glass contact-wrap reveal">
          <div>
            <span className="eyebrow">{u.contact_eyebrow || 'Bate-papo & Projetos'}</span>
            <h2 className="contact-title">
              <span className="grad-text">{u.contact_title || 'Bora conversar ou tirar uma ideia do papel?'}</span>
            </h2>
            <p style={{ marginTop: 14, maxWidth: 490, fontSize: '.96rem', lineHeight: 1.65, color: 'var(--muted)' }}>
              {u.contact_sub ||
                'Desenvolvo soluções completas sob demanda como as da seção acima (plataformas SaaS, e-commerces com gateway, landing pages e sistemas com IA). Mas meu contato é super aberto: seja para tirar dúvidas, mentorias, propor parcerias de publis ou só trocar uma ideia sobre tecnologia, sinta-se à vontade para me chamar!'}
            </p>

            {/* Quick WhatsApp Action */}
            <div style={{ marginTop: 24, marginBottom: 24 }}>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
                id="btn-whatsapp-direct"
                style={{ width: '100%', maxWidth: 360, padding: '12px 22px' }}
              >
                {Icon.phone} {u.contact_whatsapp_cta || 'Chamar no WhatsApp (Mais rápido)'}
              </a>
            </div>

            <div className="contact-lines">
              <button
                type="button"
                className="contact-line"
                onClick={copyEmail}
                id="contact-email"
                title={u.copy}
                style={{ textAlign: 'left' }}
              >
                <span className="social">{Icon.mail}</span>
                <span>
                  <span className="label">E-mail Direto</span>
                  contato.lari.devcode@gmail.com
                  {copied && <span className="copy-toast">{u.copied}</span>}
                </span>
              </button>

              <a
                className="contact-line"
                href="https://wa.me/5581999699386"
                target="_blank"
                rel="noreferrer"
                id="contact-phone"
              >
                <span className="social">{Icon.phone}</span>
                <span>
                  <span className="label">WhatsApp Comercial</span>
                  (81) 99969-9386
                </span>
              </a>

              <div className="contact-line">
                <span className="social">{Icon.pin}</span>
                <span>
                  <span className="label">{u.location || 'Localização'}</span>
                  Recife, PE · Atendimento para todo o Brasil
                </span>
              </div>
            </div>

            {/* Social Icons - Bolinhas uma do lado da outra */}
            <div className="socials contact-social-row" style={{ marginTop: 24, display: 'flex', flexDirection: 'row', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  className="social"
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  title={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            {isSubmitted ? (
              <div className="success">
                <span className="chip mint">✓ Mensagem Enviada</span>
                <h3 style={{ fontSize: '1.4rem', marginTop: 10 }}>Obrigada pelo contato, {name || 'amigo(a)'}!</h3>
                <p style={{ color: 'var(--muted)', marginTop: 6, lineHeight: 1.6 }}>
                  Recebi sua mensagem com sucesso. Retornarei o mais rápido possível por e-mail ou WhatsApp!
                </p>
                <button
                  type="button"
                  className="btn btn-ghost btn-sm"
                  onClick={() => setIsSubmitted(false)}
                  style={{ marginTop: 16 }}
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form className="form" onSubmit={handleSubmit}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: 4 }}>
                  {u.contact_type_label || 'Qual o assunto ou tipo de projeto?'}
                </h3>

                {/* Interactive Project / Subject Pills */}
                <div className="project-type-selector">
                  {PROJECT_TYPES.map((pt) => (
                    <button
                      key={pt.id}
                      type="button"
                      className={`project-type-pill ${selectedType === pt.id ? 'active' : ''}`}
                      onClick={() => setSelectedType(pt.id)}
                    >
                      {pt.label}
                    </button>
                  ))}
                </div>

                <div className="project-type-desc">
                  <span className="mono" style={{ color: 'var(--primary)', fontWeight: 600 }}>Foco / Incluso: </span>
                  {currentProject.desc}
                </div>

                <div className="field">
                  <label htmlFor="client-name">Seu Nome ou Empresa *</label>
                  <input
                    id="client-name"
                    className="input"
                    type="text"
                    required
                    placeholder="Ex: Larissa ou Startup X"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="field">
                  <label htmlFor="client-contact">E-mail ou WhatsApp para contato *</label>
                  <input
                    id="client-contact"
                    className="input"
                    type="text"
                    required
                    placeholder="exemplo@email.com ou (81) 99999-9999"
                    value={contactInfo}
                    onChange={(e) => setContactInfo(e.target.value)}
                  />
                </div>

                <div className="field">
                  <label htmlFor="client-message">Mensagem, resumo da ideia ou dúvida</label>
                  <textarea
                    id="client-message"
                    className="input"
                    rows={3}
                    placeholder="Conte um pouco sobre sua ideia, projeto, dúvida técnica ou proposta..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSubmitting}
                  id="btn-submit-project"
                  style={{ width: '100%', marginTop: 6 }}
                >
                  {isSubmitting ? 'Enviando...' : (u.contact_submit_cta || 'Enviar Mensagem')}
                </button>
              </form>
            )}
          </div>
        </div>

        <footer className="footer">
          <span>© {new Date().getFullYear()} Larissa Albuquerque. {t.footer_rights}</span>
          <span className="mono">Recife · PE</span>
        </footer>
      </div>
    </section>
  );
}
