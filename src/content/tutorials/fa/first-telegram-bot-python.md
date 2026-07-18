---
title: ساخت اولین ربات تلگرام با پایتون
description: آموزش ساخت ربات تلگرام با پایتون و کتابخانه python-telegram-bot — از گرفتن توکن BotFather تا رباتی که جواب می‌دهد.
pubDate: 2026-07-18
tags: [پایتون, ربات تلگرام]
---

ربات تلگرام یکی از لذت‌بخش‌ترین پروژه‌های شروع پایتون است: با چند ده خط کد، چیزی می‌سازید که واقعاً کار می‌کند و می‌توانید به دوستانتان نشان بدهید. من با همین مسیر ربات‌هایی ساخته‌ام که الان کاربر واقعی دارند — مثل [ربات رصد قیمت](/portfolio/telegram-price-bot/) که در نمونه‌کارهایم هست.

## پیش‌نیازها

- پایتون نصب‌شده ([آموزش نصب](/tutorials/install-python-windows/))
- یک اکانت تلگرام

## قدم اول: گرفتن توکن از BotFather

در تلگرام، ربات رسمی [@BotFather](https://t.me/BotFather) را باز کنید و:

1. دستور `/newbot` را بفرستید
2. یک اسم نمایشی بدهید (مثلاً «ربات اول من»)
3. یک username که به `bot` ختم شود بدهید (مثلاً `my_first_1234_bot`)

BotFather یک **توکن** می‌دهد شبیه این:

```text
7412345678:AAHfXw3v9tK2mQ...
```

این توکن کلید ربات شماست — **به هیچ‌کس ندهید** و هیچ‌وقت داخل کد در گیت‌هاب نگذارید.

## قدم دوم: نصب کتابخانه

داخل یک محیط مجازی، محبوب‌ترین کتابخانه ربات تلگرام را نصب کنید:

```bash
pip install python-telegram-bot
```

## قدم سوم: رباتی که سلام می‌کند

فایل `bot.py` را بسازید:

```python
from telegram import Update
from telegram.ext import Application, CommandHandler, MessageHandler, filters, ContextTypes

TOKEN = "توکن-خودت-را-اینجا-بگذار"

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text("سلام! من اولین ربات توام 🤖")

async def echo(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text(f"گفتی: {update.message.text}")

app = Application.builder().token(TOKEN).build()
app.add_handler(CommandHandler("start", start))
app.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, echo))

print("ربات روشن شد...")
app.run_polling()
```

اجرا کنید:

```bash
python bot.py
```

حالا در تلگرام ربات خودتان را پیدا کنید و `/start` بفرستید — جواب می‌دهد! هر پیام متنی دیگری هم بفرستید، عین همان را برمی‌گرداند.

## کد را بفهمیم

- `CommandHandler("start", start)` — وقتی کاربر `/start` بفرستد، تابع `start` اجرا می‌شود
- `MessageHandler(filters.TEXT & ~filters.COMMAND, echo)` — هر پیام متنی (به جز دستورها) به تابع `echo` می‌رود
- `run_polling()` — ربات مدام از سرور تلگرام می‌پرسد «پیام جدیدی هست؟»

## قدم چهارم: یک قابلیت واقعی

بیایید دستور `/dollar` بسازیم که (فعلاً) یک عدد ثابت برگرداند:

```python
async def dollar(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text("دلار امروز: ۱۰۰,۵۰۰ تومان")

app.add_handler(CommandHandler("dollar", dollar))
```

قدم بعدی طبیعی؟ گرفتن قیمت واقعی از یک سایت — یعنی دقیقاً موضوع [آموزش وب‌اسکرپینگ با پایتون](/tutorials/web-scraping-python-beautifulsoup/).

## تمرین

دستور `/help` بسازید که لیست دستورهای ربات را نشان بدهد، و یک شرط به `echo` اضافه کنید که اگر کاربر «سلام» فرستاد، جواب خاصی بگیرد.
