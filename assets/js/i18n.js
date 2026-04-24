var i18n = (function () {
  var currentLang = localStorage.getItem('lang') || 'es';

  function apply(lang) {
    var t = window.TRANSLATIONS[lang];
    if (!t) return;

    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.setAttribute('lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) el.innerHTML = t[key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (t[key] !== undefined) el.setAttribute('placeholder', t[key]);
    });

    document.querySelectorAll('[data-i18n-value]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-value');
      if (t[key] !== undefined) el.value = t[key];
    });

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    var cvBtn = document.getElementById('cv-btn');
    if (cvBtn) {
      cvBtn.href = lang === 'es'
        ? './Di Salvo - CV Español.pdf'
        : './Di Salvo - Resume English.pdf';
    }

    (window._i18nCallbacks || []).forEach(function (cb) { cb(lang); });
  }

  apply(currentLang);

  return {
    setLang: function (lang) { apply(lang); }
  };
})();
