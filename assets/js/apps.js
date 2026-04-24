(function () {
  var section = document.getElementById('apps');
  if (!section || !window.APPS_DATA) return;

  var grid = section.querySelector('.app-grid');

  function render(lang) {
    var t = (window.TRANSLATIONS && window.TRANSLATIONS[lang]) || {};
    var visible = window.APPS_DATA.filter(function (a) {
      return a.status === 'live' || a.status === 'beta';
    });

    grid.innerHTML = '';

    if (visible.length === 0) {
      section.style.display = 'none';
      return;
    }

    section.style.display = '';

    visible.forEach(function (app) {
      var col = document.createElement('div');
      col.className = 'col-4 col-6-medium col-12-small';
      col.innerHTML = buildCard(app, lang, t);
      grid.appendChild(col);
    });
  }

  function buildCard(app, lang, t) {
    var statusLabels = { live: 'Live', beta: 'Beta' };
    var tagline = (lang === 'es' && app.tagline_es) ? app.tagline_es : app.tagline;

    var techTags = (app.tech || []).map(function (tag) {
      return '<span class="app-tech-tag">' + tag + '</span>';
    }).join('');

    var buttons = [];
    if (app.live_url) {
      var label = lang === 'es'
        ? (app.cta_label_es || t['apps.cta_live'] || 'Ver app')
        : (app.cta_label    || t['apps.cta_live'] || 'See it live');
      buttons.push('<a href="' + app.live_url + '" target="_blank" rel="noopener" class="button small">' + label + '</a>');
    }
    if (app.repo_url) {
      var ghLabel = t['apps.cta_github'] || 'GitHub';
      buttons.push('<a href="' + app.repo_url + '" target="_blank" rel="noopener" class="button small icon brands fa-github"> ' + ghLabel + '</a>');
    }

    return [
      '<div class="app-card">',
      '  <div class="app-thumb">',
      '    <img src="' + app.thumbnail + '" alt="' + app.name + '">',
      '    <span class="app-status ' + app.status + '">' + (statusLabels[app.status] || app.status) + '</span>',
      '  </div>',
      '  <h3>' + app.name + '</h3>',
      '  <p class="app-tagline">' + tagline + '</p>',
      techTags ? '  <div class="app-tech-tags">' + techTags + '</div>' : '',
      buttons.length ? '  <ul class="actions small"><li>' + buttons.join('</li><li>') + '</li></ul>' : '',
      '</div>'
    ].join('\n');
  }

  var initialLang = localStorage.getItem('lang') || 'es';
  render(initialLang);

  // Register for re-render when i18n changes language
  (window._i18nCallbacks = window._i18nCallbacks || []).push(render);
})();
