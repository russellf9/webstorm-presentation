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


### Tasks TODO

[ ] Get the debugger running
[ ] 


### App TODO
[ ] Fix Directive Live Template

