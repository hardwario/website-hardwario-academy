+++
title = "HARDWARIO Academy — Učte IoT prakticky"
template = "index.html"
description = "Modulární bezdrátová IoT platforma TOWER pro výuku. Bez pájení, bez teorie navíc."

[extra]

# ── HERO ──────────────────────────────────────────────────────────────────
hero_title_1 = "Učte IoT prakticky."
hero_title_2 = "Bez pájení. Bez"
hero_title_3 = "teorie navíc."
hero_text = "HARDWARIO TOWER je modulární stavebnice, se kterou studenti měří reálná data, programují zařízení a staví vlastní IoT projekty – od teploměru po chytrou domácnost s Home Assistantem."
hero_cta_primary = "Chci TOWER pro školu"
hero_cta_secondary = "Domluvit konzultaci"

# ── STATS BAR ─────────────────────────────────────────────────────────────
stats = [
  { value = "15+",   label = "Hotových projektů na STEM portálu" },
  { value = "???",   label = "HARDWARIO TOWER na trhu" },
  { value = "0×",    label = "Pájení – moduly se cvakají" },
  { value = "CS/EN", label = "Dokumentace, návody a SDK" },
]

# ── PROČ TOWER VE VÝUCE (features) ────────────────────────────────────────
features_kicker = "PROČ TOWER VE VÝUCE"
features_title = "IoT, které se dá učit bez improvizace."
features = [
  { icon = "teach",      title = "Praktická výuka místo teorie", text = "Studenti měří teplotu, vlhkost, CO₂ nebo pohyb. Pracují s reálnými daty, ne s příklady ze zadání. Hodina vypadá jinak, když číslo přijde z čidla v učebně." },
  { icon = "connection", title = "Propojení s aplikacemi", text = "TOWER posílá data přes vlastní rádio do USB donglu a dál do Home Assistantu nebo Node-REDu přes MQTT. Studenti vidí celou cestu od senzoru k dashboardu." },
  { icon = "shield",     title = "Bezpečné experimenty", text = "Bateriové napájení, certifikovaný hardware. Žádné 230 V ve třídě, žádné improvizace s napájecími zdroji." },
  { icon = "box",        title = "Bez pájení, bez ztrát", text = "Moduly se zacvakávají do sebe. Žádná páječka, žádné zkraty. Core Module běží na 3,3 V, napájení z AAA baterií vydrží celé pololetí na jednu sadu." },
]

# ── CO JE TO TOWER ────────────────────────────────────────────────────────
about_kicker = "CO JE TO TOWER?"
about_title = "Modulární bezdrátová IoT platforma."
about_text = "Český modulární IoT kit od HARDWARIO. Na Core Module zacvakneš libovolnou kombinaci modulů a postavíš si přesně to zařízení, které do hodiny potřebuješ."
about_modules = [
  { name = "Core Module",   text = "Mozek sestavy. ARM Cortex-M0+, vestavěný teploměr (TMP112) a akcelerometr (LIS2DH12), rádio na 868 MHz." },
  { name = "Battery Module", text = "Napájení ze čtyř AAA baterií. Při běžném měření vydrží sada celé pololetí." },
  { name = "CO₂ Module",     text = "NDIR senzor LP8, měří 0 až 10 000 ppm. Ideální pro měření kvality vzduchu ve třídě." },
  { name = "Climate / Humidity / Barometer Tag", text = "Malé senzorové moduly pro teplotu, vlhkost (SHT20) a tlak. Komunikují přes I²C." },
  { name = "Radio Dongle",   text = "USB klíčenka, která posílá data ze sestav přímo do počítače nebo Home Assistantu." },
]
about_cta_primary = "Otevřít dokumentaci TOWER"
about_cta_secondary = "Prohlédnout STEM projekty"

# ── KURZY ─────────────────────────────────────────────────────────────────
courses_kicker = "KURZY"
courses_title = "Tvořte internet věcí"
courses_link = "Všechny kurzy"

