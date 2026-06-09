# HARDWARIO Academy — website

Landing page for the **TOWER** educational IoT platform, built with the
[Zola](https://www.getzola.org) static site generator.

## Run

```bash
zola serve     # dev server with live reload (http://127.0.0.1:1111)
zola build     # generate the static site into ./public
```

## Languages

The site is multilingual. The default language is **Czech**; the others are
served under a path prefix:

| Language  | Code | URL      |
|-----------|------|----------|
| Czech     | `cs` | `/`      |
| English   | `en` | `/en/`   |
| German    | `de` | `/de/`   |
| Slovak    | `sk` | `/sk/`   |
| Polish    | `pl` | `/pl/`   |

- **Page content** for each language lives in `content/_index.<lang>.md`
  (`content/_index.md` is the Czech default). All section copy is stored as
  data in the `[extra]` table of these files.
- **UI strings** (navigation, footer, form labels, …) are translations defined
  in `config.toml` under `[translations]` (Czech) and
  `[languages.<lang>.translations]`, read in templates via
  `trans(key="…", lang=lang)`.

To **add a language**: declare it under `[languages.<lang>]` in `config.toml`,
add a `[languages.<lang>.translations]` block, create
`content/_index.<lang>.md`, and add the language to the switchers in
`templates/partials/lang-switch.html` and `templates/partials/lang-pills.html`.

## Structure

```
config.toml                 # site config, language declarations, UI translations,
                            #   contact details ([extra])
content/
  _index.md                 # Czech content (default) — all section data in [extra]
  _index.{en,de,sk,pl}.md   # translated content
templates/
  base.html                 # <head> (SEO, Open Graph, hreflang) + header/footer includes
  index.html                # landing-page section order
  macros.html               # logo + inline SVG icons
  partials/
    header.html             # top bar + mobile menu
    footer.html             # footer (copyright year is auto from now())
    lang-switch.html        # desktop language dropdown (opens on hover)
    lang-pills.html         # mobile language pills
    logo-*.html             # logo variants
  sections/                 # one template per landing-page section
static/
  css/
    base/                   # tokens, reset, typography, layout, animations, responsive
    components/             # one stylesheet per component/section
  js/main.js                # theme toggle, mobile menu, sliders, FAQ, language cookie
  img/                      # product imagery
```

## Editing content

Texts, courses, packages, FAQ, etc. are **not** edited in HTML — they are data
in the `[extra]` table of `content/_index.<lang>.md`. Edit the values and Zola
regenerates the site. Keep the keys identical across all language files.

## Notes

- **Contact form** has no backend (`action="#"`); wire it to your endpoint. A
  consent note links to the HARDWARIO privacy policy.
- **SEO** — `base.html` emits title/description, canonical, Open Graph, Twitter
  card and `hreflang` alternates per language. The Open Graph image is
  `static/img/hero-product.png`; replace it with a dedicated 1200×630 share
  image when available.
- The copyright **year** in the footer is generated at build time, so it never
  needs manual updates.
