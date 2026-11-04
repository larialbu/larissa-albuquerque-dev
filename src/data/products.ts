export interface Product {
  id: string;
  cover?: string;
  /** Duas cores para a capa em gradiente (usada quando não há `cover`) */
  gradient: [string, string];
  category: { pt: string; en: string };
  title: { pt: string; en: string };
  short: { pt: string; en: string };
  description: { pt: string; en: string };
  features: { pt: string[]; en: string[] };
  stack: string[];
  price?: { pt: string; en: string };
  /** Link externo opcional (demo, Behance, etc.) */
  link?: string;
}

export const products: Product[] = [
  {
    id: 'labs-email',
    cover: '/products/labs-email.png',
    gradient: ['#0f172a', '#10b981'],
    category: { pt: 'Plataforma SaaS & E-mail Mkt', en: 'SaaS & Email Marketing' },
    title: { pt: 'LABS EMAIL | Disparo de E-mails em Massa', en: 'LABS EMAIL | Bulk Email Platform' },
    short: {
      pt: 'Plataforma corporativa de envio de e-mails em massa com gestão de campanhas, upload de planilhas e métricas em tempo real.',
      en: 'Enterprise bulk email dispatch platform with campaign management, spreadsheet imports, and real-time metrics.',
    },
    description: {
      pt: 'Plataforma completa de disparo de e-mails em massa e e-mail marketing corporativo desenvolvida para a BS Seguros (Labs Email). O sistema permite criar e disparar campanhas com alta entregabilidade a partir de múltiplos remetentes (Gmail, Outlook ou servidor dedicado), upload e validação de listas de contatos via planilha, gerenciamento de modelos/templates, relatórios analíticos de taxa de abertura e desempenho de cliques por link, além de controle de permissões de usuários.',
      en: 'Comprehensive bulk email dispatch and marketing SaaS platform built for BS Seguros (Labs Email). The system enables high-deliverability campaigns from multiple sender accounts (Gmail, Outlook, or custom SMTP), contact list validation via spreadsheet upload, customizable templates, detailed open rate reports, link click tracking, and multi-user access management.',
    },
    features: {
      pt: [
        'Disparo de e-mails em massa em 3 etapas (Destinatários, Conteúdo e Envio)',
        'Múltiplos remetentes integrados (Gmail, Outlook ou SMTP Padrão)',
        'Importação e validação de destinatários via upload de planilhas e JSON',
        'Biblioteca e gerenciador de modelos/templates personalizados',
        'Gestão e histórico completo de campanhas enviadas',
        'Relatório analítico de taxa de abertura em tempo real',
        'Rastreamento e métricas de desempenho de cliques nos links',
        'Gestão de múltiplos usuários, equipes e controle de acessos',
      ],
      en: [
        '3-step bulk email dispatch workflow (Recipients, Content, and Sending)',
        'Multi-sender support (Gmail, Outlook, or custom SMTP)',
        'Contact list import & validation via spreadsheet upload (.xlsx/.csv) and JSON',
        'Custom email template library and layout manager',
        'Complete campaign management and history log',
        'Real-time open rate and deliverability analytics report',
        'Link click tracking and performance CTR metrics',
        'Multi-user team management and role-based permissions',
      ],
    },
    stack: ['React', 'TypeScript', 'Node.js', 'SMTP / Email Gateway', 'Analytics', 'Segurança'],
    link: 'https://app.labsemail.com.br/',
  },
  {
    id: 'cartoes-bs',
    cover: '/products/cartoes-bs.png',
    gradient: ['#00167a', '#2563eb'],
    category: { pt: 'Fintech & Segurança', en: 'Fintech & Security' },
    title: { pt: 'BS Seguros | Cadastro de Cartão Seguro', en: 'BS Seguros | Secure Card Registration' },
    short: {
      pt: 'Sistema seguro e tokenizado de cadastro e validação de cartões de crédito com criptografia e exclusão automática.',
      en: 'Secure tokenized credit card registration and validation system with encryption and automated deletion.',
    },
    description: {
      pt: 'Aplicação web desenvolvida para a BS Seguros (parceria Porto Seguro) com foco em segurança de dados e conformidade estrita com a LGPD. O sistema realiza o cadastro seguro e tokenizado de dados de cartão de crédito com validação dinâmica em tempo real (bandeiras, algoritmo de Luhn), visualização interativa do cartão 3D e rotina programada de exclusão automática dos dados em até 48 horas.',
      en: 'Web application developed for BS Seguros (Porto Seguro partner) focusing on data security and strict LGPD compliance. The system performs secure, tokenized registration of credit card details with real-time dynamic validation (card brand, Luhn algorithm), interactive 3D card preview, and scheduled automated data deletion within 48 hours.',
    },
    features: {
      pt: [
        'Ambiente seguro com criptografia de dados ponta a ponta',
        'Validação em tempo real de número, validade e algoritmo de Luhn',
        'Visualização interativa e dinâmica do cartão em 3D',
        'Conformidade LGPD com exclusão automática dos dados em 48h',
        'Interface responsiva, moderna e otimizada com Next.js e TypeScript',
      ],
      en: [
        'Secure environment with end-to-end data encryption',
        'Real-time card number, expiry date, and Luhn algorithm validation',
        'Interactive and dynamic 3D credit card preview',
        'LGPD compliance workflow with automated 48-hour data deletion',
        'Modern, responsive interface built with Next.js and TypeScript',
      ],
    },
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Criptografia', 'LGPD'],
    link: 'https://cartoes.segurosbs.com.br/',
  },
  {
    id: 'paloma-mendes-saldanha',
    cover: '/products/paloma-mendes.png',
    gradient: ['#059669', '#34d399'],
    category: { pt: 'Landing Page Jurídica', en: 'Legal Landing Page' },
    title: { pt: 'Drª Paloma Mendes Saldanha', en: 'Dr. Paloma Mendes Saldanha' },
    short: {
      pt: 'Landing page institucional completa para advogada, professora e pesquisadora em Direito Digital e IA.',
      en: 'Complete institutional landing page for digital law attorney, professor, and AI researcher.',
    },
    description: {
      pt: 'Desenvolvimento de landing page completa para a Drª Paloma Mendes Saldanha (Doutora e Mestre em Direito, especialista em Proteção de Dados, Ética e Inteligência Artificial). O projeto reúne seções de áreas de atuação, trajetória acadêmica, galeria de eventos e palestras, vitrine de livros e artigos publicados, integração com o projeto placamae.org_ e canais de contato direto.',
      en: 'Full landing page development for Dr. Paloma Mendes Saldanha (Ph.D. and Master in Law, specialist in Data Protection, Ethics, and AI). The project includes practice areas, academic trajectory, event and lecture gallery, published books and articles showcase, placamae.org_ project integration, and direct contact channels.',
    },
    features: {
      pt: [
        'Design responsivo e institucional premium',
        'Apresentação de áreas de atuação e bio acadêmica',
        'Vitrine de livros e artigos científicos publicados',
        'Galeria de eventos, palestras e premiações',
        'Integração direta com WhatsApp e formulário de contato',
      ],
      en: [
        'Responsive and premium institutional design',
        'Practice areas and academic biography showcase',
        'Published books and scientific articles showcase',
        'Events, lectures, and awards gallery',
        'Direct WhatsApp and contact form integration',
      ],
    },
    stack: ['React', 'TypeScript', 'SEO Otimizado', 'Mobile First', 'Design System'],
    link: 'https://www.palomamendesaldanha.com/',
  },
  {
    id: 'basicourbano',
    cover: '/products/basico-urbano.png',
    gradient: ['#10b981', '#047857'],
    category: { pt: 'E-commerce & Gateway', en: 'E-commerce & Gateway' },
    title: { pt: 'Básico Urbano | Moda & E-commerce', en: 'Básico Urbano | Fashion E-commerce' },
    short: {
      pt: 'Loja virtual de moda feminina com catálogo de variações, cálculo de frete e múltiplos gateways de pagamento.',
      en: 'Fashion e-commerce store with product variations, dynamic shipping, and payment gateways.',
    },
    description: {
      pt: 'Desenvolvimento e estruturação de loja virtual moderna e responsiva para a marca Básico Urbano. A plataforma conta com catálogo dinâmico de moda com variações (tamanhos e cores), carrinho de compras interativo, cálculo de frete em tempo real e integração com gateway de pagamento seguro para recebimento via PIX, boleto e cartão de crédito.',
      en: 'Development and structuring of a modern and responsive online store for the Básico Urbano brand. The platform features a dynamic fashion catalog with size and color variations, interactive cart, real-time shipping calculation, and secure payment gateway integration for PIX, bank slip, and credit cards.',
    },
    features: {
      pt: [
        'Catálogo dinâmico de produtos com variações (tamanho/cor)',
        'Gateway de pagamento integrado (PIX, Cartão e Boleto)',
        'Cálculo de frete em tempo real e rastreio',
        'Checkout otimizado para alta taxa de conversão',
        'Experiência de navegação fluida em celulares e desktop',
      ],
      en: [
        'Dynamic product catalog with variations (size/color)',
        'Integrated payment gateway (PIX, Card, and Bank slip)',
        'Real-time shipping calculation and order tracking',
        'Checkout optimized for high conversion rates',
        'Smooth mobile-first and desktop shopping experience',
      ],
    },
    stack: ['E-commerce', 'Payment Gateway', 'API de Frete', 'JavaScript', 'Checkout Seguro'],
    link: 'https://www.basicourbano.com.br/',
  },
];

