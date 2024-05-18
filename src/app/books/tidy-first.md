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

Why Tidy? It makes life easier for everyone and has a compounding effect improving the code long term. 80% of changes happen in 20% of code. So tidying has a business impact.

Some options with Tidying:
  - *Tidy Never* - Sometimes this is the right thing to do. If it's something that's live, working, and really doesn't need updating or modifying... it really is ok sometimes to just let it be doing it's thing in peace.
  - *Tidy Later* - Tidying would end up being a big time sink without a corresponding pay off. Clock it as something to maybe do in the future, maybe you will maybe you won't time will tell.
  - *Tidy After* - You work on a problem, in doing the work you understand the code better. Now you're in a better place to re-order things more logically to be how you wished you'd come across it first time round. Next time you or your co-worker works on it the scratching your head you had to do should be better resolved.
  - *Tidy First* - If there's an immediate pay off, you know what to tidy and how. Might need to keep the small tidys in check so it doesn't become a big job. Best to git push tidys and logic changes separately so it's easier to follow in revision history.

Make decisions as reversable as possible. We don't know the future so in the face of uncertainty the best thing you can do is give yourself more options. Software is much more valuable with the option for growth. Tidying helps to provide future options for growth.

