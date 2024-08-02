---
title: 'Secret Life of Programs'
author: 'Jonathan E. Steinhart'
date: '03-04-2024'
img: '/img/books/secret-life-of-programs.jpg'
tags:
  -  Hardware
  -  Architecture
  -  Applications
---

I liked the introduction to this book, and there are little nuggets of knowledge peppered throughout that were unfamiliar to me.

Interesting bits:
  -  base64 often end with = or == because the encoding compresses 4 bytes down to 3, and the = is padding for the bytes left over
  -  colours RGB fit in 24 bits... but 24 isn't a binary number. So the extra bits to 32 are allocated to alpha transparency
  -  Why does it take longer to read from disk than ram? There's a rotational spin time (time it takes for the disk to spin to the right point) and a seek time. Disks are split into blocks. Blocks are the smallest chunks of data. To read/write you need the block first, read the whole block to find the bytes you need, then write to the whole block.
  -  coprocessors exist to do tasks and free up CPU. Lots of CPU is spent moving data from one place to another for performance. Some coprocessors JUST move data around and they're called DMAs (direct memory access)
