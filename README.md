BitBuilder
==========

An HTML5 game about exponential growths and the massive scales of digital information in today's world.

Active Work
===========
+ Laying out UI with JQuery and Raphaël JS; Overall style should be like an infographic, not so much a game; Crash Course is a great example of good layout and graphics (No textures, just polys, static curves)
  + Single-column width of 960 pixels
  + Animated logo in top left, with full-width game name, height ~120 pixels; changes per each "generation" (show that as a sub-line of text)
  + Right underneight should be a ticker-tape of text constantly passing by, slow like in Sim City, and can be silly
  + Right underweight that should be a 2/3 width graph of both your computation and memory capacity, with the right 1/3rd being type-set info text
	+ The right should be production per second, and total product / sales
    + This should gray out and play animations during major game events ("You've built enough memory for a library of congress, that's 100 books"), though it should be graphically oriented, not just the ticker tape
  + Under that you should have three buttons that are "Build X Computer", "Sell Computer at USD$", "Upgrades", upgrades opening up a list of purchasable upgrades (grays out what they are until you unlock the requirements)
    + At first, you can only build small computer parts, eventually building millions of processors and eventually matrix-style devices
	+ At first, you sell your computers at big prices, but then the volume increases and price decreases, though overall you make net more money
	+ Both become automatic over time, so mid-game you'll be building 100s of computers a second, and sell those super cheap but very quickly
  + Under these buttons, there is the row of factories you can buy, where each row has a single row of buy / sell buttons, showing the price and a graph of that price's change over time
    + We need to hide / blur out what the next factories are, but show their requirements (need at least 500 total chips produced, etc.)
  + Top-left of the ticker tape should have a save / load, subreddit, and help bar

Todo
====
+ Visuals:
  + Layout the page's basic graphics
  + Use the Raphaël JS lib for graphics & animation
  + Fade-out generators that can't yet be bought
  + Create icons for each generator (button icon, generator icon itself, and the animation effects)
  + Add the logarithmic memory-generation graphs center-top screen (and show the "perfect" graph), where x-axis is time, y-axis is bit-count
+ Gameplay:
  + Make formal goal: generate as much data as we currently do today, and then some more (Game ends when Singularity is reached)
  + Formalize generators: list of computing / memory hardware, components, or concepts
  + Allow save / reset
+ InfoFacts: (List of frames / animations to show as the game progresses)
  + Discuss mechanical computers, electro-mechanical, analog, digital, quantum, and biological
  + Discuss Turing / Turing-Machine facts (about computational complexity)
  + Discuss real-world memory examples (a floppy can hold ~ 1 MP3 song, while a DVD is ~ 1 movie, etc.)
  + Discuss Apollo program navigation computer (electro-mechanical)
  + Famous Computer Scientists: (Turing, Church, Knuth, etc.)
  + Discuss Knuth up-arrow notation for huge numbers
  + Conway's Game of Life
  + State machines
  + Discuss daily usage / modern company sizes (Google has huge databases, but even World of Warcraft has billions upon billions of recorded events)
  + BitCoin / BitMining currency

Author
======

Developed by Jeremy Bridon; (C) 2013 CoreS2 - Software Solutions. Learn more at www.cores2.com
