---
title: 'Story AI'
creator: 'Alistair Wilson'
date: '12-09-2023'
img: '/img/lab/story-ai-start.png'
tags:
  -  React
  -  JavaScript
  -  ChatGPT
  -  AI
  -  Node
github: 'https://github.com/alistairwilson22/story-ai'
---

## What is it?

*Story AI* was a first attempt at making an educational game for my 7 year old girls to enjoy. The game works by creating some random story prompt suggestions from a list of animals and a list of names and a list of story topics. You can choose the story prompts, or write your own story prompt. The prompt goes to OpenAI to create a story based on the prompt and finish on a cliffhanger. You can then add a prompt for how the story should develop or ask for OpenAI to conclude the story.

## Core Features

- Random story prompts
- AI image generation
- AI story generation

## See it in action

| Story prompts      | Generated story | Continue or conclude |
:-------------:|:-------------:|:-----:
![alt story-prompts](/img/lab/story-ai-start.png)  |  ![alt generated-story](/img/lab/story-ai-story.png) | ![alt pokedex-search](/img/lab/story-ai-end.png)



## How was it made?  

I used React to make a simple Single Page Application (SPA). This connects to an OpenAI / ChatGPT API. OpenAI is used to create the story based on prompts and for image generation.

## Takeaways  

This wasn't quite as successful with my target audience as I'd hoped. I started off with each section being 1000 words, which was way too lnog for them. Turns out 500 was too long as well so I had to go way down to 100 words per prompt, and even then my girls just weren't that interested.

What they did love about this was the image generation. My girls just wanted to start new stories and see new images being made from the story suggestions. That was great and all, but the image generation cost more pennies than the text and I put a limit in my mind of only putting £5 in the AI meter and seeing how far that took us.

So alas, not much love for the create your own story way. I had fun making the project at least and with the image generation being a hit my kids were happy with my time on this too.

I would later have more success with an educational game for my kids with *Words Rock*