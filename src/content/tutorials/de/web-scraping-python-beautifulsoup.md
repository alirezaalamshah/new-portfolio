---
title: Web-Scraping mit Python — Daten aus Websites extrahieren
description: "Web-Scraping mit requests und BeautifulSoup in Python: HTML laden, Daten extrahieren und als CSV speichern — mit echtem Beispiel."
pubDate: 2026-07-18
tags: [Python, Web-Scraping]
---

Web-Scraping bedeutet, Informationen automatisch aus Webseiten zu extrahieren — dieselbe Technik steckt hinter meinem [Preisüberwachungs-Bot](/de/portfolio/telegram-price-bot/) und verwandelt Stunden Handarbeit in ein paar Zeilen Code. In diesem Tutorial lernen wir die zwei zentralen Bibliotheken dafür kennen.

## Werkzeuge installieren

```bash
pip install requests beautifulsoup4
```

- **requests** lädt die Seite herunter (was Ihr Browser tut, nur ohne Darstellung)
- **BeautifulSoup** macht aus dem HTML eine durchsuchbare Struktur

## Schritt 1: Eine Seite herunterladen

Zum Üben nutzen wir [quotes.toscrape.com](https://quotes.toscrape.com) — eine Seite, die eigens fürs Scraping-Training gebaut wurde:

```python
import requests

response = requests.get("https://quotes.toscrape.com")
print(response.status_code)   # 200 heißt Erfolg
print(response.text[:500])    # die ersten 500 Zeichen HTML
```

## Schritt 2: Daten mit BeautifulSoup extrahieren

Im HTML dieser Seite steckt jedes Zitat in einem Tag mit der Klasse `quote`. Mit `select` holen wir alle:

```python
import requests
from bs4 import BeautifulSoup

response = requests.get("https://quotes.toscrape.com")
soup = BeautifulSoup(response.text, "html.parser")

for quote in soup.select(".quote"):
    text = quote.select_one(".text").get_text()
    author = quote.select_one(".author").get_text()
    print(f"{text} — {author}")
```

Ausgabe: zehn Zitate samt Autoren. `select` nutzt dieselben CSS-Selektoren, die Sie aus dem Webdesign kennen: `.class`, `#id`, `div > a` und so weiter.

## Schritt 3: Als CSV speichern

Daten ohne Speicherung nützen nichts:

```python
import csv

with open("quotes.csv", "w", newline="", encoding="utf-8-sig") as f:
    writer = csv.writer(f)
    writer.writerow(["text", "autor"])
    for quote in soup.select(".quote"):
        writer.writerow([
            quote.select_one(".text").get_text(),
            quote.select_one(".author").get_text(),
        ])
```

Hinweis: `encoding="utf-8-sig"` sorgt dafür, dass Excel Sonderzeichen korrekt öffnet.

## Regeln, die Sie einhalten müssen — ethisch und technisch

- Prüfen Sie die `robots.txt` der Seite (z. B. `example.com/robots.txt`) — sie sagt, was erlaubt ist
- Machen Sie Pausen zwischen Anfragen (`time.sleep(1)`), um den Server nicht zu belasten
- Für kommerzielle Nutzung der Daten: die Nutzungsbedingungen der Quellseite lesen
- Bietet die Seite eine offizielle API an, ist die API immer besser als Scraping

## Wenn die Seite mit JavaScript aufgebaut wird

`requests` holt nur das anfängliche HTML. Werden die Daten erst per JavaScript nachgeladen, brauchen Sie ein schwereres Werkzeug wie Selenium, das einen echten Browser steuert — Thema eines kommenden Tutorials.

## Übung

Extrahieren Sie von derselben Übungsseite zusätzlich die Tags jedes Zitats und ergänzen Sie eine dritte CSV-Spalte. Tipp: der Selektor `.tag` innerhalb jedes `.quote`.
