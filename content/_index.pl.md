+++
title = "HARDWARIO Academy — Ucz IoT w praktyce"
template = "index.html"
description = "Modularna bezprzewodowa platforma IoT TOWER do nauczania. Bez lutowania, bez zbędnej teorii."

[extra]

hero_title_1 = "Ucz IoT w praktyce."
hero_title_2 = "Bez lutowania."
hero_title_3 = "Bez zbędnej teorii."
hero_text = "HARDWARIO TOWER to modularny zestaw konstrukcyjny, dzięki któremu uczniowie mierzą prawdziwe dane, programują urządzenia i budują własne projekty IoT – od termometru po inteligentny dom z Home Assistant."
hero_cta_primary = "Chcę TOWER do mojej szkoły"
hero_cta_secondary = "Zobacz, jak to działa"

stats = [
  { value = "30+",   label = "Gotowych projektów na portalu STEM" },
  { value = "10",   label = "HARDWARIO TOWER na rynku" },
  { value = "0×",    label = "Lutowanie – moduły po prostu się zatrzaskują" },
  { value = "CS/EN", label = "Dokumentacja, poradniki i SDK" },
]

features_kicker = "DLACZEGO TOWER NA LEKCJI"
features_title = "IoT, którego nauczysz bez improwizacji."
features = [
  { icon = "teach",      title = "Praktyka zamiast teorii", text = "Uczniowie mierzą temperaturę, wilgotność, CO₂ i ruch oraz pracują z prawdziwymi danymi z klasy, a nie z przykładami z karty pracy. Lekcja wygląda inaczej, gdy liczba pochodzi prosto z czujnika." },
  { icon = "connection", title = "Połączenie z aplikacjami", text = "TOWER wysyła dane własnym radiem do USB dongle, a dalej przez MQTT do Home Assistant lub Node-RED. Uczniowie widzą całą drogę od czujnika do dashboardu." },
  { icon = "shield",     title = "Bezpieczne eksperymenty", text = "Wszystko działa na niskim napięciu z baterii AAA, żadnych 230 V w klasie ani improwizacji z zasilaczami. Eksperymenty przebiegają więc bez zbędnego ryzyka." },
  { icon = "box",        title = "Bez lutowania, bez strat", text = "Moduły po prostu się zatrzaskują, żadnej lutownicy ani zwarć. Dzięki poborowi poniżej 5 µA w trybie uśpienia baterie AAA wystarczają na cały semestr lekcji w klasie." },
]

about_kicker = "CZYM JEST TOWER?"
about_title = "Modularna bezprzewodowa platforma IoT."
about_text = "Czeski modularny zestaw IoT od HARDWARIO. Na Core Module zatrzaśniesz dowolną kombinację modułów i zbudujesz dokładnie takie urządzenie, jakiego potrzebujesz na lekcję."
about_modules = [
  { name = "Core Module",   text = "Mózg zestawu. ARM Cortex-M0+, wbudowany termometr (TMP112) i akcelerometr (LIS2DH12), radio 868 MHz." },
  { name = "Battery Module", text = "Zasilanie z czterech baterii AAA. Przy zwykłym pomiarze zestaw wystarcza na cały semestr." },
  { name = "CO₂ Module",     text = "Czujnik NDIR LP8, mierzy od 0 do 10 000 ppm. Idealny do pomiaru jakości powietrza w klasie." },
  { name = "Climate / Humidity / Barometer Tag", text = "Małe moduły czujnikowe do pomiaru temperatury, wilgotności (SHT20) i ciśnienia. Komunikują się przez I²C." },
  { name = "Radio Dongle",   text = "USB dongle, który wysyła dane z zestawów prosto do komputera lub Home Assistant." },
]
about_cta_primary = "Otwórz dokumentację TOWER"
about_cta_secondary = "Przeglądaj projekty STEM"
about_slides = [
  { image = "carousel-clime",    name = "Clime Set",    desc = "Zestaw do monitorowania temperatury i wilgotności z połączeniem bezprzewodowym" },
  { image = "carousel-display",  name = "Display Set",  desc = "Wyświetlanie wartości w czasie rzeczywistym na ekranie LCD z bezprzewodowymi czujnikami" },
  { image = "carousel-push",     name = "Push Set",     desc = "Zestaw z inteligentnym przyciskiem do wyzwalania akcji i powiadomień" },
  { image = "carousel-motion",   name = "Motion Set",   desc = "Zestaw do wykrywania ruchu z czujnikiem PIR i bezprzewodowymi alertami" },
  { image = "carousel-clime-xl", name = "Clime XL Set", desc = "Monitorowanie jakości powietrza z czujnikiem CO2 i śledzeniem klimatu" },
  { image = "carousel-control",  name = "Control Set",  desc = "Zestaw z przekaźnikiem do automatyki domowej i przemysłowej" },
]

