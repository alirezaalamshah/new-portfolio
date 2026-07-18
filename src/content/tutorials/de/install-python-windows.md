---
title: Python unter Windows installieren — von null bis zum ersten Programm
description: "Schritt-für-Schritt-Anleitung: Python unter Windows installieren, PATH aktivieren, Installation prüfen und das erste Programm ausführen."
pubDate: 2026-07-18
tags: [Python, Werkzeuge]
---

Wer mit Python programmieren lernen will, muss es zuerst richtig installieren — und die meisten Probleme des ersten Tages (etwa der Fehler „python is not recognized") entstehen genau hier. In dieser Anleitung installieren wir Python Schritt für Schritt und führen ein erstes Programm aus.

## Schritt 1: Die richtige Version herunterladen

Gehen Sie auf die offizielle Seite [python.org/downloads](https://www.python.org/downloads/) und klicken Sie auf den gelben Button **Download Python**. Laden Sie immer von der offiziellen Seite herunter, nicht von Drittanbietern — das ist sicherer und immer aktuell.

## Schritt 2: Das wichtigste Häkchen Ihres Lebens

Wenn sich der Installer öffnet, schauen Sie **vor** dem Klick auf „Install Now" an den unteren Fensterrand:

- Aktivieren Sie **Add python.exe to PATH** ✅

Damit erkennt Windows den Befehl `python` in jedem Ordner. Vergessen Sie es, begrüßt Sie das Terminal mit:

```text
'python' is not recognized as an internal or external command
```

Falls Sie bereits ohne dieses Häkchen installiert haben: Installer erneut starten, **Modify** wählen und unter „Advanced Options" die Option „Add Python to environment variables" aktivieren.

## Schritt 3: Installation prüfen

Öffnen Sie ein Terminal (Windows-Taste drücken, `cmd` tippen, Enter) und führen Sie aus:

```bash
python --version
```

Erscheint so etwas, hat alles geklappt:

```text
Python 3.13.1
```

`pip` (Pythons Paketinstaller) wird automatisch mitinstalliert; prüfen Sie mit:

```bash
pip --version
```

## Schritt 4: Ihr erstes Programm

Legen Sie einen Übungsordner an, erstellen Sie darin die Datei `hello.py` und schreiben Sie:

```python
name = input("Wie heißt du? ")
print(f"Hallo {name}! Willkommen bei Python 🐍")
```

Dann im Terminal in diesem Ordner:

```bash
python hello.py
```

Das Programm fragt nach Ihrem Namen und grüßt Sie — Glückwunsch, Sie sind jetzt Python-Programmierer!

## Profi-Tipp: von Anfang an mit virtuellen Umgebungen arbeiten

Sobald Sie Pakete installieren, drohen Versionskonflikte. Die goldene Regel: pro Projekt eine virtuelle Umgebung — wie genau, steht in [Der komplette Leitfaden zu virtuellen Python-Umgebungen](/de/tutorials/python-virtualenv-guide/).

## Übung

Schreiben Sie ein Programm, das nach dem Geburtsjahr fragt und das Alter berechnet. Tipp: `input` liefert immer Text; wandeln Sie ihn mit `int()` um.

---

Wenn Sie lieber einem strukturierten Weg mit Übungen und echten Projekten folgen möchten, werfen Sie einen Blick auf das [Python-Kurspaket](/de/products/python-course/) — über 20 Stunden Unterricht mit 30+ Übungen und 3 vollständigen Projekten.
