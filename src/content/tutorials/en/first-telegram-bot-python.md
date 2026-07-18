---
title: Build Your First Telegram Bot with Python
description: Build a Telegram bot with Python and python-telegram-bot — from getting a BotFather token to a bot that actually replies.
pubDate: 2026-07-18
tags: [Python, Telegram bot]
---

A Telegram bot is one of the most rewarding beginner Python projects: with a few dozen lines of code you build something that really works and that you can show your friends. This is the same path I used for bots with real users — like the [Price-Watch Bot](/en/portfolio/telegram-price-bot/) in my portfolio.

## Prerequisites

- Python installed ([installation guide](/en/tutorials/install-python-windows/))
- A Telegram account

## Step 1: Get a token from BotFather

In Telegram, open the official [@BotFather](https://t.me/BotFather) bot and:

1. Send `/newbot`
2. Give it a display name (e.g. "My First Bot")
3. Give it a username ending in `bot` (e.g. `my_first_1234_bot`)

BotFather replies with a **token** that looks like:

```text
7412345678:AAHfXw3v9tK2mQ...
```

This token is the key to your bot — **never share it** and never commit it to GitHub.

## Step 2: Install the library

Inside a virtual environment, install the most popular Telegram bot library:

```bash
pip install python-telegram-bot
```

## Step 3: A bot that says hello

Create `bot.py`:

```python
from telegram import Update
from telegram.ext import Application, CommandHandler, MessageHandler, filters, ContextTypes

TOKEN = "put-your-token-here"

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text("Hi! I'm your first bot 🤖")

async def echo(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text(f"You said: {update.message.text}")

app = Application.builder().token(TOKEN).build()
app.add_handler(CommandHandler("start", start))
app.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, echo))

print("Bot is running...")
app.run_polling()
```

Run it:

```bash
python bot.py
```

Now find your bot in Telegram and send `/start` — it answers! Send any other text message and it echoes it back.

## Understanding the code

- `CommandHandler("start", start)` — when a user sends `/start`, the `start` function runs
- `MessageHandler(filters.TEXT & ~filters.COMMAND, echo)` — every text message (except commands) goes to `echo`
- `run_polling()` — the bot keeps asking Telegram's servers "any new messages?"

## Step 4: A real feature

Let's add a `/dollar` command that (for now) returns a fixed number:

```python
async def dollar(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text("USD today: 100,500")

app.add_handler(CommandHandler("dollar", dollar))
```

The natural next step? Fetching the real price from a website — which is exactly the topic of [Web Scraping with Python](/en/tutorials/web-scraping-python-beautifulsoup/).

## Exercise

Add a `/help` command that lists the bot's commands, and add a condition to `echo` so a special reply comes back when the user sends "hello".
