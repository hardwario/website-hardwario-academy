+++
title = "HARDWARIO Academy — Teach IoT hands-on"
template = "index.html"
description = "Modular wireless IoT platform TOWER for teaching. No soldering, no extra theory."

[extra]

hero_title_1 = "Teach IoT hands-on."
hero_title_2 = "No soldering."
hero_title_3 = "No extra theory."
hero_text = "HARDWARIO TOWER is a modular building kit that lets students measure real data, program devices and build their own IoT projects – from a thermometer to a smart home with Home Assistant."
hero_cta_primary = "I want TOWER for my school"
hero_cta_secondary = "TOWER product page"

stats = [
  { value = "15+",   label = "Ready-made projects on the STEM portal" },
  { value = "10",   label = "HARDWARIO TOWER on the market" },
  { value = "0×",    label = "Soldering – modules just click together" },
  { value = "CS/EN", label = "Documentation, guides and SDK" },
]

features_kicker = "WHY TOWER IN THE CLASSROOM"
features_title = "IoT you can teach without improvising."
features = [
  { icon = "teach",      title = "Hands-on teaching instead of theory", text = "Students measure temperature, humidity, CO₂ and motion and work with real data from the classroom, not with examples from a worksheet. A lesson looks different when the number comes straight from a sensor." },
  { icon = "connection", title = "Connection with applications", text = "TOWER sends data over its own radio to a USB dongle and on via MQTT into Home Assistant or Node-RED. Students see the whole journey from sensor to dashboard." },
  { icon = "shield",     title = "Safe experiments", text = "Everything runs on low voltage from AAA batteries, no 230 V in the classroom and no improvising with power supplies. Experiments therefore take place without unnecessary risk." },
  { icon = "box",        title = "No soldering, no losses", text = "Modules simply click together, no soldering iron and no short circuits. Thanks to consumption under 5 µA in sleep, AAA batteries last a whole semester of lessons in the classroom." },
]

about_kicker = "WHAT IS TOWER?"
about_title = "A modular wireless IoT platform."
about_text = "A Czech modular IoT kit from HARDWARIO. Snap any combination of modules onto the Core Module and build exactly the device you need for your lesson."
about_modules = [
  { name = "Core Module",   text = "The brain of the assembly. ARM Cortex-M0+, built-in thermometer (TMP112) and accelerometer (LIS2DH12), 868 MHz radio." },
  { name = "Battery Module", text = "Powered by four AAA batteries. With normal measuring, the set lasts a whole semester." },
  { name = "CO₂ Module",     text = "NDIR sensor LP8, measures 0 to 10,000 ppm. Ideal for measuring air quality in the classroom." },
  { name = "Climate / Humidity / Barometer Tag", text = "Small sensor modules for temperature, humidity (SHT20) and pressure. They communicate over I²C." },
  { name = "Radio Dongle",   text = "A USB dongle that sends data from the assemblies straight to a computer or Home Assistant." },
]
about_cta_primary = "Open TOWER documentation"
about_cta_secondary = "Browse STEM projects"
about_slides = [
  { image = "carousel-clime",    name = "Clime Set",    desc = "A set for monitoring temperature and humidity with a wireless connection" },
  { image = "carousel-display",  name = "Display Set",  desc = "Real-time display of values with an LCD screen and wireless sensors" },
  { image = "carousel-push",     name = "Push Set",     desc = "A set with a smart button for triggering actions and notifications" },
  { image = "carousel-motion",   name = "Motion Set",   desc = "A set for motion detection with a PIR sensor and wireless alerts" },
  { image = "carousel-clime-xl", name = "Clime XL Set", desc = "Air quality monitoring with a CO2 sensor and climate tracking" },
  { image = "carousel-control",  name = "Control Set",  desc = "A set with a relay for home and industrial automation" },
]

