+++
title = "HARDWARIO Academy — IoT praxisnah unterrichten"
template = "index.html"
description = "Modulare drahtlose IoT-Plattform TOWER für den Unterricht. Ohne Löten, ohne zusätzliche Theorie."

[extra]

hero_title_1 = "IoT praxisnah unterrichten."
hero_title_2 = "Ohne Löten."
hero_title_3 = "Ohne zusätzliche Theorie."
hero_text = "HARDWARIO TOWER ist ein modularer Baukasten, mit dem Schülerinnen und Schüler echte Daten messen, Geräte programmieren und eigene IoT-Projekte bauen – vom Thermometer bis zum Smart Home mit Home Assistant."
hero_cta_primary = "Ich möchte TOWER für meine Schule"
hero_cta_secondary = "So funktioniert es"

stats = [
  { value = "30+",   label = "Fertige Projekte im STEM-Portal" },
  { value = "10",   label = "HARDWARIO TOWER auf dem Markt" },
  { value = "0×",    label = "Löten – Module werden einfach zusammengesteckt" },
  { value = "CS/EN", label = "Dokumentation, Anleitungen und SDK" },
]

features_kicker = "WARUM TOWER IM UNTERRICHT"
features_title = "IoT, das sich ohne Improvisieren unterrichten lässt."
features = [
  { icon = "teach",      title = "Praxis statt Theorie", text = "Schülerinnen und Schüler messen Temperatur, Luftfeuchtigkeit, CO₂ und Bewegung und arbeiten mit echten Daten aus dem Klassenzimmer, nicht mit Beispielen aus einem Arbeitsblatt. Eine Unterrichtsstunde sieht anders aus, wenn die Zahl direkt vom Sensor kommt." },
  { icon = "connection", title = "Verbindung mit Anwendungen", text = "TOWER sendet Daten über sein eigenes Funknetz an einen USB dongle und weiter per MQTT in Home Assistant oder Node-RED. Schülerinnen und Schüler sehen den gesamten Weg vom Sensor bis zum dashboard." },
  { icon = "shield",     title = "Sichere Experimente", text = "Alles läuft mit Niederspannung aus AAA-Batterien, keine 230 V im Klassenzimmer und kein Improvisieren mit Netzteilen. Experimente finden so ohne unnötiges Risiko statt." },
  { icon = "box",        title = "Ohne Löten, ohne Verluste", text = "Module werden einfach zusammengesteckt, kein Lötkolben und keine Kurzschlüsse. Dank eines Verbrauchs von unter 5 µA im Ruhezustand halten AAA-Batterien ein ganzes Semester Unterricht im Klassenzimmer durch." },
]

about_kicker = "WAS IST TOWER?"
about_title = "Eine modulare drahtlose IoT-Plattform."
about_text = "Ein tschechischer modularer IoT-Bausatz von HARDWARIO. Stecken Sie eine beliebige Kombination von Modulen auf das Core Module und bauen Sie genau das Gerät, das Sie für Ihren Unterricht brauchen."
about_modules = [
  { name = "Core Module",   text = "Das Gehirn des Aufbaus. ARM Cortex-M0+, integriertes Thermometer (TMP112) und Beschleunigungssensor (LIS2DH12), 868-MHz-Funk." },
  { name = "Battery Module", text = "Stromversorgung über vier AAA-Batterien. Bei normalem Messbetrieb hält das Set ein ganzes Semester." },
  { name = "CO₂ Module",     text = "NDIR-Sensor LP8, misst 0 bis 10.000 ppm. Ideal zum Messen der Luftqualität im Klassenzimmer." },
  { name = "Climate / Humidity / Barometer Tag", text = "Kleine Sensormodule für Temperatur, Luftfeuchtigkeit (SHT20) und Druck. Sie kommunizieren über I²C." },
  { name = "Radio Dongle",   text = "Ein USB dongle, der Daten aus den Aufbauten direkt an einen Computer oder Home Assistant sendet." },
]
about_cta_primary = "TOWER-Dokumentation öffnen"
about_cta_secondary = "STEM-Projekte durchstöbern"
about_slides = [
  { image = "carousel-clime",    name = "Clime Set",    desc = "Ein Set zur Überwachung von Temperatur und Luftfeuchtigkeit mit drahtloser Verbindung" },
  { image = "carousel-display",  name = "Display Set",  desc = "Anzeige der Werte in Echtzeit mit einem LCD-Bildschirm und drahtlosen Sensoren" },
  { image = "carousel-push",     name = "Push Set",     desc = "Ein Set mit einem smarten Taster zum Auslösen von Aktionen und Benachrichtigungen" },
  { image = "carousel-motion",   name = "Motion Set",   desc = "Ein Set zur Bewegungserkennung mit einem PIR-Sensor und drahtlosen Warnungen" },
  { image = "carousel-clime-xl", name = "Clime XL Set", desc = "Überwachung der Luftqualität mit einem CO2-Sensor und Klimaerfassung" },
  { image = "carousel-control",  name = "Control Set",  desc = "Ein Set mit einem Relais für die Haus- und Industrieautomation" },
]