scenarios_kicker = "SCENARIUSZE LEKCJI"
scenarios_title = "Czego można uczyć z TOWER w szkole"
scenarios_text = "Konkretne zastosowania na lekcje, pracę projektową i kółka — od pomiarów przez dane po automatyzację."
scenarios_cta = "Przeglądaj projekty TOWER"
scenarios_card_cta = "Projekt na STEM"
scenarios = [
  { icon = "thermo",     title = "Temperatura i klimat",           text = "Mierz temperaturę, wilgotność i ciśnienie oraz obserwuj, jak zmieniają się w czasie.", link_href = "https://stem.hardwario.com/projects/iguana-terrarium-monitor/" },
  { icon = "co2",        title = "Jakość powietrza (CO₂)",         text = "Śledź poziom CO₂ w klasie i powiąż go z wentylacją.", link_href = "https://stem.hardwario.com/projects/radio-co2-monitor/" },
  { icon = "home",       title = "Inteligentny dom i Home Assistant", text = "Wysyłaj dane do Home Assistant i zbuduj inteligentną klasę.", link_href = "https://stem.hardwario.com/projects/radio-smart-led-strip/" },
  { icon = "weather",    title = "Meteorologia",                   text = "Zbuduj szkolną stację meteorologiczną i zbieraj dane o pogodzie na zewnątrz.", link_href = "https://stem.hardwario.com/projects/" },
  { icon = "data",       title = "Praca z danymi (logowanie)",     text = "Zapisuj wartości w czasie i wizualizuj je na wykresach oraz dashboardach.", link_href = "https://stem.hardwario.com/projects/kennel-temperature-monitor/" },
  { icon = "automation", title = "Automatyzacja",                  text = "Reaguj na zdarzenia i przełączaj urządzenia przez MQTT i Node-RED.", link_href = "https://stem.hardwario.com/projects/appliance-control/" },
]

courses_kicker = "KURSY"
courses_title = "Twórz internet rzeczy"
courses_link = "Wszystkie kursy"

featured_course = { badge = "FLAGOWY PROJEKT DLA ZAAWANSOWANYCH", title = "Inteligentna klasa z Home Assistant", text = "Lekcje informatyki nie muszą kończyć się na pracy z komputerem. Pozwól uczniom zbudować inteligentną klasę z HARDWARIO i Home Assistant — od czujników po żywy dashboard z prawdziwymi danymi.", tags = ["Home Assistant", "TOWER", "IoT", "HARDWARIO PLAYGROUND"], dash_title = "TOWER (Klasa 144)", note = "Ten kurs jest odpowiedni dla: techników, liceów z profilem ICT, wydziałów technicznych i pasjonatów IoT", note_link = "Zapisz się na kurs" }

featured_metrics = [
  { label = "TEMPERATURA", unit = "°C",  color = "orange" },
  { label = "WILGOTNOŚĆ",  unit = "%",   color = "cyan" },
  { label = "CO₂",         unit = "ppm", color = "green" },
  { label = "CIŚNIENIE",   unit = "hPa", color = "purple" },
]
featured_modes = [
  { label = "Wentylacja", active = true,  values = ["24,2", "48", "602", "1000"] },
  { label = "Ogrzewanie", active = false, values = ["26,5", "39", "655", "1001"] },
  { label = "Światło",    active = false, values = ["23,1", "46", "588", "999"] },
]

