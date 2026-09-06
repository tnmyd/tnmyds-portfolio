#!/usr/bin/env python3
"""Verify the language dropdown markup and wiring."""

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent


def fail(message):
    print(f"FAIL: {message}")
    sys.exit(1)


def main():
    html = (ROOT / "index.html").read_text(encoding="utf-8")
    css = (ROOT / "styles.css").read_text(encoding="utf-8")
    js = (ROOT / "script.js").read_text(encoding="utf-8")

    # HTML checks
    if 'lang-dropdown' not in html:
        fail("Missing .lang-dropdown container in index.html")
    if 'lang-dropdown-trigger' not in html:
        fail("Missing .lang-dropdown-trigger in index.html")
    if 'role="listbox"' not in html:
        fail("Missing role='listbox' on language options list")
    if html.count('role="option"') != 2:
        fail("Expected exactly 2 role='option' language items")
    if html.count('tabindex="-1"') < 2:
        fail("Expected tabindex='-1' on both language option elements")
    if 'aria-expanded=' not in html:
        fail("Missing aria-expanded on dropdown trigger")
    if 'hidden' not in html:
        fail("Missing hidden attribute on language options list")

    # CSS checks
    if '.lang-dropdown' not in css:
        fail("Missing .lang-dropdown styles")
    if '.lang-options' not in css:
        fail("Missing .lang-options styles")
    if '.lang-option' not in css:
        fail("Missing .lang-option styles")
    if '@media (min-width: 720px)' not in css:
        fail("Missing desktop breakpoint for navbar layout")

    # JS checks
    if 'langDropdown' not in js:
        fail("Missing langDropdown reference in script.js")
    if 'langTrigger' not in js:
        fail("Missing langTrigger reference in script.js")
    if 'langOptionsList' not in js:
        fail("Missing langOptionsList reference in script.js")
    if 'setDropdownOpen' not in js and 'setDropdown' not in js:
        fail("Missing dropdown open/close function")
    if 'focusout' not in js:
        fail("Missing focusout handler for dropdown")
    if 'localStorage' not in js:
        fail("Missing localStorage persistence")

    # Full dropdown wiring chain
    if 'setLanguage(nextLang)' not in js:
        fail("Missing setLanguage(nextLang) call inside .lang-option click handler")
    if 'safeStorage.set(STORAGE_KEY, lang)' not in js:
        fail("Missing safeStorage.set(STORAGE_KEY, lang) call inside setLanguage")
    if 'document.documentElement.lang = lang' not in js:
        fail("Missing document.documentElement.lang = lang assignment inside applyTranslations")

    # Ensure old toggle code is removed
    if '.lang-toggle' in html or '.lang-toggle' in css or '.lang-toggle' in js:
        fail("Stale .lang-toggle references remain")

    print("PASS: dropdown markup, styles, wiring, and accessibility checks are satisfied.")


if __name__ == "__main__":
    main()
