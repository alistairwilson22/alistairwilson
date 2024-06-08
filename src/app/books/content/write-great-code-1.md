---
title: 'Write Great Code: Volume 1'
author: 'Randall Hyde'
date: '18-12-2023'
img: '/img/books/write-great-code-1.jpg'
tags:
  -  Best Practices
  -  Assembly
---

**READING STILL IN PROGRESS**

I'm hopeful the *Write Great Code* series covers alot of topics not typically covered in modern computer science books, or at least going into alot more gory details. The aim of this book is to understand how computers are organised to help write more efficient code.

## Numeric representation

There's a neat trick in converting decimal into binary. Divide a number in 2 (cut off the floating point) and if it's odd add a 1, if even add a 0
EG 100 in decimal =
Number | Remainder
100 | 0
50 | 0
25 | 1
12(ignore the .5) | 0
6 | 0
3 | 1
1 | 1
So binary the binary version is 1100100