courses = [
  { badge = "POCZĄTKUJĄCY", level = "beginner", title = "Własny bezprzewodowy termometr", text = "Zbuduj termometr na Core Module, zaprogramuj wysyłanie wartości i wyświetl je na telefonie." },
  { badge = "POCZĄTKUJĄCY", level = "beginner", title = "Pomiar jakości powietrza w klasie", text = "Użyj CO₂ Module i obserwuj, jak zmienia się stężenie podczas lekcji. Zbierz dane przez tydzień i je przeanalizuj." },
  { badge = "ZAAWANSOWANY",  level = "advanced", title = "Kamera bezpieczeństwa z wykrywaniem ruchu", text = "Skonfiguruj czujnik ruchu i miej kontrolę nad aktywnością w monitorowanym obszarze. Sparuj urządzenie z bezpłatną aplikacją Blynk i odbieraj alerty." },
  { badge = "ZAAWANSOWANY",  level = "advanced", title = "Inteligentny system nawadniania wodą", text = "Automatyczne podlewanie w zależności od wilgotności gleby. Uczniowie łączą czujnik, pompę i logikę przełączania w działającą całość." },
  { badge = "POCZĄTKUJĄCY", level = "beginner", title = "Stacja meteorologiczna w szkolnym ogrodzie", text = "Temperatura, wilgotność i ciśnienie w jednym zestawie, zasilanie z baterii AAA, dane wysyłane przez radio do sieci szkolnej." },
]
course_link = "Materiały"

projects_kicker = "PROJEKTY TOWER"
projects_title = "Inspiracja, czego uczyć z TOWER"
projects_text = "Szybka inspiracja na lekcję, pracę projektową lub kółko — nie długi katalog. Przy każdym projekcie od razu widzisz, jaki zestaw jest minimalnie potrzebny."
projects_link = "Wszystkie projekty na STEM"
projects_link_href = "https://stem.hardwario.com/projects/"
projects_kit_label = "Min. zestaw"
projects_pkg_label = "Zalecane"
projects_benefit_label = "Wartość dydaktyczna"
projects_cta = "Otwórz poradnik"

featured_project = { cat = "advanced", category = "Zaawansowane", title = "Bezprzewodowa stacja meteorologiczna", text = "Mierz wiatr, opady i temperaturę na zewnątrz oraz wysyłaj dane bezprzewodowo na 868 MHz – od czujnika po własny dashboard.", benefit = "Zbieranie prawdziwych danych pogodowych i praca z wykresami – łączy fizykę, informatykę i pracę projektową.", image = "weather-station.jpg", kit = ["Core Module", "Sensor Module", "Radio Dongle"], pkg = "STARTER", link_href = "https://www.hackster.io/158890/wireless-outdoor-weather-station-using-hardwario-core-module-76079a" }

projects = [
  { cat = "beginner",   category = "Dla początkujących",    title = "Push the Button",      text = "Naciśnij przycisk, a powiadomienie push natychmiast pojawi się na telefonie.",   benefit = "Pierwszy sukces w 15 minut – droga od urządzenia do aplikacji.", image = "push-the-button.webp",           kit = ["Push Set", "Radio Dongle"],                    pkg = "STARTER", link_href = "https://stem.hardwario.com/projects/push-the-button/" },
  { cat = "data",       category = "Projekty danych", title = "Bezprzewodowy czujnik drzwi", text = "Gdy otworzą się drzwi lub okno, na telefon trafia powiadomienie.", benefit = "Wprowadzenie do czujników i powiadomień – reakcja na prawdziwe zdarzenie.", image = "door-sensor.webp",      kit = ["Core Module", "Sensor Module", "Radio Dongle"], pkg = "STARTER", link_href = "https://stem.hardwario.com/projects/radio-door-sensor" },
  { cat = "automation", category = "Automatyzacja",  title = "Bezprzewodowy inteligentny pasek LED", text = "Steruj paskiem LED zdalnie – kolory, jasność i efekty przez Node-RED i Blynk.", benefit = "Zdalne sterowanie urządzeniami i łączenie sprzętu z aplikacją.", image = "smart-led-strip.webp", kit = ["Control Set", "Radio Dongle", "pasek LED"],     pkg = "CLASS",   link_href = "https://stem.hardwario.com/projects/radio-smart-led-strip" },
  { cat = "automation", category = "Automatyzacja",  title = "Inteligentny stół do ping-ponga",    text = "Kto zdobywa punkt, naciska przycisk, a pasek LED liczy wynik za ciebie.", benefit = "Zabawny projekt do kółka – logika punktacji i natychmiastowa reakcja na zdarzenie.", image = "ping-pong-table.jpg", kit = ["Core Module", "Power Module", "pasek LED"],     pkg = "CLASS",   link_href = "https://www.hackster.io/jakub-smejkal/hardwario-ping-pong-table-a9d97e" },
  { cat = "data",       category = "Projekty danych", title = "Pomiar CO₂ i klimatu w klasie", text = "Bezprzewodowy monitor CO₂, temperatury, wilgotności, światła i ciśnienia – dane w Node-RED i na telefonie.", benefit = "Praca z prawdziwymi danymi i dashboardami – od czujnika do wykresu na jednej lekcji.", image = "radio-co2-monitor.webp", kit = ["CO₂ Monitor Kit", "Radio Dongle"], pkg = "CLASS",   link_href = "https://stem.hardwario.com/projects/radio-co2-monitor/" },
]

