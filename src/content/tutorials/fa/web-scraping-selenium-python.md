---
title: اسکرپینگ سایت‌های جاوااسکریپتی با Selenium در پایتون
description: "چرا BeautifulSoup برای سایت‌های جاوااسکریپتی کافی نیست و چطور با Selenium یک مرورگر واقعی را کنترل کنیم — با مثال واقعی و ذخیره در CSV."
pubDate: 2026-08-02
tags: [پایتون, وب‌اسکرپینگ]
---

در [آموزش قبلی](/tutorials/web-scraping-python-beautifulsoup/) با requests و BeautifulSoup سراغ HTML استاتیک رفتیم. اما خیلی از سایت‌های امروزی — فروشگاه‌ها، داشبوردها، و گاهی همان سایت‌هایی که [ربات قیمت‌سنج](/portfolio/telegram-price-bot/) من رصدشان می‌کند — داده را بعد از لود اولیه صفحه، با جاوااسکریپت می‌سازند. اینجاست که Selenium وارد می‌شود: به‌جای خواندن HTML خام، یک مرورگر واقعی را کنترل می‌کند.

## چرا BeautifulSoup اینجا کار نمی‌کند

سایت تمرینی [quotes.toscrape.com](https://quotes.toscrape.com) یک نسخه `/js/` هم دارد که همان نقل‌قول‌ها را با جاوااسکریپت رندر می‌کند. اگر با `requests` بگیریدش، فقط یک پوسته خالی می‌بینید:

```python
import requests
from bs4 import BeautifulSoup

response = requests.get("https://quotes.toscrape.com/js/")
soup = BeautifulSoup(response.text, "html.parser")
print(soup.select(".quote"))   # خروجی: [] — چیزی پیدا نمی‌شود
```

## نصب Selenium

```bash
pip install selenium
```

از نسخه ۴.۶ به بعد، Selenium خودش درایور مرورگر (Chrome/Firefox) را دانلود و مدیریت می‌کند — دیگر نیازی به دانلود دستی chromedriver نیست.

## قدم اول: باز کردن یک صفحه واقعی

```python
from selenium import webdriver

driver = webdriver.Chrome()
driver.get("https://quotes.toscrape.com/js/")
print(driver.title)
driver.quit()
```

این کد یک پنجره کروم واقعی باز می‌کند، صفحه را کامل با جاوااسکریپتش لود می‌کند و بعد می‌بندد.

## قدم دوم: صبرکردن درست، نه `time.sleep`

مشکل رایج: کد شما زودتر از تمام‌شدن رندر جاوااسکریپت اجرا می‌شود. راه‌حل غلط `time.sleep(3)` است — گاهی کم است، گاهی وقت تلف می‌کند. راه‌حل درست `WebDriverWait` است:

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

این کد حداکثر ۱۰ ثانیه صبر می‌کند تا اولین عنصر با کلاس `quote` در صفحه ظاهر شود — نه بیشتر، نه کمتر.

## قدم سوم: استخراج داده — مثال واقعی

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
    writer.writerow(["متن", "نویسنده"])
    for quote in quotes:
        text = quote.find_element(By.CLASS_NAME, "text").text
        author = quote.find_element(By.CLASS_NAME, "author").text
        writer.writerow([text, author])

driver.quit()
```

همان ده نقل‌قول قبلی، این‌بار از نسخه‌ای که فقط با اجرای جاوااسکریپت ساخته می‌شود.

## اجرا بدون نمایش پنجره (headless)

وقتی روی سرور اجرا می‌کنید یا نمی‌خواهید پنجره کروم باز شود:

```python
from selenium.webdriver.chrome.options import Options

options = Options()
options.add_argument("--headless=new")
driver = webdriver.Chrome(options=options)
```

## کی سراغ Selenium بروید، کی نه

- Selenium یک مرورگر کامل باز می‌کند — چند برابر کندتر و سنگین‌تر از `requests` است
- اول با DevTools مرورگر (تب Network) چک کنید سایت یک API داخلی JSON ندارد؛ اگر داشت، مستقیم همان API را صدا بزنید و اصلاً سراغ Selenium نروید
- Selenium را فقط وقتی به کار ببرید که داده واقعاً فقط بعد از اجرای جاوااسکریپت ظاهر می‌شود
- همان قواعد آموزش قبلی این‌جا هم برقرار است: `robots.txt` را چک کنید، بین درخواست‌ها فاصله بگذارید، و اگر API رسمی هست، همیشه آن را ترجیح بدهید

## تمرین

به‌جای فقط ده نقل‌قول اول، روی دکمه «Next» کلیک کنید (`driver.find_element(By.LINK_TEXT, "Next").click()`) و نقل‌قول‌های صفحه دوم را هم به همان فایل CSV اضافه کنید.
