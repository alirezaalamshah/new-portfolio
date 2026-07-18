---
title: وب‌اسکرپینگ با پایتون — استخراج داده از سایت‌ها
description: "آموزش وب‌اسکرپینگ با requests و BeautifulSoup در پایتون: خواندن HTML، استخراج داده و ذخیره در CSV با یک مثال واقعی."
pubDate: 2026-07-18
tags: [پایتون, وب‌اسکرپینگ]
---

وب‌اسکرپینگ یعنی استخراج خودکار اطلاعات از صفحات وب — همان تکنیکی که پشت [ربات رصد قیمت](/portfolio/telegram-price-bot/) من است و ساعت‌ها کار دستی را به چند خط کد تبدیل می‌کند. در این آموزش با دو کتابخانه اصلی این کار آشنا می‌شویم.

## نصب ابزارها

```bash
pip install requests beautifulsoup4
```

- **requests** صفحه را دانلود می‌کند (همان کاری که مرورگر می‌کند، بدون نمایش)
- **BeautifulSoup** به HTML دانلودشده ساختار می‌دهد تا بتوانیم داخلش جستجو کنیم

## قدم اول: دانلود صفحه

برای تمرین از سایت [quotes.toscrape.com](https://quotes.toscrape.com) استفاده می‌کنیم که مخصوص تمرین اسکرپینگ ساخته شده:

```python
import requests

response = requests.get("https://quotes.toscrape.com")
print(response.status_code)   # 200 یعنی موفق
print(response.text[:500])    # ۵۰۰ کاراکتر اول HTML
```

## قدم دوم: استخراج داده با BeautifulSoup

در HTML این سایت، هر نقل‌قول داخل تگی با کلاس `quote` است. با `select` همه را می‌گیریم:

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

خروجی: ده نقل‌قول با نویسنده‌هایشان. `select` با همان سلکتورهای CSS کار می‌کند که از طراحی وب می‌شناسید: `.class`، `#id`، `div > a` و…

## قدم سوم: ذخیره در CSV

داده بدون ذخیره‌سازی فایده‌ای ندارد:

```python
import csv

with open("quotes.csv", "w", newline="", encoding="utf-8-sig") as f:
    writer = csv.writer(f)
    writer.writerow(["متن", "نویسنده"])
    for quote in soup.select(".quote"):
        writer.writerow([
            quote.select_one(".text").get_text(),
            quote.select_one(".author").get_text(),
        ])
```

نکته: `encoding="utf-8-sig"` باعث می‌شود اکسل فایل فارسی را درست باز کند.

## قواعد اخلاقی و فنی که رعایتشان واجب است

- فایل `robots.txt` سایت را چک کنید (مثلاً `example.com/robots.txt`) — می‌گوید کجاها مجاز است
- بین درخواست‌ها فاصله بگذارید (`time.sleep(1)`) تا به سرور فشار نیاید
- برای استفاده تجاری از داده‌ها، قوانین سایت مبدأ را بخوانید
- اگر سایت API رسمی دارد، همیشه API بهتر از اسکرپینگ است

## وقتی صفحه با جاوااسکریپت ساخته می‌شود

`requests` فقط HTML اولیه را می‌گیرد. اگر داده‌ها بعداً با جاوااسکریپت لود می‌شوند، به ابزار قوی‌تری مثل Selenium نیاز دارید که مرورگر واقعی را کنترل می‌کند — موضوع یکی از آموزش‌های بعدی.

## تمرین

از همان سایت تمرینی، تگ‌های (tags) هر نقل‌قول را هم استخراج کنید و ستون سومی به CSV اضافه کنید. راهنمایی: سلکتور `.tag` داخل هر `.quote`.
