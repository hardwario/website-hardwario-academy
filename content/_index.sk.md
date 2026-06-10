+++
title = "HARDWARIO Academy — Učte IoT prakticky"
template = "index.html"
description = "Modulárna bezdrôtová IoT platforma TOWER pre výučbu. Bez spájkovania, bez zbytočnej teórie."

[extra]

hero_title_1 = "Učte IoT prakticky."
hero_title_2 = "Bez spájkovania."
hero_title_3 = "Bez zbytočnej teórie."
hero_text = "HARDWARIO TOWER je modulárna stavebnica, s ktorou žiaci merajú reálne dáta, programujú zariadenia a stavajú vlastné IoT projekty – od teplomera po inteligentnú domácnosť s Home Assistantom."
hero_cta_primary = "Chcem TOWER pre školu"
hero_cta_secondary = "Ako to funguje"

stats = [
  { value = "30+",   label = "Hotových projektov na STEM portáli" },
  { value = "10",   label = "HARDWARIO TOWER na trhu" },
  { value = "0×",    label = "Spájkovanie – moduly sa zacvaknú" },
  { value = "CS/EN", label = "Dokumentácia, návody a SDK" },
]

features_kicker = "PREČO TOWER VO VÝUČBE"
features_title = "IoT, ktoré sa dá učiť bez improvizácie."
features = [
  { icon = "teach",      title = "Praktická výučba namiesto teórie", text = "Žiaci merajú teplotu, vlhkosť, CO₂ aj pohyb a pracujú s reálnymi dátami z učebne, nie s príkladmi zo zadania. Hodina vyzerá inak, keď číslo príde priamo zo snímača." },
  { icon = "connection", title = "Prepojenie s aplikáciami", text = "TOWER posiela dáta vlastným rádiom do USB dongle a cez MQTT ďalej do Home Assistantu alebo Node-RED. Žiaci vidia celú cestu od snímača až k dashboardu." },
  { icon = "shield",     title = "Bezpečné experimenty", text = "Všetko beží na nízkom napätí z AAA batérií, žiadnych 230 V v triede ani improvizácia s napájacími zdrojmi. Experimenty tak prebiehajú bez zbytočného rizika." },
  { icon = "box",        title = "Bez spájkovania, bez strát", text = "Moduly sa do seba len zacvaknú, žiadna spájkovačka ani skraty. Vďaka spotrebe pod 5 µA v spánku vydržia AAA batérie v triede aj celý polrok výučby." },
]

about_kicker = "ČO JE TO TOWER?"
about_title = "Modulárna bezdrôtová IoT platforma."
about_text = "Český modulárny IoT kit od HARDWARIO. Na Core Module zacvakneš ľubovoľnú kombináciu modulov a postavíš si presne to zariadenie, ktoré na hodinu potrebuješ."
about_modules = [
  { name = "Core Module",   text = "Mozog zostavy. ARM Cortex-M0+, vstavaný teplomer (TMP112) a akcelerometer (LIS2DH12), rádio na 868 MHz." },
  { name = "Battery Module", text = "Napájanie zo štyroch AAA batérií. Pri bežnom meraní vydrží sada celý polrok." },
  { name = "CO₂ Module",     text = "NDIR snímač LP8, meria 0 až 10 000 ppm. Ideálny na meranie kvality vzduchu v triede." },
  { name = "Climate / Humidity / Barometer Tag", text = "Malé snímačové moduly pre teplotu, vlhkosť (SHT20) a tlak. Komunikujú cez I²C." },
  { name = "Radio Dongle",   text = "USB kľúčenka, ktorá posiela dáta zo zostáv priamo do počítača alebo Home Assistantu." },
]
about_cta_primary = "Otvoriť dokumentáciu TOWER"
about_cta_secondary = "Prezrieť STEM projekty"
about_slides = [
  { image = "carousel-clime",    name = "Clime Set",    desc = "Sada na monitorovanie teploty a vlhkosti s bezdrôtovým pripojením" },
  { image = "carousel-display",  name = "Display Set",  desc = "Zobrazenie hodnôt v reálnom čase s LCD displejom a bezdrôtovými snímačmi" },
  { image = "carousel-push",     name = "Push Set",     desc = "Sada s inteligentným tlačidlom na spúšťanie akcií a notifikácií" },
  { image = "carousel-motion",   name = "Motion Set",   desc = "Sada na detekciu pohybu s PIR snímačom a bezdrôtovými upozorneniami" },
  { image = "carousel-clime-xl", name = "Clime XL Set", desc = "Monitorovanie kvality ovzdušia so snímačom CO2 a sledovaním klímy" },
  { image = "carousel-control",  name = "Control Set",  desc = "Sada s relé pre domácu a priemyselnú automatizáciu" },
]

