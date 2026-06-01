// HARDWARIO Academy — interaktivita stránky

/* ── Téma (dark / light) ── */
(function () {
  const root = document.documentElement;
  const toggles = document.querySelectorAll(".theme-toggle");
  if (!toggles.length) return;

  function paint(theme) {
    const dark = theme === "dark";
    toggles.forEach((t) => {
      const moon = t.querySelector(".theme-toggle__moon");
      const sun = t.querySelector(".theme-toggle__sun");
      const label = t.querySelector(".theme-toggle__label");
      if (moon) moon.hidden = dark;
      if (sun) sun.hidden = !dark;
      if (label) label.textContent = dark ? "Světlý režim" : "Tmavý režim";
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

/* ── Mobilní navigace ──────────────────────────────────────────────────── */
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

/* ── FAQ akordeon ── */
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

/* ── Dashboard featured kurzu ── */
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

/* ── Custom select ── */
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

/* ── Animace při scrollování ── */
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

/* ── Cesta pro učitele: aktivní krok = ten, jehož střed je nejblíž středu
   obrazovky (přepíná červenou čáru, stejně jako initStickyPlan na webu) ── */
(function () {
  const list = document.querySelector(".steps__list");
  if (!list) return;
  const steps = Array.from(list.querySelectorAll(".step"));
  if (!steps.length) return;

  let active = -1;
  let ticking = false;

  function update() {
    ticking = false;
    const focusY = window.innerHeight * 0.5; // střed obrazovky
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