scenarios_kicker = "UNTERRICHTSSZENARIEN"
scenarios_title = "Was Sie mit TOWER in der Schule unterrichten können"
scenarios_text = "Konkrete Anwendungen für den Unterricht, Projektarbeit und Arbeitsgemeinschaften — vom Messen über Daten bis zur Automatisierung."
scenarios_cta = "TOWER-Projekte durchstöbern"
scenarios_card_cta = "Projekt auf STEM"
scenarios = [
  { icon = "thermo",     title = "Temperatur & Klima",             text = "Messen Sie Temperatur, Luftfeuchtigkeit und Druck und beobachten Sie, wie sie sich im Lauf der Zeit verändern.", link_href = "https://stem.hardwario.com/projects/iguana-terrarium-monitor/" },
  { icon = "co2",        title = "Luftqualität (CO₂)",             text = "Verfolgen Sie den CO₂-Gehalt im Klassenzimmer und verknüpfen Sie ihn mit dem Lüften.", link_href = "https://stem.hardwario.com/projects/radio-co2-monitor/" },
  { icon = "home",       title = "Smart Home & Home Assistant",    text = "Senden Sie Daten in Home Assistant und bauen Sie ein smartes Klassenzimmer.", link_href = "https://stem.hardwario.com/projects/radio-smart-led-strip/" },
  { icon = "weather",    title = "Meteorologie",                   text = "Bauen Sie eine schulische Wetterstation und sammeln Sie Wetterdaten von draußen.", link_href = "https://stem.hardwario.com/projects/" },
  { icon = "data",       title = "Arbeiten mit Daten (Logging)",   text = "Speichern Sie Werte über die Zeit und stellen Sie sie in Diagrammen und Dashboards dar.", link_href = "https://stem.hardwario.com/projects/kennel-temperature-monitor/" },
  { icon = "automation", title = "Automatisierung",                text = "Reagieren Sie auf Ereignisse und schalten Sie Geräte über MQTT und Node-RED.", link_href = "https://stem.hardwario.com/projects/appliance-control/" },
]

courses_kicker = "KURSE"
courses_title = "Bauen Sie das Internet der Dinge"
courses_link = "Alle Kurse"

featured_course = { badge = "FLAGGSCHIFF-PROJEKT FÜR FORTGESCHRITTENE", title = "Smartes Klassenzimmer mit Home Assistant", text = "Der Informatikunterricht muss nicht bei der Arbeit am Computer enden. Lassen Sie Ihre Schülerinnen und Schüler ein smartes Klassenzimmer mit HARDWARIO und Home Assistant bauen — von den Sensoren bis zum Live-dashboard mit echten Daten.", tags = ["Home Assistant", "TOWER", "IoT", "HARDWARIO PLAYGROUND"], dash_title = "TOWER (Klassenzimmer 144)", note = "Dieser Kurs eignet sich für: technische Fachoberschulen, Gymnasien mit IKT-Schwerpunkt, technische Hochschulen und IoT-Begeisterte", note_link = "Für den Kurs anmelden" }

