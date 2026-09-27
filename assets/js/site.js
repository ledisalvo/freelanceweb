/* ---------------------------------------------------------------------------
   site.js — i18n, links desde configuración, logos, menú mobile.
   Sin dependencias. Se ejecuta en el orden: config.js → translations.js → este.
--------------------------------------------------------------------------- */
(function () {
  'use strict';

  var CFG = window.SITE_CONFIG || {};
  var T = window.TRANSLATIONS || {};
  var PENDING = 'PENDIENTE';
  var DEFAULT_LANG = 'es';

  var lang = readLang();

  function readLang() {
    var stored = null;
    try {
      stored = localStorage.getItem('lang');
    } catch (e) {
      /* localStorage bloqueado: seguimos con el idioma por defecto */
    }
    return T[stored] ? stored : DEFAULT_LANG;
  }

  function t(key) {
    var dict = T[lang] || T[DEFAULT_LANG] || {};
    return dict[key] !== undefined ? dict[key] : '';
  }

  function isPending(value) {
    return !value || value === PENDING;
  }

  /* --- Metadatos --------------------------------------------------------- */

  function setMeta(selector, value) {
    var el = document.head.querySelector(selector);
    if (el) el.setAttribute('content', value);
  }

  function applyMeta() {
    var title = t('meta.title');
    var desc = t('meta.description');

    document.title = title;
    setMeta('meta[name="description"]', desc);
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', desc);
    setMeta('meta[property="og:locale"]', t('meta.locale'));
    setMeta('meta[name="twitter:title"]', title);
    setMeta('meta[name="twitter:description"]', desc);
  }

  /* --- Texto ------------------------------------------------------------- */

  function applyText() {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var value = t(el.getAttribute('data-i18n'));
      if (value) el.innerHTML = value;
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      var value = t(el.getAttribute('data-i18n-alt'));
      if (value) el.setAttribute('alt', value);
    });

    document.querySelectorAll('[data-i18n-aria-label]').forEach(function (el) {
      var value = t(el.getAttribute('data-i18n-aria-label'));
      if (value) el.setAttribute('aria-label', value);
    });
  }

  /* --- Links ------------------------------------------------------------- */

  function resolve(name) {
    switch (name) {
      case 'booking':
        return CFG.booking;
      case 'whatsapp':
        return isPending(CFG.whatsappNumber)
          ? PENDING
          : 'https://wa.me/' + CFG.whatsappNumber + '?text=' + encodeURIComponent(t('contact.wa_message'));
      case 'email':
        return isPending(CFG.email) ? PENDING : 'mailto:' + CFG.email;
      case 'linkedin':
        return CFG.linkedin;
      case 'github':
        return CFG.github;
      case 'festivy':
        return CFG.festivy && CFG.festivy.url;
      case 'cv':
        return (CFG.cv && CFG.cv[lang]) || (CFG.cv && CFG.cv[DEFAULT_LANG]);
      default:
        return null;
    }
  }

  function applyLinks() {
    document.querySelectorAll('[data-link]').forEach(function (el) {
      var url = resolve(el.getAttribute('data-link'));
      var note = el.querySelector('.pending-note');

      if (isPending(url)) {
        // Placeholder visible: el link no existe todavía (ver assets/js/config.js).
        el.removeAttribute('href');
        el.classList.add('is-pending');
        el.setAttribute('aria-disabled', 'true');
        if (!note) {
          note = document.createElement('span');
          note.className = 'pending-note';
          el.appendChild(note);
        }
        note.textContent = '(' + t('ui.pending') + ')';
        return;
      }

      el.setAttribute('href', url);
      el.classList.remove('is-pending');
      el.removeAttribute('aria-disabled');
      if (note) note.remove();
    });
  }

  /* --- Imágenes desde configuración -------------------------------------- */

  function applyImages() {
    var map = {
      hero: CFG.heroImage,
      festivy: CFG.festivy && CFG.festivy.image,
    };

    Object.keys(map).forEach(function (key) {
      var el = document.querySelector('[data-img="' + key + '"]');
      if (!el || isPending(map[key])) return;
      el.setAttribute('src', map[key]);
      // Los placeholders traen medidas propias; al reemplazarlos dejamos que
      // el CSS gobierne la proporción.
      el.removeAttribute('width');
      el.removeAttribute('height');
    });
  }

  /* --- Logos de empresas ------------------------------------------------- */

  function applyCompanies() {
    var list = document.querySelector('[data-companies]');
    if (!list || !Array.isArray(CFG.companies)) return;

    list.innerHTML = '';
    CFG.companies.forEach(function (company) {
      var li = document.createElement('li');
      if (isPending(company.logo)) {
        // Sin logo todavía: el nombre en texto, con el mismo tratamiento visual.
        var span = document.createElement('span');
        span.textContent = company.name;
        li.appendChild(span);
      } else {
        var img = document.createElement('img');
        img.setAttribute('src', company.logo);
        img.setAttribute('alt', company.name);
        img.setAttribute('loading', 'lazy');
        img.setAttribute('class', 'companies__logo');
        li.appendChild(img);
      }
      list.appendChild(li);
    });
  }

  /* --- Switch de idioma -------------------------------------------------- */

  function applyLangButtons() {
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      var active = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  }

  function apply() {
    document.documentElement.setAttribute('lang', lang);
    applyMeta();
    applyText();
    applyLinks();
    applyImages();
    applyCompanies();
    applyLangButtons();
    syncToggleLabel();
  }

  function setLang(next) {
    if (!T[next] || next === lang) return;
    lang = next;
    try {
      localStorage.setItem('lang', lang);
    } catch (e) {
      /* sin persistencia: el cambio igual aplica en esta visita */
    }
    apply();
  }

  /* --- Menú mobile ------------------------------------------------------- */

  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');

  function navOpen() {
    return document.body.classList.contains('nav-is-open');
  }

  function syncToggleLabel() {
    if (!toggle) return;
    toggle.setAttribute('aria-label', t(navOpen() ? 'nav.menu_close' : 'nav.menu_open'));
  }

  function setNav(open) {
    document.body.classList.toggle('nav-is-open', open);
    if (toggle) toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    syncToggleLabel();
  }

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      setNav(!navOpen());
    });

    nav.addEventListener('click', function (event) {
      if (event.target.closest('a')) setNav(false);
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && navOpen()) {
        setNav(false);
        toggle.focus();
      }
    });
  }

  document.addEventListener('click', function (event) {
    var btn = event.target.closest('.lang-btn');
    if (btn) setLang(btn.getAttribute('data-lang'));
  });

  /* --- Agenda: modal de Cal.com ------------------------------------------ */
  // El botón es un link común a cal.com. El script de Cal se carga recién
  // cuando la sección de contacto se acerca al viewport (no pesa en la carga
  // inicial); una vez listo, el click abre el modal en vez de otra pestaña.

  var CAL_NS = 'booking';
  var calLink = /^https:\/\/cal\.com\//.test(CFG.booking || '')
    ? CFG.booking.replace(/^https:\/\/cal\.com\//, '').replace(/\/$/, '')
    : null;
  var calReady = false;

  function loadCal() {
    if (window.Cal) return;
    // Snippet oficial de embed de Cal.com.
    (function (C, A, L) {
      var p = function (a, ar) { a.q.push(ar); };
      var d = C.document;
      C.Cal = C.Cal || function () {
        var cal = C.Cal;
        var ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          var s = d.createElement('script');
          s.src = A;
          s.async = true;
          s.onload = function () { calReady = true; };
          d.head.appendChild(s);
          cal.loaded = true;
        }
        if (ar[0] === L) {
          var api = function () { p(api, arguments); };
          var namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === 'string') {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ['initNamespace', namespace]);
          } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(window, 'https://app.cal.com/embed/embed.js', 'init');

    window.Cal('init', CAL_NS, { origin: 'https://app.cal.com' });
    window.Cal.ns[CAL_NS]('ui', {
      theme: 'light',
      cssVarsPerTheme: { light: { 'cal-brand': '#2A4A7F' } },
      layout: 'month_view',
    });
  }

  if (calLink) {
    var contact = document.getElementById('contacto');
    if (contact && 'IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        if (entries.some(function (e) { return e.isIntersecting; })) {
          io.disconnect();
          loadCal();
        }
      }, { rootMargin: '600px 0px' });
      io.observe(contact);
    }

    document.addEventListener('click', function (event) {
      var el = event.target.closest('[data-link="booking"]');
      // Sin script listo (bloqueado, offline, todavía cargando): link normal.
      if (!el || !calReady || !window.Cal || !window.Cal.ns[CAL_NS]) return;
      event.preventDefault();
      window.Cal.ns[CAL_NS]('modal', { calLink: calLink, config: { layout: 'month_view' } });
    });
  }

  /* --- Único momento de animación: entrada del hero ---------------------- */

  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduced) document.documentElement.classList.add('anim-ready');

  apply();
})();
