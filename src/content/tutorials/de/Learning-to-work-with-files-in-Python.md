---
title: Dateiverarbeitung in Python
description: Wie Sie Dateien in Python einfach und sicher mit der with-Anweisung verwalten.
pubDate: 2026-07-17
tags: [python, programmierung]
---

Das Lesen und Schreiben von Dateien gehört zu den alltäglichen Aufgaben in der Programmierung. In Python ist dies sehr einfach, aber ein kleiner Fehler – wie das Offenlassen einer Datei – kann Systemressourcen verschwenden oder die Datei beschädigen.

## Warum einen Context Manager (die `with`-Anweisung) nutzen?

Wenn Sie eine Datei mit der `open`-Funktion öffnen, müssen Sie sie am Ende wieder schließen. Tritt während des Programmablaufs ein Fehler auf, wird die Zeile zum Schließen der Datei eventuell nicht ausgeführt. Die `with`-Anweisung garantiert, dass die Datei nach Beendigung des Blocks automatisch und sicher geschlossen wird – selbst wenn ein Fehler auftritt.

## Dateien lesen und schreiben in Python

Um in eine neue Datei zu schreiben:

```python

with open("note.txt", "w", encoding="utf-8") as file:
    file.write("Hallo Python!")
```
Um Daten aus derselben Datei zu lesen:
```python

with open("note.txt", "r", encoding="utf-8") as file:
    content = file.read()
    print(content)
```

## Wichtige Hinweise
Der Modus `"w"` überschreibt die vorhandene Datei komplett. Um Text am Ende einer Datei anzuhängen, ohne den bestehenden Inhalt zu löschen, verwenden Sie den Modus `"a"` (Append).

Geben Sie immer `encoding="utf-8"` an, um Codierungsprobleme bei Umlauten und Sonderzeichen auf verschiedenen Betriebssystemen zu vermeiden.

Verarbeiten Sie große Dateien zeilenweise mit einer for-Schleife, anstatt die gesamte Datei auf einmal mit `read()` einzulesen, um den Arbeitsspeicher (RAM) zu schonen.