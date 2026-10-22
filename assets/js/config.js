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
  // Hoy no se muestra en la web (se sacó para no exponer el Gmail personal).
  // Para volver a mostrarlo: un <a data-link="email"> en index.html.
  email: 'ledisalvo@gmail.com',

  /* --- Redes ------------------------------------------------------------- */
  linkedin: 'https://www.linkedin.com/in/leonardo-di-salvo/',
  github: 'https://github.com/ledisalvo',

  /* --- Ámbar (caso de estudio destacado) --------------------------------- */
  ambar: {
    url: 'https://www.ambarperfumes.com.ar/',
    // Antes y después: misma toma y mismo encuadre (960x1200), así el
    // comparador los superpone sin que el frasco salte.
    before: 'images/casos/ambar/antes.webp',
    after: 'images/casos/ambar/despues.webp',
    logo: 'images/casos/ambar/logo.webp',
    label: 'images/casos/ambar/etiqueta.webp',
    campaign: 'images/casos/ambar/campana.webp',
  },

  /* --- Precios de "Lanzá tu marca" --------------------------------------- */
  // Texto tal cual se muestra (ej. 'USD 300', '$ 250.000'). Mientras un precio
  // esté en PENDIENTE, su tarjeta muestra "A consultar" en lugar de "Desde …",
  // así el sitio se puede publicar sin precios definidos.
  pricing: {
    brand: '$390.000',        // 01 · Marca lista
    campaign: '$650.000',     // 02 · Marca + campaña (o 3 cuotas sin interés)
    store: '$1.450.000',      // 03 · Marca + tienda (o 3 cuotas sin interés)
    storeMonthly: '$60.000',  // 03 · mantenimiento mensual de la tienda
  },

  /* --- Festivy (caso destacado) ------------------------------------------ */
  festivy: {
    url: 'https://festivy.app/',
    // Captura de la landing (1440x900 @2x, reducida a 1600x1000).
    image: 'images/casos/festivy.webp',
  },

  /* --- Foto del hero ----------------------------------------------------- */
  // Retrato recortado (fondo transparente) en blanco y negro, 1079x1025.
  heroImage: 'images/leo-bn.webp',

  /* --- CV / résumé por idioma -------------------------------------------- */
  cv: {
    es: 'Di Salvo - CV Español.pdf',
    en: 'Di Salvo - Resume English.pdf',
  },

  /* --- Metadatos --------------------------------------------------------- */
  siteUrl: 'https://leodisalvo.dev/',
  ogImage: 'https://leodisalvo.dev/images/og-v4.png',
};
