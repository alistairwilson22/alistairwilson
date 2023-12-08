---
title: 'Seven Databases in Seven Weeks'
author: 'Luc Perkins'
date: '03-12-2023'
img: '/img/books/seven-databases.jpg'
tags:
  -  Postgres
  -  MonogoDB
---

**READING STILL IN PROGRESS**

I have a lot of love for the Seven x in Seven Weeks format. It can (and has for me) take more than a week to get through them unless you're really committing yourself to the schedule.

### Postgres

I've been using SQL database for a long time now, but the chapter on Postgres still had things to teach me I'd just not come across. Using "Views" with postgres as a way of caching data in a more retrievable manner is something I'm sure I'll use in the future. "Rules" are also something I'll use to set some behaviours in place when there are data updates, such as logging or reseting views. Postgres plugins I might use. Typically logic will be applied in the application rather than the database, but it's possible to add alot more logic and behaviours in the database than I was aware, and if the idea is to have a single source of truth which lots of applications down the line will need shared, applying logic on the database to derive this truth could save issues with calculations being made in multiple ways and mudding the data picture.