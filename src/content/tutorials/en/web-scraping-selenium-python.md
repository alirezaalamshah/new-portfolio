---
title: Web Scraping JavaScript Sites with Selenium in Python
description: "Why BeautifulSoup isn't enough for JavaScript-rendered pages, and how to control a real browser with Selenium — with a real example and CSV export."
pubDate: 2026-08-02
tags: [Python, Web scraping]
---

In the [last tutorial](/en/tutorials/web-scraping-python-beautifulsoup/) we scraped static HTML with requests and BeautifulSoup. But many modern sites — stores, dashboards, and sometimes the very sites my [Price-Watch Bot](/en/portfolio/telegram-price-bot/) monitors — build their content with JavaScript after the page loads. That's where Selenium comes in: instead of reading raw HTML, it drives a real browser.

## Why BeautifulSoup fails here

The practice site [quotes.toscrape.com](https://quotes.toscrape.com) has a `/js/` version that renders the same quotes with JavaScript. Fetch it with `requests` and you get an empty shell:

```python
import requests
from bs4 import BeautifulSoup

response = requests.get("https://quotes.toscrape.com/js/")
soup = BeautifulSoup(response.text, "html.parser")
print(soup.select(".quote"))   # output: [] — nothing found
```

## Install Selenium

```bash
pip install selenium
```

Since version 4.6, Selenium downloads and manages the browser driver (Chrome/Firefox) itself — no more manually downloading chromedriver.

## Step 1: Open a real page

```python
from selenium import webdriver

driver = webdriver.Chrome()
driver.get("https://quotes.toscrape.com/js/")
print(driver.title)
driver.quit()
```

This opens an actual Chrome window, fully renders the page including its JavaScript, then closes it.

## Step 2: Wait properly, not `time.sleep`

Common problem: your code runs before the JavaScript finishes rendering. The wrong fix is `time.sleep(3)` — sometimes too short, sometimes wasted time. The right fix is `WebDriverWait`:

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

This waits up to 10 seconds for the first `.quote` element to appear — no more, no less.

## Step 3: Extract the data — a real example

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
    writer.writerow(["text", "author"])
    for quote in quotes:
        text = quote.find_element(By.CLASS_NAME, "text").text
        author = quote.find_element(By.CLASS_NAME, "author").text
        writer.writerow([text, author])

driver.quit()
```

Same ten quotes as before, this time from the version that's only built by running JavaScript.

## Running headless (no visible window)

When running on a server, or you just don't want the Chrome window popping up:

```python
from selenium.webdriver.chrome.options import Options

options = Options()
options.add_argument("--headless=new")
driver = webdriver.Chrome(options=options)
```

## When to reach for Selenium — and when not to

- Selenium drives a full browser — several times slower and heavier than `requests`
- Check the browser's DevTools (Network tab) first: if the site has an internal JSON API, call that directly and skip Selenium entirely
- Only use Selenium when the data genuinely only appears after JavaScript runs
- The same rules from the last tutorial still apply: check `robots.txt`, pause between requests, and prefer an official API when one exists

## Exercise

Instead of just the first ten quotes, click the "Next" button (`driver.find_element(By.LINK_TEXT, "Next").click()`) and add the second page's quotes to the same CSV file.
