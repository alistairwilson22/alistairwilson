---
title: 'Clean Code'
author: 'Robert C. Martin'
date: '01-12-2022'
img: '/img/books/clean-code.jpg'
tags:
  -  Best Practices
  -  Java
status: reading
---

**READING STILL IN PROGRESS**

Another classic book held in high esteem in the developer community, and for good reason. *Clean Code* spends a long time talking about development best practices. The author starts by saying that some of his views might be controversial and we might disagree. I think most of it is fairly standard and not controversial, but I think there's some points he takes to a greater extreme than perhaps is practical.

Ideas:
  -  Names are important. We should refactor code to use variables and methods with names that clearly state what they do.
  -  Names can be long / verbose. It's better to give a descriptive than a cryptic name.
  -  Code should be organised like a newspaper, the high level ideas at the start with functions and classes flowing down in order of their importance to the functionality. The detail should be further down the bottom.
  -  Functions should be short. Shorter than that.
  -  The best number of parameters in a function is 0, the second best number is 1. (I think I might disagree on this one)
  -  Parameters are hard to understand.
  -  Classes should be short. Shorter than that.
  -  Classes should do one thing. You should be able to describe a class purpose. A class purpose like "Representing the user, and login and registrations" should be split at each of the "ands".
  -  Code should be shy. It shouldn't show it's inner workings. It shouldn't interact with many objects.
  -  Tell, don't ask. Objects should tell one another what they want, they shouldn't ask for variables and re-computer the object inner workings. Object computations should be done within their own methods, not as part of methods from other objects.
  -  Comments are a failure in writing clean code. If you have to rely on a comment, your code isn't readable enough and should be refactored (I think I disagree on this one too)
  -  Comments are often not updated and are duplication and a failure of "DRY", they can lie or be misleading whereas the code can't.