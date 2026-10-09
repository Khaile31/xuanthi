/* ==========================================================================
   Xuân Thì Café — script.js
   Spec §6: fade-up on scroll, header scroll state, active nav, scroll cue,
   space progress, mobile menu. Respects prefers-reduced-motion.
   ========================================================================== */
(function () {
  'use strict';

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

/* --- Reveal on scroll (IntersectionObserver) -------------------------- */
  function initReveal() {
    var els = document.querySelectorAll('[data-reveal]');
    if (!els.length) return;

    if (reducedMotion.matches || !('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }

    // Stagger: cap group size to avoid long cumulative delays
    var groups = document.querySelectorAll('[data-reveal-group]');
    groups.forEach(function (group) {
      var children = group.querySelectorAll('[data-reveal]');
      children.forEach(function (child, i) {
        child.style.setProperty('--i', Math.min(i, 7)); // cap stagger at 7*70ms = 490ms
      });
    });

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    els.forEach(function (el) { io.observe(el); });
  }

  /* --- Stagger children in [data-reveal-group] -------------------------- */
  function initRevealGroup() {
    // Stagger assignment moved into initReveal() to avoid duplicate iteration
  }

  /* --- Header scroll state (rAF-throttled, combined with scroll cue) --- */
  function initHeader() {
    var header = document.getElementById('site-header');
    var cue = document.querySelector('.scroll-cue');
    if (!header) return;

    var scrolled = false;
    var cueHidden = false;
    var ticking = false;

    var apply = function () {
      var y = window.scrollY;
      var shouldScroll = y > 24;
      if (shouldScroll !== scrolled) {
        scrolled = shouldScroll;
        header.classList.toggle('is-scrolled', scrolled);
      }
      if (cue) {
        var shouldHideCue = y > 120;
        if (shouldHideCue !== cueHidden) {
          cueHidden = shouldHideCue;
          cue.classList.toggle('is-hidden', cueHidden);
        }
      }
      ticking = false;
    };

    var onScroll = function () {
      if (!ticking) {
        window.requestAnimationFrame(apply);
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    apply();
  }

  /* --- Active nav link (IntersectionObserver) --------------------------- */
  function initActiveNav() {
    var links = document.querySelectorAll('.main-nav a[data-nav]');
    if (!links.length) return;

    var sections = [];
    links.forEach(function (link) {
      var id = link.getAttribute('data-nav');
      var sec = document.getElementById(id);
      if (sec) sections.push({ id: id, el: sec, link: link });
    });
    if (!sections.length) return;

    if (!('IntersectionObserver' in window)) return;

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.id;
          links.forEach(function (l) { l.classList.remove('is-active'); });
          var active = sections.find(function (s) { return s.id === id; });
          if (active) active.link.classList.add('is-active');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

    sections.forEach(function (s) { io.observe(s.el); });
  }

  /* --- Scroll cue hide (merged into initHeader rAF loop) -------------- */
  function initScrollCue() {
    // Logic already handled inside initHeader's rAF-throttled scroll listener
    // to avoid duplicate scroll handlers. Kept as no-op for init() compatibility.
  }

  /* --- Mobile menu toggle ----------------------------------------------- */
  function initMobileMenu() {
    var btn = document.getElementById('hamburger');
    var nav = document.getElementById('main-nav');
    if (!btn || !nav) return;

    btn.addEventListener('click', function () {
      var expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      btn.setAttribute('aria-label', expanded ? 'Mở menu' : 'Đóng menu');
      nav.classList.toggle('is-open', !expanded);
    });

    // Close on link click
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        btn.setAttribute('aria-expanded', 'false');
        btn.setAttribute('aria-label', 'Mở menu');
        nav.classList.remove('is-open');
      });
    });
  }

  /* --- Space horizontal progress (scaleX for GPU compositing) --------- */
  function initSpaceProgress() {
    var track = document.getElementById('space-track');
    var bar = document.getElementById('space-progress');
    if (!track || !bar) return;

    var ticking = false;
    var update = function () {
      var max = track.scrollWidth - track.clientWidth;
      if (max <= 0) { bar.style.transform = 'scaleX(1)'; return; }
      var pct = track.scrollLeft / max;
      bar.style.transform = 'scaleX(' + Math.min(1, Math.max(0, pct)) + ')';
      ticking = false;
    };
    track.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    }, { passive: true });
    update();
  }

  /* --- Init ------------------------------------------------------------- */
  function init() {
    initRevealGroup();
    initReveal();
    initHeader();
    initActiveNav();
    initScrollCue();
    initMobileMenu();
    initSpaceProgress();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