scenarios_kicker = "TEACHING SCENARIOS"
scenarios_title = "What you can teach with TOWER at school"
scenarios_text = "Concrete uses for lessons, project work and clubs — from measuring through data to automation."
scenarios_cta = "Browse TOWER projects"
scenarios_card_cta = "Project on STEM"
scenarios = [
  { icon = "thermo",     title = "Temperature & climate",          text = "Measure temperature, humidity and pressure and watch them change over time.", link_href = "https://stem.hardwario.com/projects/iguana-terrarium-monitor/" },
  { icon = "co2",        title = "Air quality (CO₂)",              text = "Track CO₂ levels in the classroom and link them to ventilation.", link_href = "https://stem.hardwario.com/projects/radio-co2-monitor/" },
  { icon = "home",       title = "Smart home & Home Assistant",    text = "Send data into Home Assistant and build a smart classroom.", link_href = "https://stem.hardwario.com/projects/radio-smart-led-strip/" },
  { icon = "weather",    title = "Meteorology",                    text = "Build a school weather station and collect outdoor weather data.", link_href = "https://stem.hardwario.com/projects/" },
  { icon = "data",       title = "Working with data (logging)",    text = "Store values over time and visualise them in charts and dashboards.", link_href = "https://stem.hardwario.com/projects/kennel-temperature-monitor/" },
  { icon = "automation", title = "Automation",                     text = "React to events and switch devices via MQTT and Node-RED.", link_href = "https://stem.hardwario.com/projects/appliance-control/" },
]

courses_kicker = "COURSES"
courses_title = "Build the Internet of Things"
courses_link = "All courses"

featured_course = { badge = "FLAGSHIP PROJECT FOR THE EXPERIENCED", title = "Smart classroom with Home Assistant", text = "Computer science lessons don't have to end at working with a computer. Let students build a smart classroom with HARDWARIO and Home Assistant — from sensors to a live dashboard with real data.", tags = ["Home Assistant", "TOWER", "IoT", "HARDWARIO PLAYGROUND"], dash_title = "TOWER (Classroom 144)", note = "This course is suitable for: technical secondary schools, grammar schools with ICT, technical faculties and IoT enthusiasts", note_link = "Sign up for the course" }

featured_metrics = [
  { label = "TEMPERATURE", unit = "°C",  color = "orange" },
  { label = "HUMIDITY",    unit = "%",   color = "cyan" },
  { label = "CO₂",         unit = "ppm", color = "green" },
  { label = "PRESSURE",    unit = "hPa", color = "purple" },
]
featured_modes = [
  { label = "Ventilation", active = true,  values = ["24,2", "48", "602", "1000"] },
  { label = "Heating",     active = false, values = ["26,5", "39", "655", "1001"] },
  { label = "Light",       active = false, values = ["23,1", "46", "588", "999"] },
]

courses = [
  { badge = "BEGINNER", level = "beginner", title = "Your own wireless thermometer", text = "Build a thermometer on the Core Module, program it to send values and display them on your phone." },
  { badge = "BEGINNER", level = "beginner", title = "Measuring air quality in the classroom", text = "Use the CO₂ Module and watch how the concentration changes during lessons. Collect the data over a week and evaluate it." },
  { badge = "ADVANCED",  level = "advanced", title = "Security camera with motion detection", text = "Configure a motion sensor and keep an overview of activity in the monitored area. Pair the device with the free Blynk app and receive alerts." },
  { badge = "ADVANCED",  level = "advanced", title = "Smart water irrigation system", text = "Automatic watering based on soil moisture. Students connect the sensor, the pump and the switching logic into a working whole." },
  { badge = "BEGINNER", level = "beginner", title = "Weather station in the school garden", text = "Temperature, humidity and pressure in one assembly, powered by AAA batteries, data sent over radio to the school network." },
]
course_link = "Materials"

projects_kicker = "TOWER PROJECTS"
projects_title = "Inspiration for what to teach with TOWER"
projects_text = "Quick inspiration for a lesson, project work or a club — not a long catalogue. Every project shows the minimum kit you need at a glance."
projects_link = "All projects on STEM"
projects_link_href = "https://stem.hardwario.com/projects/"
projects_kit_label = "Min. kit"
projects_pkg_label = "Recommended"
projects_benefit_label = "Teaching value"
projects_cta = "Open the guide"

featured_project = { cat = "advanced", category = "Advanced", title = "Wireless weather station", text = "Measure wind, rainfall and temperature outdoors and send the data wirelessly over 868 MHz – from sensor to your own dashboard.", benefit = "Collecting real weather data and working with charts – bridges physics, IT and project work.", image = "weather-station.jpg", kit = ["Core Module", "Sensor Module", "Radio Dongle"], pkg = "STARTER", link_href = "https://www.hackster.io/158890/wireless-outdoor-weather-station-using-hardwario-core-module-76079a" }

