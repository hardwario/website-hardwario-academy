(function () {
  const root = document.documentElement;
  const toggles = document.querySelectorAll(".theme-toggle");
  if (!toggles.length) return;

  function paint(theme) {
    const dark = theme === "dark";
    toggles.forEach((t) => {
      const label = t.querySelector(".theme-toggle__label");
      const en = document.documentElement.lang === "en";
      if (label) label.textContent = dark
        ? (en ? "Light mode" : "Světlý režim")
        : (en ? "Dark mode" : "Tmavý režim");
      t.setAttribute("aria-pressed", String(dark));
    });
  }
  paint(root.getAttribute("data-theme") || "light");

  toggles.forEach((t) =>
    t.addEventListener("click", () => {
      const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
      paint(next);
    })
  );
})();

(function () {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );
})();

(function () {
  const items = document.querySelectorAll(".faq-item");
  items.forEach((item) => {
    item.addEventListener("toggle", () => {
      if (item.open) {
        items.forEach((other) => { if (other !== item) other.open = false; });
      }
    });
  });
})();

(function () {
  document.querySelectorAll("[data-dashboard]").forEach((dash) => {
    const pills = Array.from(dash.querySelectorAll(".pill"));
    const blocks = Array.from(dash.querySelectorAll("[data-metric-block]"));
    const values = Array.from(dash.querySelectorAll("strong[data-metric]"));
    if (!pills.length) return;

    let current = Math.max(0, pills.findIndex((p) => p.classList.contains("pill--active")));

    function apply(index) {
      const i = ((index % pills.length) + pills.length) % pills.length;
      current = i;
      pills.forEach((p, idx) => {
        const active = idx === i;
        p.classList.toggle("pill--active", active);
        p.setAttribute("aria-pressed", String(active));
      });
      let vals;
      try { vals = JSON.parse(pills[i].dataset.values); } catch (e) { return; }
      values.forEach((v) => {
        const k = Number(v.dataset.metric);
        if (vals[k] != null) v.textContent = vals[k];
      });
      blocks.forEach((b) => b.classList.remove("metric--flash"));
      void dash.offsetWidth;
      blocks.forEach((b) => b.classList.add("metric--flash"));
    }

    pills.forEach((p, idx) => p.addEventListener("click", () => apply(idx)));
    blocks.forEach((b) => b.addEventListener("click", () => apply(current + 1)));
  });
})();

(function () {
  let uid = 0;
  document.querySelectorAll(".contact-form select").forEach((native) => {
    const id = "cselect-" + uid++;
    const wrap = document.createElement("div");
    wrap.className = "cselect";

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "cselect__btn";
    btn.setAttribute("aria-haspopup", "listbox");
    btn.setAttribute("aria-expanded", "false");
    const valEl = document.createElement("span");
    valEl.className = "cselect__value";
    btn.appendChild(valEl);
    btn.insertAdjacentHTML("beforeend",
      '<svg class="cselect__arrow" viewBox="0 0 12 8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m1 1.5 5 5 5-5"/></svg>');

    const menu = document.createElement("ul");
    menu.className = "cselect__menu";
    menu.setAttribute("role", "listbox");

    let placeholder = "Vyberte…";
    const optionEls = [];
    Array.from(native.options).forEach((o, i) => {
      if (o.value === "") { placeholder = o.textContent; return; }
      const li = document.createElement("li");
      li.className = "cselect__opt";
      li.id = id + "-opt-" + i;
      li.setAttribute("role", "option");
      li.dataset.value = o.value;
      li.textContent = o.textContent;
      if (o.selected) li.setAttribute("aria-selected", "true");
      menu.appendChild(li);
      optionEls.push(li);
    });

    function syncLabel() {
      const sel = native.options[native.selectedIndex];
      if (!sel || sel.value === "") { valEl.textContent = placeholder; wrap.classList.add("is-placeholder"); }
      else { valEl.textContent = sel.textContent; wrap.classList.remove("is-placeholder"); }
    }
    syncLabel();

    wrap.append(btn, menu);
    native.after(wrap);
    native.hidden = true;
    native.setAttribute("tabindex", "-1");

    let active = -1;
    function setActive(i) {
      active = Math.max(0, Math.min(optionEls.length - 1, i));
      optionEls.forEach((li, idx) => li.classList.toggle("is-active", idx === active));
      const el = optionEls[active];
      if (el) { el.scrollIntoView({ block: "nearest" }); menu.setAttribute("aria-activedescendant", el.id); }
    }
    function open() {
      wrap.classList.add("is-open");
      btn.setAttribute("aria-expanded", "true");
      const cur = optionEls.findIndex((li) => li.getAttribute("aria-selected") === "true");
      setActive(cur >= 0 ? cur : 0);
    }
    function close() { wrap.classList.remove("is-open"); btn.setAttribute("aria-expanded", "false"); }
    function choose(li) {
      native.value = li.dataset.value;
      optionEls.forEach((x) => x.removeAttribute("aria-selected"));
      li.setAttribute("aria-selected", "true");
      syncLabel();
      native.dispatchEvent(new Event("change", { bubbles: true }));
      close();
      btn.focus();
    }

    btn.addEventListener("click", () => (wrap.classList.contains("is-open") ? close() : open()));
    menu.addEventListener("click", (e) => {
      const li = e.target.closest(".cselect__opt");
      if (li) choose(li);
    });
    btn.addEventListener("keydown", (e) => {
      const isOpen = wrap.classList.contains("is-open");
      if (!isOpen && (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "Enter" || e.key === " ")) {
        e.preventDefault(); open(); return;
      }
      if (!isOpen) return;
      if (e.key === "ArrowDown") { e.preventDefault(); setActive(active + 1); }
      else if (e.key === "ArrowUp") { e.preventDefault(); setActive(active - 1); }
      else if (e.key === "Home") { e.preventDefault(); setActive(0); }
      else if (e.key === "End") { e.preventDefault(); setActive(optionEls.length - 1); }
      else if (e.key === "Enter" || e.key === " ") { e.preventDefault(); if (optionEls[active]) choose(optionEls[active]); }
      else if (e.key === "Escape") { close(); }
    });
    document.addEventListener("click", (e) => { if (!wrap.contains(e.target)) close(); });
  });
})();

