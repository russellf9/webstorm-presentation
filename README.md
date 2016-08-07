# Webstorm Exercise

The intention of this project to create a "Real World" project where the many features of [IntelliJ/Webstorm](https://www.google.co.uk/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&ved=0ahUKEwivl5DfgK_OAhVMJcAKHZZLD-8QFggeMAA&url=https%3A%2F%2Fwww.jetbrains.com%2Fidea%2F&usg=AFQjCNGP2XB25TblfPvRvzMCuWNec_JiAg&sig2=AdysIOzR3j7atDRI247htA) can be demonstrated by "Live Coding" examples.

The three main intentions of of following the exercise are:

1. "Learn one IDE and learn it well", ( so there is no need to use the mouse! ) 
2. Stay focused on the one task in hand - (No context switching)
3. Use the debugger by default
 
## Project Introduction

This project is using the very basic [angular-seed](https://github.com/angular/angular-seed) as a base, there is no build process to distribute files to a build directory.

Using [Angular 1.5](https://angularjs.org)

Following the [Angular 1.x styleguide (ES2015)](https://github.com/toddmotto/angular-styleguide) as much as possible

It is using [Bootstrap 3](http://getbootstrap.com) as an HTML/CSS framework.


### Clone Webstorm Presentation

Clone the webstorm-presentation repository using [git][git]:

```
git clone https://github.com/russellf9/webstorm-presentation.git
cd webstorm-presentation
```

### Install Dependencies

```
npm install
```

### Learn Shortcuts

To avoid using the mouse it is essential to learn keyboard shortcuts, there seem to be hundreds of them for IntelliJ!

TODO add some basic shortcuts here...

**Tool Windows**
* `⌘ - 1` Project
* `⌘ - 2` Favourites
* `⌘ - 9` Version control
* `⌥ - F12` Terminal

* `⌘E` - recent files

* `⇧F12` - Hide other windows ( essential to stay focused on one file )

**Search within file** (using Ace)
(This process will move the insertion point)

`⌃;`, then enter a letter near the search item

Then, select the letter displayed to jump to it

`⌘↑` - Opens a mini navigation bar, use this to move around rather than going back to the Project view.


**Expanded Selection and Move
`⌥↑`  Enlarge Selection

`⌥↓`  Shrink Selection

Then move selection up
`⇧⌘↑`

or down
`⇧⌘↓`

**Clipboard** - way better than using simple Cut and Paste

Will store any number of items. Copy item (use the expand selection) then `⌘C` 

`⇧⌘ V` - Then select the number to paste item  


**Git**

1. Open Source Control - `⌘9`
1. Select the files or file to commit
1. `⌘K`
1. Use shift-tab to focus on the commit button and select
1. Push - `⇧⌘K`
1. Use shift-tab to focus on the push button and select



### Modify Webstorm Settings

TODO clarify

_(There is quite a set up here, the video from [WebStorm - Things You Probably Didn't Know](https://www.youtube.com/watch?v=P3yGl4Kfwhs) explains a lot)_

1. Add Gear setting  -> “Autoscroll from source"
2. One Tab

### Add Webstorm Plugins

There are numerous plugins for IntelliJ/Webstorm, each provides quicker ways to get the job done.
 
For this project there are a few essentials which have to be imported.

`⌘,` -> Search Plugins

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
2. Select `⌘,` -> Search for `Live Templates`
3. Find and select the `Angular2` group
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
A browser tab will open the app at `http://localhost:8000/index.html`.


### Launch the Debug Configuration

Select `^D` or press the green bug button

Now browse to the app at `http://127.0.0.1:8000/`

(This is the URL we need to view to test the app rather than the localhost URL.)


## Goals of the project

The plan is create list of random people and display then within the UI

### Tasks
* [ ] Get the debugger running
* [ ] Add a Service to get the Random People data


### App TODO
* [ ] Fix Directive Live Template
* [X] Use modules


### Links

* [Tuning](https://www.jetbrains.com/help/webstorm/2016.2/tuning-webstorm.html#copy1)
* [Sharing Live Templates](https://www.jetbrains.com/help/webstorm/2016.1/sharing-live-templates.html)
* [PDF Cheatsheat](https://resources.jetbrains.com/asse ts/products/webstorm/WebStorm_ReferenceCard.pdf)
* [johnlindquist/ShortcutHero](https://github.com/johnlindquist/ShortcutHero)
* [WebStorm - Things You Probably Didn't Know](https://www.youtube.com/watch?v=P3yGl4Kfwhs)
* [10 WebStorm Shortcuts You Need to Know](WebStorm - Things You Probably Didn’t Know)
* [Daring Fireball Markdown documentation](https://daringfireball.net/projects/markdown/)
* []()
* []()


### OSX Keys
⌘ ⇧ ⌥ ⌃ → ←  ↑ ↓⌫ Fn

