#

The intention of this project to create a "Real World" project where the many features of IntelliJ/Webstorm can be demonstrated by "Live Coding" examples.
 
## Project Introduction

This project is using the very basic angular-seed as a base, there is no build process to distribute files to a build directory.


### Clone Webstorm Presentation

Clone the angular-seed repository using [git][git]:

```
git clone https://github.com/russellf9/webstorm-presentation.git
cd webstorm-presentation
```

### Install Dependencies

```
npm install
```

### Modify Webstorm Settings

TODO clarify

Add Gear setting  -> “Autoscroll from source"

### Add Webstorm Plugins

⌘, -> Search Plugins

See [IntelliJ IDEA Plugins](https://plugins.jetbrains.com)

* [AceJump](https://plugins.jetbrains.com/plugin/7086?pr=)
* [AngularJS](https://plugins.jetbrains.com/plugin/6971?pr=phpStorm)
* [Bootstrap3](https://github.com/bodiam/intellij-bootstrap3)
* [CamelCase](https://plugins.jetbrains.com/plugin/7160?pr=) - use ⇧ + ⌥ + U.
* [Github]
* [Terminal]

Simply select `browse repositories` and search for the items and select `install`


### Add templates

`Live templates` allow shortcuts to create code templates, I've created the following:

* [Directive](https://gist.github.com/russellf9/3fb4fbbf0a24ddcbdb58718126370bae)
* [Factory Service](https://gist.github.com/russellf9/8db3952620f11eff28c2af22c728b820)

1. Copy the raw code from the Gist
2. Select ⌘, -> Search for `Live Templates`
3. Find and slect the `Angular2` group
4. Select paste

The Directive can be created by entering `ngsd` and the Service can be created by entering `ngf` .

These are the templates we can use to build the project.

#### Other useful templates:

* `ngm` - A new angular module without a config function.



### Set up a JavaScript Debug Configuration


For Chrome Install the [JetBrains IDE Support](https://chrome.google.com/webstore/detail/jetbrains-ide-support/hmhgeddbohgjknpmjagkdomcpobmllji?hl=en)

Select `+` and "Add a new JavaScript Debug Config"

Set the following:

Name - Webstorm Presentation
URL - http://127.0.0.1:8000/


### Run the Application

```
npm start
```
A browser tab will open the app aat `http://localhost:8000/index.html`.


### Launch the Debug Configuration

Select ^D or press the green bug button

Now browse to the app at `http://127.0.0.1:8000/`

(This is the URL we need to view to test the app rather than the localhost URL.)


### Exercise Tasks TODO
[ ] Get the debugger running
[ ] 


### App TODO
[ ] Fix Directive Live Template
[X] Use modules


### Links

* [Tuning](https://www.jetbrains.com/help/webstorm/2016.2/tuning-webstorm.html#copy1)
* [Sharing Live Templates](https://www.jetbrains.com/help/webstorm/2016.1/sharing-live-templates.html)
* [PDF Cheatsheat](https://resources.jetbrains.com/asse ts/products/webstorm/WebStorm_ReferenceCard.pdf)
* [johnlindquist/ShortcutHero](https://github.com/johnlindquist/ShortcutHero)
* [WebStorm - Things You Probably Didn’t Know](https://www.youtube.com/watch?v=P3yGl4Kfwhs)
* [10 WebStorm Shortcuts You Need to Know](WebStorm - Things You Probably Didn’t Know)
* []()
* []()
* []()