projects_community_title = "Więcej inspiracji od społeczności"
projects_community_text = "Dziesiątki prawdziwych projektów TOWER od innych użytkowników – od stacji meteorologicznej po pomiar zużycia energii. Inspiracja na prace dyplomowe, kółka i własne pomysły uczniów."
projects_community_link = "Przeglądaj na Hackster.io"
projects_community_href = "https://www.hackster.io/hardwario/projects"

steps_kicker = "ŚCIEŻKA DLA NAUCZYCIELI"
steps_title = "Od pakietu do gotowej lekcji w jedno popołudnie."
steps_text = "Nie musisz być ekspertem od IoT. Wystarczą trzy kroki."
steps = [
  { num = "01", title = "WYBIERZ ZESTAW", text = "W zależności od wielkości klasy i tego, co chcesz mierzyć. Pomożemy znaleźć pakiet, który pasuje do twojej lekcji i budżetu." },
  { num = "02", title = "PRZEJDŹ MINI KURS", text = "Gotowe kursy na portalu STEM. Przeprowadzą cię przez montaż, wgrywanie firmware i pierwszą próbkę danych. Nie musisz sam przygotowywać materiałów." },
  { num = "03", title = "NAUCZAJ W KLASIE", text = "Uczniowie dostają moduły do ręki, składają urządzenie i widzą pomiar w aplikacji. Lekcja przebiega według scenariusza, ty pilnujesz czasu." },
]

packages_kicker = "PAKIETY DLA SZKÓŁ"
packages_title = "Wybierz według wielkości klasy i ambicji"
packages = [
  { tier = "STARTER", featured = false, name = "Na lekcję pilotażową", desc = "Jeden zestaw dla nauczyciela lub małej grupy. Wypróbuj TOWER bez dużej inwestycji.", features = ["1× Core Module + Battery", "3 tagi czujnikowe (T, RH, baro)", "USB dongle + serwer Raspberry Pi", "Dostęp do portalu STEM"], cta = "Umów pilotaż" },
  { tier = "CLASS",   featured = true,  name = "Na całą klasę", desc = "Wystarczająco zestawów do pracy w grupach przez cały rok szkolny. Zalecany wybór do regularnego nauczania.", features = ["8× Core Module + Battery", "16 tagów czujnikowych (T, RH, baro)", "USB dongle + serwer Raspberry Pi", "Dostęp do portalu STEM"], cta = "Umów pakiet" },
  { tier = "YEAR",    featured = false, name = "Na cały rocznik", desc = "Maksymalny zestaw do nauczania w wielu klasach i przedmiotach.", features = ["16× Core Module + Battery", "32 tagi czujnikowe (T, RH, baro)", "USB dongle + serwer Raspberry Pi", "Dostęp do portalu STEM"], cta = "Umów zestaw" },
]

faq_kicker = "NAJCZĘŚCIEJ ZADAWANE PYTANIA"
faq_title = "O co najczęściej pytają nauczyciele."
faq_text = "Nie znalazłeś odpowiedzi? Napisz do nas — każde pytanie czytamy my, a nie bot formularzowy."
faq_cta = "Zadaj pytanie"
faqs = [
  { q = "Dla jakich typów szkół TOWER jest odpowiedni?", a = "Starsze klasy szkół podstawowych, szkoły średnie, licea, technika i szkoły zawodowe. Pasuje do przedmiotów takich jak informatyka, fizyka, programowanie i nauczanie projektowe. Jeśli interesuje cię inny format, skontaktuj się z nami." },
  { q = "Czy nauczyciel musi umieć programować w C?", a = "Nie. Gotowe projekty korzystają z przygotowanego firmware i konfiguracji. Bardziej zaawansowane kursy oferują też programowanie w C i Pythonie, ale nie jest to wymóg." },
  { q = "Ilu uczniów obsłuży jeden zestaw?", a = "Idealnie 2–3 uczniów na zestaw, aby każdy mógł dotknąć sprzętu. Pakiety dobieramy w zależności od wielkości klasy." },
  { q = "Jakiego oprogramowania potrzebują uczniowie?", a = "Wystarczy przeglądarka internetowa i opcjonalnie aplikacja mobilna. Cała reszta działa na dostarczonym serwerze Raspberry Pi." },
  { q = "Czy to bezpieczne dla uczniów?", a = "Tak. Wszystko działa na niskim napięciu, moduły zatrzaskują się bez lutowania i gorących narzędzi. Brak ryzyka poparzeń czy zwarć." },
  { q = "Co jeśli potrzebuję porady przy konkretnym projekcie?", a = "Napisz do nas lub skorzystaj z forum społeczności. Pomożemy zaprojektować lekcję i przy technicznym podłączeniu." },
  { q = "W jakim języku są dokumentacja i kursy?", a = "Dokumentacja, poradniki i SDK są dostępne zarówno po czesku, jak i po angielsku (CS/EN)." },
]

