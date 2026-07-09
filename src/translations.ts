export interface TranslationSet {
    sidebar_subtitle: string;
    menu_about: string;
    menu_experience: string;
    menu_academic: string;
    menu_academic_projects: string;
    menu_projects: string;
    menu_partnerships: string;
    menu_skills: string;
    menu_contact: string;
    hero_title: string;
    summary_label: string;
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
    acad_mestrado_btn: string;
    acad_tecnologo_title: string;
    acad_tcc_btn: string;
    acad_lattes_btn: string;
    acad_proj_h1: string;
    acad_proj_petribu_title: string;
    acad_proj_petribu_desc: string;
    acad_proj_gp2_title: string;
    acad_proj_gp2_desc: string;
    proj_h1: string;
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
    proj_partners_h1: string;
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
        menu_contact: "Contato",
        hero_title: "Desenvolvedora, Professora e Analista de Tecnologia",
        summary_label: "Resumo Profissional",
        summary_content: `Sou pernambucana, tenho {age} anos e atuo como <span class="highlight">Desenvolvedora Full Stack</span>, com mais de <span class="highlight">4 anos de experiência</span> na construção de soluções escaláveis, performáticas e orientadas a resultados. Possuo experiência em arquitetura de <span class="highlight">Micro Frontends</span>, desenvolvimento de plataformas de Marketplace e implementação de sistemas críticos de back-end com NestJS e Django, sempre priorizando qualidade de código, boas práticas e alta performance.
            <br><br>
            Atualmente, trabalho com <span class="highlight">agentes inteligentes</span>, aplicando <span class="highlight">skills</span>, <span class="highlight">MCPs</span> e automação para criar fluxos de trabalho mais ágeis, assistentes de suporte e integrações entre sistemas. Essa abordagem combina inteligência artificial com engenharia de software para gerar experiências mais colaborativas e eficientes.
            <br><br>
            Aos 19 anos, iniciei o mestrado em <span class="highlight">Ciências da Computação</span>, aprofundando meus estudos em tecnologia, arquitetura e inovação. Desde cedo, sempre tive paixão por ensinar, e acredito que a educação é uma das principais ferramentas de transformação na área de tecnologia.
            <br><br>
            Hoje, uno base acadêmica sólida, experiência prática em desenvolvimento e vocação para o ensino para transformar desafios complexos em soluções tecnológicas eficientes, escaláveis e com impacto real.`,
        exp_h1: "Experiência Profissional",
        exp_bb_role: "Desenvolvedora FULL STACK - Pleno",
        exp_bb_desc: `Desenvolvo soluções front-end com Angular e arquitetura de micro frontends, aumentando a modularidade e escalabilidade das aplicações bancárias. Também atuo no desenvolvimento backend com NestJS, contribuindo para a construção de serviços robustos e integrados. Trabalho com esteiras de CI/CD, utilizando Jenkins, Argo e gestão de binários, promovendo automação, padronização e maior eficiência nos processos de entrega. Contribuí para a agilidade dos times e integração dos sistemas, acelerando a disponibilização de funcionalidades. Além disso, atuo com iniciativas de DevRel, compartilhando conhecimento, apoiando boas práticas, fortalecendo a comunicação entre equipes e incentivando a cultura de colaboração e aprendizado contínuo.`,
        exp_bbts_role: "Desenvolvedora FULL STACK - Sênior",
        exp_bbts_desc: `Trabalho na criação de projetos utilizando agentes de IA, RAG, MCPs (Model Context Protocols), Skills e integrações inteligentes, aplicando essas tecnologias para automatizar processos, otimizar fluxos de trabalho e aumentar a eficiência operacional. Além disso, participo do desenvolvimento de aplicações, definição de soluções técnicas, integração de sistemas e implementação de recursos que apoiam as necessidades estratégicas da organização, sempre buscando gerar valor por meio da inovação e da tecnologia.`,
        exp_senac_role: "Professora de Desenvolvimento de Sistemas",
        exp_senac_desc: `Ensino desenvolvimento de sistemas, abordando front-end, back-end, bancos de dados, testes, versionamento e boas práticas de desenvolvimento. Planejo e conduzo projetos práticos, promovendo pensamento crítico, resolução de problemas, trabalho em equipe e preparação dos alunos para o mercado de tecnologia.`,
        exp_bb_qintess_desc: "Atuei no desenvolvimento de soluções completas para o Banco do Brasil, focando em robustez e escalabilidade.",
        exp_fcx_desc: `Desenvolvi soluções em React, Next.js, micro frontends e NestJS, integrando testes e atualizações de ambiente para garantir entregas contínuas e de qualidade. Fui uma das responsáveis pela criação do Marketplace da FC e do Seller Center, ampliando o portfólio de produtos e a experiência dos usuários no ecossistema da empresa.`,
        exp_bsa_desc: `Desenvolvimento de integração de jogos e dashboards utilizando Next.js no front-end e Django no back-end, garantindo APIs seguras e interfaces modernas e performáticas. Implementação de soluções para gestão de dados, autenticação de usuários e integração de novos provedores, com foco em manutenção fácil e escalabilidade do sistema.`,
        exp_cmtech_role: "Desenvolvedora Full Stack - Estágio",
        exp_cmtech_desc: `Desenvolvimento de sistema de atendimento via chat em tempo real com ReactJS + MUI, integrando SignalR para mensageria e APIs REST em .NET Core para persistência em PostgreSQL. Implementação de uma solução completa para comunicação instantânea, garantindo alta performance, confiabilidade e escalabilidade no serviço de atendimento.`,
        acad_h1: "Histórico Acadêmico",
        acad_mestrado_title: "Mestrado em Ciências da Computação",
        acad_mestrado_status: "Status: Dissertação em andamento (2024.2 - 2026.2)",
        acad_mestrado_btn: "Acessar Dissertação (Em breve)",
        acad_tecnologo_title: "Sistemas para Internet (Tecnólogo)",
        acad_tcc_btn: "Ver Projeto de TCC",
        acad_lattes_btn: "Ver Currículo Lattes",
        acad_proj_h1: "Projetos Acadêmicos",
        acad_proj_petribu_title: "Projeto Petribu – Sistema de Gestão Operacional (FIEPE)",
        acad_proj_petribu_desc: `Atuo no desenvolvimento de um sistema de gestão operacional modular e escalável para ambientes industriais, com frontend em ReactJS, VueJS, interface reativa e offline-first, e backend em Python, suportando APIs REST e integração com Apache Kafka. O sistema utiliza banco de dados relacional (PostgreSQL, Oracle) com cache em Redis, e conta com Docker, Kubernetes e CI/CD para automação e deploy. Estruturado em módulos Operacional, Logístico, Alertas, Manutenção e BI/Relatórios, permite controle de ordens de serviço, roteirização inteligente, notificações, gestão de manutenção e indicadores em tempo real.`,
        acad_proj_gp2_title: "Grupo de pesquisa CIn UFPE - GP2 NOW",
        acad_proj_gp2_desc: "Responsável pela coordenação das atividades do grupo, definição de prioridades de pesquisa e supervisão da execução eficiente das iniciativas acadêmicas.",
        proj_h1: "Participações & Projetos",
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
        proj_partners_h1: "Parcerias",
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
        contact_h1: "Vamos Conversar?",
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
        label_community: "Comunidade",
        label_leadership: "Liderança",
        label_mentorship: "Mentoria",
        label_hackathons: "Premiações",
        acad_proj_label_dev: "Desenvolvedora Bolsista",
        acad_proj_label_manager: "Gerente de Projetos e Eventos",
        date_present: "Atualmente",
        date_completed: "CONCLUÍDO",
        cv_button_pt: "Baixar CV (PT)",
        cv_button_en: "Download CV (EN - Em breve)",
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
        menu_contact: "Contact",
        hero_title: "Developer, Teacher and Tech Analyst",
        summary_label: "Professional Summary",
        summary_content: `I am from Pernambuco, I am {age} years old, and I work as a <span class="highlight">Full Stack Developer</span>, with over <span class="highlight">4 years of experience</span> building scalable, high-performance, and results-oriented solutions. I have experience in <span class="highlight">Micro Frontend</span> architecture, development of Marketplace platforms, and implementation of critical back-end systems with NestJS and Django, always prioritizing code quality, best practices, and high performance.
            <br><br>
            I currently work with <span class="highlight">intelligent agents</span>, applying <span class="highlight">skills</span>, <span class="highlight">MCPs</span>, and automation to build faster workflows, support assistants, and seamless system integrations. This approach blends AI with software engineering to deliver more collaborative and efficient digital experiences.
            <br><br>
            At the age of 19, I started my Master's in <span class="highlight">Computer Science</span>, deepening my studies in technology, architecture, and innovation. From an early age, I have always had a passion for teaching, and I believe that education is one of the main tools for transformation in the technology field.
            <br><br>
            Today, I unite a solid academic foundation, practical development experience, and a vocation for teaching to transform complex challenges into efficient, scalable technological solutions with real impact.`,
        exp_h1: "Professional Experience",
        exp_bb_role: "FULL STACK Developer - Mid-level",
        exp_bb_desc: `I develop front-end solutions with Angular and micro frontend architecture, increasing the modularity and scalability of banking applications. I also work on backend development with NestJS, contributing to the construction of robust and integrated services. I work with CI/CD pipelines, using Jenkins, Argo, and binary management, promoting automation, standardization, and greater efficiency in delivery processes. I contributed to team agility and system integration, accelerating the availability of features. Additionally, I work with DevRel initiatives, sharing knowledge, supporting best practices, strengthening communication between teams, and encouraging a culture of collaboration and continuous learning.`,
        exp_bbts_role: "FULL STACK Developer - Senior",
        exp_bbts_desc: `I work on creating projects using AI agents, RAG, MCPs (Model Context Protocols), Skills, and intelligent integrations, applying these technologies to automate processes, optimize workflows, and increase operational efficiency. Additionally, I participate in application development, definition of technical solutions, systems integration, and implementation of features that support the organization's strategic needs, always seeking to generate value through innovation and technology.`,
        exp_senac_role: "Systems Development Teacher",
        exp_senac_desc: `I teach systems development, covering front-end, back-end, databases, testing, versioning, and best development practices. I plan and lead practical projects, promoting critical thinking, problem-solving, teamwork, and preparing students for the technology market.`,
        exp_bb_qintess_desc: "I worked on developing complete solutions for Banco do Brasil, focusing on robustness and scalability.",
        exp_fcx_desc: `I developed solutions in React, Next.js, micro frontends, and NestJS, integrating tests and environment updates to ensure continuous and quality deliveries. I was one of those responsible for creating FC's Marketplace and the Seller Center, expanding the product portfolio and user experience in the company's ecosystem.`,
        exp_bsa_desc: `Development of game integration and dashboards using Next.js on the front-end and Django on the back-end, ensuring secure APIs and modern, high-performance interfaces. Implementation of solutions for data management, user authentication, and integration of new providers, focusing on easy maintenance and system scalability.`,
        exp_cmtech_role: "Full Stack Developer - Internship",
        exp_cmtech_desc: `Development of a real-time chat system with ReactJS + MUI, integrating SignalR for messaging and REST APIs in .NET Core for persistence in PostgreSQL. Implementation of a complete solution for instant communication, ensuring high performance, reliability, and scalability in the service.`,
        acad_h1: "Academic History",
        acad_mestrado_title: "Master's in Computer Science",
        acad_mestrado_status: "Status: Dissertation in progress (2024.2 - 2026.2)",
        acad_mestrado_btn: "Access Dissertation (Soon)",
        acad_tecnologo_title: "Internet Systems (Technologist)",
        acad_tcc_btn: "View TCC Project",
        acad_lattes_btn: "View Lattes Curriculum",
        acad_proj_h1: "Academic Projects",
        acad_proj_petribu_title: "Petribu Project – Operational Management System (FIEPE)",
        acad_proj_petribu_desc: `I work on the development of a modular and scalable operational management system for industrial environments, with a frontend in ReactJS, VueJS, reactive and offline-first interface, and backend in Python, supporting REST APIs and integration with Apache Kafka. The system uses a relational database (PostgreSQL, Oracle) with caching in Redis, and uses Docker, Kubernetes, and CI/CD for automation and deploy. Structured in Operational, Logistical, Alerts, Maintenance, and BI/Reports modules, it allows control of work orders, smart routing, notifications, maintenance management, and real-time indicators.`,
        acad_proj_gp2_title: "GP2 NOW - Research Group CIn UFPE",
        acad_proj_gp2_desc: "Responsible for coordinating the group's activities, defining research priorities, and supervising the efficient execution of academic initiatives.",
        proj_h1: "Community & Projects",
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
        proj_partners_h1: "Partnerships",
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
        contact_h1: "Let's Talk?",
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
        label_community: "Community",
        label_leadership: "Leadership",
        label_mentorship: "Mentorship",
        label_hackathons: "Awards",
        acad_proj_label_dev: "Scholarship Developer",
        acad_proj_label_manager: "Project and Events Manager",
        date_present: "Present",
        date_completed: "COMPLETED",
        cv_button_pt: "Download CV (PT)",
        cv_button_en: "Download CV (EN - Soon)",
        link_lattes: "Lattes",
        link_github: "GitHub",
        link_instagram: "Instagram",
        link_linkedin: "LinkedIn"
    }
};
