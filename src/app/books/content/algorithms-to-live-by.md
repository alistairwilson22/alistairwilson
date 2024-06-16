---
title: 'Algorithms To Live By'
author: 'Brian Christian & Tom Griffiths'
date: '13-12-2022'
img: '/img/books/algorithms-to-live-by.jpg'
tags:
  -  Algorithms
  -  Data Structures
status: read
---

This has taken me awhile to read, because there's so much in it to unpack. There are a crazy amount of references in here and about 35% of the book is footnotes. The best thing, it approaches algorithms and modern data and computer science in a way I've not seen before.

This book is in a style of Malcolm Gladwell or *Freakonomics* in taking leading academic research and showing it's real-life applications. However unlike many similar social science books this looks at humanity through the lense of computer science.

I hope to take a good chunk of this book into later life.

## Optimal Stoppage

We typically stop too soon. In dating and hiring the optimal is to disregard the first 30%(ish) then hire the next person better than any who came before. But... that supposes our time isn't valuable. So if you know someone is in a top calibre without seeing more that's why people stop too soon and it may be evolutionarily better for us to stop early.

## Explore vs Exploit

There's trade off between explore and exploit. Human's apparently favour explore over exploit, although I find myself more in the exploit camp I tihnk. The way to work out whether it's better to explore or exploit depends on how long left you have. If you've ages to go, it's better to explore and seek to find that better option, but if you've not long left exploit is better. The book made a case that industries reflect their lifecycle about whether to explore or exploit, eg cinema is favouring sequels (exploit) so might be signaling it's end. TV however is in a golden age by which we mean there's alot of exploration going on.

## Sorting vs Searching

There's a trade off between sorting and searching. If you spend longer sorting it's easier to search. But for humans it's better to err on the side of messiness. EG should you organise your bookshelf alphabetically? It normally takes longer to sort that then to search it unmessily when you do actually need the book.

## Scheduling

There's a few different approaches to scheduling:
* Do what's due next
* Do what's fastest
* Do what's highest priority

Switching between jobs is called Thrashing and you can get overloaded keeping on switching. Another approach is a slightly weighted approach. Do what you're doing, make a slight calculation as new work comes in whether it's more or less important than what you're on, then continue as you were or switch.

## Caching

Most caches work on a basis of pushing off the stack the last worked on programme. So keep in memory the most recently worked on applications, and if you need something old again that'll just take abit longer to load. This is in favour of keeping the most popular all time applications in memory as what you're currently working on gives a better indication of what you'll *currently* need than what you *normally* need.


## Bayers Theorem

A rule of thumb for working out percentages. Take the observed instances, add one loss and divide the number of wins vs loses. EG if you see a horse win 3/4 races, the probability of the next case you can work off is 3/5.

## Networking

Internet originally followed telephone lines, but soon was moved off that model towards a *Packet* approach much more akin to Mailing services.

## Exponential Backoff

In networking a good way to ensure messages get through is to exponentially increase the delay to allow more time for signal. But this can work in other cases too, eg a relapsing offender. Instead of 3 strikes and you're out, you can exponentially back off. For each offence the delay between forgiveness and acceptance gets larger. This approach allows space for infinite intolerance and infinite mercy at the same time.

## Game Theory

Surprisingly good take on game theory. Game theory is a bigger concept than prisoner's dilemma, but the prisoners dilemma looms so large it's hard to tell the difference. Nash Equilibrium is the idea that for any game there's an equilibrium where the best possible move is know for each party and the rational thing is to do that thing. The only trouble is a) that equilibrium can be impossible or impractical to compute b) often the equilibrium is undesirable eg in the case of the prisoners dilemma or the tragedy of the commons. The good news is undesirable Nash Equilibrium can be fixed by adjusting the parameters of the game. If it's a more rational equilibrium to be altruistic, people will be. For example with climate change, that could be fixed by passing on the costs of negative externalities.
