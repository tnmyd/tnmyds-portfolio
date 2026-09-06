(() => {
  'use strict';

  // ---------------------------------------------------------------------
  // Translations
  // ---------------------------------------------------------------------
  const translations = {
    en: {
      // Meta / brand
      'page.title': 'Tanmoy Das — Fullstack Web Developer',
      'brand.name': 'Tanmoy Das',

      // Navigation
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.experience': 'Experience',
      'nav.skills': 'Skills',
      'nav.contact': 'Contact',

      // Hero
      'hero.title': 'Tanmoy Das',
      'hero.role': 'Fullstack Web Developer',
      'hero.tagline':
        'I create websites using HTML, CSS, Javascript, React and other frontend technologies.',

      // About
      'about.heading': 'About',
      'about.text':
        'I create websites using HTML, CSS, Javascript, React and other frontend technologies. I am currently a Software Development Engineer at Juspay, where I build user-facing products for the web and work alongside engineers, designers, and product teams to ship reliable, well-crafted software.',

      // Experience
      'experience.heading': 'Experience',
      'experience.role': 'Software Development Engineer',
      'experience.company': 'Juspay',
      'experience.dates': '2022 \u2013 Present',
      'experience.bullet1':
        'Design, build, and maintain user-facing features and interfaces across web products.',
      'experience.bullet2':
        'Collaborate with cross-functional teams including design, product, and backend engineering to deliver cohesive end-to-end experiences.',
      'experience.bullet3':
        'Optimize application performance, accessibility, and reliability through thoughtful code reviews and incremental improvements.',

      // Skills
      'skills.heading': 'Skills',
      'skill.html': 'HTML',
      'skill.css': 'CSS',
      'skill.javascript': 'JavaScript',
      'skill.react': 'React',
      'skill.typescript': 'TypeScript',
      'skill.nodejs': 'Node.js',
      'skill.git': 'Git',

      // Contact
      'contact.heading': 'Contact',
      'contact.textBefore':
        'The best way to reach me is by email at',
      'contact.textAfter':
        '. You can also find me on the platforms linked above.',
      'contact.email': 'hello@tnmyds.com',

      // Footer
      'footer.copyrightSymbol': '\u00A9',
      'footer.author': 'Tanmoy Das',

      // Aria labels
      'aria.primaryNav': 'Primary',
      'aria.navToggle': 'Toggle navigation',
      'aria.langToggle': 'Switch language',
      'aria.socialLinks': 'Social links',
      'aria.technicalSkills': 'Technical skills',
      'social.github': 'GitHub',
      'social.linkedin': 'LinkedIn',
      'social.twitter': 'Twitter / X',
      'social.codepen': 'CodePen',
      'social.email': 'Email',
    },

    hi: {
      // Meta / brand
      'page.title': '\u0924\u0928\u094D\u092E\u092F \u0926\u093E\u0938 \u2014 \u092B\u0941\u0932-\u0938\u094D\u091F\u0948\u0915 \u0935\u0947\u092C \u0921\u0947\u0935\u0932\u092A\u0930',
      'brand.name': '\u0924\u0928\u094D\u092E\u092F \u0926\u093E\u0938',

      // Navigation
      'nav.home': '\u0939\u094B\u092E',
      'nav.about': '\u092E\u0947\u0930\u0947 \u092C\u093E\u0930\u0947 \u092E\u0947\u0902',
      'nav.experience': '\u0905\u0928\u0941\u092D\u0935',
      'nav.skills': '\u0915\u094C\u0936\u0932',
      'nav.contact': '\u0938\u0902\u092A\u0930\u094D\u0915',

      // Hero
      'hero.title': '\u0924\u0928\u094D\u092E\u092F \u0926\u093E\u0938',
      'hero.role': '\u092B\u0932-\u0938\u094D\u091F\u0948\u0915 \u0935\u0947\u092C \u0921\u0947\u0935\u0932\u092A\u0930',
      'hero.tagline':
        '\u092E\u0948\u0902 HTML, CSS, Javascript, React \u0914\u0930 \u0905\u0928\u094D\u092F \u092B\u0930\u0902\u091F\u090F\u0902\u0921 \u091F\u0947\u0915\u0928\u0940\u0915\u094B\u0902 \u0915\u093E \u0909\u092A\u092F\u094B\u0917 \u0915\u0930\u0915\u0947 \u0935\u0947\u092C\u0938\u093E\u0907\u091F \u092C\u0928\u093E\u0924\u093E \u0939\u0942\u0901\u0964',

      // About
      'about.heading': '\u092E\u0947\u0930\u0947 \u092C\u093E\u0930\u0947 \u092E\u0947\u0902',
      'about.text':
        '\u092E\u0948\u0902 HTML, CSS, Javascript, React \u0914\u0930 \u0905\u0928\u094D\u092F \u092B\u0930\u0902\u091F\u090F\u0902\u0921 \u091F\u0947\u0915\u0928\u0940\u0915\u094B\u0902 \u0915\u093E \u0909\u092A\u092F\u094B\u0917 \u0915\u0930\u0915\u0947 \u0935\u0947\u092C\u0938\u093E\u0907\u091F \u092C\u0928\u093E\u0924\u093E \u0939\u0942\u0901\u0964 \u092E\u0948\u0902 \u0935\u0930\u094D\u0924\u092E\u093E\u0928 \u092E\u0947\u0902 Juspay \u092E\u0947\u0902 \u0938\u0949\u092B\u094D\u091F\u0935\u0947\u092F\u0930 \u0921\u0947\u0935\u0932\u092A\u092E\u0947\u0902\u091F \u0907\u0902\u091C\u0940\u0928\u093F\u092F\u0930 \u0915\u0947 \u0930\u0942\u092A \u092E\u0947\u0902 \u0915\u093E\u0930\u094D\u092F\u0930\u0924 \u0939\u0942\u0901, \u091C\u0939\u093E\u0901 \u092E\u0948\u0902 \u0935\u0947\u092C \u0915\u0947 \u0932\u093F\u090F \u0909\u092A\u092F\u094B\u0917\u0915\u0930\u094D\u0924\u093E-\u0915\u0947\u0902\u0926\u094D\u0930\u093F\u0924 \u0909\u0924\u094D\u092A\u093E\u0926 \u092C\u0928\u093E\u0924\u093E \u0939\u0942\u0901 \u0914\u0930 \u0907\u0902\u091C\u0940\u0928\u093F\u092F\u0930\u094B\u0902, \u0921\u093F\u091C\u093C\u093E\u0907\u0928\u0930\u094B\u0902 \u0924\u0925\u093E \u092A\u094D\u0930\u094B\u0921\u0915\u094D\u091F \u091F\u0940\u092E\u094B\u0902 \u0915\u0947 \u0938\u093E\u0925 \u092E\u093F\u0932\u0915\u0930 \u0935\u093F\u0936\u094D\u0935\u0938\u0928\u0940\u092F, \u0909\u0924\u094D\u0915\u0943\u0937\u094D\u091F \u0938\u0949\u092B\u094D\u091F\u0935\u0947\u092F\u0930 \u0924\u0948\u092F\u093E\u0930 \u0915\u0930\u0924\u093E \u0939\u0942\u0901\u0964',

      // Experience
      'experience.heading': '\u0905\u0928\u0941\u092D\u0935',
      'experience.role': '\u0938\u0949\u092B\u094D\u091F\u0935\u0947\u092F\u0930 \u0921\u0947\u0935\u0932\u092A\u092E\u0947\u0902\u091F \u0907\u0902\u091C\u0940\u0928\u093F\u092F\u0930',
      'experience.company': 'Juspay',
      'experience.dates': '2022 \u2013 \u0935\u0930\u094D\u0924\u092E\u093E\u0928',
      'experience.bullet1':
        '\u0935\u0947\u092C \u0909\u0924\u094D\u092A\u093E\u0926\u094B\u0902 \u0915\u0947 \u0932\u093F\u090F \u0909\u092A\u092F\u094B\u0917\u0915\u0930\u094D\u0924\u093E-\u0915\u0947\u0902\u0926\u094D\u0930\u093F\u0924 \u0938\u0941\u0935\u093F\u0927\u093E\u091F\u0947\u0902 \u0914\u0930 \u0907\u0902\u091F\u0930\u092B\u0947\u0938 \u0921\u093F\u091C\u093C\u093E\u0907\u0928, \u0928\u093F\u0930\u094D\u092E\u093E\u0923 \u0914\u0930 \u0909\u0928\u0915\u093E \u0930\u0916\u0930\u0916\u093E\u0935 \u0915\u0930\u0928\u093E\u0964',
      'experience.bullet2':
        '\u0921\u093F\u091C\u093C\u093E\u0907\u0928, \u092A\u094D\u0930\u094B\u0921\u0915\u094D\u091F \u0914\u0930 \u092C\u0948\u0915\u090F\u0902\u0921 \u0907\u0902\u091C\u0940\u0928\u093F\u092F\u0930\u093F\u0902\u0917 \u0938\u0939\u093F\u0924 \u0935\u093F\u092D\u093F\u0928\u094D\u0928 \u091F\u0940\u092E\u094B\u0902 \u0915\u0947 \u0938\u093E\u0925 \u0938\u0939\u092F\u094B\u0917 \u0915\u0930\u0915\u0947 \u0938\u092E\u0917\u094D\u0930 \u090F\u0902\u0921-\u091F\u0942-\u090F\u0902\u0921 \u0905\u0928\u0941\u092D\u0935 \u092A\u094D\u0930\u0926\u093E\u0928 \u0915\u0930\u0928\u093E\u0964',
      'experience.bullet3':
        '\u0935\u093F\u091A\u093E\u0930\u0936\u0940\u0932 \u0915\u094B\u0921 \u0938\u092E\u0940\u0915\u094D\u0937\u093E \u0914\u0930 \u0915\u094D\u0930\u092E\u093F\u0915 \u0938\u0941\u0927\u093E\u0930\u094B\u0902 \u0915\u0947 \u092E\u093E\u0927\u094D\u092F\u092E \u0938\u0947 \u090F\u092A\u094D\u0932\u093F\u0915\u0947\u0936\u0928 \u0915\u0947 \u092A\u094D\u0930\u0926\u0930\u094D\u0936\u0928, \u0938\u0941\u0932\u092D\u0924\u093E \u0914\u0930 \u0935\u093F\u0936\u094D\u0935\u0938\u0928\u0940\u092F\u0924\u093E \u0915\u094B \u092C\u0947\u0939\u0924\u0930 \u092C\u0928\u093E\u0928\u093E\u0964',

      // Skills
      'skills.heading': '\u0915\u094C\u0936\u0932',
      'skill.html': 'HTML',
      'skill.css': 'CSS',
      'skill.javascript': '\u091C\u093E\u0935\u093E\u0938\u094D\u0915\u094D\u0930\u093F\u092A\u094D\u091F',
      'skill.react': 'React',
      'skill.typescript': '\u091F\u093E\u0907\u092A\u0938\u094D\u0915\u094D\u0930\u093F\u092A\u094D\u091F',
      'skill.nodejs': 'Node.js',
      'skill.git': 'Git',

      // Contact
      'contact.heading': '\u0938\u0902\u092A\u0930\u094D\u0915',
      'contact.textBefore':
        '\u092E\u0941\u091D\u0938\u0947 \u0938\u0902\u092A\u0930\u094D\u0915 \u0915\u0930\u0928\u0947 \u0915\u093E \u0938\u092C\u0938\u0947 \u0905\u091A\u094D\u091B\u093E \u0924\u0930\u0940\u0915\u093E',
      'contact.textAfter':
        '. \u0906\u092A \u092E\u0941\u091D\u0947 \u090A\u092A\u0930 \u0932\u093F\u0902\u0915 \u0915\u093F\u090F \u0917\u090F \u092A\u094D\u0932\u0947\u091F\u092B\u093C\u0949\u092E \u092A\u0930 \u092D\u0940 \u0922\u0942\u0901\u0921 \u0938\u0915\u0924\u0947 \u0939\u0948\u0902\u0964',
      'contact.email': 'hello@tnmyds.com',

      // Footer
      'footer.copyrightSymbol': '\u00A9',
      'footer.author': '\u0924\u0928\u094D\u092E\u092F \u0926\u093E\u0938',

      // Aria labels
      'aria.primaryNav': '\u092E\u0941\u0916\u094D\u092F',
      'aria.navToggle': '\u0928\u0947\u0935\u093F\u0917\u0947\u0936\u0928 \u091F\u0949\u0917\u0932 \u0915\u0930\u0947\u0902',
      'aria.langToggle': '\u092D\u093E\u0937\u093E \u092C\u0926\u0932\u0947\u0902',
      'aria.socialLinks': '\u0938\u094B\u0936\u0932 \u092E\u0940\u0921\u093F\u092F\u093E \u0932\u093F\u0902\u0915',
      'aria.technicalSkills': '\u0924\u0915\u0928\u0940\u0915\u0940 \u0915\u094C\u0936\u0932',
      'social.github': 'GitHub',
      'social.linkedin': 'LinkedIn',
      'social.twitter': 'Twitter / X',
      'social.codepen': 'CodePen',
      'social.email': '\u0908\u092E\u0947\u0932',
    },
  };

  const SUPPORTED_LANGS = ['en', 'hi'];
  const STORAGE_KEY = 'preferredLanguage';
  const DEFAULT_LANG = 'en';

  // ---------------------------------------------------------------------
  // i18n helpers
  // ---------------------------------------------------------------------
  const safeStorage = {
    get(key) {
      try {
        return window.localStorage.getItem(key);
      } catch (e) {
        return null;
      }
    },
    set(key, value) {
      try {
        window.localStorage.setItem(key, value);
      } catch (e) {
        // ignore quota / privacy mode failures
      }
    },
  };

  function getStoredLanguage() {
    const stored = safeStorage.get(STORAGE_KEY);
    if (SUPPORTED_LANGS.includes(stored)) return stored;
    return DEFAULT_LANG;
  }

  function validateTranslations() {
    ['en', 'hi'].forEach((lang) => {
      const dict = translations[lang];
      if (!dict) {
        console.warn(`[i18n] Missing translation set for "${lang}"`);
        return;
      }
      const ref = translations[DEFAULT_LANG];
      const missing = Object.keys(ref).filter((k) => !(k in dict));
      if (missing.length) {
        console.warn(
          `[i18n] Keys missing in "${lang}":`,
          missing
        );
      }
    });

    // Warn about keys referenced in the DOM but not present in en.
    document.querySelectorAll('[data-i18n], [data-i18n-aria]').forEach((el) => {
      ['data-i18n', 'data-i18n-aria'].forEach((attr) => {
        const key = el.getAttribute(attr);
        if (!key) return;
        if (!(key in translations.en)) {
          console.warn(
            `[i18n] DOM references unknown key "${key}" (${attr})`
          );
        }
      });
    });
  }

  function applyTranslations(lang) {
    const dict = translations[lang];
    if (!dict) return;

    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (key && Object.prototype.hasOwnProperty.call(dict, key)) {
        el.textContent = dict[key];
      }
    });

    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      const key = el.getAttribute('data-i18n-aria');
      if (key && Object.prototype.hasOwnProperty.call(dict, key)) {
        el.setAttribute('aria-label', dict[key]);
      }
    });

    const langToggle = document.querySelector('.lang-toggle');
    if (langToggle) {
      const langLabel = lang === 'en' ? 'English' : '\u0939\u093F\u0902\u0926\u0940';
      langToggle.setAttribute(
        'aria-label',
        `${translations[lang]['aria.langToggle']}, ${langLabel}`
      );
      langToggle.setAttribute('data-lang', lang);
    }
  }

  function setLanguage(lang) {
    if (!SUPPORTED_LANGS.includes(lang)) return;
    applyTranslations(lang);
    safeStorage.set(STORAGE_KEY, lang);
  }

  function toggleLanguage() {
    const current = document.documentElement.lang || DEFAULT_LANG;
    setLanguage(current === 'en' ? 'hi' : 'en');
  }

  // ---------------------------------------------------------------------
  // App
  // ---------------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', () => {
    validateTranslations();

    const navToggle = document.querySelector('.nav-toggle');
    const primaryNav = document.getElementById('primary-nav');
    const navLinks = Array.from(
      document.querySelectorAll('.primary-nav .nav-link')
    );
    const sections = navLinks
      .map((link) => {
        const id = link.getAttribute('href');
        if (!id || !id.startsWith('#')) return null;
        return document.getElementById(id.slice(1));
      })
      .filter(Boolean);

    const isMobile = () =>
      window.matchMedia('(max-width: 719.98px)').matches;

    // --- Mobile nav toggle ---------------------------------------------
    if (navToggle && primaryNav) {
      const setOpen = (open) => {
        primaryNav.classList.toggle('open', open);
        navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      };

      navToggle.addEventListener('click', () => {
        const open = primaryNav.classList.contains('open');
        setOpen(!open);
      });

      // Close menu after clicking a nav link (mobile)
      navLinks.forEach((link) => {
        link.addEventListener('click', () => {
          if (isMobile()) setOpen(false);
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

    // --- Language toggle -----------------------------------------------
    const langToggle = document.querySelector('.lang-toggle');
    if (langToggle) {
      langToggle.addEventListener('click', () => {
        toggleLanguage();
        if (isMobile() && primaryNav) {
          primaryNav.classList.remove('open');
          if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
        }
      });
    }

    // Apply initial language from storage (defaults to en)
    setLanguage(getStoredLanguage());

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
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => {
              const aCenter = Math.abs(
                a.boundingClientRect.top + a.boundingClientRect.height / 2 -
                  window.innerHeight / 2
              );
              const bCenter = Math.abs(
                b.boundingClientRect.top + b.boundingClientRect.height / 2 -
                  window.innerHeight / 2
              );
              return aCenter - bCenter;
            });
          if (visible.length) {
            setActive(visible[0].target.id);
          }
        },
        {
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
