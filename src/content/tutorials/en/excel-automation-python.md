---
title: Excel Automation with Python and pandas
description: "Automate repetitive Excel work with Python: read, filter, summarize, and build reports with pandas in a few lines of code."
pubDate: 2026-07-18
tags: [Python, Excel]
---

If you spend hours every week copying, filtering, and summing in Excel, this tutorial is for you. I have watched these few lines of Python turn a full day of industrial reporting work into seconds — see the [Dynamic Pricing Tool](/en/portfolio/excel-dynamic-pricing/) in my portfolio for a real case.

## Install pandas

```bash
pip install pandas openpyxl
```

`openpyxl` is the engine that reads and writes `.xlsx` files; pandas uses it under the hood.

## A real scenario: the sales report

Say you have `sales.xlsx` with columns: date, salesperson, product, quantity, unit price. We want a total-sales-per-salesperson report.

## Step 1: Read the file

```python
import pandas as pd

df = pd.read_excel("sales.xlsx")
print(df.head())        # first 5 rows
print(len(df), "rows")
```

`df` (a DataFrame) is your whole table — like an Excel sheet living inside Python.

## Step 2: A calculated column

```python
df["total"] = df["quantity"] * df["unit_price"]
```

One line creates the new column for every row — whether there are 10 rows or 100,000.

## Step 3: Filter and summarize

```python
# only sales above 5 million
big_sales = df[df["total"] > 5_000_000]

# total per salesperson (your Pivot Table equivalent)
report = df.groupby("salesperson")["total"].sum().sort_values(ascending=False)
print(report)
```

`groupby` is Excel's Pivot Table — but scriptable and repeatable.

## Step 4: Export the report

```python
report.to_excel("report.xlsx", sheet_name="Sales report")
print("Report ready ✅")
```

## The real magic: many files at once

The power becomes obvious when you have 30 monthly Excel files:

```python
from pathlib import Path
import pandas as pd

all_months = []
for file in Path("monthly-reports").glob("*.xlsx"):
    month_df = pd.read_excel(file)
    month_df["file"] = file.stem
    all_months.append(month_df)

total = pd.concat(all_months)
total.groupby("salesperson")["total"].sum().to_excel("yearly-report.xlsx")
```

Thirty files, one yearly report, a few seconds.

## When to reach for Python vs. staying in Excel

- One-off, small task? Excel itself is faster
- Repeated work (weekly/monthly) or many files? Write Python once, run it every time
- Input coming from elsewhere (web, database, API)? Definitely Python

## Exercise

From your own sales file (or a made-up one), build a report showing the best-selling **product** of each month. Hint: convert the date column with `pd.to_datetime` and group by `df["date"].dt.month`.