projects = [
  { cat = "beginner",   category = "Beginner",    title = "Push the Button",      text = "Press a button and a push notification instantly lands on your phone.",   benefit = "First success in 15 minutes – the path from device to app.", image = "push-the-button.webp",           kit = ["Push Set", "Radio Dongle"],                    pkg = "STARTER", link_href = "https://stem.hardwario.com/projects/push-the-button/" },
  { cat = "data",       category = "Data projects", title = "Wireless door sensor", text = "When a door or window opens, a notification lands on your phone.", benefit = "Intro to sensors and notifications – reacting to a real event.", image = "door-sensor.webp",      kit = ["Core Module", "Sensor Module", "Radio Dongle"], pkg = "STARTER", link_href = "https://stem.hardwario.com/projects/radio-door-sensor" },
  { cat = "automation", category = "Automation",  title = "Wireless smart LED strip", text = "Control an LED strip remotely – colours, brightness and effects via Node-RED and Blynk.", benefit = "Controlling devices remotely and linking hardware to an app.", image = "smart-led-strip.webp", kit = ["Control Set", "Radio Dongle", "LED strip"],     pkg = "CLASS",   link_href = "https://stem.hardwario.com/projects/radio-smart-led-strip" },
  { cat = "automation", category = "Automation",  title = "Smart ping-pong table",    text = "Whoever scores presses a button and an LED strip keeps the score for you.", benefit = "A fun club project – score logic and instant reaction to an event.", image = "ping-pong-table.jpg", kit = ["Core Module", "Power Module", "LED strip"],     pkg = "CLASS",   link_href = "https://www.hackster.io/jakub-smejkal/hardwario-ping-pong-table-a9d97e" },
  { cat = "data",       category = "Data projects", title = "Measuring CO₂ and climate in the classroom", text = "A wireless monitor of CO₂, temperature, humidity, light and pressure – data in Node-RED and on your phone.", benefit = "Working with real data and dashboards – from sensor to chart in one lesson.", image = "radio-co2-monitor.webp", kit = ["CO₂ Monitor Kit", "Radio Dongle"], pkg = "CLASS",   link_href = "https://stem.hardwario.com/projects/radio-co2-monitor/" },
]

projects_community_title = "More inspiration from the community"
projects_community_text = "Dozens of real TOWER projects from other users – from a weather station to power metering. Inspiration for final theses, clubs and students’ own ideas."
projects_community_link = "Browse on Hackster.io"
projects_community_href = "https://www.hackster.io/hardwario/projects"

steps_kicker = "A PATH FOR TEACHERS"
steps_title = "From package to a finished lesson in an afternoon."
steps_text = "You don't have to be an IoT expert. All it takes is three steps."
steps = [
  { num = "01", title = "CHOOSE A SET", text = "Based on the size of your class and what you want to measure. We'll help you find a package that fits your lesson and your budget." },
  { num = "02", title = "GO THROUGH THE MINI COURSE", text = "Ready-made courses on the STEM portal. They walk you through assembly, uploading firmware and the first sample of data. No need to prepare materials yourself." },
  { num = "03", title = "TEACH IT IN THE CLASSROOM", text = "Students get the modules in hand, assemble the device and see the measurement in the app. The lesson runs to the script, you keep an eye on the time." },
]

packages_kicker = "PACKAGES FOR SCHOOLS"
packages_title = "Choose by class size and ambition"
packages = [
  { tier = "STARTER", featured = false, name = "For a pilot lesson", desc = "One set for the teacher or a small group. Try out TOWER without a big investment.", features = ["1× Core Module + Battery", "3 sensor tags (T, RH, baro)", "USB dongle + Raspberry Pi server", "Access to the STEM portal"], cta = "Arrange a pilot" },
  { tier = "CLASS",   featured = true,  name = "For the whole class", desc = "Enough sets for group work throughout the school year. The recommended choice for regular teaching.", features = ["8× Core Module + Battery", "16 sensor tags (T, RH, baro)", "USB dongle + Raspberry Pi server", "Access to the STEM portal"], cta = "Arrange a package" },
  { tier = "YEAR",    featured = false, name = "For the whole year group", desc = "The maximum set for teaching across multiple classes and subjects.", features = ["16× Core Module + Battery", "32 sensor tags (T, RH, baro)", "USB dongle + Raspberry Pi server", "Access to the STEM portal"], cta = "Arrange a set" },
]