scenarios_kicker = "VÝUČBOVÉ SCENÁRE"
scenarios_title = "Čo sa dá s TOWER v škole učiť"
scenarios_text = "Konkrétne použitie do hodín, projektovej výučby aj krúžkov — od merania cez dáta až po automatizáciu."
scenarios_cta = "Prezrieť TOWER projekty"
scenarios_card_cta = "Projekt na STEM"
scenarios = [
  { icon = "thermo",     title = "Teplota a klíma",                text = "Merajte teplotu, vlhkosť a tlak a sledujte, ako sa menia v čase.", link_href = "https://stem.hardwario.com/projects/iguana-terrarium-monitor/" },
  { icon = "co2",        title = "Kvalita vzduchu (CO₂)",          text = "Sledujte koncentráciu CO₂ v triede a prepojte ju s vetraním.", link_href = "https://stem.hardwario.com/projects/radio-co2-monitor/" },
  { icon = "home",       title = "Inteligentná domácnosť & Home Assistant", text = "Posielajte dáta do Home Assistantu a postavte inteligentnú učebňu.", link_href = "https://stem.hardwario.com/projects/radio-smart-led-strip/" },
  { icon = "weather",    title = "Meteorológia",                   text = "Postavte školskú meteostanicu a zbierajte dáta o počasí vonku.", link_href = "https://stem.hardwario.com/projects/" },
  { icon = "data",       title = "Práca s dátami (data logging)",  text = "Ukladajte hodnoty v čase a vizualizujte ich v grafoch a dashboardoch.", link_href = "https://stem.hardwario.com/projects/kennel-temperature-monitor/" },
  { icon = "automation", title = "Automatizácia",                  text = "Reagujte na udalosti a spínajte zariadenia cez MQTT a Node-RED.", link_href = "https://stem.hardwario.com/projects/appliance-control/" },
]

courses_kicker = "KURZY"
courses_title = "Tvorte internet vecí"
courses_link = "Všetky kurzy"

featured_course = { badge = "VLAJKOVÝ PROJEKT PRE SKÚSENÝCH", title = "Inteligentná učebňa s Home Assistantom", text = "Výučba informatiky nemusí končiť pri práci s počítačom. Nechajte žiakov vytvárať inteligentnú učebňu s HARDWARIO a Home Assistantom — od snímačov až po živý dashboard s reálnymi dátami.", tags = ["Home Assistant", "TOWER", "IoT", "HARDWARIO PLAYGROUND"], dash_title = "TOWER (Učebňa 144)", note = "Kurz je vhodný pre: priemyselné stredné školy, gymnáziá s ICT, technické fakulty a nadšencov IoT", note_link = "Prihlásiť sa na kurz" }

featured_metrics = [
  { label = "TEPLOTA", unit = "°C",  color = "orange" },
  { label = "VLHKOSŤ", unit = "%",   color = "cyan" },
  { label = "CO₂",     unit = "ppm", color = "green" },
  { label = "TLAK",    unit = "hPa", color = "purple" },
]
featured_modes = [
  { label = "Vetranie", active = true,  values = ["24,2", "48", "602", "1000"] },
  { label = "Kúrenie",  active = false, values = ["26,5", "39", "655", "1001"] },
  { label = "Svetlo",   active = false, values = ["23,1", "46", "588", "999"] },
]

