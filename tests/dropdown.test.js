/**
 * jsdom-based test for the language dropdown wiring.
 *
 * Loads index.html and script.js into a jsdom environment, simulates a click
 * on the Hindi .lang-option, and asserts that:
 *   1. document.documentElement.lang is updated to 'hi'.
 *   2. A visible translated element (data-i18n="brand.name") shows the Hindi
 *      translation.
 *   3. localStorage.getItem('preferredLanguage') is persisted as 'hi'.
 *
 * This test is intentionally self-contained: it does not depend on a test
 * runner being installed in this environment. Run with `node dropdown.test.js`
 * (after `npm install --save-dev jsdom`) or via `npx jest dropdown.test.js`.
 */

const fs = require('fs');
const path = require('path');
const { JSDOM, VirtualConsole } = require('jsdom');

const ROOT = path.resolve(__dirname, '..');
const indexHtmlPath = path.join(ROOT, 'index.html');
const scriptJsPath = path.join(ROOT, 'script.js');

// The expected Hindi value for `brand.name` from translations.hi in script.js.
const HINDI_BRAND_NAME = '\u0924\u0928\u094D\u092E\u092F \u0926\u093E\u0938';

function assert(cond, message) {
  if (!cond) {
    console.error('FAIL:', message);
    process.exitCode = 1;
    throw new Error(message);
  }
  console.log('  ok -', message);
}

function run() {
  const html = fs.readFileSync(indexHtmlPath, 'utf8');
  const scriptJs = fs.readFileSync(scriptJsPath, 'utf8');

  // Quiet the noisy console output from jsdom / the script itself.
  const virtualConsole = new VirtualConsole();
  virtualConsole.on('jsdomError', () => {});

  const dom = new JSDOM(html, {
    runScripts: 'dangerously',
    pretendToBeVisual: true,
    virtualConsole,
    url: 'http://localhost/',
  });

  const { window } = dom;
  const { document } = window;

  // Make sure the brand element starts out with the English placeholder text,
  // so we can prove the click actually triggers a re-render.
  const brandEl = document.querySelector('[data-i18n="brand.name"]');
  assert(brandEl !== null, 'brand.name element exists in index.html');

  // Inject and execute script.js inside the jsdom window. We strip the
  // outer IIFE wrapper so we can run it directly with runScripts set up.
  // script.js is an IIFE, so it self-executes and registers DOMContentLoaded
  // listeners; jsdom fires DOMContentLoaded automatically once parsing
  // completes, so we append the script tag to trigger execution.
  const scriptEl = window.document.createElement('script');
  scriptEl.textContent = scriptJs;
  window.document.body.appendChild(scriptEl);

  // script.js hooks DOMContentLoaded; fire it manually to be safe in case
  // the listener registered after jsdom dispatched the event.
  window.document.dispatchEvent(
    new window.Event('DOMContentLoaded', { bubbles: true })
  );

  // Locate the Hindi option and dispatch a click event on it.
  const hindiOption = document.querySelector('.lang-option[data-lang="hi"]');
  assert(hindiOption !== null, 'Hindi .lang-option exists in the DOM');

  const clickEvent = new window.MouseEvent('click', {
    bubbles: true,
    cancelable: true,
  });
  hindiOption.dispatchEvent(clickEvent);

  // Assertion 1: document.documentElement.lang must become 'hi'.
  assert(
    document.documentElement.lang === 'hi',
    'document.documentElement.lang becomes "hi" after clicking Hindi'
  );

  // Assertion 2: a visible translated element must match the Hindi value.
  assert(
    brandEl.textContent === HINDI_BRAND_NAME,
    '[data-i18n="brand.name"] textContent matches the Hindi translation'
  );

  // Assertion 3: localStorage must persist the chosen language.
  const stored = window.localStorage.getItem('preferredLanguage');
  assert(
    stored === 'hi',
    'localStorage.getItem("preferredLanguage") === "hi"'
  );

  console.log('PASS: dropdown wiring test passed.');
}

try {
  run();
} catch (err) {
  // assert() already logs the FAIL line; exit non-zero so the runner notices.
  process.exit(1);
}