featured_metrics = [
  { label = "TEMPERATUR",       unit = "°C",  color = "orange" },
  { label = "LUFTFEUCHTIGKEIT", unit = "%",   color = "cyan" },
  { label = "CO₂",              unit = "ppm", color = "green" },
  { label = "DRUCK",            unit = "hPa", color = "purple" },
]
featured_modes = [
  { label = "Lüftung", active = true,  values = ["24,2", "48", "602", "1000"] },
  { label = "Heizung", active = false, values = ["26,5", "39", "655", "1001"] },
  { label = "Licht",   active = false, values = ["23,1", "46", "588", "999"] },
]

courses = [
  { badge = "ANFÄNGER", level = "beginner", title = "Dein eigenes drahtloses Thermometer", text = "Baue ein Thermometer auf dem Core Module, programmiere es zum Senden der Werte und zeige sie auf deinem Handy an." },
  { badge = "ANFÄNGER", level = "beginner", title = "Luftqualität im Klassenzimmer messen", text = "Nutze das CO₂ Module und beobachte, wie sich die Konzentration während des Unterrichts verändert. Sammle die Daten über eine Woche und werte sie aus." },
  { badge = "FORTGESCHRITTEN",  level = "advanced", title = "Überwachungskamera mit Bewegungserkennung", text = "Konfiguriere einen Bewegungssensor und behalte den Überblick über die Aktivität im überwachten Bereich. Koppele das Gerät mit der kostenlosen Blynk-App und erhalte Warnungen." },
  { badge = "FORTGESCHRITTEN",  level = "advanced", title = "Smartes Wasser-Bewässerungssystem", text = "Automatisches Gießen auf Basis der Bodenfeuchtigkeit. Die Schülerinnen und Schüler verbinden Sensor, Pumpe und Schaltlogik zu einem funktionierenden Ganzen." },
  { badge = "ANFÄNGER", level = "beginner", title = "Wetterstation im Schulgarten", text = "Temperatur, Luftfeuchtigkeit und Druck in einem Aufbau, betrieben mit AAA-Batterien, Daten per Funk ins Schulnetz gesendet." },
]
course_link = "Materialien"

projects_kicker = "TOWER-PROJEKTE"
projects_title = "Inspiration, was Sie mit TOWER unterrichten können"
projects_text = "Schnelle Inspiration für eine Unterrichtsstunde, Projektarbeit oder eine Arbeitsgemeinschaft — kein langer Katalog. Bei jedem Projekt sehen Sie auf einen Blick, welches Set Sie mindestens brauchen."
projects_link = "Alle Projekte auf STEM"
projects_link_href = "https://stem.hardwario.com/projects/"
projects_kit_label = "Min. Set"
projects_pkg_label = "Empfohlen"
projects_benefit_label = "Mehrwert für den Unterricht"
projects_cta = "Anleitung öffnen"

featured_project = { cat = "advanced", category = "Fortgeschritten", title = "Drahtlose Wetterstation", text = "Messen Sie Wind, Niederschlag und Temperatur im Freien und senden Sie die Daten drahtlos über 868 MHz – vom Sensor bis zum eigenen dashboard.", benefit = "Echte Wetterdaten sammeln und mit Diagrammen arbeiten – verbindet Physik, Informatik und Projektarbeit.", image = "weather-station.jpg", kit = ["Core Module", "Sensor Module", "Radio Dongle"], pkg = "STARTER", link_href = "https://www.hackster.io/158890/wireless-outdoor-weather-station-using-hardwario-core-module-76079a" }

