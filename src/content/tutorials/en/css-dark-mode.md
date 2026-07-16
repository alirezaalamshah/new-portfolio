---
title: Professional Dark Mode with Pure CSS
description: Build a light/dark theme with CSS variables and persist the user's choice — no framework needed.
pubDate: 2026-07-05
tags: [CSS, Web design]
---

Dark mode is no longer a luxury; users expect it. The good news: you don't need any framework to implement it properly.

## Step one: turn colors into variables

Never write a color directly in components; make everything a variable:

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

## Step two: respect the system preference

On the first visit, follow the user's operating-system preference:

```js
const saved = localStorage.getItem('theme');
const theme = saved ||
  (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
document.documentElement.dataset.theme = theme;
```

This script must run **inside head, before render**, so the page never flashes the wrong theme.

## Step three: the toggle button

```js
button.addEventListener('click', () => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  localStorage.setItem('theme', next);
});
```

That's it! No library, no dependency — just a few lines of CSS and JavaScript.
