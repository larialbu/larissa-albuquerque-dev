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
  { id: 'saas', label: 'Plataforma Web / SaaS', desc: 'Sistemas corporativos, disparo em massa, dashboards e APIs escaláveis (como Labs Email).' },
  { id: 'landing', label: 'Landing Page Premium', desc: 'Design exclusivo de alta conversão, responsivo e integrado para profissionais e empresas (como Drª Paloma).' },
  { id: 'ecommerce', label: 'E-commerce & Gateway', desc: 'Loja virtual com catálogo, cálculo de frete e múltiplos meios de pagamento (como Básico Urbano).' },
  { id: 'ai', label: 'Solução com IA & Agentes', desc: 'Aplicações inteligentes com IA Generativa, RAG, MCPs e automação de processos operacionais.' },
  { id: 'custom', label: 'Outro Projeto Sob Medida', desc: 'Arquitetura personalizada para o seu modelo de negócio.' },
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
    navigator.clipboard.writeText('larissaamca1@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const whatsappUrl = `https://wa.me/5581999699386?text=${encodeURIComponent(
    `Olá Larissa! Gostaria de conversar sobre um projeto de ${currentProject.label} para o meu negócio.`
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
            <span className="eyebrow">{u.contact_eyebrow || 'Projetos Sob Demanda'}</span>
            <h2 className="contact-title">
              <span className="grad-text">{u.contact_title || 'Vamos tirar seu projeto do papel?'}</span>
            </h2>
            <p style={{ marginTop: 14, maxWidth: 480, fontSize: '.96rem', lineHeight: 1.65 }}>
              {u.contact_sub ||
                'Desenvolvo produtos e sistemas sob medida como os apresentados acima. Escolha o tipo de solução e entre em contato para receber uma proposta personalizada.'}
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
                {Icon.phone} {u.contact_whatsapp_cta || 'Conversar no WhatsApp'}
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
                  larissaamca1@gmail.com
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

            <div className="socials" style={{ marginTop: 22 }}>
              {socials.map((s) => (
                <a
                  key={s.id}
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
                <span className="chip mint">✓ Proposta Solicitada</span>
                <h3 style={{ fontSize: '1.4rem', marginTop: 10 }}>Obrigada pelo contato, {name || 'parceiro'}!</h3>
                <p style={{ color: 'var(--muted)', marginTop: 6, lineHeight: 1.6 }}>
                  Recebi seus dados com sucesso. Analisarei as especificações do seu projeto e retornarei em até 24 horas úteis.
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
                <h3 style={{ fontSize: '1.2rem', marginBottom: 2 }}>
                  {u.contact_type_label || 'Selecione o tipo de projeto:'}
                </h3>

                {/* Interactive Project Pills */}
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
                  <span className="mono" style={{ color: 'var(--primary)', fontWeight: 600 }}>Incluso: </span>
                  {currentProject.desc}
                </div>

                <div className="field">
                  <label htmlFor="client-name">Seu Nome ou Empresa *</label>
                  <input
                    id="client-name"
                    className="input"
                    type="text"
                    required
                    placeholder="Ex: João Silva ou Startup X"
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
                    placeholder="exemplo@empresa.com ou (81) 99999-9999"
                    value={contactInfo}
                    onChange={(e) => setContactInfo(e.target.value)}
                  />
                </div>

                <div className="field">
                  <label htmlFor="client-message">Resumo da sua ideia ou funcionalidades necessárias</label>
                  <textarea
                    id="client-message"
                    className="input"
                    rows={3}
                    placeholder="Conte um pouco sobre o que você deseja construir, prazos esperados ou dúvidas..."
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
                  {isSubmitting ? 'Enviando...' : (u.contact_submit_cta || 'Solicitar Proposta de Projeto')}
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