featured_course = { badge = "VLAJKOVÝ PROJEKT PRO ZKUŠENÉ", title = "Chytrá učebna s Home Asistentem", text = "Výuka informatiky nemusí končit u práce s počítačem. Nechte studenty vytvářet chytrou učebnu s HARDWARIO a Home Assistantem — od senzorů až po živý dashboard s reálnými daty.", tags = ["Home Assistant", "TOWER", "IoT", "HARDWARIO PLAYGROUND"], dash_title = "TOWER (Učebna 144)", note = "Kurz je vhodný pro: průmyslové střední školy, gymnázia s ICT, technické fakulty a nadšence IoT", note_link = "Přihlásit se ke kurzu" }

featured_metrics = [
  { label = "TEPLOTA", unit = "°C",  color = "orange" },
  { label = "VLHKOST", unit = "%",   color = "cyan" },
  { label = "CO₂",     unit = "ppm", color = "green" },
  { label = "TLAK",    unit = "hPa", color = "purple" },
]
featured_modes = [
  { label = "Větrání", active = true,  values = ["24,2", "48", "602", "1000"] },
  { label = "Topení",  active = false, values = ["26,5", "39", "655", "1001"] },
  { label = "Světlo",  active = false, values = ["23,1", "46", "588", "999"] },
]

courses = [
  { badge = "ZAČÁTEČNÍK", level = "beginner", title = "Vlastní bezdrátový teploměr", text = "Postav teploměr na Core Modulu, naprogramuj odesílání hodnot a zobraz je v telefonu." },
  { badge = "ZAČÁTEČNÍK", level = "beginner", title = "Měření kvality vzduchu ve třídě", text = "Použij CO₂ Module a sleduj, jak se mění koncentrace během vyučování. Data nasbírejte za týden a vyhodnoťte." },
  { badge = "POKROČILÝ",  level = "advanced", title = "Bezpečnostní kamera s detekcí pohybu", text = "Nakonfiguruj si pohybový senzor a měj přehled o aktivitě v hlídaném objektu. Spáruj zařízení s bezplatnou aplikací Blynk a dostávej upozornění." },
  { badge = "POKROČILÝ",  level = "advanced", title = "Chytrý vodní zavlažovací systém", text = "Automatická závlaha podle vlhkosti půdy. Studenti propojí senzor, čerpadlo a logiku spínání do funkčního celku." },
  { badge = "ZAČÁTEČNÍK", level = "beginner", title = "Meteostanice na školní zahradě", text = "Teplota, vlhkost a tlak v jedné sestavě, napájení z AAA baterií, data přes rádio do školní sítě." },
]
course_link = "Materiály"

# ── CESTA PRO UČITELE (kroky) ─────────────────────────────────────────────
steps_kicker = "CESTA PRO UČITELE"
steps_title = "Od balíčku k hotové hodině za odpoledne."
steps_text = "Nemusíš být IoT odborník. Stačí, když projdeš tři kroky."
steps = [
  { num = "01", title = "VYBERTE SADU", text = "Podle velikosti třídy a toho, co chcete měřit. Pomůžeme najít balíček, který sedí na vaši hodinu i rozpočet." },
  { num = "02", title = "PROJDĚTE MINI COURSE", text = "Hotové kurzy na STEM portálu. Provedou tě složením, nahráním firmwaru a první ukázkou dat. Bez vlastní přípravy materiálů." },
  { num = "03", title = "NAUČTE TO VE TŘÍDĚ", text = "Studenti dostanou moduly do ruky, sestaví zařízení a uvidí měření v aplikaci. Hodina běží podle scénáře, ty hlídáš čas." },
]

# ── BALÍČKY PRO ŠKOLY ─────────────────────────────────────────────────────
packages_kicker = "BALÍČKY PRO ŠKOLY"
packages_title = "Vyberte podle velikosti třídy a ambicí"
packages = [
  { tier = "STARTER", featured = false, name = "Pro pilotní hodinu", desc = "Jedna sada pro učitele nebo malou skupinu. Vyzkoušíte si TOWER bez velké investice.", features = ["1× Core Module + Battery", "3 senzorové tagy (T, RH, baro)", "USB dongle + Raspberry Pi server", "Přístup do STEM portálu"], cta = "Domluvit pilot" },
  { tier = "CLASS",   featured = true,  name = "Pro celou třídu", desc = "Dost sad na práci ve skupinách po celý školní rok. Doporučená volba pro běžnou výuku.", features = ["8× Core Module + Battery", "16 senzorových tagů (T, RH, baro)", "USB dongle + Raspberry Pi server", "Přístup do STEM portálu"], cta = "Domluvit balíček" },
  { tier = "YEAR",    featured = false, name = "Pro celý ročník", desc = "Maximální sada pro výuku napříč více třídami a předměty.", features = ["16× Core Module + Battery", "32 senzorových tagů (T, RH, baro)", "USB dongle + Raspberry Pi server", "Přístup do STEM portálu"], cta = "Domluvit sadu" },
]