(function () {
  const els = document.querySelectorAll("[data-aos], [data-aos-stagger]");
  if (!els.length) return;

  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  els.forEach((el) => {
    const delay = el.getAttribute("data-aos-delay");
    if (delay) el.style.setProperty("--aos-delay", delay + "ms");
  });

  const io = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
  );

  els.forEach((el) => io.observe(el));
})();

(function () {
  const list = document.querySelector(".steps__list");
  if (!list) return;
  const steps = Array.from(list.querySelectorAll(".step"));
  if (!steps.length) return;

  let active = -1;
  let ticking = false;

  function update() {
    ticking = false;
    const focusY = window.innerHeight * 0.5;
    let best = 0;
    let bestDist = Infinity;
    steps.forEach((step, i) => {
      const rect = step.getBoundingClientRect();
      const dist = Math.abs(rect.top + rect.height / 2 - focusY);
      if (dist < bestDist) { bestDist = dist; best = i; }
    });
    if (best === active) return;
    active = best;
    steps.forEach((step, i) => step.classList.toggle("step--active", i === best));
  }

  function onScroll() {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  update();
})();

(function () {
  document.querySelectorAll("[data-slider]").forEach((slider) => {
    const slides = Array.from(slider.querySelectorAll("[data-slide]"));
    if (slides.length <= 1) return;
    const items = Array.from(slider.querySelectorAll("[data-slide-to]"));
    const prev = slider.querySelector("[data-slider-prev]");
    const next = slider.querySelector("[data-slider-next]");
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let i = 0;
    let timer = null;

    function render() {
      slides.forEach((s, idx) => s.classList.toggle("is-active", idx === i));
      items.forEach((it, idx) => it.classList.toggle("is-active", idx === i));
    }
    function go(n) { i = (n + slides.length) % slides.length; render(); }
    function start() { stop(); if (!reduce) timer = setInterval(() => go(i + 1), 5000); }
    function stop() { if (timer) { clearInterval(timer); timer = null; } }

    if (prev) prev.addEventListener("click", () => { go(i - 1); start(); });
    if (next) next.addEventListener("click", () => { go(i + 1); start(); });
    items.forEach((it, idx) => it.addEventListener("click", () => { go(idx); start(); }));

    [slider.querySelector(".about__media"), slider.querySelector(".set-list")].forEach((el) => {
      if (!el) return;
      el.addEventListener("mouseenter", stop);
      el.addEventListener("mouseleave", start);
    });

    let x0 = null;
    const vp = slider.querySelector(".tower-slider__viewport") || slider;
    vp.addEventListener("touchstart", (e) => { x0 = e.touches[0].clientX; stop(); }, { passive: true });
    vp.addEventListener("touchend", (e) => {
      if (x0 !== null) {
        const dx = e.changedTouches[0].clientX - x0;
        if (Math.abs(dx) > 40) go(i + (dx < 0 ? 1 : -1));
        x0 = null;
      }
      start();
    }, { passive: true });

    render();
    start();
  });
})();

(function () {
  document.querySelectorAll("[data-marquee]").forEach((m) => {
    const track = m.querySelector(".marquee__track");
    if (!track) return;
    const vp = m.querySelector(".marquee__viewport") || m;
    const prev = m.querySelector("[data-marquee-prev]");
    const next = m.querySelector("[data-marquee-next]");
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = matchMedia("(max-width: 720px)");
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    const SPEED = 0.6;

    let paused = false;
    let raf = null;
    let offset = 0;
    function period() { return (track.scrollWidth + gap) / 2; }
    function render() { track.style.transform = "translateX(" + (-offset) + "px)"; }
    function advance(d) {
      const p = period();
      offset = (((offset + d) % p) + p) % p;
      render();
    }
    function step() {
      if (!paused) advance(SPEED);
      raf = requestAnimationFrame(step);
    }
    const jump = () => Math.min(vp.clientWidth * 0.85, 480);
    // One card + gap — the scroll-snap distance used on mobile.
    function cardStep() {
      const card = track.querySelector(".tcard");
      return card ? card.getBoundingClientRect().width + gap : vp.clientWidth;
    }
    // Mobile/reduced-motion: scroll the viewport one card so snap keeps it
    // centred. Desktop: nudge the continuous marquee transform.
    function go(dir) {
      if (mobile.matches || reduce) {
        vp.scrollBy({ left: dir * cardStep(), behavior: reduce ? "auto" : "smooth" });
      } else {
        advance(dir * jump());
      }
    }
    if (prev) prev.addEventListener("click", () => go(-1));
    if (next) next.addEventListener("click", () => go(1));
    m.addEventListener("mouseenter", () => { paused = true; });
    m.addEventListener("mouseleave", () => { paused = false; });

    function setMode() {
      if (raf) { cancelAnimationFrame(raf); raf = null; }
      offset = 0;
      if (mobile.matches || reduce) {
        track.style.transform = ""; // let CSS scroll-snap take over
      } else {
        render();
        raf = requestAnimationFrame(step);
      }
    }
    setMode();
    mobile.addEventListener("change", setMode);
  });
})();

(function () {
  const grid = document.querySelector(".courses__grid");
  const btn = document.querySelector("[data-courses-toggle]");
  if (!grid || !btn) return;
  btn.addEventListener("click", () => {
    const open = grid.classList.toggle("is-expanded");
    btn.setAttribute("aria-expanded", String(open));
    btn.textContent = open ? "Zobrazit méně" : "Zobrazit více";
  });
})();

(function () {
  const links = Array.from(document.querySelectorAll('.main-nav > a[href^="#"]'));
  const map = links
    .map((a) => ({ a, sec: document.getElementById(a.getAttribute("href").slice(1)) }))
    .filter((x) => x.sec);
  if (!map.length) return;

  let ticking = false;
  function update() {
    ticking = false;
    const line = window.innerHeight * 0.3;
    let active = null;
    let best = -Infinity;
    map.forEach((x) => {
      const top = x.sec.getBoundingClientRect().top;
      if (top <= line && top > best) { best = top; active = x.a; }
    });
    links.forEach((a) => a.classList.toggle("is-active", a === active));
  }
  function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(update); } }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  update();
})();

