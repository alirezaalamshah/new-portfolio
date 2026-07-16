---
title: Professioneller Dark Mode nur mit CSS
description: Helles und dunkles Design mit CSS-Variablen bauen und die Wahl des Nutzers speichern — ganz ohne Framework.
pubDate: 2026-07-05
tags: [CSS, Webdesign]
---

Dark Mode ist längst kein Luxus mehr; Nutzer erwarten ihn. Die gute Nachricht: Für eine saubere Umsetzung brauchen Sie kein Framework.

## Schritt eins: Farben zu Variablen machen

Schreiben Sie niemals eine Farbe direkt in Komponenten; machen Sie alles zur Variable:

```css
:root {
  --bg: #0b0e14;
  --text: #e6e9f0;
}

:root[data-theme='light'] {
  --bg: #fafaf8;
  --text: #1a1d26;
}
```

## Schritt zwei: Systemeinstellung respektieren

Folgen Sie beim ersten Besuch der Einstellung des Betriebssystems:

```js
const saved = localStorage.getItem('theme');
const theme = saved ||
  (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
document.documentElement.dataset.theme = theme;
```

Dieses Skript muss **im head, vor dem Rendern** laufen, damit die Seite nie mit dem falschen Design aufblitzt.

## Schritt drei: der Umschalt-Button

```js
button.addEventListener('click', () => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  localStorage.setItem('theme', next);
});
```

Das war's! Keine Bibliothek, keine Abhängigkeit — nur ein paar Zeilen CSS und JavaScript.
