// notice.js — single clean implementation that manages the AA battery notice and toggle
(() => {
  'use strict';
  const KEY = 'aaBatteryNoticeDismissed_v1';
  const NOTICE_ID = 'aa-battery-notice';
  const TOGGLE_ID = 'aa-battery-toggle';

  const $ = (id) => document.getElementById(id);

  function showNotice() {
    const el = $(NOTICE_ID);
    const tgl = $(TOGGLE_ID);
    if (el) el.style.display = 'block';
    if (tgl) tgl.style.display = 'none';
    try { localStorage.removeItem(KEY); } catch (e) { /* ignore */ }
  }

  function hideNotice() {
    const el = $(NOTICE_ID);
    const tgl = $(TOGGLE_ID);
    if (el) el.style.display = 'none';
    if (tgl) tgl.style.display = 'flex';
    try { localStorage.setItem(KEY, '1'); } catch (e) { /* ignore */ }
  }

  function init() {
    const el = $(NOTICE_ID);
    const tgl = $(TOGGLE_ID);
    if (!el) return;

    const closeBtn = el.querySelector('.aa-notice-close');
    if (closeBtn) closeBtn.addEventListener('click', hideNotice);

    if (tgl) tgl.addEventListener('click', (e) => { e.preventDefault(); showNotice(); });

    try {
      const dismissed = !!localStorage.getItem(KEY);
      if (dismissed) {
        if (tgl) tgl.style.display = 'flex';
        el.style.display = 'none';
      } else {
        el.style.display = 'block';
        if (tgl) tgl.style.display = 'none';
      }
    } catch (e) {
      el.style.display = 'block';
      if (tgl) tgl.style.display = 'none';
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else init();
})();
// notice.js — legacy (placeholder). Use notice-clean.js instead.
console.warn('Deprecated: notice.js is replaced by notice-clean.js');
// notice.js — a single IIFE that handles the AA battery notice and persistent dismiss state
(function () {
  'use strict';
  const STORAGE_KEY = 'aaBatteryNoticeDismissed_v1';
  const NOTICE_ID = 'aa-battery-notice';
  const TOGGLE_ID = 'aa-battery-toggle';

  function $(id) { return document.getElementById(id); }

  function showNotice() {
    const el = $(NOTICE_ID);
    const tgl = $(TOGGLE_ID);
    if (el) el.style.display = 'block';
    if (tgl) tgl.style.display = 'none';
    try { localStorage.removeItem(STORAGE_KEY); } catch (err) { /* ignore */ }
  }

  function hideNotice() {
    const el = $(NOTICE_ID);
    const tgl = $(TOGGLE_ID);
    if (el) el.style.display = 'none';
    if (tgl) tgl.style.display = 'flex';
    try { localStorage.setItem(STORAGE_KEY, '1'); } catch (err) { /* ignore */ }
  }

  function init() {
    const el = $(NOTICE_ID);
    const tgl = $(TOGGLE_ID);
    if (!el) return;

    const closeBtn = el.querySelector('.aa-notice-close');
    if (closeBtn) closeBtn.addEventListener('click', hideNotice);

    if (tgl) tgl.addEventListener('click', (ev) => { ev.preventDefault(); showNotice(); });

    try {
      const dismissed = !!localStorage.getItem(STORAGE_KEY);
      if (dismissed) {
        if (tgl) tgl.style.display = 'flex';
        el.style.display = 'none';
      } else {
        el.style.display = 'block';
        if (tgl) tgl.style.display = 'none';
      }
    } catch (err) {
      el.style.display = 'block';
      if (tgl) tgl.style.display = 'none';
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else init();
})();
// notice.js — Show a small AA battery notice and allow user to dismiss it.
(function () {
  'use strict';
  const KEY = 'aaBatteryNoticeDismissed_v1';
  const noticeId = 'aa-battery-notice';
  const toggleId = 'aa-battery-toggle';

  const getEl = (id) => document.getElementById(id);

  function showNotice() {
    const el = getEl(noticeId);
    const tgl = getEl(toggleId);
    if (el) el.style.display = 'block';
    if (tgl) tgl.style.display = 'none';
    try { localStorage.removeItem(KEY); } catch (err) { /* ignore */ }
  }

  function hideNotice() {
    const el = getEl(noticeId);
    const tgl = getEl(toggleId);
    if (el) el.style.display = 'none';
    if (tgl) tgl.style.display = 'flex';
    try { localStorage.setItem(KEY, '1'); } catch (err) { /* ignore */ }
  }

  function init() {
    const el = getEl(noticeId);
    const tgl = getEl(toggleId);
    if (!el) return;

    // wire up close button
    const closeBtn = el.querySelector('.aa-notice-close');
    if (closeBtn) closeBtn.addEventListener('click', hideNotice);

    // wire up the toggle button if present
    if (tgl) tgl.addEventListener('click', (ev) => { ev.preventDefault(); showNotice(); });

    // ensure appropriate state on load
    try {
      const dismissed = !!localStorage.getItem(KEY);
      if (dismissed) {
        if (tgl) tgl.style.display = 'flex';
        el.style.display = 'none';
      } else {
        el.style.display = 'block';
        if (tgl) tgl.style.display = 'none';
      }
    } catch (err) {
      el.style.display = 'block';
      if (tgl) tgl.style.display = 'none';
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else init();
})();
// notice.js — Show a small AA battery notice and allow user to dismiss it.
(() => {
  const KEY = 'aaBatteryNoticeDismissed_v1';
  const noticeId = 'aa-battery-notice';
  const toggleId = 'aa-battery-toggle';

  const getEl = (id) => document.getElementById(id);

  function showNotice() {
    const el = getEl(noticeId);
    const tgl = getEl(toggleId);
    if (el) el.style.display = 'block';
    if (tgl) tgl.style.display = 'none';
    try { localStorage.removeItem(KEY); } catch (err) { /* ignore */ }
  }

  function hideNotice() {
    const el = getEl(noticeId);
    const tgl = getEl(toggleId);
    if (el) el.style.display = 'none';
    if (tgl) tgl.style.display = 'flex';
    try { localStorage.setItem(KEY, '1'); } catch (err) { /* ignore */ }
  }

  function init() {
    const el = getEl(noticeId);
    const tgl = getEl(toggleId);
    if (!el) return;

    // wire up close button
    const closeBtn = el.querySelector('.aa-notice-close');
    if (closeBtn) closeBtn.addEventListener('click', hideNotice);

    // wire up the toggle button if present
    if (tgl) tgl.addEventListener('click', (ev) => { ev.preventDefault(); showNotice(); });

    // ensure appropriate state on load
    try {
      const dismissed = !!localStorage.getItem(KEY);
      if (dismissed) {
        if (tgl) tgl.style.display = 'flex';
        el.style.display = 'none';
      } else {
        el.style.display = 'block';
        if (tgl) tgl.style.display = 'none';
      }
    } catch (err) {
      el.style.display = 'block';
      if (tgl) tgl.style.display = 'none';
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else init();
})();
// notice.js — Show a small AA battery notice and allow user to dismiss it.
(() => {
  const KEY = 'aaBatteryNoticeDismissed_v1';
  const noticeId = 'aa-battery-notice';
  const toggleId = 'aa-battery-toggle';

  const getEl = (id) => document.getElementById(id);

  function showNotice() {
    const el = getEl(noticeId);
    const tgl = getEl(toggleId);
    if (el) el.style.display = 'block';
    if (tgl) tgl.style.display = 'none';
    try { localStorage.removeItem(KEY); } catch (err) { /* ignore */ }
  }

  function hideNotice() {
    const el = getEl(noticeId);
    const tgl = getEl(toggleId);
    if (el) el.style.display = 'none';
    if (tgl) tgl.style.display = 'flex';
    try { localStorage.setItem(KEY, '1'); } catch (err) { /* ignore */ }
  }

  function init() {
    const el = getEl(noticeId);
    const tgl = getEl(toggleId);
    if (!el) return;

    // wire up close button
    const closeBtn = el.querySelector('.aa-notice-close');
    if (closeBtn) closeBtn.addEventListener('click', hideNotice);

    // wire up the toggle button if present
    if (tgl) tgl.addEventListener('click', (ev) => { ev.preventDefault(); showNotice(); });

    // ensure appropriate state on load
    try {
      const dismissed = !!localStorage.getItem(KEY);
      if (dismissed) {
        if (tgl) tgl.style.display = 'flex';
        el.style.display = 'none';
      } else {
        el.style.display = 'block';
        if (tgl) tgl.style.display = 'none';
      }
    } catch (err) {
      el.style.display = 'block';
      if (tgl) tgl.style.display = 'none';
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else init();
})();
// notice.js — Show a small AA battery notice and allow user to dismiss it.
(() => {
  const KEY = 'aaBatteryNoticeDismissed_v1';

  function init() {
    try {
      if (localStorage.getItem(KEY)) return; // already dismissed
    } catch (err) { /* ignore */ }
    const el = document.getElementById('aa-battery-notice');
    if (!el) return;
    el.style.display = 'block';

    const closeBtn = el.querySelector('.aa-notice-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        el.style.display = 'none';
        try { localStorage.setItem(KEY, '1'); } catch (err) { /* ignore */ }
      });
    }
  }

  // Run after DOM content loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else init();
  })();
  (() => {
    const KEY = 'aaBatteryNoticeDismissed_v1';

    const noticeId = 'aa-battery-notice';
    const toggleId = 'aa-battery-toggle';

    function getEl(id) { return document.getElementById(id); }

    function showNotice() {
      const el = getEl(noticeId);
      const tgl = getEl(toggleId);
      if (el) el.style.display = 'block';
      if (tgl) tgl.style.display = 'none';
      try { localStorage.removeItem(KEY); } catch (err) { /* ignore */ }
    }

    function hideNotice() {
      const el = getEl(noticeId);
      const tgl = getEl(toggleId);
      if (el) el.style.display = 'none';
      if (tgl) tgl.style.display = 'flex';
      try { localStorage.setItem(KEY, '1'); } catch (err) { /* ignore */ }
    }

    function init() {
      const el = getEl(noticeId);
      const tgl = getEl(toggleId);
      if (!el) return;

      // Toggle exists — wire up
      if (tgl) {
        tgl.addEventListener('click', (e) => {
          e.preventDefault();
          showNotice();
        });
      }

      const closeBtn = el.querySelector('.aa-notice-close');
      if (closeBtn) {
        closeBtn.addEventListener('click', () => hideNotice());
      }

      // Show or hide on load based on localStorage
      try {
        const dismissed = !!localStorage.getItem(KEY);
        if (dismissed) {
          if (tgl) tgl.style.display = 'flex';
          el.style.display = 'none';
        } else {
          el.style.display = 'block';
          if (tgl) tgl.style.display = 'none';
        }
      } catch (err) {
        el.style.display = 'block';
        if (tgl) tgl.style.display = 'none';
      }
    }

    // Run after DOM content loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
    } else init();
  })();
})();
