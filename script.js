(() => {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const primaryNav = document.getElementById('primary-nav');
    const navLinks = Array.from(document.querySelectorAll('.primary-nav .nav-link'));
    const sections = navLinks
      .map((link) => {
        const id = link.getAttribute('href');
        if (!id || !id.startsWith('#')) return null;
        return document.getElementById(id.slice(1));
      })
      .filter(Boolean);

    // --- Mobile nav toggle ---------------------------------------------
    if (navToggle && primaryNav) {
      const setOpen = (open) => {
        primaryNav.classList.toggle('open', open);
        navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      };

      navToggle.addEventListener('click', () => {
        const isOpen = primaryNav.classList.contains('open');
        setOpen(!isOpen);
      });

      // Close menu after clicking a nav link (mobile)
      navLinks.forEach((link) => {
        link.addEventListener('click', () => {
          if (window.matchMedia('(max-width: 719.98px)').matches) {
            setOpen(false);
          }
        });
      });

      // Close on Escape
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && primaryNav.classList.contains('open')) {
          setOpen(false);
          navToggle.focus();
        }
      });
    }

    // --- Active nav highlight via IntersectionObserver -----------------
    if ('IntersectionObserver' in window && sections.length) {
      const linkById = new Map();
      navLinks.forEach((link) => {
        const id = link.getAttribute('href');
        if (id && id.startsWith('#')) linkById.set(id.slice(1), link);
      });

      const setActive = (id) => {
        navLinks.forEach((link) => link.classList.remove('active'));
        const link = linkById.get(id);
        if (link) link.classList.add('active');
      };

      const observer = new IntersectionObserver(
        (entries) => {
          // Pick the entry whose center is closest to the viewport's vertical center.
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => {
              const aCenter = Math.abs(
                a.boundingClientRect.top + a.boundingClientRect.height / 2
                  - window.innerHeight / 2
              );
              const bCenter = Math.abs(
                b.boundingClientRect.top + b.boundingClientRect.height / 2
                  - window.innerHeight / 2
              );
              return aCenter - bCenter;
            });
          if (visible.length) {
            setActive(visible[0].target.id);
          }
        },
        {
          // Trigger near the middle of the viewport
          rootMargin: '-45% 0px -45% 0px',
          threshold: 0,
        }
      );

      sections.forEach((section) => observer.observe(section));
    }

    // --- Footer year ---------------------------------------------------
    const yearEl = document.getElementById('year');
    if (yearEl) {
      yearEl.textContent = String(new Date().getFullYear());
    }
  });
})();
