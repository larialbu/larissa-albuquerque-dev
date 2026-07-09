import React, { useState } from 'react';
import type { TranslationSet } from '../../translations';
import { SocialButton } from '../atoms/SocialButton';
import { Button } from '../atoms/Button';

interface ContatoProps {
  t: TranslationSet;
  activeSection: string;
  copied: boolean;
  onCopyEmail: () => void;
  currentLanguage: 'pt' | 'en';
}

export function Contato({ t, activeSection, copied, onCopyEmail, currentLanguage }: ContatoProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);
    // Simular envio de API
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
    }, 1200);
  };

  return (
    <div id="contato" className={`section ${activeSection === 'contato' ? 'active' : ''}`}>
      <h1>{t.contact_h1}</h1>

      <div className="contact-grid">
        {/* Lado Esquerdo - Detalhes e Redes Sociais */}
        <div className="contact-info-card">
          <div>
            <p className="contact-subtitle-text">
              {t.contact_subtitle}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '24px' }}>
              {/* Endereço */}
              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="contact-detail-text">
                  <span className="label">{t.contact_addr}</span>
                  <p>Recife, Pernambuco, Brasil</p>
                </div>
              </div>

              {/* Telefone */}
              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="contact-detail-text">
                  <span className="label">{t.contact_phone}</span>
                  <p>
                    <a href={`tel:${t.contact_phone_val.replace(/\s+/g, '')}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                      {t.contact_phone_val}
                    </a>
                  </p>
                </div>
              </div>

              {/* E-mail com Cópia */}
              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className="contact-detail-text">
                  <span className="label">{t.contact_email}</span>
                  <div className="email-copy-container" onClick={onCopyEmail} title="Clique para copiar">
                    <p style={{ margin: 0, fontWeight: 500 }}>larissaamca1@gmail.com</p>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '4px', opacity: 0.7 }}>
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                    {copied && <span className="email-copy-tooltip">{currentLanguage === 'pt' ? 'Copiado!' : 'Copied!'}</span>}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links na base */}
          <div>
            <span className="skill-category" style={{ display: 'block', marginBottom: '12px' }}>{t.contact_social}</span>
            <div className="social-links">
              <SocialButton 
                href="https://github.com/larialbu"
                label="GitHub"
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                }
              />
              <SocialButton 
                href="https://www.instagram.com/lari.devcode"
                label="Instagram"
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                }
              />
              <SocialButton 
                href="https://www.linkedin.com/in/larissa-azevedo-albuquerque/"
                label="LinkedIn"
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                }
              />
            </div>
          </div>
        </div>

        {/* Lado Direito - Card com Formulário */}
        <div className="contact-form-card">
          {isSubmitted ? (
            <div className="contact-success-msg">
              <div className="contact-success-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <strong style={{ fontSize: '1.2rem', color: 'var(--text-heading)' }}>
                {t.contact_form_success.split('!')[0]}!
              </strong>
              <p style={{ color: 'var(--text-body)', fontSize: '0.95rem' }}>
                {t.contact_form_success.split('!')[1] || 'Retornarei em breve.'}
              </p>
              <Button 
                onClick={() => setIsSubmitted(false)} 
                style={{ marginTop: '16px', padding: '8px 20px', fontSize: '0.9rem' }}
              >
                {currentLanguage === 'pt' ? 'Enviar outra mensagem' : 'Send another message'}
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h3>{t.contact_form_title}</h3>

              <div className="contact-form-group">
                <label htmlFor="name-input">{t.contact_form_name}</label>
                <input 
                  id="name-input"
                  type="text" 
                  className="contact-input" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  required 
                  disabled={isSubmitting}
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="email-input">{t.contact_form_email}</label>
                <input 
                  id="email-input"
                  type="email" 
                  className="contact-input" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  required 
                  disabled={isSubmitting}
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="message-input">{t.contact_form_msg}</label>
                <textarea 
                  id="message-input"
                  className="contact-input" 
                  value={message} 
                  onChange={(e) => setMessage(e.target.value)} 
                  required 
                  disabled={isSubmitting}
                />
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting} 
                style={{ width: '100%', marginTop: '8px', opacity: isSubmitting ? 0.7 : 1 }}
              >
                {isSubmitting ? (currentLanguage === 'pt' ? 'Enviando...' : 'Sending...') : t.contact_form_send}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
