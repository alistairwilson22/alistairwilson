---
title: 'Effective Typescript'
author: 'Dan Vanderkam'
date: '10-06-2024'
img: '/img/books/effective-typescript.jpg'
tags:
  -  Typescript
  -  Javascript
status: read
---

A like the concept behind the Effective book series, lots of little ideas that you can read and review and take on board the parts you like and dismiss the parts you don't. They're best read while you're working hands on with the language they're about although there I imagine some of the earliest ones in the series might be quite dated now.

Biggest takeaways from this book was:
  1.  Don't both litering your code with types. Definitely use types for function/method inputs and outputs, but an editor will infer the types of your general variables in a file.
  2.  Hover over an element in your IDE. The inferred type will be shown. This is especially useful when working with third party libraries, seeing the types on an imported variable is invaluable for reducing reliance on anys.

Other notes:
  -  Avoid anys
  -  Try to avoid duplication in types. You can extend types rather than completely copy and paste.
  -  Index signatures (eg Key: string: string) should be avoided as they let alot through (including typos in field names). They are useful if the content really is dynamic like CSV headers. 
  -  Typescript has a "readonly" option to maintain immutability. Best practice to use readonly unless you really do need mutability like with a third party library perhaps.
  -  Readonly<> (for objects) and readonly (for arrays) are shallow, the value can still be changed. You can use DeepReadonly from ts-essentials if you really want to force read only
  -  TS interpreter can be narrower with const than let. Switching to const can solve a host of TS interpreter related errors. TS interpreter deals better with objects fully formed than with objects that have properties added to incrementally in the code.
  -  Simple types test: create a const x: X[] = [...] fille the array with examples, compile and see the types errors
  -  Too much strings in types can be called "Stringly typed" (not strongly). Use alternatives to string to be more precise. Eg Date, enum, union types. Union types are generally better than enums!
  -  Generate types from API specs not just seen data. This helps cover unseen cases. If the API has a types package, use that.
  -  Add comments /** */ instead of // for jsdocs support. Add in @param and @returns for TS support to explain inputs and outputs. TS docs / jsdocs support mark down too. These docs show in IDEs when functions are used.
  -  Any is contagious and spreads throughout the code. Better to use //@ts-ignore if you really know better than TS to avoid that contagion.
  