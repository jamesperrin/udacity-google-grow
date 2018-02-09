[http://udacity.github.io/intro-to-jquery/](http://udacity.github.io/intro-to-jquery/)

[monitorEvents() Documentation](https://developers.google.com/web/tools/chrome-devtools/debug/command-line/events?hl=en#monitor-events)

Control or right-click element and select Inspect. In javaScript Console tab enter:

monitorEvents($0)

Now when you mouse over this element, focus or click it, the name of the fired event will be displayed with its data.

To stop getting this data just write this to console:

unmonitorEvents($0)

To open javaScript Console:

Chrome: go to View > Developer > JavaScript Console ([here’s a guide](https://developer.chrome.com/devtools/docs/console))

FireFox: go to Tools > Web Developer > Web Console ([here’s a guide](https://developer.mozilla.org/en-US/docs/Tools/Browser_Console))

IE11: go to Tools > Developer Tools > Console icon ([here’s a guide](http://msdn.microsoft.com/en-us/library/ie/bg182326(v=vs.85).aspx#The_Console_tool__CTRL___2_))

Safari: turn on the Develop menu: Preferences > Advanced > Show Develop menu in menu bar go to Develop > Show Web Inspector ([here’s a guide](https://developer.apple.com/library/mac/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/GettingStarted/GettingStarted.html))