---
title: Installing Python on Windows — From Zero to First Run
description: Step-by-step guide to installing Python on Windows, enabling PATH, verifying the setup, and running your first program.
pubDate: 2026-07-18
tags: [Python, Tools]
---

If you want to start programming with Python, the first step is installing it correctly — and most of the problems beginners hit on day one (like the "python is not recognized" error) come from exactly this step. In this guide we install Python step by step and run a first program.

## Step 1: Download the right version

Go to the official site at [python.org/downloads](https://www.python.org/downloads/) and click the yellow **Download Python** button. Always download from the official site, not third-party mirrors — it is safer and always current.

## Step 2: The most important checkbox of your life

When the installer opens, look at the bottom of the window **before** clicking Install Now:

- Check **Add python.exe to PATH** ✅

This tells Windows to recognize the `python` command in any folder. Skip it, and the first thing you will see in a terminal is:

```text
'python' is not recognized as an internal or external command
```

If you already installed without it, the easiest fix is to run the installer again, choose **Modify**, and enable "Add Python to environment variables" under Advanced Options.

## Step 3: Verify the install

Open a terminal (press the Windows key, type `cmd`, press Enter) and run:

```bash
python --version
```

If you see something like this, the install worked:

```text
Python 3.13.1
```

`pip` (Python's package installer) is installed automatically too; confirm with:

```bash
pip --version
```

## Step 4: Your first program

Create a folder for your practice files, add a file named `hello.py`, and write:

```python
name = input("What's your name? ")
print(f"Hello {name}! Welcome to Python 🐍")
```

Then, in the terminal inside that folder:

```bash
python hello.py
```

The program asks your name and greets you — congratulations, you are now a Python programmer!

## Pro tip: use virtual environments from day one

As soon as you start installing packages, version conflicts appear. The golden habit is one virtual environment per project — I explain exactly how in [The Complete Guide to Python Virtual Environments](/en/tutorials/python-virtualenv-guide/).

## Exercise

Write a program that asks for a birth year and calculates the age. Hint: `input` always returns text; convert it with `int()`.

---

If you would rather follow a structured path with exercises and real projects, take a look at the [Python Course Package](/en/products/python-course/) — 20+ hours of lessons with 30+ exercises and 3 complete projects.
