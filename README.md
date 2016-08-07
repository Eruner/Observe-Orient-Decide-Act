##Observe Orient Decide Act
As the name is suggesting, it's a flow where you (or your AI) **observe** environment and gather raw data, then **orient** and categorize all inputs into meaningful information.  
Based on that you can make (high-level) **decisions** and strategies, which leads to **acting**, or executing of the chosen strategy.

Since there is no code template for OODA flow, I've decided to make one.  
This template can be used for deterministic AI bots, which I will show you later

###Basic Format
This source code contains OODA wrapper called `bot.js` which uses four modules:

1. `scout.js` - who can `observe();`
2. `reporter.js` - who can `orient();`
3. `general.js` - who can `decide();`
4. `enforcer.js` - who can `act();`

To run this sample, just open `index.html` in a web browser, press `F12`, go to Console, write `BOT.makeMove();` and that's it.

###Single JS File
All the previous code is merged into one JavaScript file, works same as Basic Format.

###RTS Bot Sample
Template for Real-Time Strategy AI bots - a step closer to creating an AI for a game, this sample more high-level details when coding any strategic AI, so you can better understand responsabilities of `Scout`, `Reporter`, `General` and `Enforcer` and start implementing functions for your prefered game.
