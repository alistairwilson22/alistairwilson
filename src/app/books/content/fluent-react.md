---
title: 'Fluent React'
author: 'Tejas Kumar'
date: '26-11-2023'
img: '/img/books/fluent-react.png'
tags:
  -  React
  -  Javascript
---

This is worthwhile reading for anyone who might be about to have an interview on React. I've tried to read a few books on how to code with React, but they're usually out of date or about coding problems I'm not that interested in so just doing some hands on projects has been better for me. I wouldn't mind more of a text book or an Efficent React style book to get hints and suggestions on things I might be missing... but haven't found that yet.

Anyway this book doesn't intend to tell you *how* to code with React, but more *why* to code with React. It covers how React was designed and built, but there are nuggets in there that can help you code better with React too.

The book starts with the history of Javascript frameworks and the problems React came along to help solve, as well as the inspiration it took from Backbone, Angular and the problems with jQuery. React has a one directional flow of data unlike othe frameworks which gave it a better grip on DOM manipulation.

It then explains how React uses a Virtual DOM and it's Fiber reconciler to batch changes to a application in a more performant way. React also prioritises changes so immediate user input and important DOM updating isn't blocked by less important background tasks.

It goes into more detail on useMemo (caching), useTransition (deprioritise updates) and useDifferedValue (show stale data for awhile). useMemo came up in an interview for me... sadly it was before I read this.