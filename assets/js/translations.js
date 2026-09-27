/* ---------------------------------------------------------------------------
   TRADUCCIONES
   Todo el copy del sitio vive acá. Nada hardcodeado en el HTML.
   Idioma por defecto: es. El switch persiste en localStorage.
--------------------------------------------------------------------------- */

window.TRANSLATIONS = {
  es: {
    /* --- Metadatos ------------------------------------------------------- */
    'meta.title':       'Leonardo Di Salvo · Desarrollador .NET Senior freelance',
    'meta.description': 'Modernizo sistemas legacy y construyo productos SaaS en .NET, de la idea a producción. Más de 15 años en banca, salud, telecomunicaciones y retail.',
    'meta.locale':      'es_AR',

    /* --- Navegación ------------------------------------------------------ */
    'nav.services':     'Servicios',
    'nav.work':         'Casos',
    'nav.how':          'Cómo trabajo',
    'nav.experience':   'Trayectoria',
    'nav.contact':      'Contacto',
    'nav.skip':         'Ir al contenido',
    'nav.aria':         'Navegación principal',
    'nav.menu_open':    'Abrir menú de navegación',
    'nav.menu_close':   'Cerrar menú de navegación',
    'nav.lang_aria':    'Seleccionar idioma',

    /* --- Hero ------------------------------------------------------------ */
    'hero.kicker':      '<s>full stack developer</s> <span class="kicker-arrow" aria-hidden="true">&rarr;</span> <b>product builder</b> <span class="kicker-loc"><span class="kicker-sep">·</span> Buenos Aires, AR</span>',
    'hero.title':       'Modernizo sistemas legacy y construyo productos SaaS, de la idea a producción.',
    'hero.lead':        'Desarrollador .NET con más de 15 años en banca, salud, telecomunicaciones y retail. Trabajo freelance, con un flujo de desarrollo asistido por IA que acelera la entrega sin resignar calidad.',
    'hero.cta_primary': 'Hablemos de tu proyecto',
    'hero.cta_secondary': 'Ver casos',
    'hero.photo_alt':   'Retrato de Leonardo Di Salvo, desarrollador .NET freelance',
    'hero.stack_aria':  'Stack principal',

    /* --- Empresas -------------------------------------------------------- */
    'companies.label':  'Sistemas en los que trabajé',

    /* --- Servicios ------------------------------------------------------- */
    'services.title':   'En qué te puedo ayudar',
    'services.lead':    'Proyectos cerrados o dedicación parcial. Me sumo solo o junto a tu equipo.',
    'services.1_title': 'Modernización de sistemas legacy.',
    'services.1_body':  'De .NET Framework y ASP.NET a .NET moderno, sin frenar la operación del negocio.',
    'services.2_title': 'Performance y estabilidad.',
    'services.2_body':  'Diagnóstico y solución de cuellos de botella en módulos críticos: transacciones, queries, concurrencia.',
    'services.3_title': 'Productos SaaS y MVPs.',
    'services.3_body':  'De la idea a producción, con un backend sólido: multi-tenant, pagos, APIs limpias y testeadas.',
    'services.4_title': 'IA aplicada a procesos.',
    'services.4_body':  'Extracción de datos de documentos y automatización de tareas manuales dentro de tus sistemas.',

    /* --- Casos ----------------------------------------------------------- */
    'cases.title':          'Casos',
    'cases.label_problem':  'Problema',
    'cases.label_solution': 'Solución',
    'cases.label_outcome':  'Resultado',

    'cases.festivy_tag':   'Producto propio · 2026',
    'cases.festivy_body':  'Plataforma para crear y gestionar eventos digitales. Diseñada, construida y lanzada de punta a punta, hoy evolucionando hacia un modelo B2B para organizadores de eventos.',
    'cases.festivy_cta':   'Ver Festivy',
    'cases.festivy_alt':   'Captura de la plataforma Festivy',

    'cases.hb_sector':   'Hospital Británico · Salud',
    'cases.hb_title':    'Migración del sistema de pagos a profesionales médicos',
    'cases.hb_problem':  'Sistema crítico en ASP.NET legacy, difícil de mantener y con problemas de performance.',
    'cases.hb_solution': 'Migración a .NET Core, React y SQL Server, más tuning de stored procedures críticos. Como único desarrollador.',
    'cases.hb_outcome':  'Transición sin impacto en la operación y un sistema mantenible a futuro.',

    'cases.gr_sector':   'Grimoldi · Retail',
    'cases.gr_title':    'Cuello de botella en el módulo de devoluciones',
    'cases.gr_problem':  'Transacciones abiertas a nivel controller bloqueaban la base en un módulo de alta concurrencia (.NET Framework 4.7).',
    'cases.gr_solution': 'Rediseño del manejo transaccional y de la lógica interna, más limpieza del código.',
    'cases.gr_outcome':  'Mejor performance y menos bugs en un flujo directamente ligado a ingresos.',

    'cases.others_title':    'Otros productos',
    'cases.puestito':        'ecommerce SaaS multi-tenant (.NET 10, PostgreSQL)',
    'cases.adminconsorcio':  'gestión para administradores de consorcios (.NET 10, React 19)',

    /* --- Cómo trabajo ---------------------------------------------------- */
    'how.title':    'Cómo trabajo',
    'how.lead':     'Uso un equipo de agentes de IA especializados (arquitectura, testing, QA) que orquesto a partir de especificaciones claras. Resultado: más velocidad, con las decisiones de diseño y la calidad bajo mi control.',
    'how.1_title':  'Relevamiento.',
    'how.1_body':   'Entiendo el negocio y el problema real antes de tocar una línea de código.',
    'how.2_title':  'Especificación.',
    'how.2_body':   'Alcance, tiempos y criterios de aceptación acordados y por escrito.',
    'how.3_title':  'Desarrollo.',
    'how.3_body':   'Clean Architecture, tests automatizados y agentes de IA para acelerar sin perder calidad.',
    'how.4_title':  'Producción.',
    'how.4_body':   'Acompaño cada entrega hasta el deploy, y después.',

    /* --- Trayectoria ----------------------------------------------------- */
    'exp.title':      'Trayectoria',
    'exp.cv':         'Descargar CV (PDF)',
    'exp.aria':       'Trayectoria profesional',
    'exp.1_period':   '2026 – hoy',
    'exp.1_company':  'Independiente',
    'exp.1_body':     'Freelance y producto propio (Festivy)',
    'exp.2_period':   '2026',
    'exp.2_company':  'Bistrosoft',
    'exp.2_body':     'Entrega con agentes de IA, .NET + Vue',
    'exp.3_period':   '2025 – 2026',
    'exp.3_company':  'Grimoldi',
    'exp.3_body':     'Refactor de módulo crítico, .NET Framework',
    'exp.4_period':   '2023 – 2025',
    'exp.4_company':  'Telmex · Monex',
    'exp.4_body':     'Plataforma low-code, Blazor, SignalR, IA',
    'exp.5_period':   '2020 – 2022',
    'exp.5_company':  'Hospital Británico',
    'exp.5_body':     'Migración a .NET Core y React',
    'exp.6_period':   '2014 – 2020',
    'exp.6_company':  'Grupo Santander',
    'exp.6_body':     'Plataforma de gestión de clientes, riesgo crediticio',
    'exp.7_period':   '2010 – 2014',
    'exp.7_company':  'Telecom',
    'exp.7_body':     'Gestión de órdenes de trabajo, migración de Silverlight',

    /* --- Contacto y footer ----------------------------------------------- */
    'contact.title':      '¿Un sistema que necesita una segunda vida, o un producto por construir?',
    'contact.cta_book':   'Agendá una llamada de 30 min',
    'contact.cta_wa':     'Escribime por WhatsApp',
    'contact.wa_message': 'Hola Leo, te escribo desde tu web por un proyecto.',
    'contact.micro':      'Sin compromiso. Contame qué necesitás y vemos si te puedo ayudar.',
    'footer.copy':        '© 2026 Leonardo A. Di Salvo · Buenos Aires',
    'footer.aria':        'Enlaces y redes',

    /* --- UI -------------------------------------------------------------- */
    'ui.pending':      'link pendiente de configurar',
  },

  en: {
    /* --- Metadata -------------------------------------------------------- */
    'meta.title':       'Leonardo Di Salvo · Senior .NET Freelance Developer',
    'meta.description': 'I modernize legacy systems and build SaaS products on .NET, from idea to production. 15+ years in banking, healthcare, telecom and retail.',
    'meta.locale':      'en_US',

    /* --- Navigation ------------------------------------------------------ */
    'nav.services':     'Services',
    'nav.work':         'Work',
    'nav.how':          'How I work',
    'nav.experience':   'Experience',
    'nav.contact':      'Contact',
    'nav.skip':         'Skip to content',
    'nav.aria':         'Main navigation',
    'nav.menu_open':    'Open navigation menu',
    'nav.menu_close':   'Close navigation menu',
    'nav.lang_aria':    'Select language',

    /* --- Hero ------------------------------------------------------------ */
    'hero.kicker':      '<s>full stack developer</s> <span class="kicker-arrow" aria-hidden="true">&rarr;</span> <b>product builder</b> <span class="kicker-loc"><span class="kicker-sep">·</span> Buenos Aires, AR</span>',
    'hero.title':       'I modernize legacy systems and build SaaS products, from idea to production.',
    'hero.lead':        '.NET developer with 15+ years in banking, healthcare, telecom and retail. I work freelance, with an AI-assisted development workflow that speeds up delivery without cutting corners on quality.',
    'hero.cta_primary': "Let's talk about your project",
    'hero.cta_secondary': 'See my work',
    'hero.photo_alt':   'Portrait of Leonardo Di Salvo, freelance .NET developer',
    'hero.stack_aria':  'Core stack',

    /* --- Companies ------------------------------------------------------- */
    'companies.label':  "Systems I've worked on",

    /* --- Services -------------------------------------------------------- */
    'services.title':   'How I can help',
    'services.lead':    'Fixed-scope projects or part-time engagements. I work solo or alongside your team.',
    'services.1_title': 'Legacy modernization.',
    'services.1_body':  'From .NET Framework and ASP.NET to modern .NET, without stopping the business.',
    'services.2_title': 'Performance and stability.',
    'services.2_body':  'Diagnosing and fixing bottlenecks in critical modules: transactions, queries, concurrency.',
    'services.3_title': 'SaaS products and MVPs.',
    'services.3_body':  'From idea to production on a solid backend: multi-tenancy, payments, clean and tested APIs.',
    'services.4_title': 'AI applied to business processes.',
    'services.4_body':  'Document data extraction and automation of manual work inside your systems.',

    /* --- Work ------------------------------------------------------------ */
    'cases.title':          'Selected work',
    'cases.label_problem':  'Problem',
    'cases.label_solution': 'Solution',
    'cases.label_outcome':  'Outcome',

    'cases.festivy_tag':   'Own product · 2026',
    'cases.festivy_body':  'A platform to create and manage digital events. Designed, built and launched end to end, now evolving toward a B2B model for event planners.',
    'cases.festivy_cta':   'Visit Festivy',
    'cases.festivy_alt':   'Screenshot of the Festivy platform',

    'cases.hb_sector':   'Hospital Británico · Healthcare',
    'cases.hb_title':    'Migrating the medical staff payments system',
    'cases.hb_problem':  'A critical legacy ASP.NET system, hard to maintain and with performance issues.',
    'cases.hb_solution': 'Migration to .NET Core, React and SQL Server, plus tuning of critical stored procedures. As the sole developer.',
    'cases.hb_outcome':  "A transition with no operational impact and a system that's maintainable going forward.",

    'cases.gr_sector':   'Grimoldi · Retail',
    'cases.gr_title':    'Fixing a bottleneck in the returns module',
    'cases.gr_problem':  'Transactions opened at controller level were locking the database in a high-concurrency module (.NET Framework 4.7).',
    'cases.gr_solution': 'Redesigned transaction handling and internal logic, plus a code cleanup.',
    'cases.gr_outcome':  'Better performance and fewer bugs in a revenue-critical flow.',

    'cases.others_title':    'Other products',
    'cases.puestito':        'multi-tenant ecommerce SaaS (.NET 10, PostgreSQL)',
    'cases.adminconsorcio':  'management SaaS for property administrators (.NET 10, React 19)',

    /* --- How I work ------------------------------------------------------ */
    'how.title':    'How I work',
    'how.lead':     'I work with a team of specialized AI agents (architecture, testing, QA) that I orchestrate from clear specifications. The result: more speed, with design decisions and quality under my control.',
    'how.1_title':  'Discovery.',
    'how.1_body':   'I understand the business and the real problem before writing a line of code.',
    'how.2_title':  'Specification.',
    'how.2_body':   'Scope, timeline and acceptance criteria agreed in writing.',
    'how.3_title':  'Development.',
    'how.3_body':   'Clean Architecture, automated tests and AI agents to move fast without losing quality.',
    'how.4_title':  'Production.',
    'how.4_body':   'I see every delivery through to deployment, and beyond.',

    /* --- Experience ------------------------------------------------------ */
    'exp.title':      'Experience',
    'exp.cv':         'Download résumé (PDF)',
    'exp.aria':       'Professional experience',
    'exp.1_period':   '2026 – today',
    'exp.1_company':  'Independent',
    'exp.1_body':     'Freelance and own product (Festivy)',
    'exp.2_period':   '2026',
    'exp.2_company':  'Bistrosoft',
    'exp.2_body':     'AI-agent-driven delivery, .NET + Vue',
    'exp.3_period':   '2025 – 2026',
    'exp.3_company':  'Grimoldi',
    'exp.3_body':     'Critical module refactor, .NET Framework',
    'exp.4_period':   '2023 – 2025',
    'exp.4_company':  'Telmex · Monex',
    'exp.4_body':     'Low-code platform, Blazor, SignalR, AI',
    'exp.5_period':   '2020 – 2022',
    'exp.5_company':  'Hospital Británico',
    'exp.5_body':     'Migration to .NET Core and React',
    'exp.6_period':   '2014 – 2020',
    'exp.6_company':  'Grupo Santander',
    'exp.6_body':     'Customer management platform, credit risk',
    'exp.7_period':   '2010 – 2014',
    'exp.7_company':  'Telecom',
    'exp.7_body':     'Work order management, Silverlight migration',

    /* --- Contact and footer ---------------------------------------------- */
    'contact.title':      'A system that needs a second life, or a product waiting to be built?',
    'contact.cta_book':   'Book a 30-min call',
    'contact.cta_wa':     'Message me on WhatsApp',
    'contact.wa_message': "Hi Leo, I'm reaching out from your website about a project.",
    'contact.micro':      "No strings attached. Tell me what you need and we'll see if I can help.",
    'footer.copy':        '© 2026 Leonardo A. Di Salvo · Buenos Aires',
    'footer.aria':        'Links and social',

    /* --- UI -------------------------------------------------------------- */
    'ui.pending':      'link not configured yet',
  },
};