(function () {
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.querySelectorAll(".logo, .footer-logo").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    });
  });
})();

(function () {
  const current = document.documentElement.lang || "cs";
  function setCookie(v) {
    document.cookie = "lang=" + v + ";path=/;max-age=31536000;samesite=lax";
  }
  function getCookie() {
    const m = document.cookie.match(/(?:^|;\s*)lang=(cs|en)\b/);
    return m ? m[1] : null;
  }
  document.querySelectorAll("[data-lang-switch]").forEach((el) => {
    el.addEventListener("click", () => setCookie(el.dataset.langSwitch));
  });
  const pref = getCookie();
  if (pref && pref !== current) {
    location.replace(pref === "en" ? "/en/" : "/");
  }
})();

/* Projekty — horizontální swiper se šipkami a scroll-snapem */
(function () {
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.querySelectorAll("[data-pslider]").forEach((s) => {
    const track = s.querySelector("[data-pslider-track]");
    if (!track) return;
    const prev = s.querySelector("[data-pslider-prev]");
    const next = s.querySelector("[data-pslider-next]");

    function cardStep() {
      const card = track.querySelector(".project-card");
      const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
      return card ? card.getBoundingClientRect().width + gap : track.clientWidth * 0.8;
    }
    function go(dir) {
      track.scrollBy({ left: dir * cardStep(), behavior: reduce ? "auto" : "smooth" });
    }
    if (prev) prev.addEventListener("click", () => go(-1));
    if (next) next.addEventListener("click", () => go(1));

    function update() {
      const max = track.scrollWidth - track.clientWidth;
      if (prev) prev.disabled = track.scrollLeft <= 2;
      if (next) next.disabled = track.scrollLeft >= max - 2;
    }
    let ticking = false;
    track.addEventListener("scroll", () => {
      if (!ticking) { ticking = true; requestAnimationFrame(() => { ticking = false; update(); }); }
    }, { passive: true });
    window.addEventListener("resize", update);
    update();
  });
})();
