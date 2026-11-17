export interface TranslationSet {
    sidebar_subtitle: string;
    menu_about: string;
    menu_experience: string;
    menu_academic: string;
    menu_academic_projects: string;
    menu_projects: string;
    menu_partnerships: string;
    menu_skills: string;
    menu_certificates: string;
    menu_contact: string;
    hero_title: string;
    summary_label: string;
    summary_short: string;
    summary_content: string;
    exp_h1: string;
    exp_bb_role: string;
    exp_bb_desc: string;
    exp_bbts_role: string;
    exp_bbts_desc: string;
    exp_senac_role: string;
    exp_senac_desc: string;
    exp_bb_qintess_desc: string;
    exp_fcx_desc: string;
    exp_bsa_desc: string;
    exp_cmtech_role: string;
    exp_cmtech_desc: string;
    acad_h1: string;
    acad_mestrado_title: string;
    acad_mestrado_status: string;
    acad_mestrado_research: string;
    acad_mestrado_btn: string;
    acad_tecnologo_title: string;
    acad_tecnologo_embarque: string;
    acad_tcc_btn: string;
    acad_lattes_btn: string;
    acad_proj_h1: string;
    acad_proj_petribu_title: string;
    acad_proj_petribu_desc: string;
    acad_proj_gp2_title: string;
    acad_proj_gp2_desc: string;
    proj_h1: string;
    proj_google_title: string;
    proj_google_desc: string;
    proj_google_impact: string;
    proj_google_impact_1: string;
    proj_google_impact_2: string;
    proj_google_impact_3: string;
    proj_hostgator_title: string;
    proj_hostgator_desc: string;
    proj_hostgator_impact: string;
    proj_hostgator_impact_1: string;
    proj_hostgator_impact_2: string;
    proj_hostgator_impact_3: string;
    proj_alura_title: string;
    proj_alura_desc: string;
    proj_alura_more: string;
    proj_alura_impact: string;
    proj_alura_impact_1: string;
    proj_alura_impact_2: string;
    proj_rfec_title: string;
    proj_rfec_desc: string;
    proj_rfec_impact: string;
    proj_rfec_impact_1: string;
    proj_rfec_impact_2: string;
    proj_mentoria_title: string;
    proj_mentoria_desc: string;
    proj_mentoria_impact: string;
    proj_mentoria_impact_1: string;
    proj_mentoria_impact_2: string;
    proj_hackathons_title: string;
    proj_hackathons_desc: string;
    proj_hackathons_impact: string;
    proj_hackathons_impact_1: string;
    proj_hackathons_impact_2: string;
    proj_hackathons_impact_3: string;
    proj_partners_h1: string;
    proj_partners_hostgator_title: string;
    proj_partners_hostgator_desc: string;
    proj_partners_hostgator_btn: string;
    proj_partners_alura_desc: string;
    proj_partners_alura_btn: string;
    proj_partners_usetii_title: string;
    proj_partners_usetii_desc: string;
    proj_partners_usetii_btn: string;
    proj_partners_fiap_title: string;
    proj_partners_fiap_desc: string;
    proj_partners_fiap_btn: string;
    proj_partners_cdc_title: string;
    proj_partners_cdc_desc: string;
    proj_partners_cdc_btn: string;
    contact_h1: string;
    contact_addr: string;
    contact_email: string;
    contact_phone: string;
    contact_phone_val: string;
    contact_social: string;
    contact_subtitle: string;
    contact_form_title: string;
    contact_form_name: string;
    contact_form_email: string;
    contact_form_msg: string;
    contact_form_send: string;
    contact_form_success: string;
    stat_exp_title: string;
    stat_exp_val: string;
    stat_acad_title: string;
    stat_acad_val: string;
    stat_comm_title: string;
    stat_comm_val: string;
    stat_stack_title: string;
    stat_stack_val: string;
    footer_rights: string;
    mentorship_banner_title: string;
    mentorship_banner_desc: string;
    mentorship_banner_btn: string;
    skills_databases: string;
    skills_frontend: string;
    skills_backend: string;
    skills_aws: string;
    skills_arch: string;
    skills_devops: string;
    skills_ia: string;
    skills_others: string;
    skills_versioning: string;
    skills_styling: string;
    skills_agile: string;
    skills_messaging: string;
    skills_testing: string;
    skills_apis: string;
    certificados_h1: string;
    label_community: string;
    label_leadership: string;
    label_mentorship: string;
    label_hackathons: string;
    acad_proj_label_dev: string;
    acad_proj_label_manager: string;
    date_present: string;
    date_completed: string;
    cv_button_pt: string;
    cv_button_en: string;
    link_lattes: string;
    link_github: string;
    link_instagram: string;
    link_linkedin: string;
}

