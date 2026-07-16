---
title: پیاده‌سازی دارک‌مود حرفه‌ای فقط با CSS
description: ساخت حالت تاریک و روشن با متغیرهای CSS و ذخیره انتخاب کاربر، بدون هیچ فریم‌ورکی.
pubDate: 2026-07-05
tags: [CSS, طراحی وب]
---

دارک‌مود دیگر یک امکان لوکس نیست؛ کاربران انتظارش را دارند. خبر خوب این‌که برای پیاده‌سازی درستش به هیچ فریم‌ورکی نیاز ندارید.

## قدم اول: رنگ‌ها را متغیر کنید

هیچ رنگی را مستقیم در کامپوننت‌ها ننویسید؛ همه را به متغیر تبدیل کنید:

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

## قدم دوم: احترام به تنظیمات سیستم

در اولین بازدید، از ترجیح سیستم‌عامل کاربر پیروی کنید:

```js
const saved = localStorage.getItem('theme');
const theme = saved ||
  (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
document.documentElement.dataset.theme = theme;
```

این اسکریپت باید **داخل head و قبل از رندر** اجرا شود تا صفحه اول با تم اشتباه فلش نزند.

## قدم سوم: دکمه تغییر تم

```js
button.addEventListener('click', () => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  localStorage.setItem('theme', next);
});
```

همین! نه کتابخانه‌ای، نه وابستگی‌ای — فقط چند خط CSS و جاوااسکریپت.