# ── FAQ ───────────────────────────────────────────────────────────────────
faq_kicker = "ČASTÉ DOTAZY"
faq_title = "Co se ptají učitelé nejčastěji."
faq_text = "Nenašli jste odpověď? Napište nám — každý dotaz si přečteme my, ne formulářový bot."
faq_cta = "Zeptat se"
faqs = [
  { q = "Pro jaké typy škol je TOWER vhodný?", a = "Druhý stupeň ZŠ, střední školy, gymnázia, SOŠ a VOŠ. Hodí se na předměty informatika, fyzika, programování a projektovou výuku. Pokud máte zájem o jiný formát, ozvěte se." },
  { q = "Musí učitel umět programovat v C?", a = "Ne. Připravené projekty využívají hotový firmware a konfiguraci. Pokročilejší kurzy nabízejí i programování v C a Pythonu, ale není to podmínka." },
  { q = "Kolik studentů zabere jedna sada?", a = "Ideálně 2–3 studenti na jednu sadu, aby si každý sáhl na hardware. Balíčky doporučujeme podle velikosti třídy." },
  { q = "Jaký software studenti potřebují?", a = "Stačí webový prohlížeč a volitelně mobilní aplikace. Vše ostatní běží na dodaném Raspberry Pi serveru." },
  { q = "Je to bezpečné pro studenty?", a = "Ano. Vše běží na nízkém napětí, moduly se cvakají bez pájení a horkých nástrojů. Žádné riziko popálení ani zkratu." },
  { q = "Co když potřebuju poradit s konkrétním projektem?", a = "Napište nám nebo využijte komunitní fórum. Pomůžeme s návrhem hodiny i s technickým zapojením." },
  { q = "V jakém jazyce je dokumentace a kurzy?", a = "Dokumentace, návody i SDK jsou dostupné v češtině i angličtině (CS/EN)." },
]

# ── ZDROJE A DOKUMENTACE ──────────────────────────────────────────────────
resources_kicker = "ZDROJE A DOKUMENTACE"
resources_title = "Academy navazuje. Nenahrazuje."
resources_text = "Všechno hluboké a aktuální najdeš ve zdrojích od HARDWARIO. Academy ti ukáže, kudy do nich vstoupit."
resources = [
  { tag = "HARDWARIO STEM", title = "STEM projekty pro studenty", text = "Sbírka hotových mini-courses a projektů, kterými projdeš se třídou krok za krokem. Od prvního senzoru po vlastní aplikaci.", link = "Otevřít STEM" },
  { tag = "HACKSTER.IO",    title = "Komunitní projekty", text = "Reálné projekty od ostatních uživatelů TOWER. Inspirace pro maturitní práce, kroužky a vlastní nápady studentů.", link = "Prohlédnout projekty" },
  { tag = "HARDWARIO DOCS", title = "TOWER dokumentace", text = "Technická dokumentace všech modulů, příklady kódu, popis SDK a integrace s Home Assistantem nebo Node-REDem.", link = "Otevřít dokumentaci" },
]

# ── KONTAKT ───────────────────────────────────────────────────────────────
contact_kicker = "CESTA PRO UČITELE"
contact_title = "Chcete TOWER do své školy"
contact_text = "Napište nám pár vět o tom, co učíte a co byste s TOWER chtěli vyzkoušet. Ozveme se do dvou pracovních dnů s návrhem sady a termínem konzultace."
contact_phone_note = "Nebo zavolejte přímo"
+++