courses = [
  { badge = "ZAČIATOČNÍK", level = "beginner", title = "Vlastný bezdrôtový teplomer", text = "Postav teplomer na Core Module, naprogramuj odosielanie hodnôt a zobraz ich v telefóne." },
  { badge = "ZAČIATOČNÍK", level = "beginner", title = "Meranie kvality vzduchu v triede", text = "Použi CO₂ Module a sleduj, ako sa mení koncentrácia počas vyučovania. Dáta nazbierajte za týždeň a vyhodnoťte." },
  { badge = "POKROČILÝ",  level = "advanced", title = "Bezpečnostná kamera s detekciou pohybu", text = "Nakonfiguruj si pohybový snímač a maj prehľad o aktivite v stráženom objekte. Spáruj zariadenie s bezplatnou aplikáciou Blynk a dostávaj upozornenia." },
  { badge = "POKROČILÝ",  level = "advanced", title = "Inteligentný vodný zavlažovací systém", text = "Automatická závlaha podľa vlhkosti pôdy. Žiaci prepoja snímač, čerpadlo a logiku spínania do funkčného celku." },
  { badge = "ZAČIATOČNÍK", level = "beginner", title = "Meteostanica na školskej záhrade", text = "Teplota, vlhkosť a tlak v jednej zostave, napájanie z AAA batérií, dáta cez rádio do školskej siete." },
]
course_link = "Materiály"

projects_kicker = "TOWER PROJEKTY"
projects_title = "Inšpirácia, čo s TOWER učiť"
projects_text = "Rýchla inšpirácia pre hodinu, projektovú výučbu aj krúžok — nie dlhý katalóg. Pri každom projekte hneď vidíš, aká sada je minimálne potrebná."
projects_link = "Všetky projekty na STEM"
projects_link_href = "https://stem.hardwario.com/projects/"
projects_kit_label = "Min. sada"
projects_pkg_label = "Odporúčané"
projects_benefit_label = "Prínos do výučby"
projects_cta = "Otvoriť návod"

featured_project = { cat = "advanced", category = "Pokročilé", title = "Bezdrôtová meteostanica", text = "Meraj vietor, zrážky a teplotu vonku a posielaj dáta bezdrôtovo na 868 MHz – od snímača až po vlastný dashboard.", benefit = "Zber reálnych dát o počasí a práca s grafmi – prepojí fyziku, informatiku aj projektovú výučbu.", image = "weather-station.jpg", kit = ["Core Module", "Sensor Module", "Radio Dongle"], pkg = "STARTER", link_href = "https://www.hackster.io/158890/wireless-outdoor-weather-station-using-hardwario-core-module-76079a" }

projects = [
  { cat = "beginner",   category = "Začiatočnícke", title = "Push the Button",        text = "Stlač tlačidlo a do mobilu hneď príde push notifikácia.", benefit = "Prvý úspech za 15 minút – cesta od zariadenia do aplikácie.", image = "push-the-button.webp",          kit = ["Push Set", "Radio Dongle"],                  pkg = "STARTER", link_href = "https://stem.hardwario.com/projects/push-the-button/" },
  { cat = "data",       category = "Dátové projekty", title = "Bezdrôtový dverný snímač", text = "Keď sa otvoria dvere alebo okno, príde upozornenie do telefónu.", benefit = "Úvod do snímačov a notifikácií – reakcia na reálnu udalosť.", image = "door-sensor.webp",      kit = ["Core Module", "Sensor Module", "Radio Dongle"], pkg = "STARTER", link_href = "https://stem.hardwario.com/projects/radio-door-sensor" },
  { cat = "automation", category = "Automatizácia", title = "Bezdrôtový inteligentný LED pásik", text = "Ovládaj LED pásik na diaľku – farby, jas aj efekty cez Node-RED a Blynk.", benefit = "Ovládanie zariadenia na diaľku a prepojenie hardwaru s aplikáciou.",      image = "smart-led-strip.webp", kit = ["Control Set", "Radio Dongle", "LED pásik"],     pkg = "CLASS",   link_href = "https://stem.hardwario.com/projects/radio-smart-led-strip" },
  { cat = "automation", category = "Automatizácia", title = "Inteligentný ping-pongový stôl",  text = "Kto skóruje, stlačí tlačidlo a LED pásik stráži skóre za vás.", benefit = "Zábavný projekt do krúžku – logika skóre a reakcia na udalosť.", image = "ping-pong-table.jpg",   kit = ["Core Module", "Power Module", "LED pásik"],     pkg = "CLASS",   link_href = "https://www.hackster.io/jakub-smejkal/hardwario-ping-pong-table-a9d97e" },
  { cat = "data",       category = "Dátové projekty", title = "Meranie CO₂ a klímy v triede", text = "Bezdrôtový monitor CO₂, teploty, vlhkosti, svetla a tlaku – dáta v Node-RED aj v mobile.", benefit = "Práca s reálnymi dátami a dashboardmi – od snímača ku grafu za hodinu.", image = "radio-co2-monitor.webp", kit = ["CO₂ Monitor Kit", "Radio Dongle"], pkg = "CLASS",   link_href = "https://stem.hardwario.com/projects/radio-co2-monitor/" },
]

