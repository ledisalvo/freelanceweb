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
  // Si es de cal.com se abre como modal sobre el sitio (ver site.js); si no,
  // o si el script de Cal no cargó, funciona como link normal en otra pestaña.
  booking: 'https://cal.com/ledisalvo/30min',

  /* --- WhatsApp ---------------------------------------------------------- */
  // El texto precargado sale de las traducciones (clave contact.wa_message).
  whatsappNumber: '5491155815805', // sin + ni espacios

  /* --- Email ------------------------------------------------------------- */
  email: 'ledisalvo@gmail.com',

  /* --- Redes ------------------------------------------------------------- */
  linkedin: 'https://www.linkedin.com/in/leonardo-di-salvo/',
  github: 'https://github.com/ledisalvo',

  /* --- Festivy (caso destacado) ------------------------------------------ */
  festivy: {
    url: 'https://festivy.app/',
    // Captura de la landing (1440x900 @2x, reducida a 1600x1000).
    image: 'images/casos/festivy.webp',
  },

  /* --- Foto del hero ----------------------------------------------------- */
  // Retrato 4:5 (820x1025). Si se cambia, mantener la proporción 4:5.
  heroImage: 'images/leo.webp',

  /* --- CV / résumé por idioma -------------------------------------------- */
  cv: {
    es: 'Di Salvo - CV Español.pdf',
    en: 'Di Salvo - Resume English.pdf',
  },

  /* --- Empresas (sección "Sistemas en los que trabajé") ------------------ */
  // logo: ruta al SVG/PNG con fondo transparente. Si es null, se muestra el
  // nombre en texto con el mismo tratamiento visual (no rompe el layout).
  // Fuentes: Wikimedia Commons (Santander, Hospital Británico, Telecom,
  // Telmex) y los sitios oficiales (Grimoldi, Bistrosoft).
  // PENDIENTE: verificar que el contrato permita usar los logos de los
  // clientes atendidos vía consultora (Grimoldi, Telmex, Monex).
  companies: [
    { name: 'Santander',          logo: 'images/empresas/santander.svg' },
    { name: 'Hospital Británico', logo: 'images/empresas/hospital-britanico.svg' },
    { name: 'Telecom',            logo: 'images/empresas/telecom.svg' },
    { name: 'Grimoldi',           logo: 'images/empresas/grimoldi.svg' },
    { name: 'Telmex',             logo: 'images/empresas/telmex.svg' },
    { name: 'Bistrosoft',         logo: 'images/empresas/bistrosoft.png' },
  ],

  /* --- Metadatos --------------------------------------------------------- */
  siteUrl: 'https://leodisalvo.dev/',
  ogImage: 'https://leodisalvo.dev/images/og-v2.png',
};
