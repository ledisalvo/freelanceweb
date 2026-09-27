/* ---------------------------------------------------------------------------
   CONFIGURACIÓN DEL SITIO
   Único lugar donde viven las URLs y los datos externos.
   Cambiar algo acá no requiere tocar ningún componente ni el HTML.

   Los valores marcados con  PENDIENTE  son placeholders: reemplazar el valor
   y el sitio se actualiza solo. Mientras estén en PENDIENTE, el sitio muestra
   el elemento en estado "placeholder" visible (ver REDISENIO.md).
--------------------------------------------------------------------------- */

window.SITE_CONFIG = {
  /* --- Agenda: CTA principal de la sección de contacto -------------------- */
  // PENDIENTE: pegar el link de Cal.com o Calendly.
  // Ej: 'https://cal.com/ledisalvo/30min'
  booking: 'PENDIENTE',

  /* --- WhatsApp ---------------------------------------------------------- */
  // El texto precargado sale de las traducciones (clave contact.wa_message).
  whatsappNumber: '5491155815805', // sin + ni espacios

  /* --- Email ------------------------------------------------------------- */
  email: 'ledisalvo@gmail.com',

  /* --- Redes ------------------------------------------------------------- */
  // PENDIENTE: pegar la URL del perfil de LinkedIn.
  // Ej: 'https://www.linkedin.com/in/leonardo-di-salvo/'
  linkedin: 'PENDIENTE',
  github: 'https://github.com/ledisalvo',

  /* --- Festivy (caso destacado) ------------------------------------------ */
  festivy: {
    // PENDIENTE: URL pública de Festivy.
    url: 'PENDIENTE',
    // PENDIENTE: captura de Festivy. Dejar el placeholder hasta tenerla.
    // Sugerido: WebP 1600x1000 en images/casos/festivy.webp
    image: 'images/placeholders/festivy.svg',
  },

  /* --- Foto del hero ----------------------------------------------------- */
  // PENDIENTE: foto nueva (plano medio, trabajando en el setup, luz natural).
  // Sugerido: images/leo.webp (1000x1250) + images/leo.jpg de fallback.
  heroImage: 'images/placeholders/hero.svg',

  /* --- CV / résumé por idioma -------------------------------------------- */
  cv: {
    es: 'Di Salvo - CV Español.pdf',
    en: 'Di Salvo - Resume English.pdf',
  },

  /* --- Empresas (sección "Sistemas en los que trabajé") ------------------ */
  // logo: ruta al SVG monocromo. Si es null, se muestra el nombre en texto
  // con el mismo tratamiento visual (no rompe el layout).
  // PENDIENTE: verificar que el contrato permita usar los logos de los
  // clientes atendidos vía consultora (Grimoldi, Telmex, Monex).
  companies: [
    { name: 'Santander',          logo: null },
    { name: 'Hospital Británico', logo: null },
    { name: 'Telecom',            logo: null },
    { name: 'Grimoldi',           logo: null },
    { name: 'Telmex',             logo: null },
    { name: 'Bistrosoft',         logo: null },
  ],

  /* --- Metadatos --------------------------------------------------------- */
  siteUrl: 'https://ledisalvo.github.io/freelanceweb/',
  ogImage: 'https://ledisalvo.github.io/freelanceweb/images/og.png',
};