projects = [
  { cat = "beginner",   category = "Anfänger",    title = "Push the Button",      text = "Drücken Sie einen Taster und sofort landet eine Push-Benachrichtigung auf Ihrem Handy.",   benefit = "Erster Erfolg in 15 Minuten – der Weg vom Gerät zur App.", image = "push-the-button.webp",           kit = ["Push Set", "Radio Dongle"],                    pkg = "STARTER", link_href = "https://stem.hardwario.com/projects/push-the-button/" },
  { cat = "data",       category = "Datenprojekte", title = "Drahtloser Türsensor", text = "Wenn sich eine Tür oder ein Fenster öffnet, landet eine Benachrichtigung auf Ihrem Handy.", benefit = "Einführung in Sensoren und Benachrichtigungen – auf ein echtes Ereignis reagieren.", image = "door-sensor.webp",      kit = ["Core Module", "Sensor Module", "Radio Dongle"], pkg = "STARTER", link_href = "https://stem.hardwario.com/projects/radio-door-sensor" },
  { cat = "automation", category = "Automatisierung",  title = "Drahtloser smarter LED-Streifen", text = "Steuern Sie einen LED-Streifen aus der Ferne – Farben, Helligkeit und Effekte über Node-RED und Blynk.", benefit = "Geräte aus der Ferne steuern und Hardware mit einer App verknüpfen.", image = "smart-led-strip.webp", kit = ["Control Set", "Radio Dongle", "LED-Streifen"],     pkg = "CLASS",   link_href = "https://stem.hardwario.com/projects/radio-smart-led-strip" },
  { cat = "automation", category = "Automatisierung",  title = "Smarter Tischtennistisch",    text = "Wer punktet, drückt einen Taster und ein LED-Streifen zählt den Punktestand für Sie mit.", benefit = "Ein unterhaltsames AG-Projekt – Punktelogik und sofortige Reaktion auf ein Ereignis.", image = "ping-pong-table.jpg", kit = ["Core Module", "Power Module", "LED-Streifen"],     pkg = "CLASS",   link_href = "https://www.hackster.io/jakub-smejkal/hardwario-ping-pong-table-a9d97e" },
  { cat = "data",       category = "Datenprojekte", title = "CO₂ und Klima im Klassenzimmer messen", text = "Ein drahtloser Monitor für CO₂, Temperatur, Luftfeuchtigkeit, Licht und Druck – Daten in Node-RED und auf Ihrem Handy.", benefit = "Mit echten Daten und Dashboards arbeiten – vom Sensor zum Diagramm in einer Unterrichtsstunde.", image = "radio-co2-monitor.webp", kit = ["CO₂ Monitor Kit", "Radio Dongle"], pkg = "CLASS",   link_href = "https://stem.hardwario.com/projects/radio-co2-monitor/" },
]

projects_community_title = "Mehr Inspiration aus der Community"
projects_community_text = "Dutzende echte TOWER-Projekte von anderen Nutzern – von der Wetterstation bis zur Verbrauchsmessung. Inspiration für Abschlussarbeiten, Arbeitsgemeinschaften und eigene Ideen der Schülerinnen und Schüler."
projects_community_link = "Auf Hackster.io durchstöbern"
projects_community_href = "https://www.hackster.io/hardwario/projects"

steps_kicker = "EIN WEG FÜR LEHRKRÄFTE"
steps_title = "Vom Paket zur fertigen Unterrichtsstunde an einem Nachmittag."
steps_text = "Sie müssen kein IoT-Experte sein. Es braucht nur drei Schritte."
steps = [
  { num = "01", title = "EIN SET WÄHLEN", text = "Je nach Größe Ihrer Klasse und dem, was Sie messen möchten. Wir helfen Ihnen, ein Paket zu finden, das zu Ihrem Unterricht und Ihrem Budget passt." },
  { num = "02", title = "DEN MINIKURS DURCHGEHEN", text = "Fertige Kurse im STEM-Portal. Sie führen Sie durch den Aufbau, das Aufspielen der firmware und die erste Datenprobe. Sie müssen keine Materialien selbst vorbereiten." },
  { num = "03", title = "ES IM KLASSENZIMMER UNTERRICHTEN", text = "Die Schülerinnen und Schüler bekommen die Module in die Hand, bauen das Gerät zusammen und sehen die Messung in der App. Die Unterrichtsstunde läuft nach Drehbuch, Sie behalten die Zeit im Blick." },
]

