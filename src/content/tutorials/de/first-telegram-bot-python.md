---
title: Den ersten Telegram-Bot mit Python bauen
description: Einen Telegram-Bot mit Python und python-telegram-bot bauen — vom BotFather-Token bis zum Bot, der wirklich antwortet.
pubDate: 2026-07-18
tags: [Python, Telegram-Bot]
---

Ein Telegram-Bot ist eines der lohnendsten Einsteigerprojekte in Python: Mit wenigen Dutzend Zeilen Code entsteht etwas, das wirklich funktioniert und das man Freunden zeigen kann. Auf genau diesem Weg sind meine Bots mit echten Nutzern entstanden — etwa der [Preisüberwachungs-Bot](/de/portfolio/telegram-price-bot/) in meinem Portfolio.

## Voraussetzungen

- Python ist installiert ([Installationsanleitung](/de/tutorials/install-python-windows/))
- Ein Telegram-Konto

## Schritt 1: Token vom BotFather holen

Öffnen Sie in Telegram den offiziellen Bot [@BotFather](https://t.me/BotFather) und:

1. Senden Sie `/newbot`
2. Vergeben Sie einen Anzeigenamen (z. B. „Mein erster Bot")
3. Vergeben Sie einen Benutzernamen, der auf `bot` endet (z. B. `mein_erster_1234_bot`)

BotFather antwortet mit einem **Token** wie:

```text
7412345678:AAHfXw3v9tK2mQ...
```

Dieses Token ist der Schlüssel zu Ihrem Bot — **niemals weitergeben** und niemals auf GitHub einchecken.

## Schritt 2: Bibliothek installieren

Installieren Sie in einer virtuellen Umgebung die beliebteste Telegram-Bot-Bibliothek:

```bash
pip install python-telegram-bot
```

## Schritt 3: Ein Bot, der Hallo sagt

Erstellen Sie `bot.py`:

```python
from telegram import Update
from telegram.ext import Application, CommandHandler, MessageHandler, filters, ContextTypes

TOKEN = "hier-dein-token-einsetzen"

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text("Hallo! Ich bin dein erster Bot 🤖")

async def echo(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text(f"Du hast gesagt: {update.message.text}")

app = Application.builder().token(TOKEN).build()
app.add_handler(CommandHandler("start", start))
app.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, echo))

print("Bot läuft...")
app.run_polling()
```

Ausführen:

```bash
python bot.py
```

Suchen Sie Ihren Bot nun in Telegram und senden Sie `/start` — er antwortet! Jede andere Textnachricht wirft er als Echo zurück.

## Den Code verstehen

- `CommandHandler("start", start)` — sendet ein Nutzer `/start`, läuft die Funktion `start`
- `MessageHandler(filters.TEXT & ~filters.COMMAND, echo)` — jede Textnachricht (außer Befehlen) geht an `echo`
- `run_polling()` — der Bot fragt Telegrams Server laufend: „Gibt es neue Nachrichten?"

## Schritt 4: Eine echte Funktion

Bauen wir einen Befehl `/dollar`, der (vorerst) eine feste Zahl liefert:

```python
async def dollar(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text("USD heute: 100.500")

app.add_handler(CommandHandler("dollar", dollar))
```

Der natürliche nächste Schritt? Den echten Preis von einer Website holen — genau das Thema von [Web-Scraping mit Python](/de/tutorials/web-scraping-python-beautifulsoup/).

## Übung

Fügen Sie einen `/help`-Befehl hinzu, der die Befehle des Bots auflistet, und erweitern Sie `echo` um eine Bedingung, die auf „hallo" eine besondere Antwort gibt.
