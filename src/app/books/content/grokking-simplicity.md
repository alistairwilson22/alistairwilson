---
title: 'Grokking Simplicity'
author: 'Eric Normand'
date: '21-12-2023'
img: '/img/books/grokking-simplicity.jpg'
tags:
  -  Functional Programming
---

*Grokking Simplicity* covers "Functional Thinking", which is how to approach programming from a Functional Programming (FP) perspective.

Separate and distinguish code based on:
  -  Actions (code that does something, eg send an email)
  -  Calculations (code that calculates or manipulates data)
  -  Data (a fact)

FP prefers Data to Calculations, and prefers Calculations to Actions

Actions are essential in code, but they are contagious. FP tries to minimise the amount of code that are actions. For example, always extract a planning stage separate to the execution phase. This is good for SRP and testability.

Find a calculation to extract from an action. Replace implicit inputs and outputs with explicit ones. Remove global variables with a parameter and local variables.

Replace body with callback - extract duplicate code in a function as a wrapper. eg withLogging(func()) can surround the function you're executing with a common try/catch error handling logic.

