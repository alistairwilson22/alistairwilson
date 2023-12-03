---
title: 'Words Rock'
creator: 'Alistair Wilson'
date: '23-10-2023'
img: '/img/books/Code-Hidden-Language.jpg'
tags:
  -  Laravel
  -  PHP
link: 'http://wordsrock.alistairwilson.co.uk'
github: 'https://github.com/alistairwilson22/laraWordsRock'
---

## What is it?

*Words Rock* is an educational game I made for my 7 year old girls. The project was heavily inspired by [Times Table Rock Stars (TTRocks)](https://ttrockstars.com/), a game they were given from school to help them learn times tables in a fun interactive way. The way TTRocks works is kids get coins for answering times tables, which they can use to buy clothes and backgrounds for an avatar. My girls have really taken to the game, and love the gamification elements and it's turned moans about maths into a game they really look forward to.

I wanted to create something similar for my girls to expand their English skills. My first attempt at that was with the *Story AI* project which I hoped would make reading more interesting by them taking control of the direction of the story. That didn't go down quite as well as I'd hoped, but Words Rock took a different approach and leaned more heavily into gamification and they do really enjoy this one and ask to play it.

*Words Rock* is a game where you can register yourself, then start playing a game. The game uses Text-To-Speech to sound out words which you then have to type correctly to get coins. The coins can be used to purchase pokemon from a pokedex which can be search. There's also a leadersboard where you can see lifetime coins awarded and your friend's pokemon.

## Core Features

- User registration
- Text-To-Speech spelling game
- Coins for correctly spelt words
- Pokedex to search and buy pokemon
- Own pokedex of purchased pokemon
- Leadersboard

## How was it made?  

This project was made using Laravel a hugely popular PHP framework. I picked Laravel because I was working on it at the time and wanted a personal project to explore different aspects and round out my learning on it. 

I used [wallpaperaccess](https://wallpaperaccess.com/) for the images and [Kaggle](https://www.kaggle.com) for the pokedex data and pokemon images.

## Takeaways  

I really enjoyed this project, it's one my kids have actually taken to and enjoy playing too.

It's not hard to see why Laravel is so popular, it's built with a view of making life easy for developers and there's alot of thought that's gone into each of the pre-packaged tools. Database migrations, seeding and fake content really help for getting protoypes up and running quickly. It's authentication process makes registration and logins a doddle to implement which takes significantly longer with a Javascript based web stack. Adding features to the application like a leadersboard and pokedex really didn't take long to implement either.

I feel like I came across a winning strategy here for me to learn a new framework:
1. Follow a crash course code along. For Laravel I found [Brad Traversy](https://www.youtube.com/watch?v=MYyJ4PuL4pY)  
2. Start reading a professional book on the framework. For Laravel I used *Laravel Up And Running*  
3. Work on a personal project while using the framework. For Laravel this was *Words Rock*
