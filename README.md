polymer-for-opera
=================

[![Analytics](https://ga-beacon.appspot.com/UA-24619548-7/polymer-for-opera/readme)](https://github.com/igrigorik/ga-beacon)

This is a demo of the Polymer Project modified to work with Opera browser

Isn't for production porpouses, I hope to inspire Polymer-Project developers from this changes
to add support for Opera browser versions earlier then blink migration.

**[DEMO](http://gartz.github.io/polymer-for-opera/)** (if you don't see Hello `browser name`,
something goes wrong)

How it works
------------

First I've added a bunch of shim to features used on Platform. They are hosted on `shim` folder.

Then I have hacked the **ShadowDOM** to work with Opera, because when you create elements not
registred in **Opera**, it uses the `HTMLElement` instead `HTMLUnknownElement`.

Then I must to hack the **HTMLImports**, addeding `isOpera` flag to check when loading style script,
because Opera don't trigger the `load` event equals IE.

At last, I need to fix the `Loader.js` in the **HTMLImports** to search for the right relative path
in the request files inside imported link scope. Because Opera doesn't use the `baseURI` to parse
their attributes with url.

How to install
--------------

See the `index.html` its a [DEMO](http://gartz.github.io/polymer-for-opera/).

After add the scripts in order to load `platform-dev` you must install using bower:

    bower install

If bower asks you to chose the repository reference, chose `polymer-for-opera` when asks for
**ShadowDOM** and **HTMLImports**

Now you are ready to go.