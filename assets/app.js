/* SecHome web — motor de idioma (auto-detección + selector manual, persistido). */
(function () {
  var LANGS = ['en', 'es', 'fr', 'de', 'it', 'pt', 'nl', 'pl', 'tr', 'ru'];
  var NAMES = {
    en: 'English', es: 'Español', fr: 'Français', de: 'Deutsch', it: 'Italiano',
    pt: 'Português', nl: 'Nederlands', pl: 'Polski', tr: 'Türkçe', ru: 'Русский'
  };
  var KEY = 'sechome_lang';

  function pick() {
    try { var s = localStorage.getItem(KEY); if (s && LANGS.indexOf(s) >= 0) return s; } catch (e) {}
    var prefs = (navigator.languages && navigator.languages.length) ? navigator.languages : [navigator.language || 'en'];
    for (var i = 0; i < prefs.length; i++) {
      var c = (prefs[i] || '').slice(0, 2).toLowerCase();
      if (LANGS.indexOf(c) >= 0) return c;
    }
    return 'en'; // idioma no soportado -> inglés
  }

  function apply(lang) {
    var I = window.I18N || {};
    var dict = I[lang] || I.en || {};
    document.documentElement.setAttribute('lang', lang);
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      if (dict[k] != null) el.textContent = dict[k];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-html');
      if (dict[k] != null) el.innerHTML = dict[k];
    });
    if (dict.meta_title) document.title = dict.meta_title;
    var md = document.querySelector('meta[name="description"]');
    if (md && dict.meta_desc) md.setAttribute('content', dict.meta_desc);
    var sel = document.getElementById('langSel');
    if (sel) sel.value = lang;
  }

  function init() {
    var sel = document.getElementById('langSel');
    if (sel && !sel.options.length) {
      LANGS.forEach(function (l) {
        var o = document.createElement('option');
        o.value = l; o.textContent = NAMES[l];
        sel.appendChild(o);
      });
      sel.addEventListener('change', function () {
        try { localStorage.setItem(KEY, sel.value); } catch (e) {}
        apply(sel.value);
      });
    }
    apply(pick());
    // año dinámico en el footer
    document.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });
  }

  if (document.readyState !== 'loading') init();
  else document.addEventListener('DOMContentLoaded', init);
})();
