---
title: 'Head First: Design Patterns'
author: 'Eric Freeman & Elisabeth Robson'
date: '10-06-2023'
img: '/img/books/Head-First-Design-Patterns.jpg'
tags:
  -  Java
  -  OOP
  -  Design Patterns
status: reading
---

**READING STILL IN PROGRESS**

I may have been abit snobbish about Head First series in my review of *Head First: Java*, I take it back for this one. Design Patterns can be confusing, so the discussion style and image heavy approach to explaining helps.

The thing I like most about this is how the Design Patterns are alikened to real word implementations. So when looking at the *Decorator Pattern* it describes how Java's I/O Library makes heavy use of Decorators to help get a grip on the library and the Decorator pattern at the same time.

Here's some notes for myself on the different design patterns:  
  -  **Strategy** - Composition over inheritance. Behaviours are defined in interfaces and the sub-classes implement the interface instead of directly inheriting from the parent class.  
  -  **Observer** - When there's a publisher (or subject) that needs to trigger updates on various observers, instead of adding a function in the subject for each observer that should be abstracted out into a subject class that stores a list of observers and a method to subscribe or unsubscribe to these updates. This follows the Open/Closed Principle.   
  -  **Decorator** - 
  -  **Factory Methods** & **Abstract Factories** - Both intend to follow Dependency Inversion Principle. Factory Method does this using inheritance. Abstract Factory uses object composition and often includes a factory method. Factory Method relies on inherited subclass to define the composition
  - **Singleton** - The highlander method (there can be only one). Examples include logging. Create using a private constructor and static method that calls the constructor. It's good to ensure constants aren't added twice and split use.
  
