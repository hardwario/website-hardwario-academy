# HARDWARIO Academy — statický web (Zola)

Jednostránkový landing page pro výukovou IoT platformu **TOWER**, postavený ve
statickém generátoru [Zola](https://www.getzola.org).

## Spuštění

```bash
zola serve     # vývojový server s živým reloadem (http://127.0.0.1:1111)
zola build     # vygeneruje statický web do ./public
```

## Struktura

```
config.toml            # konfigurace webu (base_url, kontaktní údaje v [extra])
content/_index.md      # VEŠKERÝ obsah landing page (data sekcí v [extra])
templates/
  base.html            # hlavička (navigace) + patička
  index.html           # rozložení sekcí landing page
  macros.html          # logo + SVG ikony
static/
  css/style.css        # styly (1:1 podle mockupu)
  js/main.js           # mobilní menu + FAQ akordeon
  img/favicon.svg      # favicon
```

## Editace obsahu

Texty, kurzy, balíčky, FAQ atd. se needitují v HTML — jsou jako data v
`content/_index.md` v sekci `[extra]`. Stačí upravit hodnoty a `zola` web
přegeneruje.

## Co je potřeba doplnit

- **Obrázky** — produktové fotky a logo jsou zatím CSS/SVG placeholdery
  (`.device--*` v `style.css`, `macros::logo`). Reálné assety dejte do
  `static/img/` a nahraďte placeholdery.
- **Odkazy** `href="#"` (dokumentace, eshop, sociální sítě) vedou zatím nikam.
- **Kontaktní formulář** nemá backend (`action="#"`) — napojte na svůj endpoint.
- **CS/EN přepínač** je zatím jen vizuální; dvojjazyčnost lze doplnit přes Zola i18n.
