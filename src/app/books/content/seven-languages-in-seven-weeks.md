---
title: 'Seven Languages in Seven Weeks'
author: 'Bruce A. Tate'
date: '03-01-2024'
img: '/img/books/seven-languages.jpg'
tags:
  -  Ruby
  -  Io
  -  Prolog
---

**READING STILL IN PROGRESS**

I think it's a great book idea, and it's set in motion a series of Seven x in Seven Weeks which I'll eventually want to get through all of. Bruce A. Tate takes a look at seven different programming languages, none of which I've used professionally before. The programming languages come from different traditions so the idea of the book being more about learning what different programming langauges can teach us about how to approach problem solving. So rather than expect to be an expert, the idea is to see what we can learn from different approaches and perhaps that'll generally affect our daily coding experience and borrow from different traditions.

### Ruby

Ruby's had a huge influence on web development, although it's less seen these days. I've been aware of it but always wanted to stay away from it. I've gained a better appreciation of ruby from the book but I'm unlikely to use it unless I'm adapting a project that has it in place already. 

Ruby is a pure Object Orientated Programming language, which means even strings and numbers inherit an object. Ruby is able to be adapted heavily for each use case. You can change alot of the structure and add your own methods and properties to fundamental classes to make life easier developing for your particular context and environment. It was designed to make it easier for developers to write code, but has critics who complain it's slow to run.

### Io

Io was a surprise for me, I've really quite enjoyed developing with Io. It's a very simple language with not much to learn to get started. I really like the assignment operator of ":=" (taken from SmallTalk) instead of using "=" so that you can test equality with a "=" instead of confusing equality and assignment.

Like Ruby, Io allows you flexibity to change the fundamentals for a particular environment (Domain Specific Language). It's a prototype languauge (like Javascript), so every thing is a clone of a Type (or object) and inherits all of their properties and methods. It follows a convention where an object that starts with a Capital letter is treated as a class, when there's a lowercase it's treated as an implementation or object instead of a class.

IO has good concurrency features built in: co-routines, actors and futures.

### Prolog

I came to Prolog expecting it to be useful context for Ansible which is a declarative langauge. But it looks like Prolog might also have a decent use case for scheduling or coming up with possible variations on constrained resources. We can use Prolog to compute out problems with too many constraints to reasonably think through. One problem with Prolog is it'll provide an all or nothing approach, if it finds a possible viable schedule it'll give it, others you get a "no". But you could perhaps add in a few alternative constraints try the programme on all your preferred constraints and then relax the constraints one by one until you get a result.

It's good for solving logic puzzles and riddles, it can show up missed assumptions but also can give frustraiting or confusing results. 