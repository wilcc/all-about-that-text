# All About That Text

### Introduction

We'll be making an app that's all about that text. We've been making event listener functions that take in input in two ways: what was clicked, and what's the current state of our app. For this project. the focus will be looking at what was clicked, _and_ what was typed into our input box.

Because we're all about that text, 'bout that text, no pictures.

Sorry about getting that stuck in your head!


### Tools We'll Learn, Practice, And Begin To Master

* Event listener functions.
* Reading strings from input boxes.
* String building and manipulation.
* Keeping our back end and front end separate.
* Function expressions.
* Creating, appending, and removing elements.


### Features Specifications

* The user can click on any of the five buttons and get the appropriate result printed on the screen. (Feel free to run `npm test` to see the functions needed for each button if you haven't already finished that back-end portion.)
* The result will be cleared and replaced by any further button clicks by the user.
* The input box will be cleared of text as soon as a button is pushed.


### Technical Guidelines

* Every function should be a function expression in the form:

```javascript
const add = function(x, y) {
  return x + y;
}
```

* The back end and front end should be separate files. Make sure they're linked in your html, and in the right order. The names we've picked out our `main.js` for your front-end code and `back-end.js` for the logic functions, but feel free to rename them.


### Tips

* You can move your file from your [Transmogrify](https://github.com/ci-wdi-900/transmogrify) solution straight to this repo, and name it `back-end.js`. If you name it something else, your `npm test` won't find it--unless you update the name of `back-end.test.js` to match.
* Remember that the text in the input box is in the html node's `.value`, NOT `.innerText`.
* And that it comes in as a string, never a number!
* You'll need to populate the `results` `ul` with `li`s that you make and give the appropriate text to.
* There are several different ways to clear the `ul` of its `li`s, but please do not simply cause the page to reload. _That's cheating_, and someday we'll make an app that would break if you do it, so... don't do it.
* The same goes for clearing the input box, but remember that you can change any property's value, not just read it!