projects_community_title = "Ďalšia inšpirácia z komunity"
projects_community_text = "Desiatky reálnych TOWER projektov od ostatných používateľov – od meteostanice po meranie spotreby. Inšpirácia pre maturitné práce, krúžky aj vlastné nápady žiakov."
projects_community_link = "Prezrieť na Hackster.io"
projects_community_href = "https://www.hackster.io/hardwario/projects"

steps_kicker = "CESTA PRE UČITEĽOV"
steps_title = "Od balíčka k hotovej hodine za popoludnie."
steps_text = "Nemusíš byť IoT odborník. Stačí, keď prejdeš tri kroky."
steps = [
  { num = "01", title = "VYBERTE SADU", text = "Podľa veľkosti triedy a toho, čo chcete merať. Pomôžeme nájsť balíček, ktorý sedí na vašu hodinu aj rozpočet." },
  { num = "02", title = "PREJDITE MINI COURSE", text = "Hotové kurzy na STEM portáli. Prevedú ťa zložením, nahraním firmwaru a prvou ukážkou dát. Bez vlastnej prípravy materiálov." },
  { num = "03", title = "NAUČTE TO V TRIEDE", text = "Žiaci dostanú moduly do ruky, zostavia zariadenie a uvidia meranie v aplikácii. Hodina beží podľa scenára, ty strážiš čas." },
]

packages_kicker = "BALÍČKY PRE ŠKOLY"
packages_title = "Vyberte podľa veľkosti triedy a ambícií"
packages = [
  { tier = "STARTER", featured = false, name = "Pre pilotnú hodinu", desc = "Jedna sada pre učiteľa alebo malú skupinu. Vyskúšate si TOWER bez veľkej investície.", features = ["1× Core Module + Battery", "3 snímačové tagy (T, RH, baro)", "USB dongle + Raspberry Pi server", "Prístup do STEM portálu"], cta = "Dohodnúť pilot" },
  { tier = "CLASS",   featured = true,  name = "Pre celú triedu", desc = "Dosť sád na prácu v skupinách počas celého školského roka. Odporúčaná voľba pre bežnú výučbu.", features = ["8× Core Module + Battery", "16 snímačových tagov (T, RH, baro)", "USB dongle + Raspberry Pi server", "Prístup do STEM portálu"], cta = "Dohodnúť balíček" },
  { tier = "YEAR",    featured = false, name = "Pre celý ročník", desc = "Maximálna sada pre výučbu naprieč viacerými triedami a predmetmi.", features = ["16× Core Module + Battery", "32 snímačových tagov (T, RH, baro)", "USB dongle + Raspberry Pi server", "Prístup do STEM portálu"], cta = "Dohodnúť sadu" },
]

faq_kicker = "ČASTÉ OTÁZKY"
faq_title = "Čo sa učitelia pýtajú najčastejšie."
faq_text = "Nenašli ste odpoveď? Napíšte nám — každú otázku si prečítame my, nie formulárový bot."
faq_cta = "Spýtať sa"
faqs = [
  { q = "Pre aké typy škôl je TOWER vhodný?", a = "Druhý stupeň ZŠ, stredné školy, gymnáziá, SOŠ a VOŠ. Hodí sa na predmety informatika, fyzika, programovanie a projektovú výučbu. Ak máte záujem o iný formát, ozvite sa." },
  { q = "Musí učiteľ vedieť programovať v C?", a = "Nie. Pripravené projekty využívajú hotový firmware a konfiguráciu. Pokročilejšie kurzy ponúkajú aj programovanie v C a Pythone, ale nie je to podmienka." },
  { q = "Koľko žiakov zaberie jedna sada?", a = "Ideálne 2–3 žiaci na jednu sadu, aby si každý siahol na hardware. Balíčky odporúčame podľa veľkosti triedy." },
  { q = "Aký software žiaci potrebujú?", a = "Stačí webový prehliadač a voliteľne mobilná aplikácia. Všetko ostatné beží na dodanom Raspberry Pi serveri." },
  { q = "Je to bezpečné pre žiakov?", a = "Áno. Všetko beží na nízkom napätí, moduly sa zacvakávajú bez spájkovania a horúcich nástrojov. Žiadne riziko popálenia ani skratu." },
  { q = "Čo keď potrebujem poradiť s konkrétnym projektom?", a = "Napíšte nám alebo využite komunitné fórum. Pomôžeme s návrhom hodiny aj s technickým zapojením." },
  { q = "V akom jazyku je dokumentácia a kurzy?", a = "Dokumentácia, návody aj SDK sú dostupné v češtine aj angličtine (CS/EN)." },
]

