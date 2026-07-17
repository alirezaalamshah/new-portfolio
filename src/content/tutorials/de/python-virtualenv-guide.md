---
title: Der komplette Leitfaden zu virtuellen Python-Umgebungen
description: Warum jedes Python-Projekt eine virtuelle Umgebung braucht und wie man sie mit venv in einer Minute anlegt.
pubDate: 2026-06-20
tags: [Python, Werkzeuge]
---

Wenn Sie gerade mit Python anfangen, sind Sie vermutlich schon auf Installationsfehler oder Versionskonflikte gestoßen. Die Standardlösung dafür ist eine **virtuelle Umgebung**.

## Was ist eine virtuelle Umgebung?

Eine virtuelle Umgebung ist ein isolierter Ordner, der die Python-Version und die Pakete jedes Projekts vom Rest des Systems trennt. Das Ergebnis: Projekt A kann Django 4 nutzen, während Projekt B Django 5 verwendet — völlig konfliktfrei.

## Anlegen mit venv

```bash

python -m venv .venv
```

Aktivieren unter Windows:

```bash

.venv\Scripts\activate
```

Und unter Linux oder macOS:

```bash

source .venv/bin/activate
```

## Wichtige Hinweise

- Fügen Sie den Ordner `.venv` immer zur `.gitignore` hinzu.
- Speichern Sie die Paketliste mit `pip freeze > requirements.txt`.
- Legen Sie pro Projekt eine neue Umgebung an; eine gemeinsame bringt das alte Problem zurück.

Mit diesen drei Befehlen gehören Paketkonflikte der Vergangenheit an.
