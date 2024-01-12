---
title: 'Tidy First?'
author: 'Kent Beck'
date: '08-01-2024'
img: '/img/books/Tidy-First.jpg'
tags:
  -  Refactoring
  -  Best Practices
---

*Tidy First?* is a short and sweet book that packs a punch with a lot of good advice you can easily digest. It's an exploration into when it's right to tidy and when it's best to let it slide, and given most dev books favour heavily on tidying / refactoring while most practical requirements are to just ship it's refreshing to have a book that balances the two.

Here's his recommended Tidyings:
  -  *Guard statements* - add in the reasons not to do an action before the logic for the actioin
  -  *Extract constants* - Name a constant (especially for things like crons and set seconds, minutes, hours)
  -  *Extract helpers* - When you understand a function, break up the parts into smaller helper functions with names for what that part of the code is actually doing
  -  *Reorder code* - Try to make the page you're reading readable, what parts belong together
  
The idea here is the tidyings are small, so you can do parts without getting to deep into and going for a major refactor.

Why Tidy? It makes life easier for everyone and has a compounding effect improving the code long term.

