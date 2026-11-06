export interface ContentVideo {
  id: string;
  brand: string;
  brandCategory: { pt: string; en: string };
  title: { pt: string; en: string };
  desc: { pt: string; en: string };
  instagramUrl: string;
  postId: string;
  badge?: { pt: string; en: string };
  gradient: [string, string];
  thumbnail: string;
}

export interface MediaKitPackage {
  id: string;
  title: { pt: string; en: string };
  category: { pt: string; en: string };
  price: string;
  period?: { pt: string; en: string };
  note?: { pt: string; en: string };
  popular?: boolean;
  featured?: boolean;
  badge?: { pt: string; en: string };
  deliverables: { pt: string[]; en: string[] };
  whatsappMsg: string;
}

export const contentVideos: ContentVideo[] = [
  {
    id: 'hostgator-ai',
    brand: 'HostGator',
    brandCategory: { pt: 'Hospedagem & Nuvem', en: 'Hosting & Cloud' },
    title: {
      pt: 'HostGator AllPass & Hub de Modelos de IA',
      en: 'HostGator AllPass & AI Models Hub',
    },
    desc: {
      pt: 'Apresentação prática da central AllPass da HostGator que unifica ChatGPT, Claude, Gemini e Grok para desenvolvedores e criadores.',
      en: 'Hands-on review of HostGator AllPass unifying ChatGPT, Claude, Gemini, and Grok for developers and creators.',
    },
    instagramUrl: 'https://www.instagram.com/p/DfFaofyymif/',
    postId: 'DfFaofyymif',
    badge: { pt: 'IA & Ferramentas', en: 'AI & Tools' },
    gradient: ['#002845', '#026CB5'],
    thumbnail: '/thumbnails/hostgator-ai.jpg',
  },
  {
    id: 'hostgator-deploy',
    brand: 'HostGator',
    brandCategory: { pt: 'Hospedagem & Infraestrutura', en: 'Hosting & Infrastructure' },
    title: {
      pt: 'Deploy e Infraestrutura para Projetos Web',
      en: 'Web Deploy & Cloud Infrastructure',
    },
    desc: {
      pt: 'Dicas práticas de hospedagem, estabilidade e configuração de sites e aplicações com benefícios exclusivos da HostGator.',
      en: 'Best practices for web hosting, reliability, and deployment with exclusive HostGator advantages.',
    },
    instagramUrl: 'https://www.instagram.com/p/DeHe0ACBhC1/',
    postId: 'DeHe0ACBhC1',
    badge: { pt: 'Desenvolvimento Web', en: 'Web Development' },
    gradient: ['#001C33', '#004A80'],
    thumbnail: '/thumbnails/hostgator-deploy.jpg',
  },
  {
    id: 'red-bull',
    brand: 'Red Bull',
    brandCategory: { pt: 'Inovação & Empreendedorismo', en: 'Innovation & Tech Venture' },
    title: {
      pt: 'Red Bull Basement | Inovação e Ideação Universitária',
      en: 'Red Bull Basement | University Tech Ideation',
    },
    desc: {
      pt: 'Divulgação do maior programa global de ideação tecnológica e inovação promovido pela Red Bull para talentos universitários.',
      en: 'Spotlight on Red Bull Basement, the global tech ideation and innovation challenge for university minds.',
    },
    instagramUrl: 'https://www.instagram.com/p/Ddjo2vLSFl2/',
    postId: 'Ddjo2vLSFl2',
    badge: { pt: 'Inovação & Tech', en: 'Tech & Innovation' },
    gradient: ['#1E0A14', '#B30838'],
    thumbnail: '/thumbnails/red-bull.jpg',
  },
  {
    id: 'cesar-school',
    brand: 'CESAR School',
    brandCategory: { pt: 'Educação & Porto Digital', en: 'Education & Porto Digital' },
    title: {
      pt: 'CESAR School & Ecossistema de Tecnologia de Recife',
      en: 'CESAR School & Recife Tech Ecosystem',
    },
    desc: {
      pt: 'Imersão no ecossistema de inovação aberta, formação acadêmica de ponta e vivência prática no Porto Digital.',
      en: 'Immersive look at open innovation, premier tech education, and hands-on practice inside Recife Porto Digital.',
    },
    instagramUrl: 'https://www.instagram.com/p/DYzjL_SAIIN/',
    postId: 'DYzjL_SAIIN',
    badge: { pt: 'Educação Tech', en: 'Tech Education' },
    gradient: ['#211005', '#C04A00'],
    thumbnail: '/thumbnails/cesar-school.jpg',
  },
  {
    id: 'use-ti-style',
    brand: 'Use_T.I',
    brandCategory: { pt: 'Moda & Lifestyle Dev', en: 'Dev Apparel & Lifestyle' },
    title: {
      pt: 'Estilo e Moda para quem vive de Código',
      en: 'Style & Apparel for Code Enthusiasts',
    },
    desc: {
      pt: 'Coleções autênticas da Use_T.I conectando conforto, qualidade e a verdadeira cultura da comunidade desenvolvedora.',
      en: 'Authentic Use_T.I streetwear tailored for programmers, blending daily comfort with developer culture.',
    },
    instagramUrl: 'https://www.instagram.com/p/Dd_2lp0SZGf/',
    postId: 'Dd_2lp0SZGf',
    badge: { pt: 'Lifestyle Dev', en: 'Dev Lifestyle' },
    gradient: ['#18181B', '#27272A'],
    thumbnail: '/thumbnails/use-ti-style.jpg',
  },
  {
    id: 'use-ti-routine',
    brand: 'Use_T.I',
    brandCategory: { pt: 'Embaixadora & Rotina', en: 'Ambassador & Daily Routine' },
    title: {
      pt: 'Rotina de Programação & Ativação de Marca',
      en: 'Coding Routine & Brand Collab',
    },
    desc: {
      pt: 'Conteúdo dinâmico com unboxing, ativação de cupom exclusivo e presença de marca na rotina real de engenharia de software.',
      en: 'Engaging day-in-the-life reel featuring unboxing, exclusive coupon activation, and software engineering routine.',
    },
    instagramUrl: 'https://www.instagram.com/p/DTsqUWigElb/',
    postId: 'DTsqUWigElb',
    badge: { pt: 'Embaixadora', en: 'Ambassador' },
    gradient: ['#121214', '#3F3F46'],
    thumbnail: '/thumbnails/use-ti-routine.jpg',
  },
  {
    id: 'alura-stars',
    brand: 'Alura',
    brandCategory: { pt: 'Educação & Carreira', en: 'Education & Career' },
    title: {
      pt: 'Alura Stars | Aprendizado Contínuo & Carreira Tech',
      en: 'Alura Stars | Continuous Learning & Tech Career',
    },
    desc: {
      pt: 'Compartilhando caminhos de evolução profissional, capacitação técnica constante e comunidade com o ecossistema Alura.',
      en: 'Inspiring career roadmaps, continuous tech skill enhancement, and community through Alura Stars.',
    },
    instagramUrl: 'https://www.instagram.com/p/DO9gQzggCpn/',
    postId: 'DO9gQzggCpn',
    badge: { pt: 'Alura Stars', en: 'Alura Stars' },
    gradient: ['#021226', '#085BB5'],
    thumbnail: '/thumbnails/alura-stars.jpg',
  },
];

