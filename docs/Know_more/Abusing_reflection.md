---
sidebar_position: 4
---

# Using reflection


## Abusing reflection

A word of warning that might be funny to you if you are a more experienced programmer than myself.

They say that when you have a hammer, everything looks like a nail. I find this to be particularly true when it comes to writing code. If you've just learnt about a nifty tool or pattern, you want to use it everywhere.

Reflection happens to be my most recently acquired hammer, as the analogy goes. I find that, lately, my first instinct when I run into any problem is to just hit it on the head with Reflection until it's solved. And [it'll happen to you](https://youtu.be/BGrfhsxxmdE?t=20), too.

I'm not saying "don't use Reflection!". Reflection is an incredibly flexible and powerful tool. Hell, it's the basis of the entire implementation of this plugin.

It also is a very disruptive tool that lets you ignore the design decisions of people who've written the libraries you are using (decisions that probably had a reason behind them), requires very verbose syntax that's nigh on unreadable, and squanders all the **many** benefits of having compile-time static typing (seriously, I don't know how you guys can live like that, Python people).

So, **do** learn how to use Reflection. It's a wonderfully powerful tool. But also remember that when you've just found a really good hammer is the moment when asking "is this really a nail?" becomes the most important.