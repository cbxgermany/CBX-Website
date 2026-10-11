/* CBX Germany · shared script for every page. No dependencies. */
(function () {
  'use strict';

  var root = document.documentElement;
  root.classList.add('js');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasIO = 'IntersectionObserver' in window;
  var tr = function (s) { return window.CBX_I18N ? window.CBX_I18N.t(s) : s; };

  /* ---------- mobile menu ---------- */
  var burger = document.querySelector('.burger');
  var menu = document.getElementById('menu');
  if (burger && menu) {
    var setMenu = function (open) {
      burger.setAttribute('aria-expanded', String(open));
      burger.setAttribute('aria-label', tr(open ? 'Close menu' : 'Open menu'));
      menu.classList.toggle('is-open', open);
      document.body.classList.toggle('menu-open', open);
      if (open) menu.removeAttribute('inert'); else menu.setAttribute('inert', '');
    };
    setMenu(false);
    burger.addEventListener('click', function () {
      setMenu(burger.getAttribute('aria-expanded') !== 'true');
    });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { setMenu(false); });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('is-open')) { setMenu(false); burger.focus(); }
    });
    window.matchMedia('(min-width: 861px)').addEventListener('change', function (e) {
      if (e.matches) setMenu(false);
    });
  }

  /* ---------- headlines: words rise in one after another ---------- */
  /* Latin is split into words; Chinese has no spaces, so each character becomes its own piece
     (two characters share one animation step) and the line can still wrap anywhere */
  var CJK = /[　-ヿ㐀-鿿＀-￯]/;
  var TOKENS = /[　-ヿ㐀-鿿＀-￯]|[^\s　-ヿ㐀-鿿＀-￯]+|\s+/g;
  function splitWords(el) {
    el.setAttribute('aria-label', el.textContent.replace(/\s+/g, ' ').trim());
    var i = 0, cjk = 0;
    (function walk(node) {
      Array.prototype.slice.call(node.childNodes).forEach(function (child) {
        if (child.nodeType === 3) {
          var frag = document.createDocumentFragment();
          (child.textContent.match(TOKENS) || []).forEach(function (part) {
            if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(' ')); return; }
            var w = document.createElement('span');
            w.className = 'w';
            w.setAttribute('aria-hidden', 'true');
            if (CJK.test(part)) { w.style.setProperty('--i', i + Math.floor(cjk++ / 2)); }
            else { if (cjk) { i += Math.ceil(cjk / 2); cjk = 0; } w.style.setProperty('--i', i++); }
            w.textContent = part;
            frag.appendChild(w);
          });
          child.parentNode.replaceChild(frag, child);
        } else if (child.nodeType === 1 && child.tagName !== 'BR') {
          walk(child);
        }
      });
    })(el);
  }

  var wordTargets = document.querySelectorAll('.rw');
  wordTargets.forEach(splitWords);

  /* language switch replaces the text, so split again and keep headlines that were already shown filled */
  document.addEventListener('cbx:lang', function () {
    wordTargets.forEach(function (el) {
      if (!el.querySelector('.w')) splitWords(el);
    });
  });

  var reveals = document.querySelectorAll('.reveal');
  if (reduceMotion || !hasIO) {
    wordTargets.forEach(function (el) { el.classList.add('is-on'); });
    reveals.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add(entry.target.classList.contains('rw') ? 'is-on' : 'is-in');
        io.unobserve(entry.target);
      });
    }, { threshold: 0.3, rootMargin: '0px 0px -6% 0px' });
    wordTargets.forEach(function (el) { io.observe(el); });
    reveals.forEach(function (el) { io.observe(el); });
  }

  /* ---------- film: poster + play button, native controls once started ---------- */
  var film = document.querySelector('[data-film]');
  if (film) {
    var video = film.querySelector('video');
    var playBtn = film.querySelector('.play');
    video.addEventListener('ended', function () {
      film.classList.remove('is-started');
      video.controls = false;
      video.load();
    });
    var startFilm = function () {
      film.classList.add('is-started');
      video.controls = true;
      video.muted = false;
      var p = video.play();
      if (p && p.catch) p.catch(function () { /* blocked: native controls stay visible */ });
    };
    playBtn.addEventListener('click', startFilm);
    document.querySelectorAll('[data-play-film]').forEach(function (b) {
      b.addEventListener('click', function (e) {
        e.preventDefault();
        film.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' });
        startFilm();
      });
    });
  }

  /* ---------- creator videos: all videos of one creator start together when in view,
     each one falls back to its photo when it ends, hover replays the set ---------- */
  document.querySelectorAll('[data-video-group]').forEach(function (group) {
    var tiles = Array.prototype.slice.call(group.querySelectorAll('.tile--video')).filter(function (t) {
      return t.querySelector('video[src]');
    });
    if (!tiles.length) return;
    var playAll = function () {
      tiles.forEach(function (t) {
        var v = t.querySelector('video');
        try { v.currentTime = 0; } catch (err) { /* metadata not loaded yet */ }
        t.classList.add('is-playing');
        var p = v.play();
        if (p && p.catch) p.catch(function () { t.classList.remove('is-playing'); });
      });
    };
    var stopAll = function () {
      tiles.forEach(function (t) { t.querySelector('video').pause(); t.classList.remove('is-playing'); });
    };
    tiles.forEach(function (t) {
      t.querySelector('video').addEventListener('ended', function () { t.classList.remove('is-playing'); });
    });
    group.addEventListener('mouseenter', function () {
      var anyPlaying = tiles.some(function (t) { return t.classList.contains('is-playing'); });
      if (!anyPlaying) playAll();
    });
    if (reduceMotion || !hasIO) return;
    new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) { if (entry.isIntersecting) playAll(); else stopAll(); });
    }, { threshold: 0.45 }).observe(group);
  });

  /* ---------- read more on long bios ---------- */
  document.querySelectorAll('[data-clamp]').forEach(function (bio) {
    var btn = bio.parentNode.querySelector('.readmore');
    if (!btn) return;
    var measure = function () {
      if (btn.getAttribute('aria-expanded') === 'true') return;
      bio.classList.add('is-clamped');
      var overflowing = bio.scrollHeight > bio.clientHeight + 2;
      btn.hidden = !overflowing;
      if (!overflowing) bio.classList.remove('is-clamped');
    };
    btn.addEventListener('click', function () {
      var open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!open));
      bio.classList.toggle('is-clamped', open);
      btn.textContent = open ? 'Read more' : 'Read less';
    });
    measure();
    var timer;
    window.addEventListener('resize', function () { clearTimeout(timer); timer = setTimeout(measure, 150); });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);
  });

  /* ---------- inquiry form, sent through /api/inquiry (Vercel function) ---------- */
  var form = document.getElementById('inquiry-form');
  if (form) {
    var note = form.querySelector('.form__note');
    var sendBtn = form.querySelector('button[type="submit"]');
    var fail = 'Something went wrong. Please try again or email info@cbxgermany.de.';
    var say = function (text, state) {
      note.textContent = tr(text);
      note.classList.toggle('is-error', state === 'error');
      note.classList.toggle('is-ok', state === 'ok');
    };
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var email = form.elements.email;
      var message = form.elements.message;
      if (!email.value.trim() || !email.checkValidity()) { say('Please enter a valid email address.', 'error'); email.focus(); return; }
      if (!message.value.trim()) { say('Please add a short message.', 'error'); message.focus(); return; }
      sendBtn.disabled = true;
      say('Sending…');
      fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ model: form.elements.model.value, email: email.value.trim(), message: message.value })
      })
        .then(function (r) {
          return r.json().catch(function () { return {}; }).then(function (data) { return { ok: r.ok, data: data }; });
        })
        .then(function (res) {
          if (res.ok) { say('Sent. We will get back to you soon.', 'ok'); form.reset(); }
          else { say((res.data && res.data.error) || fail, 'error'); }
        })
        .catch(function () { say(fail, 'error'); })
        .then(function () { sendBtn.disabled = false; });
    });
  }

  /* ---------- gallery videos: only one plays at a time ---------- */
  var galleryVideos = document.querySelectorAll('.vtile video');
  galleryVideos.forEach(function (v) {
    v.addEventListener('play', function () {
      galleryVideos.forEach(function (o) { if (o !== v && !o.paused) o.pause(); });
    });
  });

  /* ---------- photo lightbox ---------- */
  var lb = document.getElementById('lightbox');
  var lbItems = Array.prototype.slice.call(document.querySelectorAll('[data-lightbox]'));
  if (lb && lbItems.length && typeof lb.showModal === 'function') {
    var lbImg = lb.querySelector('.lightbox__img');
    var lbCount = lb.querySelector('.lightbox__count');
    var lbIndex = 0;
    var lbShow = function (i) {
      lbIndex = (i + lbItems.length) % lbItems.length;
      var item = lbItems[lbIndex];
      lbImg.src = item.getAttribute('data-src');
      lbImg.alt = item.querySelector('img').alt;
      lbCount.textContent = String(lbIndex + 1).padStart(2, '0') + ' / ' + String(lbItems.length).padStart(2, '0');
    };
    lbItems.forEach(function (item, i) {
      item.addEventListener('click', function () { lbShow(i); lb.showModal(); });
    });
    lb.querySelector('.lightbox__prev').addEventListener('click', function () { lbShow(lbIndex - 1); });
    lb.querySelector('.lightbox__next').addEventListener('click', function () { lbShow(lbIndex + 1); });
    lb.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') lbShow(lbIndex - 1);
      if (e.key === 'ArrowRight') lbShow(lbIndex + 1);
    });
    lb.addEventListener('click', function (e) { if (e.target === lb) lb.close(); });
    lb.addEventListener('close', function () { lbItems[lbIndex].focus(); });
    var touchX = null;
    lb.addEventListener('touchstart', function (e) { touchX = e.touches[0].clientX; }, { passive: true });
    lb.addEventListener('touchend', function (e) {
      if (touchX === null) return;
      var dx = e.changedTouches[0].clientX - touchX;
      if (Math.abs(dx) > 50) lbShow(lbIndex + (dx < 0 ? 1 : -1));
      touchX = null;
    });
  }

  /* ---------- dialogs (WeChat QR) ---------- */
  document.querySelectorAll('[data-open-dialog]').forEach(function (btn) {
    var dlg = document.getElementById(btn.getAttribute('data-open-dialog'));
    if (!dlg || typeof dlg.showModal !== 'function') return;
    btn.addEventListener('click', function () { dlg.showModal(); });
  });
  document.querySelectorAll('dialog.modal').forEach(function (dlg) {
    dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });
    dlg.querySelectorAll('[data-close-dialog]').forEach(function (b) {
      b.addEventListener('click', function () { dlg.close(); });
    });
  });
})();
