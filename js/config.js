/* ==========================================================================
   Site config
   ========================================================================== */
(function () {
  'use strict';

  var CONFIG = {
    email: "mywisnuwardhana@gmail.com",
    social: {
      linkedin:  "https://www.linkedin.com/in/wisnu-wardhana-a28b34371",
      instagram: "https://www.instagram.com/wisnuwrdh_"
    }
  };

  function activate(el, href) {
    if (!el) return;
    el.setAttribute('href', href);
    el.removeAttribute('hidden');
    var li = el.closest('li');
    if (li) li.removeAttribute('hidden');
  }

  function readValue(src) {
    return (src == null ? '' : String(src)).trim();
  }

  var email = readValue(CONFIG.email);
  if (email) {
    activate(
      document.querySelector('[data-config="email"]'),
      'mailto:' + email + '?subject=Content%20Marketing%20Opportunity'
    );
  }

  var social = CONFIG.social || {};
  document.querySelectorAll('[data-config^="social."]').forEach(function (el) {
    var key = el.getAttribute('data-config').split('.')[1];
    var url = readValue(social[key]);
    if (url) activate(el, url);
  });

  window.__config = CONFIG;
})();