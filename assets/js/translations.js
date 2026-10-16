/* ---------------------------------------------------------------------------
   TRADUCCIONES
   Todo el copy del sitio vive acá. Nada hardcodeado en el HTML.
   Idioma por defecto: es. El switch persiste en localStorage.

   Público: dueños de comercios, pymes y emprendedores, no gente de sistemas.
   Nada de jerga técnica (legacy, SaaS, stack, deploy…): hablar de problemas
   y resultados del negocio.

   Algunos valores llevan HTML a propósito (se aplican con innerHTML):
   <span class="hl"> es el resaltado en píldora del titular, <span class="spark">
   la estrellita decorativa y <span class="muted"> el tramo en gris.
--------------------------------------------------------------------------- */

window.TRANSLATIONS = {
  es: {
    /* --- Metadatos ------------------------------------------------------- */
    'meta.title':       'Leonardo Di Salvo · Tecnología para tu negocio',
    'meta.description': 'Páginas web, automatizaciones y sistemas a medida para comercios, pymes y emprendedores. Más clientes y menos tareas repetitivas para tu negocio.',
    'meta.locale':      'es_AR',

    /* --- Navegación ------------------------------------------------------ */
    'nav.cta':          'Escribime',
    'nav.services':     'Qué hago',
    'nav.ideas':        'Ideas para tu negocio',
    'nav.work':         'Trabajos',
    'nav.how':          'Cómo trabajamos',
    'nav.about':        'Sobre mí',
    'nav.contact':      'Contacto',
    'nav.skip':         'Ir al contenido',
    'nav.aria':         'Navegación principal',
    'nav.menu_open':    'Abrir menú de navegación',
    'nav.menu_close':   'Cerrar menú de navegación',
    'nav.lang_aria':    'Seleccionar idioma',

    /* --- Hero ------------------------------------------------------------ */
    'hero.kicker':      'Tecnología para comercios y pymes · Buenos Aires',
    'hero.title':       'Más clientes y <span class="hl">menos trabajo</span> repetitivo <span class="spark" aria-hidden="true"></span> para tu negocio.',
    'hero.lead':        'Te ayudo a que tu negocio se vea y se encuentre en internet, y a automatizar las tareas que hoy hacés a mano. Ganás tiempo, bajás costos y te dedicás a lo que importa.',
    'hero.cta_primary': 'Escribime por WhatsApp',
    'hero.cta_secondary': 'Agendá una videollamada',
    'hero.photo_alt':   'Retrato de Leonardo Di Salvo',

    /* --- Experiencia ----------------------------------------------------- */
    'companies.marquee': 'Experiencia',
    'companies.label':   'Más de 15 años haciendo sistemas para empresas como',

    /* --- Qué hago -------------------------------------------------------- */
    'services.label':   'Qué hago',
    'services.title':   'Soluciones simples para que tu negocio crezca',
    'services.1_badge': 'Más clientes',
    'services.1_title': 'Que te encuentren y te elijan',
    'services.1_body':  'Una página web clara y rápida, conectada con tu WhatsApp y tus redes, para que quien te busca te encuentre, confíe y te contacte.',
    'services.2_badge': 'Ahorrá tiempo',
    'services.2_title': 'Menos tareas repetitivas',
    'services.2_body':  'Pedidos, turnos, recordatorios, planillas: lo que hoy hacés a mano todos los días lo puede hacer el sistema solo.',
    'services.3_badge': 'A medida',
    'services.3_title': 'Un sistema hecho para vos',
    'services.3_body':  'Cuando el Excel o el cuaderno ya no alcanzan: ventas, stock, clientes o turnos en un solo lugar. O mejoro el que ya usás.',
    'services.4_badge': 'Inteligencia artificial',
    'services.4_title': 'IA que trabaja para vos',
    'services.4_body':  'Respuestas automáticas a las consultas de siempre y carga de datos desde facturas, para no copiar todo a mano.',

    /* --- Ideas por rubro ------------------------------------------------- */
    'ideas.title':   'Ideas para tu negocio',
    'ideas.lead':    'Si tu rubro no está, contame igual: casi siempre hay una forma de ahorrar tiempo.',
    'ideas.1_title': 'Restaurantes y bares',
    'ideas.1_body':  'Menú digital con QR, pedidos y reservas por WhatsApp o desde tu web, sin pagarle comisión a ninguna aplicación.',
    'ideas.2_title': 'Comercios',
    'ideas.2_body':  'Ventas y stock en un mismo lugar, aviso cuando se acaba la mercadería y tu catálogo online para vender por internet.',
    'ideas.3_title': 'Consultorios y servicios',
    'ideas.3_body':  'Turnos online que se agendan solos, con recordatorio automático por WhatsApp para que nadie se olvide.',

    /* --- Trabajos -------------------------------------------------------- */
    'cases.label':         'Trabajos',
    'cases.title':         'Algunas cosas que hice',
    'cases.festivy_tag':   'Producto propio',
    'cases.festivy_body':  'Invitaciones digitales para casamientos, cumpleaños y cualquier festejo: se arman en minutos y los invitados confirman desde el celular. La diseñé, la construí y la lancé yo.',
    'cases.festivy_cta':   'Ver Festivy',
    'cases.festivy_alt':   'Captura de Festivy',
    'cases.hb_sector':     'Hospital Británico · Salud',
    'cases.hb_title':      'Renovar el sistema que les paga a los médicos, sin frenar la operación',
    'cases.hb_body':       'Un sistema viejo y lento, del que dependía un proceso clave. Lo rehíce con tecnología actual y hoy es fácil de mantener.',
    'cases.gr_sector':     'Grimoldi · Comercio',
    'cases.gr_title':      'Las devoluciones trababan el sistema',
    'cases.gr_body':       'Cuando muchas sucursales devolvían a la vez, todo se frenaba. Encontré el origen y ahora funciona más rápido y con menos errores.',

    /* --- Cómo trabajamos ------------------------------------------------- */
    'how.label':    'Cómo trabajamos',
    'how.title':    'Simple y sin sorpresas',
    'how.1_title':  'Charlamos',
    'how.1_body':   'Me contás qué te pasa o qué querés lograr. La primera charla es gratis.',
    'how.2_title':  'Te paso una propuesta',
    'how.2_body':   'Qué vamos a hacer, cuánto cuesta y cuándo está listo. Claro y por escrito.',
    'how.3_title':  'Manos a la obra',
    'how.3_body':   'Lo construyo y te muestro avances para que opines antes del final.',
    'how.4_title':  'Lo dejamos andando',
    'how.4_body':   'Te enseño a usarlo y sigo a disposición para ajustes y soporte.',

    /* --- Sobre mí -------------------------------------------------------- */
    'about.label':  'Sobre mí',
    'about.text':   'Soy Leo. Hace más de 15 años que hago sistemas para bancos, hospitales y grandes empresas. <span class="muted">Hoy trabajo por mi cuenta y llevo esa experiencia a negocios como el tuyo, explicada en criollo.</span>',

    /* --- Contacto y footer ----------------------------------------------- */
    'contact.title':      '¿Hablamos?',
    'contact.lead':       '¿Querés más clientes o menos trabajo manual? La primera charla es gratis y sin compromiso.',
    'contact.cta_wa':     'Escribime por WhatsApp',
    'contact.cta_book':   'Agendá una videollamada',
    'contact.wa_message': 'Hola Leo, vi tu web y quería consultarte por mi negocio.',
    'footer.copy':        '© 2026 Leonardo A. Di Salvo · Buenos Aires',
    'footer.aria':        'Enlaces y redes',

    /* --- UI -------------------------------------------------------------- */
    'ui.pending':      'link pendiente de configurar',
  },

  en: {
    /* --- Metadata -------------------------------------------------------- */
    'meta.title':       'Leonardo Di Salvo · Technology for your business',
    'meta.description': 'Websites, automations and custom systems for shops, small businesses and entrepreneurs. More customers and less repetitive work for your business.',
    'meta.locale':      'en_US',

    /* --- Navigation ------------------------------------------------------ */
    'nav.cta':          'Message me',
    'nav.services':     'What I do',
    'nav.ideas':        'Ideas for your business',
    'nav.work':         'Work',
    'nav.how':          'How we work',
    'nav.about':        'About me',
    'nav.contact':      'Contact',
    'nav.skip':         'Skip to content',
    'nav.aria':         'Main navigation',
    'nav.menu_open':    'Open navigation menu',
    'nav.menu_close':   'Close navigation menu',
    'nav.lang_aria':    'Select language',

    /* --- Hero ------------------------------------------------------------ */
    'hero.kicker':      'Technology for shops and small businesses · Buenos Aires',
    'hero.title':       'More customers and <span class="hl">less repetitive</span> work <span class="spark" aria-hidden="true"></span> for your business.',
    'hero.lead':        'I help your business get seen and found online, and automate the tasks you do by hand. You save time, cut costs and focus on what matters.',
    'hero.cta_primary': 'Message me on WhatsApp',
    'hero.cta_secondary': 'Book a video call',
    'hero.photo_alt':   'Portrait of Leonardo Di Salvo',

    /* --- Experience ------------------------------------------------------ */
    'companies.marquee': 'Experience',
    'companies.label':   '15+ years building systems for companies like',

    /* --- What I do ------------------------------------------------------- */
    'services.label':   'What I do',
    'services.title':   'Simple solutions to help your business grow',
    'services.1_badge': 'More customers',
    'services.1_title': 'Get found and chosen',
    'services.1_body':  'A clear, fast website connected to your WhatsApp and social media, so people searching for you find you, trust you and get in touch.',
    'services.2_badge': 'Save time',
    'services.2_title': 'Less repetitive work',
    'services.2_body':  'Orders, bookings, reminders, spreadsheets: what you do by hand every day, the system can do on its own.',
    'services.3_badge': 'Custom',
    'services.3_title': 'A system built for you',
    'services.3_body':  "When spreadsheets or a notebook aren't enough: sales, stock, customers or bookings in one place. Or I improve the one you already use.",
    'services.4_badge': 'Artificial intelligence',
    'services.4_title': 'AI that works for you',
    'services.4_body':  "Automatic answers to the usual questions and data entry from invoices, so you don't copy everything by hand.",

    /* --- Ideas by industry ----------------------------------------------- */
    'ideas.title':   'Ideas for your business',
    'ideas.lead':    "If your industry isn't here, tell me anyway: there's almost always a way to save time.",
    'ideas.1_title': 'Restaurants and bars',
    'ideas.1_body':  'A digital QR menu, orders and reservations through WhatsApp or your website, without paying commission to any app.',
    'ideas.2_title': 'Shops',
    'ideas.2_body':  "Sales and stock in one place, alerts when you're running low, and an online catalog to sell on the internet.",
    'ideas.3_title': 'Clinics and services',
    'ideas.3_body':  'Online bookings that schedule themselves, with automatic WhatsApp reminders so nobody forgets.',

    /* --- Work ------------------------------------------------------------ */
    'cases.label':         'Work',
    'cases.title':         "Some things I've built",
    'cases.festivy_tag':   'Own product',
    'cases.festivy_body':  'Digital invitations for weddings, birthdays and any celebration: ready in minutes, and guests confirm from their phone. I designed, built and launched it myself.',
    'cases.festivy_cta':   'Visit Festivy',
    'cases.festivy_alt':   'Screenshot of Festivy',
    'cases.hb_sector':     'Hospital Británico · Healthcare',
    'cases.hb_title':      'Rebuilding the system that pays the doctors, without stopping operations',
    'cases.hb_body':       'An old, slow system that a key process depended on. I rebuilt it with current technology and it is now easy to maintain.',
    'cases.gr_sector':     'Grimoldi · Retail',
    'cases.gr_title':      'Returns were freezing the system',
    'cases.gr_body':       'When many stores processed returns at once, everything froze. I found the root cause and now it runs faster and with fewer errors.',

    /* --- How we work ----------------------------------------------------- */
    'how.label':    'How we work',
    'how.title':    'Simple, with no surprises',
    'how.1_title':  'We talk',
    'how.1_body':   "You tell me what's going on or what you want to achieve. The first conversation is free.",
    'how.2_title':  'I send you a proposal',
    'how.2_body':   "What we'll do, what it costs and when it'll be ready. Clear and in writing.",
    'how.3_title':  'I get to work',
    'how.3_body':   'I build it and show you progress so you can give feedback before the end.',
    'how.4_title':  'We leave it running',
    'how.4_body':   "I show you how to use it and I'm still around for tweaks and support.",

    /* --- About ----------------------------------------------------------- */
    'about.label':  'About me',
    'about.text':   "I'm Leo. For more than 15 years I've been building systems for banks, hospitals and large companies. <span class=\"muted\">Today I work independently and bring that experience to businesses like yours, explained in plain words.</span>",

    /* --- Contact and footer ---------------------------------------------- */
    'contact.title':      "Let's talk",
    'contact.lead':       'Want more customers or less manual work? The first conversation is free, no strings attached.',
    'contact.cta_wa':     'Message me on WhatsApp',
    'contact.cta_book':   'Book a video call',
    'contact.wa_message': 'Hi Leo, I saw your website and wanted to ask about my business.',
    'footer.copy':        '© 2026 Leonardo A. Di Salvo · Buenos Aires',
    'footer.aria':        'Links and social',

    /* --- UI -------------------------------------------------------------- */
    'ui.pending':      'link not configured yet',
  },
};