resources_kicker = "ZDROJE A DOKUMENTÁCIA"
resources_title = "Academy nadväzuje. Nenahrádza."
resources_text = "Všetko hĺbkové a aktuálne nájdeš v zdrojoch od HARDWARIO. Academy ti ukáže, kadiaľ do nich vstúpiť."
resources = [
  { tag = "HARDWARIO STEM", title = "STEM projekty pre žiakov", text = "Zbierka hotových mini-courses a projektov, ktorými prejdeš s triedou krok za krokom. Od prvého snímača po vlastnú aplikáciu.", link = "Otvoriť STEM", link_href = "https://stem.hardwario.com/" },
  { tag = "HACKSTER.IO",    title = "Komunitné projekty", text = "Reálne projekty od ostatných používateľov TOWER. Inšpirácia pre maturitné práce, krúžky a vlastné nápady žiakov.", link = "Prezrieť projekty", link_href = "https://www.hackster.io/hardwario/projects" },
  { tag = "HARDWARIO DOCS", title = "TOWER dokumentácia", text = "Technická dokumentácia všetkých modulov, príklady kódu, popis SDK a integrácia s Home Assistantom alebo Node-RED.", link = "Otvoriť dokumentáciu", link_href = "https://docs.hardwario.com/tower/" },
]

testimonials_kicker = "REFERENCIE"
testimonials_title = "Čo hovoria naši partneri"
testimonials = [
  { quote = "Žiaci po prvý raz videli, ako dáta zo snímača putujú až do aplikácie. Hodina informatiky zrazu dávala zmysel.", name = "Jana Nováková", role = "učiteľka informatiky, Gymnázium Brno" },
  { quote = "Žiadne spájkovanie, žiadne improvizácie. Moduly sa zacvaknú a za desať minút meriame teplotu v učebni naživo.", name = "Petr Svoboda", role = "učiteľ fyziky, SPŠ Plzeň" },
  { quote = "Hotové mini-courses nám ušetrili hodiny príprav. Stačí prejsť scenár a hodina beží sama.", name = "Martina Dvořáková", role = "koordinátorka ICT, ZŠ Ostrava" },
  { quote = "Zaobstarali sme sadu pre celú triedu. Žiaci stavajú vlastné projekty a baví ich to viac než čokoľvek predtým.", name = "Tomáš Černý", role = "riaditeľ, SOŠ Liberec" },
  { quote = "Konečne technológia, ktorá v triede jednoducho funguje. Batériová sada vydrží celý polrok na jednu sadu.", name = "Lucie Horáková", role = "učiteľka, Gymnázium Praha" },
]

contact_kicker = "CESTA PRE UČITEĽOV"
contact_title = "Chcete TOWER do svojej školy"
contact_text = "Napíšte nám pár viet o tom, čo učíte a čo by ste s TOWER chceli vyskúšať. Ozveme sa do dvoch pracovných dní s návrhom sady a termínom konzultácie."
contact_phone_note = "Alebo zavolajte priamo"

cta_title = "Pripravení učiť IoT prakticky?"
cta_text = "Dohodnite si nezáväznú konzultáciu. Odporučíme sadu presne na vašu triedu a predmet a pomôžeme rozbehnúť prvú hodinu."
cta_primary = "Chcem TOWER pre školu"
cta_secondary = "Dohodnúť konzultáciu"
cta_phone_note = "Alebo zavolajte priamo:"
+++
