---
title: Excel-Automatisierung mit Python und pandas
description: "Wiederkehrende Excel-Arbeit mit Python automatisieren: lesen, filtern, zusammenfassen und Berichte bauen mit pandas."
pubDate: 2026-07-18
tags: [Python, Excel]
---

Wenn Sie jede Woche Stunden mit Kopieren, Filtern und Summieren in Excel verbringen, ist dieses Tutorial für Sie. Ich habe im Industrieumfeld erlebt, wie diese paar Zeilen Python einen ganzen Berichtstag auf Sekunden verkürzen — ein echter Fall ist das [dynamische Preiskalkulations-Tool](/de/portfolio/excel-dynamic-pricing/) in meinem Portfolio.

## pandas installieren

```bash
pip install pandas openpyxl
```

`openpyxl` ist der Motor zum Lesen und Schreiben von `.xlsx`-Dateien; pandas nutzt ihn im Hintergrund.

## Ein echtes Szenario: der Verkaufsbericht

Angenommen, Sie haben `sales.xlsx` mit den Spalten Datum, Verkäufer, Produkt, Menge, Stückpreis. Wir wollen einen Bericht: Gesamtumsatz je Verkäufer.

## Schritt 1: Datei einlesen

```python
import pandas as pd

df = pd.read_excel("sales.xlsx")
print(df.head())        # die ersten 5 Zeilen
print(len(df), "Zeilen")
```

`df` (ein DataFrame) ist Ihre ganze Tabelle — wie ein Excel-Blatt, das in Python lebt.

## Schritt 2: Eine berechnete Spalte

```python
df["gesamt"] = df["menge"] * df["stueckpreis"]
```

Eine Zeile erzeugt die neue Spalte für alle Zeilen — ob 10 oder 100.000.

## Schritt 3: Filtern und zusammenfassen

```python
# nur Verkäufe über 5 Millionen
big_sales = df[df["gesamt"] > 5_000_000]

# Summe je Verkäufer (Ihr Pivot-Table-Äquivalent)
report = df.groupby("verkaeufer")["gesamt"].sum().sort_values(ascending=False)
print(report)
```

`groupby` ist Excels Pivot-Tabelle — nur skriptbar und wiederholbar.

## Schritt 4: Bericht exportieren

```python
report.to_excel("report.xlsx", sheet_name="Verkaufsbericht")
print("Bericht fertig ✅")
```

## Die eigentliche Magie: viele Dateien auf einmal

Ihre wahre Kraft zeigt die Methode bei 30 Monatsdateien:

```python
from pathlib import Path
import pandas as pd

all_months = []
for file in Path("monthly-reports").glob("*.xlsx"):
    month_df = pd.read_excel(file)
    month_df["datei"] = file.stem
    all_months.append(month_df)

total = pd.concat(all_months)
total.groupby("verkaeufer")["gesamt"].sum().to_excel("yearly-report.xlsx")
```

Dreißig Dateien, ein Jahresbericht, wenige Sekunden.

## Wann Python — und wann besser in Excel bleiben?

- Einmalige, kleine Aufgabe? Excel selbst ist schneller
- Wiederkehrende Arbeit (wöchentlich/monatlich) oder viele Dateien? Einmal Python schreiben, immer wieder ausführen
- Daten kommen von anderswo (Web, Datenbank, API)? Eindeutig Python

## Übung

Bauen Sie aus Ihrer eigenen (oder einer erfundenen) Verkaufsdatei einen Bericht, der das meistverkaufte **Produkt** jedes Monats zeigt. Tipp: Datumsspalte mit `pd.to_datetime` umwandeln und nach `df["datum"].dt.month` gruppieren.