resources_kicker = "MATERIAŁY I DOKUMENTACJA"
resources_title = "Academy uzupełnia. Nie zastępuje."
resources_text = "Wszystko, co dogłębne i aktualne, znajdziesz w materiałach od HARDWARIO. Academy pokazuje ci, jak w nie wejść."
resources = [
  { tag = "HARDWARIO STEM", title = "Projekty STEM dla uczniów", text = "Zbiór gotowych mini-kursów i projektów, przez które przechodzisz z klasą krok po kroku. Od pierwszego czujnika po własną aplikację.", link = "Otwórz STEM", link_href = "https://stem.hardwario.com/" },
  { tag = "HACKSTER.IO",    title = "Projekty społeczności", text = "Prawdziwe projekty od innych użytkowników TOWER. Inspiracja na prace dyplomowe, kółka i własne pomysły uczniów.", link = "Przeglądaj projekty", link_href = "https://www.hackster.io/hardwario/projects" },
  { tag = "HARDWARIO DOCS", title = "Dokumentacja TOWER", text = "Dokumentacja techniczna wszystkich modułów, przykłady kodu, opis SDK oraz integracja z Home Assistant lub Node-RED.", link = "Otwórz dokumentację", link_href = "https://docs.hardwario.com/tower/" },
]

testimonials_kicker = "REFERENCJE"
testimonials_title = "Co mówią nasi partnerzy"
testimonials = [
  { quote = "Po raz pierwszy uczniowie zobaczyli, jak dane z czujnika docierają aż do aplikacji. Lekcja informatyki nagle nabrała sensu.", name = "Jana Nováková", role = "nauczycielka informatyki, Gymnázium Brno" },
  { quote = "Żadnego lutowania, żadnej improwizacji. Moduły zatrzaskują się i w ciągu dziesięciu minut mierzymy temperaturę w klasie na żywo.", name = "Petr Svoboda", role = "nauczyciel fizyki, SPŠ Plzeň" },
  { quote = "Gotowe mini-kursy zaoszczędziły nam godziny przygotowań. Wystarczy przejść scenariusz i lekcja toczy się sama.", name = "Martina Dvořáková", role = "koordynatorka ICT, ZŠ Ostrava" },
  { quote = "Kupiliśmy zestaw na całą klasę. Uczniowie budują własne projekty i bawią się przy tym lepiej niż przy czymkolwiek wcześniej.", name = "Tomáš Černý", role = "dyrektor, SOŠ Liberec" },
  { quote = "Wreszcie technologia, która w klasie po prostu działa. Zestaw bateryjny wystarcza na cały semestr na jeden zestaw.", name = "Lucie Horáková", role = "nauczycielka, Gymnázium Praha" },
]

contact_kicker = "ŚCIEŻKA DLA NAUCZYCIELI"
contact_title = "Chcesz TOWER w swojej szkole"
contact_text = "Napisz nam kilka słów o tym, czego uczysz i co chciałbyś wypróbować z TOWER. Odezwiemy się w ciągu dwóch dni roboczych z propozycją zestawu i terminem konsultacji."
contact_phone_note = "Albo zadzwoń bezpośrednio"

cta_title = "Gotowy, by uczyć IoT w praktyce?"
cta_text = "Umów niezobowiązującą konsultację. Polecimy zestaw dopasowany do twojej klasy i przedmiotu oraz pomożemy uruchomić pierwszą lekcję."
cta_primary = "Chcę TOWER do mojej szkoły"
cta_secondary = "Umów konsultację"
cta_phone_note = "Albo zadzwoń bezpośrednio:"
+++
