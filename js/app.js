/* ==========================================================================
   App — Reveal · Router · Anchor fix · Mobile nav · Language · Sticky header
   Dimuat setelah config.js dan i18n.js (defer, urut sesuai index.html).
   ========================================================================== */

/* ==========================================================================
   1. Reveal animation
   ========================================================================== */
(function () {
  'use strict';

  var root = document.documentElement;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var observer = null;

  function scan() {
    var targets = document.querySelectorAll('[data-reveal]:not(.is-visible)');

    if (reduceMotion || !('IntersectionObserver' in window)) {
      root.classList.remove('js-reveal');
      targets.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }

    if (!observer) {
      observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      }, { rootMargin: '0px 0px -6% 0px', threshold: 0.05 });
    }

    targets.forEach(function (el) { observer.observe(el); });
  }

  window.__siteReveal = { scan: scan };
  scan();
})();

/* ==========================================================================
   2. Router
   ========================================================================== */
(function () {
  'use strict';

  var ROUTES = {
    '/':                      'home',
    '/work/narehat':          'narehat',
    '/work/pedetanpajerawat': 'ptj',
    '/notes':                 'notes',
    '/now':                   'now'
  };

  var pages = document.querySelectorAll('[data-page]');
  var current = null;

  function setTitle() {
    var key = 'title.' + (current || 'home');
    document.title = window.__i18n.t(key);
  }

  function updateNavCurrent() {
    var hash = window.location.hash || '#/';
    var page = current;
    document.querySelectorAll('#siteNav a').forEach(function (a) {
      var href = a.getAttribute('href') || '';
      var active = false;
      var ariaValue = 'page';

      if (page === 'home') {
        active = (hash === href);
        ariaValue = 'location';
      } else if (page === 'notes') {
        active = (href === '#/notes');
      } else if (page === 'now') {
        active = (href === '#/now');
      } else if (page === 'narehat' || page === 'ptj') {
        active = (href === '#work');
        ariaValue = 'location';
      }

      if (active) a.setAttribute('aria-current', ariaValue);
      else a.removeAttribute('aria-current');
    });
  }

  function show(name) {
    pages.forEach(function (p) {
      var on = p.getAttribute('data-page') === name;
      if (on) p.removeAttribute('hidden');
      else    p.setAttribute('hidden', '');
    });

    setTitle();

    if (window.__siteReveal) window.__siteReveal.scan();
    updateNavCurrent();
  }

  function applyRoute() {
    var hash  = window.location.hash.replace(/^#/, '');
    var isSub = hash.indexOf('/') === 0;

    var name = 'home';
    if (isSub) name = ROUTES[hash] || '404';

    var changed = name !== current;
    current = name;
    show(name);

    if (isSub) {
      if (changed) window.scrollTo(0, 0);
      return;
    }

    if (hash) {
      var el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'auto', block: 'start' });
      } else if (changed) {
        window.scrollTo(0, 0);
      }
    } else if (changed) {
      window.scrollTo(0, 0);
    }
  }

  // Expose router untuk dipakai anchor-fix
  window.__router = {
    current: function () { return current; },
    goTo: function (name) { current = name; show(name); }
  };

  window.addEventListener('hashchange', applyRoute);
  applyRoute();

  document.querySelectorAll('a[href="#/"]').forEach(function (a) {
    a.addEventListener('click', function () {
      var h = window.location.hash.replace(/^#/, '');
      if (h === '' || h === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  });

  window.__i18n.onChange(setTitle);
})();

/* ==========================================================================
   3. Anchor link fix
   In-page anchor (#work, #about, #contact) pakai replaceState supaya tidak
   mengotori history. Saat di sub-page, tetap push karena itu navigasi nyata.
   ========================================================================== */
(function () {
  'use strict';

  document.addEventListener('click', function (e) {
    var link = e.target.closest('a[href]');
    if (!link) return;

    var href = link.getAttribute('href');
    if (!href) return;

    // Hanya handle in-page anchor, skip route (#/...) dan external
    if (href.charAt(0) !== '#' || href.indexOf('#/') === 0) return;

    var id = href.slice(1);
    if (!id) return;

    var el = document.getElementById(id);
    if (!el) return;

    // Jangan intercept kalau user pakai modifier (buka tab baru dll)
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;

    e.preventDefault();

    var currentPageEl = document.querySelector('.page:not([hidden])');
    var onHome = currentPageEl && currentPageEl.getAttribute('data-page') === 'home';

    if (onHome) {
      // Anchor di halaman yang sama: replace, jangan tambah entry
      history.replaceState(null, '', '#' + id);
    } else {
      // Dari sub-page: ini navigasi nyata, tetap push
      history.pushState(null, '', '#' + id);
      if (window.__router) window.__router.goTo('home');
    }

    requestAnimationFrame(function () {
      var target = document.getElementById(id);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
})();

/* ==========================================================================
   4. Mobile nav toggle
   - Nav dipindahkan ke <body> saat drawer dibuka supaya tidak terpengaruh
     containing block dari .site-header (sticky + backdrop-filter).
   - Focus trap: saat drawer terbuka, Tab tidak bocor ke konten belakang.
   - Focus restoration: saat drawer ditutup, fokus kembali ke tombol pemicu.
   ========================================================================== */
(function () {
  'use strict';

  var toggle   = document.getElementById('navToggle');
  var nav      = document.getElementById('siteNav');
  var closeBtn = document.getElementById('navClose');
  if (!toggle || !nav) return;

  var navParent = nav.parentNode;
  var navNext   = nav.nextSibling;
  var moved     = false;
  var isOpen    = false;
  var lastFocusedEl = null;

  var backdrop = document.createElement('div');
  backdrop.className = 'nav-backdrop';
  backdrop.setAttribute('aria-hidden', 'true');
  document.body.appendChild(backdrop);

  function detachNav() {
    if (moved) return;
    navParent = nav.parentNode;
    navNext   = nav.nextSibling;
    document.body.appendChild(nav);
    moved = true;
  }

  function reattachNav() {
    if (!moved) return;
    if (navNext && navNext.parentNode === navParent) {
      navParent.insertBefore(nav, navNext);
    } else {
      navParent.appendChild(nav);
    }
    moved = false;
  }

  function getFocusable() {
    return Array.prototype.slice.call(
      nav.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')
    ).filter(function (el) {
      return el.offsetParent !== null || el === document.activeElement;
    });
  }

  function open() {
    if (isOpen) return;
    isOpen = true;
    lastFocusedEl = document.activeElement;

    detachNav();
    nav.classList.add('is-ready');

    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        nav.classList.add('is-open');
        setTimeout(function () {
          if (isOpen && closeBtn) {
            try { closeBtn.focus({ preventScroll: true }); } catch (e) { closeBtn.focus(); }
          }
        }, 340);
      });
    });

    backdrop.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close menu');
    document.body.style.overflow = 'hidden';
    document.body.classList.add('nav-open');
  }

  function close() {
    if (!isOpen) return;
    isOpen = false;

    nav.classList.remove('is-open');

    setTimeout(function () {
      nav.classList.remove('is-ready');
      reattachNav();
    }, 340);

    backdrop.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
    document.body.style.overflow = '';
    document.body.classList.remove('nav-open');

    if (lastFocusedEl && typeof lastFocusedEl.focus === 'function') {
      try { lastFocusedEl.focus({ preventScroll: true }); }
      catch (e) { lastFocusedEl.focus(); }
    }
  }

  toggle.addEventListener('click', function () {
    isOpen ? close() : open();
  });

  if (closeBtn) closeBtn.addEventListener('click', close);
  backdrop.addEventListener('click', close);

  document.addEventListener('keydown', function (e) {
    if (!isOpen) return;
    if (e.key === 'Escape') { close(); return; }
    if (e.key !== 'Tab') return;

    var focusables = getFocusable();
    if (!focusables.length) return;
    var first = focusables[0];
    var last  = focusables[focusables.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === first || !nav.contains(document.activeElement)) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last || !nav.contains(document.activeElement)) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  nav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', close);
  });

  var mq = window.matchMedia('(min-width: 900px)');
  mq.addEventListener('change', function (e) {
    if (e.matches && isOpen) close();
  });
})();

/* ==========================================================================
   5. Language switcher
   ========================================================================== */
(function () {
  'use strict';

  var buttons = document.querySelectorAll('.lang__btn');
  if (!buttons.length) return;

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var lang = btn.getAttribute('data-lang');
      window.__i18n.apply(lang);
    });
  });
})();

/* ==========================================================================
   6. Sticky header
   ========================================================================== */
(function () {
  'use strict';

  var header = document.getElementById('siteHeader');
  if (!header) return;

  var ticking = false;
  function update() {
    header.classList.toggle('is-scrolled', window.scrollY > 12);
    ticking = false;
  }
  window.addEventListener('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });
  update();
})();