faq_kicker = "FREQUENTLY ASKED QUESTIONS"
faq_title = "What teachers ask most often."
faq_text = "Didn't find your answer? Write to us — every question is read by us, not by a form bot."
faq_cta = "Ask a question"
faqs = [
  { q = "What types of schools is TOWER suitable for?", a = "Upper primary schools, secondary schools, grammar schools, technical and vocational colleges. It fits subjects such as computer science, physics, programming and project-based teaching. If you're interested in a different format, get in touch." },
  { q = "Does the teacher need to know how to program in C?", a = "No. The ready-made projects use prepared firmware and configuration. More advanced courses also offer programming in C and Python, but it isn't a requirement." },
  { q = "How many students does one set cover?", a = "Ideally 2–3 students per set, so everyone gets to handle the hardware. We recommend packages based on class size." },
  { q = "What software do students need?", a = "Just a web browser and optionally a mobile app. Everything else runs on the supplied Raspberry Pi server." },
  { q = "Is it safe for students?", a = "Yes. Everything runs on low voltage, the modules click together without soldering or hot tools. No risk of burns or short circuits." },
  { q = "What if I need advice on a specific project?", a = "Write to us or use the community forum. We'll help with lesson design and the technical wiring." },
  { q = "What language are the documentation and courses in?", a = "The documentation, guides and SDK are available in both Czech and English (CS/EN)." },
]

resources_kicker = "RESOURCES AND DOCUMENTATION"
resources_title = "Academy builds on. It doesn't replace."
resources_text = "Everything in-depth and up to date is in the resources from HARDWARIO. Academy shows you the way in."
resources = [
  { tag = "HARDWARIO STEM", title = "STEM projects for students", text = "A collection of ready-made mini-courses and projects you go through with your class step by step. From the first sensor to your own application.", link = "Open STEM", link_href = "https://stem.hardwario.com/" },
  { tag = "HACKSTER.IO",    title = "Community projects", text = "Real projects from other TOWER users. Inspiration for final theses, clubs and students' own ideas.", link = "Browse projects", link_href = "https://www.hackster.io/hardwario/projects" },
  { tag = "HARDWARIO DOCS", title = "TOWER documentation", text = "Technical documentation of all modules, code examples, a description of the SDK and integration with Home Assistant or Node-RED.", link = "Open documentation", link_href = "https://docs.hardwario.com/tower/" },
]

testimonials_kicker = "REFERENCES"
testimonials_title = "What our partners say"
testimonials = [
  { quote = "For the first time, students saw how data from a sensor travels all the way to an application. The computer science lesson suddenly made sense.", name = "Jana Nováková", role = "Computer Science teacher, Gymnázium Brno" },
  { quote = "No soldering, no improvising. The modules click together and within ten minutes we're measuring the classroom temperature live.", name = "Petr Svoboda", role = "Physics teacher, SPŠ Plzeň" },
  { quote = "The ready-made mini-courses saved us hours of preparation. Just go through the script and the lesson runs itself.", name = "Martina Dvořáková", role = "ICT coordinator, ZŠ Ostrava" },
  { quote = "We bought a set for the whole class. Students build their own projects and enjoy it more than anything before.", name = "Tomáš Černý", role = "headmaster, SOŠ Liberec" },
  { quote = "Finally a technology that simply works in the classroom. The battery set lasts a whole semester on a single set.", name = "Lucie Horáková", role = "teacher, Gymnázium Praha" },
]

contact_kicker = "A PATH FOR TEACHERS"
contact_title = "Want TOWER at your school"
contact_text = "Write us a few words about what you teach and what you'd like to try with TOWER. We'll get back to you within two business days with a proposed set and a consultation date."
contact_phone_note = "Or call us directly"

cta_title = "Ready to teach IoT hands-on?"
cta_text = "Arrange a no-obligation consultation. We'll recommend a set tailored to your class and subject and help you get the first lesson running."
cta_primary = "I want TOWER for my school"
cta_secondary = "Arrange a consultation"
cta_phone_note = "Or call us directly:"
+++
