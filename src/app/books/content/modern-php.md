---
title: "Modern PHP"
author: 'Josh Lockhart'
date: '10-03-2024'
img: '/img/books/modern-php.jpg'
tags:
  -  PHP
---

**READING IN PROGRESS**

It seems strange that a book on PHP that's over a decade old is called Modern PHP.

I was looking for a PHP book to see if there were some general tips and tricks to pick up, but found the resources are pretty slim picking. I wonder if that's the reason people think PHP is dead, because resources for PHP are all directed towards CMS or Laravel or perhaps Symfony. I wonder if with more training resources it would be more readily adopted.

It's quite interesting reading a tech book that's dated as a window into the era though. Composer was a big thing when the book was written, but pretty standard feature now. Some of the PHP features have more modern updates but some tips and tricks are still relevant.

Notes while reading:
  -  Generators allow you to iterate without storing the whole data in memory. 
  -  Traits are great. 
  -  Namespaces solve a host of historic problems.
  -  PHP has it's own (slow) built in web server. You can run it using the cli php -S localhost:4000
  -  Check out linting for php-psr standards eg phpcs (code sniffer)
  -  Sanitise input. Validate data. Escape output.
  -  Packagist and awesome php for component recommendations.