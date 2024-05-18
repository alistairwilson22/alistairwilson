---
title: 'Shell Scripting: How to Automate Command Line Tasks'
author: 'Jason Cannon'
date: '19-09-2023'
img: '/img/books/shell-scripting.jpg'
tags:
  -  Shell Scripting
  -  Linux
---

This is a very quick read, and it's not far off a long blog article on the topic, or a short online text only course with some questions/challenges. But I tend to skim read blogs, so having it in a book format helped me.

The author covers all the basics of Shell Scripting, creating files, adding variables, making functions, executing files.

I saw someone say it took them from no knowledge to comfortably shell scripting in just a weekend, it is about a 2 day read but I don't think it'll make you a master. It'll give you enough to go on and make your own experiments. What it is lacking from being short is examples of what you might want to use shell scripting for in the first place which is where a book like *Linux Basics for Hackers* or *Wicked Cool Shell Scripts* or something on hands on DevOps would take over. Good starter on the subject to dip your toe in the water though.

Alot of the book can be boiled down to this shell script template:    

    #!/bin/bash 
    # 
    # <Replace with the description and/ or purpose 
    # of this shell script.> 
    GLOBAL_VAR1 =" one" 
    GLOBAL_VAR2 =" two" 
    
    function function_one() {
      local LOCAL_VAR1 =" one"   
      # <Replace with function code.> 
    } 
       
    # Main body of the shell script starts here. 
    # 
    # <Replace with the main commands of your # shell script.> 
    # Exit with an explicit exit status. 
    exit 0
