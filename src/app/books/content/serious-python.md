---
title: 'Serious Python'
author: 'Julien Danjou'
date: '03-01-2024'
img: '/img/books/serious-python.jpg'
tags:
  -  Python
---

I like this kind of book. It's short, written by someone with good knowledge of the subject and covers things I don't tend to work on much professionally but gives context when I do get on it. There's interviews at the end of each chapter providing an insight from different senior developers too.

Tips: 
  -  Use *flake8* to check code standards
  -  Take a deeper look into the Python Standard Library. Use that first if possible.  
  -  Use an API wrapper when using 3rd party tools... That's nice in theory but it's not going to happen for something like Pandas or really well maintained 3rd party libraries.
  -  Use *sphinx* for writting documentation that automatically pulls from the docstrings on your classes, functions and methods. There's extensions for it to work with other programming languages you might use on your project too.
  -  Add *pytest-xdist* then cli *pytest -n auto* to run python test on multiple CPUs
  -  Use *tox* to create a VM to run tests on, *Detox* runs venvs in parrellel
  -  Add in the decorators @staticmethod, @classmethod or @abstractmethod to enforce these kinds of classes
  -  Python does have good functional programming support, consider using *operator* and *itertools* over lambda functions
  -  Many devs use data structures without utilising their built in methods. Instead of using if/else or for loops check out if a data structure has a built in (more performant) way of doing the same thing.
  -  Instead of iterating over a list to find an item, compare 2 sets. That'll compare the objects entirely in an O(1) process instead of O(n)
  -  To optimise, use built in *cProfile* to assess how often functions are run and their running times. Combine with *pyprof2calltree* to help visualise.
  -  Consider named tuples over dictionaries to reduce memory.
  -  functools.lru_cache adds a memorization based on most recent values with max size. If there's lots of misses, it's not worth having though.


