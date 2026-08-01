---
title: JavaScript-Websites mit Selenium in Python scrapen
description: "Warum BeautifulSoup bei JavaScript-Seiten nicht reicht und wie Sie mit Selenium einen echten Browser steuern — mit echtem Beispiel und CSV-Export."
pubDate: 2026-08-02
tags: [Python, Web-Scraping]
---

Im [letzten Tutorial](/de/tutorials/web-scraping-python-beautifulsoup/) haben wir statisches HTML mit requests und BeautifulSoup gescrapt. Viele moderne Seiten — Shops, Dashboards, teilweise auch die Seiten, die mein [Preisüberwachungs-Bot](/de/portfolio/telegram-price-bot/) beobachtet — bauen ihren Inhalt aber erst nach dem Laden per JavaScript auf. Genau hier kommt Selenium ins Spiel: Es liest nicht rohes HTML, sondern steuert einen echten Browser.

## Warum BeautifulSoup hier versagt

Die Übungsseite [quotes.toscrape.com](https://quotes.toscrape.com) hat eine `/js/`-Version, die dieselben Zitate per JavaScript rendert. Laden Sie sie mit `requests`, bekommen Sie nur eine leere Hülle:

```python
import requests
from bs4 import BeautifulSoup

response = requests.get("https://quotes.toscrape.com/js/")
soup = BeautifulSoup(response.text, "html.parser")
print(soup.select(".quote"))   # Ausgabe: [] — nichts gefunden
```

## Selenium installieren

```bash
pip install selenium
```

Seit Version 4.6 lädt Selenium den Browser-Treiber (Chrome/Firefox) selbst herunter und verwaltet ihn — kein manuelles Herunterladen von chromedriver mehr nötig.

## Schritt 1: Eine echte Seite öffnen

```python
from selenium import webdriver

driver = webdriver.Chrome()
driver.get("https://quotes.toscrape.com/js/")
print(driver.title)
driver.quit()
```

Das öffnet ein echtes Chrome-Fenster, rendert die Seite vollständig samt JavaScript und schließt sie danach.

## Schritt 2: Richtig warten, nicht `time.sleep`

Häufiges Problem: Ihr Code läuft, bevor das JavaScript fertig gerendert hat. Die falsche Lösung ist `time.sleep(3)` — mal zu kurz, mal verschwendete Zeit. Die richtige Lösung ist `WebDriverWait`:

```python
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

driver = webdriver.Chrome()
driver.get("https://quotes.toscrape.com/js/")

WebDriverWait(driver, 10).until(
    EC.presence_of_element_located((By.CLASS_NAME, "quote"))
)
```

Das wartet bis zu 10 Sekunden, bis das erste `.quote`-Element erscheint — nicht mehr, nicht weniger.

## Schritt 3: Daten extrahieren — ein echtes Beispiel

```python
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import csv

driver = webdriver.Chrome()
driver.get("https://quotes.toscrape.com/js/")

WebDriverWait(driver, 10).until(
    EC.presence_of_element_located((By.CLASS_NAME, "quote"))
)

quotes = driver.find_elements(By.CLASS_NAME, "quote")

with open("quotes.csv", "w", newline="", encoding="utf-8-sig") as f:
    writer = csv.writer(f)
    writer.writerow(["text", "autor"])
    for quote in quotes:
        text = quote.find_element(By.CLASS_NAME, "text").text
        author = quote.find_element(By.CLASS_NAME, "author").text
        writer.writerow([text, author])

driver.quit()
```

Dieselben zehn Zitate wie zuvor, diesmal von der Version, die nur durch Ausführen von JavaScript entsteht.

## Headless ausführen (ohne sichtbares Fenster)

Wenn Sie auf einem Server laufen oder einfach kein Chrome-Fenster sehen wollen:

```python
from selenium.webdriver.chrome.options import Options

options = Options()
options.add_argument("--headless=new")
driver = webdriver.Chrome(options=options)
```

## Wann Selenium sinnvoll ist — und wann nicht

- Selenium steuert einen kompletten Browser — mehrfach langsamer und schwerer als `requests`
- Prüfen Sie zuerst die DevTools des Browsers (Tab Network): Hat die Seite eine interne JSON-API, rufen Sie die direkt auf und sparen sich Selenium komplett
- Setzen Sie Selenium nur ein, wenn die Daten wirklich erst nach der JavaScript-Ausführung erscheinen
- Dieselben Regeln aus dem letzten Tutorial gelten weiterhin: `robots.txt` prüfen, Pausen zwischen Anfragen einbauen, offizielle API bevorzugen, wenn es eine gibt

## Übung

Klicken Sie statt nur der ersten zehn Zitate auf den Button „Next" (`driver.find_element(By.LINK_TEXT, "Next").click()`) und fügen Sie die Zitate der zweiten Seite derselben CSV-Datei hinzu.
