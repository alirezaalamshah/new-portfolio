---
title: Web Scraping with Python — Extracting Data from Websites
description: "Web scraping with requests and BeautifulSoup in Python: fetching HTML, extracting data, and saving to CSV with a real example."
pubDate: 2026-07-18
tags: [Python, Web scraping]
---

Web scraping means extracting information from web pages automatically — the same technique behind my [Price-Watch Bot](/en/portfolio/telegram-price-bot/), turning hours of manual work into a few lines of code. In this tutorial we meet the two core libraries for the job.

## Install the tools

```bash
pip install requests beautifulsoup4
```

- **requests** downloads the page (what your browser does, minus the rendering)
- **BeautifulSoup** turns the downloaded HTML into a structure you can search

## Step 1: Download a page

For practice we use [quotes.toscrape.com](https://quotes.toscrape.com), a site built specifically for scraping practice:

```python
import requests

response = requests.get("https://quotes.toscrape.com")
print(response.status_code)   # 200 means success
print(response.text[:500])    # first 500 characters of HTML
```

## Step 2: Extract data with BeautifulSoup

In this site's HTML, every quote lives in a tag with the class `quote`. We grab them all with `select`:

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

Output: ten quotes with their authors. `select` uses the same CSS selectors you know from web design: `.class`, `#id`, `div > a`, and so on.

## Step 3: Save to CSV

Data is useless if you don't store it:

```python
import csv

with open("quotes.csv", "w", newline="", encoding="utf-8-sig") as f:
    writer = csv.writer(f)
    writer.writerow(["text", "author"])
    for quote in soup.select(".quote"):
        writer.writerow([
            quote.select_one(".text").get_text(),
            quote.select_one(".author").get_text(),
        ])
```

Note: `encoding="utf-8-sig"` makes Excel open non-Latin text correctly.

## Rules you must follow — ethical and technical

- Check the site's `robots.txt` (e.g. `example.com/robots.txt`) — it says what is allowed
- Pause between requests (`time.sleep(1)`) so you don't hammer the server
- For commercial use of the data, read the source site's terms
- If the site offers an official API, the API always beats scraping

## When the page is built with JavaScript

`requests` only fetches the initial HTML. If the data loads later via JavaScript, you need a heavier tool like Selenium, which drives a real browser — the topic of an upcoming tutorial.

## Exercise

From the same practice site, also extract each quote's tags and add a third column to the CSV. Hint: the `.tag` selector inside each `.quote`.