packages_kicker = "PAKETE FÜR SCHULEN"
packages_title = "Wählen Sie nach Klassengröße und Anspruch"
packages = [
  { tier = "STARTER", featured = false, name = "Für eine Pilotstunde", desc = "Ein Set für die Lehrkraft oder eine kleine Gruppe. Probieren Sie TOWER ohne große Investition aus.", features = ["1× Core Module + Battery", "3 Sensor-Tags (T, RH, baro)", "USB dongle + Raspberry Pi Server", "Zugang zum STEM-Portal"], cta = "Pilot vereinbaren" },
  { tier = "CLASS",   featured = true,  name = "Für die ganze Klasse", desc = "Genug Sets für die Gruppenarbeit das ganze Schuljahr über. Die empfohlene Wahl für den regelmäßigen Unterricht.", features = ["8× Core Module + Battery", "16 Sensor-Tags (T, RH, baro)", "USB dongle + Raspberry Pi Server", "Zugang zum STEM-Portal"], cta = "Paket vereinbaren" },
  { tier = "YEAR",    featured = false, name = "Für den ganzen Jahrgang", desc = "Das Maximal-Set für den Unterricht über mehrere Klassen und Fächer hinweg.", features = ["16× Core Module + Battery", "32 Sensor-Tags (T, RH, baro)", "USB dongle + Raspberry Pi Server", "Zugang zum STEM-Portal"], cta = "Set vereinbaren" },
]

faq_kicker = "HÄUFIG GESTELLTE FRAGEN"
faq_title = "Was Lehrkräfte am häufigsten fragen."
faq_text = "Keine Antwort gefunden? Schreiben Sie uns — jede Frage wird von uns gelesen, nicht von einem Formular-Bot."
faq_cta = "Eine Frage stellen"
faqs = [
  { q = "Für welche Schultypen eignet sich TOWER?", a = "Sekundarstufe I, weiterführende Schulen, Gymnasien, technische und berufliche Schulen. Es passt zu Fächern wie Informatik, Physik, Programmierung und projektorientiertem Unterricht. Wenn Sie an einem anderen Format interessiert sind, melden Sie sich bei uns." },
  { q = "Muss die Lehrkraft in C programmieren können?", a = "Nein. Die fertigen Projekte nutzen vorbereitete firmware und Konfiguration. Fortgeschrittenere Kurse bieten auch Programmierung in C und Python, das ist aber keine Voraussetzung." },
  { q = "Für wie viele Schülerinnen und Schüler reicht ein Set?", a = "Idealerweise 2–3 pro Set, damit jeder die Hardware in die Hand nehmen kann. Die Pakete empfehlen wir je nach Klassengröße." },
  { q = "Welche Software brauchen die Schülerinnen und Schüler?", a = "Nur einen Webbrowser und optional eine mobile App. Alles andere läuft auf dem mitgelieferten Raspberry Pi Server." },
  { q = "Ist es sicher für die Schülerinnen und Schüler?", a = "Ja. Alles läuft mit Niederspannung, die Module werden ohne Löten oder heiße Werkzeuge zusammengesteckt. Kein Risiko von Verbrennungen oder Kurzschlüssen." },
  { q = "Was, wenn ich Rat zu einem bestimmten Projekt brauche?", a = "Schreiben Sie uns oder nutzen Sie das Community-Forum. Wir helfen bei der Unterrichtsgestaltung und der technischen Verschaltung." },
  { q = "In welcher Sprache sind die Dokumentation und die Kurse?", a = "Die Dokumentation, die Anleitungen und das SDK sind sowohl auf Tschechisch als auch auf Englisch (CS/EN) verfügbar." },
]

