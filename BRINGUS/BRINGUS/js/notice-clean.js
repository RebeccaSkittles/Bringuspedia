// notice-clean.js — cleaned single IIFE handling AA battery notice logic
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