export const translations: Record<'pt' | 'en', TranslationSet> = {
    pt: {
        sidebar_subtitle: "Desenvolvedora, Professora e Analista",
        menu_about: "Sobre",
        menu_experience: "Experiência",
        menu_academic: "Acadêmico",
        menu_academic_projects: "Projetos Acadêmicos",
        menu_projects: "Participações & Projetos",
        menu_partnerships: "Parcerias",
        menu_skills: "Hard Skills",
        menu_certificates: "Certificados",
        menu_contact: "Contato",
        hero_title: "Desenvolvedora de Software Sênior @BBTS | Mestranda CIn/UFPE",
        summary_label: "Resumo Profissional",
        summary_short: `Sou pernambucana, tenho {age} anos e atuo como <span class="highlight">Desenvolvedora de Software Sênior na BBTS</span>. Com mais de <span class="highlight">4 anos de experiência</span>, uno Engenharia Full Stack e Inteligência Artificial no desenvolvimento de soluções escaláveis com <span class="highlight">IA Generativa, AI Agents, RAG e MCP</span>. Em paralelo à indústria, sou <span class="highlight">mestranda no CIn/UFPE</span> e fundadora da <span class="highlight">Recife Front-End Community (RFEC)</span>.`,
        summary_content: `Sou pernambucana, tenho {age} anos e atuo como <span class="highlight">Desenvolvedora de Software Sênior na BBTS</span>. Com mais de <span class="highlight">4 anos de experiência</span> na construção de soluções escaláveis, minha atuação atual une <span class="highlight">Engenharia Full Stack e Inteligência Artificial</span>. Tenho forte vivência no desenvolvimento de aplicações com <span class="highlight">IA Generativa</span>, <span class="highlight">AI Agents</span>, <span class="highlight">Retrieval-Augmented Generation (RAG)</span> e <span class="highlight">Model Context Protocol (MCP)</span>, além de arquiteturas com React, NestJS e Next.js. Em paralelo à indústria, sou <span class="highlight">mestranda em Ciência da Computação no CIn/UFPE</span>, <span class="highlight">Embaixadora Estudantil do Google Gemini</span> e fundadora da <span class="highlight">Recife Front-End Community (RFEC)</span>, sempre priorizando qualidade de código e impacto na comunidade de tecnologia.`,
        exp_h1: "Experiência Profissional",
        exp_bb_role: "Desenvolvedora FULL STACK (Pleno)",
        exp_bb_desc: `<ul class="timeline-bullets">
<li>Desenvolvimento front-end modular com <strong>Angular</strong> e arquitetura de <strong>Micro Frontends</strong> para aplicações bancárias de alta escala.</li>
<li>Construção de microsserviços em <strong>NestJS</strong> e esteiras automatizadas de CI/CD com <strong>Jenkins</strong> e <strong>Argo</strong>.</li>
<li>Atuação técnica em <strong>DevRel</strong>, mentoria e difusão de boas práticas de engenharia de software entre equipes.</li>
</ul>`,
        exp_bbts_role: "Desenvolvedora FULL STACK (Sênior)",
        exp_bbts_desc: `<ul class="timeline-bullets">
<li>Arquitetura e desenvolvimento de soluções baseadas em <strong>AI Agents</strong>, <strong>RAG</strong> e <strong>MCP (Model Context Protocol)</strong>.</li>
<li>Automação de fluxos complexos, Skills e integrações inteligentes para eficiência operacional corporativa.</li>
<li>Liderança técnica na modernização de sistemas corporativos e esteiras com IA.</li>
</ul>`,
        exp_senac_role: "Professora de Desenvolvimento de Sistemas",
        exp_senac_desc: `<ul class="timeline-bullets">
<li>Docência em Desenvolvimento de Sistemas no MédioTec Senac Pernambuco.</li>
<li>Formação prática de novos desenvolvedores em Front-End, Back-End (Node.js/APIs), bancos relacionais/NoSQL e versionamento com Git.</li>
</ul>`,
        exp_bb_qintess_desc: `<ul class="timeline-bullets">
<li>Desenvolvimento de módulos corporativos de missão crítica para o Banco do Brasil com Angular e TypeScript.</li>
<li>Otimização de performance, estabilidade e garantia de cobertura de testes unitários.</li>
</ul>`,
        exp_fcx_desc: `<ul class="timeline-bullets">
<li>Desenvolvimento de arquitetura front-end e micro frontends para o Marketplace e Seller Center da Ferreira Costa.</li>
<li>Integração de serviços com React, Next.js e NestJS, assegurando alta disponibilidade e escalabilidade.</li>
</ul>`,
        exp_bsa_desc: `<ul class="timeline-bullets">
<li>Construção de dashboards analíticos e interfaces interativas de alta performance com Next.js e Django.</li>
<li>Comunicação em tempo real via WebSockets, autenticação segura e integração de novos provedores.</li>
</ul>`,
        exp_cmtech_role: "Desenvolvedora Full Stack (Estágio)",
        exp_cmtech_desc: `<ul class="timeline-bullets">
<li>Desenvolvimento de sistema de atendimento em tempo real via chat com ReactJS, MUI e mensageria instantânea via SignalR.</li>
<li>Persistência e APIs REST em .NET Core com banco de dados PostgreSQL.</li>
</ul>`,
        acad_h1: "Histórico Acadêmico",
        acad_mestrado_title: "Mestrado em Ciências da Computação",
        acad_mestrado_status: "Status: Dissertação em andamento (2024.2 a 2026.2)",
        acad_mestrado_research: "Área de Concentração: Engenharia de Software e Linguagens de Programação. Pesquisa focada em avaliação da maturidade de projetos de software com auxílio de Inteligência Artificial. Orientador: Prof. Dr. Hermano Perrelli de Moura.",
        acad_mestrado_btn: "Acessar Dissertação (Em breve)",
        acad_tecnologo_title: "Sistemas para Internet (Tecnólogo)",
        acad_tecnologo_embarque: "Formada pelo programa Embarque Digital (parceria entre Porto Digital e Prefeitura do Recife).",
        acad_tcc_btn: "Ver Projeto de TCC",
        acad_lattes_btn: "Ver Currículo Lattes",
        acad_proj_h1: "Projetos Acadêmicos",
        acad_proj_petribu_title: "Projeto Petribu: Sistema de Gestão Operacional (FIEPE)",
        acad_proj_petribu_desc: `Atuo no desenvolvimento de um sistema de gestão operacional modular e escalável para ambientes industriais, com frontend em ReactJS, VueJS, interface reativa e offline-first, e backend em Python, suportando APIs REST e integração com Apache Kafka. O sistema utiliza banco de dados relacional (PostgreSQL, Oracle) com cache em Redis, e conta com Docker, Kubernetes e CI/CD para automação e deploy. Estruturado em módulos Operacional, Logístico, Alertas, Manutenção e BI/Relatórios, permite controle de ordens de serviço, roteirização inteligente, notificações, gestão de manutenção e indicadores em tempo real.`,
        acad_proj_gp2_title: "Grupo de pesquisa CIn UFPE: GP2 NOW",
        acad_proj_gp2_desc: "Responsável pela coordenação das atividades do grupo, definição de prioridades de pesquisa e supervisão da execução eficiente das iniciativas acadêmicas.",
        proj_h1: "Participações & Projetos",
        proj_google_title: "Embaixadora Estudantil do Google (2026)",
        proj_google_desc: "Selecionada como Embaixadora Estudantil do Google 2026 representando o Centro de Informática da UFPE (CIn-UFPE). Atuo como ponte conectando a comunidade acadêmica às tecnologias, ferramentas de Inteligência Artificial, programas e oportunidades do ecossistema Google, fomentando eventos, capacitação técnica e inovação entre estudantes e desenvolvedores.",
        proj_google_impact: "Impacto Acadêmico & Tecnológico",
        proj_google_impact_1: "Disseminação de ferramentas Google e Inteligência Artificial no CIn-UFPE",
        proj_google_impact_2: "Organização de workshops práticos, palestras e eventos técnicos",
        proj_google_impact_3: "Conexão direta entre estudantes e oportunidades do ecossistema Google",
        proj_hostgator_title: "Embaixadora HostGator",
        proj_hostgator_desc: "Embaixadora oficial da HostGator, atuando na disseminação de conhecimento sobre desenvolvimento web, infraestrutura em nuvem, hospedagem e ferramentas inovadoras de inteligência artificial como o HostGator AllPass (central unificada de múltiplos modelos de IA). Promovo conteúdos didáticos e benefícios exclusivos para impulsionar projetos de tecnologia.",
        proj_hostgator_impact: "Impacto na Comunidade Tech",
        proj_hostgator_impact_1: "Produção de conteúdo prático sobre desenvolvimento, nuvem e IA",
        proj_hostgator_impact_2: "Apresentação e testes de soluções de ponta como o HostGator AllPass",
        proj_hostgator_impact_3: "Cupons promocionais e benefícios exclusivos para desenvolvedores",
        proj_alura_title: "Embaixadora Alura (Alura Stars)",
        proj_alura_desc: "Selecionada para o programa Alura Stars, uma comunidade de desenvolvedores que produzem conteúdos de tecnologia de alta qualidade. Atuo como facilitadora do aprendizado em tecnologia, contribuindo com a criação de conteúdos, participação em workshops e palestras, além de promover a divulgação de projetos e iniciativas da Alura, fortalecendo a comunidade e inspirando outros desenvolvedores.",
        proj_alura_more: "Mais informações",
        proj_alura_impact: "Impacto na Comunidade",
        proj_alura_impact_1: "Mentoria de novos alunos",
        proj_alura_impact_2: "Criação de conteúdo técnico e workshops",
        proj_rfec_title: "Fundadora e Líder | RFEC – Recife Frontend Community",
        proj_rfec_desc: "Responsável pela coordenação da comunidade, organização de eventos, promoção de iniciativas educativas e fortalecimento da rede de profissionais de frontend e entre outras áreas na região.",
        proj_rfec_impact: "Impacto na Comunidade",
        proj_rfec_impact_1: "Organização de Meetups e eventos periódicos",
        proj_rfec_impact_2: "Fortalecimento da rede com profissionais de frontend",
        proj_mentoria_title: "Mentora e Palestrante",
        proj_mentoria_desc: "Sou mentora e palestrante na área de tecnologia, com experiência em orientar e inspirar novos talentos, especialmente mulheres na área de TI, como mentora do Tech Woman. Já apresentei palestras sobre Front-End e compartilhei minha trajetória acadêmica, incluindo meu mestrado iniciado aos 19 anos. Tenho experiência de colaboração com parceiros de destaque, como Porto Digital, Magalu Cloud, RecNPlay, Centro de Informática, Liferay e Banco do Brasil, sempre buscando conectar conhecimento, inovação e oportunidades para a comunidade tecnológica.",
        proj_mentoria_impact: "Destaques de Mentoria",
        proj_mentoria_impact_1: "Mentoria individual de transição de carreira no Tech Woman",
        proj_mentoria_impact_2: "Palestras no RecNPlay, Magalu Cloud e Porto Digital",
        proj_hackathons_title: "Hackathons",
        proj_hackathons_desc: "Participação ativa em hackathons voltados ao desenvolvimento de soluções inovadoras, com atuação em equipe sob pressão e prazos curtos. Experiência em ideação, prototipação e desenvolvimento de aplicações utilizando tecnologias web e metodologias ágeis.",
        proj_hackathons_impact: "Destaques de Prêmios",
        proj_hackathons_impact_1: "1º lugar no Hackathon da Prefeitura do Recife",
        proj_hackathons_impact_2: "1º lugar no Hackathon do Banco do Brasil",
        proj_hackathons_impact_3: "Destaque acadêmico: Conquista de 2 hackathons na mesma semana pelo CIn-UFPE",
        proj_partners_h1: "Parcerias",
        proj_partners_hostgator_title: "HostGator AllPass & Hospedagem",
        proj_partners_hostgator_desc: "Plataforma all-in-one da HostGator que reúne ChatGPT, Claude, Gemini e Grok em uma única assinatura com desconto especial.",
        proj_partners_hostgator_btn: "Acessar HostGator",
        proj_partners_alura_desc: "Ganhe desconto na sua assinatura usando meu link de indicação.",
        proj_partners_alura_btn: "Obter desconto",
        proj_partners_usetii_title: "Embaixadora Senior",
        proj_partners_usetii_desc: "Moda para quem vive de código! Use o meu cupom e garanta o estilo da laridev.",
        proj_partners_usetii_btn: "Visitar Loja",
        proj_partners_fiap_title: "Bolsa de estudos",
        proj_partners_fiap_desc: "Bolsa de descontos em graduações e pós graduações na melhor faculdade de tecnologia.",
        proj_partners_fiap_btn: "Saiba mais no Instagram",
        proj_partners_cdc_title: "Livros para Devs!",
        proj_partners_cdc_desc: "Editora de livros de TI com o selo de didática do grupo Alura.",
        proj_partners_cdc_btn: "Ver Livros",
        contact_h1: "Me contate",
        contact_addr: "Endereço",
        contact_email: "E-mail",
        contact_phone: "Telefone",
        contact_phone_val: "+55 81 9 9969-9386",
        contact_social: "Social",
        contact_subtitle: "Tem alguma dúvida, proposta ou quer trocar uma ideia sobre tecnologia? Fique à vontade para preencher o formulário ou entrar em contato direto pelas redes sociais.",
        contact_form_title: "Envie uma mensagem",
        contact_form_name: "Seu Nome",
        contact_form_email: "Seu E-mail",
        contact_form_msg: "Mensagem",
        contact_form_send: "Enviar Mensagem",
        contact_form_success: "Mensagem enviada com sucesso! Entrarei em contato em breve.",
        stat_exp_title: "Experiência",
        stat_exp_val: "4+ Anos",
        stat_acad_title: "Mestrado CIn-UFPE",
        stat_acad_val: "Em Andamento",
        stat_comm_title: "Comunidade (RFEC)",
        stat_comm_val: "2000+ Membros",
        stat_stack_title: "Stack Principal",
        stat_stack_val: "Full Stack",
        footer_rights: "Todos os direitos reservados.",
        mentorship_banner_title: "Mentoria de Carreira & Tecnologia",
        mentorship_banner_desc: "Quer evoluir na programação, tirar dúvidas de arquitetura ou planejar sua carreira tech comigo? Tenho vagas limitadas para mentorados! Faça sua inscrição para o processo seletivo.",
        mentorship_banner_btn: "Fazer Inscrição na Mentoria",
        skills_databases: "Bancos de Dados",
        skills_frontend: "Front-end",
        skills_backend: "Back-end",
        skills_aws: "AWS",
        skills_arch: "Arquitetura & Padrões",
        skills_devops: "DevOps & Infraestrutura",
        skills_ia: "Inteligência Artificial & IA Assistida",
        skills_others: "Outras Ferramentas",
        skills_versioning: "Versionamento & Documentação",
        skills_styling: "Estilização",
        skills_agile: "Metodologias Ágeis",
        skills_messaging: "Mensageria",
        skills_testing: "Testes",
        skills_apis: "APIs & Protocolos",
        certificados_h1: "Certificações",
        label_community: "Comunidade",
        label_leadership: "Liderança",
        label_mentorship: "Mentoria",
        label_hackathons: "Premiações",
        acad_proj_label_dev: "Desenvolvedora Bolsista",
        acad_proj_label_manager: "Gerente de Projetos e Eventos",
        date_present: "Atualmente",
        date_completed: "CONCLUÍDO",
        cv_button_pt: "Baixar CV (PT)",
        cv_button_en: "Download CV (EN · Em breve)",
        link_lattes: "Lattes",
        link_github: "GitHub",
        link_instagram: "Instagram",
        link_linkedin: "LinkedIn"
    },
    en: {
        sidebar_subtitle: "Developer, Teacher and Analyst",
        menu_about: "About",
        menu_experience: "Experience",
        menu_academic: "Academic",
        menu_academic_projects: "Academic Projects",
        menu_projects: "Community & Projects",
        menu_partnerships: "Partnerships",
        menu_skills: "Hard Skills",
        menu_certificates: "Certificates",
        menu_contact: "Contact",
        hero_title: "Senior Software Developer @BBTS | MSc Student CIn/UFPE",
        summary_label: "Professional Summary",
        summary_short: `Based in Pernambuco, I am {age} years old and work as a <span class="highlight">Senior Software Developer at BBTS</span>. With over <span class="highlight">4 years of experience</span>, I bridge Full Stack Engineering and Artificial Intelligence building scalable solutions with <span class="highlight">Generative AI, AI Agents, RAG, and MCP</span>. In parallel, I am a <span class="highlight">Master's student at CIn/UFPE</span> and founder of the <span class="highlight">Recife Front-End Community (RFEC)</span>.`,
        summary_content: `I am from Pernambuco, I am {age} years old, and I work as a <span class="highlight">Senior Software Developer at BBTS</span>. With over <span class="highlight">4 years of experience</span> building scalable solutions, my current work combines <span class="highlight">Full Stack Engineering and Artificial Intelligence</span>. I have solid expertise developing applications with <span class="highlight">Generative AI</span>, <span class="highlight">AI Agents</span>, <span class="highlight">Retrieval-Augmented Generation (RAG)</span>, and <span class="highlight">Model Context Protocol (MCP)</span>, alongside architectures with React, NestJS, and Next.js. Alongside industry, I am a <span class="highlight">Master's student in Computer Science at CIn/UFPE</span>, <span class="highlight">Google Gemini Student Ambassador</span>, and founder of the <span class="highlight">Recife Front-End Community (RFEC)</span>, always prioritizing code quality and community impact.`,
        exp_h1: "Professional Experience",
        exp_bb_role: "FULL STACK Developer (Mid level)",
        exp_bb_desc: `<ul class="timeline-bullets">
<li>Front-end engineering with <strong>Angular</strong> and <strong>Micro Frontends</strong> architecture for high-scale banking applications.</li>
<li>Backend microservices in <strong>NestJS</strong> and automated CI/CD pipelines with <strong>Jenkins</strong> and <strong>Argo</strong>.</li>
<li>Technical <strong>DevRel</strong> leadership, engineering mentorship, and promoting best coding standards across teams.</li>
</ul>`,
        exp_bbts_role: "FULL STACK Developer (Senior)",
        exp_bbts_desc: `<ul class="timeline-bullets">
<li>Architecture and engineering of solutions powered by <strong>AI Agents</strong>, <strong>RAG</strong>, and <strong>MCP (Model Context Protocol)</strong>.</li>
<li>Automation of complex workflows, custom Skills, and intelligent integrations for operational efficiency.</li>
<li>Technical leadership on application modernization and LLM-integrated enterprise services.</li>
</ul>`,
        exp_senac_role: "Systems Development Teacher",
        exp_senac_desc: `<ul class="timeline-bullets">
<li>Teaching Systems Development at MédioTec Senac Pernambuco.</li>
<li>Hands-on training in Front-End, Back-End (Node.js/APIs), relational/NoSQL databases, and Git versioning.</li>
</ul>`,
        exp_bb_qintess_desc: `<ul class="timeline-bullets">
<li>Development of mission-critical corporate modules for Banco do Brasil using Angular and TypeScript.</li>
<li>Performance tuning, stability enhancements, and unit test coverage.</li>
</ul>`,
        exp_fcx_desc: `<ul class="timeline-bullets">
<li>Front-end architecture and micro frontends for Ferreira Costa's Marketplace and Seller Center.</li>
<li>Service integration with React, Next.js, and NestJS, ensuring agile deliveries and high availability.</li>
</ul>`,
        exp_bsa_desc: `<ul class="timeline-bullets">
<li>Development of high-performance interactive dashboards and interfaces using Next.js and Django.</li>
<li>Real-time WebSocket communication, secure authentication, and third-party provider integration.</li>
</ul>`,
        exp_cmtech_role: "Full Stack Developer (Internship)",
        exp_cmtech_desc: `<ul class="timeline-bullets">
<li>Real-time chat support system using ReactJS, MUI, and instant messaging via SignalR.</li>
<li>Persistence and REST APIs in .NET Core with PostgreSQL database.</li>
</ul>`,
        acad_h1: "Academic History",
        acad_mestrado_title: "Master's in Computer Science",
        acad_mestrado_status: "Status: Dissertation in progress (2024.2 to 2026.2)",
        acad_mestrado_research: "Concentration Area: Software Engineering and Programming Languages. Research focused on project maturity assessment with Artificial Intelligence assistance. Advisor: Prof. Dr. Hermano Perrelli de Moura.",
        acad_mestrado_btn: "Access Dissertation (Soon)",
        acad_tecnologo_title: "Internet Systems (Technologist)",
        acad_tecnologo_embarque: "Graduated through the Embarque Digital scholarship program (Porto Digital & Recife City Hall).",
        acad_tcc_btn: "View TCC Project",
        acad_lattes_btn: "View Lattes Curriculum",
        acad_proj_h1: "Academic Projects",
        acad_proj_petribu_title: "Petribu Project: Operational Management System (FIEPE)",
        acad_proj_petribu_desc: `I work on the development of a modular and scalable operational management system for industrial environments, with a frontend in ReactJS, VueJS, reactive and offline-first interface, and backend in Python, supporting REST APIs and integration with Apache Kafka. The system uses a relational database (PostgreSQL, Oracle) with caching in Redis, and uses Docker, Kubernetes, and CI/CD for automation and deploy. Structured in Operational, Logistical, Alerts, Maintenance, and BI/Reports modules, it allows control of work orders, smart routing, notifications, maintenance management, and real-time indicators.`,
        acad_proj_gp2_title: "GP2 NOW: Research Group CIn UFPE",
        acad_proj_gp2_desc: "Responsible for coordinating the group's activities, defining research priorities, and supervising the efficient execution of academic initiatives.",
        proj_h1: "Community & Projects",
        proj_google_title: "Google Student Ambassador (2026)",
        proj_google_desc: "Selected as Google Student Ambassador 2026 representing the Center of Informatics at UFPE (CIn-UFPE). Acting as a bridge connecting the academic community to Google technologies, AI tools, programs, and opportunities, fostering hands-on workshops and innovation among students and developers.",
        proj_google_impact: "Academic & Tech Impact",
        proj_google_impact_1: "Dissemination of Google technologies and Artificial Intelligence at CIn-UFPE",
        proj_google_impact_2: "Organization of hands-on workshops, tech talks, and hackathons",
        proj_google_impact_3: "Direct connection between students and opportunities across the Google ecosystem",
        proj_hostgator_title: "HostGator Ambassador",
        proj_hostgator_desc: "Official HostGator Ambassador, sharing knowledge about web development, cloud infrastructure, hosting, and cutting-edge AI tools such as HostGator AllPass (unified multi-AI model hub). Producing educational content and exclusive community benefits to accelerate tech careers.",
        proj_hostgator_impact: "Tech Community Impact",
        proj_hostgator_impact_1: "Hands-on content production on web dev, cloud, and AI",
        proj_hostgator_impact_2: "Showcasing state-of-the-art developer tools like HostGator AllPass",
        proj_hostgator_impact_3: "Exclusive discounts and community promotional codes",
        proj_alura_title: "Alura Ambassador (Alura Stars)",
        proj_alura_desc: "Selected for the Alura Stars program, a community of developers who produce high-quality tech content. I act as a facilitator of learning in technology, contributing to content creation, workshops, and lectures, in addition to promoting Alura's projects and initiatives, strengthening the community and inspiring other developers.",
        proj_alura_more: "More information",
        proj_alura_impact: "Community Impact",
        proj_alura_impact_1: "New student mentoring",
        proj_alura_impact_2: "Technical content creation and workshops",
        proj_rfec_title: "Founder and Leader | RFEC – Recife Frontend Community",
        proj_rfec_desc: "Responsible for community coordination, event organization, promoting educational initiatives, and strengthening the network of frontend professionals and other areas in the region.",
        proj_rfec_impact: "Community Impact",
        proj_rfec_impact_1: "Periodic Meetups and events organization",
        proj_rfec_impact_2: "Strengthening the network with frontend professionals",
        proj_mentoria_title: "Mentor and Speaker",
        proj_mentoria_desc: "I am a mentor and speaker in the tech field, with experience in guiding and inspiring new talent, especially women in IT, as a Tech Woman mentor. I have presented talks about Front-End and shared my academic journey, including my master's started at age 19. I have experience collaborating with prominent partners like Porto Digital, Magalu Cloud, RecNPlay, Center of Informatics, Liferay, and Banco do Brasil, always seeking to connect knowledge, innovation, and opportunities for the tech community.",
        proj_mentoria_impact: "Mentorship Highlights",
        proj_mentoria_impact_1: "Individual mentoring for career transition in Tech Woman",
        proj_mentoria_impact_2: "Speeches at RecNPlay, Magalu Cloud, and Porto Digital",
        proj_hackathons_title: "Hackathons",
        proj_hackathons_desc: "Active participation in hackathons focused on developing innovative solutions, working in teams under pressure and tight deadlines. Experience in ideation, prototyping, and application development using web technologies and agile methodologies.",
        proj_hackathons_impact: "Highlights and Awards",
        proj_hackathons_impact_1: "1st place in the Recife City Hall Hackathon",
        proj_hackathons_impact_2: "1st place in the Banco do Brasil Hackathon",
        proj_hackathons_impact_3: "Academic spotlight: Won 2 hackathons in the same week representing CIn-UFPE",
        proj_partners_h1: "Partnerships",
        proj_partners_hostgator_title: "HostGator AllPass & Hosting",
        proj_partners_hostgator_desc: "HostGator all-in-one platform bringing together ChatGPT, Claude, Gemini, and Grok into a single subscription with special partner discount.",
        proj_partners_hostgator_btn: "Visit HostGator",
        proj_partners_alura_desc: "Get a discount on your subscription using my referral link.",
        proj_partners_alura_btn: "Get discount",
        proj_partners_usetii_title: "Senior Ambassador",
        proj_partners_usetii_desc: "Fashion for those who live by code! Use my coupon and guarantee the laridev style.",
        proj_partners_usetii_btn: "Visit Store",
        proj_partners_fiap_title: "Scholarship",
        proj_partners_fiap_desc: "Scholarship discounts for undergraduate and graduate programs at the best tech college.",
        proj_partners_fiap_btn: "Learn more on Instagram",
        proj_partners_cdc_title: "Books for Devs!",
        proj_partners_cdc_desc: "IT book publisher with the Alura group's pedagogical seal.",
        proj_partners_cdc_btn: "View Books",
        contact_h1: "Contact Me",
        contact_addr: "Address",
        contact_email: "E-mail",
        contact_phone: "Phone",
        contact_phone_val: "+55 81 9 9969-9386",
        contact_social: "Social",
        contact_subtitle: "Have a question, proposal, or want to discuss technology? Feel free to fill in the form or reach out directly through social media.",
        contact_form_title: "Send a message",
        contact_form_name: "Your Name",
        contact_form_email: "Your E-mail",
        contact_form_msg: "Message",
        contact_form_send: "Send Message",
        contact_form_success: "Message sent successfully! I'll get back to you soon.",
        stat_exp_title: "Experience",
        stat_exp_val: "4+ Years",
        stat_acad_title: "MSc CIn-UFPE",
        stat_acad_val: "In Progress",
        stat_comm_title: "Community (RFEC)",
        stat_comm_val: "2000+ Members",
        stat_stack_title: "Core Stack",
        stat_stack_val: "Full Stack",
        footer_rights: "All rights reserved.",
        mentorship_banner_title: "Career & Tech Mentorship",
        mentorship_banner_desc: "Want to grow in software engineering, ask architecture questions, or plan your tech career with me? I have limited slots for mentees! Apply for the selection process.",
        mentorship_banner_btn: "Apply for Mentorship",
        skills_databases: "Databases",
        skills_frontend: "Front-end",
        skills_backend: "Back-end",
        skills_aws: "AWS",
        skills_arch: "Architecture & Patterns",
        skills_devops: "DevOps & Infrastructure",
        skills_ia: "Artificial Intelligence & AI Assisted",
        skills_others: "Other Tools",
        skills_versioning: "Versioning & Documentation",
        skills_styling: "Styling",
        skills_agile: "Agile Methodologies",
        skills_messaging: "Messaging",
        skills_testing: "Testing",
        skills_apis: "APIs & Protocols",
        certificados_h1: "Certifications",
        label_community: "Community",
        label_leadership: "Leadership",
        label_mentorship: "Mentorship",
        label_hackathons: "Awards",
        acad_proj_label_dev: "Scholarship Developer",
        acad_proj_label_manager: "Project and Events Manager",
        date_present: "Present",
        date_completed: "COMPLETED",
        cv_button_pt: "Download CV (PT)",
        cv_button_en: "Download CV (EN · Soon)",
        link_lattes: "Lattes",
        link_github: "GitHub",
        link_instagram: "Instagram",
        link_linkedin: "LinkedIn"
    }
};