resources_kicker = "RESSOURCEN UND DOKUMENTATION"
resources_title = "Academy baut darauf auf. Sie ersetzt nicht."
resources_text = "Alles Tiefgehende und Aktuelle finden Sie in den Ressourcen von HARDWARIO. Academy zeigt Ihnen den Einstieg."
resources = [
  { tag = "HARDWARIO STEM", title = "STEM-Projekte für Schülerinnen und Schüler", text = "Eine Sammlung fertiger Minikurse und Projekte, die Sie mit Ihrer Klasse Schritt für Schritt durchgehen. Vom ersten Sensor bis zur eigenen Anwendung.", link = "STEM öffnen", link_href = "https://stem.hardwario.com/" },
  { tag = "HACKSTER.IO",    title = "Community-Projekte", text = "Echte Projekte von anderen TOWER-Nutzern. Inspiration für Abschlussarbeiten, Arbeitsgemeinschaften und eigene Ideen der Schülerinnen und Schüler.", link = "Projekte durchstöbern", link_href = "https://www.hackster.io/hardwario/projects" },
  { tag = "HARDWARIO DOCS", title = "TOWER-Dokumentation", text = "Technische Dokumentation aller Module, Codebeispiele, eine Beschreibung des SDK und die Integration mit Home Assistant oder Node-RED.", link = "Dokumentation öffnen", link_href = "https://docs.hardwario.com/tower/" },
]

testimonials_kicker = "REFERENZEN"
testimonials_title = "Was unsere Partner sagen"
testimonials = [
  { quote = "Zum ersten Mal sahen die Schülerinnen und Schüler, wie Daten von einem Sensor den ganzen Weg bis zu einer Anwendung zurücklegen. Der Informatikunterricht ergab plötzlich Sinn.", name = "Jana Nováková", role = "Informatiklehrerin, Gymnázium Brno" },
  { quote = "Kein Löten, kein Improvisieren. Die Module werden zusammengesteckt und innerhalb von zehn Minuten messen wir live die Temperatur im Klassenzimmer.", name = "Petr Svoboda", role = "Physiklehrer, SPŠ Plzeň" },
  { quote = "Die fertigen Minikurse haben uns Stunden an Vorbereitung erspart. Einfach das Drehbuch durchgehen und die Unterrichtsstunde läuft von selbst.", name = "Martina Dvořáková", role = "IKT-Koordinatorin, ZŠ Ostrava" },
  { quote = "Wir haben ein Set für die ganze Klasse gekauft. Die Schülerinnen und Schüler bauen ihre eigenen Projekte und es macht ihnen mehr Spaß als alles zuvor.", name = "Tomáš Černý", role = "Schulleiter, SOŠ Liberec" },
  { quote = "Endlich eine Technologie, die im Klassenzimmer einfach funktioniert. Das Batterie-Set hält ein ganzes Semester pro Set.", name = "Lucie Horáková", role = "Lehrerin, Gymnázium Praha" },
]

contact_kicker = "EIN WEG FÜR LEHRKRÄFTE"
contact_title = "Sie möchten TOWER an Ihrer Schule"
contact_text = "Schreiben Sie uns ein paar Worte dazu, was Sie unterrichten und was Sie mit TOWER ausprobieren möchten. Wir melden uns innerhalb von zwei Werktagen mit einem Set-Vorschlag und einem Beratungstermin bei Ihnen."
contact_phone_note = "Oder rufen Sie uns direkt an"

cta_title = "Bereit, IoT praxisnah zu unterrichten?"
cta_text = "Vereinbaren Sie eine unverbindliche Beratung. Wir empfehlen ein Set, das auf Ihre Klasse und Ihr Fach zugeschnitten ist, und helfen Ihnen, die erste Unterrichtsstunde zum Laufen zu bringen."
cta_primary = "Ich möchte TOWER für meine Schule"
cta_secondary = "Beratung vereinbaren"
cta_phone_note = "Oder rufen Sie uns direkt an:"
+++