export const mediaKitPackages: MediaKitPackage[] = [
  {
    id: 'stories',
    title: { pt: '3 Stories', en: '3 Stories' },
    category: { pt: 'Engajamento Rápido & Conversão', en: 'Fast Engagement & Conversion' },
    price: 'R$ 150 – 300',
    deliverables: {
      pt: [
        'Sequência narrativa de 3 stories interativos',
        'Sticker de link direto com alta taxa de clique',
        'Enquetes ou caixas de perguntas para retenção',
        'Relatório de alcance e cliques entregue pós-publicação',
      ],
      en: [
        'Interactive 3-story narrative sequence',
        'Direct link sticker for immediate click-throughs',
        'Engagement stickers (polls, questions) for retention',
        'Views and link click performance report included',
      ],
    },
    whatsappMsg: 'Olá Larissa! Tenho interesse no pacote de Stories (3 stories: R$ 150–300).',
  },
  {
    id: 'reel',
    title: { pt: '1 Reel Editado', en: '1 Edited Reel' },
    category: { pt: 'Alcance Orgânico & Viralização', en: 'Organic Reach & Discovery' },
    price: 'R$ 500 – 1.200',
    popular: true,
    badge: { pt: 'Mais Procurado', en: 'Most Popular' },
    deliverables: {
      pt: [
        '1 Reel vertical gravado em alta definição',
        'Roteiro alinhado aos objetivos e tom da marca',
        'Edição dinâmica, legendas sincronizadas e sonorização',
        'Publicação no feed em horário de pico da audiência tech',
        'Menção com collab oficial e interação nos comentários',
      ],
      en: [
        '1 HD vertical Reel tailored for Instagram feed',
        'Custom script aligned with your brand voice',
        'Dynamic editing, synced subtitles, and audio sound design',
        'Published at peak tech community engagement hours',
        'Collab tag invitation and initial comment moderation',
      ],
    },
    whatsappMsg: 'Olá Larissa! Gostaria de contratar a produção de 1 Reel Editado (R$ 500–1.200).',
  },
  {
    id: 'reel-stories',
    title: { pt: 'Combo Reel + Stories', en: 'Reel + Stories Combo' },
    category: { pt: 'Alcance + Reforço de Conversão', en: 'Reach + Conversion Boost' },
    price: 'R$ 800 – 1.500',
    badge: { pt: 'Melhor Custo-Benefício', en: 'Best Value' },
    deliverables: {
      pt: [
        '1 Reel completo produzido e editado para o feed',
        'Sequência de stories de reforço no mesmo dia e no dia seguinte',
        'Chamada para ação direta com sticker de link e cupom exclusivo',
        'Fixação estratégica e direcionamento de tráfego',
        'Relatório completo de alcance, salvamentos e conversão',
      ],
      en: [
        '1 full Reel produced & edited for the feed',
        'Reinforcement story sequence on publishing day + D+1',
        'Direct call-to-action with link sticker and promo coupon',
        'Strategic pinning & traffic redirection',
        'Consolidated report with impressions, saves, and CTR',
      ],
    },
    whatsappMsg: 'Olá Larissa! Tenho interesse no Combo Reel + Stories (R$ 800–1.500).',
  },
  {
    id: 'carrossel',
    title: { pt: 'Post Carrossel', en: 'Carousel Post' },
    category: { pt: 'Didático & Alto Salvamento', en: 'Educational & High Saves' },
    price: 'R$ 300',
    deliverables: {
      pt: [
        'Carrossel informativo no feed com múltiplos slides',
        'Design limpo, didático e de fácil compreensão',
        'Ideal para tutoriais, comparações de ferramentas e guias tech',
        'Foco em retenção, salvamentos e autoridade de marca',
      ],
      en: [
        'Multi-slide educational carousel post in the feed',
        'Clean editorial graphic design with high readability',
        'Ideal for tutorials, tool breakdowns, and developer guides',
        'Engineered for maximum bookmarks, shares, and brand authority',
      ],
    },
    whatsappMsg: 'Olá Larissa! Gostaria de fechar um Post Carrossel no feed (R$ 300).',
  },
  {
    id: 'evento',
    title: { pt: 'Cobertura de Evento Presencial', en: 'On-Site Event Coverage' },
    category: { pt: 'Presença VIP & Ativação', en: 'VIP Presence & Live Activation' },
    price: 'R$ 1.000 – 3.000',
    note: { pt: '(depende da duração)', en: '(depends on duration)' },
    deliverables: {
      pt: [
        'Presença física no evento (conferência, hackathon, meetup, estande)',
        'Cobertura em tempo real nos stories com bastidores e ativações',
        'Interação com palestrantes, público e menções aos patrocinadores',
        'Takeaways técnicos e destaques das palestras ou estande',
        'Alinhamento prévio para gravação de takes para reels',
      ],
      en: [
        'On-site attendance (conference, hackathon, meetup, booth)',
        'Real-time live story coverage featuring behind-the-scenes',
        'Interactions with speakers, attendees, and sponsor shoutouts',
        'Technical key takeaways and booth highlight stories',
        'Pre-event alignment and video capture for potential reels',
      ],
    },
    whatsappMsg: 'Olá Larissa! Gostaria de solicitar orçamento para Cobertura de Evento Presencial (R$ 1.000–3.000).',
  },
  {
    id: 'pacote-mensal',
    title: { pt: 'Pacote Mensal', en: 'Monthly Retainer' },
    category: { pt: 'Embaixada & Parceria Estratégica', en: 'Ambassador & Retainer' },
    price: 'R$ 2.000 – 5.000',
    period: { pt: '/ mês', en: '/ month' },
    featured: true,
    badge: { pt: 'Plano Parceiro VIP', en: 'VIP Retainer Plan' },
    deliverables: {
      pt: [
        '4 Reels gravados, editados e publicados ao longo do mês',
        '8 Stories distribuídos com links, enquetes e CTAs',
        'Cobertura de ações, lançamentos e campanhas prioritárias',
        'Alinhamento de calendário editorial e roteiros conjuntos',
        'Destaque no perfil com link permanente durante a parceria',
        'Exclusividade no segmento de atuação (sob consulta)',
      ],
      en: [
        '4 professionally produced Reels published throughout the month',
        '8 targeted Stories with link stickers, polls, and clear CTAs',
        'Dedicated coverage of key launches, feature drops, and events',
        'Joint monthly editorial planning and script pre-alignment',
        'Featured link placement during the campaign month',
        'Segment exclusivity available upon confirmation',
      ],
    },
    whatsappMsg: 'Olá Larissa! Quero fechar o Pacote Mensal de Conteúdo (4 reels + 8 stories + cobertura de ações: R$ 2k–5k).',
  },
];
